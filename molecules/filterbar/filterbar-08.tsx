import React from "react"
import { RiAddLine, RiArrowUpDownLine, RiTimeLine } from "@remixicon/react"

import { cx, focusInput } from "@/lib/utils"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../atoms/DropdownMenu"

export default function Example() {
  const [sorting, setSorting] = React.useState("alphabetical")
  const [date, setDate] = React.useState("last-30-days")

  const radioItems = [
    // array-start
    { value: "alphabetical", label: "alphabetical", hint: "A-Z" },
    {
      value: "reverse-alphabetical",
      label: "Reverse alphabetical",
      hint: "Z-A",
    },
    { value: "created-at", label: "Created at", hint: "Jan-Dec" },
    // array-end
  ]

  const radioItems2 = [
    // array-start
    { value: "last-day", label: "Last day" },
    { value: "last-15-days", label: "Last 15 days" },
    { value: "last-30-days", label: "Last 30 days" },
    { value: "last-quarter", label: "Last quarter" },
    // array-end
  ]

  const selectedLabel = radioItems.find((item) => item.value === sorting)?.label

  const selectedLabel2 = radioItems2.find((item) => item.value === date)?.label

  return (
    <div className="obfuscate">
      <div className="relative">
        <div className="h-48 rounded-lg border border-gray-200 bg-white p-6 shadow-sm sm:flex sm:items-start sm:gap-x-2 dark:border-gray-800 dark:bg-gray-950">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className={cx(
                  focusInput,
                  "flex items-center gap-x-2 rounded-md border border-gray-300 bg-white py-1.5 pl-3 pr-1.5 text-sm font-medium text-gray-900 shadow-sm transition hover:bg-gray-50 focus:z-10 focus:outline-none dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 hover:dark:bg-gray-950/50",
                )}
              >
                <RiArrowUpDownLine
                  className="-ml-px size-5 shrink-0 text-gray-500 dark:text-gray-500"
                  aria-hidden={true}
                />
                Sorted by{" "}
                <span className="rounded bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-500 dark:bg-blue-400/10 dark:text-blue-500">
                  {selectedLabel}
                </span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="!min-w-[calc(var(--radix-dropdown-menu-trigger-width))]"
              align="start"
            >
              <DropdownMenuRadioGroup
                value={sorting}
                onValueChange={setSorting}
              >
                {radioItems.map((item) => (
                  <DropdownMenuRadioItem
                    key={item.value}
                    value={item.value}
                    hint={item.hint}
                  >
                    {item.label}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="mt-2 sm:mt-0">
              <button
                type="button"
                className={cx(
                  focusInput,
                  "flex items-center gap-x-2 rounded-md border border-gray-300 bg-white py-1.5 pl-3 pr-1.5 text-sm font-medium text-gray-900 shadow-sm transition hover:bg-gray-50 focus:z-10 focus:outline-none dark:border-gray-800 dark:bg-gray-950 dark:text-gray-950 hover:dark:bg-gray-950/50",
                )}
              >
                <RiTimeLine
                  className="-ml-px size-5 shrink-0 text-gray-500 dark:text-gray-500"
                  aria-hidden={true}
                />
                Last
                <span className="rounded bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-500 dark:bg-blue-400/10 dark:text-blue-500">
                  {selectedLabel2}
                </span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuRadioGroup value={date} onValueChange={setDate}>
                {radioItems2.map((item) => (
                  <DropdownMenuRadioItem key={item.value} value={item.value}>
                    {item.label}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-gray-900 dark:text-gray-50">
                <div className="flex items-center gap-x-1.5">
                  <RiAddLine
                    className="-ml-px size-5 shrink-0"
                    aria-hidden={true}
                  />
                  Custom date
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {/* gradient for demo purpose */}
        <div className="absolute inset-x-0 bottom-0 -mb-1 h-14 rounded-b-lg bg-gradient-to-t from-white via-white to-transparent dark:from-gray-950 dark:via-gray-950 dark:to-transparent" />
      </div>
    </div>
  )
}
