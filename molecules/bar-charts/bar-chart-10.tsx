"use client"

import React from "react"
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react"
import {
  Bar,
  CartesianGrid,
  Label,
  BarChart as RechartsBarChart,
  Legend as RechartsLegend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { AxisDomain } from "recharts/types/util/types"

import {
  AvailableChartColors,
  AvailableChartColorsKeys,
  constructCategoryColors,
  getColorClassName,
  getYAxisDomain,
} from "@/lib/chartUtils"
import { useOnWindowResize } from "@/lib/useOnWindowResize"
import { cx } from "@/lib/utils"

import { Card } from "../../atoms/Card"

// Tremor BarChart [v0.2.0]

//#region Shape

function deepEqual<T>(obj1: T, obj2: T): boolean {
  if (obj1 === obj2) return true

  if (
    typeof obj1 !== "object" ||
    typeof obj2 !== "object" ||
    obj1 === null ||
    obj2 === null
  ) {
    return false
  }

  const keys1 = Object.keys(obj1) as Array<keyof T>
  const keys2 = Object.keys(obj2) as Array<keyof T>

  if (keys1.length !== keys2.length) return false

  for (const key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) return false
  }

  return true
}

const renderShape = (
  props: any,
  activeBar: any | undefined,
  activeLegend: string | undefined,
  strokeClass: string,
) => {
  const { name, payload, value } = props
  let { x, width, y, height } = props

  const lineY = y

  if (height < 0) {
    y += height
    height = Math.abs(height) // height must be a positive number
  }

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        opacity={
          activeBar || (activeLegend && activeLegend !== name)
            ? deepEqual(activeBar, { ...payload, value })
              ? 0.2
              : 0.1
            : 0.2
        }
      />
      <line
        x1={x}
        y1={lineY}
        x2={x + width}
        y2={lineY}
        stroke=""
        className={strokeClass}
        strokeWidth="2"
        opacity={
          activeBar || (activeLegend && activeLegend !== name)
            ? deepEqual(activeBar, { ...payload, value })
              ? 1
              : 0.5
            : 1
        }
      />
    </g>
  )
}

//#region Legend

interface LegendItemProps {
  name: string
  color: AvailableChartColorsKeys
  onClick?: (name: string, color: AvailableChartColorsKeys) => void
  activeLegend?: string
}

const LegendItem = ({
  name,
  color,
  onClick,
  activeLegend,
}: LegendItemProps) => {
  const hasOnValueChange = !!onClick
  return (
    <li
      className={cx(
        // base
        "group inline-flex flex-nowrap items-center gap-1.5 whitespace-nowrap rounded px-2 py-1 transition",
        hasOnValueChange
          ? "cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
          : "cursor-default",
      )}
      onClick={(e) => {
        e.stopPropagation()
        onClick?.(name, color)
      }}
    >
      <span
        className={cx(
          "size-2 shrink-0 rounded-sm",
          getColorClassName(color, "bg"),
          activeLegend && activeLegend !== name ? "opacity-40" : "opacity-100",
        )}
        aria-hidden={true}
      />
      <p
        className={cx(
          // base
          "truncate whitespace-nowrap text-xs",
          // text color
          "text-gray-700 dark:text-gray-300",
          hasOnValueChange &&
            "group-hover:text-gray-900 dark:group-hover:text-gray-50",
          activeLegend && activeLegend !== name ? "opacity-40" : "opacity-100",
        )}
      >
        {name}
      </p>
    </li>
  )
}

interface ScrollButtonProps {
  icon: React.ElementType
  onClick?: () => void
  disabled?: boolean
}

const ScrollButton = ({ icon, onClick, disabled }: ScrollButtonProps) => {
  const Icon = icon
  const [isPressed, setIsPressed] = React.useState(false)
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null)

  React.useEffect(() => {
    if (isPressed) {
      intervalRef.current = setInterval(() => {
        onClick?.()
      }, 300)
    } else {
      clearInterval(intervalRef.current as NodeJS.Timeout)
    }
    return () => clearInterval(intervalRef.current as NodeJS.Timeout)
  }, [isPressed, onClick])

  React.useEffect(() => {
    if (disabled) {
      clearInterval(intervalRef.current as NodeJS.Timeout)
      setIsPressed(false)
    }
  }, [disabled])

  return (
    <button
      type="button"
      className={cx(
        // base
        "group inline-flex size-5 items-center truncate rounded transition",
        disabled
          ? "cursor-not-allowed text-gray-400 dark:text-gray-600"
          : "cursor-pointer text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-50",
      )}
      disabled={disabled}
      onClick={(e) => {
        e.stopPropagation()
        onClick?.()
      }}
      onMouseDown={(e) => {
        e.stopPropagation()
        setIsPressed(true)
      }}
      onMouseUp={(e) => {
        e.stopPropagation()
        setIsPressed(false)
      }}
    >
      <Icon className="size-full" aria-hidden="true" />
    </button>
  )
}

interface LegendProps extends React.OlHTMLAttributes<HTMLOListElement> {
  categories: string[]
  colors?: AvailableChartColorsKeys[]
  onClickLegendItem?: (category: string, color: string) => void
  activeLegend?: string
  enableLegendSlider?: boolean
}

type HasScrollProps = {
  left: boolean
  right: boolean
}

const Legend = React.forwardRef<HTMLOListElement, LegendProps>((props, ref) => {
  const {
    categories,
    colors = AvailableChartColors,
    className,
    onClickLegendItem,
    activeLegend,
    enableLegendSlider = false,
    ...other
  } = props
  const scrollableRef = React.useRef<HTMLInputElement>(null)
  const scrollButtonsRef = React.useRef<HTMLDivElement>(null)
  const [hasScroll, setHasScroll] = React.useState<HasScrollProps | null>(null)
  const [isKeyDowned, setIsKeyDowned] = React.useState<string | null>(null)
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null)

  const checkScroll = React.useCallback(() => {
    const scrollable = scrollableRef?.current
    if (!scrollable) return

    const hasLeftScroll = scrollable.scrollLeft > 0
    const hasRightScroll =
      scrollable.scrollWidth - scrollable.clientWidth > scrollable.scrollLeft

    setHasScroll({ left: hasLeftScroll, right: hasRightScroll })
  }, [setHasScroll])

  const scrollToTest = React.useCallback(
    (direction: "left" | "right") => {
      const element = scrollableRef?.current
      const scrollButtons = scrollButtonsRef?.current
      const scrollButtonsWith = scrollButtons?.clientWidth ?? 0
      const width = element?.clientWidth ?? 0

      if (element && enableLegendSlider) {
        element.scrollTo({
          left:
            direction === "left"
              ? element.scrollLeft - width + scrollButtonsWith
              : element.scrollLeft + width - scrollButtonsWith,
          behavior: "smooth",
        })
        setTimeout(() => {
          checkScroll()
        }, 400)
      }
    },
    [enableLegendSlider, checkScroll],
  )

  React.useEffect(() => {
    const keyDownHandler = (key: string) => {
      if (key === "ArrowLeft") {
        scrollToTest("left")
      } else if (key === "ArrowRight") {
        scrollToTest("right")
      }
    }
    if (isKeyDowned) {
      keyDownHandler(isKeyDowned)
      intervalRef.current = setInterval(() => {
        keyDownHandler(isKeyDowned)
      }, 300)
    } else {
      clearInterval(intervalRef.current as NodeJS.Timeout)
    }
    return () => clearInterval(intervalRef.current as NodeJS.Timeout)
  }, [isKeyDowned, scrollToTest])

  const keyDown = (e: KeyboardEvent) => {
    e.stopPropagation()
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      e.preventDefault()
      setIsKeyDowned(e.key)
    }
  }
  const keyUp = (e: KeyboardEvent) => {
    e.stopPropagation()
    setIsKeyDowned(null)
  }

  React.useEffect(() => {
    const scrollable = scrollableRef?.current
    if (enableLegendSlider) {
      checkScroll()
      scrollable?.addEventListener("keydown", keyDown)
      scrollable?.addEventListener("keyup", keyUp)
    }

    return () => {
      scrollable?.removeEventListener("keydown", keyDown)
      scrollable?.removeEventListener("keyup", keyUp)
    }
  }, [checkScroll, enableLegendSlider])

  return (
    <ol
      ref={ref}
      className={cx("relative overflow-hidden", className)}
      {...other}
    >
      <div
        ref={scrollableRef}
        tabIndex={0}
        className={cx(
          "flex h-full",
          enableLegendSlider
            ? hasScroll?.right || hasScroll?.left
              ? "snap-mandatory items-center overflow-auto pl-4 pr-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              : ""
            : "flex-wrap",
        )}
      >
        {categories.map((category, index) => (
          <LegendItem
            key={`item-${index}`}
            name={category}
            color={colors[index] as AvailableChartColorsKeys}
            onClick={onClickLegendItem}
            activeLegend={activeLegend}
          />
        ))}
      </div>
      {enableLegendSlider && (hasScroll?.right || hasScroll?.left) ? (
        <>
          <div
            className={cx(
              // base
              "absolute bottom-0 right-0 top-0 flex h-full items-center justify-center pr-1",
              // background color
              "bg-white dark:bg-gray-950",
            )}
          >
            <ScrollButton
              icon={RiArrowLeftSLine}
              onClick={() => {
                setIsKeyDowned(null)
                scrollToTest("left")
              }}
              disabled={!hasScroll?.left}
            />
            <ScrollButton
              icon={RiArrowRightSLine}
              onClick={() => {
                setIsKeyDowned(null)
                scrollToTest("right")
              }}
              disabled={!hasScroll?.right}
            />
          </div>
        </>
      ) : null}
    </ol>
  )
})

Legend.displayName = "Legend"

const ChartLegend = (
  { payload }: any,
  categoryColors: Map<string, AvailableChartColorsKeys>,
  setLegendHeight: React.Dispatch<React.SetStateAction<number>>,
  activeLegend: string | undefined,
  onClick?: (category: string, color: string) => void,
  enableLegendSlider?: boolean,
  legendPosition?: "left" | "center" | "right",
  yAxisWidth?: number,
) => {
  const legendRef = React.useRef<HTMLDivElement>(null)

  useOnWindowResize(() => {
    const calculateHeight = (height: number | undefined) =>
      height ? Number(height) + 15 : 60
    setLegendHeight(calculateHeight(legendRef.current?.clientHeight))
  })

  const filteredPayload = payload.filter((item: any) => item.type !== "none")

  const paddingLeft =
    legendPosition === "left" && yAxisWidth ? yAxisWidth - 8 : 0

  return (
    <div
      style={{ paddingLeft: paddingLeft }}
      ref={legendRef}
      className={cx(
        "flex items-center",
        { "justify-center": legendPosition === "center" },
        {
          "justify-start": legendPosition === "left",
        },
        { "justify-end": legendPosition === "right" },
      )}
    >
      <Legend
        categories={filteredPayload.map((entry: any) => entry.value)}
        colors={filteredPayload.map((entry: any) =>
          categoryColors.get(entry.value),
        )}
        onClickLegendItem={onClick}
        activeLegend={activeLegend}
        enableLegendSlider={enableLegendSlider}
      />
    </div>
  )
}

//#region Tooltip

type TooltipProps = Pick<ChartTooltipProps, "active" | "payload" | "label">

type PayloadItem = {
  category: string
  value: number
  index: string
  color: AvailableChartColorsKeys
  type?: string
  payload: any
}

interface ChartTooltipProps {
  active: boolean | undefined
  payload: PayloadItem[]
  label: string
  valueFormatter: (value: number) => string
}

const ChartTooltip = ({
  active,
  payload,
  // label,
  valueFormatter,
}: ChartTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div
        className={cx(
          // base
          "rounded-md border text-sm shadow-md",
          // border color
          "border-gray-200 dark:border-gray-800",
          // background color
          "bg-white dark:bg-gray-950",
        )}
      >
        {/* unhide to show x-axis value, also uncomment label in line 465 */}

        {/* <div className={cx('border-b border-inherit px-4 py-2')}>
          <p
            className={cx(
              // base
              'font-medium',
              // text color
              'text-gray-900 dark:text-gray-50',
            )}
          >
            {label}
          </p>
        </div> */}

        <div className={cx("space-y-1 p-2")}>
          {payload.map(({ value, category, color }, index) => (
            <div
              key={`id-${index}`}
              className="flex items-center justify-between space-x-4"
            >
              <div className="flex items-center space-x-2">
                <span
                  aria-hidden="true"
                  className={cx(
                    "size-2.5 shrink-0 rounded-sm",
                    getColorClassName(color, "bg"),
                  )}
                />
                <p
                  className={cx(
                    // base
                    "whitespace-nowrap text-right",
                    // text color
                    "text-gray-700 dark:text-gray-300",
                  )}
                >
                  {category}
                </p>
              </div>
              <p
                className={cx(
                  // base
                  "whitespace-nowrap text-right font-medium tabular-nums",
                  // text color
                  "text-gray-900 dark:text-gray-50",
                )}
              >
                {valueFormatter(value)}
              </p>
            </div>
          ))}
        </div>
      </div>
    )
  }
  return null
}

//#region BarChart

type BaseEventProps = {
  eventType: "category" | "bar"
  categoryClicked: string
  [key: string]: number | string
}

type BarChartEventProps = BaseEventProps | null | undefined

interface BarChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: Record<string, any>[]
  index: string
  categories: string[]
  colors?: AvailableChartColorsKeys[]
  valueFormatter?: (value: number) => string
  startEndOnly?: boolean
  showXAxis?: boolean
  showYAxis?: boolean
  showGridLines?: boolean
  yAxisWidth?: number
  intervalType?: "preserveStartEnd" | "equidistantPreserveStart"
  showTooltip?: boolean
  showLegend?: boolean
  autoMinValue?: boolean
  minValue?: number
  maxValue?: number
  allowDecimals?: boolean
  onValueChange?: (value: BarChartEventProps) => void
  enableLegendSlider?: boolean
  tickGap?: number
  barCategoryGap?: string | number
  xAxisLabel?: string
  yAxisLabel?: string
  type?: "default" | "stacked" | "percent"
  legendPosition?: "left" | "center" | "right"
  tooltipCallback?: (tooltipCallbackContent: TooltipProps) => void
  customTooltip?: React.ComponentType<TooltipProps>
  syncId?: string
}

const BarChart = React.forwardRef<HTMLDivElement, BarChartProps>(
  (props, forwardedRef) => {
    const {
      data = [],
      categories = [],
      index,
      colors = AvailableChartColors,
      valueFormatter = (value: number) => value.toString(),
      startEndOnly = false,
      showXAxis = true,
      showYAxis = true,
      showGridLines = true,
      yAxisWidth = 56,
      intervalType = "equidistantPreserveStart",
      showTooltip = true,
      showLegend = true,
      autoMinValue = false,
      minValue,
      maxValue,
      allowDecimals = true,
      className,
      onValueChange,
      enableLegendSlider = false,
      barCategoryGap = "2%",
      tickGap = 5,
      xAxisLabel,
      yAxisLabel,
      type = "default",
      legendPosition = "right",
      tooltipCallback,
      customTooltip,
      syncId,
      ...other
    } = props
    const CustomTooltip = customTooltip
    const paddingValue =
      (!showXAxis && !showYAxis) || (startEndOnly && !showYAxis) ? 0 : 20
    const [legendHeight, setLegendHeight] = React.useState(60)
    const [activeLegend, setActiveLegend] = React.useState<string | undefined>(
      undefined,
    )
    const categoryColors = constructCategoryColors(categories, colors)
    const [activeBar, setActiveBar] = React.useState<any | undefined>(undefined)
    const yAxisDomain = getYAxisDomain(autoMinValue, minValue, maxValue)
    const hasOnValueChange = !!onValueChange
    const stacked = type === "stacked" || type === "percent"

    const prevActiveRef = React.useRef<boolean | undefined>(undefined)
    const prevLabelRef = React.useRef<string | undefined>(undefined)

    function valueToPercent(value: number) {
      return `${(value * 100).toFixed(0)}%`
    }

    function onBarClick(data: any, _: any, event: React.MouseEvent) {
      event.stopPropagation()
      if (!onValueChange) return
      if (deepEqual(activeBar, { ...data.payload, value: data.value })) {
        setActiveLegend(undefined)
        setActiveBar(undefined)
        onValueChange?.(null)
      } else {
        setActiveLegend(data.tooltipPayload?.[0]?.dataKey)
        setActiveBar({
          ...data.payload,
          value: data.value,
        })
        onValueChange?.({
          eventType: "bar",
          categoryClicked: data.tooltipPayload?.[0]?.dataKey,
          ...data.payload,
        })
      }
    }

    function onCategoryClick(dataKey: string) {
      if (!hasOnValueChange) return
      if (dataKey === activeLegend && !activeBar) {
        setActiveLegend(undefined)
        onValueChange?.(null)
      } else {
        setActiveLegend(dataKey)
        onValueChange?.({
          eventType: "category",
          categoryClicked: dataKey,
        })
      }
      setActiveBar(undefined)
    }

    return (
      <div
        ref={forwardedRef}
        className={cx("h-80 w-full", className)}
        {...other}
      >
        <ResponsiveContainer>
          <RechartsBarChart
            data={data}
            onClick={
              hasOnValueChange && (activeLegend || activeBar)
                ? () => {
                    setActiveBar(undefined)
                    setActiveLegend(undefined)
                    onValueChange?.(null)
                  }
                : undefined
            }
            margin={{
              bottom: xAxisLabel ? 30 : undefined,
              left: yAxisLabel ? 20 : undefined,
              right: yAxisLabel ? 5 : undefined,
              top: 5,
            }}
            stackOffset={type === "percent" ? "expand" : undefined}
            layout="horizontal"
            barCategoryGap={barCategoryGap}
            syncId={syncId}
          >
            {showGridLines ? (
              <CartesianGrid
                className={cx("stroke-gray-200 stroke-1 dark:stroke-gray-800")}
                horizontal={true}
                vertical={false}
              />
            ) : null}
            <XAxis
              hide={!showXAxis}
              tick={{
                transform: "translate(0, 6)",
              }}
              fill=""
              stroke=""
              className={cx(
                // base
                "text-xs",
                // text fill
                "mt-4 fill-gray-500 dark:fill-gray-500",
              )}
              tickLine={false}
              axisLine={false}
              minTickGap={tickGap}
              {...{
                padding: {
                  left: paddingValue,
                  right: paddingValue,
                },
                dataKey: index,
                interval: startEndOnly ? "preserveStartEnd" : intervalType,
                ticks: startEndOnly
                  ? [data[0][index], data[data.length - 1][index]]
                  : undefined,
              }}
            >
              {xAxisLabel && (
                <Label
                  position="insideBottom"
                  offset={-20}
                  className="fill-gray-800 text-sm font-medium dark:fill-gray-200"
                >
                  {xAxisLabel}
                </Label>
              )}
            </XAxis>
            <YAxis
              width={yAxisWidth}
              hide={!showYAxis}
              axisLine={false}
              tickLine={false}
              fill=""
              stroke=""
              className={cx(
                // base
                "text-xs",
                // text fill
                "fill-gray-500 dark:fill-gray-500",
              )}
              tick={{
                transform: "translate(-3, 0)",
              }}
              {...{
                type: "number",
                domain: yAxisDomain as AxisDomain,
                tickFormatter:
                  type === "percent" ? valueToPercent : valueFormatter,
                allowDecimals: allowDecimals,
              }}
            >
              {yAxisLabel && (
                <Label
                  position="insideLeft"
                  style={{ textAnchor: "middle" }}
                  angle={-90}
                  offset={-15}
                  className="fill-gray-800 text-sm font-medium dark:fill-gray-200"
                >
                  {yAxisLabel}
                </Label>
              )}
            </YAxis>
            <Tooltip
              wrapperStyle={{ outline: "none" }}
              isAnimationActive={true}
              animationDuration={100}
              cursor={{ fill: "#d1d5db", opacity: "0.15" }}
              offset={20}
              position={{
                y: 0,
              }}
              content={({ active, payload, label }) => {
                const cleanPayload: TooltipProps["payload"] = payload
                  ? payload.map((item: any) => ({
                      category: item.dataKey,
                      value: item.value,
                      index: item.payload[index],
                      color: categoryColors.get(
                        item.dataKey,
                      ) as AvailableChartColorsKeys,
                      type: item.type,
                      payload: item.payload,
                    }))
                  : []

                if (
                  tooltipCallback &&
                  (active !== prevActiveRef.current ||
                    label !== prevLabelRef.current)
                ) {
                  tooltipCallback({ active, payload: cleanPayload, label })
                  prevActiveRef.current = active
                  prevLabelRef.current = label
                }

                return showTooltip && active ? (
                  CustomTooltip ? (
                    <CustomTooltip
                      active={active}
                      payload={cleanPayload}
                      label={label}
                    />
                  ) : (
                    <ChartTooltip
                      active={active}
                      payload={cleanPayload}
                      label={label}
                      valueFormatter={valueFormatter}
                    />
                  )
                ) : null
              }}
            />
            {showLegend ? (
              <RechartsLegend
                verticalAlign="top"
                height={legendHeight}
                content={({ payload }) =>
                  ChartLegend(
                    { payload },
                    categoryColors,
                    setLegendHeight,
                    activeLegend,
                    hasOnValueChange
                      ? (clickedLegendItem: string) =>
                          onCategoryClick(clickedLegendItem)
                      : undefined,
                    enableLegendSlider,
                    legendPosition,
                    yAxisWidth,
                  )
                }
              />
            ) : null}
            {categories.map((category) => (
              <Bar
                className={cx(
                  getColorClassName(
                    categoryColors.get(category) as AvailableChartColorsKeys,
                    "fill",
                  ),
                  onValueChange ? "cursor-pointer" : "",
                )}
                key={category}
                name={category}
                type="linear"
                dataKey={category}
                stackId={stacked ? "stack" : undefined}
                isAnimationActive={false}
                fill=""
                shape={(props: any) => {
                  const strokeClass = getColorClassName(
                    categoryColors.get(category) as AvailableChartColorsKeys,
                    "stroke",
                  )
                  return renderShape(
                    props,
                    activeBar,
                    activeLegend,
                    strokeClass,
                  )
                }}
                onClick={onBarClick}
              />
            ))}
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
    )
  },
)

BarChart.displayName = "BarChart"

const pageViews = [
  //array-start
  { date: "01", "Page Views": 1540 },
  { date: "02", "Page Views": 1600 },
  { date: "03", "Page Views": 1100 },
  { date: "04", "Page Views": 1250 },
  { date: "05", "Page Views": 1300 },
  { date: "06", "Page Views": 1200 },
  { date: "07", "Page Views": 0 },
  { date: "08", "Page Views": 0 },
  { date: "09", "Page Views": 0 },
  { date: "10", "Page Views": 1500 },
  { date: "11", "Page Views": 1600 },
  { date: "12", "Page Views": 900 },
  { date: "13", "Page Views": 2000 },
  { date: "14", "Page Views": 1800 },
  { date: "15", "Page Views": 1700 },
  { date: "16", "Page Views": 1800 },
  { date: "17", "Page Views": 2200 },
  { date: "18", "Page Views": 2100 },
  { date: "19", "Page Views": 1200 },
  { date: "20", "Page Views": 2400 },
  { date: "21", "Page Views": 2500 },
  { date: "22", "Page Views": 2600 },
  { date: "23", "Page Views": 2000 },
  { date: "24", "Page Views": 1400 },
  { date: "25", "Page Views": 1900 },
  { date: "26", "Page Views": 1000 },
  { date: "27", "Page Views": 2100 },
  { date: "28", "Page Views": 2300 },
  { date: "29", "Page Views": 1500 },
  { date: "30", "Page Views": 1700 },
  //array-end
]

const uniqueVisitors = [
  //array-start
  { date: "01", "Unique Visitors": 1120 },
  { date: "02", "Unique Visitors": 1200 },
  { date: "03", "Unique Visitors": 600 },
  { date: "04", "Unique Visitors": 1050 },
  { date: "05", "Unique Visitors": 900 },
  { date: "06", "Unique Visitors": 1000 },
  { date: "07", "Unique Visitors": 0 },
  { date: "08", "Unique Visitors": 0 },
  { date: "09", "Unique Visitors": 0 },
  { date: "10", "Unique Visitors": 1300 },
  { date: "11", "Unique Visitors": 1200 },
  { date: "12", "Unique Visitors": 800 },
  { date: "13", "Unique Visitors": 1500 },
  { date: "14", "Unique Visitors": 1400 },
  { date: "15", "Unique Visitors": 1300 },
  { date: "16", "Unique Visitors": 1400 },
  { date: "17", "Unique Visitors": 1700 },
  { date: "18", "Unique Visitors": 1500 },
  { date: "19", "Unique Visitors": 1000 },
  { date: "20", "Unique Visitors": 1800 },
  { date: "21", "Unique Visitors": 1600 },
  { date: "22", "Unique Visitors": 1700 },
  { date: "23", "Unique Visitors": 1400 },
  { date: "24", "Unique Visitors": 1100 },
  { date: "25", "Unique Visitors": 1200 },
  { date: "26", "Unique Visitors": 800 },
  { date: "27", "Unique Visitors": 1500 },
  { date: "28", "Unique Visitors": 1600 },
  { date: "29", "Unique Visitors": 1300 },
  { date: "30", "Unique Visitors": 1400 },
  //array-end
]

const bounceRate = [
  //array-start
  { date: "01", "Bounce Rate": 0.55 },
  { date: "02", "Bounce Rate": 0.52 },
  { date: "03", "Bounce Rate": 0.65 },
  { date: "04", "Bounce Rate": 0.6 },
  { date: "05", "Bounce Rate": 0.5 },
  { date: "06", "Bounce Rate": 0.48 },
  { date: "07", "Bounce Rate": 0 },
  { date: "08", "Bounce Rate": 0 },
  { date: "09", "Bounce Rate": 0 },
  { date: "10", "Bounce Rate": 0.58 },
  { date: "11", "Bounce Rate": 0.6 },
  { date: "12", "Bounce Rate": 0.72 },
  { date: "13", "Bounce Rate": 0.45 },
  { date: "14", "Bounce Rate": 0.48 },
  { date: "15", "Bounce Rate": 0.5 },
  { date: "16", "Bounce Rate": 0.47 },
  { date: "17", "Bounce Rate": 0.44 },
  { date: "18", "Bounce Rate": 0.52 },
  { date: "19", "Bounce Rate": 0.68 },
  { date: "20", "Bounce Rate": 0.41 },
  { date: "21", "Bounce Rate": 0.38 },
  { date: "22", "Bounce Rate": 0.4 },
  { date: "23", "Bounce Rate": 0.43 },
  { date: "24", "Bounce Rate": 0.49 },
  { date: "25", "Bounce Rate": 0.55 },
  { date: "26", "Bounce Rate": 0.7 },
  { date: "27", "Bounce Rate": 0.46 },
  { date: "28", "Bounce Rate": 0.42 },
  { date: "29", "Bounce Rate": 0.6 },
  { date: "30", "Bounce Rate": 0.45 },
  //array-end
]

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`

export default function Example() {
  return (
    <Card className="mx-auto flex max-w-4xl flex-col gap-6">
      <div>
        <h1 className="text-sm text-gray-600 dark:text-gray-400">Page Views</h1>
        <p className="text-2xl font-semibold text-blue-500 dark:text-blue-500">
          433
        </p>
        <BarChart
          syncId="sync"
          data={pageViews}
          index="date"
          categories={["Page Views"]}
          showLegend={false}
          colors={["blue"]}
          showYAxis={false}
          showGridLines={false}
          valueFormatter={valueFormatter}
          className="mt-2 !h-36"
        />
      </div>
      <div>
        <h1 className="text-sm text-gray-600 dark:text-gray-400">
          Unique Visitors
        </h1>
        <p className="text-2xl font-semibold text-violet-500 dark:text-violet-500">
          234
        </p>
        <BarChart
          syncId="sync"
          data={uniqueVisitors}
          index="date"
          categories={["Unique Visitors"]}
          showLegend={false}
          colors={["violet"]}
          showYAxis={false}
          showGridLines={false}
          valueFormatter={valueFormatter}
          className="mt-2 !h-36"
        />
      </div>
      <div>
        <h1 className="text-sm text-gray-600 dark:text-gray-400">
          Bounce Rate
        </h1>
        <p className="text-2xl font-semibold text-fuchsia-500 dark:text-fuchsia-500">
          584
        </p>
        <BarChart
          syncId="sync"
          data={bounceRate}
          index="date"
          categories={["Bounce Rate"]}
          showLegend={false}
          colors={["fuchsia"]}
          showYAxis={false}
          showGridLines={false}
          valueFormatter={valueFormatter}
          className="mt-2 !h-36"
        />
      </div>
    </Card>
  )
}
