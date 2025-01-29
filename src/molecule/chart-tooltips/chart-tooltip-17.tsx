"use client"

import React from "react"
import { RiArrowDownSLine } from "@remixicon/react"

import { BarChart, TooltipProps } from "../../atom/BarChart"
import { Button } from "../../atom/Button"
import { Divider } from "../../atom/Divider"
import { ProgressCircle } from "../../atom/ProgressCircle"

const data = [
  //array-start
  {
    date: "Jan 23",
    Revenue: 14230,
  },
  {
    date: "Feb 23",
    Revenue: 19310,
  },
  {
    date: "Mar 23",
    Revenue: 24470,
  },
  {
    date: "Apr 23",
    Revenue: 29290,
  },
  {
    date: "May 23",
    Revenue: 32090,
  },
  {
    date: "Jun 23",
    Revenue: 46120,
  },
  {
    date: "Jul 23",
    Revenue: 51930,
  },
  {
    date: "Aug 23",
    Revenue: 59630,
  },
  {
    date: "Sep 23",
    Revenue: 67120,
  },
  {
    date: "Oct 23",
    Revenue: 69190,
  },
  {
    date: "Nov 23",
    Revenue: 71040,
  },
  {
    date: "Dec 23",
    Revenue: 77390,
  },
  //array-end
]

const valueFormatter = (number: number) =>
  `$${Intl.NumberFormat("us").format(number).toString()}`

const CustomTooltip = ({ payload, active, label }: TooltipProps) => {
  if (!active || !payload || payload.length === 0) return null

  const salesGoal = 90000

  const categoryPayload = payload[0]

  return (
    <div className="w-56 rounded-md border border-gray-200 bg-white text-sm shadow-md dark:border-gray-800 dark:bg-gray-950">
      <div className="flex items-center justify-between border-b border-gray-200 px-3 py-2 dark:border-gray-800">
        <p className="text-gray-500 dark:text-gray-500">{label}</p>
        <div className="flex items-center space-x-1">
          <span className="font-medium text-gray-900 dark:text-gray-50">
            {((categoryPayload.value / salesGoal) * 100).toFixed(1)}%
          </span>
          <ProgressCircle
            value={(categoryPayload.value / salesGoal) * 100}
            radius={9}
            strokeWidth={3}
          />
        </div>
      </div>
      <div className="flex items-center space-x-2.5 px-3 py-2">
        <span
          className={`size-2.5 bg-${categoryPayload.color}-500 shrink-0 rounded-sm`}
          aria-hidden={true}
        />
        <p className="flex w-full items-center justify-between">
          <span className="font-medium text-gray-900 dark:text-gray-50">
            {valueFormatter(categoryPayload.value)}
          </span>
          <span className="text-gray-500 dark:text-gray-500">
            {categoryPayload.category}
          </span>
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
          label="Jan 23"
          active={true}
          payload={[
            {
              category: "Revenue",
              value: 14230,
              index: "Jan 23",
              color: "blue",
              payload: {
                date: "Jan 23",
                Running: 14230,
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
