"use client"

import React from "react"

import { BarList } from "../../atoms/BarList"
import { Button } from "../../atoms/Button"
import { Card } from "../../atoms/Card"

const pages = [
  //array-start
  {
    name: "/home",
    value: 2019,
  },
  {
    name: "/blocks",
    value: 1053,
  },
  {
    name: "/components",
    value: 997,
  },
  {
    name: "/docs/getting-started/installation",
    value: 982,
  },
  {
    name: "/docs/components/button",
    value: 782,
  },
  {
    name: "/docs/components/table",
    value: 752,
  },
  {
    name: "/docs/components/area-chart",
    value: 741,
  },
  {
    name: "/docs/components/badge",
    value: 750,
  },
  {
    name: "/docs/components/bar-chart",
    value: 750,
  },
  {
    name: "/docs/components/tabs",
    value: 720,
  },
  {
    name: "/docs/components/tracker",
    value: 723,
  },
  //array-end
]

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`

export default function Example() {
  const [extended, setExtended] = React.useState(false)
  return (
    <div className="obfuscate">
      <Card className="!p-0 sm:mx-auto sm:max-w-lg">
        <div className="flex items-center justify-between border-b border-gray-200 p-6 dark:border-gray-900">
          <p className="font-medium text-gray-900 dark:text-gray-50">
            Top pages
          </p>
          <p className="text-xs font-medium uppercase text-gray-500 dark:text-gray-500">
            Visitors
          </p>
        </div>
        <div
          className={`overflow-hidden p-6 ${extended ? "" : "max-h-[260px]"}`}
        >
          <BarList data={pages} valueFormatter={valueFormatter} />
        </div>
        <div
          className={`flex justify-center ${
            extended
              ? "px-6 pb-6"
              : "absolute inset-x-0 bottom-0 rounded-b-lg bg-gradient-to-t from-white to-transparent py-7 dark:from-[#090E1A]"
          }`}
        >
          <Button variant="secondary" onClick={() => setExtended(!extended)}>
            {extended ? "Show less" : "Show more"}
          </Button>
        </div>
      </Card>
    </div>
  )
}
