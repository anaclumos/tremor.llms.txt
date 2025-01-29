"use client"

import React from "react"

import { AreaChart } from "../../atoms/AreaChart"
import { Card } from "../../atoms/Card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../atoms/Tabs"

const data = [
  //array-start
  {
    date: "Aug 01",
    "Page views": 7100,
    "Unique visitors": 4434,
  },
  {
    date: "Aug 02",
    "Page views": 10943,
    "Unique visitors": 6954,
  },
  {
    date: "Aug 03",
    "Page views": 10889,
    "Unique visitors": 7100,
  },
  {
    date: "Aug 04",
    "Page views": 10909,
    "Unique visitors": 7909,
  },
  {
    date: "Aug 05",
    "Page views": 10778,
    "Unique visitors": 7103,
  },
  {
    date: "Aug 06",
    "Page views": 10900,
    "Unique visitors": 7534,
  },
  {
    date: "Aug 07",
    "Page views": 10129,
    "Unique visitors": 7412,
  },
  {
    date: "Aug 08",
    "Page views": 10021,
    "Unique visitors": 7834,
  },
  {
    date: "Aug 09",
    "Page views": 10279,
    "Unique visitors": 7159,
  },
  {
    date: "Aug 10",
    "Page views": 10224,
    "Unique visitors": 8260,
  },
  {
    date: "Aug 11",
    "Page views": 10380,
    "Unique visitors": 4965,
  },
  {
    date: "Aug 12",
    "Page views": 10414,
    "Unique visitors": 4989,
  },
  {
    date: "Aug 13",
    "Page views": 6540,
    "Unique visitors": 4839,
  },
  {
    date: "Aug 14",
    "Page views": 6634,
    "Unique visitors": 4343,
  },
  {
    date: "Aug 15",
    "Page views": 7124,
    "Unique visitors": 4903,
  },
  {
    date: "Aug 16",
    "Page views": 7934,
    "Unique visitors": 5273,
  },
  {
    date: "Aug 17",
    "Page views": 10287,
    "Unique visitors": 6900,
  },
  {
    date: "Aug 18",
    "Page views": 10323,
    "Unique visitors": 6732,
  },
  {
    date: "Aug 19",
    "Page views": 10511,
    "Unique visitors": 6523,
  },
  {
    date: "Aug 20",
    "Page views": 11043,
    "Unique visitors": 7422,
  },
  {
    date: "Aug 21",
    "Page views": 6700,
    "Unique visitors": 4334,
  },
  {
    date: "Aug 22",
    "Page views": 6900,
    "Unique visitors": 4943,
  },
  {
    date: "Aug 23",
    "Page views": 7934,
    "Unique visitors": 7812,
  },
  {
    date: "Aug 24",
    "Page views": 9021,
    "Unique visitors": 7729,
  },
  {
    date: "Aug 25",
    "Page views": 9198,
    "Unique visitors": 7178,
  },
  {
    date: "Aug 26",
    "Page views": 9557,
    "Unique visitors": 7158,
  },
  {
    date: "Aug 27",
    "Page views": 9959,
    "Unique visitors": 7100,
  },
  {
    date: "Aug 28",
    "Page views": 10034,
    "Unique visitors": 7934,
  },
  {
    date: "Aug 29",
    "Page views": 10243,
    "Unique visitors": 7223,
  },
  {
    date: "Aug 30",
    "Page views": 10078,
    "Unique visitors": 8779,
  },
  {
    date: "Aug 31",
    "Page views": 11134,
    "Unique visitors": 8190,
  },
  {
    date: "Sep 01",
    "Page views": 12347,
    "Unique visitors": 4839,
  },
  {
    date: "Sep 02",
    "Page views": 12593,
    "Unique visitors": 5153,
  },
  {
    date: "Sep 03",
    "Page views": 12043,
    "Unique visitors": 5234,
  },
  {
    date: "Sep 04",
    "Page views": 12144,
    "Unique visitors": 5478,
  },
  {
    date: "Sep 05",
    "Page views": 12489,
    "Unique visitors": 5741,
  },
  {
    date: "Sep 06",
    "Page views": 12748,
    "Unique visitors": 6743,
  },
  {
    date: "Sep 07",
    "Page views": 12933,
    "Unique visitors": 7832,
  },
  {
    date: "Sep 08",
    "Page views": 13028,
    "Unique visitors": 8943,
  },
  {
    date: "Sep 09",
    "Page views": 13412,
    "Unique visitors": 9932,
  },
  {
    date: "Sep 10",
    "Page views": 13649,
    "Unique visitors": 10139,
  },
  {
    date: "Sep 11",
    "Page views": 13748,
    "Unique visitors": 10441,
  },
  {
    date: "Sep 12",
    "Page views": 13148,
    "Unique visitors": 10933,
  },
  {
    date: "Sep 13",
    "Page views": 12839,
    "Unique visitors": 10073,
  },
  {
    date: "Sep 14",
    "Page views": 12428,
    "Unique visitors": 10128,
  },
  {
    date: "Sep 15",
    "Page views": 12012,
    "Unique visitors": 10412,
  },
  {
    date: "Sep 16",
    "Page views": 11801,
    "Unique visitors": 9501,
  },
  {
    date: "Sep 17",
    "Page views": 10102,
    "Unique visitors": 7923,
  },
  {
    date: "Sep 18",
    "Page views": 12132,
    "Unique visitors": 10212,
  },
  {
    date: "Sep 19",
    "Page views": 12901,
    "Unique visitors": 10101,
  },
  {
    date: "Sep 20",
    "Page views": 13132,
    "Unique visitors": 10132,
  },
  {
    date: "Sep 21",
    "Page views": 14132,
    "Unique visitors": 10212,
  },
  {
    date: "Sep 22",
    "Page views": 14245,
    "Unique visitors": 12163,
  },
  {
    date: "Sep 23",
    "Page views": 14328,
    "Unique visitors": 10036,
  },
  {
    date: "Sep 24",
    "Page views": 14949,
    "Unique visitors": 8985,
  },
  {
    date: "Sep 25",
    "Page views": 15967,
    "Unique visitors": 9700,
  },
  {
    date: "Sep 26",
    "Page views": 17349,
    "Unique visitors": 10943,
  },
  //array-end
]

const summary = [
  //array-start
  {
    name: "Unique visitors",
    value: "216.8K",
  },
  {
    name: "Page views",
    value: "271K",
  },
  //array-end
]

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`

export default function Example() {
  return (
    <div className="obfuscate">
      <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
        Web analytics
      </h1>
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
        Analyze and understand your web traffic.
      </p>
      <Card className="mt-8 overflow-hidden !p-0">
        <Tabs defaultValue={summary[0].name}>
          <TabsList
            defaultValue="tab1"
            className="!h-24 !bg-gray-50 dark:!bg-[#090E1A]"
          >
            {summary.map((tab) => (
              <React.Fragment key={tab.name}>
                <TabsTrigger
                  value={tab.name}
                  className="!py-4 !pl-5 !pr-12 text-left data-[state=active]:bg-white dark:data-[state=active]:bg-[#090E1A]"
                >
                  <span className="block font-normal text-gray-500 dark:text-gray-500">
                    {tab.name}
                  </span>
                  <span className="mt-1 block text-3xl font-semibold text-gray-900 dark:text-gray-50">
                    {tab.value}
                  </span>
                </TabsTrigger>
                <span
                  className="h-full border-r border-gray-200 dark:border-gray-800"
                  aria-hidden={true}
                />
              </React.Fragment>
            ))}
          </TabsList>
          {summary.map((tab) => (
            <TabsContent key={tab.name} value={tab.name} className="p-6">
              <AreaChart
                data={data}
                index="date"
                categories={[tab.name]}
                valueFormatter={valueFormatter}
                fill="solid"
                showLegend={false}
                yAxisWidth={50}
                className="hidden !h-96 sm:block"
              />
              <AreaChart
                data={data}
                index="date"
                categories={[tab.name]}
                valueFormatter={valueFormatter}
                fill="solid"
                showLegend={false}
                showYAxis={false}
                startEndOnly={true}
                className="!h-72 sm:hidden"
              />
            </TabsContent>
          ))}
        </Tabs>
      </Card>
    </div>
  )
}
