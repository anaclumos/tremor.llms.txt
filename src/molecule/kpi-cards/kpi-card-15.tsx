"use client"

import { Card } from "../../atom/Card"
import { ProgressBar } from "../../atom/ProgressBar"

const data = [
  //array-start
  {
    name: "Requests",
    stat: "996",
    limit: "10,000",
    percentage: 9.96,
  },
  {
    name: "Credits",
    stat: "$672",
    limit: "$1,000",
    percentage: 67.2,
  },
  {
    name: "Storage",
    stat: "1.85",
    limit: "10GB",
    percentage: 18.5,
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <Card key={item.name}>
            <dt className="text-sm text-gray-500 dark:text-gray-500">
              {item.name}
            </dt>
            <dd className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
              {item.stat}
            </dd>
            <ProgressBar value={item.percentage} className="mt-6" />
            <dd className="mt-2 flex items-center justify-between text-sm">
              <span className="text-blue-500 dark:text-blue-500">
                {item.percentage}&#37;
              </span>
              <span className="text-gray-500 dark:text-gray-500">
                {item.stat} of {item.limit}
              </span>
            </dd>
          </Card>
        ))}
      </dl>
    </div>
  )
}
