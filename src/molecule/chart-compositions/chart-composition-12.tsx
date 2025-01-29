"use client"

import { RiInformationFill } from "@remixicon/react"

import { AreaChart } from "../../atom/AreaChart"
import { Card } from "../../atom/Card"
import { SelectNative } from "../../atom/SelectNative"
import { Tooltip } from "../../atom/Tooltip"

const data = [
  //array-start
  {
    date: "Day 1",
    "Avg. response time": 6.5,
    "Total incident length": 31,
    MTTR: 45,
    MTTA: 50,
  },
  {
    date: "Day 2",
    "Avg. response time": 7,
    "Total incident length": 45,
    MTTR: 58,
    MTTA: 65,
  },
  {
    date: "Day 3",
    "Avg. response time": 9,
    "Total incident length": 53,
    MTTR: 65,
    MTTA: 73,
  },
  {
    date: "Day 4",
    "Avg. response time": 12,
    "Total incident length": 130,
    MTTR: 100,
    MTTA: 90,
  },
  {
    date: "Day 5",
    "Avg. response time": 22,
    "Total incident length": 105,
    MTTR: 95,
    MTTA: 88,
  },
  {
    date: "Day 6",
    "Avg. response time": 14,
    "Total incident length": 145,
    MTTR: 120,
    MTTA: 100,
  },
  {
    date: "Day 7",
    "Avg. response time": 35,
    "Total incident length": 120,
    MTTR: 110,
    MTTA: 85,
  },
  {
    date: "Day 8",
    "Avg. response time": 11,
    "Total incident length": 140,
    MTTR: 125,
    MTTA: 98,
  },
  {
    date: "Day 9",
    "Avg. response time": 10,
    "Total incident length": 115,
    MTTR: 98,
    MTTA: 88,
  },
  {
    date: "Day 10",
    "Avg. response time": 13,
    "Total incident length": 150,
    MTTR: 118,
    MTTA: 110,
  },
  {
    date: "Day 11",
    "Avg. response time": 13,
    "Total incident length": 140,
    MTTR: 123,
    MTTA: 100,
  },
  {
    date: "Day 12",
    "Avg. response time": 11,
    "Total incident length": 135,
    MTTR: 110,
    MTTA: 98,
  },
  {
    date: "Day 13",
    "Avg. response time": 15,
    "Total incident length": 170,
    MTTR: 130,
    MTTA: 115,
  },
  {
    date: "Day 14",
    "Avg. response time": 12,
    "Total incident length": 135,
    MTTR: 115,
    MTTA: 105,
  },
  {
    date: "Day 15",
    "Avg. response time": 10.5,
    "Total incident length": 130,
    MTTR: 110,
    MTTA: 95,
  },
  {
    date: "Day 16",
    "Avg. response time": 45,
    "Total incident length": 165,
    MTTR: 125,
    MTTA: 115,
  },
  {
    date: "Day 17",
    "Avg. response time": 35,
    "Total incident length": 150,
    MTTR: 120,
    MTTA: 100,
  },
  {
    date: "Day 18",
    "Avg. response time": 10,
    "Total incident length": 140,
    MTTR: 112,
    MTTA: 105,
  },
  {
    date: "Day 19",
    "Avg. response time": 25,
    "Total incident length": 135,
    MTTR: 115,
    MTTA: 110,
  },
  {
    date: "Day 20",
    "Avg. response time": 55,
    "Total incident length": 160,
    MTTR: 140,
    MTTA: 125,
  },
  {
    date: "Day 21",
    "Avg. response time": 61,
    "Total incident length": 180,
    MTTR: 150,
    MTTA: 130,
  },
  {
    date: "Day 22",
    "Avg. response time": 45,
    "Total incident length": 155,
    MTTR: 135,
    MTTA: 120,
  },
  {
    date: "Day 23",
    "Avg. response time": 50,
    "Total incident length": 170,
    MTTR: 140,
    MTTA: 125,
  },
  {
    date: "Day 24",
    "Avg. response time": 15,
    "Total incident length": 140,
    MTTR: 118,
    MTTA: 105,
  },
  {
    date: "Day 25",
    "Avg. response time": 40,
    "Total incident length": 160,
    MTTR: 130,
    MTTA: 120,
  },
  //array-end
]

const stats = [
  //array-start
  {
    name: "Avg. response time",
    description: "Speed at which the server can respond",
    value: "34s",
  },
  {
    name: "Total incident length",
    description:
      "Total duration from when an incident starts to when it is fully resolved",
    value: "1min 31s",
  },
  {
    name: "MTTA",
    description:
      "Avg. time it takes to acknowledge or respond to an incident after it's been detected",
    value: "3min 29s",
  },
  {
    name: "MTTR",
    description:
      "Avg. time it takes to resolve an issue after it has been reported",
    value: "5min 21s",
  },
  //array-end
]

const selectOptions = [
  //array-start
  {
    id: "region",
    label: "Region",
    defaultValue: "europe",
    width: "32",
    options: [
      { value: "north-america", label: "North America" },
      { value: "europe", label: "Europe" },
      { value: "asia", label: "Asia" },
      { value: "australia", label: "Australia" },
    ],
  },
  {
    id: "integration",
    label: "Integrations",
    defaultValue: "all",
    width: "28",
    options: [
      { value: "all", label: "All" },
      { value: "azure-monitor", label: "Azure Monitor" },
      { value: "splunk", label: "Splunk" },
      { value: "dynatrace", label: "Dynatrace" },
    ],
  },
  {
    id: "acknowledger",
    label: "Acknowledged by",
    defaultValue: "emily-smith",
    width: "40",
    options: [
      { value: "all", label: "All" },
      { value: "emily-smith", label: "Emily Smith" },
      { value: "mike-kingstone", label: "Mike Kingstone" },
      { value: "simon-dumentis", label: "Simon Dumentis" },
    ],
  },
  {
    id: "escalator",
    label: "Resolved by",
    width: "40",
    options: [
      { value: "michael-bridge", label: "Michael Bridge" },
      { value: "emma-stone", label: "Emma Stone" },
      { value: "max-mcbeccel", label: "Max McBeccel" },
      { value: "lena-goldriver", label: "Lena Goldriver" },
    ],
  },
  {
    id: "escalation-policy",
    label: "Escalation policy",
    defaultValue: "hierarchical",
    width: "32",
    options: [
      { value: "all", label: "All" },
      { value: "hierarchical", label: "Hierarchical Escalation" },
      { value: "functional", label: "Functional Escalation" },
      { value: "time-based", label: "Time-based Escalation" },
    ],
  },
  {
    id: "cause",
    label: "Cause",
    defaultValue: "404-not-found",
    width: "40",
    options: [
      { value: "all", label: "All" },
      { value: "502-bad-gateway", label: "502 Bad Gateway" },
      { value: "404-not-found", label: "404 Not Found" },
      { value: "400-bad-request", label: "400 Bad Request" },
    ],
  },
  //array-end
]

const valueFormatter = (seconds: number) => {
  if (seconds < 60) {
    return `${seconds.toFixed(1)}s`
  } else {
    const minutes = (seconds / 60).toFixed(1)
    return `${minutes}min`
  }
}

export default function Example() {
  return (
    <div className="obfuscate">
      <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-50">
        Overview
      </h1>
      <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
        Get insights into your incidents
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        {selectOptions.map(({ id, label, defaultValue, width, options }) => (
          <span key={id} className="inline-flex items-center shadow-sm">
            <label
              htmlFor={id}
              className="flex h-[38px] select-none items-center whitespace-nowrap rounded-l-md border border-gray-300 bg-gray-50 px-2.5 text-base text-gray-900 sm:h-[34px] sm:text-sm dark:border-gray-800 dark:bg-gray-900 dark:text-gray-50"
            >
              {label}
            </label>
            <SelectNative
              name={id}
              id={id}
              defaultValue={defaultValue}
              className={`-ml-px !w-${width} rounded-none rounded-r-md !py-1.5 !shadow-none`}
            >
              {options.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </SelectNative>
          </span>
        ))}
      </div>
      <Card className="mt-6 overflow-hidden !p-0">
        <div className="p-6">
          <AreaChart
            data={data}
            index="date"
            categories={[
              "Avg. response time",
              "Total incident length",
              "MTTR",
              "MTTA",
            ]}
            colors={["purple", "blue", "cyan", "emerald"]}
            fill="solid"
            valueFormatter={valueFormatter}
            onValueChange={() => {}}
            yAxisWidth={55}
            maxValue={400}
            tickGap={15}
            className="hidden sm:block"
          />
          <AreaChart
            data={data}
            index="date"
            categories={[
              "Avg. response time",
              "Total incident length",
              "MTTR",
              "MTTA",
            ]}
            colors={["purple", "blue", "cyan", "emerald"]}
            fill="solid"
            valueFormatter={valueFormatter}
            onValueChange={() => {}}
            showYAxis={false}
            tickGap={15}
            className="sm:hidden"
          />
        </div>
        <dl className="mx-auto grid grid-cols-1 gap-px border-t border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-4 dark:border-gray-900 dark:bg-gray-900">
          {stats.map((item) => (
            <div
              key={item.name}
              className="bg-white px-4 py-6 sm:px-6 xl:px-8 dark:bg-[#090E1A]"
            >
              <dd className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-50">
                {item.value}
              </dd>
              <dt className="mt-1 flex items-center gap-2">
                <span className="text-sm/6 text-gray-500 sm:text-gray-500">
                  {item.name}
                </span>
                <Tooltip content={item.description}>
                  <RiInformationFill
                    className="size-4 shrink-0 text-gray-400 dark:text-gray-600"
                    aria-hidden="true"
                  />
                </Tooltip>
              </dt>
            </div>
          ))}
        </dl>
      </Card>
    </div>
  )
}
