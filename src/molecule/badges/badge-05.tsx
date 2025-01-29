export default function Example() {
  return (
    <div className="obfuscate">
      <div className="flex flex-wrap justify-center gap-4">
        <span className="inline-flex items-center space-x-1.5 rounded-full bg-white px-2.5 py-1 ring-1 ring-gray-200 ring-inset dark:bg-gray-950 dark:ring-gray-800">
          <span className="text-xs font-medium text-gray-500 dark:text-gray-500">
            In progress
          </span>
          <span className="text-xs font-medium text-emerald-700 dark:text-emerald-500">
            +5.1%
          </span>
        </span>
        <span className="inline-flex items-center space-x-1.5 rounded-full bg-white px-2.5 py-1 ring-1 ring-gray-200 ring-inset dark:bg-gray-950 dark:ring-gray-800">
          <span className="text-xs font-medium text-gray-500 dark:text-gray-500">
            Obsolete
          </span>
          <span className="text-xs font-medium text-red-700 dark:text-red-500">
            -0.6%
          </span>
        </span>
        <span className="inline-flex items-center space-x-1.5 rounded-full bg-white px-2.5 py-1 ring-1 ring-gray-200 ring-inset dark:bg-gray-950 dark:ring-gray-800">
          <span className="text-xs font-medium text-gray-500 dark:text-gray-500">
            Open
          </span>
          <span className="text-xs font-medium text-emerald-700 dark:text-emerald-500">
            +2.7%
          </span>
        </span>
        <span className="inline-flex items-center space-x-1.5 rounded-full bg-white px-2.5 py-1 ring-1 ring-gray-200 ring-inset dark:bg-gray-950 dark:ring-gray-800">
          <span className="text-xs font-medium text-gray-500 dark:text-gray-500">
            Closed
          </span>
          <span className="text-xs font-medium text-red-700 dark:text-red-500">
            -0.6%
          </span>
        </span>
      </div>
    </div>
  )
}
