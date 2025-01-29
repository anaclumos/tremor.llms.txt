import React from "react"
import {
  RiAddLine,
  RiArrowDownSLine,
  RiCornerDownRightLine,
} from "@remixicon/react"

import { cx, focusRing } from "@/lib/utils"

import { Button } from "@/atom/Button"
import { Input } from "@/atom/Input"
import { Label } from "@/atom/Label"
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/atom/Popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/atom/Select"

type ConditionFilter = {
  condition: string
  value: [string, string]
}

interface DataTableFilterProps {
  column: any
  title?: string
  options?: {
    label: string
    value: string
  }[]
  formatter?: (value: any) => string
}

const ColumnFiltersLabel = ({
  columnFilterLabels,
  className,
}: {
  columnFilterLabels: string[] | undefined
  className?: string
}) => {
  if (!columnFilterLabels) return null

  if (columnFilterLabels.length < 3) {
    return (
      <span className={cx("truncate", className)}>
        {columnFilterLabels.map((value, index) => (
          <span
            key={value}
            className={cx("font-semibold text-blue-600 dark:text-blue-400")}
          >
            {value}
            {index < columnFilterLabels.length - 1 && ", "}
          </span>
        ))}
      </span>
    )
  }

  return (
    <>
      <span
        className={cx(
          "font-semibold text-blue-600 dark:text-blue-400",
          className,
        )}
      >
        {columnFilterLabels[0]} and {columnFilterLabels.length - 1} more
      </span>
    </>
  )
}

export function DataTableFilter({
  column,
  title,
  options,
  formatter = (value) => value.toString(),
}: DataTableFilterProps) {
  const columnFilters = column?.getFilterValue() as ConditionFilter | undefined

  const [selectedValues, setSelectedValues] = React.useState<
    ConditionFilter | undefined
  >(columnFilters)

  const columnFilterLabels = React.useMemo(() => {
    if (!selectedValues) return undefined

    const condition = options?.find(
      (option) => option.value === selectedValues.condition,
    )?.label
    if (!condition) return undefined
    if (!selectedValues.value[0] && !selectedValues.value[1])
      return [`${condition}`]
    if (!selectedValues.value[1])
      return [`${condition} ${formatter(selectedValues.value[0])}`]
    return [
      `${condition} ${formatter(selectedValues.value[0])} and ${formatter(
        selectedValues.value[1],
      )}`,
    ]
  }, [selectedValues, options, formatter])

  const isBetween = selectedValues?.condition === "is-between"

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className={cx(
            "flex w-full items-center gap-x-1.5 rounded-md border border-gray-300 px-2 py-1.5 font-medium whitespace-nowrap text-gray-600 hover:bg-gray-50 sm:w-fit sm:text-xs dark:border-gray-700 dark:text-gray-400 hover:dark:bg-gray-900",
            selectedValues?.condition ? "" : "border-dashed",
            focusRing,
          )}
        >
          <span
            aria-hidden="true"
            onClick={(e) => {
              if (selectedValues) {
                e.stopPropagation()
                column?.setFilterValue(undefined)
                setSelectedValues(undefined)
              }
            }}
          >
            <RiAddLine
              className={cx(
                "-ml-px size-5 shrink-0 transition sm:size-4",
                selectedValues && "rotate-45 hover:text-red-500",
              )}
              aria-hidden="true"
            />
          </span>
          {columnFilterLabels && columnFilterLabels.length > 0 ? (
            <span>{title}</span>
          ) : (
            <span className="w-full text-left sm:w-fit">{title}</span>
          )}
          {columnFilterLabels && columnFilterLabels.length > 0 && (
            <span
              className="h-4 w-px bg-gray-300 dark:bg-gray-700"
              aria-hidden="true"
            />
          )}
          <ColumnFiltersLabel
            columnFilterLabels={columnFilterLabels}
            className="w-full text-left sm:w-fit"
          />
          <RiArrowDownSLine
            className="size-5 shrink-0 text-gray-500 sm:size-4"
            aria-hidden="true"
          />
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        sideOffset={7}
        className="max-w-[calc(var(--radix-popover-trigger-width))] min-w-[calc(var(--radix-popover-trigger-width))] sm:max-w-56 sm:min-w-56"
        onInteractOutside={() => {
          if (!columnFilters || columnFilters.condition === "") {
            column?.setFilterValue(undefined)
            setSelectedValues(undefined)
          }
        }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault()
            column?.setFilterValue(selectedValues)
          }}
        >
          <div className="space-y-2">
            <div>
              <Label className="text-base font-medium sm:text-sm">
                Filter by {title}
              </Label>
              <div className="space-y-2">
                <Select
                  value={selectedValues?.condition}
                  onValueChange={(value) => {
                    setSelectedValues((prev) => ({
                      condition: value,
                      value: [value !== "" ? prev?.value[0] || "" : "", ""],
                    }))
                  }}
                >
                  <SelectTrigger className="mt-2 sm:py-1">
                    <SelectValue placeholder="Select condition" />
                  </SelectTrigger>
                  <SelectContent>
                    {options?.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <div className="flex w-full items-center gap-2">
                  <RiCornerDownRightLine
                    className="size-4 shrink-0 text-gray-500"
                    aria-hidden="true"
                  />
                  <Input
                    disabled={!selectedValues?.condition}
                    type="number"
                    placeholder="$0"
                    className="sm:[&>input]:py-1"
                    value={selectedValues?.value[0]}
                    onChange={(e) => {
                      setSelectedValues((prev) => ({
                        condition: prev?.condition || "",
                        value: [
                          e.target.value,
                          isBetween ? prev?.value[1] || "" : "",
                        ],
                      }))
                    }}
                  />
                  {isBetween && (
                    <>
                      <span className="text-xs font-medium text-gray-500">
                        and
                      </span>
                      <Input
                        disabled={!selectedValues?.condition}
                        type="number"
                        placeholder="$0"
                        className="sm:[&>input]:py-1"
                        value={selectedValues?.value[1]}
                        onChange={(e) => {
                          setSelectedValues((prev) => ({
                            condition: prev?.condition || "",
                            value: [prev?.value[0] || "", e.target.value],
                          }))
                        }}
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
            <PopoverClose className="w-full" asChild>
              <Button type="submit" className="w-full sm:py-1">
                Apply
              </Button>
            </PopoverClose>
            {columnFilterLabels && columnFilterLabels.length > 0 && (
              <Button
                variant="secondary"
                className="w-full sm:py-1"
                type="button"
                onClick={() => {
                  column?.setFilterValue(undefined)
                  setSelectedValues(undefined)
                }}
              >
                Reset
              </Button>
            )}
          </div>
        </form>
      </PopoverContent>
    </Popover>
  )
}

const salaryOptions = [
  { label: "Greater than", value: "greater-than" },
  { label: "Less than", value: "less-than" },
  { label: "Equal to", value: "equal-to" },
  { label: "Between", value: "is-between" },
]

const NumberFilterExample = () => {
  const [salaryFilter, setSalaryFilter] = React.useState<
    ConditionFilter | undefined
  >(undefined)

  const salaryColumn = {
    getFilterValue: () => salaryFilter,
    setFilterValue: (value: ConditionFilter | undefined) => {
      setSalaryFilter(value)
    },
  }

  return (
    <div className="obfuscate">
      <div className="relative">
        <div className="rounded-lg border border-gray-200 bg-white pb-20 shadow-sm md:h-52 dark:border-gray-800 dark:bg-gray-950">
          <div className="border-b border-gray-200 p-4 dark:border-gray-800">
            <DataTableFilter
              column={salaryColumn}
              title="Salary"
              options={salaryOptions}
              formatter={(value) => `$${value}`}
            />
          </div>
          {/* gradient for demo purpose */}
          <div className="absolute inset-x-0 bottom-0 -mb-1 h-14 rounded-b-lg bg-gradient-to-t from-white via-white to-transparent dark:from-gray-950 dark:via-gray-950 dark:to-transparent" />
        </div>
      </div>
    </div>
  )
}

export default NumberFilterExample
