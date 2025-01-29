"use client"

import React from "react"

import { cx } from "@/lib/utils"

import { AreaChart, TooltipProps } from "../../atom/AreaChart"
import { Card } from "../../atom/Card"

interface DataItem {
  date: string
  revenue: number
}

const data: DataItem[] = [
  //array-start
  {
    date: "Jan 23",
    revenue: 2340,
  },
  {
    date: "Feb 23",
    revenue: 3110,
  },
  {
    date: "Mar 23",
    revenue: 4643,
  },
  {
    date: "Apr 23",
    revenue: 4650,
  },
  {
    date: "May 23",
    revenue: 3980,
  },
  {
    date: "Jun 23",
    revenue: 4702,
  },
  {
    date: "Jul 23",
    revenue: 5990,
  },
  {
    date: "Aug 23",
    revenue: 5700,
  },
  {
    date: "Sep 23",
    revenue: 4250,
  },
  {
    date: "Oct 23",
    revenue: 4182,
  },
  {
    date: "Nov 23",
    revenue: 3812,
  },
  {
    date: "Dec 23",
    revenue: 4900,
  },
  //array-end
]

const currencyFormatter = (number: number) =>
  `$${Intl.NumberFormat("us").format(number)}`

function formatChange(
  payload: any,
  percentageChange: number | undefined,
  absoluteChange: number | undefined,
) {
  if (!payload || percentageChange === undefined || isNaN(percentageChange)) {
    return "--"
  }

  const formattedPercentage = `${percentageChange > 0 ? "+" : ""}${percentageChange.toFixed(1)}%`
  const formattedAbsolute = `${absoluteChange! >= 0 ? "+" : "-"}${currencyFormatter(Math.abs(absoluteChange!))}`

  return `${formattedPercentage} (${formattedAbsolute})`
}

export default function Example() {
  const [datas, setDatas] = React.useState<TooltipProps | null>(null)

  const payload = datas?.payload?.[0]
  const value = payload?.value ?? 0

  const previousIndex = data.findIndex((e) => e["date"] === payload?.index)

  const previousValues = previousIndex > 0 ? data[previousIndex - 1] : undefined

  const prev =
    payload && previousValues
      ? (previousValues[payload.category as keyof DataItem] as number)
      : undefined

  const percentageChange =
    prev !== undefined ? ((value - prev) / prev) * 100 : undefined
  const absoluteChange = prev !== undefined ? value - prev : undefined

  const formattedValue = payload
    ? currencyFormatter(value)
    : currencyFormatter(data[0].revenue)

  return (
    <div className="obfuscate">
      <Card className="sm:mx-auto sm:max-w-lg">
        <p className="text-sm text-gray-500 dark:text-gray-500">
          Revenue by month
        </p>
        <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-gray-50">
          {formattedValue}
        </p>
        <p className="mt-1 flex items-baseline justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-500">
            On {payload ? `${payload.index}` : `${data[0].date}`}
          </span>
          <span
            className={cx(
              "rounded-md p-2 text-sm font-medium",
              formatChange(payload, percentageChange, absoluteChange) === "--"
                ? "text-gray-700 dark:text-gray-300"
                : payload && percentageChange! > 0
                  ? "text-emerald-700 dark:text-emerald-500"
                  : "text-red-700 dark:text-red-500",
            )}
          >
            {formatChange(payload, percentageChange, absoluteChange)}
          </span>
        </p>
        <AreaChart
          data={data}
          index="date"
          categories={["revenue"]}
          showLegend={false}
          showYAxis={false}
          startEndOnly={true}
          valueFormatter={currencyFormatter}
          fill="solid"
          className="-mb-2 mt-8 !h-48"
          tooltipCallback={(props) => {
            if (props.active) {
              setDatas((prev) => {
                if (prev?.label === props.label) return prev
                return props
              })
            } else {
              setDatas(null)
            }
            return null
          }}
        />
      </Card>
    </div>
  )
}
