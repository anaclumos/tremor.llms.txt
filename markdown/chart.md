```example/area-charts-area-chart-12.tsx
"use client"

import { AreaChart } from "@/atom/AreaChart"
import { Card } from "@/atom/Card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/atom/Tabs"

const data = [
  //array-start
  {
    date: "Aug 01",
    "Successful requests": 1040,
    Errors: 0,
  },
  {
    date: "Aug 02",
    "Successful requests": 1200,
    Errors: 0,
  },
  {
    date: "Aug 03",
    "Successful requests": 1130,
    Errors: 0,
  },
  {
    date: "Aug 04",
    "Successful requests": 1050,
    Errors: 0,
  },
  {
    date: "Aug 05",
    "Successful requests": 920,
    Errors: 0,
  },
  {
    date: "Aug 06",
    "Successful requests": 870,
    Errors: 0,
  },
  {
    date: "Aug 07",
    "Successful requests": 790,
    Errors: 0,
  },
  {
    date: "Aug 08",
    "Successful requests": 910,
    Errors: 0,
  },
  {
    date: "Aug 09",
    "Successful requests": 951,
    Errors: 0,
  },
  {
    date: "Aug 10",
    "Successful requests": 1232,
    Errors: 0,
  },
  {
    date: "Aug 11",
    "Successful requests": 1230,
    Errors: 0,
  },
  {
    date: "Aug 12",
    "Successful requests": 1289,
    Errors: 0,
  },
  {
    date: "Aug 13",
    "Successful requests": 1002,
    Errors: 0,
  },
  {
    date: "Aug 14",
    "Successful requests": 1034,
    Errors: 0,
  },
  {
    date: "Aug 15",
    "Successful requests": 1140,
    Errors: 0,
  },
  {
    date: "Aug 16",
    "Successful requests": 1280,
    Errors: 0,
  },
  {
    date: "Aug 17",
    "Successful requests": 1345,
    Errors: 0,
  },
  {
    date: "Aug 18",
    "Successful requests": 1432,
    Errors: 0,
  },
  {
    date: "Aug 19",
    "Successful requests": 1321,
    Errors: 0,
  },
  {
    date: "Aug 20",
    "Successful requests": 1230,
    Errors: 0,
  },
  {
    date: "Aug 21",
    "Successful requests": 1020,
    Errors: 0,
  },
  {
    date: "Aug 22",
    "Successful requests": 1040,
    Errors: 0,
  },
  {
    date: "Aug 23",
    "Successful requests": 610,
    Errors: 81,
  },
  {
    date: "Aug 24",
    "Successful requests": 610,
    Errors: 87,
  },
  {
    date: "Aug 25",
    "Successful requests": 610,
    Errors: 92,
  },
  {
    date: "Aug 26",
    "Successful requests": 501,
    Errors: 120,
  },
  {
    date: "Aug 27",
    "Successful requests": 480,
    Errors: 120,
  },
  {
    date: "Aug 28",
    "Successful requests": 471,
    Errors: 120,
  },
  {
    date: "Aug 29",
    "Successful requests": 610,
    Errors: 89,
  },
  {
    date: "Aug 30",
    "Successful requests": 513,
    Errors: 199,
  },
  {
    date: "Aug 31",
    "Successful requests": 500,
    Errors: 56,
  },
  //array-end
]

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`

const tabs = [
  //array-start
  {
    name: "1w",
    data: data.slice(0, 7),
  },
  {
    name: "2w",
    data: data.slice(0, 14),
  },
  {
    name: "4w",
    data: data.slice(0, 30),
  },
  {
    name: "All",
    data: data,
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <Card className="!p-0">
        <div className="p-6">
          <h1 className="font-medium text-gray-900 dark:text-gray-50">
            Monitoring
          </h1>
          <p className="text-sm/6 text-gray-500 dark:text-gray-500">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt
          </p>
        </div>
        <div className="border-t border-gray-200 p-6 dark:border-gray-900">
          {/* Grid is applied in mobile view to make use of order ranking and bring <TabGroup/> to the top */}
          <Tabs defaultValue={tabs[0].name}>
            <div className="grid md:flex md:items-start md:justify-between">
              <ul
                role="list"
                className="order-2 mt-6 flex flex-wrap items-center gap-x-10 gap-y-4 md:order-1 md:mt-0"
              >
                <li>
                  <div className="flex items-center space-x-2">
                    <span
                      className="size-3 shrink-0 rounded-sm bg-blue-500 dark:bg-blue-500"
                      aria-hidden="true"
                    />
                    <p className="font-semibold text-gray-900 dark:text-gray-50">
                      23,450
                    </p>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    Successful requests
                  </p>
                </li>
                <li>
                  <div className="flex items-center space-x-2">
                    <span
                      className="size-3 shrink-0 rounded-sm bg-red-500 dark:bg-red-500"
                      aria-hidden="true"
                    />
                    <p className="font-semibold text-gray-900 dark:text-gray-50">
                      1,397
                    </p>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    Errors
                  </p>
                </li>
              </ul>
              <div className="order-1 md:order-2">
                <TabsList variant="solid" className="w-full md:w-fit">
                  {tabs.map((tab) => (
                    <TabsTrigger
                      key={tab.name}
                      value={tab.name}
                      className="w-full md:w-fit"
                    >
                      {tab.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
            </div>
            {tabs.map((tab) => (
              <TabsContent key={tab.name} value={tab.name}>
                <AreaChart
                  data={tab.data}
                  index="date"
                  categories={["Successful requests", "Errors"]}
                  colors={["blue", "red"]}
                  showLegend={false}
                  yAxisWidth={44}
                  valueFormatter={valueFormatter}
                  fill="solid"
                  className="mt-10 hidden !h-72 sm:block"
                />
                <AreaChart
                  data={tab.data}
                  index="date"
                  categories={["Successful requests", "Errors"]}
                  colors={["blue", "red"]}
                  showLegend={false}
                  showYAxis={false}
                  startEndOnly={true}
                  valueFormatter={valueFormatter}
                  fill="solid"
                  className="mt-6 !h-72 sm:hidden"
                />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </Card>
    </div>
  )
}
```


```example/area-charts-area-chart-06.tsx
"use client"

import { cx } from "@/lib/utils"

import { AreaChart } from "@/atom/AreaChart"
import { Card } from "@/atom/Card"
import { Divider } from "@/atom/Divider"

const data = [
  //array-start
  {
    date: "Jan 23",
    "This year": 10200,
    "Last year": 3800,
  },
  {
    date: "Feb 23",
    "This year": 15100,
    "Last year": 6910,
  },
  {
    date: "Mar 23",
    "This year": 16100,
    "Last year": 7210,
  },
  {
    date: "Apr 23",
    "This year": 17100,
    "Last year": 9200,
  },
  {
    date: "May 23",
    "This year": 24800,
    "Last year": 9100,
  },
  {
    date: "Jun 23",
    "This year": 20500,
    "Last year": 10210,
  },
  {
    date: "Jul 23",
    "This year": 22130,
    "Last year": 10810,
  },
  {
    date: "Aug 23",
    "This year": 28100,
    "Last year": 12120,
  },
  {
    date: "Sep 23",
    "This year": 31700,
    "Last year": 10620,
  },
  {
    date: "Oct 23",
    "This year": 32230,
    "Last year": 11350,
  },
  {
    date: "Nov 23",
    "This year": 42200,
    "Last year": 12550,
  },
  {
    date: "Dec 23",
    "This year": 59100,
    "Last year": 22150,
  },
  //array-end
]

const summary = [
  {
    name: "This year",
    total: 277760,
    color: "bg-blue-500 dark:bg-blue-500",
  },
  {
    name: "Last year",
    total: 120420,
    color: "bg-violet-500 dark:bg-violet-500",
  },
]

const valueFormatter = (number: number) =>
  `$${Intl.NumberFormat("us").format(number).toString()}`

export default function Example() {
  return (
    <div className="obfuscate">
      <Card className="sm:mx-auto sm:max-w-xl">
        <div className="flex items-center space-x-2">
          <h1 className="text-sm font-medium text-gray-900 dark:text-gray-50">
            Revenue
          </h1>
          <span className="mt-0.5 inline-flex rounded bg-emerald-100 px-1.5 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-400/10 dark:text-emerald-400">
            +2.3%
          </span>
        </div>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
          Current year vs. same period last year
        </p>
        <Divider className="!my-3" />
        <ul role="list" className="flex items-center gap-10">
          {summary.map((category) => (
            <li key={category.name}>
              <div className="flex items-center space-x-2">
                <span
                  className={cx(
                    category.color,
                    "h-[3px] w-3.5 shrink-0 rounded-full",
                  )}
                  aria-hidden="true"
                />
                <p className="text-xs text-gray-700 dark:text-gray-300">
                  {category.name}
                </p>
              </div>
              <p className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                {valueFormatter(category.total)}
              </p>
            </li>
          ))}
        </ul>
        <AreaChart
          data={data}
          index="date"
          categories={["This year", "Last year"]}
          colors={["blue", "violet"]}
          valueFormatter={valueFormatter}
          showLegend={false}
          showYAxis={false}
          startEndOnly={true}
          fill="solid"
          className="mt-8 !h-48"
        />
      </Card>
    </div>
  )
}
```


```example/area-charts-area-chart-07.tsx
"use client"

import React from "react"

import { cx } from "@/lib/utils"

import { AreaChart, TooltipProps } from "@/atom/AreaChart"
import { Card } from "@/atom/Card"

interface DataItem {
  date: string
  revenue: number
}

const data: DataItem[] = [
  //array-start
  {
    date: "Jan 23",
    revenue: 2340,
  },
  {
    date: "Feb 23",
    revenue: 3110,
  },
  {
    date: "Mar 23",
    revenue: 4643,
  },
  {
    date: "Apr 23",
    revenue: 4650,
  },
  {
    date: "May 23",
    revenue: 3980,
  },
  {
    date: "Jun 23",
    revenue: 4702,
  },
  {
    date: "Jul 23",
    revenue: 5990,
  },
  {
    date: "Aug 23",
    revenue: 5700,
  },
  {
    date: "Sep 23",
    revenue: 4250,
  },
  {
    date: "Oct 23",
    revenue: 4182,
  },
  {
    date: "Nov 23",
    revenue: 3812,
  },
  {
    date: "Dec 23",
    revenue: 4900,
  },
  //array-end
]

const currencyFormatter = (number: number) =>
  `$${Intl.NumberFormat("us").format(number)}`

function formatChange(
  payload: any,
  percentageChange: number | undefined,
  absoluteChange: number | undefined,
) {
  if (!payload || percentageChange === undefined || isNaN(percentageChange)) {
    return "--"
  }

  const formattedPercentage = `${percentageChange > 0 ? "+" : ""}${percentageChange.toFixed(1)}%`
  const formattedAbsolute = `${absoluteChange! >= 0 ? "+" : "-"}${currencyFormatter(Math.abs(absoluteChange!))}`

  return `${formattedPercentage} (${formattedAbsolute})`
}

export default function Example() {
  const [datas, setDatas] = React.useState<TooltipProps | null>(null)

  const payload = datas?.payload?.[0]
  const value = payload?.value ?? 0

  const previousIndex = data.findIndex((e) => e["date"] === payload?.index)

  const previousValues = previousIndex > 0 ? data[previousIndex - 1] : undefined

  const prev =
    payload && previousValues
      ? (previousValues[payload.category as keyof DataItem] as number)
      : undefined

  const percentageChange =
    prev !== undefined ? ((value - prev) / prev) * 100 : undefined
  const absoluteChange = prev !== undefined ? value - prev : undefined

  const formattedValue = payload
    ? currencyFormatter(value)
    : currencyFormatter(data[0].revenue)

  return (
    <div className="obfuscate">
      <Card className="sm:mx-auto sm:max-w-lg">
        <p className="text-sm text-gray-500 dark:text-gray-500">
          Revenue by month
        </p>
        <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-gray-50">
          {formattedValue}
        </p>
        <p className="mt-1 flex items-baseline justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-500">
            On {payload ? `${payload.index}` : `${data[0].date}`}
          </span>
          <span
            className={cx(
              "rounded-md p-2 text-sm font-medium",
              formatChange(payload, percentageChange, absoluteChange) === "--"
                ? "text-gray-700 dark:text-gray-300"
                : payload && percentageChange! > 0
                  ? "text-emerald-700 dark:text-emerald-500"
                  : "text-red-700 dark:text-red-500",
            )}
          >
            {formatChange(payload, percentageChange, absoluteChange)}
          </span>
        </p>
        <AreaChart
          data={data}
          index="date"
          categories={["revenue"]}
          showLegend={false}
          showYAxis={false}
          startEndOnly={true}
          valueFormatter={currencyFormatter}
          fill="solid"
          className="mt-8 -mb-2 !h-48"
          tooltipCallback={(props) => {
            if (props.active) {
              setDatas((prev) => {
                if (prev?.label === props.label) return prev
                return props
              })
            } else {
              setDatas(null)
            }
            return null
          }}
        />
      </Card>
    </div>
  )
}
```


```example/area-charts-area-chart-13.tsx
"use client"

import { AvailableChartColorsKeys } from "@/lib/chartUtils"
import { cx } from "@/lib/utils"

import { AreaChart } from "@/atom/AreaChart"
import { Card } from "@/atom/Card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/atom/Tabs"

const data = [
  //array-start
  {
    date: "Aug 01",
    "Successful requests": 1040,
    Errors: 0,
    "Mean time to detect": 0,
    "Mean time to resolve": 0,
  },
  {
    date: "Aug 02",
    "Successful requests": 1200,
    Errors: 0,
    "Mean time to detect": 0,
    "Mean time to resolve": 0,
  },
  {
    date: "Aug 03",
    "Successful requests": 1130,
    Errors: 0,
    "Mean time to detect": 0,
    "Mean time to resolve": 0,
  },
  {
    date: "Aug 04",
    "Successful requests": 1050,
    Errors: 0,
    "Mean time to detect": 0,
    "Mean time to resolve": 0,
  },
  {
    date: "Aug 05",
    "Successful requests": 920,
    Errors: 0,
    "Mean time to detect": 0,
    "Mean time to resolve": 0,
  },
  {
    date: "Aug 06",
    "Successful requests": 870,
    Errors: 0,
    "Mean time to detect": 0,
    "Mean time to resolve": 0,
  },
  {
    date: "Aug 07",
    "Successful requests": 790,
    Errors: 0,
    "Mean time to detect": 0,
    "Mean time to resolve": 0,
  },
  {
    date: "Aug 08",
    "Successful requests": 910,
    Errors: 0,
    "Mean time to detect": 0,
    "Mean time to resolve": 0,
  },
  {
    date: "Aug 09",
    "Successful requests": 951,
    Errors: 0,
    "Mean time to detect": 0,
    "Mean time to resolve": 0,
  },
  {
    date: "Aug 10",
    "Successful requests": 1232,
    Errors: 0,
    "Mean time to detect": 0,
    "Mean time to resolve": 0,
  },
  {
    date: "Aug 11",
    "Successful requests": 1230,
    Errors: 0,
    "Mean time to detect": 0,
    "Mean time to resolve": 0,
  },
  {
    date: "Aug 12",
    "Successful requests": 1289,
    Errors: 0,
    "Mean time to detect": 0,
    "Mean time to resolve": 0,
  },
  {
    date: "Aug 13",
    "Successful requests": 1002,
    Errors: 0,
    "Mean time to detect": 0,
    "Mean time to resolve": 0,
  },
  {
    date: "Aug 14",
    "Successful requests": 1034,
    Errors: 0,
    "Mean time to detect": 0,
    "Mean time to resolve": 0,
  },
  {
    date: "Aug 15",
    "Successful requests": 1140,
    Errors: 0,
    "Mean time to detect": 0,
    "Mean time to resolve": 0,
  },
  {
    date: "Aug 16",
    "Successful requests": 1280,
    Errors: 0,
    "Mean time to detect": 0,
    "Mean time to resolve": 0,
  },
  {
    date: "Aug 17",
    "Successful requests": 1345,
    Errors: 0,
    "Mean time to detect": 0,
    "Mean time to resolve": 0,
  },
  {
    date: "Aug 18",
    "Successful requests": 1432,
    Errors: 0,
    "Mean time to detect": 0,
    "Mean time to resolve": 0,
  },
  {
    date: "Aug 19",
    "Successful requests": 1321,
    Errors: 0,
    "Mean time to detect": 0,
    "Mean time to resolve": 0,
  },
  {
    date: "Aug 20",
    "Successful requests": 1230,
    Errors: 0,
    "Mean time to detect": 0,
    "Mean time to resolve": 0,
  },
  {
    date: "Aug 21",
    "Successful requests": 1020,
    Errors: 0,
    "Mean time to detect": 0,
    "Mean time to resolve": 0,
  },
  {
    date: "Aug 22",
    "Successful requests": 1040,
    Errors: 0,
    "Mean time to detect": 0,
    "Mean time to resolve": 0,
  },
  {
    date: "Aug 23",
    "Successful requests": 610,
    Errors: 81,
    "Mean time to detect": 1060,
    "Mean time to resolve": 2180,
  },
  {
    date: "Aug 24",
    "Successful requests": 610,
    Errors: 87,
    "Mean time to detect": 1460,
    "Mean time to resolve": 3140,
  },
  {
    date: "Aug 25",
    "Successful requests": 610,
    Errors: 92,
    "Mean time to detect": 2460,
    "Mean time to resolve": 4120,
  },
  {
    date: "Aug 26",
    "Successful requests": 501,
    Errors: 120,
    "Mean time to detect": 2920,
    "Mean time to resolve": 5120,
  },
  {
    date: "Aug 27",
    "Successful requests": 480,
    Errors: 120,
    "Mean time to detect": 3120,
    "Mean time to resolve": 4910,
  },
  {
    date: "Aug 28",
    "Successful requests": 471,
    Errors: 120,
    "Mean time to detect": 3150,
    "Mean time to resolve": 4210,
  },
  {
    date: "Aug 29",
    "Successful requests": 610,
    Errors: 89,
    "Mean time to detect": 2350,
    "Mean time to resolve": 4620,
  },
  {
    date: "Aug 30",
    "Successful requests": 513,
    Errors: 199,
    "Mean time to detect": 2350,
    "Mean time to resolve": 4130,
  },
  {
    date: "Aug 31",
    "Successful requests": 500,
    Errors: 56,
    "Mean time to detect": 2431,
    "Mean time to resolve": 4130,
  },
  //array-end
]

const timeFormatter = (seconds: number) => {
  const minutes = Math.floor((seconds % 3600) / 60)
  return `${minutes}m`
}

const numberFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`

const tabs = [
  //array-start
  {
    name: "API requests",
    data: data,
    valueFormatter: numberFormatter,
    categories: ["Successful requests", "Errors"],
    colors: ["blue", "red"],
    summary: [
      {
        name: "Successful requests",
        total: "23,450",
        color: "bg-blue-500",
      },
      {
        name: "Errors",
        total: "1,397",
        color: "bg-red-500",
      },
    ],
  },
  {
    name: "Incident response",
    data: data,
    valueFormatter: timeFormatter,
    categories: ["Mean time to resolve", "Mean time to detect"],
    colors: ["blue", "red"],
    summary: [
      {
        name: "Mean time to resolve",
        total: "47min 44s",
        color: "bg-blue-500",
      },
      {
        name: "Mean time to detect",
        total: "31min 8s",
        color: "bg-red-500",
      },
    ],
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <Card className="!p-0">
        <div className="p-6">
          <h1 className="font-medium text-gray-900 dark:text-gray-50">
            Monitoring
          </h1>
          <p className="text-sm/6 text-gray-500 dark:text-gray-500">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt
          </p>
        </div>
        <Tabs defaultValue={tabs[0].name}>
          <TabsList className="px-6">
            {tabs.map((tab) => (
              <TabsTrigger key={tab.name} value={tab.name}>
                {tab.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabs.map((tab) => (
            <TabsContent key={tab.name} value={tab.name} className="p-6">
              <div className="md:flex md:items-start md:justify-between">
                <ul
                  role="list"
                  className="flex flex-wrap items-center gap-x-10 gap-y-4"
                >
                  {tab.summary.map((item) => (
                    <li key={item.name}>
                      <div className="flex items-center space-x-2">
                        <span
                          className={cx(
                            item.color,
                            "size-3 shrink-0 rounded-sm",
                          )}
                          aria-hidden="true"
                        />
                        <p className="font-semibold text-gray-900 dark:text-gray-50">
                          {item.total}
                        </p>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-500">
                        {item.name}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <AreaChart
                data={data}
                index="date"
                categories={tab.categories}
                colors={tab.colors as AvailableChartColorsKeys[]}
                showLegend={false}
                yAxisWidth={45}
                valueFormatter={tab.valueFormatter}
                fill="solid"
                className="mt-10 hidden !h-72 sm:block"
              />
              <AreaChart
                data={data}
                index="date"
                categories={tab.categories}
                colors={tab.colors as AvailableChartColorsKeys[]}
                showLegend={false}
                showYAxis={false}
                startEndOnly={true}
                valueFormatter={tab.valueFormatter}
                fill="solid"
                className="mt-6 !h-72 sm:hidden"
              />
            </TabsContent>
          ))}
        </Tabs>
      </Card>
    </div>
  )
}
```


```example/area-charts-area-chart-05.tsx
"use client"

import { RiExternalLinkLine } from "@remixicon/react"

import { AreaChart } from "@/atom/AreaChart"
import { Card } from "@/atom/Card"

function valueFormatter(number: number) {
  const formatter = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
    notation: "compact",
    compactDisplay: "short",
  })
  return formatter.format(number)
}

const data = [
  //array-start
  {
    date: "Jan 23",
    Balance: 38560,
  },
  {
    date: "Feb 23",
    Balance: 40320,
  },
  {
    date: "Mar 23",
    Balance: 50233,
  },
  {
    date: "Apr 23",
    Balance: 55123,
  },
  {
    date: "May 23",
    Balance: 56000,
  },
  {
    date: "Jun 23",
    Balance: 100000,
  },
  {
    date: "Jul 23",
    Balance: 85390,
  },
  {
    date: "Aug 23",
    Balance: 80100,
  },
  {
    date: "Sep 23",
    Balance: 75090,
  },
  {
    date: "Oct 23",
    Balance: 71080,
  },
  {
    date: "Nov 23",
    Balance: 68041,
  },
  {
    date: "Dec 23",
    Balance: 60143,
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <Card className="overflow-hidden !p-0 sm:mx-auto sm:w-full">
        <div className="p-6">
          <p className="text-sm text-gray-500 dark:text-gray-500">Balance</p>
          <p className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
            $60,143
          </p>
          <AreaChart
            data={data}
            index="date"
            categories={["Balance"]}
            showLegend={false}
            yAxisWidth={45}
            valueFormatter={valueFormatter}
            fill="solid"
            className="mt-8 hidden !h-60 sm:block"
          />
          <AreaChart
            data={data}
            index="date"
            categories={["Balance"]}
            showLegend={false}
            showYAxis={false}
            startEndOnly={true}
            valueFormatter={valueFormatter}
            fill="solid"
            className="mt-8 !h-48 sm:hidden"
          />
        </div>
        <div className="rounded-b-md border-t border-gray-200 bg-gray-50 px-6 py-4 dark:border-gray-900 dark:bg-[#090E1A]">
          <div className="flex justify-between">
            <span className="inline-flex items-center rounded-md bg-white px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-gray-200 ring-inset select-none dark:bg-gray-800 dark:text-gray-200 dark:ring-gray-400/20">
              Team access
            </span>
            <div className="flex items-center gap-2">
              <a
                href="#"
                className="flex items-center gap-1.5 text-sm text-blue-500 hover:underline hover:underline-offset-4 dark:text-blue-500"
              >
                View transactions
                <RiExternalLinkLine
                  className="size-4 shrink-0"
                  aria-hidden="true"
                />
              </a>
              <span
                className="hidden h-6 w-px bg-gray-200 sm:block dark:bg-gray-800"
                aria-hidden={true}
              />
              <a
                href="#"
                className="hidden items-center gap-1.5 text-sm text-blue-500 hover:underline hover:underline-offset-4 sm:flex dark:text-blue-500"
              >
                View statements
                <RiExternalLinkLine
                  className="size-4 shrink-0"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
```


```example/area-charts-area-chart-11.tsx
"use client"

import { AreaChart } from "@/atom/AreaChart"
import { Card } from "@/atom/Card"

const data = [
  //array-start
  {
    date: "Aug 01",
    "Successful requests": 1040,
    Errors: 0,
  },
  {
    date: "Aug 02",
    "Successful requests": 1200,
    Errors: 0,
  },
  {
    date: "Aug 03",
    "Successful requests": 1130,
    Errors: 0,
  },
  {
    date: "Aug 04",
    "Successful requests": 1050,
    Errors: 0,
  },
  {
    date: "Aug 05",
    "Successful requests": 920,
    Errors: 0,
  },
  {
    date: "Aug 06",
    "Successful requests": 870,
    Errors: 0,
  },
  {
    date: "Aug 07",
    "Successful requests": 790,
    Errors: 0,
  },
  {
    date: "Aug 08",
    "Successful requests": 910,
    Errors: 0,
  },
  {
    date: "Aug 09",
    "Successful requests": 951,
    Errors: 0,
  },
  {
    date: "Aug 10",
    "Successful requests": 1232,
    Errors: 0,
  },
  {
    date: "Aug 11",
    "Successful requests": 1230,
    Errors: 0,
  },
  {
    date: "Aug 12",
    "Successful requests": 1289,
    Errors: 0,
  },
  {
    date: "Aug 13",
    "Successful requests": 1002,
    Errors: 0,
  },
  {
    date: "Aug 14",
    "Successful requests": 1034,
    Errors: 0,
  },
  {
    date: "Aug 15",
    "Successful requests": 1140,
    Errors: 0,
  },
  {
    date: "Aug 16",
    "Successful requests": 1280,
    Errors: 0,
  },
  {
    date: "Aug 17",
    "Successful requests": 1345,
    Errors: 0,
  },
  {
    date: "Aug 18",
    "Successful requests": 1432,
    Errors: 0,
  },
  {
    date: "Aug 19",
    "Successful requests": 1321,
    Errors: 0,
  },
  {
    date: "Aug 20",
    "Successful requests": 1230,
    Errors: 0,
  },
  {
    date: "Aug 21",
    "Successful requests": 1020,
    Errors: 0,
  },
  {
    date: "Aug 22",
    "Successful requests": 1040,
    Errors: 0,
  },
  {
    date: "Aug 23",
    "Successful requests": 610,
    Errors: 81,
  },
  {
    date: "Aug 24",
    "Successful requests": 610,
    Errors: 87,
  },
  {
    date: "Aug 25",
    "Successful requests": 610,
    Errors: 92,
  },
  {
    date: "Aug 26",
    "Successful requests": 501,
    Errors: 120,
  },
  {
    date: "Aug 27",
    "Successful requests": 480,
    Errors: 120,
  },
  {
    date: "Aug 28",
    "Successful requests": 471,
    Errors: 120,
  },
  {
    date: "Aug 29",
    "Successful requests": 610,
    Errors: 89,
  },
  {
    date: "Aug 30",
    "Successful requests": 513,
    Errors: 199,
  },
  {
    date: "Aug 31",
    "Successful requests": 500,
    Errors: 56,
  },
  //array-end
]

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`

export default function Example() {
  return (
    <div className="obfuscate">
      <Card className="!p-0">
        <div className="p-6">
          <h1 className="font-medium text-gray-900 dark:text-gray-50">
            Monitoring
          </h1>
          <p className="text-sm/6 text-gray-500 dark:text-gray-500">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt
          </p>
        </div>
        <div className="border-t border-gray-200 p-6 dark:border-gray-900">
          <ul
            role="list"
            className="flex flex-wrap items-center gap-x-10 gap-y-4"
          >
            <li>
              <div className="flex items-center space-x-2">
                <span
                  className="size-3 shrink-0 rounded-sm bg-blue-500 dark:bg-blue-500"
                  aria-hidden="true"
                />
                <p className="font-semibold text-gray-900 dark:text-gray-50">
                  23,450
                </p>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Successful requests
              </p>
            </li>
            <li>
              <div className="flex items-center space-x-2">
                <span
                  className="size-3 shrink-0 rounded-sm bg-red-500 dark:bg-red-500"
                  aria-hidden={true}
                />
                <p className="font-semibold text-gray-900 dark:text-gray-50">
                  1,397
                </p>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-500">Errors</p>
            </li>
          </ul>
          <AreaChart
            data={data}
            index="date"
            categories={["Successful requests", "Errors"]}
            colors={["blue", "red"]}
            showLegend={false}
            yAxisWidth={44}
            valueFormatter={valueFormatter}
            fill="solid"
            className="mt-10 hidden !h-72 sm:block"
          />
          <AreaChart
            data={data}
            index="date"
            categories={["Successful requests", "Errors"]}
            colors={["blue", "red"]}
            showLegend={false}
            showYAxis={false}
            valueFormatter={valueFormatter}
            fill="solid"
            className="mt-6 !h-72 sm:hidden"
          />
        </div>
      </Card>
    </div>
  )
}
```


```example/area-charts-area-chart-10.tsx
"use client"

import { AreaChart } from "@/atom/AreaChart"
import { Card } from "@/atom/Card"

const data = [
  //array-start
  {
    date: "Aug 01",
    "Successful requests": 1040,
    Errors: 0,
  },
  {
    date: "Aug 02",
    "Successful requests": 1200,
    Errors: 0,
  },
  {
    date: "Aug 03",
    "Successful requests": 1130,
    Errors: 0,
  },
  {
    date: "Aug 04",
    "Successful requests": 1050,
    Errors: 0,
  },
  {
    date: "Aug 05",
    "Successful requests": 920,
    Errors: 0,
  },
  {
    date: "Aug 06",
    "Successful requests": 870,
    Errors: 0,
  },
  {
    date: "Aug 07",
    "Successful requests": 790,
    Errors: 0,
  },
  {
    date: "Aug 08",
    "Successful requests": 910,
    Errors: 0,
  },
  {
    date: "Aug 09",
    "Successful requests": 951,
    Errors: 0,
  },
  {
    date: "Aug 10",
    "Successful requests": 1232,
    Errors: 0,
  },
  {
    date: "Aug 11",
    "Successful requests": 1230,
    Errors: 0,
  },
  {
    date: "Aug 12",
    "Successful requests": 1289,
    Errors: 0,
  },
  {
    date: "Aug 13",
    "Successful requests": 1002,
    Errors: 0,
  },
  {
    date: "Aug 14",
    "Successful requests": 1034,
    Errors: 0,
  },
  {
    date: "Aug 15",
    "Successful requests": 1140,
    Errors: 0,
  },
  {
    date: "Aug 16",
    "Successful requests": 1280,
    Errors: 0,
  },
  {
    date: "Aug 17",
    "Successful requests": 1345,
    Errors: 0,
  },
  {
    date: "Aug 18",
    "Successful requests": 1432,
    Errors: 0,
  },
  {
    date: "Aug 19",
    "Successful requests": 1321,
    Errors: 0,
  },
  {
    date: "Aug 20",
    "Successful requests": 1230,
    Errors: 0,
  },
  {
    date: "Aug 21",
    "Successful requests": 1020,
    Errors: 0,
  },
  {
    date: "Aug 22",
    "Successful requests": 1040,
    Errors: 0,
  },
  {
    date: "Aug 23",
    "Successful requests": 610,
    Errors: 81,
  },
  {
    date: "Aug 24",
    "Successful requests": 610,
    Errors: 87,
  },
  {
    date: "Aug 25",
    "Successful requests": 610,
    Errors: 92,
  },
  {
    date: "Aug 26",
    "Successful requests": 501,
    Errors: 120,
  },
  {
    date: "Aug 27",
    "Successful requests": 480,
    Errors: 120,
  },
  {
    date: "Aug 28",
    "Successful requests": 471,
    Errors: 120,
  },
  {
    date: "Aug 29",
    "Successful requests": 610,
    Errors: 89,
  },
  {
    date: "Aug 30",
    "Successful requests": 513,
    Errors: 199,
  },
  {
    date: "Aug 31",
    "Successful requests": 500,
    Errors: 56,
  },
  //array-end
]

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`

export default function Example() {
  return (
    <div className="obfuscate">
      <Card className="!p-0">
        <div className="p-6">
          <h1 className="font-medium text-gray-900 dark:text-gray-50">
            Monitoring
          </h1>
          <p className="text-sm/6 text-gray-500 dark:text-gray-500">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt
          </p>
        </div>
        <div className="border-t border-gray-200 p-6 dark:border-gray-900">
          <div className="md:flex md:items-center md:justify-between">
            <ul
              role="list"
              className="flex flex-wrap items-center gap-x-6 gap-y-4"
            >
              <li className="flex items-center space-x-2">
                <span
                  className="size-3 shrink-0 rounded-sm bg-blue-500 dark:bg-blue-500"
                  aria-hidden="true"
                />
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  <span className="font-semibold text-gray-900 dark:text-gray-50">
                    29,790
                  </span>{" "}
                  Successful requests
                </p>
              </li>
              <li className="flex items-center space-x-2">
                <span
                  className="size-3 shrink-0 rounded-sm bg-red-500 dark:bg-red-500"
                  aria-hidden="true"
                />
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  <span className="font-semibold text-gray-900 dark:text-gray-50">
                    1,397
                  </span>{" "}
                  Errors
                </p>
              </li>
            </ul>
            <span className="mt-4 inline-flex items-center gap-x-2.5 rounded-md bg-white px-3 py-1 text-sm whitespace-nowrap text-gray-700 ring-1 shadow-sm ring-gray-200 md:mt-0 dark:bg-gray-950 dark:text-gray-300 dark:ring-gray-800">
              Success rate
              <span
                className="h-5 w-px bg-gray-200 dark:bg-gray-800"
                aria-hidden="true"
              />
              <span className="font-semibold text-gray-900 dark:text-gray-50">
                95.3%
              </span>
            </span>
          </div>
          <AreaChart
            data={data}
            index="date"
            categories={["Successful requests", "Errors"]}
            colors={["blue", "red"]}
            showLegend={false}
            yAxisWidth={44}
            valueFormatter={valueFormatter}
            fill="solid"
            className="mt-10 hidden !h-72 sm:block"
          />
          <AreaChart
            data={data}
            index="date"
            categories={["Successful requests", "Errors"]}
            colors={["blue", "red"]}
            showLegend={false}
            showYAxis={false}
            startEndOnly={true}
            valueFormatter={valueFormatter}
            fill="solid"
            className="mt-6 !h-72 sm:hidden"
          />
        </div>
      </Card>
    </div>
  )
}
```


```example/area-charts-area-chart-04.tsx
"use client"

import React from "react"
import { RiArrowRightUpLine, RiCloseLine } from "@remixicon/react"

import { AreaChart } from "@/atom/AreaChart"
import { Button } from "@/atom/Button"
import { Card } from "@/atom/Card"

const data = [
  //array-start
  {
    date: "Jan 23",
    Users: 234,
  },
  {
    date: "Feb 23",
    Users: 412,
  },
  {
    date: "Mar 23",
    Users: 519,
  },
  {
    date: "Apr 23",
    Users: 642,
  },
  {
    date: "May 23",
    Users: 642,
  },
  {
    date: "Jun 23",
    Users: 701,
  },
  {
    date: "Jul 23",
    Users: 749,
  },
  {
    date: "Aug 23",
    Users: 961,
  },
  {
    date: "Sep 23",
    Users: 1286,
  },
  {
    date: "Oct 23",
    Users: 1491,
  },
  {
    date: "Nov 23",
    Users: 1619,
  },
  {
    date: "Dec 23",
    Users: 2019,
  },
  //array-end
]

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`

export default function Example() {
  const [isOpen, setIsOpen] = React.useState(true)

  // just for demo purposes
  React.useEffect(() => {
    if (!isOpen) {
      const timeoutId: NodeJS.Timeout = setTimeout(() => {
        setIsOpen(true)
      }, 1000)

      return () => clearTimeout(timeoutId)
    }
  }, [isOpen])
  return (
    <div className="obfuscate">
      <Card className="sm:mx-auto sm:max-w-lg">
        <h1 className="text-sm text-gray-500 dark:text-gray-500">
          Active subscriptions (cumulative)
        </h1>
        <p className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
          14,035
        </p>
        <AreaChart
          data={data}
          index="date"
          categories={["Users"]}
          showLegend={false}
          valueFormatter={valueFormatter}
          showYAxis={false}
          fill="solid"
          className="mt-6 hidden !h-48 sm:block"
        />
        <AreaChart
          data={data}
          index="date"
          categories={["Users"]}
          showLegend={false}
          valueFormatter={valueFormatter}
          startEndOnly={true}
          showYAxis={false}
          fill="solid"
          className="mt-6 !h-48 sm:hidden"
        />
        {isOpen ? (
          <div className="relative mt-4 rounded-md bg-gray-50 p-4 ring-1 ring-gray-200 ring-inset dark:bg-gray-800 dark:ring-gray-400/20">
            <div className="flex items-center space-x-2.5">
              <RiArrowRightUpLine
                className="size-5 shrink-0 text-blue-500 dark:text-blue-500"
                aria-hidden="true"
              />
              <h2 className="text-sm font-medium text-blue-500 dark:text-blue-500">
                Significant increase since May
              </h2>
            </div>
            <div className="absolute top-1.5 right-1.5">
              <Button
                variant="ghost"
                className="!p-1 !text-gray-500 hover:!text-gray-700 dark:!text-gray-500 hover:dark:!text-gray-300"
                onClick={() => setIsOpen(false)}
                aria-label="Close"
              >
                <RiCloseLine className="size-5 shrink-0" aria-hidden="true" />
              </Button>
            </div>
            <p className="mt-2 text-sm/6 text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt. At vero eos et accusam et justo duo
              dolores.
            </p>
          </div>
        ) : null}
      </Card>
    </div>
  )
}
```


```example/area-charts-area-chart-14.tsx
"use client"

import { AvailableChartColorsKeys } from "@/lib/chartUtils"
import { cx } from "@/lib/utils"

import { AreaChart } from "@/atom/AreaChart"
import { Card } from "@/atom/Card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/atom/Tabs"

const data = [
  //array-start
  {
    date: "Aug 01",
    "Successful requests": 1040,
    Errors: 0,
    "Mean time to detect": 0,
    "Mean time to resolve": 0,
  },
  {
    date: "Aug 02",
    "Successful requests": 1200,
    Errors: 0,
    "Mean time to detect": 0,
    "Mean time to resolve": 0,
  },
  {
    date: "Aug 03",
    "Successful requests": 1130,
    Errors: 0,
    "Mean time to detect": 0,
    "Mean time to resolve": 0,
  },
  {
    date: "Aug 04",
    "Successful requests": 1050,
    Errors: 0,
    "Mean time to detect": 0,
    "Mean time to resolve": 0,
  },
  {
    date: "Aug 05",
    "Successful requests": 920,
    Errors: 0,
    "Mean time to detect": 0,
    "Mean time to resolve": 0,
  },
  {
    date: "Aug 06",
    "Successful requests": 870,
    Errors: 0,
    "Mean time to detect": 0,
    "Mean time to resolve": 0,
  },
  {
    date: "Aug 07",
    "Successful requests": 790,
    Errors: 0,
    "Mean time to detect": 0,
    "Mean time to resolve": 0,
  },
  {
    date: "Aug 08",
    "Successful requests": 910,
    Errors: 0,
    "Mean time to detect": 0,
    "Mean time to resolve": 0,
  },
  {
    date: "Aug 09",
    "Successful requests": 951,
    Errors: 0,
    "Mean time to detect": 0,
    "Mean time to resolve": 0,
  },
  {
    date: "Aug 10",
    "Successful requests": 1232,
    Errors: 0,
    "Mean time to detect": 0,
    "Mean time to resolve": 0,
  },
  {
    date: "Aug 11",
    "Successful requests": 1230,
    Errors: 0,
    "Mean time to detect": 0,
    "Mean time to resolve": 0,
  },
  {
    date: "Aug 12",
    "Successful requests": 1289,
    Errors: 0,
    "Mean time to detect": 0,
    "Mean time to resolve": 0,
  },
  {
    date: "Aug 13",
    "Successful requests": 1002,
    Errors: 0,
    "Mean time to detect": 0,
    "Mean time to resolve": 0,
  },
  {
    date: "Aug 14",
    "Successful requests": 1034,
    Errors: 0,
    "Mean time to detect": 0,
    "Mean time to resolve": 0,
  },
  {
    date: "Aug 15",
    "Successful requests": 1140,
    Errors: 0,
    "Mean time to detect": 0,
    "Mean time to resolve": 0,
  },
  {
    date: "Aug 16",
    "Successful requests": 1280,
    Errors: 0,
    "Mean time to detect": 0,
    "Mean time to resolve": 0,
  },
  {
    date: "Aug 17",
    "Successful requests": 1345,
    Errors: 0,
    "Mean time to detect": 0,
    "Mean time to resolve": 0,
  },
  {
    date: "Aug 18",
    "Successful requests": 1432,
    Errors: 0,
    "Mean time to detect": 0,
    "Mean time to resolve": 0,
  },
  {
    date: "Aug 19",
    "Successful requests": 1321,
    Errors: 0,
    "Mean time to detect": 0,
    "Mean time to resolve": 0,
  },
  {
    date: "Aug 20",
    "Successful requests": 1230,
    Errors: 0,
    "Mean time to detect": 0,
    "Mean time to resolve": 0,
  },
  {
    date: "Aug 21",
    "Successful requests": 1020,
    Errors: 0,
    "Mean time to detect": 0,
    "Mean time to resolve": 0,
  },
  {
    date: "Aug 22",
    "Successful requests": 1040,
    Errors: 0,
    "Mean time to detect": 0,
    "Mean time to resolve": 0,
  },
  {
    date: "Aug 23",
    "Successful requests": 610,
    Errors: 81,
    "Mean time to detect": 1060,
    "Mean time to resolve": 2180,
  },
  {
    date: "Aug 24",
    "Successful requests": 610,
    Errors: 87,
    "Mean time to detect": 1460,
    "Mean time to resolve": 3140,
  },
  {
    date: "Aug 25",
    "Successful requests": 610,
    Errors: 92,
    "Mean time to detect": 2460,
    "Mean time to resolve": 4120,
  },
  {
    date: "Aug 26",
    "Successful requests": 501,
    Errors: 120,
    "Mean time to detect": 2920,
    "Mean time to resolve": 5120,
  },
  {
    date: "Aug 27",
    "Successful requests": 480,
    Errors: 120,
    "Mean time to detect": 3120,
    "Mean time to resolve": 4910,
  },
  {
    date: "Aug 28",
    "Successful requests": 471,
    Errors: 120,
    "Mean time to detect": 3150,
    "Mean time to resolve": 4210,
  },
  {
    date: "Aug 29",
    "Successful requests": 610,
    Errors: 89,
    "Mean time to detect": 2350,
    "Mean time to resolve": 4620,
  },
  {
    date: "Aug 30",
    "Successful requests": 513,
    Errors: 199,
    "Mean time to detect": 2350,
    "Mean time to resolve": 4130,
  },
  {
    date: "Aug 31",
    "Successful requests": 500,
    Errors: 56,
    "Mean time to detect": 2431,
    "Mean time to resolve": 4130,
  },
  //array-end
]

const timeFormatter = (seconds: number) => {
  const minutes = Math.floor((seconds % 3600) / 60)

  return `${minutes}m`
}

const numberFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`

const tabs = [
  //array-start
  {
    name: "API requests",
    data: data,
    valueFormatter: numberFormatter,
    categories: ["Successful requests", "Errors"],
    colors: ["blue", "red"],
    badgeText: "94.1%",
    axisWidth: 38,
    summary: [
      {
        name: "Successful requests",
        total: "23,450",
        color: "bg-blue-500 dark:bg-blue-500",
      },
      {
        name: "Errors",
        total: "1,397",
        color: "bg-red-500 dark:bg-red-500",
      },
    ],
  },
  {
    name: "Incident response",
    data: data,
    valueFormatter: timeFormatter,
    categories: ["Mean time to resolve", "Mean time to detect"],
    colors: ["blue", "red"],
    badgeText: "Avg. performance",
    axisWidth: 35,
    summary: [
      {
        name: "Mean time to resolve",
        total: "47min 44s",
        color: "bg-blue-500 dark:bg-blue-500",
      },
      {
        name: "Mean time to detect",
        total: "31min 8s",
        color: "bg-red-500 dark:bg-red-500",
      },
    ],
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <Card className="!p-0">
        <div className="rounded-t-lg p-6">
          <h1 className="font-medium text-gray-900 dark:text-gray-50">
            Monitoring
          </h1>
          <p className="text-sm/6 text-gray-500 dark:text-gray-500">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt
          </p>
        </div>
        <Tabs defaultValue={tabs[0].name}>
          <TabsList className="px-6">
            {tabs.map((tab) => (
              <TabsTrigger key={tab.name} value={tab.name}>
                {tab.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabs.map((tab) => (
            <TabsContent key={tab.name} value={tab.name} className="p-6">
              <div className="md:flex md:items-start md:justify-between">
                <ul
                  role="list"
                  className="flex flex-wrap items-center gap-x-10 gap-y-4"
                >
                  {tab.summary.map((item) => (
                    <li key={item.name}>
                      <div className="flex space-x-3">
                        <span
                          className={cx(item.color, "flex w-[3px] rounded-sm")}
                          aria-hidden="true"
                        />
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-gray-50">
                            {item.total}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-500">
                            {item.name}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-x-2.5 rounded-md bg-white px-3 py-1 text-sm whitespace-nowrap text-gray-700 ring-1 shadow-sm ring-gray-200 md:mt-0 dark:bg-gray-950 dark:text-gray-300 dark:ring-gray-800">
                  Success rate
                  <span className="h-5 w-px bg-gray-200 dark:bg-gray-800" />
                  <span
                    className="size-2 rounded-full bg-emerald-600 dark:bg-emerald-500"
                    aria-hidden="true"
                  />
                  <span className="font-semibold text-gray-900 dark:text-gray-50">
                    {tab.badgeText}
                  </span>
                </span>
              </div>
              <AreaChart
                data={data}
                index="date"
                categories={tab.categories}
                colors={tab.colors as AvailableChartColorsKeys[]}
                showLegend={false}
                yAxisWidth={44}
                valueFormatter={tab.valueFormatter}
                fill="solid"
                className="mt-10 hidden !h-72 sm:block"
              />
              <AreaChart
                data={data}
                index="date"
                categories={tab.categories}
                colors={tab.colors as AvailableChartColorsKeys[]}
                showLegend={false}
                showYAxis={false}
                startEndOnly={true}
                valueFormatter={tab.valueFormatter}
                fill="solid"
                className="mt-6 !h-72 sm:hidden"
              />
            </TabsContent>
          ))}
        </Tabs>
      </Card>
    </div>
  )
}
```


```example/area-charts-area-chart-15.tsx
"use client"

import { cx } from "@/lib/utils"

import { AreaChart } from "@/atom/AreaChart"

const data = [
  //array-start
  {
    date: "Jan 23",
    "Actual costs": 42340,
    "Potential costs": 32330,
    "Potential savings": -23.6,
  },
  {
    date: "Feb 23",
    "Actual costs": 50120,
    "Potential costs": 40100,
    "Potential savings": -20.2,
  },
  {
    date: "Mar 23",
    "Actual costs": 45190,
    "Potential costs": 38240,
    "Potential savings": -15.4,
  },
  {
    date: "Apr 23",
    "Actual costs": 56420,
    "Potential costs": 31200,
    "Potential savings": -44.8,
  },
  {
    date: "May 23",
    "Actual costs": 40420,
    "Potential costs": 34900,
    "Potential savings": -13.8,
  },
  {
    date: "Jun 23",
    "Actual costs": 47010,
    "Potential costs": 36800,
    "Potential savings": -21.9,
  },
  {
    date: "Jul 23",
    "Actual costs": 47490,
    "Potential costs": 34560,
    "Potential savings": -27.3,
  },
  {
    date: "Aug 23",
    "Actual costs": 39610,
    "Potential costs": 31260,
    "Potential savings": -21.8,
  },
  {
    date: "Sep 23",
    "Actual costs": 45860,
    "Potential costs": 29240,
    "Potential savings": -36.2,
  },
  {
    date: "Oct 23",
    "Actual costs": 50910,
    "Potential costs": 31220,
    "Potential savings": -38.7,
  },
  {
    date: "Nov 23",
    "Actual costs": 49190,
    "Potential costs": 33020,
    "Potential savings": -32.9,
  },
  {
    date: "Dec 23",
    "Actual costs": 55190,
    "Potential costs": 36090,
    "Potential savings": -34.5,
  },
  //array-end
]

const summary = [
  //array-start
  {
    category: "Actual costs",
    total: "$540,690",
    color: "bg-blue-500 dark:bg-blue-500",
  },
  {
    category: "Potential costs",
    total: "$422,300",
    color: "bg-cyan-500 dark:bg-blue-500",
  },
  {
    category: "Potential savings (%)",
    total: "-21.9%",
    color: null,
  },
  {
    category: "Potential savings ($)",
    total: "$118,390",
    color: null,
  },
  //array-end
]

function currencyFormatter(number: number) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 1,
    notation: "compact",
    compactDisplay: "short",
  })

  return formatter.format(number)
}

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="sm:mx-auto sm:max-w-7xl">
        <h1 className="font-medium text-gray-900 dark:text-gray-50">
          Actual costs vs. potential costs
        </h1>
        <p className="text-sm/6 text-gray-500 dark:text-gray-500">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt
        </p>
        <ul role="list" className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {summary.map((item, index) => (
            <li key={index}>
              <div className="flex space-x-3">
                {item.color && (
                  <span
                    className={cx(item.color, "w-1 shrink-0 rounded")}
                    aria-hidden={true}
                  />
                )}
                <p className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                  {item.total}
                </p>
              </div>
              {item.color !== null ? (
                <p className="pl-4 text-sm text-gray-500 dark:text-gray-500">
                  {item.category}
                </p>
              ) : (
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  {item.category}
                </p>
              )}
            </li>
          ))}
        </ul>
        <AreaChart
          data={data}
          index="date"
          categories={["Actual costs", "Potential costs"]}
          colors={["blue", "cyan"]}
          showLegend={false}
          yAxisWidth={52}
          valueFormatter={currencyFormatter}
          fill="solid"
          className="mt-10 hidden !h-72 sm:block"
        />
        <AreaChart
          data={data}
          index="date"
          categories={["Actual costs", "Potential costs"]}
          colors={["blue", "cyan"]}
          showLegend={false}
          showYAxis={false}
          startEndOnly={true}
          valueFormatter={currencyFormatter}
          fill="solid"
          className="mt-6 !h-72 sm:hidden"
        />
      </div>
    </div>
  )
}
```


```example/area-charts-area-chart-01.tsx
"use client"

import { cx } from "@/lib/utils"

import { AreaChart } from "@/atom/AreaChart"
import { Card } from "@/atom/Card"

const data = [
  //array-start
  {
    date: "Jan 23",
    Organic: 232,
    Sponsored: 0,
  },
  {
    date: "Feb 23",
    Organic: 241,
    Sponsored: 0,
  },
  {
    date: "Mar 23",
    Organic: 291,
    Sponsored: 0,
  },
  {
    date: "Apr 23",
    Organic: 101,
    Sponsored: 0,
  },
  {
    date: "May 23",
    Organic: 318,
    Sponsored: 0,
  },
  {
    date: "Jun 23",
    Organic: 205,
    Sponsored: 0,
  },
  {
    date: "Jul 23",
    Organic: 372,
    Sponsored: 0,
  },
  {
    date: "Aug 23",
    Organic: 341,
    Sponsored: 0,
  },
  {
    date: "Sep 23",
    Organic: 387,
    Sponsored: 120,
  },
  {
    date: "Oct 23",
    Organic: 220,
    Sponsored: 0,
  },
  {
    date: "Nov 23",
    Organic: 372,
    Sponsored: 0,
  },
  {
    date: "Dec 23",
    Organic: 321,
    Sponsored: 0,
  },
  //array-end
]

const summary = [
  {
    name: "Organic",
    value: 3273,
  },
  {
    name: "Sponsored",
    value: 120,
  },
]

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`

type Status = "Organic" | "Sponsored"

const statusColor: Record<Status, string> = {
  Organic: "bg-blue-500 dark:bg-blue-500",
  Sponsored: "bg-violet-500 dark:bg-violet-500",
}

export default function Example() {
  return (
    <div className="obfuscate">
      <Card className="sm:mx-auto sm:max-w-lg">
        <h1 className="font-medium text-gray-900 dark:text-gray-50">
          Follower metrics
        </h1>
        <AreaChart
          data={data}
          index="date"
          categories={["Organic", "Sponsored"]}
          colors={["blue", "violet"]}
          valueFormatter={valueFormatter}
          showLegend={false}
          showYAxis={false}
          startEndOnly={true}
          fill="solid"
          className="mt-6 !h-32"
        />
        <ul
          role="list"
          className="mt-4 divide-y divide-gray-200 text-sm text-gray-500 dark:divide-gray-800 dark:text-gray-500"
        >
          {summary.map((item) => (
            <li
              key={item.name}
              className="flex items-center justify-between py-2"
            >
              <div className="flex items-center space-x-2">
                <span
                  className={cx(
                    statusColor[item.name as Status],
                    "h-[3px] w-3.5 shrink-0 rounded-full",
                  )}
                  aria-hidden="true"
                />
                <span className="text-gray-500 dark:text-gray-500">
                  {item.name}
                </span>
              </div>
              <span className="font-medium text-gray-900 dark:text-gray-50">
                {valueFormatter(item.value)}
              </span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  )
}
```


```example/area-charts-area-chart-03.tsx
"use client"

import React from "react"
import { RiCloseLine } from "@remixicon/react"

import { cx } from "@/lib/utils"

import { AreaChart } from "@/atom/AreaChart"
import { Button } from "@/atom/Button"
import { Card } from "@/atom/Card"

const data = [
  //array-start
  {
    date: "Jan 23",
    Organic: 232,
    Sponsored: 0,
  },
  {
    date: "Feb 23",
    Organic: 241,
    Sponsored: 0,
  },
  {
    date: "Mar 23",
    Organic: 291,
    Sponsored: 0,
  },
  {
    date: "Apr 23",
    Organic: 101,
    Sponsored: 0,
  },
  {
    date: "May 23",
    Organic: 318,
    Sponsored: 0,
  },
  {
    date: "Jun 23",
    Organic: 205,
    Sponsored: 0,
  },
  {
    date: "Jul 23",
    Organic: 372,
    Sponsored: 0,
  },
  {
    date: "Aug 23",
    Organic: 341,
    Sponsored: 0,
  },
  {
    date: "Sep 23",
    Organic: 387,
    Sponsored: 120,
  },
  {
    date: "Oct 23",
    Organic: 220,
    Sponsored: 0,
  },
  {
    date: "Nov 23",
    Organic: 372,
    Sponsored: 0,
  },
  {
    date: "Dec 23",
    Organic: 321,
    Sponsored: 0,
  },
  //array-end
]

const summary = [
  {
    name: "Organic",
    value: 3273,
  },
  {
    name: "Sponsored",
    value: 120,
  },
]

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`

type Status = "Organic" | "Sponsored"

const statusColor: Record<Status, string> = {
  Organic: "bg-blue-500",
  Sponsored: "bg-violet-500",
}

export default function Example() {
  const [isOpen, setIsOpen] = React.useState(true)

  // just for demo purposes
  React.useEffect(() => {
    if (!isOpen) {
      const timeoutId: NodeJS.Timeout = setTimeout(() => {
        setIsOpen(true)
      }, 1000)

      return () => clearTimeout(timeoutId)
    }
  }, [isOpen])
  return (
    <div className="obfuscate">
      <Card className="sm:mx-auto sm:max-w-lg">
        <h1 className="font-medium text-gray-900 dark:text-gray-50">
          Follower metrics
        </h1>
        <AreaChart
          data={data}
          index="date"
          categories={["Organic", "Sponsored"]}
          colors={["blue", "violet"]}
          showLegend={false}
          showYAxis={false}
          showGridLines={true}
          startEndOnly={true}
          fill="solid"
          className="mt-6 !h-48"
        />

        <ul
          role="list"
          className="mt-2 divide-y divide-gray-200 dark:divide-gray-800"
        >
          {summary.map((item) => (
            <li
              key={item.name}
              className="flex items-center justify-between py-2 text-sm"
            >
              <div className="flex items-center space-x-2">
                <span
                  className={cx(
                    statusColor[item.name as Status],
                    "h-[3px] w-3.5 shrink-0 rounded-full",
                  )}
                />
                <span className="text-gray-500 dark:text-gray-500">
                  {item.name}
                </span>
              </div>
              <span className="font-medium text-gray-900 dark:text-gray-50">
                {valueFormatter(item.value)}
              </span>
            </li>
          ))}
        </ul>
        {isOpen ? (
          <div className="relative mt-3 rounded-md bg-gray-50 p-4 ring-1 ring-gray-200 ring-inset dark:bg-gray-800 dark:ring-gray-400/20">
            <div className="absolute top-0 right-0 pt-1.5 pr-1.5">
              <Button
                variant="ghost"
                className="!p-1 !text-gray-500 hover:!text-gray-700 dark:!text-gray-500 hover:dark:!text-gray-300"
                onClick={() => setIsOpen(false)}
                aria-label="Close"
              >
                <RiCloseLine className="size-5 shrink-0" aria-hidden="true" />
              </Button>
            </div>
            <h2 className="text-sm font-medium text-gray-900 dark:text-gray-50">
              Free trial offer
            </h2>
            <p className="mt-2 text-sm/6 text-gray-600 dark:text-gray-400">
              Try out our Ad performance program and gain better insights to
              steer your business.
            </p>
            <div className="mt-2">
              <a
                href="#"
                className="text-sm font-medium text-blue-500 dark:text-blue-500"
              >
                Learn more &#8594;
              </a>
            </div>
          </div>
        ) : null}
      </Card>
    </div>
  )
}
```


```example/area-charts-area-chart-02.tsx
"use client"

import React from "react"
import { RiCloseLine } from "@remixicon/react"

import { cx } from "@/lib/utils"

import { AreaChart } from "@/atom/AreaChart"
import { Button } from "@/atom/Button"
import { Card } from "@/atom/Card"

const data = [
  //array-start
  {
    date: "Jan 23",
    Organic: 232,
    Sponsored: 0,
  },
  {
    date: "Feb 23",
    Organic: 241,
    Sponsored: 0,
  },
  {
    date: "Mar 23",
    Organic: 291,
    Sponsored: 0,
  },
  {
    date: "Apr 23",
    Organic: 101,
    Sponsored: 0,
  },
  {
    date: "May 23",
    Organic: 318,
    Sponsored: 0,
  },
  {
    date: "Jun 23",
    Organic: 205,
    Sponsored: 0,
  },
  {
    date: "Jul 23",
    Organic: 372,
    Sponsored: 0,
  },
  {
    date: "Aug 23",
    Organic: 341,
    Sponsored: 0,
  },
  {
    date: "Sep 23",
    Organic: 387,
    Sponsored: 120,
  },
  {
    date: "Oct 23",
    Organic: 220,
    Sponsored: 0,
  },
  {
    date: "Nov 23",
    Organic: 372,
    Sponsored: 0,
  },
  {
    date: "Dec 23",
    Organic: 321,
    Sponsored: 0,
  },
  //array-end
]

const summary = [
  {
    name: "Organic",
    value: 3273,
  },
  {
    name: "Sponsored",
    value: 120,
  },
]

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`

type Status = "Organic" | "Sponsored"

const statusColor: Record<Status, string> = {
  Organic: "bg-blue-500 dark:bg-blue-500",
  Sponsored: "bg-violet-500 dark:bg-violet-500",
}

export default function Example() {
  const [isOpen, setIsOpen] = React.useState(true)

  // just for demo purposes
  React.useEffect(() => {
    if (!isOpen) {
      const timeoutId: NodeJS.Timeout = setTimeout(() => {
        setIsOpen(true)
      }, 1000)

      return () => clearTimeout(timeoutId)
    }
  }, [isOpen])
  return (
    <div className="obfuscate">
      <Card className="sm:mx-auto sm:max-w-lg">
        <h1 className="font-medium text-gray-900 dark:text-gray-50">
          Follower metrics
        </h1>
        <AreaChart
          data={data}
          index="date"
          categories={["Organic", "Sponsored"]}
          colors={["blue", "violet"]}
          showLegend={false}
          showYAxis={false}
          showGridLines={true}
          startEndOnly={true}
          fill="solid"
          className="mt-6 !h-48"
        />
        <ul
          role="list"
          className="mt-2 divide-y divide-gray-200 dark:divide-gray-800"
        >
          {summary.map((item) => (
            <li
              key={item.name}
              className="flex items-center justify-between py-2 text-sm"
            >
              <div className="flex items-center space-x-2">
                <span
                  className={cx(
                    statusColor[item.name as Status],
                    "h-[3px] w-3.5 shrink-0 rounded-full",
                  )}
                />
                <span className="text-gray-500 dark:text-gray-500">
                  {item.name}
                </span>
              </div>
              <span className="font-medium text-gray-900 dark:text-gray-50">
                {valueFormatter(item.value)}
              </span>
            </li>
          ))}
        </ul>
        {isOpen ? (
          <div className="mt-3 rounded-md bg-gray-50 py-3 pr-2 pl-4 ring-1 ring-gray-200 ring-inset dark:bg-gray-800 dark:ring-gray-400/20">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
                  More power?{" "}
                  <a
                    href="#"
                    className="font-normal text-blue-500 hover:underline hover:underline-offset-4 dark:text-blue-500"
                  >
                    Upgrade
                  </a>{" "}
                  <span className="font-normal text-gray-600 dark:text-gray-400">
                    to get more insights.
                  </span>
                </p>
              </div>
              <Button
                variant="ghost"
                className="!p-1 !text-gray-500 hover:!text-gray-700 dark:!text-gray-500 hover:dark:!text-gray-300"
                onClick={() => setIsOpen(false)}
                aria-label="Close"
              >
                <RiCloseLine className="size-5 shrink-0" aria-hidden={true} />
              </Button>
            </div>
          </div>
        ) : null}
      </Card>
    </div>
  )
}
```


```example/area-charts-area-chart-16.tsx
"use client"

// Add this custom Color to your chartUtils.ts file

// darkGray: {
//   bg: 'bg-gray-800 dark:bg-gray-200',
//   stroke: 'stroke-gray-800 dark:stroke-gray-200',
//   fill: 'fill-gray-800 dark:fill-gray-200',
//   text: 'text-gray-800 dark:text-gray-200',
// },
import React from "react"
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react"
import {
  Area,
  CartesianGrid,
  Dot,
  Label,
  Line,
  AreaChart as RechartsAreaChart,
  Legend as RechartsLegend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { AxisDomain } from "recharts/types/util/types"

import {
  AvailableChartColors,
  AvailableChartColorsKeys,
  constructCategoryColors,
  getColorClassName,
  getYAxisDomain,
  hasOnlyOneValueForKey,
} from "@/lib/chartUtils"
import { useOnWindowResize } from "@/lib/useOnWindowResize"
import { cx } from "@/lib/utils"

// Custom Tremor copy-and-paste AreaChart [v0.3.0]

//#region Legend

interface LegendItemProps {
  name: string
  color: AvailableChartColorsKeys
  onClick?: (name: string, color: AvailableChartColorsKeys) => void
  activeLegend?: string
}

const LegendItem = ({
  name,
  color,
  onClick,
  activeLegend,
}: LegendItemProps) => {
  const hasOnValueChange = !!onClick
  return (
    <li
      className={cx(
        // base
        "group inline-flex flex-nowrap items-center gap-1.5 rounded px-2 py-1 whitespace-nowrap transition",
        hasOnValueChange
          ? "cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
          : "cursor-default",
      )}
      onClick={(e) => {
        e.stopPropagation()
        onClick?.(name, color)
      }}
    >
      <span
        className={cx(
          "h-[3px] w-3.5 shrink-0 rounded-full",
          getColorClassName(color, "bg"),
          activeLegend && activeLegend !== name ? "opacity-40" : "opacity-100",
        )}
        aria-hidden={true}
      />
      <p
        className={cx(
          // base
          "truncate text-xs whitespace-nowrap",
          // text color
          "text-gray-700 dark:text-gray-300",
          hasOnValueChange &&
            "group-hover:text-gray-900 dark:group-hover:text-gray-50",
          activeLegend && activeLegend !== name ? "opacity-40" : "opacity-100",
        )}
      >
        {name}
      </p>
    </li>
  )
}

interface ScrollButtonProps {
  icon: React.ElementType
  onClick?: () => void
  disabled?: boolean
}

const ScrollButton = ({ icon, onClick, disabled }: ScrollButtonProps) => {
  const Icon = icon
  const [isPressed, setIsPressed] = React.useState(false)
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null)

  React.useEffect(() => {
    if (isPressed) {
      intervalRef.current = setInterval(() => {
        onClick?.()
      }, 300)
    } else {
      clearInterval(intervalRef.current as NodeJS.Timeout)
    }
    return () => clearInterval(intervalRef.current as NodeJS.Timeout)
  }, [isPressed, onClick])

  React.useEffect(() => {
    if (disabled) {
      clearInterval(intervalRef.current as NodeJS.Timeout)
      setIsPressed(false)
    }
  }, [disabled])

  return (
    <button
      type="button"
      className={cx(
        // base
        "group inline-flex size-5 items-center truncate rounded transition",
        disabled
          ? "cursor-not-allowed text-gray-400 dark:text-gray-600"
          : "cursor-pointer text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-50",
      )}
      disabled={disabled}
      onClick={(e) => {
        e.stopPropagation()
        onClick?.()
      }}
      onMouseDown={(e) => {
        e.stopPropagation()
        setIsPressed(true)
      }}
      onMouseUp={(e) => {
        e.stopPropagation()
        setIsPressed(false)
      }}
    >
      <Icon className="size-full" aria-hidden="true" />
    </button>
  )
}

interface LegendProps extends React.OlHTMLAttributes<HTMLOListElement> {
  categories: string[]
  colors?: AvailableChartColorsKeys[]
  onClickLegendItem?: (category: string, color: string) => void
  activeLegend?: string
  enableLegendSlider?: boolean
}

type HasScrollProps = {
  left: boolean
  right: boolean
}

const Legend = React.forwardRef<HTMLOListElement, LegendProps>((props, ref) => {
  const {
    categories,
    colors = AvailableChartColors,
    className,
    onClickLegendItem,
    activeLegend,
    enableLegendSlider = false,
    ...other
  } = props
  const scrollableRef = React.useRef<HTMLInputElement>(null)
  const scrollButtonsRef = React.useRef<HTMLDivElement>(null)
  const [hasScroll, setHasScroll] = React.useState<HasScrollProps | null>(null)
  const [isKeyDowned, setIsKeyDowned] = React.useState<string | null>(null)
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null)

  const checkScroll = React.useCallback(() => {
    const scrollable = scrollableRef?.current
    if (!scrollable) return

    const hasLeftScroll = scrollable.scrollLeft > 0
    const hasRightScroll =
      scrollable.scrollWidth - scrollable.clientWidth > scrollable.scrollLeft

    setHasScroll({ left: hasLeftScroll, right: hasRightScroll })
  }, [setHasScroll])

  const scrollToTest = React.useCallback(
    (direction: "left" | "right") => {
      const element = scrollableRef?.current
      const scrollButtons = scrollButtonsRef?.current
      const scrollButtonsWith = scrollButtons?.clientWidth ?? 0
      const width = element?.clientWidth ?? 0

      if (element && enableLegendSlider) {
        element.scrollTo({
          left:
            direction === "left"
              ? element.scrollLeft - width + scrollButtonsWith
              : element.scrollLeft + width - scrollButtonsWith,
          behavior: "smooth",
        })
        setTimeout(() => {
          checkScroll()
        }, 400)
      }
    },
    [enableLegendSlider, checkScroll],
  )

  React.useEffect(() => {
    const keyDownHandler = (key: string) => {
      if (key === "ArrowLeft") {
        scrollToTest("left")
      } else if (key === "ArrowRight") {
        scrollToTest("right")
      }
    }
    if (isKeyDowned) {
      keyDownHandler(isKeyDowned)
      intervalRef.current = setInterval(() => {
        keyDownHandler(isKeyDowned)
      }, 300)
    } else {
      clearInterval(intervalRef.current as NodeJS.Timeout)
    }
    return () => clearInterval(intervalRef.current as NodeJS.Timeout)
  }, [isKeyDowned, scrollToTest])

  const keyDown = (e: KeyboardEvent) => {
    e.stopPropagation()
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      e.preventDefault()
      setIsKeyDowned(e.key)
    }
  }
  const keyUp = (e: KeyboardEvent) => {
    e.stopPropagation()
    setIsKeyDowned(null)
  }

  React.useEffect(() => {
    const scrollable = scrollableRef?.current
    if (enableLegendSlider) {
      checkScroll()
      scrollable?.addEventListener("keydown", keyDown)
      scrollable?.addEventListener("keyup", keyUp)
    }

    return () => {
      scrollable?.removeEventListener("keydown", keyDown)
      scrollable?.removeEventListener("keyup", keyUp)
    }
  }, [checkScroll, enableLegendSlider])

  return (
    <ol
      ref={ref}
      className={cx("relative overflow-hidden", className)}
      {...other}
    >
      <div
        ref={scrollableRef}
        tabIndex={0}
        className={cx(
          "flex h-full",
          enableLegendSlider
            ? hasScroll?.right || hasScroll?.left
              ? "snap-mandatory items-center overflow-auto pr-12 pl-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              : ""
            : "flex-wrap",
        )}
      >
        {categories.map((category, index) => (
          <LegendItem
            key={`item-${index}`}
            name={category}
            color={colors[index] as AvailableChartColorsKeys}
            onClick={onClickLegendItem}
            activeLegend={activeLegend}
          />
        ))}
      </div>
      {enableLegendSlider && (hasScroll?.right || hasScroll?.left) ? (
        <>
          <div
            className={cx(
              // base
              "absolute top-0 right-0 bottom-0 flex h-full items-center justify-center pr-1",
              // background color
              "bg-white dark:bg-gray-950",
            )}
          >
            <ScrollButton
              icon={RiArrowLeftSLine}
              onClick={() => {
                setIsKeyDowned(null)
                scrollToTest("left")
              }}
              disabled={!hasScroll?.left}
            />
            <ScrollButton
              icon={RiArrowRightSLine}
              onClick={() => {
                setIsKeyDowned(null)
                scrollToTest("right")
              }}
              disabled={!hasScroll?.right}
            />
          </div>
        </>
      ) : null}
    </ol>
  )
})

Legend.displayName = "Legend"

const ChartLegend = (
  { payload }: any,
  categoryColors: Map<string, AvailableChartColorsKeys>,
  setLegendHeight: React.Dispatch<React.SetStateAction<number>>,
  activeLegend: string | undefined,
  onClick?: (category: string, color: string) => void,
  enableLegendSlider?: boolean,
  legendPosition?: "left" | "center" | "right",
  yAxisWidth?: number,
) => {
  const legendRef = React.useRef<HTMLDivElement>(null)

  useOnWindowResize(() => {
    const calculateHeight = (height: number | undefined) =>
      height ? Number(height) + 15 : 60
    setLegendHeight(calculateHeight(legendRef.current?.clientHeight))
  })

  const legendPayload = payload.filter((item: any) => item.type !== "none")

  const paddingLeft =
    legendPosition === "left" && yAxisWidth ? yAxisWidth - 8 : 0

  return (
    <div
      ref={legendRef}
      style={{ paddingLeft: paddingLeft }}
      className={cx(
        "flex items-center",
        { "justify-center": legendPosition === "center" },
        { "justify-start": legendPosition === "left" },
        { "justify-end": legendPosition === "right" },
      )}
    >
      <Legend
        categories={legendPayload.map((entry: any) => entry.value)}
        colors={legendPayload.map((entry: any) =>
          categoryColors.get(entry.value),
        )}
        onClickLegendItem={onClick}
        activeLegend={activeLegend}
        enableLegendSlider={enableLegendSlider}
      />
    </div>
  )
}

//#region Tooltip

type TooltipProps = Pick<ChartTooltipProps, "active" | "payload" | "label">

type PayloadItem = {
  category: string
  value: number
  index: string
  color: AvailableChartColorsKeys
  type?: string
  payload: any
}

interface ChartTooltipProps {
  active: boolean | undefined
  payload: PayloadItem[]
  label: string
  valueFormatter: (value: number) => string
}

const ChartTooltip = ({
  active,
  payload,
  label,
  valueFormatter,
}: ChartTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div
        className={cx(
          // base
          "rounded-md border text-sm shadow-md",
          // border color
          "border-gray-200 dark:border-gray-800",
          // background color
          "bg-white dark:bg-gray-950",
        )}
      >
        <div className={cx("border-b border-inherit px-4 py-2")}>
          <p
            className={cx(
              // base
              "font-medium",
              // text color
              "text-gray-900 dark:text-gray-50",
            )}
          >
            {label}
          </p>
        </div>
        <div className={cx("space-y-1 px-4 py-2")}>
          {payload.map(({ value, category, color }, index) => (
            <div
              key={`id-${index}`}
              className="flex items-center justify-between space-x-8"
            >
              <div className="flex items-center space-x-2">
                <span
                  aria-hidden="true"
                  className={cx(
                    "h-[3px] w-3.5 shrink-0 rounded-full",
                    getColorClassName(color, "bg"),
                  )}
                />
                <p
                  className={cx(
                    // base
                    "text-right whitespace-nowrap",
                    // text color
                    "text-gray-700 dark:text-gray-300",
                  )}
                >
                  {category}
                </p>
              </div>
              <p
                className={cx(
                  // base
                  "text-right font-medium whitespace-nowrap tabular-nums",
                  // text color
                  "text-gray-900 dark:text-gray-50",
                )}
              >
                {valueFormatter(value)}
              </p>
            </div>
          ))}
        </div>
      </div>
    )
  }
  return null
}

//#region AreaChart

interface ActiveDot {
  index?: number
  dataKey?: string
}

type BaseEventProps = {
  eventType: "dot" | "category"
  categoryClicked: string
  [key: string]: number | string
}

type AreaChartEventProps = BaseEventProps | null | undefined

interface AreaChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: Record<string, any>[]
  index: string
  categories: string[]
  colors?: AvailableChartColorsKeys[]
  valueFormatter?: (value: number) => string
  startEndOnly?: boolean
  showXAxis?: boolean
  showYAxis?: boolean
  showGridLines?: boolean
  yAxisWidth?: number
  intervalType?: "preserveStartEnd" | "equidistantPreserveStart"
  showTooltip?: boolean
  showLegend?: boolean
  autoMinValue?: boolean
  minValue?: number
  maxValue?: number
  allowDecimals?: boolean
  onValueChange?: (value: AreaChartEventProps) => void
  enableLegendSlider?: boolean
  tickGap?: number
  connectNulls?: boolean
  xAxisLabel?: string
  yAxisLabel?: string
  type?: "default" | "stacked" | "percent"
  legendPosition?: "left" | "center" | "right"
  tooltipCallback?: (tooltipCallbackContent: TooltipProps) => void
  customTooltip?: React.ComponentType<TooltipProps>
}

const AreaChart = React.forwardRef<HTMLDivElement, AreaChartProps>(
  (props, ref) => {
    const {
      data = [],
      categories = [],
      index,
      colors = AvailableChartColors,
      valueFormatter = (value: number) => value.toString(),
      startEndOnly = false,
      showXAxis = true,
      showYAxis = true,
      showGridLines = true,
      yAxisWidth = 56,
      intervalType = "equidistantPreserveStart",
      showTooltip = true,
      showLegend = true,
      autoMinValue = false,
      minValue,
      maxValue,
      allowDecimals = true,
      connectNulls = false,
      className,
      onValueChange,
      enableLegendSlider = false,
      tickGap = 5,
      xAxisLabel,
      yAxisLabel,
      type = "default",
      legendPosition = "right",
      tooltipCallback,
      customTooltip,
      ...other
    } = props
    const CustomTooltip = customTooltip
    const paddingValue =
      (!showXAxis && !showYAxis) || (startEndOnly && !showYAxis) ? 0 : 20
    const [legendHeight, setLegendHeight] = React.useState(60)
    const [activeDot, setActiveDot] = React.useState<ActiveDot | undefined>(
      undefined,
    )
    const [activeLegend, setActiveLegend] = React.useState<string | undefined>(
      undefined,
    )
    const categoryColors = constructCategoryColors(categories, colors)

    const yAxisDomain = getYAxisDomain(autoMinValue, minValue, maxValue)
    const hasOnValueChange = !!onValueChange
    const stacked = type === "stacked" || type === "percent"

    const prevActiveRef = React.useRef<boolean | undefined>(undefined)
    const prevLabelRef = React.useRef<string | undefined>(undefined)

    const getFillContent = ({
      activeDot,
      activeLegend,
      category,
    }: {
      activeDot: ActiveDot | undefined
      activeLegend: string | undefined
      category: string
    }) => {
      const stopOpacity =
        activeDot || (activeLegend && activeLegend !== category)
          ? "opacity-[30%]"
          : ""

      return (
        <pattern
          id="raster"
          patternUnits="userSpaceOnUse"
          width="64"
          height="64"
        >
          <path
            d="M-106 110L22 -18"
            className={cx("stroke-gray-300 dark:stroke-gray-700", stopOpacity)}
          />
          <path
            d="M-98 110L30 -18"
            className={cx("stroke-gray-300 dark:stroke-gray-700", stopOpacity)}
          />
          <path
            d="M-90 110L38 -18"
            className={cx("stroke-gray-300 dark:stroke-gray-700", stopOpacity)}
          />
          <path
            d="M-82 110L46 -18"
            className={cx("stroke-gray-300 dark:stroke-gray-700", stopOpacity)}
          />
          <path
            d="M-74 110L54 -18"
            className={cx("stroke-gray-300 dark:stroke-gray-700", stopOpacity)}
          />
          <path
            d="M-66 110L62 -18"
            className={cx("stroke-gray-300 dark:stroke-gray-700", stopOpacity)}
          />
          <path
            d="M-58 110L70 -18"
            className={cx("stroke-gray-300 dark:stroke-gray-700", stopOpacity)}
          />
          <path
            d="M-50 110L78 -18"
            className={cx("stroke-gray-300 dark:stroke-gray-700", stopOpacity)}
          />
          <path
            d="M-42 110L86 -18"
            className={cx("stroke-gray-300 dark:stroke-gray-700", stopOpacity)}
          />
          <path
            d="M-34 110L94 -18"
            className={cx("stroke-gray-300 dark:stroke-gray-700", stopOpacity)}
          />
          <path
            d="M-26 110L102 -18"
            className={cx("stroke-gray-300 dark:stroke-gray-700", stopOpacity)}
          />
          <path
            d="M-18 110L110 -18"
            className={cx("stroke-gray-300 dark:stroke-gray-700", stopOpacity)}
          />
          <path
            d="M-10 110L118 -18"
            className={cx("stroke-gray-300 dark:stroke-gray-700", stopOpacity)}
          />
          <path
            d="M-2 110L126 -18"
            className={cx("stroke-gray-300 dark:stroke-gray-700", stopOpacity)}
          />
          <path
            d="M6 110L134 -18"
            className={cx("stroke-gray-300 dark:stroke-gray-700", stopOpacity)}
          />
          <path
            d="M14 110L142 -18"
            className={cx("stroke-gray-300 dark:stroke-gray-700", stopOpacity)}
          />
          <path
            d="M22 110L150 -18"
            className={cx("stroke-gray-300 dark:stroke-gray-700", stopOpacity)}
          />
        </pattern>
      )
    }

    function valueToPercent(value: number) {
      return `${(value * 100).toFixed(0)}%`
    }

    function onDotClick(itemData: any, event: React.MouseEvent) {
      event.stopPropagation()

      if (!hasOnValueChange) return
      if (
        (itemData.index === activeDot?.index &&
          itemData.dataKey === activeDot?.dataKey) ||
        (hasOnlyOneValueForKey(data, itemData.dataKey) &&
          activeLegend &&
          activeLegend === itemData.dataKey)
      ) {
        setActiveLegend(undefined)
        setActiveDot(undefined)
        onValueChange?.(null)
      } else {
        setActiveLegend(itemData.dataKey)
        setActiveDot({
          index: itemData.index,
          dataKey: itemData.dataKey,
        })
        onValueChange?.({
          eventType: "dot",
          categoryClicked: itemData.dataKey,
          ...itemData.payload,
        })
      }
    }

    function onCategoryClick(dataKey: string) {
      if (!hasOnValueChange) return
      if (
        (dataKey === activeLegend && !activeDot) ||
        (hasOnlyOneValueForKey(data, dataKey) &&
          activeDot &&
          activeDot.dataKey === dataKey)
      ) {
        setActiveLegend(undefined)
        onValueChange?.(null)
      } else {
        setActiveLegend(dataKey)
        onValueChange?.({
          eventType: "category",
          categoryClicked: dataKey,
        })
      }
      setActiveDot(undefined)
    }

    return (
      <div ref={ref} className={cx("h-80 w-full", className)} {...other}>
        <ResponsiveContainer>
          <RechartsAreaChart
            data={data}
            onClick={
              hasOnValueChange && (activeLegend || activeDot)
                ? () => {
                    setActiveDot(undefined)
                    setActiveLegend(undefined)
                    onValueChange?.(null)
                  }
                : undefined
            }
            margin={{
              bottom: xAxisLabel ? 30 : undefined,
              left: yAxisLabel ? 20 : undefined,
              right: yAxisLabel ? 5 : undefined,
              top: 15,
            }}
            stackOffset={type === "percent" ? "expand" : undefined}
          >
            {showGridLines ? (
              <CartesianGrid
                className={cx("stroke-gray-200 stroke-1 dark:stroke-gray-800")}
                horizontal={true}
                vertical={false}
              />
            ) : null}
            <XAxis
              padding={{ left: paddingValue, right: paddingValue }}
              hide={!showXAxis}
              dataKey={index}
              interval={startEndOnly ? "preserveStartEnd" : intervalType}
              tick={{ transform: "translate(0, 6)" }}
              ticks={
                startEndOnly
                  ? [data[0][index], data[data.length - 1][index]]
                  : undefined
              }
              fill=""
              stroke=""
              className={cx(
                // base
                "text-xs",
                // text fill
                "fill-gray-500 dark:fill-gray-500",
              )}
              tickLine={false}
              axisLine={false}
              minTickGap={tickGap}
            >
              {xAxisLabel && (
                <Label
                  position="insideBottom"
                  offset={-20}
                  className="fill-gray-800 text-sm font-medium dark:fill-gray-200"
                >
                  {xAxisLabel}
                </Label>
              )}
            </XAxis>
            <YAxis
              width={yAxisWidth}
              hide={!showYAxis}
              axisLine={false}
              tickLine={true}
              type="number"
              tickSize={8}
              domain={yAxisDomain as AxisDomain}
              tick={{ transform: "translate(-6, 0)" }}
              fill=""
              stroke=""
              className={cx(
                // base
                "text-xs",
                // text fill
                "fill-gray-500 stroke-gray-800 dark:fill-gray-500 dark:stroke-gray-300",
              )}
              tickFormatter={
                type === "percent" ? valueToPercent : valueFormatter
              }
              allowDecimals={allowDecimals}
            >
              {yAxisLabel && (
                <Label
                  position="insideLeft"
                  style={{ textAnchor: "middle" }}
                  angle={-90}
                  offset={-15}
                  className="fill-gray-800 text-sm font-medium dark:fill-gray-200"
                >
                  {yAxisLabel}
                </Label>
              )}
            </YAxis>
            <Tooltip
              wrapperStyle={{ outline: "none" }}
              isAnimationActive={true}
              animationDuration={100}
              cursor={{ stroke: "#d1d5db", strokeWidth: 1 }}
              offset={20}
              position={{ y: 0 }}
              content={({ active, payload, label }) => {
                const cleanPayload: TooltipProps["payload"] = payload
                  ? payload.map((item: any) => ({
                      category: item.dataKey,
                      value: item.value,
                      index: item.payload[index],
                      color: categoryColors.get(
                        item.dataKey,
                      ) as AvailableChartColorsKeys,
                      type: item.type,
                      payload: item.payload,
                    }))
                  : []

                if (
                  tooltipCallback &&
                  (active !== prevActiveRef.current ||
                    label !== prevLabelRef.current)
                ) {
                  tooltipCallback({ active, payload: cleanPayload, label })
                  prevActiveRef.current = active
                  prevLabelRef.current = label
                }

                return showTooltip && active ? (
                  CustomTooltip ? (
                    <CustomTooltip
                      active={active}
                      payload={cleanPayload}
                      label={label}
                    />
                  ) : (
                    <ChartTooltip
                      active={active}
                      payload={cleanPayload}
                      label={label}
                      valueFormatter={valueFormatter}
                    />
                  )
                ) : null
              }}
            />

            {showLegend ? (
              <RechartsLegend
                verticalAlign="top"
                height={legendHeight}
                content={({ payload }) =>
                  ChartLegend(
                    { payload },
                    categoryColors,
                    setLegendHeight,
                    activeLegend,
                    hasOnValueChange
                      ? (clickedLegendItem: string) =>
                          onCategoryClick(clickedLegendItem)
                      : undefined,
                    enableLegendSlider,
                    legendPosition,
                    yAxisWidth,
                  )
                }
              />
            ) : null}
            {categories.map((category) => {
              return (
                <React.Fragment key={category}>
                  <defs key={category}>
                    {getFillContent({
                      activeDot: activeDot,
                      activeLegend: activeLegend,
                      category: category,
                    })}
                  </defs>
                  <Area
                    className={cx(
                      getColorClassName(
                        categoryColors.get(
                          category,
                        ) as AvailableChartColorsKeys,
                        "stroke",
                      ),
                    )}
                    strokeOpacity={
                      activeDot || (activeLegend && activeLegend !== category)
                        ? 0.3
                        : 1
                    }
                    activeDot={(props: any) => {
                      const {
                        cx: cxCoord,
                        cy: cyCoord,
                        stroke,
                        strokeLinecap,
                        strokeLinejoin,
                        strokeWidth,
                        dataKey,
                      } = props
                      return (
                        <Dot
                          className={cx(
                            "stroke-white dark:stroke-gray-950",
                            onValueChange ? "cursor-pointer" : "",
                            getColorClassName(
                              categoryColors.get(
                                dataKey,
                              ) as AvailableChartColorsKeys,
                              "fill",
                            ),
                          )}
                          cx={cxCoord}
                          cy={cyCoord}
                          r={5}
                          fill=""
                          stroke={stroke}
                          strokeLinecap={strokeLinecap}
                          strokeLinejoin={strokeLinejoin}
                          strokeWidth={strokeWidth}
                          onClick={(_, event) => onDotClick(props, event)}
                        />
                      )
                    }}
                    dot={(props: any) => {
                      const {
                        stroke,
                        strokeLinecap,
                        strokeLinejoin,
                        strokeWidth,
                        cx: cxCoord,
                        cy: cyCoord,
                        dataKey,
                        index,
                      } = props

                      if (
                        (hasOnlyOneValueForKey(data, category) &&
                          !(
                            activeDot ||
                            (activeLegend && activeLegend !== category)
                          )) ||
                        (activeDot?.index === index &&
                          activeDot?.dataKey === category)
                      ) {
                        return (
                          <Dot
                            key={index}
                            cx={cxCoord}
                            cy={cyCoord}
                            r={5}
                            stroke={stroke}
                            fill=""
                            strokeLinecap={strokeLinecap}
                            strokeLinejoin={strokeLinejoin}
                            strokeWidth={strokeWidth}
                            className={cx(
                              "stroke-white dark:stroke-gray-950",
                              onValueChange ? "cursor-pointer" : "",
                              getColorClassName(
                                categoryColors.get(
                                  dataKey,
                                ) as AvailableChartColorsKeys,
                                "fill",
                              ),
                            )}
                          />
                        )
                      }
                      return <React.Fragment key={index}></React.Fragment>
                    }}
                    key={category}
                    name={category}
                    type="linear"
                    dataKey={category}
                    stroke=""
                    strokeWidth={2}
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    isAnimationActive={false}
                    connectNulls={connectNulls}
                    stackId={stacked ? "stack" : undefined}
                    fill="url(#raster)"
                  />
                </React.Fragment>
              )
            })}
            {/* hidden lines to increase clickable target area */}
            {onValueChange
              ? categories.map((category) => (
                  <Line
                    className={cx("cursor-pointer")}
                    strokeOpacity={0}
                    key={category}
                    name={category}
                    type="linear"
                    dataKey={category}
                    stroke="transparent"
                    fill="transparent"
                    legendType="none"
                    tooltipType="none"
                    strokeWidth={12}
                    connectNulls={connectNulls}
                    onClick={(props: any, event) => {
                      event.stopPropagation()
                      const { name } = props
                      onCategoryClick(name)
                    }}
                  />
                ))
              : null}
          </RechartsAreaChart>
        </ResponsiveContainer>
      </div>
    )
  },
)

AreaChart.displayName = "AreaChart"

const data = [
  // array-start
  {
    date: "2010",
    AUM: 341,
  },
  {
    date: "2011",
    AUM: 312,
  },
  {
    date: "2012",
    AUM: 350,
  },
  {
    date: "2013",
    AUM: 381,
  },
  {
    date: "2014",
    AUM: 287,
  },
  {
    date: "2015",
    AUM: 394,
  },
  {
    date: "2016",
    AUM: 437,
  },
  {
    date: "2017",
    AUM: 463,
  },
  {
    date: "2018",
    AUM: 482,
  },
  {
    date: "2019",
    AUM: 501,
  },
  {
    date: "2020",
    AUM: 372,
  },
  {
    date: "2021",
    AUM: 422,
  },
  {
    date: "2022",
    AUM: 443,
  },
  {
    date: "2023",
    AUM: 461,
  },
  // array-end
]

const calculateTotalAUM = (data: any[]) =>
  data.reduce((total, item) => total + item.AUM, 0)

const currencyFormatter = (number: number) =>
  "$" + Intl.NumberFormat("us").format(number).toString() + "M"

export default function Example() {
  const totalAUM = React.useMemo(() => calculateTotalAUM(data), [data])
  return (
    <div className="obfuscate">
      <div className="sm:mx-auto sm:max-w-7xl">
        <h1 className="font-medium text-gray-900 dark:text-gray-50">
          Assets under management
        </h1>
        <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
          With{" "}
          <span className="font-semibold">{currencyFormatter(totalAUM)}</span>{" "}
          million in assets under management as of 31 December 2023, Friends
          Group provides an innovative range client solutions to institutional
          investors.
        </p>
        <AreaChart
          data={data}
          index="date"
          categories={["AUM"]}
          showLegend={false}
          yAxisWidth={56}
          colors={["darkGray"]}
          valueFormatter={currencyFormatter}
          className="mt-10 hidden !h-72 sm:block"
        />
        <AreaChart
          data={data}
          index="date"
          categories={["AUM"]}
          showLegend={false}
          showYAxis={false}
          startEndOnly={true}
          colors={["darkGray"]}
          valueFormatter={currencyFormatter}
          className="mt-6 !h-72 sm:hidden"
        />
      </div>
    </div>
  )
}
```


```example/area-charts-area-chart-09.tsx
"use client"

import { RiArrowDownSFill, RiArrowUpSFill } from "@remixicon/react"

import { AreaChart } from "@/atom/AreaChart"
import { Card } from "@/atom/Card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/atom/Tabs"

const data = [
  //array-start
  {
    date: "Jan 23",
    Revenue: 42340,
  },
  {
    date: "Feb 23",
    Revenue: 50120,
  },
  {
    date: "Mar 23",
    Revenue: 45190,
  },
  {
    date: "Apr 23",
    Revenue: 56420,
  },
  {
    date: "May 23",
    Revenue: 40420,
  },
  {
    date: "Jun 23",
    Revenue: 47010,
  },
  {
    date: "Jul 23",
    Revenue: 47490,
  },
  {
    date: "Aug 23",
    Revenue: 39610,
  },
  {
    date: "Sep 23",
    Revenue: 45860,
  },
  {
    date: "Oct 23",
    Revenue: 50910,
  },
  {
    date: "Nov 23",
    Revenue: 49190,
  },
  {
    date: "Dec 23",
    Revenue: 55190,
  },
  //array-end
]

const summaryChannel = [
  //array-start
  {
    location: "Direct Online-Shops",
    icon: RiArrowUpSFill,
    rank: "Prev. rank: #2",
    color: "bg-blue-500 dark:bg-blue-500",
    type: "Flagship",
    total: "$460.2K",
    share: "37.1%",
    changeType: "positive",
  },
  {
    location: "Wholesale",
    icon: RiArrowDownSFill,
    rank: "Prev. rank: #1",
    color: "bg-cyan-500 dark:bg-cyan-500",
    type: "In-Store",
    total: "$237.3K",
    share: "31.2%",
    changeType: "negative",
  },
  {
    location: "Offline Stores",
    icon: RiArrowUpSFill,
    rank: "Prev. rank: #4",
    color: "bg-sky-500 dark:bg-sky-500",
    type: "In-Store",
    total: "$118.2K",
    share: "12.7%",
    changeType: "positive",
  },
  //array-end
]

const summaryProduct = [
  //array-start
  {
    location: 'OLED Monitor 29"',
    icon: RiArrowUpSFill,
    rank: "Prev. rank: #8",
    color: "bg-blue-500 dark:bg-blue-500",
    type: "Flagship",
    total: "$360.1K",
    share: "9.2%",
    changeType: "positive",
  },
  {
    location: "SuperJet Printer Eco",
    icon: RiArrowDownSFill,
    rank: "Prev. rank: #12",
    color: "bg-cyan-500 dark:bg-cyan-500",
    type: "In-Store",
    total: "$237.3K",
    share: "7.1%",
    changeType: "positive",
  },
  {
    location: "Gaming Laptop EdgeCell",
    icon: RiArrowUpSFill,
    rank: "Prev. rank: #2",
    color: "bg-sky-500 dark:bg-sky-500",
    type: "In-Store",
    total: "$118.2K",
    share: "2.7%",
    changeType: "negative",
  },
  //array-end
]

const tabs = [
  {
    name: "By Channel",
    data: summaryChannel,
  },
  {
    name: "By Product",
    data: summaryProduct,
  },
]

const currencyFormatter = (number: number) =>
  `$${Intl.NumberFormat("us").format(number).toString()}`

export default function Example() {
  return (
    <div className="obfuscate">
      <Card className="sm:mx-auto sm:max-w-xl">
        <h1 className="text-sm text-gray-500 dark:text-gray-500">Revenue</h1>
        <p className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
          $1,112,400
        </p>
        <AreaChart
          data={data}
          index="date"
          categories={["Revenue"]}
          showLegend={false}
          showYAxis={false}
          valueFormatter={currencyFormatter}
          fill="solid"
          className="mt-8 hidden !h-48 sm:block"
        />
        <AreaChart
          data={data}
          index="date"
          categories={["Revenue"]}
          showLegend={false}
          startEndOnly={true}
          showYAxis={false}
          valueFormatter={currencyFormatter}
          fill="solid"
          className="mt-8 !h-48 sm:hidden"
        />

        <Tabs defaultValue={tabs[0].name} className="mt-6">
          <TabsList>
            {tabs.map((tab) => (
              <TabsTrigger key={tab.name} value={tab.name}>
                {tab.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabs.map((tab) => (
            <TabsContent key={tab.name} value={tab.name}>
              <ul
                role="list"
                className="mt-2 divide-y divide-gray-200 dark:divide-gray-800"
              >
                {tab.data.map((item) => (
                  <li
                    key={item.location}
                    className="flex items-center justify-between py-2"
                  >
                    <div>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {item.location}
                      </p>
                      <div className="flex items-center space-x-1">
                        {item.changeType === "positive" ? (
                          <RiArrowUpSFill
                            className="size-5 text-emerald-700 dark:text-emerald-500"
                            aria-hidden="true"
                          />
                        ) : (
                          <RiArrowDownSFill
                            className="size-5 text-red-700 dark:text-red-500"
                            aria-hidden="true"
                          />
                        )}
                        <span className="text-xs/6 text-gray-500 dark:text-gray-500">
                          {item.rank}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {item.share}
                      </p>
                      <span className="text-xs/6 text-gray-500 dark:text-gray-500">
                        {item.total}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </TabsContent>
          ))}
        </Tabs>
      </Card>
    </div>
  )
}
```


```example/area-charts-area-chart-08.tsx
"use client"

import { RiArrowRightSLine } from "@remixicon/react"

import { AreaChart } from "@/atom/AreaChart"
import { Card } from "@/atom/Card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/atom/Tabs"

const dataEurope = [
  //array-start
  {
    date: "Jan 23",
    Sales: 68560,
  },
  {
    date: "Feb 23",
    Sales: 70320,
  },
  {
    date: "Mar 23",
    Sales: 80233,
  },
  {
    date: "Apr 23",
    Sales: 55123,
  },
  {
    date: "May 23",
    Sales: 56000,
  },
  {
    date: "Jun 23",
    Sales: 100000,
  },
  {
    date: "Jul 23",
    Sales: 85390,
  },
  {
    date: "Aug 23",
    Sales: 80100,
  },
  {
    date: "Sep 23",
    Sales: 75090,
  },
  {
    date: "Oct 23",
    Sales: 71080,
  },
  {
    date: "Nov 23",
    Sales: 68041,
  },
  {
    date: "Dec 23",
    Sales: 60143,
  },
  //array-end
]

const dataAsia = [
  //array-start
  {
    date: "Jan 23",
    Sales: 28560,
  },
  {
    date: "Feb 23",
    Sales: 30320,
  },
  {
    date: "Mar 23",
    Sales: 70233,
  },
  {
    date: "Apr 23",
    Sales: 45123,
  },
  {
    date: "May 23",
    Sales: 56000,
  },
  {
    date: "Jun 23",
    Sales: 80600,
  },
  {
    date: "Jul 23",
    Sales: 85390,
  },
  {
    date: "Aug 23",
    Sales: 40100,
  },
  {
    date: "Sep 23",
    Sales: 35090,
  },
  {
    date: "Oct 23",
    Sales: 71080,
  },
  {
    date: "Nov 23",
    Sales: 68041,
  },
  {
    date: "Dec 23",
    Sales: 70143,
  },
  //array-end
]

const dataNorthAmerica = [
  //array-start
  {
    date: "Jan 23",
    Sales: 78560,
  },
  {
    date: "Feb 23",
    Sales: 70320,
  },
  {
    date: "Mar 23",
    Sales: 50233,
  },
  {
    date: "Apr 23",
    Sales: 45123,
  },
  {
    date: "May 23",
    Sales: 46000,
  },
  {
    date: "Jun 23",
    Sales: 50600,
  },
  {
    date: "Jul 23",
    Sales: 65390,
  },
  {
    date: "Aug 23",
    Sales: 70100,
  },
  {
    date: "Sep 23",
    Sales: 85090,
  },
  {
    date: "Oct 23",
    Sales: 81080,
  },
  {
    date: "Nov 23",
    Sales: 98041,
  },
  {
    date: "Dec 23",
    Sales: 90143,
  },
  //array-end
]

const regions = [
  //array-start
  {
    name: "Europe",
    alerts: 2,
    data: dataEurope,
    alertTexts: [
      {
        title: "New customer closed",
        body: "Stone Holding signed $0.5M deal after 6-month-long negotiation...",
        href: "#",
      },
      {
        title: "Contract renewed",
        body: "Eccel Mountain, Inc. renewed $1.2M annual contract...",
        href: "#",
      },
    ],
  },
  {
    name: "Asia",
    alerts: 2,
    data: dataAsia,
    alertTexts: [
      {
        title: "Diamond customer lost",
        body: "Tech, Inc. has made the decision not to proceed with the renewal of $4M annual contract...",
        href: "#",
      },
      {
        title: "Strong competition activity",
        body: "Rose Holding faces heightened competition in the market, leading to the strategic decision...",
        href: "#",
      },
    ],
  },
  {
    name: "North America",
    alerts: 3,
    data: dataNorthAmerica,
    alertTexts: [
      {
        title: "Paid pilot won",
        body: "Storm Company signs $0.3M deal to co-create B2B platform product...",
        href: "#",
      },
      {
        title: "Diamond customer won",
        body: "Neo Products LLC signs $3.4M deal...",
        href: "#",
      },
      {
        title: "Goverment listing won",
        body: "Won $3.4M government contract after a competitive bidding process...",
        href: "#",
      },
    ],
  },
  //array-end
]

const valueFormatter = (number: number) =>
  `$${Intl.NumberFormat("us").format(number).toString()}`

export default function Example() {
  return (
    <div className="obfuscate">
      <Card className="overflow-hidden !p-0 sm:mx-auto sm:max-w-xl">
        <div className="rounded-t-md bg-gray-50 p-6 dark:bg-[#090E1A]">
          <h1 className="font-semibold text-gray-900 dark:text-gray-50">
            Sales alerts
          </h1>
          <p className="text-sm/6 text-gray-500 dark:text-gray-500">
            Check recent activities of won and lost deals in your regions
          </p>
        </div>
        <Tabs defaultValue={regions[0].name}>
          <TabsList className="bg-gray-50 px-6 dark:bg-[#090E1A]">
            {regions.map((region) => (
              <TabsTrigger
                key={region.name}
                value={region.name}
                className="font-medium"
              >
                {region.name}
                <span className="ml-2 hidden rounded-md bg-white px-2 py-1 text-xs/4 font-semibold tabular-nums ring-1 ring-gray-200 ring-inset sm:inline-flex dark:bg-gray-950 dark:ring-gray-800">
                  {region.alerts}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
          {regions.map((region) => (
            <TabsContent key={region.name} value={region.name} className="p-6">
              <AreaChart
                data={region.data}
                index="date"
                categories={["Sales"]}
                valueFormatter={valueFormatter}
                showLegend={false}
                showYAxis={false}
                fill="solid"
                className="mt-2 hidden !h-48 sm:block"
              />
              <AreaChart
                data={region.data}
                index="date"
                categories={["Sales"]}
                valueFormatter={valueFormatter}
                showLegend={false}
                showYAxis={false}
                startEndOnly={true}
                fill="solid"
                className="mt-2 !h-48 sm:hidden"
              />
              <div className="mt-4 space-y-4 sm:space-y-0">
                {region.alertTexts.map((item) => (
                  <div
                    key={item.title}
                    className="relative rounded-md p-0 sm:p-4 sm:hover:bg-gray-50 sm:hover:dark:bg-gray-900"
                  >
                    <div className="flex items-center space-x-0.5">
                      <h2 className="text-sm font-medium text-gray-900 dark:text-gray-50">
                        <a href={item.href} className="focus:outline-none">
                          {/* Extend link to entire card */}
                          <span
                            className="absolute inset-0"
                            aria-hidden="true"
                          />
                          {item.title}
                        </a>
                      </h2>
                      <RiArrowRightSLine
                        className="size-5 text-gray-500 dark:text-gray-500"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </Card>
    </div>
  )
}
```


```example/bar-charts-bar-chart-09.tsx
"use client"

import { RiExternalLinkLine } from "@remixicon/react"

import { AvailableChartColorsKeys } from "@/lib/chartUtils"
import { cx } from "@/lib/utils"

import { BarChart } from "@/atom/BarChart"
import { Card } from "@/atom/Card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/atom/Tabs"

const ratio = [
  //array-start
  {
    date: "Aug 01",
    "Successful requests": 1040,
    Errors: 0,
  },
  {
    date: "Aug 02",
    "Successful requests": 1200,
    Errors: 0,
  },
  {
    date: "Aug 03",
    "Successful requests": 1130,
    Errors: 0,
  },
  {
    date: "Aug 04",
    "Successful requests": 1050,
    Errors: 0,
  },
  {
    date: "Aug 05",
    "Successful requests": 920,
    Errors: 0,
  },
  {
    date: "Aug 06",
    "Successful requests": 870,
    Errors: 0,
  },
  {
    date: "Aug 07",
    "Successful requests": 790,
    Errors: 0,
  },
  {
    date: "Aug 08",
    "Successful requests": 910,
    Errors: 0,
  },
  {
    date: "Aug 09",
    "Successful requests": 951,
    Errors: 0,
  },
  {
    date: "Aug 10",
    "Successful requests": 1232,
    Errors: 0,
  },
  {
    date: "Aug 11",
    "Successful requests": 1230,
    Errors: 0,
  },
  {
    date: "Aug 12",
    "Successful requests": 1289,
    Errors: 0,
  },
  {
    date: "Aug 13",
    "Successful requests": 1002,
    Errors: 0,
  },
  {
    date: "Aug 14",
    "Successful requests": 1034,
    Errors: 0,
  },
  {
    date: "Aug 15",
    "Successful requests": 1140,
    Errors: 0,
  },
  {
    date: "Aug 16",
    "Successful requests": 1280,
    Errors: 0,
  },
  {
    date: "Aug 17",
    "Successful requests": 1345,
    Errors: 0,
  },
  {
    date: "Aug 18",
    "Successful requests": 1432,
    Errors: 0,
  },
  {
    date: "Aug 19",
    "Successful requests": 1321,
    Errors: 0,
  },
  {
    date: "Aug 20",
    "Successful requests": 1230,
    Errors: 0,
  },
  {
    date: "Aug 21",
    "Successful requests": 1020,
    Errors: 0,
  },
  {
    date: "Aug 22",
    "Successful requests": 1040,
    Errors: 0,
  },
  {
    date: "Aug 23",
    "Successful requests": 610,
    Errors: 81,
  },
  {
    date: "Aug 24",
    "Successful requests": 610,
    Errors: 87,
  },
  {
    date: "Aug 25",
    "Successful requests": 610,
    Errors: 92,
  },
  {
    date: "Aug 26",
    "Successful requests": 501,
    Errors: 120,
  },
  {
    date: "Aug 27",
    "Successful requests": 480,
    Errors: 120,
  },
  {
    date: "Aug 28",
    "Successful requests": 471,
    Errors: 120,
  },
  {
    date: "Aug 29",
    "Successful requests": 610,
    Errors: 89,
  },
  {
    date: "Aug 30",
    "Successful requests": 513,
    Errors: 199,
  },
  {
    date: "Aug 31",
    "Successful requests": 500,
    Errors: 56,
  },
  //array-end
]

const projects = [
  {
    date: "Aug 01",
    "Successful requests": 1040,
    "Online shop": 780,
    Blog: 200,
    "Test project": 60,
  },
  {
    date: "Aug 02",
    "Successful requests": 1200,
    "Online shop": 1030,
    Blog: 50,
    "Test project": 120,
  },
  {
    date: "Aug 03",
    "Successful requests": 1130,
    "Online shop": 950,
    Blog: 80,
    "Test project": 100,
  },
  {
    date: "Aug 04",
    "Successful requests": 1050,
    "Online shop": 840,
    Blog: 70,
    "Test project": 140,
  },
  {
    date: "Aug 05",
    "Successful requests": 920,
    "Online shop": 710,
    Blog: 50,
    "Test project": 160,
  },
  {
    date: "Aug 06",
    "Successful requests": 870,
    "Online shop": 660,
    Blog: 100,
    "Test project": 110,
  },
  {
    date: "Aug 07",
    "Successful requests": 790,
    "Online shop": 590,
    Blog: 120,
    "Test project": 80,
  },
  {
    date: "Aug 08",
    "Successful requests": 910,
    "Online shop": 700,
    Blog: 90,
    "Test project": 120,
  },
  {
    date: "Aug 09",
    "Successful requests": 951,
    "Online shop": 741,
    Blog: 90,
    "Test project": 120,
  },
  {
    date: "Aug 10",
    "Successful requests": 1232,
    "Online shop": 1040,
    Blog: 100,
    "Test project": 92,
  },
  {
    date: "Aug 11",
    "Successful requests": 1230,
    "Online shop": 1030,
    Blog: 100,
    "Test project": 100,
  },
  {
    date: "Aug 12",
    "Successful requests": 1289,
    "Online shop": 1099,
    Blog: 100,
    "Test project": 90,
  },
  {
    date: "Aug 13",
    "Successful requests": 1002,
    "Online shop": 842,
    Blog: 70,
    "Test project": 90,
  },
  {
    date: "Aug 14",
    "Successful requests": 1034,
    "Online shop": 884,
    Blog: 80,
    "Test project": 70,
  },
  {
    date: "Aug 15",
    "Successful requests": 1140,
    "Online shop": 970,
    Blog: 100,
    "Test project": 70,
  },
  {
    date: "Aug 16",
    "Successful requests": 1280,
    "Online shop": 1120,
    Blog: 90,
    "Test project": 70,
  },
  {
    date: "Aug 17",
    "Successful requests": 1345,
    "Online shop": 1185,
    Blog: 90,
    "Test project": 55,
  },
  {
    date: "Aug 18",
    "Successful requests": 1432,
    "Online shop": 1272,
    Blog: 90,
    "Test project": 55,
  },
  {
    date: "Aug 19",
    "Successful requests": 1321,
    "Online shop": 1161,
    Blog: 90,
    "Test project": 55,
  },
  {
    date: "Aug 20",
    "Successful requests": 1230,
    "Online shop": 1070,
    Blog: 100,
    "Test project": 60,
  },
  {
    date: "Aug 21",
    "Successful requests": 1020,
    "Online shop": 1090,
    Blog: 90,
    "Test project": 60,
  },
  {
    date: "Aug 22",
    "Successful requests": 1040,
    "Online shop": 510,
    Blog: 100,
    "Test project": 430,
  },
  {
    date: "Aug 23",
    "Successful requests": 610,
    "Online shop": 510,
    Blog: 100,
    "Test project": 430,
  },
  {
    date: "Aug 24",
    "Successful requests": 610,
    "Online shop": 510,
    Blog: 100,
    "Test project": 430,
  },
  {
    date: "Aug 25",
    "Successful requests": 610,
    "Online shop": 381,
    Blog: 100,
    "Test project": 129,
  },
  {
    date: "Aug 26",
    "Successful requests": 501,
    "Online shop": 360,
    Blog: 100,
    "Test project": 120,
  },
  {
    date: "Aug 27",
    "Successful requests": 480,
    "Online shop": 351,
    Blog: 100,
    "Test project": 120,
  },
  {
    date: "Aug 28",
    "Successful requests": 471,
    "Online shop": 510,
    Blog: 100,
    "Test project": 0,
  },
  {
    date: "Aug 29",
    "Successful requests": 610,
    "Online shop": 414,
    Blog: 100,
    "Test project": 0,
  },
  {
    date: "Aug 30",
    "Successful requests": 513,
    "Online shop": 444,
    Blog: 100,
    "Test project": 0,
  },
  {
    date: "Aug 31",
    "Successful requests": 500,
    "Online shop": 510,
    Blog: 100,
    "Test project": 0,
  },
]

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`

const tabs = [
  {
    name: "Ratio",
    data: ratio,
    categories: ["Successful requests", "Errors"],
    colors: ["blue", "red"],
    summary: [
      {
        name: "Successful requests",
        total: 23450,
        color: "bg-blue-500 dark:bg-blue-500",
      },
      {
        name: "Errors",
        total: 1397,
        color: "bg-red-500 dark:bg-red-500",
      },
    ],
  },
  {
    name: "Projects",
    data: projects,
    categories: ["Online shop", "Blog", "Test project"],
    colors: ["blue", "cyan", "violet"],
    summary: [
      {
        name: "Online shop",
        total: 23450,
        color: "bg-blue-500 dark:bg-blue-500",
      },
      {
        name: "Blog",
        total: 1397,
        color: "bg-cyan-500 dark:bg-cyan-500",
      },
      {
        name: "Test project",
        total: 1397,
        color: "bg-violet-500 dark:bg-violet-500",
      },
    ],
  },
]

export default function Example() {
  return (
    <Card className="!p-0">
      <div className="p-6">
        <h3 className="font-medium text-gray-900 dark:text-gray-50">
          Requests
        </h3>
        <p className="text-sm/6 text-gray-500 dark:text-gray-500">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt.{" "}
          <a
            href="#"
            className="inline-flex items-center gap-1 text-sm text-blue-500 dark:text-blue-500"
          >
            Learn more
            <RiExternalLinkLine className="size-4" aria-hidden={true} />
          </a>
        </p>
      </div>
      <div className="border-t border-gray-200 p-6 dark:border-gray-900">
        <Tabs defaultValue={tabs[0].name}>
          <div className="md:flex md:items-center md:justify-between">
            <TabsList variant="solid" className="w-full rounded-md md:w-60">
              {tabs.map((tab) => (
                <TabsTrigger key={tab.name} value={tab.name} className="w-full">
                  {tab.name}
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="hidden md:flex md:items-center md:space-x-2">
              <span
                className="shrink-0 animate-pulse rounded-full bg-emerald-500/30 p-1"
                aria-hidden={true}
              >
                <span className="block size-2 rounded-full bg-emerald-500 dark:bg-emerald-500" />
              </span>
              <p className="mt-4 text-sm text-gray-500 md:mt-0 dark:text-gray-500">
                Updated just now
              </p>
            </div>
          </div>
          {tabs.map((tab) => (
            <TabsContent key={tab.name} value={tab.name}>
              <ul role="list" className="mt-6 flex flex-wrap gap-x-20 gap-y-10">
                {tab.summary.map((item) => (
                  <li key={item.name}>
                    <div className="flex items-center space-x-2">
                      <span
                        className={cx(item.color, "size-3 shrink-0 rounded-sm")}
                        aria-hidden={true}
                      />
                      <p className="font-semibold text-gray-900 dark:text-gray-50">
                        {valueFormatter(item.total)}
                      </p>
                    </div>
                    <p className="text-sm whitespace-nowrap text-gray-500 dark:text-gray-500">
                      {item.name}
                    </p>
                  </li>
                ))}
              </ul>
              <BarChart
                data={tab.data}
                index="date"
                categories={tab.categories}
                colors={tab.colors as AvailableChartColorsKeys[]}
                type="stacked"
                showLegend={false}
                yAxisWidth={45}
                valueFormatter={valueFormatter}
                className="mt-10 hidden !h-72 md:block"
              />
              <BarChart
                data={tab.data}
                index="date"
                categories={tab.categories}
                colors={tab.colors as AvailableChartColorsKeys[]}
                type="stacked"
                showLegend={false}
                showYAxis={false}
                valueFormatter={valueFormatter}
                className="mt-6 !h-72 md:hidden"
              />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </Card>
  )
}
```


```example/bar-charts-bar-chart-08.tsx
"use client"

import { RiExternalLinkLine } from "@remixicon/react"

import { cx } from "@/lib/utils"

import { BarChart } from "@/atom/BarChart"
import { Card } from "@/atom/Card"

const data = [
  //array-start
  {
    date: "Aug 01",
    "Successful requests": 1040,
    Errors: 0,
  },
  {
    date: "Aug 02",
    "Successful requests": 1200,
    Errors: 0,
  },
  {
    date: "Aug 03",
    "Successful requests": 1130,
    Errors: 0,
  },
  {
    date: "Aug 04",
    "Successful requests": 1050,
    Errors: 0,
  },
  {
    date: "Aug 05",
    "Successful requests": 920,
    Errors: 0,
  },
  {
    date: "Aug 06",
    "Successful requests": 870,
    Errors: 0,
  },
  {
    date: "Aug 07",
    "Successful requests": 790,
    Errors: 0,
  },
  {
    date: "Aug 08",
    "Successful requests": 910,
    Errors: 0,
  },
  {
    date: "Aug 09",
    "Successful requests": 951,
    Errors: 0,
  },
  {
    date: "Aug 10",
    "Successful requests": 1232,
    Errors: 0,
  },
  {
    date: "Aug 11",
    "Successful requests": 1230,
    Errors: 0,
  },
  {
    date: "Aug 12",
    "Successful requests": 1289,
    Errors: 0,
  },
  {
    date: "Aug 13",
    "Successful requests": 1002,
    Errors: 0,
  },
  {
    date: "Aug 14",
    "Successful requests": 1034,
    Errors: 0,
  },
  {
    date: "Aug 15",
    "Successful requests": 1140,
    Errors: 0,
  },
  {
    date: "Aug 16",
    "Successful requests": 1280,
    Errors: 0,
  },
  {
    date: "Aug 17",
    "Successful requests": 1345,
    Errors: 0,
  },
  {
    date: "Aug 18",
    "Successful requests": 1432,
    Errors: 0,
  },
  {
    date: "Aug 19",
    "Successful requests": 1321,
    Errors: 0,
  },
  {
    date: "Aug 20",
    "Successful requests": 1230,
    Errors: 0,
  },
  {
    date: "Aug 21",
    "Successful requests": 1020,
    Errors: 0,
  },
  {
    date: "Aug 22",
    "Successful requests": 1040,
    Errors: 0,
  },
  {
    date: "Aug 23",
    "Successful requests": 610,
    Errors: 81,
  },
  {
    date: "Aug 24",
    "Successful requests": 610,
    Errors: 87,
  },
  {
    date: "Aug 25",
    "Successful requests": 610,
    Errors: 92,
  },
  {
    date: "Aug 26",
    "Successful requests": 501,
    Errors: 120,
  },
  {
    date: "Aug 27",
    "Successful requests": 480,
    Errors: 120,
  },
  {
    date: "Aug 28",
    "Successful requests": 471,
    Errors: 120,
  },
  {
    date: "Aug 29",
    "Successful requests": 610,
    Errors: 89,
  },
  {
    date: "Aug 30",
    "Successful requests": 513,
    Errors: 199,
  },
  {
    date: "Aug 31",
    "Successful requests": 500,
    Errors: 56,
  },
  //array-end
]

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`

const summary = [
  //array-start
  {
    name: "Successful requests",
    total: 23450,
    color: "bg-blue-500 dark:bg-blue-500",
  },
  {
    name: "Errors",
    total: 1397,
    color: "bg-red-500 dark:bg-red-500",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <Card className="!p-0">
        <div className="p-6">
          <h3 className="font-medium text-gray-900 dark:text-gray-50">
            Requests
          </h3>
          <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt.{" "}
            <a
              href="#"
              className="inline-flex items-center gap-1 text-sm text-blue-500 dark:text-blue-500"
            >
              Learn more
              <RiExternalLinkLine className="size-4" aria-hidden={true} />
            </a>
          </p>
        </div>
        <div className="border-t border-gray-200 p-6 dark:border-gray-900">
          <ul role="list" className="flex flex-wrap gap-x-20 gap-y-10">
            {summary.map((item) => (
              <li key={item.name}>
                <div className="flex items-center space-x-2">
                  <span
                    className={cx(item.color, "size-3 shrink-0 rounded-sm")}
                    aria-hidden={true}
                  />
                  <p className="font-semibold text-gray-900 dark:text-gray-50">
                    {valueFormatter(item.total)}
                  </p>
                </div>
                <p className="text-sm whitespace-nowrap text-gray-500 dark:text-gray-500">
                  {item.name}
                </p>
              </li>
            ))}
          </ul>
          <BarChart
            data={data}
            index="date"
            categories={["Successful requests", "Errors"]}
            colors={["blue", "red"]}
            type="stacked"
            showLegend={false}
            yAxisWidth={45}
            valueFormatter={valueFormatter}
            className="mt-10 hidden !h-72 md:block"
          />
          <BarChart
            data={data}
            index="date"
            categories={["Successful requests", "Errors"]}
            colors={["blue", "red"]}
            type="stacked"
            showLegend={false}
            showYAxis={false}
            valueFormatter={valueFormatter}
            className="mt-6 !h-72 md:hidden"
          />
        </div>
      </Card>
    </div>
  )
}
```


```example/bar-charts-bar-chart-01.tsx
"use client"

import React from "react"

import { BarChart } from "@/atom/BarChart"
import { Card } from "@/atom/Card"
import { Divider } from "@/atom/Divider"
import { Label } from "@/atom/Label"
import { Switch } from "@/atom/Switch"

const data = [
  //array-start
  {
    date: "Jan 23",
    "This Year": 68560,
    "Last Year": 28560,
  },
  {
    date: "Feb 23",
    "This Year": 70320,
    "Last Year": 30320,
  },
  {
    date: "Mar 23",
    "This Year": 80233,
    "Last Year": 70233,
  },
  {
    date: "Apr 23",
    "This Year": 55123,
    "Last Year": 45123,
  },
  {
    date: "May 23",
    "This Year": 56000,
    "Last Year": 80600,
  },
  {
    date: "Jun 23",
    "This Year": 100000,
    "Last Year": 85390,
  },
  {
    date: "Jul 23",
    "This Year": 85390,
    "Last Year": 45340,
  },
  {
    date: "Aug 23",
    "This Year": 80100,
    "Last Year": 70120,
  },
  {
    date: "Sep 23",
    "This Year": 75090,
    "Last Year": 69450,
  },
  {
    date: "Oct 23",
    "This Year": 71080,
    "Last Year": 63345,
  },
  {
    date: "Nov 23",
    "This Year": 61210,
    "Last Year": 100330,
  },
  {
    date: "Dec 23",
    "This Year": 60143,
    "Last Year": 45321,
  },
  //array-end
]

function valueFormatter(number: number) {
  const formatter = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
    notation: "compact",
    compactDisplay: "short",
    style: "currency",
    currency: "USD",
  })

  return formatter.format(number)
}

export default function Example() {
  const [showComparison, setShowComparison] = React.useState(false)
  return (
    <div className="obfuscate">
      <Card className="sm:mx-auto sm:max-w-2xl">
        <h3 className="font-semibold text-gray-900 dark:text-gray-50">
          Sales overview
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-500">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
        </p>
        <BarChart
          data={data}
          index="date"
          categories={
            showComparison ? ["Last Year", "This Year"] : ["This Year"]
          }
          colors={showComparison ? ["cyan", "blue"] : ["blue"]}
          valueFormatter={valueFormatter}
          yAxisWidth={50}
          className="mt-6 hidden h-60 sm:block"
        />
        <BarChart
          data={data}
          index="date"
          categories={
            showComparison ? ["Last Year", "This Year"] : ["This Year"]
          }
          colors={showComparison ? ["cyan", "blue"] : ["blue"]}
          valueFormatter={valueFormatter}
          showYAxis={false}
          className="mt-4 !h-56 sm:hidden"
        />
        <Divider />
        <div className="mb-2 flex items-center space-x-3">
          <Switch
            id="comparison"
            checked={showComparison}
            onCheckedChange={setShowComparison}
          />
          <Label htmlFor="comparison">Show same period last year</Label>
        </div>
      </Card>
    </div>
  )
}
```


```example/bar-charts-bar-chart-03.tsx
"use client"

import { BarChart } from "@/atom/BarChart"
import { Card } from "@/atom/Card"

const data = [
  //array-start
  {
    date: "Jan 23",
    "This Year": 68560,
    "Last Year": 28560,
  },
  {
    date: "Feb 23",
    "This Year": 70320,
    "Last Year": 30320,
  },
  {
    date: "Mar 23",
    "This Year": 80233,
    "Last Year": 70233,
  },
  {
    date: "Apr 23",
    "This Year": 55123,
    "Last Year": 45123,
  },
  {
    date: "May 23",
    "This Year": 56000,
    "Last Year": 80600,
  },
  {
    date: "Jun 23",
    "This Year": 100000,
    "Last Year": 85390,
  },
  {
    date: "Jul 23",
    "This Year": 85390,
    "Last Year": 45340,
  },
  {
    date: "Aug 23",
    "This Year": 80100,
    "Last Year": 70120,
  },
  {
    date: "Sep 23",
    "This Year": 75090,
    "Last Year": 69450,
  },
  {
    date: "Oct 23",
    "This Year": 71080,
    "Last Year": 63345,
  },
  {
    date: "Nov 23",
    "This Year": 61210,
    "Last Year": 100330,
  },
  {
    date: "Dec 23",
    "This Year": 60143,
    "Last Year": 45321,
  },
  //array-end
]

function valueFormatter(number: number) {
  const formatter = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
    notation: "compact",
    compactDisplay: "short",
    style: "currency",
    currency: "USD",
  })
  return formatter.format(number)
}

export default function Example() {
  return (
    <div className="obfuscate">
      <Card className="sm:mx-auto sm:max-w-2xl">
        <h3 className="font-semibold text-gray-900 dark:text-gray-50">
          Sales overview
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-500">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
        </p>
        <ul role="list" className="mt-6 flex gap-10">
          <li>
            <div className="flex items-center space-x-1.5">
              <span
                className="size-2.5 rounded-sm bg-blue-500 dark:bg-blue-500"
                aria-hidden={true}
              />
              <p className="text-xs text-gray-500 dark:text-gray-500">
                This year
              </p>
            </div>
            <div className="flex items-center space-x-1.5">
              <p className="mt-0.5 text-lg font-semibold text-gray-900 dark:text-gray-50">
                $0.8M
              </p>
              <span className="rounded bg-gray-100 px-1.5 py-0.5 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                +16%
              </span>
            </div>
          </li>
          <li>
            <div className="flex items-center space-x-1.5">
              <span
                className="size-2.5 rounded-sm bg-cyan-500 dark:bg-cyan-500"
                aria-hidden={true}
              />
              <p className="text-xs text-gray-500 dark:text-gray-500">
                Last year
              </p>
            </div>
            <p className="mt-0.5 text-lg font-semibold text-gray-900 dark:text-gray-50">
              $0.7M
            </p>
          </li>
        </ul>
        <BarChart
          data={data}
          index="date"
          categories={["Last Year", "This Year"]}
          colors={["cyan", "blue"]}
          showLegend={false}
          valueFormatter={valueFormatter}
          yAxisWidth={50}
          className="mt-8 hidden !h-56 sm:block"
        />
        <BarChart
          data={data}
          index="date"
          categories={["Last Year", "This Year"]}
          colors={["cyan", "blue"]}
          showLegend={false}
          valueFormatter={valueFormatter}
          showYAxis={false}
          className="mt-8 !h-48 sm:hidden"
        />
      </Card>
    </div>
  )
}
```


```example/bar-charts-bar-chart-02.tsx
"use client"

import { cx } from "@/lib/utils"

import { BarChart } from "@/atom/BarChart"
import { Card } from "@/atom/Card"

const tabs = [
  //array-start
  { name: "Europe", value: "$1.9M", color: "bg-blue-500 dark:bg-blue-500" },
  { name: "Asia", value: "$4.1M", color: "bg-cyan-500 dark:bg-cyan-500" },
  {
    name: "North America",
    value: "$10.1M",
    color: "bg-indigo-500 dark:bg-indigo-500",
  },
  //array-end
]

const data = [
  //array-start
  {
    date: "Jan 23",
    Europe: 68560,
    Asia: 28560,
    "North America": 34940,
  },
  {
    date: "Feb 23",
    Europe: 70320,
    Asia: 30320,
    "North America": 44940,
  },
  {
    date: "Mar 23",
    Europe: 80233,
    Asia: 70233,
    "North America": 94560,
  },
  {
    date: "Apr 23",
    Europe: 55123,
    Asia: 45123,
    "North America": 84320,
  },
  {
    date: "May 23",
    Europe: 56000,
    Asia: 80600,
    "North America": 71120,
  },
  {
    date: "Jun 23",
    Europe: 100000,
    Asia: 85390,
    "North America": 61340,
  },
  {
    date: "Jul 23",
    Europe: 85390,
    Asia: 45340,
    "North America": 71260,
  },
  {
    date: "Aug 23",
    Europe: 80100,
    Asia: 70120,
    "North America": 61210,
  },
  {
    date: "Sep 23",
    Europe: 75090,
    Asia: 69450,
    "North America": 61110,
  },
  {
    date: "Oct 23",
    Europe: 71080,
    Asia: 63345,
    "North America": 41430,
  },
  {
    date: "Nov 23",
    Europe: 68041,
    Asia: 61210,
    "North America": 100330,
  },
  {
    date: "Dec 23",
    Europe: 60143,
    Asia: 45321,
    "North America": 80780,
  },
  //array-end
]

function valueFormatter(number: number) {
  const formatter = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
    notation: "compact",
    compactDisplay: "short",
    style: "currency",
    currency: "USD",
  })

  return formatter.format(number)
}

export default function Example() {
  return (
    <div className="obfuscate">
      <Card className="sm:mx-auto sm:max-w-2xl">
        <h3 className="font-semibold text-gray-900 dark:text-gray-50">
          Sales breakdown by regions
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-500">
          Check sales of top 3 regions over time
        </p>
        <ul
          role="list"
          className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3"
        >
          {tabs.map((tab) => (
            <li
              key={tab.name}
              className="rounded-md border border-gray-200 px-3 py-2 text-left dark:border-gray-800"
            >
              <div className="flex items-center space-x-1.5">
                <span
                  className={cx(tab.color, "size-2.5 rounded-sm")}
                  aria-hidden={true}
                />
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  {tab.name}
                </p>
              </div>
              <p className="mt-0.5 font-semibold text-gray-900 dark:text-gray-50">
                {tab.value}
              </p>
            </li>
          ))}
        </ul>
        <BarChart
          data={data}
          index="date"
          categories={["Europe", "Asia", "North America"]}
          colors={["blue", "cyan", "indigo"]}
          showLegend={false}
          valueFormatter={valueFormatter}
          yAxisWidth={50}
          type="stacked"
          className="mt-6 hidden !h-56 sm:block"
        />
        <BarChart
          data={data}
          index="date"
          categories={["Europe", "Asia", "North America"]}
          colors={["blue", "cyan", "indigo"]}
          showLegend={false}
          valueFormatter={valueFormatter}
          showYAxis={false}
          type="stacked"
          className="mt-6 !h-48 sm:hidden"
        />
      </Card>
    </div>
  )
}
```


```example/bar-charts-bar-chart-12.tsx
"use client"

import { chartColors } from "@/lib/chartUtils"
import { cx } from "@/lib/utils"

import { BarChart, TooltipProps } from "@/atom/BarChart"

// Add this custom colors to your chartColors definition (utils.ts)

// lightEmerald: {
//   bg: "bg-emerald-300/50 dark:bg-emerald-800/50",
//   stroke: "stroke-emerald-300/50 dark:stroke-emerald-800/50",
//   fill: "fill-emerald-300/50 dark:fill-emerald-800/50",
//   text: "text-emerald-300/50 dark:text-emerald-800/50",
// },

const data = [
  {
    date: "Jan 24",
    Addressed: 8,
    Unrealized: 12,
  },
  {
    date: "Feb 24",
    Addressed: 9,
    Unrealized: 12,
  },
  {
    date: "Mar 24",
    Addressed: 6,
    Unrealized: 12,
  },
  {
    date: "Apr 24",
    Addressed: 5,
    Unrealized: 12,
  },
  {
    date: "May 24",
    Addressed: 12,
    Unrealized: 12,
  },
  {
    date: "Jun 24",
    Addressed: 9,
    Unrealized: 12,
  },
  {
    date: "Jul 24",
    Addressed: 3,
    Unrealized: 12,
  },
  {
    date: "Aug 24",
    Addressed: 7,
    Unrealized: 12,
  },
]

export const CustomTooltip = ({ payload, active }: TooltipProps) => {
  const PEER_AVERAGE = 6.5
  if (!active || !payload?.length) return null

  const firstValue = payload[0]?.value

  if (typeof firstValue !== "number" || isNaN(firstValue) || firstValue === 0)
    return null

  const percentageDiff = ((firstValue - PEER_AVERAGE) / PEER_AVERAGE) * 100
  const formattedDiff = `${percentageDiff > 0 ? "+" : ""}${percentageDiff.toFixed(1)}%`
  const cappedValue = Math.min(Math.max(percentageDiff, -100), 100)

  return (
    <div className="w-56 rounded-md border border-gray-200 bg-white text-sm shadow-md dark:border-gray-800 dark:bg-gray-950">
      <ul role="list" className="grid grid-cols-2 gap-x-4 p-2">
        {payload.map((category, index) => (
          <li key={index} className="flex space-x-2.5">
            <span
              className={cx(chartColors[category.color].bg, "w-1 rounded")}
              aria-hidden="true"
            />
            <div className="space-y-0.5">
              <p className="text-xs text-gray-500 dark:text-gray-500">
                {category.category}
              </p>
              <p className="font-medium text-gray-900 dark:text-gray-50">
                {category.value}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <div className="border-t border-gray-200 p-2 dark:border-gray-800">
        <div className="relative mt-0.5 h-1.5 w-full rounded-full bg-gray-200 dark:bg-gray-800">
          <span className="absolute top-1/2 left-1/2 z-30 h-2.5 w-0.5 -translate-y-1/2 rounded-full bg-gray-500 dark:bg-gray-500" />
          {percentageDiff >= 0 ? (
            <span className="absolute top-1/2 left-1/2 z-10 h-1.5 w-1/2 -translate-y-1/2">
              <span
                style={{
                  width: `${cappedValue}%`,
                  transition: "all duration-300",
                }}
                className="absolute h-1.5 rounded-r-full bg-gradient-to-r from-gray-400 to-gray-300 dark:from-gray-400 dark:to-gray-500"
              />
            </span>
          ) : (
            <span className="absolute top-1/2 right-1/2 z-10 h-1.5 w-1/2 -translate-y-1/2">
              <span
                style={{
                  width: `${Math.abs(cappedValue)}%`,
                  transition: "all duration-300",
                }}
                className="absolute right-0 h-1.5 rounded-l-full bg-gradient-to-l from-gray-400 to-gray-300 dark:from-gray-400 dark:to-gray-500"
              />
            </span>
          )}
        </div>
        <div className="mt-1 flex items-center justify-between">
          <div className="flex items-center">
            <span
              className="mr-1 h-0.5 w-2.5 rounded-full bg-gray-500 dark:bg-gray-500"
              aria-hidden="true"
            />
            <span className="text-xs text-gray-500 dark:text-gray-500">
              Peer avg.
            </span>
          </div>
          <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
            {formattedDiff}
          </span>
        </div>
      </div>
    </div>
  )
}

export default function Example() {
  return (
    <div className="flex flex-col justify-between">
      <div>
        <dt className="text-sm font-semibold text-gray-900 dark:text-gray-50">
          ESG impact
        </dt>
        <dd className="mt-0.5 text-sm/6 text-gray-500 dark:text-gray-500">
          Evaluation of addressed ESG criteria in biddings over time
        </dd>
      </div>
      <BarChart
        data={data}
        index="date"
        categories={["Addressed", "Unrealized"]}
        colors={["emerald", "lightEmerald"]}
        customTooltip={CustomTooltip}
        type="percent"
        yAxisWidth={55}
        yAxisLabel="% of criteria addressed"
        barCategoryGap="30%"
        className="mt-4 hidden h-60 md:block"
      />
      <BarChart
        data={data}
        index="date"
        categories={["Addressed", "Unrealized"]}
        colors={["emerald", "lightEmerald"]}
        customTooltip={CustomTooltip}
        showYAxis={false}
        type="percent"
        barCategoryGap="30%"
        className="mt-4 h-60 md:hidden"
      />
    </div>
  )
}
```


```example/bar-charts-bar-chart-06.tsx
"use client"

import React from "react"

import { BarChart } from "@/atom/BarChart"
import { RadioCardGroup, RadioCardItem } from "@/atom/RadioCardGroup"

const tabs = [
  { name: "Europe", value: "$0.7M" },
  { name: "Asia", value: "$0.6M" },
  { name: "North America", value: "$0.7M" },
]

const data = [
  {
    date: "Jan 22",
    Europe: 48560,
    Asia: 38560,
    "North America": 34940,
  },
  {
    date: "Feb 22",
    Europe: 60320,
    Asia: 30320,
    "North America": 34940,
  },
  {
    date: "Mar 22",
    Europe: 75233,
    Asia: 65233,
    "North America": 84560,
  },
  {
    date: "Apr 22",
    Europe: 51123,
    Asia: 39123,
    "North America": 74320,
  },
  {
    date: "May 22",
    Europe: 51000,
    Asia: 72600,
    "North America": 63120,
  },
  {
    date: "Jun 22",
    Europe: 90450,
    Asia: 81390,
    "North America": 51340,
  },
  {
    date: "Jul 22",
    Europe: 79390,
    Asia: 41340,
    "North America": 61260,
  },
  {
    date: "Aug 22",
    Europe: 74100,
    Asia: 63120,
    "North America": 51210,
  },
  {
    date: "Sep 22",
    Europe: 71090,
    Asia: 59450,
    "North America": 51110,
  },
  {
    date: "Oct 22",
    Europe: 71080,
    Asia: 63345,
    "North America": 41430,
  },
  {
    date: "Nov 22",
    Europe: 63041,
    Asia: 50210,
    "North America": 90330,
  },
  {
    date: "Dec 22",
    Europe: 51143,
    Asia: 41321,
    "North America": 69780,
  },
  {
    date: "Jan 23",
    Europe: 68560,
    Asia: 28560,
    "North America": 34940,
  },
  {
    date: "Feb 23",
    Europe: 70320,
    Asia: 30320,
    "North America": 44940,
  },
  {
    date: "Mar 23",
    Europe: 80233,
    Asia: 70233,
    "North America": 94560,
  },
  {
    date: "Apr 23",
    Europe: 55123,
    Asia: 45123,
    "North America": 84320,
  },
  {
    date: "May 23",
    Europe: 56000,
    Asia: 80600,
    "North America": 71120,
  },
  {
    date: "Jun 23",
    Europe: 100000,
    Asia: 85390,
    "North America": 61340,
  },
  {
    date: "Jul 23",
    Europe: 85390,
    Asia: 45340,
    "North America": 71260,
  },
  {
    date: "Aug 23",
    Europe: 80100,
    Asia: 70120,
    "North America": 61210,
  },
  {
    date: "Sep 23",
    Europe: 75090,
    Asia: 69450,
    "North America": 61110,
  },
  {
    date: "Oct 23",
    Europe: 71080,
    Asia: 63345,
    "North America": 41430,
  },
  {
    date: "Nov 23",
    Europe: 68041,
    Asia: 61210,
    "North America": 100330,
  },
  {
    date: "Dec 23",
    Europe: 60143,
    Asia: 45321,
    "North America": 80780,
  },
]

function valueFormatter(number: number) {
  const formatter = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
    notation: "compact",
    compactDisplay: "short",
    style: "currency",
    currency: "USD",
  })

  return formatter.format(number)
}

type Region = keyof Omit<(typeof data)[0], "date">

export default function Example() {
  const [selectedRegion, setSelectedRegion] = React.useState<Region>("Europe")
  const formattedData = data.map((item) => {
    return {
      date: item.date,
      Sales: item[selectedRegion],
    }
  })

  return (
    <div className="obfuscate">
      <div className="sm:mx-auto sm:max-w-3xl">
        <h3 className="font-semibold text-gray-900 dark:text-gray-50">
          Sales breakdown by regions
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-500">
          Check sales of top 3 regions
        </p>
        <RadioCardGroup
          name="Region"
          value={selectedRegion}
          onValueChange={(value) => setSelectedRegion(value as Region)}
          className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3"
        >
          {tabs.map((tab) => (
            <RadioCardItem key={tab.name} value={tab.name}>
              <h3 className="text-tremor-label text-tremor-content dark:text-dark-tremor-content">
                {tab.name}
              </h3>
              <p className="text-tremor-title text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
                {tab.value}
              </p>
            </RadioCardItem>
          ))}
        </RadioCardGroup>
        <BarChart
          data={formattedData}
          index="date"
          categories={["Sales"]}
          showLegend={false}
          valueFormatter={valueFormatter}
          yAxisWidth={50}
          className="mt-10 hidden !h-72 sm:block"
        />
        <BarChart
          data={formattedData}
          index="date"
          categories={["Sales"]}
          showLegend={false}
          valueFormatter={valueFormatter}
          showYAxis={false}
          startEndOnly={true}
          className="mt-6 !h-56 sm:hidden"
        />
      </div>
    </div>
  )
}
```


```example/bar-charts-bar-chart-07.tsx
"use client"

// Requires third-pary library 'react-countup' for counting animation
// npm install react-countup
import React from "react"
import CountUp from "react-countup"

import { BarChart } from "@/atom/BarChart"

const valueFormatter = (number: number) => {
  return Intl.NumberFormat("us").format(number).toString() + "bpm"
}

type DataPoint = {
  date: string
  Running: number
  Cycling: number
}

const data: DataPoint[] = [
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
    Running: 124,
    Cycling: 129,
  },
  {
    date: "Nov 23",
    Running: 149,
    Cycling: 101,
  },
  {
    date: "Dec 23",
    Running: 129,
    Cycling: 109,
  },
  //array-end
]

const categories: (keyof DataPoint)[] = ["Running", "Cycling"]

const initialAverageValue =
  data.reduce((sum, dataPoint) => {
    categories.forEach((category) => {
      sum += dataPoint[category] as number
    })
    return sum
  }, 0) /
  (data.length * categories.length)

interface ValueChangeHandler {
  eventType: "bar" | "category"
  categoryClicked?: keyof DataPoint
}

export default function Example() {
  const [values, setValues] = React.useState<{ start: number; end: number }>({
    start: 0,
    end: initialAverageValue,
  })

  function onValueChangeHandler(value: ValueChangeHandler) {
    if (!value || !value.categoryClicked) {
      return
    }
    const category = value.categoryClicked

    switch (value.eventType) {
      case "bar":
        setValues((prev) => ({
          start: prev.end,
          end: data[0][category] as number,
        }))
        break
      case "category":
        const averageCategoryValue =
          data.reduce(
            (sum, dataPoint) => sum + (dataPoint[category] as number),
            0,
          ) / data.length

        setValues((prev) => ({
          start: prev.end,
          end: averageCategoryValue,
        }))
        break
      default:
        setValues((prev) => ({
          start: prev.end,
          end: initialAverageValue,
        }))
        break
    }
  }

  return (
    <div className="obfuscate">
      <h3 className="text-sm text-gray-500 dark:text-gray-500">Average BPM</h3>
      <p className="text-3xl font-bold text-gray-900 dark:text-gray-50">
        <CountUp start={values.start} end={values.end} duration={0.6} />
      </p>
      <BarChart
        className="mt-6 hidden !h-80 sm:block"
        data={data}
        index="date"
        categories={categories}
        colors={["blue", "indigo"]}
        valueFormatter={valueFormatter}
        yAxisWidth={60}
        onValueChange={(value) =>
          onValueChangeHandler(value as ValueChangeHandler)
        }
      />
      <BarChart
        className="mt-6 !h-72 sm:hidden"
        data={data}
        index="date"
        categories={categories}
        colors={["blue", "indigo"]}
        valueFormatter={valueFormatter}
        showYAxis={false}
        onValueChange={(value) =>
          onValueChangeHandler(value as ValueChangeHandler)
        }
      />
    </div>
  )
}
```


```example/bar-charts-bar-chart-05.tsx
"use client"

import { cx } from "@/lib/utils"

import { BarChart } from "@/atom/BarChart"
import { Card } from "@/atom/Card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/atom/Tabs"

const dataEurope = [
  //array-start
  {
    date: "Jan 23",
    Successful: 12,
    Refunded: 0,
    Fraudulent: 1,
  },
  {
    date: "Feb 23",
    Successful: 24,
    Refunded: 1,
    Fraudulent: 1,
  },
  {
    date: "Mar 23",
    Successful: 48,
    Refunded: 4,
    Fraudulent: 4,
  },
  {
    date: "Apr 23",
    Successful: 24,
    Refunded: 2,
    Fraudulent: 3,
  },
  {
    date: "May 23",
    Successful: 34,
    Refunded: 0,
    Fraudulent: 0,
  },
  {
    date: "Jun 23",
    Successful: 26,
    Refunded: 0,
    Fraudulent: 0,
  },
  {
    date: "Jul 23",
    Successful: 12,
    Refunded: 0,
    Fraudulent: 0,
  },
  {
    date: "Aug 23",
    Successful: 38,
    Refunded: 2,
    Fraudulent: 0,
  },
  {
    date: "Sep 23",
    Successful: 23,
    Refunded: 1,
    Fraudulent: 0,
  },
  {
    date: "Oct 23",
    Successful: 20,
    Refunded: 0,
    Fraudulent: 0,
  },
  {
    date: "Nov 23",
    Successful: 24,
    Refunded: 0,
    Fraudulent: 0,
  },
  {
    date: "Dec 23",
    Successful: 21,
    Refunded: 8,
    Fraudulent: 1,
  },
  //array-end
]

const dataNorthAmerica = [
  //array-start
  {
    date: "Jan 23",
    Successful: 65,
    Refunded: 2,
    Fraudulent: 1,
  },
  {
    date: "Feb 23",
    Successful: 78,
    Refunded: 3,
    Fraudulent: 2,
  },
  {
    date: "Mar 23",
    Successful: 55,
    Refunded: 5,
    Fraudulent: 6,
  },
  {
    date: "Apr 23",
    Successful: 79,
    Refunded: 4,
    Fraudulent: 3,
  },
  {
    date: "May 23",
    Successful: 41,
    Refunded: 1,
    Fraudulent: 1,
  },
  {
    date: "Jun 23",
    Successful: 32,
    Refunded: 1,
    Fraudulent: 1,
  },
  {
    date: "Jul 23",
    Successful: 54,
    Refunded: 0,
    Fraudulent: 0,
  },
  {
    date: "Aug 23",
    Successful: 45,
    Refunded: 3,
    Fraudulent: 1,
  },
  {
    date: "Sep 23",
    Successful: 75,
    Refunded: 2,
    Fraudulent: 0,
  },
  {
    date: "Oct 23",
    Successful: 62,
    Refunded: 1,
    Fraudulent: 0,
  },
  {
    date: "Nov 23",
    Successful: 55,
    Refunded: 1,
    Fraudulent: 0,
  },
  {
    date: "Dec 23",
    Successful: 58,
    Refunded: 6,
    Fraudulent: 2,
  },
  //array-end
]

const dataAsia = [
  //array-start
  {
    date: "Jan 23",
    Successful: 31,
    Refunded: 1,
    Fraudulent: 2,
  },
  {
    date: "Feb 23",
    Successful: 32,
    Refunded: 2,
    Fraudulent: 1,
  },
  {
    date: "Mar 23",
    Successful: 44,
    Refunded: 3,
    Fraudulent: 3,
  },
  {
    date: "Apr 23",
    Successful: 23,
    Refunded: 2,
    Fraudulent: 4,
  },
  {
    date: "May 23",
    Successful: 35,
    Refunded: 1,
    Fraudulent: 1,
  },
  {
    date: "Jun 23",
    Successful: 48,
    Refunded: 1,
    Fraudulent: 1,
  },
  {
    date: "Jul 23",
    Successful: 33,
    Refunded: 1,
    Fraudulent: 1,
  },
  {
    date: "Aug 23",
    Successful: 38,
    Refunded: 3,
    Fraudulent: 0,
  },
  {
    date: "Sep 23",
    Successful: 41,
    Refunded: 2,
    Fraudulent: 0,
  },
  {
    date: "Oct 23",
    Successful: 39,
    Refunded: 1,
    Fraudulent: 0,
  },
  {
    date: "Nov 23",
    Successful: 32,
    Refunded: 1,
    Fraudulent: 1,
  },
  {
    date: "Dec 23",
    Successful: 19,
    Refunded: 5,
    Fraudulent: 1,
  },
  //array-end
]

const summary = [
  //array-start
  {
    name: "Europe",
    data: dataEurope,
    details: [
      {
        name: "Successful",
        value: 263,
      },
      {
        name: "Refunded",
        value: 18,
      },
      {
        name: "Fraudulent",
        value: 10,
      },
    ],
  },
  {
    name: "North America",
    data: dataNorthAmerica,
    details: [
      {
        name: "Successful",
        value: 652,
      },
      {
        name: "Refunded",
        value: 29,
      },
      {
        name: "Fraudulent",
        value: 17,
      },
    ],
  },
  {
    name: "Asia",
    data: dataAsia,
    details: [
      {
        name: "Successful",
        value: 405,
      },
      {
        name: "Refunded",
        value: 21,
      },
      {
        name: "Fraudulent",
        value: 15,
      },
    ],
  },
  //array-end
]

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`

type Status = "Successful" | "Refunded" | "Fraudulent"

const statusColor: Record<Status, string> = {
  Successful: "bg-blue-500 dark:bg-blue-500",
  Refunded: "bg-violet-500 dark:bg-violet-500",
  Fraudulent: "bg-fuchsia-500 dark:bg-fuchsia-500",
}

export default function Example() {
  return (
    <div className="obfuscate">
      <Card className="sm:mx-auto sm:max-w-lg">
        <h3 className="font-medium text-gray-900 dark:text-gray-50">
          Online payments
        </h3>
        <Tabs defaultValue={summary[0].name} className="mt-8">
          <TabsList>
            {summary.map((tab) => (
              <TabsTrigger key={tab.name} value={tab.name}>
                {tab.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {summary.map((region) => (
            <TabsContent key={region.name} value={region.name}>
              <BarChart
                data={region.data}
                index="date"
                categories={["Successful", "Refunded", "Fraudulent"]}
                colors={["blue", "violet", "fuchsia"]}
                valueFormatter={valueFormatter}
                type="stacked"
                showLegend={false}
                showYAxis={false}
                startEndOnly={true}
                className="mt-8 !h-48"
              />
              <ul
                role="list"
                className="mt-2 divide-y divide-gray-200 text-sm text-gray-500 dark:divide-gray-800 dark:text-gray-500"
              >
                {region.details.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center justify-between py-1.5"
                  >
                    <div className="flex items-center space-x-2">
                      <span
                        className={cx(
                          statusColor[item.name as Status],
                          "size-2 shrink-0 rounded-sm",
                        )}
                        aria-hidden={true}
                      />
                      <span>{item.name}</span>
                    </div>
                    <span className="font-medium text-gray-900 dark:text-gray-50">
                      {valueFormatter(item.value)}
                    </span>
                  </li>
                ))}
              </ul>
            </TabsContent>
          ))}
        </Tabs>
      </Card>
    </div>
  )
}
```


```example/bar-charts-bar-chart-11.tsx
// Tremor BarChart [v0.2.1]

"use client"

import React from "react"
import {
  Bar,
  CartesianGrid,
  Label,
  BarChart as RechartsBarChart,
  Legend as RechartsLegend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { AxisDomain } from "recharts/types/util/types"

import { getYAxisDomain } from "@/lib/chartUtils"
import { useOnWindowResize } from "@/lib/useOnWindowResize"
import { cx } from "@/lib/utils"

const data = [
  {
    date: "Jan 24",
    Density: 0.891,
  },
  {
    date: "Feb 24",
    Density: 0.084,
  },
  {
    date: "Mar 24",
    Density: 0.155,
  },
  {
    date: "Apr 24",
    Density: 0.75,
  },
  {
    date: "May 24",
    Density: 0.221,
  },
  {
    date: "Jun 24",
    Density: 0.561,
  },
  {
    date: "Jul 24",
    Density: 0.261,
  },
  {
    date: "Aug 24",
    Density: 0.421,
  },
]

// Tremor Custom chartColors

//array-start
type ColorUtility = "bg" | "stroke" | "fill" | "text"

const chartColors = {
  blue: {
    bg: "bg-blue-500 dark:bg-blue-500",
    stroke: "stroke-blue-500 dark:stroke-blue-500",
    fill: "fill-blue-500 dark:fill-blue-500",
    text: "text-blue-500 dark:text-blue-500",
  },
  lightBlue: {
    bg: "bg-blue-300/50 dark:bg-blue-800/50",
    stroke: "stroke-blue-300/50 dark:stroke-blue-800/50",
    fill: "fill-blue-300/50 dark:fill-blue-800/50",
    text: "text-blue-300/50 dark:text-blue-800/50",
  },
  emerald: {
    bg: "bg-emerald-500 dark:bg-emerald-500",
    stroke: "stroke-emerald-500 dark:stroke-emerald-500",
    fill: "fill-emerald-500 dark:fill-emerald-500",
    text: "text-emerald-500 dark:text-emerald-500",
  },
  lightEmerald: {
    bg: "bg-emerald-300/50 dark:bg-emerald-800/50",
    stroke: "stroke-emerald-300/50 dark:stroke-emerald-800/50",
    fill: "fill-emerald-300/50 dark:fill-emerald-800/50",
    text: "text-emerald-300/50 dark:text-emerald-800/50",
  },
  violet: {
    bg: "bg-violet-500 dark:bg-violet-500",
    stroke: "stroke-violet-500 dark:stroke-violet-500",
    fill: "fill-violet-500 dark:fill-violet-500",
    text: "text-violet-500 dark:text-violet-500",
  },
  amber: {
    bg: "bg-amber-500 dark:bg-amber-500",
    stroke: "stroke-amber-500 dark:stroke-amber-500",
    fill: "fill-amber-500 dark:fill-amber-500",
    text: "text-amber-500 dark:text-amber-500",
  },
  gray: {
    bg: "bg-gray-400 dark:bg-gray-600",
    stroke: "stroke-gray-400 dark:stroke-gray-600",
    fill: "fill-gray-400 dark:fill-gray-600",
    text: "text-gray-400 dark:text-gray-600",
  },
  rose: {
    bg: "bg-rose-600 dark:bg-rose-500",
    stroke: "stroke-rose-600 dark:stroke-rose-500",
    fill: "fill-rose-600 dark:fill-rose-500",
    text: "text-rose-600 dark:text-rose-500",
  },
  sky: {
    bg: "bg-sky-500 dark:bg-sky-500",
    stroke: "stroke-sky-500 dark:stroke-sky-500",
    fill: "fill-sky-500 dark:fill-sky-500",
    text: "text-sky-500 dark:text-sky-500",
  },
  cyan: {
    bg: "bg-cyan-500 dark:bg-cyan-500",
    stroke: "stroke-cyan-500 dark:stroke-cyan-500",
    fill: "fill-cyan-500 dark:fill-cyan-500",
    text: "text-cyan-500 dark:text-cyan-500",
  },
  indigo: {
    bg: "bg-indigo-600 dark:bg-indigo-500",
    stroke: "stroke-indigo-600 dark:stroke-indigo-500",
    fill: "fill-indigo-600 dark:fill-indigo-500",
    text: "text-indigo-600 dark:text-indigo-500",
  },
  orange: {
    bg: "bg-orange-500 dark:bg-orange-400",
    stroke: "stroke-orange-500 dark:stroke-orange-400",
    fill: "fill-orange-500 dark:fill-orange-400",
    text: "text-orange-500 dark:text-orange-400",
  },
  pink: {
    bg: "bg-pink-500 dark:bg-pink-500",
    stroke: "stroke-pink-500 dark:stroke-pink-500",
    fill: "fill-pink-500 dark:fill-pink-500",
    text: "text-pink-500 dark:text-pink-500",
  },
  red: {
    bg: "bg-red-500 dark:bg-red-500",
    stroke: "stroke-red-500 dark:stroke-red-500",
    fill: "fill-red-500 dark:fill-red-500",
    text: "text-red-500 dark:text-red-500",
  },
  lightGray: {
    bg: "bg-gray-300 dark:bg-gray-700",
    stroke: "stroke-gray-300 dark:stroke-gray-700",
    fill: "fill-gray-300 dark:fill-gray-700",
    text: "text-gray-300 dark:text-gray-700",
  },
} as const satisfies {
  [color: string]: {
    [key in ColorUtility]: string
  }
}

type AvailableChartColorsKeys = keyof typeof chartColors

const chartGradientColors = {
  blue: "from-blue-200 to-blue-500 dark:from-blue-200/10 dark:to-blue-400",
  lightBlue: "from-blue-200 to-blue-500 dark:from-blue-200/10 dark:to-blue-400",
  emerald:
    "from-emerald-200 to-emerald-500 dark:from-emerald-200/10 dark:to-emerald-400",
  lightEmerald:
    "from-emerald-200 to-emerald-500 dark:from-emerald-200/10 dark:to-emerald-400",
  violet:
    "from-violet-200 to-violet-500 dark:from-violet-200/10 dark:to-violet-400",
  amber: "from-amber-200 to-amber-500 dark:from-amber-200/10 dark:to-amber-400",
  gray: "from-gray-200 to-gray-500 dark:from-gray-200/10 dark:to-gray-400",
  lightGray: "from-gray-200 to-gray-500 dark:from-gray-200/10 dark:to-gray-400",
  rose: "from-rose-200 to-rose-500 dark:from-rose-200/10 dark:to-rose-400",
  sky: "from-sky-200 to-sky-500 dark:from-sky-200/10 dark:to-sky-400",
  cyan: "from-cyan-200 to-cyan-500 dark:from-cyan-200/10 dark:to-cyan-400",
  indigo:
    "from-indigo-200 to-indigo-500 dark:from-indigo-200/10 dark:to-indigo-400",
  orange:
    "from-orange-200 to-orange-500 dark:from-orange-200/10 dark:to-orange-400",
  pink: "from-pink-200 to-pink-500 dark:from-pink-200/10 dark:to-pink-400",
  red: "from-red-200 to-red-500 dark:from-red-200/10 dark:to-red-400",
} as const satisfies Record<string, string>

const chartConditionalColors = {
  blue: {
    low: "fill-blue-200 dark:fill-blue-300",
    medium: "fill-blue-300 dark:fill-blue-400",
    high: "fill-blue-400 dark:fill-blue-500",
    critical: "fill-blue-500 dark:fill-blue-600",
  },
  lightBlue: {
    low: "fill-blue-200 dark:fill-blue-300",
    medium: "fill-blue-300 dark:fill-blue-400",
    high: "fill-blue-400 dark:fill-blue-500",
    critical: "fill-blue-500 dark:fill-blue-600",
  },
  emerald: {
    low: "fill-emerald-200 dark:fill-emerald-300",
    medium: "fill-emerald-300 dark:fill-emerald-400",
    high: "fill-emerald-400 dark:fill-emerald-500",
    critical: "fill-emerald-500 dark:fill-emerald-600",
  },
  lightEmerald: {
    low: "fill-emerald-200 dark:fill-emerald-300",
    medium: "fill-emerald-300 dark:fill-emerald-400",
    high: "fill-emerald-400 dark:fill-emerald-500",
    critical: "fill-emerald-500 dark:fill-emerald-600",
  },
  violet: {
    low: "fill-violet-200 dark:fill-violet-300",
    medium: "fill-violet-300 dark:fill-violet-400",
    high: "fill-violet-400 dark:fill-violet-500",
    critical: "fill-violet-500 dark:fill-violet-600",
  },
  amber: {
    low: "fill-amber-200 dark:fill-amber-300",
    medium: "fill-amber-300 dark:fill-amber-400",
    high: "fill-amber-400 dark:fill-amber-500",
    critical: "fill-amber-500 dark:fill-amber-600",
  },
  gray: {
    low: "fill-gray-200 dark:fill-gray-300",
    medium: "fill-gray-300 dark:fill-gray-400",
    high: "fill-gray-400 dark:fill-gray-500",
    critical: "fill-gray-500 dark:fill-gray-600",
  },
  rose: {
    low: "fill-rose-200 dark:fill-rose-300",
    medium: "fill-rose-300 dark:fill-rose-400",
    high: "fill-rose-400 dark:fill-rose-500",
    critical: "fill-rose-500 dark:fill-rose-600",
  },
  sky: {
    low: "fill-sky-200 dark:fill-sky-300",
    medium: "fill-sky-300 dark:fill-sky-400",
    high: "fill-sky-400 dark:fill-sky-500",
    critical: "fill-sky-500 dark:fill-sky-600",
  },
  cyan: {
    low: "fill-cyan-200 dark:fill-cyan-300",
    medium: "fill-cyan-300 dark:fill-cyan-400",
    high: "fill-cyan-400 dark:fill-cyan-500",
    critical: "fill-cyan-500 dark:fill-cyan-600",
  },
  indigo: {
    low: "fill-indigo-200 dark:fill-indigo-300",
    medium: "fill-indigo-300 dark:fill-indigo-400",
    high: "fill-indigo-400 dark:fill-indigo-500",
    critical: "fill-indigo-500 dark:fill-indigo-600",
  },
  orange: {
    low: "fill-orange-200 dark:fill-orange-300",
    medium: "fill-orange-300 dark:fill-orange-400",
    high: "fill-orange-400 dark:fill-orange-500",
    critical: "fill-orange-500 dark:fill-orange-600",
  },
  pink: {
    low: "fill-pink-200 dark:fill-pink-300",
    medium: "fill-pink-300 dark:fill-pink-400",
    high: "fill-pink-400 dark:fill-pink-500",
    critical: "fill-pink-500 dark:fill-pink-600",
  },
  red: {
    low: "fill-red-200 dark:fill-red-300",
    medium: "fill-red-300 dark:fill-red-400",
    high: "fill-red-400 dark:fill-red-500",
    critical: "fill-red-500 dark:fill-red-600",
  },
  lightGray: {
    low: "fill-gray-200 dark:fill-gray-300",
    medium: "fill-gray-300 dark:fill-gray-400",
    high: "fill-gray-400 dark:fill-gray-500",
    critical: "fill-gray-500 dark:fill-gray-600",
  },
}

type AvailableChartConditionalColorsKeys = keyof typeof chartColors

const AvailableChartColors: AvailableChartColorsKeys[] = Object.keys(
  chartColors,
) as Array<AvailableChartColorsKeys>

const constructCategoryColors = (
  categories: string[],
  colors: AvailableChartColorsKeys[],
): Map<string, AvailableChartColorsKeys> => {
  const categoryColors = new Map<string, AvailableChartColorsKeys>()
  categories.forEach((category, index) => {
    categoryColors.set(category, colors[index % colors.length])
  })
  return categoryColors
}

const getColorClassName = (
  color: AvailableChartColorsKeys,
  type: ColorUtility,
): string => {
  const fallbackColor = {
    bg: "bg-gray-500",
    stroke: "stroke-gray-500",
    fill: "fill-gray-500",
    text: "text-gray-500",
  }
  return chartColors[color]?.[type] ?? fallbackColor[type]
}

const getGradientColorClassName = (color: AvailableChartColorsKeys): string => {
  return chartGradientColors[color]
}

const getConditionalColorClassName = (
  value: number,
  color: AvailableChartConditionalColorsKeys,
) => {
  const fallbackColors = {
    low: "fill-gray-300 dark:fill-gray-400",
    medium: "fill-gray-400 dark:fill-gray-500",
    high: "fill-gray-500 dark:fill-gray-600",
    critical: "fill-gray-600 dark:fill-gray-700",
  }

  const classes = chartConditionalColors[color] ?? fallbackColors

  if (value <= 0.25) return classes.low
  if (value <= 0.5) return classes.medium
  if (value <= 0.75) return classes.high
  return classes.critical
}

//array-end

function formatPercentage({
  number,
  decimals = 1,
}: {
  number: number
  decimals?: number
}): string {
  return new Intl.NumberFormat("en-US", {
    style: "percent",
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(number)
}

const CustomTooltip = ({ payload, active }: TooltipProps) => {
  if (!active || !payload || payload.length === 0) return null

  {
    /* dummy values for showcase */
  }
  const PEER_AVERAGE = 0.75

  const calculateDiff = () => {
    const difference = payload[0].value - PEER_AVERAGE
    const sign = difference > 0 ? "+" : ""
    return `${sign}${formatPercentage({ number: difference })}`
  }

  const peerDifference = calculateDiff()

  return (
    <div className="w-56 rounded-md border border-gray-200 bg-white text-sm shadow-md dark:border-gray-800 dark:bg-gray-950">
      <ul role="list" className="grid grid-cols-2 gap-x-4 p-2">
        <li className="flex space-x-2.5">
          <span
            className={cx(
              `bg-${payload[0].color}-500 dark:bg-${payload[0].color}-500`,
              "w-1 rounded",
            )}
            aria-hidden="true"
          />
          <div className="space-y-0.5">
            <p className="text-xs whitespace-nowrap text-gray-500 dark:text-gray-500">
              {payload[0].category}
            </p>
            <p className="font-medium text-gray-900 dark:text-gray-50">
              {formatPercentage({ number: payload[0].value })}
            </p>
          </div>
        </li>
        <li className="flex space-x-2.5">
          <span
            className="w-1 rounded bg-gray-400 dark:bg-gray-600"
            aria-hidden="true"
          />
          <div className="space-y-0.5">
            <p className="text-xs whitespace-nowrap text-gray-500 dark:text-gray-500">
              Benchmark
            </p>
            <p className="font-medium text-gray-900 dark:text-gray-50">
              {formatPercentage({ number: PEER_AVERAGE })}
            </p>
          </div>
        </li>
      </ul>
      <div className="border-t border-gray-200 p-2 dark:border-gray-800">
        <p className="inline-flex w-full justify-center rounded bg-gray-100 px-1.5 py-1 text-xs text-gray-600 dark:bg-gray-400/20 dark:text-gray-400">
          <span className="mr-1">{peerDifference}</span>
          {parseFloat(peerDifference) > 0
            ? "above benchmark"
            : parseFloat(peerDifference) === 0
              ? "same as benchmark"
              : "below benchmark"}
        </p>
      </div>
    </div>
  )
}

//#region Shape

function deepEqual<T>(obj1: T, obj2: T): boolean {
  if (obj1 === obj2) return true

  if (
    typeof obj1 !== "object" ||
    typeof obj2 !== "object" ||
    obj1 === null ||
    obj2 === null
  ) {
    return false
  }

  const keys1 = Object.keys(obj1) as Array<keyof T>
  const keys2 = Object.keys(obj2) as Array<keyof T>

  if (keys1.length !== keys2.length) return false

  for (const key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) return false
  }

  return true
}

const renderShape = (
  props: any,
  activeBar: any | undefined,
  activeLegend: string | undefined,
  layout: string,
  color: AvailableChartColorsKeys,
) => {
  const { fillOpacity, name, payload, value } = props
  let { x, width, y, height } = props

  if (layout === "horizontal" && height < 0) {
    y += height
    height = Math.abs(height) // height must be a positive number
  } else if (layout === "vertical" && width < 0) {
    x += width
    width = Math.abs(width) // width must be a positive number
  }

  return (
    <>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        className={getConditionalColorClassName(value, color)}
        opacity={
          activeBar || (activeLegend && activeLegend !== name)
            ? deepEqual(activeBar, { ...payload, value })
              ? fillOpacity
              : 0.3
            : fillOpacity
        }
      />
    </>
  )
}

//#region Legend

interface LegendItemProps {
  name: string
  color: AvailableChartColorsKeys
  onClick?: (name: string, color: AvailableChartColorsKeys) => void
}

const LegendItem = ({ name, color, onClick }: LegendItemProps) => {
  const hasOnValueChange = !!onClick
  return (
    <div
      className={cx(
        // base
        "group inline-flex flex-nowrap items-center gap-2 rounded px-2 py-1 whitespace-nowrap transition",
        hasOnValueChange
          ? "cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
          : "cursor-default",
      )}
      onClick={(e) => {
        e.stopPropagation()
        onClick?.(name, color)
      }}
    >
      <span className="text-xs text-gray-700 dark:text-gray-300">Low</span>
      <span
        className={cx(
          getGradientColorClassName(color),
          "h-1.5 w-14 rounded-full bg-gradient-to-r",
        )}
      />
      <span className="text-xs text-gray-700 dark:text-gray-300">High</span>
    </div>
  )
}

interface LegendProps extends React.OlHTMLAttributes<HTMLOListElement> {
  categories: string[]
  colors?: AvailableChartColorsKeys[]
  onClickLegendItem?: (category: string, color: string) => void
  activeLegend?: string
}

const Legend = React.forwardRef<HTMLOListElement, LegendProps>((props, ref) => {
  const {
    categories,
    colors = AvailableChartColors,
    className,
    onClickLegendItem,
    activeLegend,
    ...other
  } = props
  return (
    <ol
      ref={ref}
      className={cx("relative overflow-hidden", className)}
      {...other}
    >
      <div tabIndex={0} className="flex h-full flex-wrap">
        {categories.map((category, index) => (
          <LegendItem
            key={`item-${index}`}
            name={category}
            color={colors[index] as AvailableChartColorsKeys}
            onClick={onClickLegendItem}
          />
        ))}
      </div>
    </ol>
  )
})

Legend.displayName = "Legend"

const ChartLegend = (
  { payload }: any,
  categoryColors: Map<string, AvailableChartColorsKeys>,
  setLegendHeight: React.Dispatch<React.SetStateAction<number>>,
  activeLegend: string | undefined,
  onClick?: (category: string, color: string) => void,
  legendPosition?: "left" | "center" | "right",
  yAxisWidth?: number,
) => {
  const legendRef = React.useRef<HTMLDivElement>(null)

  useOnWindowResize(() => {
    const calculateHeight = (height: number | undefined) =>
      height ? Number(height) + 15 : 60
    setLegendHeight(calculateHeight(legendRef.current?.clientHeight))
  })

  const filteredPayload = payload.filter((item: any) => item.type !== "none")

  const paddingLeft =
    legendPosition === "left" && yAxisWidth ? yAxisWidth - 8 : 0

  return (
    <div
      style={{ paddingLeft: paddingLeft }}
      ref={legendRef}
      className={cx(
        "flex items-center",
        { "justify-center": legendPosition === "center" },
        {
          "justify-start": legendPosition === "left",
        },
        { "justify-end": legendPosition === "right" },
      )}
    >
      <Legend
        categories={filteredPayload.map((entry: any) => entry.value)}
        colors={filteredPayload.map((entry: any) =>
          categoryColors.get(entry.value),
        )}
        onClickLegendItem={onClick}
        activeLegend={activeLegend}
      />
    </div>
  )
}

//#region Tooltip

type TooltipProps = Pick<ChartTooltipProps, "active" | "payload" | "label">

type PayloadItem = {
  category: string
  value: number
  index: string
  color: AvailableChartColorsKeys
  type?: string
  payload: any
}

interface ChartTooltipProps {
  active: boolean | undefined
  payload: PayloadItem[]
  label: string
  valueFormatter: (value: number) => string
}

const ChartTooltip = ({
  active,
  payload,
  label,
  valueFormatter,
}: ChartTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div
        className={cx(
          // base
          "rounded-md border text-sm shadow-md",
          // border color
          "border-gray-200 dark:border-gray-800",
          // background color
          "bg-white dark:bg-gray-950",
        )}
      >
        <div className={cx("border-b border-inherit px-4 py-2")}>
          <p
            className={cx(
              // base
              "font-medium",
              // text color
              "text-gray-900 dark:text-gray-50",
            )}
          >
            {label}
          </p>
        </div>
        <div className={cx("space-y-1 px-4 py-2")}>
          {payload.map(({ value, category, color }, index) => (
            <div
              key={`id-${index}`}
              className="flex items-center justify-between space-x-8"
            >
              <div className="flex items-center space-x-2">
                <span
                  aria-hidden="true"
                  className={cx(
                    "size-2 shrink-0 rounded-sm",
                    getColorClassName(color, "bg"),
                  )}
                />
                <p
                  className={cx(
                    // base
                    "text-right whitespace-nowrap",
                    // text color
                    "text-gray-700 dark:text-gray-300",
                  )}
                >
                  {category}
                </p>
              </div>
              <p
                className={cx(
                  // base
                  "text-right font-medium whitespace-nowrap tabular-nums",
                  // text color
                  "text-gray-900 dark:text-gray-50",
                )}
              >
                {valueFormatter(value)}
              </p>
            </div>
          ))}
        </div>
      </div>
    )
  }
  return null
}

//#region BarChart

type BaseEventProps = {
  eventType: "category" | "bar"
  categoryClicked: string
  [key: string]: number | string
}

type BarChartEventProps = BaseEventProps | null | undefined

interface BarChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: Record<string, any>[]
  index: string
  categories: string[]
  colors?: AvailableChartColorsKeys[]
  valueFormatter?: (value: number) => string
  startEndOnly?: boolean
  showXAxis?: boolean
  showYAxis?: boolean
  showGridLines?: boolean
  yAxisWidth?: number
  intervalType?: "preserveStartEnd" | "equidistantPreserveStart"
  showTooltip?: boolean
  showLegend?: boolean
  autoMinValue?: boolean
  minValue?: number
  maxValue?: number
  allowDecimals?: boolean
  onValueChange?: (value: BarChartEventProps) => void
  enableLegendSlider?: boolean
  tickGap?: number
  barCategoryGap?: string | number
  xAxisLabel?: string
  yAxisLabel?: string
  layout?: "vertical" | "horizontal"
  type?: "default" | "stacked" | "percent"
  legendPosition?: "left" | "center" | "right"
  tooltipCallback?: (tooltipCallbackContent: TooltipProps) => void
  customTooltip?: React.ComponentType<TooltipProps>
}

const ConditionalBarChart = React.forwardRef<HTMLDivElement, BarChartProps>(
  (props, forwardedRef) => {
    const {
      data = [],
      categories = [],
      index,
      colors = AvailableChartColors,
      valueFormatter = (value: number) => value.toString(),
      startEndOnly = false,
      showXAxis = true,
      showYAxis = true,
      showGridLines = true,
      yAxisWidth = 56,
      intervalType = "equidistantPreserveStart",
      showTooltip = true,
      showLegend = true,
      autoMinValue = false,
      minValue,
      maxValue,
      allowDecimals = true,
      className,
      onValueChange,
      enableLegendSlider = false,
      barCategoryGap,
      tickGap = 5,
      xAxisLabel,
      yAxisLabel,
      layout = "horizontal",
      type = "default",
      legendPosition = "right",
      tooltipCallback,
      customTooltip,
      ...other
    } = props
    const CustomTooltip = customTooltip
    const paddingValue =
      (!showXAxis && !showYAxis) || (startEndOnly && !showYAxis) ? 0 : 20
    const [legendHeight, setLegendHeight] = React.useState(60)
    const [activeLegend, setActiveLegend] = React.useState<string | undefined>(
      undefined,
    )
    const categoryColors = constructCategoryColors(categories, colors)
    const [activeBar, setActiveBar] = React.useState<any | undefined>(undefined)
    const yAxisDomain = getYAxisDomain(autoMinValue, minValue, maxValue)
    const hasOnValueChange = !!onValueChange
    const stacked = type === "stacked" || type === "percent"

    const prevActiveRef = React.useRef<boolean | undefined>(undefined)
    const prevLabelRef = React.useRef<string | undefined>(undefined)

    function valueToPercent(value: number) {
      return `${(value * 100).toFixed(0)}%`
    }

    function onBarClick(data: any, _: any, event: React.MouseEvent) {
      event.stopPropagation()
      if (!onValueChange) return
      if (deepEqual(activeBar, { ...data.payload, value: data.value })) {
        setActiveLegend(undefined)
        setActiveBar(undefined)
        onValueChange?.(null)
      } else {
        setActiveLegend(data.tooltipPayload?.[0]?.dataKey)
        setActiveBar({
          ...data.payload,
          value: data.value,
        })
        onValueChange?.({
          eventType: "bar",
          categoryClicked: data.tooltipPayload?.[0]?.dataKey,
          ...data.payload,
        })
      }
    }

    function onCategoryClick(dataKey: string) {
      if (!hasOnValueChange) return
      if (dataKey === activeLegend && !activeBar) {
        setActiveLegend(undefined)
        onValueChange?.(null)
      } else {
        setActiveLegend(dataKey)
        onValueChange?.({
          eventType: "category",
          categoryClicked: dataKey,
        })
      }
      setActiveBar(undefined)
    }

    return (
      <div
        ref={forwardedRef}
        className={cx("h-80 w-full", className)}
        tremor-id="tremor-raw"
        {...other}
      >
        <ResponsiveContainer>
          <RechartsBarChart
            data={data}
            onClick={
              hasOnValueChange && (activeLegend || activeBar)
                ? () => {
                    setActiveBar(undefined)
                    setActiveLegend(undefined)
                    onValueChange?.(null)
                  }
                : undefined
            }
            margin={{
              bottom: xAxisLabel ? 30 : undefined,
              left: yAxisLabel ? 20 : undefined,
              right: yAxisLabel ? 5 : undefined,
              top: 5,
            }}
            stackOffset={type === "percent" ? "expand" : undefined}
            layout={layout}
            barCategoryGap={barCategoryGap}
          >
            {showGridLines ? (
              <CartesianGrid
                className={cx("stroke-gray-200 stroke-1 dark:stroke-gray-800")}
                horizontal={layout !== "vertical"}
                vertical={layout === "vertical"}
              />
            ) : null}
            <XAxis
              hide={!showXAxis}
              tick={{
                transform:
                  layout !== "vertical" ? "translate(0, 6)" : undefined,
              }}
              fill=""
              stroke=""
              className={cx(
                // base
                "text-xs",
                // text fill
                "fill-gray-500 dark:fill-gray-500",
                { "mt-4": layout !== "vertical" },
              )}
              tickLine={false}
              axisLine={false}
              minTickGap={tickGap}
              {...(layout !== "vertical"
                ? {
                    padding: {
                      left: paddingValue,
                      right: paddingValue,
                    },
                    dataKey: index,
                    interval: startEndOnly ? "preserveStartEnd" : intervalType,
                    ticks: startEndOnly
                      ? [data[0][index], data[data.length - 1][index]]
                      : undefined,
                  }
                : {
                    type: "number",
                    domain: yAxisDomain as AxisDomain,
                    tickFormatter:
                      type === "percent" ? valueToPercent : valueFormatter,
                    allowDecimals: allowDecimals,
                  })}
            >
              {xAxisLabel && (
                <Label
                  position="insideBottom"
                  offset={-20}
                  className="fill-gray-800 text-sm font-medium dark:fill-gray-200"
                >
                  {xAxisLabel}
                </Label>
              )}
            </XAxis>
            <YAxis
              width={yAxisWidth}
              hide={!showYAxis}
              axisLine={false}
              tickLine={false}
              fill=""
              stroke=""
              className={cx(
                // base
                "text-xs",
                // text fill
                "fill-gray-500 dark:fill-gray-500",
              )}
              tick={{
                transform:
                  layout !== "vertical"
                    ? "translate(-3, 0)"
                    : "translate(0, 0)",
              }}
              {...(layout !== "vertical"
                ? {
                    type: "number",
                    domain: yAxisDomain as AxisDomain,
                    tickFormatter:
                      type === "percent" ? valueToPercent : valueFormatter,
                    allowDecimals: allowDecimals,
                  }
                : {
                    dataKey: index,
                    ticks: startEndOnly
                      ? [data[0][index], data[data.length - 1][index]]
                      : undefined,
                    type: "category",
                    interval: "equidistantPreserveStart",
                  })}
            >
              {yAxisLabel && (
                <Label
                  position="insideLeft"
                  style={{ textAnchor: "middle" }}
                  angle={-90}
                  offset={-10}
                  className="fill-gray-500 text-xs font-normal dark:fill-gray-500"
                >
                  {yAxisLabel}
                </Label>
              )}
            </YAxis>
            <Tooltip
              wrapperStyle={{ outline: "none" }}
              isAnimationActive={true}
              animationDuration={100}
              cursor={{ fill: "#d1d5db", opacity: "0.15" }}
              offset={20}
              position={{
                y: layout === "horizontal" ? 0 : undefined,
                x: layout === "horizontal" ? undefined : yAxisWidth + 20,
              }}
              content={({ active, payload, label }) => {
                const cleanPayload: TooltipProps["payload"] = payload
                  ? payload.map((item: any) => ({
                      category: item.dataKey,
                      value: item.value,
                      index: item.payload[index],
                      color: categoryColors.get(
                        item.dataKey,
                      ) as AvailableChartColorsKeys,
                      type: item.type,
                      payload: item.payload,
                    }))
                  : []

                if (
                  tooltipCallback &&
                  (active !== prevActiveRef.current ||
                    label !== prevLabelRef.current)
                ) {
                  tooltipCallback({ active, payload: cleanPayload, label })
                  prevActiveRef.current = active
                  prevLabelRef.current = label
                }

                return showTooltip && active ? (
                  CustomTooltip ? (
                    <CustomTooltip
                      active={active}
                      payload={cleanPayload}
                      label={label}
                    />
                  ) : (
                    <ChartTooltip
                      active={active}
                      payload={cleanPayload}
                      label={label}
                      valueFormatter={valueFormatter}
                    />
                  )
                ) : null
              }}
            />
            {showLegend ? (
              <RechartsLegend
                verticalAlign="top"
                height={legendHeight}
                content={({ payload }) =>
                  ChartLegend(
                    { payload },
                    categoryColors,
                    setLegendHeight,
                    activeLegend,
                    hasOnValueChange
                      ? (clickedLegendItem: string) =>
                          onCategoryClick(clickedLegendItem)
                      : undefined,
                    legendPosition,
                    yAxisWidth,
                  )
                }
              />
            ) : null}
            {categories.map((category) => (
              <Bar
                className={cx(onValueChange ? "cursor-pointer" : "")}
                key={category}
                name={category}
                type="linear"
                dataKey={category}
                stackId={stacked ? "stack" : undefined}
                isAnimationActive={false}
                fill=""
                shape={(props: any) =>
                  renderShape(
                    props,
                    activeBar,
                    activeLegend,
                    layout,
                    categoryColors.get(category) as AvailableChartColorsKeys,
                  )
                }
                onClick={onBarClick}
              />
            ))}
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
    )
  },
)

ConditionalBarChart.displayName = "ConditionalBarChart"

export { ConditionalBarChart, type BarChartEventProps, type TooltipProps }

export default function Example() {
  return (
    <div className="flex flex-col justify-between">
      <div>
        <dt className="text-sm font-semibold text-gray-900 dark:text-gray-50">
          Bidder density
        </dt>
        <dd className="mt-0.5 text-sm/6 text-gray-500 dark:text-gray-500">
          Competition level measured by number and size of bidders over time
        </dd>
      </div>
      <ConditionalBarChart
        data={data}
        index="date"
        categories={["Density"]}
        colors={["orange"]}
        customTooltip={CustomTooltip}
        valueFormatter={(value) =>
          formatPercentage({ number: value, decimals: 0 })
        }
        yAxisWidth={55}
        yAxisLabel="Competition density (%)"
        barCategoryGap="30%"
        className="mt-4 hidden h-60 md:block"
      />
      <ConditionalBarChart
        data={data}
        index="date"
        categories={["Density"]}
        colors={["orange"]}
        customTooltip={CustomTooltip}
        valueFormatter={(value) =>
          formatPercentage({ number: value, decimals: 0 })
        }
        showYAxis={false}
        barCategoryGap="30%"
        className="mt-4 h-60 md:hidden"
      />
    </div>
  )
}
```


```example/bar-charts-bar-chart-10.tsx
"use client"

import React from "react"
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react"
import {
  Bar,
  CartesianGrid,
  Label,
  BarChart as RechartsBarChart,
  Legend as RechartsLegend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { AxisDomain } from "recharts/types/util/types"

import {
  AvailableChartColors,
  AvailableChartColorsKeys,
  constructCategoryColors,
  getColorClassName,
  getYAxisDomain,
} from "@/lib/chartUtils"
import { useOnWindowResize } from "@/lib/useOnWindowResize"
import { cx } from "@/lib/utils"

import { Card } from "@/atom/Card"

// Tremor BarChart [v0.2.0]

//#region Shape

function deepEqual<T>(obj1: T, obj2: T): boolean {
  if (obj1 === obj2) return true

  if (
    typeof obj1 !== "object" ||
    typeof obj2 !== "object" ||
    obj1 === null ||
    obj2 === null
  ) {
    return false
  }

  const keys1 = Object.keys(obj1) as Array<keyof T>
  const keys2 = Object.keys(obj2) as Array<keyof T>

  if (keys1.length !== keys2.length) return false

  for (const key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) return false
  }

  return true
}

const renderShape = (
  props: any,
  activeBar: any | undefined,
  activeLegend: string | undefined,
  strokeClass: string,
) => {
  const { name, payload, value } = props
  let { x, width, y, height } = props

  const lineY = y

  if (height < 0) {
    y += height
    height = Math.abs(height) // height must be a positive number
  }

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        opacity={
          activeBar || (activeLegend && activeLegend !== name)
            ? deepEqual(activeBar, { ...payload, value })
              ? 0.2
              : 0.1
            : 0.2
        }
      />
      <line
        x1={x}
        y1={lineY}
        x2={x + width}
        y2={lineY}
        stroke=""
        className={strokeClass}
        strokeWidth="2"
        opacity={
          activeBar || (activeLegend && activeLegend !== name)
            ? deepEqual(activeBar, { ...payload, value })
              ? 1
              : 0.5
            : 1
        }
      />
    </g>
  )
}

//#region Legend

interface LegendItemProps {
  name: string
  color: AvailableChartColorsKeys
  onClick?: (name: string, color: AvailableChartColorsKeys) => void
  activeLegend?: string
}

const LegendItem = ({
  name,
  color,
  onClick,
  activeLegend,
}: LegendItemProps) => {
  const hasOnValueChange = !!onClick
  return (
    <li
      className={cx(
        // base
        "group inline-flex flex-nowrap items-center gap-1.5 rounded px-2 py-1 whitespace-nowrap transition",
        hasOnValueChange
          ? "cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
          : "cursor-default",
      )}
      onClick={(e) => {
        e.stopPropagation()
        onClick?.(name, color)
      }}
    >
      <span
        className={cx(
          "size-2 shrink-0 rounded-sm",
          getColorClassName(color, "bg"),
          activeLegend && activeLegend !== name ? "opacity-40" : "opacity-100",
        )}
        aria-hidden={true}
      />
      <p
        className={cx(
          // base
          "truncate text-xs whitespace-nowrap",
          // text color
          "text-gray-700 dark:text-gray-300",
          hasOnValueChange &&
            "group-hover:text-gray-900 dark:group-hover:text-gray-50",
          activeLegend && activeLegend !== name ? "opacity-40" : "opacity-100",
        )}
      >
        {name}
      </p>
    </li>
  )
}

interface ScrollButtonProps {
  icon: React.ElementType
  onClick?: () => void
  disabled?: boolean
}

const ScrollButton = ({ icon, onClick, disabled }: ScrollButtonProps) => {
  const Icon = icon
  const [isPressed, setIsPressed] = React.useState(false)
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null)

  React.useEffect(() => {
    if (isPressed) {
      intervalRef.current = setInterval(() => {
        onClick?.()
      }, 300)
    } else {
      clearInterval(intervalRef.current as NodeJS.Timeout)
    }
    return () => clearInterval(intervalRef.current as NodeJS.Timeout)
  }, [isPressed, onClick])

  React.useEffect(() => {
    if (disabled) {
      clearInterval(intervalRef.current as NodeJS.Timeout)
      setIsPressed(false)
    }
  }, [disabled])

  return (
    <button
      type="button"
      className={cx(
        // base
        "group inline-flex size-5 items-center truncate rounded transition",
        disabled
          ? "cursor-not-allowed text-gray-400 dark:text-gray-600"
          : "cursor-pointer text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-50",
      )}
      disabled={disabled}
      onClick={(e) => {
        e.stopPropagation()
        onClick?.()
      }}
      onMouseDown={(e) => {
        e.stopPropagation()
        setIsPressed(true)
      }}
      onMouseUp={(e) => {
        e.stopPropagation()
        setIsPressed(false)
      }}
    >
      <Icon className="size-full" aria-hidden="true" />
    </button>
  )
}

interface LegendProps extends React.OlHTMLAttributes<HTMLOListElement> {
  categories: string[]
  colors?: AvailableChartColorsKeys[]
  onClickLegendItem?: (category: string, color: string) => void
  activeLegend?: string
  enableLegendSlider?: boolean
}

type HasScrollProps = {
  left: boolean
  right: boolean
}

const Legend = React.forwardRef<HTMLOListElement, LegendProps>((props, ref) => {
  const {
    categories,
    colors = AvailableChartColors,
    className,
    onClickLegendItem,
    activeLegend,
    enableLegendSlider = false,
    ...other
  } = props
  const scrollableRef = React.useRef<HTMLInputElement>(null)
  const scrollButtonsRef = React.useRef<HTMLDivElement>(null)
  const [hasScroll, setHasScroll] = React.useState<HasScrollProps | null>(null)
  const [isKeyDowned, setIsKeyDowned] = React.useState<string | null>(null)
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null)

  const checkScroll = React.useCallback(() => {
    const scrollable = scrollableRef?.current
    if (!scrollable) return

    const hasLeftScroll = scrollable.scrollLeft > 0
    const hasRightScroll =
      scrollable.scrollWidth - scrollable.clientWidth > scrollable.scrollLeft

    setHasScroll({ left: hasLeftScroll, right: hasRightScroll })
  }, [setHasScroll])

  const scrollToTest = React.useCallback(
    (direction: "left" | "right") => {
      const element = scrollableRef?.current
      const scrollButtons = scrollButtonsRef?.current
      const scrollButtonsWith = scrollButtons?.clientWidth ?? 0
      const width = element?.clientWidth ?? 0

      if (element && enableLegendSlider) {
        element.scrollTo({
          left:
            direction === "left"
              ? element.scrollLeft - width + scrollButtonsWith
              : element.scrollLeft + width - scrollButtonsWith,
          behavior: "smooth",
        })
        setTimeout(() => {
          checkScroll()
        }, 400)
      }
    },
    [enableLegendSlider, checkScroll],
  )

  React.useEffect(() => {
    const keyDownHandler = (key: string) => {
      if (key === "ArrowLeft") {
        scrollToTest("left")
      } else if (key === "ArrowRight") {
        scrollToTest("right")
      }
    }
    if (isKeyDowned) {
      keyDownHandler(isKeyDowned)
      intervalRef.current = setInterval(() => {
        keyDownHandler(isKeyDowned)
      }, 300)
    } else {
      clearInterval(intervalRef.current as NodeJS.Timeout)
    }
    return () => clearInterval(intervalRef.current as NodeJS.Timeout)
  }, [isKeyDowned, scrollToTest])

  const keyDown = (e: KeyboardEvent) => {
    e.stopPropagation()
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      e.preventDefault()
      setIsKeyDowned(e.key)
    }
  }
  const keyUp = (e: KeyboardEvent) => {
    e.stopPropagation()
    setIsKeyDowned(null)
  }

  React.useEffect(() => {
    const scrollable = scrollableRef?.current
    if (enableLegendSlider) {
      checkScroll()
      scrollable?.addEventListener("keydown", keyDown)
      scrollable?.addEventListener("keyup", keyUp)
    }

    return () => {
      scrollable?.removeEventListener("keydown", keyDown)
      scrollable?.removeEventListener("keyup", keyUp)
    }
  }, [checkScroll, enableLegendSlider])

  return (
    <ol
      ref={ref}
      className={cx("relative overflow-hidden", className)}
      {...other}
    >
      <div
        ref={scrollableRef}
        tabIndex={0}
        className={cx(
          "flex h-full",
          enableLegendSlider
            ? hasScroll?.right || hasScroll?.left
              ? "snap-mandatory items-center overflow-auto pr-12 pl-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              : ""
            : "flex-wrap",
        )}
      >
        {categories.map((category, index) => (
          <LegendItem
            key={`item-${index}`}
            name={category}
            color={colors[index] as AvailableChartColorsKeys}
            onClick={onClickLegendItem}
            activeLegend={activeLegend}
          />
        ))}
      </div>
      {enableLegendSlider && (hasScroll?.right || hasScroll?.left) ? (
        <>
          <div
            className={cx(
              // base
              "absolute top-0 right-0 bottom-0 flex h-full items-center justify-center pr-1",
              // background color
              "bg-white dark:bg-gray-950",
            )}
          >
            <ScrollButton
              icon={RiArrowLeftSLine}
              onClick={() => {
                setIsKeyDowned(null)
                scrollToTest("left")
              }}
              disabled={!hasScroll?.left}
            />
            <ScrollButton
              icon={RiArrowRightSLine}
              onClick={() => {
                setIsKeyDowned(null)
                scrollToTest("right")
              }}
              disabled={!hasScroll?.right}
            />
          </div>
        </>
      ) : null}
    </ol>
  )
})

Legend.displayName = "Legend"

const ChartLegend = (
  { payload }: any,
  categoryColors: Map<string, AvailableChartColorsKeys>,
  setLegendHeight: React.Dispatch<React.SetStateAction<number>>,
  activeLegend: string | undefined,
  onClick?: (category: string, color: string) => void,
  enableLegendSlider?: boolean,
  legendPosition?: "left" | "center" | "right",
  yAxisWidth?: number,
) => {
  const legendRef = React.useRef<HTMLDivElement>(null)

  useOnWindowResize(() => {
    const calculateHeight = (height: number | undefined) =>
      height ? Number(height) + 15 : 60
    setLegendHeight(calculateHeight(legendRef.current?.clientHeight))
  })

  const filteredPayload = payload.filter((item: any) => item.type !== "none")

  const paddingLeft =
    legendPosition === "left" && yAxisWidth ? yAxisWidth - 8 : 0

  return (
    <div
      style={{ paddingLeft: paddingLeft }}
      ref={legendRef}
      className={cx(
        "flex items-center",
        { "justify-center": legendPosition === "center" },
        {
          "justify-start": legendPosition === "left",
        },
        { "justify-end": legendPosition === "right" },
      )}
    >
      <Legend
        categories={filteredPayload.map((entry: any) => entry.value)}
        colors={filteredPayload.map((entry: any) =>
          categoryColors.get(entry.value),
        )}
        onClickLegendItem={onClick}
        activeLegend={activeLegend}
        enableLegendSlider={enableLegendSlider}
      />
    </div>
  )
}

//#region Tooltip

type TooltipProps = Pick<ChartTooltipProps, "active" | "payload" | "label">

type PayloadItem = {
  category: string
  value: number
  index: string
  color: AvailableChartColorsKeys
  type?: string
  payload: any
}

interface ChartTooltipProps {
  active: boolean | undefined
  payload: PayloadItem[]
  label: string
  valueFormatter: (value: number) => string
}

const ChartTooltip = ({
  active,
  payload,
  // label,
  valueFormatter,
}: ChartTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div
        className={cx(
          // base
          "rounded-md border text-sm shadow-md",
          // border color
          "border-gray-200 dark:border-gray-800",
          // background color
          "bg-white dark:bg-gray-950",
        )}
      >
        {/* unhide to show x-axis value, also uncomment label in line 465 */}

        {/* <div className={cx('border-b border-inherit px-4 py-2')}>
          <p
            className={cx(
              // base
              'font-medium',
              // text color
              'text-gray-900 dark:text-gray-50',
            )}
          >
            {label}
          </p>
        </div> */}

        <div className={cx("space-y-1 p-2")}>
          {payload.map(({ value, category, color }, index) => (
            <div
              key={`id-${index}`}
              className="flex items-center justify-between space-x-4"
            >
              <div className="flex items-center space-x-2">
                <span
                  aria-hidden="true"
                  className={cx(
                    "size-2.5 shrink-0 rounded-sm",
                    getColorClassName(color, "bg"),
                  )}
                />
                <p
                  className={cx(
                    // base
                    "text-right whitespace-nowrap",
                    // text color
                    "text-gray-700 dark:text-gray-300",
                  )}
                >
                  {category}
                </p>
              </div>
              <p
                className={cx(
                  // base
                  "text-right font-medium whitespace-nowrap tabular-nums",
                  // text color
                  "text-gray-900 dark:text-gray-50",
                )}
              >
                {valueFormatter(value)}
              </p>
            </div>
          ))}
        </div>
      </div>
    )
  }
  return null
}

//#region BarChart

type BaseEventProps = {
  eventType: "category" | "bar"
  categoryClicked: string
  [key: string]: number | string
}

type BarChartEventProps = BaseEventProps | null | undefined

interface BarChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: Record<string, any>[]
  index: string
  categories: string[]
  colors?: AvailableChartColorsKeys[]
  valueFormatter?: (value: number) => string
  startEndOnly?: boolean
  showXAxis?: boolean
  showYAxis?: boolean
  showGridLines?: boolean
  yAxisWidth?: number
  intervalType?: "preserveStartEnd" | "equidistantPreserveStart"
  showTooltip?: boolean
  showLegend?: boolean
  autoMinValue?: boolean
  minValue?: number
  maxValue?: number
  allowDecimals?: boolean
  onValueChange?: (value: BarChartEventProps) => void
  enableLegendSlider?: boolean
  tickGap?: number
  barCategoryGap?: string | number
  xAxisLabel?: string
  yAxisLabel?: string
  type?: "default" | "stacked" | "percent"
  legendPosition?: "left" | "center" | "right"
  tooltipCallback?: (tooltipCallbackContent: TooltipProps) => void
  customTooltip?: React.ComponentType<TooltipProps>
  syncId?: string
}

const BarChart = React.forwardRef<HTMLDivElement, BarChartProps>(
  (props, forwardedRef) => {
    const {
      data = [],
      categories = [],
      index,
      colors = AvailableChartColors,
      valueFormatter = (value: number) => value.toString(),
      startEndOnly = false,
      showXAxis = true,
      showYAxis = true,
      showGridLines = true,
      yAxisWidth = 56,
      intervalType = "equidistantPreserveStart",
      showTooltip = true,
      showLegend = true,
      autoMinValue = false,
      minValue,
      maxValue,
      allowDecimals = true,
      className,
      onValueChange,
      enableLegendSlider = false,
      barCategoryGap = "2%",
      tickGap = 5,
      xAxisLabel,
      yAxisLabel,
      type = "default",
      legendPosition = "right",
      tooltipCallback,
      customTooltip,
      syncId,
      ...other
    } = props
    const CustomTooltip = customTooltip
    const paddingValue =
      (!showXAxis && !showYAxis) || (startEndOnly && !showYAxis) ? 0 : 20
    const [legendHeight, setLegendHeight] = React.useState(60)
    const [activeLegend, setActiveLegend] = React.useState<string | undefined>(
      undefined,
    )
    const categoryColors = constructCategoryColors(categories, colors)
    const [activeBar, setActiveBar] = React.useState<any | undefined>(undefined)
    const yAxisDomain = getYAxisDomain(autoMinValue, minValue, maxValue)
    const hasOnValueChange = !!onValueChange
    const stacked = type === "stacked" || type === "percent"

    const prevActiveRef = React.useRef<boolean | undefined>(undefined)
    const prevLabelRef = React.useRef<string | undefined>(undefined)

    function valueToPercent(value: number) {
      return `${(value * 100).toFixed(0)}%`
    }

    function onBarClick(data: any, _: any, event: React.MouseEvent) {
      event.stopPropagation()
      if (!onValueChange) return
      if (deepEqual(activeBar, { ...data.payload, value: data.value })) {
        setActiveLegend(undefined)
        setActiveBar(undefined)
        onValueChange?.(null)
      } else {
        setActiveLegend(data.tooltipPayload?.[0]?.dataKey)
        setActiveBar({
          ...data.payload,
          value: data.value,
        })
        onValueChange?.({
          eventType: "bar",
          categoryClicked: data.tooltipPayload?.[0]?.dataKey,
          ...data.payload,
        })
      }
    }

    function onCategoryClick(dataKey: string) {
      if (!hasOnValueChange) return
      if (dataKey === activeLegend && !activeBar) {
        setActiveLegend(undefined)
        onValueChange?.(null)
      } else {
        setActiveLegend(dataKey)
        onValueChange?.({
          eventType: "category",
          categoryClicked: dataKey,
        })
      }
      setActiveBar(undefined)
    }

    return (
      <div
        ref={forwardedRef}
        className={cx("h-80 w-full", className)}
        {...other}
      >
        <ResponsiveContainer>
          <RechartsBarChart
            data={data}
            onClick={
              hasOnValueChange && (activeLegend || activeBar)
                ? () => {
                    setActiveBar(undefined)
                    setActiveLegend(undefined)
                    onValueChange?.(null)
                  }
                : undefined
            }
            margin={{
              bottom: xAxisLabel ? 30 : undefined,
              left: yAxisLabel ? 20 : undefined,
              right: yAxisLabel ? 5 : undefined,
              top: 5,
            }}
            stackOffset={type === "percent" ? "expand" : undefined}
            layout="horizontal"
            barCategoryGap={barCategoryGap}
            syncId={syncId}
          >
            {showGridLines ? (
              <CartesianGrid
                className={cx("stroke-gray-200 stroke-1 dark:stroke-gray-800")}
                horizontal={true}
                vertical={false}
              />
            ) : null}
            <XAxis
              hide={!showXAxis}
              tick={{
                transform: "translate(0, 6)",
              }}
              fill=""
              stroke=""
              className={cx(
                // base
                "text-xs",
                // text fill
                "mt-4 fill-gray-500 dark:fill-gray-500",
              )}
              tickLine={false}
              axisLine={false}
              minTickGap={tickGap}
              {...{
                padding: {
                  left: paddingValue,
                  right: paddingValue,
                },
                dataKey: index,
                interval: startEndOnly ? "preserveStartEnd" : intervalType,
                ticks: startEndOnly
                  ? [data[0][index], data[data.length - 1][index]]
                  : undefined,
              }}
            >
              {xAxisLabel && (
                <Label
                  position="insideBottom"
                  offset={-20}
                  className="fill-gray-800 text-sm font-medium dark:fill-gray-200"
                >
                  {xAxisLabel}
                </Label>
              )}
            </XAxis>
            <YAxis
              width={yAxisWidth}
              hide={!showYAxis}
              axisLine={false}
              tickLine={false}
              fill=""
              stroke=""
              className={cx(
                // base
                "text-xs",
                // text fill
                "fill-gray-500 dark:fill-gray-500",
              )}
              tick={{
                transform: "translate(-3, 0)",
              }}
              {...{
                type: "number",
                domain: yAxisDomain as AxisDomain,
                tickFormatter:
                  type === "percent" ? valueToPercent : valueFormatter,
                allowDecimals: allowDecimals,
              }}
            >
              {yAxisLabel && (
                <Label
                  position="insideLeft"
                  style={{ textAnchor: "middle" }}
                  angle={-90}
                  offset={-15}
                  className="fill-gray-800 text-sm font-medium dark:fill-gray-200"
                >
                  {yAxisLabel}
                </Label>
              )}
            </YAxis>
            <Tooltip
              wrapperStyle={{ outline: "none" }}
              isAnimationActive={true}
              animationDuration={100}
              cursor={{ fill: "#d1d5db", opacity: "0.15" }}
              offset={20}
              position={{
                y: 0,
              }}
              content={({ active, payload, label }) => {
                const cleanPayload: TooltipProps["payload"] = payload
                  ? payload.map((item: any) => ({
                      category: item.dataKey,
                      value: item.value,
                      index: item.payload[index],
                      color: categoryColors.get(
                        item.dataKey,
                      ) as AvailableChartColorsKeys,
                      type: item.type,
                      payload: item.payload,
                    }))
                  : []

                if (
                  tooltipCallback &&
                  (active !== prevActiveRef.current ||
                    label !== prevLabelRef.current)
                ) {
                  tooltipCallback({ active, payload: cleanPayload, label })
                  prevActiveRef.current = active
                  prevLabelRef.current = label
                }

                return showTooltip && active ? (
                  CustomTooltip ? (
                    <CustomTooltip
                      active={active}
                      payload={cleanPayload}
                      label={label}
                    />
                  ) : (
                    <ChartTooltip
                      active={active}
                      payload={cleanPayload}
                      label={label}
                      valueFormatter={valueFormatter}
                    />
                  )
                ) : null
              }}
            />
            {showLegend ? (
              <RechartsLegend
                verticalAlign="top"
                height={legendHeight}
                content={({ payload }) =>
                  ChartLegend(
                    { payload },
                    categoryColors,
                    setLegendHeight,
                    activeLegend,
                    hasOnValueChange
                      ? (clickedLegendItem: string) =>
                          onCategoryClick(clickedLegendItem)
                      : undefined,
                    enableLegendSlider,
                    legendPosition,
                    yAxisWidth,
                  )
                }
              />
            ) : null}
            {categories.map((category) => (
              <Bar
                className={cx(
                  getColorClassName(
                    categoryColors.get(category) as AvailableChartColorsKeys,
                    "fill",
                  ),
                  onValueChange ? "cursor-pointer" : "",
                )}
                key={category}
                name={category}
                type="linear"
                dataKey={category}
                stackId={stacked ? "stack" : undefined}
                isAnimationActive={false}
                fill=""
                shape={(props: any) => {
                  const strokeClass = getColorClassName(
                    categoryColors.get(category) as AvailableChartColorsKeys,
                    "stroke",
                  )
                  return renderShape(
                    props,
                    activeBar,
                    activeLegend,
                    strokeClass,
                  )
                }}
                onClick={onBarClick}
              />
            ))}
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
    )
  },
)

BarChart.displayName = "BarChart"

const pageViews = [
  //array-start
  { date: "01", "Page Views": 1540 },
  { date: "02", "Page Views": 1600 },
  { date: "03", "Page Views": 1100 },
  { date: "04", "Page Views": 1250 },
  { date: "05", "Page Views": 1300 },
  { date: "06", "Page Views": 1200 },
  { date: "07", "Page Views": 0 },
  { date: "08", "Page Views": 0 },
  { date: "09", "Page Views": 0 },
  { date: "10", "Page Views": 1500 },
  { date: "11", "Page Views": 1600 },
  { date: "12", "Page Views": 900 },
  { date: "13", "Page Views": 2000 },
  { date: "14", "Page Views": 1800 },
  { date: "15", "Page Views": 1700 },
  { date: "16", "Page Views": 1800 },
  { date: "17", "Page Views": 2200 },
  { date: "18", "Page Views": 2100 },
  { date: "19", "Page Views": 1200 },
  { date: "20", "Page Views": 2400 },
  { date: "21", "Page Views": 2500 },
  { date: "22", "Page Views": 2600 },
  { date: "23", "Page Views": 2000 },
  { date: "24", "Page Views": 1400 },
  { date: "25", "Page Views": 1900 },
  { date: "26", "Page Views": 1000 },
  { date: "27", "Page Views": 2100 },
  { date: "28", "Page Views": 2300 },
  { date: "29", "Page Views": 1500 },
  { date: "30", "Page Views": 1700 },
  //array-end
]

const uniqueVisitors = [
  //array-start
  { date: "01", "Unique Visitors": 1120 },
  { date: "02", "Unique Visitors": 1200 },
  { date: "03", "Unique Visitors": 600 },
  { date: "04", "Unique Visitors": 1050 },
  { date: "05", "Unique Visitors": 900 },
  { date: "06", "Unique Visitors": 1000 },
  { date: "07", "Unique Visitors": 0 },
  { date: "08", "Unique Visitors": 0 },
  { date: "09", "Unique Visitors": 0 },
  { date: "10", "Unique Visitors": 1300 },
  { date: "11", "Unique Visitors": 1200 },
  { date: "12", "Unique Visitors": 800 },
  { date: "13", "Unique Visitors": 1500 },
  { date: "14", "Unique Visitors": 1400 },
  { date: "15", "Unique Visitors": 1300 },
  { date: "16", "Unique Visitors": 1400 },
  { date: "17", "Unique Visitors": 1700 },
  { date: "18", "Unique Visitors": 1500 },
  { date: "19", "Unique Visitors": 1000 },
  { date: "20", "Unique Visitors": 1800 },
  { date: "21", "Unique Visitors": 1600 },
  { date: "22", "Unique Visitors": 1700 },
  { date: "23", "Unique Visitors": 1400 },
  { date: "24", "Unique Visitors": 1100 },
  { date: "25", "Unique Visitors": 1200 },
  { date: "26", "Unique Visitors": 800 },
  { date: "27", "Unique Visitors": 1500 },
  { date: "28", "Unique Visitors": 1600 },
  { date: "29", "Unique Visitors": 1300 },
  { date: "30", "Unique Visitors": 1400 },
  //array-end
]

const bounceRate = [
  //array-start
  { date: "01", "Bounce Rate": 0.55 },
  { date: "02", "Bounce Rate": 0.52 },
  { date: "03", "Bounce Rate": 0.65 },
  { date: "04", "Bounce Rate": 0.6 },
  { date: "05", "Bounce Rate": 0.5 },
  { date: "06", "Bounce Rate": 0.48 },
  { date: "07", "Bounce Rate": 0 },
  { date: "08", "Bounce Rate": 0 },
  { date: "09", "Bounce Rate": 0 },
  { date: "10", "Bounce Rate": 0.58 },
  { date: "11", "Bounce Rate": 0.6 },
  { date: "12", "Bounce Rate": 0.72 },
  { date: "13", "Bounce Rate": 0.45 },
  { date: "14", "Bounce Rate": 0.48 },
  { date: "15", "Bounce Rate": 0.5 },
  { date: "16", "Bounce Rate": 0.47 },
  { date: "17", "Bounce Rate": 0.44 },
  { date: "18", "Bounce Rate": 0.52 },
  { date: "19", "Bounce Rate": 0.68 },
  { date: "20", "Bounce Rate": 0.41 },
  { date: "21", "Bounce Rate": 0.38 },
  { date: "22", "Bounce Rate": 0.4 },
  { date: "23", "Bounce Rate": 0.43 },
  { date: "24", "Bounce Rate": 0.49 },
  { date: "25", "Bounce Rate": 0.55 },
  { date: "26", "Bounce Rate": 0.7 },
  { date: "27", "Bounce Rate": 0.46 },
  { date: "28", "Bounce Rate": 0.42 },
  { date: "29", "Bounce Rate": 0.6 },
  { date: "30", "Bounce Rate": 0.45 },
  //array-end
]

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`

export default function Example() {
  return (
    <Card className="mx-auto flex max-w-4xl flex-col gap-6">
      <div>
        <h1 className="text-sm text-gray-600 dark:text-gray-400">Page Views</h1>
        <p className="text-2xl font-semibold text-blue-500 dark:text-blue-500">
          433
        </p>
        <BarChart
          syncId="sync"
          data={pageViews}
          index="date"
          categories={["Page Views"]}
          showLegend={false}
          colors={["blue"]}
          showYAxis={false}
          showGridLines={false}
          valueFormatter={valueFormatter}
          className="mt-2 !h-36"
        />
      </div>
      <div>
        <h1 className="text-sm text-gray-600 dark:text-gray-400">
          Unique Visitors
        </h1>
        <p className="text-2xl font-semibold text-violet-500 dark:text-violet-500">
          234
        </p>
        <BarChart
          syncId="sync"
          data={uniqueVisitors}
          index="date"
          categories={["Unique Visitors"]}
          showLegend={false}
          colors={["violet"]}
          showYAxis={false}
          showGridLines={false}
          valueFormatter={valueFormatter}
          className="mt-2 !h-36"
        />
      </div>
      <div>
        <h1 className="text-sm text-gray-600 dark:text-gray-400">
          Bounce Rate
        </h1>
        <p className="text-2xl font-semibold text-fuchsia-500 dark:text-fuchsia-500">
          584
        </p>
        <BarChart
          syncId="sync"
          data={bounceRate}
          index="date"
          categories={["Bounce Rate"]}
          showLegend={false}
          colors={["fuchsia"]}
          showYAxis={false}
          showGridLines={false}
          valueFormatter={valueFormatter}
          className="mt-2 !h-36"
        />
      </div>
    </Card>
  )
}
```


```example/bar-charts-bar-chart-04.tsx
"use client"

import React from "react"

import { cx } from "@/lib/utils"

import { BarChart } from "@/atom/BarChart"
import { Card } from "@/atom/Card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/atom/Tabs"

const dataEurope = [
  //array-start
  {
    date: "Jan 23",
    Successful: 12,
    Refunded: 0,
    Fraudulent: 1,
  },
  {
    date: "Feb 23",
    Successful: 24,
    Refunded: 1,
    Fraudulent: 1,
  },
  {
    date: "Mar 23",
    Successful: 48,
    Refunded: 4,
    Fraudulent: 4,
  },
  {
    date: "Apr 23",
    Successful: 24,
    Refunded: 2,
    Fraudulent: 3,
  },
  {
    date: "May 23",
    Successful: 34,
    Refunded: 0,
    Fraudulent: 0,
  },
  {
    date: "Jun 23",
    Successful: 26,
    Refunded: 0,
    Fraudulent: 0,
  },
  {
    date: "Jul 23",
    Successful: 12,
    Refunded: 0,
    Fraudulent: 0,
  },
  {
    date: "Aug 23",
    Successful: 38,
    Refunded: 2,
    Fraudulent: 0,
  },
  {
    date: "Sep 23",
    Successful: 23,
    Refunded: 1,
    Fraudulent: 0,
  },
  {
    date: "Oct 23",
    Successful: 20,
    Refunded: 0,
    Fraudulent: 0,
  },
  {
    date: "Nov 23",
    Successful: 24,
    Refunded: 0,
    Fraudulent: 0,
  },
  {
    date: "Dec 23",
    Successful: 21,
    Refunded: 8,
    Fraudulent: 1,
  },
  //array-end
]

const dataAsia = [
  //array-start
  {
    date: "Jan 23",
    Successful: 31,
    Refunded: 1,
    Fraudulent: 2,
  },
  {
    date: "Feb 23",
    Successful: 32,
    Refunded: 2,
    Fraudulent: 1,
  },
  {
    date: "Mar 23",
    Successful: 44,
    Refunded: 3,
    Fraudulent: 3,
  },
  {
    date: "Apr 23",
    Successful: 23,
    Refunded: 2,
    Fraudulent: 4,
  },
  {
    date: "May 23",
    Successful: 35,
    Refunded: 1,
    Fraudulent: 1,
  },
  {
    date: "Jun 23",
    Successful: 48,
    Refunded: 1,
    Fraudulent: 1,
  },
  {
    date: "Jul 23",
    Successful: 33,
    Refunded: 1,
    Fraudulent: 1,
  },
  {
    date: "Aug 23",
    Successful: 38,
    Refunded: 3,
    Fraudulent: 0,
  },
  {
    date: "Sep 23",
    Successful: 41,
    Refunded: 2,
    Fraudulent: 0,
  },
  {
    date: "Oct 23",
    Successful: 39,
    Refunded: 1,
    Fraudulent: 0,
  },
  {
    date: "Nov 23",
    Successful: 32,
    Refunded: 1,
    Fraudulent: 1,
  },
  {
    date: "Dec 23",
    Successful: 19,
    Refunded: 5,
    Fraudulent: 1,
  },
  //array-end
]

const summary = [
  //array-start
  {
    name: "Europe",
    total: 291,
    change: "+2.3%",
    changeType: "positive",
    data: dataEurope,
    details: [
      {
        name: "Successful",
        value: 263,
      },
      {
        name: "Refunded",
        value: 18,
      },
      {
        name: "Fraudulent",
        value: 10,
      },
    ],
  },
  {
    name: "Asia",
    total: 758,
    change: "-0.3%",
    changeType: "negative",
    data: dataAsia,
    details: [
      {
        name: "Successful",
        value: 405,
      },
      {
        name: "Refunded",
        value: 21,
      },
      {
        name: "Fraudulent",
        value: 15,
      },
    ],
  },
  //array-end
]

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`

type Status = "Successful" | "Refunded" | "Fraudulent"

const statusColor: Record<Status, string> = {
  Successful: "bg-blue-500 dark:bg-blue-500",
  Refunded: "bg-violet-500 dark:bg-violet-500",
  Fraudulent: "bg-fuchsia-500 dark:bg-fuchsia-500",
}

export default function Example() {
  return (
    <div className="obfuscate">
      <Card className="sm:mx-auto sm:max-w-lg">
        <h3 className="font-medium text-gray-900 dark:text-gray-50">
          Online payments
        </h3>
        <Tabs defaultValue={summary[0].name} className="mt-8">
          <TabsList className="space-x-0 border-t border-gray-200 dark:border-gray-800">
            {summary.map((tab, index) => (
              <React.Fragment key={tab.name}>
                <TabsTrigger
                  value={tab.name}
                  className="group w-full px-4 pt-2 text-left hover:border-gray-400 hover:bg-gray-50 dark:hover:border-gray-600 hover:dark:bg-gray-900"
                >
                  <p className="font-normal text-gray-500 dark:text-gray-500">
                    {tab.name}
                  </p>
                  <p className="text-lg font-bold text-gray-500 group-data-[state=active]:text-gray-900 dark:text-gray-500 group-data-[state=active]:dark:text-gray-50">
                    {tab.total}
                  </p>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
                    <span
                      className={cx(
                        tab.changeType === "positive"
                          ? "text-emerald-700 dark:text-emerald-500"
                          : "text-red-700 dark:text-red-500",
                        "font-medium",
                      )}
                    >
                      {tab.change}
                    </span>{" "}
                    to last period
                  </p>
                </TabsTrigger>
                {index < summary.length - 1 && (
                  <span
                    className="h-16 border-r border-gray-200 dark:border-gray-800"
                    aria-hidden={true}
                  />
                )}
              </React.Fragment>
            ))}
          </TabsList>
          {summary.map((region) => (
            <TabsContent key={region.name} value={region.name}>
              <BarChart
                data={region.data}
                index="date"
                categories={["Successful", "Refunded", "Fraudulent"]}
                colors={["blue", "violet", "fuchsia"]}
                type="stacked"
                valueFormatter={valueFormatter}
                showLegend={false}
                showYAxis={false}
                showGridLines={true}
                startEndOnly={true}
                className="mt-8 !h-48"
              />
              <ul
                role="list"
                className="mt-2 divide-y divide-gray-200 text-sm text-gray-500 dark:divide-gray-800 dark:text-gray-500"
              >
                {region.details.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-2 py-1.5">
                      <span
                        className={cx(
                          statusColor[item.name as Status],
                          "size-2 shrink-0 rounded-sm",
                        )}
                        aria-hidden={true}
                      />
                      <span>{item.name}</span>
                    </div>
                    <span className="font-medium text-gray-900 dark:text-gray-50">
                      {valueFormatter(item.value)}
                    </span>
                  </li>
                ))}
              </ul>
            </TabsContent>
          ))}
        </Tabs>
      </Card>
    </div>
  )
}
```


```example/donut-charts-donut-chart-06.tsx
"use client"

import { cx } from "@/lib/utils"

import { Card } from "@/atom/Card"
import { DonutChart } from "@/atom/DonutChart"

const data = [
  //array-start
  {
    name: "Real estate",
    amount: 2095920,
    share: "84.3%",
    href: "#",
    borderColor: "bg-blue-500 dark:bg-blue-500",
  },
  {
    name: "Stocks & ETFs",
    amount: 250120,
    share: "10.1%",
    href: "#",
    borderColor: "bg-violet-500 dark:bg-violet-500",
  },
  {
    name: "Cash & cash equivalent",
    amount: 140110,
    share: "5.6%",
    href: "#",
    borderColor: "bg-fuchsia-500 dark:bg-fuchsia-500",
  },
  //array-end
]

const currencyFormatter = (number: number) => {
  return "$" + Intl.NumberFormat("us").format(number).toString()
}

export default function Example() {
  return (
    <div className="obfuscate">
      <Card className="sm:mx-auto sm:max-w-xl">
        <h3 className="text-sm font-medium text-gray-900 dark:text-gray-50">
          Asset allocation
        </h3>
        <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-8">
          <DonutChart
            data={data}
            value="amount"
            category="name"
            valueFormatter={currencyFormatter}
            showTooltip={false}
            className="mx-auto h-40"
            showLabel={true}
            colors={["blue", "violet", "fuchsia"]}
          />
          <div className="mt-6 flex items-center sm:mt-0">
            <ul role="list" className="space-y-3">
              {data.map((item) => (
                <li key={item.name} className="flex space-x-3">
                  <span
                    className={cx(item.borderColor, "w-1 shrink-0 rounded")}
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
                      {currencyFormatter(item.amount)}{" "}
                      <span className="font-normal">({item.share})</span>
                    </p>
                    <p className="mt-0.5 text-sm whitespace-nowrap text-gray-500 dark:text-gray-500">
                      {item.name}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
    </div>
  )
}
```


```example/donut-charts-donut-chart-07.tsx
"use client"

import { cx } from "@/lib/utils"

import { DonutChart } from "@/atom/DonutChart"

const data = [
  //array-start
  {
    name: "Real estate",
    amount: 2095920,
    share: "84.3%",
    href: "#",
    borderColor: "bg-blue-500 dark:bg-blue-500",
  },
  {
    name: "Stocks & ETFs",
    amount: 250120,
    share: "10.1%",
    href: "#",
    borderColor: "bg-violet-500 dark:bg-violet-500",
  },
  {
    name: "Metals",
    amount: 160720,
    share: "10.1%",
    href: "#",
    borderColor: "bg-fuchsia-500 dark:bg-fuchsia-500",
  },
  //array-enddev
]

const currencyFormatter = (number: number) => {
  return "$" + Intl.NumberFormat("us").format(number).toString()
}

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="max-w-7xl">
        <h3 className="text-sm font-medium text-gray-900 dark:text-gray-50">
          Asset allocation
        </h3>
        <div className="mt-6 lg:flex lg:items-end lg:justify-between">
          <div className="flex items-center justify-start space-x-4 lg:items-end">
            <DonutChart
              data={data}
              value="amount"
              category="name"
              valueFormatter={currencyFormatter}
              showTooltip={false}
              className="!h-20 !w-20"
              showLabel={false}
              colors={["blue", "violet", "fuchsia"]}
            />
            <div>
              <p className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                $2,450,790
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Total asset value
              </p>
            </div>
          </div>
          <ul
            role="list"
            className="mt-6 grid grid-cols-1 gap-px bg-gray-200 lg:mt-0 lg:grid-cols-3 dark:bg-gray-800"
          >
            {data.map((item) => (
              // Adjust dark:bg-gray-950 accordingly if a different dark mode background tone is set
              <li
                key={item.name}
                className="bg-white px-0 py-3 lg:px-4 lg:py-0 lg:text-right dark:bg-gray-950"
              >
                <p className="text-sm font-semibold text-gray-900 dark:text-gray-50">
                  {currencyFormatter(item.amount)}{" "}
                  <span className="font-normal">({item.share})</span>
                </p>
                <div className="flex items-center space-x-2 lg:justify-end">
                  <span
                    className={cx(
                      item.borderColor,
                      "size-2.5 shrink-0 rounded-sm",
                    )}
                    aria-hidden={true}
                  />
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    {item.name}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
```


```example/donut-charts-donut-chart-05.tsx
"use client"

import { RiArrowRightSLine } from "@remixicon/react"

import { cx } from "@/lib/utils"

import { Card } from "@/atom/Card"
import { DonutChart } from "@/atom/DonutChart"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/atom/Tabs"

const dataByClass = [
  //array-start
  {
    name: "Real estate",
    amount: 2095920,
    share: "80.5%",
    href: "#",
    borderColor: "border-blue-500 dark:border-blue-500",
  },
  {
    name: "Stocks & ETFs",
    amount: 250120,
    share: "9.6%",
    href: "#",
    borderColor: "border-indigo-500 dark:border-indigo-500",
  },
  {
    name: "Bonds",
    amount: 140110,
    share: "5.4%",
    href: "#",
    borderColor: "border-cyan-500 dark:border-cyan-500",
  },
  {
    name: "Metals",
    amount: 72980,
    share: "2.8%",
    href: "#",
    borderColor: "border-purple-500 dark:border-purple-500",
  },
  {
    name: "Cash & cash equivalent",
    amount: 42980,
    share: "1.7%",
    href: "#",
    borderColor: "border-fuchsia-500 dark:border-fuchsia-500",
  },
  //array-end
]

const dataBySector = [
  //array-start
  {
    name: "Technology",
    amount: 950670,
    share: "36.5%",
    href: "#",
    borderColor: "border-blue-500 dark:border-blue-500",
  },
  {
    name: "Financial services",
    amount: 750342,
    share: "28.8%",
    href: "#",
    borderColor: "border-indigo-500 dark:border-indigo-500",
  },
  {
    name: "Consumer products",
    amount: 550709,
    share: "21.2%",
    href: "#",
    borderColor: "border-cyan-500 dark:border-cyan-500",
  },
  {
    name: "Energy",
    amount: 200220,
    share: "7.7%",
    href: "#",
    borderColor: "border-purple-500 dark:border-purple-500",
  },
  {
    name: "Media & Entertainment",
    amount: 150169,
    share: "5.8%",
    href: "#",
    borderColor: "border-fuchsia-500 dark:border-fuchsia-500",
  },
  //array-end
]

const summary = [
  //array-start
  {
    name: "Class",
    data: dataByClass,
  },
  {
    name: "Sector",
    data: dataBySector,
  },
  //array-end
]

const currencyFormatter = (number: number) => {
  return "$" + Intl.NumberFormat("us").format(number).toString()
}

export default function Example() {
  return (
    <div className="obfuscate">
      <Card className="overflow-hidden !p-0 sm:mx-auto sm:max-w-lg">
        <div className="px-6 pt-6">
          <h3 className="text-sm font-medium text-gray-900 dark:text-gray-50">
            Asset allocation
          </h3>
          <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
          </p>
        </div>
        <Tabs defaultValue={summary[0].name}>
          <TabsList className="px-6 pt-6">
            {summary.map((category) => (
              <TabsTrigger key={category.name} value={category.name}>
                By {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="pt-8">
            {summary.map((category) => (
              <TabsContent key={category.name} value={category.name}>
                <div className="px-6 pb-6">
                  <DonutChart
                    className="mx-auto"
                    data={category.data}
                    value="amount"
                    category="name"
                    valueFormatter={currencyFormatter}
                    showLabel={true}
                    showTooltip={false}
                    colors={["blue", "indigo", "cyan", "purple", "fuchsia"]}
                  />
                </div>
                <ul
                  role="list"
                  className="mt-2 divide-y divide-gray-200 border-t border-gray-200 text-sm text-gray-500 dark:divide-gray-800 dark:border-gray-900 dark:text-gray-500"
                >
                  {category.data.map((item) => (
                    <li
                      key={item.name}
                      className="group relative flex items-center justify-between space-x-4 truncate pr-4 hover:bg-gray-50 hover:dark:bg-gray-900"
                    >
                      <div
                        className={cx(
                          item.borderColor,
                          "flex h-12 items-center truncate border-l-2 pl-4",
                        )}
                      >
                        <span className="truncate group-hover:text-gray-700 dark:text-gray-300 group-hover:dark:text-gray-50">
                          <a href={item.href} className="focus:outline-none">
                            {/* extend link to entire list item */}
                            <span
                              className="absolute inset-0"
                              aria-hidden={true}
                            />
                            {item.name}
                          </a>
                        </span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <span className="font-medium text-gray-900 tabular-nums dark:text-gray-50">
                          {currencyFormatter(item.amount)}{" "}
                          <span className="font-normal text-gray-500 dark:text-gray-500">
                            ({item.share})
                          </span>
                        </span>
                        <RiArrowRightSLine
                          className="size-4 shrink-0 text-gray-400 group-hover:text-gray-500 dark:text-gray-600 group-hover:dark:text-gray-500"
                          aria-hidden={true}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </Card>
    </div>
  )
}
```


```example/donut-charts-donut-chart-04.tsx
"use client"

import { cx } from "@/lib/utils"

import { Card } from "@/atom/Card"
import { DonutChart } from "@/atom/DonutChart"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/atom/Tabs"

const dataByClass = [
  //array-start
  {
    name: "Real estate",
    amount: 2095920,
    share: "80.5%",
    borderColor: "border-blue-500 dark:border-blue-500",
  },
  {
    name: "Stocks & ETFs",
    amount: 250120,
    share: "9.6%",
    borderColor: "border-indigo-500 dark:border-indigo-500",
  },
  {
    name: "Bonds",
    amount: 140110,
    share: "5.4%",
    borderColor: "border-cyan-500 dark:border-cyan-500",
  },
  {
    name: "Metals",
    amount: 72980,
    share: "2.8%",
    borderColor: "border-purple-500 dark:border-purple-500",
  },
  {
    name: "Cash & Cash Equivalent",
    amount: 42980,
    share: "1.7%",
    borderColor: "border-fuchsia-500 dark:border-fuchsia-500",
  },
  //array-end
]

const dataBySector = [
  //array-start
  {
    name: "Technology",
    amount: 950670,
    share: "36.5%",
    borderColor: "border-blue-500 dark:border-blue-500",
  },
  {
    name: "Financial services",
    amount: 750342,
    share: "28.8%",
    borderColor: "border-indigo-500 dark:border-indigo-500",
  },
  {
    name: "Consumer products",
    amount: 550709,
    share: "21.2%",
    borderColor: "border-cyan-500 dark:border-cyan-500",
  },
  {
    name: "Energy",
    amount: 200220,
    share: "7.7%",
    borderColor: "border-purple-500 dark:border-purple-500",
  },
  {
    name: "Media & Entertainment",
    amount: 150169,
    share: "5.8%",
    borderColor: "border-fuchsia-500 dark:border-fuchsia-500",
  },
  //array-end
]

const summary = [
  {
    name: "Class",
    data: dataByClass,
  },
  {
    name: "Sector",
    data: dataBySector,
  },
]

const currencyFormatter = (number: number) => {
  return "$" + Intl.NumberFormat("us").format(number).toString()
}

export default function Example() {
  return (
    <div className="obfuscate">
      <Card className="!p-0 sm:mx-auto sm:max-w-lg">
        <div className="px-6 pt-6">
          <h3 className="text-sm font-medium text-gray-900 dark:text-gray-50">
            Expenses breakdown
          </h3>
          <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
          </p>
        </div>
        <Tabs defaultValue={summary[0].name}>
          <TabsList className="px-6 pt-6">
            {summary.map((category) => (
              <TabsTrigger key={category.name} value={category.name}>
                By {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="px-6 pb-6">
            {summary.map((category) => (
              <TabsContent key={category.name} value={category.name}>
                <DonutChart
                  className="mx-auto mt-8"
                  data={category.data}
                  value="amount"
                  category="name"
                  valueFormatter={currencyFormatter}
                  showLabel={true}
                  showTooltip={false}
                  colors={["blue", "indigo", "cyan", "purple", "fuchsia"]}
                />
                <p className="mt-8 flex items-center justify-between text-xs text-gray-500 dark:text-gray-500">
                  <span>{category.name}</span>
                  <span>Amount / Share</span>
                </p>
                <ul
                  role="list"
                  className="mt-2 divide-y divide-gray-200 text-sm text-gray-500 dark:divide-gray-800 dark:text-gray-500"
                >
                  {category.data.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-center justify-between space-x-4 truncate py-2"
                    >
                      <div
                        className={cx(
                          item.borderColor,
                          "flex h-8 items-center truncate border-l-[2.5px] pl-4",
                        )}
                      >
                        <span className="truncate dark:text-gray-300">
                          {item.name}
                        </span>
                      </div>
                      <span className="font-medium text-gray-900 tabular-nums dark:text-gray-50">
                        {currencyFormatter(item.amount)}{" "}
                        <span className="font-normal">({item.share})</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </Card>
    </div>
  )
}
```


```example/donut-charts-donut-chart-01.tsx
"use client"

import { cx } from "@/lib/utils"

import { Card } from "@/atom/Card"
import { DonutChart } from "@/atom/DonutChart"

const data = [
  //array-start
  {
    name: "Travel",
    amount: 6730,
    share: "32.1%",
    color: "bg-cyan-500 dark:bg-cyan-500",
  },
  {
    name: "IT & equipment",
    amount: 4120,
    share: "19.6%",
    color: "bg-blue-500 dark:bg-blue-500",
  },
  {
    name: "Training & development",
    amount: 3920,
    share: "18.6%",
    color: "bg-indigo-500 dark:bg-indigo-500",
  },
  {
    name: "Office supplies",
    amount: 3210,
    share: "15.3%",
    color: "bg-violet-500 dark:bg-violet-500",
  },
  {
    name: "Communication",
    amount: 3010,
    share: "14.3%",
    color: "bg-fuchsia-500 dark:bg-fuchsia",
  },
  //array-end
]

const currencyFormatter = (number: number) =>
  "$" + Intl.NumberFormat("us").format(number).toString()

export default function Example() {
  return (
    <>
      <Card className="sm:mx-auto sm:max-w-lg">
        <h3 className="text-sm font-medium text-gray-900 dark:text-gray-50">
          Total expenses by category
        </h3>
        <DonutChart
          className="mx-auto mt-8"
          data={data}
          category="name"
          value="amount"
          showLabel={true}
          valueFormatter={currencyFormatter}
          showTooltip={false}
          colors={["cyan", "blue", "indigo", "violet", "fuchsia"]}
        />
        <p className="mt-8 flex items-center justify-between text-xs text-gray-500 dark:text-gray-500">
          <span>Category</span>
          <span>Amount / Share</span>
        </p>
        <ul
          role="list"
          className="mt-2 divide-y divide-gray-200 text-sm text-gray-500 dark:divide-gray-800 dark:text-gray-500"
        >
          {data.map((item) => (
            <li
              key={item.name}
              className="relative flex items-center justify-between py-2"
            >
              <div className="flex items-center space-x-2.5 truncate">
                <span
                  className={cx(item.color, "size-2.5 shrink-0 rounded-sm")}
                  aria-hidden={true}
                />
                <span className="truncate dark:text-gray-300">{item.name}</span>
              </div>
              <p className="flex items-center space-x-2">
                <span className="font-medium text-gray-900 tabular-nums dark:text-gray-50">
                  {currencyFormatter(item.amount)}
                </span>
                <span className="rounded-md bg-gray-100 px-1.5 py-0.5 text-xs font-medium text-gray-700 tabular-nums dark:bg-gray-800 dark:text-gray-300">
                  {item.share}
                </span>
              </p>
            </li>
          ))}
        </ul>
      </Card>
    </>
  )
}
```


```example/donut-charts-donut-chart-03.tsx
"use client"

import { cx } from "@/lib/utils"

import { Card } from "@/atom/Card"
import { DonutChart } from "@/atom/DonutChart"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/atom/Tabs"

const dataByCategory = [
  //array-start
  {
    name: "Travel",
    amount: 6730,
    share: "32.1%",
    color: "bg-cyan-500 dark:bg-cyan-500",
  },
  {
    name: "IT & equipment",
    amount: 4120,
    share: "19.6%",
    color: "bg-blue-500 dark:bg-blue-500",
  },
  {
    name: "Training & development",
    amount: 3920,
    share: "18.6%",
    color: "bg-indigo-500 dark:bg-indigo-500",
  },
  {
    name: "Office supplies",
    amount: 3210,
    share: "15.3%",
    color: "bg-violet-500 dark:bg-violet-500",
  },
  {
    name: "Communication",
    amount: 3010,
    share: "14.3%",
    color: "bg-fuchsia-500 dark:bg-fuchsia-500",
  },
  //array-end
]

const dataByEmployee = [
  //array-start
  {
    name: "Max Down",
    amount: 5710,
    share: "27.2%",
    color: "bg-cyan-500 dark:bg-cyan-500",
  },
  {
    name: "Lena Smith",
    amount: 4940,
    share: "23.5%",
    color: "bg-blue-500 dark:bg-blue-500",
  },
  {
    name: "Joe Doe",
    amount: 4523,
    share: "21.5%",
    color: "bg-indigo-500 dark:bg-indigo-500",
  },
  {
    name: "Kathy Miller",
    amount: 3240,
    share: "15.4%",
    color: "bg-violet-500 dark:bg-violet-500",
  },
  {
    name: "Nelly Wave",
    amount: 2577,
    share: "12.3%",
    color: "bg-fuchsia-500 dark:bg-fuchsia-500",
  },
  //array-end
]

const summary = [
  //array-start
  {
    name: "Category",
    data: dataByCategory,
  },
  {
    name: "Employee",
    data: dataByEmployee,
  },
  //array-end
]

const currencyFormatter = (number: number) => {
  return "$" + Intl.NumberFormat("us").format(number).toString()
}

export default function Example() {
  return (
    <div className="obfuscate">
      <Card className="!p-0 sm:mx-auto sm:max-w-lg">
        <div className="px-6 pt-6">
          <h3 className="text-sm font-medium text-gray-900 dark:text-gray-50">
            Expenses breakdown
          </h3>
          <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
          </p>
        </div>
        <Tabs defaultValue={summary[0].name}>
          <TabsList className="px-6 pt-6">
            {summary.map((category) => (
              <TabsTrigger key={category.name} value={category.name}>
                By {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="px-6 pb-6">
            {summary.map((category) => (
              <TabsContent key={category.name} value={category.name}>
                <DonutChart
                  className="mx-auto mt-8"
                  data={category.data}
                  value="amount"
                  category="name"
                  valueFormatter={currencyFormatter}
                  showLabel={true}
                  showTooltip={false}
                  colors={["cyan", "blue", "indigo", "violet", "fuchsia"]}
                />
                <p className="mt-8 flex items-center justify-between text-xs text-gray-500 dark:text-gray-500">
                  <span>{category.name}</span>
                  <span>Amount / Share</span>
                </p>
                <ul
                  role="list"
                  className="mt-2 divide-y divide-gray-200 text-sm text-gray-500 dark:divide-gray-800 dark:text-gray-500"
                >
                  {category.data.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-center justify-between space-x-6 py-2"
                    >
                      <div className="flex items-center space-x-2.5 truncate">
                        <span
                          className={cx(
                            item.color,
                            "size-2.5 shrink-0 rounded-sm",
                          )}
                          aria-hidden={true}
                        />
                        <span className="truncate dark:text-gray-300">
                          {item.name}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-900 tabular-nums dark:text-gray-500">
                          {currencyFormatter(item.amount)}
                        </span>
                        <span className="rounded-md bg-gray-100 px-1.5 py-0.5 text-xs font-medium text-gray-700 tabular-nums dark:bg-gray-800 dark:text-gray-300">
                          {item.share}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </Card>
    </div>
  )
}
```


```example/donut-charts-donut-chart-02.tsx
"use client"

import { cx } from "@/lib/utils"

import { Card } from "@/atom/Card"
import { ProgressCircle } from "@/atom/ProgressCircle"

const data = [
  //array-start
  {
    region: "Europe",
    value: 56.5,
    color: "bg-amber-500 dark:bg-amber-500",
    href: "#",
    subregions: [
      {
        name: "Central Europe",
        value: "1.2/2M",
      },
      {
        name: "North Europe",
        value: "2/2.8M",
      },
    ],
  },
  {
    region: "Asia",
    value: 66.4,
    color: "bg-emerald-500 dark:bg-emerald-500",
    href: "#",
    subregions: [
      {
        name: "China",
        value: "3.1/4M",
      },
      {
        name: "Japan",
        value: "2/2.8M",
      },
    ],
  },
  {
    region: "North America",
    value: 76.1,
    color: "bg-blue-500 dark:bg-blue-500",
    href: "#",
    subregions: [
      {
        name: "USA",
        value: "5.9/7M",
      },
      {
        name: "Canada",
        value: "1.8/2.5M",
      },
    ],
  },
  //array-end
]

export default function Example() {
  return (
    <>
      <Card className="!p-0 sm:mx-auto sm:max-w-xl">
        <div className="border-b border-gray-200 px-4 py-4 dark:border-gray-900">
          <h3 className="text-sm font-medium text-gray-900 dark:text-gray-50">
            Sales potential realization ($)
          </h3>
        </div>
        <div className="items-start p-6 sm:flex sm:space-x-10">
          <ProgressCircle value={76.1} radius={70} strokeWidth={7}>
            <ProgressCircle
              value={66.4}
              radius={60}
              strokeWidth={7}
              variant="success"
            >
              <ProgressCircle
                value={56.5}
                radius={50}
                strokeWidth={7}
                variant="warning"
              >
                <p>
                  <span className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                    7.8
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-500">
                    /10
                  </span>
                </p>
              </ProgressCircle>
            </ProgressCircle>
          </ProgressCircle>
          <ul role="list" className="mt-4 w-full sm:mt-0">
            {data.map((region) => (
              <li
                key={region.region}
                className="relative rounded-md px-3 py-2 hover:bg-gray-50 hover:dark:bg-gray-800"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span
                      className={cx(region.color, "size-2.5 rounded-sm")}
                      aria-hidden={true}
                    />
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
                      <a href={region.href} className="focus:outline-none">
                        {/* Extend touch target to entire panel */}
                        <span className="absolute inset-0" aria-hidden={true} />
                        {region.region}
                      </a>
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
                    {region.value}&#37;
                  </p>
                </div>
                <ul
                  role="list"
                  className="divide-y divide-gray-200 text-sm text-gray-500 dark:divide-gray-800 dark:text-gray-500"
                >
                  {region.subregions.map((subregion) => (
                    <li
                      key={subregion.name}
                      className="flex items-center justify-between py-2"
                    >
                      <span>{subregion.name}</span>
                      <span>{subregion.value}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </>
  )
}
```


```example/line-charts-line-chart-01.tsx
"use client"

import { cx } from "@/lib/utils"

import { Card } from "@/atom/Card"
import { LineChart } from "@/atom/LineChart"

const data = [
  //array-start
  {
    date: "Jan 23",
    Organic: 232,
    Sponsored: 0,
    Affiliate: 49,
  },
  {
    date: "Feb 23",
    Organic: 241,
    Sponsored: 0,
    Affiliate: 61,
  },
  {
    date: "Mar 23",
    Organic: 291,
    Sponsored: 0,
    Affiliate: 55,
  },
  {
    date: "Apr 23",
    Organic: 101,
    Sponsored: 0,
    Affiliate: 21,
  },
  {
    date: "May 23",
    Organic: 318,
    Sponsored: 0,
    Affiliate: 66,
  },
  {
    date: "Jun 23",
    Organic: 205,
    Sponsored: 0,
    Affiliate: 69,
  },
  {
    date: "Jul 23",
    Organic: 372,
    Sponsored: 0,
    Affiliate: 55,
  },
  {
    date: "Aug 23",
    Organic: 341,
    Sponsored: 0,
    Affiliate: 74,
  },
  {
    date: "Sep 23",
    Organic: 387,
    Sponsored: 120,
    Affiliate: 190,
  },
  {
    date: "Oct 23",
    Organic: 220,
    Sponsored: 0,
    Affiliate: 89,
  },
  {
    date: "Nov 23",
    Organic: 372,
    Sponsored: 0,
    Affiliate: 44,
  },
  {
    date: "Dec 23",
    Organic: 321,
    Sponsored: 0,
    Affiliate: 93,
  },
  //array-end
]

const summary = [
  //array-start
  {
    name: "Organic",
    value: 3273,
  },
  {
    name: "Sponsored",
    value: 120,
  },
  {
    name: "Affiliate",
    value: 866,
  },
  //array-end
]

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`

type Status = "Organic" | "Sponsored" | "Affiliate"

const statusColor: Record<Status, string> = {
  Organic: "bg-blue-500 dark:bg-blue-500",
  Sponsored: "bg-violet-500 dark:bg-violet-500",
  Affiliate: "bg-fuchsia-500 dark:bg-fuchsia-500",
}

export default function Example() {
  return (
    <div className="obfuscate">
      <Card className="sm:mx-auto sm:max-w-md">
        <h3 className="text-sm font-medium text-gray-900 dark:text-gray-50">
          Units sold by channel
        </h3>
        <LineChart
          data={data}
          index="date"
          categories={["Organic", "Sponsored", "Affiliate"]}
          colors={["blue", "violet", "fuchsia"]}
          valueFormatter={valueFormatter}
          showLegend={false}
          showYAxis={false}
          startEndOnly={true}
          className="mt-6 !h-32"
        />
        <ul
          role="list"
          className="mt-2 divide-y divide-gray-200 text-sm text-gray-500 dark:divide-gray-800 dark:text-gray-500"
        >
          {summary.map((item) => (
            <li
              key={item.name}
              className="flex items-center justify-between py-2.5"
            >
              <div className="flex items-center space-x-2">
                <span
                  className={cx(
                    statusColor[item.name as Status],
                    "h-[3px] w-3.5 shrink-0 rounded-full",
                  )}
                  aria-hidden={true}
                />
                <span>{item.name}</span>
              </div>
              <span className="font-medium text-gray-900 dark:text-gray-50">
                {valueFormatter(item.value)}
              </span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  )
}
```


```example/line-charts-line-chart-03.tsx
"use client"

import { cx } from "@/lib/utils"

import { Card } from "@/atom/Card"
import { LineChart } from "@/atom/LineChart"

const data = [
  //array-start
  {
    date: "Jan 23",
    Munich: 42340,
    Zurich: 22320,
    Vienna: 12410,
  },
  {
    date: "Feb 23",
    Munich: 50120,
    Zurich: 32310,
    Vienna: 10300,
  },
  {
    date: "Mar 23",
    Munich: 45190,
    Zurich: 23450,
    Vienna: 10900,
  },
  {
    date: "Apr 23",
    Munich: 56420,
    Zurich: 13400,
    Vienna: 7900,
  },
  {
    date: "May 23",
    Munich: 40420,
    Zurich: 16400,
    Vienna: 12310,
  },
  {
    date: "Jun 23",
    Munich: 47010,
    Zurich: 18350,
    Vienna: 10250,
  },
  {
    date: "Jul 23",
    Munich: 47490,
    Zurich: 19950,
    Vienna: 12650,
  },
  {
    date: "Aug 23",
    Munich: 39610,
    Zurich: 10910,
    Vienna: 4650,
  },
  {
    date: "Sep 23",
    Munich: 45860,
    Zurich: 24740,
    Vienna: 12650,
  },
  {
    date: "Oct 23",
    Munich: 50910,
    Zurich: 15740,
    Vienna: 10430,
  },
  {
    date: "Nov 23",
    Munich: 4919,
    Zurich: 2874,
    Vienna: 2081,
  },
  {
    date: "Dec 23",
    Munich: 5519,
    Zurich: 2274,
    Vienna: 1479,
  },
  //array-end
]

const summary = [
  //array-start
  {
    location: "Munich",
    address: "Maximilianstrasse",
    color: "bg-blue-500 dark:bg-blue-500",
    type: "Flagship",
    total: "$460.2K",
    change: "+0.7%",
    changeType: "positive",
  },
  {
    location: "Zurich",
    address: "Bahnhofstrasse",
    color: "bg-violet-500 dark:bg-violet-500",
    type: "In-Store",
    total: "$237.3K",
    change: "-1.2%",
    changeType: "negative",
  },
  {
    location: "Vienna",
    address: "Stephansplatz",
    color: "bg-fuchsia-500 dark:bg-fuchsia-500",
    type: "In-Store",
    total: "$118.2K",
    change: "+4.6%",
    changeType: "positive",
  },
  //array-end
]

const currencyFormatter = (number: number) =>
  `$${Intl.NumberFormat("us").format(number).toString()}`

export default function Example() {
  return (
    <div className="obfuscate">
      <Card className="sm:mx-auto sm:max-w-lg">
        <h4 className="text-sm text-gray-500 dark:text-gray-500">Revenue</h4>
        <p className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
          $815,700
        </p>
        <LineChart
          data={data}
          index="date"
          categories={["Munich", "Zurich", "Vienna"]}
          colors={["blue", "violet", "fuchsia"]}
          showLegend={false}
          showYAxis={false}
          valueFormatter={currencyFormatter}
          className="mt-5 hidden !h-44 sm:block"
        />
        <LineChart
          data={data}
          index="date"
          categories={["Munich", "Zurich", "Vienna"]}
          colors={["blue", "violet", "fuchsia"]}
          showLegend={false}
          startEndOnly={true}
          showYAxis={false}
          valueFormatter={currencyFormatter}
          className="mt-5 !h-44 sm:hidden"
        />
        <ul className="mt-4 w-full divide-y divide-gray-200 truncate text-sm text-gray-500 dark:divide-gray-800 dark:text-gray-500">
          {summary.map((item) => (
            <li
              key={item.location}
              className="flex items-center justify-between py-2.5"
            >
              <div>
                <div className="flex items-center space-x-2">
                  <span
                    className={cx(
                      item.color,
                      "h-[3px] w-3.5 shrink-0 rounded-full",
                    )}
                    aria-hidden={true}
                  />
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-50">
                    {item.location}
                  </span>
                  <span className="rounded bg-gray-100 px-1.5 py-0.5 text-xs font-medium text-gray-500 dark:bg-gray-400/10 dark:text-gray-400">
                    {item.type}
                  </span>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-500">
                  {item.address}
                </span>
              </div>
              <div className="text-right">
                <p
                  className={cx(
                    item.changeType === "positive"
                      ? "text-emerald-700 dark:text-emerald-500"
                      : "text-red-700 dark:text-red-500",
                    "text-sm font-medium",
                  )}
                >
                  {item.change}
                </p>
                <span className="text-xs text-gray-500 dark:text-gray-500">
                  {item.total}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  )
}
```


```example/line-charts-line-chart-02.tsx
"use client"

import { Card } from "@/atom/Card"
import { LineChart } from "@/atom/LineChart"

const data = [
  //array-start
  { date: "Aug 01", price: 21.2 },
  { date: "Aug 02", price: 29.0 },
  { date: "Aug 03", price: 48.5 },
  { date: "Aug 04", price: 53.8 },
  { date: "Aug 05", price: 57.7 },
  { date: "Aug 06", price: 59.9 },
  { date: "Aug 07", price: 41.4 },
  { date: "Aug 08", price: 60.2 },
  { date: "Aug 09", price: 62.8 },
  { date: "Aug 10", price: 62.5 },
  { date: "Aug 11", price: 63.6 },
  { date: "Aug 12", price: 64.4 },
  { date: "Aug 13", price: 65.1 },
  { date: "Aug 14", price: 66.4 },
  { date: "Aug 15", price: 71.6 },
  { date: "Aug 16", price: 79.5 },
  { date: "Aug 17", price: 102.8 },
  { date: "Aug 18", price: 103.2 },
  { date: "Aug 19", price: 105.4 },
  { date: "Aug 20", price: 110.9 },
  { date: "Aug 21", price: 67.7 },
  { date: "Aug 22", price: 69.8 },
  { date: "Aug 23", price: 79.5 },
  { date: "Aug 24", price: 90.0 },
  { date: "Aug 25", price: 91.2 },
  { date: "Aug 26", price: 95.1 },
  { date: "Aug 27", price: 99.8 },
  { date: "Aug 28", price: 100.6 },
  { date: "Aug 29", price: 102.8 },
  { date: "Aug 30", price: 100.5 },
  { date: "Aug 31", price: 111.6 },
  { date: "Sep 01", price: 123.2 },
  { date: "Sep 02", price: 125.8 },
  { date: "Sep 03", price: 120.4 },
  { date: "Sep 04", price: 121.9 },
  { date: "Sep 05", price: 124.5 },
  { date: "Sep 06", price: 127.7 },
  { date: "Sep 07", price: 129.2 },
  { date: "Sep 08", price: 130.8 },
  { date: "Sep 09", price: 134.4 },
  { date: "Sep 10", price: 136.0 },
  { date: "Sep 11", price: 137.5 },
  { date: "Sep 12", price: 131.1 },
  { date: "Sep 13", price: 128.6 },
  { date: "Sep 14", price: 124.2 },
  { date: "Sep 15", price: 120.8 },
  { date: "Sep 16", price: 118.3 },
  { date: "Sep 17", price: 101.9 },
  { date: "Sep 18", price: 121.5 },
  { date: "Sep 19", price: 129.1 },
  { date: "Sep 20", price: 131.6 },
  { date: "Sep 21", price: 141.2 },
  { date: "Sep 22", price: 142.8 },
  { date: "Sep 23", price: 143.3 },
  { date: "Sep 24", price: 149.9 },
  { date: "Sep 25", price: 159.5 },
  { date: "Sep 26", price: 173.3 },
  //array-end
]

const summary = [
  //array-start
  {
    name: "Open",
    value: "$153.56",
  },
  {
    name: "High",
    value: "$154.78",
  },
  {
    name: "Volume",
    value: "$48,14M",
  },
  {
    name: "Low",
    value: "$179.12",
  },
  {
    name: "Close",
    value: "$173.34",
  },
  {
    name: "Market Cap",
    value: "$1,58B",
  },
  //array-end
]

const valueFormatter = (number: number) =>
  `$${Intl.NumberFormat("us").format(number).toString()}`

export default function Example() {
  return (
    <div className="obfuscate">
      <Card className="sm:mx-auto sm:max-w-lg">
        <h3 className="text-sm text-gray-500 dark:text-gray-500">
          Amazon, Inc. (AMZN)
        </h3>
        <p className="mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-50">
          $173.30
        </p>
        <p className="mt-1 text-sm font-medium">
          <span className="text-emerald-700 dark:text-emerald-500">
            +$9.30 (8.6%)
          </span>{" "}
          <span className="font-normal text-gray-500 dark:text-gray-500">
            Past 24 hours
          </span>
        </p>
        <LineChart
          data={data}
          index="date"
          categories={["price"]}
          valueFormatter={valueFormatter}
          showLegend={false}
          showYAxis={false}
          className="mt-6 !h-48"
        />
        <div className="justify-betwee mt-4 flex gap-6">
          <ul
            role="list"
            className="mt-2 w-full divide-y divide-gray-200 truncate text-sm text-gray-500 dark:divide-gray-800 dark:text-gray-500"
          >
            {summary.slice(0, 3).map((item) => (
              <li
                key={item.name}
                className="flex items-center justify-between py-2.5"
              >
                <span className="truncate">{item.name}</span>
                <span className="font-medium text-gray-900 dark:text-gray-50">
                  {item.value}
                </span>
              </li>
            ))}
          </ul>
          <ul
            role="list"
            className="mt-2 w-full divide-y divide-gray-200 truncate text-sm text-gray-500 dark:divide-gray-800 dark:text-gray-500"
          >
            {summary.slice(3, 6).map((item) => (
              <li
                key={item.name}
                className="flex items-center justify-between py-2.5"
              >
                <span className="truncate">{item.name}</span>
                <span className="font-medium text-gray-900 dark:text-gray-50">
                  {item.value}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </div>
  )
}
```


```example/line-charts-line-chart-06.tsx
"use client"

import { cx } from "@/lib/utils"

import { Card } from "@/atom/Card"
import { LineChart } from "@/atom/LineChart"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/atom/Tabs"

const data = [
  //array-start
  { date: "Aug 01", "Market Index": 44.1, Portfolio: 79.2 },
  { date: "Aug 02", "Market Index": 49.1, Portfolio: 89.1 },
  { date: "Aug 03", "Market Index": 61.2, Portfolio: 91.7 },
  { date: "Aug 04", "Market Index": 49.7, Portfolio: 74.4 },
  { date: "Aug 05", "Market Index": 71.1, Portfolio: 95.3 },
  { date: "Aug 06", "Market Index": 75.3, Portfolio: 99.4 },
  { date: "Aug 07", "Market Index": 74.1, Portfolio: 101.2 },
  { date: "Aug 08", "Market Index": 78.4, Portfolio: 102.2 },
  { date: "Aug 09", "Market Index": 81.1, Portfolio: 103.6 },
  { date: "Aug 10", "Market Index": 82.6, Portfolio: 104.4 },
  { date: "Aug 11", "Market Index": 89.3, Portfolio: 106.3 },
  { date: "Aug 12", "Market Index": 79.3, Portfolio: 109.5 },
  { date: "Aug 13", "Market Index": 78.6, Portfolio: 110.4 },
  { date: "Aug 14", "Market Index": 73.8, Portfolio: 113.5 },
  { date: "Aug 15", "Market Index": 69.7, Portfolio: 114.1 },
  { date: "Aug 16", "Market Index": 62.6, Portfolio: 121.4 },
  { date: "Aug 17", "Market Index": 59.3, Portfolio: 120.4 },
  { date: "Aug 18", "Market Index": 57.1, Portfolio: 110.7 },
  { date: "Aug 19", "Market Index": 55.1, Portfolio: 118.8 },
  { date: "Aug 20", "Market Index": 54.3, Portfolio: 123.1 },
  { date: "Aug 21", "Market Index": 53.2, Portfolio: 110.2 },
  { date: "Aug 22", "Market Index": 49.4, Portfolio: 101.2 },
  { date: "Aug 23", "Market Index": 48.1, Portfolio: 99.2 },
  { date: "Aug 24", "Market Index": 27.1, Portfolio: 105.8 },
  { date: "Aug 25", "Market Index": 21.0, Portfolio: 109.4 },
  { date: "Aug 26", "Market Index": 21.3, Portfolio: 110.1 },
  { date: "Aug 27", "Market Index": 21.8, Portfolio: 119.6 },
  { date: "Aug 28", "Market Index": 29.4, Portfolio: 121.3 },
  { date: "Aug 29", "Market Index": 32.4, Portfolio: 129.1 },
  { date: "Aug 30", "Market Index": 37.1, Portfolio: 134.5 },
  { date: "Aug 31", "Market Index": 41.3, Portfolio: 144.2 },
  { date: "Sep 01", "Market Index": 48.1, Portfolio: 145.1 },
  { date: "Sep 02", "Market Index": 51.3, Portfolio: 142.5 },
  { date: "Sep 03", "Market Index": 52.8, Portfolio: 140.9 },
  { date: "Sep 04", "Market Index": 54.4, Portfolio: 138.7 },
  { date: "Sep 05", "Market Index": 57.1, Portfolio: 135.2 },
  { date: "Sep 06", "Market Index": 67.9, Portfolio: 136.2 },
  { date: "Sep 07", "Market Index": 78.8, Portfolio: 136.2 },
  { date: "Sep 08", "Market Index": 89.2, Portfolio: 146.2 },
  { date: "Sep 09", "Market Index": 99.2, Portfolio: 145.2 },
  { date: "Sep 10", "Market Index": 101.2, Portfolio: 141.8 },
  { date: "Sep 11", "Market Index": 104.2, Portfolio: 132.2 },
  { date: "Sep 12", "Market Index": 109.8, Portfolio: 129.2 },
  { date: "Sep 13", "Market Index": 110.4, Portfolio: 120.3 },
  { date: "Sep 14", "Market Index": 111.3, Portfolio: 123.4 },
  { date: "Sep 15", "Market Index": 114.3, Portfolio: 137.4 },
  { date: "Sep 16", "Market Index": 105.1, Portfolio: 130.1 },
  { date: "Sep 17", "Market Index": 89.3, Portfolio: 131.8 },
  { date: "Sep 18", "Market Index": 102.1, Portfolio: 149.4 },
  { date: "Sep 19", "Market Index": 101.7, Portfolio: 149.3 },
  { date: "Sep 20", "Market Index": 121.3, Portfolio: 153.2 },
  { date: "Sep 21", "Market Index": 132.5, Portfolio: 157.2 },
  { date: "Sep 22", "Market Index": 121.4, Portfolio: 139.1 },
  { date: "Sep 23", "Market Index": 100.1, Portfolio: 120.2 },
  { date: "Sep 24", "Market Index": 89.1, Portfolio: 119.1 },
  { date: "Sep 25", "Market Index": 97.1, Portfolio: 112.2 },
  { date: "Sep 26", "Market Index": 109.4, Portfolio: 129.1 },
  //array-end
]

const summary = [
  //array-start
  {
    name: "Portfolio value",
    value: "$37,081.89",
    changeType: null,
  },
  {
    name: "Invested",
    value: "$19,698.65",
    changeType: null,
  },
  {
    name: "Cashflow",
    value: "$20,033.74",
    changeType: null,
  },
  {
    name: "Price gain",
    value: "+$15,012.39",
    changeType: "positive",
  },
  {
    name: "Realized",
    value: "+$177.4",
    changeType: "positive",
  },
  {
    name: "Dividends (gross)",
    value: "+$490.97",
    changeType: "positive",
  },
  //array-end
]

const tabs = [
  //array-start
  {
    dataRange: data.slice(51, 57),
    name: "Last 7d",
  },
  {
    dataRange: data.slice(28, 70),
    name: "Last 30d",
  },
  {
    dataRange: data,
    name: "Max.",
  },
  //array-end
]

const valueFormatter = (number: number) =>
  `$${Intl.NumberFormat("us").format(number).toString()}`

export default function Example() {
  return (
    <div className="obfuscate">
      <Card className="!p-0">
        <div className="p-6">
          <h3 className="text-sm text-gray-500 dark:text-gray-500">
            Portfolio performance
          </h3>
          <p className="mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-50">
            $37,081.89
          </p>
          <p className="mt-1 text-sm font-medium">
            <span className="text-emerald-700 dark:text-emerald-500">
              +$430.90 (4.1%)
            </span>{" "}
            <span className="font-normal text-gray-500 dark:text-gray-500">
              Past 24 hours
            </span>
          </p>
        </div>
        <Tabs defaultValue={tabs[2].name}>
          <TabsList variant="line" className="px-6">
            {tabs.map((tab) => (
              <TabsTrigger key={tab.name} value={tab.name}>
                {tab.name}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="mt-6 px-6">
            {tabs.map((tab) => (
              <TabsContent key={tab.name} value={tab.name}>
                <LineChart
                  data={tab.dataRange}
                  index="date"
                  categories={["Portfolio", "Market Index"]}
                  colors={["blue", "cyan"]}
                  valueFormatter={valueFormatter}
                  yAxisWidth={40}
                  tickGap={10}
                  showLegend={false}
                  className="hidden !h-72 sm:block"
                />
                <LineChart
                  data={tab.dataRange}
                  index="date"
                  categories={["Portfolio", "Market Index"]}
                  colors={["blue", "cyan"]}
                  valueFormatter={valueFormatter}
                  showYAxis={false}
                  showLegend={false}
                  startEndOnly={true}
                  className="!h-72 sm:hidden"
                />
              </TabsContent>
            ))}
          </div>
        </Tabs>

        <div className="p-6">
          <h4 className="text-sm font-medium text-gray-900 dark:text-gray-50">
            Portfolio summary
          </h4>
          <div className="mt-4 sm:flex sm:items-center sm:gap-8">
            <ul
              role="list"
              className="w-full divide-y divide-gray-200 truncate text-sm text-gray-500 dark:divide-gray-800 dark:text-gray-500"
            >
              {summary.slice(0, 3).map((item) => (
                <li
                  key={item.name}
                  className="flex items-center justify-between py-2.5"
                >
                  <span>{item.name}</span>
                  <span className="font-medium text-gray-900 dark:text-gray-50">
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>
            <ul
              role="list"
              className="mt-4 w-full divide-y divide-gray-200 truncate text-sm text-gray-500 sm:mt-0 dark:divide-gray-800 dark:text-gray-500"
            >
              {summary.slice(3, 6).map((item) => (
                <li
                  key={item.name}
                  className="flex items-center justify-between py-2.5"
                >
                  <span>{item.name}</span>
                  <span
                    className={cx(
                      item.changeType === "positive"
                        ? "text-emerald-700 dark:text-emerald-500"
                        : "text-red-700 dark:text-red-500",
                      "font-medium",
                    )}
                  >
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
    </div>
  )
}
```


```example/line-charts-line-chart-12.tsx
"use client"

import React from "react"
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react"
import {
  CartesianGrid,
  Dot,
  Label,
  Line,
  Legend as RechartsLegend,
  LineChart as RechartsLineChart,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { AxisDomain } from "recharts/types/util/types"

import {
  AvailableChartColors,
  AvailableChartColorsKeys,
  constructCategoryColors,
  getColorClassName,
  getYAxisDomain,
  hasOnlyOneValueForKey,
} from "@/lib/chartUtils"
import { useOnWindowResize } from "@/lib/useOnWindowResize"
import { cx } from "@/lib/utils"

// Tremor LineChart [v0.3.1]
import { Card } from "@/atom/Card"

//#region Legend

interface LegendItemProps {
  name: string
  color: AvailableChartColorsKeys
  onClick?: (name: string, color: AvailableChartColorsKeys) => void
  activeLegend?: string
}

const LegendItem = ({
  name,
  color,
  onClick,
  activeLegend,
}: LegendItemProps) => {
  const hasOnValueChange = !!onClick
  return (
    <li
      className={cx(
        // base
        "group inline-flex flex-nowrap items-center gap-1.5 rounded px-2 py-1 whitespace-nowrap transition",
        hasOnValueChange
          ? "cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
          : "cursor-default",
      )}
      onClick={(e) => {
        e.stopPropagation()
        onClick?.(name, color)
      }}
    >
      <span
        className={cx(
          "h-[3px] w-3.5 shrink-0 rounded-full",
          getColorClassName(color, "bg"),
          activeLegend && activeLegend !== name ? "opacity-40" : "opacity-100",
        )}
        aria-hidden={true}
      />
      <p
        className={cx(
          // base
          "truncate text-xs whitespace-nowrap",
          // text color
          "text-gray-700 dark:text-gray-300",
          hasOnValueChange &&
            "group-hover:text-gray-900 dark:group-hover:text-gray-50",
          activeLegend && activeLegend !== name ? "opacity-40" : "opacity-100",
        )}
      >
        {name}
      </p>
    </li>
  )
}

interface ScrollButtonProps {
  icon: React.ElementType
  onClick?: () => void
  disabled?: boolean
}

const ScrollButton = ({ icon, onClick, disabled }: ScrollButtonProps) => {
  const Icon = icon
  const [isPressed, setIsPressed] = React.useState(false)
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null)

  React.useEffect(() => {
    if (isPressed) {
      intervalRef.current = setInterval(() => {
        onClick?.()
      }, 300)
    } else {
      clearInterval(intervalRef.current as NodeJS.Timeout)
    }
    return () => clearInterval(intervalRef.current as NodeJS.Timeout)
  }, [isPressed, onClick])

  React.useEffect(() => {
    if (disabled) {
      clearInterval(intervalRef.current as NodeJS.Timeout)
      setIsPressed(false)
    }
  }, [disabled])

  return (
    <button
      type="button"
      className={cx(
        // base
        "group inline-flex size-5 items-center truncate rounded transition",
        disabled
          ? "cursor-not-allowed text-gray-400 dark:text-gray-600"
          : "cursor-pointer text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-50",
      )}
      disabled={disabled}
      onClick={(e) => {
        e.stopPropagation()
        onClick?.()
      }}
      onMouseDown={(e) => {
        e.stopPropagation()
        setIsPressed(true)
      }}
      onMouseUp={(e) => {
        e.stopPropagation()
        setIsPressed(false)
      }}
    >
      <Icon className="size-full" aria-hidden="true" />
    </button>
  )
}

interface LegendProps extends React.OlHTMLAttributes<HTMLOListElement> {
  categories: string[]
  colors?: AvailableChartColorsKeys[]
  onClickLegendItem?: (category: string, color: string) => void
  activeLegend?: string
  enableLegendSlider?: boolean
}

type HasScrollProps = {
  left: boolean
  right: boolean
}

const Legend = React.forwardRef<HTMLOListElement, LegendProps>((props, ref) => {
  const {
    categories,
    colors = AvailableChartColors,
    className,
    onClickLegendItem,
    activeLegend,
    enableLegendSlider = false,
    ...other
  } = props
  const scrollableRef = React.useRef<HTMLInputElement>(null)
  const scrollButtonsRef = React.useRef<HTMLDivElement>(null)
  const [hasScroll, setHasScroll] = React.useState<HasScrollProps | null>(null)
  const [isKeyDowned, setIsKeyDowned] = React.useState<string | null>(null)
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null)

  const checkScroll = React.useCallback(() => {
    const scrollable = scrollableRef?.current
    if (!scrollable) return

    const hasLeftScroll = scrollable.scrollLeft > 0
    const hasRightScroll =
      scrollable.scrollWidth - scrollable.clientWidth > scrollable.scrollLeft

    setHasScroll({ left: hasLeftScroll, right: hasRightScroll })
  }, [setHasScroll])

  const scrollToTest = React.useCallback(
    (direction: "left" | "right") => {
      const element = scrollableRef?.current
      const scrollButtons = scrollButtonsRef?.current
      const scrollButtonsWith = scrollButtons?.clientWidth ?? 0
      const width = element?.clientWidth ?? 0

      if (element && enableLegendSlider) {
        element.scrollTo({
          left:
            direction === "left"
              ? element.scrollLeft - width + scrollButtonsWith
              : element.scrollLeft + width - scrollButtonsWith,
          behavior: "smooth",
        })
        setTimeout(() => {
          checkScroll()
        }, 400)
      }
    },
    [enableLegendSlider, checkScroll],
  )

  React.useEffect(() => {
    const keyDownHandler = (key: string) => {
      if (key === "ArrowLeft") {
        scrollToTest("left")
      } else if (key === "ArrowRight") {
        scrollToTest("right")
      }
    }
    if (isKeyDowned) {
      keyDownHandler(isKeyDowned)
      intervalRef.current = setInterval(() => {
        keyDownHandler(isKeyDowned)
      }, 300)
    } else {
      clearInterval(intervalRef.current as NodeJS.Timeout)
    }
    return () => clearInterval(intervalRef.current as NodeJS.Timeout)
  }, [isKeyDowned, scrollToTest])

  const keyDown = (e: KeyboardEvent) => {
    e.stopPropagation()
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      e.preventDefault()
      setIsKeyDowned(e.key)
    }
  }
  const keyUp = (e: KeyboardEvent) => {
    e.stopPropagation()
    setIsKeyDowned(null)
  }

  React.useEffect(() => {
    const scrollable = scrollableRef?.current
    if (enableLegendSlider) {
      checkScroll()
      scrollable?.addEventListener("keydown", keyDown)
      scrollable?.addEventListener("keyup", keyUp)
    }

    return () => {
      scrollable?.removeEventListener("keydown", keyDown)
      scrollable?.removeEventListener("keyup", keyUp)
    }
  }, [checkScroll, enableLegendSlider])

  return (
    <ol
      ref={ref}
      className={cx("relative overflow-hidden", className)}
      {...other}
    >
      <div
        ref={scrollableRef}
        tabIndex={0}
        className={cx(
          "flex h-full",
          enableLegendSlider
            ? hasScroll?.right || hasScroll?.left
              ? "snap-mandatory items-center overflow-auto pr-12 pl-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              : ""
            : "flex-wrap",
        )}
      >
        {categories.map((category, index) => (
          <LegendItem
            key={`item-${index}`}
            name={category}
            color={colors[index] as AvailableChartColorsKeys}
            onClick={onClickLegendItem}
            activeLegend={activeLegend}
          />
        ))}
      </div>
      {enableLegendSlider && (hasScroll?.right || hasScroll?.left) ? (
        <>
          <div
            className={cx(
              // base
              "absolute top-0 right-0 bottom-0 flex h-full items-center justify-center pr-1",
              // background color
              "bg-white dark:bg-gray-950",
            )}
          >
            <ScrollButton
              icon={RiArrowLeftSLine}
              onClick={() => {
                setIsKeyDowned(null)
                scrollToTest("left")
              }}
              disabled={!hasScroll?.left}
            />
            <ScrollButton
              icon={RiArrowRightSLine}
              onClick={() => {
                setIsKeyDowned(null)
                scrollToTest("right")
              }}
              disabled={!hasScroll?.right}
            />
          </div>
        </>
      ) : null}
    </ol>
  )
})

Legend.displayName = "Legend"

const ChartLegend = (
  { payload }: any,
  categoryColors: Map<string, AvailableChartColorsKeys>,
  setLegendHeight: React.Dispatch<React.SetStateAction<number>>,
  activeLegend: string | undefined,
  onClick?: (category: string, color: string) => void,
  enableLegendSlider?: boolean,
  legendPosition?: "left" | "center" | "right",
  yAxisWidth?: number,
) => {
  const legendRef = React.useRef<HTMLDivElement>(null)

  useOnWindowResize(() => {
    const calculateHeight = (height: number | undefined) =>
      height ? Number(height) + 15 : 60
    setLegendHeight(calculateHeight(legendRef.current?.clientHeight))
  })

  const legendPayload = payload.filter((item: any) => item.type !== "none")

  const paddingLeft =
    legendPosition === "left" && yAxisWidth ? yAxisWidth - 8 : 0

  return (
    <div
      ref={legendRef}
      style={{ paddingLeft: paddingLeft }}
      className={cx(
        "flex items-center",
        { "justify-center": legendPosition === "center" },
        { "justify-start": legendPosition === "left" },
        { "justify-end": legendPosition === "right" },
      )}
    >
      <Legend
        categories={legendPayload.map((entry: any) => entry.value)}
        colors={legendPayload.map((entry: any) =>
          categoryColors.get(entry.value),
        )}
        onClickLegendItem={onClick}
        activeLegend={activeLegend}
        enableLegendSlider={enableLegendSlider}
      />
    </div>
  )
}

//#region Tooltip

type TooltipProps = Pick<ChartTooltipProps, "active" | "payload" | "label">

type PayloadItem = {
  category: string
  value: number
  index: string
  color: AvailableChartColorsKeys
  type?: string
  payload: any
}

interface ChartTooltipProps {
  active: boolean | undefined
  payload: PayloadItem[]
  label: string
  valueFormatter: (value: number) => string
}

const ChartTooltip = ({
  active,
  payload,
  // label,
  valueFormatter,
}: ChartTooltipProps) => {
  if (active && payload && payload.length) {
    const legendPayload = payload.filter((item: any) => item.type !== "none")
    return (
      <div
        className={cx(
          // base
          "overflow-hidden rounded-md text-sm shadow-md",
          // background color
          "bg-gray-900 dark:bg-gray-800",
        )}
      >
        <div
          className={cx(
            "border-b border-gray-700 px-4 py-2 dark:border-gray-700",
          )}
        >
          <p
            className={cx(
              // base
              "font-medium",
              // text color
              "text-gray-50",
            )}
          >
            Total Requests
          </p>
        </div>
        <div className={cx("space-y-1 bg-gray-800 px-4 py-2 dark:bg-gray-800")}>
          {legendPayload.map(({ value, category, color }, index) => (
            <div
              key={`id-${index}`}
              className="flex items-center justify-between space-x-8"
            >
              <div className="flex items-center space-x-2">
                <span
                  aria-hidden="true"
                  className={cx(
                    "h-[3px] w-3.5 shrink-0 rounded-full",
                    getColorClassName(color, "bg"),
                  )}
                />
                <p
                  className={cx(
                    // base
                    "text-right whitespace-nowrap",
                    // text color
                    "text-gray-400 dark:text-gray-400",
                  )}
                >
                  {category}
                </p>
              </div>
              <p
                className={cx(
                  // base
                  "text-right whitespace-nowrap tabular-nums",
                  // text color
                  "text-gray-50 dark:text-gray-50",
                )}
              >
                {valueFormatter(value)}
              </p>
            </div>
          ))}
        </div>
      </div>
    )
  }
  return null
}

//#region LineChart

interface ActiveDot {
  index?: number
  dataKey?: string
}

type BaseEventProps = {
  eventType: "dot" | "category"
  categoryClicked: string
  [key: string]: number | string
}

type LineChartEventProps = BaseEventProps | null | undefined

interface LineChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: Record<string, any>[]
  index: string
  categories: string[]
  colors?: AvailableChartColorsKeys[]
  valueFormatter?: (value: number) => string
  startEndOnly?: boolean
  showXAxis?: boolean
  showYAxis?: boolean
  showGridLines?: boolean
  yAxisWidth?: number
  intervalType?: "preserveStartEnd" | "equidistantPreserveStart"
  showTooltip?: boolean
  showLegend?: boolean
  autoMinValue?: boolean
  minValue?: number
  maxValue?: number
  allowDecimals?: boolean
  onValueChange?: (value: LineChartEventProps) => void
  enableLegendSlider?: boolean
  tickGap?: number
  connectNulls?: boolean
  xAxisLabel?: string
  yAxisLabel?: string
  legendPosition?: "left" | "center" | "right"
  tooltipCallback?: (tooltipCallbackContent: TooltipProps) => void
  customTooltip?: React.ComponentType<TooltipProps>
}

const LineChart = React.forwardRef<HTMLDivElement, LineChartProps>(
  (props, ref) => {
    const {
      data = [],
      categories = [],
      index,
      colors = AvailableChartColors,
      valueFormatter = (value: number) => value.toString(),
      startEndOnly = false,
      showXAxis = true,
      showYAxis = true,
      showGridLines = true,
      yAxisWidth = 56,
      intervalType = "equidistantPreserveStart",
      showTooltip = true,
      showLegend = true,
      autoMinValue = false,
      minValue,
      maxValue,
      allowDecimals = true,
      connectNulls = false,
      className,
      onValueChange,
      enableLegendSlider = false,
      tickGap = 5,
      xAxisLabel,
      yAxisLabel,
      legendPosition = "right",
      tooltipCallback,
      customTooltip,
      ...other
    } = props

    function CustomCursor(props: any) {
      const { pointerEvents, height, points, className, payload, width } = props
      let label = payload[0]?.payload?.date
      const { x, y } = points[0]
      const textWidth = 50 // adjust based on your text size
      const textHeight = 18 // adjust based on your text size
      const padding = 3

      let translateX
      if (x < textWidth / 2 + padding) {
        // Near the left edge
        translateX = padding - 3
      } else if (x > width - textWidth / 2 - padding) {
        // Near the right edge
        translateX = width - textWidth - padding + 3
      } else {
        // Default to middle alignment
        translateX = x - textWidth / 2
      }

      return (
        <>
          <Rectangle
            x={x}
            y={y}
            fillOpacity={0}
            stroke="#d1d5db"
            strokeWidth={1}
            pointerEvents={pointerEvents}
            width={1}
            height={height}
            className={className}
          />
          <g transform={`translate(${translateX}, ${y + height + 6})`}>
            <rect
              className="fill-gray-200 dark:fill-gray-800"
              width={textWidth + 2 * padding}
              height={textHeight + 2 * padding}
              rx={4}
              ry={4}
            />
            <text
              className="fill-gray-700 text-xs dark:fill-gray-300"
              x={textWidth / 2 + padding}
              y={textHeight / 2 + padding + 6}
              textAnchor="middle"
            >
              {label}
            </text>
          </g>
        </>
      )
    }
    const CustomTooltip = customTooltip
    const paddingValue =
      (!showXAxis && !showYAxis) || (startEndOnly && !showYAxis) ? 0 : 20
    const [legendHeight, setLegendHeight] = React.useState(60)
    const [activeDot, setActiveDot] = React.useState<ActiveDot | undefined>(
      undefined,
    )
    const [activeLegend, setActiveLegend] = React.useState<string | undefined>(
      undefined,
    )
    const categoryColors = constructCategoryColors(categories, colors)

    const yAxisDomain = getYAxisDomain(autoMinValue, minValue, maxValue)
    const hasOnValueChange = !!onValueChange
    const prevActiveRef = React.useRef<boolean | undefined>(undefined)
    const prevLabelRef = React.useRef<string | undefined>(undefined)

    function onDotClick(itemData: any, event: React.MouseEvent) {
      event.stopPropagation()

      if (!hasOnValueChange) return
      if (
        (itemData.index === activeDot?.index &&
          itemData.dataKey === activeDot?.dataKey) ||
        (hasOnlyOneValueForKey(data, itemData.dataKey) &&
          activeLegend &&
          activeLegend === itemData.dataKey)
      ) {
        setActiveLegend(undefined)
        setActiveDot(undefined)
        onValueChange?.(null)
      } else {
        setActiveLegend(itemData.dataKey)
        setActiveDot({
          index: itemData.index,
          dataKey: itemData.dataKey,
        })
        onValueChange?.({
          eventType: "dot",
          categoryClicked: itemData.dataKey,
          ...itemData.payload,
        })
      }
    }

    function onCategoryClick(dataKey: string) {
      if (!hasOnValueChange) return
      if (
        (dataKey === activeLegend && !activeDot) ||
        (hasOnlyOneValueForKey(data, dataKey) &&
          activeDot &&
          activeDot.dataKey === dataKey)
      ) {
        setActiveLegend(undefined)
        onValueChange?.(null)
      } else {
        setActiveLegend(dataKey)
        onValueChange?.({
          eventType: "category",
          categoryClicked: dataKey,
        })
      }
      setActiveDot(undefined)
    }

    return (
      <div ref={ref} className={cx("h-80 w-full", className)} {...other}>
        <ResponsiveContainer>
          <RechartsLineChart
            data={data}
            onClick={
              hasOnValueChange && (activeLegend || activeDot)
                ? () => {
                    setActiveDot(undefined)
                    setActiveLegend(undefined)
                    onValueChange?.(null)
                  }
                : undefined
            }
            margin={{
              bottom: xAxisLabel ? 30 : undefined,
              left: yAxisLabel ? 20 : 3,
              right: yAxisLabel ? 5 : 3,
              top: 5,
            }}
          >
            {showGridLines ? (
              <CartesianGrid
                className={cx("stroke-gray-200 stroke-1 dark:stroke-gray-800")}
                horizontal={true}
                vertical={false}
              />
            ) : null}
            <XAxis
              padding={{ left: paddingValue, right: paddingValue }}
              hide={!showXAxis}
              dataKey={index}
              interval={startEndOnly ? "preserveStartEnd" : intervalType}
              tick={{ transform: "translate(0, 6)" }}
              ticks={
                startEndOnly
                  ? [data[0][index], data[data.length - 1][index]]
                  : undefined
              }
              fill=""
              stroke=""
              className={cx(
                // base
                "text-xs",
                // text fill
                "fill-gray-500 dark:fill-gray-500",
              )}
              tickLine={false}
              axisLine={false}
              minTickGap={tickGap}
            >
              {xAxisLabel && (
                <Label
                  position="insideBottom"
                  offset={-20}
                  className="fill-gray-800 text-sm font-medium dark:fill-gray-200"
                >
                  {xAxisLabel}
                </Label>
              )}
            </XAxis>
            <YAxis
              width={yAxisWidth}
              hide={!showYAxis}
              axisLine={false}
              tickLine={false}
              type="number"
              domain={yAxisDomain as AxisDomain}
              tick={{ transform: "translate(-3, 0)" }}
              fill=""
              stroke=""
              className={cx(
                // base
                "text-xs",
                // text fill
                "fill-gray-500 dark:fill-gray-500",
              )}
              tickFormatter={valueFormatter}
              allowDecimals={allowDecimals}
            >
              {yAxisLabel && (
                <Label
                  position="insideLeft"
                  style={{ textAnchor: "middle" }}
                  angle={-90}
                  offset={-15}
                  className="fill-gray-800 text-sm font-medium dark:fill-gray-200"
                >
                  {yAxisLabel}
                </Label>
              )}
            </YAxis>
            <Tooltip
              wrapperStyle={{ outline: "none" }}
              isAnimationActive={true}
              animationDuration={100}
              cursor={<CustomCursor />}
              offset={20}
              position={{ y: 0 }}
              content={({ active, payload, label }) => {
                const cleanPayload: TooltipProps["payload"] = payload
                  ? payload.map((item: any) => ({
                      category: item.dataKey,
                      value: item.value,
                      index: item.payload[index],
                      color: categoryColors.get(
                        item.dataKey,
                      ) as AvailableChartColorsKeys,
                      type: item.type,
                      payload: item.payload,
                    }))
                  : []

                if (
                  tooltipCallback &&
                  (active !== prevActiveRef.current ||
                    label !== prevLabelRef.current)
                ) {
                  tooltipCallback({ active, payload: cleanPayload, label })
                  prevActiveRef.current = active
                  prevLabelRef.current = label
                }

                return showTooltip && active ? (
                  CustomTooltip ? (
                    <CustomTooltip
                      active={active}
                      payload={cleanPayload}
                      label={label}
                    />
                  ) : (
                    <ChartTooltip
                      active={active}
                      payload={cleanPayload}
                      label={label}
                      valueFormatter={valueFormatter}
                    />
                  )
                ) : null
              }}
            />

            {showLegend ? (
              <RechartsLegend
                verticalAlign="top"
                height={legendHeight}
                content={({ payload }) =>
                  ChartLegend(
                    { payload },
                    categoryColors,
                    setLegendHeight,
                    activeLegend,
                    hasOnValueChange
                      ? (clickedLegendItem: string) =>
                          onCategoryClick(clickedLegendItem)
                      : undefined,
                    enableLegendSlider,
                    legendPosition,
                    yAxisWidth,
                  )
                }
              />
            ) : null}
            {categories.map((category) => (
              <Line
                className={cx(
                  getColorClassName(
                    categoryColors.get(category) as AvailableChartColorsKeys,
                    "stroke",
                  ),
                )}
                strokeOpacity={
                  activeDot || (activeLegend && activeLegend !== category)
                    ? 0.3
                    : 1
                }
                activeDot={(props: any) => {
                  const {
                    cx: cxCoord,
                    cy: cyCoord,
                    stroke,
                    strokeLinecap,
                    strokeLinejoin,
                    strokeWidth,
                    dataKey,
                  } = props
                  return (
                    <Dot
                      className={cx(
                        "stroke-white dark:stroke-gray-950",
                        onValueChange ? "cursor-pointer" : "",
                        getColorClassName(
                          categoryColors.get(
                            dataKey,
                          ) as AvailableChartColorsKeys,
                          "fill",
                        ),
                      )}
                      cx={cxCoord}
                      cy={cyCoord}
                      r={5}
                      fill=""
                      stroke={stroke}
                      strokeLinecap={strokeLinecap}
                      strokeLinejoin={strokeLinejoin}
                      strokeWidth={strokeWidth}
                      onClick={(_, event) => onDotClick(props, event)}
                    />
                  )
                }}
                dot={(props: any) => {
                  const {
                    stroke,
                    strokeLinecap,
                    strokeLinejoin,
                    strokeWidth,
                    cx: cxCoord,
                    cy: cyCoord,
                    dataKey,
                    index,
                  } = props

                  if (
                    (hasOnlyOneValueForKey(data, category) &&
                      !(
                        activeDot ||
                        (activeLegend && activeLegend !== category)
                      )) ||
                    (activeDot?.index === index &&
                      activeDot?.dataKey === category)
                  ) {
                    return (
                      <Dot
                        key={index}
                        cx={cxCoord}
                        cy={cyCoord}
                        r={5}
                        stroke={stroke}
                        fill=""
                        strokeLinecap={strokeLinecap}
                        strokeLinejoin={strokeLinejoin}
                        strokeWidth={strokeWidth}
                        className={cx(
                          "stroke-white dark:stroke-gray-950",
                          onValueChange ? "cursor-pointer" : "",
                          getColorClassName(
                            categoryColors.get(
                              dataKey,
                            ) as AvailableChartColorsKeys,
                            "fill",
                          ),
                        )}
                      />
                    )
                  }
                  return <React.Fragment key={index}></React.Fragment>
                }}
                key={category}
                name={category}
                type="linear"
                dataKey={category}
                stroke=""
                strokeWidth={2}
                strokeLinejoin="round"
                strokeLinecap="round"
                isAnimationActive={false}
                connectNulls={connectNulls}
              />
            ))}
            {/* hidden lines to increase clickable target area */}
            {onValueChange
              ? categories.map((category) => (
                  <Line
                    className={cx("cursor-pointer")}
                    strokeOpacity={0}
                    key={category}
                    name={category}
                    type="linear"
                    dataKey={category}
                    stroke="transparent"
                    fill="transparent"
                    legendType="none"
                    tooltipType="none"
                    strokeWidth={12}
                    connectNulls={connectNulls}
                    onClick={(props: any, event) => {
                      event.stopPropagation()
                      const { name } = props
                      onCategoryClick(name)
                    }}
                  />
                ))
              : null}
          </RechartsLineChart>
        </ResponsiveContainer>
      </div>
    )
  },
)

LineChart.displayName = "LineChart"

const data = [
  //array-start
  {
    date: "Jan 22",
    "Station Requests": 2100,
    "Tile Requests": 4434,
    "Isoline Requests": 7943,
  },
  {
    date: "Feb 22",
    "Station Requests": 2943,
    "Tile Requests": 4454,
    "Isoline Requests": 8954,
  },
  {
    date: "Mar 22",
    "Station Requests": 4889,
    "Tile Requests": 4610,
    "Isoline Requests": 9123,
  },
  {
    date: "Apr 22",
    "Station Requests": 3909,
    "Tile Requests": 4490,
    "Isoline Requests": 7478,
  },
  {
    date: "May 22",
    "Station Requests": 5778,
    "Tile Requests": 4710,
    "Isoline Requests": 9504,
  },
  {
    date: "Jun 22",
    "Station Requests": 5900,
    "Tile Requests": 4753,
    "Isoline Requests": 9943,
  },
  {
    date: "Jul 22",
    "Station Requests": 4129,
    "Tile Requests": 4741,
    "Isoline Requests": 10112,
  },
  {
    date: "Aug 22",
    "Station Requests": 6021,
    "Tile Requests": 4783,
    "Isoline Requests": 10290,
  },
  {
    date: "Sep 22",
    "Station Requests": 6279,
    "Tile Requests": 4815,
    "Isoline Requests": 10349,
  },
  {
    date: "Oct 22",
    "Station Requests": 6224,
    "Tile Requests": 4826,
    "Isoline Requests": 10415,
  },
  {
    date: "Nov 22",
    "Station Requests": 6380,
    "Tile Requests": 4896,
    "Isoline Requests": 10636,
  },
  {
    date: "Dec 22",
    "Station Requests": 6414,
    "Tile Requests": 4798,
    "Isoline Requests": 10900,
  },
  {
    date: "Jan 23",
    "Station Requests": 6540,
    "Tile Requests": 4783,
    "Isoline Requests": 11040,
  },
  {
    date: "Feb 23",
    "Station Requests": 6634,
    "Tile Requests": 4734,
    "Isoline Requests": 11390,
  },
  {
    date: "Mar 23",
    "Station Requests": 7124,
    "Tile Requests": 4690,
    "Isoline Requests": 11423,
  },
  {
    date: "Apr 23",
    "Station Requests": 7934,
    "Tile Requests": 4627,
    "Isoline Requests": 12134,
  },
  {
    date: "May 23",
    "Station Requests": 7287,
    "Tile Requests": 4590,
    "Isoline Requests": 12034,
  },
  {
    date: "Jun 23",
    "Station Requests": 7323,
    "Tile Requests": 4573,
    "Isoline Requests": 11011,
  },
  {
    date: "Jul 23",
    "Station Requests": 7511,
    "Tile Requests": 4552,
    "Isoline Requests": 11834,
  },
  {
    date: "Aug 23",
    "Station Requests": 7043,
    "Tile Requests": 4542,
    "Isoline Requests": 12387,
  },
  {
    date: "Sep 23",
    "Station Requests": 6700,
    "Tile Requests": 4533,
    "Isoline Requests": 11032,
  },
  {
    date: "Oct 23",
    "Station Requests": 6900,
    "Tile Requests": 4494,
    "Isoline Requests": 10134,
  },
  {
    date: "Nov 23",
    "Station Requests": 7934,
    "Tile Requests": 4481,
    "Isoline Requests": 9921,
  },
  {
    date: "Dec 23",
    "Station Requests": 9021,
    "Tile Requests": 4272,
    "Isoline Requests": 10549,
  },
  //array-end
]

const numberFormatter = (number: number) =>
  `$${Intl.NumberFormat("us").format(number).toString()}`

export default function Example() {
  return (
    <div className="obfuscate">
      <Card className="mx-auto max-w-2xl">
        <h3 className="font-medium text-gray-900 dark:text-gray-50">
          Request Overview
        </h3>
        <LineChart
          data={data}
          autoMinValue={true}
          index="date"
          startEndOnly={true}
          valueFormatter={numberFormatter}
          categories={["Station Requests", "Tile Requests", "Isoline Requests"]}
          showYAxis={false}
          onValueChange={(v) => v}
          className="mt-4 !h-72"
        />
      </Card>
    </div>
  )
}
```


```example/line-charts-line-chart-07.tsx
"use client"

import { RiAddFill } from "@remixicon/react"

import { cx } from "@/lib/utils"

import { Card } from "@/atom/Card"
import { LineChart } from "@/atom/LineChart"

const data = [
  //array-start
  {
    date: "Aug 01",
    "ETF Shares Vital": 2100.2,
    "Vitainvest Core": 4434.1,
    "iShares Tech Growth": 7943.2,
  },
  {
    date: "Aug 02",
    "ETF Shares Vital": 2943.0,
    "Vitainvest Core": 4954.1,
    "iShares Tech Growth": 8954.1,
  },
  {
    date: "Aug 03",
    "ETF Shares Vital": 4889.5,
    "Vitainvest Core": 6100.2,
    "iShares Tech Growth": 9123.7,
  },
  {
    date: "Aug 04",
    "ETF Shares Vital": 3909.8,
    "Vitainvest Core": 4909.7,
    "iShares Tech Growth": 7478.4,
  },
  {
    date: "Aug 05",
    "ETF Shares Vital": 5778.7,
    "Vitainvest Core": 7103.1,
    "iShares Tech Growth": 9504.3,
  },
  {
    date: "Aug 06",
    "ETF Shares Vital": 5900.9,
    "Vitainvest Core": 7534.3,
    "iShares Tech Growth": 9943.4,
  },
  {
    date: "Aug 07",
    "ETF Shares Vital": 4129.4,
    "Vitainvest Core": 7412.1,
    "iShares Tech Growth": 10112.2,
  },
  {
    date: "Aug 08",
    "ETF Shares Vital": 6021.2,
    "Vitainvest Core": 7834.4,
    "iShares Tech Growth": 10290.2,
  },
  {
    date: "Aug 09",
    "ETF Shares Vital": 6279.8,
    "Vitainvest Core": 8159.1,
    "iShares Tech Growth": 10349.6,
  },
  {
    date: "Aug 10",
    "ETF Shares Vital": 6224.5,
    "Vitainvest Core": 8260.6,
    "iShares Tech Growth": 10415.4,
  },
  {
    date: "Aug 11",
    "ETF Shares Vital": 6380.6,
    "Vitainvest Core": 8965.3,
    "iShares Tech Growth": 10636.3,
  },
  {
    date: "Aug 12",
    "ETF Shares Vital": 6414.4,
    "Vitainvest Core": 7989.3,
    "iShares Tech Growth": 10900.5,
  },
  {
    date: "Aug 13",
    "ETF Shares Vital": 6540.1,
    "Vitainvest Core": 7839.6,
    "iShares Tech Growth": 11040.4,
  },
  {
    date: "Aug 14",
    "ETF Shares Vital": 6634.4,
    "Vitainvest Core": 7343.8,
    "iShares Tech Growth": 11390.5,
  },
  {
    date: "Aug 15",
    "ETF Shares Vital": 7124.6,
    "Vitainvest Core": 6903.7,
    "iShares Tech Growth": 11423.1,
  },
  {
    date: "Aug 16",
    "ETF Shares Vital": 7934.5,
    "Vitainvest Core": 6273.6,
    "iShares Tech Growth": 12134.4,
  },
  {
    date: "Aug 17",
    "ETF Shares Vital": 10287.8,
    "Vitainvest Core": 5900.3,
    "iShares Tech Growth": 12034.4,
  },
  {
    date: "Aug 18",
    "ETF Shares Vital": 10323.2,
    "Vitainvest Core": 5732.1,
    "iShares Tech Growth": 11011.7,
  },
  {
    date: "Aug 19",
    "ETF Shares Vital": 10511.4,
    "Vitainvest Core": 5523.1,
    "iShares Tech Growth": 11834.8,
  },
  {
    date: "Aug 20",
    "ETF Shares Vital": 11043.9,
    "Vitainvest Core": 5422.3,
    "iShares Tech Growth": 12387.1,
  },
  {
    date: "Aug 21",
    "ETF Shares Vital": 6700.7,
    "Vitainvest Core": 5334.2,
    "iShares Tech Growth": 11032.2,
  },
  {
    date: "Aug 22",
    "ETF Shares Vital": 6900.8,
    "Vitainvest Core": 4943.4,
    "iShares Tech Growth": 10134.2,
  },
  {
    date: "Aug 23",
    "ETF Shares Vital": 7934.5,
    "Vitainvest Core": 4812.1,
    "iShares Tech Growth": 9921.2,
  },
  {
    date: "Aug 24",
    "ETF Shares Vital": 9021.0,
    "Vitainvest Core": 2729.1,
    "iShares Tech Growth": 10549.8,
  },
  {
    date: "Aug 25",
    "ETF Shares Vital": 9198.2,
    "Vitainvest Core": 2178.0,
    "iShares Tech Growth": 10968.4,
  },
  {
    date: "Aug 26",
    "ETF Shares Vital": 9557.1,
    "Vitainvest Core": 2158.3,
    "iShares Tech Growth": 11059.1,
  },
  {
    date: "Aug 27",
    "ETF Shares Vital": 9959.8,
    "Vitainvest Core": 2100.8,
    "iShares Tech Growth": 11903.6,
  },
  {
    date: "Aug 28",
    "ETF Shares Vital": 10034.6,
    "Vitainvest Core": 2934.4,
    "iShares Tech Growth": 12143.3,
  },
  {
    date: "Aug 29",
    "ETF Shares Vital": 10243.8,
    "Vitainvest Core": 3223.4,
    "iShares Tech Growth": 12930.1,
  },
  {
    date: "Aug 30",
    "ETF Shares Vital": 10078.5,
    "Vitainvest Core": 3779.1,
    "iShares Tech Growth": 13420.5,
  },
  {
    date: "Aug 31",
    "ETF Shares Vital": 11134.6,
    "Vitainvest Core": 4190.3,
    "iShares Tech Growth": 14443.2,
  },
  {
    date: "Sep 01",
    "ETF Shares Vital": 12347.2,
    "Vitainvest Core": 4839.1,
    "iShares Tech Growth": 14532.1,
  },
  {
    date: "Sep 02",
    "ETF Shares Vital": 12593.8,
    "Vitainvest Core": 5153.3,
    "iShares Tech Growth": 14283.5,
  },
  {
    date: "Sep 03",
    "ETF Shares Vital": 12043.4,
    "Vitainvest Core": 5234.8,
    "iShares Tech Growth": 14078.9,
  },
  {
    date: "Sep 04",
    "ETF Shares Vital": 12144.9,
    "Vitainvest Core": 5478.4,
    "iShares Tech Growth": 13859.7,
  },
  {
    date: "Sep 05",
    "ETF Shares Vital": 12489.5,
    "Vitainvest Core": 5741.1,
    "iShares Tech Growth": 13539.2,
  },
  {
    date: "Sep 06",
    "ETF Shares Vital": 12748.7,
    "Vitainvest Core": 6743.9,
    "iShares Tech Growth": 13643.2,
  },
  {
    date: "Sep 07",
    "ETF Shares Vital": 12933.2,
    "Vitainvest Core": 7832.8,
    "iShares Tech Growth": 14629.2,
  },
  {
    date: "Sep 08",
    "ETF Shares Vital": 13028.8,
    "Vitainvest Core": 8943.2,
    "iShares Tech Growth": 13611.2,
  },
  {
    date: "Sep 09",
    "ETF Shares Vital": 13412.4,
    "Vitainvest Core": 9932.2,
    "iShares Tech Growth": 12515.2,
  },
  {
    date: "Sep 10",
    "ETF Shares Vital": 13649.0,
    "Vitainvest Core": 10139.2,
    "iShares Tech Growth": 11143.8,
  },
  {
    date: "Sep 11",
    "ETF Shares Vital": 13748.5,
    "Vitainvest Core": 10441.2,
    "iShares Tech Growth": 8929.2,
  },
  {
    date: "Sep 12",
    "ETF Shares Vital": 13148.1,
    "Vitainvest Core": 10933.8,
    "iShares Tech Growth": 8943.2,
  },
  {
    date: "Sep 13",
    "ETF Shares Vital": 12839.6,
    "Vitainvest Core": 11073.4,
    "iShares Tech Growth": 7938.3,
  },
  {
    date: "Sep 14",
    "ETF Shares Vital": 12428.2,
    "Vitainvest Core": 11128.3,
    "iShares Tech Growth": 7533.4,
  },
  {
    date: "Sep 15",
    "ETF Shares Vital": 12012.8,
    "Vitainvest Core": 11412.3,
    "iShares Tech Growth": 7100.4,
  },
  {
    date: "Sep 16",
    "ETF Shares Vital": 11801.3,
    "Vitainvest Core": 10501.1,
    "iShares Tech Growth": 6532.1,
  },
  {
    date: "Sep 17",
    "ETF Shares Vital": 10102.9,
    "Vitainvest Core": 8923.3,
    "iShares Tech Growth": 4332.8,
  },
  {
    date: "Sep 18",
    "ETF Shares Vital": 12132.5,
    "Vitainvest Core": 10212.1,
    "iShares Tech Growth": 7847.4,
  },
  {
    date: "Sep 19",
    "ETF Shares Vital": 12901.1,
    "Vitainvest Core": 10101.7,
    "iShares Tech Growth": 7223.3,
  },
  {
    date: "Sep 20",
    "ETF Shares Vital": 13132.6,
    "Vitainvest Core": 12132.3,
    "iShares Tech Growth": 6900.2,
  },
  {
    date: "Sep 21",
    "ETF Shares Vital": 14132.2,
    "Vitainvest Core": 13212.5,
    "iShares Tech Growth": 5932.2,
  },
  {
    date: "Sep 22",
    "ETF Shares Vital": 14245.8,
    "Vitainvest Core": 12163.4,
    "iShares Tech Growth": 5577.1,
  },
  {
    date: "Sep 23",
    "ETF Shares Vital": 14328.3,
    "Vitainvest Core": 10036.1,
    "iShares Tech Growth": 5439.2,
  },
  {
    date: "Sep 24",
    "ETF Shares Vital": 14949.9,
    "Vitainvest Core": 8985.1,
    "iShares Tech Growth": 4463.1,
  },
  {
    date: "Sep 25",
    "ETF Shares Vital": 15967.5,
    "Vitainvest Core": 9700.1,
    "iShares Tech Growth": 4123.2,
  },
  {
    date: "Sep 26",
    "ETF Shares Vital": 17349.3,
    "Vitainvest Core": 10943.4,
    "iShares Tech Growth": 3935.1,
  },
  //array-end
]

const summary = [
  //array-start
  {
    name: "ETF Shares Vital",
    value: "$17,349.30",
    bgColor: "bg-blue-500 dark:bg-blue-500",
  },
  {
    name: "Vitainvest Core",
    value: "$10,943.40",
    bgColor: "bg-violet-500 dark:bg-violet-500",
  },
  {
    name: "iShares Tech Growth",
    value: "$3,935.10",
    bgColor: "bg-fuchsia-500 dark:bg-fuchsia-500",
  },
  //array-end
]

const valueFormatter = (number: number) =>
  `$${Intl.NumberFormat("us").format(number).toString()}`

export default function Example() {
  return (
    <div className="obfuscate">
      <Card>
        <h3 className="font-medium text-gray-900 dark:text-gray-50">
          ETF performance comparison
        </h3>
        <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-3">
            <LineChart
              data={data}
              index="date"
              categories={[
                "ETF Shares Vital",
                "Vitainvest Core",
                "iShares Tech Growth",
              ]}
              colors={["blue", "violet", "fuchsia"]}
              valueFormatter={valueFormatter}
              yAxisWidth={55}
              showLegend={false}
              className="hidden !h-72 sm:block"
            />
            <LineChart
              data={data}
              index="date"
              categories={[
                "ETF Shares Vital",
                "Vitainvest Core",
                "iShares Tech Growth",
              ]}
              colors={["blue", "violet", "fuchsia"]}
              valueFormatter={valueFormatter}
              showYAxis={false}
              showLegend={false}
              startEndOnly={true}
              className="!h-72 sm:hidden"
            />
          </div>
          <div className="md:col-span-1">
            <ul role="list" className="space-y-6">
              {summary.map((item) => (
                <li key={item.name} className="flex space-x-3">
                  <span
                    className={cx(item.bgColor, "w-1 shrink-0 rounded")}
                    aria-hidden={true}
                  />
                  <div className="flex w-full items-center justify-between md:block">
                    <p className="order-last font-semibold text-gray-900 dark:text-gray-50">
                      {item.value}
                    </p>
                    <p className="order-first text-sm whitespace-nowrap text-gray-500 dark:text-gray-500">
                      {item.name}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="mt-6 inline-flex items-center gap-1.5 py-2 text-sm font-medium whitespace-nowrap text-blue-500 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-600"
            >
              <RiAddFill className="size-5 shrink-0" aria-hidden={true} />
              Compare asset
            </button>
          </div>
        </div>
      </Card>
    </div>
  )
}
```


```example/line-charts-line-chart-11.tsx
import { Badge } from "@/atom/Badge"
import { Card } from "@/atom/Card"
import { Divider } from "@/atom/Divider"
import { LineChart } from "@/atom/LineChart"

const data = [
  //array-start
  {
    date: "Jan 22",
    MRR: 2100,
    "Active subscribers": 434,
    "Net volume": 7943,
    "Churned revenue": 0,
  },
  {
    date: "Feb 22",
    MRR: 2943,
    "Active subscribers": 454,
    "Net volume": 8954,
    "Churned revenue": 0,
  },
  {
    date: "Mar 22",
    MRR: 4889,
    "Active subscribers": 610,
    "Net volume": 9123,
    "Churned revenue": 0,
  },
  {
    date: "Apr 22",
    MRR: 3909,
    "Active subscribers": 490,
    "Net volume": 7478,
    "Churned revenue": 0,
  },
  {
    date: "May 22",
    MRR: 5778,
    "Active subscribers": 710,
    "Net volume": 9504,
    "Churned revenue": 0,
  },
  {
    date: "Jun 22",
    MRR: 5900,
    "Active subscribers": 753,
    "Net volume": 9943,
    "Churned revenue": 0,
  },
  {
    date: "Jul 22",
    MRR: 4129,
    "Active subscribers": 741,
    "Net volume": 10112,
    "Churned revenue": 0,
  },
  {
    date: "Aug 22",
    MRR: 6021,
    "Active subscribers": 783,
    "Net volume": 10290,
    "Churned revenue": 0,
  },
  {
    date: "Sep 22",
    MRR: 6279,
    "Active subscribers": 815,
    "Net volume": 10349,
    "Churned revenue": 0,
  },
  {
    date: "Oct 22",
    MRR: 6224,
    "Active subscribers": 826,
    "Net volume": 10415,
    "Churned revenue": 0,
  },
  {
    date: "Nov 22",
    MRR: 6380,
    "Active subscribers": 896,
    "Net volume": 10636,
    "Churned revenue": 0,
  },
  {
    date: "Dec 22",
    MRR: 6414,
    "Active subscribers": 798,
    "Net volume": 10900,
    "Churned revenue": 0,
  },
  {
    date: "Jan 23",
    MRR: 6540,
    "Active subscribers": 783,
    "Net volume": 11040,
    "Churned revenue": 120,
  },
  {
    date: "Feb 23",
    MRR: 6634,
    "Active subscribers": 734,
    "Net volume": 11390,
    "Churned revenue": 240,
  },
  {
    date: "Mar 23",
    MRR: 7124,
    "Active subscribers": 690,
    "Net volume": 11423,
    "Churned revenue": 120,
  },
  {
    date: "Apr 23",
    MRR: 7934,
    "Active subscribers": 627,
    "Net volume": 12134,
    "Churned revenue": 0,
  },
  {
    date: "May 23",
    MRR: 7287,
    "Active subscribers": 590,
    "Net volume": 12034,
    "Churned revenue": 0,
  },
  {
    date: "Jun 23",
    MRR: 7323,
    "Active subscribers": 573,
    "Net volume": 11011,
    "Churned revenue": 0,
  },
  {
    date: "Jul 23",
    MRR: 7511,
    "Active subscribers": 552,
    "Net volume": 11834,
    "Churned revenue": 2312,
  },
  {
    date: "Aug 23",
    MRR: 7043,
    "Active subscribers": 542,
    "Net volume": 12387,
    "Churned revenue": 2421,
  },
  {
    date: "Sep 23",
    MRR: 6700,
    "Active subscribers": 533,
    "Net volume": 11032,
    "Churned revenue": 2910,
  },
  {
    date: "Oct 23",
    MRR: 6900,
    "Active subscribers": 494,
    "Net volume": 10134,
    "Churned revenue": 1290,
  },
  {
    date: "Nov 23",
    MRR: 7934,
    "Active subscribers": 481,
    "Net volume": 9921,
    "Churned revenue": 990,
  },
  {
    date: "Dec 23",
    MRR: 9021,
    "Active subscribers": 272,
    "Net volume": 10549,
    "Churned revenue": 780,
  },
  //array-end
]

const numberFormatter = (number: number) =>
  `$${Intl.NumberFormat("us").format(number).toString()}`

const currencyFormatter = (number: number) =>
  "$" + Intl.NumberFormat("us").format(number).toString()

const summary = [
  {
    name: "MRR",
    value: "$9.1K",
    valueFormatter: currencyFormatter,
    change: "+12.1%",
    changeType: "positive",
  },
  {
    name: "Active subscribers",
    value: "272",
    valueFormatter: numberFormatter,
    change: "-4.2%",
    changeType: "negative",
  },
  {
    name: "Net volume",
    value: "$10.5K",
    valueFormatter: currencyFormatter,
    change: "+2.9%",
    changeType: "positive",
  },
  {
    name: "Churned revenue",
    value: "$0.8K",
    valueFormatter: currencyFormatter,
    change: "+5.3%",
    changeType: "negative",
  },
]

export default function Example() {
  return (
    <div className="obfuscate">
      <h3 className="font-medium text-gray-900 dark:text-gray-50">Growth</h3>
      <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor.
      </p>
      <Divider className="my-4" />
      <dl className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        {summary.map((item) => (
          <Card key={item.name} className="!pb-2">
            <div className="flex items-center space-x-1.5">
              <dt className="text-sm text-gray-500 dark:text-gray-500">
                {item.name}
              </dt>
              {item.changeType === "positive" ? (
                <Badge variant="success" className="!px-1.5 !py-0.5">
                  {item.change}
                </Badge>
              ) : (
                <Badge variant="error" className="!px-1.5 !py-0.5">
                  {item.change}
                </Badge>
              )}
            </div>
            <div className="flex items-baseline justify-between">
              <dd className="text-lg font-medium text-gray-900 dark:text-gray-50">
                {item.value}
              </dd>
              <dd className="text-sm text-gray-500 dark:text-gray-500">
                Compared to {data[0].date}
              </dd>
            </div>
            <LineChart
              data={data}
              index="date"
              categories={[item.name]}
              valueFormatter={item.valueFormatter}
              showYAxis={false}
              showLegend={false}
              startEndOnly={true}
              className="mt-4 !h-36"
            />
          </Card>
        ))}
      </dl>
    </div>
  )
}
```


```example/line-charts-line-chart-05.tsx
"use client"

// Add this custom Color to your chartUtils.ts file
// lightGray: {
//   bg: 'bg-gray-300 dark:bg-gray-700',
//   stroke: 'stroke-gray-300 dark:stroke-gray-700',
//   fill: 'fill-gray-300 dark:fill-gray-700',
//   text: 'text-gray-300 dark:text-gray-700',
// },
import React from "react"
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react"
import {
  CartesianGrid,
  Dot,
  Label,
  Line,
  Legend as RechartsLegend,
  LineChart as RechartsLineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { AxisDomain } from "recharts/types/util/types"

import {
  AvailableChartColors,
  AvailableChartColorsKeys,
  constructCategoryColors,
  getColorClassName,
  getYAxisDomain,
  hasOnlyOneValueForKey,
} from "@/lib/chartUtils"
import { useOnWindowResize } from "@/lib/useOnWindowResize"
import { cx } from "@/lib/utils"

import { Card } from "@/atom/Card"

// Tremor LineChart [v0.3.1]

//array-start

//#region Legend

interface LegendItemProps {
  name: string
  color: AvailableChartColorsKeys
  onClick?: (name: string, color: AvailableChartColorsKeys) => void
  activeLegend?: string
}

const LegendItem = ({
  name,
  color,
  onClick,
  activeLegend,
}: LegendItemProps) => {
  const hasOnValueChange = !!onClick
  return (
    <li
      className={cx(
        // base
        "group inline-flex flex-nowrap items-center gap-1.5 rounded px-2 py-1 whitespace-nowrap transition",
        hasOnValueChange
          ? "cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
          : "cursor-default",
      )}
      onClick={(e) => {
        e.stopPropagation()
        onClick?.(name, color)
      }}
    >
      <span
        className={cx(
          "h-[3px] w-3.5 shrink-0 rounded-full",
          getColorClassName(color, "bg"),
          activeLegend && activeLegend !== name ? "opacity-40" : "opacity-100",
        )}
        aria-hidden={true}
      />
      <p
        className={cx(
          // base
          "truncate text-xs whitespace-nowrap",
          // text color
          "text-gray-700 dark:text-gray-300",
          hasOnValueChange &&
            "group-hover:text-gray-900 dark:group-hover:text-gray-50",
          activeLegend && activeLegend !== name ? "opacity-40" : "opacity-100",
        )}
      >
        {name}
      </p>
    </li>
  )
}

interface ScrollButtonProps {
  icon: React.ElementType
  onClick?: () => void
  disabled?: boolean
}

const ScrollButton = ({ icon, onClick, disabled }: ScrollButtonProps) => {
  const Icon = icon
  const [isPressed, setIsPressed] = React.useState(false)
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null)

  React.useEffect(() => {
    if (isPressed) {
      intervalRef.current = setInterval(() => {
        onClick?.()
      }, 300)
    } else {
      clearInterval(intervalRef.current as NodeJS.Timeout)
    }
    return () => clearInterval(intervalRef.current as NodeJS.Timeout)
  }, [isPressed, onClick])

  React.useEffect(() => {
    if (disabled) {
      clearInterval(intervalRef.current as NodeJS.Timeout)
      setIsPressed(false)
    }
  }, [disabled])

  return (
    <button
      type="button"
      className={cx(
        // base
        "group inline-flex size-5 items-center truncate rounded transition",
        disabled
          ? "cursor-not-allowed text-gray-400 dark:text-gray-600"
          : "cursor-pointer text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-50",
      )}
      disabled={disabled}
      onClick={(e) => {
        e.stopPropagation()
        onClick?.()
      }}
      onMouseDown={(e) => {
        e.stopPropagation()
        setIsPressed(true)
      }}
      onMouseUp={(e) => {
        e.stopPropagation()
        setIsPressed(false)
      }}
    >
      <Icon className="size-full" aria-hidden="true" />
    </button>
  )
}

interface LegendProps extends React.OlHTMLAttributes<HTMLOListElement> {
  categories: string[]
  colors?: AvailableChartColorsKeys[]
  onClickLegendItem?: (category: string, color: string) => void
  activeLegend?: string
  enableLegendSlider?: boolean
}

type HasScrollProps = {
  left: boolean
  right: boolean
}

const Legend = React.forwardRef<HTMLOListElement, LegendProps>((props, ref) => {
  const {
    categories,
    colors = AvailableChartColors,
    className,
    onClickLegendItem,
    activeLegend,
    enableLegendSlider = false,
    ...other
  } = props
  const scrollableRef = React.useRef<HTMLInputElement>(null)
  const scrollButtonsRef = React.useRef<HTMLDivElement>(null)
  const [hasScroll, setHasScroll] = React.useState<HasScrollProps | null>(null)
  const [isKeyDowned, setIsKeyDowned] = React.useState<string | null>(null)
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null)

  const checkScroll = React.useCallback(() => {
    const scrollable = scrollableRef?.current
    if (!scrollable) return

    const hasLeftScroll = scrollable.scrollLeft > 0
    const hasRightScroll =
      scrollable.scrollWidth - scrollable.clientWidth > scrollable.scrollLeft

    setHasScroll({ left: hasLeftScroll, right: hasRightScroll })
  }, [setHasScroll])

  const scrollToTest = React.useCallback(
    (direction: "left" | "right") => {
      const element = scrollableRef?.current
      const scrollButtons = scrollButtonsRef?.current
      const scrollButtonsWith = scrollButtons?.clientWidth ?? 0
      const width = element?.clientWidth ?? 0

      if (element && enableLegendSlider) {
        element.scrollTo({
          left:
            direction === "left"
              ? element.scrollLeft - width + scrollButtonsWith
              : element.scrollLeft + width - scrollButtonsWith,
          behavior: "smooth",
        })
        setTimeout(() => {
          checkScroll()
        }, 400)
      }
    },
    [enableLegendSlider, checkScroll],
  )

  React.useEffect(() => {
    const keyDownHandler = (key: string) => {
      if (key === "ArrowLeft") {
        scrollToTest("left")
      } else if (key === "ArrowRight") {
        scrollToTest("right")
      }
    }
    if (isKeyDowned) {
      keyDownHandler(isKeyDowned)
      intervalRef.current = setInterval(() => {
        keyDownHandler(isKeyDowned)
      }, 300)
    } else {
      clearInterval(intervalRef.current as NodeJS.Timeout)
    }
    return () => clearInterval(intervalRef.current as NodeJS.Timeout)
  }, [isKeyDowned, scrollToTest])

  const keyDown = (e: KeyboardEvent) => {
    e.stopPropagation()
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      e.preventDefault()
      setIsKeyDowned(e.key)
    }
  }
  const keyUp = (e: KeyboardEvent) => {
    e.stopPropagation()
    setIsKeyDowned(null)
  }

  React.useEffect(() => {
    const scrollable = scrollableRef?.current
    if (enableLegendSlider) {
      checkScroll()
      scrollable?.addEventListener("keydown", keyDown)
      scrollable?.addEventListener("keyup", keyUp)
    }

    return () => {
      scrollable?.removeEventListener("keydown", keyDown)
      scrollable?.removeEventListener("keyup", keyUp)
    }
  }, [checkScroll, enableLegendSlider])

  return (
    <ol
      ref={ref}
      className={cx("relative overflow-hidden", className)}
      {...other}
    >
      <div
        ref={scrollableRef}
        tabIndex={0}
        className={cx(
          "flex h-full",
          enableLegendSlider
            ? hasScroll?.right || hasScroll?.left
              ? "snap-mandatory items-center overflow-auto pr-12 pl-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              : ""
            : "flex-wrap",
        )}
      >
        {categories.map((category, index) => (
          <LegendItem
            key={`item-${index}`}
            name={category}
            color={colors[index] as AvailableChartColorsKeys}
            onClick={onClickLegendItem}
            activeLegend={activeLegend}
          />
        ))}
      </div>
      {enableLegendSlider && (hasScroll?.right || hasScroll?.left) ? (
        <>
          <div
            className={cx(
              // base
              "absolute top-0 right-0 bottom-0 flex h-full items-center justify-center pr-1",
              // background color
              "bg-white dark:bg-gray-950",
            )}
          >
            <ScrollButton
              icon={RiArrowLeftSLine}
              onClick={() => {
                setIsKeyDowned(null)
                scrollToTest("left")
              }}
              disabled={!hasScroll?.left}
            />
            <ScrollButton
              icon={RiArrowRightSLine}
              onClick={() => {
                setIsKeyDowned(null)
                scrollToTest("right")
              }}
              disabled={!hasScroll?.right}
            />
          </div>
        </>
      ) : null}
    </ol>
  )
})

Legend.displayName = "Legend"

const ChartLegend = (
  { payload }: any,
  categoryColors: Map<string, AvailableChartColorsKeys>,
  setLegendHeight: React.Dispatch<React.SetStateAction<number>>,
  activeLegend: string | undefined,
  onClick?: (category: string, color: string) => void,
  enableLegendSlider?: boolean,
  legendPosition?: "left" | "center" | "right",
  yAxisWidth?: number,
) => {
  const legendRef = React.useRef<HTMLDivElement>(null)

  useOnWindowResize(() => {
    const calculateHeight = (height: number | undefined) =>
      height ? Number(height) + 15 : 60
    setLegendHeight(calculateHeight(legendRef.current?.clientHeight))
  })

  const legendPayload = payload.filter((item: any) => item.type !== "none")

  const paddingLeft =
    legendPosition === "left" && yAxisWidth ? yAxisWidth - 8 : 0

  return (
    <div
      ref={legendRef}
      style={{ paddingLeft: paddingLeft }}
      className={cx(
        "flex items-center",
        { "justify-center": legendPosition === "center" },
        { "justify-start": legendPosition === "left" },
        { "justify-end": legendPosition === "right" },
      )}
    >
      <Legend
        categories={legendPayload.map((entry: any) => entry.value)}
        colors={legendPayload.map((entry: any) =>
          categoryColors.get(entry.value),
        )}
        onClickLegendItem={onClick}
        activeLegend={activeLegend}
        enableLegendSlider={enableLegendSlider}
      />
    </div>
  )
}

//#region Tooltip

type TooltipProps = Pick<ChartTooltipProps, "active" | "payload" | "label">

type PayloadItem = {
  category: string
  value: number
  index: string
  color: AvailableChartColorsKeys
  type?: string
  payload: any
}

interface ChartTooltipProps {
  active: boolean | undefined
  payload: PayloadItem[]
  label: string
  valueFormatter: (value: number) => string
}

const ChartTooltip = ({
  active,
  payload,
  label,
  valueFormatter,
}: ChartTooltipProps) => {
  if (active && payload && payload.length) {
    const legendPayload = payload.filter((item: any) => item.type !== "none")
    return (
      <div
        className={cx(
          // base
          "rounded-md border text-sm shadow-md",
          // border color
          "border-gray-200 dark:border-gray-800",
          // background color
          "bg-white dark:bg-gray-950",
        )}
      >
        <div className={cx("border-b border-inherit px-4 py-2")}>
          <p
            className={cx(
              // base
              "font-medium",
              // text color
              "text-gray-900 dark:text-gray-50",
            )}
          >
            {label}
          </p>
        </div>
        <div className={cx("space-y-1 px-4 py-2")}>
          {legendPayload.map(({ value, category, color }, index) => (
            <div
              key={`id-${index}`}
              className="flex items-center justify-between space-x-8"
            >
              <div className="flex items-center space-x-2">
                <span
                  aria-hidden="true"
                  className={cx(
                    "h-[3px] w-3.5 shrink-0 rounded-full",
                    getColorClassName(color, "bg"),
                  )}
                />
                <p
                  className={cx(
                    // base
                    "text-right whitespace-nowrap",
                    // text color
                    "text-gray-700 dark:text-gray-300",
                  )}
                >
                  {category}
                </p>
              </div>
              <p
                className={cx(
                  // base
                  "text-right font-medium whitespace-nowrap tabular-nums",
                  // text color
                  "text-gray-900 dark:text-gray-50",
                )}
              >
                {valueFormatter(value)}
              </p>
            </div>
          ))}
        </div>
      </div>
    )
  }
  return null
}

//#region LineChart

interface ActiveDot {
  index?: number
  dataKey?: string
}

type BaseEventProps = {
  eventType: "dot" | "category"
  categoryClicked: string
  [key: string]: number | string
}

type LineChartEventProps = BaseEventProps | null | undefined

interface LineChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: Record<string, any>[]
  index: string
  categories: string[]
  colors?: AvailableChartColorsKeys[]
  valueFormatter?: (value: number) => string
  startEndOnly?: boolean
  showXAxis?: boolean
  showYAxis?: boolean
  showGridLines?: boolean
  yAxisWidth?: number
  intervalType?: "preserveStartEnd" | "equidistantPreserveStart"
  showTooltip?: boolean
  showLegend?: boolean
  autoMinValue?: boolean
  minValue?: number
  maxValue?: number
  allowDecimals?: boolean
  onValueChange?: (value: LineChartEventProps) => void
  enableLegendSlider?: boolean
  tickGap?: number
  connectNulls?: boolean
  xAxisLabel?: string
  yAxisLabel?: string
  legendPosition?: "left" | "center" | "right"
  tooltipCallback?: (tooltipCallbackContent: TooltipProps) => void
  customTooltip?: React.ComponentType<TooltipProps>
  highlightLastIndexCategory?: string
  referenceLine?: { value: number; label?: string }
}

const LineChart = React.forwardRef<HTMLDivElement, LineChartProps>(
  (props, ref) => {
    const {
      data = [],
      categories = [],
      index,
      colors = AvailableChartColors,
      valueFormatter = (value: number) => value.toString(),
      startEndOnly = false,
      showXAxis = true,
      showYAxis = true,
      showGridLines = true,
      yAxisWidth = 56,
      intervalType = "equidistantPreserveStart",
      showTooltip = true,
      showLegend = true,
      autoMinValue = false,
      minValue,
      maxValue,
      allowDecimals = true,
      connectNulls = false,
      className,
      onValueChange,
      enableLegendSlider = false,
      tickGap = 5,
      xAxisLabel,
      yAxisLabel,
      legendPosition = "right",
      tooltipCallback,
      customTooltip,
      highlightLastIndexCategory,
      referenceLine,
      ...other
    } = props
    const CustomTooltip = customTooltip
    const paddingValue =
      (!showXAxis && !showYAxis) || (startEndOnly && !showYAxis) ? 0 : 20
    const [legendHeight, setLegendHeight] = React.useState(60)
    const [activeDot, setActiveDot] = React.useState<ActiveDot | undefined>(
      undefined,
    )
    const [activeLegend, setActiveLegend] = React.useState<string | undefined>(
      undefined,
    )
    const categoryColors = constructCategoryColors(categories, colors)

    const yAxisDomain = getYAxisDomain(autoMinValue, minValue, maxValue)
    const hasOnValueChange = !!onValueChange
    const prevActiveRef = React.useRef<boolean | undefined>(undefined)
    const prevLabelRef = React.useRef<string | undefined>(undefined)

    function onDotClick(itemData: any, event: React.MouseEvent) {
      event.stopPropagation()

      if (!hasOnValueChange) return
      if (
        (itemData.index === activeDot?.index &&
          itemData.dataKey === activeDot?.dataKey) ||
        (hasOnlyOneValueForKey(data, itemData.dataKey) &&
          activeLegend &&
          activeLegend === itemData.dataKey)
      ) {
        setActiveLegend(undefined)
        setActiveDot(undefined)
        onValueChange?.(null)
      } else {
        setActiveLegend(itemData.dataKey)
        setActiveDot({
          index: itemData.index,
          dataKey: itemData.dataKey,
        })
        onValueChange?.({
          eventType: "dot",
          categoryClicked: itemData.dataKey,
          ...itemData.payload,
        })
      }
    }

    function onCategoryClick(dataKey: string) {
      if (!hasOnValueChange) return
      if (
        (dataKey === activeLegend && !activeDot) ||
        (hasOnlyOneValueForKey(data, dataKey) &&
          activeDot &&
          activeDot.dataKey === dataKey)
      ) {
        setActiveLegend(undefined)
        onValueChange?.(null)
      } else {
        setActiveLegend(dataKey)
        onValueChange?.({
          eventType: "category",
          categoryClicked: dataKey,
        })
      }
      setActiveDot(undefined)
    }

    function getLastValidIndexForCategory(
      data: Record<string, any>[],
      category: string,
    ): number {
      for (let i = data.length - 1; i >= 0; i--) {
        if (data[i][category] !== null && data[i][category] !== undefined) {
          return i
        }
      }
      return -1
    }

    return (
      <div ref={ref} className={cx("h-80 w-full", className)} {...other}>
        <ResponsiveContainer>
          <RechartsLineChart
            data={data}
            onClick={
              hasOnValueChange && (activeLegend || activeDot)
                ? () => {
                    setActiveDot(undefined)
                    setActiveLegend(undefined)
                    onValueChange?.(null)
                  }
                : undefined
            }
            margin={{
              bottom: xAxisLabel ? 30 : undefined,
              left: yAxisLabel ? 20 : undefined,
              right: yAxisLabel ? 5 : undefined,
              top: 5,
            }}
          >
            {showGridLines ? (
              <CartesianGrid
                className={cx("stroke-gray-200 stroke-1 dark:stroke-gray-800")}
                horizontal={true}
                vertical={false}
              />
            ) : null}
            <XAxis
              padding={{ left: paddingValue, right: paddingValue }}
              hide={!showXAxis}
              dataKey={index}
              interval={startEndOnly ? "preserveStartEnd" : intervalType}
              tick={{ transform: "translate(0, 6)" }}
              ticks={
                startEndOnly
                  ? [data[0][index], data[data.length - 1][index]]
                  : undefined
              }
              fill=""
              stroke=""
              className={cx(
                // base
                "text-xs",
                // text fill
                "fill-gray-500 dark:fill-gray-500",
              )}
              tickLine={false}
              axisLine={false}
              minTickGap={tickGap}
            >
              {xAxisLabel && (
                <Label
                  position="insideBottom"
                  offset={-20}
                  className="fill-gray-800 text-sm font-medium dark:fill-gray-200"
                >
                  {xAxisLabel}
                </Label>
              )}
            </XAxis>
            <YAxis
              width={yAxisWidth}
              hide={!showYAxis}
              axisLine={false}
              tickLine={false}
              type="number"
              domain={yAxisDomain as AxisDomain}
              tick={{ transform: "translate(-3, 0)" }}
              fill=""
              stroke=""
              className={cx(
                // base
                "text-xs",
                // text fill
                "fill-gray-500 dark:fill-gray-500",
              )}
              tickFormatter={valueFormatter}
              allowDecimals={allowDecimals}
            >
              {yAxisLabel && (
                <Label
                  position="insideLeft"
                  style={{ textAnchor: "middle" }}
                  angle={-90}
                  offset={-15}
                  className="fill-gray-800 text-sm font-medium dark:fill-gray-200"
                >
                  {yAxisLabel}
                </Label>
              )}
            </YAxis>
            <Tooltip
              wrapperStyle={{ outline: "none" }}
              isAnimationActive={true}
              animationDuration={100}
              cursor={{ stroke: "#d1d5db", strokeWidth: 1 }}
              offset={20}
              position={{ y: 0 }}
              content={({ active, payload, label }) => {
                const cleanPayload: TooltipProps["payload"] = payload
                  ? payload.map((item: any) => ({
                      category: item.dataKey,
                      value: item.value,
                      index: item.payload[index],
                      color: categoryColors.get(
                        item.dataKey,
                      ) as AvailableChartColorsKeys,
                      type: item.type,
                      payload: item.payload,
                    }))
                  : []

                if (
                  tooltipCallback &&
                  (active !== prevActiveRef.current ||
                    label !== prevLabelRef.current)
                ) {
                  tooltipCallback({ active, payload: cleanPayload, label })
                  prevActiveRef.current = active
                  prevLabelRef.current = label
                }

                return showTooltip && active ? (
                  CustomTooltip ? (
                    <CustomTooltip
                      active={active}
                      payload={cleanPayload}
                      label={label}
                    />
                  ) : (
                    <ChartTooltip
                      active={active}
                      payload={cleanPayload}
                      label={label}
                      valueFormatter={valueFormatter}
                    />
                  )
                ) : null
              }}
            />
            {referenceLine ? (
              <ReferenceLine
                y={referenceLine.value}
                stroke=""
                strokeDasharray="6 6"
                strokeWidth={1}
                className="stroke-red-600 dark:stroke-red-500"
              >
                <Label
                  position="insideBottomLeft"
                  value={referenceLine.label}
                  className="fill-red-600 stroke-none text-xs dark:fill-red-500"
                  offset={10}
                  dy={0}
                />
              </ReferenceLine>
            ) : null}
            {showLegend ? (
              <RechartsLegend
                verticalAlign="top"
                height={legendHeight}
                content={({ payload }) =>
                  ChartLegend(
                    { payload },
                    categoryColors,
                    setLegendHeight,
                    activeLegend,
                    hasOnValueChange
                      ? (clickedLegendItem: string) =>
                          onCategoryClick(clickedLegendItem)
                      : undefined,
                    enableLegendSlider,
                    legendPosition,
                    yAxisWidth,
                  )
                }
              />
            ) : null}
            {categories.map((category) => {
              const lastValidIndex = getLastValidIndexForCategory(
                data,
                category,
              )
              return (
                <Line
                  className={cx(
                    getColorClassName(
                      categoryColors.get(category) as AvailableChartColorsKeys,
                      "stroke",
                    ),
                  )}
                  strokeOpacity={
                    activeDot || (activeLegend && activeLegend !== category)
                      ? 0.3
                      : 1
                  }
                  activeDot={(props: any) => {
                    const {
                      cx: cxCoord,
                      cy: cyCoord,
                      stroke,
                      strokeLinecap,
                      strokeLinejoin,
                      strokeWidth,
                      dataKey,
                    } = props
                    return (
                      <Dot
                        className={cx(
                          "stroke-white dark:stroke-gray-950",
                          onValueChange ? "cursor-pointer" : "",
                          getColorClassName(
                            categoryColors.get(
                              dataKey,
                            ) as AvailableChartColorsKeys,
                            "fill",
                          ),
                        )}
                        cx={cxCoord}
                        cy={cyCoord}
                        r={5}
                        fill=""
                        stroke={stroke}
                        strokeLinecap={strokeLinecap}
                        strokeLinejoin={strokeLinejoin}
                        strokeWidth={strokeWidth}
                        onClick={(_, event) => onDotClick(props, event)}
                      />
                    )
                  }}
                  dot={(props: any) => {
                    const {
                      stroke,
                      strokeLinecap,
                      strokeLinejoin,
                      strokeWidth,
                      cx: cxCoord,
                      cy: cyCoord,
                      dataKey,
                      index,
                    } = props

                    if (
                      highlightLastIndexCategory === dataKey &&
                      index === lastValidIndex
                    ) {
                      return (
                        <Dot
                          key={index}
                          cx={cxCoord}
                          cy={cyCoord}
                          r={5}
                          stroke={stroke}
                          fill=""
                          strokeLinecap={strokeLinecap}
                          strokeLinejoin={strokeLinejoin}
                          strokeWidth={strokeWidth}
                          className={cx(
                            "stroke-white dark:stroke-gray-950",
                            onValueChange ? "cursor-pointer" : "",
                            getColorClassName(
                              categoryColors.get(
                                dataKey,
                              ) as AvailableChartColorsKeys,
                              "fill",
                            ),
                          )}
                        />
                      )
                    }
                    return <React.Fragment key={index}></React.Fragment>
                  }}
                  key={category}
                  name={category}
                  type="linear"
                  dataKey={category}
                  stroke=""
                  strokeWidth={2}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  isAnimationActive={false}
                  connectNulls={connectNulls}
                />
              )
            })}

            {/* hidden lines to increase clickable target area */}
            {onValueChange
              ? categories.map((category) => (
                  <Line
                    className={cx("cursor-pointer")}
                    strokeOpacity={0}
                    key={category}
                    name={category}
                    type="linear"
                    dataKey={category}
                    stroke="transparent"
                    fill="transparent"
                    legendType="none"
                    tooltipType="none"
                    strokeWidth={12}
                    connectNulls={connectNulls}
                    onClick={(props: any, event) => {
                      event.stopPropagation()
                      const { name } = props
                      onCategoryClick(name)
                    }}
                  />
                ))
              : null}
          </RechartsLineChart>
        </ResponsiveContainer>
      </div>
    )
  },
)

LineChart.displayName = "LineChart"

//array-end

type DataPoint = {
  date: string
  currentMonth: number | null
  lastMonth: number | null
}

const data: DataPoint[] = [
  { date: "Jun 01", currentMonth: 4837, lastMonth: 1492 },
  { date: "Jun 02", currentMonth: 503, lastMonth: 1738 },
  { date: "Jun 03", currentMonth: 2341, lastMonth: 56 },
  { date: "Jun 04", currentMonth: 1089, lastMonth: 87 },
  { date: "Jun 05", currentMonth: 578, lastMonth: 15 },
  { date: "Jun 06", currentMonth: 312, lastMonth: 2301 },
  { date: "Jun 07", currentMonth: 9695, lastMonth: 5124 },
  { date: "Jun 08", currentMonth: 12451, lastMonth: 9398 },
  { date: "Jun 09", currentMonth: 2784, lastMonth: 4267 },
  { date: "Jun 10", currentMonth: 569, lastMonth: 1509 },
  { date: "Jun 11", currentMonth: 906, lastMonth: 1356 },
  { date: "Jun 12", currentMonth: 4738, lastMonth: 671 },
  { date: "Jun 13", currentMonth: 4012, lastMonth: 483 },
  { date: "Jun 14", currentMonth: 2845, lastMonth: 729 },
  { date: "Jun 15", currentMonth: 3167, lastMonth: 2594 },
  { date: "Jun 16", currentMonth: 934, lastMonth: 11812 },
  { date: "Jun 17", currentMonth: 256, lastMonth: 1778 },
  { date: "Jun 18", currentMonth: 89, lastMonth: 14945 },
  { date: "Jun 19", currentMonth: 312, lastMonth: 10803 },
  { date: "Jun 20", currentMonth: 6278, lastMonth: 3067 },
  { date: "Jun 21", currentMonth: 2729, lastMonth: 941 },
  { date: "Jun 22", currentMonth: null, lastMonth: 184 },
  { date: "Jun 23", currentMonth: null, lastMonth: 152 },
  { date: "Jun 24", currentMonth: null, lastMonth: 5326 },
  { date: "Jun 25", currentMonth: null, lastMonth: 2189 },
  { date: "Jun 26", currentMonth: null, lastMonth: 11457 },
  { date: "Jun 27", currentMonth: null, lastMonth: 3295 },
  { date: "Jun 28", currentMonth: null, lastMonth: 1581 },
  { date: "Jun 29", currentMonth: null, lastMonth: 2423 },
  { date: "Jun 30", currentMonth: null, lastMonth: 678 },
]

const calculateCumulativeData = (data: DataPoint[]): DataPoint[] => {
  let cumulativeCurrentMonth = 0
  let cumulativeLastMonth = 0
  let lastValidCurrentMonth: number | null = null

  return data.map((point) => {
    if (point.currentMonth !== null) {
      cumulativeCurrentMonth += point.currentMonth
      lastValidCurrentMonth = cumulativeCurrentMonth
    }
    cumulativeLastMonth += point.lastMonth || 0

    return {
      date: point.date,
      currentMonth: point.currentMonth !== null ? lastValidCurrentMonth : null,
      lastMonth: cumulativeLastMonth,
    }
  })
}

const currencyFormatter = (number: number) => {
  return "$" + Intl.NumberFormat("us").format(number).toString()
}

export default function Example() {
  const companyLimit = 105_000 // Assuming a company limit of 100,000

  const cumulativeData = React.useMemo(
    () => calculateCumulativeData(data),
    [data],
  )

  return (
    <div className="obfuscate">
      <p className="mb-4 text-center text-sm text-gray-500 dark:text-gray-500">
        Customized chart using a month to date calculation
      </p>
      <Card className="mx-auto max-w-2xl">
        <LineChart
          referenceLine={{
            value: companyLimit,
            label: `Usage limit: ${currencyFormatter(companyLimit)}`,
          }}
          data={cumulativeData}
          valueFormatter={(v) => currencyFormatter(v)}
          index="date"
          colors={["lightGray", "blue"]}
          categories={["lastMonth", "currentMonth"]}
          connectNulls={false}
          yAxisWidth={70}
          highlightLastIndexCategory="currentMonth"
          className="hidden sm:block"
        />
        <LineChart
          referenceLine={{
            value: companyLimit,
            label: `Usage limit: ${currencyFormatter(companyLimit)}`,
          }}
          data={cumulativeData}
          valueFormatter={(v) => currencyFormatter(v)}
          index="date"
          colors={["lightGray", "blue"]}
          categories={["lastMonth", "currentMonth"]}
          connectNulls={false}
          showYAxis={false}
          highlightLastIndexCategory="currentMonth"
          className="block sm:hidden"
        />
      </Card>
    </div>
  )
}
```


```example/line-charts-line-chart-04.tsx
"use client"

// Add this custom Color to your chartUtils.ts file
// lightGray: {
//   bg: 'bg-gray-300 dark:bg-gray-700',
//   stroke: 'stroke-gray-300 dark:stroke-gray-700',
//   fill: 'fill-gray-300 dark:fill-gray-700',
//   text: 'text-gray-300 dark:text-gray-700',
// },
import React from "react"
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react"
import {
  CartesianGrid,
  Dot,
  Label,
  Line,
  Legend as RechartsLegend,
  LineChart as RechartsLineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { AxisDomain } from "recharts/types/util/types"

import {
  AvailableChartColors,
  AvailableChartColorsKeys,
  constructCategoryColors,
  getColorClassName,
  getYAxisDomain,
  hasOnlyOneValueForKey,
} from "@/lib/chartUtils"
import { useOnWindowResize } from "@/lib/useOnWindowResize"
import { cx } from "@/lib/utils"

import { Card } from "@/atom/Card"

// Tremor LineChart [v0.3.1]

//array-start

//#region Legend

interface LegendItemProps {
  name: string
  color: AvailableChartColorsKeys
  onClick?: (name: string, color: AvailableChartColorsKeys) => void
  activeLegend?: string
}

const LegendItem = ({
  name,
  color,
  onClick,
  activeLegend,
}: LegendItemProps) => {
  const hasOnValueChange = !!onClick
  return (
    <li
      className={cx(
        // base
        "group inline-flex flex-nowrap items-center gap-1.5 rounded px-2 py-1 whitespace-nowrap transition",
        hasOnValueChange
          ? "cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
          : "cursor-default",
      )}
      onClick={(e) => {
        e.stopPropagation()
        onClick?.(name, color)
      }}
    >
      <span
        className={cx(
          "h-[3px] w-3.5 shrink-0 rounded-full",
          getColorClassName(color, "bg"),
          activeLegend && activeLegend !== name ? "opacity-40" : "opacity-100",
        )}
        aria-hidden={true}
      />
      <p
        className={cx(
          // base
          "truncate text-xs whitespace-nowrap",
          // text color
          "text-gray-700 dark:text-gray-300",
          hasOnValueChange &&
            "group-hover:text-gray-900 dark:group-hover:text-gray-50",
          activeLegend && activeLegend !== name ? "opacity-40" : "opacity-100",
        )}
      >
        {name}
      </p>
    </li>
  )
}

interface ScrollButtonProps {
  icon: React.ElementType
  onClick?: () => void
  disabled?: boolean
}

const ScrollButton = ({ icon, onClick, disabled }: ScrollButtonProps) => {
  const Icon = icon
  const [isPressed, setIsPressed] = React.useState(false)
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null)

  React.useEffect(() => {
    if (isPressed) {
      intervalRef.current = setInterval(() => {
        onClick?.()
      }, 300)
    } else {
      clearInterval(intervalRef.current as NodeJS.Timeout)
    }
    return () => clearInterval(intervalRef.current as NodeJS.Timeout)
  }, [isPressed, onClick])

  React.useEffect(() => {
    if (disabled) {
      clearInterval(intervalRef.current as NodeJS.Timeout)
      setIsPressed(false)
    }
  }, [disabled])

  return (
    <button
      type="button"
      className={cx(
        // base
        "group inline-flex size-5 items-center truncate rounded transition",
        disabled
          ? "cursor-not-allowed text-gray-400 dark:text-gray-600"
          : "cursor-pointer text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-50",
      )}
      disabled={disabled}
      onClick={(e) => {
        e.stopPropagation()
        onClick?.()
      }}
      onMouseDown={(e) => {
        e.stopPropagation()
        setIsPressed(true)
      }}
      onMouseUp={(e) => {
        e.stopPropagation()
        setIsPressed(false)
      }}
    >
      <Icon className="size-full" aria-hidden="true" />
    </button>
  )
}

interface LegendProps extends React.OlHTMLAttributes<HTMLOListElement> {
  categories: string[]
  colors?: AvailableChartColorsKeys[]
  onClickLegendItem?: (category: string, color: string) => void
  activeLegend?: string
  enableLegendSlider?: boolean
}

type HasScrollProps = {
  left: boolean
  right: boolean
}

const Legend = React.forwardRef<HTMLOListElement, LegendProps>((props, ref) => {
  const {
    categories,
    colors = AvailableChartColors,
    className,
    onClickLegendItem,
    activeLegend,
    enableLegendSlider = false,
    ...other
  } = props
  const scrollableRef = React.useRef<HTMLInputElement>(null)
  const scrollButtonsRef = React.useRef<HTMLDivElement>(null)
  const [hasScroll, setHasScroll] = React.useState<HasScrollProps | null>(null)
  const [isKeyDowned, setIsKeyDowned] = React.useState<string | null>(null)
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null)

  const checkScroll = React.useCallback(() => {
    const scrollable = scrollableRef?.current
    if (!scrollable) return

    const hasLeftScroll = scrollable.scrollLeft > 0
    const hasRightScroll =
      scrollable.scrollWidth - scrollable.clientWidth > scrollable.scrollLeft

    setHasScroll({ left: hasLeftScroll, right: hasRightScroll })
  }, [setHasScroll])

  const scrollToTest = React.useCallback(
    (direction: "left" | "right") => {
      const element = scrollableRef?.current
      const scrollButtons = scrollButtonsRef?.current
      const scrollButtonsWith = scrollButtons?.clientWidth ?? 0
      const width = element?.clientWidth ?? 0

      if (element && enableLegendSlider) {
        element.scrollTo({
          left:
            direction === "left"
              ? element.scrollLeft - width + scrollButtonsWith
              : element.scrollLeft + width - scrollButtonsWith,
          behavior: "smooth",
        })
        setTimeout(() => {
          checkScroll()
        }, 400)
      }
    },
    [enableLegendSlider, checkScroll],
  )

  React.useEffect(() => {
    const keyDownHandler = (key: string) => {
      if (key === "ArrowLeft") {
        scrollToTest("left")
      } else if (key === "ArrowRight") {
        scrollToTest("right")
      }
    }
    if (isKeyDowned) {
      keyDownHandler(isKeyDowned)
      intervalRef.current = setInterval(() => {
        keyDownHandler(isKeyDowned)
      }, 300)
    } else {
      clearInterval(intervalRef.current as NodeJS.Timeout)
    }
    return () => clearInterval(intervalRef.current as NodeJS.Timeout)
  }, [isKeyDowned, scrollToTest])

  const keyDown = (e: KeyboardEvent) => {
    e.stopPropagation()
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      e.preventDefault()
      setIsKeyDowned(e.key)
    }
  }
  const keyUp = (e: KeyboardEvent) => {
    e.stopPropagation()
    setIsKeyDowned(null)
  }

  React.useEffect(() => {
    const scrollable = scrollableRef?.current
    if (enableLegendSlider) {
      checkScroll()
      scrollable?.addEventListener("keydown", keyDown)
      scrollable?.addEventListener("keyup", keyUp)
    }

    return () => {
      scrollable?.removeEventListener("keydown", keyDown)
      scrollable?.removeEventListener("keyup", keyUp)
    }
  }, [checkScroll, enableLegendSlider])

  return (
    <ol
      ref={ref}
      className={cx("relative overflow-hidden", className)}
      {...other}
    >
      <div
        ref={scrollableRef}
        tabIndex={0}
        className={cx(
          "flex h-full",
          enableLegendSlider
            ? hasScroll?.right || hasScroll?.left
              ? "snap-mandatory items-center overflow-auto pr-12 pl-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              : ""
            : "flex-wrap",
        )}
      >
        {categories.map((category, index) => (
          <LegendItem
            key={`item-${index}`}
            name={category}
            color={colors[index] as AvailableChartColorsKeys}
            onClick={onClickLegendItem}
            activeLegend={activeLegend}
          />
        ))}
      </div>
      {enableLegendSlider && (hasScroll?.right || hasScroll?.left) ? (
        <>
          <div
            className={cx(
              // base
              "absolute top-0 right-0 bottom-0 flex h-full items-center justify-center pr-1",
              // background color
              "bg-white dark:bg-gray-950",
            )}
          >
            <ScrollButton
              icon={RiArrowLeftSLine}
              onClick={() => {
                setIsKeyDowned(null)
                scrollToTest("left")
              }}
              disabled={!hasScroll?.left}
            />
            <ScrollButton
              icon={RiArrowRightSLine}
              onClick={() => {
                setIsKeyDowned(null)
                scrollToTest("right")
              }}
              disabled={!hasScroll?.right}
            />
          </div>
        </>
      ) : null}
    </ol>
  )
})

Legend.displayName = "Legend"

const ChartLegend = (
  { payload }: any,
  categoryColors: Map<string, AvailableChartColorsKeys>,
  setLegendHeight: React.Dispatch<React.SetStateAction<number>>,
  activeLegend: string | undefined,
  onClick?: (category: string, color: string) => void,
  enableLegendSlider?: boolean,
  legendPosition?: "left" | "center" | "right",
  yAxisWidth?: number,
) => {
  const legendRef = React.useRef<HTMLDivElement>(null)

  useOnWindowResize(() => {
    const calculateHeight = (height: number | undefined) =>
      height ? Number(height) + 15 : 60
    setLegendHeight(calculateHeight(legendRef.current?.clientHeight))
  })

  const legendPayload = payload.filter((item: any) => item.type !== "none")

  const paddingLeft =
    legendPosition === "left" && yAxisWidth ? yAxisWidth - 8 : 0

  return (
    <div
      ref={legendRef}
      style={{ paddingLeft: paddingLeft }}
      className={cx(
        "flex items-center",
        { "justify-center": legendPosition === "center" },
        { "justify-start": legendPosition === "left" },
        { "justify-end": legendPosition === "right" },
      )}
    >
      <Legend
        categories={legendPayload.map((entry: any) => entry.value)}
        colors={legendPayload.map((entry: any) =>
          categoryColors.get(entry.value),
        )}
        onClickLegendItem={onClick}
        activeLegend={activeLegend}
        enableLegendSlider={enableLegendSlider}
      />
    </div>
  )
}

//#region Tooltip

type TooltipProps = Pick<ChartTooltipProps, "active" | "payload" | "label">

type PayloadItem = {
  category: string
  value: number
  index: string
  color: AvailableChartColorsKeys
  type?: string
  payload: any
}

interface ChartTooltipProps {
  active: boolean | undefined
  payload: PayloadItem[]
  label: string
  valueFormatter: (value: number) => string
}

const ChartTooltip = ({
  active,
  payload,
  label,
  valueFormatter,
}: ChartTooltipProps) => {
  if (active && payload && payload.length) {
    const legendPayload = payload.filter((item: any) => item.type !== "none")
    return (
      <div
        className={cx(
          // base
          "rounded-md border text-sm shadow-md",
          // border color
          "border-gray-200 dark:border-gray-800",
          // background color
          "bg-white dark:bg-gray-950",
        )}
      >
        <div className={cx("border-b border-inherit px-4 py-2")}>
          <p
            className={cx(
              // base
              "font-medium",
              // text color
              "text-gray-900 dark:text-gray-50",
            )}
          >
            {label}
          </p>
        </div>
        <div className={cx("space-y-1 px-4 py-2")}>
          {legendPayload.map(({ value, category, color }, index) => (
            <div
              key={`id-${index}`}
              className="flex items-center justify-between space-x-8"
            >
              <div className="flex items-center space-x-2">
                <span
                  aria-hidden="true"
                  className={cx(
                    "h-[3px] w-3.5 shrink-0 rounded-full",
                    getColorClassName(color, "bg"),
                  )}
                />
                <p
                  className={cx(
                    // base
                    "text-right whitespace-nowrap",
                    // text color
                    "text-gray-700 dark:text-gray-300",
                  )}
                >
                  {category}
                </p>
              </div>
              <p
                className={cx(
                  // base
                  "text-right font-medium whitespace-nowrap tabular-nums",
                  // text color
                  "text-gray-900 dark:text-gray-50",
                )}
              >
                {valueFormatter(value)}
              </p>
            </div>
          ))}
        </div>
      </div>
    )
  }
  return null
}

//#region LineChart

interface ActiveDot {
  index?: number
  dataKey?: string
}

type BaseEventProps = {
  eventType: "dot" | "category"
  categoryClicked: string
  [key: string]: number | string
}

type LineChartEventProps = BaseEventProps | null | undefined

interface LineChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: Record<string, any>[]
  index: string
  categories: string[]
  colors?: AvailableChartColorsKeys[]
  valueFormatter?: (value: number) => string
  startEndOnly?: boolean
  showXAxis?: boolean
  showYAxis?: boolean
  showGridLines?: boolean
  yAxisWidth?: number
  intervalType?: "preserveStartEnd" | "equidistantPreserveStart"
  showTooltip?: boolean
  showLegend?: boolean
  autoMinValue?: boolean
  minValue?: number
  maxValue?: number
  allowDecimals?: boolean
  onValueChange?: (value: LineChartEventProps) => void
  enableLegendSlider?: boolean
  tickGap?: number
  connectNulls?: boolean
  xAxisLabel?: string
  yAxisLabel?: string
  legendPosition?: "left" | "center" | "right"
  tooltipCallback?: (tooltipCallbackContent: TooltipProps) => void
  customTooltip?: React.ComponentType<TooltipProps>
  highlightLastIndexCategory?: string
}

const LineChart = React.forwardRef<HTMLDivElement, LineChartProps>(
  (props, ref) => {
    const {
      data = [],
      categories = [],
      index,
      colors = AvailableChartColors,
      valueFormatter = (value: number) => value.toString(),
      startEndOnly = false,
      showXAxis = true,
      showYAxis = true,
      showGridLines = true,
      yAxisWidth = 56,
      intervalType = "equidistantPreserveStart",
      showTooltip = true,
      showLegend = true,
      autoMinValue = false,
      minValue,
      maxValue,
      allowDecimals = true,
      connectNulls = false,
      className,
      onValueChange,
      enableLegendSlider = false,
      tickGap = 5,
      xAxisLabel,
      yAxisLabel,
      legendPosition = "right",
      tooltipCallback,
      customTooltip,
      highlightLastIndexCategory,
      ...other
    } = props
    const CustomTooltip = customTooltip
    const paddingValue =
      (!showXAxis && !showYAxis) || (startEndOnly && !showYAxis) ? 0 : 20
    const [legendHeight, setLegendHeight] = React.useState(60)
    const [activeDot, setActiveDot] = React.useState<ActiveDot | undefined>(
      undefined,
    )
    const [activeLegend, setActiveLegend] = React.useState<string | undefined>(
      undefined,
    )
    const categoryColors = constructCategoryColors(categories, colors)

    const yAxisDomain = getYAxisDomain(autoMinValue, minValue, maxValue)
    const hasOnValueChange = !!onValueChange
    const prevActiveRef = React.useRef<boolean | undefined>(undefined)
    const prevLabelRef = React.useRef<string | undefined>(undefined)

    function onDotClick(itemData: any, event: React.MouseEvent) {
      event.stopPropagation()

      if (!hasOnValueChange) return
      if (
        (itemData.index === activeDot?.index &&
          itemData.dataKey === activeDot?.dataKey) ||
        (hasOnlyOneValueForKey(data, itemData.dataKey) &&
          activeLegend &&
          activeLegend === itemData.dataKey)
      ) {
        setActiveLegend(undefined)
        setActiveDot(undefined)
        onValueChange?.(null)
      } else {
        setActiveLegend(itemData.dataKey)
        setActiveDot({
          index: itemData.index,
          dataKey: itemData.dataKey,
        })
        onValueChange?.({
          eventType: "dot",
          categoryClicked: itemData.dataKey,
          ...itemData.payload,
        })
      }
    }

    function onCategoryClick(dataKey: string) {
      if (!hasOnValueChange) return
      if (
        (dataKey === activeLegend && !activeDot) ||
        (hasOnlyOneValueForKey(data, dataKey) &&
          activeDot &&
          activeDot.dataKey === dataKey)
      ) {
        setActiveLegend(undefined)
        onValueChange?.(null)
      } else {
        setActiveLegend(dataKey)
        onValueChange?.({
          eventType: "category",
          categoryClicked: dataKey,
        })
      }
      setActiveDot(undefined)
    }

    function getLastValidIndexForCategory(
      data: Record<string, any>[],
      category: string,
    ): number {
      for (let i = data.length - 1; i >= 0; i--) {
        if (data[i][category] !== null && data[i][category] !== undefined) {
          return i
        }
      }
      return -1
    }

    return (
      <div ref={ref} className={cx("h-80 w-full", className)} {...other}>
        <ResponsiveContainer>
          <RechartsLineChart
            data={data}
            onClick={
              hasOnValueChange && (activeLegend || activeDot)
                ? () => {
                    setActiveDot(undefined)
                    setActiveLegend(undefined)
                    onValueChange?.(null)
                  }
                : undefined
            }
            margin={{
              bottom: xAxisLabel ? 30 : undefined,
              left: yAxisLabel ? 20 : undefined,
              right: yAxisLabel ? 5 : undefined,
              top: 5,
            }}
          >
            {showGridLines ? (
              <CartesianGrid
                className={cx("stroke-gray-200 stroke-1 dark:stroke-gray-800")}
                horizontal={true}
                vertical={false}
              />
            ) : null}
            <XAxis
              padding={{ left: paddingValue, right: paddingValue }}
              hide={!showXAxis}
              dataKey={index}
              interval={startEndOnly ? "preserveStartEnd" : intervalType}
              tick={{ transform: "translate(0, 6)" }}
              ticks={
                startEndOnly
                  ? [data[0][index], data[data.length - 1][index]]
                  : undefined
              }
              fill=""
              stroke=""
              className={cx(
                // base
                "text-xs",
                // text fill
                "fill-gray-500 dark:fill-gray-500",
              )}
              tickLine={false}
              axisLine={false}
              minTickGap={tickGap}
            >
              {xAxisLabel && (
                <Label
                  position="insideBottom"
                  offset={-20}
                  className="fill-gray-800 text-sm font-medium dark:fill-gray-200"
                >
                  {xAxisLabel}
                </Label>
              )}
            </XAxis>
            <YAxis
              width={yAxisWidth}
              hide={!showYAxis}
              axisLine={false}
              tickLine={false}
              type="number"
              domain={yAxisDomain as AxisDomain}
              tick={{ transform: "translate(-3, 0)" }}
              fill=""
              stroke=""
              className={cx(
                // base
                "text-xs",
                // text fill
                "fill-gray-500 dark:fill-gray-500",
              )}
              tickFormatter={valueFormatter}
              allowDecimals={allowDecimals}
            >
              {yAxisLabel && (
                <Label
                  position="insideLeft"
                  style={{ textAnchor: "middle" }}
                  angle={-90}
                  offset={-15}
                  className="fill-gray-800 text-sm font-medium dark:fill-gray-200"
                >
                  {yAxisLabel}
                </Label>
              )}
            </YAxis>
            <Tooltip
              wrapperStyle={{ outline: "none" }}
              isAnimationActive={true}
              animationDuration={100}
              cursor={{ stroke: "#d1d5db", strokeWidth: 1 }}
              offset={20}
              position={{ y: 0 }}
              content={({ active, payload, label }) => {
                const cleanPayload: TooltipProps["payload"] = payload
                  ? payload.map((item: any) => ({
                      category: item.dataKey,
                      value: item.value,
                      index: item.payload[index],
                      color: categoryColors.get(
                        item.dataKey,
                      ) as AvailableChartColorsKeys,
                      type: item.type,
                      payload: item.payload,
                    }))
                  : []

                if (
                  tooltipCallback &&
                  (active !== prevActiveRef.current ||
                    label !== prevLabelRef.current)
                ) {
                  tooltipCallback({ active, payload: cleanPayload, label })
                  prevActiveRef.current = active
                  prevLabelRef.current = label
                }

                return showTooltip && active ? (
                  CustomTooltip ? (
                    <CustomTooltip
                      active={active}
                      payload={cleanPayload}
                      label={label}
                    />
                  ) : (
                    <ChartTooltip
                      active={active}
                      payload={cleanPayload}
                      label={label}
                      valueFormatter={valueFormatter}
                    />
                  )
                ) : null
              }}
            />

            {showLegend ? (
              <RechartsLegend
                verticalAlign="top"
                height={legendHeight}
                content={({ payload }) =>
                  ChartLegend(
                    { payload },
                    categoryColors,
                    setLegendHeight,
                    activeLegend,
                    hasOnValueChange
                      ? (clickedLegendItem: string) =>
                          onCategoryClick(clickedLegendItem)
                      : undefined,
                    enableLegendSlider,
                    legendPosition,
                    yAxisWidth,
                  )
                }
              />
            ) : null}
            {categories.map((category) => {
              const lastValidIndex = getLastValidIndexForCategory(
                data,
                category,
              )
              return (
                <Line
                  className={cx(
                    getColorClassName(
                      categoryColors.get(category) as AvailableChartColorsKeys,
                      "stroke",
                    ),
                  )}
                  strokeOpacity={
                    activeDot || (activeLegend && activeLegend !== category)
                      ? 0.3
                      : 1
                  }
                  activeDot={(props: any) => {
                    const {
                      cx: cxCoord,
                      cy: cyCoord,
                      stroke,
                      strokeLinecap,
                      strokeLinejoin,
                      strokeWidth,
                      dataKey,
                    } = props
                    return (
                      <Dot
                        className={cx(
                          "stroke-white dark:stroke-gray-950",
                          onValueChange ? "cursor-pointer" : "",
                          getColorClassName(
                            categoryColors.get(
                              dataKey,
                            ) as AvailableChartColorsKeys,
                            "fill",
                          ),
                        )}
                        cx={cxCoord}
                        cy={cyCoord}
                        r={5}
                        fill=""
                        stroke={stroke}
                        strokeLinecap={strokeLinecap}
                        strokeLinejoin={strokeLinejoin}
                        strokeWidth={strokeWidth}
                        onClick={(_, event) => onDotClick(props, event)}
                      />
                    )
                  }}
                  dot={(props: any) => {
                    const {
                      stroke,
                      strokeLinecap,
                      strokeLinejoin,
                      strokeWidth,
                      cx: cxCoord,
                      cy: cyCoord,
                      dataKey,
                      index,
                    } = props

                    if (
                      highlightLastIndexCategory === dataKey &&
                      index === lastValidIndex
                    ) {
                      return (
                        <Dot
                          key={index}
                          cx={cxCoord}
                          cy={cyCoord}
                          r={5}
                          stroke={stroke}
                          fill=""
                          strokeLinecap={strokeLinecap}
                          strokeLinejoin={strokeLinejoin}
                          strokeWidth={strokeWidth}
                          className={cx(
                            "stroke-white dark:stroke-gray-950",
                            onValueChange ? "cursor-pointer" : "",
                            getColorClassName(
                              categoryColors.get(
                                dataKey,
                              ) as AvailableChartColorsKeys,
                              "fill",
                            ),
                          )}
                        />
                      )
                    }
                    return <React.Fragment key={index}></React.Fragment>
                  }}
                  key={category}
                  name={category}
                  type="linear"
                  dataKey={category}
                  stroke=""
                  strokeWidth={2}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  isAnimationActive={false}
                  connectNulls={connectNulls}
                />
              )
            })}

            {/* hidden lines to increase clickable target area */}
            {onValueChange
              ? categories.map((category) => (
                  <Line
                    className={cx("cursor-pointer")}
                    strokeOpacity={0}
                    key={category}
                    name={category}
                    type="linear"
                    dataKey={category}
                    stroke="transparent"
                    fill="transparent"
                    legendType="none"
                    tooltipType="none"
                    strokeWidth={12}
                    connectNulls={connectNulls}
                    onClick={(props: any, event) => {
                      event.stopPropagation()
                      const { name } = props
                      onCategoryClick(name)
                    }}
                  />
                ))
              : null}
          </RechartsLineChart>
        </ResponsiveContainer>
      </div>
    )
  },
)

LineChart.displayName = "LineChart"

//array-end

type DataPoint = {
  date: string
  currentMonth: number | null
  lastMonth: number | null
}

const data: DataPoint[] = [
  { date: "Jun 01", currentMonth: 4837, lastMonth: 1492 },
  { date: "Jun 02", currentMonth: 503, lastMonth: 1738 },
  { date: "Jun 03", currentMonth: 2341, lastMonth: 56 },
  { date: "Jun 04", currentMonth: 1089, lastMonth: 87 },
  { date: "Jun 05", currentMonth: 578, lastMonth: 15 },
  { date: "Jun 06", currentMonth: 312, lastMonth: 2301 },
  { date: "Jun 07", currentMonth: 9695, lastMonth: 5124 },
  { date: "Jun 08", currentMonth: 12451, lastMonth: 9398 },
  { date: "Jun 09", currentMonth: 2784, lastMonth: 4267 },
  { date: "Jun 10", currentMonth: 569, lastMonth: 1509 },
  { date: "Jun 11", currentMonth: 906, lastMonth: 1356 },
  { date: "Jun 12", currentMonth: 4738, lastMonth: 671 },
  { date: "Jun 13", currentMonth: 4012, lastMonth: 483 },
  { date: "Jun 14", currentMonth: 2845, lastMonth: 729 },
  { date: "Jun 15", currentMonth: 3167, lastMonth: 2594 },
  { date: "Jun 16", currentMonth: 934, lastMonth: 11812 },
  { date: "Jun 17", currentMonth: 256, lastMonth: 1778 },
  { date: "Jun 18", currentMonth: 89, lastMonth: 14945 },
  { date: "Jun 19", currentMonth: 312, lastMonth: 10803 },
  { date: "Jun 20", currentMonth: 6278, lastMonth: 3067 },
  { date: "Jun 21", currentMonth: 2729, lastMonth: 941 },
  { date: "Jun 22", currentMonth: null, lastMonth: 184 },
  { date: "Jun 23", currentMonth: null, lastMonth: 152 },
  { date: "Jun 24", currentMonth: null, lastMonth: 5326 },
  { date: "Jun 25", currentMonth: null, lastMonth: 2189 },
  { date: "Jun 26", currentMonth: null, lastMonth: 11457 },
  { date: "Jun 27", currentMonth: null, lastMonth: 3295 },
  { date: "Jun 28", currentMonth: null, lastMonth: 1581 },
  { date: "Jun 29", currentMonth: null, lastMonth: 2423 },
  { date: "Jun 30", currentMonth: null, lastMonth: 678 },
]

const calculateCumulativeData = (data: DataPoint[]): DataPoint[] => {
  let cumulativeCurrentMonth = 0
  let cumulativeLastMonth = 0
  let lastValidCurrentMonth: number | null = null

  return data.map((point) => {
    if (point.currentMonth !== null) {
      cumulativeCurrentMonth += point.currentMonth
      lastValidCurrentMonth = cumulativeCurrentMonth
    }
    cumulativeLastMonth += point.lastMonth || 0

    return {
      date: point.date,
      currentMonth: point.currentMonth !== null ? lastValidCurrentMonth : null,
      lastMonth: cumulativeLastMonth,
    }
  })
}

const currencyFormatter = (number: number) => {
  return "$" + Intl.NumberFormat("us").format(number).toString()
}

export default function Example() {
  const cumulativeData = React.useMemo(
    () => calculateCumulativeData(data),
    [data],
  )

  return (
    <div className="obfuscate">
      <p className="mb-4 text-center text-sm text-gray-500 dark:text-gray-500">
        Customized chart using a month to date calculation
      </p>
      <Card className="mx-auto max-w-2xl">
        <LineChart
          data={cumulativeData}
          valueFormatter={(v) => currencyFormatter(v)}
          index="date"
          colors={["lightGray", "blue"]}
          categories={["lastMonth", "currentMonth"]}
          connectNulls={false}
          yAxisWidth={70}
          highlightLastIndexCategory="currentMonth"
          className="hidden sm:block"
        />
        <LineChart
          data={cumulativeData}
          valueFormatter={(v) => currencyFormatter(v)}
          index="date"
          colors={["lightGray", "blue"]}
          categories={["lastMonth", "currentMonth"]}
          connectNulls={false}
          showYAxis={false}
          highlightLastIndexCategory="currentMonth"
          className="block sm:hidden"
        />
      </Card>
    </div>
  )
}
```


```example/line-charts-line-chart-10.tsx
"use client"

import { RiDownload2Line } from "@remixicon/react"

import { Button } from "@/atom/Button"
import { Card } from "@/atom/Card"
import { Divider } from "@/atom/Divider"
import { LineChart } from "@/atom/LineChart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/atom/Select"

const data = [
  //array-start
  {
    date: "Jan 22",
    MRR: 2100,
    "Active subscribers": 434,
    "Net volume": 7943,
    "Churned revenue": 0,
  },
  {
    date: "Feb 22",
    MRR: 2943,
    "Active subscribers": 454,
    "Net volume": 8954,
    "Churned revenue": 0,
  },
  {
    date: "Mar 22",
    MRR: 4889,
    "Active subscribers": 610,
    "Net volume": 9123,
    "Churned revenue": 0,
  },
  {
    date: "Apr 22",
    MRR: 3909,
    "Active subscribers": 490,
    "Net volume": 7478,
    "Churned revenue": 0,
  },
  {
    date: "May 22",
    MRR: 5778,
    "Active subscribers": 710,
    "Net volume": 9504,
    "Churned revenue": 0,
  },
  {
    date: "Jun 22",
    MRR: 5900,
    "Active subscribers": 753,
    "Net volume": 9943,
    "Churned revenue": 0,
  },
  {
    date: "Jul 22",
    MRR: 4129,
    "Active subscribers": 741,
    "Net volume": 10112,
    "Churned revenue": 0,
  },
  {
    date: "Aug 22",
    MRR: 6021,
    "Active subscribers": 783,
    "Net volume": 10290,
    "Churned revenue": 0,
  },
  {
    date: "Sep 22",
    MRR: 6279,
    "Active subscribers": 815,
    "Net volume": 10349,
    "Churned revenue": 0,
  },
  {
    date: "Oct 22",
    MRR: 6224,
    "Active subscribers": 826,
    "Net volume": 10415,
    "Churned revenue": 0,
  },
  {
    date: "Nov 22",
    MRR: 6380,
    "Active subscribers": 896,
    "Net volume": 10636,
    "Churned revenue": 0,
  },
  {
    date: "Dec 22",
    MRR: 6414,
    "Active subscribers": 798,
    "Net volume": 10900,
    "Churned revenue": 0,
  },
  {
    date: "Jan 23",
    MRR: 6540,
    "Active subscribers": 783,
    "Net volume": 11040,
    "Churned revenue": 120,
  },
  {
    date: "Feb 23",
    MRR: 6634,
    "Active subscribers": 734,
    "Net volume": 11390,
    "Churned revenue": 240,
  },
  {
    date: "Mar 23",
    MRR: 7124,
    "Active subscribers": 690,
    "Net volume": 11423,
    "Churned revenue": 120,
  },
  {
    date: "Apr 23",
    MRR: 7934,
    "Active subscribers": 627,
    "Net volume": 12134,
    "Churned revenue": 0,
  },
  {
    date: "May 23",
    MRR: 7287,
    "Active subscribers": 590,
    "Net volume": 12034,
    "Churned revenue": 0,
  },
  {
    date: "Jun 23",
    MRR: 7323,
    "Active subscribers": 573,
    "Net volume": 11011,
    "Churned revenue": 0,
  },
  {
    date: "Jul 23",
    MRR: 7511,
    "Active subscribers": 552,
    "Net volume": 11834,
    "Churned revenue": 2312,
  },
  {
    date: "Aug 23",
    MRR: 7043.9,
    "Active subscribers": 542,
    "Net volume": 12387,
    "Churned revenue": 2421,
  },
  {
    date: "Sep 23",
    MRR: 6700.7,
    "Active subscribers": 533,
    "Net volume": 11032,
    "Churned revenue": 2910,
  },
  {
    date: "Oct 23",
    MRR: 6900.8,
    "Active subscribers": 494,
    "Net volume": 10134,
    "Churned revenue": 1290,
  },
  {
    date: "Nov 23",
    MRR: 7934.5,
    "Active subscribers": 481,
    "Net volume": 9921,
    "Churned revenue": 990,
  },
  {
    date: "Dec 23",
    MRR: 9021.0,
    "Active subscribers": 272,
    "Net volume": 10549,
    "Churned revenue": 780,
  },
  //array-end
]

const numberFormatter = (number: number) =>
  `$${Intl.NumberFormat("us").format(number).toString()}`

const currencyFormatter = (number: number) =>
  "$" + Intl.NumberFormat("us").format(number).toString()

const summary = [
  //array-start
  {
    name: "MRR",
    value: "$9.1K",
    valueFormatter: currencyFormatter,
  },
  {
    name: "Active subscribers",
    value: "272",
    valueFormatter: numberFormatter,
  },
  {
    name: "Net volume",
    value: "$10.5K",
    valueFormatter: currencyFormatter,
  },
  {
    name: "Churned revenue",
    value: "$0.8K",
    valueFormatter: currencyFormatter,
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <h3 className="font-medium text-gray-900 dark:text-gray-50">Growth</h3>
      <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor.
      </p>
      <Divider className="!my-6" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center space-x-2">
          <Select>
            <SelectTrigger className="sm:w-36">
              <SelectValue placeholder="Select region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">All</SelectItem>
              <SelectItem value="2">US</SelectItem>
              <SelectItem value="3">Europe</SelectItem>
              <SelectItem value="4">Asia</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="sm:w-44">
              <SelectValue placeholder="Select license" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">All</SelectItem>
              <SelectItem value="2">Single license</SelectItem>
              <SelectItem value="3">Team license</SelectItem>
              <SelectItem value="4">Enterprise license</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className="mt-2 w-full py-2 sm:mt-0 sm:w-fit">
          <a href="#" className="inline-flex items-center gap-2">
            <RiDownload2Line
              className="-ml-0.5 size-5 shrink-0"
              aria-hidden={true}
            />
            Download report
          </a>
        </Button>
      </div>
      <dl className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {summary.map((item) => (
          <Card key={item.name} className="pb-2">
            <dt className="text-sm text-gray-500 dark:text-gray-500">
              {item.name}
            </dt>
            <dd className="text-lg font-medium text-gray-900 dark:text-gray-50">
              {item.value}
            </dd>
            <LineChart
              data={data}
              index="date"
              categories={[item.name]}
              valueFormatter={item.valueFormatter}
              showYAxis={false}
              showLegend={false}
              startEndOnly={true}
              className="mt-4 !h-36"
            />
          </Card>
        ))}
      </dl>
    </div>
  )
}
```


```example/line-charts-line-chart-09.tsx
"use client"

import React from "react"

import { Button } from "@/atom/Button"
import { DateRange, DateRangePicker } from "@/atom/DatePicker"
import { LineChart } from "@/atom/LineChart"

DateRangePicker

const data = [
  //array-start
  {
    date: "2023-08-01",
    "ETF Shares Vital": 2100.2,
    "Vitainvest Core": 4434.1,
    "iShares Tech Growth": 7943.2,
  },
  {
    date: "2023-08-02",
    "ETF Shares Vital": 2943.0,
    "Vitainvest Core": 4954.1,
    "iShares Tech Growth": 8954.1,
  },
  {
    date: "2023-08-03",
    "ETF Shares Vital": 4889.5,
    "Vitainvest Core": 6100.2,
    "iShares Tech Growth": 9123.7,
  },
  {
    date: "2023-08-04",
    "ETF Shares Vital": 3909.8,
    "Vitainvest Core": 4909.7,
    "iShares Tech Growth": 7478.4,
  },
  {
    date: "2023-08-05",
    "ETF Shares Vital": 5778.7,
    "Vitainvest Core": 7103.1,
    "iShares Tech Growth": 9504.3,
  },
  {
    date: "2023-08-06",
    "ETF Shares Vital": 5900.9,
    "Vitainvest Core": 7534.3,
    "iShares Tech Growth": 9943.4,
  },
  {
    date: "2023-08-07",
    "ETF Shares Vital": 4129.4,
    "Vitainvest Core": 7412.1,
    "iShares Tech Growth": 10112.2,
  },
  {
    date: "2023-08-08",
    "ETF Shares Vital": 6021.2,
    "Vitainvest Core": 7834.4,
    "iShares Tech Growth": 10290.2,
  },
  {
    date: "2023-08-09",
    "ETF Shares Vital": 6279.8,
    "Vitainvest Core": 8159.1,
    "iShares Tech Growth": 10349.6,
  },
  {
    date: "2023-08-10",
    "ETF Shares Vital": 6224.5,
    "Vitainvest Core": 8260.6,
    "iShares Tech Growth": 10415.4,
  },
  {
    date: "2023-08-11",
    "ETF Shares Vital": 6380.6,
    "Vitainvest Core": 8965.3,
    "iShares Tech Growth": 10636.3,
  },
  {
    date: "2023-08-12",
    "ETF Shares Vital": 6414.4,
    "Vitainvest Core": 7989.3,
    "iShares Tech Growth": 10900.5,
  },
  {
    date: "2023-08-13",
    "ETF Shares Vital": 6540.1,
    "Vitainvest Core": 7839.6,
    "iShares Tech Growth": 11040.4,
  },
  {
    date: "2023-08-14",
    "ETF Shares Vital": 6634.4,
    "Vitainvest Core": 7343.8,
    "iShares Tech Growth": 11390.5,
  },
  {
    date: "2023-08-15",
    "ETF Shares Vital": 7124.6,
    "Vitainvest Core": 6903.7,
    "iShares Tech Growth": 11423.1,
  },
  {
    date: "2023-08-16",
    "ETF Shares Vital": 7934.5,
    "Vitainvest Core": 6273.6,
    "iShares Tech Growth": 12134.4,
  },
  {
    date: "2023-08-17",
    "ETF Shares Vital": 10287.8,
    "Vitainvest Core": 5900.3,
    "iShares Tech Growth": 12034.4,
  },
  {
    date: "2023-08-18",
    "ETF Shares Vital": 10323.2,
    "Vitainvest Core": 5732.1,
    "iShares Tech Growth": 11011.7,
  },
  {
    date: "2023-08-19",
    "ETF Shares Vital": 10511.4,
    "Vitainvest Core": 5523.1,
    "iShares Tech Growth": 11834.8,
  },
  {
    date: "2023-08-20",
    "ETF Shares Vital": 11043.9,
    "Vitainvest Core": 5422.3,
    "iShares Tech Growth": 12387.1,
  },
  {
    date: "2023-08-21",
    "ETF Shares Vital": 6700.7,
    "Vitainvest Core": 5334.2,
    "iShares Tech Growth": 11032.2,
  },
  {
    date: "2023-08-22",
    "ETF Shares Vital": 6900.8,
    "Vitainvest Core": 4943.4,
    "iShares Tech Growth": 10134.2,
  },
  {
    date: "2023-08-23",
    "ETF Shares Vital": 7934.5,
    "Vitainvest Core": 4812.1,
    "iShares Tech Growth": 9921.2,
  },
  {
    date: "2023-08-24",
    "ETF Shares Vital": 9021.0,
    "Vitainvest Core": 2729.1,
    "iShares Tech Growth": 10549.8,
  },
  {
    date: "2023-08-25",
    "ETF Shares Vital": 9198.2,
    "Vitainvest Core": 2178.0,
    "iShares Tech Growth": 10968.4,
  },
  {
    date: "2023-08-26",
    "ETF Shares Vital": 9557.1,
    "Vitainvest Core": 2158.3,
    "iShares Tech Growth": 11059.1,
  },
  {
    date: "2023-08-27",
    "ETF Shares Vital": 9959.8,
    "Vitainvest Core": 2100.8,
    "iShares Tech Growth": 11903.6,
  },
  {
    date: "2023-08-28",
    "ETF Shares Vital": 10034.6,
    "Vitainvest Core": 2934.4,
    "iShares Tech Growth": 12143.3,
  },
  {
    date: "2023-08-29",
    "ETF Shares Vital": 10243.8,
    "Vitainvest Core": 3223.4,
    "iShares Tech Growth": 12930.1,
  },
  {
    date: "2023-08-30",
    "ETF Shares Vital": 10078.5,
    "Vitainvest Core": 3779.1,
    "iShares Tech Growth": 13420.5,
  },
  {
    date: "2023-08-31",
    "ETF Shares Vital": 11134.6,
    "Vitainvest Core": 4190.3,
    "iShares Tech Growth": 14443.2,
  },
  {
    date: "2023-09-01",
    "ETF Shares Vital": 12347.2,
    "Vitainvest Core": 4839.1,
    "iShares Tech Growth": 14532.1,
  },
  {
    date: "2023-09-02",
    "ETF Shares Vital": 12593.8,
    "Vitainvest Core": 5153.3,
    "iShares Tech Growth": 14283.5,
  },
  {
    date: "2023-09-03",
    "ETF Shares Vital": 12043.4,
    "Vitainvest Core": 5234.8,
    "iShares Tech Growth": 14078.9,
  },
  {
    date: "2023-09-04",
    "ETF Shares Vital": 12144.9,
    "Vitainvest Core": 5478.4,
    "iShares Tech Growth": 13859.7,
  },
  {
    date: "2023-09-05",
    "ETF Shares Vital": 12489.5,
    "Vitainvest Core": 5741.1,
    "iShares Tech Growth": 13539.2,
  },
  {
    date: "2023-09-06",
    "ETF Shares Vital": 12748.7,
    "Vitainvest Core": 6743.9,
    "iShares Tech Growth": 13643.2,
  },
  {
    date: "2023-09-07",
    "ETF Shares Vital": 12933.2,
    "Vitainvest Core": 7832.8,
    "iShares Tech Growth": 14629.2,
  },
  {
    date: "2023-09-08",
    "ETF Shares Vital": 13028.8,
    "Vitainvest Core": 8943.2,
    "iShares Tech Growth": 13611.2,
  },
  {
    date: "2023-09-09",
    "ETF Shares Vital": 13412.4,
    "Vitainvest Core": 9932.2,
    "iShares Tech Growth": 12515.2,
  },
  {
    date: "2023-09-10",
    "ETF Shares Vital": 13649.0,
    "Vitainvest Core": 10139.2,
    "iShares Tech Growth": 11143.8,
  },
  {
    date: "2023-09-11",
    "ETF Shares Vital": 13748.5,
    "Vitainvest Core": 10441.2,
    "iShares Tech Growth": 8929.2,
  },
  {
    date: "2023-09-12",
    "ETF Shares Vital": 13148.1,
    "Vitainvest Core": 10933.8,
    "iShares Tech Growth": 8943.2,
  },
  {
    date: "2023-09-13",
    "ETF Shares Vital": 12839.6,
    "Vitainvest Core": 11073.4,
    "iShares Tech Growth": 7938.3,
  },
  {
    date: "2023-09-14",
    "ETF Shares Vital": 12428.2,
    "Vitainvest Core": 11128.3,
    "iShares Tech Growth": 7533.4,
  },
  {
    date: "2023-09-15",
    "ETF Shares Vital": 12012.8,
    "Vitainvest Core": 11412.3,
    "iShares Tech Growth": 7100.4,
  },
  {
    date: "2023-09-16",
    "ETF Shares Vital": 11801.3,
    "Vitainvest Core": 10501.1,
    "iShares Tech Growth": 6532.1,
  },
  {
    date: "2023-09-17",
    "ETF Shares Vital": 10102.9,
    "Vitainvest Core": 8923.3,
    "iShares Tech Growth": 4332.8,
  },
  {
    date: "2023-09-18",
    "ETF Shares Vital": 12132.5,
    "Vitainvest Core": 10212.1,
    "iShares Tech Growth": 7847.4,
  },
  {
    date: "2023-09-19",
    "ETF Shares Vital": 12901.1,
    "Vitainvest Core": 10101.7,
    "iShares Tech Growth": 7223.3,
  },
  {
    date: "2023-09-20",
    "ETF Shares Vital": 13132.6,
    "Vitainvest Core": 12132.3,
    "iShares Tech Growth": 6900.2,
  },
  {
    date: "2023-09-21",
    "ETF Shares Vital": 14132.2,
    "Vitainvest Core": 13212.5,
    "iShares Tech Growth": 5932.2,
  },
  {
    date: "2023-09-22",
    "ETF Shares Vital": 14245.8,
    "Vitainvest Core": 12163.4,
    "iShares Tech Growth": 5577.1,
  },
  {
    date: "2023-09-23",
    "ETF Shares Vital": 14328.3,
    "Vitainvest Core": 10036.1,
    "iShares Tech Growth": 5439.2,
  },
  {
    date: "2023-09-24",
    "ETF Shares Vital": 14949.9,
    "Vitainvest Core": 8985.1,
    "iShares Tech Growth": 4463.1,
  },
  {
    date: "2023-09-25",
    "ETF Shares Vital": 15967.5,
    "Vitainvest Core": 9700.1,
    "iShares Tech Growth": 4123.2,
  },
  {
    date: "2023-09-26",
    "ETF Shares Vital": 17349.3,
    "Vitainvest Core": 10943.4,
    "iShares Tech Growth": 3935.1,
  },
  //array-end
]

const valueFormatter = (number: number) =>
  `$${Intl.NumberFormat("us").format(number).toString()}`

const firstAvailableDate = new Date(2023, 7, 1)
const lastAvailableDate = new Date(2023, 8, 26)

export default function Example() {
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from: firstAvailableDate,
    to: lastAvailableDate,
  })

  const filterData = (
    startDate: Date | undefined,
    endDate: Date | undefined,
    dataset: any[],
  ) => {
    if (!startDate || !endDate) {
      return dataset
    }

    const isDateInRange = (currentDate: Date) =>
      currentDate >= startDate && currentDate <= endDate

    return dataset.filter((item) => isDateInRange(new Date(item.date)))
  }

  return (
    <div className="obfuscate">
      <h3 className="font-medium text-gray-900 dark:text-gray-50">
        ETF performance comparison
      </h3>
      <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt.
      </p>
      <div className="mt-4 rounded-lg bg-gray-50 p-4 ring-1 ring-gray-200 ring-inset sm:p-6 dark:bg-gray-900 dark:ring-gray-800">
        <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
          Filterbar
        </p>
        <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-center">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <Button className="w-full py-2 sm:w-fit">Compare asset</Button>
            <DateRangePicker
              value={dateRange}
              onChange={setDateRange}
              fromDate={firstAvailableDate}
              toDate={lastAvailableDate}
            />
          </div>
          <Button
            variant="ghost"
            className="border border-gray-300 py-2 text-gray-600 hover:bg-transparent hover:text-gray-900 md:border-transparent dark:border-gray-800 dark:text-gray-400 hover:dark:bg-transparent hover:dark:text-gray-50 md:dark:border-transparent"
            onClick={() =>
              setDateRange({
                from: firstAvailableDate,
                to: lastAvailableDate,
              })
            }
          >
            Reset datepicker
          </Button>
        </div>
      </div>
      <LineChart
        data={filterData(dateRange?.from, dateRange?.to, data)}
        index="date"
        categories={[
          "ETF Shares Vital",
          "Vitainvest Core",
          "iShares Tech Growth",
        ]}
        colors={["blue", "violet", "fuchsia"]}
        valueFormatter={valueFormatter}
        yAxisWidth={60}
        onValueChange={() => {}}
        className="mt-8 hidden !h-96 sm:block"
      />
      <LineChart
        data={filterData(dateRange?.from, dateRange?.to, data)}
        index="date"
        categories={[
          "ETF Shares Vital",
          "Vitainvest Core",
          "iShares Tech Growth",
        ]}
        colors={["blue", "violet", "fuchsia"]}
        valueFormatter={valueFormatter}
        showYAxis={false}
        showLegend={false}
        startEndOnly={true}
        className="mt-8 !h-72 sm:hidden"
      />
    </div>
  )
}
```


```example/line-charts-line-chart-08.tsx
"use client"

import { RiAddFill } from "@remixicon/react"

import { cx } from "@/lib/utils"

import { Card } from "@/atom/Card"
import { LineChart } from "@/atom/LineChart"

const data = [
  //array-start
  {
    date: "Aug 01",
    "ETF Shares Vital": 2100.2,
    "Vitainvest Core": 4434.1,
    "iShares Tech Growth": 7943.2,
  },
  {
    date: "Aug 02",
    "ETF Shares Vital": 2943.0,
    "Vitainvest Core": 4954.1,
    "iShares Tech Growth": 8954.1,
  },
  {
    date: "Aug 03",
    "ETF Shares Vital": 4889.5,
    "Vitainvest Core": 6100.2,
    "iShares Tech Growth": 9123.7,
  },
  {
    date: "Aug 04",
    "ETF Shares Vital": 3909.8,
    "Vitainvest Core": 4909.7,
    "iShares Tech Growth": 7478.4,
  },
  {
    date: "Aug 05",
    "ETF Shares Vital": 5778.7,
    "Vitainvest Core": 7103.1,
    "iShares Tech Growth": 9504.3,
  },
  {
    date: "Aug 06",
    "ETF Shares Vital": 5900.9,
    "Vitainvest Core": 7534.3,
    "iShares Tech Growth": 9943.4,
  },
  {
    date: "Aug 07",
    "ETF Shares Vital": 4129.4,
    "Vitainvest Core": 7412.1,
    "iShares Tech Growth": 10112.2,
  },
  {
    date: "Aug 08",
    "ETF Shares Vital": 6021.2,
    "Vitainvest Core": 7834.4,
    "iShares Tech Growth": 10290.2,
  },
  {
    date: "Aug 09",
    "ETF Shares Vital": 6279.8,
    "Vitainvest Core": 8159.1,
    "iShares Tech Growth": 10349.6,
  },
  {
    date: "Aug 10",
    "ETF Shares Vital": 6224.5,
    "Vitainvest Core": 8260.6,
    "iShares Tech Growth": 10415.4,
  },
  {
    date: "Aug 11",
    "ETF Shares Vital": 6380.6,
    "Vitainvest Core": 8965.3,
    "iShares Tech Growth": 10636.3,
  },
  {
    date: "Aug 12",
    "ETF Shares Vital": 6414.4,
    "Vitainvest Core": 7989.3,
    "iShares Tech Growth": 10900.5,
  },
  {
    date: "Aug 13",
    "ETF Shares Vital": 6540.1,
    "Vitainvest Core": 7839.6,
    "iShares Tech Growth": 11040.4,
  },
  {
    date: "Aug 14",
    "ETF Shares Vital": 6634.4,
    "Vitainvest Core": 7343.8,
    "iShares Tech Growth": 11390.5,
  },
  {
    date: "Aug 15",
    "ETF Shares Vital": 7124.6,
    "Vitainvest Core": 6903.7,
    "iShares Tech Growth": 11423.1,
  },
  {
    date: "Aug 16",
    "ETF Shares Vital": 7934.5,
    "Vitainvest Core": 6273.6,
    "iShares Tech Growth": 12134.4,
  },
  {
    date: "Aug 17",
    "ETF Shares Vital": 10287.8,
    "Vitainvest Core": 5900.3,
    "iShares Tech Growth": 12034.4,
  },
  {
    date: "Aug 18",
    "ETF Shares Vital": 10323.2,
    "Vitainvest Core": 5732.1,
    "iShares Tech Growth": 11011.7,
  },
  {
    date: "Aug 19",
    "ETF Shares Vital": 10511.4,
    "Vitainvest Core": 5523.1,
    "iShares Tech Growth": 11834.8,
  },
  {
    date: "Aug 20",
    "ETF Shares Vital": 11043.9,
    "Vitainvest Core": 5422.3,
    "iShares Tech Growth": 12387.1,
  },
  {
    date: "Aug 21",
    "ETF Shares Vital": 6700.7,
    "Vitainvest Core": 5334.2,
    "iShares Tech Growth": 11032.2,
  },
  {
    date: "Aug 22",
    "ETF Shares Vital": 6900.8,
    "Vitainvest Core": 4943.4,
    "iShares Tech Growth": 10134.2,
  },
  {
    date: "Aug 23",
    "ETF Shares Vital": 7934.5,
    "Vitainvest Core": 4812.1,
    "iShares Tech Growth": 9921.2,
  },
  {
    date: "Aug 24",
    "ETF Shares Vital": 9021.0,
    "Vitainvest Core": 2729.1,
    "iShares Tech Growth": 10549.8,
  },
  {
    date: "Aug 25",
    "ETF Shares Vital": 9198.2,
    "Vitainvest Core": 2178.0,
    "iShares Tech Growth": 10968.4,
  },
  {
    date: "Aug 26",
    "ETF Shares Vital": 9557.1,
    "Vitainvest Core": 2158.3,
    "iShares Tech Growth": 11059.1,
  },
  {
    date: "Aug 27",
    "ETF Shares Vital": 9959.8,
    "Vitainvest Core": 2100.8,
    "iShares Tech Growth": 11903.6,
  },
  {
    date: "Aug 28",
    "ETF Shares Vital": 10034.6,
    "Vitainvest Core": 2934.4,
    "iShares Tech Growth": 12143.3,
  },
  {
    date: "Aug 29",
    "ETF Shares Vital": 10243.8,
    "Vitainvest Core": 3223.4,
    "iShares Tech Growth": 12930.1,
  },
  {
    date: "Aug 30",
    "ETF Shares Vital": 10078.5,
    "Vitainvest Core": 3779.1,
    "iShares Tech Growth": 13420.5,
  },
  {
    date: "Aug 31",
    "ETF Shares Vital": 11134.6,
    "Vitainvest Core": 4190.3,
    "iShares Tech Growth": 14443.2,
  },
  {
    date: "Sep 01",
    "ETF Shares Vital": 12347.2,
    "Vitainvest Core": 4839.1,
    "iShares Tech Growth": 14532.1,
  },
  {
    date: "Sep 02",
    "ETF Shares Vital": 12593.8,
    "Vitainvest Core": 5153.3,
    "iShares Tech Growth": 14283.5,
  },
  {
    date: "Sep 03",
    "ETF Shares Vital": 12043.4,
    "Vitainvest Core": 5234.8,
    "iShares Tech Growth": 14078.9,
  },
  {
    date: "Sep 04",
    "ETF Shares Vital": 12144.9,
    "Vitainvest Core": 5478.4,
    "iShares Tech Growth": 13859.7,
  },
  {
    date: "Sep 05",
    "ETF Shares Vital": 12489.5,
    "Vitainvest Core": 5741.1,
    "iShares Tech Growth": 13539.2,
  },
  {
    date: "Sep 06",
    "ETF Shares Vital": 12748.7,
    "Vitainvest Core": 6743.9,
    "iShares Tech Growth": 13643.2,
  },
  {
    date: "Sep 07",
    "ETF Shares Vital": 12933.2,
    "Vitainvest Core": 7832.8,
    "iShares Tech Growth": 14629.2,
  },
  {
    date: "Sep 08",
    "ETF Shares Vital": 13028.8,
    "Vitainvest Core": 8943.2,
    "iShares Tech Growth": 13611.2,
  },
  {
    date: "Sep 09",
    "ETF Shares Vital": 13412.4,
    "Vitainvest Core": 9932.2,
    "iShares Tech Growth": 12515.2,
  },
  {
    date: "Sep 10",
    "ETF Shares Vital": 13649.0,
    "Vitainvest Core": 10139.2,
    "iShares Tech Growth": 11143.8,
  },
  {
    date: "Sep 11",
    "ETF Shares Vital": 13748.5,
    "Vitainvest Core": 10441.2,
    "iShares Tech Growth": 8929.2,
  },
  {
    date: "Sep 12",
    "ETF Shares Vital": 13148.1,
    "Vitainvest Core": 10933.8,
    "iShares Tech Growth": 8943.2,
  },
  {
    date: "Sep 13",
    "ETF Shares Vital": 12839.6,
    "Vitainvest Core": 11073.4,
    "iShares Tech Growth": 7938.3,
  },
  {
    date: "Sep 14",
    "ETF Shares Vital": 12428.2,
    "Vitainvest Core": 11128.3,
    "iShares Tech Growth": 7533.4,
  },
  {
    date: "Sep 15",
    "ETF Shares Vital": 12012.8,
    "Vitainvest Core": 11412.3,
    "iShares Tech Growth": 7100.4,
  },
  {
    date: "Sep 16",
    "ETF Shares Vital": 11801.3,
    "Vitainvest Core": 10501.1,
    "iShares Tech Growth": 6532.1,
  },
  {
    date: "Sep 17",
    "ETF Shares Vital": 10102.9,
    "Vitainvest Core": 8923.3,
    "iShares Tech Growth": 4332.8,
  },
  {
    date: "Sep 18",
    "ETF Shares Vital": 12132.5,
    "Vitainvest Core": 10212.1,
    "iShares Tech Growth": 7847.4,
  },
  {
    date: "Sep 19",
    "ETF Shares Vital": 12901.1,
    "Vitainvest Core": 10101.7,
    "iShares Tech Growth": 7223.3,
  },
  {
    date: "Sep 20",
    "ETF Shares Vital": 13132.6,
    "Vitainvest Core": 12132.3,
    "iShares Tech Growth": 6900.2,
  },
  {
    date: "Sep 21",
    "ETF Shares Vital": 14132.2,
    "Vitainvest Core": 13212.5,
    "iShares Tech Growth": 5932.2,
  },
  {
    date: "Sep 22",
    "ETF Shares Vital": 14245.8,
    "Vitainvest Core": 12163.4,
    "iShares Tech Growth": 5577.1,
  },
  {
    date: "Sep 23",
    "ETF Shares Vital": 14328.3,
    "Vitainvest Core": 10036.1,
    "iShares Tech Growth": 5439.2,
  },
  {
    date: "Sep 24",
    "ETF Shares Vital": 14949.9,
    "Vitainvest Core": 8985.1,
    "iShares Tech Growth": 4463.1,
  },
  {
    date: "Sep 25",
    "ETF Shares Vital": 15967.5,
    "Vitainvest Core": 9700.1,
    "iShares Tech Growth": 4123.2,
  },
  {
    date: "Sep 26",
    "ETF Shares Vital": 17349.3,
    "Vitainvest Core": 10943.4,
    "iShares Tech Growth": 3935.1,
  },
  //array-end
]

const summary = [
  //array-start
  {
    name: "ETF Shares Vital",
    value: "$17,349.30",
    bgColor: "bg-blue-500 dark:bg-blue-500",
  },
  {
    name: "Vitainvest Core",
    value: "$10,943.40",
    bgColor: "bg-violet-500 dark:bg-violet-500",
  },
  {
    name: "iShares Tech Growth",
    value: "$3,935.10",
    bgColor: "bg-fuchsia-500 dark:bg-fuchsia-500",
  },
  //array-end
]

const valueFormatter = (number: number) =>
  `$${Intl.NumberFormat("us").format(number).toString()}`

export default function Example() {
  return (
    <div className="obfuscate">
      <h3 className="font-medium text-gray-900 dark:text-gray-50">
        ETF performance comparison
      </h3>
      <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <LineChart
            data={data}
            index="date"
            categories={[
              "ETF Shares Vital",
              "Vitainvest Core",
              "iShares Tech Growth",
            ]}
            colors={["blue", "violet", "fuchsia"]}
            valueFormatter={valueFormatter}
            yAxisWidth={55}
            showLegend={false}
            className="hidden !h-72 sm:block"
          />
          <LineChart
            data={data}
            index="date"
            categories={[
              "ETF Shares Vital",
              "Vitainvest Core",
              "iShares Tech Growth",
            ]}
            colors={["blue", "violet", "fuchsia"]}
            valueFormatter={valueFormatter}
            showYAxis={false}
            showLegend={false}
            startEndOnly={true}
            className="!h-72 sm:hidden"
          />
        </Card>
        <Card className="lg:col-span-1">
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-800"
          >
            {summary.map((item) => (
              <li
                key={item.name}
                className="flex space-x-3 py-4 first:py-0 first:pb-4"
              >
                <span
                  className={cx(item.bgColor, "w-1 shrink-0 rounded")}
                  aria-hidden={true}
                />
                <div className="flex w-full items-center justify-between space-x-4 truncate">
                  <p className="truncate text-sm text-gray-500 dark:text-gray-500">
                    {item.name}
                  </p>
                  <p className="font-medium text-gray-900 dark:text-gray-50">
                    {item.value}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="mt-4 inline-flex items-center gap-1.5 py-2 text-sm font-medium whitespace-nowrap text-blue-500 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-600"
          >
            <RiAddFill className="size-5 shrink-0" aria-hidden={true} />
            Compare asset
          </button>
        </Card>
      </div>
    </div>
  )
}
```


```example/spark-charts-spark-chart-06.tsx
"use client"

import { cx } from "@/lib/utils"

import { Card } from "@/atom/Card"
import { SparkAreaChart } from "@/atom/SparkChart"

const data = [
  //array-start
  {
    date: "Nov 24, 2023",
    "Dow Jones": 156.2,
    SMI: 68.5,
    "S&P 500": 71.8,
  },
  {
    date: "Nov 25, 2023",
    "Dow Jones": 152.5,
    SMI: 69.3,
    "S&P 500": 67.2,
  },
  {
    date: "Nov 26, 2023",
    "Dow Jones": 148.7,
    SMI: 69.8,
    "S&P 500": 61.5,
  },
  {
    date: "Nov 27, 2023",
    "Dow Jones": 155.3,
    SMI: 73.5,
    "S&P 500": 57.9,
  },
  {
    date: "Nov 28, 2023",
    "Dow Jones": 160.1,
    SMI: 75.2,
    "S&P 500": 59.6,
  },
  {
    date: "Nov 29, 2023",
    "Dow Jones": 175.6,
    SMI: 89.2,
    "S&P 500": 57.3,
  },
  {
    date: "Nov 30, 2023",
    "Dow Jones": 180.2,
    SMI: 92.7,
    "S&P 500": 59.8,
  },
  {
    date: "Dec 01, 2023",
    "Dow Jones": 185.5,
    SMI: 95.3,
    "S&P 500": 62.4,
  },
  {
    date: "Dec 02, 2023",
    "Dow Jones": 182.3,
    SMI: 93.8,
    "S&P 500": 60.7,
  },
  {
    date: "Dec 03, 2023",
    "Dow Jones": 180.7,
    SMI: 91.6,
    "S&P 500": 58.9,
  },
  {
    date: "Dec 04, 2023",
    "Dow Jones": 178.5,
    SMI: 89.7,
    "S&P 500": 56.2,
  },
  {
    date: "Dec 05, 2023",
    "Dow Jones": 176.2,
    SMI: 87.5,
    "S&P 500": 54.8,
  },
  {
    date: "Dec 06, 2023",
    "Dow Jones": 174.8,
    SMI: 85.3,
    "S&P 500": 53.4,
  },
  {
    date: "Dec 07, 2023",
    "Dow Jones": 178.0,
    SMI: 88.2,
    "S&P 500": 55.2,
  },
  {
    date: "Dec 08, 2023",
    "Dow Jones": 180.6,
    SMI: 90.5,
    "S&P 500": 56.8,
  },
  {
    date: "Dec 09, 2023",
    "Dow Jones": 182.4,
    SMI: 92.8,
    "S&P 500": 58.4,
  },
  {
    date: "Dec 10, 2023",
    "Dow Jones": 179.7,
    SMI: 90.2,
    "S&P 500": 57.0,
  },
  {
    date: "Dec 11, 2023",
    "Dow Jones": 154.2,
    SMI: 88.7,
    "S&P 500": 55.6,
  },
  {
    date: "Dec 12, 2023",
    "Dow Jones": 151.9,
    SMI: 86.5,
    "S&P 500": 53.9,
  },
  {
    date: "Dec 13, 2023",
    "Dow Jones": 149.3,
    SMI: 83.7,
    "S&P 500": 52.1,
  },
  {
    date: "Dec 14, 2023",
    "Dow Jones": 148.8,
    SMI: 81.4,
    "S&P 500": 50.5,
  },
  {
    date: "Dec 15, 2023",
    "Dow Jones": 145.5,
    SMI: 79.8,
    "S&P 500": 48.9,
  },
  {
    date: "Dec 16, 2023",
    "Dow Jones": 140.2,
    SMI: 84.5,
    "S&P 500": 50.2,
  },
  //array-end
]

const summary = [
  //array-start
  {
    name: "Dow Jones",
    description: "Dow Jones Industrial Average",
    category: "Dow Jones",
    change: "-3.2%",
    changeType: "negative",
  },
  {
    name: "SMI",
    description: "Swiss Market Index",
    category: "SMI",
    change: "+4.1%",
    changeType: "positive",
  },
  {
    name: "S&P 500",
    description: "Standard and Poor's 500",
    category: "S&P 500",
    change: "-6.9%",
    changeType: "negative",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <dl className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {summary.map((item) => (
          <Card
            key={item.name}
            className="flex items-center justify-between space-x-4"
          >
            <div className="truncate">
              <div className="flex items-center space-x-1.5">
                <dt className="text-sm font-medium text-gray-900 dark:text-gray-50">
                  {item.name}
                </dt>
                <span
                  className={cx(
                    item.changeType === "positive"
                      ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-400/10 dark:text-emerald-400"
                      : "bg-red-100 text-red-800 dark:bg-red-400/10 dark:text-red-400",
                    "inline-flex items-center rounded px-2 py-0.5 text-xs",
                  )}
                >
                  {item.change}
                </span>
              </div>
              <dd className="mt-0.5 truncate text-xs text-gray-500 dark:text-gray-500">
                {item.description}
              </dd>
            </div>
            <SparkAreaChart
              data={data}
              index="date"
              categories={[item.category]}
              fill="solid"
              colors={item.changeType === "positive" ? ["emerald"] : ["red"]}
              className="h-10 flex-none"
            />
          </Card>
        ))}
      </dl>
    </div>
  )
}
```


```example/spark-charts-spark-chart-05.tsx
"use client"

import { cx } from "@/lib/utils"

import { Card } from "@/atom/Card"
import { SparkAreaChart } from "@/atom/SparkChart"

const data = [
  //array-start
  {
    date: "Nov 24, 2023",
    "Doorbell, Inc.": 150.2,
    "Off Running AG": 70.5,
    "Solid Bit Holding": 71.8,
  },
  {
    date: "Nov 25, 2023",
    "Doorbell, Inc.": 152.5,
    "Off Running AG": 72.3,
    "Solid Bit Holding": 67.2,
  },
  {
    date: "Nov 26, 2023",
    "Doorbell, Inc.": 148.7,
    "Off Running AG": 69.8,
    "Solid Bit Holding": 61.5,
  },
  {
    date: "Nov 27, 2023",
    "Doorbell, Inc.": 155.3,
    "Off Running AG": 73.5,
    "Solid Bit Holding": 57.9,
  },
  {
    date: "Nov 28, 2023",
    "Doorbell, Inc.": 160.1,
    "Off Running AG": 75.2,
    "Solid Bit Holding": 59.6,
  },
  {
    date: "Nov 29, 2023",
    "Doorbell, Inc.": 175.6,
    "Off Running AG": 89.2,
    "Solid Bit Holding": 57.3,
  },
  {
    date: "Nov 30, 2023",
    "Doorbell, Inc.": 180.2,
    "Off Running AG": 92.7,
    "Solid Bit Holding": 59.8,
  },
  {
    date: "Dec 01, 2023",
    "Doorbell, Inc.": 185.5,
    "Off Running AG": 95.3,
    "Solid Bit Holding": 62.4,
  },
  {
    date: "Dec 02, 2023",
    "Doorbell, Inc.": 182.3,
    "Off Running AG": 93.8,
    "Solid Bit Holding": 60.7,
  },
  {
    date: "Dec 03, 2023",
    "Doorbell, Inc.": 180.7,
    "Off Running AG": 91.6,
    "Solid Bit Holding": 58.9,
  },
  {
    date: "Dec 04, 2023",
    "Doorbell, Inc.": 178.5,
    "Off Running AG": 89.7,
    "Solid Bit Holding": 56.2,
  },
  {
    date: "Dec 05, 2023",
    "Doorbell, Inc.": 176.2,
    "Off Running AG": 87.5,
    "Solid Bit Holding": 54.8,
  },
  {
    date: "Dec 06, 2023",
    "Doorbell, Inc.": 174.8,
    "Off Running AG": 85.3,
    "Solid Bit Holding": 53.4,
  },
  {
    date: "Dec 07, 2023",
    "Doorbell, Inc.": 178.0,
    "Off Running AG": 88.2,
    "Solid Bit Holding": 55.2,
  },
  {
    date: "Dec 08, 2023",
    "Doorbell, Inc.": 180.6,
    "Off Running AG": 90.5,
    "Solid Bit Holding": 56.8,
  },
  {
    date: "Dec 09, 2023",
    "Doorbell, Inc.": 182.4,
    "Off Running AG": 92.8,
    "Solid Bit Holding": 58.4,
  },
  {
    date: "Dec 10, 2023",
    "Doorbell, Inc.": 179.7,
    "Off Running AG": 90.2,
    "Solid Bit Holding": 57.0,
  },
  {
    date: "Dec 11, 2023",
    "Doorbell, Inc.": 178.2,
    "Off Running AG": 88.7,
    "Solid Bit Holding": 55.6,
  },
  {
    date: "Dec 12, 2023",
    "Doorbell, Inc.": 175.9,
    "Off Running AG": 86.5,
    "Solid Bit Holding": 53.9,
  },
  {
    date: "Dec 13, 2023",
    "Doorbell, Inc.": 172.3,
    "Off Running AG": 83.7,
    "Solid Bit Holding": 52.1,
  },
  {
    date: "Dec 14, 2023",
    "Doorbell, Inc.": 169.8,
    "Off Running AG": 81.4,
    "Solid Bit Holding": 50.5,
  },
  {
    date: "Dec 15, 2023",
    "Doorbell, Inc.": 168.5,
    "Off Running AG": 79.8,
    "Solid Bit Holding": 48.9,
  },
  {
    date: "Dec 16, 2023",
    "Doorbell, Inc.": 170.2,
    "Off Running AG": 81.5,
    "Solid Bit Holding": 50.2,
  },
  //array-end
]

const summary = [
  //array-start
  {
    name: "Doorbell, Inc.",
    change: "+2.3%",
    changeType: "positive",
  },
  {
    name: "Solid Bit Holding",
    change: "-0.9%",
    changeType: "negative",
  },
  {
    name: "Off Running AG",
    change: "+4.1%",
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
            <div className="flex items-center justify-between space-x-4">
              <div className="truncate">
                <dt className="truncate text-sm font-medium text-gray-900 dark:text-gray-50">
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
              <SparkAreaChart
                data={data}
                index="date"
                categories={[item.name]}
                fill="solid"
                colors={item.changeType === "positive" ? ["emerald"] : ["red"]}
                className="flex-none"
              />
            </div>
          </Card>
        ))}
      </dl>
    </div>
  )
}
```


```example/spark-charts-spark-chart-04.tsx
"use client"

import { Card } from "@/atom/Card"
import { SparkAreaChart } from "@/atom/SparkChart"

const data = [
  //array-start
  {
    date: "Jan 23",
    "Monthly active users": 673,
    "Monthly sessions": 1024,
    "Monthly user growth": 4.5,
  },
  {
    date: "Feb 23",
    "Monthly active users": 573,
    "Monthly sessions": 1224,
    "Monthly user growth": 6.5,
  },
  {
    date: "Mar 23",
    "Monthly active users": 503,
    "Monthly sessions": 1200,
    "Monthly user growth": 6.9,
  },
  {
    date: "Apr 23",
    "Monthly active users": 523,
    "Monthly sessions": 1005,
    "Monthly user growth": 4.2,
  },
  {
    date: "May 23",
    "Monthly active users": 599,
    "Monthly sessions": 1201,
    "Monthly user growth": 3.9,
  },
  {
    date: "Jun 23",
    "Monthly active users": 481,
    "Monthly sessions": 1001,
    "Monthly user growth": 3.7,
  },
  {
    date: "Jul 23",
    "Monthly active users": 499,
    "Monthly sessions": 1129,
    "Monthly user growth": 4.7,
  },
  {
    date: "Aug 23",
    "Monthly active users": 571,
    "Monthly sessions": 1220,
    "Monthly user growth": 4.5,
  },
  {
    date: "Sep 23",
    "Monthly active users": 579,
    "Monthly sessions": 1420,
    "Monthly user growth": 4.3,
  },
  {
    date: "Oct 23",
    "Monthly active users": 471,
    "Monthly sessions": 1230,
    "Monthly user growth": 4.0,
  },
  {
    date: "Nov 23",
    "Monthly active users": 461,
    "Monthly sessions": 1430,
    "Monthly user growth": 4.1,
  },
  {
    date: "Dec 23",
    "Monthly active users": 341,
    "Monthly sessions": 1530,
    "Monthly user growth": 4.9,
  },
  //array-end
]

const summary = [
  //array-start
  {
    name: "Monthly active users",
    stat: "341",
  },
  {
    name: "Monthly sessions",
    stat: "1,530",
  },
  {
    name: "Monthly user growth",
    stat: "4.9%",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {summary.map((item) => (
          <Card key={item.name}>
            <dt className="text-sm text-gray-500 dark:text-gray-500">
              {item.name}
            </dt>
            <div className="flex items-center justify-between space-x-8">
              <dd className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
                {item.stat}
              </dd>
              <SparkAreaChart
                data={data}
                index="date"
                categories={[item.name]}
                fill="solid"
                className="flex-none"
              />
            </div>
          </Card>
        ))}
      </dl>
    </div>
  )
}
```


```example/spark-charts-spark-chart-01.tsx
"use client"

import { cx } from "@/lib/utils"

import { Card } from "@/atom/Card"
import { SparkAreaChart } from "@/atom/SparkChart"

const data = [
  //array-start
  {
    date: "Nov 24, 2023",
    GOOG: 156.2,
    AMZN: 68.5,
    SPOT: 71.8,
    MSFT: 205.3,
    TSLA: 1050.6,
  },
  {
    date: "Nov 25, 2023",
    GOOG: 152.5,
    AMZN: 69.3,
    SPOT: 67.2,
    MSFT: 223.1,
    TSLA: 945.8,
  },
  {
    date: "Nov 26, 2023",
    GOOG: 148.7,
    AMZN: 69.8,
    SPOT: 61.5,
    MSFT: 240.9,
    TSLA: 839.4,
  },
  {
    date: "Nov 27, 2023",
    GOOG: 155.3,
    AMZN: 73.5,
    SPOT: 57.9,
    MSFT: 254.7,
    TSLA: 830.2,
  },
  {
    date: "Nov 28, 2023",
    GOOG: 160.1,
    AMZN: 75.2,
    SPOT: 59.6,
    MSFT: 308.5,
    TSLA: 845.7,
  },
  {
    date: "Nov 29, 2023",
    GOOG: 175.6,
    AMZN: 89.2,
    SPOT: 57.3,
    MSFT: 341.4,
    TSLA: 950.2,
  },
  {
    date: "Nov 30, 2023",
    GOOG: 180.2,
    AMZN: 92.7,
    SPOT: 59.8,
    MSFT: 378.1,
    TSLA: 995.9,
  },
  {
    date: "Dec 01, 2023",
    GOOG: 185.5,
    AMZN: 95.3,
    SPOT: 62.4,
    MSFT: 320.3,
    TSLA: 1060.4,
  },
  {
    date: "Dec 02, 2023",
    GOOG: 182.3,
    AMZN: 93.8,
    SPOT: 60.7,
    MSFT: 356.5,
    TSLA: 965.8,
  },
  {
    date: "Dec 03, 2023",
    GOOG: 180.7,
    AMZN: 91.6,
    SPOT: 58.9,
    MSFT: 340.7,
    TSLA: 970.3,
  },
  {
    date: "Dec 04, 2023",
    GOOG: 178.5,
    AMZN: 89.7,
    SPOT: 56.2,
    MSFT: 365.9,
    TSLA: 975.9,
  },
  {
    date: "Dec 05, 2023",
    GOOG: 176.2,
    AMZN: 87.5,
    SPOT: 54.8,
    MSFT: 375.1,
    TSLA: 964.6,
  },
  {
    date: "Dec 06, 2023",
    GOOG: 174.8,
    AMZN: 85.3,
    SPOT: 53.4,
    MSFT: 340.3,
    TSLA: 960.4,
  },
  {
    date: "Dec 07, 2023",
    GOOG: 178.0,
    AMZN: 88.2,
    SPOT: 55.2,
    MSFT: 335.5,
    TSLA: 955.3,
  },
  {
    date: "Dec 08, 2023",
    GOOG: 180.6,
    AMZN: 90.5,
    SPOT: 56.8,
    MSFT: 310.7,
    TSLA: 950.3,
  },
  {
    date: "Dec 09, 2023",
    GOOG: 182.4,
    AMZN: 92.8,
    SPOT: 58.4,
    MSFT: 300.9,
    TSLA: 845.4,
  },
  {
    date: "Dec 10, 2023",
    GOOG: 179.7,
    AMZN: 90.2,
    SPOT: 57.0,
    MSFT: 290.1,
    TSLA: 1011.6,
  },
  {
    date: "Dec 11, 2023",
    GOOG: 154.2,
    AMZN: 88.7,
    SPOT: 55.6,
    MSFT: 291.3,
    TSLA: 1017.9,
  },
  {
    date: "Dec 12, 2023",
    GOOG: 151.9,
    AMZN: 86.5,
    SPOT: 53.9,
    MSFT: 293.5,
    TSLA: 940.3,
  },
  {
    date: "Dec 13, 2023",
    GOOG: 149.3,
    AMZN: 83.7,
    SPOT: 52.1,
    MSFT: 301.7,
    TSLA: 900.8,
  },
  {
    date: "Dec 14, 2023",
    GOOG: 148.8,
    AMZN: 81.4,
    SPOT: 50.5,
    MSFT: 321.9,
    TSLA: 780.4,
  },
  {
    date: "Dec 15, 2023",
    GOOG: 145.5,
    AMZN: 79.8,
    SPOT: 48.9,
    MSFT: 328.1,
    TSLA: 765.1,
  },
  {
    date: "Dec 16, 2023",
    GOOG: 140.2,
    AMZN: 84.5,
    SPOT: 50.2,
    MSFT: 331.3,
    TSLA: 745.9,
  },
  {
    date: "Dec 17, 2023",
    GOOG: 143.8,
    AMZN: 82.1,
    SPOT: 49.6,
    MSFT: 373.5,
    TSLA: 741.8,
  },
  {
    date: "Dec 18, 2023",
    GOOG: 157.5,
    AMZN: 86.9,
    SPOT: 51.3,
    MSFT: 381.7,
    TSLA: 739.8,
  },
  //array-end
]

const summary = [
  //array-start
  {
    ticker: "AMZN",
    description: "Amazon",
    value: "$86.9",
    change: "+0.92%",
    changeType: "positive",
  },
  {
    ticker: "TSLA",
    description: "Tesla, Inc.",
    value: "$739.8",
    change: "-2.12%",
    changeType: "negative",
  },
  {
    ticker: "GOOG",
    description: "Alphabet, Inc",
    value: "$157.5",
    change: "+0.38%",
    changeType: "positive",
  },
  {
    ticker: "SPOT",
    description: "Spotify",
    value: "$51.3",
    change: "−0.25%",
    changeType: "negative",
  },
  {
    ticker: "MSFT",
    description: "Microsoft",
    value: "$381.7",
    change: "+2.45%",
    changeType: "positive",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <dl className="space-y-6 sm:mx-auto sm:max-w-md">
        {summary.map((stock) => (
          <Card
            key={stock.ticker}
            className="flex items-center justify-between space-x-4 !p-4"
          >
            <div className="truncate">
              <dt className="truncate text-sm font-medium text-gray-900 dark:text-gray-50">
                {stock.ticker}
              </dt>
              <dl className="truncate text-xs text-gray-500 dark:text-gray-500">
                {stock.description}
              </dl>
            </div>
            <div className="flex items-center space-x-3">
              <SparkAreaChart
                data={data}
                index="date"
                categories={[stock.ticker]}
                colors={stock.changeType === "positive" ? ["emerald"] : ["red"]}
                className="h-8 w-24 flex-none sm:w-28"
              />
              <div
                className={cx(
                  stock.changeType === "positive"
                    ? "text-emerald-700 dark:text-emerald-500"
                    : "text-red-700 dark:text-red-500",
                  "flex w-28 items-center justify-end space-x-2 sm:w-32",
                )}
              >
                <dd className="text-sm font-medium">{stock.value}</dd>
                <dd
                  className={cx(
                    stock.changeType === "positive"
                      ? "bg-emerald-100 dark:bg-emerald-400/10"
                      : "bg-red-100 dark:bg-red-400/10",
                    "rounded px-1.5 py-1 text-xs font-medium tabular-nums",
                  )}
                >
                  {stock.change}
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


```example/spark-charts-spark-chart-03.tsx
"use client"

import { cx } from "@/lib/utils"

import { Card } from "@/atom/Card"
import { SparkAreaChart } from "@/atom/SparkChart"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/atom/Tabs"

const data = [
  //array-start
  {
    date: "Nov 24, 2023",
    GOOG: 156.2,
    AMZN: 68.5,
    SPOT: 71.8,
    AAPL: 149.1,
    MSFT: 205.3,
    TSLA: 1050.6,
  },
  {
    date: "Nov 25, 2023",
    GOOG: 152.5,
    AMZN: 69.3,
    SPOT: 67.2,
    AAPL: 155.1,
    MSFT: 223.1,
    TSLA: 945.8,
  },
  {
    date: "Nov 26, 2023",
    GOOG: 148.7,
    AMZN: 69.8,
    SPOT: 61.5,
    AAPL: 160.1,
    MSFT: 240.9,
    TSLA: 839.4,
  },
  {
    date: "Nov 27, 2023",
    GOOG: 155.3,
    AMZN: 73.5,
    SPOT: 57.9,
    AAPL: 165.1,
    MSFT: 254.7,
    TSLA: 830.2,
  },
  {
    date: "Nov 28, 2023",
    GOOG: 160.1,
    AMZN: 75.2,
    SPOT: 59.6,
    AAPL: 148.1,
    MSFT: 308.5,
    TSLA: 845.7,
  },
  {
    date: "Nov 29, 2023",
    GOOG: 175.6,
    AMZN: 89.2,
    SPOT: 57.3,
    AAPL: 149.2,
    MSFT: 341.4,
    TSLA: 950.2,
  },
  {
    date: "Nov 30, 2023",
    GOOG: 180.2,
    AMZN: 92.7,
    SPOT: 59.8,
    AAPL: 139.1,
    MSFT: 378.1,
    TSLA: 995.9,
  },
  {
    date: "Dec 01, 2023",
    GOOG: 185.5,
    AMZN: 95.3,
    SPOT: 62.4,
    AAPL: 122.4,
    MSFT: 320.3,
    TSLA: 1060.4,
  },
  {
    date: "Dec 02, 2023",
    GOOG: 182.3,
    AMZN: 93.8,
    SPOT: 60.7,
    AAPL: 143.6,
    MSFT: 356.5,
    TSLA: 965.8,
  },
  {
    date: "Dec 03, 2023",
    GOOG: 180.7,
    AMZN: 91.6,
    SPOT: 58.9,
    AAPL: 144.3,
    MSFT: 340.7,
    TSLA: 970.3,
  },
  {
    date: "Dec 04, 2023",
    GOOG: 178.5,
    AMZN: 89.7,
    SPOT: 56.2,
    AAPL: 152.4,
    MSFT: 365.9,
    TSLA: 975.9,
  },
  {
    date: "Dec 05, 2023",
    GOOG: 176.2,
    AMZN: 87.5,
    SPOT: 54.8,
    AAPL: 156.1,
    MSFT: 375.1,
    TSLA: 964.6,
  },
  {
    date: "Dec 06, 2023",
    GOOG: 174.8,
    AMZN: 85.3,
    SPOT: 53.4,
    AAPL: 158.6,
    MSFT: 340.3,
    TSLA: 960.4,
  },
  {
    date: "Dec 07, 2023",
    GOOG: 178.0,
    AMZN: 88.2,
    SPOT: 55.2,
    AAPL: 163.3,
    MSFT: 335.5,
    TSLA: 955.3,
  },
  {
    date: "Dec 08, 2023",
    GOOG: 180.6,
    AMZN: 90.5,
    SPOT: 56.8,
    AAPL: 169.6,
    MSFT: 310.7,
    TSLA: 950.3,
  },
  {
    date: "Dec 09, 2023",
    GOOG: 182.4,
    AMZN: 92.8,
    SPOT: 58.4,
    AAPL: 178.6,
    MSFT: 300.9,
    TSLA: 845.4,
  },
  {
    date: "Dec 10, 2023",
    GOOG: 179.7,
    AMZN: 90.2,
    SPOT: 57.0,
    AAPL: 183.2,
    MSFT: 290.1,
    TSLA: 1011.6,
  },
  {
    date: "Dec 11, 2023",
    GOOG: 154.2,
    AMZN: 88.7,
    SPOT: 55.6,
    AAPL: 199.6,
    MSFT: 291.3,
    TSLA: 1017.9,
  },
  {
    date: "Dec 12, 2023",
    GOOG: 151.9,
    AMZN: 86.5,
    SPOT: 53.9,
    AAPL: 201.1,
    MSFT: 293.5,
    TSLA: 940.3,
  },
  {
    date: "Dec 13, 2023",
    GOOG: 149.3,
    AMZN: 83.7,
    SPOT: 52.1,
    AAPL: 169.1,
    MSFT: 301.7,
    TSLA: 900.8,
  },
  {
    date: "Dec 14, 2023",
    GOOG: 148.8,
    AMZN: 81.4,
    SPOT: 50.5,
    AAPL: 171.6,
    MSFT: 321.9,
    TSLA: 780.4,
  },
  {
    date: "Dec 15, 2023",
    GOOG: 145.5,
    AMZN: 79.8,
    SPOT: 48.9,
    AAPL: 178.1,
    MSFT: 328.1,
    TSLA: 765.1,
  },
  {
    date: "Dec 16, 2023",
    GOOG: 140.2,
    AMZN: 84.5,
    SPOT: 50.2,
    AAPL: 192.6,
    MSFT: 331.3,
    TSLA: 745.9,
  },
  {
    date: "Dec 17, 2023",
    GOOG: 143.8,
    AMZN: 82.1,
    SPOT: 49.6,
    AAPL: 201.2,
    MSFT: 373.5,
    TSLA: 741.8,
  },
  {
    date: "Dec 18, 2023",
    GOOG: 148.5,
    AMZN: 86.9,
    SPOT: 51.3,
    AAPL: 209.8,
    MSFT: 381.7,
    TSLA: 739.8,
  },
  //array-end
]

const tabs = [
  //array-start
  {
    name: "Trending",
    stocks: [
      {
        ticker: "AMZN",
        description: "Amazon",
        value: "$86.9",
        change: "+0.92%",
        changeType: "positive",
      },
      {
        ticker: "GOOG",
        description: "Alphabet, Inc",
        value: "$148.5",
        change: "-0.38%",
        changeType: "negative",
      },
      {
        ticker: "AAPL",
        description: "Apple",
        value: "$209.8",
        change: "+1.67%",
        changeType: "positive",
      },
    ],
  },
  {
    name: "Watchlist",
    stocks: [
      {
        ticker: "SPOT",
        description: "Spotify",
        value: "$51.3",
        change: "-0.25%",
        changeType: "negative",
      },
      {
        ticker: "MSFT",
        description: "Microsoft",
        value: "$381.7",
        change: "+2.45%",
        changeType: "positive",
      },
      {
        ticker: "TSLA",
        description: "Tesla, Inc.",
        value: "$739.8",
        change: "-2.12%",
        changeType: "negative",
      },
    ],
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <Card className="sm:mx-auto sm:max-w-md">
        <p className="text-sm text-gray-500 dark:text-gray-500">Watchlist</p>
        <p className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
          $44,567.10
        </p>
        <p className="mt-1 text-sm font-medium">
          <span className="text-emerald-700 dark:text-emerald-500">
            +$451.30 (1.2%)
          </span>{" "}
          <span className="font-normal text-gray-500 dark:text-gray-500">
            Today
          </span>
        </p>
        <Tabs defaultValue="Trending" className="mt-6">
          <TabsList className="grid w-full grid-cols-2" variant="solid">
            {tabs.map((tab) => (
              <TabsTrigger key={tab.name} value={tab.name}>
                {tab.name}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="mt-8">
            {tabs.map((tab) => (
              <TabsContent key={tab.name} value={tab.name}>
                <ul role="list" className="space-y-6">
                  {tab.stocks.map((stock) => (
                    <li
                      key={stock.ticker}
                      className="flex items-center justify-between space-x-6"
                    >
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
                          {stock.description}
                        </p>
                        <p
                          className={cx(
                            stock.changeType === "positive"
                              ? "text-emerald-700 dark:text-emerald-500"
                              : "text-red-700 dark:text-red-500",
                            "flex items-center space-x-1 text-sm",
                          )}
                        >
                          <span className="font-medium">{stock.value}</span>
                          <span>({stock.change})</span>
                        </p>
                      </div>
                      <SparkAreaChart
                        data={data}
                        index="date"
                        categories={[stock.ticker]}
                        colors={
                          stock.changeType === "positive"
                            ? ["emerald"]
                            : ["red"]
                        }
                        className="h-10 w-36 flex-none sm:w-44"
                      />
                    </li>
                  ))}
                </ul>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </Card>
    </div>
  )
}
```


```example/spark-charts-spark-chart-02.tsx
"use client"

import { cx } from "@/lib/utils"

import { Card } from "@/atom/Card"
import { SparkAreaChart } from "@/atom/SparkChart"

const data = [
  //array-start
  {
    date: "Nov 24, 2023",
    GOOG: 156.2,
    AMZN: 68.5,
    SPOT: 71.8,
    AAPL: 149.1,
  },
  {
    date: "Nov 25, 2023",
    GOOG: 152.5,
    AMZN: 69.3,
    SPOT: 67.2,
    AAPL: 145.1,
  },
  {
    date: "Nov 26, 2023",
    GOOG: 148.7,
    AMZN: 69.8,
    SPOT: 61.5,
    AAPL: 146.1,
  },
  {
    date: "Nov 27, 2023",
    GOOG: 155.3,
    AMZN: 73.5,
    SPOT: 57.9,
    AAPL: 147.1,
  },
  {
    date: "Nov 28, 2023",
    GOOG: 160.1,
    AMZN: 75.2,
    SPOT: 59.6,
    AAPL: 148.1,
  },
  {
    date: "Nov 29, 2023",
    GOOG: 175.6,
    AMZN: 89.2,
    SPOT: 57.3,
    AAPL: 149.2,
  },
  {
    date: "Nov 30, 2023",
    GOOG: 180.2,
    AMZN: 92.7,
    SPOT: 59.8,
    AAPL: 149.1,
  },
  {
    date: "Dec 01, 2023",
    GOOG: 185.5,
    AMZN: 95.3,
    SPOT: 62.4,
    AAPL: 142.4,
  },
  {
    date: "Dec 02, 2023",
    GOOG: 182.3,
    AMZN: 93.8,
    SPOT: 60.7,
    AAPL: 143.6,
  },
  {
    date: "Dec 03, 2023",
    GOOG: 180.7,
    AMZN: 91.6,
    SPOT: 58.9,
    AAPL: 144.3,
  },
  {
    date: "Dec 04, 2023",
    GOOG: 178.5,
    AMZN: 89.7,
    SPOT: 56.2,
    AAPL: 152.4,
  },
  {
    date: "Dec 05, 2023",
    GOOG: 176.2,
    AMZN: 87.5,
    SPOT: 54.8,
    AAPL: 156.1,
  },
  {
    date: "Dec 06, 2023",
    GOOG: 174.8,
    AMZN: 85.3,
    SPOT: 53.4,
    AAPL: 158.6,
  },
  {
    date: "Dec 07, 2023",
    GOOG: 178.0,
    AMZN: 88.2,
    SPOT: 55.2,
    AAPL: 159.3,
  },
  {
    date: "Dec 08, 2023",
    GOOG: 180.6,
    AMZN: 90.5,
    SPOT: 56.8,
    AAPL: 164.6,
  },
  {
    date: "Dec 09, 2023",
    GOOG: 182.4,
    AMZN: 92.8,
    SPOT: 58.4,
    AAPL: 166.6,
  },
  {
    date: "Dec 10, 2023",
    GOOG: 179.7,
    AMZN: 90.2,
    SPOT: 57.0,
    AAPL: 169.2,
  },
  {
    date: "Dec 11, 2023",
    GOOG: 154.2,
    AMZN: 88.7,
    SPOT: 55.6,
    AAPL: 169.6,
  },
  {
    date: "Dec 12, 2023",
    GOOG: 151.9,
    AMZN: 86.5,
    SPOT: 53.9,
    AAPL: 169.1,
  },
  {
    date: "Dec 13, 2023",
    GOOG: 149.3,
    AMZN: 83.7,
    SPOT: 52.1,
    AAPL: 169.1,
  },
  {
    date: "Dec 14, 2023",
    GOOG: 148.8,
    AMZN: 81.4,
    SPOT: 50.5,
    AAPL: 171.6,
  },
  {
    date: "Dec 15, 2023",
    GOOG: 145.5,
    AMZN: 79.8,
    SPOT: 48.9,
    AAPL: 171.1,
  },
  {
    date: "Dec 16, 2023",
    GOOG: 140.2,
    AMZN: 84.5,
    SPOT: 50.2,
    AAPL: 173.6,
  },
  //array-end
]

const summary = [
  //array-start
  {
    ticker: "AMZN",
    description: "Amazon",
    value: "$84.5",
    change: "+0.92%",
    changeType: "positive",
  },
  {
    ticker: "GOOG",
    description: "Alphabet, Inc",
    value: "$140.2",
    change: "-0.38%",
    changeType: "negative",
  },
  {
    ticker: "AAPL",
    description: "Apple",
    value: "$173.6",
    change: "+1.67%",
    changeType: "positive",
  },
  {
    ticker: "SPOT",
    description: "Spotify",
    value: "$50.2",
    change: "-0.25%",
    changeType: "negative",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <Card className="sm:mx-auto sm:max-w-md">
        <p className="text-sm text-gray-500 dark:text-gray-500">Watchlist</p>
        <p className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
          $44,567.10
        </p>
        <p className="mt-1 text-sm font-medium">
          <span className="text-emerald-700 dark:text-emerald-500">
            +$451.30 (1.2%)
          </span>{" "}
          <span className="font-normal text-gray-500 dark:text-gray-500">
            Today
          </span>
        </p>
        <ul role="list" className="mt-8 space-y-8">
          {summary.map((item) => (
            <li
              key={item.ticker}
              className="flex items-center justify-between space-x-6"
            >
              <div className="truncate">
                <p className="truncate text-sm font-medium text-gray-900 dark:text-gray-50">
                  {item.ticker}
                </p>
                <p className="truncate text-xs text-gray-500 dark:text-gray-500">
                  {item.description}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <SparkAreaChart
                  data={data}
                  index="date"
                  categories={[item.ticker]}
                  colors={
                    item.changeType === "positive" ? ["emerald"] : ["red"]
                  }
                  className="h-10 w-32 flex-none sm:w-44"
                />
                <div className="w-14 text-right sm:w-16">
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
                    {item.value}
                  </p>
                  <p
                    className={cx(
                      item.changeType === "positive"
                        ? "text-emerald-700 dark:text-emerald-500"
                        : "text-red-700 dark:text-red-500",
                      "text-xs font-medium",
                    )}
                  >
                    {item.change}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  )
}
```


```example/chart-compositions-chart-composition-09.tsx
"use client"

import React from "react"
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react"

import { cx } from "@/lib/utils"

import { Badge } from "@/atom/Badge"
import { BarChart } from "@/atom/BarChart"
import { Divider } from "@/atom/Divider"

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
        "group p-1.5 text-sm ring-1 ring-gray-300 ring-inset hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent dark:ring-gray-800 hover:dark:bg-gray-900 disabled:hover:dark:bg-transparent",
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
  return (
    <div className="obfuscate">
      <div className="flex flex-col gap-x-6 gap-y-5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <div>
          <h3 className="text-base font-semibold text-gray-900 dark:text-gray-50">
            Enterprise
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
            User ID:{` `}
            <span className="font-medium text-gray-900 dark:text-gray-50">
              admin_dfQ7s
            </span>
          </p>
        </div>
        <div className="mt-4 flex items-center gap-4 gap-y-2 sm:mt-0 sm:gap-x-8">
          {summary.map((item, index) => (
            <React.Fragment key={item.name}>
              <div>
                <p className="text-sm whitespace-nowrap text-gray-500 dark:text-gray-500">
                  {item.name}
                </p>
                {item.name === "Last invoice" ? (
                  <a
                    className="mt-1 inline-flex items-center gap-1 text-sm font-semibold whitespace-nowrap text-blue-500 hover:underline hover:underline-offset-4 dark:text-blue-500"
                    href="#"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-gray-50">
                    {item.value}
                  </p>
                )}
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
        <div className="flex w-full items-center justify-between gap-3 sm:w-fit sm:justify-start">
          <span className="block w-full text-sm font-medium text-gray-900 tabular-nums dark:text-gray-50">
            Aug 1 – 31, 2024
          </span>
          <span className="inline-flex items-center rounded-md shadow-sm">
            <Button position="left">
              <span className="sr-only">Previous</span>
              <RiArrowLeftSLine
                className="size-5 text-gray-700 group-hover:text-gray-900 dark:text-gray-300 group-hover:dark:text-gray-50"
                aria-hidden={true}
              />
            </Button>
            <Button position="right">
              <span className="sr-only">Next</span>
              <RiArrowRightSLine
                className="size-5 text-gray-700 group-hover:text-gray-900 dark:text-gray-300 group-hover:dark:text-gray-50"
                aria-hidden={true}
              />
            </Button>
          </span>
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
        className="mt-10 hidden sm:block"
      />
      <BarChart
        data={data}
        index="date"
        categories={["GPU cluster", "Workspace usage"]}
        type="stacked"
        valueFormatter={valueFormatter}
        showLegend={false}
        showYAxis={false}
        className="mt-10 sm:hidden"
      />
    </div>
  )
}
```


```example/chart-compositions-chart-composition-08.tsx
"use client"

import React from "react"

import { Badge } from "@/atom/Badge"
import { BarChart } from "@/atom/BarChart"
import { Divider } from "@/atom/Divider"

const data = [
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
  {
    date: "Sep 01",
    "GPU cluster": 12347,
    "Workspace usage": 4839,
  },
  {
    date: "Sep 02",
    "GPU cluster": 12593,
    "Workspace usage": 5153,
  },
  {
    date: "Sep 03",
    "GPU cluster": 12043,
    "Workspace usage": 5234,
  },
  {
    date: "Sep 04",
    "GPU cluster": 12144,
    "Workspace usage": 5478,
  },
  {
    date: "Sep 05",
    "GPU cluster": 12489,
    "Workspace usage": 5741,
  },
  {
    date: "Sep 06",
    "GPU cluster": 12748,
    "Workspace usage": 6743,
  },
  {
    date: "Sep 07",
    "GPU cluster": 12933,
    "Workspace usage": 7832,
  },
  {
    date: "Sep 08",
    "GPU cluster": 13028,
    "Workspace usage": 8943,
  },
  {
    date: "Sep 09",
    "GPU cluster": 13412,
    "Workspace usage": 9932,
  },
  {
    date: "Sep 10",
    "GPU cluster": 13649,
    "Workspace usage": 10139,
  },
  {
    date: "Sep 11",
    "GPU cluster": 13748,
    "Workspace usage": 10441,
  },
  {
    date: "Sep 12",
    "GPU cluster": 13148,
    "Workspace usage": 10933,
  },
  {
    date: "Sep 13",
    "GPU cluster": 12839,
    "Workspace usage": 10073,
  },
  {
    date: "Sep 14",
    "GPU cluster": 12428,
    "Workspace usage": 10128,
  },
  {
    date: "Sep 15",
    "GPU cluster": 12012,
    "Workspace usage": 10412,
  },
  {
    date: "Sep 16",
    "GPU cluster": 11801,
    "Workspace usage": 9501,
  },
  {
    date: "Sep 17",
    "GPU cluster": 10102,
    "Workspace usage": 7923,
  },
  {
    date: "Sep 18",
    "GPU cluster": 12132,
    "Workspace usage": 10212,
  },
  {
    date: "Sep 19",
    "GPU cluster": 12901,
    "Workspace usage": 10101,
  },
  {
    date: "Sep 20",
    "GPU cluster": 13132,
    "Workspace usage": 10132,
  },
  {
    date: "Sep 21",
    "GPU cluster": 14132,
    "Workspace usage": 10212,
  },
  {
    date: "Sep 22",
    "GPU cluster": 14245,
    "Workspace usage": 12163,
  },
  {
    date: "Sep 23",
    "GPU cluster": 14328,
    "Workspace usage": 10036,
  },
  {
    date: "Sep 24",
    "GPU cluster": 14949,
    "Workspace usage": 8985,
  },
  {
    date: "Sep 25",
    "GPU cluster": 15967,
    "Workspace usage": 9700,
  },
  {
    date: "Sep 26",
    "GPU cluster": 17349,
    "Workspace usage": 10943,
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

const valueFormatter = (number: number) =>
  `$${Intl.NumberFormat("us").format(number).toString()}`

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="flex flex-col gap-x-6 gap-y-5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <div>
          <h3 className="text-base font-semibold text-gray-900 dark:text-gray-50">
            Enterprise
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
            User ID:{` `}
            <span className="font-medium text-gray-900 dark:text-gray-50">
              admin_dfQ7s
            </span>
          </p>
        </div>
        <div className="mt-4 flex items-center gap-4 gap-y-2 sm:mt-0 sm:gap-x-8">
          {summary.map((item, index) => (
            <React.Fragment key={item.name}>
              <div>
                <p className="text-sm whitespace-nowrap text-gray-500 dark:text-gray-500">
                  {item.name}
                </p>
                {item.name === "Last invoice" ? (
                  <a
                    className="mt-1 inline-flex items-center gap-1 text-sm font-semibold whitespace-nowrap text-blue-500 hover:underline hover:underline-offset-4 dark:text-blue-500"
                    href="#"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-gray-50">
                    {item.value}
                  </p>
                )}
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
      <div className="flex items-center gap-3">
        <Badge variant="success" className="!rounded-full">
          Active
        </Badge>
        <span
          className="h-6 w-px bg-gray-200 dark:bg-gray-800"
          aria-hidden="true"
        />
        <span className="text-sm text-gray-500 dark:text-gray-500">
          Sept 24 period
        </span>
        <span
          className="hidden h-6 w-px bg-gray-200 sm:block dark:bg-gray-800"
          aria-hidden="true"
        />
        <span className="hidden text-sm text-gray-500 sm:block dark:text-gray-500">
          Started Sep 1, 2024 (billed on the 28th)
        </span>
      </div>
      <BarChart
        data={data}
        index="date"
        categories={["GPU cluster", "Workspace usage"]}
        type="stacked"
        valueFormatter={valueFormatter}
        showLegend={false}
        showYAxis={false}
        className="mt-10 hidden sm:block"
      />
      <BarChart
        data={data}
        index="date"
        categories={["GPU cluster", "Workspace usage"]}
        type="stacked"
        valueFormatter={valueFormatter}
        showLegend={false}
        showYAxis={false}
        className="mt-10 sm:hidden"
      />
    </div>
  )
}
```


```example/chart-compositions-chart-composition-06.tsx
"use client"

import React from "react"
import {
  RiGithubFill,
  RiGoogleFill,
  RiRedditFill,
  RiTwitterFill,
  RiYoutubeFill,
} from "@remixicon/react"

import { AreaChart } from "@/atom/AreaChart"
import { BarList } from "@/atom/BarList"
import { Card } from "@/atom/Card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/atom/Tabs"

const data = [
  //array-start
  {
    date: "Aug 01",
    "Page views": 7100,
    "Unique visitors": 4434,
  },
  {
    date: "Aug 02",
    "Page views": 10943,
    "Unique visitors": 6954,
  },
  {
    date: "Aug 03",
    "Page views": 10889,
    "Unique visitors": 7100,
  },
  {
    date: "Aug 04",
    "Page views": 10909,
    "Unique visitors": 7909,
  },
  {
    date: "Aug 05",
    "Page views": 10778,
    "Unique visitors": 7103,
  },
  {
    date: "Aug 06",
    "Page views": 10900,
    "Unique visitors": 7534,
  },
  {
    date: "Aug 07",
    "Page views": 10129,
    "Unique visitors": 7412,
  },
  {
    date: "Aug 08",
    "Page views": 10021,
    "Unique visitors": 7834,
  },
  {
    date: "Aug 09",
    "Page views": 10279,
    "Unique visitors": 7159,
  },
  {
    date: "Aug 10",
    "Page views": 10224,
    "Unique visitors": 8260,
  },
  {
    date: "Aug 11",
    "Page views": 10380,
    "Unique visitors": 4965,
  },
  {
    date: "Aug 12",
    "Page views": 10414,
    "Unique visitors": 4989,
  },
  {
    date: "Aug 13",
    "Page views": 6540,
    "Unique visitors": 4839,
  },
  {
    date: "Aug 14",
    "Page views": 6634,
    "Unique visitors": 4343,
  },
  {
    date: "Aug 15",
    "Page views": 7124,
    "Unique visitors": 4903,
  },
  {
    date: "Aug 16",
    "Page views": 7934,
    "Unique visitors": 5273,
  },
  {
    date: "Aug 17",
    "Page views": 10287,
    "Unique visitors": 6900,
  },
  {
    date: "Aug 18",
    "Page views": 10323,
    "Unique visitors": 6732,
  },
  {
    date: "Aug 19",
    "Page views": 10511,
    "Unique visitors": 6523,
  },
  {
    date: "Aug 20",
    "Page views": 11043,
    "Unique visitors": 7422,
  },
  {
    date: "Aug 21",
    "Page views": 6700,
    "Unique visitors": 4334,
  },
  {
    date: "Aug 22",
    "Page views": 6900,
    "Unique visitors": 4943,
  },
  {
    date: "Aug 23",
    "Page views": 7934,
    "Unique visitors": 7812,
  },
  {
    date: "Aug 24",
    "Page views": 9021,
    "Unique visitors": 7729,
  },
  {
    date: "Aug 25",
    "Page views": 9198,
    "Unique visitors": 7178,
  },
  {
    date: "Aug 26",
    "Page views": 9557,
    "Unique visitors": 7158,
  },
  {
    date: "Aug 27",
    "Page views": 9959,
    "Unique visitors": 7100,
  },
  {
    date: "Aug 28",
    "Page views": 10034,
    "Unique visitors": 7934,
  },
  {
    date: "Aug 29",
    "Page views": 10243,
    "Unique visitors": 7223,
  },
  {
    date: "Aug 30",
    "Page views": 10078,
    "Unique visitors": 8779,
  },
  {
    date: "Aug 31",
    "Page views": 11134,
    "Unique visitors": 8190,
  },
  {
    date: "Sep 01",
    "Page views": 12347,
    "Unique visitors": 4839,
  },
  {
    date: "Sep 02",
    "Page views": 12593,
    "Unique visitors": 5153,
  },
  {
    date: "Sep 03",
    "Page views": 12043,
    "Unique visitors": 5234,
  },
  {
    date: "Sep 04",
    "Page views": 12144,
    "Unique visitors": 5478,
  },
  {
    date: "Sep 05",
    "Page views": 12489,
    "Unique visitors": 5741,
  },
  {
    date: "Sep 06",
    "Page views": 12748,
    "Unique visitors": 6743,
  },
  {
    date: "Sep 07",
    "Page views": 12933,
    "Unique visitors": 7832,
  },
  {
    date: "Sep 08",
    "Page views": 13028,
    "Unique visitors": 8943,
  },
  {
    date: "Sep 09",
    "Page views": 13412,
    "Unique visitors": 9932,
  },
  {
    date: "Sep 10",
    "Page views": 13649,
    "Unique visitors": 10139,
  },
  {
    date: "Sep 11",
    "Page views": 13748,
    "Unique visitors": 10441,
  },
  {
    date: "Sep 12",
    "Page views": 13148,
    "Unique visitors": 10933,
  },
  {
    date: "Sep 13",
    "Page views": 12839,
    "Unique visitors": 10073,
  },
  {
    date: "Sep 14",
    "Page views": 12428,
    "Unique visitors": 10128,
  },
  {
    date: "Sep 15",
    "Page views": 12012,
    "Unique visitors": 10412,
  },
  {
    date: "Sep 16",
    "Page views": 11801,
    "Unique visitors": 9501,
  },
  {
    date: "Sep 17",
    "Page views": 10102,
    "Unique visitors": 7923,
  },
  {
    date: "Sep 18",
    "Page views": 12132,
    "Unique visitors": 10212,
  },
  {
    date: "Sep 19",
    "Page views": 12901,
    "Unique visitors": 10101,
  },
  {
    date: "Sep 20",
    "Page views": 13132,
    "Unique visitors": 10132,
  },
  {
    date: "Sep 21",
    "Page views": 14132,
    "Unique visitors": 10212,
  },
  {
    date: "Sep 22",
    "Page views": 14245,
    "Unique visitors": 12163,
  },
  {
    date: "Sep 23",
    "Page views": 14328,
    "Unique visitors": 10036,
  },
  {
    date: "Sep 24",
    "Page views": 14949,
    "Unique visitors": 8985,
  },
  {
    date: "Sep 25",
    "Page views": 15967,
    "Unique visitors": 9700,
  },
  {
    date: "Sep 26",
    "Page views": 17349,
    "Unique visitors": 10943,
  },
  //array-end
]

const topPages = [
  { name: "/", value: 20874 },
  { name: "/components", value: 19188 },
  { name: "/docs/getting-started/installation", value: 17922 },
  { name: "/docs/visualizations/area-chart", value: 10067 },
  { name: "/docs/visualizations/bar-chart", value: 9067 },
]

const topSources = [
  { name: "google.com", value: 9882, icon: RiGoogleFill },
  { name: "twitter.com", value: 1904, icon: RiTwitterFill },
  { name: "github.com", value: 1904, icon: RiGithubFill },
  { name: "youtube.com", value: 1118, icon: RiYoutubeFill },
  { name: "reddit.com", value: 396, icon: RiRedditFill },
]

const topPagesViews = [
  { name: "/components", value: 60874 },
  { name: "/", value: 51188 },
  { name: "/docs/getting-started/installation", value: 38922 },
  { name: "/docs/visualizations/area-chart", value: 20067 },
  { name: "/docs/visualizations/bar-chart", value: 19067 },
]

const topSourcesViews = [
  { name: "google.com", value: 12892, icon: RiGoogleFill },
  { name: "twitter.com", value: 2070, icon: RiTwitterFill },
  { name: "github.com", value: 1296, icon: RiGithubFill },
  { name: "youtube.com", value: 779, icon: RiYoutubeFill },
  { name: "reddit.com", value: 438, icon: RiRedditFill },
]

const summary = [
  {
    name: "Unique visitors",
    type: "Visitors",
    value: "216.8K",
    categories: [
      { name: "Top pages", data: topPages },
      { name: "Top sources", data: topSources },
    ],
  },
  {
    name: "Page views",
    type: "Views",
    value: "271K",
    categories: [
      { name: "Top pages", data: topPagesViews },
      { name: "Top sources", data: topSourcesViews },
    ],
  },
]

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`

export default function Example() {
  return (
    <div className="obfuscate">
      <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
        Web analytics
      </h1>
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
        Analyze and understand your web traffic.
      </p>
      <Tabs defaultValue={summary[0].name}>
        <Card className="mt-8 overflow-hidden !p-0">
          <TabsList
            defaultValue="tab1"
            className="!h-24 !bg-gray-50 dark:!bg-[#090E1A]"
          >
            {summary.map((tab, index) => (
              <React.Fragment key={tab.name}>
                <TabsTrigger
                  value={tab.name}
                  className="!py-4 !pr-12 !pl-5 text-left data-[state=active]:bg-white dark:data-[state=active]:bg-[#090E1A]"
                >
                  <span className="block font-normal text-gray-500 dark:text-gray-500">
                    {tab.name}
                  </span>
                  <span className="mt-1 block text-3xl font-semibold text-gray-900 dark:text-gray-50">
                    {tab.value}
                  </span>
                </TabsTrigger>
                {index < summary.length - 1 && (
                  <span
                    className="h-full border-r border-gray-200 dark:border-gray-800"
                    aria-hidden={true}
                  />
                )}
              </React.Fragment>
            ))}
          </TabsList>
          {summary.map((tab) => (
            <TabsContent key={tab.name} value={tab.name}>
              <div className="p-6">
                <AreaChart
                  data={data}
                  index="date"
                  categories={[tab.name]}
                  valueFormatter={valueFormatter}
                  fill="solid"
                  showLegend={false}
                  yAxisWidth={45}
                  className="hidden !h-96 sm:block"
                />
                <AreaChart
                  data={data}
                  index="date"
                  categories={[tab.name]}
                  valueFormatter={valueFormatter}
                  fill="solid"
                  showLegend={false}
                  showYAxis={false}
                  startEndOnly={true}
                  className="!h-72 sm:hidden"
                />
              </div>
              <div className="mt-8 grid grid-cols-1 gap-8 p-6 sm:grid-cols-2">
                {tab.categories.map((category) => (
                  <Card key={category.name}>
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
                        {category.name}
                      </p>
                      <span className="text-sm text-gray-500 dark:text-gray-500">
                        {tab.type}
                      </span>
                    </div>
                    <BarList
                      data={category.data}
                      valueFormatter={valueFormatter}
                      className="mt-4"
                    />
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Card>
      </Tabs>
    </div>
  )
}
```


```example/chart-compositions-chart-composition-12.tsx
"use client"

import { RiInformationFill } from "@remixicon/react"

import { AreaChart } from "@/atom/AreaChart"
import { Card } from "@/atom/Card"
import { SelectNative } from "@/atom/SelectNative"
import { Tooltip } from "@/atom/Tooltip"

const data = [
  //array-start
  {
    date: "Day 1",
    "Avg. response time": 6.5,
    "Total incident length": 31,
    MTTR: 45,
    MTTA: 50,
  },
  {
    date: "Day 2",
    "Avg. response time": 7,
    "Total incident length": 45,
    MTTR: 58,
    MTTA: 65,
  },
  {
    date: "Day 3",
    "Avg. response time": 9,
    "Total incident length": 53,
    MTTR: 65,
    MTTA: 73,
  },
  {
    date: "Day 4",
    "Avg. response time": 12,
    "Total incident length": 130,
    MTTR: 100,
    MTTA: 90,
  },
  {
    date: "Day 5",
    "Avg. response time": 22,
    "Total incident length": 105,
    MTTR: 95,
    MTTA: 88,
  },
  {
    date: "Day 6",
    "Avg. response time": 14,
    "Total incident length": 145,
    MTTR: 120,
    MTTA: 100,
  },
  {
    date: "Day 7",
    "Avg. response time": 35,
    "Total incident length": 120,
    MTTR: 110,
    MTTA: 85,
  },
  {
    date: "Day 8",
    "Avg. response time": 11,
    "Total incident length": 140,
    MTTR: 125,
    MTTA: 98,
  },
  {
    date: "Day 9",
    "Avg. response time": 10,
    "Total incident length": 115,
    MTTR: 98,
    MTTA: 88,
  },
  {
    date: "Day 10",
    "Avg. response time": 13,
    "Total incident length": 150,
    MTTR: 118,
    MTTA: 110,
  },
  {
    date: "Day 11",
    "Avg. response time": 13,
    "Total incident length": 140,
    MTTR: 123,
    MTTA: 100,
  },
  {
    date: "Day 12",
    "Avg. response time": 11,
    "Total incident length": 135,
    MTTR: 110,
    MTTA: 98,
  },
  {
    date: "Day 13",
    "Avg. response time": 15,
    "Total incident length": 170,
    MTTR: 130,
    MTTA: 115,
  },
  {
    date: "Day 14",
    "Avg. response time": 12,
    "Total incident length": 135,
    MTTR: 115,
    MTTA: 105,
  },
  {
    date: "Day 15",
    "Avg. response time": 10.5,
    "Total incident length": 130,
    MTTR: 110,
    MTTA: 95,
  },
  {
    date: "Day 16",
    "Avg. response time": 45,
    "Total incident length": 165,
    MTTR: 125,
    MTTA: 115,
  },
  {
    date: "Day 17",
    "Avg. response time": 35,
    "Total incident length": 150,
    MTTR: 120,
    MTTA: 100,
  },
  {
    date: "Day 18",
    "Avg. response time": 10,
    "Total incident length": 140,
    MTTR: 112,
    MTTA: 105,
  },
  {
    date: "Day 19",
    "Avg. response time": 25,
    "Total incident length": 135,
    MTTR: 115,
    MTTA: 110,
  },
  {
    date: "Day 20",
    "Avg. response time": 55,
    "Total incident length": 160,
    MTTR: 140,
    MTTA: 125,
  },
  {
    date: "Day 21",
    "Avg. response time": 61,
    "Total incident length": 180,
    MTTR: 150,
    MTTA: 130,
  },
  {
    date: "Day 22",
    "Avg. response time": 45,
    "Total incident length": 155,
    MTTR: 135,
    MTTA: 120,
  },
  {
    date: "Day 23",
    "Avg. response time": 50,
    "Total incident length": 170,
    MTTR: 140,
    MTTA: 125,
  },
  {
    date: "Day 24",
    "Avg. response time": 15,
    "Total incident length": 140,
    MTTR: 118,
    MTTA: 105,
  },
  {
    date: "Day 25",
    "Avg. response time": 40,
    "Total incident length": 160,
    MTTR: 130,
    MTTA: 120,
  },
  //array-end
]

const stats = [
  //array-start
  {
    name: "Avg. response time",
    description: "Speed at which the server can respond",
    value: "34s",
  },
  {
    name: "Total incident length",
    description:
      "Total duration from when an incident starts to when it is fully resolved",
    value: "1min 31s",
  },
  {
    name: "MTTA",
    description:
      "Avg. time it takes to acknowledge or respond to an incident after it's been detected",
    value: "3min 29s",
  },
  {
    name: "MTTR",
    description:
      "Avg. time it takes to resolve an issue after it has been reported",
    value: "5min 21s",
  },
  //array-end
]

const selectOptions = [
  //array-start
  {
    id: "region",
    label: "Region",
    defaultValue: "europe",
    width: "32",
    options: [
      { value: "north-america", label: "North America" },
      { value: "europe", label: "Europe" },
      { value: "asia", label: "Asia" },
      { value: "australia", label: "Australia" },
    ],
  },
  {
    id: "integration",
    label: "Integrations",
    defaultValue: "all",
    width: "28",
    options: [
      { value: "all", label: "All" },
      { value: "azure-monitor", label: "Azure Monitor" },
      { value: "splunk", label: "Splunk" },
      { value: "dynatrace", label: "Dynatrace" },
    ],
  },
  {
    id: "acknowledger",
    label: "Acknowledged by",
    defaultValue: "emily-smith",
    width: "40",
    options: [
      { value: "all", label: "All" },
      { value: "emily-smith", label: "Emily Smith" },
      { value: "mike-kingstone", label: "Mike Kingstone" },
      { value: "simon-dumentis", label: "Simon Dumentis" },
    ],
  },
  {
    id: "escalator",
    label: "Resolved by",
    width: "40",
    options: [
      { value: "michael-bridge", label: "Michael Bridge" },
      { value: "emma-stone", label: "Emma Stone" },
      { value: "max-mcbeccel", label: "Max McBeccel" },
      { value: "lena-goldriver", label: "Lena Goldriver" },
    ],
  },
  {
    id: "escalation-policy",
    label: "Escalation policy",
    defaultValue: "hierarchical",
    width: "32",
    options: [
      { value: "all", label: "All" },
      { value: "hierarchical", label: "Hierarchical Escalation" },
      { value: "functional", label: "Functional Escalation" },
      { value: "time-based", label: "Time-based Escalation" },
    ],
  },
  {
    id: "cause",
    label: "Cause",
    defaultValue: "404-not-found",
    width: "40",
    options: [
      { value: "all", label: "All" },
      { value: "502-bad-gateway", label: "502 Bad Gateway" },
      { value: "404-not-found", label: "404 Not Found" },
      { value: "400-bad-request", label: "400 Bad Request" },
    ],
  },
  //array-end
]

const valueFormatter = (seconds: number) => {
  if (seconds < 60) {
    return `${seconds.toFixed(1)}s`
  } else {
    const minutes = (seconds / 60).toFixed(1)
    return `${minutes}min`
  }
}

export default function Example() {
  return (
    <div className="obfuscate">
      <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-50">
        Overview
      </h1>
      <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
        Get insights into your incidents
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        {selectOptions.map(({ id, label, defaultValue, width, options }) => (
          <span key={id} className="inline-flex items-center shadow-sm">
            <label
              htmlFor={id}
              className="flex h-[38px] items-center rounded-l-md border border-gray-300 bg-gray-50 px-2.5 text-base whitespace-nowrap text-gray-900 select-none sm:h-[34px] sm:text-sm dark:border-gray-800 dark:bg-gray-900 dark:text-gray-50"
            >
              {label}
            </label>
            <SelectNative
              name={id}
              id={id}
              defaultValue={defaultValue}
              className={`-ml-px !w-${width} rounded-none rounded-r-md !py-1.5 !shadow-none`}
            >
              {options.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </SelectNative>
          </span>
        ))}
      </div>
      <Card className="mt-6 overflow-hidden !p-0">
        <div className="p-6">
          <AreaChart
            data={data}
            index="date"
            categories={[
              "Avg. response time",
              "Total incident length",
              "MTTR",
              "MTTA",
            ]}
            colors={["purple", "blue", "cyan", "emerald"]}
            fill="solid"
            valueFormatter={valueFormatter}
            onValueChange={() => {}}
            yAxisWidth={55}
            maxValue={400}
            tickGap={15}
            className="hidden sm:block"
          />
          <AreaChart
            data={data}
            index="date"
            categories={[
              "Avg. response time",
              "Total incident length",
              "MTTR",
              "MTTA",
            ]}
            colors={["purple", "blue", "cyan", "emerald"]}
            fill="solid"
            valueFormatter={valueFormatter}
            onValueChange={() => {}}
            showYAxis={false}
            tickGap={15}
            className="sm:hidden"
          />
        </div>
        <dl className="mx-auto grid grid-cols-1 gap-px border-t border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-4 dark:border-gray-900 dark:bg-gray-900">
          {stats.map((item) => (
            <div
              key={item.name}
              className="bg-white px-4 py-6 sm:px-6 xl:px-8 dark:bg-[#090E1A]"
            >
              <dd className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-50">
                {item.value}
              </dd>
              <dt className="mt-1 flex items-center gap-2">
                <span className="text-sm/6 text-gray-500 sm:text-gray-500">
                  {item.name}
                </span>
                <Tooltip content={item.description}>
                  <RiInformationFill
                    className="size-4 shrink-0 text-gray-400 dark:text-gray-600"
                    aria-hidden="true"
                  />
                </Tooltip>
              </dt>
            </div>
          ))}
        </dl>
      </Card>
    </div>
  )
}
```


```example/chart-compositions-chart-composition-13.tsx
"use client"

import { cx } from "@/lib/utils"

import { AreaChart } from "@/atom/AreaChart"
import { Card } from "@/atom/Card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/atom/Tabs"

const data = [
  //array-start
  {
    date: "Day 1",
    "Avg. response time": 6.5,
    "Total incident length": 31,
    MTTR: 45,
    MTTA: 50,
  },
  {
    date: "Day 2",
    "Avg. response time": 7,
    "Total incident length": 45,
    MTTR: 58,
    MTTA: 65,
  },
  {
    date: "Day 3",
    "Avg. response time": 9,
    "Total incident length": 53,
    MTTR: 65,
    MTTA: 73,
  },
  {
    date: "Day 4",
    "Avg. response time": 12,
    "Total incident length": 130,
    MTTR: 100,
    MTTA: 90,
  },
  {
    date: "Day 5",
    "Avg. response time": 22,
    "Total incident length": 105,
    MTTR: 95,
    MTTA: 88,
  },
  {
    date: "Day 6",
    "Avg. response time": 14,
    "Total incident length": 145,
    MTTR: 120,
    MTTA: 100,
  },
  {
    date: "Day 7",
    "Avg. response time": 35,
    "Total incident length": 120,
    MTTR: 110,
    MTTA: 85,
  },
  {
    date: "Day 8",
    "Avg. response time": 11,
    "Total incident length": 140,
    MTTR: 125,
    MTTA: 98,
  },
  {
    date: "Day 9",
    "Avg. response time": 10,
    "Total incident length": 115,
    MTTR: 98,
    MTTA: 88,
  },
  {
    date: "Day 10",
    "Avg. response time": 13,
    "Total incident length": 150,
    MTTR: 118,
    MTTA: 110,
  },
  {
    date: "Day 11",
    "Avg. response time": 13,
    "Total incident length": 140,
    MTTR: 123,
    MTTA: 100,
  },
  {
    date: "Day 12",
    "Avg. response time": 11,
    "Total incident length": 135,
    MTTR: 110,
    MTTA: 98,
  },
  {
    date: "Day 13",
    "Avg. response time": 15,
    "Total incident length": 170,
    MTTR: 130,
    MTTA: 115,
  },
  {
    date: "Day 14",
    "Avg. response time": 12,
    "Total incident length": 135,
    MTTR: 115,
    MTTA: 105,
  },
  {
    date: "Day 15",
    "Avg. response time": 10.5,
    "Total incident length": 130,
    MTTR: 110,
    MTTA: 95,
  },
  {
    date: "Day 16",
    "Avg. response time": 45,
    "Total incident length": 165,
    MTTR: 125,
    MTTA: 115,
  },
  {
    date: "Day 17",
    "Avg. response time": 35,
    "Total incident length": 150,
    MTTR: 120,
    MTTA: 100,
  },
  {
    date: "Day 18",
    "Avg. response time": 10,
    "Total incident length": 140,
    MTTR: 112,
    MTTA: 105,
  },
  {
    date: "Day 19",
    "Avg. response time": 25,
    "Total incident length": 135,
    MTTR: 115,
    MTTA: 110,
  },
  {
    date: "Day 20",
    "Avg. response time": 55,
    "Total incident length": 160,
    MTTR: 140,
    MTTA: 125,
  },
  {
    date: "Day 21",
    "Avg. response time": 61,
    "Total incident length": 180,
    MTTR: 150,
    MTTA: 130,
  },
  {
    date: "Day 22",
    "Avg. response time": 45,
    "Total incident length": 155,
    MTTR: 135,
    MTTA: 120,
  },
  {
    date: "Day 23",
    "Avg. response time": 50,
    "Total incident length": 170,
    MTTR: 140,
    MTTA: 125,
  },
  {
    date: "Day 24",
    "Avg. response time": 15,
    "Total incident length": 140,
    MTTR: 118,
    MTTA: 105,
  },
  {
    date: "Day 25",
    "Avg. response time": 40,
    "Total incident length": 160,
    MTTR: 130,
    MTTA: 120,
  },
  //array-end
]

const stats = [
  //array-start
  {
    name: "Avg. response time",
    value: "34s",
    active: true,
  },
  {
    name: "Total incident length",
    value: "1min 31s",
    active: false,
  },
  {
    name: "MTTA",
    value: "3min 29s",
    active: false,
  },
  {
    name: "MTTR",
    value: "5min 21s",
    active: false,
  },
  //array-end
]

const valueFormatter = (seconds: number) => {
  if (seconds < 60) {
    return `${seconds.toFixed(1)}s`
  } else {
    const minutes = (seconds / 60).toFixed(1)
    return `${minutes}min`
  }
}

export default function Example() {
  return (
    <div className="obfuscate">
      <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-50">
        Reporting
      </h1>
      <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
        Get insights with our advanced AI-powered analytics.
      </p>
      <Card className="mt-6 overflow-hidden !p-0">
        <Tabs defaultValue={stats[0].name}>
          <TabsList className="grid grid-cols-1 !gap-px !bg-gray-200 sm:!grid-cols-2 lg:!grid-cols-4 dark:!bg-gray-900">
            {stats.map((item) => (
              <TabsTrigger
                key={item.name}
                value={item.name}
                className="group flex !w-full !items-center !justify-start gap-4 !border-b !border-gray-200 !bg-white !px-4 !py-3 !text-left hover:!border-gray-200 data-[state=active]:!border-gray-200 sm:!px-6 sm:!py-6 xl:!px-8 dark:!border-gray-900 dark:!bg-[#090E1A] hover:dark:!border-gray-900 data-[state=active]:dark:!border-gray-900"
              >
                <span
                  className={cx(
                    "group-data-[state=active]:block group-data-[state=inactive]:hidden",
                    "h-14 w-[3px] rounded-full bg-blue-500 dark:bg-blue-500",
                  )}
                  aria-hidden="true"
                />
                <div className="group-data-[state=inactive]:pl-[19px]">
                  <dd
                    className={cx(
                      "group-data-[state=active]:text-gray-900 group-data-[state=active]:dark:text-gray-50",
                      "text-2xl font-semibold tracking-tight text-gray-500 transition-all group-hover:text-gray-900 dark:text-gray-500 group-hover:dark:text-gray-50",
                    )}
                  >
                    {item.value}
                  </dd>
                  <dt className="mt-1 flex items-center gap-2">
                    <span
                      className={cx(
                        "group-data-[state=active]:text-gray-500 group-data-[state=active]:dark:text-gray-500",
                        "text-sm/6 font-normal text-gray-400 transition-all group-hover:text-gray-500 dark:text-gray-600 group-hover:dark:text-gray-500",
                      )}
                    >
                      {item.name}
                    </span>
                  </dt>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="p-6">
            {stats.map((item) => (
              <TabsContent key={item.name} value={item.name}>
                <AreaChart
                  data={data}
                  index="date"
                  categories={[item.name]}
                  colors={["blue"]}
                  fill="solid"
                  valueFormatter={valueFormatter}
                  onValueChange={() => {}}
                  yAxisWidth={55}
                  maxValue={400}
                  tickGap={15}
                  className="hidden sm:block"
                />
                <AreaChart
                  data={data}
                  index="date"
                  categories={[item.name]}
                  colors={["blue"]}
                  fill="solid"
                  valueFormatter={valueFormatter}
                  onValueChange={() => {}}
                  showYAxis={false}
                  tickGap={15}
                  className="sm:hidden"
                />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </Card>
    </div>
  )
}
```


```example/chart-compositions-chart-composition-07.tsx
"use client"

import React from "react"
import {
  RiArrowRightUpLine,
  RiFacebookCircleFill,
  RiGithubFill,
  RiGoogleFill,
  RiLinkedinFill,
  RiNpmjsLine,
  RiPagesLine,
  RiRedditFill,
  RiSearchLine,
  RiTwitterFill,
  RiYoutubeFill,
} from "@remixicon/react"

import { AreaChart } from "@/atom/AreaChart"
import { BarList } from "@/atom/BarList"
import { Button } from "@/atom/Button"
import { Card } from "@/atom/Card"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/atom/Dialog"
import { Input } from "@/atom/Input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/atom/Tabs"

const data = [
  //array-start
  {
    date: "Aug 01",
    "Page views": 7100,
    "Unique visitors": 4434,
  },
  {
    date: "Aug 02",
    "Page views": 10943,
    "Unique visitors": 6954,
  },
  {
    date: "Aug 03",
    "Page views": 10889,
    "Unique visitors": 7100,
  },
  {
    date: "Aug 04",
    "Page views": 10909,
    "Unique visitors": 7909,
  },
  {
    date: "Aug 05",
    "Page views": 10778,
    "Unique visitors": 7103,
  },
  {
    date: "Aug 06",
    "Page views": 10900,
    "Unique visitors": 7534,
  },
  {
    date: "Aug 07",
    "Page views": 10129,
    "Unique visitors": 7412,
  },
  {
    date: "Aug 08",
    "Page views": 10021,
    "Unique visitors": 7834,
  },
  {
    date: "Aug 09",
    "Page views": 10279,
    "Unique visitors": 7159,
  },
  {
    date: "Aug 10",
    "Page views": 10224,
    "Unique visitors": 8260,
  },
  {
    date: "Aug 11",
    "Page views": 10380,
    "Unique visitors": 4965,
  },
  {
    date: "Aug 12",
    "Page views": 10414,
    "Unique visitors": 4989,
  },
  {
    date: "Aug 13",
    "Page views": 6540,
    "Unique visitors": 4839,
  },
  {
    date: "Aug 14",
    "Page views": 6634,
    "Unique visitors": 4343,
  },
  {
    date: "Aug 15",
    "Page views": 7124,
    "Unique visitors": 4903,
  },
  {
    date: "Aug 16",
    "Page views": 7934,
    "Unique visitors": 5273,
  },
  {
    date: "Aug 17",
    "Page views": 10287,
    "Unique visitors": 6900,
  },
  {
    date: "Aug 18",
    "Page views": 10323,
    "Unique visitors": 6732,
  },
  {
    date: "Aug 19",
    "Page views": 10511,
    "Unique visitors": 6523,
  },
  {
    date: "Aug 20",
    "Page views": 11043,
    "Unique visitors": 7422,
  },
  {
    date: "Aug 21",
    "Page views": 6700,
    "Unique visitors": 4334,
  },
  {
    date: "Aug 22",
    "Page views": 6900,
    "Unique visitors": 4943,
  },
  {
    date: "Aug 23",
    "Page views": 7934,
    "Unique visitors": 7812,
  },
  {
    date: "Aug 24",
    "Page views": 9021,
    "Unique visitors": 7729,
  },
  {
    date: "Aug 25",
    "Page views": 9198,
    "Unique visitors": 7178,
  },
  {
    date: "Aug 26",
    "Page views": 9557,
    "Unique visitors": 7158,
  },
  {
    date: "Aug 27",
    "Page views": 9959,
    "Unique visitors": 7100,
  },
  {
    date: "Aug 28",
    "Page views": 10034,
    "Unique visitors": 7934,
  },
  {
    date: "Aug 29",
    "Page views": 10243,
    "Unique visitors": 7223,
  },
  {
    date: "Aug 30",
    "Page views": 10078,
    "Unique visitors": 8779,
  },
  {
    date: "Aug 31",
    "Page views": 11134,
    "Unique visitors": 8190,
  },
  {
    date: "Sep 01",
    "Page views": 12347,
    "Unique visitors": 4839,
  },
  {
    date: "Sep 02",
    "Page views": 12593,
    "Unique visitors": 5153,
  },
  {
    date: "Sep 03",
    "Page views": 12043,
    "Unique visitors": 5234,
  },
  {
    date: "Sep 04",
    "Page views": 12144,
    "Unique visitors": 5478,
  },
  {
    date: "Sep 05",
    "Page views": 12489,
    "Unique visitors": 5741,
  },
  {
    date: "Sep 06",
    "Page views": 12748,
    "Unique visitors": 6743,
  },
  {
    date: "Sep 07",
    "Page views": 12933,
    "Unique visitors": 7832,
  },
  {
    date: "Sep 08",
    "Page views": 13028,
    "Unique visitors": 8943,
  },
  {
    date: "Sep 09",
    "Page views": 13412,
    "Unique visitors": 9932,
  },
  {
    date: "Sep 10",
    "Page views": 13649,
    "Unique visitors": 10139,
  },
  {
    date: "Sep 11",
    "Page views": 13748,
    "Unique visitors": 10441,
  },
  {
    date: "Sep 12",
    "Page views": 13148,
    "Unique visitors": 10933,
  },
  {
    date: "Sep 13",
    "Page views": 12839,
    "Unique visitors": 10073,
  },
  {
    date: "Sep 14",
    "Page views": 12428,
    "Unique visitors": 10128,
  },
  {
    date: "Sep 15",
    "Page views": 12012,
    "Unique visitors": 10412,
  },
  {
    date: "Sep 16",
    "Page views": 11801,
    "Unique visitors": 9501,
  },
  {
    date: "Sep 17",
    "Page views": 10102,
    "Unique visitors": 7923,
  },
  {
    date: "Sep 18",
    "Page views": 12132,
    "Unique visitors": 10212,
  },
  {
    date: "Sep 19",
    "Page views": 12901,
    "Unique visitors": 10101,
  },
  {
    date: "Sep 20",
    "Page views": 13132,
    "Unique visitors": 10132,
  },
  {
    date: "Sep 21",
    "Page views": 14132,
    "Unique visitors": 10212,
  },
  {
    date: "Sep 22",
    "Page views": 14245,
    "Unique visitors": 12163,
  },
  {
    date: "Sep 23",
    "Page views": 14328,
    "Unique visitors": 10036,
  },
  {
    date: "Sep 24",
    "Page views": 14949,
    "Unique visitors": 8985,
  },
  {
    date: "Sep 25",
    "Page views": 15967,
    "Unique visitors": 9700,
  },
  {
    date: "Sep 26",
    "Page views": 17349,
    "Unique visitors": 10943,
  },
  //array-end
]

const data1 = [
  //array-start
  {
    name: "/",
    value: 20874,
  },
  {
    name: "/components",
    value: 19188,
  },
  {
    name: "/docs/getting-started/installation",
    value: 17922,
  },
  {
    name: "/docs/visualizations/area-chart",
    value: 10067,
  },
  {
    name: "/docs/visualizations/bar-chart",
    value: 9067,
  },
  {
    name: "/docs/visualizations/line-chart",
    value: 9067,
  },
  {
    name: "/docs/visualizations/donut-chart",
    value: 8066,
  },
  {
    name: "/docs/visualizations/spark-charts",
    value: 6677,
  },
  {
    name: "/docs/visualizations/barlist",
    value: 6604,
  },
  {
    name: "/docs/ui/table",
    value: 6604,
  },
  {
    name: "/docs/ui/button",
    value: 6109,
  },
  {
    name: "/docs/ui/select",
    value: 4237,
  },
  {
    name: "/docs/ui/card",
    value: 1261,
  },
  //array-end
]

const data2 = [
  //array-start
  {
    name: "google.com",
    value: 9882,
    icon: RiGoogleFill,
  },
  {
    name: "twitter.com",
    value: 1904,
    icon: RiTwitterFill,
  },
  {
    name: "github.com",
    value: 1904,
    icon: RiGithubFill,
  },
  {
    name: "youtube.com",
    value: 1118,
    icon: RiYoutubeFill,
  },
  {
    name: "reddit.com",
    value: 396,
    icon: RiRedditFill,
  },
  {
    name: "bing.com",
    value: 302,
    icon: RiSearchLine,
  },
  {
    name: "duckduckgo.com",
    value: 281,
    icon: RiSearchLine,
  },
  {
    name: "npmjs.com",
    value: 98,
    icon: RiNpmjsLine,
  },
  {
    name: "linkedin.com",
    value: 71,
    icon: RiLinkedinFill,
  },
  {
    name: "news.ycombinator.com",
    value: 60,
    icon: RiPagesLine,
  },
  {
    name: "facebook.com",
    value: 51,
    icon: RiFacebookCircleFill,
  },
  //array-end
]

const data3 = [
  //array-start
  {
    name: "/components",
    value: 60874,
  },
  {
    name: "/",
    value: 51188,
  },
  {
    name: "/docs/getting-started/installation",
    value: 38922,
  },
  {
    name: "/docs/visualizations/area-chart",
    value: 20067,
  },
  {
    name: "/docs/visualizations/bar-chart",
    value: 19067,
  },
  {
    name: "/docs/visualizations/line-chart",
    value: 18131,
  },
  {
    name: "/docs/visualizations/donut-chart",
    value: 15107,
  },
  {
    name: "/docs/visualizations/spark-charts",
    value: 13103,
  },
  {
    name: "/docs/visualizations/data-bars",
    value: 9701,
  },
  {
    name: "/docs/visualizations/barlist",
    value: 6502,
  },
  {
    name: "/docs/ui/table",
    value: 6401,
  },
  {
    name: "/docs/ui/card",
    value: 5929,
  },
  {
    name: "/docs/ui/button",
    value: 5710,
  },
  {
    name: "/docs/ui/select",
    value: 4109,
  },
  //array-end
]

const data4 = [
  //array-start
  {
    name: "google.com",
    value: 12892,
    icon: RiGoogleFill,
  },
  {
    name: "twitter.com",
    value: 2070,
    icon: RiTwitterFill,
  },
  {
    name: "github.com",
    value: 1296,
    icon: RiGithubFill,
  },
  {
    name: "youtube.com",
    value: 779,
    icon: RiYoutubeFill,
  },
  {
    name: "reddit.com",
    value: 621,
    icon: RiRedditFill,
  },
  {
    name: "bing.com",
    value: 573,
    icon: RiSearchLine,
  },
  {
    name: "duckduckgo.com",
    value: 381,
    icon: RiSearchLine,
  },
  {
    name: "npmjs.com",
    value: 302,
    icon: RiNpmjsLine,
  },
  {
    name: "linkedin.com",
    value: 199,
    icon: RiLinkedinFill,
  },
  {
    name: "news.ycombinator.com",
    value: 181,
    icon: RiPagesLine,
  },
  {
    name: "facebook.com",
    value: 170,
    icon: RiFacebookCircleFill,
  },
  //array-end
]

const summary = [
  {
    name: "Unique visitors",
    type: "Visitors",
    value: "216.8K",
    categories: [
      {
        name: "Top pages",
        data: data1,
      },
      {
        name: "Top sources",
        data: data2,
      },
    ],
  },
  {
    name: "Page views",
    type: "Views",
    value: "271K",
    categories: [
      {
        name: "Top pages",
        data: data3,
      },
      {
        name: "Top sources",
        data: data4,
      },
    ],
  },
]

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`

function useResizeObserver(
  elementRef: React.RefObject<Element>,
): ResizeObserverEntry | undefined {
  const [entry, setEntry] = React.useState<ResizeObserverEntry>()

  const updateEntry = ([entry]: ResizeObserverEntry[]): void => {
    setEntry(entry)
  }

  React.useEffect(() => {
    const node = elementRef?.current
    if (!node) return

    const observer = new ResizeObserver(updateEntry)

    observer.observe(node)

    return () => observer.disconnect()
  }, [elementRef])

  return entry
}

const FilterScroll = React.forwardRef(
  ({ children }: React.PropsWithChildren, forwardedRef) => {
    const ref = React.useRef<HTMLDivElement>(null)
    React.useImperativeHandle(forwardedRef, () => ref.current)

    const [scrollProgress, setScrollProgress] = React.useState(1)

    const updateScrollProgress = React.useCallback(() => {
      if (!ref.current) return
      const { scrollTop, scrollHeight, clientHeight } = ref.current

      setScrollProgress(
        scrollHeight === clientHeight
          ? 1
          : scrollTop / (scrollHeight - clientHeight),
      )
    }, [])

    const resizeObserverEntry = useResizeObserver(ref)

    React.useEffect(updateScrollProgress, [resizeObserverEntry])

    return (
      <>
        <div
          className="h-96 overflow-y-scroll py-4"
          ref={ref}
          onScroll={updateScrollProgress}
        >
          {children}
        </div>

        <div
          className="pointer-events-none absolute bottom-0 left-0 h-16 w-full bg-gradient-to-t from-white"
          style={{ opacity: 1 - Math.pow(scrollProgress, 2) }}
        />
      </>
    )
  },
)

export default function Example() {
  const [selectedIndex, setSelectedIndex] = React.useState("Unique visitors")

  const handleIndexChange = (index: string) => {
    setSelectedIndex(index)
  }

  const [dialog, setDialog] = React.useState({
    open: false,
    index: 0,
  })
  const [searchQuery, setSearchQuery] = React.useState("")

  const filteredItems =
    summary
      .find((tab) => tab.name === selectedIndex)
      ?.categories[
        dialog.index
      ].data.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
    []

  const mainListContainer = React.useRef<HTMLDivElement>(null)

  return (
    <div className="obfuscate">
      <h3 className="text-lg text-gray-900 dark:text-gray-50">Web analytics</h3>
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
        Analyze and understand your web traffic.
      </p>
      <Tabs value={selectedIndex} onValueChange={handleIndexChange}>
        <Card className="mt-8 overflow-hidden !p-0">
          <TabsList
            defaultValue="tab1"
            className="!h-24 !bg-gray-50 dark:!bg-[#090E1A]"
          >
            {summary.map((tab) => (
              <React.Fragment key={tab.name}>
                <TabsTrigger
                  value={tab.name}
                  className="!py-4 !pr-12 !pl-5 text-left data-[state=active]:bg-white dark:data-[state=active]:bg-[#090E1A]"
                >
                  <span className="block font-normal text-gray-500 dark:text-gray-500">
                    {tab.name}
                  </span>
                  <span className="mt-1 block text-3xl font-semibold text-gray-900 dark:text-gray-50">
                    {tab.value}
                  </span>
                </TabsTrigger>
                <span
                  className="h-full border-r border-gray-200 dark:border-gray-800"
                  aria-hidden={true}
                />
              </React.Fragment>
            ))}
          </TabsList>
          <div className="mt-4">
            {summary.map((tab) => (
              <TabsContent value={tab.name} key={tab.name} className="p-6">
                <>
                  <AreaChart
                    data={data}
                    index="date"
                    categories={[tab.name]}
                    valueFormatter={valueFormatter}
                    showLegend={false}
                    yAxisWidth={45}
                    fill="solid"
                    className="hidden !h-96 sm:block"
                  />
                  <AreaChart
                    data={data}
                    index="date"
                    categories={[tab.name]}
                    valueFormatter={valueFormatter}
                    showLegend={false}
                    showYAxis={false}
                    startEndOnly={true}
                    fill="solid"
                    className="!h-72 sm:hidden"
                  />
                </>
              </TabsContent>
            ))}
          </div>
        </Card>
      </Tabs>

      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
        {summary
          .find((tab) => tab.name === selectedIndex)
          ?.categories.map((category, index) => (
            <Card key={category.name}>
              <div className="flex items-center justify-between">
                <p className="text-lg font-medium text-gray-900 dark:text-gray-50">
                  {category.name}
                </p>
                <span className="text-xs font-medium text-gray-500 uppercase dark:text-gray-500">
                  {summary.find((tab) => tab.name === selectedIndex)?.type}
                </span>
              </div>
              <BarList
                data={category.data.slice(0, 5)}
                valueFormatter={valueFormatter}
                className="mt-4"
              />
              <div className="absolute inset-x-0 bottom-0 flex justify-center rounded-b-lg bg-gradient-to-t from-white to-transparent py-7 dark:from-gray-950">
                <Button
                  variant="secondary"
                  className="!gap-1.5 !rounded-full !px-2.5 !py-1.5 !text-xs"
                  onClick={() =>
                    setDialog({
                      open: true,
                      index: index,
                    })
                  }
                >
                  Show more
                  <RiArrowRightUpLine
                    className="-mr-px size-4 shrink-0"
                    aria-hidden={true}
                  />
                </Button>
              </div>
            </Card>
          ))}
      </div>

      <Dialog
        open={dialog.open}
        onOpenChange={(open) => setDialog({ ...dialog, open })}
      >
        <DialogContent className="!p-0">
          <DialogHeader className="border-b border-gray-200 px-6 pt-6 pb-4 dark:border-gray-900">
            <DialogTitle className="flex items-center justify-between">
              <p className="text-base font-medium text-gray-900 dark:text-gray-50">
                Pages
              </p>
              <p className="text-xs font-medium text-gray-500 uppercase dark:text-gray-500">
                {summary.find((tab) => tab.name === selectedIndex)?.type}
              </p>
            </DialogTitle>
            <Input
              type="search"
              placeholder="Search page..."
              className="mt-2"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
          </DialogHeader>
          {/* only left padding used in parent to align scrollbar all the way to the right */}
          <div className="relative pl-6">
            <FilterScroll ref={mainListContainer}>
              {filteredItems.length > 0 ? (
                <BarList
                  data={filteredItems}
                  valueFormatter={valueFormatter}
                  className="pr-6"
                />
              ) : (
                <p className="flex h-full items-center justify-center text-sm text-gray-900 dark:text-gray-50">
                  No results.
                </p>
              )}
            </FilterScroll>
          </div>
          <DialogFooter className="border-t border-gray-200 bg-gray-50 px-6 py-6 dark:border-gray-900 dark:bg-[#090E1A]">
            <DialogClose asChild>
              <Button
                onClick={() => setSearchQuery("")}
                className="w-full"
                variant="secondary"
              >
                Go back
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
```


```example/chart-compositions-chart-composition-11.tsx
"use client"

// Install: @radix-ui/react-toggle-group
import React from "react"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import {
  RiPauseLargeLine,
  RiSendPlane2Line,
  RiSettings3Line,
  RiShieldLine,
} from "@remixicon/react"

import { cx, focusRing } from "@/lib/utils"

import { AreaChart } from "@/atom/AreaChart"
import { Button } from "@/atom/Button"
import { Card } from "@/atom/Card"
import { Divider } from "@/atom/Divider"
import { Label } from "@/atom/Label"
import { SelectNative } from "@/atom/SelectNative"

const data = [
  //array-start
  {
    date: "01:29am",
    "Name lookup": 710,
    Connection: 605,
    "TLS handshake": 300,
    "Data transfer": 200,
  },
  {
    date: "01:42am",
    "Name lookup": 794,
    Connection: 601,
    "TLS handshake": 310,
    "Data transfer": 220,
  },
  {
    date: "02:22am",
    "Name lookup": 1088,
    Connection: 592,
    "TLS handshake": 290,
    "Data transfer": 210,
  },
  {
    date: "03:34am",
    "Name lookup": 1209,
    Connection: 543,
    "TLS handshake": 250,
    "Data transfer": 130,
  },
  {
    date: "03:51am",
    "Name lookup": 3571,
    Connection: 2090,
    "TLS handshake": 1512,
    "Data transfer": 1054,
  },
  {
    date: "04:01am",
    "Name lookup": 1090,
    Connection: 890,
    "TLS handshake": 300,
    "Data transfer": 180,
  },
  {
    date: "04:23am",
    "Name lookup": 129,
    Connection: 605,
    "TLS handshake": 320,
    "Data transfer": 210,
  },
  {
    date: "04:41am",
    "Name lookup": 100,
    Connection: 210,
    "TLS handshake": 180,
    "Data transfer": 90,
  },
  {
    date: "04:47am",
    "Name lookup": 102,
    Connection: 392,
    "TLS handshake": 150,
    "Data transfer": 110,
  },
  {
    date: "05:01am",
    "Name lookup": 102,
    Connection: 432,
    "TLS handshake": 160,
    "Data transfer": 100,
  },
  {
    date: "05:08am",
    "Name lookup": 103,
    Connection: 423,
    "TLS handshake": 150,
    "Data transfer": 105,
  },
  {
    date: "05:18am",
    "Name lookup": 104,
    Connection: 530,
    "TLS handshake": 180,
    "Data transfer": 140,
  },
  {
    date: "06:03am",
    "Name lookup": 354,
    Connection: 484,
    "TLS handshake": 270,
    "Data transfer": 150,
  },
  {
    date: "07:09am",
    "Name lookup": 463,
    Connection: 631,
    "TLS handshake": 310,
    "Data transfer": 220,
  },
  {
    date: "07:09am",
    "Name lookup": 412,
    Connection: 541,
    "TLS handshake": 290,
    "Data transfer": 200,
  },
  {
    date: "08:21am",
    "Name lookup": 693,
    Connection: 873,
    "TLS handshake": 400,
    "Data transfer": 300,
  },
  {
    date: "08:39am",
    "Name lookup": 192,
    Connection: 294,
    "TLS handshake": 160,
    "Data transfer": 90,
  },
  {
    date: "09:03am",
    "Name lookup": 293,
    Connection: 912,
    "TLS handshake": 340,
    "Data transfer": 250,
  },
  {
    date: "09:19am",
    "Name lookup": 105,
    Connection: 430,
    "TLS handshake": 170,
    "Data transfer": 120,
  },
  {
    date: "10:22am",
    "Name lookup": 110,
    Connection: 731,
    "TLS handshake": 280,
    "Data transfer": 190,
  },
  {
    date: "10:29am",
    "Name lookup": 670,
    Connection: 539,
    "TLS handshake": 290,
    "Data transfer": 210,
  },
  {
    date: "10:34am",
    "Name lookup": 690,
    Connection: 605,
    "TLS handshake": 300,
    "Data transfer": 220,
  },
  {
    date: "10:36am",
    "Name lookup": 793,
    Connection: 1023,
    "TLS handshake": 410,
    "Data transfer": 320,
  },
  {
    date: "11:46am",
    "Name lookup": 902,
    Connection: 605,
    "TLS handshake": 320,
    "Data transfer": 240,
  },
  {
    date: "11:49am",
    "Name lookup": 919,
    Connection: 392,
    "TLS handshake": 270,
    "Data transfer": 180,
  },
  {
    date: "11:50am",
    "Name lookup": 955,
    Connection: 539,
    "TLS handshake": 300,
    "Data transfer": 210,
  },
  {
    date: "11:55am",
    "Name lookup": 995,
    Connection: 293,
    "TLS handshake": 160,
    "Data transfer": 120,
  },
  {
    date: "12:05pm",
    "Name lookup": 872,
    Connection: 520,
    "TLS handshake": 290,
    "Data transfer": 230,
  },
  {
    date: "12:19pm",
    "Name lookup": 101,
    Connection: 418,
    "TLS handshake": 190,
    "Data transfer": 160,
  },
  {
    date: "12:21pm",
    "Name lookup": 657,
    Connection: 912,
    "TLS handshake": 340,
    "Data transfer": 270,
  },
  {
    date: "12:31pm",
    "Name lookup": 732,
    Connection: 640,
    "TLS handshake": 300,
    "Data transfer": 200,
  },
  {
    date: "12:41pm",
    "Name lookup": 895,
    Connection: 509,
    "TLS handshake": 280,
    "Data transfer": 210,
  },
  {
    date: "01:13pm",
    "Name lookup": 993,
    Connection: 701,
    "TLS handshake": 320,
    "Data transfer": 250,
  },
  {
    date: "01:34pm",
    "Name lookup": 1189,
    Connection: 760,
    "TLS handshake": 390,
    "Data transfer": 290,
  },
  {
    date: "01:56pm",
    "Name lookup": 1390,
    Connection: 831,
    "TLS handshake": 420,
    "Data transfer": 320,
  },
  {
    date: "02:12pm",
    "Name lookup": 1375,
    Connection: 713,
    "TLS handshake": 410,
    "Data transfer": 310,
  },
  {
    date: "02:33pm",
    "Name lookup": 960,
    Connection: 481,
    "TLS handshake": 270,
    "Data transfer": 230,
  },
  {
    date: "02:56pm",
    "Name lookup": 1120,
    Connection: 510,
    "TLS handshake": 290,
    "Data transfer": 240,
  },
  {
    date: "03:14pm",
    "Name lookup": 1210,
    Connection: 654,
    "TLS handshake": 350,
    "Data transfer": 260,
  },
  {
    date: "03:31pm",
    "Name lookup": 1185,
    Connection: 700,
    "TLS handshake": 360,
    "Data transfer": 280,
  },
  {
    date: "03:55pm",
    "Name lookup": 1290,
    Connection: 820,
    "TLS handshake": 400,
    "Data transfer": 300,
  },
  //array-end
]

const summary = [
  {
    name: "Currently up for",
    value: "10 months 12 days",
  },
  {
    name: "Last checked at",
    value: "2 minutes ago",
  },
  {
    name: "Incidents",
    value: "0",
  },
]

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cx(
      "inline-flex h-[38px] divide-x divide-gray-300 rounded-md border border-gray-300 bg-white shadow-sm sm:h-[34px] dark:divide-gray-800 dark:border-gray-800",
      className,
    )}
    {...props}
  >
    {children}
  </ToggleGroupPrimitive.Root>
))

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item>
>(({ className, children, ...props }, ref) => {
  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cx(
        "flex items-center justify-center border-gray-300 bg-gray-100 px-2.5 py-1 text-base text-gray-700 transition-colors first:rounded-l-[5px] last:rounded-r-[5px] hover:bg-gray-50 focus:z-10 sm:text-sm dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-900",
        "data-[state=on]:text-semibold data-[state=on]:bg-white data-[state=on]:text-gray-950 dark:data-[state=on]:bg-gray-800 dark:data-[state=on]:text-gray-50",
        focusRing,
        // disabled
        "disabled:pointer-events-none disabled:text-gray-400 dark:disabled:text-gray-600",
        className,
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  )
})

const valueFormatter = (milliseconds: number) => {
  if (milliseconds < 1000) {
    return `${milliseconds}ms`
  } else {
    const seconds = (milliseconds / 1000).toFixed(1)
    return `${seconds}s`
  }
}

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="flex items-center gap-3">
        <span
          className="shrink-0 animate-pulse rounded-full bg-emerald-600/30 p-1"
          aria-hidden={true}
        >
          <span className="block size-2 rounded-full bg-emerald-600 dark:bg-emerald-600" />
        </span>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
          tremor.so
        </h1>
      </div>
      <div className="mt-2 flex items-center gap-2">
        <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
          Up
        </span>
        <span className="size-1 shrink-0 rounded-full bg-gray-500" />
        <span className="text-sm text-gray-500 dark:text-gray-500">
          Checking every 3 minutes
        </span>
      </div>
      <div className="mt-10 flex flex-wrap items-center gap-1">
        <Button
          variant="ghost"
          className="!text-gray-500 dark:!text-gray-500"
          asChild
        >
          <a href="#" className="flex items-center gap-2">
            <RiSendPlane2Line className="size-5 shrink-0" aria-hidden="true" />
            Send test alert
          </a>
        </Button>
        <Button
          variant="ghost"
          disabled={true}
          className="!text-gray-500 dark:!text-gray-500"
        >
          <a href="#" className="flex items-center gap-2">
            <RiShieldLine className="size-5 shrink-0" aria-hidden="true" />
            Incidents
          </a>
        </Button>
        <Button
          variant="ghost"
          className="!text-gray-500 dark:!text-gray-500"
          asChild
        >
          <a href="#" className="flex items-center gap-2">
            <RiPauseLargeLine className="size-5 shrink-0" aria-hidden="true" />
            Pause
          </a>
        </Button>
        <Button
          variant="ghost"
          className="!text-gray-500 dark:!text-gray-500"
          asChild
        >
          <a href="#" className="flex items-center gap-2">
            <RiSettings3Line className="size-5 shrink-0" aria-hidden="true" />
            Configure
          </a>
        </Button>
      </div>
      <dl className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {summary.map((item) => (
          <Card key={item.value}>
            <dt className="text-sm text-gray-500 dark:text-gray-500">
              {item.name}
            </dt>
            <dd className="mt-2 text-lg font-semibold text-gray-900 dark:text-gray-50">
              {item.value}
            </dd>
          </Card>
        ))}
      </dl>
      <Card className="mt-6 !p-0">
        <div className="px-6 py-3">
          <h1 className="text-base font-medium text-gray-900 dark:text-gray-50">
            Response times
          </h1>
        </div>
        <Divider className="!my-0 [&>div]:dark:!bg-gray-900" />
        <div className="rounded-b-lg px-6 pt-6 pb-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <Label htmlFor="region" className="sr-only">
                Select region
              </Label>
              <SelectNative
                name="region"
                id="region"
                defaultValue="europe"
                className="!w-full !py-1.5 sm:!w-fit"
              >
                <option value="north-america">North America</option>
                <option value="europe">Europe</option>
                <option value="asia">Asia</option>
                <option value="australia">Australia</option>
              </SelectNative>
            </div>
            <ToggleGroup
              type="single"
              defaultValue="day"
              aria-label="Time period selection"
              className="w-full sm:w-fit"
            >
              <ToggleGroupItem className="w-full" value="day" aria-label="Day">
                Day
              </ToggleGroupItem>
              <ToggleGroupItem
                className="w-full"
                value="week"
                aria-label="Week"
              >
                Week
              </ToggleGroupItem>
              <ToggleGroupItem
                className="w-full"
                value="month"
                aria-label="Month"
              >
                Month
              </ToggleGroupItem>
              <ToggleGroupItem
                disabled
                className="w-full"
                value="year"
                aria-label="Year"
              >
                Year
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          <AreaChart
            data={data}
            index="date"
            categories={[
              "Name lookup",
              "Connection",
              "TLS handshake",
              "Data transfer",
            ]}
            colors={["purple", "blue", "cyan", "emerald"]}
            fill="solid"
            valueFormatter={valueFormatter}
            onValueChange={() => {}}
            yAxisWidth={45}
            maxValue={4000}
            tickGap={15}
            className="mt-6 hidden sm:block"
          />
          <AreaChart
            data={data}
            index="date"
            categories={[
              "Name lookup",
              "Connection",
              "TLS handshake",
              "Data transfer",
            ]}
            colors={["purple", "blue", "cyan", "emerald"]}
            fill="solid"
            valueFormatter={valueFormatter}
            onValueChange={() => {}}
            showYAxis={false}
            tickGap={15}
            startEndOnly={true}
            className="mt-6 sm:hidden"
          />
        </div>
      </Card>
    </div>
  )
}
```


```example/chart-compositions-chart-composition-05.tsx
"use client"

import React from "react"

import { AreaChart } from "@/atom/AreaChart"
import { Card } from "@/atom/Card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/atom/Select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/atom/Tabs"

const data = [
  //array-start
  {
    date: "Aug 01",
    "Page views": 7100,
    "Unique visitors": 4434,
  },
  {
    date: "Aug 02",
    "Page views": 10943,
    "Unique visitors": 6954,
  },
  {
    date: "Aug 03",
    "Page views": 10889,
    "Unique visitors": 7100,
  },
  {
    date: "Aug 04",
    "Page views": 10909,
    "Unique visitors": 7909,
  },
  {
    date: "Aug 05",
    "Page views": 10778,
    "Unique visitors": 7103,
  },
  {
    date: "Aug 06",
    "Page views": 10900,
    "Unique visitors": 7534,
  },
  {
    date: "Aug 07",
    "Page views": 10129,
    "Unique visitors": 7412,
  },
  {
    date: "Aug 08",
    "Page views": 10021,
    "Unique visitors": 7834,
  },
  {
    date: "Aug 09",
    "Page views": 10279,
    "Unique visitors": 7159,
  },
  {
    date: "Aug 10",
    "Page views": 10224,
    "Unique visitors": 8260,
  },
  {
    date: "Aug 11",
    "Page views": 10380,
    "Unique visitors": 4965,
  },
  {
    date: "Aug 12",
    "Page views": 10414,
    "Unique visitors": 4989,
  },
  {
    date: "Aug 13",
    "Page views": 6540,
    "Unique visitors": 4839,
  },
  {
    date: "Aug 14",
    "Page views": 6634,
    "Unique visitors": 4343,
  },
  {
    date: "Aug 15",
    "Page views": 7124,
    "Unique visitors": 4903,
  },
  {
    date: "Aug 16",
    "Page views": 7934,
    "Unique visitors": 5273,
  },
  {
    date: "Aug 17",
    "Page views": 10287,
    "Unique visitors": 6900,
  },
  {
    date: "Aug 18",
    "Page views": 10323,
    "Unique visitors": 6732,
  },
  {
    date: "Aug 19",
    "Page views": 10511,
    "Unique visitors": 6523,
  },
  {
    date: "Aug 20",
    "Page views": 11043,
    "Unique visitors": 7422,
  },
  {
    date: "Aug 21",
    "Page views": 6700,
    "Unique visitors": 4334,
  },
  {
    date: "Aug 22",
    "Page views": 6900,
    "Unique visitors": 4943,
  },
  {
    date: "Aug 23",
    "Page views": 7934,
    "Unique visitors": 7812,
  },
  {
    date: "Aug 24",
    "Page views": 9021,
    "Unique visitors": 7729,
  },
  {
    date: "Aug 25",
    "Page views": 9198,
    "Unique visitors": 7178,
  },
  {
    date: "Aug 26",
    "Page views": 9557,
    "Unique visitors": 7158,
  },
  {
    date: "Aug 27",
    "Page views": 9959,
    "Unique visitors": 7100,
  },
  {
    date: "Aug 28",
    "Page views": 10034,
    "Unique visitors": 7934,
  },
  {
    date: "Aug 29",
    "Page views": 10243,
    "Unique visitors": 7223,
  },
  {
    date: "Aug 30",
    "Page views": 10078,
    "Unique visitors": 8779,
  },
  {
    date: "Aug 31",
    "Page views": 11134,
    "Unique visitors": 8190,
  },
  {
    date: "Sep 01",
    "Page views": 12347,
    "Unique visitors": 4839,
  },
  {
    date: "Sep 02",
    "Page views": 12593,
    "Unique visitors": 5153,
  },
  {
    date: "Sep 03",
    "Page views": 12043,
    "Unique visitors": 5234,
  },
  {
    date: "Sep 04",
    "Page views": 12144,
    "Unique visitors": 5478,
  },
  {
    date: "Sep 05",
    "Page views": 12489,
    "Unique visitors": 5741,
  },
  {
    date: "Sep 06",
    "Page views": 12748,
    "Unique visitors": 6743,
  },
  {
    date: "Sep 07",
    "Page views": 12933,
    "Unique visitors": 7832,
  },
  {
    date: "Sep 08",
    "Page views": 13028,
    "Unique visitors": 8943,
  },
  {
    date: "Sep 09",
    "Page views": 13412,
    "Unique visitors": 9932,
  },
  {
    date: "Sep 10",
    "Page views": 13649,
    "Unique visitors": 10139,
  },
  {
    date: "Sep 11",
    "Page views": 13748,
    "Unique visitors": 10441,
  },
  {
    date: "Sep 12",
    "Page views": 13148,
    "Unique visitors": 10933,
  },
  {
    date: "Sep 13",
    "Page views": 12839,
    "Unique visitors": 10073,
  },
  {
    date: "Sep 14",
    "Page views": 12428,
    "Unique visitors": 10128,
  },
  {
    date: "Sep 15",
    "Page views": 12012,
    "Unique visitors": 10412,
  },
  {
    date: "Sep 16",
    "Page views": 11801,
    "Unique visitors": 9501,
  },
  {
    date: "Sep 17",
    "Page views": 10102,
    "Unique visitors": 7923,
  },
  {
    date: "Sep 18",
    "Page views": 12132,
    "Unique visitors": 10212,
  },
  {
    date: "Sep 19",
    "Page views": 12901,
    "Unique visitors": 10101,
  },
  {
    date: "Sep 20",
    "Page views": 13132,
    "Unique visitors": 10132,
  },
  {
    date: "Sep 21",
    "Page views": 14132,
    "Unique visitors": 10212,
  },
  {
    date: "Sep 22",
    "Page views": 14245,
    "Unique visitors": 12163,
  },
  {
    date: "Sep 23",
    "Page views": 14328,
    "Unique visitors": 10036,
  },
  {
    date: "Sep 24",
    "Page views": 14949,
    "Unique visitors": 8985,
  },
  {
    date: "Sep 25",
    "Page views": 15967,
    "Unique visitors": 9700,
  },
  {
    date: "Sep 26",
    "Page views": 17349,
    "Unique visitors": 10943,
  },
  //array-end
]

const summary = [
  //array-start
  {
    name: "Unique visitors",
    value: "216.8K",
  },
  {
    name: "Page views",
    value: "271K",
  },
  //array-end
]

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`

export default function Example() {
  return (
    <div className="obfuscate">
      <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
        Web analytics
      </h1>
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
        Analyze and understand your web traffic.
      </p>
      <div className="mt-6 md:flex md:items-center md:justify-between">
        <div className="flex items-center space-x-3">
          <span className="text-sm font-medium text-gray-900 dark:text-gray-50">
            www.example.com
          </span>
          <span className="h-6 w-px bg-gray-200 dark:bg-gray-800" />
          <span className="flex items-center space-x-2">
            <span
              className="shrink-0 animate-pulse rounded-full bg-emerald-500/30 p-1"
              aria-hidden={true}
            >
              <span className="block size-2 rounded-full bg-emerald-500 dark:bg-emerald-500" />
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-500">
              89 online
            </span>
          </span>
        </div>
        <div className="mt-2 sm:flex sm:items-center sm:space-x-2 md:mt-0">
          <Select defaultValue="Production">
            <SelectTrigger className="w-full md:w-fit">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent align="end">
              <SelectItem value="Production">Production</SelectItem>
              <SelectItem value="Preview">Preview</SelectItem>
              <SelectItem value="All">All environments</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="2">
            <SelectTrigger className="mt-2 w-full sm:mt-0 md:w-fit">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent align="end">
              <SelectItem value="1">Last 7 days</SelectItem>
              <SelectItem value="2">Last 30 days</SelectItem>
              <SelectItem value="3">Last 3 months</SelectItem>
              <SelectItem value="4">Last 12 months</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Card className="mt-4 !overflow-hidden !p-0">
        <Tabs defaultValue={summary[0].name}>
          <TabsList
            defaultValue="tab1"
            className="!h-24 !bg-gray-50 dark:!bg-[#090E1A]"
          >
            {summary.map((tab) => (
              <React.Fragment key={tab.name}>
                <TabsTrigger
                  value={tab.name}
                  className="!py-4 !pr-12 !pl-5 text-left data-[state=active]:bg-white dark:data-[state=active]:bg-[#090E1A]"
                >
                  <span className="block font-normal text-gray-500 dark:text-gray-500">
                    {tab.name}
                  </span>
                  <span className="mt-1 block text-3xl font-semibold text-gray-900 dark:text-gray-50">
                    {tab.value}
                  </span>
                </TabsTrigger>
                <span
                  className="h-full border-r border-gray-200 dark:border-gray-800"
                  aria-hidden={true}
                />
              </React.Fragment>
            ))}
          </TabsList>
          {summary.map((tab) => (
            <TabsContent key={tab.name} value={tab.name} className="p-6">
              <AreaChart
                data={data}
                index="date"
                categories={[tab.name]}
                valueFormatter={valueFormatter}
                fill="solid"
                showLegend={false}
                yAxisWidth={45}
                className="hidden !h-96 sm:block"
              />
              <AreaChart
                data={data}
                index="date"
                categories={[tab.name]}
                valueFormatter={valueFormatter}
                fill="solid"
                showLegend={false}
                showYAxis={false}
                startEndOnly={true}
                className="!h-72 sm:hidden"
              />
            </TabsContent>
          ))}
        </Tabs>
      </Card>
    </div>
  )
}
```


```example/chart-compositions-chart-composition-04.tsx
"use client"

import React from "react"

import { AreaChart } from "@/atom/AreaChart"
import { Card } from "@/atom/Card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/atom/Tabs"

const data = [
  //array-start
  {
    date: "Aug 01",
    "Page views": 7100,
    "Unique visitors": 4434,
  },
  {
    date: "Aug 02",
    "Page views": 10943,
    "Unique visitors": 6954,
  },
  {
    date: "Aug 03",
    "Page views": 10889,
    "Unique visitors": 7100,
  },
  {
    date: "Aug 04",
    "Page views": 10909,
    "Unique visitors": 7909,
  },
  {
    date: "Aug 05",
    "Page views": 10778,
    "Unique visitors": 7103,
  },
  {
    date: "Aug 06",
    "Page views": 10900,
    "Unique visitors": 7534,
  },
  {
    date: "Aug 07",
    "Page views": 10129,
    "Unique visitors": 7412,
  },
  {
    date: "Aug 08",
    "Page views": 10021,
    "Unique visitors": 7834,
  },
  {
    date: "Aug 09",
    "Page views": 10279,
    "Unique visitors": 7159,
  },
  {
    date: "Aug 10",
    "Page views": 10224,
    "Unique visitors": 8260,
  },
  {
    date: "Aug 11",
    "Page views": 10380,
    "Unique visitors": 4965,
  },
  {
    date: "Aug 12",
    "Page views": 10414,
    "Unique visitors": 4989,
  },
  {
    date: "Aug 13",
    "Page views": 6540,
    "Unique visitors": 4839,
  },
  {
    date: "Aug 14",
    "Page views": 6634,
    "Unique visitors": 4343,
  },
  {
    date: "Aug 15",
    "Page views": 7124,
    "Unique visitors": 4903,
  },
  {
    date: "Aug 16",
    "Page views": 7934,
    "Unique visitors": 5273,
  },
  {
    date: "Aug 17",
    "Page views": 10287,
    "Unique visitors": 6900,
  },
  {
    date: "Aug 18",
    "Page views": 10323,
    "Unique visitors": 6732,
  },
  {
    date: "Aug 19",
    "Page views": 10511,
    "Unique visitors": 6523,
  },
  {
    date: "Aug 20",
    "Page views": 11043,
    "Unique visitors": 7422,
  },
  {
    date: "Aug 21",
    "Page views": 6700,
    "Unique visitors": 4334,
  },
  {
    date: "Aug 22",
    "Page views": 6900,
    "Unique visitors": 4943,
  },
  {
    date: "Aug 23",
    "Page views": 7934,
    "Unique visitors": 7812,
  },
  {
    date: "Aug 24",
    "Page views": 9021,
    "Unique visitors": 7729,
  },
  {
    date: "Aug 25",
    "Page views": 9198,
    "Unique visitors": 7178,
  },
  {
    date: "Aug 26",
    "Page views": 9557,
    "Unique visitors": 7158,
  },
  {
    date: "Aug 27",
    "Page views": 9959,
    "Unique visitors": 7100,
  },
  {
    date: "Aug 28",
    "Page views": 10034,
    "Unique visitors": 7934,
  },
  {
    date: "Aug 29",
    "Page views": 10243,
    "Unique visitors": 7223,
  },
  {
    date: "Aug 30",
    "Page views": 10078,
    "Unique visitors": 8779,
  },
  {
    date: "Aug 31",
    "Page views": 11134,
    "Unique visitors": 8190,
  },
  {
    date: "Sep 01",
    "Page views": 12347,
    "Unique visitors": 4839,
  },
  {
    date: "Sep 02",
    "Page views": 12593,
    "Unique visitors": 5153,
  },
  {
    date: "Sep 03",
    "Page views": 12043,
    "Unique visitors": 5234,
  },
  {
    date: "Sep 04",
    "Page views": 12144,
    "Unique visitors": 5478,
  },
  {
    date: "Sep 05",
    "Page views": 12489,
    "Unique visitors": 5741,
  },
  {
    date: "Sep 06",
    "Page views": 12748,
    "Unique visitors": 6743,
  },
  {
    date: "Sep 07",
    "Page views": 12933,
    "Unique visitors": 7832,
  },
  {
    date: "Sep 08",
    "Page views": 13028,
    "Unique visitors": 8943,
  },
  {
    date: "Sep 09",
    "Page views": 13412,
    "Unique visitors": 9932,
  },
  {
    date: "Sep 10",
    "Page views": 13649,
    "Unique visitors": 10139,
  },
  {
    date: "Sep 11",
    "Page views": 13748,
    "Unique visitors": 10441,
  },
  {
    date: "Sep 12",
    "Page views": 13148,
    "Unique visitors": 10933,
  },
  {
    date: "Sep 13",
    "Page views": 12839,
    "Unique visitors": 10073,
  },
  {
    date: "Sep 14",
    "Page views": 12428,
    "Unique visitors": 10128,
  },
  {
    date: "Sep 15",
    "Page views": 12012,
    "Unique visitors": 10412,
  },
  {
    date: "Sep 16",
    "Page views": 11801,
    "Unique visitors": 9501,
  },
  {
    date: "Sep 17",
    "Page views": 10102,
    "Unique visitors": 7923,
  },
  {
    date: "Sep 18",
    "Page views": 12132,
    "Unique visitors": 10212,
  },
  {
    date: "Sep 19",
    "Page views": 12901,
    "Unique visitors": 10101,
  },
  {
    date: "Sep 20",
    "Page views": 13132,
    "Unique visitors": 10132,
  },
  {
    date: "Sep 21",
    "Page views": 14132,
    "Unique visitors": 10212,
  },
  {
    date: "Sep 22",
    "Page views": 14245,
    "Unique visitors": 12163,
  },
  {
    date: "Sep 23",
    "Page views": 14328,
    "Unique visitors": 10036,
  },
  {
    date: "Sep 24",
    "Page views": 14949,
    "Unique visitors": 8985,
  },
  {
    date: "Sep 25",
    "Page views": 15967,
    "Unique visitors": 9700,
  },
  {
    date: "Sep 26",
    "Page views": 17349,
    "Unique visitors": 10943,
  },
  //array-end
]

const summary = [
  //array-start
  {
    name: "Unique visitors",
    value: "216.8K",
  },
  {
    name: "Page views",
    value: "271K",
  },
  //array-end
]

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`

export default function Example() {
  return (
    <div className="obfuscate">
      <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
        Web analytics
      </h1>
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
        Analyze and understand your web traffic.
      </p>
      <Card className="mt-8 overflow-hidden !p-0">
        <Tabs defaultValue={summary[0].name}>
          <TabsList
            defaultValue="tab1"
            className="!h-24 !bg-gray-50 dark:!bg-[#090E1A]"
          >
            {summary.map((tab) => (
              <React.Fragment key={tab.name}>
                <TabsTrigger
                  value={tab.name}
                  className="!py-4 !pr-12 !pl-5 text-left data-[state=active]:bg-white dark:data-[state=active]:bg-[#090E1A]"
                >
                  <span className="block font-normal text-gray-500 dark:text-gray-500">
                    {tab.name}
                  </span>
                  <span className="mt-1 block text-3xl font-semibold text-gray-900 dark:text-gray-50">
                    {tab.value}
                  </span>
                </TabsTrigger>
                <span
                  className="h-full border-r border-gray-200 dark:border-gray-800"
                  aria-hidden={true}
                />
              </React.Fragment>
            ))}
          </TabsList>
          {summary.map((tab) => (
            <TabsContent key={tab.name} value={tab.name} className="p-6">
              <AreaChart
                data={data}
                index="date"
                categories={[tab.name]}
                valueFormatter={valueFormatter}
                fill="solid"
                showLegend={false}
                yAxisWidth={50}
                className="hidden !h-96 sm:block"
              />
              <AreaChart
                data={data}
                index="date"
                categories={[tab.name]}
                valueFormatter={valueFormatter}
                fill="solid"
                showLegend={false}
                showYAxis={false}
                startEndOnly={true}
                className="!h-72 sm:hidden"
              />
            </TabsContent>
          ))}
        </Tabs>
      </Card>
    </div>
  )
}
```


```example/chart-compositions-chart-composition-10.tsx
"use client"

import React from "react"
import {
  RiArrowDownSLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from "@remixicon/react"

import { cx } from "@/lib/utils"

import { Badge } from "@/atom/Badge"
import { BarChart } from "@/atom/BarChart"
import { Divider } from "@/atom/Divider"

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
                <p className="text-sm whitespace-nowrap text-gray-500 dark:text-gray-500">
                  {item.name}
                </p>

                <p className="mt-1 text-sm font-semibold whitespace-nowrap text-gray-900 dark:text-gray-50">
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
              <span className="block w-full text-sm font-medium whitespace-nowrap text-gray-900 tabular-nums dark:text-gray-50">
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
```


```example/chart-compositions-chart-composition-14.tsx
"use client"

import { RiMoreLine } from "@remixicon/react"

import { AreaChart } from "@/atom/AreaChart"
import { Button } from "@/atom/Button"
import { Card } from "@/atom/Card"
import { CategoryBar } from "@/atom/CategoryBar"
import { Divider } from "@/atom/Divider"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/atom/DropdownMenu"

// used custom gray in installChartUtils.ts for <CategoryBar />

// lightGray: {
//   bg: 'bg-gray-300 dark:bg-gray-700',
//   stroke: 'stroke-gray-300 dark:stroke-gray-700',
//   fill: 'fill-gray-300 dark:fill-gray-700',
//   text: 'text-gray-300 dark:text-gray-700',
// },

const data = [
  //array-start
  {
    date: "01:29am",
    "Name lookup": 710,
    Connection: 605,
    "TLS handshake": 300,
    "Data transfer": 200,
  },
  {
    date: "01:42am",
    "Name lookup": 794,
    Connection: 601,
    "TLS handshake": 310,
    "Data transfer": 220,
  },
  {
    date: "02:22am",
    "Name lookup": 1088,
    Connection: 592,
    "TLS handshake": 290,
    "Data transfer": 210,
  },
  {
    date: "03:34am",
    "Name lookup": 1209,
    Connection: 543,
    "TLS handshake": 250,
    "Data transfer": 130,
  },
  {
    date: "03:51am",
    "Name lookup": 3571,
    Connection: 2090,
    "TLS handshake": 1512,
    "Data transfer": 1054,
  },
  {
    date: "04:01am",
    "Name lookup": 1090,
    Connection: 890,
    "TLS handshake": 300,
    "Data transfer": 180,
  },
  {
    date: "04:23am",
    "Name lookup": 129,
    Connection: 605,
    "TLS handshake": 320,
    "Data transfer": 210,
  },
  {
    date: "04:41am",
    "Name lookup": 100,
    Connection: 210,
    "TLS handshake": 180,
    "Data transfer": 90,
  },
  {
    date: "04:47am",
    "Name lookup": 102,
    Connection: 392,
    "TLS handshake": 150,
    "Data transfer": 110,
  },
  {
    date: "05:01am",
    "Name lookup": 102,
    Connection: 432,
    "TLS handshake": 160,
    "Data transfer": 100,
  },
  {
    date: "05:08am",
    "Name lookup": 103,
    Connection: 423,
    "TLS handshake": 150,
    "Data transfer": 105,
  },
  {
    date: "05:18am",
    "Name lookup": 104,
    Connection: 530,
    "TLS handshake": 180,
    "Data transfer": 140,
  },
  {
    date: "06:03am",
    "Name lookup": 354,
    Connection: 484,
    "TLS handshake": 270,
    "Data transfer": 150,
  },
  {
    date: "07:09am",
    "Name lookup": 463,
    Connection: 631,
    "TLS handshake": 310,
    "Data transfer": 220,
  },
  {
    date: "07:09am",
    "Name lookup": 412,
    Connection: 541,
    "TLS handshake": 290,
    "Data transfer": 200,
  },
  {
    date: "08:21am",
    "Name lookup": 693,
    Connection: 873,
    "TLS handshake": 400,
    "Data transfer": 300,
  },
  {
    date: "08:39am",
    "Name lookup": 192,
    Connection: 294,
    "TLS handshake": 160,
    "Data transfer": 90,
  },
  {
    date: "09:03am",
    "Name lookup": 293,
    Connection: 912,
    "TLS handshake": 340,
    "Data transfer": 250,
  },
  {
    date: "09:19am",
    "Name lookup": 105,
    Connection: 430,
    "TLS handshake": 170,
    "Data transfer": 120,
  },
  {
    date: "10:22am",
    "Name lookup": 110,
    Connection: 731,
    "TLS handshake": 280,
    "Data transfer": 190,
  },
  {
    date: "10:29am",
    "Name lookup": 670,
    Connection: 539,
    "TLS handshake": 290,
    "Data transfer": 210,
  },
  {
    date: "10:34am",
    "Name lookup": 690,
    Connection: 605,
    "TLS handshake": 300,
    "Data transfer": 220,
  },
  {
    date: "10:36am",
    "Name lookup": 793,
    Connection: 1023,
    "TLS handshake": 410,
    "Data transfer": 320,
  },
  {
    date: "11:46am",
    "Name lookup": 902,
    Connection: 605,
    "TLS handshake": 320,
    "Data transfer": 240,
  },
  {
    date: "11:49am",
    "Name lookup": 919,
    Connection: 392,
    "TLS handshake": 270,
    "Data transfer": 180,
  },
  {
    date: "11:50am",
    "Name lookup": 955,
    Connection: 539,
    "TLS handshake": 300,
    "Data transfer": 210,
  },
  {
    date: "11:55am",
    "Name lookup": 995,
    Connection: 293,
    "TLS handshake": 160,
    "Data transfer": 120,
  },
  {
    date: "12:05pm",
    "Name lookup": 872,
    Connection: 520,
    "TLS handshake": 290,
    "Data transfer": 230,
  },
  {
    date: "12:19pm",
    "Name lookup": 101,
    Connection: 418,
    "TLS handshake": 190,
    "Data transfer": 160,
  },
  {
    date: "12:21pm",
    "Name lookup": 657,
    Connection: 912,
    "TLS handshake": 340,
    "Data transfer": 270,
  },
  {
    date: "12:31pm",
    "Name lookup": 732,
    Connection: 640,
    "TLS handshake": 300,
    "Data transfer": 200,
  },
  {
    date: "12:41pm",
    "Name lookup": 895,
    Connection: 509,
    "TLS handshake": 280,
    "Data transfer": 210,
  },
  {
    date: "01:13pm",
    "Name lookup": 993,
    Connection: 701,
    "TLS handshake": 320,
    "Data transfer": 250,
  },
  {
    date: "01:34pm",
    "Name lookup": 1189,
    Connection: 760,
    "TLS handshake": 390,
    "Data transfer": 290,
  },
  {
    date: "01:56pm",
    "Name lookup": 1390,
    Connection: 831,
    "TLS handshake": 420,
    "Data transfer": 320,
  },
  {
    date: "02:12pm",
    "Name lookup": 1375,
    Connection: 713,
    "TLS handshake": 410,
    "Data transfer": 310,
  },
  {
    date: "02:33pm",
    "Name lookup": 960,
    Connection: 481,
    "TLS handshake": 270,
    "Data transfer": 230,
  },
  {
    date: "02:56pm",
    "Name lookup": 1120,
    Connection: 510,
    "TLS handshake": 290,
    "Data transfer": 240,
  },
  {
    date: "03:14pm",
    "Name lookup": 1210,
    Connection: 654,
    "TLS handshake": 350,
    "Data transfer": 260,
  },
  {
    date: "03:31pm",
    "Name lookup": 1185,
    Connection: 700,
    "TLS handshake": 360,
    "Data transfer": 280,
  },
  {
    date: "03:55pm",
    "Name lookup": 1290,
    Connection: 820,
    "TLS handshake": 400,
    "Data transfer": 300,
  },
  //array-end
]

const valueFormatter = (seconds: number) => {
  if (seconds < 60) {
    return `${seconds.toFixed(1)}s`
  } else {
    const minutes = (seconds / 60).toFixed(1)
    return `${minutes}min`
  }
}

export default function Example() {
  return (
    <div className="obfuscate">
      <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-50">
        Reporting
      </h1>
      <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
        Get insights with our advanced AI-powered analytics.
      </p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Card className="mt-6 overflow-hidden !p-0">
          <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-900 dark:bg-gray-900">
            <h1 className="text-sm font-medium text-gray-900 dark:text-gray-50">
              Uptime summary
            </h1>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary" className="!p-1">
                  <RiMoreLine
                    className="size-5 shrink-0 text-gray-900 dark:text-gray-50"
                    aria-hidden="true"
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="!w-36">
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Refresh</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600 dark:text-red-500">
                  Delete widget
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="p-4">
            <p className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
              90.1%
            </p>
            <p className="text-sm/6 text-gray-500 dark:text-gray-500">
              Avg. uptime in the last month
            </p>
            <CategoryBar
              values={[90.1, 8.2, 1.9]}
              colors={["blue", "red", "lightGray"]}
              showLabels={false}
              className="mt-6"
            />
            <ul role="list" className="mt-6 space-y-3">
              <li className="flex w-full items-center justify-between gap-2">
                <div className="flex w-full items-center gap-2 truncate">
                  <span
                    className="size-2.5 shrink-0 rounded-sm bg-blue-500 dark:bg-blue-500"
                    aria-hidden="true"
                  />
                  <span className="truncate text-sm whitespace-nowrap text-gray-500 dark:text-gray-500">
                    Days with 99% uptime
                  </span>
                </div>
                <span className="text-sm font-semibold whitespace-nowrap text-gray-900 dark:text-gray-50">
                  90.1% (225)
                </span>
              </li>
              <li className="flex w-full items-center justify-between gap-2">
                <div className="flex w-full items-center gap-2 truncate">
                  <span
                    className="size-2.5 shrink-0 rounded-sm bg-red-500 dark:bg-red-500"
                    aria-hidden="true"
                  />
                  <span className="truncate text-sm whitespace-nowrap text-gray-500 dark:text-gray-500">
                    Days with 1% downtime
                  </span>
                </div>
                <span className="text-sm font-semibold whitespace-nowrap text-gray-900 dark:text-gray-50">
                  8% (20)
                </span>
              </li>
              <li className="flex w-full items-center justify-between gap-2">
                <div className="flex w-full items-center gap-2 truncate">
                  <span
                    className="size-2.5 shrink-0 rounded-sm bg-gray-400 dark:bg-gray-600"
                    aria-hidden="true"
                  />
                  <span className="truncate text-sm whitespace-nowrap text-gray-500 dark:text-gray-500">
                    Days with 1% downtime
                  </span>
                </div>
                <span className="text-sm font-semibold whitespace-nowrap text-gray-900 dark:text-gray-50">
                  1.9% (5)
                </span>
              </li>
            </ul>
          </div>
        </Card>
        <Card className="mt-6 overflow-hidden !p-0">
          <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-900 dark:bg-gray-900">
            <h1 className="text-sm font-medium text-gray-900 dark:text-gray-50">
              Incident summary
            </h1>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary" className="!p-1">
                  <RiMoreLine
                    className="size-5 shrink-0 text-gray-900 dark:text-gray-50"
                    aria-hidden="true"
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="!w-36">
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Refresh</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600 dark:text-red-500">
                  Delete widget
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="p-4">
            <p className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
              10min 13s
            </p>
            <p className="text-sm/6 text-gray-500 dark:text-gray-500">
              Avg. time to resolve incident (MTTR)
            </p>
            <div className="mt-6">
              <CategoryBar
                values={[95.9, 4.1]}
                colors={["blue", "lightGray"]}
                showLabels={false}
              />
              <p className="mt-6 text-sm font-semibold text-gray-900 dark:text-gray-50">
                Current month
              </p>
              <ul role="list" className="mt-2 space-y-3">
                <li className="flex w-full items-center justify-between gap-2">
                  <div className="flex w-full items-center gap-2 truncate">
                    <span
                      className="size-2.5 shrink-0 rounded-sm bg-blue-500 dark:bg-blue-500"
                      aria-hidden="true"
                    />
                    <span className="truncate text-sm whitespace-nowrap text-gray-500 dark:text-gray-500">
                      % of incidents solved
                    </span>
                  </div>
                  <span className="text-sm font-semibold whitespace-nowrap text-gray-900 dark:text-gray-50">
                    95.9% (100)
                  </span>
                </li>
                <li className="flex w-full items-center justify-between gap-2">
                  <div className="flex w-full items-center gap-2 truncate">
                    <span
                      className="size-2.5 shrink-0 rounded-sm bg-gray-400 dark:bg-gray-600"
                      aria-hidden="true"
                    />
                    <span className="truncate text-sm whitespace-nowrap text-gray-500 dark:text-gray-500">
                      % of incidents unsolved
                    </span>
                  </div>
                  <span className="text-sm font-semibold whitespace-nowrap text-gray-900 dark:text-gray-50">
                    4.1% (4)
                  </span>
                </li>
              </ul>
            </div>
            <Divider />
            <div className="mt-6">
              <CategoryBar
                values={[91.2, 8.8]}
                colors={["blue", "lightGray"]}
                showLabels={false}
              />
              <p className="mt-6 text-sm font-semibold text-gray-900 dark:text-gray-50">
                Previous month
              </p>
              <ul role="list" className="mt-2 space-y-3">
                <li className="flex w-full items-center justify-between gap-2">
                  <div className="flex w-full items-center gap-2 truncate">
                    <span
                      className="size-2.5 shrink-0 rounded-sm bg-blue-500 dark:bg-blue-500"
                      aria-hidden="true"
                    />
                    <span className="truncate text-sm whitespace-nowrap text-gray-500 dark:text-gray-500">
                      % of incidents solved
                    </span>
                  </div>
                  <span className="text-sm font-semibold whitespace-nowrap text-gray-900 dark:text-gray-50">
                    91.2% (95)
                  </span>
                </li>
                <li className="flex w-full items-center justify-between gap-2">
                  <div className="flex w-full items-center gap-2 truncate">
                    <span
                      className="size-2.5 shrink-0 rounded-sm bg-gray-400 dark:bg-gray-600"
                      aria-hidden="true"
                    />
                    <span className="truncate text-sm whitespace-nowrap text-gray-500 dark:text-gray-500">
                      % of incidents unsolved
                    </span>
                  </div>
                  <span className="text-sm font-semibold whitespace-nowrap text-gray-900 dark:text-gray-50">
                    8.8% (10)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
      <Card className="mt-6 overflow-hidden !p-0">
        <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-900 dark:bg-gray-900">
          <h1 className="text-sm font-medium text-gray-900 dark:text-gray-50">
            Log monitoring
          </h1>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" className="!p-1">
                <RiMoreLine
                  className="size-5 shrink-0 text-gray-900 dark:text-gray-50"
                  aria-hidden="true"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="!w-36">
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Refresh</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600 dark:text-red-500">
                Delete widget
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="p-4">
          <AreaChart
            data={data}
            index="date"
            categories={["Name lookup", "Connection"]}
            colors={["blue", "red"]}
            fill="solid"
            valueFormatter={valueFormatter}
            onValueChange={() => {}}
            maxValue={5000}
            yAxisWidth={65}
            tickGap={15}
            className="hidden sm:block"
          />
          <AreaChart
            data={data}
            index="date"
            categories={["Name lookup", "Connection"]}
            colors={["blue", "red"]}
            fill="solid"
            valueFormatter={valueFormatter}
            onValueChange={() => {}}
            showYAxis={false}
            startEndOnly={true}
            tickGap={15}
            className="sm:hidden"
          />
        </div>
      </Card>
    </div>
  )
}
```


```example/chart-compositions-chart-composition-01.tsx
"use client"

import { cx } from "@/lib/utils"

import { LineChart } from "@/atom/LineChart"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from "@/atom/Table"

const data = [
  //array-start
  {
    date: "Aug 01",
    "ETF Shares Vital": 2100.2,
    "Vitainvest Core": 4434.1,
    "iShares Tech Growth": 7943.2,
  },
  {
    date: "Aug 02",
    "ETF Shares Vital": 2943.0,
    "Vitainvest Core": 4954.1,
    "iShares Tech Growth": 8954.1,
  },
  {
    date: "Aug 03",
    "ETF Shares Vital": 4889.5,
    "Vitainvest Core": 6100.2,
    "iShares Tech Growth": 9123.7,
  },
  {
    date: "Aug 04",
    "ETF Shares Vital": 3909.8,
    "Vitainvest Core": 4909.7,
    "iShares Tech Growth": 7478.4,
  },
  {
    date: "Aug 05",
    "ETF Shares Vital": 5778.7,
    "Vitainvest Core": 7103.1,
    "iShares Tech Growth": 9504.3,
  },
  {
    date: "Aug 06",
    "ETF Shares Vital": 5900.9,
    "Vitainvest Core": 7534.3,
    "iShares Tech Growth": 9943.4,
  },
  {
    date: "Aug 07",
    "ETF Shares Vital": 4129.4,
    "Vitainvest Core": 7412.1,
    "iShares Tech Growth": 10112.2,
  },
  {
    date: "Aug 08",
    "ETF Shares Vital": 6021.2,
    "Vitainvest Core": 7834.4,
    "iShares Tech Growth": 10290.2,
  },
  {
    date: "Aug 09",
    "ETF Shares Vital": 6279.8,
    "Vitainvest Core": 8159.1,
    "iShares Tech Growth": 10349.6,
  },
  {
    date: "Aug 10",
    "ETF Shares Vital": 6224.5,
    "Vitainvest Core": 8260.6,
    "iShares Tech Growth": 10415.4,
  },
  {
    date: "Aug 11",
    "ETF Shares Vital": 6380.6,
    "Vitainvest Core": 8965.3,
    "iShares Tech Growth": 10636.3,
  },
  {
    date: "Aug 12",
    "ETF Shares Vital": 6414.4,
    "Vitainvest Core": 7989.3,
    "iShares Tech Growth": 10900.5,
  },
  {
    date: "Aug 13",
    "ETF Shares Vital": 6540.1,
    "Vitainvest Core": 7839.6,
    "iShares Tech Growth": 11040.4,
  },
  {
    date: "Aug 14",
    "ETF Shares Vital": 6634.4,
    "Vitainvest Core": 7343.8,
    "iShares Tech Growth": 11390.5,
  },
  {
    date: "Aug 15",
    "ETF Shares Vital": 7124.6,
    "Vitainvest Core": 6903.7,
    "iShares Tech Growth": 11423.1,
  },
  {
    date: "Aug 16",
    "ETF Shares Vital": 7934.5,
    "Vitainvest Core": 6273.6,
    "iShares Tech Growth": 12134.4,
  },
  {
    date: "Aug 17",
    "ETF Shares Vital": 10287.8,
    "Vitainvest Core": 5900.3,
    "iShares Tech Growth": 12034.4,
  },
  {
    date: "Aug 18",
    "ETF Shares Vital": 10323.2,
    "Vitainvest Core": 5732.1,
    "iShares Tech Growth": 11011.7,
  },
  {
    date: "Aug 19",
    "ETF Shares Vital": 10511.4,
    "Vitainvest Core": 5523.1,
    "iShares Tech Growth": 11834.8,
  },
  {
    date: "Aug 20",
    "ETF Shares Vital": 11043.9,
    "Vitainvest Core": 5422.3,
    "iShares Tech Growth": 12387.1,
  },
  {
    date: "Aug 21",
    "ETF Shares Vital": 6700.7,
    "Vitainvest Core": 5334.2,
    "iShares Tech Growth": 11032.2,
  },
  {
    date: "Aug 22",
    "ETF Shares Vital": 6900.8,
    "Vitainvest Core": 4943.4,
    "iShares Tech Growth": 10134.2,
  },
  {
    date: "Aug 23",
    "ETF Shares Vital": 7934.5,
    "Vitainvest Core": 4812.1,
    "iShares Tech Growth": 9921.2,
  },
  {
    date: "Aug 24",
    "ETF Shares Vital": 9021.0,
    "Vitainvest Core": 2729.1,
    "iShares Tech Growth": 10549.8,
  },
  {
    date: "Aug 25",
    "ETF Shares Vital": 9198.2,
    "Vitainvest Core": 2178.0,
    "iShares Tech Growth": 10968.4,
  },
  {
    date: "Aug 26",
    "ETF Shares Vital": 9557.1,
    "Vitainvest Core": 2158.3,
    "iShares Tech Growth": 11059.1,
  },
  {
    date: "Aug 27",
    "ETF Shares Vital": 9959.8,
    "Vitainvest Core": 2100.8,
    "iShares Tech Growth": 11903.6,
  },
  {
    date: "Aug 28",
    "ETF Shares Vital": 10034.6,
    "Vitainvest Core": 2934.4,
    "iShares Tech Growth": 12143.3,
  },
  {
    date: "Aug 29",
    "ETF Shares Vital": 10243.8,
    "Vitainvest Core": 3223.4,
    "iShares Tech Growth": 12930.1,
  },
  {
    date: "Aug 30",
    "ETF Shares Vital": 10078.5,
    "Vitainvest Core": 3779.1,
    "iShares Tech Growth": 13420.5,
  },
  {
    date: "Aug 31",
    "ETF Shares Vital": 11134.6,
    "Vitainvest Core": 4190.3,
    "iShares Tech Growth": 14443.2,
  },
  {
    date: "Sep 01",
    "ETF Shares Vital": 12347.2,
    "Vitainvest Core": 4839.1,
    "iShares Tech Growth": 14532.1,
  },
  {
    date: "Sep 02",
    "ETF Shares Vital": 12593.8,
    "Vitainvest Core": 5153.3,
    "iShares Tech Growth": 14283.5,
  },
  {
    date: "Sep 03",
    "ETF Shares Vital": 12043.4,
    "Vitainvest Core": 5234.8,
    "iShares Tech Growth": 14078.9,
  },
  {
    date: "Sep 04",
    "ETF Shares Vital": 12144.9,
    "Vitainvest Core": 5478.4,
    "iShares Tech Growth": 13859.7,
  },
  {
    date: "Sep 05",
    "ETF Shares Vital": 12489.5,
    "Vitainvest Core": 5741.1,
    "iShares Tech Growth": 13539.2,
  },
  {
    date: "Sep 06",
    "ETF Shares Vital": 12748.7,
    "Vitainvest Core": 6743.9,
    "iShares Tech Growth": 13643.2,
  },
  {
    date: "Sep 07",
    "ETF Shares Vital": 12933.2,
    "Vitainvest Core": 7832.8,
    "iShares Tech Growth": 14629.2,
  },
  {
    date: "Sep 08",
    "ETF Shares Vital": 13028.8,
    "Vitainvest Core": 8943.2,
    "iShares Tech Growth": 13611.2,
  },
  {
    date: "Sep 09",
    "ETF Shares Vital": 13412.4,
    "Vitainvest Core": 9932.2,
    "iShares Tech Growth": 12515.2,
  },
  {
    date: "Sep 10",
    "ETF Shares Vital": 13649.0,
    "Vitainvest Core": 10139.2,
    "iShares Tech Growth": 11143.8,
  },
  {
    date: "Sep 11",
    "ETF Shares Vital": 13748.5,
    "Vitainvest Core": 10441.2,
    "iShares Tech Growth": 8929.2,
  },
  {
    date: "Sep 12",
    "ETF Shares Vital": 13148.1,
    "Vitainvest Core": 10933.8,
    "iShares Tech Growth": 8943.2,
  },
  {
    date: "Sep 13",
    "ETF Shares Vital": 12839.6,
    "Vitainvest Core": 11073.4,
    "iShares Tech Growth": 7938.3,
  },
  {
    date: "Sep 14",
    "ETF Shares Vital": 12428.2,
    "Vitainvest Core": 11128.3,
    "iShares Tech Growth": 7533.4,
  },
  {
    date: "Sep 15",
    "ETF Shares Vital": 12012.8,
    "Vitainvest Core": 11412.3,
    "iShares Tech Growth": 7100.4,
  },
  {
    date: "Sep 16",
    "ETF Shares Vital": 11801.3,
    "Vitainvest Core": 10501.1,
    "iShares Tech Growth": 6532.1,
  },
  {
    date: "Sep 17",
    "ETF Shares Vital": 10102.9,
    "Vitainvest Core": 8923.3,
    "iShares Tech Growth": 4332.8,
  },
  {
    date: "Sep 18",
    "ETF Shares Vital": 12132.5,
    "Vitainvest Core": 10212.1,
    "iShares Tech Growth": 7847.4,
  },
  {
    date: "Sep 19",
    "ETF Shares Vital": 12901.1,
    "Vitainvest Core": 10101.7,
    "iShares Tech Growth": 7223.3,
  },
  {
    date: "Sep 20",
    "ETF Shares Vital": 13132.6,
    "Vitainvest Core": 12132.3,
    "iShares Tech Growth": 6900.2,
  },
  {
    date: "Sep 21",
    "ETF Shares Vital": 14132.2,
    "Vitainvest Core": 13212.5,
    "iShares Tech Growth": 5932.2,
  },
  {
    date: "Sep 22",
    "ETF Shares Vital": 14245.8,
    "Vitainvest Core": 12163.4,
    "iShares Tech Growth": 5577.1,
  },
  {
    date: "Sep 23",
    "ETF Shares Vital": 14328.3,
    "Vitainvest Core": 10036.1,
    "iShares Tech Growth": 5439.2,
  },
  {
    date: "Sep 24",
    "ETF Shares Vital": 14949.9,
    "Vitainvest Core": 8985.1,
    "iShares Tech Growth": 4463.1,
  },
  {
    date: "Sep 25",
    "ETF Shares Vital": 15967.5,
    "Vitainvest Core": 9700.1,
    "iShares Tech Growth": 4123.2,
  },
  {
    date: "Sep 26",
    "ETF Shares Vital": 17349.3,
    "Vitainvest Core": 10943.4,
    "iShares Tech Growth": 3935.1,
  },
  //array-end
]

const summary = [
  //array-start
  {
    name: "ETF Shares Vital",
    value: "$21,349.36",
    invested: "$19,698.65",
    cashflow: "$14,033.74",
    gain: "+$11,012.39",
    realized: "+$177.48",
    dividends: "+$490.97",
    bgColor: "bg-blue-500",
    changeType: "positive",
  },
  {
    name: "Vitainvest Core",
    value: "$25,943.43",
    invested: "$23,698.65",
    cashflow: "$11,033.74",
    gain: "+$3,012.39",
    realized: "+$565.41",
    dividends: "+$290.97",
    bgColor: "bg-violet-500",
    changeType: "positive",
  },
  {
    name: "iShares Tech Growth",
    value: "$9,443.46",
    invested: "$14,698.65",
    cashflow: "$2,033.74",
    gain: "-$5,012.39",
    realized: "-$634.42",
    dividends: "-$990.97",
    bgColor: "bg-fuchsia-500",
    changeType: "negative",
  },
  //array-end
]

const valueFormatter = (number: number) =>
  `$${Intl.NumberFormat("us").format(number).toString()}`

export default function Example() {
  return (
    <div className="obfuscate">
      <h3 className="text-sm text-gray-500 dark:text-gray-500">
        Portfolio performance
      </h3>
      <p className="mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-50">
        $32,227.40
      </p>
      <p className="mt-1 text-sm font-medium">
        <span className="text-emerald-700 dark:text-emerald-500">
          +$430.90 (4.1%)
        </span>{" "}
        <span className="font-normal text-gray-500 dark:text-gray-500">
          Past 24 hours
        </span>
      </p>
      <LineChart
        data={data}
        index="date"
        categories={[
          "ETF Shares Vital",
          "Vitainvest Core",
          "iShares Tech Growth",
        ]}
        colors={["blue", "violet", "fuchsia"]}
        valueFormatter={valueFormatter}
        yAxisWidth={60}
        onValueChange={() => {}}
        className="mt-6 hidden !h-96 sm:block"
      />
      <LineChart
        data={data}
        index="date"
        categories={[
          "ETF Shares Vital",
          "Vitainvest Core",
          "iShares Tech Growth",
        ]}
        colors={["blue", "violet", "fuchsia"]}
        valueFormatter={valueFormatter}
        showYAxis={false}
        showLegend={false}
        startEndOnly={true}
        className="mt-6 !h-72 sm:hidden"
      />
      <TableRoot className="mt-8">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell className="text-right">Value</TableHeaderCell>
              <TableHeaderCell className="text-right">Invested</TableHeaderCell>
              <TableHeaderCell className="text-right">Cashflow</TableHeaderCell>
              <TableHeaderCell className="text-right">Gain</TableHeaderCell>
              <TableHeaderCell className="text-right">Realized</TableHeaderCell>
              <TableHeaderCell className="text-right">
                Dividends
              </TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {summary.map((item) => (
              <TableRow key={item.name}>
                <TableCell className="font-medium text-gray-900 dark:text-gray-50">
                  <div className="flex space-x-3">
                    <span
                      className={cx(item.bgColor, "w-1 shrink-0 rounded")}
                      aria-hidden={true}
                    />
                    <span>{item.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-right">{item.value}</TableCell>
                <TableCell className="text-right">{item.invested}</TableCell>
                <TableCell className="text-right">{item.cashflow}</TableCell>
                <TableCell className="text-right">
                  <span
                    className={cx(
                      item.changeType === "positive"
                        ? "text-emerald-700 dark:text-emerald-500"
                        : "text-red-700 dark:text-red-500",
                    )}
                  >
                    {item.gain}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <span
                    className={cx(
                      item.changeType === "positive"
                        ? "text-emerald-700 dark:text-emerald-500"
                        : "text-red-700 dark:text-red-500",
                    )}
                  >
                    {item.realized}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <span
                    className={cx(
                      item.changeType === "positive"
                        ? "text-emerald-700 dark:text-emerald-500"
                        : "text-red-700 dark:text-red-500",
                    )}
                  >
                    {item.dividends}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableRoot>
    </div>
  )
}
```


```example/chart-compositions-chart-composition-15.tsx
"use client"

import { cx } from "@/lib/utils"

import { Button } from "@/atom/Button"
import { Card } from "@/atom/Card"
import { Divider } from "@/atom/Divider"
import { SparkAreaChart } from "@/atom/SparkChart"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from "@/atom/Table"

const data = [
  //array-start
  {
    date: "Oct 08, 2024",
    "Overall costs": 13500,
    "Active workspaces": 180,
    "Active users": 15800,
    Uptime: 96.8,
    "Response time": 5.45,
    MTTR: 425,
  },
  {
    date: "Oct 09, 2024",
    "Overall costs": 14920,
    "Active workspaces": 165,
    "Active users": 14900,
    Uptime: 97.9,
    "Response time": 5.32,
    MTTR: 385,
  },
  {
    date: "Oct 10, 2024",
    "Overall costs": 14250,
    "Active workspaces": 210,
    "Active users": 13200,
    Uptime: 97.2,
    "Response time": 5.58,
    MTTR: 410,
  },
  {
    date: "Oct 11, 2024",
    "Overall costs": 15800,
    "Active workspaces": 195,
    "Active users": 14500,
    Uptime: 98.7,
    "Response time": 4.88,
    MTTR: 298,
  },
  {
    date: "Oct 12, 2024",
    "Overall costs": 14580,
    "Active workspaces": 285,
    "Active users": 11800,
    Uptime: 99.3,
    "Response time": 4.91,
    MTTR: 315,
  },
  {
    date: "Oct 13, 2024",
    "Overall costs": 16200,
    "Active workspaces": 245,
    "Active users": 13600,
    Uptime: 97.5,
    "Response time": 5.8,
    MTTR: 445,
  },
  {
    date: "Oct 14, 2024",
    "Overall costs": 15750,
    "Active workspaces": 390,
    "Active users": 11500,
    Uptime: 98.2,
    "Response time": 5.36,
    MTTR: 378,
  },
  {
    date: "Oct 15, 2024",
    "Overall costs": 14290,
    "Active workspaces": 355,
    "Active users": 13900,
    Uptime: 99.4,
    "Response time": 4.79,
    MTTR: 290,
  },
  {
    date: "Oct 16, 2024",
    "Overall costs": 14550,
    "Active workspaces": 420,
    "Active users": 12100,
    Uptime: 99.5,
    "Response time": 4.87,
    MTTR: 305,
  },
  {
    date: "Oct 17, 2024",
    "Overall costs": 15980,
    "Active workspaces": 375,
    "Active users": 14200,
    Uptime: 98.1,
    "Response time": 5.43,
    MTTR: 420,
  },
  {
    date: "Oct 18, 2024",
    "Overall costs": 15220,
    "Active workspaces": 445,
    "Active users": 11700,
    Uptime: 98.8,
    "Response time": 5.22,
    MTTR: 358,
  },
  {
    date: "Oct 19, 2024",
    "Overall costs": 14780,
    "Active workspaces": 395,
    "Active users": 13500,
    Uptime: 99.1,
    "Response time": 5.24,
    MTTR: 330,
  },
  {
    date: "Oct 20, 2024",
    "Overall costs": 15450,
    "Active workspaces": 455,
    "Active users": 11900,
    Uptime: 99.3,
    "Response time": 5.21,
    MTTR: 340,
  },
  {
    date: "Oct 21, 2024",
    "Overall costs": 15210,
    "Active workspaces": 380,
    "Active users": 12500,
    Uptime: 99.4,
    "Response time": 5.15,
    MTTR: 325,
  },
  {
    date: "Oct 22, 2024",
    "Overall costs": 15091,
    "Active workspaces": 312,
    "Active users": 12100,
    Uptime: 99.6,
    "Response time": 5.1,
    MTTR: 313,
  },
  //array-end
]

const stats = [
  //array-start
  {
    name: "Overall costs",
    value: "$15,091",
    change: "+1.23%",
    changeType: "negative",
  },
  {
    name: "Active workspaces",
    value: "312",
    change: "+4.09%",
    changeType: "positive",
  },
  {
    name: "Active users",
    value: "12.1K",
    change: "-4.21%",
    changeType: "negative",
  },
  {
    name: "Uptime",
    value: "99.6%",
    change: "+1.21%",
    changeType: "positive",
  },
  {
    name: "Response time",
    value: "5.1ms",
    change: "+0.21%",
    changeType: "negative",
  },
  {
    name: "MTTR",
    value: "5min 13s",
    change: "+4.91%",
    changeType: "negative",
  },
  //array-end
]

const dataTable = [
  //array-start
  {
    "Time period": "Today",
    "Overall costs": "$15,091",
    "Active workspaces": "312",
    "Active users": "12.1K",
    Uptime: "99.6%",
    "Response time": "5.1ms",
    MTTR: "5min 11s",
  },
  {
    "Time period": "Last 7 days",
    "Overall costs": "$12,432",
    "Active workspaces": "419",
    "Active users": "8.7K",
    Uptime: "98.2%",
    "Response time": "4.5ms",
    MTTR: "4min 19s",
  },
  {
    "Time period": "Last 30 days",
    "Overall costs": "$10,321",
    "Active workspaces": "210",
    "Active users": "7.2K",
    Uptime: "94.1%",
    "Response time": "10.2ms",
    MTTR: "8min 43s",
  },
  {
    "Time period": "Last 365 days",
    "Overall costs": "$21,432",
    "Active workspaces": "380",
    "Active users": "7.9K",
    Uptime: "95.3%",
    "Response time": "9.1ms",
    MTTR: "7min 23s",
  },
  {
    "Time period": "All time",
    "Overall costs": "$9,213",
    "Active workspaces": "264",
    "Active users": "10.1K",
    Uptime: "98.2%",
    "Response time": "9.9ms",
    MTTR: "6min 41s",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-50">
        Cloud monitoring
      </h1>
      <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
        All your metrics in one overview.
      </p>
      <Card className="mt-6 overflow-hidden !p-0">
        <dl className="grid grid-cols-1 gap-px bg-gray-200 sm:grid-cols-2 lg:grid-cols-3 dark:bg-gray-900">
          {stats.map((stat) => (
            <div key={stat.name} className="group relative">
              <div className="absolute inset-0 z-10 hidden bg-white/40 opacity-0 backdrop-blur-xl transition-opacity duration-100 group-hover:opacity-100 sm:block dark:bg-gray-950/50" />
              <div className="relative z-0 flex w-full flex-wrap items-baseline justify-between gap-x-4 bg-white px-4 py-4 sm:px-6 sm:py-6 xl:px-8 dark:bg-gray-950">
                <dt className="text-sm/6 font-medium text-gray-500 dark:text-gray-500">
                  {stat.name}
                </dt>
                <dd
                  className={cx(
                    stat.changeType === "negative"
                      ? "text-red-600 dark:text-red-400"
                      : "text-emerald-600 dark:text-emerald-400",
                    "text-xs font-medium",
                  )}
                >
                  {stat.change}
                </dd>
                <dd className="mt-0.5 w-full flex-none text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-50">
                  {stat.value}
                </dd>
                <SparkAreaChart
                  data={data}
                  index="date"
                  categories={[stat.name]}
                  colors={["blue"]}
                  fill="solid"
                  className="mt-4 h-10 w-full"
                />
                <Divider className="!my-0 block pt-6 pb-4 sm:hidden" />
                <div className="flex w-full items-center justify-end gap-2 sm:hidden">
                  <a
                    href="#"
                    className="block text-sm font-medium text-gray-500 hover:text-gray-600 dark:text-gray-500 hover:dark:text-gray-400"
                  >
                    Edit alarm
                  </a>
                  <span
                    className="h-6 w-px bg-gray-200 dark:bg-gray-900"
                    aria-hidden="true"
                  />
                  <a
                    href="#"
                    className="block text-sm font-medium text-blue-500 hover:text-blue-600 dark:text-blue-500 hover:dark:text-blue-600"
                  >
                    View more
                  </a>
                </div>
              </div>
              {/* Hover state container */}
              <div className="absolute inset-0 z-50 m-auto hidden cursor-pointer sm:flex sm:items-center sm:justify-center sm:gap-2">
                <Button
                  variant="secondary"
                  className="opacity-0 transition-opacity duration-100 group-hover:opacity-100"
                  asChild
                >
                  <a href="#">Edit alarm</a>
                </Button>
                <Button
                  className="border-none opacity-0 transition-opacity duration-100 group-hover:opacity-100"
                  asChild
                >
                  <a href="#">View Details</a>
                </Button>
              </div>
            </div>
          ))}
        </dl>
      </Card>
      <TableRoot className="mt-8 !overflow-visible">
        <div className="overflow-hidden overflow-x-scroll rounded-lg ring-1 shadow-sm ring-gray-200 dark:ring-gray-800">
          <Table className="!border-transparent">
            <TableHead className="!bg-gray-50 dark:!bg-gray-900">
              <TableRow>
                <TableHeaderCell>Time period</TableHeaderCell>
                <TableHeaderCell className="text-right">
                  Overall costs
                </TableHeaderCell>
                <TableHeaderCell className="text-right">
                  Active workspaces
                </TableHeaderCell>
                <TableHeaderCell className="text-right">
                  Active users
                </TableHeaderCell>
                <TableHeaderCell className="text-right">Uptime</TableHeaderCell>
                <TableHeaderCell className="text-right">
                  Response time
                </TableHeaderCell>
                <TableHeaderCell className="text-right">MTTR</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataTable.map((item, idx) => (
                <TableRow key={idx}>
                  <TableCell>{item["Time period"]}</TableCell>
                  <TableCell className="text-right">
                    {item["Overall costs"]}
                  </TableCell>
                  <TableCell className="text-right">
                    {item["Active workspaces"]}
                  </TableCell>
                  <TableCell className="text-right">
                    {item["Active users"]}
                  </TableCell>
                  <TableCell className="text-right">{item.Uptime}</TableCell>
                  <TableCell className="text-right">
                    {item["Response time"]}
                  </TableCell>
                  <TableCell className="text-right">{item.MTTR}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </TableRoot>
    </div>
  )
}
```


```example/chart-compositions-chart-composition-03.tsx
"use client"

import { RiExternalLinkLine } from "@remixicon/react"

import { cx } from "@/lib/utils"

import { Card } from "@/atom/Card"
import { CategoryBar } from "@/atom/CategoryBar"
import { Divider } from "@/atom/Divider"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from "@/atom/Table"
import { Tabs, TabsList, TabsTrigger } from "@/atom/Tabs"

const data = [
  //array-start
  {
    date: "Dec 23",
    description: "Venture debt loan repayment",
    account: "Calantis business account",
    amount: "-$1,200",
    changeType: "negative",
  },
  {
    date: "Nov 23",
    description: "Venture debt loan repayment",
    account: "Calantis business account",
    amount: "-$2,200",
    changeType: "negative",
  },
  {
    date: "Oct 23",
    description: "Venture debt loan repayment",
    account: "Calantis business account",
    amount: "-$1,200",
    changeType: "negative",
  },
  {
    date: "Sep 23",
    description: "Venture debt loan funding",
    account: "Calantis business account",
    amount: "+$5,000,000",
    changeType: "positive",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <h1 className="text-lg font-bold text-gray-900 dark:text-gray-50">
        Capital
      </h1>
      <p className="mt-2 text-sm/6 text-gray-500 dark:text-gray-500">
        Analyze and manage your venture debt and balance.
      </p>
      <Tabs defaultValue="tab1" className="mt-6">
        <TabsList>
          <TabsTrigger value="tab1">Venture Debt</TabsTrigger>
          <TabsTrigger value="tab2">Capital Guide</TabsTrigger>
        </TabsList>
        {/* Content below only for demo purpose placed outside of <Tab> component. Add <TabsContent> to make it functional and to add content for other tabs */}
        <div className="mt-10 grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
          <Card className="md:col-span-2">
            <h1 className="text-sm text-gray-500 dark:text-gray-500">
              Outstanding balance
            </h1>
            <p className="mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-50">
              $5,450,000
            </p>
            <CategoryBar
              values={[4, 1.2, 0.25]}
              colors={["blue", "cyan", "fuchsia"]}
              className="mt-6"
              showLabels={false}
            />
            <ul
              role="list"
              className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2"
            >
              <li className="flex items-center space-x-2">
                <span
                  className="size-3 shrink-0 rounded-sm bg-blue-500 dark:bg-blue-500"
                  aria-hidden={true}
                />
                <span className="text-sm text-gray-500 dark:text-gray-500">
                  <span className="font-medium text-gray-700 dark:text-gray-300">
                    $4M
                  </span>{" "}
                  outstanding
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <span
                  className="size-3 shrink-0 rounded-sm bg-cyan-500 dark:bg-cyan-500"
                  aria-hidden={true}
                />
                <span className="text-sm text-gray-500 dark:text-gray-500">
                  <span className="font-medium text-gray-700 dark:text-gray-300">
                    $1.2M
                  </span>{" "}
                  available today
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <span
                  className="size-3 shrink-0 rounded-sm bg-fuchsia-500 dark:bg-fuchsia-500"
                  aria-hidden={true}
                />
                <span className="text-sm text-gray-500 dark:text-gray-500">
                  <span className="font-medium text-gray-700 dark:text-gray-300">
                    $0.25M
                  </span>{" "}
                  unavailable
                </span>
              </li>
            </ul>
            <Divider />
            <p className="mt-6 text-sm font-medium text-gray-900 dark:text-gray-50">
              Interest only ends Jan 4, 2024
            </p>
            <div className="mt-4 rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
              <p className="flex flex-wrap justify-between gap-4 text-sm/6 text-gray-600 dark:text-gray-400">
                Next payment of $3,200 due Jan 1, 2024.
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-blue-500 hover:underline hover:underline-offset-4 dark:text-blue-500"
                >
                  Learn more
                  <RiExternalLinkLine className="size-4" aria-hidden={true} />
                </a>
              </p>
            </div>
          </Card>
          <div className="md:col-span-1 md:p-6">
            <h4 className="font-medium text-gray-900 dark:text-gray-50">
              Questions?
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Contact your financial advisor
            </p>
            <div className="mt-6 flex items-center space-x-4">
              <span
                className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gray-100 text-sm font-medium text-blue-500 dark:bg-gray-900 dark:text-blue-500"
                aria-hidden={true}
              >
                EL
              </span>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
                  Emily Liftburg
                </p>
                <a
                  href="mailto:#"
                  className="mt-0.5 block text-sm text-blue-500 dark:text-blue-500"
                >
                  emily.liftburg@company.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-14 font-medium text-gray-900 dark:text-gray-50">
          Transactions
        </p>
        <TableRoot className="mt-8">
          <Table className="border-transparent">
            <TableHead>
              <TableRow>
                <TableHeaderCell>Date</TableHeaderCell>
                <TableHeaderCell>Description</TableHeaderCell>
                <TableHeaderCell>Account</TableHeaderCell>
                <TableHeaderCell className="text-right">Amount</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item) => (
                <TableRow key={item.date}>
                  <TableCell className="font-medium text-gray-900 dark:text-gray-50">
                    {item.date}
                  </TableCell>
                  <TableCell>{item.description}</TableCell>
                  <TableCell>{item.account}</TableCell>
                  <TableCell className="text-right">
                    <span
                      className={cx(
                        item.changeType === "positive"
                          ? "text-emerald-700 dark:text-emerald-500"
                          : "text-gray-900 dark:text-gray-50",
                        "font-medium",
                      )}
                    >
                      {item.amount}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableRoot>
      </Tabs>
    </div>
  )
}
```


```example/chart-compositions-chart-composition-02.tsx
"use client"

import {
  RiAddCircleFill,
  RiCheckboxCircleFill,
  RiGitMergeFill,
  RiGitPullRequestFill,
} from "@remixicon/react"

import { cx } from "@/lib/utils"

import { BarChart } from "@/atom/BarChart"
import { Card } from "@/atom/Card"
import { CategoryBar } from "@/atom/CategoryBar"
import { Divider } from "@/atom/Divider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/atom/Select"

const data = [
  //array-start
  {
    name: "Open PRs",
    value: 4,
    icon: RiGitPullRequestFill,
    iconColor: "text-indigo-500 dark:text-indigo-500",
  },
  {
    name: "Merged PRs",
    value: 8,
    icon: RiGitMergeFill,
    iconColor: "text-emerald-500 dark:text-emerald-500",
  },
  {
    name: "Open Issues",
    value: 8,
    icon: RiAddCircleFill,
    iconColor: "text-indigo-500 dark:text-indigo-500",
  },
  {
    name: "Closed Issues",
    value: 92,
    icon: RiCheckboxCircleFill,
    iconColor: "text-emerald-500 dark:text-emerald-500",
  },
  //array-end
]

const topContributors = [
  //array-start
  {
    username: "Mbauchet",
    contributions: 7,
  },
  {
    username: "Pizuronin",
    contributions: 4,
  },
  {
    username: "Codetrendy",
    contributions: 3,
  },
  {
    username: "Devsparkle",
    contributions: 3,
  },
  {
    username: "Techphantom",
    contributions: 2,
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="sm:flex sm:items-center sm:justify-between">
        <h3 className="text-sm font-medium text-gray-900 dark:text-gray-50">
          December 27, 2023 – January 3, 2024
        </h3>
        <div>
          <Select>
            <SelectTrigger className="mt-4 sm:mt-0 sm:w-40">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Last week</SelectItem>
              <SelectItem value="2">Last month</SelectItem>
              <SelectItem value="3">Last year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Divider />
      <Card className="overflow-hidden !p-0">
        <div className="border-b border-gray-200 bg-gray-50 px-6 py-4 dark:border-gray-900 dark:bg-[#090E1A]">
          <h3 className="text-sm font-medium text-gray-900 dark:text-gray-50">
            Overview
          </h3>
        </div>
        <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2">
          <div>
            <CategoryBar
              values={[4, 8]}
              colors={["indigo", "emerald"]}
              showLabels={false}
            />
            <p className="mt-2 text-sm text-gray-900 dark:text-gray-50">
              <span className="font-semibold">4</span> Active Pull Requests
            </p>
          </div>
          <div>
            <CategoryBar
              values={[8, 92]}
              colors={["indigo", "emerald"]}
              showLabels={false}
            />
            <p className="mt-2 text-sm text-gray-900 dark:text-gray-50">
              <span className="font-semibold">8</span> Active Issues
            </p>
          </div>
        </div>
        <ul className="grid grid-cols-2 gap-px border-t border-gray-200 bg-gray-200 md:grid-cols-4 dark:border-gray-900 dark:bg-gray-900">
          {data.map((item) => (
            <li
              key={item.name}
              className="flex flex-col items-center justify-center bg-white p-3 dark:bg-[#090E1A]"
            >
              <div className="flex items-center space-x-1">
                <item.icon
                  className={cx(item.iconColor, "size-5")}
                  aria-hidden={true}
                />
                <span className="font-semibold text-gray-900 dark:text-gray-50">
                  {item.value}
                </span>
              </div>
              <span className="text-sm text-gray-900 dark:text-gray-50">
                {item.name}
              </span>
            </li>
          ))}
        </ul>
      </Card>
      <Divider className="!my-10">More info</Divider>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-gray-50">
            Repository Summary
          </h4>
          <p className="mt-4 text-sm/6 text-gray-500 dark:text-gray-500">
            Excluding merges,{" "}
            <span className="font-medium text-gray-900 dark:text-gray-50">
              2 authors
            </span>{" "}
            have pushed{" "}
            <span className="font-medium text-gray-900 dark:text-gray-50">
              2 commits
            </span>{" "}
            to main and{" "}
            <span className="font-medium text-gray-900 dark:text-gray-50">
              19 commits
            </span>{" "}
            to all branches. On main,{" "}
            <span className="font-medium text-gray-900 dark:text-gray-50">
              12 files{" "}
            </span>
            have changed and there have been{" "}
            <span className="font-medium text-gray-900 dark:text-gray-50">
              38 additions
            </span>{" "}
            and{" "}
            <span className="font-medium text-gray-900 dark:text-gray-50">
              9 deletions
            </span>
            .
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-gray-50">
            Top contributors
          </h4>
          <BarChart
            data={topContributors}
            index="username"
            categories={["contributions"]}
            colors={["emerald"]}
            showLegend={false}
            layout="vertical"
            yAxisWidth={85}
            className="mt-4 !h-48"
          />
        </div>
      </div>
    </div>
  )
}
```


```example/chart-tooltips-chart-tooltip-04.tsx
"use client"

import React from "react"
import { RiArrowDownSLine } from "@remixicon/react"

import { cx } from "@/lib/utils"

import { BarChart, TooltipProps } from "@/atom/BarChart"
import { Button } from "@/atom/Button"
import { Divider } from "@/atom/Divider"

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

const statusColors: { [key in Issue["status"]]: string } = {
  completed: "bg-blue-500 dark:bg-blue-500",
  "in progress": "bg-cyan-500 dark:bg-cyan-500",
  "on hold": "bg-violet-500 dark:bg-violet-500",
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
      (item.value /
        (item.payload.completed +
          item.payload["in progress"] +
          item.payload["on hold"])) *
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
          <div className="flex w-full items-center justify-between py-2 pr-3">
            <p className="text-gray-500 dark:text-gray-500">{item.status}</p>
            <div className="flex items-center space-x-1 text-gray-900 dark:text-gray-50">
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
                "on hold": 12,
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
                "on hold": 12,
              },
            },
            {
              category: "on hold",
              value: 12,
              index: "Oct 2, 2023",
              color: "violet",
              payload: {
                date: "Oct 2, 2023",
                completed: 20,
                "in progress": 97,
                "on hold": 12,
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
```


```example/chart-tooltips-chart-tooltip-10.tsx
"use client"

import React from "react"
import { RiArrowDownSLine } from "@remixicon/react"

import { BarChart, TooltipProps } from "@/atom/BarChart"
import { Button } from "@/atom/Button"
import { Divider } from "@/atom/Divider"
import { ProgressCircle } from "@/atom/ProgressCircle"

const data = [
  //array-start
  {
    date: "Jan 23",
    bpm: 167,
    effort: 23,
    recovery: 40,
    strain: 1.1,
    sleep: 89,
  },
  {
    date: "Feb 23",
    bpm: 121,
    effort: 78,
    recovery: 45,
    strain: 4.1,
    sleep: 79,
  },
  {
    date: "Mar 23",
    bpm: 155,
    effort: 32,
    recovery: 42,
    strain: 1.3,
    sleep: 88,
  },
  {
    date: "Apr 23",
    bpm: 143,
    effort: 45,
    recovery: 38,
    strain: 2.0,
    sleep: 85,
  },
  {
    date: "May 23",
    bpm: 160,
    effort: 28,
    recovery: 43,
    strain: 1.4,
    sleep: 90,
  },
  {
    date: "Jun 23",
    bpm: 140,
    effort: 50,
    recovery: 37,
    strain: 2.2,
    sleep: 82,
  },
  {
    date: "Jul 23",
    bpm: 152,
    effort: 35,
    recovery: 44,
    strain: 1.5,
    sleep: 91,
  },
  {
    date: "Aug 23",
    bpm: 135,
    effort: 53,
    recovery: 36,
    strain: 2.3,
    sleep: 90,
  },
  {
    date: "Sep 23",
    bpm: 150,
    effort: 38,
    recovery: 43,
    strain: 1.7,
    sleep: 87,
  },
  {
    date: "Oct 23",
    bpm: 132,
    effort: 31,
    recovery: 43,
    strain: 1.9,
    sleep: 84,
  },
  {
    date: "Nov 23",
    bpm: 139,
    effort: 39,
    recovery: 41,
    strain: 1.2,
    sleep: 88,
  },
  {
    date: "Dec 23",
    bpm: 121,
    effort: 21,
    recovery: 99,
    strain: 1.9,
    sleep: 91,
  },
  //array-end
]

const dataFormatter = (number: number) => {
  return Intl.NumberFormat("us").format(number).toString() + " bpm"
}

const CustomTooltip = ({ payload, active }: TooltipProps) => {
  if (!active || !payload || payload.length === 0) return null

  const data = payload.map((item) => ({
    date: item.payload.date,
    effort: item.payload.effort,
    recovery: item.payload.recovery,
    strain: item.payload.strain,
    sleep: item.payload.sleep,
  }))

  return (
    <div className="rounded-md border border-gray-200 bg-white px-6 py-4 shadow-md dark:border-gray-800 dark:bg-gray-950">
      {data.map((item, index) => (
        <div key={index} className="flex items-center space-x-6">
          <ProgressCircle value={item.effort} radius={45} variant="default">
            <ProgressCircle
              value={item.recovery}
              radius={36}
              variant="success"
            />
          </ProgressCircle>
          <div className="space-y-1">
            <div>
              <h4 className="text-xs text-gray-500 dark:text-gray-500">
                Effort
              </h4>
              <p className="font-medium text-blue-600 dark:text-blue-500">
                {item.effort}&#37;
              </p>
            </div>
            <div>
              <h4 className="text-xs text-gray-500 dark:text-gray-500">
                Recovery
              </h4>
              <p className="font-medium text-emerald-600 dark:text-emerald-500">
                {item.recovery}&#37;
              </p>
            </div>
          </div>
          <div className="space-y-1">
            <div>
              <h4 className="text-xs text-gray-500 dark:text-gray-500">
                Strain
              </h4>
              <p className="font-medium text-gray-900 dark:text-gray-50">
                {item.strain}
              </p>
            </div>
            <div>
              <h4 className="text-xs text-gray-500 dark:text-gray-500">
                Sleep
              </h4>
              <p className="font-medium text-gray-900 dark:text-gray-50">
                {item.sleep}&#37;
              </p>
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
          label="Oct 23"
          active={true}
          payload={[
            //array-start
            {
              category: "bpm",
              value: 20,
              index: "Oct 23",
              color: "blue",
              payload: {
                bpm: 132,
                effort: 31,
                recovery: 43,
                strain: 1.9,
                sleep: 84,
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
            categories={["bpm"]}
            valueFormatter={dataFormatter}
            yAxisWidth={70}
            showLegend={false}
            customTooltip={CustomTooltip}
          />
          <BarChart
            className="mt-12 !h-80 sm:hidden"
            data={data}
            index="date"
            categories={["bpm"]}
            valueFormatter={dataFormatter}
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
```


```example/chart-tooltips-chart-tooltip-11.tsx
"use client"

import { RiArrowDownSLine } from "@remixicon/react"
import React from "react"

import { cx } from "@/lib/utils"

import { BarChart, TooltipProps } from "@/atom/BarChart"
import { Button } from "@/atom/Button"
import { Divider } from "@/atom/Divider"

interface DataItem {
  date: string
  Running: number
}

const data: DataItem[] = [
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
    Running: 141,
  },
  {
    date: "Nov 23",
    Running: 129,
  },
  {
    date: "Dec 23",
    Running: 149,
  },
  //array-end
]

const valueFormatter = (number: number) => {
  return Intl.NumberFormat("us").format(number).toString() + " bpm"
}

const CustomTooltip = ({ payload, active, label }: TooltipProps) => {
  if (!active || !payload || payload.length === 0) return null

  const categoryPayload = payload[0]

  const previousIndex = data.findIndex((e) => e["date"] === label)
  const previousValues: DataItem | undefined =
    previousIndex > 0 ? data[previousIndex - 1] : undefined

  const prev = previousValues
    ? previousValues[categoryPayload.category as keyof DataItem]
    : undefined
  const percentage =
    typeof prev === "number" && typeof categoryPayload.value === "number"
      ? ((categoryPayload.value - prev) / prev) * 100
      : undefined

  return (
    <div className="rounded-md border border-gray-200 bg-white p-2 shadow-md dark:border-gray-800 dark:bg-gray-950">
      <div className="flex space-x-2.5">
        <span
          className={`flex w-1.5 bg-${categoryPayload.color}-500 rounded`}
          aria-hidden={true}
        />
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-500">{label}</p>
          <p className="mt-2 font-medium text-gray-900 dark:text-gray-50">
            {valueFormatter(categoryPayload.value)}
          </p>
          <div className="mt-1 flex items-end space-x-1">
            {percentage ? (
              <span
                className={cx(
                  percentage < 0
                    ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-400/10 dark:text-emerald-500"
                    : "bg-red-100 text-red-800 dark:bg-red-400/10 dark:text-red-500",
                  "inline-flex rounded px-1.5 py-0.5 text-xs font-medium",
                )}
              >
                {percentage > 0 ? "+" : null}
                {percentage.toFixed(1)}%
              </span>
            ) : (
              <span className="rounded bg-gray-100 px-1.5 py-0.5 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                --
              </span>
            )}
            <div className="text-sm text-gray-500 dark:text-gray-500">
              from prev. month
            </div>
          </div>
        </div>
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
          label="Oct 23"
          active={true}
          payload={[
            {
              category: "Running",
              value: 141,
              index: "Oct 23",
              color: "blue",
              payload: {
                date: "Oct 23",
                Running: 141,
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
            categories={["Running"]}
            valueFormatter={valueFormatter}
            yAxisWidth={70}
            showLegend={false}
            customTooltip={CustomTooltip}
          />
          <BarChart
            className="mt-12 !h-72 sm:hidden"
            data={data}
            index="date"
            categories={["Running"]}
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
```


```example/chart-tooltips-chart-tooltip-05.tsx
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
```


```example/chart-tooltips-chart-tooltip-13.tsx
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
    Running: 121,
  },
  {
    date: "Nov 23",
    Running: 129,
  },
  {
    date: "Dec 23",
    Running: 141,
  },
  //array-end
]

const valueFormatter = (number: number) => {
  return Intl.NumberFormat("us").format(number).toString() + " bpm"
}

const CustomTooltip = ({ payload, active, label }: TooltipProps) => {
  if (!active || !payload || payload.length === 0) return null
  const categoryPayload = payload[0]
  return (
    <div className="w-56 rounded-md border border-gray-200 bg-white p-2 text-sm shadow-md dark:border-gray-800 dark:bg-gray-950">
      <div className="flex space-x-2.5">
        <span
          className={`w-1 bg-${categoryPayload.color}-500 rounded`}
          aria-hidden={true}
        />
        <div className="w-full truncate">
          <p className="font-medium text-gray-900 dark:text-gray-50">{label}</p>
          <p className="flex items-center justify-between space-x-8">
            <span className="truncate text-gray-500 dark:text-gray-500">
              {categoryPayload.category}
            </span>
            <span className="font-medium text-gray-900 dark:text-gray-50">
              {valueFormatter(categoryPayload.value)}
            </span>
          </p>
        </div>
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
            categories={["Running"]}
            valueFormatter={valueFormatter}
            yAxisWidth={70}
            showLegend={false}
            customTooltip={CustomTooltip}
          />
          <BarChart
            className="mt-12 !h-72 sm:hidden"
            data={data}
            index="date"
            categories={["Running"]}
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
```


```example/chart-tooltips-chart-tooltip-07.tsx
"use client"

import React from "react"
import { RiArrowDownSLine } from "@remixicon/react"

import { cx } from "@/lib/utils"

import { BarChart, TooltipProps } from "@/atom/BarChart"
import { Button } from "@/atom/Button"
import { Divider } from "@/atom/Divider"

interface DataItem {
  month: string
  sales: number
}

const data: DataItem[] = [
  //array-start
  {
    month: "Jan 23",
    sales: 4310,
  },
  {
    month: "Feb 23",
    sales: 3250,
  },
  {
    month: "Mar 23",
    sales: 2350,
  },
  {
    month: "Apr 23",
    sales: 2780,
  },
  {
    month: "May 23",
    sales: 1890,
  },
  {
    month: "Jun 23",
    sales: 2390,
  },
  {
    month: "Jul 23",
    sales: 3490,
  },
  {
    month: "Aug 23",
    sales: 3290,
  },
  {
    month: "Sep 23",
    sales: 2980,
  },
  {
    month: "Oct 23",
    sales: 2320,
  },
  {
    month: "Nov 23",
    sales: 2630,
  },
  {
    month: "Dec 23",
    sales: 2910,
  },
  //array-end
]

const currencyFormatter = (number: number) => {
  return "$" + Intl.NumberFormat("us").format(number).toString()
}

const CustomTooltip = ({ payload, active, label }: TooltipProps) => {
  if (!active || !payload || payload.length === 0) return null

  const categoryPayload = payload[0]

  const previousIndex = data.findIndex((e) => e["month"] === label)
  const previousValues: DataItem | undefined =
    previousIndex > 0 ? data[previousIndex - 1] : undefined

  const prev = previousValues
    ? previousValues[categoryPayload.category as keyof DataItem]
    : undefined
  const percentage =
    typeof prev === "number" && typeof categoryPayload.value === "number"
      ? ((categoryPayload.value - prev) / prev) * 100
      : undefined

  return (
    <div className="rounded-md border border-gray-200 bg-white px-4 py-3 text-center shadow-md dark:border-gray-800 dark:bg-gray-950">
      <p className="text-sm text-gray-500 dark:text-gray-500">{label}</p>
      <p className="font-semibold text-gray-900 dark:text-gray-50">
        {currencyFormatter(categoryPayload.value)}
      </p>
      <div className="mt-2 flex items-center justify-center space-x-1 text-sm whitespace-nowrap">
        {percentage ? (
          <span
            className={cx(
              percentage > 0
                ? "text-emerald-700 dark:text-emerald-500"
                : "text-red-700 dark:text-red-500",
              "font-medium",
            )}
          >
            {percentage > 0 ? "+" : null}
            {percentage.toFixed(1)}%
          </span>
        ) : (
          <span className="rounded bg-gray-100 px-1.5 py-0.5 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
            --
          </span>
        )}
        <span className="text-gray-500 dark:text-gray-500">
          from previous month
        </span>
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
          label="Oct 23"
          active={true}
          payload={[
            {
              category: "sales",
              value: 2320,
              index: "Oct 23",
              color: "blue",
              payload: {
                date: "Oct 23",
                Sales: 2320,
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
            index="month"
            categories={["sales"]}
            valueFormatter={currencyFormatter}
            yAxisWidth={50}
            showLegend={false}
            customTooltip={CustomTooltip}
          />
          <BarChart
            className="mt-12 !h-80 sm:hidden"
            data={data}
            index="month"
            categories={["sales"]}
            valueFormatter={currencyFormatter}
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
```


```example/chart-tooltips-chart-tooltip-06.tsx
"use client"

import React from "react"
import { RiArrowDownSLine } from "@remixicon/react"

import { BarChart, TooltipProps } from "@/atom/BarChart"
import { Button } from "@/atom/Button"
import { Divider } from "@/atom/Divider"

interface DataItem {
  month: string
  sales: number
}

const data: DataItem[] = [
  //array-start
  {
    month: "Jan 23",
    sales: 4310,
  },
  {
    month: "Feb 23",
    sales: 326,
  },
  {
    month: "Mar 23",
    sales: 2350,
  },
  {
    month: "Apr 23",
    sales: 2780,
  },
  {
    month: "May 23",
    sales: 1890,
  },
  {
    month: "Jun 23",
    sales: 2390,
  },
  {
    month: "Jul 23",
    sales: 3490,
  },
  {
    month: "Aug 23",
    sales: 3290,
  },
  {
    month: "Sep 23",
    sales: 2980,
  },
  {
    month: "Oct 23",
    sales: 2320,
  },
  {
    month: "Nov 23",
    sales: 2630,
  },
  {
    month: "Dec 23",
    sales: 2910,
  },
  //array-end
]

const currencyFormatter = (number: number) => {
  return "$" + Intl.NumberFormat("us").format(number).toString()
}

const CustomTooltip = ({ payload, active, label }: TooltipProps) => {
  if (!active || !payload || payload.length === 0) return null

  const categoryPayload = payload[0]

  const previousIndex = data.findIndex((e) => e["month"] === label)
  const previousValues: DataItem | undefined =
    previousIndex > 0 ? data[previousIndex - 1] : undefined

  const prev = previousValues
    ? previousValues[categoryPayload.category as keyof DataItem]
    : undefined
  const percentage =
    typeof prev === "number" && typeof categoryPayload.value === "number"
      ? ((categoryPayload.value - prev) / prev) * 100
      : undefined

  return (
    <div className="flex w-52 items-center justify-between space-x-6 rounded-md border border-gray-200 bg-white p-1.5 text-sm shadow-md dark:border-gray-800 dark:bg-gray-950">
      <p className="text-gray-500 dark:text-gray-500">{label}</p>
      <div className="flex items-center space-x-2">
        <span className="font-medium text-gray-900 dark:text-gray-50">
          {currencyFormatter(categoryPayload.value)}
        </span>
        {percentage ? (
          <span
            className={`rounded px-1.5 py-0.5 text-xs font-medium ${
              percentage > 0
                ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-400/10 dark:text-emerald-500"
                : "bg-red-100 text-red-800 dark:bg-red-400/10 dark:text-red-500"
            }`}
          >
            {percentage > 0 ? "+" : ""}
            {percentage.toFixed(1)}%
          </span>
        ) : (
          <span className="rounded bg-gray-100 px-1.5 py-0.5 text-xs font-medium text-gray-700 dark:bg-gray-900 dark:text-gray-300">
            --
          </span>
        )}
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
          label="Oct 23"
          active={true}
          payload={[
            {
              category: "sales",
              value: 2320,
              index: "Oct 23",
              color: "blue",
              payload: {
                date: "Oct 23",
                Sales: 2320,
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
            index="month"
            categories={["sales"]}
            valueFormatter={currencyFormatter}
            yAxisWidth={56}
            showLegend={false}
            customTooltip={CustomTooltip}
          />
          <BarChart
            className="mt-12 !h-80 sm:hidden"
            data={data}
            index="month"
            categories={["sales"]}
            valueFormatter={currencyFormatter}
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
```


```example/chart-tooltips-chart-tooltip-12.tsx
"use client"

import { useState } from "react"
import { RiArrowDownSLine } from "@remixicon/react"

import { cx } from "@/lib/utils"

import { BarChart, TooltipProps } from "@/atom/BarChart"
import { Button } from "@/atom/Button"
import { Divider } from "@/atom/Divider"

interface DataItem {
  date: string
  Running: number
}

const data: DataItem[] = [
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
    Running: 141,
  },
  {
    date: "Nov 23",
    Running: 129,
  },
  {
    date: "Dec 23",
    Running: 149,
  },
  //array-end
]

const valueFormatter = (number: number) => {
  return Intl.NumberFormat("us").format(number).toString() + " bpm"
}

const CustomTooltip = ({ payload, active, label }: TooltipProps) => {
  if (!active || !payload || payload.length === 0) return null

  const categoryPayload = payload[0]

  const previousIndex = data.findIndex((e) => e["date"] === label)
  const previousValues: DataItem | undefined =
    previousIndex > 0 ? data[previousIndex - 1] : undefined

  const prev = previousValues
    ? previousValues[categoryPayload.category as keyof DataItem]
    : undefined
  const percentage =
    typeof prev === "number" && typeof categoryPayload.value === "number"
      ? ((categoryPayload.value - prev) / prev) * 100
      : undefined

  return (
    <div className="rounded-md border border-gray-200 bg-white text-sm shadow-md dark:border-gray-800 dark:bg-gray-950">
      <div className="flex items-center justify-between border-b border-gray-200 px-3 py-2 dark:border-gray-800">
        <p className="text-gray-500 dark:text-gray-500">{label}</p>
        {percentage ? (
          <p
            className={cx(
              percentage < 0
                ? "text-emerald-700 dark:text-emerald-500"
                : "text-red-700 dark:text-red-500",
              "font-medium",
            )}
          >
            {percentage > 0 ? "+" : null}
            {percentage.toFixed(1)}%
          </p>
        ) : (
          <p className="font-medium text-gray-700 dark:text-gray-300">--</p>
        )}
      </div>
      <div className="flex items-center justify-between space-x-8 px-3 py-2">
        <div className="flex items-center space-x-2 truncate">
          <span
            className={`size-2.5 shrink-0 bg-${categoryPayload.color}-500 rounded-sm`}
            aria-hidden={true}
          />
          <p className="truncate text-gray-500 dark:text-gray-500">
            {categoryPayload.category}
          </p>
        </div>
        <p className="font-medium text-gray-900 dark:text-gray-50">
          {valueFormatter(categoryPayload.value)}
        </p>
      </div>
    </div>
  )
}

export default function Example() {
  const [showDemo, setShowDemo] = useState(false)
  return (
    <div className="obfuscate">
      <div className="flex w-full justify-center">
        <CustomTooltip
          label="Oct 23"
          active={true}
          payload={[
            {
              category: "Running",
              value: 141,
              index: "Oct 23",
              color: "blue",
              payload: {
                date: "Oct 23",
                Running: 141,
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
            categories={["Running"]}
            type="stacked"
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
            categories={["Running"]}
            type="stacked"
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
```


```example/chart-tooltips-chart-tooltip-16.tsx
"use client"

import React from "react"
import { RiArrowDownSLine } from "@remixicon/react"

import { cx } from "@/lib/utils"

import { BarChart, TooltipProps } from "@/atom/BarChart"
import { Button } from "@/atom/Button"
import { Divider } from "@/atom/Divider"

interface DataItem {
  date: string
  Revenue: number
}

const data: DataItem[] = [
  //array-start
  {
    date: "Jan 23",
    Revenue: 34230,
  },
  {
    date: "Feb 23",
    Revenue: 39310,
  },
  {
    date: "Mar 23",
    Revenue: 33470,
  },
  {
    date: "Apr 23",
    Revenue: 29290,
  },
  {
    date: "May 23",
    Revenue: 33190,
  },
  {
    date: "Jun 23",
    Revenue: 39120,
  },
  {
    date: "Jul 23",
    Revenue: 41030,
  },
  {
    date: "Aug 23",
    Revenue: 27630,
  },
  {
    date: "Sep 23",
    Revenue: 26120,
  },
  {
    date: "Oct 23",
    Revenue: 22190,
  },
  {
    date: "Nov 23",
    Revenue: 24080,
  },
  {
    date: "Dec 23",
    Revenue: 27120,
  },
  //array-end
]

const valueFormatter = (number: number) =>
  `$${Intl.NumberFormat("us").format(number).toString()}`

const CustomTooltip = ({ payload, active, label }: TooltipProps) => {
  if (!active || !payload || payload.length === 0) return null

  const categoryPayload = payload[0]

  const previousIndex = data.findIndex((e) => e["date"] === label)
  const previousValues: DataItem | undefined =
    previousIndex > 0 ? data[previousIndex - 1] : undefined

  const prev = previousValues
    ? previousValues[categoryPayload.category as keyof DataItem]
    : undefined
  const percentage =
    typeof prev === "number" && typeof categoryPayload.value === "number"
      ? ((categoryPayload.value - prev) / prev) * 100
      : undefined

  return (
    <div className="w-56 rounded-md border border-gray-800 bg-gray-950 px-3 py-2 text-sm shadow-md">
      <p className="text-gray-500">{categoryPayload.category}</p>
      <div className="mt-1 flex items-center space-x-2.5">
        <span
          className={`size-2.5 bg-${categoryPayload.color}-500 shrink-0 rounded-sm`}
          aria-hidden={true}
        />
        <p className="flex w-full items-center justify-between">
          <span className="font-semibold text-gray-50">
            {valueFormatter(categoryPayload.value)}
          </span>
          {percentage ? (
            <span
              className={cx(
                percentage > 0 ? "text-emerald-500" : "text-red-500",
                "font-medium",
              )}
            >
              {percentage > 0 ? "+" : null}
              {percentage.toFixed(1)}%
            </span>
          ) : (
            <span className="font-medium text-gray-300">--</span>
          )}
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
          label="Oct 23"
          active={true}
          payload={[
            {
              category: "Revenue",
              value: 145,
              index: "Oct 23",
              color: "blue",
              payload: {
                date: "Oct 23",
                Revenue: 145,
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
```


```example/chart-tooltips-chart-tooltip-02.tsx
"use client"

import React from "react"
import { RiArrowDownSLine } from "@remixicon/react"

import { BarChart, TooltipProps } from "@/atom/BarChart"
import { Button } from "@/atom/Button"
import { Divider } from "@/atom/Divider"

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

const CustomTooltip = ({ payload, active, label }: TooltipProps) => {
  if (!active || !payload || payload.length === 0) return null
  const categoryPayload = payload[0]

  return (
    <div className="w-52 rounded-md border border-gray-200 bg-white text-sm shadow-md dark:border-gray-800 dark:bg-gray-950">
      <div className="rounded-t-md border-b border-gray-200 bg-gray-100 px-2.5 py-2 dark:border-gray-800 dark:bg-gray-900">
        <p className="font-medium text-gray-500 dark:text-gray-500">{label}</p>
      </div>
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
          label="Mar 23"
          active={true}
          payload={[
            {
              category: "Running",
              value: 3322,
              index: "Mar 23",
              color: "blue",
              payload: {
                date: "Mar 23",
                Running: 3322,
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
            yAxisWidth={70}
            showLegend={false}
            customTooltip={CustomTooltip}
          />
          <BarChart
            className="mt-12 !h-72 sm:hidden"
            data={data}
            index="date"
            categories={["Running"]}
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
```


```example/chart-tooltips-chart-tooltip-03.tsx
"use client"

import React from "react"
import { RiArrowDownSLine } from "@remixicon/react"

import { BarChart, TooltipProps } from "@/atom/BarChart"
import { Button } from "@/atom/Button"
import { Divider } from "@/atom/Divider"

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

const CustomTooltip = ({ payload, active, label }: TooltipProps) => {
  if (!active || !payload || payload.length === 0) return null
  const categoryPayload = payload[0]

  return (
    <div className="w-52 rounded-md border border-gray-200 bg-white text-sm shadow-md dark:border-gray-800 dark:bg-gray-950">
      <div className="p-2">
        <div className="rounded border border-gray-200 bg-gray-50 p-2 dark:border-gray-800 dark:bg-gray-900">
          <p className="font-medium text-gray-500 dark:text-gray-500">
            {label}
          </p>
        </div>
      </div>
      <div className="flex w-full items-center justify-between space-x-4 px-3 pb-2">
        <div className="flex items-center space-x-2 truncate">
          <span
            className="size-2.5 shrink-0 rounded-sm bg-blue-500 dark:text-blue-500"
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
      <div className="flex w-full justify-center">
        <CustomTooltip
          label="Jun 23"
          active={true}
          payload={[
            {
              category: "Running",
              value: 180,
              index: "Jun 23",
              color: "blue",
              payload: {
                date: "Jun 23",
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
            yAxisWidth={70}
            showLegend={false}
            customTooltip={CustomTooltip}
          />
          <BarChart
            className="mt-12 !h-72 sm:hidden"
            data={data}
            index="date"
            categories={["Running"]}
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
```


```example/chart-tooltips-chart-tooltip-17.tsx
"use client"

import React from "react"
import { RiArrowDownSLine } from "@remixicon/react"

import { BarChart, TooltipProps } from "@/atom/BarChart"
import { Button } from "@/atom/Button"
import { Divider } from "@/atom/Divider"
import { ProgressCircle } from "@/atom/ProgressCircle"

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
```


```example/chart-tooltips-chart-tooltip-01.tsx
"use client"

import React from "react"
import { RiArrowDownSLine } from "@remixicon/react"

import { BarChart, TooltipProps } from "@/atom/BarChart"
import { Button } from "@/atom/Button"
import { Divider } from "@/atom/Divider"

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
```


```example/chart-tooltips-chart-tooltip-15.tsx
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
```


```example/chart-tooltips-chart-tooltip-14.tsx
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

const CustomTooltip = ({ payload, active }: TooltipProps) => {
  if (!active || !payload || payload.length === 0) return null
  return (
    <div className="w-56 space-y-2 rounded-md border border-gray-200 bg-white p-2 text-sm shadow-md dark:border-gray-800 dark:bg-gray-950">
      {payload.map((category, index) => (
        <div key={index} className="flex space-x-2.5">
          <span
            className={`w-1 bg-${category.color}-500 rounded`}
            aria-hidden={true}
          />
          <div className="space-y-1">
            <p className="text-gray-500 dark:text-gray-500">
              {category.category}
            </p>
            <p className="font-medium text-gray-900 dark:text-gray-50">
              {valueFormatter(category.value)}
            </p>
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
```


```example/chart-tooltips-chart-tooltip-19.tsx
"use client"

import React from "react"
import { RiArrowDownSLine } from "@remixicon/react"

import { cx } from "@/lib/utils"

import { BarChart, TooltipProps } from "@/atom/BarChart"
import { Button } from "@/atom/Button"
import { Divider } from "@/atom/Divider"
import { DonutChart } from "@/atom/DonutChart"

interface LocationData {
  location: string
  sales: number
  share: string
}

interface DataItem {
  date: string
  sales: number
  locations: LocationData[]
}

const data: DataItem[] = [
  //array-start
  {
    date: "Jan 23",
    sales: 1668,
    locations: [
      {
        location: "Europe",
        sales: 400,
        share: "23.9%",
      },
      {
        location: "Asia",
        sales: 500,
        share: "29.9%",
      },
      {
        location: "North America",
        sales: 768,
        share: "46.1%",
      },
    ],
  },
  {
    date: "Feb 23",
    sales: 2370,
    locations: [
      {
        location: "Europe",
        sales: 800,
        share: "33.8%",
      },
      {
        location: "Asia",
        sales: 300,
        share: "12.7%",
      },
      {
        location: "North America",
        sales: 1270,
        share: "53.6%",
      },
    ],
  },
  {
    date: "Mar 23",
    sales: 3192,
    locations: [
      {
        location: "Europe",
        sales: 1000,
        share: "31.3%",
      },
      {
        location: "Asia",
        sales: 900,
        share: "28.2%",
      },
      {
        location: "North America",
        sales: 1292,
        share: "40.5%",
      },
    ],
  },
  {
    date: "Apr 23",
    sales: 2210,
    locations: [
      {
        location: "Europe",
        sales: 600,
        share: "27.2%",
      },
      {
        location: "Asia",
        sales: 700,
        share: "31.7%",
      },
      {
        location: "North America",
        sales: 910,
        share: "41.2%",
      },
    ],
  },
  {
    date: "May 23",
    sales: 3130,
    locations: [
      {
        location: "Europe",
        sales: 900,
        share: "28.8%",
      },
      {
        location: "Asia",
        sales: 1000,
        share: "31.9%",
      },
      {
        location: "North America",
        sales: 1230,
        share: "39.3%",
      },
    ],
  },
  {
    date: "Jun 23",
    sales: 1350,
    locations: [
      {
        location: "Europe",
        sales: 300,
        share: "22.2%",
      },
      {
        location: "Asia",
        sales: 400,
        share: "29.6%",
      },
      {
        location: "North America",
        sales: 650,
        share: "48.2%",
      },
    ],
  },
  {
    date: "Jul 23",
    sales: 2400,
    locations: [
      {
        location: "Europe",
        sales: 900,
        share: "37.5%",
      },
      {
        location: "Asia",
        sales: 700,
        share: "29.2%",
      },
      {
        location: "North America",
        sales: 800,
        share: "33.3%",
      },
    ],
  },
  {
    date: "Aug 23",
    sales: 2600,
    locations: [
      {
        location: "Europe",
        sales: 1000,
        share: "38.5%",
      },
      {
        location: "Asia",
        sales: 800,
        share: "30.8%",
      },
      {
        location: "North America",
        sales: 800,
        share: "30.8%",
      },
    ],
  },
  {
    date: "Sep 23",
    sales: 2800,
    locations: [
      {
        location: "Europe",
        sales: 1100,
        share: "39.3%",
      },
      {
        location: "Asia",
        sales: 700,
        share: "25%",
      },
      {
        location: "North America",
        sales: 1000,
        share: "35.7%",
      },
    ],
  },
  //array-end
]

const currencyFormatter = (number: number) => {
  return "$" + Intl.NumberFormat("us").format(number).toString()
}

const CustomTooltip = ({ payload, active, label }: TooltipProps) => {
  if (!active || !payload || payload.length === 0) return null

  const data = payload.map((item) => ({
    status: item.category,
    value: item.value,
    locations: item.payload.locations,
  }))[0]

  return (
    <div className="w-56 rounded-md border border-gray-200 bg-white text-sm shadow-md dark:border-gray-800 dark:bg-gray-950">
      <div className="flex items-center justify-between border-b border-gray-200 px-4 py-2 dark:border-gray-800">
        <p className="text-gray-500 dark:text-gray-500">{label}</p>
        <p className="font-medium text-gray-900 dark:text-gray-50">
          {currencyFormatter(data.value)}
        </p>
      </div>

      <DonutChart
        data={data.locations}
        value="sales"
        category="location"
        variant="pie"
        showTooltip={false}
        colors={["indigo", "violet", "fuchsia"]}
        className="mx-auto mt-4 !h-20 !w-20"
      />
      <ul
        role="list"
        className="divide-y divide-gray-200 px-4 py-2 text-sm text-gray-500 dark:divide-gray-800 dark:text-gray-500"
      >
        {data.locations.map((locationData: LocationData) => (
          <li
            key={locationData.location}
            className="flex items-center justify-between space-x-4 py-2"
          >
            <div className="flex items-center space-x-2 truncate">
              <span
                className={cx(
                  locationData.location === "Europe"
                    ? "bg-indigo-500 dark:bg-indigo-500"
                    : locationData.location === "Asia"
                      ? "bg-violet-500 dark:bg-violet-500"
                      : locationData.location === "North America"
                        ? "bg-fuchsia-500 dark:bg-fuchsia-500"
                        : "",
                  "size-2.5 shrink-0 rounded-sm",
                )}
                aria-hidden={true}
              />
              <span className="truncate">{locationData.location}</span>
            </div>
            <span className="text-gray-900 dark:text-gray-50">
              {locationData.share}
            </span>
          </li>
        ))}
      </ul>
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
              category: "sales",
              value: 3130,
              index: "May 23",
              color: "blue",
              payload: {
                date: "May 23",
                sales: 3130,
                locations: [
                  { location: "Europe", sales: 900, share: "28.8%" },
                  { location: "Asia", sales: 1000, share: "31.9%" },
                  { location: "North America", sales: 1230, share: "39.3%" },
                ],
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
            categories={["sales"]}
            valueFormatter={currencyFormatter}
            yAxisWidth={70}
            showLegend={false}
            customTooltip={CustomTooltip}
          />
          <BarChart
            className="mt-12 !h-72 sm:hidden"
            data={data}
            index="date"
            categories={["sales"]}
            valueFormatter={currencyFormatter}
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
```


```example/chart-tooltips-chart-tooltip-18.tsx
"use client"

import React from "react"
import { RiArrowDownSLine } from "@remixicon/react"

import { cx } from "@/lib/utils"

import { BarChart, TooltipProps } from "@/atom/BarChart"
import { Button } from "@/atom/Button"
import { CategoryBar } from "@/atom/CategoryBar"
import { Divider } from "@/atom/Divider"

interface LocationData {
  location: string
  sales: number
  share: number
}

interface DataItem {
  date: string
  sales: number
  locations: LocationData[]
}

const data: DataItem[] = [
  //array-start
  {
    date: "Jan 23",
    sales: 1668,
    locations: [
      {
        location: "Europe",
        sales: 400,
        share: 23.9,
      },
      {
        location: "Asia",
        sales: 500,
        share: 29.9,
      },
      {
        location: "North America",
        sales: 768,
        share: 46.1,
      },
    ],
  },
  {
    date: "Feb 23",
    sales: 2370,
    locations: [
      {
        location: "Europe",
        sales: 800,
        share: 33.8,
      },
      {
        location: "Asia",
        sales: 300,
        share: 12.7,
      },
      {
        location: "North America",
        sales: 1270,
        share: 53.6,
      },
    ],
  },
  {
    date: "Mar 23",
    sales: 3192,
    locations: [
      {
        location: "Europe",
        sales: 1000,
        share: 31.3,
      },
      {
        location: "Asia",
        sales: 900,
        share: 28.2,
      },
      {
        location: "North America",
        sales: 1292,
        share: 40.5,
      },
    ],
  },
  {
    date: "Apr 23",
    sales: 2210,
    locations: [
      {
        location: "Europe",
        sales: 600,
        share: 27.2,
      },
      {
        location: "Asia",
        sales: 700,
        share: 31.7,
      },
      {
        location: "North America",
        sales: 910,
        share: 41.2,
      },
    ],
  },
  {
    date: "May 23",
    sales: 3130,
    locations: [
      {
        location: "Europe",
        sales: 900,
        share: 28.8,
      },
      {
        location: "Asia",
        sales: 1000,
        share: 31.9,
      },
      {
        location: "North America",
        sales: 1230,
        share: 39.3,
      },
    ],
  },
  {
    date: "Jun 23",
    sales: 1350,
    locations: [
      {
        location: "Europe",
        sales: 300,
        share: 22.2,
      },
      {
        location: "Asia",
        sales: 400,
        share: 29.6,
      },
      {
        location: "North America",
        sales: 650,
        share: 48.2,
      },
    ],
  },
  {
    date: "Jul 23",
    sales: 2500,
    locations: [
      {
        location: "Europe",
        sales: 1100,
        share: 44.0,
      },
      {
        location: "Asia",
        sales: 600,
        share: 24.0,
      },
      {
        location: "North America",
        sales: 800,
        share: 32.0,
      },
    ],
  },
  {
    date: "Aug 23",
    sales: 2800,
    locations: [
      {
        location: "Europe",
        sales: 1200,
        share: 42.9,
      },
      {
        location: "Asia",
        sales: 700,
        share: 25.0,
      },
      {
        location: "North America",
        sales: 900,
        share: 32.1,
      },
    ],
  },
  {
    date: "Sep 23",
    sales: 2900,
    locations: [
      {
        location: "Europe",
        sales: 1300,
        share: 44.8,
      },
      {
        location: "Asia",
        sales: 800,
        share: 27.6,
      },
      {
        location: "North America",
        sales: 800,
        share: 27.6,
      },
    ],
  },
  //array-end
]

const currencyFormatter = (number: number) => {
  return "$" + Intl.NumberFormat("us").format(number).toString()
}

const CustomTooltip = ({ payload, active }: TooltipProps) => {
  if (!active || !payload || payload.length === 0) return null

  const data = payload.map((item) => ({
    status: item.category,
    value: item.value,
    locations: item.payload.locations,
  }))[0]

  return (
    <div className="w-72 rounded-md border border-gray-200 bg-white text-sm shadow-md dark:border-gray-800 dark:bg-gray-950">
      <div className="rounded-t-md border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900">
        <CategoryBar
          values={data.locations.map(
            (locationData: LocationData) => locationData.share,
          )}
          colors={["indigo", "violet", "fuchsia"]}
          showLabels={false}
        />
      </div>
      <ul
        role="list"
        className="divide-y divide-gray-200 px-4 py-2 text-sm text-gray-500 dark:divide-gray-800 dark:text-gray-500"
      >
        {data.locations.map((locationData: LocationData) => (
          <li
            key={locationData.location}
            className="flex items-center justify-between space-x-2 py-2"
          >
            <div className="flex items-center space-x-2 truncate">
              <span
                className={cx(
                  locationData.location === "Europe"
                    ? "bg-indigo-500 dark:bg-indigo-500"
                    : locationData.location === "Asia"
                      ? "bg-violet-500 dark:bg-violet-500"
                      : locationData.location === "North America"
                        ? "bg-fuchsia-500 dark:bg-fuchsia-500"
                        : "",
                  "size-2.5 shrink-0 rounded-sm",
                )}
                aria-hidden={true}
              />
              <span className="truncate dark:text-gray-300">
                {locationData.location}
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="font-medium text-gray-900 dark:text-gray-50">
                {currencyFormatter(locationData.sales)}
              </span>
              <span className="text-gray-500 dark:text-gray-500">
                ({locationData.share}%)
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Example() {
  const [showDemo, setShowDemo] = React.useState(false)
  return (
    <div className="obfuscate">
      <div className="flex w-full justify-center">
        <CustomTooltip
          label="May 23"
          active={true}
          payload={[
            {
              category: "sales",
              value: 3130,
              index: "May 23",
              color: "blue",
              payload: {
                date: "May 23",
                sales: 3130,
                locations: [
                  {
                    location: "Europe",
                    sales: 900,
                    share: 28.8,
                  },
                  {
                    location: "Asia",
                    sales: 1000,
                    share: 31.9,
                  },
                  {
                    location: "North America",
                    sales: 1230,
                    share: 39.3,
                  },
                ],
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
            categories={["sales"]}
            type="stacked"
            valueFormatter={currencyFormatter}
            yAxisWidth={55}
            showLegend={false}
            customTooltip={CustomTooltip}
          />
          <BarChart
            className="mt-12 !h-80 sm:hidden"
            data={data}
            index="date"
            categories={["sales"]}
            type="stacked"
            valueFormatter={currencyFormatter}
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
```


```example/chart-tooltips-chart-tooltip-20.tsx
"use client"

import React from "react"
import { RiArrowDownSLine } from "@remixicon/react"

import { cx } from "@/lib/utils"

import { BarChart, TooltipProps } from "@/atom/BarChart"
import { Button } from "@/atom/Button"
import { Divider } from "@/atom/Divider"
import { DonutChart } from "@/atom/DonutChart"

interface LocationData {
  location: string
  sales: number
  share: string
}

interface DataItem {
  date: string
  sales: number
  locations: LocationData[]
}

const data: DataItem[] = [
  //array-start
  {
    date: "Jan 23",
    sales: 1668,
    locations: [
      {
        location: "Europe",
        sales: 400,
        share: "23.9%",
      },
      {
        location: "Asia",
        sales: 500,
        share: "29.9%",
      },
      {
        location: "North America",
        sales: 768,
        share: "46.1%",
      },
    ],
  },
  {
    date: "Feb 23",
    sales: 2370,
    locations: [
      {
        location: "Europe",
        sales: 800,
        share: "33.8%",
      },
      {
        location: "Asia",
        sales: 300,
        share: "12.7%",
      },
      {
        location: "North America",
        sales: 1270,
        share: "53.6%",
      },
    ],
  },
  {
    date: "Mar 23",
    sales: 3192,
    locations: [
      {
        location: "Europe",
        sales: 1000,
        share: "31.3%",
      },
      {
        location: "Asia",
        sales: 900,
        share: "28.2%",
      },
      {
        location: "North America",
        sales: 1292,
        share: "40.5%",
      },
    ],
  },
  {
    date: "Apr 23",
    sales: 2210,
    locations: [
      {
        location: "Europe",
        sales: 600,
        share: "27.2%",
      },
      {
        location: "Asia",
        sales: 700,
        share: "31.7%",
      },
      {
        location: "North America",
        sales: 910,
        share: "41.2%",
      },
    ],
  },
  {
    date: "May 23",
    sales: 3130,
    locations: [
      {
        location: "Europe",
        sales: 900,
        share: "28.8%",
      },
      {
        location: "Asia",
        sales: 1000,
        share: "31.9%",
      },
      {
        location: "North America",
        sales: 1230,
        share: "39.3%",
      },
    ],
  },
  {
    date: "Jun 23",
    sales: 1350,
    locations: [
      {
        location: "Europe",
        sales: 300,
        share: "22.2%",
      },
      {
        location: "Asia",
        sales: 400,
        share: "29.6%",
      },
      {
        location: "North America",
        sales: 650,
        share: "48.2%",
      },
    ],
  },
  {
    date: "Jul 23",
    sales: 2800,
    locations: [
      {
        location: "Europe",
        sales: 1000,
        share: "35.7%",
      },
      {
        location: "Asia",
        sales: 800,
        share: "28.6%",
      },
      {
        location: "North America",
        sales: 1000,
        share: "35.7%",
      },
    ],
  },
  {
    date: "Aug 23",
    sales: 2400,
    locations: [
      {
        location: "Europe",
        sales: 900,
        share: "37.5%",
      },
      {
        location: "Asia",
        sales: 600,
        share: "25.0%",
      },
      {
        location: "North America",
        sales: 900,
        share: "37.5%",
      },
    ],
  },
  {
    date: "Sep 23",
    sales: 3200,
    locations: [
      {
        location: "Europe",
        sales: 1200,
        share: "37.5%",
      },
      {
        location: "Asia",
        sales: 1000,
        share: "31.3%",
      },
      {
        location: "North America",
        sales: 1000,
        share: "31.3%",
      },
    ],
  },
  //array-end
]

const currencyFormatter = (number: number) => {
  return "$" + Intl.NumberFormat("us").format(number).toString()
}

const CustomTooltip = ({ payload, active, label }: TooltipProps) => {
  if (!active || !payload || payload.length === 0) return null

  const data = payload.map((item) => ({
    status: item.category,
    value: item.value,
    locations: item.payload.locations,
  }))[0]

  return (
    <div className="w-72 rounded-md border border-gray-200 bg-white text-sm shadow-md dark:border-gray-800 dark:bg-gray-950">
      <p className="flex items-center justify-between rounded-t-md border-b border-gray-200 px-4 py-2 dark:border-gray-800">
        <span className="text-gray-500 dark:text-gray-500">{label}</span>
        <span className="font-medium text-gray-700 dark:text-gray-300">
          {currencyFormatter(data.value)}
        </span>
      </p>

      <div className="flex items-center space-x-6 p-4">
        <DonutChart
          data={data.locations}
          value="sales"
          category="location"
          variant="pie"
          showTooltip={false}
          colors={["indigo", "violet", "fuchsia"]}
          className="!h-20 !flex-1 !shrink-0"
        />
        <ul
          role="list"
          className="w-2/3 divide-y divide-gray-200 text-sm text-gray-500 dark:divide-gray-800 dark:text-gray-500"
        >
          {data.locations.map((locationData: LocationData) => (
            <li
              key={locationData.location}
              className="flex items-center justify-between space-x-4 py-2"
            >
              <div className="flex items-center space-x-2 truncate">
                <span
                  className={cx(
                    locationData.location === "Europe"
                      ? "bg-indigo-500 dark:bg-indigo-500"
                      : locationData.location === "Asia"
                        ? "bg-violet-500 dark:bg-violet-500"
                        : locationData.location === "North America"
                          ? "bg-fuchsia-500 dark:bg-fuchsia-500"
                          : "",
                    "size-2.5 shrink-0 rounded-sm",
                  )}
                  aria-hidden={true}
                />
                <span className="truncate dark:text-gray-300">
                  {locationData.location}
                </span>
              </div>
              <span className="font-medium text-gray-900 dark:text-gray-300">
                {locationData.share}
              </span>
            </li>
          ))}
        </ul>
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
              category: "sales",
              value: 3130,
              index: "May 23",
              color: "blue",
              payload: {
                date: "May 23",
                sales: 3130,
                locations: [
                  { location: "Europe", sales: 900, share: "28.8%" },
                  { location: "Asia", sales: 1000, share: "31.9%" },
                  { location: "North America", sales: 1230, share: "39.3%" },
                ],
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
            categories={["sales"]}
            type="stacked"
            colors={["blue"]}
            valueFormatter={currencyFormatter}
            yAxisWidth={50}
            showLegend={false}
            customTooltip={CustomTooltip}
          />
          <BarChart
            className="mt-12 !h-80 sm:hidden"
            data={data}
            index="date"
            categories={["sales"]}
            type="stacked"
            colors={["blue"]}
            valueFormatter={currencyFormatter}
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
```


```example/chart-tooltips-chart-tooltip-08.tsx
"use client"

import { RiArrowDownSLine } from "@remixicon/react"
import React from "react"

import { BarChart, TooltipProps } from "@/atom/BarChart"
import { Button } from "@/atom/Button"
import { Divider } from "@/atom/Divider"
import { ProgressCircle, ProgressCircleProps } from "@/atom/ProgressCircle"

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

const statusColors: {
  [key in Issue["status"]]: ProgressCircleProps["variant"]
} = {
  completed: "success",
  "in progress": "warning",
  "on hold": "neutral",
}

const CustomTooltip = ({ active, payload, label }: TooltipProps) => {
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
    <div className="w-60 rounded-md border border-gray-200 bg-white px-4 py-3 text-sm shadow-md dark:border-gray-800 dark:bg-gray-950">
      <p className="flex items-center justify-between">
        <span className="font-medium text-gray-900 dark:text-gray-50">
          Status
        </span>
        <span className="text-gray-500 dark:text-gray-500">{label}</span>
      </p>
      <Divider className="!my-3" />
      <div className="space-y-2">
        {data.map((item, index) => (
          <div key={index} className="flex items-center space-x-2.5">
            <ProgressCircle
              value={100}
              radius={7}
              strokeWidth={2.5}
              variant={statusColors[item.status]}
              aria-hidden={true}
            />
            <div className="flex w-full justify-between">
              <span className="text-gray-500 dark:text-gray-300">
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
                "on hold": 12,
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
                "on hold": 12,
              },
            },
            {
              category: "on hold",
              value: 12,
              index: "Oct 2, 2023",
              color: "violet",
              payload: {
                date: "Oct 2, 2023",
                completed: 20,
                "in progress": 97,
                "on hold": 12,
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
            colors={["emerald", "yellow", "gray"]}
            valueFormatter={valueFormatter}
            yAxisWidth={40}
            showLegend={false}
            customTooltip={CustomTooltip}
          />
          <BarChart
            className="mt-12 !h-80 sm:hidden"
            data={formattedArray}
            index="date"
            categories={["completed", "in progress", "on hold"]}
            colors={["emerald", "yellow", "gray"]}
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
```


```example/chart-tooltips-chart-tooltip-09.tsx
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
```


```example/chart-tooltips-chart-tooltip-21.tsx
"use client"

import React from "react"
import { RiArrowDownSLine } from "@remixicon/react"

import { cx } from "@/lib/utils"

import { BarChart, TooltipProps } from "@/atom/BarChart"
import { Button } from "@/atom/Button"
import { Divider } from "@/atom/Divider"

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
```


