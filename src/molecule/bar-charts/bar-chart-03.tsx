"use client"

import { BarChart } from "../../atom/BarChart"
import { Card } from "../../atom/Card"

const data = [
  //array-start
  {
    date: "Jan 23",
    "This Year": 68560,
    "Last Year": 28560,
  },
  {
    date: "Feb 23",
    "This Year": 70320,
    "Last Year": 30320,
  },
  {
    date: "Mar 23",
    "This Year": 80233,
    "Last Year": 70233,
  },
  {
    date: "Apr 23",
    "This Year": 55123,
    "Last Year": 45123,
  },
  {
    date: "May 23",
    "This Year": 56000,
    "Last Year": 80600,
  },
  {
    date: "Jun 23",
    "This Year": 100000,
    "Last Year": 85390,
  },
  {
    date: "Jul 23",
    "This Year": 85390,
    "Last Year": 45340,
  },
  {
    date: "Aug 23",
    "This Year": 80100,
    "Last Year": 70120,
  },
  {
    date: "Sep 23",
    "This Year": 75090,
    "Last Year": 69450,
  },
  {
    date: "Oct 23",
    "This Year": 71080,
    "Last Year": 63345,
  },
  {
    date: "Nov 23",
    "This Year": 61210,
    "Last Year": 100330,
  },
  {
    date: "Dec 23",
    "This Year": 60143,
    "Last Year": 45321,
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
          Sales overview
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-500">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
        </p>
        <ul role="list" className="mt-6 flex gap-10">
          <li>
            <div className="flex items-center space-x-1.5">
              <span
                className="size-2.5 rounded-sm bg-blue-500 dark:bg-blue-500"
                aria-hidden={true}
              />
              <p className="text-xs text-gray-500 dark:text-gray-500">
                This year
              </p>
            </div>
            <div className="flex items-center space-x-1.5">
              <p className="mt-0.5 text-lg font-semibold text-gray-900 dark:text-gray-50">
                $0.8M
              </p>
              <span className="rounded bg-gray-100 px-1.5 py-0.5 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                +16%
              </span>
            </div>
          </li>
          <li>
            <div className="flex items-center space-x-1.5">
              <span
                className="size-2.5 rounded-sm bg-cyan-500 dark:bg-cyan-500"
                aria-hidden={true}
              />
              <p className="text-xs text-gray-500 dark:text-gray-500">
                Last year
              </p>
            </div>
            <p className="mt-0.5 text-lg font-semibold text-gray-900 dark:text-gray-50">
              $0.7M
            </p>
          </li>
        </ul>
        <BarChart
          data={data}
          index="date"
          categories={["Last Year", "This Year"]}
          colors={["cyan", "blue"]}
          showLegend={false}
          valueFormatter={valueFormatter}
          yAxisWidth={50}
          className="mt-8 hidden !h-56 sm:block"
        />
        <BarChart
          data={data}
          index="date"
          categories={["Last Year", "This Year"]}
          colors={["cyan", "blue"]}
          showLegend={false}
          valueFormatter={valueFormatter}
          showYAxis={false}
          className="mt-8 !h-48 sm:hidden"
        />
      </Card>
    </div>
  )
}
