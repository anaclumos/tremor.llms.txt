import { cx } from "@/lib/utils"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectGroupLabel,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../atoms/Select"

const data = [
  // array-start
  {
    value: "emma-callister",
    label: "Emma Callister",
    initials: "E",
    color: "bg-blue-500",
  },
  {
    value: "john-mayer",
    label: "John Mayer",
    initials: "J",
    color: "bg-cyan-500",
  },
  {
    value: "lena-stone",
    label: "Lena Stone",
    initials: "L",
    color: "bg-purple-500",
  },
  // array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="relative">
        <div className="flex h-48 items-start justify-end rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <Select defaultValue="emma-callister">
            <SelectTrigger className="border-gray-300 sm:w-52 dark:border-gray-800">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent className="border-gray-200 dark:border-gray-800">
              <SelectGroup>
                <SelectGroupLabel>Switch account</SelectGroupLabel>
                {data.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    <div className="flex w-full items-center gap-x-2.5">
                      <span
                        className={cx(
                          item.color,
                          "flex size-6 items-center justify-center rounded-md p-2 text-xs font-medium text-white",
                        )}
                        aria-hidden={true}
                      >
                        {item.initials}
                      </span>
                      {item.label}
                    </div>
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        {/* gradient for demo purpose */}
        <div className="absolute inset-x-0 bottom-0 -mb-1 h-14 rounded-b-lg bg-gradient-to-t from-white via-white to-transparent dark:from-gray-950 dark:via-gray-950 dark:to-transparent" />
      </div>
    </div>
  )
}
