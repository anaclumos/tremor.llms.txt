"use client"

import { RiArrowRightSLine } from "@remixicon/react"

import { cx } from "@/lib/utils"

import { Card } from "../../atoms/Card"
import { DonutChart } from "../../atoms/DonutChart"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../atoms/Tabs"

const dataByClass = [
  //array-start
  {
    name: "Real estate",
    amount: 2095920,
    share: "80.5%",
    href: "#",
    borderColor: "border-blue-500 dark:border-blue-500",
  },
  {
    name: "Stocks & ETFs",
    amount: 250120,
    share: "9.6%",
    href: "#",
    borderColor: "border-indigo-500 dark:border-indigo-500",
  },
  {
    name: "Bonds",
    amount: 140110,
    share: "5.4%",
    href: "#",
    borderColor: "border-cyan-500 dark:border-cyan-500",
  },
  {
    name: "Metals",
    amount: 72980,
    share: "2.8%",
    href: "#",
    borderColor: "border-purple-500 dark:border-purple-500",
  },
  {
    name: "Cash & cash equivalent",
    amount: 42980,
    share: "1.7%",
    href: "#",
    borderColor: "border-fuchsia-500 dark:border-fuchsia-500",
  },
  //array-end
]

const dataBySector = [
  //array-start
  {
    name: "Technology",
    amount: 950670,
    share: "36.5%",
    href: "#",
    borderColor: "border-blue-500 dark:border-blue-500",
  },
  {
    name: "Financial services",
    amount: 750342,
    share: "28.8%",
    href: "#",
    borderColor: "border-indigo-500 dark:border-indigo-500",
  },
  {
    name: "Consumer products",
    amount: 550709,
    share: "21.2%",
    href: "#",
    borderColor: "border-cyan-500 dark:border-cyan-500",
  },
  {
    name: "Energy",
    amount: 200220,
    share: "7.7%",
    href: "#",
    borderColor: "border-purple-500 dark:border-purple-500",
  },
  {
    name: "Media & Entertainment",
    amount: 150169,
    share: "5.8%",
    href: "#",
    borderColor: "border-fuchsia-500 dark:border-fuchsia-500",
  },
  //array-end
]

const summary = [
  //array-start
  {
    name: "Class",
    data: dataByClass,
  },
  {
    name: "Sector",
    data: dataBySector,
  },
  //array-end
]

const currencyFormatter = (number: number) => {
  return "$" + Intl.NumberFormat("us").format(number).toString()
}

export default function Example() {
  return (
    <div className="obfuscate">
      <Card className="overflow-hidden !p-0 sm:mx-auto sm:max-w-lg">
        <div className="px-6 pt-6">
          <h3 className="text-sm font-medium text-gray-900 dark:text-gray-50">
            Asset allocation
          </h3>
          <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
          </p>
        </div>
        <Tabs defaultValue={summary[0].name}>
          <TabsList className="px-6 pt-6">
            {summary.map((category) => (
              <TabsTrigger key={category.name} value={category.name}>
                By {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="pt-8">
            {summary.map((category) => (
              <TabsContent key={category.name} value={category.name}>
                <div className="px-6 pb-6">
                  <DonutChart
                    className="mx-auto"
                    data={category.data}
                    value="amount"
                    category="name"
                    valueFormatter={currencyFormatter}
                    showLabel={true}
                    showTooltip={false}
                    colors={["blue", "indigo", "cyan", "purple", "fuchsia"]}
                  />
                </div>
                <ul
                  role="list"
                  className="mt-2 divide-y divide-gray-200 border-t border-gray-200 text-sm text-gray-500 dark:divide-gray-800 dark:border-gray-900 dark:text-gray-500"
                >
                  {category.data.map((item) => (
                    <li
                      key={item.name}
                      className="group relative flex items-center justify-between space-x-4 truncate pr-4 hover:bg-gray-50 hover:dark:bg-gray-900"
                    >
                      <div
                        className={cx(
                          item.borderColor,
                          "flex h-12 items-center truncate border-l-2 pl-4",
                        )}
                      >
                        <span className="truncate group-hover:text-gray-700 dark:text-gray-300 group-hover:dark:text-gray-50">
                          <a href={item.href} className="focus:outline-none">
                            {/* extend link to entire list item */}
                            <span
                              className="absolute inset-0"
                              aria-hidden={true}
                            />
                            {item.name}
                          </a>
                        </span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <span className="font-medium tabular-nums text-gray-900 dark:text-gray-50">
                          {currencyFormatter(item.amount)}{" "}
                          <span className="font-normal text-gray-500 dark:text-gray-500">
                            ({item.share})
                          </span>
                        </span>
                        <RiArrowRightSLine
                          className="size-4 shrink-0 text-gray-400 group-hover:text-gray-500 dark:text-gray-600 group-hover:dark:text-gray-500"
                          aria-hidden={true}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </Card>
    </div>
  )
}
