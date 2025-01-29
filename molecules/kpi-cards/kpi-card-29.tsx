"use client"

import { Card } from "../../atoms/Card"

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
