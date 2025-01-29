"use client"

import { cx } from "@/lib/utils"

import { AreaChart } from "@/atom/AreaChart"
import { Card } from "@/atom/Card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/atom/Tabs"

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
    value: "34s",
    active: true,
  },
  {
    name: "Total incident length",
    value: "1min 31s",
    active: false,
  },
  {
    name: "MTTA",
    value: "3min 29s",
    active: false,
  },
  {
    name: "MTTR",
    value: "5min 21s",
    active: false,
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
        Reporting
      </h1>
      <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
        Get insights with our advanced AI-powered analytics.
      </p>
      <Card className="mt-6 overflow-hidden !p-0">
        <Tabs defaultValue={stats[0].name}>
          <TabsList className="grid grid-cols-1 !gap-px !bg-gray-200 sm:!grid-cols-2 lg:!grid-cols-4 dark:!bg-gray-900">
            {stats.map((item) => (
              <TabsTrigger
                key={item.name}
                value={item.name}
                className="group flex !w-full !items-center !justify-start gap-4 !border-b !border-gray-200 !bg-white !px-4 !py-3 !text-left hover:!border-gray-200 data-[state=active]:!border-gray-200 sm:!px-6 sm:!py-6 xl:!px-8 dark:!border-gray-900 dark:!bg-[#090E1A] hover:dark:!border-gray-900 data-[state=active]:dark:!border-gray-900"
              >
                <span
                  className={cx(
                    "group-data-[state=active]:block group-data-[state=inactive]:hidden",
                    "h-14 w-[3px] rounded-full bg-blue-500 dark:bg-blue-500",
                  )}
                  aria-hidden="true"
                />
                <div className="group-data-[state=inactive]:pl-[19px]">
                  <dd
                    className={cx(
                      "group-data-[state=active]:text-gray-900 group-data-[state=active]:dark:text-gray-50",
                      "text-2xl font-semibold tracking-tight text-gray-500 transition-all group-hover:text-gray-900 dark:text-gray-500 group-hover:dark:text-gray-50",
                    )}
                  >
                    {item.value}
                  </dd>
                  <dt className="mt-1 flex items-center gap-2">
                    <span
                      className={cx(
                        "group-data-[state=active]:text-gray-500 group-data-[state=active]:dark:text-gray-500",
                        "text-sm/6 font-normal text-gray-400 transition-all group-hover:text-gray-500 dark:text-gray-600 group-hover:dark:text-gray-500",
                      )}
                    >
                      {item.name}
                    </span>
                  </dt>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="p-6">
            {stats.map((item) => (
              <TabsContent key={item.name} value={item.name}>
                <AreaChart
                  data={data}
                  index="date"
                  categories={[item.name]}
                  colors={["blue"]}
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
                  categories={[item.name]}
                  colors={["blue"]}
                  fill="solid"
                  valueFormatter={valueFormatter}
                  onValueChange={() => {}}
                  showYAxis={false}
                  tickGap={15}
                  className="sm:hidden"
                />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </Card>
    </div>
  )
}
