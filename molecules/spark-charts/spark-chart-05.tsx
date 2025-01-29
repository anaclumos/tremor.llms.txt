"use client"

import { cx } from "@/lib/utils"

import { Card } from "../../atoms/Card"
import { SparkAreaChart } from "../../atoms/SparkChart"

const data = [
  //array-start
  {
    date: "Nov 24, 2023",
    "Doorbell, Inc.": 150.2,
    "Off Running AG": 70.5,
    "Solid Bit Holding": 71.8,
  },
  {
    date: "Nov 25, 2023",
    "Doorbell, Inc.": 152.5,
    "Off Running AG": 72.3,
    "Solid Bit Holding": 67.2,
  },
  {
    date: "Nov 26, 2023",
    "Doorbell, Inc.": 148.7,
    "Off Running AG": 69.8,
    "Solid Bit Holding": 61.5,
  },
  {
    date: "Nov 27, 2023",
    "Doorbell, Inc.": 155.3,
    "Off Running AG": 73.5,
    "Solid Bit Holding": 57.9,
  },
  {
    date: "Nov 28, 2023",
    "Doorbell, Inc.": 160.1,
    "Off Running AG": 75.2,
    "Solid Bit Holding": 59.6,
  },
  {
    date: "Nov 29, 2023",
    "Doorbell, Inc.": 175.6,
    "Off Running AG": 89.2,
    "Solid Bit Holding": 57.3,
  },
  {
    date: "Nov 30, 2023",
    "Doorbell, Inc.": 180.2,
    "Off Running AG": 92.7,
    "Solid Bit Holding": 59.8,
  },
  {
    date: "Dec 01, 2023",
    "Doorbell, Inc.": 185.5,
    "Off Running AG": 95.3,
    "Solid Bit Holding": 62.4,
  },
  {
    date: "Dec 02, 2023",
    "Doorbell, Inc.": 182.3,
    "Off Running AG": 93.8,
    "Solid Bit Holding": 60.7,
  },
  {
    date: "Dec 03, 2023",
    "Doorbell, Inc.": 180.7,
    "Off Running AG": 91.6,
    "Solid Bit Holding": 58.9,
  },
  {
    date: "Dec 04, 2023",
    "Doorbell, Inc.": 178.5,
    "Off Running AG": 89.7,
    "Solid Bit Holding": 56.2,
  },
  {
    date: "Dec 05, 2023",
    "Doorbell, Inc.": 176.2,
    "Off Running AG": 87.5,
    "Solid Bit Holding": 54.8,
  },
  {
    date: "Dec 06, 2023",
    "Doorbell, Inc.": 174.8,
    "Off Running AG": 85.3,
    "Solid Bit Holding": 53.4,
  },
  {
    date: "Dec 07, 2023",
    "Doorbell, Inc.": 178.0,
    "Off Running AG": 88.2,
    "Solid Bit Holding": 55.2,
  },
  {
    date: "Dec 08, 2023",
    "Doorbell, Inc.": 180.6,
    "Off Running AG": 90.5,
    "Solid Bit Holding": 56.8,
  },
  {
    date: "Dec 09, 2023",
    "Doorbell, Inc.": 182.4,
    "Off Running AG": 92.8,
    "Solid Bit Holding": 58.4,
  },
  {
    date: "Dec 10, 2023",
    "Doorbell, Inc.": 179.7,
    "Off Running AG": 90.2,
    "Solid Bit Holding": 57.0,
  },
  {
    date: "Dec 11, 2023",
    "Doorbell, Inc.": 178.2,
    "Off Running AG": 88.7,
    "Solid Bit Holding": 55.6,
  },
  {
    date: "Dec 12, 2023",
    "Doorbell, Inc.": 175.9,
    "Off Running AG": 86.5,
    "Solid Bit Holding": 53.9,
  },
  {
    date: "Dec 13, 2023",
    "Doorbell, Inc.": 172.3,
    "Off Running AG": 83.7,
    "Solid Bit Holding": 52.1,
  },
  {
    date: "Dec 14, 2023",
    "Doorbell, Inc.": 169.8,
    "Off Running AG": 81.4,
    "Solid Bit Holding": 50.5,
  },
  {
    date: "Dec 15, 2023",
    "Doorbell, Inc.": 168.5,
    "Off Running AG": 79.8,
    "Solid Bit Holding": 48.9,
  },
  {
    date: "Dec 16, 2023",
    "Doorbell, Inc.": 170.2,
    "Off Running AG": 81.5,
    "Solid Bit Holding": 50.2,
  },
  //array-end
]

const summary = [
  //array-start
  {
    name: "Doorbell, Inc.",
    change: "+2.3%",
    changeType: "positive",
  },
  {
    name: "Solid Bit Holding",
    change: "-0.9%",
    changeType: "negative",
  },
  {
    name: "Off Running AG",
    change: "+4.1%",
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
            <div className="flex items-center justify-between space-x-4">
              <div className="truncate">
                <dt className="truncate text-sm font-medium text-gray-900 dark:text-gray-50">
                  {item.name}
                </dt>
                <dd
                  className={cx(
                    item.changeType === "positive"
                      ? "text-emerald-700 dark:text-emerald-500"
                      : "text-red-700 dark:text-red-500",
                    "text-sm font-medium",
                  )}
                >
                  {item.change}
                </dd>
              </div>
              <SparkAreaChart
                data={data}
                index="date"
                categories={[item.name]}
                fill="solid"
                colors={item.changeType === "positive" ? ["emerald"] : ["red"]}
                className="flex-none"
              />
            </div>
          </Card>
        ))}
      </dl>
    </div>
  )
}
