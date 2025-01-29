import React from "react"
import { RiArrowDownSLine, RiCalendar2Line } from "@remixicon/react"

import { cx, focusInput } from "@/lib/utils"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../atoms/DropdownMenu"

const datepickerCategories = [
  // array-start
  { value: "last-day", label: "Last day" },
  { value: "last-15-days", label: "Last 15 days" },
  { value: "last-30-days", label: "Last 30 days" },
  { value: "last-60-days", label: "Last 60 days" },
  { value: "last-quarter", label: "Last quarter" },
  // array-end
]

export default function Example() {
  const [selectedLabel, setSelectedLabel] = React.useState("Last 30 days")

  const handleItemClick = (label: string) => {
    setSelectedLabel(label)
  }
  return (
    <div className="obfuscate">
      <div className="relative">
        <div className="rounded-lg border border-gray-200 bg-white pb-20 shadow-sm md:h-52 dark:border-gray-800 dark:bg-gray-950">
          <div className="flex justify-end gap-x-4 border-b border-gray-200 p-6 dark:border-gray-800">
            <div className="inline-flex items-center rounded-md text-sm font-medium shadow-sm">
              <span className="rounded-l-md border border-gray-300 bg-white px-3 py-2 font-medium text-gray-900 focus:z-10 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50">
                <RiCalendar2Line
                  className="size-5 shrink-0 text-gray-500 dark:text-gray-500"
                  aria-hidden={true}
                />
              </span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    type="button"
                    className={cx(
                      focusInput,
                      "-ml-px flex items-center gap-x-2 rounded-r-md border border-gray-300 bg-white px-4 py-2 font-medium text-gray-900 transition-colors hover:bg-gray-50 focus:z-10 focus:outline-none dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 hover:dark:bg-gray-950/50",
                    )}
                  >
                    {selectedLabel}
                    <RiArrowDownSLine
                      className="-mr-1 size-5 shrink-0"
                      aria-hidden={true}
                    />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="!min-w-[calc(var(--radix-dropdown-menu-trigger-width))]">
                  {datepickerCategories.map((item) => (
                    <DropdownMenuItem
                      key={item.value}
                      onClick={() => handleItemClick(item.label)}
                    >
                      {item.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
        {/* gradient for demo purpose */}
        <div className="absolute inset-x-0 bottom-0 -mb-1 h-14 rounded-b-lg bg-gradient-to-t from-white via-white to-transparent dark:from-gray-950 dark:via-gray-950 dark:to-transparent" />
      </div>
    </div>
  )
}
