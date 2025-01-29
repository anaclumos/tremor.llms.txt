"use client"

import { cx } from "@/lib/utils"

import { Card } from "../../atoms/Card"

const data = [
  //array-start
  {
    name: "Recurring revenue",
    value: "$34.1K",
    change: "+6.1%",
    changeType: "positive",
  },
  {
    name: "Total users",
    value: "500.1K",
    change: "+19.2%",
    changeType: "positive",
  },
  {
    name: "User growth",
    value: "11.3%",
    change: "-1.2%",
    changeType: "negative",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <Card key={item.name}>
            <dd className="flex items-start justify-between">
              <span className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
                {item.value}
              </span>
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
            </dd>
            <dt className="mt-1 text-sm text-gray-500 dark:text-gray-500">
              {item.name}
            </dt>
          </Card>
        ))}
      </dl>
    </div>
  )
}
