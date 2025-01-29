"use client"

import { cx } from "@/lib/utils"

import { AreaChart } from "../../atoms/AreaChart"
import { Card } from "../../atoms/Card"
import { Divider } from "../../atoms/Divider"

const data = [
  //array-start
  {
    date: "Jan 23",
    "This year": 10200,
    "Last year": 3800,
  },
  {
    date: "Feb 23",
    "This year": 15100,
    "Last year": 6910,
  },
  {
    date: "Mar 23",
    "This year": 16100,
    "Last year": 7210,
  },
  {
    date: "Apr 23",
    "This year": 17100,
    "Last year": 9200,
  },
  {
    date: "May 23",
    "This year": 24800,
    "Last year": 9100,
  },
  {
    date: "Jun 23",
    "This year": 20500,
    "Last year": 10210,
  },
  {
    date: "Jul 23",
    "This year": 22130,
    "Last year": 10810,
  },
  {
    date: "Aug 23",
    "This year": 28100,
    "Last year": 12120,
  },
  {
    date: "Sep 23",
    "This year": 31700,
    "Last year": 10620,
  },
  {
    date: "Oct 23",
    "This year": 32230,
    "Last year": 11350,
  },
  {
    date: "Nov 23",
    "This year": 42200,
    "Last year": 12550,
  },
  {
    date: "Dec 23",
    "This year": 59100,
    "Last year": 22150,
  },
  //array-end
]

const summary = [
  {
    name: "This year",
    total: 277760,
    color: "bg-blue-500 dark:bg-blue-500",
  },
  {
    name: "Last year",
    total: 120420,
    color: "bg-violet-500 dark:bg-violet-500",
  },
]

const valueFormatter = (number: number) =>
  `$${Intl.NumberFormat("us").format(number).toString()}`

export default function Example() {
  return (
    <div className="obfuscate">
      <Card className="sm:mx-auto sm:max-w-xl">
        <div className="flex items-center space-x-2">
          <h1 className="text-sm font-medium text-gray-900 dark:text-gray-50">
            Revenue
          </h1>
          <span className="mt-0.5 inline-flex rounded bg-emerald-100 px-1.5 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-400/10 dark:text-emerald-400">
            +2.3%
          </span>
        </div>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
          Current year vs. same period last year
        </p>
        <Divider className="!my-3" />
        <ul role="list" className="flex items-center gap-10">
          {summary.map((category) => (
            <li key={category.name}>
              <div className="flex items-center space-x-2">
                <span
                  className={cx(
                    category.color,
                    "h-[3px] w-3.5 shrink-0 rounded-full",
                  )}
                  aria-hidden="true"
                />
                <p className="text-xs text-gray-700 dark:text-gray-300">
                  {category.name}
                </p>
              </div>
              <p className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                {valueFormatter(category.total)}
              </p>
            </li>
          ))}
        </ul>
        <AreaChart
          data={data}
          index="date"
          categories={["This year", "Last year"]}
          colors={["blue", "violet"]}
          valueFormatter={valueFormatter}
          showLegend={false}
          showYAxis={false}
          startEndOnly={true}
          fill="solid"
          className="mt-8 !h-48"
        />
      </Card>
    </div>
  )
}
