"use client"

import { Card } from "../../atom/Card"
import { LineChart } from "../../atom/LineChart"

const data = [
  //array-start
  { date: "Aug 01", price: 21.2 },
  { date: "Aug 02", price: 29.0 },
  { date: "Aug 03", price: 48.5 },
  { date: "Aug 04", price: 53.8 },
  { date: "Aug 05", price: 57.7 },
  { date: "Aug 06", price: 59.9 },
  { date: "Aug 07", price: 41.4 },
  { date: "Aug 08", price: 60.2 },
  { date: "Aug 09", price: 62.8 },
  { date: "Aug 10", price: 62.5 },
  { date: "Aug 11", price: 63.6 },
  { date: "Aug 12", price: 64.4 },
  { date: "Aug 13", price: 65.1 },
  { date: "Aug 14", price: 66.4 },
  { date: "Aug 15", price: 71.6 },
  { date: "Aug 16", price: 79.5 },
  { date: "Aug 17", price: 102.8 },
  { date: "Aug 18", price: 103.2 },
  { date: "Aug 19", price: 105.4 },
  { date: "Aug 20", price: 110.9 },
  { date: "Aug 21", price: 67.7 },
  { date: "Aug 22", price: 69.8 },
  { date: "Aug 23", price: 79.5 },
  { date: "Aug 24", price: 90.0 },
  { date: "Aug 25", price: 91.2 },
  { date: "Aug 26", price: 95.1 },
  { date: "Aug 27", price: 99.8 },
  { date: "Aug 28", price: 100.6 },
  { date: "Aug 29", price: 102.8 },
  { date: "Aug 30", price: 100.5 },
  { date: "Aug 31", price: 111.6 },
  { date: "Sep 01", price: 123.2 },
  { date: "Sep 02", price: 125.8 },
  { date: "Sep 03", price: 120.4 },
  { date: "Sep 04", price: 121.9 },
  { date: "Sep 05", price: 124.5 },
  { date: "Sep 06", price: 127.7 },
  { date: "Sep 07", price: 129.2 },
  { date: "Sep 08", price: 130.8 },
  { date: "Sep 09", price: 134.4 },
  { date: "Sep 10", price: 136.0 },
  { date: "Sep 11", price: 137.5 },
  { date: "Sep 12", price: 131.1 },
  { date: "Sep 13", price: 128.6 },
  { date: "Sep 14", price: 124.2 },
  { date: "Sep 15", price: 120.8 },
  { date: "Sep 16", price: 118.3 },
  { date: "Sep 17", price: 101.9 },
  { date: "Sep 18", price: 121.5 },
  { date: "Sep 19", price: 129.1 },
  { date: "Sep 20", price: 131.6 },
  { date: "Sep 21", price: 141.2 },
  { date: "Sep 22", price: 142.8 },
  { date: "Sep 23", price: 143.3 },
  { date: "Sep 24", price: 149.9 },
  { date: "Sep 25", price: 159.5 },
  { date: "Sep 26", price: 173.3 },
  //array-end
]

const summary = [
  //array-start
  {
    name: "Open",
    value: "$153.56",
  },
  {
    name: "High",
    value: "$154.78",
  },
  {
    name: "Volume",
    value: "$48,14M",
  },
  {
    name: "Low",
    value: "$179.12",
  },
  {
    name: "Close",
    value: "$173.34",
  },
  {
    name: "Market Cap",
    value: "$1,58B",
  },
  //array-end
]

const valueFormatter = (number: number) =>
  `$${Intl.NumberFormat("us").format(number).toString()}`

export default function Example() {
  return (
    <div className="obfuscate">
      <Card className="sm:mx-auto sm:max-w-lg">
        <h3 className="text-sm text-gray-500 dark:text-gray-500">
          Amazon, Inc. (AMZN)
        </h3>
        <p className="mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-50">
          $173.30
        </p>
        <p className="mt-1 text-sm font-medium">
          <span className="text-emerald-700 dark:text-emerald-500">
            +$9.30 (8.6%)
          </span>{" "}
          <span className="font-normal text-gray-500 dark:text-gray-500">
            Past 24 hours
          </span>
        </p>
        <LineChart
          data={data}
          index="date"
          categories={["price"]}
          valueFormatter={valueFormatter}
          showLegend={false}
          showYAxis={false}
          className="mt-6 !h-48"
        />
        <div className="justify-betwee mt-4 flex gap-6">
          <ul
            role="list"
            className="mt-2 w-full divide-y divide-gray-200 truncate text-sm text-gray-500 dark:divide-gray-800 dark:text-gray-500"
          >
            {summary.slice(0, 3).map((item) => (
              <li
                key={item.name}
                className="flex items-center justify-between py-2.5"
              >
                <span className="truncate">{item.name}</span>
                <span className="font-medium text-gray-900 dark:text-gray-50">
                  {item.value}
                </span>
              </li>
            ))}
          </ul>
          <ul
            role="list"
            className="mt-2 w-full divide-y divide-gray-200 truncate text-sm text-gray-500 dark:divide-gray-800 dark:text-gray-500"
          >
            {summary.slice(3, 6).map((item) => (
              <li
                key={item.name}
                className="flex items-center justify-between py-2.5"
              >
                <span className="truncate">{item.name}</span>
                <span className="font-medium text-gray-900 dark:text-gray-50">
                  {item.value}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </div>
  )
}
