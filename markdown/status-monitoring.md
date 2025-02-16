```example/status-monitoring-tracker-01.tsx
"use client"

import { RiCheckboxCircleFill } from "@remixicon/react"

import { Card } from "@/atom/Card"
import { Tracker } from "@/atom/Tracker"

const data = [
  //array-start
  {
    tooltip: "23 Sep, 2023",
    status: "Operational",
  },
  {
    tooltip: "24 Sep, 2023",
    status: "Operational",
  },
  {
    tooltip: "25 Sep, 2023",
    status: "Operational",
  },
  {
    tooltip: "26 Sep, 2023",
    status: "Operational",
  },
  {
    tooltip: "27 Sep, 2023",
    status: "Operational",
  },
  {
    tooltip: "28 Sep, 2023",
    status: "Operational",
  },
  {
    tooltip: "29 Sep, 2023",
    status: "Operational",
  },
  {
    tooltip: "30 Sep, 2023",
    status: "Operational",
  },
  {
    tooltip: "1 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "2 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "3 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "4 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "5 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "6 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "7 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "8 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "9 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "10 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "11 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "12 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "13 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "14 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "15 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "16 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "17 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "18 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "19 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "20 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "21 Oct, 2023",
    status: "Downtime",
  },
  {
    tooltip: "22 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "23 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "24 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "25 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "26 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "27 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "28 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "29 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "30 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "31 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "1 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "2 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "3 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "4 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "5 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "6 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "7 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "8 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "9 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "10 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "11 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "12 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "13 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "14 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "15 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "16 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "17 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "18 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "19 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "20 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "21 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "22 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "23 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "24 Nov, 2023",
    status: "Downtime",
  },
  {
    tooltip: "25 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "26 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "27 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "28 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "29 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "30 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "1 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "2 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "3 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "4 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "5 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "6 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "7 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "8 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "9 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "10 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "11 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "12 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "13 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "14 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "15 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "16 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "17 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "18 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "19 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "20 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "21 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "22 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "23 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "24 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "25 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "26 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "27 Dec, 2023",
    status: "Operational",
  },
  //array-end
]

type Status = "Operational" | "Downtime" | "Inactive"

const colorMapping: Record<Status, string> = {
  Operational: "bg-emerald-500 dark:bg-emerald-500",
  Downtime: "bg-red-500 dark:bg-red-500",
  Inactive: "bg-gray-300 dark:bg-gray-700",
}

const combinedData = data.map((item) => {
  return {
    ...item,
    color: colorMapping[item.status as Status],
  }
})

export default function Example() {
  return (
    <div className="obfuscate">
      <Card>
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-gray-900 dark:text-gray-50">
            Lena&#39;s Website
          </h3>
          <span
            tabIndex={1}
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm text-gray-700 ring-1 ring-gray-200 ring-inset dark:text-gray-300 dark:ring-gray-800"
          >
            <span
              className="-ml-0.5 size-2 rounded-full bg-emerald-500 dark:bg-emerald-500"
              aria-hidden={true}
            />
            Operational
          </span>
        </div>
        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <RiCheckboxCircleFill
              className="size-5 shrink-0 text-emerald-500 dark:text-emerald-500"
              aria-hidden={true}
            />
            <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
              example.com
            </p>
          </div>
          <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
            99.9% uptime
          </p>
        </div>
        <Tracker data={combinedData} className="mt-4 hidden w-full lg:flex" />
        <Tracker
          data={combinedData.slice(30, 90)}
          className="mt-3 hidden w-full sm:flex lg:hidden"
        />
        <Tracker
          data={combinedData.slice(60, 90)}
          className="mt-3 flex w-full sm:hidden"
        />
        <div className="mt-3 flex items-center justify-between text-sm text-gray-500 dark:text-gray-500">
          <span className="hidden lg:block">90 days ago</span>
          <span className="hidden sm:block lg:hidden">60 days ago</span>
          <span className="sm:hidden">30 days ago</span>
          <span>Today</span>
        </div>
      </Card>
    </div>
  )
}
```


```example/status-monitoring-tracker-03.tsx
"use client"

import { Card } from "@/atom/Card"
import { Tracker } from "@/atom/Tracker"

const data = [
  //array-start
  {
    tooltip: "23 Sep, 2023",
    status: "Inactive",
  },
  {
    tooltip: "24 Sep, 2023",
    status: "Inactive",
  },
  {
    tooltip: "25 Sep, 2023",
    status: "Inactive",
  },
  {
    tooltip: "26 Sep, 2023",
    status: "Inactive",
  },
  {
    tooltip: "27 Sep, 2023",
    status: "Inactive",
  },
  {
    tooltip: "28 Sep, 2023",
    status: "Inactive",
  },
  {
    tooltip: "29 Sep, 2023",
    status: "Inactive",
  },
  {
    tooltip: "30 Sep, 2023",
    status: "Inactive",
  },
  {
    tooltip: "1 Oct, 2023",
    status: "Inactive",
  },
  {
    tooltip: "2 Oct, 2023",
    status: "Inactive",
  },
  {
    tooltip: "3 Oct, 2023",
    status: "Inactive",
  },
  {
    tooltip: "4 Oct, 2023",
    status: "Inactive",
  },
  {
    tooltip: "5 Oct, 2023",
    status: "Inactive",
  },
  {
    tooltip: "6 Oct, 2023",
    status: "Inactive",
  },
  {
    tooltip: "7 Oct, 2023",
    status: "Inactive",
  },
  {
    tooltip: "8 Oct, 2023",
    status: "Inactive",
  },
  {
    tooltip: "9 Oct, 2023",
    status: "Inactive",
  },
  {
    tooltip: "10 Oct, 2023",
    status: "Inactive",
  },
  {
    tooltip: "11 Oct, 2023",
    status: "Inactive",
  },
  {
    tooltip: "12 Oct, 2023",
    status: "Inactive",
  },
  {
    tooltip: "13 Oct, 2023",
    status: "Degraded",
  },
  {
    tooltip: "14 Oct, 2023",
    status: "Degraded",
  },
  {
    tooltip: "15 Oct, 2023",
    status: "Downtime",
  },
  {
    tooltip: "16 Oct, 2023",
    status: "Degraded",
  },
  {
    tooltip: "17 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "18 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "19 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "20 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "21 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "22 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "23 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "24 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "25 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "26 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "27 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "28 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "29 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "30 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "31 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "1 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "2 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "3 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "4 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "5 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "6 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "7 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "8 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "9 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "10 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "11 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "12 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "13 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "14 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "15 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "16 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "17 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "18 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "19 Nov, 2023",
    status: "Degraded",
  },
  {
    tooltip: "20 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "21 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "22 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "23 Nov, 2023",
    status: "Degraded",
  },
  {
    tooltip: "24 Nov, 2023",
    status: "Downtime",
  },
  {
    tooltip: "25 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "26 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "27 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "28 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "29 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "30 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "1 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "2 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "3 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "4 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "5 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "6 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "7 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "8 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "9 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "10 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "11 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "12 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "13 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "14 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "15 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "16 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "17 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "18 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "19 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "20 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "21 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "22 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "23 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "24 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "25 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "26 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "27 Dec, 2023",
    status: "Operational",
  },
  //array-end
]

type Status = "Operational" | "Downtime" | "Inactive" | "Degraded"

const colorMapping: Record<Status, string> = {
  Operational: "bg-emerald-500 dark:bg-emerald-500",
  Downtime: "bg-red-500 dark:bg-red-500",
  Degraded: "bg-amber-500 dark:bg-amber-500",
  Inactive: "bg-gray-300 dark:bg-gray-700",
}

const combinedData = data.map((item) => {
  return {
    ...item,
    color: colorMapping[item.status as Status],
  }
})

export default function Example() {
  return (
    <div className="obfuscate">
      <Card>
        <div className="flex-wrap items-center gap-2 sm:flex">
          <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
            Scanned databases:
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-2 sm:mt-0">
            <span className="rounded px-3 py-1 font-mono text-xs text-gray-700 ring-1 ring-gray-200 ring-inset dark:text-gray-300 dark:ring-gray-800">
              sales_data
            </span>
            <span className="rounded px-3 py-1 font-mono text-xs text-gray-700 ring-1 ring-gray-200 ring-inset dark:text-gray-300 dark:ring-gray-800">
              customer_data
            </span>
            <span className="rounded px-3 py-1 font-mono text-xs text-gray-700 ring-1 ring-gray-200 ring-inset dark:text-gray-300 dark:ring-gray-800">
              location_data
            </span>
            <span className="rounded px-3 py-1 font-mono text-xs text-gray-700 ring-1 ring-gray-200 ring-inset dark:text-gray-300 dark:ring-gray-800">
              test_data
            </span>
          </div>
        </div>
        <Tracker data={combinedData} className="mt-4 hidden w-full lg:flex" />
        <Tracker
          data={combinedData.slice(30, 90)}
          className="mt-3 hidden w-full sm:flex lg:hidden"
        />
        <Tracker
          data={combinedData.slice(60, 90)}
          className="mt-3 flex w-full sm:hidden"
        />
        <div className="mt-6 items-center justify-between sm:flex">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <span
                className="shrink-0 animate-pulse rounded-full bg-emerald-500/30 p-1 dark:bg-emerald-500/30"
                aria-hidden={true}
              >
                <span className="block size-2 rounded-full bg-emerald-500 dark:bg-emerald-500" />
              </span>
              <span className="text-sm font-medium text-gray-900 dark:text-gray-50">
                Running
              </span>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-500">/</span>
            <span className="truncate text-sm text-gray-700 dark:text-gray-300">
              Next run: 1 hour and 2 minutes
            </span>
          </div>
          <a
            href="#"
            className="mt-4 block text-sm font-medium text-blue-500 sm:mt-0 dark:text-blue-500"
          >
            View more &#8594;
          </a>
        </div>
      </Card>
    </div>
  )
}
```


```example/status-monitoring-tracker-02.tsx
"use client"

import { useState } from "react"
import { RiArrowDownSLine, RiCheckboxCircleFill } from "@remixicon/react"

import { cx } from "@/lib/utils"

import { Card } from "@/atom/Card"
import { Tracker } from "@/atom/Tracker"

const data = [
  //array-start
  {
    tooltip: "23 Sep, 2023",
    status: "Operational",
  },
  {
    tooltip: "24 Sep, 2023",
    status: "Operational",
  },
  {
    tooltip: "25 Sep, 2023",
    status: "Operational",
  },
  {
    tooltip: "26 Sep, 2023",
    status: "Operational",
  },
  {
    tooltip: "27 Sep, 2023",
    status: "Operational",
  },
  {
    tooltip: "28 Sep, 2023",
    status: "Operational",
  },
  {
    tooltip: "29 Sep, 2023",
    status: "Downtime",
  },
  {
    tooltip: "30 Sep, 2023",
    status: "Operational",
  },
  {
    tooltip: "1 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "2 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "3 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "4 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "5 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "6 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "7 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "8 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "9 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "10 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "11 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "12 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "13 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "14 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "15 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "16 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "17 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "18 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "19 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "20 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "21 Oct, 2023",
    status: "Downtime",
  },
  {
    tooltip: "22 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "23 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "24 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "25 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "26 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "27 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "28 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "29 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "30 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "31 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "1 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "2 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "3 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "4 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "5 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "6 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "7 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "8 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "9 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "10 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "11 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "12 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "13 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "14 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "15 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "16 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "17 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "18 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "19 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "20 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "21 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "22 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "23 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "24 Nov, 2023",
    status: "Downtime",
  },
  {
    tooltip: "25 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "26 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "27 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "28 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "29 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "30 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "1 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "2 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "3 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "4 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "5 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "6 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "7 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "8 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "9 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "10 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "11 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "12 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "13 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "14 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "15 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "16 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "17 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "18 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "19 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "20 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "21 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "22 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "23 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "24 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "25 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "26 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "27 Dec, 2023",
    status: "Operational",
  },
  //array-end
]

type Status = "Operational" | "Downtime" | "Inactive"

const colorMapping: Record<Status, string> = {
  Operational: "bg-emerald-500 dark:bg-emerald-500",
  Downtime: "bg-red-500 dark:bg-red-500",
  Inactive: "bg-gray-300 dark:bg-gray-700",
}

const combinedData = data.map((item) => {
  return {
    ...item,
    color: colorMapping[item.status as Status],
  }
})

export default function Example() {
  const [showContent, setShowContent] = useState(false)
  return (
    <div className="obfuscate">
      <Card>
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-gray-900 dark:text-gray-50">
            Lena&#39;s Website
          </h3>
          <span
            tabIndex={1}
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm text-gray-700 ring-1 ring-gray-200 ring-inset dark:text-gray-300 dark:ring-gray-800"
          >
            <span
              className="-ml-0.5 size-2 rounded-full bg-emerald-500 dark:bg-emerald-500"
              aria-hidden={true}
            />
            Operational
          </span>
        </div>
        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center space-x-1.5">
            <RiCheckboxCircleFill
              className="size-5 shrink-0 text-emerald-500"
              aria-hidden={true}
            />
            <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
              example.com
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
              99.9% uptime
            </p>
            <button
              className="hidden sm:inline-flex sm:items-center sm:space-x-1.5"
              onClick={() => setShowContent(!showContent)}
            >
              <span className="text-sm font-medium text-blue-500 dark:text-blue-500">
                Show details
              </span>
              <RiArrowDownSLine
                className={cx(
                  showContent ? "rotate-180" : "",
                  "size-5 transform text-blue-500 transition-transform dark:text-blue-500",
                )}
                aria-hidden={true}
              />
            </button>
          </div>
        </div>
        {showContent && (
          <div className="mt-3 rounded-md bg-gray-100 p-4 dark:bg-gray-800">
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-50">
              Atypical high requests
            </h3>
            <p className="mt-2 text-sm/6 text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
          </div>
        )}
        <Tracker data={combinedData} className="mt-4 hidden w-full lg:flex" />
        <Tracker
          data={combinedData.slice(30, 90)}
          className="mt-3 hidden w-full sm:flex lg:hidden"
        />
        <Tracker
          data={combinedData.slice(60, 90)}
          className="mt-3 flex w-full sm:hidden"
        />
        <div className="mt-3 flex items-center justify-between text-sm text-gray-500 dark:text-gray-500">
          <span className="hidden lg:block">90 days ago</span>
          <span className="hidden sm:block lg:hidden">60 days ago</span>
          <span className="sm:hidden">30 days ago</span>
          <span>Today</span>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-2">
          <span
            tabIndex={1}
            className="inline-flex items-center gap-x-2 rounded-md bg-gray-100 px-2 py-0.5 text-sm text-gray-600 dark:bg-gray-800 dark:text-gray-300"
          >
            <span
              className="size-2 rounded-full bg-emerald-500 dark:bg-emerald-500"
              aria-hidden={true}
            />
            Operational
          </span>
          <span
            tabIndex={1}
            className="inline-flex items-center gap-x-2 rounded-md bg-gray-100 px-2 py-0.5 text-sm text-gray-600 dark:bg-gray-800 dark:text-gray-300"
          >
            <span
              className="size-2 rounded-full bg-red-500 dark:bg-red-500"
              aria-hidden={true}
            />
            Downtime
          </span>
          <span
            tabIndex={1}
            className="inline-flex items-center gap-x-2 rounded-md bg-gray-100 px-2 py-0.5 text-sm text-gray-600 dark:bg-gray-800 dark:text-gray-300"
          >
            <span
              className="size-2 rounded-full bg-gray-500 dark:bg-gray-500"
              aria-hidden={true}
            />
            Maintenance
          </span>
        </div>
      </Card>
    </div>
  )
}
```


```example/status-monitoring-tracker-06.tsx
"use client"

import {
  RiCheckboxCircleFill,
  RiCloudFill,
  RiMapPin2Fill,
  RiTimeFill,
} from "@remixicon/react"

import { Card } from "@/atom/Card"
import { Tracker } from "@/atom/Tracker"

const data = [
  //array-start
  {
    tooltip: "23 Sep, 2023",
    status: "Operational",
  },
  {
    tooltip: "24 Sep, 2023",
    status: "Operational",
  },
  {
    tooltip: "25 Sep, 2023",
    status: "Operational",
  },
  {
    tooltip: "26 Sep, 2023",
    status: "Operational",
  },
  {
    tooltip: "27 Sep, 2023",
    status: "Operational",
  },
  {
    tooltip: "28 Sep, 2023",
    status: "Operational",
  },
  {
    tooltip: "29 Sep, 2023",
    status: "Downtime",
  },
  {
    tooltip: "30 Sep, 2023",
    status: "Operational",
  },
  {
    tooltip: "1 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "2 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "3 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "4 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "5 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "6 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "7 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "8 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "9 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "10 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "11 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "12 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "13 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "14 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "15 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "16 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "17 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "18 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "19 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "20 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "21 Oct, 2023",
    status: "Downtime",
  },
  {
    tooltip: "22 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "23 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "24 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "25 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "26 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "27 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "28 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "29 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "30 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "31 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "1 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "2 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "3 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "4 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "5 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "6 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "7 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "8 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "9 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "10 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "11 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "12 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "13 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "14 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "15 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "16 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "17 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "18 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "19 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "20 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "21 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "22 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "23 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "24 Nov, 2023",
    status: "Downtime",
  },
  {
    tooltip: "25 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "26 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "27 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "28 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "29 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "30 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "1 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "2 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "3 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "4 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "5 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "6 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "7 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "8 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "9 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "10 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "11 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "12 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "13 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "14 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "15 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "16 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "17 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "18 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "19 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "20 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "21 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "22 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "23 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "24 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "25 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "26 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "27 Dec, 2023",
    status: "Operational",
  },
  //array-end
]

type Status = "Operational" | "Downtime" | "Inactive"

const colorMapping: Record<Status, string> = {
  Operational: "bg-emerald-500 dark:bg-emerald-500",
  Downtime: "bg-red-500 dark:bg-red-500",
  Inactive: "bg-gray-300 dark:bg-gray-700",
}

const combinedData = data.map((item) => {
  return {
    ...item,
    color: colorMapping[item.status as Status],
  }
})

export default function Example() {
  return (
    <div className="obfuscate">
      <Card className="sm:mx-auto sm:max-w-xl">
        <div className="flex space-x-3">
          <span
            className="w-1 shrink-0 rounded bg-emerald-500 dark:bg-emerald-500"
            aria-hidden={true}
          />
          <div>
            <div className="flex items-center space-x-1.5">
              <RiCheckboxCircleFill
                className="size-5 shrink-0 text-emerald-500 dark:text-emerald-500"
                aria-hidden={true}
              />
              <span className="text-sm font-medium text-emerald-500 dark:text-emerald-500">
                Operational
              </span>
            </div>
            <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-gray-50">
              Emma&#39;s Online-Shop
            </h3>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span
                tabIndex={1}
                className="inline-flex items-center gap-1.5 rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400"
              >
                <RiMapPin2Fill
                  className="-ml-0.5 size-4 shrink-0"
                  aria-hidden={true}
                />
                US-East 1
              </span>
              <span
                tabIndex={1}
                className="inline-flex items-center gap-1.5 rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400"
              >
                <RiCloudFill
                  className="-ml-0.5 size-4 shrink-0"
                  aria-hidden={true}
                />
                Synced
              </span>
              <span
                tabIndex={1}
                className="inline-flex items-center gap-1.5 rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400"
              >
                <RiTimeFill
                  className="-ml-0.5 size-4 shrink-0"
                  aria-hidden={true}
                />
                Last run: 23/12/23 14:01
              </span>
            </div>
          </div>
        </div>
        <Tracker
          data={combinedData.slice(30, 90)}
          className="mt-6 hidden sm:flex"
        />
        <Tracker
          data={combinedData.slice(60, 90)}
          className="mt-6 flex sm:hidden"
        />

        <div className="mt-3 flex items-center justify-between text-sm text-gray-500 dark:text-gray-500">
          <span className="hidden sm:block">60 days ago</span>
          <span className="sm:hidden">30 days ago</span>
          <span>Today</span>
        </div>
      </Card>
    </div>
  )
}
```


```example/status-monitoring-tracker-07.tsx
"use client"

import { RiCheckboxCircleFill } from "@remixicon/react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/atom/Accordion"
import { Card } from "@/atom/Card"
import { Tracker } from "@/atom/Tracker"

const data = [
  //array-start
  { tooltip: "29 Sep, 2023", status: "Downtime" },
  { tooltip: "30 Sep, 2023", status: "Operational" },
  { tooltip: "1 Oct, 2023", status: "Operational" },
  { tooltip: "2 Oct, 2023", status: "Operational" },
  { tooltip: "3 Oct, 2023", status: "Operational" },
  { tooltip: "4 Oct, 2023", status: "Operational" },
  { tooltip: "5 Oct, 2023", status: "Operational" },
  { tooltip: "6 Oct, 2023", status: "Operational" },
  { tooltip: "7 Oct, 2023", status: "Operational" },
  { tooltip: "8 Oct, 2023", status: "Operational" },
  { tooltip: "9 Oct, 2023", status: "Operational" },
  { tooltip: "10 Oct, 2023", status: "Operational" },
  { tooltip: "11 Oct, 2023", status: "Operational" },
  { tooltip: "12 Oct, 2023", status: "Operational" },
  { tooltip: "13 Oct, 2023", status: "Operational" },
  { tooltip: "14 Oct, 2023", status: "Operational" },
  { tooltip: "15 Oct, 2023", status: "Operational" },
  { tooltip: "16 Oct, 2023", status: "Operational" },
  { tooltip: "17 Oct, 2023", status: "Operational" },
  { tooltip: "18 Oct, 2023", status: "Operational" },
  { tooltip: "19 Oct, 2023", status: "Operational" },
  { tooltip: "20 Oct, 2023", status: "Operational" },
  { tooltip: "21 Oct, 2023", status: "Downtime" },
  { tooltip: "22 Oct, 2023", status: "Operational" },
  { tooltip: "23 Oct, 2023", status: "Operational" },
  { tooltip: "24 Oct, 2023", status: "Operational" },
  { tooltip: "25 Oct, 2023", status: "Operational" },
  { tooltip: "26 Oct, 2023", status: "Operational" },
  { tooltip: "27 Oct, 2023", status: "Operational" },
  { tooltip: "28 Oct, 2023", status: "Operational" },
  { tooltip: "29 Oct, 2023", status: "Operational" },
  { tooltip: "30 Oct, 2023", status: "Operational" },
  { tooltip: "31 Oct, 2023", status: "Operational" },
  { tooltip: "1 Nov, 2023", status: "Operational" },
  { tooltip: "2 Nov, 2023", status: "Operational" },
  { tooltip: "3 Nov, 2023", status: "Operational" },
  { tooltip: "4 Nov, 2023", status: "Operational" },
  { tooltip: "5 Nov, 2023", status: "Operational" },
  { tooltip: "6 Nov, 2023", status: "Operational" },
  { tooltip: "7 Nov, 2023", status: "Operational" },
  { tooltip: "8 Nov, 2023", status: "Operational" },
  { tooltip: "9 Nov, 2023", status: "Operational" },
  { tooltip: "10 Nov, 2023", status: "Operational" },
  { tooltip: "11 Nov, 2023", status: "Operational" },
  { tooltip: "12 Nov, 2023", status: "Operational" },
  { tooltip: "13 Nov, 2023", status: "Operational" },
  { tooltip: "14 Nov, 2023", status: "Operational" },
  { tooltip: "15 Nov, 2023", status: "Operational" },
  { tooltip: "16 Nov, 2023", status: "Operational" },
  { tooltip: "17 Nov, 2023", status: "Operational" },
  { tooltip: "18 Nov, 2023", status: "Operational" },
  { tooltip: "19 Nov, 2023", status: "Operational" },
  { tooltip: "20 Nov, 2023", status: "Operational" },
  { tooltip: "21 Nov, 2023", status: "Operational" },
  { tooltip: "22 Nov, 2023", status: "Operational" },
  { tooltip: "23 Nov, 2023", status: "Operational" },
  { tooltip: "24 Nov, 2023", status: "Downtime" },
  { tooltip: "25 Nov, 2023", status: "Operational" },
  { tooltip: "26 Nov, 2023", status: "Operational" },
  { tooltip: "27 Nov, 2023", status: "Operational" },
  { tooltip: "28 Nov, 2023", status: "Operational" },
  { tooltip: "29 Nov, 2023", status: "Operational" },
  { tooltip: "30 Nov, 2023", status: "Operational" },
  { tooltip: "1 Dec, 2023", status: "Operational" },
  { tooltip: "2 Dec, 2023", status: "Operational" },
  { tooltip: "3 Dec, 2023", status: "Operational" },
  { tooltip: "4 Dec, 2023", status: "Operational" },
  { tooltip: "5 Dec, 2023", status: "Operational" },
  { tooltip: "6 Dec, 2023", status: "Operational" },
  { tooltip: "7 Dec, 2023", status: "Operational" },
  { tooltip: "8 Dec, 2023", status: "Operational" },
  { tooltip: "9 Dec, 2023", status: "Operational" },
  { tooltip: "10 Dec, 2023", status: "Downtime" },
  { tooltip: "11 Dec, 2023", status: "Operational" },
  { tooltip: "12 Dec, 2023", status: "Operational" },
  { tooltip: "13 Dec, 2023", status: "Operational" },
  { tooltip: "14 Dec, 2023", status: "Operational" },
  { tooltip: "15 Dec, 2023", status: "Operational" },
  { tooltip: "16 Dec, 2023", status: "Operational" },
  { tooltip: "17 Dec, 2023", status: "Downtime" },
  { tooltip: "18 Dec, 2023", status: "Operational" },
  { tooltip: "19 Dec, 2023", status: "Operational" },
  { tooltip: "20 Dec, 2023", status: "Operational" },
  { tooltip: "21 Dec, 2023", status: "Operational" },
  { tooltip: "22 Dec, 2023", status: "Operational" },
  { tooltip: "23 Dec, 2023", status: "Operational" },
  { tooltip: "24 Dec, 2023", status: "Operational" },
  { tooltip: "25 Dec, 2023", status: "Operational" },
  { tooltip: "26 Dec, 2023", status: "Operational" },
  { tooltip: "27 Dec, 2023", status: "Operational" },
  //array-end
]

type Status = "Operational" | "Downtime" | "Inactive"

const colorMapping: Record<Status, string> = {
  Operational: "bg-emerald-500 dark:bg-emerald-500",
  Downtime: "bg-red-500 dark:bg-red-500",
  Inactive: "bg-gray-300 dark:bg-gray-700",
}

const combinedData = data.map((item) => {
  return {
    ...item,
    color: colorMapping[item.status as Status],
  }
})

export default function Example() {
  return (
    <div className="obfuscate">
      <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
        Platform status
      </h1>
      <p className="text-sm text-gray-700 dark:text-gray-300">
        Last updated on Dec 27 at 03:12am PST
      </p>
      <Card className="mt-6 space-y-3">
        <Accordion type="multiple" className="space-y-3">
          {["example.com", "acme.com", "tremor.so"].map((site, index) => (
            <AccordionItem
              key={index}
              value={String(index + 1)}
              className="!border-none"
            >
              <AccordionTrigger className="h-12 rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-900 hover:bg-gray-100/70 dark:bg-gray-800 dark:text-gray-50 hover:dark:bg-gray-800/70">
                <div className="flex w-full items-center justify-between">
                  <span>{site}</span>
                  <span className="mr-6 flex items-center space-x-1">
                    <RiCheckboxCircleFill
                      className="size-5 shrink-0 text-emerald-600 dark:text-emerald-500"
                      aria-hidden={true}
                    />
                    <span className="text-sm text-gray-900 dark:text-gray-50">
                      Operational
                    </span>
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="mt-6 px-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1.5">
                    <RiCheckboxCircleFill
                      className="size-5 shrink-0 text-emerald-500 dark:text-emerald-500"
                      aria-hidden={true}
                    />
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
                      {site}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
                    99.9% uptime
                  </p>
                </div>
                <Tracker
                  data={combinedData}
                  className="mt-4 hidden w-full lg:flex"
                />
                <Tracker
                  data={combinedData.slice(30, 90)}
                  className="mt-3 hidden w-full sm:flex lg:hidden"
                />
                <Tracker
                  data={combinedData.slice(60, 90)}
                  className="mt-3 flex w-full sm:hidden"
                />
                <div className="mt-3 flex items-center justify-between text-sm text-gray-500 dark:text-gray-500">
                  <span className="hidden lg:block">90 days ago</span>
                  <span className="hidden sm:block lg:hidden">60 days ago</span>
                  <span className="sm:hidden">30 days ago</span>
                  <span>Today</span>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Card>
    </div>
  )
}
```


```example/status-monitoring-tracker-05.tsx
"use client"

import { RiCheckboxCircleFill } from "@remixicon/react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/atom/Accordion"
import { Card } from "@/atom/Card"
import { Tracker } from "@/atom/Tracker"

const data = [
  //array-start
  {
    tooltip: "23 Sep, 2023",
    status: "Operational",
  },
  {
    tooltip: "24 Sep, 2023",
    status: "Operational",
  },
  {
    tooltip: "25 Sep, 2023",
    status: "Operational",
  },
  {
    tooltip: "26 Sep, 2023",
    status: "Operational",
  },
  {
    tooltip: "27 Sep, 2023",
    status: "Operational",
  },
  {
    tooltip: "28 Sep, 2023",
    status: "Operational",
  },
  {
    tooltip: "29 Sep, 2023",
    status: "Downtime",
  },
  {
    tooltip: "30 Sep, 2023",
    status: "Operational",
  },
  {
    tooltip: "1 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "2 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "3 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "4 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "5 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "6 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "7 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "8 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "9 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "10 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "11 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "12 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "13 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "14 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "15 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "16 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "17 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "18 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "19 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "20 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "21 Oct, 2023",
    status: "Downtime",
  },
  {
    tooltip: "22 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "23 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "24 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "25 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "26 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "27 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "28 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "29 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "30 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "31 Oct, 2023",
    status: "Operational",
  },
  {
    tooltip: "1 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "2 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "3 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "4 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "5 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "6 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "7 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "8 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "9 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "10 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "11 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "12 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "13 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "14 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "15 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "16 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "17 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "18 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "19 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "20 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "21 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "22 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "23 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "24 Nov, 2023",
    status: "Downtime",
  },
  {
    tooltip: "25 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "26 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "27 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "28 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "29 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "30 Nov, 2023",
    status: "Operational",
  },
  {
    tooltip: "1 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "2 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "3 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "4 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "5 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "6 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "7 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "8 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "9 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "10 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "11 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "12 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "13 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "14 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "15 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "16 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "17 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "18 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "19 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "20 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "21 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "22 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "23 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "24 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "25 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "26 Dec, 2023",
    status: "Operational",
  },
  {
    tooltip: "27 Dec, 2023",
    status: "Operational",
  },
  //array-end
]

type Status = "Operational" | "Downtime" | "Inactive"

const colorMapping: Record<Status, string> = {
  Operational: "bg-emerald-500 dark:bg-emerald-500",
  Downtime: "bg-red-500 dark:bg-red-500",
  Inactive: "bg-gray-300 dark:bg-gray-700",
}

const combinedData = data.map((item) => {
  return {
    ...item,
    color: colorMapping[item.status as Status],
  }
})

export default function Example() {
  return (
    <div className="obfuscate">
      <Card>
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-gray-900 dark:text-gray-50">
            Lena&#39;s Website
          </h3>
          <span className="inline-flex shrink-0 items-center gap-2 rounded-full px-3 py-1 text-sm text-gray-700 ring-1 ring-gray-200 ring-inset dark:text-gray-300 dark:ring-gray-800">
            <span
              className="-ml-0.5 size-2 rounded-full bg-emerald-500 dark:bg-emerald-500"
              aria-hidden={true}
            />
            Operational
          </span>
        </div>
        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center space-x-1.5">
            <RiCheckboxCircleFill
              className="size-5 shrink-0 text-emerald-500 dark:text-emerald-500"
              aria-hidden={true}
            />
            <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
              example.com
            </p>
          </div>
          <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
            99.9% uptime
          </p>
        </div>
        <Tracker data={combinedData} className="mt-4 hidden w-full lg:flex" />
        <Tracker
          data={combinedData.slice(30, 90)}
          className="mt-3 hidden w-full sm:flex lg:hidden"
        />
        <Tracker
          data={combinedData.slice(60, 90)}
          className="mt-3 flex w-full sm:hidden"
        />
        <div className="mt-3 flex items-center justify-between text-sm text-gray-500 dark:text-gray-500">
          <span className="hidden lg:block">90 days ago</span>
          <span className="hidden sm:block lg:hidden">60 days ago</span>
          <span className="sm:hidden">30 days ago</span>
          <span>Today</span>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-2">
          <span
            className="inline-flex items-center gap-x-2 rounded-md bg-gray-100 px-2 py-0.5 text-sm text-gray-600 dark:bg-gray-800 dark:text-gray-300"
            tabIndex={1}
          >
            <span className="size-2 rounded-full bg-emerald-500 dark:bg-emerald-500" />
            Operational
          </span>
          <span
            className="inline-flex items-center gap-x-2 rounded-md bg-gray-100 px-2 py-0.5 text-sm text-gray-600 dark:bg-gray-800 dark:text-gray-300"
            tabIndex={1}
          >
            <span className="size-2 rounded-full bg-red-500 dark:bg-red-500" />
            Downtime
          </span>
          <span
            className="inline-flex items-center gap-x-2 rounded-md bg-gray-100 px-2 py-0.5 text-sm text-gray-600 dark:bg-gray-800 dark:text-gray-300"
            tabIndex={1}
          >
            <span className="size-2 rounded-full bg-gray-500 dark:bg-gray-500" />
            Maintenance
          </span>
        </div>
        <Accordion type="single" collapsible className="mt-6">
          <AccordionItem
            value="item-1"
            className="rounded-md border border-gray-200 px-4 dark:border-gray-800"
          >
            <AccordionTrigger>Downtime overview (3)</AccordionTrigger>
            <AccordionContent>
              <ul className="mt-2 w-full divide-y divide-gray-200 text-sm text-gray-500 dark:divide-gray-800 dark:text-gray-500">
                <li className="flex w-full items-center justify-between py-2">
                  <span>29. Sep, 2022</span>
                  <span>Down for 1 min</span>
                </li>
                <li className="flex w-full items-center justify-between py-2">
                  <span>21. Oct, 2022</span>
                  <span>Down for 2 min</span>
                </li>
                <li className="flex w-full items-center justify-between py-2">
                  <span>24. Nov, 2022 </span>
                  <span>Down for 1 min</span>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>
    </div>
  )
}
```


```example/status-monitoring-tracker-10.tsx
import React from "react"
import * as HoverCardPrimitives from "@radix-ui/react-hover-card"
import { RiArrowRightUpLine, RiCheckboxCircleFill } from "@remixicon/react"

import { cx } from "@/lib/utils"

import { Card } from "@/atom/Card"

const data = [
  //array-start
  {
    date: "29 Sep, 2023",
    tooltip: "Operational",
  },
  {
    date: "30 Sep, 2023",
    tooltip: "Operational",
  },
  {
    date: "1 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "2 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "3 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "4 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "5 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "6 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "7 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "8 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "9 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "10 Oct, 2023",
    tooltip: "Downtime",
    href: "#",
    description:
      "Down for 2 hours and 12 minutes. Learn more in status report.",
  },
  {
    date: "11 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "12 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "13 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "14 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "15 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "16 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "17 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "18 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "19 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "20 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "21 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "22 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "23 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "24 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "25 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "26 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "27 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "28 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "29 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "30 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "31 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "1 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "2 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "3 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "4 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "5 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "6 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "7 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "8 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "9 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "10 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "11 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "12 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "13 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "14 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "15 Nov, 2023",
    tooltip: "Downtime",
    href: "#",
    description:
      "Down for 9 hours and 14 minutes. Learn more in status report.",
  },
  {
    date: "16 Nov, 2023",
    tooltip: "Downtime",
    href: "#",
    description:
      "Down for 2 hours and 58 minutes. Learn more in status report.",
  },
  {
    date: "17 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "18 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "19 Nov, 2023",
    tooltip: "Downtime",
    href: "#",
    description:
      "Down for 4 hours and 19 minutes. Learn more in status report.",
  },
  {
    date: "20 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "21 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "22 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "23 Nov, 2023",
    tooltip: "Downtime",
    href: "#",
    description:
      "Down for 4 hours and 19 minutes. Learn more in status report.",
  },
  {
    date: "24 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "25 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "26 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "27 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "28 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "29 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "30 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "1 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "2 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "3 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "4 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "5 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "6 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "7 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "8 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "9 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "10 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "11 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "12 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "13 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "14 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "15 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "16 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "17 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "18 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "19 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "20 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "21 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "22 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "23 Dec, 2023",
    tooltip: "Downtime",
    href: "#",
    description:
      "Down for 9 hours and 14 minutes. Learn more in status report.",
  },
  {
    date: "24 Dec, 2023",
    tooltip: "Downtime",
    href: "#",
    description:
      "Down for 3 hours and 10 minutes. Learn more in status report.",
  },
  {
    date: "25 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "26 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "27 Dec, 2023",
    tooltip: "Operational",
  },
  //array-end
]

type Status = "Operational" | "Downtime" | "Maintenance"

const colorMapping: Record<Status, string> = {
  Operational: "bg-emerald-600 dark:bg-emerald-500",
  Downtime: "bg-red-600 dark:bg-red-500",
  Maintenance: "bg-amber-600 dark:bg-amber-500",
}

const combinedData = data.map((item) => {
  return {
    ...item,
    color: colorMapping[item.tooltip as Status],
  }
})

interface TrackerBlockProps {
  key?: string | number
  color?: string
  tooltip?: string
  hoverEffect?: boolean
  defaultBackgroundColor?: string
  date?: string
  href?: string
  description?: string
}

const Block = ({
  color,
  tooltip,
  defaultBackgroundColor,
  hoverEffect,
  date,
  href,
  description,
}: TrackerBlockProps) => {
  const [open, setOpen] = React.useState(false)
  return (
    <HoverCardPrimitives.Root
      open={open}
      onOpenChange={setOpen}
      // increase the open/closeDelay time to allow hovering over the card
      openDelay={0}
      closeDelay={0}
    >
      <HoverCardPrimitives.Trigger onClick={() => setOpen(true)} asChild>
        <div className="size-full overflow-hidden px-[0.5px] transition first:rounded-l-[4px] first:pl-0 last:rounded-r-[4px] last:pr-0 sm:px-px">
          <div
            className={cx(
              "size-full rounded-[1px]",
              color || defaultBackgroundColor,
              hoverEffect ? "hover:opacity-50" : "",
            )}
          />
        </div>
      </HoverCardPrimitives.Trigger>
      <HoverCardPrimitives.Portal>
        <HoverCardPrimitives.Content
          sideOffset={10}
          side="top"
          align="center"
          avoidCollisions
          className={cx(
            "group relative max-w-64 min-w-52 rounded-lg shadow-md",
            "text-gray-900 dark:text-gray-50",
            "bg-white dark:bg-[#090E1A]",
            "border border-gray-200 dark:border-gray-800",
          )}
        >
          <div className="flex space-x-2 p-2">
            <div
              className={cx("w-1 shrink-0 rounded", color)}
              aria-hidden={true}
            />
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
                <a href={href} className="focus:outline-none">
                  {/* Extend link to entire tooltip */}
                  <span className="absolute inset-0" aria-hidden="true" />
                  {tooltip}
                </a>
              </p>
              {tooltip === "Downtime" ? (
                <>
                  <p className="mt-1 text-xs text-gray-700 dark:text-gray-300">
                    {description}
                  </p>
                  <div
                    className="my-2 h-px w-full bg-gray-200 dark:bg-gray-800"
                    aria-hidden={true}
                  />
                </>
              ) : null}
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
                {date}
              </p>
            </div>
          </div>
          {tooltip === "Downtime" ? (
            <span
              className="pointer-events-none absolute top-2 right-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-600 group-hover:dark:text-gray-500"
              aria-hidden={true}
            >
              <RiArrowRightUpLine
                className="size-5 shrink-0"
                aria-hidden={true}
              />
            </span>
          ) : null}
        </HoverCardPrimitives.Content>
      </HoverCardPrimitives.Portal>
    </HoverCardPrimitives.Root>
  )
}

interface TrackerProps extends React.HTMLAttributes<HTMLDivElement> {
  data: TrackerBlockProps[]
  defaultBackgroundColor?: string
  hoverEffect?: boolean
}

const Tracker = React.forwardRef<HTMLDivElement, TrackerProps>(
  (
    {
      data = [],
      defaultBackgroundColor = "bg-gray-400 dark:bg-gray-400",
      className,
      hoverEffect,
      ...props
    },
    forwardedRef,
  ) => {
    return (
      <div
        ref={forwardedRef}
        className={cx("items-cente group flex h-10 w-full", className)}
        {...props}
      >
        {data.map((props, index) => (
          <Block
            key={props.key ?? index}
            defaultBackgroundColor={defaultBackgroundColor}
            hoverEffect={hoverEffect}
            {...props}
          />
        ))}
      </div>
    )
  },
)

Block.displayName = "Tracker"

export default function Example() {
  return (
    <div className="obfuscate">
      <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
        All services are online
      </h1>
      <p className="text-sm text-gray-700 dark:text-gray-300">
        Last updated on Mar 07 at 04:20am PST
      </p>
      <Card className="mt-10 space-y-6">
        <div>
          <p className="flex justify-between text-sm font-medium">
            <span className="flex items-center gap-2 font-medium">
              <RiCheckboxCircleFill
                className="size-5 text-emerald-600 dark:text-emerald-500"
                aria-hidden={true}
              />
              <span className="text-gray-900 dark:text-gray-50">
                Merch Shop
              </span>
            </span>
            <span className="text-gray-900 dark:text-gray-50">
              99.4% uptime
            </span>
          </p>
          <Tracker
            data={combinedData}
            className="mt-3 hidden w-full lg:flex"
            hoverEffect
          />
          <Tracker
            data={combinedData.slice(30, 90)}
            className="mt-3 hidden w-full sm:flex lg:hidden"
            hoverEffect
          />
          <Tracker
            data={combinedData.slice(60, 90)}
            className="mt-3 flex w-full sm:hidden"
            hoverEffect
          />
          <div className="mt-3 flex items-center justify-between text-sm text-gray-500 dark:text-gray-500">
            <span className="hidden lg:block">90 days ago</span>
            <span className="hidden sm:block lg:hidden">60 days ago</span>
            <span className="sm:hidden">30 days ago</span>
            <span>Today</span>
          </div>
        </div>
      </Card>
    </div>
  )
}
```


```example/status-monitoring-tracker-04.tsx
"use client"

import { RiCheckboxCircleFill } from "@remixicon/react"

import { Card } from "@/atom/Card"
import { Tracker } from "@/atom/Tracker"

const data = [
  //array-start
  {
    tooltip: "23 Sep, 2022",
    status: "Operational",
  },
  {
    tooltip: "24 Sep, 2022",
    status: "Operational",
  },
  {
    tooltip: "25 Sep, 2022",
    status: "Operational",
  },
  {
    tooltip: "26 Sep, 2022",
    status: "Operational",
  },
  {
    tooltip: "27 Sep, 2022",
    status: "Operational",
  },
  {
    tooltip: "28 Sep, 2022",
    status: "Operational",
  },
  {
    tooltip: "29 Sep, 2022",
    status: "Downtime",
  },
  {
    tooltip: "30 Sep, 2022",
    status: "Operational",
  },
  {
    tooltip: "1 Oct, 2022",
    status: "Operational",
  },
  {
    tooltip: "2 Oct, 2022",
    status: "Operational",
  },
  {
    tooltip: "3 Oct, 2022",
    status: "Operational",
  },
  {
    tooltip: "4 Oct, 2022",
    status: "Operational",
  },
  {
    tooltip: "5 Oct, 2022",
    status: "Operational",
  },
  {
    tooltip: "6 Oct, 2022",
    status: "Operational",
  },
  {
    tooltip: "7 Oct, 2022",
    status: "Operational",
  },
  {
    tooltip: "8 Oct, 2022",
    status: "Operational",
  },
  {
    tooltip: "9 Oct, 2022",
    status: "Operational",
  },
  {
    tooltip: "10 Oct, 2022",
    status: "Operational",
  },
  {
    tooltip: "11 Oct, 2022",
    status: "Operational",
  },
  {
    tooltip: "12 Oct, 2022",
    status: "Operational",
  },
  {
    tooltip: "13 Oct, 2022",
    status: "Operational",
  },
  {
    tooltip: "14 Oct, 2022",
    status: "Operational",
  },
  {
    tooltip: "15 Oct, 2022",
    status: "Operational",
  },
  {
    tooltip: "16 Oct, 2022",
    status: "Operational",
  },
  {
    tooltip: "17 Oct, 2022",
    status: "Operational",
  },
  {
    tooltip: "18 Oct, 2022",
    status: "Operational",
  },
  {
    tooltip: "19 Oct, 2022",
    status: "Operational",
  },
  {
    tooltip: "20 Oct, 2022",
    status: "Operational",
  },
  {
    tooltip: "21 Oct, 2022",
    status: "Downtime",
  },
  {
    tooltip: "22 Oct, 2022",
    status: "Operational",
  },
  {
    tooltip: "23 Oct, 2022",
    status: "Operational",
  },
  {
    tooltip: "24 Oct, 2022",
    status: "Operational",
  },
  {
    tooltip: "25 Oct, 2022",
    status: "Operational",
  },
  {
    tooltip: "26 Oct, 2022",
    status: "Operational",
  },
  {
    tooltip: "27 Oct, 2022",
    status: "Operational",
  },
  {
    tooltip: "28 Oct, 2022",
    status: "Operational",
  },
  {
    tooltip: "29 Oct, 2022",
    status: "Operational",
  },
  {
    tooltip: "30 Oct, 2022",
    status: "Operational",
  },
  {
    tooltip: "31 Oct, 2022",
    status: "Operational",
  },
  {
    tooltip: "1 Nov, 2022",
    status: "Operational",
  },
  {
    tooltip: "2 Nov, 2022",
    status: "Operational",
  },
  {
    tooltip: "3 Nov, 2022",
    status: "Operational",
  },
  {
    tooltip: "4 Nov, 2022",
    status: "Operational",
  },
  {
    tooltip: "5 Nov, 2022",
    status: "Operational",
  },
  {
    tooltip: "6 Nov, 2022",
    status: "Operational",
  },
  {
    tooltip: "7 Nov, 2022",
    status: "Operational",
  },
  {
    tooltip: "8 Nov, 2022",
    status: "Operational",
  },
  {
    tooltip: "9 Nov, 2022",
    status: "Operational",
  },
  {
    tooltip: "10 Nov, 2022",
    status: "Operational",
  },
  {
    tooltip: "11 Nov, 2022",
    status: "Operational",
  },
  {
    tooltip: "12 Nov, 2022",
    status: "Operational",
  },
  {
    tooltip: "13 Nov, 2022",
    status: "Operational",
  },
  {
    tooltip: "14 Nov, 2022",
    status: "Operational",
  },
  {
    tooltip: "15 Nov, 2022",
    status: "Operational",
  },
  {
    tooltip: "16 Nov, 2022",
    status: "Operational",
  },
  {
    tooltip: "17 Nov, 2022",
    status: "Operational",
  },
  {
    tooltip: "18 Nov, 2022",
    status: "Operational",
  },
  {
    tooltip: "19 Nov, 2022",
    status: "Operational",
  },
  {
    tooltip: "20 Nov, 2022",
    status: "Operational",
  },
  {
    tooltip: "21 Nov, 2022",
    status: "Operational",
  },
  {
    tooltip: "22 Nov, 2022",
    status: "Operational",
  },
  {
    tooltip: "23 Nov, 2022",
    status: "Operational",
  },
  {
    tooltip: "24 Nov, 2022",
    status: "Downtime",
  },
  {
    tooltip: "25 Nov, 2022",
    status: "Operational",
  },
  {
    tooltip: "26 Nov, 2022",
    status: "Operational",
  },
  {
    tooltip: "27 Nov, 2022",
    status: "Operational",
  },
  {
    tooltip: "28 Nov, 2022",
    status: "Operational",
  },
  {
    tooltip: "29 Nov, 2022",
    status: "Operational",
  },
  {
    tooltip: "30 Nov, 2022",
    status: "Operational",
  },
  {
    tooltip: "1 Dec, 2022",
    status: "Operational",
  },
  {
    tooltip: "2 Dec, 2022",
    status: "Operational",
  },
  {
    tooltip: "3 Dec, 2022",
    status: "Operational",
  },
  {
    tooltip: "4 Dec, 2022",
    status: "Operational",
  },
  {
    tooltip: "5 Dec, 2022",
    status: "Operational",
  },
  {
    tooltip: "6 Dec, 2022",
    status: "Operational",
  },
  {
    tooltip: "7 Dec, 2022",
    status: "Operational",
  },
  {
    tooltip: "8 Dec, 2022",
    status: "Operational",
  },
  {
    tooltip: "9 Dec, 2022",
    status: "Operational",
  },
  {
    tooltip: "10 Dec, 2022",
    status: "Operational",
  },
  {
    tooltip: "11 Dec, 2022",
    status: "Operational",
  },
  {
    tooltip: "12 Dec, 2022",
    status: "Operational",
  },
  {
    tooltip: "13 Dec, 2022",
    status: "Operational",
  },
  {
    tooltip: "14 Dec, 2022",
    status: "Operational",
  },
  {
    tooltip: "15 Dec, 2022",
    status: "Operational",
  },
  {
    tooltip: "16 Dec, 2022",
    status: "Operational",
  },
  {
    tooltip: "17 Dec, 2022",
    status: "Operational",
  },
  {
    tooltip: "18 Dec, 2022",
    status: "Operational",
  },
  {
    tooltip: "19 Dec, 2022",
    status: "Operational",
  },
  {
    tooltip: "20 Dec, 2022",
    status: "Operational",
  },
  {
    tooltip: "21 Dec, 2022",
    status: "Operational",
  },
  {
    tooltip: "22 Dec, 2022",
    status: "Operational",
  },
  {
    tooltip: "23 Dec, 2022",
    status: "Operational",
  },
  {
    tooltip: "24 Dec, 2022",
    status: "Operational",
  },
  {
    tooltip: "25 Dec, 2022",
    status: "Operational",
  },
  {
    tooltip: "26 Dec, 2022",
    status: "Operational",
  },
  {
    tooltip: "27 Dec, 2022",
    status: "Operational",
  },
  //array-end
]

type Status = "Operational" | "Downtime" | "Inactive"

const colorMapping: Record<Status, string> = {
  Operational: "bg-emerald-500 dark:bg-emerald-500",
  Downtime: "bg-red-500 dark:bg-red-500",
  Inactive: "bg-gray-300 dark:bg-gray-700",
}

const combinedData = data.map((item) => {
  return {
    ...item,
    color: colorMapping[item.status as Status],
  }
})

export default function Example() {
  return (
    <div className="obfuscate">
      <Card>
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-gray-900 dark:text-gray-50">
            Lena&#39;s Website
          </h3>
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm text-gray-700 ring-1 ring-gray-200 ring-inset dark:text-gray-300 dark:ring-gray-800">
            <span
              className="-ml-0.5 size-2 rounded-full bg-emerald-500"
              aria-hidden={true}
            />
            Operational
          </span>
        </div>
        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center space-x-1.5">
            <RiCheckboxCircleFill
              className="size-5 shrink-0 text-emerald-500 dark:text-emerald-500"
              aria-hidden={true}
            />
            <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
              example.com
            </p>
          </div>
          <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
            99.9% uptime
          </p>
        </div>
        <Tracker data={combinedData} className="mt-4 hidden w-full lg:flex" />
        <Tracker
          data={combinedData.slice(30, 90)}
          className="mt-3 hidden w-full sm:flex lg:hidden"
        />
        <Tracker
          data={combinedData.slice(60, 90)}
          className="mt-3 flex w-full sm:hidden"
        />
        <div className="mt-3 flex items-center justify-between text-sm text-gray-500 dark:text-gray-500">
          <span className="hidden lg:block">90 days ago</span>
          <span className="hidden sm:block lg:hidden">60 days ago</span>
          <span className="sm:hidden">30 days ago</span>
          <span>Today</span>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-2">
          <span
            tabIndex={1}
            className="inline-flex items-center gap-x-2 rounded-md bg-gray-100 px-2 py-0.5 text-sm text-gray-600 dark:bg-gray-800 dark:text-gray-300"
          >
            <span
              className="size-2 rounded-full bg-emerald-500 dark:bg-emerald-500"
              aria-hidden={true}
            />
            Operational
          </span>
          <span
            tabIndex={1}
            className="inline-flex items-center gap-x-2 rounded-md bg-gray-100 px-2 py-0.5 text-sm text-gray-600 dark:bg-gray-800 dark:text-gray-300"
          >
            <span
              className="size-2 rounded-full bg-red-500 dark:bg-red-500"
              aria-hidden={true}
            />
            Downtime
          </span>
          <span
            tabIndex={1}
            className="inline-flex items-center gap-x-2 rounded-md bg-gray-100 px-2 py-0.5 text-sm text-gray-600 dark:bg-gray-800 dark:text-gray-300"
          >
            <span
              className="size-2 rounded-full bg-gray-500 dark:bg-gray-500"
              aria-hidden={true}
            />
            Maintenance
          </span>
        </div>
        <h3 className="mt-6 text-sm text-gray-900 dark:text-gray-50">
          Downtime overview
        </h3>
        <ul
          role="list"
          className="mt-2 w-full divide-y divide-gray-200 text-sm text-gray-600 dark:divide-gray-800 dark:text-gray-500"
        >
          <li className="flex w-full items-center justify-between py-2">
            <span>29. Sep, 2023</span>
            <span>Down for 1 min</span>
          </li>
          <li className="flex w-full items-center justify-between py-2">
            <span>21. Oct, 2023</span>
            <span>Down for 2 min</span>
          </li>
          <li className="flex w-full items-center justify-between py-2">
            <span>24. Nov, 2023 </span>
            <span>Down for 1 min</span>
          </li>
        </ul>
      </Card>
    </div>
  )
}
```


```example/status-monitoring-tracker-09.tsx
import React from "react"
import * as HoverCardPrimitives from "@radix-ui/react-hover-card"
import { RiCheckboxCircleFill } from "@remixicon/react"

import { cx } from "@/lib/utils"

import { Card } from "@/atom/Card"

const dataComponents = [
  //array-start
  {
    date: "29 Sep, 2023",
    tooltip: "Operational",
  },
  {
    date: "30 Sep, 2023",
    tooltip: "Operational",
  },
  {
    date: "1 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "2 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "3 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "4 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "5 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "6 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "7 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "8 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "9 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "10 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "11 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "12 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "13 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "14 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "15 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "16 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "17 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "18 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "19 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "20 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "21 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "22 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "23 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "24 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "25 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "26 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "27 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "28 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "29 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "30 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "31 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "1 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "2 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "3 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "4 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "5 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "6 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "7 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "8 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "9 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "10 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "11 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "12 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "13 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "14 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "15 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "16 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "17 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "18 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "19 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "20 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "21 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "22 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "23 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "24 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "25 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "26 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "27 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "28 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "29 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "30 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "1 Dec, 2023",
    tooltip: "Downtime",
  },
  {
    date: "2 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "3 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "4 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "5 Dec, 2023",
    tooltip: "Downtime",
  },
  {
    date: "6 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "7 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "8 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "9 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "10 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "11 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "12 Dec, 2023",
    tooltip: "Downtime",
  },
  {
    date: "13 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "14 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "15 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "16 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "17 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "18 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "19 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "20 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "21 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "22 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "23 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "24 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "25 Dec, 2023",
    tooltip: "Maintenance",
  },
  {
    date: "26 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "27 Dec, 2023",
    tooltip: "Operational",
  },
  //array-end
]

const dataBlocks = [
  //array-start
  {
    date: "29 Sep, 2023",
    tooltip: "Operational",
  },
  {
    date: "30 Sep, 2023",
    tooltip: "Operational",
  },
  {
    date: "1 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "2 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "3 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "4 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "5 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "6 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "7 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "8 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "9 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "10 Oct, 2023",
    tooltip: "Downtime",
  },
  {
    date: "11 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "12 Oct, 2023",
    tooltip: "Downtime",
  },
  {
    date: "13 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "14 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "15 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "16 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "17 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "18 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "19 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "20 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "21 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "22 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "23 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "24 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "25 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "26 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "27 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "28 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "29 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "30 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "31 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "1 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "2 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "3 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "4 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "5 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "6 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "7 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "8 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "9 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "10 Nov, 2023",
    tooltip: "Not measured",
  },
  {
    date: "11 Nov, 2023",
    tooltip: "Not measured",
  },
  {
    date: "12 Nov, 2023",
    tooltip: "Not measured",
  },
  {
    date: "13 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "14 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "15 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "16 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "17 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "18 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "19 Nov, 2023",
    tooltip: "Downtime",
  },
  {
    date: "20 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "21 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "22 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "23 Nov, 2023",
    tooltip: "Downtime",
  },
  {
    date: "24 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "25 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "26 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "27 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "28 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "29 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "30 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "1 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "2 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "3 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "4 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "5 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "6 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "7 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "8 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "9 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "10 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "11 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "12 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "13 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "14 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "15 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "16 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "17 Dec, 2023",
    tooltip: "Downtime",
  },
  {
    date: "18 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "19 Dec, 2023",
    tooltip: "Downtime",
  },
  {
    date: "20 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "21 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "22 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "23 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "24 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "25 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "26 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "27 Dec, 2023",
    tooltip: "Operational",
  },
  //array-end
]

type Status = "Operational" | "Downtime" | "Maintenance" | "Not measured"

const colorMapping: Record<Status, string> = {
  Operational: "bg-emerald-500 dark:bg-emerald-500",
  Downtime: "bg-red-500 dark:bg-red-500",
  Maintenance: "bg-amber-500 dark:bg-amber-500",
  "Not measured": "bg-gray-300 dark:bg-gray-700",
}

const combinedDataBlocks = dataBlocks.map((item) => {
  return {
    ...item,
    color: colorMapping[item.tooltip as Status],
  }
})

const combinedDataComponents = dataComponents.map((item) => {
  return {
    ...item,
    color: colorMapping[item.tooltip as Status],
  }
})

interface TrackerBlockProps {
  key?: string | number
  color?: string
  tooltip?: string
  hoverEffect?: boolean
  defaultBackgroundColor?: string
  date?: string
}

const Block = ({
  color,
  tooltip,
  defaultBackgroundColor,
  hoverEffect,
  date,
}: TrackerBlockProps) => {
  const [open, setOpen] = React.useState(false)
  return (
    <HoverCardPrimitives.Root
      open={open}
      onOpenChange={setOpen}
      openDelay={0}
      closeDelay={0}
    >
      <HoverCardPrimitives.Trigger onClick={() => setOpen(true)} asChild>
        <div className="size-full overflow-hidden px-[0.5px] transition first:rounded-l-[4px] first:pl-0 last:rounded-r-[4px] last:pr-0 sm:px-px">
          <div
            className={cx(
              "size-full rounded-[1px]",
              color || defaultBackgroundColor,
              hoverEffect ? "hover:opacity-50" : "",
            )}
          />
        </div>
      </HoverCardPrimitives.Trigger>
      <HoverCardPrimitives.Portal>
        <HoverCardPrimitives.Content
          sideOffset={10}
          side="top"
          align="center"
          avoidCollisions
          className={cx(
            // base
            "flex max-w-52 min-w-44 space-x-2 rounded-lg p-2 shadow-md",
            // text
            "text-gray-900 dark:text-gray-50",
            // background
            "bg-white dark:bg-[#090E1A]",
            // border
            "border border-gray-200 dark:border-gray-800",
          )}
        >
          <div
            className={cx("w-1 shrink-0 rounded", color)}
            aria-hidden={true}
          />
          <div className="space-y-1">
            <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
              {tooltip}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500">{date}</p>
          </div>
        </HoverCardPrimitives.Content>
      </HoverCardPrimitives.Portal>
    </HoverCardPrimitives.Root>
  )
}

interface TrackerProps extends React.HTMLAttributes<HTMLDivElement> {
  data: TrackerBlockProps[]
  defaultBackgroundColor?: string
  hoverEffect?: boolean
}

const Tracker = React.forwardRef<HTMLDivElement, TrackerProps>(
  (
    {
      data = [],
      defaultBackgroundColor = "bg-gray-400 dark:bg-gray-400",
      className,
      hoverEffect,
      ...props
    },
    forwardedRef,
  ) => {
    return (
      <div
        ref={forwardedRef}
        className={cx("items-cente group flex h-8 w-full", className)}
        {...props}
      >
        {data.map((props, index) => (
          <Block
            key={props.key ?? index}
            defaultBackgroundColor={defaultBackgroundColor}
            hoverEffect={hoverEffect}
            {...props}
          />
        ))}
      </div>
    )
  },
)

Block.displayName = "Tracker"

export default function Example() {
  return (
    <div className="obfuscate">
      <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
        All services are online
      </h1>
      <p className="text-sm text-gray-700 dark:text-gray-300">
        Last updated on Dec 27 at 06:32am PST
      </p>
      <Card className="mt-10 space-y-6">
        <div>
          <p className="flex justify-between text-sm font-medium">
            <span className="flex items-center gap-2 font-medium">
              <RiCheckboxCircleFill
                className="size-5 text-emerald-500 dark:text-emerald-500"
                aria-hidden={true}
              />
              <span className="text-gray-900 dark:text-gray-50">
                Tremor Blocks API
              </span>
            </span>
            <span className="text-gray-900 dark:text-gray-50">
              98.08% uptime
            </span>
          </p>
          <Tracker
            data={combinedDataBlocks}
            className="mt-3 hidden w-full lg:flex"
          />
          <Tracker
            data={combinedDataBlocks.slice(30, 90)}
            className="mt-3 hidden w-full sm:flex lg:hidden"
          />
          <Tracker
            data={combinedDataBlocks.slice(60, 90)}
            className="mt-3 flex w-full sm:hidden"
          />
          <div className="mt-3 flex items-center justify-between text-sm text-gray-500 dark:text-gray-500">
            <span className="hidden lg:block">90 days ago</span>
            <span className="hidden sm:block lg:hidden">60 days ago</span>
            <span className="sm:hidden">30 days ago</span>
            <span>Today</span>
          </div>
        </div>
        <div
          className="h-px w-full bg-gray-200 dark:bg-gray-800"
          aria-hidden={true}
        />
        <div>
          <p className="flex justify-between text-sm font-medium">
            <span className="flex items-center gap-2">
              <RiCheckboxCircleFill
                className="size-5 text-emerald-500 dark:text-emerald-500"
                aria-hidden={true}
              />
              <span className="text-gray-900 dark:text-gray-50">
                Tremor API
              </span>
            </span>
            <span className="text-gray-900 dark:text-gray-50">
              99.43% uptime
            </span>
          </p>
          <Tracker
            data={combinedDataComponents}
            className="mt-3 hidden w-full lg:flex"
          />
          <Tracker
            data={combinedDataComponents.slice(30, 90)}
            className="mt-3 hidden w-full sm:flex lg:hidden"
          />
          <Tracker
            data={combinedDataComponents.slice(60, 90)}
            className="mt-3 flex w-full sm:hidden"
          />
          <div className="mt-3 flex items-center justify-between text-sm text-gray-500 dark:text-gray-500">
            <span className="hidden lg:block">90 days ago</span>
            <span className="hidden sm:block lg:hidden">60 days ago</span>
            <span className="sm:hidden">30 days ago</span>
            <span>Today</span>
          </div>
        </div>
      </Card>
    </div>
  )
}
```


```example/status-monitoring-tracker-08.tsx
"use client"

import React from "react"
import * as HoverCardPrimitives from "@radix-ui/react-hover-card"
import {
  RiCheckboxCircleFill,
  RiErrorWarningFill,
  RiSettings5Fill,
} from "@remixicon/react"

import { cx } from "@/lib/utils"

import { Card } from "@/atom/Card"

const dataComponents = [
  //array-start
  {
    date: "29 Sep, 2023",
    tooltip: "Operational",
  },
  {
    date: "30 Sep, 2023",
    tooltip: "Operational",
  },
  {
    date: "1 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "2 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "3 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "4 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "5 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "6 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "7 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "8 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "9 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "10 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "11 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "12 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "13 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "14 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "15 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "16 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "17 Oct, 2023",
    tooltip: "Maintenance",
  },
  {
    date: "18 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "19 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "20 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "21 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "22 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "23 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "24 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "25 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "26 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "27 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "28 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "29 Oct, 2023",
    tooltip: "Not measured",
  },
  {
    date: "30 Oct, 2023",
    tooltip: "Not measured",
  },
  {
    date: "31 Oct, 2023",
    tooltip: "Not measured",
  },
  {
    date: "1 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "2 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "3 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "4 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "5 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "6 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "7 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "8 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "9 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "10 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "11 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "12 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "13 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "14 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "15 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "16 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "17 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "18 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "19 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "20 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "21 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "22 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "23 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "24 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "25 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "26 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "27 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "28 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "29 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "30 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "1 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "2 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "3 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "4 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "5 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "6 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "7 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "8 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "9 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "10 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "11 Dec, 2023",
    tooltip: "Downtime",
  },
  {
    date: "12 Dec, 2023",
    tooltip: "Downtime",
  },
  {
    date: "13 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "14 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "15 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "16 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "17 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "18 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "19 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "20 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "21 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "22 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "23 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "24 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "25 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "26 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "27 Dec, 2023",
    tooltip: "Operational",
  },
  //array-end
]

const dataBlocks = [
  //array-start
  {
    date: "29 Sep, 2023",
    tooltip: "Operational",
  },
  {
    date: "30 Sep, 2023",
    tooltip: "Operational",
  },
  {
    date: "1 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "2 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "3 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "4 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "5 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "6 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "7 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "8 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "9 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "10 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "11 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "12 Oct, 2023",
    tooltip: "Downtime",
  },
  {
    date: "13 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "14 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "15 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "16 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "17 Oct, 2023",
    tooltip: "Downtime",
  },
  {
    date: "18 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "19 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "20 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "21 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "22 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "23 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "24 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "25 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "26 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "27 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "28 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "29 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "30 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "31 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "1 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "2 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "3 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "4 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "5 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "6 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "7 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "8 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "9 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "10 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "11 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "12 Nov, 2023",
    tooltip: "Downtime",
  },
  {
    date: "13 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "14 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "15 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "16 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "17 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "18 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "19 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "20 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "21 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "22 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "23 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "24 Nov, 2023",
    tooltip: "Downtime",
  },
  {
    date: "25 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "26 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "27 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "28 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "29 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "30 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "1 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "2 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "3 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "4 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "5 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "6 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "7 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "8 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "9 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "10 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "11 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "12 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "13 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "14 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "15 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "16 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "17 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "18 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "19 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "20 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "21 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "22 Dec, 2023",
    tooltip: "Downtime",
  },
  {
    date: "23 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "24 Dec, 2023",
    tooltip: "Downtime",
  },
  {
    date: "25 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "26 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "27 Dec, 2023",
    tooltip: "Operational",
  },
  //array-end
]

type Status = "Operational" | "Downtime" | "Maintenance" | "Not measured"

const colorMapping: Record<Status, string> = {
  Operational: "bg-emerald-500 dark:bg-emerald-500",
  Downtime: "bg-red-500 dark:bg-red-500",
  Maintenance: "bg-amber-500 dark:bg-amber-500",
  "Not measured": "bg-gray-300 dark:bg-gray-700",
}

const combinedDataComponents = dataComponents.map((item) => {
  return {
    ...item,
    color: colorMapping[item.tooltip as Status],
  }
})

const combinedDataBlocks = dataBlocks.map((item) => {
  return {
    ...item,
    color: colorMapping[item.tooltip as Status],
  }
})

interface TrackerBlockProps {
  key?: string | number
  color?: string
  tooltip?: string
  hoverEffect?: boolean
  defaultBackgroundColor?: string
  date?: string
}

const Block = ({
  color,
  tooltip,
  defaultBackgroundColor,
  hoverEffect,
  date,
}: TrackerBlockProps) => {
  const [open, setOpen] = React.useState(false)
  return (
    <HoverCardPrimitives.Root
      open={open}
      onOpenChange={setOpen}
      openDelay={0}
      closeDelay={0}
    >
      <HoverCardPrimitives.Trigger onClick={() => setOpen(true)} asChild>
        <div className="size-full overflow-hidden px-[0.5px] transition first:rounded-l-[4px] first:pl-0 last:rounded-r-[4px] last:pr-0 sm:px-px">
          <div
            className={cx(
              "size-full rounded-[1px]",
              color || defaultBackgroundColor,
              hoverEffect ? "hover:opacity-50" : "",
            )}
          />
        </div>
      </HoverCardPrimitives.Trigger>
      <HoverCardPrimitives.Portal>
        <HoverCardPrimitives.Content
          sideOffset={10}
          side="top"
          align="center"
          avoidCollisions
          className={cx(
            // base
            "max-w-52 min-w-44 rounded-lg shadow-md",
            // text
            "text-gray-900 dark:text-gray-50",
            // background
            "bg-white dark:bg-[#090E1A]",
            // border
            "border border-gray-200 dark:border-gray-900",
          )}
        >
          <p className="flex items-center gap-2 px-3 py-2 text-sm font-medium">
            {tooltip === "Operational" ? (
              <RiCheckboxCircleFill
                className="size-5 shrink-0 text-emerald-500 dark:text-emerald-500"
                aria-hidden={true}
              />
            ) : null}
            {tooltip === "Maintenance" ? (
              <RiSettings5Fill
                className="size-5 shrink-0 text-amber-500 dark:text-amber-500"
                aria-hidden={true}
              />
            ) : null}
            {tooltip === "Downtime" ? (
              <RiErrorWarningFill
                className="size-5 shrink-0 text-red-500 dark:text-red-500"
                aria-hidden={true}
              />
            ) : null}
            {tooltip}
          </p>
          <div
            className="h-px w-full bg-gray-200 dark:bg-gray-800"
            aria-hidden={true}
          />
          <p className="px-3 py-2 text-xs text-gray-500 dark:text-gray-500">
            {date}
          </p>
        </HoverCardPrimitives.Content>
      </HoverCardPrimitives.Portal>
    </HoverCardPrimitives.Root>
  )
}

interface TrackerProps extends React.HTMLAttributes<HTMLDivElement> {
  data: TrackerBlockProps[]
  defaultBackgroundColor?: string
  hoverEffect?: boolean
}

const Tracker = React.forwardRef<HTMLDivElement, TrackerProps>(
  (
    {
      data = [],
      defaultBackgroundColor = "bg-gray-400 dark:bg-gray-400",
      className,
      hoverEffect,
      ...props
    },
    forwardedRef,
  ) => {
    return (
      <div
        ref={forwardedRef}
        className={cx("items-cente group flex h-8 w-full", className)}
        {...props}
      >
        {data.map((props, index) => (
          <Block
            key={props.key ?? index}
            defaultBackgroundColor={defaultBackgroundColor}
            hoverEffect={hoverEffect}
            {...props}
          />
        ))}
      </div>
    )
  },
)

Block.displayName = "Tracker"

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="flex flex-col items-center">
        <span className="mx-auto inline-flex items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-400/20 dark:to-emerald-500/10">
          <RiCheckboxCircleFill
            className="text-green size-10 text-emerald-500"
            aria-hidden={true}
          />
        </span>
        <h1 className="mt-3 text-lg font-semibold text-gray-900 dark:text-gray-50">
          All services are online
        </h1>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          Last updated on Dec 27 at 01:05am PST
        </p>
      </div>
      <Card className="mt-10 space-y-6">
        <div>
          <p className="flex justify-between text-sm font-medium">
            <span className="flex items-center gap-2 font-medium">
              <RiCheckboxCircleFill
                className="size-5 text-emerald-500 dark:text-emerald-500"
                aria-hidden={true}
              />
              <span className="text-gray-900 dark:text-gray-50">
                Tremor Blocks API
              </span>
            </span>
            <span className="text-gray-900 dark:text-gray-50">
              98.08% uptime
            </span>
          </p>
          <Tracker
            data={combinedDataBlocks}
            className="mt-3 hidden w-full lg:flex"
          />
          <Tracker
            data={combinedDataBlocks.slice(30, 90)}
            className="mt-3 hidden w-full sm:flex lg:hidden"
          />
          <Tracker
            data={combinedDataBlocks.slice(60, 90)}
            className="mt-3 flex w-full sm:hidden"
          />
          <div className="mt-3 flex items-center justify-between text-sm text-gray-500 dark:text-gray-500">
            <span className="hidden lg:block">90 days ago</span>
            <span className="hidden sm:block lg:hidden">60 days ago</span>
            <span className="sm:hidden">30 days ago</span>
            <span>Today</span>
          </div>
        </div>
        <div
          className="h-px w-full bg-gray-200 dark:bg-gray-800"
          aria-hidden={true}
        />
        <div>
          <p className="flex justify-between text-sm font-medium">
            <span className="flex items-center gap-2">
              <RiCheckboxCircleFill
                className="size-5 text-emerald-500 dark:text-emerald-500"
                aria-hidden={true}
              />
              <span className="text-gray-900 dark:text-gray-50">
                Tremor API
              </span>
            </span>
            <span className="text-gray-900 dark:text-gray-50">
              99.43% uptime
            </span>
          </p>
          <Tracker
            data={combinedDataComponents}
            className="mt-3 hidden w-full lg:flex"
          />
          <Tracker
            data={combinedDataComponents.slice(30, 90)}
            className="mt-3 hidden w-full sm:flex lg:hidden"
          />
          <Tracker
            data={combinedDataComponents.slice(60, 90)}
            className="mt-3 flex w-full sm:hidden"
          />
          <div className="mt-3 flex items-center justify-between text-sm text-gray-500 dark:text-gray-500">
            <span className="hidden lg:block">90 days ago</span>
            <span className="hidden sm:block lg:hidden">60 days ago</span>
            <span className="sm:hidden">30 days ago</span>
            <span>Today</span>
          </div>
        </div>
      </Card>
    </div>
  )
}
```


