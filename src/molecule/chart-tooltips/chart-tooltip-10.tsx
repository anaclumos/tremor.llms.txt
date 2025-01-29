"use client"

import React from "react"
import { RiArrowDownSLine } from "@remixicon/react"

import { BarChart, TooltipProps } from "@/atom/BarChart"
import { Button } from "@/atom/Button"
import { Divider } from "@/atom/Divider"
import { ProgressCircle } from "@/atom/ProgressCircle"

const data = [
  //array-start
  {
    date: "Jan 23",
    bpm: 167,
    effort: 23,
    recovery: 40,
    strain: 1.1,
    sleep: 89,
  },
  {
    date: "Feb 23",
    bpm: 121,
    effort: 78,
    recovery: 45,
    strain: 4.1,
    sleep: 79,
  },
  {
    date: "Mar 23",
    bpm: 155,
    effort: 32,
    recovery: 42,
    strain: 1.3,
    sleep: 88,
  },
  {
    date: "Apr 23",
    bpm: 143,
    effort: 45,
    recovery: 38,
    strain: 2.0,
    sleep: 85,
  },
  {
    date: "May 23",
    bpm: 160,
    effort: 28,
    recovery: 43,
    strain: 1.4,
    sleep: 90,
  },
  {
    date: "Jun 23",
    bpm: 140,
    effort: 50,
    recovery: 37,
    strain: 2.2,
    sleep: 82,
  },
  {
    date: "Jul 23",
    bpm: 152,
    effort: 35,
    recovery: 44,
    strain: 1.5,
    sleep: 91,
  },
  {
    date: "Aug 23",
    bpm: 135,
    effort: 53,
    recovery: 36,
    strain: 2.3,
    sleep: 90,
  },
  {
    date: "Sep 23",
    bpm: 150,
    effort: 38,
    recovery: 43,
    strain: 1.7,
    sleep: 87,
  },
  {
    date: "Oct 23",
    bpm: 132,
    effort: 31,
    recovery: 43,
    strain: 1.9,
    sleep: 84,
  },
  {
    date: "Nov 23",
    bpm: 139,
    effort: 39,
    recovery: 41,
    strain: 1.2,
    sleep: 88,
  },
  {
    date: "Dec 23",
    bpm: 121,
    effort: 21,
    recovery: 99,
    strain: 1.9,
    sleep: 91,
  },
  //array-end
]

const dataFormatter = (number: number) => {
  return Intl.NumberFormat("us").format(number).toString() + " bpm"
}

const CustomTooltip = ({ payload, active }: TooltipProps) => {
  if (!active || !payload || payload.length === 0) return null

  const data = payload.map((item) => ({
    date: item.payload.date,
    effort: item.payload.effort,
    recovery: item.payload.recovery,
    strain: item.payload.strain,
    sleep: item.payload.sleep,
  }))

  return (
    <div className="rounded-md border border-gray-200 bg-white px-6 py-4 shadow-md dark:border-gray-800 dark:bg-gray-950">
      {data.map((item, index) => (
        <div key={index} className="flex items-center space-x-6">
          <ProgressCircle value={item.effort} radius={45} variant="default">
            <ProgressCircle
              value={item.recovery}
              radius={36}
              variant="success"
            />
          </ProgressCircle>
          <div className="space-y-1">
            <div>
              <h4 className="text-xs text-gray-500 dark:text-gray-500">
                Effort
              </h4>
              <p className="font-medium text-blue-600 dark:text-blue-500">
                {item.effort}&#37;
              </p>
            </div>
            <div>
              <h4 className="text-xs text-gray-500 dark:text-gray-500">
                Recovery
              </h4>
              <p className="font-medium text-emerald-600 dark:text-emerald-500">
                {item.recovery}&#37;
              </p>
            </div>
          </div>
          <div className="space-y-1">
            <div>
              <h4 className="text-xs text-gray-500 dark:text-gray-500">
                Strain
              </h4>
              <p className="font-medium text-gray-900 dark:text-gray-50">
                {item.strain}
              </p>
            </div>
            <div>
              <h4 className="text-xs text-gray-500 dark:text-gray-500">
                Sleep
              </h4>
              <p className="font-medium text-gray-900 dark:text-gray-50">
                {item.sleep}&#37;
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Example() {
  const [showDemo, setShowDemo] = React.useState(false)
  return (
    <div className="obfuscate">
      <div className="flex w-full justify-center">
        <CustomTooltip
          label="Oct 23"
          active={true}
          payload={[
            //array-start
            {
              category: "bpm",
              value: 20,
              index: "Oct 23",
              color: "blue",
              payload: {
                bpm: 132,
                effort: 31,
                recovery: 43,
                strain: 1.9,
                sleep: 84,
              },
            },
            //array-end
          ]}
        />
      </div>
      <Divider className="mt-12">
        <Button
          variant="light"
          onClick={() => setShowDemo(!showDemo)}
          className="group !rounded-full !bg-gray-100 !text-gray-500 hover:!bg-gray-100 dark:!bg-gray-900 dark:!text-gray-500 hover:dark:!bg-gray-900"
          tabIndex={0}
        >
          <RiArrowDownSLine
            aria-hidden={true}
            className={`-ml-1 size-5 transition-all group-hover:text-gray-900 group-hover:dark:text-gray-50 ${showDemo ? "rotate-180" : ""} `}
          />
          <span className="ml-1 transition-all group-hover:text-gray-900 group-hover:dark:text-gray-50">
            {showDemo ? "Hide Demo" : "Show Demo"}
          </span>
        </Button>
      </Divider>
      {showDemo ? (
        <>
          <BarChart
            className="mt-12 hidden !h-72 sm:block"
            data={data}
            index="date"
            categories={["bpm"]}
            valueFormatter={dataFormatter}
            yAxisWidth={70}
            showLegend={false}
            customTooltip={CustomTooltip}
          />
          <BarChart
            className="mt-12 !h-80 sm:hidden"
            data={data}
            index="date"
            categories={["bpm"]}
            valueFormatter={dataFormatter}
            showYAxis={false}
            showLegend={false}
            startEndOnly={true}
            customTooltip={CustomTooltip}
          />
        </>
      ) : null}
    </div>
  )
}
