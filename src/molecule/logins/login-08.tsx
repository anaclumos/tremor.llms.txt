"use client"

// Modify your layout / template file as follows to center login form across the screen

// <html className"h-full"/>
// <body className"h-full"/>
import { useCallback, useEffect, useMemo, useState } from "react"
import { RiGithubFill, RiGoogleFill } from "@remixicon/react"

import { Button } from "@/atom/Button"
import { Divider } from "@/atom/Divider"
import { Input } from "@/atom/Input"
import { Label } from "@/atom/Label"

// Animation parameters
const TOTAL_ROWS = 40
const TOTAL_COLS = 40
const TRANSITION_INTERVAL = 3000
const MIN_SELECTED = 20
const MAX_SELECTED = 60

export default function Example() {
  const [selectedDivs, setSelectedDivs] = useState(new Set())

  const totalDivs = TOTAL_ROWS * TOTAL_COLS

  const updateSelectedDivs = useCallback(() => {
    const newSelectedDivs = new Set()
    const numSelected =
      Math.floor(Math.random() * (MAX_SELECTED - MIN_SELECTED + 1)) +
      MIN_SELECTED

    while (newSelectedDivs.size < numSelected) {
      const randomId = Math.floor(Math.random() * totalDivs)
      newSelectedDivs.add(randomId)
    }

    setSelectedDivs(newSelectedDivs)
  }, [totalDivs])

  useEffect(() => {
    updateSelectedDivs()
    const intervalId = setInterval(updateSelectedDivs, TRANSITION_INTERVAL)
    return () => clearInterval(intervalId)
  }, [updateSelectedDivs])

  const gridDivs = useMemo(
    () =>
      Array.from({ length: TOTAL_ROWS }, (_, rowIdx) => (
        <div key={`outer-${rowIdx}`}>
          <div className="flex size-full gap-2">
            {Array.from({ length: TOTAL_COLS }, (_, colIdx) => {
              const divId = rowIdx * TOTAL_COLS + colIdx
              const isSelected = selectedDivs.has(divId)
              return (
                <div key={`inner-${rowIdx}-${colIdx}`}>
                  <div
                    className={`size-9 rounded-lg ring-1 shadow ring-black/5 transition-all duration-[3000ms] dark:ring-white/5 ${
                      isSelected
                        ? "shadow-blue-500/50 dark:shadow-blue-500/40"
                        : "shadow-blue-500/10 dark:shadow-blue-500/10"
                    }`}
                  />
                </div>
              )
            })}
          </div>
        </div>
      )),
    [selectedDivs],
  )

  return (
    <div className="obfuscate">
      <div className="flex min-h-screen w-full">
        <main className="flex-1 shadow-xl lg:border-r dark:border-gray-900">
          <div className="flex h-full flex-col items-center justify-center">
            <div className="w-full px-4 sm:max-w-sm sm:px-0">
              <div className="space-y-1">
                <h1 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-50">
                  Sign in to Platform
                </h1>
                <p className="text-sm text-gray-700 dark:text-gray-400">
                  Do not have an account?{" "}
                  <a
                    href="#"
                    className="font-medium text-blue-500 hover:text-blue-600 dark:text-blue-500 hover:dark:text-blue-600"
                  >
                    Sign up.
                  </a>
                </p>
              </div>
              <form className="mt-12" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-900 dark:text-gray-50"
                    >
                      Email
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      placeholder="john@company.com"
                      className="mt-2"
                      required
                      aria-required="true"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label
                        htmlFor="password"
                        className="text-sm font-medium text-gray-900 dark:text-gray-50"
                      >
                        Password
                      </Label>
                      <a
                        href="#"
                        className="text-sm font-medium text-blue-500 hover:text-blue-600 dark:text-blue-500 hover:dark:text-blue-600"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <Input
                      type="password"
                      id="password"
                      name="password"
                      autoComplete="current-password"
                      placeholder="Password"
                      className="mt-2"
                      required
                      aria-required="true"
                    />
                  </div>
                  <Button className="w-full" type="submit">
                    Continue
                  </Button>
                </div>
              </form>
              <div>
                <Divider>or</Divider>
                <div className="space-y-4">
                  <div className="flex w-full gap-4">
                    <Button variant="secondary" className="w-full">
                      <span className="inline-flex items-center gap-2">
                        <RiGithubFill
                          className="size-5 shrink-0"
                          aria-hidden={true}
                        />
                        Login with GitHub
                      </span>
                    </Button>
                    <Button className="w-full" variant="secondary">
                      <span className="inline-flex items-center gap-2">
                        <RiGoogleFill className="size-4" aria-hidden={true} />
                        Login with Google
                      </span>
                    </Button>
                  </div>
                  <Button className="w-full" variant="secondary">
                    Sign in with SSO
                  </Button>
                </div>
                <div className="mt-4">
                  <p className="text-xs text-gray-700">
                    By signing in, you agree to our{" "}
                    <a
                      href="#"
                      className="text-blue-500 hover:text-blue-600 dark:text-blue-500 hover:dark:text-blue-600"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="text-blue-500 hover:text-blue-600 dark:text-blue-500 hover:dark:text-blue-600"
                    >
                      Privacy Policy.
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
        <div
          className="hidden max-h-screen flex-1 overflow-hidden lg:flex"
          aria-hidden="true"
        >
          <div>
            <div className="-mt-2 -ml-2 flex flex-col gap-2">{gridDivs}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
