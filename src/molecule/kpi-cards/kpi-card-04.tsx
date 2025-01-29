"use client"

import { cx } from "@/lib/utils"

import { Card } from "@/atom/Card"

const data = [
  //array-start
  {
    name: "Monthly recurring revenue",
    value: "$34.1K",
    change: "+6.1%",
    changeType: "positive",
    href: "#",
  },
  {
    name: "Users",
    value: "500.1K",
    change: "+19.2%",
    changeType: "positive",
    href: "#",
  },
  {
    name: "User growth",
    value: "11.3%",
    change: "-1.2%",
    changeType: "negative",
    href: "#",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <Card key={item.name} className="!p-0">
            <div className="px-4 py-4">
              <dd className="flex items-start justify-between space-x-2">
                <span className="truncate text-sm text-gray-500 dark:text-gray-500">
                  {item.name}
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
              <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-50">
                {item.value}
              </dd>
            </div>
            <div className="flex justify-end border-t border-gray-200 px-4 py-3 dark:border-gray-900">
              <a
                href={item.href}
                className="text-sm font-medium text-blue-500 hover:text-blue-600 dark:text-blue-500 hover:dark:text-blue-600"
              >
                View more &#8594;
              </a>
            </div>
          </Card>
        ))}
      </dl>
    </div>
  )
}
