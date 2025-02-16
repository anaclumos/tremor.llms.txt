```example/kpi-cards-kpi-card-27.tsx
"use client"

import { Card } from "@/atom/Card"
import { LineChart } from "@/atom/LineChart"

//array-start
const volume = [
  {
    time: "0:00 AM",
    Today: 280,
    Yesterday: 220,
  },
  {
    time: "1:00 AM",
    Today: 210,
    Yesterday: 180,
  },
  {
    time: "2:00 AM",
    Today: 190,
    Yesterday: 150,
  },
  {
    time: "3:00 AM",
    Today: 170,
    Yesterday: 130,
  },
  {
    time: "4:00 AM",
    Today: 220,
    Yesterday: 160,
  },
  {
    time: "5:00 AM",
    Today: 290,
    Yesterday: 200,
  },
  {
    time: "6:00 AM",
    Today: 350,
    Yesterday: 250,
  },
  {
    time: "7:00 AM",
    Today: 420,
    Yesterday: 310,
  },
  {
    time: "8:00 AM",
    Today: 480,
    Yesterday: 340,
  },
  {
    time: "9:00 AM",
    Today: 510,
    Yesterday: 380,
  },
  {
    time: "10:00 AM",
    Today: 490,
    Yesterday: 360,
  },
  {
    time: "11:59 AM",
    Today: 450,
    Yesterday: 330,
  },
]

const queries = [
  {
    time: "0:00 AM",
    Current: 2800,
    Previous: 2200,
  },
  {
    time: "1:00 AM",
    Current: 2100,
    Previous: 1800,
  },
  {
    time: "2:00 AM",
    Current: 1900,
    Previous: 1500,
  },
  {
    time: "3:00 AM",
    Current: 1700,
    Previous: 1300,
  },
  {
    time: "4:00 AM",
    Current: 2200,
    Previous: 1600,
  },
  {
    time: "5:00 AM",
    Current: 2900,
    Previous: 2000,
  },
  {
    time: "6:00 AM",
    Current: 3500,
    Previous: 2500,
  },
  {
    time: "7:00 AM",
    Current: 4200,
    Previous: 3100,
  },
  {
    time: "8:00 AM",
    Current: 4800,
    Previous: 3400,
  },
  {
    time: "9:00 AM",
    Current: 5100,
    Previous: 1800,
  },
  {
    time: "10:00 AM",
    Current: 4900,
    Previous: 1600,
  },
  {
    time: "11:59 AM",
    Current: 4500,
    Previous: 3300,
  },
]

const analyticsData = [
  {
    time: "0:00 AM",
    ProcessingTime: 1200,
    DataVolume: 1000,
  },
  {
    time: "1:00 AM",
    ProcessingTime: 900,
    DataVolume: 600,
  },
  {
    time: "2:00 AM",
    ProcessingTime: 800,
    DataVolume: 500,
  },
  {
    time: "3:00 AM",
    ProcessingTime: 1200,
    DataVolume: 900,
  },
  {
    time: "4:00 AM",
    ProcessingTime: 2100,
    DataVolume: 1700,
  },
  {
    time: "5:00 AM",
    ProcessingTime: 1500,
    DataVolume: 1000,
  },
  {
    time: "6:00 AM",
    ProcessingTime: 2200,
    DataVolume: 1500,
  },
  {
    time: "7:00 AM",
    ProcessingTime: 3100,
    DataVolume: 2000,
  },
  {
    time: "8:00 AM",
    ProcessingTime: 3800,
    DataVolume: 2500,
  },
  {
    time: "9:00 AM",
    ProcessingTime: 4200,
    DataVolume: 3000,
  },
  {
    time: "10:00 AM",
    ProcessingTime: 3900,
    DataVolume: 2800,
  },
  {
    time: "11:59 AM",
    ProcessingTime: 3500,
    DataVolume: 2400,
  },
]

//array-end

export default function Example() {
  return (
    <div className="obfuscate">
      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <dt className="text-sm font-medium text-gray-900 dark:text-gray-50">
            Call Volume Trends
          </dt>
          <div className="mt-4 flex items-center gap-x-8 gap-y-4">
            <dd className="space-y-3 whitespace-nowrap">
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className="size-2.5 shrink-0 rounded-sm bg-blue-500 dark:bg-blue-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-900 dark:text-gray-50">
                    Today
                  </span>
                </div>
                <span className="mt-1 block text-2xl font-semibold text-gray-900 dark:text-gray-50">
                  573
                </span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className="size-2.5 shrink-0 rounded-sm bg-gray-400 dark:bg-gray-600"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-900 dark:text-gray-50">
                    Yesterday
                  </span>
                </div>
                <span className="mt-1 block text-2xl font-semibold text-gray-900 dark:text-gray-50">
                  451
                </span>
              </div>
            </dd>
            <LineChart
              className="h-28"
              data={volume}
              index="time"
              categories={["Today", "Yesterday"]}
              colors={["blue", "gray"]}
              showTooltip={false}
              valueFormatter={(number: number) =>
                Intl.NumberFormat("us").format(number).toString()
              }
              startEndOnly={true}
              showYAxis={false}
              showLegend={false}
            />
          </div>
        </Card>
        <Card>
          <dt className="text-sm font-medium text-gray-900 dark:text-gray-50">
            Query Volume Trends
          </dt>
          <div className="mt-4 flex items-center gap-x-8 gap-y-4">
            <dd className="space-y-3 whitespace-nowrap">
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className="size-2.5 shrink-0 rounded-sm bg-blue-500 dark:bg-blue-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-900 dark:text-gray-50">
                    Today
                  </span>
                </div>
                <span className="mt-1 block text-2xl font-semibold text-gray-900 dark:text-gray-50">
                  5,730
                </span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className="size-2.5 shrink-0 rounded-sm bg-gray-400 dark:bg-gray-600"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-900 dark:text-gray-50">
                    Yesterday
                  </span>
                </div>
                <span className="mt-1 block text-2xl font-semibold text-gray-900 dark:text-gray-50">
                  4,510
                </span>
              </div>
            </dd>
            <LineChart
              className="h-28"
              data={queries}
              index="time"
              categories={["Current", "Previous"]}
              colors={["blue", "gray"]}
              showTooltip={false}
              valueFormatter={(number: number) =>
                Intl.NumberFormat("us").format(number).toString()
              }
              startEndOnly={true}
              showYAxis={false}
              showLegend={false}
            />
          </div>
        </Card>
        <Card>
          <dt className="text-sm font-medium text-gray-900 dark:text-gray-50">
            ETL Pipeline Performance
          </dt>
          <div className="mt-4 flex items-center gap-x-8 gap-y-4">
            <dd className="space-y-3 whitespace-nowrap">
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className="size-2.5 shrink-0 rounded-sm bg-purple-500 dark:bg-purple-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-900 dark:text-gray-50">
                    Processing (ms)
                  </span>
                </div>
                <span className="mt-1 block text-2xl font-semibold text-gray-900 dark:text-gray-50">
                  4,200
                </span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className="size-2.5 shrink-0 rounded-sm bg-indigo-400 dark:bg-indigo-600"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-900 dark:text-gray-50">
                    Volume (MB)
                  </span>
                </div>
                <span className="mt-1 block text-2xl font-semibold text-gray-900 dark:text-gray-50">
                  3,000
                </span>
              </div>
            </dd>
            <LineChart
              className="h-28"
              data={analyticsData}
              index="time"
              categories={["ProcessingTime", "DataVolume"]}
              colors={["purple", "indigo"]}
              showTooltip={false}
              valueFormatter={(number: number) =>
                Intl.NumberFormat("us").format(number).toString()
              }
              startEndOnly={true}
              showYAxis={false}
              showLegend={false}
            />
          </div>
        </Card>
      </dl>
    </div>
  )
}
```


```example/kpi-cards-kpi-card-26.tsx
"use client"

import { Card } from "@/atom/Card"
import { ProgressCircle } from "@/atom/ProgressCircle"

export default function Example() {
  return (
    <div className="obfuscate">
      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <dt className="text-sm font-medium text-gray-900 dark:text-gray-50">
            SLA Performance
          </dt>
          <div className="mt-4 flex flex-nowrap items-center justify-between gap-y-4">
            <dd className="space-y-3">
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className="size-2.5 shrink-0 rounded-sm bg-blue-500 dark:bg-blue-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-900 dark:text-gray-50">
                    Within SLA
                  </span>
                </div>
                <span className="mt-1 block text-2xl font-semibold text-gray-900 dark:text-gray-50">
                  83.3%
                </span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className="size-2.5 shrink-0 rounded-sm bg-red-500 dark:bg-red-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-900 dark:text-gray-50">
                    SLA Breached
                  </span>
                </div>
                <span className="mt-1 block text-2xl font-semibold text-gray-900 dark:text-gray-50">
                  16.7%
                </span>
              </div>
            </dd>
            <ProgressCircle value={83} radius={45} strokeWidth={7} />
          </div>
        </Card>
        <Card>
          <dt className="text-sm font-medium text-gray-900 dark:text-gray-50">
            Response Time
          </dt>
          <div className="mt-4 flex flex-nowrap items-center justify-between gap-y-4">
            <dd className="space-y-3">
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className="size-2.5 shrink-0 rounded-sm bg-blue-500 dark:bg-blue-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-900 dark:text-gray-50">
                    Under Threshold
                  </span>
                </div>
                <span className="mt-1 block text-2xl font-semibold text-gray-900 dark:text-gray-50">
                  95.8%
                </span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className="size-2.5 shrink-0 rounded-sm bg-red-500 dark:bg-red-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-900 dark:text-gray-50">
                    Over Threshold
                  </span>
                </div>
                <span className="mt-1 block text-2xl font-semibold text-gray-900 dark:text-gray-50">
                  4.2%
                </span>
              </div>
            </dd>
            <ProgressCircle value={96} radius={45} strokeWidth={7} />
          </div>
        </Card>
        <Card>
          <dt className="text-sm font-medium text-gray-900 dark:text-gray-50">
            Cache Performance
          </dt>
          <div className="mt-4 flex flex-nowrap items-center justify-between gap-y-4">
            <dd className="space-y-3">
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className="size-2.5 shrink-0 rounded-sm bg-blue-500 dark:bg-blue-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-900 dark:text-gray-50">
                    Cache Hits
                  </span>
                </div>
                <span className="mt-1 block text-2xl font-semibold text-gray-900 dark:text-gray-50">
                  78.4%
                </span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className="size-2.5 shrink-0 rounded-sm bg-red-500 dark:bg-red-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-900 dark:text-gray-50">
                    Cache Misses
                  </span>
                </div>
                <span className="mt-1 block text-2xl font-semibold text-gray-900 dark:text-gray-50">
                  21.6%
                </span>
              </div>
            </dd>
            <ProgressCircle value={78} radius={45} strokeWidth={7} />
          </div>
        </Card>
      </dl>
    </div>
  )
}
```


```example/kpi-cards-kpi-card-18.tsx
"use client"

import React from "react"

import { cx } from "@/lib/utils"

import { AreaChart, TooltipProps } from "@/atom/AreaChart"
import { Card } from "@/atom/Card"

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

  const formattedPercentage = `${percentageChange > 0 ? "+" : ""}${percentageChange.toFixed(1)}%`

  return `${formattedPercentage}`
}

type DataItem = {
  date: string
  users: number
  sessions: number
  churn: number
}

const data: DataItem[] = [
  {
    date: "Jan 23",
    users: 234,
    sessions: 1432,
    churn: 2340,
  },
  {
    date: "Feb 23",
    users: 431,
    sessions: 1032,
    churn: 3110,
  },
  {
    date: "Mar 23",
    users: 543,
    sessions: 1089,
    churn: 4643,
  },
  {
    date: "Apr 23",
    users: 489,
    sessions: 988,
    churn: 4650,
  },
  {
    date: "May 23",
    users: 391,
    sessions: 642,
    churn: 3980,
  },
  {
    date: "Jun 23",
    users: 582,
    sessions: 786,
    churn: 4702,
  },
  {
    date: "Jul 23",
    users: 482,
    sessions: 673,
    churn: 5990,
  },
  {
    date: "Aug 23",
    users: 389,
    sessions: 761,
    churn: 5700,
  },
  {
    date: "Sep 23",
    users: 521,
    sessions: 793,
    churn: 4250,
  },
  {
    date: "Oct 23",
    users: 434,
    sessions: 543,
    churn: 4182,
  },
  {
    date: "Nov 23",
    users: 332,
    sessions: 678,
    churn: 3812,
  },
  {
    date: "Dec 23",
    users: 275,
    sessions: 873,
    churn: 4900,
  },
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
    name: "Monthly churn",
    chartCategory: "churn",
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
      <div className="flex items-baseline justify-between">
        <dt className="text-sm text-gray-500 dark:text-gray-500">
          {item.name}
        </dt>
        <dd
          className={cx(
            "rounded-md bg-gray-100 px-1.5 py-0.5 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300",
          )}
        >
          {formatChange(value, prevValue)}
        </dd>
      </div>
      <dd className="mt-2 flex items-baseline justify-between">
        <span className="font-semibold text-gray-900 dark:text-gray-50">
          {formattedValue}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-500">
          On {currentDataItem.date}
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
```


```example/kpi-cards-kpi-card-24.tsx
"use client"

import { RiCashLine, RiLinksLine, RiSafeLine } from "@remixicon/react"

import { cx } from "@/lib/utils"

import { Card } from "@/atom/Card"

const data = [
  {
    name: "Revenue",
    stat: "10,450",
    change: "-12.5%",
    changeType: "negative",
    icon: RiCashLine,
    top3: {
      "Membership Dues": 4734,
      Fundraisers: 3233,
      Donations: 2483,
    },
  },
  {
    name: "Expenses",
    stat: "3,382",
    change: "+1.8%",
    changeType: "positive",
    icon: RiSafeLine,
    top3: {
      "Operational Costs": 1691,
      Marketing: 845,
      Equipment: 846,
    },
  },
  {
    name: "Engagement",
    stat: "80.2%",
    change: "+19.7%",
    changeType: "positive",
    icon: RiLinksLine,
    top3: {
      "Social Media Interactions": 40.1,
      "Event Attendance": 24.1,
      "Volunteer Participation": 16.0,
    },
  },
]

export default function Example() {
  return (
    <div className="obfuscate">
      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <Card key={item.name}>
            <dt className="flex flex-nowrap items-center gap-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
              <div className="rounded-md p-1.5 ring-1 shadow ring-black/5 dark:ring-white/15">
                <item.icon className="size-5 shrink-0" aria-hidden="true" />
              </div>
              <span>{item.name}</span>
            </dt>
            <dd className="mt-3 flex items-baseline justify-between space-x-2.5">
              <span className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
                {item.stat}
              </span>
              <span
                className={cx(
                  item.changeType === "positive"
                    ? "text-emerald-700 dark:text-emerald-500"
                    : "text-red-700 dark:text-red-500",
                  "text-sm font-medium",
                )}
              >
                {item.change}
              </span>
            </dd>
            <div className="mt-5 flex flex-col gap-3">
              {Object.entries(item.top3).map(([title, value]) => (
                <div key={title} className="flex justify-between text-sm">
                  <div className="truncate text-gray-600 dark:text-gray-400">
                    {title}
                  </div>
                  <div className="font-medium text-gray-900 dark:text-gray-50">
                    {typeof value === "number" && item.name !== "Engagement"
                      ? `$${value.toLocaleString()}`
                      : `${value}${item.name === "Engagement" ? "%" : ""}`}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </dl>
    </div>
  )
}
```


```example/kpi-cards-kpi-card-25.tsx
"use client"

import { Card } from "@/atom/Card"
import { CategoryBar } from "@/atom/CategoryBar"

export default function Example() {
  return (
    <div className="obfuscate">
      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <dt className="text-sm font-medium text-gray-900 dark:text-gray-50">
            Current Tickets
          </dt>
          <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-50">
            247
          </dd>
          <CategoryBar
            values={[82, 13, 5]}
            className="mt-6"
            colors={["blue", "gray", "red"]}
            showLabels={false}
          />
          <ul
            role="list"
            className="mt-4 flex flex-wrap gap-x-8 gap-y-4 text-sm"
          >
            <li>
              <span className="text-base font-semibold text-gray-900 dark:text-gray-50">
                82%
              </span>
              <div className="flex items-center gap-2">
                <span
                  className="size-2.5 shrink-0 rounded-sm bg-blue-500 dark:bg-blue-500"
                  aria-hidden="true"
                />
                <span className="text-sm text-gray-900 dark:text-gray-50">
                  Resolved
                </span>
              </div>
            </li>
            <li>
              <span className="text-base font-semibold text-gray-900 dark:text-gray-50">
                13%
              </span>
              <div className="flex items-center gap-2">
                <span
                  className="size-2.5 shrink-0 rounded-sm bg-gray-500"
                  aria-hidden="true"
                />
                <span className="text-sm text-gray-900 dark:text-gray-50">
                  Progress
                </span>
              </div>
            </li>
            <li>
              <span className="text-base font-semibold text-gray-900 dark:text-gray-50">
                5%
              </span>
              <div className="flex items-center gap-2">
                <span
                  className="size-2.5 shrink-0 rounded-sm bg-red-500 dark:bg-red-500"
                  aria-hidden="true"
                />
                <span className="text-sm text-gray-900 dark:text-gray-50">
                  Escalated
                </span>
              </div>
            </li>
          </ul>
        </Card>
        <Card>
          <dt className="text-sm font-medium text-gray-900 dark:text-gray-50">
            Database Queries
          </dt>
          <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-50">
            44757
          </dd>
          <CategoryBar
            values={[57, 12, 31]}
            className="mt-6"
            colors={["blue", "gray", "red"]}
            showLabels={false}
          />
          <ul
            role="list"
            className="mt-4 flex flex-wrap gap-x-8 gap-y-4 text-sm"
          >
            <li>
              <span className="text-base font-semibold text-gray-900 dark:text-gray-50">
                57%
              </span>
              <div className="flex items-center gap-2">
                <span
                  className="size-2.5 shrink-0 rounded-sm bg-blue-500 dark:bg-blue-500"
                  aria-hidden="true"
                />
                <span className="text-sm text-gray-900 dark:text-gray-50">
                  Optimized
                </span>
              </div>
            </li>
            <li>
              <span className="text-base font-semibold text-gray-900 dark:text-gray-50">
                12%
              </span>
              <div className="flex items-center gap-2">
                <span
                  className="size-2.5 shrink-0 rounded-sm bg-gray-500"
                  aria-hidden="true"
                />
                <span className="text-sm text-gray-900 dark:text-gray-50">
                  Editing
                </span>
              </div>
            </li>
            <li>
              <span className="text-base font-semibold text-gray-900 dark:text-gray-50">
                31%
              </span>
              <div className="flex items-center gap-2">
                <span
                  className="size-2.5 shrink-0 rounded-sm bg-red-500 dark:bg-red-500"
                  aria-hidden="true"
                />
                <span className="text-sm text-gray-900 dark:text-gray-50">
                  Slow
                </span>
              </div>
            </li>
          </ul>
        </Card>
        <Card>
          <dt className="text-sm font-medium text-gray-900 dark:text-gray-50">
            Query Latency
          </dt>
          <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-50">
            1,247ms
          </dd>
          <CategoryBar
            values={[75, 20, 5]}
            className="mt-6"
            colors={["blue", "gray", "red"]}
            showLabels={false}
          />
          <ul
            role="list"
            className="mt-4 flex flex-wrap gap-x-8 gap-y-4 text-sm"
          >
            <li>
              <span className="text-base font-semibold text-gray-900 dark:text-gray-50">
                75%
              </span>
              <div className="flex items-center gap-2">
                <span
                  className="size-2.5 shrink-0 rounded-sm bg-blue-500 dark:bg-blue-500"
                  aria-hidden="true"
                />
                <span className="text-sm text-gray-900 dark:text-gray-50">
                  Fast
                </span>
              </div>
            </li>
            <li>
              <span className="text-base font-semibold text-gray-900 dark:text-gray-50">
                20%
              </span>
              <div className="flex items-center gap-2">
                <span
                  className="size-2.5 shrink-0 rounded-sm bg-gray-500"
                  aria-hidden="true"
                />
                <span className="text-sm text-gray-900 dark:text-gray-50">
                  Medium
                </span>
              </div>
            </li>
            <li>
              <span className="text-base font-semibold text-gray-900 dark:text-gray-50">
                5%
              </span>
              <div className="flex items-center gap-2">
                <span
                  className="size-2.5 shrink-0 rounded-sm bg-red-500 dark:bg-red-500"
                  aria-hidden="true"
                />
                <span className="text-sm text-gray-900 dark:text-gray-50">
                  Slow
                </span>
              </div>
            </li>
          </ul>
        </Card>
      </dl>
    </div>
  )
}
```


```example/kpi-cards-kpi-card-19.tsx
"use client"

import React from "react"

import { cx } from "@/lib/utils"

import { AreaChart, TooltipProps } from "@/atom/AreaChart"
import { Card } from "@/atom/Card"

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
```


```example/kpi-cards-kpi-card-21.tsx
"use client"

import { cx } from "@/lib/utils"

import { Card } from "@/atom/Card"
import { CategoryBar } from "@/atom/CategoryBar"

const data = [
  //array-start
  {
    name: "Average tokes per requests",
    total: "341",
    split: [136, 205],
    details: [
      {
        name: "Completion tokens",
        value: "136",
      },
      {
        name: "Prompt tokens",
        value: "205",
      },
    ],
  },
  {
    name: "Total tokens",
    total: "4,229",
    split: [1480, 2749],
    details: [
      {
        name: "Completion tokens",
        value: "1,480",
      },
      {
        name: "Prompt tokens",
        value: "2,749",
      },
    ],
  },
  {
    name: "Total tokens by advanced model",
    total: "1,040",
    split: [260, 780],
    details: [
      {
        name: "Completion tokens",
        value: "260",
      },
      {
        name: "Prompt tokens",
        value: "780",
      },
    ],
  },
  {
    name: "Total tokens by base model",
    total: "2,920",
    split: [847, 2073],
    details: [
      {
        name: "Completion tokens",
        value: "847",
      },
      {
        name: "Prompt tokens",
        value: "2,073",
      },
    ],
  },
  //array-end
]

type LegendItem = "Completion tokens" | "Prompt tokens"

const legendColor: Record<LegendItem, string> = {
  "Completion tokens": "bg-sky-500 dark:bg-sky-500",
  "Prompt tokens": "bg-indigo-500 dark:bg-indigo-500",
}

export default function Example() {
  return (
    <div className="obfuscate">
      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {data.map((item) => (
          <Card key={item.name}>
            <dt className="truncate text-sm text-gray-500 dark:text-gray-500">
              {item.name}
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-50">
              {item.total}
            </dd>
            <CategoryBar
              values={item.split}
              colors={["cyan", "indigo"]}
              showLabels={false}
              className="mt-6"
            />
            <ul
              role="list"
              className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2"
            >
              {item.details.map((category) => (
                <li key={category.name} className="flex items-center space-x-2">
                  <span
                    className={cx(
                      legendColor[category.name as LegendItem],
                      "size-3 shrink-0 rounded-sm",
                    )}
                    aria-hidden={true}
                  />
                  <span className="text-sm text-gray-500 dark:text-gray-500">
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      {category.value}
                    </span>{" "}
                    {category.name}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </dl>
    </div>
  )
}
```


```example/kpi-cards-kpi-card-09.tsx
"use client"

import { cx } from "@/lib/utils"

import { Card } from "@/atom/Card"

const data = [
  //array-start
  {
    name: "Monthly active users",
    stat: "996",
    change: "+1.3%",
    color: "bg-blue-500",
  },
  {
    name: "Monthly sessions",
    stat: "1,672",
    change: "+9.1%",
    color: "bg-violet-500",
  },
  {
    name: "Monthly user growth",
    stat: "5.1%",
    change: "-4.8%",
    color: "bg-fuchsia-500",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <Card key={item.name}>
            <div className="flex space-x-3">
              <div className={cx(item.color, "w-1 shrink-0 rounded")} />
              <dt className="flex w-full items-center justify-between space-x-3 truncate text-sm text-gray-500 dark:text-gray-500">
                <span className="truncate">{item.name}</span>
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  {item.change}
                </span>
              </dt>
            </div>
            <div className="mt-2 pl-4">
              <dd className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
                {item.stat}
              </dd>
            </div>
          </Card>
        ))}
      </dl>
    </div>
  )
}
```


```example/kpi-cards-kpi-card-08.tsx
"use client"

import { RiArrowDownSFill, RiArrowUpSFill } from "@remixicon/react"

import { cx } from "@/lib/utils"

import { Card } from "@/atom/Card"

const data = [
  //array-start
  {
    name: "Monthly active users",
    stat: "340",
    previousStat: "400",
    change: "15%",
    changeType: "negative",
  },
  {
    name: "Monthly sessions",
    stat: "672",
    previousStat: "350",
    change: "91.4%",
    changeType: "positive",
  },
  {
    name: "Monthly page views",
    stat: "3,290",
    previousStat: "3,012",
    change: "9.2%",
    changeType: "positive",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <Card key={item.name}>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-500">
              {item.name}
            </dt>
            <dd className="mt-1 flex items-baseline space-x-2.5">
              <p className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
                {item.stat}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                from {item.previousStat}
              </p>
            </dd>
            <dd className="mt-4 flex items-center space-x-2">
              <p className="flex items-center space-x-0.5">
                {item.changeType === "positive" ? (
                  <RiArrowUpSFill
                    className="size-5 shrink-0 text-emerald-700 dark:text-emerald-500"
                    aria-hidden={true}
                  />
                ) : (
                  <RiArrowDownSFill
                    className="size-5 shrink-0 text-red-700 dark:text-red-500"
                    aria-hidden={true}
                  />
                )}
                <span
                  className={cx(
                    item.changeType === "positive"
                      ? "text-emerald-700 dark:text-emerald-500"
                      : "text-red-700 dark:text-red-500",
                    "text-sm font-medium",
                  )}
                >
                  {item.change}
                </span>
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                from previous month
              </p>
            </dd>
          </Card>
        ))}
      </dl>
    </div>
  )
}
```


```example/kpi-cards-kpi-card-20.tsx
"use client"

import { Card } from "@/atom/Card"

const data = [
  //array-start
  {
    name: "Running",
    stat: "156",
    activities: [
      {
        type: "Endurance",
        share: "25.5%",
        zone: "<126",
        href: "#",
      },
      {
        type: "Moderate",
        share: "35.3%",
        zone: "126-157",
        href: "#",
      },
      {
        type: "Tempo",
        share: "14.2%",
        zone: "157-173",
        href: "#",
      },
      {
        type: "Threshold",
        share: "25.0%",
        zone: "173-189",
        href: "#",
      },
    ],
  },
  {
    name: "Cycling",
    stat: "142",
    activities: [
      {
        type: "Endurance",
        share: "20.2%",
        zone: "<126",
        href: "#",
      },
      {
        type: "Moderate",
        share: "45.6%",
        zone: "126-157",
        href: "#",
      },
      {
        type: "Tempo",
        share: "15.7%",
        zone: "157-173",
        href: "#",
      },
      {
        type: "Threshold",
        share: "18.5%",
        zone: "173-189",
        href: "#",
      },
    ],
  },
  {
    name: "Strength",
    stat: "113",
    activities: [
      {
        type: "Endurance",
        share: "80.1%",
        zone: "<126",
        href: "#",
      },
      {
        type: "Moderate",
        share: "9.9%",
        zone: "126-157",
        href: "#",
      },
      {
        type: "Tempo",
        share: "6.2%",
        zone: "157-173",
        href: "#",
      },
      {
        type: "Threshold",
        share: "3.8%",
        zone: "173-189",
        href: "#",
      },
    ],
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <Card key={item.name}>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-500">
              {item.name}
            </dt>
            <dd className="flex items-baseline space-x-2 text-gray-900 dark:text-gray-50">
              <span className="text-3xl font-semibold">{item.stat}</span>
              <span className="text-sm font-medium">bpm</span>
            </dd>
            <dd className="items-space mt-6 flex justify-between text-xs text-gray-500 dark:text-gray-500">
              <span>HR zone share</span>
              <span>BPM range</span>
            </dd>
            <ul role="list" className="mt-2 space-y-2">
              {item.activities.map((activity) => (
                <li
                  key={activity.type}
                  className="relative flex w-full items-center space-x-3 rounded-md bg-gray-100/60 p-1 hover:bg-gray-100 dark:bg-gray-800/60 hover:dark:bg-gray-800"
                >
                  <span className="inline-flex w-20 justify-center rounded bg-sky-500 py-1.5 text-sm font-semibold text-white dark:bg-sky-500 dark:text-white">
                    {activity.share}
                  </span>
                  <p className="flex w-full items-center justify-between space-x-4 truncate text-sm font-medium">
                    <span className="text-gary-500 truncate dark:text-gray-500">
                      <a href={activity.href} className="focus:outline-none">
                        {/* Extend link to entire card */}
                        <span className="absolute inset-0" aria-hidden={true} />
                        {activity.type}
                      </a>
                    </span>
                    <span className="pr-1.5 text-gray-900 dark:text-gray-50">
                      {activity.zone}
                    </span>
                  </p>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </dl>
    </div>
  )
}
```


```example/kpi-cards-kpi-card-22.tsx
"use client"

import { Card } from "@/atom/Card"
import { ProgressBar } from "@/atom/ProgressBar"

const data = [
  //array-start
  {
    name: "Average tokes per requests",
    total: "341",
    details: [
      {
        name: "Completion token",
        value: "136",
        percentageValue: 40,
      },
      {
        name: "Prompt token",
        value: "205",
        percentageValue: 60,
      },
    ],
  },
  {
    name: "Total tokens",
    total: "4,229",
    details: [
      {
        name: "Completion token",
        value: "1,480",
        percentageValue: 35,
      },
      {
        name: "Prompt token",
        value: "2,749",
        percentageValue: 65,
      },
    ],
  },
  {
    name: "Total tokens by advanced model",
    total: "1,040",
    details: [
      {
        name: "Completion token",
        value: "260",
        percentageValue: 25,
      },
      {
        name: "Prompt token",
        value: "780",
        percentageValue: 75,
      },
    ],
  },
  {
    name: "Total tokens by base model",
    total: "2,920",
    details: [
      {
        name: "Completion token",
        value: "847",
        percentageValue: 29,
      },
      {
        name: "Prompt token",
        value: "2,073",
        percentageValue: 71,
      },
    ],
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <dl className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {data.map((category) => (
          <Card key={category.name}>
            <dt className="text-sm text-gray-500 dark:text-gray-500">
              {category.name}
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-50">
              {category.total}
            </dd>
            <div className="mt-4 space-y-3">
              {category.details.map((item) => (
                <dd
                  key={item.name}
                  className="lg:flex lg:items-center lg:space-x-3"
                >
                  <p className="flex shrink-0 items-center justify-between space-x-2 text-sm lg:w-5/12">
                    <span className="truncate text-gray-500 dark:text-gray-500">
                      {item.name}
                    </span>
                    <span className="font-semibold whitespace-nowrap text-gray-900 dark:text-gray-50">
                      {item.value}{" "}
                      <span className="font-normal">
                        ({item.percentageValue}&#37;)
                      </span>
                    </span>
                  </p>
                  <ProgressBar
                    value={item.percentageValue}
                    className="mt-2 lg:mt-0"
                  />
                </dd>
              ))}
            </div>
          </Card>
        ))}
      </dl>
    </div>
  )
}
```


```example/kpi-cards-kpi-card-23.tsx
"use client"

import { RiArrowRightUpLine } from "@remixicon/react"

import { cx } from "@/lib/utils"

import { Card } from "@/atom/Card"
import { CategoryBar } from "@/atom/CategoryBar"

const data = [
  //array-start
  {
    channel: "Direct sales",
    share: 34.4,
    revenue: "$100.5K",
    color: "bg-blue-500",
    href: "#",
  },
  {
    channel: "Retail stores",
    share: 30.6,
    revenue: "$89.5K",
    color: "bg-orange-500",
    href: "#",
  },
  {
    channel: "E-commerce",
    share: 20.9,
    revenue: "$61.2K",
    color: "bg-sky-500",
    href: "#",
  },
  {
    channel: "Wholesale",
    share: 14.1,
    revenue: "$41.2K",
    color: "bg-gray-500",
    href: "#",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="sm:mx-auto sm:max-w-2xl">
        <h3 className="text-sm text-gray-500 dark:text-gray-500">
          Total sales
        </h3>
        <p className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
          $292,400
        </p>
        <h4 className="mt-4 text-sm text-gray-500 dark:text-gray-500">
          Sales channel distribution
        </h4>
        <CategoryBar
          values={[34.4, 30.6, 20.9, 14.1]}
          colors={["blue", "amber", "cyan", "gray"]}
          showLabels={false}
          className="mt-4"
        />
        <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {data.map((item) => (
            <Card key={item.channel} className="group rounded-md px-3 py-2">
              <div className="flex items-center space-x-2">
                <span
                  className={cx(item.color, "size-2.5 rounded-sm")}
                  aria-hidden={true}
                />
                <dt className="text-sm text-gray-500 dark:text-gray-500">
                  <a href={item.href} className="focus:outline-none">
                    {/* Extend link to entire card */}
                    <span className="absolute inset-0" aria-hidden={true} />
                    {item.channel}
                  </a>
                </dt>
              </div>
              <dd className="mt-1 text-sm text-gray-900 dark:text-gray-50">
                <span className="font-semibold">{item.share}%</span> &#8729;{" "}
                {item.revenue}
              </dd>
              <span
                className="pointer-events-none absolute top-2 right-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-600 group-hover:dark:text-gray-500"
                aria-hidden={true}
              >
                <RiArrowRightUpLine className="size-4" aria-hidden={true} />
              </span>
            </Card>
          ))}
        </dl>
      </div>
    </div>
  )
}
```


```example/kpi-cards-kpi-card-06.tsx
"use client"

import { RiArrowDownSFill, RiArrowUpSFill } from "@remixicon/react"

import { cx } from "@/lib/utils"

import { Card } from "@/atom/Card"

const data = [
  //array-start
  {
    name: "Daily active users",
    stat: "3,450",
    change: "12.1%",
    changeType: "positive",
  },
  {
    name: "Weekly sessions",
    stat: "1,342",
    change: "9.8%",
    changeType: "negative",
  },
  {
    name: "Duration",
    stat: "5.2min",
    change: "7.7%",
    changeType: "positive",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <Card key={item.name}>
            <div className="flex items-center justify-between">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-500">
                {item.name}
              </dt>
              <dd
                className={cx(
                  item.changeType === "positive"
                    ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-400/10 dark:text-emerald-500"
                    : "bg-red-100 text-red-800 dark:bg-red-400/10 dark:text-red-500",
                  "inline-flex items-center gap-x-1 rounded-md px-1.5 py-0.5 text-xs font-medium",
                )}
              >
                {item.changeType === "positive" ? (
                  <RiArrowUpSFill
                    className="-ml-0.5 size-4 shrink-0"
                    aria-hidden={true}
                  />
                ) : (
                  <RiArrowDownSFill
                    className="-ml-0.5 size-4 shrink-0"
                    aria-hidden={true}
                  />
                )}
                {item.change}
              </dd>
            </div>
            <dd className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
              {item.stat}
            </dd>
          </Card>
        ))}
      </dl>
    </div>
  )
}
```


```example/kpi-cards-kpi-card-12.tsx
"use client"

import { RiExternalLinkLine } from "@remixicon/react"

import { Card } from "@/atom/Card"
import { ProgressCircle } from "@/atom/ProgressCircle"

const data = [
  //array-start
  {
    name: "Workspaces",
    capacity: 20,
    current: 1,
    allowed: 5,
  },
  {
    name: "Dashboards",
    capacity: 10,
    current: 2,
    allowed: 20,
  },
  {
    name: "Chart widgets",
    capacity: 0,
    current: 0,
    allowed: 50,
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <h2 className="text-lg font-medium text-gray-900 dark:text-gray-50">
        Plan overview
      </h2>
      <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
        You are currently on the{" "}
        <span className="font-medium text-gray-900 dark:text-gray-500">
          starter plan
        </span>
        .{" "}
        <a
          href="#"
          className="inline-flex items-center gap-1 text-blue-500 hover:underline hover:underline-offset-4 dark:text-blue-500"
        >
          View other plans
          <RiExternalLinkLine className="size-4" aria-hidden={true} />
        </a>
      </p>
      <dl className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <Card key={item.name}>
            <div className="flex items-center space-x-3">
              <ProgressCircle value={item.capacity} radius={25} strokeWidth={5}>
                <span className="text-xs font-medium text-gray-900 dark:text-gray-50">
                  {item.capacity}&#37;
                </span>
              </ProgressCircle>
              <div>
                <dt className="text-sm font-medium text-gray-900 dark:text-gray-50">
                  {item.name}
                </dt>
                <dd className="text-sm text-gray-500 dark:text-gray-500">
                  {item.current} of {item.allowed} used
                </dd>
              </div>
            </div>
          </Card>
        ))}
      </dl>
    </div>
  )
}
```


```example/kpi-cards-kpi-card-13.tsx
"use client"

import { Card } from "@/atom/Card"
import { ProgressCircle } from "@/atom/ProgressCircle"

const data = [
  //array-start
  {
    name: "HR",
    progress: 25,
    budget: "$1,000",
    current: "$250",
    href: "#",
  },
  {
    name: "Marketing",
    progress: 55,
    budget: "$1,000",
    current: "$550",
    href: "#",
  },
  {
    name: "Finance",
    progress: 85,
    budget: "$1,000",
    current: "$850",
    href: "#",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <Card key={item.name} className="!p-0">
            <div className="flex items-center space-x-3 px-6 pt-6">
              <ProgressCircle value={item.progress} radius={25} strokeWidth={5}>
                <span className="text-xs font-medium text-gray-900 dark:text-gray-50">
                  {item.progress}&#37;
                </span>
              </ProgressCircle>
              <div>
                <dd className="text-sm font-medium text-gray-900 dark:text-gray-50">
                  {item.current} / {item.budget}
                </dd>
                <dt className="text-sm text-gray-500 dark:text-gray-500">
                  Budget {item.name}
                </dt>
              </div>
            </div>
            <div className="mt-8 flex items-center justify-end border-t border-gray-200 px-6 py-3 dark:border-gray-900">
              <a
                href={item.href}
                className="text-sm font-medium text-blue-500 hover:text-blue-600 dark:text-blue-500 hover:dark:text-blue-600"
              >
                View more &#8594;
              </a>
            </div>
          </Card>
        ))}
      </dl>
    </div>
  )
}
```


```example/kpi-cards-kpi-card-07.tsx
"use client"

import { cx } from "@/lib/utils"

import { Card } from "@/atom/Card"

const data = [
  //array-start
  {
    name: "Monthly active users",
    stat: "340",
    previousStat: "400",
    change: "-15%",
    changeType: "negative",
  },
  {
    name: "Monthly sessions",
    stat: "672",
    previousStat: "350",
    change: "+91.4%",
    changeType: "positive",
  },
  {
    name: "Monthly page views",
    stat: "3,290",
    previousStat: "3,012",
    change: "+9.2%",
    changeType: "positive",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <Card key={item.name}>
            <div className="flex items-center justify-between space-x-4">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-500">
                {item.name}
              </dt>
              <dd
                className={cx(
                  item.changeType === "positive"
                    ? "bg-emerald-100 text-emerald-800 ring-emerald-600/10 dark:bg-emerald-400/10 dark:text-emerald-500 dark:ring-emerald-400/20"
                    : "bg-red-100 text-red-800 ring-red-600/10 dark:bg-red-400/10 dark:text-red-500 dark:ring-red-400/20",
                  "inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ring-1 ring-inset",
                )}
              >
                {item.change}
              </dd>
            </div>
            <dd className="flex items-baseline space-x-3">
              <p className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
                {item.stat}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                from {item.previousStat}
              </p>
            </dd>
          </Card>
        ))}
      </dl>
    </div>
  )
}
```


```example/kpi-cards-kpi-card-11.tsx
"use client"

import {
  RiArrowRightSLine,
  RiCheckLine,
  RiErrorWarningFill,
  RiEyeFill,
} from "@remixicon/react"

import { cx } from "@/lib/utils"

import { Card } from "@/atom/Card"

const data = [
  //array-start
  {
    name: "Europe",
    stat: "$10,023",
    goalsAchieved: 3,
    status: "observe",
    href: "#",
  },
  {
    name: "North America",
    stat: "$14,092",
    goalsAchieved: 5,
    status: "within",
    href: "#",
  },
  {
    name: "Asia",
    stat: "$113,232",
    goalsAchieved: 1,
    status: "critical",
    href: "#",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <Card key={item.name}>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-500">
              {item.name}
            </dt>
            <dd className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
              {item.stat}
            </dd>
            <div className="group relative mt-6 flex items-center space-x-4 rounded-md bg-gray-100/60 p-2 hover:bg-gray-100 dark:bg-gray-800/60 hover:dark:bg-gray-800">
              <div className="flex w-full items-center justify-between truncate">
                <div className="flex items-center space-x-3">
                  <span
                    className={cx(
                      item.status === "within"
                        ? "bg-emerald-500 text-white dark:bg-emerald-500"
                        : item.status === "observe"
                          ? "bg-yellow-500 text-white dark:bg-yellow-500"
                          : "bg-red-500 text-white dark:bg-red-500",
                      "flex size-9 shrink-0 items-center justify-center rounded",
                    )}
                  >
                    {item.status === "within" ? (
                      <RiCheckLine
                        className="size-4 shrink-0"
                        aria-hidden={true}
                      />
                    ) : item.status === "observe" ? (
                      <RiEyeFill
                        className="size-4 shrink-0"
                        aria-hidden={true}
                      />
                    ) : (
                      <RiErrorWarningFill
                        className="size-4 shrink-0"
                        aria-hidden={true}
                      />
                    )}
                  </span>
                  <dd>
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                      <a href={item.href} className="focus:outline-none">
                        {/* Extend link to entire card */}
                        <span className="absolute inset-0" aria-hidden={true} />
                        {item.goalsAchieved}/5 goals
                      </a>
                    </p>
                    <p
                      className={cx(
                        item.status === "within"
                          ? "text-emerald-800 dark:text-emerald-500"
                          : item.status === "observe"
                            ? "text-yellow-800 dark:text-yellow-500"
                            : "text-red-800 dark:text-red-500",
                        "text-sm font-medium",
                      )}
                    >
                      {item.status}
                    </p>
                  </dd>
                </div>
                <RiArrowRightSLine
                  className="size-5 shrink-0 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 group-hover:dark:text-gray-500"
                  aria-hidden={true}
                />
              </div>
            </div>
          </Card>
        ))}
      </dl>
    </div>
  )
}
```


```example/kpi-cards-kpi-card-05.tsx
"use client"

import { cx } from "@/lib/utils"

import { Card } from "@/atom/Card"

const data = [
  //array-start
  {
    name: "Monthly active users",
    stat: "340",
    previousStat: "400",
    change: "-15%",
    changeType: "negative",
  },
  {
    name: "Monthly sessions",
    stat: "672",
    previousStat: "350",
    change: "+91.4%",
    changeType: "positive",
  },
  {
    name: "Monthly page views",
    stat: "3,290",
    previousStat: "3,012",
    change: "+9.2%",
    changeType: "positive",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <Card key={item.name}>
            <div className="flex items-center justify-between space-x-4">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-500">
                {item.name}
              </dt>
              <dd
                className={cx(
                  item.changeType === "positive"
                    ? "text-emerald-700 dark:text-emerald-500"
                    : "text-red-700 dark:text-red-500",
                  "text-sm font-medium",
                )}
              >
                {item.change}
              </dd>
            </div>
            <dd className="mt-1 flex items-baseline space-x-3">
              <span className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
                {item.stat}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-500">
                from {item.previousStat}
              </span>
            </dd>
          </Card>
        ))}
      </dl>
    </div>
  )
}
```


```example/kpi-cards-kpi-card-04.tsx
"use client"

import { cx } from "@/lib/utils"

import { Card } from "@/atom/Card"

const data = [
  //array-start
  {
    name: "Monthly recurring revenue",
    value: "$34.1K",
    change: "+6.1%",
    changeType: "positive",
    href: "#",
  },
  {
    name: "Users",
    value: "500.1K",
    change: "+19.2%",
    changeType: "positive",
    href: "#",
  },
  {
    name: "User growth",
    value: "11.3%",
    change: "-1.2%",
    changeType: "negative",
    href: "#",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <Card key={item.name} className="!p-0">
            <div className="px-4 py-4">
              <dd className="flex items-start justify-between space-x-2">
                <span className="truncate text-sm text-gray-500 dark:text-gray-500">
                  {item.name}
                </span>
                <span
                  className={cx(
                    item.changeType === "positive"
                      ? "text-emerald-700 dark:text-emerald-500"
                      : "text-red-700 dark:text-red-500",
                    "text-sm font-medium",
                  )}
                >
                  {item.change}
                </span>
              </dd>
              <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-50">
                {item.value}
              </dd>
            </div>
            <div className="flex justify-end border-t border-gray-200 px-4 py-3 dark:border-gray-900">
              <a
                href={item.href}
                className="text-sm font-medium text-blue-500 hover:text-blue-600 dark:text-blue-500 hover:dark:text-blue-600"
              >
                View more &#8594;
              </a>
            </div>
          </Card>
        ))}
      </dl>
    </div>
  )
}
```


```example/kpi-cards-kpi-card-10.tsx
"use client"

import { RiCheckLine, RiErrorWarningLine, RiEyeLine } from "@remixicon/react"

import { cx } from "@/lib/utils"

import { Card } from "@/atom/Card"

const data = [
  //array-start
  {
    name: "Daily active users",
    stat: "345",
    status: "within",
    range: "200-410",
  },
  {
    name: "Weekly sessions",
    stat: "254",
    status: "critical",
    range: "550-1,200",
  },
  {
    name: "Open issues",
    stat: "34",
    status: "observe",
    range: "10-25",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <Card key={item.name}>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-500">
              {item.name}
            </dt>
            <dd className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
              {item.stat}
            </dd>
            <dd
              className={cx(
                item.status === "within"
                  ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-400/10 dark:text-emerald-500"
                  : item.status === "observe"
                    ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-400/10 dark:text-yellow-500"
                    : "bg-red-100 text-red-800 dark:bg-red-400/10 dark:text-red-500",
                "mt-4 inline-flex items-center gap-x-1.5 rounded-md px-2 py-1.5 text-xs font-medium",
              )}
            >
              {item.status === "within" ? (
                <RiCheckLine className="size-4 shrink-0" aria-hidden={true} />
              ) : item.status === "observe" ? (
                <RiEyeLine className="size-4 shrink-0" aria-hidden={true} />
              ) : (
                <RiErrorWarningLine
                  className="size-4 shrink-0"
                  aria-hidden={true}
                />
              )}
              {item.status}: {item.range}
            </dd>
          </Card>
        ))}
      </dl>
    </div>
  )
}
```


```example/kpi-cards-kpi-card-14.tsx
"use client"

import { cx } from "@/lib/utils"

import { Card } from "@/atom/Card"
import { SparkAreaChart } from "@/atom/SparkChart"

const data = [
  //array-start
  {
    date: "Nov 24, 2023",
    "Baer Limited": 67.3,
    "QuantData Holding": 59.09,
    "Not Normal, Inc.": 36.69,
  },
  {
    date: "Nov 25, 2023",
    "Baer Limited": 65.34,
    "QuantData Holding": 42.55,
    "Not Normal, Inc.": 49.13,
  },
  {
    date: "Nov 26, 2023",
    "Baer Limited": 58.14,
    "QuantData Holding": 49.69,
    "Not Normal, Inc.": 42.77,
  },
  {
    date: "Nov 27, 2023",
    "Baer Limited": 67.38,
    "QuantData Holding": 57.09,
    "Not Normal, Inc.": 39.43,
  },
  {
    date: "Nov 28, 2023",
    "Baer Limited": 63.62,
    "QuantData Holding": 69.21,
    "Not Normal, Inc.": 41.78,
  },
  {
    date: "Nov 29, 2023",
    "Baer Limited": 68.67,
    "QuantData Holding": 72.55,
    "Not Normal, Inc.": 49.39,
  },
  {
    date: "Nov 30, 2023",
    "Baer Limited": 59.11,
    "QuantData Holding": 39.65,
    "Not Normal, Inc.": 38.41,
  },
  {
    date: "Dec 01, 2023",
    "Baer Limited": 57.09,
    "QuantData Holding": 48.38,
    "Not Normal, Inc.": 45.87,
  },
  {
    date: "Dec 02, 2023",
    "Baer Limited": 55.07,
    "QuantData Holding": 59.1,
    "Not Normal, Inc.": 39.05,
  },
  {
    date: "Dec 03, 2023",
    "Baer Limited": 69.62,
    "QuantData Holding": 80.11,
    "Not Normal, Inc.": 53.6,
  },
  {
    date: "Dec 04, 2023",
    "Baer Limited": 71.07,
    "QuantData Holding": 78.04,
    "Not Normal, Inc.": 68.52,
  },
  {
    date: "Dec 05, 2023",
    "Baer Limited": 67.8,
    "QuantData Holding": 79.85,
    "Not Normal, Inc.": 69.0,
  },
  {
    date: "Dec 06, 2023",
    "Baer Limited": 55.92,
    "QuantData Holding": 89.26,
    "Not Normal, Inc.": 72.34,
  },
  {
    date: "Dec 07, 2023",
    "Baer Limited": 59.87,
    "QuantData Holding": 99.37,
    "Not Normal, Inc.": 79.39,
  },
  {
    date: "Dec 08, 2023",
    "Baer Limited": 49.33,
    "QuantData Holding": 129.1,
    "Not Normal, Inc.": 89.47,
  },
  //array-end
]

const summary = [
  //array-start
  {
    name: "Baer Limited",
    tickerSymbol: "BAL",
    value: "$49.33",
    change: "-9.85",
    percentageChange: "-1.9%",
    changeType: "negative",
  },
  {
    name: "QuantData Holding",
    tickerSymbol: "QDH",
    value: "$129.10",
    change: "+12.10",
    percentageChange: "+7.1%",
    changeType: "positive",
  },
  {
    name: "Not Normal, Inc.",
    tickerSymbol: "NNO",
    value: "$89.80",
    change: "+7.50",
    percentageChange: "+1.2%",
    changeType: "positive",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {summary.map((item) => (
          <Card key={item.name}>
            <dt className="text-sm font-medium text-gray-900 dark:text-gray-50">
              {item.name}{" "}
              <span className="font-normal">({item.tickerSymbol})</span>
            </dt>
            <div className="mt-1 flex items-baseline justify-between">
              <dd
                className={cx(
                  item.changeType === "positive"
                    ? "text-emerald-700 dark:text-emerald-500"
                    : "text-red-700 dark:text-red-500",
                  "text-lg font-semibold",
                )}
              >
                {item.value}
              </dd>
              <dd className="flex items-center space-x-1 text-sm">
                <span className="font-medium text-gray-900 dark:text-gray-50">
                  {item.change}
                </span>
                <span
                  className={cx(
                    item.changeType === "positive"
                      ? "text-emerald-700 dark:text-emerald-500"
                      : "text-red-700 dark:text-red-500",
                  )}
                >
                  ({item.percentageChange})
                </span>
              </dd>
            </div>
            <SparkAreaChart
              data={data}
              index="date"
              categories={[item.name]}
              colors={item.changeType === "positive" ? ["emerald"] : ["red"]}
              fill="solid"
              className="mt-4 h-10 w-full"
            />
          </Card>
        ))}
      </dl>
    </div>
  )
}
```


```example/kpi-cards-kpi-card-28.tsx
"use client"

import { Card } from "@/atom/Card"

const issues = [
  {
    category: "Account Service",
    totalCount: 1815,
    percentage: 15,
  },
  {
    category: "Claim Status",
    totalCount: 1599,
    percentage: 13,
  },
  {
    category: "Coverage Inquiry",
    totalCount: 1390,
    percentage: 12,
  },
  {
    category: "Accident Report",
    totalCount: 1388,
    percentage: 12,
  },
  {
    category: "Fraud Report",
    totalCount: 1301,
    percentage: 11,
  },
  {
    category: "Complaint",
    totalCount: 1282,
    percentage: 11,
  },
]

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-8">
        <Card className="lg:col-span-5">
          <p className="font-semibold text-gray-900 dark:text-gray-50">
            Cohort Statistics
          </p>
          <dl className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="space-y-6">
              <div>
                <dt className="text-sm text-gray-500 dark:text-gray-500">
                  Total Users
                </dt>
                <dd className="mt-1 flex items-baseline">
                  <span className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
                    125,430
                  </span>
                  <span className="ml-2 text-sm text-emerald-600 dark:text-emerald-500">
                    +17%
                  </span>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500 dark:text-gray-500">
                  Average CSAT Score
                </dt>
                <dd className="mt-1 flex items-baseline">
                  <span className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
                    4.5
                  </span>
                  <span className="ml-2 text-sm text-emerald-600 dark:text-emerald-500">
                    +6%
                  </span>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500 dark:text-gray-500">
                  Average Response Time
                </dt>
                <dd className="mt-1 flex items-baseline">
                  <span className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
                    8.3m
                  </span>
                  <span className="ml-2 text-sm text-emerald-600 dark:text-emerald-500">
                    +12%
                  </span>
                </dd>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <dt className="text-sm text-gray-500 dark:text-gray-500">
                  Total Tickets
                </dt>
                <dd className="mt-1 flex items-baseline">
                  <span className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
                    45,892
                  </span>
                  <span className="ml-2 text-sm text-emerald-600 dark:text-emerald-500">
                    +11%
                  </span>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500 dark:text-gray-500">
                  Resolution Rate
                </dt>
                <dd className="mt-1 flex items-baseline">
                  <span className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
                    92.5%
                  </span>
                  <span className="ml-2 text-sm text-emerald-600 dark:text-emerald-500">
                    +2%
                  </span>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500 dark:text-gray-500">
                  Total Cohorts
                </dt>
                <dd className="mt-1 flex items-baseline">
                  <span className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
                    24
                  </span>
                  <span className="ml-2 text-sm text-emerald-600 dark:text-emerald-500">
                    +5%
                  </span>
                </dd>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <dt className="text-sm text-gray-500 dark:text-gray-500">
                  Avg. Handling Time
                </dt>
                <dd className="mt-1 flex items-baseline">
                  <span className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
                    15.2m
                  </span>
                  <span className="ml-2 text-sm text-emerald-600 dark:text-emerald-500">
                    +21%
                  </span>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500 dark:text-gray-500">
                  First Contact Resolution
                </dt>
                <dd className="mt-1 flex items-baseline">
                  <span className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
                    85.7%
                  </span>
                  <span className="ml-2 text-sm text-emerald-600 dark:text-emerald-500">
                    +3%
                  </span>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500 dark:text-gray-500">
                  Retention Rate
                </dt>
                <dd className="mt-1 flex items-baseline">
                  <span className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
                    94.3%
                  </span>
                  <span className="ml-2 text-sm text-emerald-600 dark:text-emerald-500">
                    +2%
                  </span>
                </dd>
              </div>
            </div>
          </dl>
        </Card>

        <Card className="lg:col-span-3">
          <p className="font-semibold text-gray-900 dark:text-gray-50">
            Top Issues
          </p>
          <ol className="mt-4 divide-y divide-gray-200 dark:divide-gray-800">
            {issues.map((issue, index) => (
              <li
                key={issue.category}
                className="flex items-center justify-between py-2"
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {index + 1}.
                  </span>
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-50">
                    {issue.category}
                  </span>
                </div>
                <div className="text-sm text-gray-600 tabular-nums dark:text-gray-400">
                  {issue.percentage}% ({issue.totalCount.toLocaleString()})
                </div>
              </li>
            ))}
          </ol>
        </Card>
      </div>
    </div>
  )
}
```


```example/kpi-cards-kpi-card-29.tsx
"use client"

import { Card } from "@/atom/Card"

type Category = "red" | "orange" | "emerald" | "gray"

interface CategoryConfig {
  activeClass: string
  bars: number
}

interface Metric {
  label: string
  value: number
  percentage: string
  fraction: string
}

const CATEGORY_THRESHOLDS = {
  red: 0.3,
  orange: 0.7,
} as const

const THEME_COLORS = {
  red: "bg-red-500",
  orange: "bg-orange-500",
  emerald: "bg-emerald-500",
  gray: "bg-gray-300",
} as const

const categoryConfig: Record<Category, CategoryConfig> = {
  red: {
    activeClass: `${THEME_COLORS.red} dark:${THEME_COLORS.red}`,
    bars: 1,
  },
  orange: {
    activeClass: `${THEME_COLORS.orange} dark:${THEME_COLORS.orange}`,
    bars: 2,
  },
  emerald: {
    activeClass: `${THEME_COLORS.emerald} dark:${THEME_COLORS.emerald}`,
    bars: 3,
  },
  gray: {
    activeClass: `${THEME_COLORS.gray} dark:bg-gray-800`,
    bars: 0,
  },
}

const getCategory = (value: number): Category => {
  if (value < 0) return "gray"
  if (value < CATEGORY_THRESHOLDS.red) return "red"
  if (value < CATEGORY_THRESHOLDS.orange) return "orange"
  return "emerald"
}

const INDICATOR_BARS = Array.from({ length: 3 }, (_, i) => i)
const INACTIVE_CLASS = `${THEME_COLORS.gray} dark:bg-gray-800
`

interface IndicatorProps {
  number: number
}

function Indicator({ number }: IndicatorProps) {
  const category = getCategory(number)
  const config = categoryConfig[category]

  return (
    <div className="flex gap-0.5">
      {INDICATOR_BARS.map((index) => (
        <div
          key={index}
          className={`h-3.5 w-1 rounded-sm ${
            index < config.bars ? config.activeClass : INACTIVE_CLASS
          }`}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

interface MetricCardProps {
  metric: Metric
}

function MetricCard({ metric }: MetricCardProps) {
  const { label, value, percentage, fraction } = metric

  return (
    <div>
      <dt className="text-sm text-gray-500 dark:text-gray-500">{label}</dt>
      <dd className="mt-1.5 flex items-center gap-2">
        <Indicator number={value} />
        <p className="text-lg font-semibold text-gray-900 dark:text-gray-50">
          {percentage}
          <span className="ml-1 font-medium text-gray-400 dark:text-gray-600">
            - {fraction}
          </span>
        </p>
      </dd>
    </div>
  )
}

const metrics: readonly Metric[] = [
  {
    label: "Lead-to-Quote Ratio",
    value: 0.61,
    percentage: "59.8%",
    fraction: "450/752",
  },
  {
    label: "Project Load",
    value: 0.24,
    percentage: "12.9%",
    fraction: "129/1K",
  },
  {
    label: "Win Probability",
    value: 0.8,
    percentage: "85.1%",
    fraction: "280/329",
  },
] as const

export default function Example() {
  return (
    <div className="obfuscate">
      <Card className="mx-auto w-fit py-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
          Overview
        </h2>
        <dl className="mt-6 flex flex-wrap items-center gap-x-12 gap-y-8">
          {metrics.map((metric) => (
            <MetricCard key={metric.label} metric={metric} />
          ))}
        </dl>
      </Card>
    </div>
  )
}
```


```example/kpi-cards-kpi-card-01.tsx
"use client"

import { cx } from "@/lib/utils"

import { Card } from "@/atom/Card"

const data = [
  //array-start
  {
    name: "Unique visitors",
    stat: "10,450",
    change: "-12.5%",
    changeType: "negative",
  },
  {
    name: "Bounce rate",
    stat: "56.1%",
    change: "+1.8%",
    changeType: "positive",
  },
  {
    name: "Visit duration",
    stat: "5.2min",
    change: "+19.7%",
    changeType: "positive",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <Card key={item.name}>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-500">
              {item.name}
            </dt>
            <dd className="mt-2 flex items-baseline space-x-2.5">
              <span className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
                {item.stat}
              </span>
              <span
                className={cx(
                  item.changeType === "positive"
                    ? "text-emerald-700 dark:text-emerald-500"
                    : "text-red-700 dark:text-red-500",
                  "text-sm font-medium",
                )}
              >
                {item.change}
              </span>
            </dd>
          </Card>
        ))}
      </dl>
    </div>
  )
}
```


```example/kpi-cards-kpi-card-15.tsx
"use client"

import { Card } from "@/atom/Card"
import { ProgressBar } from "@/atom/ProgressBar"

const data = [
  //array-start
  {
    name: "Requests",
    stat: "996",
    limit: "10,000",
    percentage: 9.96,
  },
  {
    name: "Credits",
    stat: "$672",
    limit: "$1,000",
    percentage: 67.2,
  },
  {
    name: "Storage",
    stat: "1.85",
    limit: "10GB",
    percentage: 18.5,
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <Card key={item.name}>
            <dt className="text-sm text-gray-500 dark:text-gray-500">
              {item.name}
            </dt>
            <dd className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
              {item.stat}
            </dd>
            <ProgressBar value={item.percentage} className="mt-6" />
            <dd className="mt-2 flex items-center justify-between text-sm">
              <span className="text-blue-500 dark:text-blue-500">
                {item.percentage}&#37;
              </span>
              <span className="text-gray-500 dark:text-gray-500">
                {item.stat} of {item.limit}
              </span>
            </dd>
          </Card>
        ))}
      </dl>
    </div>
  )
}
```


```example/kpi-cards-kpi-card-03.tsx
"use client"

import { cx } from "@/lib/utils"

import { Card } from "@/atom/Card"

const data = [
  //array-start
  {
    name: "Recurring revenue",
    value: "$34.1K",
    change: "+6.1%",
    changeType: "positive",
  },
  {
    name: "Total users",
    value: "500.1K",
    change: "+19.2%",
    changeType: "positive",
  },
  {
    name: "User growth",
    value: "11.3%",
    change: "-1.2%",
    changeType: "negative",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <Card key={item.name}>
            <dd className="flex items-start justify-between">
              <span className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
                {item.value}
              </span>
              <span
                className={cx(
                  item.changeType === "positive"
                    ? "text-emerald-700 dark:text-emerald-500"
                    : "text-red-700 dark:text-red-500",
                  "text-sm font-medium",
                )}
              >
                {item.change}
              </span>
            </dd>
            <dt className="mt-1 text-sm text-gray-500 dark:text-gray-500">
              {item.name}
            </dt>
          </Card>
        ))}
      </dl>
    </div>
  )
}
```


```example/kpi-cards-kpi-card-17.tsx
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
```


```example/kpi-cards-kpi-card-16.tsx
"use client"

import { Card } from "@/atom/Card"
import { ProgressCircle } from "@/atom/ProgressCircle"

const data = [
  //array-start
  {
    name: "Performance",
    value: 91,
  },
  {
    name: "Accessibility",
    value: 65,
  },
  {
    name: "SEO",
    value: 43,
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="block sm:flex sm:items-start sm:justify-between sm:space-x-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">
            Web vitals scores
          </h3>
          <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor.
          </p>
        </div>
        <span className="mt-6 inline-flex w-full justify-center space-x-4 rounded-md border border-gray-200 px-2 py-1 text-xs whitespace-nowrap text-gray-900 sm:mt-0 sm:w-fit sm:items-center dark:border-gray-900 dark:text-gray-50">
          <span tabIndex={1} className="flex items-center gap-1.5">
            <span
              aria-hidden={true}
              className="size-2.5 rounded-sm bg-red-600 dark:bg-red-500"
            />
            0-50
          </span>
          <span tabIndex={1} className="flex items-center gap-1.5">
            <span
              aria-hidden={true}
              className="size-2.5 rounded-sm bg-orange-600 dark:bg-orange-500"
            />
            50-75
          </span>
          <span tabIndex={1} className="flex items-center gap-1.5">
            <span
              aria-hidden={true}
              className="size-2.5 rounded-sm bg-emerald-600 dark:bg-emerald-500"
            />
            75-100
          </span>
        </span>
      </div>
      <dl className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <Card key={item.name}>
            <dt className="text-sm text-gray-500 dark:text-gray-500">
              {item.name}
            </dt>
            <dd className="mt-3 flex items-center justify-between">
              <p className="text-3xl font-medium text-gray-900 dark:text-gray-50">
                {item.value}
                <span className="text-base text-gray-500 dark:text-gray-500">
                  /100
                </span>
              </p>
              <ProgressCircle
                value={item.value}
                radius={25}
                strokeWidth={5}
                color={
                  item.value >= 75
                    ? "emerald"
                    : item.value > 50
                      ? "orange"
                      : "red"
                }
              >
                <span className="text-xs font-medium text-gray-900 dark:text-gray-50">
                  {item.value}
                </span>
              </ProgressCircle>
            </dd>
          </Card>
        ))}
      </dl>
    </div>
  )
}
```


```example/kpi-cards-kpi-card-02.tsx
"use client"

import { cx } from "@/lib/utils"

import { Card } from "@/atom/Card"

const data = [
  //array-start
  {
    name: "Daily active users",
    stat: "3,450",
    change: "+12.1%",
    changeType: "positive",
  },
  {
    name: "Weekly sessions",
    stat: "1,342",
    change: "-9.8%",
    changeType: "negative",
  },
  {
    name: "Duration",
    stat: "5.2min",
    change: "+7.7%",
    changeType: "positive",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <Card key={item.name}>
            <div className="flex items-center justify-between">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-500">
                {item.name}
              </dt>
              <span
                className={cx(
                  item.changeType === "positive"
                    ? "bg-emerald-100 text-emerald-800 ring-emerald-600/10 dark:bg-emerald-400/10 dark:text-emerald-500 dark:ring-emerald-400/20"
                    : "bg-red-100 text-red-800 ring-red-600/10 dark:bg-red-400/10 dark:text-red-500 dark:ring-red-400/20",
                  "inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset",
                )}
              >
                {item.change}
              </span>
            </div>
            <dd className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
              {item.stat}
            </dd>
          </Card>
        ))}
      </dl>
    </div>
  )
}
```


