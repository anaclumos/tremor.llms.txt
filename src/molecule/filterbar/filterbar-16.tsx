import React from "react"
import { RiAddLine, RiArrowDownSLine } from "@remixicon/react"

import { cx, focusRing } from "@/lib/utils"

import { Button } from "@/atom/Button"
import { Checkbox } from "@/atom/Checkbox"
import { Label } from "@/atom/Label"
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/atom/Popover"

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
  const columnFilters = column?.getFilterValue() as string[] | undefined

  const [selectedValues, setSelectedValues] = React.useState<string[]>(
    columnFilters || [],
  )

  const columnFilterLabels = React.useMemo(() => {
    if (!selectedValues || selectedValues.length === 0) return undefined
    return selectedValues.map(formatter)
  }, [selectedValues, formatter])

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className={cx(
            "flex w-full items-center gap-x-1.5 rounded-md border border-gray-300 px-2 py-1.5 font-medium whitespace-nowrap text-gray-600 hover:bg-gray-50 sm:w-fit sm:text-xs dark:border-gray-700 dark:text-gray-400 hover:dark:bg-gray-900",
            selectedValues.length > 0 ? "" : "border-dashed",
            focusRing,
          )}
        >
          <span
            aria-hidden="true"
            onClick={(e) => {
              if (selectedValues.length > 0) {
                e.stopPropagation()
                column?.setFilterValue([])
                setSelectedValues([])
              }
            }}
          >
            <RiAddLine
              className={cx(
                "-ml-px size-5 shrink-0 transition sm:size-4",
                selectedValues.length > 0 && "rotate-45 hover:text-red-500",
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
          if (columnFilters?.length === 0) {
            column?.setFilterValue([])
            setSelectedValues([])
          }
        }}
      >
        <form
          className="overflow-visible"
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
              <div className="mt-2 space-y-2 overflow-x-visible overflow-y-auto py-0.5 pl-1 sm:max-h-36">
                {options?.map((option) => (
                  <div key={option.value} className="flex items-center gap-2">
                    <Checkbox
                      id={option.value}
                      checked={selectedValues.includes(option.value)}
                      onCheckedChange={(checked) => {
                        setSelectedValues((prev) => {
                          if (checked) {
                            return [...prev, option.value]
                          } else {
                            return prev.filter(
                              (value) => value !== option.value,
                            )
                          }
                        })
                      }}
                    />
                    <Label
                      htmlFor={option.value}
                      className="text-base sm:text-sm"
                    >
                      {option.label}
                    </Label>
                  </div>
                ))}
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
                  column?.setFilterValue([])
                  setSelectedValues([])
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

const departmentOptions = [
  { label: "Engineering", value: "Engineering" },
  { label: "Marketing", value: "Marketing" },
  { label: "Sales", value: "Sales" },
  { label: "Human Resources", value: "Human Resources" },
  { label: "Finance", value: "Finance" },
]

const CheckboxFilterExample = () => {
  const [departmentFilter, setDepartmentFilter] = React.useState<string[]>([])

  const departmentColumn = {
    getFilterValue: () => departmentFilter,
    setFilterValue: (value: string[]) => {
      setDepartmentFilter(value)
    },
  }

  return (
    <div className="obfuscate">
      <div className="relative">
        <div className="rounded-lg border border-gray-200 bg-white pb-20 shadow-sm md:h-52 dark:border-gray-800 dark:bg-gray-950">
          <div className="border-b border-gray-200 p-4 dark:border-gray-800">
            <DataTableFilter
              column={departmentColumn}
              title="Department"
              options={departmentOptions}
            />
          </div>
          {/* gradient for demo purpose */}
          <div className="absolute inset-x-0 bottom-0 -mb-1 h-14 rounded-b-lg bg-gradient-to-t from-white via-white to-transparent dark:from-gray-950 dark:via-gray-950 dark:to-transparent" />
        </div>
      </div>
    </div>
  )
}

export default CheckboxFilterExample
