"use client"

import { cx } from "@/lib/utils"

import { AreaChart } from "../../atoms/AreaChart"

const data = [
  //array-start
  {
    date: "Jan 23",
    "Actual costs": 42340,
    "Potential costs": 32330,
    "Potential savings": -23.6,
  },
  {
    date: "Feb 23",
    "Actual costs": 50120,
    "Potential costs": 40100,
    "Potential savings": -20.2,
  },
  {
    date: "Mar 23",
    "Actual costs": 45190,
    "Potential costs": 38240,
    "Potential savings": -15.4,
  },
  {
    date: "Apr 23",
    "Actual costs": 56420,
    "Potential costs": 31200,
    "Potential savings": -44.8,
  },
  {
    date: "May 23",
    "Actual costs": 40420,
    "Potential costs": 34900,
    "Potential savings": -13.8,
  },
  {
    date: "Jun 23",
    "Actual costs": 47010,
    "Potential costs": 36800,
    "Potential savings": -21.9,
  },
  {
    date: "Jul 23",
    "Actual costs": 47490,
    "Potential costs": 34560,
    "Potential savings": -27.3,
  },
  {
    date: "Aug 23",
    "Actual costs": 39610,
    "Potential costs": 31260,
    "Potential savings": -21.8,
  },
  {
    date: "Sep 23",
    "Actual costs": 45860,
    "Potential costs": 29240,
    "Potential savings": -36.2,
  },
  {
    date: "Oct 23",
    "Actual costs": 50910,
    "Potential costs": 31220,
    "Potential savings": -38.7,
  },
  {
    date: "Nov 23",
    "Actual costs": 49190,
    "Potential costs": 33020,
    "Potential savings": -32.9,
  },
  {
    date: "Dec 23",
    "Actual costs": 55190,
    "Potential costs": 36090,
    "Potential savings": -34.5,
  },
  //array-end
]

const summary = [
  //array-start
  {
    category: "Actual costs",
    total: "$540,690",
    color: "bg-blue-500 dark:bg-blue-500",
  },
  {
    category: "Potential costs",
    total: "$422,300",
    color: "bg-cyan-500 dark:bg-blue-500",
  },
  {
    category: "Potential savings (%)",
    total: "-21.9%",
    color: null,
  },
  {
    category: "Potential savings ($)",
    total: "$118,390",
    color: null,
  },
  //array-end
]

function currencyFormatter(number: number) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 1,
    notation: "compact",
    compactDisplay: "short",
  })

  return formatter.format(number)
}

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="sm:mx-auto sm:max-w-7xl">
        <h1 className="font-medium text-gray-900 dark:text-gray-50">
          Actual costs vs. potential costs
        </h1>
        <p className="text-sm/6 text-gray-500 dark:text-gray-500">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt
        </p>
        <ul role="list" className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {summary.map((item, index) => (
            <li key={index}>
              <div className="flex space-x-3">
                {item.color && (
                  <span
                    className={cx(item.color, "w-1 shrink-0 rounded")}
                    aria-hidden={true}
                  />
                )}
                <p className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                  {item.total}
                </p>
              </div>
              {item.color !== null ? (
                <p className="pl-4 text-sm text-gray-500 dark:text-gray-500">
                  {item.category}
                </p>
              ) : (
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  {item.category}
                </p>
              )}
            </li>
          ))}
        </ul>
        <AreaChart
          data={data}
          index="date"
          categories={["Actual costs", "Potential costs"]}
          colors={["blue", "cyan"]}
          showLegend={false}
          yAxisWidth={52}
          valueFormatter={currencyFormatter}
          fill="solid"
          className="mt-10 hidden !h-72 sm:block"
        />
        <AreaChart
          data={data}
          index="date"
          categories={["Actual costs", "Potential costs"]}
          colors={["blue", "cyan"]}
          showLegend={false}
          showYAxis={false}
          startEndOnly={true}
          valueFormatter={currencyFormatter}
          fill="solid"
          className="mt-6 !h-72 sm:hidden"
        />
      </div>
    </div>
  )
}
