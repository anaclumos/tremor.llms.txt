"use client"

import { RiArrowDownSLine } from "@remixicon/react"
import React from "react"

import { cx } from "@/lib/utils"

import { BarChart, TooltipProps } from "../../atoms/BarChart"
import { Button } from "../../atoms/Button"
import { Divider } from "../../atoms/Divider"

interface DataItem {
  date: string
  Running: number
}

const data: DataItem[] = [
  //array-start
  {
    date: "Jan 23",
    Running: 167,
  },
  {
    date: "Feb 23",
    Running: 125,
  },
  {
    date: "Mar 23",
    Running: 156,
  },
  {
    date: "Apr 23",
    Running: 165,
  },
  {
    date: "May 23",
    Running: 153,
  },
  {
    date: "Jun 23",
    Running: 124,
  },
  {
    date: "Jul 23",
    Running: 164,
  },
  {
    date: "Aug 23",
    Running: 123,
  },
  {
    date: "Sep 23",
    Running: 132,
  },
  {
    date: "Oct 23",
    Running: 141,
  },
  {
    date: "Nov 23",
    Running: 129,
  },
  {
    date: "Dec 23",
    Running: 149,
  },
  //array-end
]

const valueFormatter = (number: number) => {
  return Intl.NumberFormat("us").format(number).toString() + " bpm"
}

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
    <div className="rounded-md border border-gray-200 bg-white p-2 shadow-md dark:border-gray-800 dark:bg-gray-950">
      <div className="flex space-x-2.5">
        <span
          className={`flex w-1.5 bg-${categoryPayload.color}-500 rounded`}
          aria-hidden={true}
        />
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-500">{label}</p>
          <p className="mt-2 font-medium text-gray-900 dark:text-gray-50">
            {valueFormatter(categoryPayload.value)}
          </p>
          <div className="mt-1 flex items-end space-x-1">
            {percentage ? (
              <span
                className={cx(
                  percentage < 0
                    ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-400/10 dark:text-emerald-500"
                    : "bg-red-100 text-red-800 dark:bg-red-400/10 dark:text-red-500",
                  "inline-flex rounded px-1.5 py-0.5 text-xs font-medium",
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
            <div className="text-sm text-gray-500 dark:text-gray-500">
              from prev. month
            </div>
          </div>
        </div>
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
              category: "Running",
              value: 141,
              index: "Oct 23",
              color: "blue",
              payload: {
                date: "Oct 23",
                Running: 141,
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
            categories={["Running"]}
            valueFormatter={valueFormatter}
            yAxisWidth={70}
            showLegend={false}
            customTooltip={CustomTooltip}
          />
          <BarChart
            className="mt-12 !h-72 sm:hidden"
            data={data}
            index="date"
            categories={["Running"]}
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
