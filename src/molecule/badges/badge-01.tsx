import {
  RiArrowDownSFill,
  RiArrowRightSFill,
  RiArrowUpSFill,
} from "@remixicon/react"

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="flex flex-wrap justify-center gap-4">
        <span className="inline-flex items-center gap-x-1 rounded-md px-2 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-gray-200 ring-inset dark:text-emerald-500 dark:ring-gray-800">
          <RiArrowUpSFill className="-ml-0.5 size-4" aria-hidden={true} />
          9.3%
        </span>
        <span className="inline-flex items-center gap-x-1 rounded-md px-2 py-1 text-xs font-semibold text-red-700 ring-1 ring-gray-200 ring-inset dark:text-red-500 dark:ring-gray-800">
          <RiArrowDownSFill className="-ml-0.5 size-4" aria-hidden={true} />
          1.9%
        </span>
        <span className="inline-flex items-center gap-x-1 rounded-md px-2 py-1 text-xs font-semibold text-gray-700 ring-1 ring-gray-200 ring-inset dark:text-gray-400 dark:ring-gray-800">
          <RiArrowRightSFill className="-ml-0.5 size-4" aria-hidden={true} />
          0.6%
        </span>
      </div>
    </div>
  )
}
