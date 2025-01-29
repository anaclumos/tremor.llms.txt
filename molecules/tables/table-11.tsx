"use client"

import { cx } from "@/lib/utils"

import { Divider } from "../../atoms/Divider"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from "../../atoms/Table"

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`

interface WeekData {
  percentage: number
  count: number
}

interface CohortData {
  size: number
  dates: {
    start: string
    end: string
  }
  weeks: (WeekData | null)[]
}

type CohortRetentionData = Record<string, CohortData>

const cohorts: CohortRetentionData = {
  // array-start
  "Sep 15, 2023": {
    size: 2157,
    dates: {
      start: "2023-09-15T00:00:00.000Z",
      end: "2023-09-22T00:00:00.000Z",
    },
    weeks: [
      {
        percentage: 100,
        count: 2157,
      },
      {
        percentage: 69.2,
        count: 1492,
      },
      {
        percentage: 49.3,
        count: 1063,
      },
      {
        percentage: 44.6,
        count: 962,
      },
      {
        percentage: 28.8,
        count: 621,
      },
      {
        percentage: 23.9,
        count: 515,
      },
      {
        percentage: 19.3,
        count: 416,
      },
      {
        percentage: 12.6,
        count: 271,
      },
      {
        percentage: 9.6,
        count: 207,
      },
      {
        percentage: 8.2,
        count: 176,
      },
    ],
  },
  "Sep 22, 2023": {
    size: 2584,
    dates: {
      start: "2023-09-22T00:00:00.000Z",
      end: "2023-09-29T00:00:00.000Z",
    },
    weeks: [
      {
        percentage: 100,
        count: 2584,
      },
      {
        percentage: 62.2,
        count: 1607,
      },
      {
        percentage: 51.9,
        count: 1341,
      },
      {
        percentage: 46.4,
        count: 1198,
      },
      {
        percentage: 29.1,
        count: 751,
      },
      {
        percentage: 29.4,
        count: 759,
      },
      {
        percentage: 18.5,
        count: 478,
      },
      {
        percentage: 15.5,
        count: 400,
      },
      {
        percentage: 15.8,
        count: 408,
      },
      null,
    ],
  },
  "Sep 29, 2023": {
    size: 2873,
    dates: {
      start: "2023-09-29T00:00:00.000Z",
      end: "2023-10-06T00:00:00.000Z",
    },
    weeks: [
      {
        percentage: 100,
        count: 2873,
      },
      {
        percentage: 63.5,
        count: 1824,
      },
      {
        percentage: 54.9,
        count: 1577,
      },
      {
        percentage: 46.3,
        count: 1330,
      },
      {
        percentage: 32.2,
        count: 925,
      },
      {
        percentage: 27.5,
        count: 790,
      },
      {
        percentage: 26.1,
        count: 749,
      },
      {
        percentage: 15.4,
        count: 442,
      },
      null,
      null,
    ],
  },
  "Oct 6, 2023": {
    size: 2882,
    dates: {
      start: "2023-10-06T00:00:00.000Z",
      end: "2023-10-13T00:00:00.000Z",
    },
    weeks: [
      {
        percentage: 100,
        count: 2882,
      },
      {
        percentage: 61.8,
        count: 1781,
      },
      {
        percentage: 55,
        count: 1585,
      },
      {
        percentage: 39.6,
        count: 1141,
      },
      {
        percentage: 32.4,
        count: 933,
      },
      {
        percentage: 22.1,
        count: 636,
      },
      {
        percentage: 19.4,
        count: 559,
      },
      null,
      null,
      null,
    ],
  },
  "Oct 13, 2023": {
    size: 2925,
    dates: {
      start: "2023-10-13T00:00:00.000Z",
      end: "2023-10-20T00:00:00.000Z",
    },
    weeks: [
      {
        percentage: 100,
        count: 2925,
      },
      {
        percentage: 65.6,
        count: 1918,
      },
      {
        percentage: 56.7,
        count: 1658,
      },
      {
        percentage: 45.2,
        count: 1322,
      },
      {
        percentage: 32.2,
        count: 941,
      },
      {
        percentage: 28,
        count: 819,
      },
      null,
      null,
      null,
      null,
    ],
  },
  "Oct 20, 2023": {
    size: 2066,
    dates: {
      start: "2023-10-20T00:00:00.000Z",
      end: "2023-10-27T00:00:00.000Z",
    },
    weeks: [
      {
        percentage: 100,
        count: 2066,
      },
      {
        percentage: 67.9,
        count: 1402,
      },
      {
        percentage: 55.4,
        count: 1144,
      },
      {
        percentage: 37.6,
        count: 776,
      },
      {
        percentage: 29.7,
        count: 613,
      },
      null,
      null,
      null,
      null,
      null,
    ],
  },
  "Oct 27, 2023": {
    size: 2302,
    dates: {
      start: "2023-10-27T00:00:00.000Z",
      end: "2023-11-03T00:00:00.000Z",
    },
    weeks: [
      {
        percentage: 100,
        count: 2302,
      },
      {
        percentage: 64.5,
        count: 1484,
      },
      {
        percentage: 48.8,
        count: 1123,
      },
      {
        percentage: 46.1,
        count: 1061,
      },
      null,
      null,
      null,
      null,
      null,
      null,
    ],
  },
  "Nov 3, 2023": {
    size: 2361,
    dates: {
      start: "2023-11-03T00:00:00.000Z",
      end: "2023-11-10T00:00:00.000Z",
    },
    weeks: [
      {
        percentage: 100,
        count: 2361,
      },
      {
        percentage: 66.9,
        count: 1579,
      },
      {
        percentage: 51,
        count: 1204,
      },
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ],
  },
  "Nov 10, 2023": {
    size: 2729,
    dates: {
      start: "2023-11-10T00:00:00.000Z",
      end: "2023-11-17T00:00:00.000Z",
    },
    weeks: [
      {
        percentage: 100,
        count: 2729,
      },
      {
        percentage: 69.9,
        count: 1907,
      },
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ],
  },
  "Nov 17, 2023": {
    size: 2905,
    dates: {
      start: "2023-11-17T00:00:00.000Z",
      end: "2023-11-24T00:00:00.000Z",
    },
    weeks: [
      {
        percentage: 100,
        count: 2905,
      },
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ],
  },
  // array-end
}

const colorClasses = [
  "bg-blue-50 dark:bg-blue-950",
  "bg-blue-100 dark:bg-blue-900",
  "bg-blue-200 dark:bg-blue-800",
  "bg-blue-300 dark:bg-blue-700",
  "bg-blue-400 dark:bg-blue-600",
  "bg-blue-500 dark:bg-blue-500",
  "bg-blue-600 dark:bg-blue-400",
]

const getBackgroundColor = (
  value: number,
  minValue: number,
  maxValue: number,
) => {
  const normalizedValue = (value - minValue) / (maxValue - minValue)
  const index = Math.min(
    Math.floor(normalizedValue * colorClasses.length),
    colorClasses.length - 1,
  )
  return colorClasses[index]
}

const getTextColor = (value: number, minValue: number, maxValue: number) => {
  return (value - minValue) / (maxValue - minValue) > 0.6
    ? "text-white dark:text-white"
    : "text-gray-900 dark:text-gray-50"
}

export default function CohortRetention() {
  const cohortEntries = Object.entries(cohorts as CohortRetentionData)
  const weeksCount = cohortEntries[0]?.[1].weeks.length ?? 0
  const weeks = Array.from({ length: weeksCount }, (_, i) => i)

  return (
    <div className="obfuscate">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
            Cohort Retention
          </h1>
          <p className="text-gray-500 sm:text-sm/6 dark:text-gray-500">
            Track customer engagement patterns and analyze support trends across
            user segments
          </p>
        </div>
      </div>
      <Divider />
      <section className="mt-8">
        <TableRoot className="overflow-scroll">
          <Table className="border-none">
            <TableHead>
              <TableRow>
                <TableHeaderCell className="sticky left-0 top-0 z-10 min-w-40 border-transparent bg-white p-px dark:border-transparent dark:bg-gray-950">
                  <span className="block">Cohort</span>
                  <span className="block font-normal text-gray-500 dark:text-gray-500">
                    Initial customers
                  </span>
                </TableHeaderCell>
                {weeks.map((week) => (
                  <TableHeaderCell
                    key={week}
                    className="border-none font-medium"
                  >
                    Week {week}
                  </TableHeaderCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody className="divide-none">
              {cohortEntries.map(
                ([cohortKey, cohortData]: [string, CohortData]) => (
                  <TableRow key={cohortKey} className="h-full">
                    <TableCell className="sticky left-0 z-10 h-full bg-white p-0 sm:min-w-56 dark:bg-gray-950">
                      <span className="block text-sm font-medium text-gray-900 dark:text-gray-50">
                        {cohortKey}
                      </span>
                      <span className="mt-0.5 block text-sm text-gray-500 dark:text-gray-500">
                        {valueFormatter(cohortData.size)} customers
                      </span>
                    </TableCell>
                    {cohortData.weeks.map((weekData, weekIndex) => (
                      <TableCell
                        key={weekIndex}
                        className="h-full min-w-24 p-[2px]"
                      >
                        {weekData === null ? (
                          <div
                            className={cx(
                              "flex h-[64px] flex-col justify-center rounded border border-dashed border-gray-200 bg-gray-50 px-3.5 py-3 text-gray-200 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-800",
                            )}
                          >
                            <span className="h-3 w-9 rounded-sm bg-gray-100 dark:bg-gray-800/50" />
                            <span className="mt-1 h-3 w-6 rounded-sm bg-gray-100 dark:bg-gray-800/50" />
                          </div>
                        ) : (
                          <div
                            className={cx(
                              "flex h-full flex-col justify-center rounded px-3.5 py-3",
                              getBackgroundColor(weekData.percentage, 0, 100),
                              getTextColor(weekData.percentage, 0, 100),
                            )}
                          >
                            <span className="block text-sm font-medium">
                              {weekData.percentage.toFixed(1)}%
                            </span>
                            <span
                              className={cx(
                                "mt-0.5 block text-sm",
                                getTextColor(weekData.percentage, 0, 100),
                              )}
                            >
                              {weekData.count}
                            </span>
                          </div>
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ),
              )}
            </TableBody>
          </Table>
        </TableRoot>
      </section>
    </div>
  )
}
