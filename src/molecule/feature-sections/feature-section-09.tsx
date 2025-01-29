import { RiArrowRightUpLine } from "@remixicon/react"

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="relative flex flex-col items-center justify-center py-16">
        <div className="mx-auto">
          <a
            aria-label="View latest database benchmarks"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto w-full"
          >
            <div className="inline-flex max-w-full items-center gap-3 rounded-full px-2.5 py-0.5 pr-3 pl-0.5 font-medium text-gray-900 ring-1 shadow-lg shadow-blue-400/20 ring-black/5 filter backdrop-blur-[1px] transition-colors hover:bg-blue-500/[2.5%] focus:outline-hidden sm:text-sm dark:bg-white/5 dark:text-gray-50 dark:ring-white/10">
              <span className="shrink-0 truncate rounded-full border bg-gray-50 px-2.5 py-1 text-sm text-gray-600 sm:text-xs">
                New
              </span>
              <span className="flex items-center gap-1 truncate">
                <span className="w-full truncate">
                  10x Faster Query Performance
                </span>
                <RiArrowRightUpLine className="h-4 w-4 shrink-0 text-gray-700 dark:text-gray-400" />
              </span>
            </div>
          </a>
        </div>
        <h1 className="mt-8 text-center text-5xl font-semibold tracking-tighter text-gray-900 sm:text-8xl sm:leading-[5.5rem] dark:text-gray-50">
          Scale Beyond <br /> Your Limits
        </h1>
        <p className="mt-5 max-w-xl text-center text-base text-balance text-gray-700 sm:mt-8 sm:text-xl dark:text-gray-400">
          Modern distributed database with automatic sharding, real-time
          replication, and intelligent query optimization for unlimited
          scalability.
        </p>
        <div>
          <a
            className="mt-6 inline-flex cursor-pointer flex-row items-center justify-center gap-1 rounded-md border-b-[1.5px] border-blue-700 bg-gradient-to-b from-blue-400 to-blue-500 px-5 py-3 leading-4 font-medium tracking-wide whitespace-nowrap text-white shadow-[0_0_0_2px_rgba(0,0,0,0.04),0_0_14px_0_rgba(255,255,255,0.19)] transition-all duration-200 ease-in-out hover:shadow-blue-300"
            href="#"
          >
            Start scaling
          </a>
        </div>
      </div>
    </div>
  )
}
