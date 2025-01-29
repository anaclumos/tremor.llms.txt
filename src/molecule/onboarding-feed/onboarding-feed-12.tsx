import React from "react"
import { RiRefreshLine } from "@remixicon/react"

import { Button } from "../../atom/Button"
import {
  RadioCardGroup,
  RadioCardIndicator,
  RadioCardItem,
} from "../../atom/RadioCardGroup"

const layoutTypes = [
  { value: "table", label: "Table" },
  { value: "grid", label: "Grid" },
  { value: "list", label: "List" },
]

const TableLayout = () => (
  <div className="mt-4 h-28 overflow-hidden rounded-md bg-gradient-to-b from-blue-200 to-transparent to-[80%] p-px dark:from-blue-400">
    <div className="relative rounded-[5px] bg-white p-4 dark:bg-gray-900">
      <div className="absolute inset-0 h-full bg-gradient-to-b from-transparent to-white to-[85%] dark:to-gray-950" />
      <div className="flex flex-nowrap gap-2">
        <div className="h-4 w-full rounded bg-blue-400" aria-hidden="true" />
        <div className="h-4 w-full rounded bg-blue-400" aria-hidden="true" />
        <div className="h-4 w-full rounded bg-blue-400" aria-hidden="true" />
        <div className="h-4 w-full rounded bg-blue-400" aria-hidden="true" />
      </div>
      {[...Array(3)].map((_, index) => (
        <div key={index} className="mt-2 flex flex-nowrap gap-2">
          <div className="h-4 w-full rounded bg-blue-200" aria-hidden="true" />
          <div className="h-4 w-full rounded bg-blue-200" aria-hidden="true" />
          <div className="h-4 w-full rounded bg-blue-200" aria-hidden="true" />
          <div className="h-4 w-full rounded bg-blue-200" aria-hidden="true" />
        </div>
      ))}
    </div>
  </div>
)

const GridLayout = () => (
  <div className="mt-4 h-28 overflow-hidden rounded-md bg-gradient-to-b from-blue-200 to-transparent to-[80%] p-px dark:from-blue-400">
    <div className="relative rounded-[5px] bg-white p-4 dark:bg-gray-900">
      <div className="absolute inset-0 h-full bg-gradient-to-b from-transparent to-white to-[70%] dark:to-gray-950" />
      <div className="flex flex-nowrap gap-2">
        <div className="h-4 w-full rounded bg-blue-400" aria-hidden="true" />
      </div>
      <div className="mt-2 flex flex-nowrap gap-2">
        <div className="h-12 w-full rounded bg-blue-200" aria-hidden="true" />
        <div className="h-12 w-full rounded bg-blue-200" aria-hidden="true" />
        <div className="h-12 w-full rounded bg-blue-200" aria-hidden="true" />
        <div className="h-12 w-full rounded bg-blue-200" aria-hidden="true" />
        <div className="h-12 w-full rounded bg-blue-200" aria-hidden="true" />
      </div>
      <div className="mt-2 flex flex-nowrap gap-2">
        <div className="h-12 w-full rounded bg-blue-200" aria-hidden="true" />
        <div className="h-12 w-full rounded bg-blue-200" aria-hidden="true" />
        <div className="h-12 w-full rounded bg-blue-200" aria-hidden="true" />
        <div className="h-12 w-full rounded bg-blue-200" aria-hidden="true" />
        <div className="h-12 w-full rounded bg-blue-200" aria-hidden="true" />
      </div>
    </div>
  </div>
)

const ListLayout = () => (
  <div className="mt-4 h-28 overflow-hidden rounded-md bg-gradient-to-b from-blue-200 to-transparent to-[80%] p-px dark:from-blue-400">
    <div className="relative rounded-[5px] bg-white p-4 dark:bg-gray-900">
      <div className="absolute inset-0 h-full bg-gradient-to-b from-transparent to-white to-[80%] dark:to-gray-950" />
      <div className="flex flex-nowrap gap-2">
        <div className="h-4 w-full rounded bg-blue-400" aria-hidden="true" />
      </div>
      <div className="mt-2 flex flex-col flex-nowrap items-end gap-2">
        <div className="h-3 w-full rounded bg-blue-200" aria-hidden="true" />
        <div className="h-3 w-full rounded bg-blue-200" aria-hidden="true" />
      </div>
      <div className="mt-2 flex flex-nowrap gap-2">
        <div className="h-4 w-full rounded bg-blue-400" aria-hidden="true" />
      </div>
      <div className="mt-2 flex flex-col flex-nowrap gap-2">
        <div className="h-3 w-full rounded bg-blue-200" aria-hidden="true" />
        <div className="h-3 w-full rounded bg-blue-200" aria-hidden="true" />
      </div>
    </div>
  </div>
)

export default function Employees() {
  const [selectedLayout, setSelectedLayout] = React.useState(
    layoutTypes[0].value,
  )
  const [animationKey, setAnimationKey] = React.useState(0)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted with layout:", selectedLayout)
  }

  const resetAnimation = () => {
    setAnimationKey((prevKey) => prevKey + 1)
  }

  const renderLayout = (layout: string) => {
    switch (layout) {
      case "table":
        return <TableLayout />
      case "grid":
        return <GridLayout />
      case "list":
        return <ListLayout />
      default:
        return null
    }
  }

  return (
    <div className="obfuscate">
      <div className="!mx-auto max-w-lg">
        <div
          key={`header-${animationKey}`}
          style={{ animation: "revealBottom 300ms ease-in-out backwards" }}
        >
          <h1 className="text-base font-semibold text-gray-900 sm:text-xl dark:text-gray-50">
            Select your preferred layout
          </h1>
          <p className="mt-6 text-gray-700 sm:text-sm dark:text-gray-300">
            This will help us customize the experience for you.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-4">
          <fieldset>
            <legend className="sr-only">Select layout</legend>
            <RadioCardGroup
              value={selectedLayout}
              onValueChange={(value) => setSelectedLayout(value)}
              required
              aria-label="Layout variants"
              className="gap-4"
            >
              {layoutTypes.map((layout, index) => (
                <div
                  className="motion-safe:animate-revealBottom"
                  key={`${layout.value}-${animationKey}`}
                  style={{
                    animationDuration: "600ms",
                    animationDelay: `${100 + index * 50}ms`,
                    animationFillMode: "backwards",
                  }}
                >
                  <RadioCardItem
                    className="active:scale-[99%] dark:bg-[#050814]"
                    value={layout.value}
                    style={{
                      animationDuration: "600ms",
                      animationDelay: `${100 + index * 50}ms`,
                      animationFillMode: "backwards",
                    }}
                  >
                    <div className="flex items-center justify-between gap-2.5">
                      <span className="block text-gray-900 sm:text-sm dark:text-gray-50">
                        {layout.label}
                      </span>
                      <RadioCardIndicator />
                    </div>
                    {renderLayout(layout.value)}
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
              disabled={!selectedLayout}
              aria-disabled={!selectedLayout}
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
