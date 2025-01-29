"use client"

import { cx } from "@/lib/utils"

import { BarChart } from "@/atom/BarChart"
import { Card } from "@/atom/Card"

const tabs = [
  //array-start
  { name: "Europe", value: "$1.9M", color: "bg-blue-500 dark:bg-blue-500" },
  { name: "Asia", value: "$4.1M", color: "bg-cyan-500 dark:bg-cyan-500" },
  {
    name: "North America",
    value: "$10.1M",
    color: "bg-indigo-500 dark:bg-indigo-500",
  },
  //array-end
]

const data = [
  //array-start
  {
    date: "Jan 23",
    Europe: 68560,
    Asia: 28560,
    "North America": 34940,
  },
  {
    date: "Feb 23",
    Europe: 70320,
    Asia: 30320,
    "North America": 44940,
  },
  {
    date: "Mar 23",
    Europe: 80233,
    Asia: 70233,
    "North America": 94560,
  },
  {
    date: "Apr 23",
    Europe: 55123,
    Asia: 45123,
    "North America": 84320,
  },
  {
    date: "May 23",
    Europe: 56000,
    Asia: 80600,
    "North America": 71120,
  },
  {
    date: "Jun 23",
    Europe: 100000,
    Asia: 85390,
    "North America": 61340,
  },
  {
    date: "Jul 23",
    Europe: 85390,
    Asia: 45340,
    "North America": 71260,
  },
  {
    date: "Aug 23",
    Europe: 80100,
    Asia: 70120,
    "North America": 61210,
  },
  {
    date: "Sep 23",
    Europe: 75090,
    Asia: 69450,
    "North America": 61110,
  },
  {
    date: "Oct 23",
    Europe: 71080,
    Asia: 63345,
    "North America": 41430,
  },
  {
    date: "Nov 23",
    Europe: 68041,
    Asia: 61210,
    "North America": 100330,
  },
  {
    date: "Dec 23",
    Europe: 60143,
    Asia: 45321,
    "North America": 80780,
  },
  //array-end
]

function valueFormatter(number: number) {
  const formatter = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
    notation: "compact",
    compactDisplay: "short",
    style: "currency",
    currency: "USD",
  })

  return formatter.format(number)
}

export default function Example() {
  return (
    <div className="obfuscate">
      <Card className="sm:mx-auto sm:max-w-2xl">
        <h3 className="font-semibold text-gray-900 dark:text-gray-50">
          Sales breakdown by regions
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-500">
          Check sales of top 3 regions over time
        </p>
        <ul
          role="list"
          className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3"
        >
          {tabs.map((tab) => (
            <li
              key={tab.name}
              className="rounded-md border border-gray-200 px-3 py-2 text-left dark:border-gray-800"
            >
              <div className="flex items-center space-x-1.5">
                <span
                  className={cx(tab.color, "size-2.5 rounded-sm")}
                  aria-hidden={true}
                />
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  {tab.name}
                </p>
              </div>
              <p className="mt-0.5 font-semibold text-gray-900 dark:text-gray-50">
                {tab.value}
              </p>
            </li>
          ))}
        </ul>
        <BarChart
          data={data}
          index="date"
          categories={["Europe", "Asia", "North America"]}
          colors={["blue", "cyan", "indigo"]}
          showLegend={false}
          valueFormatter={valueFormatter}
          yAxisWidth={50}
          type="stacked"
          className="mt-6 hidden !h-56 sm:block"
        />
        <BarChart
          data={data}
          index="date"
          categories={["Europe", "Asia", "North America"]}
          colors={["blue", "cyan", "indigo"]}
          showLegend={false}
          valueFormatter={valueFormatter}
          showYAxis={false}
          type="stacked"
          className="mt-6 !h-48 sm:hidden"
        />
      </Card>
    </div>
  )
}
