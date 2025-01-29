"use client"

import React from "react"
import { RiArrowRightUpLine, RiCloseLine } from "@remixicon/react"

import { AreaChart } from "../../atoms/AreaChart"
import { Button } from "../../atoms/Button"
import { Card } from "../../atoms/Card"

const data = [
  //array-start
  {
    date: "Jan 23",
    Users: 234,
  },
  {
    date: "Feb 23",
    Users: 412,
  },
  {
    date: "Mar 23",
    Users: 519,
  },
  {
    date: "Apr 23",
    Users: 642,
  },
  {
    date: "May 23",
    Users: 642,
  },
  {
    date: "Jun 23",
    Users: 701,
  },
  {
    date: "Jul 23",
    Users: 749,
  },
  {
    date: "Aug 23",
    Users: 961,
  },
  {
    date: "Sep 23",
    Users: 1286,
  },
  {
    date: "Oct 23",
    Users: 1491,
  },
  {
    date: "Nov 23",
    Users: 1619,
  },
  {
    date: "Dec 23",
    Users: 2019,
  },
  //array-end
]

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`

export default function Example() {
  const [isOpen, setIsOpen] = React.useState(true)

  // just for demo purposes
  React.useEffect(() => {
    if (!isOpen) {
      const timeoutId: NodeJS.Timeout = setTimeout(() => {
        setIsOpen(true)
      }, 1000)

      return () => clearTimeout(timeoutId)
    }
  }, [isOpen])
  return (
    <div className="obfuscate">
      <Card className="sm:mx-auto sm:max-w-lg">
        <h1 className="text-sm text-gray-500 dark:text-gray-500">
          Active subscriptions (cumulative)
        </h1>
        <p className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
          14,035
        </p>
        <AreaChart
          data={data}
          index="date"
          categories={["Users"]}
          showLegend={false}
          valueFormatter={valueFormatter}
          showYAxis={false}
          fill="solid"
          className="mt-6 hidden !h-48 sm:block"
        />
        <AreaChart
          data={data}
          index="date"
          categories={["Users"]}
          showLegend={false}
          valueFormatter={valueFormatter}
          startEndOnly={true}
          showYAxis={false}
          fill="solid"
          className="mt-6 !h-48 sm:hidden"
        />
        {isOpen ? (
          <div className="relative mt-4 rounded-md bg-gray-50 p-4 ring-1 ring-inset ring-gray-200 dark:bg-gray-800 dark:ring-gray-400/20">
            <div className="flex items-center space-x-2.5">
              <RiArrowRightUpLine
                className="size-5 shrink-0 text-blue-500 dark:text-blue-500"
                aria-hidden="true"
              />
              <h2 className="text-sm font-medium text-blue-500 dark:text-blue-500">
                Significant increase since May
              </h2>
            </div>
            <div className="absolute right-1.5 top-1.5">
              <Button
                variant="ghost"
                className="!p-1 !text-gray-500 hover:!text-gray-700 dark:!text-gray-500 hover:dark:!text-gray-300"
                onClick={() => setIsOpen(false)}
                aria-label="Close"
              >
                <RiCloseLine className="size-5 shrink-0" aria-hidden="true" />
              </Button>
            </div>
            <p className="mt-2 text-sm/6 text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt. At vero eos et accusam et justo duo
              dolores.
            </p>
          </div>
        ) : null}
      </Card>
    </div>
  )
}
