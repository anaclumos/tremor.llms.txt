import { cx, focusInput } from "@/lib/utils"

import { Tooltip } from "../../atom/Tooltip"

function formatDate(date: any) {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

const options = [
  // array-start
  {
    label: "Today",
    date: formatDate(new Date()),
  },
  {
    label: "7D",
    date: `${formatDate(new Date(new Date().setDate(new Date().getDate() - 7)))} – ${formatDate(new Date())} `,
  },
  {
    label: "30D",
    date: `${formatDate(new Date(new Date().setDate(new Date().getDate() - 30)))} – ${formatDate(new Date())}`,
  },
  {
    label: "3M",
    date: `${formatDate(new Date(new Date().setMonth(new Date().getMonth() - 3)))} – ${formatDate(new Date())}`,
  },
  {
    label: "6M",
    date: `${formatDate(new Date(new Date().setMonth(new Date().getMonth() - 6)))} – ${formatDate(new Date())}`,
  },
  // array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="relative">
        <div className="flex h-48 items-start justify-end rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <div className="inline-flex items-center rounded-md text-sm font-medium shadow-sm">
            {options.map((item, index) => (
              <Tooltip
                side="top"
                showArrow={true}
                className="z-50"
                sideOffset={8}
                content={item.date}
                key={index}
                triggerAsChild={true}
              >
                <button
                  type="button"
                  className={cx(
                    index === 0
                      ? "rounded-l-md"
                      : index === options.length - 1
                        ? "-ml-px rounded-r-md"
                        : "-ml-px",
                    focusInput,
                    "border border-gray-300 bg-white px-4 py-2 text-gray-900 hover:bg-gray-50 focus:z-10 focus:outline-none dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 hover:dark:bg-gray-950/50",
                  )}
                >
                  {item.label}
                </button>
              </Tooltip>
            ))}
          </div>
        </div>
        {/* gradient for demo purpose */}
        <div className="absolute inset-x-0 bottom-0 -mb-1 h-14 rounded-b-lg bg-gradient-to-t from-white via-white to-transparent dark:from-gray-950 dark:via-gray-950 dark:to-transparent" />
      </div>
    </div>
  )
}
