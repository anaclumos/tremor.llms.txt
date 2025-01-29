"use client"

import React from "react"
import {
  RiArrowDownSLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from "@remixicon/react"

import { cx } from "@/lib/utils"

import { Badge } from "../../atom/Badge"
import { BarChart } from "../../atom/BarChart"
import { Divider } from "../../atom/Divider"

interface DataPoint {
  date: string
  "GPU cluster": number
  "Workspace usage": number
}

type MonthData = DataPoint[]

const data: MonthData = [
  //array-start
  {
    date: "Aug 01",
    "GPU cluster": 7100,
    "Workspace usage": 4434,
  },
  {
    date: "Aug 02",
    "GPU cluster": 10943,
    "Workspace usage": 6954,
  },
  {
    date: "Aug 03",
    "GPU cluster": 10889,
    "Workspace usage": 7100,
  },
  {
    date: "Aug 04",
    "GPU cluster": 10909,
    "Workspace usage": 7909,
  },
  {
    date: "Aug 05",
    "GPU cluster": 10778,
    "Workspace usage": 7103,
  },
  {
    date: "Aug 06",
    "GPU cluster": 10900,
    "Workspace usage": 7534,
  },
  {
    date: "Aug 07",
    "GPU cluster": 10129,
    "Workspace usage": 7412,
  },
  {
    date: "Aug 08",
    "GPU cluster": 10021,
    "Workspace usage": 7834,
  },
  {
    date: "Aug 09",
    "GPU cluster": 10279,
    "Workspace usage": 7159,
  },
  {
    date: "Aug 10",
    "GPU cluster": 10224,
    "Workspace usage": 8260,
  },
  {
    date: "Aug 11",
    "GPU cluster": 10380,
    "Workspace usage": 4965,
  },
  {
    date: "Aug 12",
    "GPU cluster": 10414,
    "Workspace usage": 4989,
  },
  {
    date: "Aug 13",
    "GPU cluster": 6540,
    "Workspace usage": 4839,
  },
  {
    date: "Aug 14",
    "GPU cluster": 6634,
    "Workspace usage": 4343,
  },
  {
    date: "Aug 15",
    "GPU cluster": 7124,
    "Workspace usage": 4903,
  },
  {
    date: "Aug 16",
    "GPU cluster": 7934,
    "Workspace usage": 5273,
  },
  {
    date: "Aug 17",
    "GPU cluster": 10287,
    "Workspace usage": 6900,
  },
  {
    date: "Aug 18",
    "GPU cluster": 10323,
    "Workspace usage": 6732,
  },
  {
    date: "Aug 19",
    "GPU cluster": 10511,
    "Workspace usage": 6523,
  },
  {
    date: "Aug 20",
    "GPU cluster": 11043,
    "Workspace usage": 7422,
  },
  {
    date: "Aug 21",
    "GPU cluster": 6700,
    "Workspace usage": 4334,
  },
  {
    date: "Aug 22",
    "GPU cluster": 6900,
    "Workspace usage": 4943,
  },
  {
    date: "Aug 23",
    "GPU cluster": 7934,
    "Workspace usage": 7812,
  },
  {
    date: "Aug 24",
    "GPU cluster": 9021,
    "Workspace usage": 7729,
  },
  {
    date: "Aug 25",
    "GPU cluster": 9198,
    "Workspace usage": 7178,
  },
  {
    date: "Aug 26",
    "GPU cluster": 9557,
    "Workspace usage": 7158,
  },
  {
    date: "Aug 27",
    "GPU cluster": 9959,
    "Workspace usage": 7100,
  },
  {
    date: "Aug 28",
    "GPU cluster": 10034,
    "Workspace usage": 7934,
  },
  {
    date: "Aug 29",
    "GPU cluster": 10243,
    "Workspace usage": 7223,
  },
  {
    date: "Aug 30",
    "GPU cluster": 10078,
    "Workspace usage": 8779,
  },
  {
    date: "Aug 31",
    "GPU cluster": 11134,
    "Workspace usage": 8190,
  },
  //array-end
]

const summary = [
  {
    name: "Actual",
    value: "$8,110.15",
  },
  {
    name: "Forecasted",
    value: "$10,230.25",
  },
  {
    name: "Last invoice",
    value: "Sept 20, 2024",
  },
]

const Button = ({
  onClick,
  disabled,
  children,
  position,
}: {
  onClick?: () => void
  disabled?: boolean
  children: React.ReactNode
  position: "left" | "right"
}) => {
  return (
    <button
      type="button"
      className={cx(
        "group p-1.5 text-sm text-gray-700 transition-all hover:text-gray-900 disabled:cursor-not-allowed disabled:opacity-50 dark:text-gray-300 hover:dark:text-gray-50",
        position === "left"
          ? "rounded-l-md"
          : position === "right"
            ? "-ml-px rounded-r-md"
            : "",
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

const valueFormatter = (number: number) =>
  `$${Intl.NumberFormat("us").format(number).toString()}`

export default function Example() {
  const [showContent, setShowContent] = React.useState(true)

  return (
    <div className="obfuscate">
      <div className="flex flex-col gap-x-6 gap-y-5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <div className="mt-4 flex items-center gap-4 gap-y-2 sm:mt-0 sm:gap-x-8">
          {summary.map((item, index) => (
            <React.Fragment key={item.name}>
              <div>
                <p className="whitespace-nowrap text-sm text-gray-500 dark:text-gray-500">
                  {item.name}
                </p>

                <p className="mt-1 whitespace-nowrap text-sm font-semibold text-gray-900 dark:text-gray-50">
                  {item.value}
                </p>
              </div>
              <span className="flex">
                {index < summary.length - 1 && (
                  <span
                    className="h-10 w-px bg-slate-500/20"
                    aria-hidden="true"
                  />
                )}
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
      <Divider className="my-5" />
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Badge variant="success" className="!rounded-full">
            Active
          </Badge>
          <span
            className="h-6 w-px bg-gray-200 dark:bg-gray-800"
            aria-hidden="true"
          />
          <span className="text-sm text-gray-500 dark:text-gray-500">
            Started Aug 1, 2024 (billed on the 28th)
          </span>
        </div>
        <button
          className="hidden sm:inline-flex sm:items-center sm:space-x-1.5"
          onClick={() => setShowContent(!showContent)}
        >
          <RiArrowDownSLine
            className={cx(
              showContent ? "rotate-180" : "",
              "size-5 transform text-blue-500 transition-transform dark:text-blue-500",
            )}
            aria-hidden={true}
          />
          <span className="text-sm font-medium text-blue-500 dark:text-blue-500">
            {showContent ? "Hide details" : "Show details"}
          </span>
        </button>
      </div>
      {showContent && (
        <div className="mt-5 rounded-md bg-gray-50 p-4 ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-medium text-gray-900 dark:text-gray-50">
              Selected period
            </h4>
            <div className="inline-flex items-center gap-1 rounded-md">
              <Button position="left">
                <span className="sr-only">Previous</span>
                <RiArrowLeftSLine
                  className="size-5 text-gray-700 group-hover:text-gray-900 dark:text-gray-300 group-hover:dark:text-gray-50"
                  aria-hidden={true}
                />
              </Button>
              <span className="block w-full whitespace-nowrap text-sm font-medium tabular-nums text-gray-900 dark:text-gray-50">
                Aug 1 – 31, 2024
              </span>
              <Button position="right">
                <span className="sr-only">Next</span>
                <RiArrowRightSLine
                  className="size-5 text-gray-700 group-hover:text-gray-900 dark:text-gray-300 group-hover:dark:text-gray-50"
                  aria-hidden={true}
                />
              </Button>
            </div>
          </div>
          <BarChart
            data={data}
            index="date"
            categories={["GPU cluster", "Workspace usage"]}
            type="stacked"
            valueFormatter={valueFormatter}
            showLegend={false}
            yAxisWidth={65}
            className="mt-6 hidden sm:block"
          />
          <BarChart
            data={data}
            index="date"
            categories={["GPU cluster", "Workspace usage"]}
            type="stacked"
            valueFormatter={valueFormatter}
            showLegend={false}
            showYAxis={false}
            className="mt-6 sm:hidden"
          />
        </div>
      )}
    </div>
  )
}
