"use client"

// Modify your layout / template file as follows to center login form across the screen

// <html className"h-full"/>
// <body className"h-full"/>
import { RiContrast2Line, RiGoogleFill } from "@remixicon/react"

import { Button } from "@/atom/Button"

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="flex min-h-full flex-1 flex-col justify-center px-4 py-40 lg:px-6">
        <div className="relative sm:mx-auto sm:w-full sm:max-w-sm">
          <div
            className="pointer-events-none absolute -top-[25%] left-1/2 -translate-x-1/2 opacity-60 select-none dark:opacity-90"
            aria-hidden="true"
            style={{
              maskImage:
                "radial-gradient(rgba(0, 0, 0, 1) 0%, transparent 80%)",
              WebkitMaskImage:
                "radial-gradient(rgba(0, 0, 0, 1) 0%, transparent 80%)",
            }}
          >
            <div className="flex flex-col gap-1">
              {Array.from({ length: 10 }, (_, idx) => (
                <div key={`outer-${idx}`}>
                  <div className="flex gap-2">
                    {Array.from({ length: 10 }, (_, idx2) => (
                      <div key={`inner-${idx}-${idx2}`}>
                        <div className="size-7 rounded-md ring-1 shadow shadow-indigo-500/40 ring-black/5 dark:shadow-indigo-400/20 dark:ring-white/10" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mx-auto w-fit rounded-xl bg-gray-50 p-4 ring-1 shadow-md shadow-black/10 ring-black/10 dark:bg-gray-900 dark:ring-gray-800">
            <div className="absolute top-[9%] left-[9%] size-1 rounded-full bg-gray-100 shadow-inner dark:bg-gray-800" />
            <div className="absolute top-[9%] right-[9%] size-1 rounded-full bg-gray-100 shadow-inner dark:bg-gray-800" />
            <div className="absolute bottom-[9%] left-[9%] size-1 rounded-full bg-gray-100 shadow-inner dark:bg-gray-800" />
            <div className="absolute right-[9%] bottom-[9%] size-1 rounded-full bg-gray-100 shadow-inner dark:bg-gray-800" />
            <div className="w-fit rounded-lg bg-gradient-to-b from-blue-400 to-blue-600 p-3 ring-1 shadow-sm shadow-blue-500/50 ring-white/25 ring-inset">
              <RiContrast2Line
                className="size-8 text-white"
                aria-hidden="true"
              />
            </div>
          </div>
          <h2 className="mt-4 text-center text-xl font-semibold text-gray-900 dark:text-gray-50">
            Sign in to Platform
          </h2>
          <div className="mt-10">
            <Button asChild className="mt-4 w-full">
              <a href="#" className="inline-flex items-center gap-2">
                <RiGoogleFill className="size-5" aria-hidden={true} />
                Continue with Google
              </a>
            </Button>
          </div>
          <Button type="button" variant="secondary" className="mt-4 w-full">
            Continue with Email
          </Button>
          <p className="mt-4 text-xs text-gray-500 dark:text-gray-500">
            By signing in, you agree to our{" "}
            <a href="#" className="underline underline-offset-2">
              terms of service
            </a>{" "}
            and{" "}
            <a href="#" className="underline underline-offset-2">
              privacy policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
