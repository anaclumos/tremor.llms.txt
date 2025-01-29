"use client"

import { cx } from "@/lib/utils"

import { Card } from "../../atoms/Card"
import { LineChart } from "../../atoms/LineChart"

const data = [
  //array-start
  {
    date: "Jan 23",
    Munich: 42340,
    Zurich: 22320,
    Vienna: 12410,
  },
  {
    date: "Feb 23",
    Munich: 50120,
    Zurich: 32310,
    Vienna: 10300,
  },
  {
    date: "Mar 23",
    Munich: 45190,
    Zurich: 23450,
    Vienna: 10900,
  },
  {
    date: "Apr 23",
    Munich: 56420,
    Zurich: 13400,
    Vienna: 7900,
  },
  {
    date: "May 23",
    Munich: 40420,
    Zurich: 16400,
    Vienna: 12310,
  },
  {
    date: "Jun 23",
    Munich: 47010,
    Zurich: 18350,
    Vienna: 10250,
  },
  {
    date: "Jul 23",
    Munich: 47490,
    Zurich: 19950,
    Vienna: 12650,
  },
  {
    date: "Aug 23",
    Munich: 39610,
    Zurich: 10910,
    Vienna: 4650,
  },
  {
    date: "Sep 23",
    Munich: 45860,
    Zurich: 24740,
    Vienna: 12650,
  },
  {
    date: "Oct 23",
    Munich: 50910,
    Zurich: 15740,
    Vienna: 10430,
  },
  {
    date: "Nov 23",
    Munich: 4919,
    Zurich: 2874,
    Vienna: 2081,
  },
  {
    date: "Dec 23",
    Munich: 5519,
    Zurich: 2274,
    Vienna: 1479,
  },
  //array-end
]

const summary = [
  //array-start
  {
    location: "Munich",
    address: "Maximilianstrasse",
    color: "bg-blue-500 dark:bg-blue-500",
    type: "Flagship",
    total: "$460.2K",
    change: "+0.7%",
    changeType: "positive",
  },
  {
    location: "Zurich",
    address: "Bahnhofstrasse",
    color: "bg-violet-500 dark:bg-violet-500",
    type: "In-Store",
    total: "$237.3K",
    change: "-1.2%",
    changeType: "negative",
  },
  {
    location: "Vienna",
    address: "Stephansplatz",
    color: "bg-fuchsia-500 dark:bg-fuchsia-500",
    type: "In-Store",
    total: "$118.2K",
    change: "+4.6%",
    changeType: "positive",
  },
  //array-end
]

const currencyFormatter = (number: number) =>
  `$${Intl.NumberFormat("us").format(number).toString()}`

export default function Example() {
  return (
    <div className="obfuscate">
      <Card className="sm:mx-auto sm:max-w-lg">
        <h4 className="text-sm text-gray-500 dark:text-gray-500">Revenue</h4>
        <p className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
          $815,700
        </p>
        <LineChart
          data={data}
          index="date"
          categories={["Munich", "Zurich", "Vienna"]}
          colors={["blue", "violet", "fuchsia"]}
          showLegend={false}
          showYAxis={false}
          valueFormatter={currencyFormatter}
          className="mt-5 hidden !h-44 sm:block"
        />
        <LineChart
          data={data}
          index="date"
          categories={["Munich", "Zurich", "Vienna"]}
          colors={["blue", "violet", "fuchsia"]}
          showLegend={false}
          startEndOnly={true}
          showYAxis={false}
          valueFormatter={currencyFormatter}
          className="mt-5 !h-44 sm:hidden"
        />
        <ul className="mt-4 w-full divide-y divide-gray-200 truncate text-sm text-gray-500 dark:divide-gray-800 dark:text-gray-500">
          {summary.map((item) => (
            <li
              key={item.location}
              className="flex items-center justify-between py-2.5"
            >
              <div>
                <div className="flex items-center space-x-2">
                  <span
                    className={cx(
                      item.color,
                      "h-[3px] w-3.5 shrink-0 rounded-full",
                    )}
                    aria-hidden={true}
                  />
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-50">
                    {item.location}
                  </span>
                  <span className="rounded bg-gray-100 px-1.5 py-0.5 text-xs font-medium text-gray-500 dark:bg-gray-400/10 dark:text-gray-400">
                    {item.type}
                  </span>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-500">
                  {item.address}
                </span>
              </div>
              <div className="text-right">
                <p
                  className={cx(
                    item.changeType === "positive"
                      ? "text-emerald-700 dark:text-emerald-500"
                      : "text-red-700 dark:text-red-500",
                    "text-sm font-medium",
                  )}
                >
                  {item.change}
                </p>
                <span className="text-xs text-gray-500 dark:text-gray-500">
                  {item.total}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  )
}
