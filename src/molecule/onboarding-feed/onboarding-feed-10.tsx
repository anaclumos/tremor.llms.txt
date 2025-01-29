"use client"

// Add this to your tailwind.config.ts

// keyframes: {
// revealBottom: {
//   from: {
//     opacity: '0',
//     transform: 'translateY(12px)',
//   },
//   to: {
//     opacity: '1',
//     transform: 'translateY(0px)',
//   },
// },
// },

// animation: {
//   revealBottom: 'revealBottom 300ms ease-in-out backwards',
// },
import React from "react"
import { RiRefreshLine } from "@remixicon/react"

import { Button } from "@/atom/Button"
import {
  RadioCardGroup,
  RadioCardIndicator,
  RadioCardItem,
} from "@/atom/RadioCardGroup"

const employeeCounts = [
  { value: "1", label: "1" },
  { value: "2-5", label: "2 – 5" },
  { value: "6-20", label: "6 – 20" },
  { value: "21-100", label: "21 – 100" },
  { value: "101-500", label: "101 – 500" },
  { value: "501+", label: "501+" },
]

export default function Employees() {
  const [selectedEmployeeCount, setSelectedEmployeeCount] = React.useState("")
  const [animationKey, setAnimationKey] = React.useState(0)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted with employee count:", selectedEmployeeCount)
  }

  const resetAnimation = () => {
    setAnimationKey((prevKey) => prevKey + 1)
  }

  return (
    <div className="obfuscate">
      <div className="!mx-auto max-w-lg" key={`header-${animationKey}`}>
        <div style={{ animation: "revealBottom 300ms ease-in-out backwards" }}>
          <h1 className="text-base font-semibold text-gray-900 sm:text-xl dark:text-gray-50">
            How many employees does your company have?
          </h1>
          <p className="mt-6 text-gray-700 sm:text-sm dark:text-gray-300">
            This will help us customize the experience to you.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-4">
          <fieldset>
            <legend className="sr-only">Select number of employees</legend>
            <RadioCardGroup
              value={selectedEmployeeCount}
              onValueChange={(value) => setSelectedEmployeeCount(value)}
              required
              aria-label="Number of employees"
            >
              {employeeCounts.map((count, index) => (
                <div
                  className="motion-safe:animate-revealBottom"
                  key={`${count.value}-${animationKey}`}
                  style={{
                    animationDuration: "600ms",
                    animationDelay: `${100 + index * 50}ms`,
                    animationFillMode: "backwards",
                  }}
                >
                  <RadioCardItem
                    className="active:scale-[99%] dark:bg-[#050814]"
                    value={count.value}
                    style={{
                      animationDuration: "600ms",
                      animationDelay: `${100 + index * 50}ms`,
                      animationFillMode: "backwards",
                    }}
                  >
                    <div className="flex items-center gap-2.5">
                      <RadioCardIndicator />
                      <span className="block text-gray-900 sm:text-sm dark:text-gray-50">
                        {count.label}
                      </span>
                    </div>
                  </RadioCardItem>
                </div>
              ))}
            </RadioCardGroup>
          </fieldset>
          <div className="mt-6 flex justify-between">
            <Button type="button" variant="ghost" asChild>
              <a href="#">Back</a>
            </Button>
            <Button
              className="disabled:bg-gray-200 disabled:text-gray-500"
              type="submit"
              disabled={!selectedEmployeeCount}
              aria-disabled={!selectedEmployeeCount}
            >
              Continue
            </Button>
          </div>
        </form>
        <Button
          variant="secondary"
          onClick={resetAnimation}
          className="group !mx-auto mt-8 flex gap-2"
        >
          <RiRefreshLine
            aria-hidden="true"
            className="size-5 shrink-0 transition group-hover:rotate-[25deg] group-active:rotate-90"
          />
          Retrigger Animations
        </Button>
      </div>
    </div>
  )
}
