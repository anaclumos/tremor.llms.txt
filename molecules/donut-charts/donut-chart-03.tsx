"use client"

import { cx } from "@/lib/utils"

import { Card } from "../../atoms/Card"
import { DonutChart } from "../../atoms/DonutChart"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../atoms/Tabs"

const dataByCategory = [
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
    color: "bg-fuchsia-500 dark:bg-fuchsia-500",
  },
  //array-end
]

const dataByEmployee = [
  //array-start
  {
    name: "Max Down",
    amount: 5710,
    share: "27.2%",
    color: "bg-cyan-500 dark:bg-cyan-500",
  },
  {
    name: "Lena Smith",
    amount: 4940,
    share: "23.5%",
    color: "bg-blue-500 dark:bg-blue-500",
  },
  {
    name: "Joe Doe",
    amount: 4523,
    share: "21.5%",
    color: "bg-indigo-500 dark:bg-indigo-500",
  },
  {
    name: "Kathy Miller",
    amount: 3240,
    share: "15.4%",
    color: "bg-violet-500 dark:bg-violet-500",
  },
  {
    name: "Nelly Wave",
    amount: 2577,
    share: "12.3%",
    color: "bg-fuchsia-500 dark:bg-fuchsia-500",
  },
  //array-end
]

const summary = [
  //array-start
  {
    name: "Category",
    data: dataByCategory,
  },
  {
    name: "Employee",
    data: dataByEmployee,
  },
  //array-end
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
                  colors={["cyan", "blue", "indigo", "violet", "fuchsia"]}
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
                      className="flex items-center justify-between space-x-6 py-2"
                    >
                      <div className="flex items-center space-x-2.5 truncate">
                        <span
                          className={cx(
                            item.color,
                            "size-2.5 shrink-0 rounded-sm",
                          )}
                          aria-hidden={true}
                        />
                        <span className="truncate dark:text-gray-300">
                          {item.name}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium tabular-nums text-gray-900 dark:text-gray-500">
                          {currencyFormatter(item.amount)}
                        </span>
                        <span className="rounded-md bg-gray-100 px-1.5 py-0.5 text-xs font-medium tabular-nums text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                          {item.share}
                        </span>
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
