"use client"

import { RiExternalLinkLine } from "@remixicon/react"

import { Card } from "../../atoms/Card"
import { ProgressCircle } from "../../atoms/ProgressCircle"

const data = [
  //array-start
  {
    name: "Storage used",
    capacity: "0/10GB",
    value: 0,
  },
  {
    name: "Members",
    capacity: "0/50",
    value: 0,
  },
  {
    name: "API requests",
    capacity: "0/100K",
    value: 0,
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <Card className="overflow-hidden !p-0 sm:mx-auto sm:max-w-lg">
        <div className="p-6">
          <h3 className="text-sm font-medium text-gray-900 dark:text-gray-50">
            Capacity
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            No activity measured yet.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {data.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-4 sm:flex-col sm:justify-center sm:gap-1.5"
              >
                <ProgressCircle value={0} variant="neutral">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-500">
                    {item.value}%
                  </span>
                </ProgressCircle>
                <div className="mt-0 text-left sm:mt-2 sm:text-center">
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
                    {item.capacity}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    {item.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-2 border-t border-gray-200 bg-gray-50 px-6 py-4 dark:border-gray-900 dark:bg-gray-950">
          <h4 className="text-sm font-medium text-gray-900 dark:text-gray-50">
            Usage updated hourly
          </h4>
          <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-500">
            Monthly usage resets in 4 days.{" "}
            <a
              href="#"
              className="inline-flex items-center gap-1 rounded text-sm text-blue-500 hover:underline hover:underline-offset-4 dark:text-blue-500"
            >
              Manage plan
              <RiExternalLinkLine className="size-4" aria-hidden={true} />
            </a>
          </p>
        </div>
      </Card>
    </div>
  )
}
