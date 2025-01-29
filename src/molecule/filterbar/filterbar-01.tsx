import { RiBuilding2Line, RiStackFill, RiStackLine } from "@remixicon/react"

import { cx } from "@/lib/utils"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/atom/Select"
import { Tooltip } from "@/atom/Tooltip"

const data = [
  // array-start
  {
    value: "free-workspace",
    label: "Free workspace",
    icon: RiStackLine,
    description: "Up to 1,000/req. per day,\n$0.45 per stored GB",
    disabled: false,
  },
  {
    value: "pro-workspace",
    label: "Pro workspace",
    icon: RiStackFill,
    description: "Up to 100,000/req. per day,\n$0.34 per stored GB",
    disabled: false,
  },
  {
    value: "enterprise-workspace",
    label: "Enterprise workspace",
    icon: RiBuilding2Line,
    description: "",
    disabled: true,
  },
  // array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="relative">
        <div className="flex h-48 items-start justify-end rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <Select defaultValue="pro-workspace">
            <SelectTrigger className="border-gray-300 sm:w-48 dark:border-gray-800">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent
              align="end"
              className="border-gray-200 dark:border-gray-800"
            >
              {data.map((item) => (
                <SelectItem
                  key={item.value}
                  value={item.value}
                  disabled={item.disabled}
                >
                  <Tooltip
                    side="left"
                    showArrow={true}
                    className="z-50"
                    content={item.description}
                    triggerAsChild={true}
                    sideOffset={15}
                  >
                    <div className="flex w-full items-center gap-x-2">
                      <item.icon
                        className={cx(
                          item.disabled ? "text-gray-400/50" : "text-gray-500",
                          "size-4 shrink-0",
                        )}
                        aria-hidden={true}
                      />
                      {item.label}
                    </div>
                  </Tooltip>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {/* gradient for demo purpose */}
        <div className="absolute inset-x-0 bottom-0 -mb-1 h-14 rounded-b-lg bg-gradient-to-t from-white via-white to-transparent dark:from-gray-950 dark:via-gray-950 dark:to-transparent" />
      </div>
    </div>
  )
}
