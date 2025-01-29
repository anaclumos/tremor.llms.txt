"use client"

import { cx } from "@/lib/utils"

import { AreaChart } from "../../atoms/AreaChart"
import { Card } from "../../atoms/Card"

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
          valueFormatter={valueFormatter}
          showLegend={false}
          showYAxis={false}
          startEndOnly={true}
          fill="solid"
          className="mt-6 !h-32"
        />
        <ul
          role="list"
          className="mt-4 divide-y divide-gray-200 text-sm text-gray-500 dark:divide-gray-800 dark:text-gray-500"
        >
          {summary.map((item) => (
            <li
              key={item.name}
              className="flex items-center justify-between py-2"
            >
              <div className="flex items-center space-x-2">
                <span
                  className={cx(
                    statusColor[item.name as Status],
                    "h-[3px] w-3.5 shrink-0 rounded-full",
                  )}
                  aria-hidden="true"
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
      </Card>
    </div>
  )
}
