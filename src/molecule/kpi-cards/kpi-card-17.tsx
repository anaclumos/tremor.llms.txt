"use client"

import React from "react"

import { AreaChart, TooltipProps } from "@/atom/AreaChart"
import { Card } from "@/atom/Card"

const numberFormatter = (number: number) =>
  Intl.NumberFormat("en-US").format(number).toString()

const percentageFormatter = (number: number) =>
  `${Intl.NumberFormat("en-US").format(number)}%`

type DataItem = {
  date: string
  users: number
  sessions: number
  churn: number
}

const data: DataItem[] = [
  { date: "Jan 23", users: 234, sessions: 1432, churn: 5.2 },
  { date: "Feb 23", users: 431, sessions: 1032, churn: 4.3 },
  { date: "Mar 23", users: 543, sessions: 1089, churn: 5.1 },
  { date: "Apr 23", users: 489, sessions: 988, churn: 5.4 },
  { date: "May 23", users: 391, sessions: 642, churn: 5.5 },
  { date: "Jun 23", users: 582, sessions: 786, churn: 4.8 },
  { date: "Jul 23", users: 482, sessions: 673, churn: 4.5 },
  { date: "Aug 23", users: 389, sessions: 761, churn: 0 },
  { date: "Sep 23", users: 521, sessions: 793, churn: 0 },
  { date: "Oct 23", users: 434, sessions: 543, churn: 0 },
  { date: "Nov 23", users: 332, sessions: 678, churn: 0 },
  { date: "Dec 23", users: 275, sessions: 873, churn: 0 },
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
    name: "Monthly churn (%)",
    chartCategory: "churn",
    valueFormatter: percentageFormatter,
  },
]

const KpiCard = ({ item }: { item: Category }) => {
  const [selectedChartData, setSelectedChartData] =
    React.useState<TooltipProps | null>(null)
  const payload = selectedChartData?.payload[0]
  const formattedValue = payload
    ? item.valueFormatter(payload.payload[item.chartCategory] as number)
    : item.valueFormatter(data[data.length - 1][item.chartCategory] as number)

  return (
    <Card>
      <dt className="text-sm text-gray-500 dark:text-gray-500">{item.name}</dt>
      <dd className="mt-1 flex items-baseline justify-between">
        <span className="text-lg font-semibold text-gray-900 dark:text-gray-50">
          {formattedValue}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-500">
          {payload ? payload.payload.date : data[data.length - 1].date}
        </span>
      </dd>
      <AreaChart
        data={data}
        index="date"
        categories={[item.chartCategory]}
        showLegend={false}
        showTooltip={false}
        showYAxis={false}
        showGridLines={false}
        startEndOnly={true}
        fill="solid"
        className="mt-3 -mb-2 h-24"
        tooltipCallback={(props) => {
          if (props.active) {
            setSelectedChartData((prev) =>
              prev?.label === props.label ? prev : props,
            )
          } else {
            setSelectedChartData(null)
          }
          return null
        }}
      />
    </Card>
  )
}

const Example = () => (
  <div className="obfuscate">
    <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((item) => (
        <KpiCard item={item} key={item.name} />
      ))}
    </dl>
  </div>
)

export default Example
