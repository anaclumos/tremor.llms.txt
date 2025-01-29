"use client"

import { RiExternalLinkLine } from "@remixicon/react"

import { Card } from "../../atom/Card"
import { ProgressCircle } from "../../atom/ProgressCircle"

const data = [
  //array-start
  {
    name: "Workspaces",
    capacity: 20,
    current: 1,
    allowed: 5,
  },
  {
    name: "Dashboards",
    capacity: 10,
    current: 2,
    allowed: 20,
  },
  {
    name: "Chart widgets",
    capacity: 0,
    current: 0,
    allowed: 50,
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <h2 className="text-lg font-medium text-gray-900 dark:text-gray-50">
        Plan overview
      </h2>
      <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
        You are currently on the{" "}
        <span className="font-medium text-gray-900 dark:text-gray-500">
          starter plan
        </span>
        .{" "}
        <a
          href="#"
          className="inline-flex items-center gap-1 text-blue-500 hover:underline hover:underline-offset-4 dark:text-blue-500"
        >
          View other plans
          <RiExternalLinkLine className="size-4" aria-hidden={true} />
        </a>
      </p>
      <dl className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <Card key={item.name}>
            <div className="flex items-center space-x-3">
              <ProgressCircle value={item.capacity} radius={25} strokeWidth={5}>
                <span className="text-xs font-medium text-gray-900 dark:text-gray-50">
                  {item.capacity}&#37;
                </span>
              </ProgressCircle>
              <div>
                <dt className="text-sm font-medium text-gray-900 dark:text-gray-50">
                  {item.name}
                </dt>
                <dd className="text-sm text-gray-500 dark:text-gray-500">
                  {item.current} of {item.allowed} used
                </dd>
              </div>
            </div>
          </Card>
        ))}
      </dl>
    </div>
  )
}
