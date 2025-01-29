"use client"

import { Card } from "../../atom/Card"
import { ProgressCircle } from "../../atom/ProgressCircle"

const data = [
  //array-start
  {
    name: "Performance",
    value: 91,
  },
  {
    name: "Accessibility",
    value: 65,
  },
  {
    name: "SEO",
    value: 43,
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="block sm:flex sm:items-start sm:justify-between sm:space-x-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">
            Web vitals scores
          </h3>
          <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor.
          </p>
        </div>
        <span className="mt-6 inline-flex w-full justify-center space-x-4 whitespace-nowrap rounded-md border border-gray-200 px-2 py-1 text-xs text-gray-900 sm:mt-0 sm:w-fit sm:items-center dark:border-gray-900 dark:text-gray-50">
          <span tabIndex={1} className="flex items-center gap-1.5">
            <span
              aria-hidden={true}
              className="size-2.5 rounded-sm bg-red-600 dark:bg-red-500"
            />
            0-50
          </span>
          <span tabIndex={1} className="flex items-center gap-1.5">
            <span
              aria-hidden={true}
              className="size-2.5 rounded-sm bg-orange-600 dark:bg-orange-500"
            />
            50-75
          </span>
          <span tabIndex={1} className="flex items-center gap-1.5">
            <span
              aria-hidden={true}
              className="size-2.5 rounded-sm bg-emerald-600 dark:bg-emerald-500"
            />
            75-100
          </span>
        </span>
      </div>
      <dl className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <Card key={item.name}>
            <dt className="text-sm text-gray-500 dark:text-gray-500">
              {item.name}
            </dt>
            <dd className="mt-3 flex items-center justify-between">
              <p className="text-3xl font-medium text-gray-900 dark:text-gray-50">
                {item.value}
                <span className="text-base text-gray-500 dark:text-gray-500">
                  /100
                </span>
              </p>
              <ProgressCircle
                value={item.value}
                radius={25}
                strokeWidth={5}
                color={
                  item.value >= 75
                    ? "emerald"
                    : item.value > 50
                      ? "orange"
                      : "red"
                }
              >
                <span className="text-xs font-medium text-gray-900 dark:text-gray-50">
                  {item.value}
                </span>
              </ProgressCircle>
            </dd>
          </Card>
        ))}
      </dl>
    </div>
  )
}
