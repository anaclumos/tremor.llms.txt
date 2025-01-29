"use client"

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
    borderColor: "border-blue-500 dark:border-blue-500",
  },
  {
    name: "Stocks & ETFs",
    amount: 250120,
    share: "9.6%",
    borderColor: "border-indigo-500 dark:border-indigo-500",
  },
  {
    name: "Bonds",
    amount: 140110,
    share: "5.4%",
    borderColor: "border-cyan-500 dark:border-cyan-500",
  },
  {
    name: "Metals",
    amount: 72980,
    share: "2.8%",
    borderColor: "border-purple-500 dark:border-purple-500",
  },
  {
    name: "Cash & Cash Equivalent",
    amount: 42980,
    share: "1.7%",
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
    borderColor: "border-blue-500 dark:border-blue-500",
  },
  {
    name: "Financial services",
    amount: 750342,
    share: "28.8%",
    borderColor: "border-indigo-500 dark:border-indigo-500",
  },
  {
    name: "Consumer products",
    amount: 550709,
    share: "21.2%",
    borderColor: "border-cyan-500 dark:border-cyan-500",
  },
  {
    name: "Energy",
    amount: 200220,
    share: "7.7%",
    borderColor: "border-purple-500 dark:border-purple-500",
  },
  {
    name: "Media & Entertainment",
    amount: 150169,
    share: "5.8%",
    borderColor: "border-fuchsia-500 dark:border-fuchsia-500",
  },
  //array-end
]

const summary = [
  {
    name: "Class",
    data: dataByClass,
  },
  {
    name: "Sector",
    data: dataBySector,
  },
]

const currencyFormatter = (number: number) => {
  return "$" + Intl.NumberFormat("us").format(number).toString()
}

export default function Example() {
  return (
    <div className="obfuscate">
      <Card className="!p-0 sm:mx-auto sm:max-w-lg">
        <div className="px-6 pt-6">
          <h3 className="text-sm font-medium text-gray-900 dark:text-gray-50">
            Expenses breakdown
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
          <div className="px-6 pb-6">
            {summary.map((category) => (
              <TabsContent key={category.name} value={category.name}>
                <DonutChart
                  className="mx-auto mt-8"
                  data={category.data}
                  value="amount"
                  category="name"
                  valueFormatter={currencyFormatter}
                  showLabel={true}
                  showTooltip={false}
                  colors={["blue", "indigo", "cyan", "purple", "fuchsia"]}
                />
                <p className="mt-8 flex items-center justify-between text-xs text-gray-500 dark:text-gray-500">
                  <span>{category.name}</span>
                  <span>Amount / Share</span>
                </p>
                <ul
                  role="list"
                  className="mt-2 divide-y divide-gray-200 text-sm text-gray-500 dark:divide-gray-800 dark:text-gray-500"
                >
                  {category.data.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-center justify-between space-x-4 truncate py-2"
                    >
                      <div
                        className={cx(
                          item.borderColor,
                          "flex h-8 items-center truncate border-l-[2.5px] pl-4",
                        )}
                      >
                        <span className="truncate dark:text-gray-300">
                          {item.name}
                        </span>
                      </div>
                      <span className="font-medium tabular-nums text-gray-900 dark:text-gray-50">
                        {currencyFormatter(item.amount)}{" "}
                        <span className="font-normal">({item.share})</span>
                      </span>
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
