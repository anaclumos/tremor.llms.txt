"use client"

import { Card } from "../../atom/Card"
import { Tracker } from "../../atom/Tracker"

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
            <span className="rounded px-3 py-1 font-mono text-xs text-gray-700 ring-1 ring-inset ring-gray-200 dark:text-gray-300 dark:ring-gray-800">
              sales_data
            </span>
            <span className="rounded px-3 py-1 font-mono text-xs text-gray-700 ring-1 ring-inset ring-gray-200 dark:text-gray-300 dark:ring-gray-800">
              customer_data
            </span>
            <span className="rounded px-3 py-1 font-mono text-xs text-gray-700 ring-1 ring-inset ring-gray-200 dark:text-gray-300 dark:ring-gray-800">
              location_data
            </span>
            <span className="rounded px-3 py-1 font-mono text-xs text-gray-700 ring-1 ring-inset ring-gray-200 dark:text-gray-300 dark:ring-gray-800">
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
