"use client"

import React from "react"
import { RiArrowDownSLine } from "@remixicon/react"

import { BarChart, TooltipProps } from "../../atoms/BarChart"
import { Button } from "../../atoms/Button"
import { Divider } from "../../atoms/Divider"

const valueFormatter = (number: number) =>
  Intl.NumberFormat("us").format(number).toString() + " bpm"

const data = [
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
    Running: 149,
  },
  {
    date: "Nov 23",
    Running: 149,
  },
  {
    date: "Dec 23",
    Running: 121,
  },
  //array-end
]

const CustomTooltip = ({ payload, active }: Omit<TooltipProps, "label">) => {
  if (!active || !payload || payload.length === 0) return null
  const categoryPayload = payload[0]

  return (
    <div className="w-52 rounded-md border border-gray-200 bg-white text-sm shadow-md dark:border-gray-800 dark:bg-gray-950">
      <div className="flex w-full items-center justify-between space-x-4 px-2.5 py-2">
        <div className="flex items-center space-x-2 truncate">
          <span
            className="size-2.5 shrink-0 rounded-sm bg-blue-500 dark:bg-blue-500"
            aria-hidden={true}
          />
          <p className="truncate text-gray-500 dark:text-gray-500">
            {categoryPayload.category}
          </p>
        </div>
        <p className="font-medium text-gray-900 dark:text-gray-50">
          {Intl.NumberFormat("us").format(categoryPayload.value).toString() +
            " bpm"}
        </p>
      </div>
    </div>
  )
}

export default function Example() {
  const [showDemo, setShowDemo] = React.useState(false)
  return (
    <div className="obfuscate">
      {/* Demo */}
      <div className="flex w-full justify-center">
        <CustomTooltip
          active={true}
          payload={[
            {
              category: "Running",
              value: 180,
              index: "Mar 23",
              color: "blue",
              payload: {
                date: "Mar 23",
                Running: 180,
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
            index="date"
            categories={["Running"]}
            valueFormatter={valueFormatter}
            customTooltip={CustomTooltip}
            yAxisWidth={70}
            showLegend={false}
          />
          <BarChart
            className="mt-12 !h-72 sm:hidden"
            data={data}
            index="date"
            categories={["Running"]}
            valueFormatter={valueFormatter}
            customTooltip={CustomTooltip}
            showYAxis={false}
            showLegend={false}
            startEndOnly={true}
          />
        </>
      ) : null}
    </div>
  )
}
