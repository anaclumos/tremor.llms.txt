"use client"

import { Card } from "../../atom/Card"
import { ProgressBar } from "../../atom/ProgressBar"

const data = [
  //array-start
  {
    name: "Average tokes per requests",
    total: "341",
    details: [
      {
        name: "Completion token",
        value: "136",
        percentageValue: 40,
      },
      {
        name: "Prompt token",
        value: "205",
        percentageValue: 60,
      },
    ],
  },
  {
    name: "Total tokens",
    total: "4,229",
    details: [
      {
        name: "Completion token",
        value: "1,480",
        percentageValue: 35,
      },
      {
        name: "Prompt token",
        value: "2,749",
        percentageValue: 65,
      },
    ],
  },
  {
    name: "Total tokens by advanced model",
    total: "1,040",
    details: [
      {
        name: "Completion token",
        value: "260",
        percentageValue: 25,
      },
      {
        name: "Prompt token",
        value: "780",
        percentageValue: 75,
      },
    ],
  },
  {
    name: "Total tokens by base model",
    total: "2,920",
    details: [
      {
        name: "Completion token",
        value: "847",
        percentageValue: 29,
      },
      {
        name: "Prompt token",
        value: "2,073",
        percentageValue: 71,
      },
    ],
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <dl className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {data.map((category) => (
          <Card key={category.name}>
            <dt className="text-sm text-gray-500 dark:text-gray-500">
              {category.name}
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-50">
              {category.total}
            </dd>
            <div className="mt-4 space-y-3">
              {category.details.map((item) => (
                <dd
                  key={item.name}
                  className="lg:flex lg:items-center lg:space-x-3"
                >
                  <p className="flex shrink-0 items-center justify-between space-x-2 text-sm lg:w-5/12">
                    <span className="truncate text-gray-500 dark:text-gray-500">
                      {item.name}
                    </span>
                    <span className="whitespace-nowrap font-semibold text-gray-900 dark:text-gray-50">
                      {item.value}{" "}
                      <span className="font-normal">
                        ({item.percentageValue}&#37;)
                      </span>
                    </span>
                  </p>
                  <ProgressBar
                    value={item.percentageValue}
                    className="mt-2 lg:mt-0"
                  />
                </dd>
              ))}
            </div>
          </Card>
        ))}
      </dl>
    </div>
  )
}
