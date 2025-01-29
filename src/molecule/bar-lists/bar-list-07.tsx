"use client"

import React from "react"
import { RiCloseLine } from "@remixicon/react"
import CountUp from "react-countup"

import { BarList } from "../../atom/BarList"
import { Card } from "../../atom/Card"

// This example requires third-pary library 'react-countup' for counting animation
// npm install react-countup

const country = [
  //array-start
  {
    name: "United States of America",
    value: 5422,
  },
  {
    name: "India",
    value: 3560,
  },
  {
    name: "Germany",
    value: 680,
  },
  {
    name: "Brazil",
    value: 580,
  },
  {
    name: "United Kingdom",
    value: 510,
  },
  //array-end
]

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`

const initialSum = country.reduce(
  (sum, dataPoint) => sum + (dataPoint.value || 0),
  0,
)

export default function Example() {
  const [values, setValues] = React.useState({
    start: initialSum,
    end: initialSum,
  })
  const [selectedItem, setSelectedItem] = React.useState(undefined)

  const handleBarClick = (item: any) => {
    setSelectedItem(item.name)
    setValues(() => ({
      start: initialSum,
      end: item.value,
    }))
  }

  const clearSelectedItem = () => {
    setSelectedItem(undefined)
    setValues((prev) => ({
      start: prev.end,
      end: initialSum,
    }))
  }

  return (
    <div className="obfuscate">
      {/* Custom color used for better contrast for placeholder metric card */}
      <div className="rounded-lg border border-dashed border-gray-300 p-6 sm:mx-auto sm:max-w-lg dark:border-gray-600">
        <h4 className="text-sm text-gray-500 dark:text-gray-500">Visitors</h4>
        <p className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
          <CountUp start={values.start} end={values.end} duration={0.4} />
        </p>
      </div>
      <Card className="mt-4 sm:mx-auto sm:max-w-lg">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <p className="font-medium leading-7 text-gray-900 dark:text-gray-50">
            Locations
          </p>
          {selectedItem && (
            <button
              type="button"
              onClick={clearSelectedItem}
              className="group inline-flex items-center gap-x-1.5 rounded-md bg-gray-50 px-2 py-1.5 text-xs text-gray-900 ring-1 ring-inset ring-gray-200 transition-all hover:bg-gray-100 dark:bg-gray-500/20 dark:text-gray-50 dark:ring-gray-400/20 hover:dark:bg-gray-500/30"
              aria-label="Remove"
            >
              Country
              <span className="font-semibold">{selectedItem}</span>
              <RiCloseLine
                className="-mr-px size-4 shrink-0 text-gray-500 group-hover:text-gray-700 dark:text-gray-500 group-hover:dark:text-gray-300"
                aria-hidden={true}
              />
            </button>
          )}
        </div>
        <div className="mt-6">
          <BarList
            data={country.filter(
              (item) => !selectedItem || item.name === selectedItem,
            )}
            valueFormatter={valueFormatter}
            onValueChange={(item) => handleBarClick(item)}
          />
        </div>
      </Card>
    </div>
  )
}
