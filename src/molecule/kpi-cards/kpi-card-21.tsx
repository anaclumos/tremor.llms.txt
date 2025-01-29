"use client"

import { cx } from "@/lib/utils"

import { Card } from "../../atom/Card"
import { CategoryBar } from "../../atom/CategoryBar"

const data = [
  //array-start
  {
    name: "Average tokes per requests",
    total: "341",
    split: [136, 205],
    details: [
      {
        name: "Completion tokens",
        value: "136",
      },
      {
        name: "Prompt tokens",
        value: "205",
      },
    ],
  },
  {
    name: "Total tokens",
    total: "4,229",
    split: [1480, 2749],
    details: [
      {
        name: "Completion tokens",
        value: "1,480",
      },
      {
        name: "Prompt tokens",
        value: "2,749",
      },
    ],
  },
  {
    name: "Total tokens by advanced model",
    total: "1,040",
    split: [260, 780],
    details: [
      {
        name: "Completion tokens",
        value: "260",
      },
      {
        name: "Prompt tokens",
        value: "780",
      },
    ],
  },
  {
    name: "Total tokens by base model",
    total: "2,920",
    split: [847, 2073],
    details: [
      {
        name: "Completion tokens",
        value: "847",
      },
      {
        name: "Prompt tokens",
        value: "2,073",
      },
    ],
  },
  //array-end
]

type LegendItem = "Completion tokens" | "Prompt tokens"

const legendColor: Record<LegendItem, string> = {
  "Completion tokens": "bg-sky-500 dark:bg-sky-500",
  "Prompt tokens": "bg-indigo-500 dark:bg-indigo-500",
}

export default function Example() {
  return (
    <div className="obfuscate">
      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {data.map((item) => (
          <Card key={item.name}>
            <dt className="truncate text-sm text-gray-500 dark:text-gray-500">
              {item.name}
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-50">
              {item.total}
            </dd>
            <CategoryBar
              values={item.split}
              colors={["cyan", "indigo"]}
              showLabels={false}
              className="mt-6"
            />
            <ul
              role="list"
              className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2"
            >
              {item.details.map((category) => (
                <li key={category.name} className="flex items-center space-x-2">
                  <span
                    className={cx(
                      legendColor[category.name as LegendItem],
                      "size-3 shrink-0 rounded-sm",
                    )}
                    aria-hidden={true}
                  />
                  <span className="text-sm text-gray-500 dark:text-gray-500">
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      {category.value}
                    </span>{" "}
                    {category.name}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </dl>
    </div>
  )
}
