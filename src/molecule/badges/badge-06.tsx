import { RiCloseFill } from "@remixicon/react"

export default function Example() {
  return (
    <>
      <div className="obfuscate">
        <div className="flex flex-wrap justify-center gap-4">
          <span className="inline-flex items-center gap-x-2.5 rounded-md bg-white py-1 pr-1 pl-2.5 text-xs text-gray-500 ring-1 ring-gray-200 dark:bg-gray-950 dark:text-gray-500 dark:ring-gray-800">
            Department
            <span className="h-4 w-px bg-gray-200 dark:bg-gray-800" />
            <span className="font-medium text-gray-900 dark:text-gray-300">
              Sales
            </span>
            <button
              type="button"
              className="-ml-1.5 flex size-5 items-center justify-center rounded text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-gray-300"
              aria-label="Remove"
            >
              <RiCloseFill className="size-4 shrink-0" aria-hidden={true} />
            </button>
          </span>
          <span className="inline-flex items-center gap-x-2.5 rounded-md bg-white py-1 pr-1 pl-2.5 text-xs text-gray-500 ring-1 ring-gray-200 ring-inset dark:bg-gray-950 dark:text-gray-500 dark:ring-gray-800">
            Location
            <span className="h-4 w-px bg-gray-200 dark:bg-gray-800" />
            <span className="font-medium text-gray-900 dark:text-gray-300">
              Zurich
            </span>
            <button
              type="button"
              className="-ml-1.5 flex size-5 items-center justify-center rounded text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-gray-300"
              aria-label="Remove"
            >
              <RiCloseFill className="size-4 shrink-0" aria-hidden={true} />
            </button>
          </span>
          <span className="inline-flex items-center gap-x-2.5 rounded-md bg-white py-1 pr-1 pl-2.5 text-xs text-gray-500 ring-1 ring-gray-200 ring-inset dark:bg-gray-950 dark:text-gray-500 dark:ring-gray-800">
            Sales volume
            <span className="h-4 w-px bg-gray-200 dark:bg-gray-800" />
            <span className="font-medium text-gray-900 dark:text-gray-300">
              $100K-5M
            </span>
            <button
              type="button"
              className="-ml-1.5 flex size-5 items-center justify-center rounded text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-gray-300"
              aria-label="Remove"
            >
              <RiCloseFill className="size-4 shrink-0" aria-hidden={true} />
            </button>
          </span>
          <span className="inline-flex items-center gap-x-2.5 rounded-md bg-white py-1 pr-1 pl-2.5 text-xs text-gray-500 ring-1 ring-gray-200 ring-inset dark:bg-gray-950 dark:text-gray-500 dark:ring-gray-800">
            Status
            <span className="h-4 w-px bg-gray-200 dark:bg-gray-800" />
            <span className="font-medium text-gray-900 dark:text-gray-300">
              Closed
            </span>
            <button
              type="button"
              className="-ml-1.5 flex size-5 items-center justify-center rounded text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-gray-300"
              aria-label="Remove"
            >
              <RiCloseFill className="size-4 shrink-0" aria-hidden={true} />
            </button>
          </span>
        </div>
      </div>
    </>
  )
}
