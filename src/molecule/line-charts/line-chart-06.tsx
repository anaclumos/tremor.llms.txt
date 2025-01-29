"use client"

import { cx } from "@/lib/utils"

import { Card } from "../../atom/Card"
import { LineChart } from "../../atom/LineChart"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../atom/Tabs"

const data = [
  //array-start
  { date: "Aug 01", "Market Index": 44.1, Portfolio: 79.2 },
  { date: "Aug 02", "Market Index": 49.1, Portfolio: 89.1 },
  { date: "Aug 03", "Market Index": 61.2, Portfolio: 91.7 },
  { date: "Aug 04", "Market Index": 49.7, Portfolio: 74.4 },
  { date: "Aug 05", "Market Index": 71.1, Portfolio: 95.3 },
  { date: "Aug 06", "Market Index": 75.3, Portfolio: 99.4 },
  { date: "Aug 07", "Market Index": 74.1, Portfolio: 101.2 },
  { date: "Aug 08", "Market Index": 78.4, Portfolio: 102.2 },
  { date: "Aug 09", "Market Index": 81.1, Portfolio: 103.6 },
  { date: "Aug 10", "Market Index": 82.6, Portfolio: 104.4 },
  { date: "Aug 11", "Market Index": 89.3, Portfolio: 106.3 },
  { date: "Aug 12", "Market Index": 79.3, Portfolio: 109.5 },
  { date: "Aug 13", "Market Index": 78.6, Portfolio: 110.4 },
  { date: "Aug 14", "Market Index": 73.8, Portfolio: 113.5 },
  { date: "Aug 15", "Market Index": 69.7, Portfolio: 114.1 },
  { date: "Aug 16", "Market Index": 62.6, Portfolio: 121.4 },
  { date: "Aug 17", "Market Index": 59.3, Portfolio: 120.4 },
  { date: "Aug 18", "Market Index": 57.1, Portfolio: 110.7 },
  { date: "Aug 19", "Market Index": 55.1, Portfolio: 118.8 },
  { date: "Aug 20", "Market Index": 54.3, Portfolio: 123.1 },
  { date: "Aug 21", "Market Index": 53.2, Portfolio: 110.2 },
  { date: "Aug 22", "Market Index": 49.4, Portfolio: 101.2 },
  { date: "Aug 23", "Market Index": 48.1, Portfolio: 99.2 },
  { date: "Aug 24", "Market Index": 27.1, Portfolio: 105.8 },
  { date: "Aug 25", "Market Index": 21.0, Portfolio: 109.4 },
  { date: "Aug 26", "Market Index": 21.3, Portfolio: 110.1 },
  { date: "Aug 27", "Market Index": 21.8, Portfolio: 119.6 },
  { date: "Aug 28", "Market Index": 29.4, Portfolio: 121.3 },
  { date: "Aug 29", "Market Index": 32.4, Portfolio: 129.1 },
  { date: "Aug 30", "Market Index": 37.1, Portfolio: 134.5 },
  { date: "Aug 31", "Market Index": 41.3, Portfolio: 144.2 },
  { date: "Sep 01", "Market Index": 48.1, Portfolio: 145.1 },
  { date: "Sep 02", "Market Index": 51.3, Portfolio: 142.5 },
  { date: "Sep 03", "Market Index": 52.8, Portfolio: 140.9 },
  { date: "Sep 04", "Market Index": 54.4, Portfolio: 138.7 },
  { date: "Sep 05", "Market Index": 57.1, Portfolio: 135.2 },
  { date: "Sep 06", "Market Index": 67.9, Portfolio: 136.2 },
  { date: "Sep 07", "Market Index": 78.8, Portfolio: 136.2 },
  { date: "Sep 08", "Market Index": 89.2, Portfolio: 146.2 },
  { date: "Sep 09", "Market Index": 99.2, Portfolio: 145.2 },
  { date: "Sep 10", "Market Index": 101.2, Portfolio: 141.8 },
  { date: "Sep 11", "Market Index": 104.2, Portfolio: 132.2 },
  { date: "Sep 12", "Market Index": 109.8, Portfolio: 129.2 },
  { date: "Sep 13", "Market Index": 110.4, Portfolio: 120.3 },
  { date: "Sep 14", "Market Index": 111.3, Portfolio: 123.4 },
  { date: "Sep 15", "Market Index": 114.3, Portfolio: 137.4 },
  { date: "Sep 16", "Market Index": 105.1, Portfolio: 130.1 },
  { date: "Sep 17", "Market Index": 89.3, Portfolio: 131.8 },
  { date: "Sep 18", "Market Index": 102.1, Portfolio: 149.4 },
  { date: "Sep 19", "Market Index": 101.7, Portfolio: 149.3 },
  { date: "Sep 20", "Market Index": 121.3, Portfolio: 153.2 },
  { date: "Sep 21", "Market Index": 132.5, Portfolio: 157.2 },
  { date: "Sep 22", "Market Index": 121.4, Portfolio: 139.1 },
  { date: "Sep 23", "Market Index": 100.1, Portfolio: 120.2 },
  { date: "Sep 24", "Market Index": 89.1, Portfolio: 119.1 },
  { date: "Sep 25", "Market Index": 97.1, Portfolio: 112.2 },
  { date: "Sep 26", "Market Index": 109.4, Portfolio: 129.1 },
  //array-end
]

const summary = [
  //array-start
  {
    name: "Portfolio value",
    value: "$37,081.89",
    changeType: null,
  },
  {
    name: "Invested",
    value: "$19,698.65",
    changeType: null,
  },
  {
    name: "Cashflow",
    value: "$20,033.74",
    changeType: null,
  },
  {
    name: "Price gain",
    value: "+$15,012.39",
    changeType: "positive",
  },
  {
    name: "Realized",
    value: "+$177.4",
    changeType: "positive",
  },
  {
    name: "Dividends (gross)",
    value: "+$490.97",
    changeType: "positive",
  },
  //array-end
]

const tabs = [
  //array-start
  {
    dataRange: data.slice(51, 57),
    name: "Last 7d",
  },
  {
    dataRange: data.slice(28, 70),
    name: "Last 30d",
  },
  {
    dataRange: data,
    name: "Max.",
  },
  //array-end
]

const valueFormatter = (number: number) =>
  `$${Intl.NumberFormat("us").format(number).toString()}`

export default function Example() {
  return (
    <div className="obfuscate">
      <Card className="!p-0">
        <div className="p-6">
          <h3 className="text-sm text-gray-500 dark:text-gray-500">
            Portfolio performance
          </h3>
          <p className="mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-50">
            $37,081.89
          </p>
          <p className="mt-1 text-sm font-medium">
            <span className="text-emerald-700 dark:text-emerald-500">
              +$430.90 (4.1%)
            </span>{" "}
            <span className="font-normal text-gray-500 dark:text-gray-500">
              Past 24 hours
            </span>
          </p>
        </div>
        <Tabs defaultValue={tabs[2].name}>
          <TabsList variant="line" className="px-6">
            {tabs.map((tab) => (
              <TabsTrigger key={tab.name} value={tab.name}>
                {tab.name}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="mt-6 px-6">
            {tabs.map((tab) => (
              <TabsContent key={tab.name} value={tab.name}>
                <LineChart
                  data={tab.dataRange}
                  index="date"
                  categories={["Portfolio", "Market Index"]}
                  colors={["blue", "cyan"]}
                  valueFormatter={valueFormatter}
                  yAxisWidth={40}
                  tickGap={10}
                  showLegend={false}
                  className="hidden !h-72 sm:block"
                />
                <LineChart
                  data={tab.dataRange}
                  index="date"
                  categories={["Portfolio", "Market Index"]}
                  colors={["blue", "cyan"]}
                  valueFormatter={valueFormatter}
                  showYAxis={false}
                  showLegend={false}
                  startEndOnly={true}
                  className="!h-72 sm:hidden"
                />
              </TabsContent>
            ))}
          </div>
        </Tabs>

        <div className="p-6">
          <h4 className="text-sm font-medium text-gray-900 dark:text-gray-50">
            Portfolio summary
          </h4>
          <div className="mt-4 sm:flex sm:items-center sm:gap-8">
            <ul
              role="list"
              className="w-full divide-y divide-gray-200 truncate text-sm text-gray-500 dark:divide-gray-800 dark:text-gray-500"
            >
              {summary.slice(0, 3).map((item) => (
                <li
                  key={item.name}
                  className="flex items-center justify-between py-2.5"
                >
                  <span>{item.name}</span>
                  <span className="font-medium text-gray-900 dark:text-gray-50">
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>
            <ul
              role="list"
              className="mt-4 w-full divide-y divide-gray-200 truncate text-sm text-gray-500 sm:mt-0 dark:divide-gray-800 dark:text-gray-500"
            >
              {summary.slice(3, 6).map((item) => (
                <li
                  key={item.name}
                  className="flex items-center justify-between py-2.5"
                >
                  <span>{item.name}</span>
                  <span
                    className={cx(
                      item.changeType === "positive"
                        ? "text-emerald-700 dark:text-emerald-500"
                        : "text-red-700 dark:text-red-500",
                      "font-medium",
                    )}
                  >
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
    </div>
  )
}
