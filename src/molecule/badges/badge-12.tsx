export default function Example() {
  return (
    <div className="obfuscate">
      <div className="flex flex-wrap justify-center gap-4">
        <span className="rounded-lg bg-indigo-50/50 px-3 py-1.5 font-semibold leading-4 tracking-tighter shadow-sm shadow-indigo-500/20 ring-1 ring-indigo-200/20 sm:text-sm dark:bg-indigo-900/20 dark:ring-indigo-800/30">
          <span className="bg-gradient-to-b from-indigo-400 to-indigo-600 bg-clip-text text-transparent dark:from-indigo-200 dark:to-indigo-400">
            Deploy
          </span>
        </span>
        <span className="rounded-lg bg-pink-50/50 px-3 py-1.5 font-semibold leading-4 tracking-tighter shadow-sm shadow-pink-500/20 ring-1 ring-pink-200/20 sm:text-sm dark:bg-pink-900/20 dark:ring-pink-800/30">
          <span className="bg-gradient-to-b from-pink-400 to-pink-600 bg-clip-text text-transparent dark:from-pink-200 dark:to-pink-400">
            Preview
          </span>
        </span>
        <span className="rounded-lg bg-teal-50/50 px-3 py-1.5 font-semibold leading-4 tracking-tighter shadow-sm shadow-teal-500/20 ring-1 ring-teal-200/20 sm:text-sm dark:bg-teal-900/20 dark:ring-teal-800/30">
          <span className="bg-gradient-to-b from-teal-400 to-teal-600 bg-clip-text text-transparent dark:from-teal-200 dark:to-teal-400">
            Ship
          </span>
        </span>
      </div>
    </div>
  )
}
