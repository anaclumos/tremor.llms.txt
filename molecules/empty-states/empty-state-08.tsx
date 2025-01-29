"use client"

import { cx } from "@/lib/utils"

import { AreaChart } from "../../atoms/AreaChart"

const data = [
  //array-start
  {
    date: "12:00 AM",
    Revenue: 0,
    Profit: 0,
  },
  {
    date: "12:00 PM",
    Revenue: 0,
    Profit: 0,
  },
]

const summary = [
  {
    category: "Revenue",
    total: "$0",
    color: "bg-blue-500",
  },
  {
    category: "Profit",
    total: "$0",
    color: "bg-cyan-500",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <h3 className="font-medium text-gray-900 dark:text-gray-50">
        Revenue and profit overview
      </h3>
      <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt.
      </p>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {summary.map((item, index) => (
          <div key={index}>
            <div className="flex space-x-3">
              <span className={cx(item.color, "w-1 shrink-0 rounded")} />
              <p className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                {item.total}
              </p>
            </div>
            <p className="pl-4 text-sm text-gray-500 dark:text-gray-500">
              {item.category}
            </p>
          </div>
        ))}
      </div>
      <AreaChart
        data={data}
        index="date"
        categories={["Profit", "Revenue"]}
        colors={["cyan", "blue"]}
        showLegend={false}
        showYAxis={false}
        showTooltip={false}
        startEndOnly={true}
        className="mt-10 !h-72"
      />
    </div>
  )
}
