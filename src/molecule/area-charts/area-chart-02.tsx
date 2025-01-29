"use client"

import React from "react"
import { RiCloseLine } from "@remixicon/react"

import { cx } from "@/lib/utils"

import { AreaChart } from "@/atom/AreaChart"
import { Button } from "@/atom/Button"
import { Card } from "@/atom/Card"

const data = [
  //array-start
  {
    date: "Jan 23",
    Organic: 232,
    Sponsored: 0,
  },
  {
    date: "Feb 23",
    Organic: 241,
    Sponsored: 0,
  },
  {
    date: "Mar 23",
    Organic: 291,
    Sponsored: 0,
  },
  {
    date: "Apr 23",
    Organic: 101,
    Sponsored: 0,
  },
  {
    date: "May 23",
    Organic: 318,
    Sponsored: 0,
  },
  {
    date: "Jun 23",
    Organic: 205,
    Sponsored: 0,
  },
  {
    date: "Jul 23",
    Organic: 372,
    Sponsored: 0,
  },
  {
    date: "Aug 23",
    Organic: 341,
    Sponsored: 0,
  },
  {
    date: "Sep 23",
    Organic: 387,
    Sponsored: 120,
  },
  {
    date: "Oct 23",
    Organic: 220,
    Sponsored: 0,
  },
  {
    date: "Nov 23",
    Organic: 372,
    Sponsored: 0,
  },
  {
    date: "Dec 23",
    Organic: 321,
    Sponsored: 0,
  },
  //array-end
]

const summary = [
  {
    name: "Organic",
    value: 3273,
  },
  {
    name: "Sponsored",
    value: 120,
  },
]

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`

type Status = "Organic" | "Sponsored"

const statusColor: Record<Status, string> = {
  Organic: "bg-blue-500 dark:bg-blue-500",
  Sponsored: "bg-violet-500 dark:bg-violet-500",
}

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
        <h1 className="font-medium text-gray-900 dark:text-gray-50">
          Follower metrics
        </h1>
        <AreaChart
          data={data}
          index="date"
          categories={["Organic", "Sponsored"]}
          colors={["blue", "violet"]}
          showLegend={false}
          showYAxis={false}
          showGridLines={true}
          startEndOnly={true}
          fill="solid"
          className="mt-6 !h-48"
        />
        <ul
          role="list"
          className="mt-2 divide-y divide-gray-200 dark:divide-gray-800"
        >
          {summary.map((item) => (
            <li
              key={item.name}
              className="flex items-center justify-between py-2 text-sm"
            >
              <div className="flex items-center space-x-2">
                <span
                  className={cx(
                    statusColor[item.name as Status],
                    "h-[3px] w-3.5 shrink-0 rounded-full",
                  )}
                />
                <span className="text-gray-500 dark:text-gray-500">
                  {item.name}
                </span>
              </div>
              <span className="font-medium text-gray-900 dark:text-gray-50">
                {valueFormatter(item.value)}
              </span>
            </li>
          ))}
        </ul>
        {isOpen ? (
          <div className="mt-3 rounded-md bg-gray-50 py-3 pr-2 pl-4 ring-1 ring-gray-200 ring-inset dark:bg-gray-800 dark:ring-gray-400/20">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
                  More power?{" "}
                  <a
                    href="#"
                    className="font-normal text-blue-500 hover:underline hover:underline-offset-4 dark:text-blue-500"
                  >
                    Upgrade
                  </a>{" "}
                  <span className="font-normal text-gray-600 dark:text-gray-400">
                    to get more insights.
                  </span>
                </p>
              </div>
              <Button
                variant="ghost"
                className="!p-1 !text-gray-500 hover:!text-gray-700 dark:!text-gray-500 hover:dark:!text-gray-300"
                onClick={() => setIsOpen(false)}
                aria-label="Close"
              >
                <RiCloseLine className="size-5 shrink-0" aria-hidden={true} />
              </Button>
            </div>
          </div>
        ) : null}
      </Card>
    </div>
  )
}
