"use client"

import { chartColors } from "@/lib/chartUtils"
import { cx } from "@/lib/utils"

import { BarChart, TooltipProps } from "../../atom/BarChart"

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
          <span className="absolute left-1/2 top-1/2 z-30 h-2.5 w-0.5 -translate-y-1/2 rounded-full bg-gray-500 dark:bg-gray-500" />
          {percentageDiff >= 0 ? (
            <span className="absolute left-1/2 top-1/2 z-10 h-1.5 w-1/2 -translate-y-1/2">
              <span
                style={{
                  width: `${cappedValue}%`,
                  transition: "all duration-300",
                }}
                className="absolute h-1.5 rounded-r-full bg-gradient-to-r from-gray-400 to-gray-300 dark:from-gray-400 dark:to-gray-500"
              />
            </span>
          ) : (
            <span className="absolute right-1/2 top-1/2 z-10 h-1.5 w-1/2 -translate-y-1/2">
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
