"use client"

import { cx } from "@/lib/utils"

import { Card } from "../../atom/Card"
import { LineChart } from "../../atom/LineChart"

const data = [
  //array-start
  {
    date: "Jan 23",
    Organic: 232,
    Sponsored: 0,
    Affiliate: 49,
  },
  {
    date: "Feb 23",
    Organic: 241,
    Sponsored: 0,
    Affiliate: 61,
  },
  {
    date: "Mar 23",
    Organic: 291,
    Sponsored: 0,
    Affiliate: 55,
  },
  {
    date: "Apr 23",
    Organic: 101,
    Sponsored: 0,
    Affiliate: 21,
  },
  {
    date: "May 23",
    Organic: 318,
    Sponsored: 0,
    Affiliate: 66,
  },
  {
    date: "Jun 23",
    Organic: 205,
    Sponsored: 0,
    Affiliate: 69,
  },
  {
    date: "Jul 23",
    Organic: 372,
    Sponsored: 0,
    Affiliate: 55,
  },
  {
    date: "Aug 23",
    Organic: 341,
    Sponsored: 0,
    Affiliate: 74,
  },
  {
    date: "Sep 23",
    Organic: 387,
    Sponsored: 120,
    Affiliate: 190,
  },
  {
    date: "Oct 23",
    Organic: 220,
    Sponsored: 0,
    Affiliate: 89,
  },
  {
    date: "Nov 23",
    Organic: 372,
    Sponsored: 0,
    Affiliate: 44,
  },
  {
    date: "Dec 23",
    Organic: 321,
    Sponsored: 0,
    Affiliate: 93,
  },
  //array-end
]

const summary = [
  //array-start
  {
    name: "Organic",
    value: 3273,
  },
  {
    name: "Sponsored",
    value: 120,
  },
  {
    name: "Affiliate",
    value: 866,
  },
  //array-end
]

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`

type Status = "Organic" | "Sponsored" | "Affiliate"

const statusColor: Record<Status, string> = {
  Organic: "bg-blue-500 dark:bg-blue-500",
  Sponsored: "bg-violet-500 dark:bg-violet-500",
  Affiliate: "bg-fuchsia-500 dark:bg-fuchsia-500",
}

export default function Example() {
  return (
    <div className="obfuscate">
      <Card className="sm:mx-auto sm:max-w-md">
        <h3 className="text-sm font-medium text-gray-900 dark:text-gray-50">
          Units sold by channel
        </h3>
        <LineChart
          data={data}
          index="date"
          categories={["Organic", "Sponsored", "Affiliate"]}
          colors={["blue", "violet", "fuchsia"]}
          valueFormatter={valueFormatter}
          showLegend={false}
          showYAxis={false}
          startEndOnly={true}
          className="mt-6 !h-32"
        />
        <ul
          role="list"
          className="mt-2 divide-y divide-gray-200 text-sm text-gray-500 dark:divide-gray-800 dark:text-gray-500"
        >
          {summary.map((item) => (
            <li
              key={item.name}
              className="flex items-center justify-between py-2.5"
            >
              <div className="flex items-center space-x-2">
                <span
                  className={cx(
                    statusColor[item.name as Status],
                    "h-[3px] w-3.5 shrink-0 rounded-full",
                  )}
                  aria-hidden={true}
                />
                <span>{item.name}</span>
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
