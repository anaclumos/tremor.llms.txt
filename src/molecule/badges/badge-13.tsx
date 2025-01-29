import {
  RiFunctionAddLine,
  RiShareBoxLine,
  RiStackLine,
} from "@remixicon/react"

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="flex flex-wrap justify-center gap-4">
        <div className="flex items-center gap-2 rounded-lg px-3 py-1.5 ring-1 shadow-md shadow-indigo-400/30 ring-black/5 dark:shadow-indigo-600/30 dark:ring-white/5">
          <RiFunctionAddLine
            aria-hidden="true"
            className="size-4 text-indigo-600 dark:text-indigo-400"
          />
          <span className="text-sm font-medium tracking-tight text-gray-900 dark:text-gray-50">
            Create
          </span>
        </div>
        <div className="flex items-center gap-2 rounded-lg px-3 py-1.5 ring-1 shadow-md shadow-pink-400/30 ring-black/5 dark:shadow-pink-600/30 dark:ring-white/5">
          <RiStackLine
            aria-hidden="true"
            className="size-4 text-pink-600 dark:text-pink-400"
          />
          <span className="text-sm font-medium tracking-tight text-gray-900 dark:text-gray-50">
            Collect
          </span>
        </div>
        <div className="flex items-center gap-2 rounded-lg px-3 py-1.5 ring-1 shadow-md shadow-teal-400/30 ring-black/5 dark:shadow-teal-600/30 dark:ring-white/5">
          <RiShareBoxLine
            aria-hidden="true"
            className="size-4 text-teal-600 dark:text-teal-400"
          />
          <span className="text-sm font-medium tracking-tight text-gray-900 dark:text-gray-50">
            Share
          </span>
        </div>
      </div>
    </div>
  )
}
