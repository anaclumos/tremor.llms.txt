"use client"

import { cx } from "@/lib/utils"

import { Card } from "../../atoms/Card"

const data = [
  //array-start
  {
    name: "Daily active users",
    stat: "3,450",
    change: "+12.1%",
    changeType: "positive",
  },
  {
    name: "Weekly sessions",
    stat: "1,342",
    change: "-9.8%",
    changeType: "negative",
  },
  {
    name: "Duration",
    stat: "5.2min",
    change: "+7.7%",
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
            <div className="flex items-center justify-between">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-500">
                {item.name}
              </dt>
              <span
                className={cx(
                  item.changeType === "positive"
                    ? "bg-emerald-100 text-emerald-800 ring-emerald-600/10 dark:bg-emerald-400/10 dark:text-emerald-500 dark:ring-emerald-400/20"
                    : "bg-red-100 text-red-800 ring-red-600/10 dark:bg-red-400/10 dark:text-red-500 dark:ring-red-400/20",
                  "inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset",
                )}
              >
                {item.change}
              </span>
            </div>
            <dd className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
              {item.stat}
            </dd>
          </Card>
        ))}
      </dl>
    </div>
  )
}
