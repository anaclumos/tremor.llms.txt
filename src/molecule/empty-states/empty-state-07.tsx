"use client"

import { RiAddFill, RiBarChartFill } from "@remixicon/react"

import { Button } from "../../atom/Button"
import { Card } from "../../atom/Card"

const data = [
  //array-start
  {
    name: "Sales",
    value: "--",
  },
  {
    name: "Profit",
    value: "--",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <Card className="!p-0">
        <div className="p-6">
          <h3 className="font-medium text-gray-900 dark:text-gray-50">
            Sales and profit overview
          </h3>
          <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt.
          </p>
        </div>
        <div className="border-t border-gray-200 p-6 dark:border-gray-900">
          <div className="flex flex-wrap gap-x-20 gap-y-6">
            {data.map((item) => (
              <div key={item.name}>
                <div className="flex items-center space-x-2">
                  <span
                    className="size-3 shrink-0 rounded-sm bg-gray-400 dark:bg-gray-600"
                    aria-hidden={true}
                  />
                  <p className="font-semibold text-gray-900 dark:text-gray-50">
                    {item.value}
                  </p>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex h-72 items-center justify-center rounded-md border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
            <div className="text-center">
              <RiBarChartFill
                className="mx-auto size-7 text-gray-400 dark:text-gray-600"
                aria-hidden={true}
              />
              <p className="mt-2 font-medium text-gray-900 dark:text-gray-50">
                No data to show
              </p>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
                No data sources yet available.
              </p>
              <Button className="mt-6">
                <RiAddFill
                  className="-ml-1 size-5 shrink-0"
                  aria-hidden={true}
                />
                Connect database
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
