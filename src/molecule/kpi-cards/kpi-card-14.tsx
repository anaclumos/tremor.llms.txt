"use client"

import { cx } from "@/lib/utils"

import { Card } from "../../atom/Card"
import { SparkAreaChart } from "../../atom/SparkChart"

const data = [
  //array-start
  {
    date: "Nov 24, 2023",
    "Baer Limited": 67.3,
    "QuantData Holding": 59.09,
    "Not Normal, Inc.": 36.69,
  },
  {
    date: "Nov 25, 2023",
    "Baer Limited": 65.34,
    "QuantData Holding": 42.55,
    "Not Normal, Inc.": 49.13,
  },
  {
    date: "Nov 26, 2023",
    "Baer Limited": 58.14,
    "QuantData Holding": 49.69,
    "Not Normal, Inc.": 42.77,
  },
  {
    date: "Nov 27, 2023",
    "Baer Limited": 67.38,
    "QuantData Holding": 57.09,
    "Not Normal, Inc.": 39.43,
  },
  {
    date: "Nov 28, 2023",
    "Baer Limited": 63.62,
    "QuantData Holding": 69.21,
    "Not Normal, Inc.": 41.78,
  },
  {
    date: "Nov 29, 2023",
    "Baer Limited": 68.67,
    "QuantData Holding": 72.55,
    "Not Normal, Inc.": 49.39,
  },
  {
    date: "Nov 30, 2023",
    "Baer Limited": 59.11,
    "QuantData Holding": 39.65,
    "Not Normal, Inc.": 38.41,
  },
  {
    date: "Dec 01, 2023",
    "Baer Limited": 57.09,
    "QuantData Holding": 48.38,
    "Not Normal, Inc.": 45.87,
  },
  {
    date: "Dec 02, 2023",
    "Baer Limited": 55.07,
    "QuantData Holding": 59.1,
    "Not Normal, Inc.": 39.05,
  },
  {
    date: "Dec 03, 2023",
    "Baer Limited": 69.62,
    "QuantData Holding": 80.11,
    "Not Normal, Inc.": 53.6,
  },
  {
    date: "Dec 04, 2023",
    "Baer Limited": 71.07,
    "QuantData Holding": 78.04,
    "Not Normal, Inc.": 68.52,
  },
  {
    date: "Dec 05, 2023",
    "Baer Limited": 67.8,
    "QuantData Holding": 79.85,
    "Not Normal, Inc.": 69.0,
  },
  {
    date: "Dec 06, 2023",
    "Baer Limited": 55.92,
    "QuantData Holding": 89.26,
    "Not Normal, Inc.": 72.34,
  },
  {
    date: "Dec 07, 2023",
    "Baer Limited": 59.87,
    "QuantData Holding": 99.37,
    "Not Normal, Inc.": 79.39,
  },
  {
    date: "Dec 08, 2023",
    "Baer Limited": 49.33,
    "QuantData Holding": 129.1,
    "Not Normal, Inc.": 89.47,
  },
  //array-end
]

const summary = [
  //array-start
  {
    name: "Baer Limited",
    tickerSymbol: "BAL",
    value: "$49.33",
    change: "-9.85",
    percentageChange: "-1.9%",
    changeType: "negative",
  },
  {
    name: "QuantData Holding",
    tickerSymbol: "QDH",
    value: "$129.10",
    change: "+12.10",
    percentageChange: "+7.1%",
    changeType: "positive",
  },
  {
    name: "Not Normal, Inc.",
    tickerSymbol: "NNO",
    value: "$89.80",
    change: "+7.50",
    percentageChange: "+1.2%",
    changeType: "positive",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {summary.map((item) => (
          <Card key={item.name}>
            <dt className="text-sm font-medium text-gray-900 dark:text-gray-50">
              {item.name}{" "}
              <span className="font-normal">({item.tickerSymbol})</span>
            </dt>
            <div className="mt-1 flex items-baseline justify-between">
              <dd
                className={cx(
                  item.changeType === "positive"
                    ? "text-emerald-700 dark:text-emerald-500"
                    : "text-red-700 dark:text-red-500",
                  "text-lg font-semibold",
                )}
              >
                {item.value}
              </dd>
              <dd className="flex items-center space-x-1 text-sm">
                <span className="font-medium text-gray-900 dark:text-gray-50">
                  {item.change}
                </span>
                <span
                  className={cx(
                    item.changeType === "positive"
                      ? "text-emerald-700 dark:text-emerald-500"
                      : "text-red-700 dark:text-red-500",
                  )}
                >
                  ({item.percentageChange})
                </span>
              </dd>
            </div>
            <SparkAreaChart
              data={data}
              index="date"
              categories={[item.name]}
              colors={item.changeType === "positive" ? ["emerald"] : ["red"]}
              fill="solid"
              className="mt-4 h-10 w-full"
            />
          </Card>
        ))}
      </dl>
    </div>
  )
}
