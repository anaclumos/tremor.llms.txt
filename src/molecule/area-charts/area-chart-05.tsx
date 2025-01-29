"use client"

import { RiExternalLinkLine } from "@remixicon/react"

import { AreaChart } from "@/atom/AreaChart"
import { Card } from "@/atom/Card"

function valueFormatter(number: number) {
  const formatter = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
    notation: "compact",
    compactDisplay: "short",
  })
  return formatter.format(number)
}

const data = [
  //array-start
  {
    date: "Jan 23",
    Balance: 38560,
  },
  {
    date: "Feb 23",
    Balance: 40320,
  },
  {
    date: "Mar 23",
    Balance: 50233,
  },
  {
    date: "Apr 23",
    Balance: 55123,
  },
  {
    date: "May 23",
    Balance: 56000,
  },
  {
    date: "Jun 23",
    Balance: 100000,
  },
  {
    date: "Jul 23",
    Balance: 85390,
  },
  {
    date: "Aug 23",
    Balance: 80100,
  },
  {
    date: "Sep 23",
    Balance: 75090,
  },
  {
    date: "Oct 23",
    Balance: 71080,
  },
  {
    date: "Nov 23",
    Balance: 68041,
  },
  {
    date: "Dec 23",
    Balance: 60143,
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <Card className="overflow-hidden !p-0 sm:mx-auto sm:w-full">
        <div className="p-6">
          <p className="text-sm text-gray-500 dark:text-gray-500">Balance</p>
          <p className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
            $60,143
          </p>
          <AreaChart
            data={data}
            index="date"
            categories={["Balance"]}
            showLegend={false}
            yAxisWidth={45}
            valueFormatter={valueFormatter}
            fill="solid"
            className="mt-8 hidden !h-60 sm:block"
          />
          <AreaChart
            data={data}
            index="date"
            categories={["Balance"]}
            showLegend={false}
            showYAxis={false}
            startEndOnly={true}
            valueFormatter={valueFormatter}
            fill="solid"
            className="mt-8 !h-48 sm:hidden"
          />
        </div>
        <div className="rounded-b-md border-t border-gray-200 bg-gray-50 px-6 py-4 dark:border-gray-900 dark:bg-[#090E1A]">
          <div className="flex justify-between">
            <span className="inline-flex items-center rounded-md bg-white px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-gray-200 ring-inset select-none dark:bg-gray-800 dark:text-gray-200 dark:ring-gray-400/20">
              Team access
            </span>
            <div className="flex items-center gap-2">
              <a
                href="#"
                className="flex items-center gap-1.5 text-sm text-blue-500 hover:underline hover:underline-offset-4 dark:text-blue-500"
              >
                View transactions
                <RiExternalLinkLine
                  className="size-4 shrink-0"
                  aria-hidden="true"
                />
              </a>
              <span
                className="hidden h-6 w-px bg-gray-200 sm:block dark:bg-gray-800"
                aria-hidden={true}
              />
              <a
                href="#"
                className="hidden items-center gap-1.5 text-sm text-blue-500 hover:underline hover:underline-offset-4 sm:flex dark:text-blue-500"
              >
                View statements
                <RiExternalLinkLine
                  className="size-4 shrink-0"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
