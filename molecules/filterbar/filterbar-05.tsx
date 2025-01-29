import { cx, focusInput } from "@/lib/utils"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../atoms/Select"
import { Tooltip } from "../../atoms/Tooltip"

function formatDate(date: Date) {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

const data = [
  // array-start
  {
    buttonText: "7D",
    tooltipText: `${formatDate(new Date(new Date().setDate(new Date().getDate() - 7)))} – ${formatDate(new Date())} `,
  },
  {
    buttonText: "30D",
    tooltipText: `${formatDate(new Date(new Date().setDate(new Date().getDate() - 30)))} – ${formatDate(new Date())}`,
  },
  {
    buttonText: "3M",
    tooltipText: `${formatDate(new Date(new Date().setMonth(new Date().getMonth() - 3)))} – ${formatDate(new Date())}`,
  },
  {
    buttonText: "6M",
    tooltipText: `${formatDate(new Date(new Date().setMonth(new Date().getMonth() - 6)))} – ${formatDate(new Date())}`,
  },
  // array-end
]

const dataSelect = [
  // array-start
  {
    value: "week-to-date",
    label: "Week to Date",
  },
  {
    value: "month-to-date",
    label: "Month to Date",
  },
  {
    value: "year-to-date",
    label: "Year to Date",
  },
  // array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="relative">
        <div className="flex h-48 items-start justify-end rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <div className="hidden items-center rounded-md text-sm font-medium shadow-sm sm:inline-flex">
            {data.map((item, index) => (
              <Tooltip
                side="top"
                showArrow={true}
                className="z-50"
                content={item.tooltipText}
                triggerAsChild={true}
                key={index}
              >
                <button
                  type="button"
                  className={cx(
                    index === 0 ? "rounded-l-md" : "-ml-px",
                    focusInput,
                    "border border-gray-300 bg-white px-4 py-2 text-gray-900 hover:bg-gray-50 focus:z-10 focus:outline-none dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 hover:dark:bg-gray-950/50",
                  )}
                >
                  {item.buttonText}
                </button>
              </Tooltip>
            ))}
            <Select>
              <SelectTrigger className="-ml-px w-fit rounded-none rounded-r-md border-gray-300 shadow-none dark:border-gray-800">
                <SelectValue placeholder="XTD" />
              </SelectTrigger>
              <SelectContent className="border-gray-200 dark:border-gray-800">
                {dataSelect.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="inline-flex items-center rounded-md text-sm font-medium shadow-sm sm:hidden">
            {data.slice(0, 2).map((item, index) => (
              <Tooltip
                side="top"
                showArrow={true}
                className="z-50"
                sideOffset={8}
                content={item.tooltipText}
                triggerAsChild={true}
                key={index}
              >
                <button
                  key={index}
                  type="button"
                  className={cx(
                    index === 0 ? "rounded-l-md" : "-ml-px",
                    focusInput,
                    "border border-gray-300 bg-white px-4 py-2 text-gray-900 hover:bg-gray-50 focus:z-10 focus:outline-none dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 hover:dark:bg-gray-950/50",
                  )}
                >
                  {item.buttonText}
                </button>
              </Tooltip>
            ))}
            <Select>
              <SelectTrigger className="-ml-px w-fit rounded-none rounded-r-md border-gray-300 shadow-none dark:border-gray-800">
                <SelectValue placeholder="XTD" />
              </SelectTrigger>
              <SelectContent align="end">
                {dataSelect.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        {/* gradient for demo purpose */}
        <div className="absolute inset-x-0 bottom-0 -mb-1 h-14 rounded-b-lg bg-gradient-to-t from-white via-white to-transparent dark:from-gray-950 dark:via-gray-950 dark:to-transparent" />
      </div>
    </div>
  )
}
