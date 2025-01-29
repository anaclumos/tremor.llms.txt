"use client"

import React from "react"

import { cx } from "@/lib/utils"

import { AreaChart, TooltipProps } from "../../atoms/AreaChart"
import { Card } from "../../atoms/Card"

const currencyFormatter = (number: number) =>
  `$${Intl.NumberFormat("en-US").format(number)}`

const numberFormatter = (number: number) =>
  Intl.NumberFormat("en-US").format(number).toString()

function formatChange(
  currentValue: number | undefined,
  previousValue: number | undefined,
) {
  if (
    currentValue === undefined ||
    previousValue === undefined ||
    isNaN(currentValue) ||
    isNaN(previousValue)
  ) {
    return "--"
  }

  const percentageChange =
    ((currentValue - previousValue) / previousValue) * 100
  const absoluteChange = currentValue - previousValue

  const formattedPercentage = `${percentageChange > 0 ? "+" : ""}${percentageChange.toFixed(1)}%`
  const formattedAbsolute = `${absoluteChange >= 0 ? "+" : "-"}${currencyFormatter(Math.abs(absoluteChange))}`

  return `${formattedPercentage} (${formattedAbsolute})`
}

type DataItem = {
  date: string
  users: number
  sessions: number
  revenue: number
}

const data: DataItem[] = [
  //array-start
  {
    date: "Jan 23",
    users: 234,
    sessions: 1432,
    revenue: 2340,
  },
  {
    date: "Feb 23",
    users: 431,
    sessions: 1032,
    revenue: 3110,
  },
  {
    date: "Mar 23",
    users: 543,
    sessions: 1089,
    revenue: 4643,
  },
  {
    date: "Apr 23",
    users: 489,
    sessions: 988,
    revenue: 4650,
  },
  {
    date: "May 23",
    users: 391,
    sessions: 642,
    revenue: 3980,
  },
  {
    date: "Jun 23",
    users: 582,
    sessions: 786,
    revenue: 4702,
  },
  {
    date: "Jul 23",
    users: 482,
    sessions: 673,
    revenue: 5990,
  },
  {
    date: "Aug 23",
    users: 389,
    sessions: 761,
    revenue: 5700,
  },
  {
    date: "Sep 23",
    users: 521,
    sessions: 793,
    revenue: 4250,
  },
  {
    date: "Oct 23",
    users: 434,
    sessions: 543,
    revenue: 4182,
  },
  {
    date: "Nov 23",
    users: 332,
    sessions: 678,
    revenue: 3812,
  },
  {
    date: "Dec 23",
    users: 275,
    sessions: 873,
    revenue: 4900,
  },
  //array-end
]

type Category = {
  name: string
  chartCategory: keyof DataItem
  valueFormatter: (number: number) => string
}

const categories: Category[] = [
  {
    name: "Monthly users",
    chartCategory: "users",
    valueFormatter: numberFormatter,
  },
  {
    name: "Monthly sessions",
    chartCategory: "sessions",
    valueFormatter: numberFormatter,
  },
  {
    name: "Monthly revenue",
    chartCategory: "revenue",
    valueFormatter: currencyFormatter,
  },
]

function KpiCard({ item }: { item: Category }) {
  const [selectedChartData, setSelectedChartData] =
    React.useState<TooltipProps | null>(null)

  const lastDataItem = data[data.length - 1]
  const payload = selectedChartData?.payload[0]
  const currentDataItem = payload ? payload.payload : lastDataItem

  const value = currentDataItem[item.chartCategory]

  const customTooltipIndex = "date"

  const currentIndex = data.findIndex(
    (e) => e[customTooltipIndex] === currentDataItem[customTooltipIndex],
  )
  const previousDataItem = currentIndex > 0 ? data[currentIndex - 1] : undefined

  const prevValue = previousDataItem
    ? (previousDataItem[item.chartCategory] as number)
    : undefined

  const formattedValue = item.valueFormatter(value)

  return (
    <Card className="sm:mx-auto sm:max-w-lg">
      <dt className="text-sm text-gray-500 dark:text-gray-500">{item.name}</dt>
      <dd className="mt-2 text-3xl font-semibold text-gray-900 dark:text-gray-50">
        {formattedValue}
      </dd>
      <dd className="mt-1 flex items-baseline justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-500">
          On {currentDataItem.date}
        </span>
        <span
          className={cx(
            "rounded-md p-2 text-sm font-medium",
            formatChange(value, prevValue) === "--"
              ? "text-gray-700 dark:text-gray-300"
              : prevValue && value! > prevValue
                ? "text-emerald-700 dark:text-emerald-500"
                : "text-red-700 dark:text-red-500",
          )}
        >
          {formatChange(value, prevValue)}
        </span>
      </dd>
      <AreaChart
        className="mt-8 h-20"
        data={data}
        index="date"
        categories={[item.chartCategory]}
        showLegend={false}
        showYAxis={false}
        showTooltip={false}
        showGridLines={false}
        startEndOnly={true}
        fill="solid"
        tooltipCallback={(props) => {
          if (props.active) {
            setSelectedChartData((prev) => {
              if (prev?.label === props.label) return prev
              return props
            })
          } else {
            setSelectedChartData(null)
          }
          return null
        }}
      />
    </Card>
  )
}

export default function Example() {
  return (
    <div className="obfuscate">
      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((item) => (
          <KpiCard item={item} key={item.name} />
        ))}
      </dl>
    </div>
  )
}
