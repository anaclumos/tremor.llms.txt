"use client"

import { cx } from "@/lib/utils"

import { Card } from "../../atoms/Card"

const data = [
  //array-start
  {
    name: "Monthly active users",
    stat: "996",
    change: "+1.3%",
    color: "bg-blue-500",
  },
  {
    name: "Monthly sessions",
    stat: "1,672",
    change: "+9.1%",
    color: "bg-violet-500",
  },
  {
    name: "Monthly user growth",
    stat: "5.1%",
    change: "-4.8%",
    color: "bg-fuchsia-500",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <Card key={item.name}>
            <div className="flex space-x-3">
              <div className={cx(item.color, "w-1 shrink-0 rounded")} />
              <dt className="flex w-full items-center justify-between space-x-3 truncate text-sm text-gray-500 dark:text-gray-500">
                <span className="truncate">{item.name}</span>
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  {item.change}
                </span>
              </dt>
            </div>
            <div className="mt-2 pl-4">
              <dd className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
                {item.stat}
              </dd>
            </div>
          </Card>
        ))}
      </dl>
    </div>
  )
}
