"use client"

import { cx } from "@/lib/utils"

import { Card } from "../../atoms/Card"

const data = [
  //array-start
  {
    name: "Monthly active users",
    stat: "340",
    previousStat: "400",
    change: "-15%",
    changeType: "negative",
  },
  {
    name: "Monthly sessions",
    stat: "672",
    previousStat: "350",
    change: "+91.4%",
    changeType: "positive",
  },
  {
    name: "Monthly page views",
    stat: "3,290",
    previousStat: "3,012",
    change: "+9.2%",
    changeType: "positive",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <Card key={item.name}>
            <div className="flex items-center justify-between space-x-4">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-500">
                {item.name}
              </dt>
              <dd
                className={cx(
                  item.changeType === "positive"
                    ? "text-emerald-700 dark:text-emerald-500"
                    : "text-red-700 dark:text-red-500",
                  "text-sm font-medium",
                )}
              >
                {item.change}
              </dd>
            </div>
            <dd className="mt-1 flex items-baseline space-x-3">
              <span className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
                {item.stat}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-500">
                from {item.previousStat}
              </span>
            </dd>
          </Card>
        ))}
      </dl>
    </div>
  )
}
