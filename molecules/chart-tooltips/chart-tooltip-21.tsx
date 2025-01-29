"use client"

import React from "react"
import { RiArrowDownSLine } from "@remixicon/react"

import { cx } from "@/lib/utils"

import { BarChart, TooltipProps } from "../../atoms/BarChart"
import { Button } from "../../atoms/Button"
import { Divider } from "../../atoms/Divider"

interface Issue {
  status: "completed" | "in progress" | "on hold"
  value: number
  percentage: number
}

interface DataEntry {
  date: string
  issues: Issue[]
}

const data: DataEntry[] = [
  //array-start
  {
    date: "Oct 1, 2023",
    issues: [
      {
        status: "completed",
        value: 48,
        percentage: 24.2,
      },
      {
        status: "in progress",
        value: 83,
        percentage: 41.9,
      },
      {
        status: "on hold",
        value: 67,
        percentage: 33.9,
      },
    ],
  },
  {
    date: "Oct 2, 2023",
    issues: [
      {
        status: "completed",
        value: 20,
        percentage: 20.6,
      },
      {
        status: "in progress",
        value: 97,
        percentage: 77.3,
      },
      {
        status: "on hold",
        value: 12,
        percentage: 2.1,
      },
    ],
  },
  {
    date: "Oct 3, 2023",
    issues: [
      {
        status: "completed",
        value: 30,
        percentage: 29.4,
      },
      {
        status: "in progress",
        value: 45,
        percentage: 43.1,
      },
      {
        status: "on hold",
        value: 66,
        percentage: 27.5,
      },
    ],
  },
  {
    date: "Oct 4, 2023",
    issues: [
      {
        status: "completed",
        value: 41,
        percentage: 28.1,
      },
      {
        status: "in progress",
        value: 18,
        percentage: 17.9,
      },
      {
        status: "on hold",
        value: 70,
        percentage: 54.0,
      },
    ],
  },
  {
    date: "Oct 5, 2023",
    issues: [
      {
        status: "completed",
        value: 55,
        percentage: 28.8,
      },
      {
        status: "in progress",
        value: 14,
        percentage: 25.0,
      },
      {
        status: "on hold",
        value: 60,
        percentage: 46.2,
      },
    ],
  },
  {
    date: "Oct 6, 2023",
    issues: [
      {
        status: "completed",
        value: 35,
        percentage: 28.8,
      },
      {
        status: "in progress",
        value: 14,
        percentage: 19.2,
      },
      {
        status: "on hold",
        value: 80,
        percentage: 51.9,
      },
    ],
  },
  {
    date: "Oct 7, 2023",
    issues: [
      {
        status: "completed",
        value: 15,
        percentage: 20.0,
      },
      {
        status: "in progress",
        value: 55,
        percentage: 35.2,
      },
      {
        status: "on hold",
        value: 72,
        percentage: 44.8,
      },
    ],
  },
  {
    date: "Oct 8, 2023",
    issues: [
      {
        status: "completed",
        value: 15,
        percentage: 21.7,
      },
      {
        status: "in progress",
        value: 69,
        percentage: 48.2,
      },
      {
        status: "on hold",
        value: 45,
        percentage: 30.1,
      },
    ],
  },
  {
    date: "Oct 9, 2023",
    issues: [
      {
        status: "completed",
        value: 74,
        percentage: 39.5,
      },
      {
        status: "in progress",
        value: 39,
        percentage: 37.1,
      },
      {
        status: "on hold",
        value: 16,
        percentage: 23.4,
      },
    ],
  },
  //array-end
]

// Transform data into a format suitable for BarChart
const formattedArray = data.map((entry) => {
  return {
    date: entry.date,
    ...entry.issues.reduce(
      (acc, issue) => {
        acc[issue.status] = issue.value
        return acc
      },
      {} as { [key in Issue["status"]]?: number },
    ),
  }
})

const valueFormatter = (number: number) => {
  return Intl.NumberFormat("us").format(number).toString()
}

const status = {
  completed: "bg-blue-500 dark:bg-blue-500",
  "in progress": "bg-cyan-500 dark:bg-cyan-500",
  "on hold": "bg-violet-500 dark:bg-violet-500",
}

const CustomTooltip = ({ payload, active, label }: TooltipProps) => {
  if (!active || !payload || payload.length === 0) return null

  const data = payload.map((item) => ({
    status: item.category as Issue["status"],
    value: item.value,
    percentage: (
      (item.value /
        (item.payload.completed +
          item.payload["in progress"] +
          item.payload["on hold"])) *
      100
    ).toFixed(2),
  }))

  return (
    <div className="w-60 rounded-md border border-gray-500/10 bg-white/50 px-4 py-3 text-sm shadow-md backdrop-blur-lg dark:border-gray-400/20 dark:bg-gray-950/50">
      <p className="flex items-center justify-between">
        <span className="font-medium text-gray-900 dark:text-gray-50">
          Status
        </span>
        <span className="text-gray-500 dark:text-gray-500">{label}</span>
      </p>
      <Divider className="!my-3" />
      <div className="space-y-1.5">
        {data.map((item, index) => (
          <div key={index} className="flex items-center space-x-2.5">
            <span
              className={cx(
                status[item.status],
                "size-2.5 shrink-0 rounded-sm",
              )}
              aria-hidden={true}
            />
            <div className="flex w-full justify-between">
              <span className="text-gray-700 dark:text-gray-300">
                {item.status}
              </span>
              <div className="flex items-center space-x-1">
                <span className="font-medium text-gray-900 dark:text-gray-50">
                  {item.value}
                </span>
                <span className="text-gray-500 dark:text-gray-500">
                  ({item.percentage}&#37;)
                </span>
              </div>
            </div>
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
        <div>
          <p className="mb-4 text-center text-sm text-gray-500 dark:text-gray-500">
            Glass effect background
          </p>
          <CustomTooltip
            label="Oct 1, 2023"
            active={true}
            payload={[
              {
                category: "completed",
                value: 41,
                index: "Oct 4, 2023",
                color: "blue",
                payload: {
                  date: "Oct 4, 2023",
                  completed: 41,
                  "in progress": 18,
                  "on hold": 70,
                },
              },
              {
                category: "in progress",
                value: 18,
                index: "Oct 4, 2023",
                color: "cyan",
                payload: {
                  date: "Oct 4, 2023",
                  completed: 41,
                  "in progress": 18,
                  "on hold": 70,
                },
              },
              {
                category: "on hold",
                value: 70,
                index: "Oct 4, 2023",
                color: "violet",
                payload: {
                  date: "Oct 4, 2023",
                  completed: 41,
                  "in progress": 18,
                  "on hold": 70,
                },
              },
            ]}
          />
        </div>
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
            data={formattedArray}
            index="date"
            categories={["completed", "in progress", "on hold"]}
            type="stacked"
            colors={["blue", "cyan", "violet"]}
            valueFormatter={valueFormatter}
            yAxisWidth={30}
            showLegend={false}
            customTooltip={CustomTooltip}
          />
          <BarChart
            className="mt-12 !h-80 sm:hidden"
            data={formattedArray}
            index="date"
            categories={["completed", "in progress", "on hold"]}
            type="stacked"
            colors={["blue", "cyan", "violet"]}
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
