"use client"

import React from "react"
import { RiAddLine, RiArrowDownSLine } from "@remixicon/react"

import { cx, focusRing } from "@/lib/utils"

import { Button } from "../../atom/Button"
import { Label } from "../../atom/Label"
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "../../atom/Popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../atom/Select"

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

type FilterValues = string | undefined

export function DataTableFilter({
  column,
  title,
  options,
  formatter = (value) => value.toString(),
}: DataTableFilterProps) {
  const columnFilters = column?.getFilterValue() as FilterValues

  const [selectedValues, setSelectedValues] =
    React.useState<FilterValues>(columnFilters)

  const columnFilterLabels = React.useMemo(() => {
    if (!selectedValues) return undefined

    if (typeof selectedValues === "string") {
      return [formatter(selectedValues)]
    }

    return undefined
  }, [selectedValues, formatter])

  const getDisplayedFilter = () => {
    return (
      <Select
        value={selectedValues as string}
        onValueChange={(value) => {
          setSelectedValues(value)
        }}
      >
        <SelectTrigger className="mt-2 sm:py-1">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          {options?.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    )
  }

  React.useEffect(() => {
    setSelectedValues(columnFilters)
  }, [columnFilters])

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className={cx(
            "flex w-full items-center gap-x-1.5 whitespace-nowrap rounded-md border border-gray-300 px-2 py-1.5 font-medium text-gray-600 hover:bg-gray-50 sm:w-fit sm:text-xs dark:border-gray-700 dark:text-gray-400 hover:dark:bg-gray-900",
            selectedValues &&
              typeof selectedValues === "string" &&
              selectedValues !== ""
              ? ""
              : "border-dashed",
            focusRing,
          )}
        >
          <span
            aria-hidden="true"
            onClick={(e) => {
              if (selectedValues) {
                e.stopPropagation()
                column?.setFilterValue("")
                setSelectedValues("")
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
          {/* differentiation below for better mobile view */}
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
        className="min-w-[calc(var(--radix-popover-trigger-width))] max-w-[calc(var(--radix-popover-trigger-width))] sm:min-w-56 sm:max-w-56"
        onInteractOutside={() => {
          if (
            !columnFilters ||
            (typeof columnFilters === "string" && columnFilters === "")
          ) {
            column?.setFilterValue("")
            setSelectedValues("")
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
              {getDisplayedFilter()}
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
                  column?.setFilterValue("")
                  setSelectedValues("")
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

const roleOptions = [
  { label: "Developer", value: "Developer" },
  { label: "Designer", value: "Designer" },
  { label: "Manager", value: "Manager" },
]

const SimpleFilterExample = () => {
  const [roleFilter, setRoleFilter] = React.useState<string>("")

  const roleColumn = {
    getFilterValue: () => roleFilter,
    setFilterValue: (value: string) => {
      setRoleFilter(value)
    },
  }

  return (
    <div className="obfuscate">
      <div className="relative">
        <div className="rounded-lg border border-gray-200 bg-white pb-20 shadow-sm md:h-52 dark:border-gray-800 dark:bg-gray-950">
          <div className="border-b border-gray-200 p-4 dark:border-gray-800">
            <DataTableFilter
              column={roleColumn}
              title="Role"
              options={roleOptions}
            />
          </div>
          {/* gradient for demo purpose */}
          <div className="absolute inset-x-0 bottom-0 -mb-1 h-14 rounded-b-lg bg-gradient-to-t from-white via-white to-transparent dark:from-gray-950 dark:via-gray-950 dark:to-transparent" />
        </div>
      </div>
    </div>
  )
}

export default SimpleFilterExample
