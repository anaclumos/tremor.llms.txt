"use client"

import React from "react"
import { RiArrowDownSLine } from "@remixicon/react"

import { cx } from "@/lib/utils"

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
    sales: 3250,
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
    <div className="rounded-md border border-gray-200 bg-white px-4 py-3 text-center shadow-md dark:border-gray-800 dark:bg-gray-950">
      <p className="text-sm text-gray-500 dark:text-gray-500">{label}</p>
      <p className="font-semibold text-gray-900 dark:text-gray-50">
        {currencyFormatter(categoryPayload.value)}
      </p>
      <div className="mt-2 flex items-center justify-center space-x-1 whitespace-nowrap text-sm">
        {percentage ? (
          <span
            className={cx(
              percentage > 0
                ? "text-emerald-700 dark:text-emerald-500"
                : "text-red-700 dark:text-red-500",
              "font-medium",
            )}
          >
            {percentage > 0 ? "+" : null}
            {percentage.toFixed(1)}%
          </span>
        ) : (
          <span className="rounded bg-gray-100 px-1.5 py-0.5 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
            --
          </span>
        )}
        <span className="text-gray-500 dark:text-gray-500">
          from previous month
        </span>
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
            yAxisWidth={50}
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
