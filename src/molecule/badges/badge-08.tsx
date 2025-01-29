import {
  RiCheckboxCircleFill,
  RiCloseCircleFill,
  RiCloseCircleLine,
  RiShieldCheckLine,
} from "@remixicon/react"

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="flex flex-wrap justify-center gap-4">
        <span className="inline-flex items-center gap-x-2.5 rounded-full bg-white px-2.5 py-1.5 text-xs ring-1 ring-inset ring-gray-200 dark:bg-gray-950 dark:ring-gray-800">
          <span className="inline-flex items-center gap-1.5 font-medium text-gray-900 dark:text-gray-50">
            <RiShieldCheckLine
              className="size-4 shrink-0 text-emerald-600 dark:text-emerald-500"
              aria-hidden={true}
            />
            Protection
          </span>
          <span className="h-4 w-px bg-gray-200 dark:bg-gray-800" />
          <span className="inline-flex items-center gap-1.5 text-gray-500 dark:text-gray-500">
            <RiCloseCircleLine
              className="-ml-0.5 size-4 shrink-0"
              aria-hidden={true}
            />
            SSO login
          </span>
        </span>
        <span className="inline-flex items-center gap-x-2.5 rounded-full bg-white px-2.5 py-1.5 text-xs ring-1 ring-inset ring-gray-200 dark:bg-gray-950 dark:ring-gray-800">
          <span className="inline-flex items-center gap-1.5 font-medium text-gray-900 dark:text-gray-50">
            <RiCheckboxCircleFill
              className="-ml-0.5 size-4 shrink-0 text-emerald-600 dark:text-emerald-500"
              aria-hidden={true}
            />
            Live
          </span>
          <span className="h-4 w-px bg-gray-200 dark:bg-gray-800" />
          <span className="inline-flex items-center gap-1.5 text-gray-500 dark:text-gray-500">
            <RiCloseCircleLine
              className="-ml-0.5 size-4 shrink-0"
              aria-hidden={true}
            />
            Audit trails
          </span>
        </span>
        <span className="inline-flex items-center gap-x-2.5 rounded-full bg-white px-2.5 py-1.5 text-xs ring-1 ring-inset ring-gray-200 dark:bg-gray-950 dark:ring-gray-800">
          <span className="inline-flex items-center gap-1.5 font-medium text-gray-900 dark:text-gray-50">
            <RiCloseCircleFill
              className="-ml-0.5 size-4 shrink-0 text-red-600 dark:text-red-500"
              aria-hidden={true}
            />
            Safety checks
          </span>
          <span className="h-4 w-px bg-gray-200 dark:bg-gray-800" />
          <span className="inline-flex items-center gap-1.5 text-gray-500 dark:text-gray-500">
            <RiShieldCheckLine
              className="-ml-0.5 size-4 shrink-0"
              aria-hidden={true}
            />
            Production
          </span>
        </span>
      </div>
    </div>
  )
}
