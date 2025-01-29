"use client"

import React from "react"

import { cx } from "@/lib/utils"

import { BarChart } from "../../atoms/BarChart"
import { Card } from "../../atoms/Card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../atoms/Tabs"

const dataEurope = [
  //array-start
  {
    date: "Jan 23",
    Successful: 12,
    Refunded: 0,
    Fraudulent: 1,
  },
  {
    date: "Feb 23",
    Successful: 24,
    Refunded: 1,
    Fraudulent: 1,
  },
  {
    date: "Mar 23",
    Successful: 48,
    Refunded: 4,
    Fraudulent: 4,
  },
  {
    date: "Apr 23",
    Successful: 24,
    Refunded: 2,
    Fraudulent: 3,
  },
  {
    date: "May 23",
    Successful: 34,
    Refunded: 0,
    Fraudulent: 0,
  },
  {
    date: "Jun 23",
    Successful: 26,
    Refunded: 0,
    Fraudulent: 0,
  },
  {
    date: "Jul 23",
    Successful: 12,
    Refunded: 0,
    Fraudulent: 0,
  },
  {
    date: "Aug 23",
    Successful: 38,
    Refunded: 2,
    Fraudulent: 0,
  },
  {
    date: "Sep 23",
    Successful: 23,
    Refunded: 1,
    Fraudulent: 0,
  },
  {
    date: "Oct 23",
    Successful: 20,
    Refunded: 0,
    Fraudulent: 0,
  },
  {
    date: "Nov 23",
    Successful: 24,
    Refunded: 0,
    Fraudulent: 0,
  },
  {
    date: "Dec 23",
    Successful: 21,
    Refunded: 8,
    Fraudulent: 1,
  },
  //array-end
]

const dataAsia = [
  //array-start
  {
    date: "Jan 23",
    Successful: 31,
    Refunded: 1,
    Fraudulent: 2,
  },
  {
    date: "Feb 23",
    Successful: 32,
    Refunded: 2,
    Fraudulent: 1,
  },
  {
    date: "Mar 23",
    Successful: 44,
    Refunded: 3,
    Fraudulent: 3,
  },
  {
    date: "Apr 23",
    Successful: 23,
    Refunded: 2,
    Fraudulent: 4,
  },
  {
    date: "May 23",
    Successful: 35,
    Refunded: 1,
    Fraudulent: 1,
  },
  {
    date: "Jun 23",
    Successful: 48,
    Refunded: 1,
    Fraudulent: 1,
  },
  {
    date: "Jul 23",
    Successful: 33,
    Refunded: 1,
    Fraudulent: 1,
  },
  {
    date: "Aug 23",
    Successful: 38,
    Refunded: 3,
    Fraudulent: 0,
  },
  {
    date: "Sep 23",
    Successful: 41,
    Refunded: 2,
    Fraudulent: 0,
  },
  {
    date: "Oct 23",
    Successful: 39,
    Refunded: 1,
    Fraudulent: 0,
  },
  {
    date: "Nov 23",
    Successful: 32,
    Refunded: 1,
    Fraudulent: 1,
  },
  {
    date: "Dec 23",
    Successful: 19,
    Refunded: 5,
    Fraudulent: 1,
  },
  //array-end
]

const summary = [
  //array-start
  {
    name: "Europe",
    total: 291,
    change: "+2.3%",
    changeType: "positive",
    data: dataEurope,
    details: [
      {
        name: "Successful",
        value: 263,
      },
      {
        name: "Refunded",
        value: 18,
      },
      {
        name: "Fraudulent",
        value: 10,
      },
    ],
  },
  {
    name: "Asia",
    total: 758,
    change: "-0.3%",
    changeType: "negative",
    data: dataAsia,
    details: [
      {
        name: "Successful",
        value: 405,
      },
      {
        name: "Refunded",
        value: 21,
      },
      {
        name: "Fraudulent",
        value: 15,
      },
    ],
  },
  //array-end
]

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`

type Status = "Successful" | "Refunded" | "Fraudulent"

const statusColor: Record<Status, string> = {
  Successful: "bg-blue-500 dark:bg-blue-500",
  Refunded: "bg-violet-500 dark:bg-violet-500",
  Fraudulent: "bg-fuchsia-500 dark:bg-fuchsia-500",
}

export default function Example() {
  return (
    <div className="obfuscate">
      <Card className="sm:mx-auto sm:max-w-lg">
        <h3 className="font-medium text-gray-900 dark:text-gray-50">
          Online payments
        </h3>
        <Tabs defaultValue={summary[0].name} className="mt-8">
          <TabsList className="space-x-0 border-t border-gray-200 dark:border-gray-800">
            {summary.map((tab, index) => (
              <React.Fragment key={tab.name}>
                <TabsTrigger
                  value={tab.name}
                  className="group w-full px-4 pt-2 text-left hover:border-gray-400 hover:bg-gray-50 dark:hover:border-gray-600 hover:dark:bg-gray-900"
                >
                  <p className="font-normal text-gray-500 dark:text-gray-500">
                    {tab.name}
                  </p>
                  <p className="text-lg font-bold text-gray-500 group-data-[state=active]:text-gray-900 dark:text-gray-500 group-data-[state=active]:dark:text-gray-50">
                    {tab.total}
                  </p>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
                    <span
                      className={cx(
                        tab.changeType === "positive"
                          ? "text-emerald-700 dark:text-emerald-500"
                          : "text-red-700 dark:text-red-500",
                        "font-medium",
                      )}
                    >
                      {tab.change}
                    </span>{" "}
                    to last period
                  </p>
                </TabsTrigger>
                {index < summary.length - 1 && (
                  <span
                    className="h-16 border-r border-gray-200 dark:border-gray-800"
                    aria-hidden={true}
                  />
                )}
              </React.Fragment>
            ))}
          </TabsList>
          {summary.map((region) => (
            <TabsContent key={region.name} value={region.name}>
              <BarChart
                data={region.data}
                index="date"
                categories={["Successful", "Refunded", "Fraudulent"]}
                colors={["blue", "violet", "fuchsia"]}
                type="stacked"
                valueFormatter={valueFormatter}
                showLegend={false}
                showYAxis={false}
                showGridLines={true}
                startEndOnly={true}
                className="mt-8 !h-48"
              />
              <ul
                role="list"
                className="mt-2 divide-y divide-gray-200 text-sm text-gray-500 dark:divide-gray-800 dark:text-gray-500"
              >
                {region.details.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-2 py-1.5">
                      <span
                        className={cx(
                          statusColor[item.name as Status],
                          "size-2 shrink-0 rounded-sm",
                        )}
                        aria-hidden={true}
                      />
                      <span>{item.name}</span>
                    </div>
                    <span className="font-medium text-gray-900 dark:text-gray-50">
                      {valueFormatter(item.value)}
                    </span>
                  </li>
                ))}
              </ul>
            </TabsContent>
          ))}
        </Tabs>
      </Card>
    </div>
  )
}
