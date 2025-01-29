"use client"

import React from "react"

import { BarChart } from "../../atoms/BarChart"
import { RadioCardGroup, RadioCardItem } from "../../atoms/RadioCardGroup"

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
