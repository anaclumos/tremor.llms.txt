"use client"

import React from "react"
import { RiArrowDownSLine } from "@remixicon/react"

import { BarChart, TooltipProps } from "../../atoms/BarChart"
import { Button } from "../../atoms/Button"
import { Divider } from "../../atoms/Divider"

const data = [
  //array-start
  {
    date: "Jan 23",
    Running: 167,
    Cycling: 145,
  },
  {
    date: "Feb 23",
    Running: 125,
    Cycling: 110,
  },
  {
    date: "Mar 23",
    Running: 156,
    Cycling: 149,
  },
  {
    date: "Apr 23",
    Running: 165,
    Cycling: 112,
  },
  {
    date: "May 23",
    Running: 153,
    Cycling: 138,
  },
  {
    date: "Jun 23",
    Running: 124,
    Cycling: 145,
  },
  {
    date: "Jul 23",
    Running: 164,
    Cycling: 134,
  },
  {
    date: "Aug 23",
    Running: 123,
    Cycling: 110,
  },
  {
    date: "Sep 23",
    Running: 132,
    Cycling: 113,
  },
  {
    date: "Oct 23",
    Running: 121,
    Cycling: 99,
  },
  {
    date: "Nov 23",
    Running: 129,
    Cycling: 104,
  },
  {
    date: "Dec 23",
    Running: 141,
    Cycling: 124,
  },
  //array-end
]

const valueFormatter = (number: number) => {
  return Intl.NumberFormat("us").format(number).toString() + " bpm"
}

const CustomTooltip = ({ payload, active, label }: TooltipProps) => {
  if (!active || !payload || payload.length === 0) return null
  return (
    <div className="w-56 rounded-md border border-gray-200 bg-white text-sm text-gray-500 shadow-md dark:border-gray-800 dark:bg-gray-950 dark:text-gray-500">
      <div className="border-b border-gray-200 px-3 py-2 dark:border-gray-800">
        <p className="font-medium text-gray-900 dark:text-gray-50">{label}</p>
      </div>
      <div className="space-y-2 px-3 py-2">
        {payload.map((category, index) => (
          <div key={index} className="flex space-x-2.5">
            <span
              className={`w-1 bg-${category.color}-500 shrink-0 rounded`}
              aria-hidden={true}
            />
            <p className="flex w-full items-center justify-between space-x-8 truncate">
              <span className="truncate text-gray-500 dark:text-gray-500">
                {category.category}
              </span>
              <span className="font-medium text-gray-900 dark:text-gray-50">
                {valueFormatter(category.value)}
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
              category: "Running",
              value: 145,
              index: "Jan 23",
              color: "blue",
              payload: {
                date: "Jan 23",
                Running: 145,
              },
            },
            {
              category: "Cycling",
              value: 123,
              index: "Jan 23",
              color: "violet",
              payload: {
                date: "Jan 23",
                Running: 123,
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
            categories={["Running", "Cycling"]}
            colors={["blue", "violet"]}
            valueFormatter={valueFormatter}
            yAxisWidth={70}
            showLegend={false}
            customTooltip={CustomTooltip}
          />
          <BarChart
            className="mt-12 !h-72 sm:hidden"
            data={data}
            index="date"
            categories={["Running", "Cycling"]}
            colors={["blue", "violet"]}
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
