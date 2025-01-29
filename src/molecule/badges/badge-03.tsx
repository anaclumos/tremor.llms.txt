import {
  RiArrowDownLine,
  RiArrowRightLine,
  RiArrowUpLine,
} from "@remixicon/react"

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="flex flex-wrap justify-center gap-4">
        <span className="inline-flex items-center gap-x-1 rounded-md bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-800 ring-1 ring-inset ring-emerald-600/30 dark:bg-emerald-400/20 dark:text-emerald-500 dark:ring-emerald-400/20">
          <RiArrowUpLine className="-ml-0.5 size-4" aria-hidden={true} />
          9.3%
        </span>
        <span className="inline-flex items-center gap-x-1 rounded-md bg-red-50 px-2 py-1 text-xs font-semibold text-red-800 ring-1 ring-inset ring-red-600/20 dark:bg-red-400/20 dark:text-red-500 dark:ring-red-400/20">
          <RiArrowDownLine className="-ml-0.5 size-4" aria-hidden={true} />
          1.9%
        </span>
        <span className="inline-flex items-center gap-x-1 rounded-md bg-gray-50 px-2 py-1 text-xs font-semibold text-gray-700 ring-1 ring-inset ring-gray-600/20 dark:bg-gray-500/30 dark:text-gray-300 dark:ring-gray-400/20">
          <RiArrowRightLine className="-ml-0.5 size-4" aria-hidden={true} />
          0.6%
        </span>
      </div>
    </div>
  )
}
