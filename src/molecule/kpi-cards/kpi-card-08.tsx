"use client"

import { RiArrowDownSFill, RiArrowUpSFill } from "@remixicon/react"

import { cx } from "@/lib/utils"

import { Card } from "../../atom/Card"

const data = [
  //array-start
  {
    name: "Monthly active users",
    stat: "340",
    previousStat: "400",
    change: "15%",
    changeType: "negative",
  },
  {
    name: "Monthly sessions",
    stat: "672",
    previousStat: "350",
    change: "91.4%",
    changeType: "positive",
  },
  {
    name: "Monthly page views",
    stat: "3,290",
    previousStat: "3,012",
    change: "9.2%",
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
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-500">
              {item.name}
            </dt>
            <dd className="mt-1 flex items-baseline space-x-2.5">
              <p className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
                {item.stat}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                from {item.previousStat}
              </p>
            </dd>
            <dd className="mt-4 flex items-center space-x-2">
              <p className="flex items-center space-x-0.5">
                {item.changeType === "positive" ? (
                  <RiArrowUpSFill
                    className="size-5 shrink-0 text-emerald-700 dark:text-emerald-500"
                    aria-hidden={true}
                  />
                ) : (
                  <RiArrowDownSFill
                    className="size-5 shrink-0 text-red-700 dark:text-red-500"
                    aria-hidden={true}
                  />
                )}
                <span
                  className={cx(
                    item.changeType === "positive"
                      ? "text-emerald-700 dark:text-emerald-500"
                      : "text-red-700 dark:text-red-500",
                    "text-sm font-medium",
                  )}
                >
                  {item.change}
                </span>
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                from previous month
              </p>
            </dd>
          </Card>
        ))}
      </dl>
    </div>
  )
}
