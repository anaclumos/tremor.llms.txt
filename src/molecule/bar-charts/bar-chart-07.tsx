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
