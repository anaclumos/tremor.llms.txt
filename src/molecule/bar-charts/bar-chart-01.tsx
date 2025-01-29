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
