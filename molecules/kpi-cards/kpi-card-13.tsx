"use client"

import { Card } from "../../atoms/Card"
import { ProgressCircle } from "../../atoms/ProgressCircle"

const data = [
  //array-start
  {
    name: "HR",
    progress: 25,
    budget: "$1,000",
    current: "$250",
    href: "#",
  },
  {
    name: "Marketing",
    progress: 55,
    budget: "$1,000",
    current: "$550",
    href: "#",
  },
  {
    name: "Finance",
    progress: 85,
    budget: "$1,000",
    current: "$850",
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
            <div className="flex items-center space-x-3 px-6 pt-6">
              <ProgressCircle value={item.progress} radius={25} strokeWidth={5}>
                <span className="text-xs font-medium text-gray-900 dark:text-gray-50">
                  {item.progress}&#37;
                </span>
              </ProgressCircle>
              <div>
                <dd className="text-sm font-medium text-gray-900 dark:text-gray-50">
                  {item.current} / {item.budget}
                </dd>
                <dt className="text-sm text-gray-500 dark:text-gray-500">
                  Budget {item.name}
                </dt>
              </div>
            </div>
            <div className="mt-8 flex items-center justify-end border-t border-gray-200 px-6 py-3 dark:border-gray-900">
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
