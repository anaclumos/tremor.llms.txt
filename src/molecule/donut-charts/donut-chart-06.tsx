"use client"

import { cx } from "@/lib/utils"

import { Card } from "../../atom/Card"
import { DonutChart } from "../../atom/DonutChart"

const data = [
  //array-start
  {
    name: "Real estate",
    amount: 2095920,
    share: "84.3%",
    href: "#",
    borderColor: "bg-blue-500 dark:bg-blue-500",
  },
  {
    name: "Stocks & ETFs",
    amount: 250120,
    share: "10.1%",
    href: "#",
    borderColor: "bg-violet-500 dark:bg-violet-500",
  },
  {
    name: "Cash & cash equivalent",
    amount: 140110,
    share: "5.6%",
    href: "#",
    borderColor: "bg-fuchsia-500 dark:bg-fuchsia-500",
  },
  //array-end
]

const currencyFormatter = (number: number) => {
  return "$" + Intl.NumberFormat("us").format(number).toString()
}

export default function Example() {
  return (
    <div className="obfuscate">
      <Card className="sm:mx-auto sm:max-w-xl">
        <h3 className="text-sm font-medium text-gray-900 dark:text-gray-50">
          Asset allocation
        </h3>
        <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-8">
          <DonutChart
            data={data}
            value="amount"
            category="name"
            valueFormatter={currencyFormatter}
            showTooltip={false}
            className="mx-auto h-40"
            showLabel={true}
            colors={["blue", "violet", "fuchsia"]}
          />
          <div className="mt-6 flex items-center sm:mt-0">
            <ul role="list" className="space-y-3">
              {data.map((item) => (
                <li key={item.name} className="flex space-x-3">
                  <span
                    className={cx(item.borderColor, "w-1 shrink-0 rounded")}
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
                      {currencyFormatter(item.amount)}{" "}
                      <span className="font-normal">({item.share})</span>
                    </p>
                    <p className="mt-0.5 whitespace-nowrap text-sm text-gray-500 dark:text-gray-500">
                      {item.name}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
    </div>
  )
}
