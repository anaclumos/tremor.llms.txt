import {
  RiArrowDownLine,
  RiArrowRightLine,
  RiArrowUpLine,
} from "@remixicon/react"

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="flex flex-wrap justify-center gap-4">
        <span className="inline-flex items-center gap-x-1 rounded-md bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-800 dark:bg-emerald-400/20 dark:text-emerald-500">
          <RiArrowUpLine className="-ml-0.5 size-4" aria-hidden={true} />
          9.3%
        </span>
        <span className="inline-flex items-center gap-x-1 rounded-md bg-red-100 px-2 py-1 text-xs font-semibold text-red-800 dark:bg-red-400/20 dark:text-red-500">
          <RiArrowDownLine className="-ml-0.5 size-4" aria-hidden={true} />
          1.9%
        </span>
        <span className="inline-flex items-center gap-x-1 rounded-md bg-gray-200/50 px-2 py-1 text-xs font-semibold text-gray-700 dark:bg-gray-500/30 dark:text-gray-300">
          <RiArrowRightLine className="-ml-0.5 size-4" aria-hidden={true} />
          0.6%
        </span>
      </div>
    </div>
  )
}
