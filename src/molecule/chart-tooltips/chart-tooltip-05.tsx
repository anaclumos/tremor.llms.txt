"use client"

import React from "react"
import { RiArrowDownSLine } from "@remixicon/react"

import { cx } from "@/lib/utils"

import { BarChart, TooltipProps } from "@/atom/BarChart"
import { Button } from "@/atom/Button"
import { Divider } from "@/atom/Divider"

interface Issue {
  status: "completed" | "in progress"
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
        percentage: 36.7,
      },
      {
        status: "in progress",
        value: 83,
        percentage: 63.3,
      },
    ],
  },
  {
    date: "Oct 2, 2023",
    issues: [
      {
        status: "completed",
        value: 20,
        percentage: 17.1,
      },
      {
        status: "in progress",
        value: 97,
        percentage: 82.9,
      },
    ],
  },
  {
    date: "Oct 3, 2023",
    issues: [
      {
        status: "completed",
        value: 30,
        percentage: 40.0,
      },
      {
        status: "in progress",
        value: 45,
        percentage: 60.0,
      },
    ],
  },
  {
    date: "Oct 4, 2023",
    issues: [
      {
        status: "completed",
        value: 41,
        percentage: 69.5,
      },
      {
        status: "in progress",
        value: 18,
        percentage: 30.5,
      },
    ],
  },
  {
    date: "Oct 5, 2023",
    issues: [
      {
        status: "completed",
        value: 55,
        percentage: 79.7,
      },
      {
        status: "in progress",
        value: 14,
        percentage: 20.3,
      },
    ],
  },
  {
    date: "Oct 6, 2023",
    issues: [
      {
        status: "completed",
        value: 35,
        percentage: 71.2,
      },
      {
        status: "in progress",
        value: 14,
        percentage: 28.8,
      },
    ],
  },
  {
    date: "Oct 7, 2023",
    issues: [
      {
        status: "completed",
        value: 15,
        percentage: 21.4,
      },
      {
        status: "in progress",
        value: 55,
        percentage: 78.6,
      },
    ],
  },
  {
    date: "Oct 8, 2023",
    issues: [
      {
        status: "completed",
        value: 15,
        percentage: 17.9,
      },
      {
        status: "in progress",
        value: 69,
        percentage: 82.1,
      },
    ],
  },
  {
    date: "Oct 9, 2023",
    issues: [
      {
        status: "completed",
        value: 74,
        percentage: 65.5,
      },
      {
        status: "in progress",
        value: 39,
        percentage: 34.5,
      },
    ],
  },
  //array-end
]

const statusColors: { [key in Issue["status"]]: string } = {
  completed: "bg-blue-500 dark:bg-blue-500",
  "in progress": "bg-cyan-500 dark:bg-cyan-500",
}

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

const CustomTooltip = ({ payload, active, label }: TooltipProps) => {
  if (!active || !payload || payload.length === 0) return null

  const data = payload.map((item) => ({
    status: item.category as Issue["status"],
    value: item.value,
    percentage: (
      (item.value / (item.payload.completed + item.payload["in progress"])) *
      100
    ).toFixed(2),
  }))

  return (
    <div className="w-56 rounded-md border border-gray-200 bg-white text-sm shadow-md dark:border-gray-800 dark:bg-gray-950">
      <div className="px-3 py-2.5">
        <p className="text-gray-700 dark:text-gray-300">{label}</p>
      </div>
      {data.map((item, index) => (
        <div
          key={index}
          className="flex space-x-2 overflow-hidden border-t border-gray-200 last:rounded-b-md dark:border-gray-800"
        >
          <span
            className={cx(statusColors[item.status], "w-1 shrink-0")}
            aria-hidden={true}
          />
          <div className="w-full py-2">
            <p className="text-gray-500 dark:text-gray-500">{item.status}</p>
            <div className="mt-1 flex items-center space-x-1 text-gray-900 dark:text-gray-50">
              <span className="font-medium">{item.value}</span>
              <span>({item.percentage}&#37;)</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Example() {
  const [showDemo, setShowDemo] = React.useState(false)
  return (
    <div className="obfuscate">
      <div className="flex w-full justify-center">
        <CustomTooltip
          label="Oct 5, 2023"
          active={true}
          payload={[
            //array-start
            {
              category: "completed",
              value: 20,
              index: "Oct 2, 2023",
              color: "blue",
              payload: {
                date: "Oct 2, 2023",
                completed: 20,
                "in progress": 97,
              },
            },
            {
              category: "in progress",
              value: 97,
              index: "Oct 2, 2023",
              color: "cyan",
              payload: {
                date: "Oct 2, 2023",
                completed: 20,
                "in progress": 97,
              },
            },
            //array-end
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
            data={formattedArray}
            index="date"
            categories={["completed", "in progress"]}
            type="stacked"
            colors={["blue", "cyan"]}
            valueFormatter={valueFormatter}
            yAxisWidth={30}
            showLegend={false}
            customTooltip={CustomTooltip}
          />
          <BarChart
            className="mt-12 !h-80 sm:hidden"
            data={formattedArray}
            index="date"
            categories={["completed", "in progress"]}
            type="stacked"
            colors={["blue", "cyan"]}
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
