"use client"

import { cx } from "@/lib/utils"

import { Card } from "@/atom/Card"
import { SparkAreaChart } from "@/atom/SparkChart"

const data = [
  //array-start
  {
    date: "Nov 24, 2023",
    "Dow Jones": 156.2,
    SMI: 68.5,
    "S&P 500": 71.8,
  },
  {
    date: "Nov 25, 2023",
    "Dow Jones": 152.5,
    SMI: 69.3,
    "S&P 500": 67.2,
  },
  {
    date: "Nov 26, 2023",
    "Dow Jones": 148.7,
    SMI: 69.8,
    "S&P 500": 61.5,
  },
  {
    date: "Nov 27, 2023",
    "Dow Jones": 155.3,
    SMI: 73.5,
    "S&P 500": 57.9,
  },
  {
    date: "Nov 28, 2023",
    "Dow Jones": 160.1,
    SMI: 75.2,
    "S&P 500": 59.6,
  },
  {
    date: "Nov 29, 2023",
    "Dow Jones": 175.6,
    SMI: 89.2,
    "S&P 500": 57.3,
  },
  {
    date: "Nov 30, 2023",
    "Dow Jones": 180.2,
    SMI: 92.7,
    "S&P 500": 59.8,
  },
  {
    date: "Dec 01, 2023",
    "Dow Jones": 185.5,
    SMI: 95.3,
    "S&P 500": 62.4,
  },
  {
    date: "Dec 02, 2023",
    "Dow Jones": 182.3,
    SMI: 93.8,
    "S&P 500": 60.7,
  },
  {
    date: "Dec 03, 2023",
    "Dow Jones": 180.7,
    SMI: 91.6,
    "S&P 500": 58.9,
  },
  {
    date: "Dec 04, 2023",
    "Dow Jones": 178.5,
    SMI: 89.7,
    "S&P 500": 56.2,
  },
  {
    date: "Dec 05, 2023",
    "Dow Jones": 176.2,
    SMI: 87.5,
    "S&P 500": 54.8,
  },
  {
    date: "Dec 06, 2023",
    "Dow Jones": 174.8,
    SMI: 85.3,
    "S&P 500": 53.4,
  },
  {
    date: "Dec 07, 2023",
    "Dow Jones": 178.0,
    SMI: 88.2,
    "S&P 500": 55.2,
  },
  {
    date: "Dec 08, 2023",
    "Dow Jones": 180.6,
    SMI: 90.5,
    "S&P 500": 56.8,
  },
  {
    date: "Dec 09, 2023",
    "Dow Jones": 182.4,
    SMI: 92.8,
    "S&P 500": 58.4,
  },
  {
    date: "Dec 10, 2023",
    "Dow Jones": 179.7,
    SMI: 90.2,
    "S&P 500": 57.0,
  },
  {
    date: "Dec 11, 2023",
    "Dow Jones": 154.2,
    SMI: 88.7,
    "S&P 500": 55.6,
  },
  {
    date: "Dec 12, 2023",
    "Dow Jones": 151.9,
    SMI: 86.5,
    "S&P 500": 53.9,
  },
  {
    date: "Dec 13, 2023",
    "Dow Jones": 149.3,
    SMI: 83.7,
    "S&P 500": 52.1,
  },
  {
    date: "Dec 14, 2023",
    "Dow Jones": 148.8,
    SMI: 81.4,
    "S&P 500": 50.5,
  },
  {
    date: "Dec 15, 2023",
    "Dow Jones": 145.5,
    SMI: 79.8,
    "S&P 500": 48.9,
  },
  {
    date: "Dec 16, 2023",
    "Dow Jones": 140.2,
    SMI: 84.5,
    "S&P 500": 50.2,
  },
  //array-end
]

const summary = [
  //array-start
  {
    name: "Dow Jones",
    description: "Dow Jones Industrial Average",
    category: "Dow Jones",
    change: "-3.2%",
    changeType: "negative",
  },
  {
    name: "SMI",
    description: "Swiss Market Index",
    category: "SMI",
    change: "+4.1%",
    changeType: "positive",
  },
  {
    name: "S&P 500",
    description: "Standard and Poor's 500",
    category: "S&P 500",
    change: "-6.9%",
    changeType: "negative",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <dl className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {summary.map((item) => (
          <Card
            key={item.name}
            className="flex items-center justify-between space-x-4"
          >
            <div className="truncate">
              <div className="flex items-center space-x-1.5">
                <dt className="text-sm font-medium text-gray-900 dark:text-gray-50">
                  {item.name}
                </dt>
                <span
                  className={cx(
                    item.changeType === "positive"
                      ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-400/10 dark:text-emerald-400"
                      : "bg-red-100 text-red-800 dark:bg-red-400/10 dark:text-red-400",
                    "inline-flex items-center rounded px-2 py-0.5 text-xs",
                  )}
                >
                  {item.change}
                </span>
              </div>
              <dd className="mt-0.5 truncate text-xs text-gray-500 dark:text-gray-500">
                {item.description}
              </dd>
            </div>
            <SparkAreaChart
              data={data}
              index="date"
              categories={[item.category]}
              fill="solid"
              colors={item.changeType === "positive" ? ["emerald"] : ["red"]}
              className="h-10 flex-none"
            />
          </Card>
        ))}
      </dl>
    </div>
  )
}
