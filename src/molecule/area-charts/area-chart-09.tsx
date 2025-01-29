"use client"

import { RiArrowDownSFill, RiArrowUpSFill } from "@remixicon/react"

import { AreaChart } from "@/atom/AreaChart"
import { Card } from "@/atom/Card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/atom/Tabs"

const data = [
  //array-start
  {
    date: "Jan 23",
    Revenue: 42340,
  },
  {
    date: "Feb 23",
    Revenue: 50120,
  },
  {
    date: "Mar 23",
    Revenue: 45190,
  },
  {
    date: "Apr 23",
    Revenue: 56420,
  },
  {
    date: "May 23",
    Revenue: 40420,
  },
  {
    date: "Jun 23",
    Revenue: 47010,
  },
  {
    date: "Jul 23",
    Revenue: 47490,
  },
  {
    date: "Aug 23",
    Revenue: 39610,
  },
  {
    date: "Sep 23",
    Revenue: 45860,
  },
  {
    date: "Oct 23",
    Revenue: 50910,
  },
  {
    date: "Nov 23",
    Revenue: 49190,
  },
  {
    date: "Dec 23",
    Revenue: 55190,
  },
  //array-end
]

const summaryChannel = [
  //array-start
  {
    location: "Direct Online-Shops",
    icon: RiArrowUpSFill,
    rank: "Prev. rank: #2",
    color: "bg-blue-500 dark:bg-blue-500",
    type: "Flagship",
    total: "$460.2K",
    share: "37.1%",
    changeType: "positive",
  },
  {
    location: "Wholesale",
    icon: RiArrowDownSFill,
    rank: "Prev. rank: #1",
    color: "bg-cyan-500 dark:bg-cyan-500",
    type: "In-Store",
    total: "$237.3K",
    share: "31.2%",
    changeType: "negative",
  },
  {
    location: "Offline Stores",
    icon: RiArrowUpSFill,
    rank: "Prev. rank: #4",
    color: "bg-sky-500 dark:bg-sky-500",
    type: "In-Store",
    total: "$118.2K",
    share: "12.7%",
    changeType: "positive",
  },
  //array-end
]

const summaryProduct = [
  //array-start
  {
    location: 'OLED Monitor 29"',
    icon: RiArrowUpSFill,
    rank: "Prev. rank: #8",
    color: "bg-blue-500 dark:bg-blue-500",
    type: "Flagship",
    total: "$360.1K",
    share: "9.2%",
    changeType: "positive",
  },
  {
    location: "SuperJet Printer Eco",
    icon: RiArrowDownSFill,
    rank: "Prev. rank: #12",
    color: "bg-cyan-500 dark:bg-cyan-500",
    type: "In-Store",
    total: "$237.3K",
    share: "7.1%",
    changeType: "positive",
  },
  {
    location: "Gaming Laptop EdgeCell",
    icon: RiArrowUpSFill,
    rank: "Prev. rank: #2",
    color: "bg-sky-500 dark:bg-sky-500",
    type: "In-Store",
    total: "$118.2K",
    share: "2.7%",
    changeType: "negative",
  },
  //array-end
]

const tabs = [
  {
    name: "By Channel",
    data: summaryChannel,
  },
  {
    name: "By Product",
    data: summaryProduct,
  },
]

const currencyFormatter = (number: number) =>
  `$${Intl.NumberFormat("us").format(number).toString()}`

export default function Example() {
  return (
    <div className="obfuscate">
      <Card className="sm:mx-auto sm:max-w-xl">
        <h1 className="text-sm text-gray-500 dark:text-gray-500">Revenue</h1>
        <p className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
          $1,112,400
        </p>
        <AreaChart
          data={data}
          index="date"
          categories={["Revenue"]}
          showLegend={false}
          showYAxis={false}
          valueFormatter={currencyFormatter}
          fill="solid"
          className="mt-8 hidden !h-48 sm:block"
        />
        <AreaChart
          data={data}
          index="date"
          categories={["Revenue"]}
          showLegend={false}
          startEndOnly={true}
          showYAxis={false}
          valueFormatter={currencyFormatter}
          fill="solid"
          className="mt-8 !h-48 sm:hidden"
        />

        <Tabs defaultValue={tabs[0].name} className="mt-6">
          <TabsList>
            {tabs.map((tab) => (
              <TabsTrigger key={tab.name} value={tab.name}>
                {tab.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabs.map((tab) => (
            <TabsContent key={tab.name} value={tab.name}>
              <ul
                role="list"
                className="mt-2 divide-y divide-gray-200 dark:divide-gray-800"
              >
                {tab.data.map((item) => (
                  <li
                    key={item.location}
                    className="flex items-center justify-between py-2"
                  >
                    <div>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {item.location}
                      </p>
                      <div className="flex items-center space-x-1">
                        {item.changeType === "positive" ? (
                          <RiArrowUpSFill
                            className="size-5 text-emerald-700 dark:text-emerald-500"
                            aria-hidden="true"
                          />
                        ) : (
                          <RiArrowDownSFill
                            className="size-5 text-red-700 dark:text-red-500"
                            aria-hidden="true"
                          />
                        )}
                        <span className="text-xs/6 text-gray-500 dark:text-gray-500">
                          {item.rank}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {item.share}
                      </p>
                      <span className="text-xs/6 text-gray-500 dark:text-gray-500">
                        {item.total}
                      </span>
                    </div>
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
