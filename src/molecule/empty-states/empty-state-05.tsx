"use client"

import { RiAddFill } from "@remixicon/react"

import { Button } from "@/atom/Button"
import { Card } from "@/atom/Card"
import { ProgressCircle } from "@/atom/ProgressCircle"

const data = [
  //array-start
  {
    name: "Storage",
    progress: 0,
    budget: "$0",
    current: "$0",
    href: "#",
  },
  {
    name: "API requests",
    progress: 0,
    budget: "$0",
    current: "$0",
    href: "#",
  },
  {
    name: "Web analytics",
    progress: 0,
    budget: "$0",
    current: "$0",
    href: "#",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="sm:flex sm:items-center sm:justify-between sm:space-x-2">
        <h2 className="font-medium text-gray-900 dark:text-gray-50">
          Overview
        </h2>
        <Button type="button" className="mt-2 w-full gap-1.5 sm:mt-0 sm:w-fit">
          <RiAddFill className="-ml-1 size-5 shrink-0" aria-hidden={true} />
          Add budget limits
        </Button>
      </div>
      <dl className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <Card key={item.name} className="!p-0">
            <div className="flex items-center space-x-3 px-6 pt-6">
              <ProgressCircle
                value={item.progress}
                radius={25}
                strokeWidth={5}
                variant="neutral"
              >
                <span className="text-xs font-medium text-gray-900 dark:text-gray-50">
                  {item.progress}&#37;
                </span>
              </ProgressCircle>
              <div>
                <dd className="text-sm font-medium text-gray-900 dark:text-gray-50">
                  {item.current} / {item.budget}
                </dd>
                <dt className="text-sm text-gray-500 dark:text-gray-500">
                  {item.name}
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
