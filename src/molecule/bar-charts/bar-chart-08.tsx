"use client"

import { RiExternalLinkLine } from "@remixicon/react"

import { cx } from "@/lib/utils"

import { BarChart } from "../../atom/BarChart"
import { Card } from "../../atom/Card"

const data = [
  //array-start
  {
    date: "Aug 01",
    "Successful requests": 1040,
    Errors: 0,
  },
  {
    date: "Aug 02",
    "Successful requests": 1200,
    Errors: 0,
  },
  {
    date: "Aug 03",
    "Successful requests": 1130,
    Errors: 0,
  },
  {
    date: "Aug 04",
    "Successful requests": 1050,
    Errors: 0,
  },
  {
    date: "Aug 05",
    "Successful requests": 920,
    Errors: 0,
  },
  {
    date: "Aug 06",
    "Successful requests": 870,
    Errors: 0,
  },
  {
    date: "Aug 07",
    "Successful requests": 790,
    Errors: 0,
  },
  {
    date: "Aug 08",
    "Successful requests": 910,
    Errors: 0,
  },
  {
    date: "Aug 09",
    "Successful requests": 951,
    Errors: 0,
  },
  {
    date: "Aug 10",
    "Successful requests": 1232,
    Errors: 0,
  },
  {
    date: "Aug 11",
    "Successful requests": 1230,
    Errors: 0,
  },
  {
    date: "Aug 12",
    "Successful requests": 1289,
    Errors: 0,
  },
  {
    date: "Aug 13",
    "Successful requests": 1002,
    Errors: 0,
  },
  {
    date: "Aug 14",
    "Successful requests": 1034,
    Errors: 0,
  },
  {
    date: "Aug 15",
    "Successful requests": 1140,
    Errors: 0,
  },
  {
    date: "Aug 16",
    "Successful requests": 1280,
    Errors: 0,
  },
  {
    date: "Aug 17",
    "Successful requests": 1345,
    Errors: 0,
  },
  {
    date: "Aug 18",
    "Successful requests": 1432,
    Errors: 0,
  },
  {
    date: "Aug 19",
    "Successful requests": 1321,
    Errors: 0,
  },
  {
    date: "Aug 20",
    "Successful requests": 1230,
    Errors: 0,
  },
  {
    date: "Aug 21",
    "Successful requests": 1020,
    Errors: 0,
  },
  {
    date: "Aug 22",
    "Successful requests": 1040,
    Errors: 0,
  },
  {
    date: "Aug 23",
    "Successful requests": 610,
    Errors: 81,
  },
  {
    date: "Aug 24",
    "Successful requests": 610,
    Errors: 87,
  },
  {
    date: "Aug 25",
    "Successful requests": 610,
    Errors: 92,
  },
  {
    date: "Aug 26",
    "Successful requests": 501,
    Errors: 120,
  },
  {
    date: "Aug 27",
    "Successful requests": 480,
    Errors: 120,
  },
  {
    date: "Aug 28",
    "Successful requests": 471,
    Errors: 120,
  },
  {
    date: "Aug 29",
    "Successful requests": 610,
    Errors: 89,
  },
  {
    date: "Aug 30",
    "Successful requests": 513,
    Errors: 199,
  },
  {
    date: "Aug 31",
    "Successful requests": 500,
    Errors: 56,
  },
  //array-end
]

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`

const summary = [
  //array-start
  {
    name: "Successful requests",
    total: 23450,
    color: "bg-blue-500 dark:bg-blue-500",
  },
  {
    name: "Errors",
    total: 1397,
    color: "bg-red-500 dark:bg-red-500",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <Card className="!p-0">
        <div className="p-6">
          <h3 className="font-medium text-gray-900 dark:text-gray-50">
            Requests
          </h3>
          <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt.{" "}
            <a
              href="#"
              className="inline-flex items-center gap-1 text-sm text-blue-500 dark:text-blue-500"
            >
              Learn more
              <RiExternalLinkLine className="size-4" aria-hidden={true} />
            </a>
          </p>
        </div>
        <div className="border-t border-gray-200 p-6 dark:border-gray-900">
          <ul role="list" className="flex flex-wrap gap-x-20 gap-y-10">
            {summary.map((item) => (
              <li key={item.name}>
                <div className="flex items-center space-x-2">
                  <span
                    className={cx(item.color, "size-3 shrink-0 rounded-sm")}
                    aria-hidden={true}
                  />
                  <p className="font-semibold text-gray-900 dark:text-gray-50">
                    {valueFormatter(item.total)}
                  </p>
                </div>
                <p className="whitespace-nowrap text-sm text-gray-500 dark:text-gray-500">
                  {item.name}
                </p>
              </li>
            ))}
          </ul>
          <BarChart
            data={data}
            index="date"
            categories={["Successful requests", "Errors"]}
            colors={["blue", "red"]}
            type="stacked"
            showLegend={false}
            yAxisWidth={45}
            valueFormatter={valueFormatter}
            className="mt-10 hidden !h-72 md:block"
          />
          <BarChart
            data={data}
            index="date"
            categories={["Successful requests", "Errors"]}
            colors={["blue", "red"]}
            type="stacked"
            showLegend={false}
            showYAxis={false}
            valueFormatter={valueFormatter}
            className="mt-6 !h-72 md:hidden"
          />
        </div>
      </Card>
    </div>
  )
}
