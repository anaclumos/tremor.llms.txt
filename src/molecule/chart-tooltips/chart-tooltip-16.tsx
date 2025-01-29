"use client"

import React from "react"
import { RiArrowDownSLine } from "@remixicon/react"

import { cx } from "@/lib/utils"

import { BarChart, TooltipProps } from "../../atom/BarChart"
import { Button } from "../../atom/Button"
import { Divider } from "../../atom/Divider"

interface DataItem {
  date: string
  Revenue: number
}

const data: DataItem[] = [
  //array-start
  {
    date: "Jan 23",
    Revenue: 34230,
  },
  {
    date: "Feb 23",
    Revenue: 39310,
  },
  {
    date: "Mar 23",
    Revenue: 33470,
  },
  {
    date: "Apr 23",
    Revenue: 29290,
  },
  {
    date: "May 23",
    Revenue: 33190,
  },
  {
    date: "Jun 23",
    Revenue: 39120,
  },
  {
    date: "Jul 23",
    Revenue: 41030,
  },
  {
    date: "Aug 23",
    Revenue: 27630,
  },
  {
    date: "Sep 23",
    Revenue: 26120,
  },
  {
    date: "Oct 23",
    Revenue: 22190,
  },
  {
    date: "Nov 23",
    Revenue: 24080,
  },
  {
    date: "Dec 23",
    Revenue: 27120,
  },
  //array-end
]

const valueFormatter = (number: number) =>
  `$${Intl.NumberFormat("us").format(number).toString()}`

const CustomTooltip = ({ payload, active, label }: TooltipProps) => {
  if (!active || !payload || payload.length === 0) return null

  const categoryPayload = payload[0]

  const previousIndex = data.findIndex((e) => e["date"] === label)
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
    <div className="w-56 rounded-md border border-gray-800 bg-gray-950 px-3 py-2 text-sm shadow-md">
      <p className="text-gray-500">{categoryPayload.category}</p>
      <div className="mt-1 flex items-center space-x-2.5">
        <span
          className={`size-2.5 bg-${categoryPayload.color}-500 shrink-0 rounded-sm`}
          aria-hidden={true}
        />
        <p className="flex w-full items-center justify-between">
          <span className="font-semibold text-gray-50">
            {valueFormatter(categoryPayload.value)}
          </span>
          {percentage ? (
            <span
              className={cx(
                percentage > 0 ? "text-emerald-500" : "text-red-500",
                "font-medium",
              )}
            >
              {percentage > 0 ? "+" : null}
              {percentage.toFixed(1)}%
            </span>
          ) : (
            <span className="font-medium text-gray-300">--</span>
          )}
        </p>
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
              category: "Revenue",
              value: 145,
              index: "Oct 23",
              color: "blue",
              payload: {
                date: "Oct 23",
                Revenue: 145,
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
          tabIndex={0}
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
            index="date"
            categories={["Revenue"]}
            valueFormatter={valueFormatter}
            yAxisWidth={70}
            showLegend={false}
            customTooltip={CustomTooltip}
          />
          <BarChart
            className="mt-12 !h-72 sm:hidden"
            data={data}
            index="date"
            categories={["Revenue"]}
            valueFormatter={valueFormatter}
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
