"use client"

import { cx } from "@/lib/utils"

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
    name: "Metals",
    amount: 160720,
    share: "10.1%",
    href: "#",
    borderColor: "bg-fuchsia-500 dark:bg-fuchsia-500",
  },
  //array-enddev
]

const currencyFormatter = (number: number) => {
  return "$" + Intl.NumberFormat("us").format(number).toString()
}

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="max-w-7xl">
        <h3 className="text-sm font-medium text-gray-900 dark:text-gray-50">
          Asset allocation
        </h3>
        <div className="mt-6 lg:flex lg:items-end lg:justify-between">
          <div className="flex items-center justify-start space-x-4 lg:items-end">
            <DonutChart
              data={data}
              value="amount"
              category="name"
              valueFormatter={currencyFormatter}
              showTooltip={false}
              className="!h-20 !w-20"
              showLabel={false}
              colors={["blue", "violet", "fuchsia"]}
            />
            <div>
              <p className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                $2,450,790
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Total asset value
              </p>
            </div>
          </div>
          <ul
            role="list"
            className="mt-6 grid grid-cols-1 gap-px bg-gray-200 lg:mt-0 lg:grid-cols-3 dark:bg-gray-800"
          >
            {data.map((item) => (
              // Adjust dark:bg-gray-950 accordingly if a different dark mode background tone is set
              <li
                key={item.name}
                className="bg-white px-0 py-3 lg:px-4 lg:py-0 lg:text-right dark:bg-gray-950"
              >
                <p className="text-sm font-semibold text-gray-900 dark:text-gray-50">
                  {currencyFormatter(item.amount)}{" "}
                  <span className="font-normal">({item.share})</span>
                </p>
                <div className="flex items-center space-x-2 lg:justify-end">
                  <span
                    className={cx(
                      item.borderColor,
                      "size-2.5 shrink-0 rounded-sm",
                    )}
                    aria-hidden={true}
                  />
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    {item.name}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
