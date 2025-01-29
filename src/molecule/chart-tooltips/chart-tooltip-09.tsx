"use client"

import React from "react"
import { RiArrowDownSLine } from "@remixicon/react"

import { BarChart, TooltipProps } from "@/atom/BarChart"
import { Button } from "@/atom/Button"
import { Divider } from "@/atom/Divider"

const data = [
  //array-start
  {
    date: "Jan 23",
    Revenue: 14230,
    Profit: 10010,
  },
  {
    date: "Feb 23",
    Revenue: 19310,
    Profit: 12350,
  },
  {
    date: "Mar 23",
    Revenue: 24470,
    Profit: 19240,
  },
  {
    date: "Apr 23",
    Revenue: 29290,
    Profit: 24340,
  },
  {
    date: "May 23",
    Revenue: 32090,
    Profit: 27321,
  },
  {
    date: "Jun 23",
    Revenue: 46120,
    Profit: 39310,
  },
  {
    date: "Jul 23",
    Revenue: 51930,
    Profit: 45250,
  },
  {
    date: "Aug 23",
    Revenue: 59630,
    Profit: 52139,
  },
  {
    date: "Sep 23",
    Revenue: 67120,
    Profit: 61340,
  },
  //array-end
]

const valueFormatter = (number: number) =>
  `$${Intl.NumberFormat("us").format(number).toString()}`

const CustomTooltip = ({ payload, active, label }: TooltipProps) => {
  if (!active || !payload) return null
  return (
    <div className="w-56 rounded-md border border-gray-200 bg-white text-sm shadow-md dark:border-gray-800 dark:bg-gray-950">
      <p className="flex items-center justify-between border-b border-gray-200 px-3 py-2 text-gray-500 dark:border-gray-800 dark:text-gray-500">
        <span className="text-gray-900 dark:text-gray-50">{label}</span>
        <span>12pm</span>
      </p>
      <div className="space-y-2 px-3 py-2">
        {payload.map((category, index) => (
          <div key={index} className="flex items-center space-x-2">
            <span
              className={`h-1 w-3 rounded-sm bg-${category.color}-500 shrink-0`}
              aria-hidden={true}
            />
            <p className="flex w-full items-center justify-between">
              <span className="font-medium text-gray-900 dark:text-gray-50">
                {valueFormatter(category.value)}
              </span>
              <span className="text-gray-500 dark:text-gray-500">
                {category.category}
              </span>
            </p>
          </div>
        ))}
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
              value: 43121,
              index: "Jan 23",
              color: "blue",
              payload: {
                date: "Jan 23",
                Revenue: 43121,
              },
            },
            {
              category: "Profit",
              value: 12923,
              index: "Jan 23",
              color: "emerald",
              payload: {
                date: "Jan 23",
                Profit: 43121,
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
            categories={["Revenue", "Profit"]}
            valueFormatter={valueFormatter}
            yAxisWidth={70}
            showLegend={false}
            customTooltip={CustomTooltip}
          />
          <BarChart
            className="mt-12 !h-72 sm:hidden"
            data={data}
            index="date"
            categories={["Revenue", "Profit"]}
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
