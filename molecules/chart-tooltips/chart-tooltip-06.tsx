"use client"

import React from "react"
import { RiArrowDownSLine } from "@remixicon/react"

import { BarChart, TooltipProps } from "../../atoms/BarChart"
import { Button } from "../../atoms/Button"
import { Divider } from "../../atoms/Divider"

interface DataItem {
  month: string
  sales: number
}

const data: DataItem[] = [
  //array-start
  {
    month: "Jan 23",
    sales: 4310,
  },
  {
    month: "Feb 23",
    sales: 326,
  },
  {
    month: "Mar 23",
    sales: 2350,
  },
  {
    month: "Apr 23",
    sales: 2780,
  },
  {
    month: "May 23",
    sales: 1890,
  },
  {
    month: "Jun 23",
    sales: 2390,
  },
  {
    month: "Jul 23",
    sales: 3490,
  },
  {
    month: "Aug 23",
    sales: 3290,
  },
  {
    month: "Sep 23",
    sales: 2980,
  },
  {
    month: "Oct 23",
    sales: 2320,
  },
  {
    month: "Nov 23",
    sales: 2630,
  },
  {
    month: "Dec 23",
    sales: 2910,
  },
  //array-end
]

const currencyFormatter = (number: number) => {
  return "$" + Intl.NumberFormat("us").format(number).toString()
}

const CustomTooltip = ({ payload, active, label }: TooltipProps) => {
  if (!active || !payload || payload.length === 0) return null

  const categoryPayload = payload[0]

  const previousIndex = data.findIndex((e) => e["month"] === label)
  const previousValues: DataItem | undefined =
    previousIndex > 0 ? data[previousIndex - 1] : undefined

  const prev = previousValues
    ? previousValues[categoryPayload.category as keyof DataItem]
    : undefined
  const percentage =
    typeof prev === "number" && typeof categoryPayload.value === "number"
      ? ((categoryPayload.value - prev) / prev) * 100
      : undefined

  return (
    <div className="flex w-52 items-center justify-between space-x-6 rounded-md border border-gray-200 bg-white p-1.5 text-sm shadow-md dark:border-gray-800 dark:bg-gray-950">
      <p className="text-gray-500 dark:text-gray-500">{label}</p>
      <div className="flex items-center space-x-2">
        <span className="font-medium text-gray-900 dark:text-gray-50">
          {currencyFormatter(categoryPayload.value)}
        </span>
        {percentage ? (
          <span
            className={`rounded px-1.5 py-0.5 text-xs font-medium ${
              percentage > 0
                ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-400/10 dark:text-emerald-500"
                : "bg-red-100 text-red-800 dark:bg-red-400/10 dark:text-red-500"
            }`}
          >
            {percentage > 0 ? "+" : ""}
            {percentage.toFixed(1)}%
          </span>
        ) : (
          <span className="rounded bg-gray-100 px-1.5 py-0.5 text-xs font-medium text-gray-700 dark:bg-gray-900 dark:text-gray-300">
            --
          </span>
        )}
      </div>
    </div>
  )
}

export default function Example() {
  const [showDemo, setShowDemo] = React.useState(false)
  return (
    <div className="obfuscate">
      <div className="flex w-full justify-center">
        <CustomTooltip
          label="Oct 23"
          active={true}
          payload={[
            {
              category: "sales",
              value: 2320,
              index: "Oct 23",
              color: "blue",
              payload: {
                date: "Oct 23",
                Sales: 2320,
              },
            },
          ]}
        />
      </div>
      <Divider className="mt-12">
        <Button
          variant="light"
          onClick={() => setShowDemo(!showDemo)}
          className="group !rounded-full !bg-gray-100 !text-gray-500 hover:!bg-gray-100 dark:!bg-gray-900 dark:!text-gray-500 hover:dark:!bg-gray-900"
        >
          <RiArrowDownSLine
            aria-hidden={true}
            className={`-ml-1 size-5 transition-all group-hover:text-gray-900 group-hover:dark:text-gray-50 ${showDemo ? "rotate-180" : ""} `}
          />
          <span className="ml-1 transition-all group-hover:text-gray-900 group-hover:dark:text-gray-50">
            {showDemo ? "Hide Demo" : "Show Demo"}
          </span>
        </Button>
      </Divider>
      {showDemo ? (
        <>
          <BarChart
            className="mt-12 hidden !h-72 sm:block"
            data={data}
            index="month"
            categories={["sales"]}
            valueFormatter={currencyFormatter}
            yAxisWidth={56}
            showLegend={false}
            customTooltip={CustomTooltip}
          />
          <BarChart
            className="mt-12 !h-80 sm:hidden"
            data={data}
            index="month"
            categories={["sales"]}
            valueFormatter={currencyFormatter}
            showYAxis={false}
            showLegend={false}
            startEndOnly={true}
            customTooltip={CustomTooltip}
          />
        </>
      ) : null}
    </div>
  )
}
