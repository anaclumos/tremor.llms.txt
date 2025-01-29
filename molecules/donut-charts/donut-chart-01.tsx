"use client"

import { cx } from "@/lib/utils"

import { Card } from "../../atoms/Card"
import { DonutChart } from "../../atoms/DonutChart"

const data = [
  //array-start
  {
    name: "Travel",
    amount: 6730,
    share: "32.1%",
    color: "bg-cyan-500 dark:bg-cyan-500",
  },
  {
    name: "IT & equipment",
    amount: 4120,
    share: "19.6%",
    color: "bg-blue-500 dark:bg-blue-500",
  },
  {
    name: "Training & development",
    amount: 3920,
    share: "18.6%",
    color: "bg-indigo-500 dark:bg-indigo-500",
  },
  {
    name: "Office supplies",
    amount: 3210,
    share: "15.3%",
    color: "bg-violet-500 dark:bg-violet-500",
  },
  {
    name: "Communication",
    amount: 3010,
    share: "14.3%",
    color: "bg-fuchsia-500 dark:bg-fuchsia",
  },
  //array-end
]

const currencyFormatter = (number: number) =>
  "$" + Intl.NumberFormat("us").format(number).toString()

export default function Example() {
  return (
    <>
      <Card className="sm:mx-auto sm:max-w-lg">
        <h3 className="text-sm font-medium text-gray-900 dark:text-gray-50">
          Total expenses by category
        </h3>
        <DonutChart
          className="mx-auto mt-8"
          data={data}
          category="name"
          value="amount"
          showLabel={true}
          valueFormatter={currencyFormatter}
          showTooltip={false}
          colors={["cyan", "blue", "indigo", "violet", "fuchsia"]}
        />
        <p className="mt-8 flex items-center justify-between text-xs text-gray-500 dark:text-gray-500">
          <span>Category</span>
          <span>Amount / Share</span>
        </p>
        <ul
          role="list"
          className="mt-2 divide-y divide-gray-200 text-sm text-gray-500 dark:divide-gray-800 dark:text-gray-500"
        >
          {data.map((item) => (
            <li
              key={item.name}
              className="relative flex items-center justify-between py-2"
            >
              <div className="flex items-center space-x-2.5 truncate">
                <span
                  className={cx(item.color, "size-2.5 shrink-0 rounded-sm")}
                  aria-hidden={true}
                />
                <span className="truncate dark:text-gray-300">{item.name}</span>
              </div>
              <p className="flex items-center space-x-2">
                <span className="font-medium tabular-nums text-gray-900 dark:text-gray-50">
                  {currencyFormatter(item.amount)}
                </span>
                <span className="rounded-md bg-gray-100 px-1.5 py-0.5 text-xs font-medium tabular-nums text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                  {item.share}
                </span>
              </p>
            </li>
          ))}
        </ul>
      </Card>
    </>
  )
}
