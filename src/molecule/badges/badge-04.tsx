import {
  RiArrowDownLine,
  RiArrowRightLine,
  RiArrowUpLine,
} from "@remixicon/react"

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="flex flex-wrap justify-center gap-4">
        <span className="inline-flex items-center space-x-2.5 rounded-lg bg-white py-1 pr-1 pl-2.5 ring-1 ring-gray-200 ring-inset dark:bg-gray-950 dark:ring-gray-800">
          <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-500">
            13.3%
          </span>
          <span className="text-xsl rounded-md bg-emerald-100 px-2 py-1 font-medium dark:bg-emerald-400/20">
            <RiArrowUpLine
              className="size-4 text-emerald-800 dark:text-emerald-600"
              aria-hidden={true}
            />
          </span>
        </span>
        <span className="inline-flex items-center space-x-2.5 rounded-lg bg-white py-1 pr-1 pl-2.5 ring-1 ring-gray-200 ring-inset dark:bg-gray-950 dark:ring-gray-800">
          <span className="text-xs font-semibold text-red-700 dark:text-red-500">
            1.9%
          </span>
          <span className="rounded-md bg-red-100 px-2 py-1 text-xs font-medium dark:bg-red-400/20">
            <RiArrowDownLine
              className="size-4 text-red-800 dark:text-red-600"
              aria-hidden={true}
            />
          </span>
        </span>
        <span className="inline-flex items-center space-x-2.5 rounded-lg bg-white py-1 pr-1 pl-2.5 ring-1 ring-gray-200 ring-inset dark:bg-gray-950 dark:ring-gray-800">
          <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
            0.6%
          </span>
          <span className="rounded-md bg-gray-200 px-2 py-1 text-xs font-medium dark:bg-gray-400/20">
            <RiArrowRightLine
              className="size-4 text-gray-700 dark:text-gray-300"
              aria-hidden={true}
            />
          </span>
        </span>
      </div>
    </div>
  )
}
