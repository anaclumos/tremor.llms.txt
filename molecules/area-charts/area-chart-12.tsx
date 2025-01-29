"use client"

import { AreaChart } from "../../atoms/AreaChart"
import { Card } from "../../atoms/Card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../atoms/Tabs"

const data = [
  //array-start
  {
    date: "Aug 01",
    "Successful requests": 1040,
    Errors: 0,
  },
  {
    date: "Aug 02",
    "Successful requests": 1200,
    Errors: 0,
  },
  {
    date: "Aug 03",
    "Successful requests": 1130,
    Errors: 0,
  },
  {
    date: "Aug 04",
    "Successful requests": 1050,
    Errors: 0,
  },
  {
    date: "Aug 05",
    "Successful requests": 920,
    Errors: 0,
  },
  {
    date: "Aug 06",
    "Successful requests": 870,
    Errors: 0,
  },
  {
    date: "Aug 07",
    "Successful requests": 790,
    Errors: 0,
  },
  {
    date: "Aug 08",
    "Successful requests": 910,
    Errors: 0,
  },
  {
    date: "Aug 09",
    "Successful requests": 951,
    Errors: 0,
  },
  {
    date: "Aug 10",
    "Successful requests": 1232,
    Errors: 0,
  },
  {
    date: "Aug 11",
    "Successful requests": 1230,
    Errors: 0,
  },
  {
    date: "Aug 12",
    "Successful requests": 1289,
    Errors: 0,
  },
  {
    date: "Aug 13",
    "Successful requests": 1002,
    Errors: 0,
  },
  {
    date: "Aug 14",
    "Successful requests": 1034,
    Errors: 0,
  },
  {
    date: "Aug 15",
    "Successful requests": 1140,
    Errors: 0,
  },
  {
    date: "Aug 16",
    "Successful requests": 1280,
    Errors: 0,
  },
  {
    date: "Aug 17",
    "Successful requests": 1345,
    Errors: 0,
  },
  {
    date: "Aug 18",
    "Successful requests": 1432,
    Errors: 0,
  },
  {
    date: "Aug 19",
    "Successful requests": 1321,
    Errors: 0,
  },
  {
    date: "Aug 20",
    "Successful requests": 1230,
    Errors: 0,
  },
  {
    date: "Aug 21",
    "Successful requests": 1020,
    Errors: 0,
  },
  {
    date: "Aug 22",
    "Successful requests": 1040,
    Errors: 0,
  },
  {
    date: "Aug 23",
    "Successful requests": 610,
    Errors: 81,
  },
  {
    date: "Aug 24",
    "Successful requests": 610,
    Errors: 87,
  },
  {
    date: "Aug 25",
    "Successful requests": 610,
    Errors: 92,
  },
  {
    date: "Aug 26",
    "Successful requests": 501,
    Errors: 120,
  },
  {
    date: "Aug 27",
    "Successful requests": 480,
    Errors: 120,
  },
  {
    date: "Aug 28",
    "Successful requests": 471,
    Errors: 120,
  },
  {
    date: "Aug 29",
    "Successful requests": 610,
    Errors: 89,
  },
  {
    date: "Aug 30",
    "Successful requests": 513,
    Errors: 199,
  },
  {
    date: "Aug 31",
    "Successful requests": 500,
    Errors: 56,
  },
  //array-end
]

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`

const tabs = [
  //array-start
  {
    name: "1w",
    data: data.slice(0, 7),
  },
  {
    name: "2w",
    data: data.slice(0, 14),
  },
  {
    name: "4w",
    data: data.slice(0, 30),
  },
  {
    name: "All",
    data: data,
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <Card className="!p-0">
        <div className="p-6">
          <h1 className="font-medium text-gray-900 dark:text-gray-50">
            Monitoring
          </h1>
          <p className="text-sm/6 text-gray-500 dark:text-gray-500">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt
          </p>
        </div>
        <div className="border-t border-gray-200 p-6 dark:border-gray-900">
          {/* Grid is applied in mobile view to make use of order ranking and bring <TabGroup/> to the top */}
          <Tabs defaultValue={tabs[0].name}>
            <div className="grid md:flex md:items-start md:justify-between">
              <ul
                role="list"
                className="order-2 mt-6 flex flex-wrap items-center gap-x-10 gap-y-4 md:order-1 md:mt-0"
              >
                <li>
                  <div className="flex items-center space-x-2">
                    <span
                      className="size-3 shrink-0 rounded-sm bg-blue-500 dark:bg-blue-500"
                      aria-hidden="true"
                    />
                    <p className="font-semibold text-gray-900 dark:text-gray-50">
                      23,450
                    </p>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    Successful requests
                  </p>
                </li>
                <li>
                  <div className="flex items-center space-x-2">
                    <span
                      className="size-3 shrink-0 rounded-sm bg-red-500 dark:bg-red-500"
                      aria-hidden="true"
                    />
                    <p className="font-semibold text-gray-900 dark:text-gray-50">
                      1,397
                    </p>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    Errors
                  </p>
                </li>
              </ul>
              <div className="order-1 md:order-2">
                <TabsList variant="solid" className="w-full md:w-fit">
                  {tabs.map((tab) => (
                    <TabsTrigger
                      key={tab.name}
                      value={tab.name}
                      className="w-full md:w-fit"
                    >
                      {tab.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
            </div>
            {tabs.map((tab) => (
              <TabsContent key={tab.name} value={tab.name}>
                <AreaChart
                  data={tab.data}
                  index="date"
                  categories={["Successful requests", "Errors"]}
                  colors={["blue", "red"]}
                  showLegend={false}
                  yAxisWidth={44}
                  valueFormatter={valueFormatter}
                  fill="solid"
                  className="mt-10 hidden !h-72 sm:block"
                />
                <AreaChart
                  data={tab.data}
                  index="date"
                  categories={["Successful requests", "Errors"]}
                  colors={["blue", "red"]}
                  showLegend={false}
                  showYAxis={false}
                  startEndOnly={true}
                  valueFormatter={valueFormatter}
                  fill="solid"
                  className="mt-6 !h-72 sm:hidden"
                />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </Card>
    </div>
  )
}
