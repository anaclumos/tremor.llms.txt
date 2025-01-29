"use client"

import { Card } from "../../atoms/Card"
import { LineChart } from "../../atoms/LineChart"

//array-start
const volume = [
  {
    time: "0:00 AM",
    Today: 280,
    Yesterday: 220,
  },
  {
    time: "1:00 AM",
    Today: 210,
    Yesterday: 180,
  },
  {
    time: "2:00 AM",
    Today: 190,
    Yesterday: 150,
  },
  {
    time: "3:00 AM",
    Today: 170,
    Yesterday: 130,
  },
  {
    time: "4:00 AM",
    Today: 220,
    Yesterday: 160,
  },
  {
    time: "5:00 AM",
    Today: 290,
    Yesterday: 200,
  },
  {
    time: "6:00 AM",
    Today: 350,
    Yesterday: 250,
  },
  {
    time: "7:00 AM",
    Today: 420,
    Yesterday: 310,
  },
  {
    time: "8:00 AM",
    Today: 480,
    Yesterday: 340,
  },
  {
    time: "9:00 AM",
    Today: 510,
    Yesterday: 380,
  },
  {
    time: "10:00 AM",
    Today: 490,
    Yesterday: 360,
  },
  {
    time: "11:59 AM",
    Today: 450,
    Yesterday: 330,
  },
]

const queries = [
  {
    time: "0:00 AM",
    Current: 2800,
    Previous: 2200,
  },
  {
    time: "1:00 AM",
    Current: 2100,
    Previous: 1800,
  },
  {
    time: "2:00 AM",
    Current: 1900,
    Previous: 1500,
  },
  {
    time: "3:00 AM",
    Current: 1700,
    Previous: 1300,
  },
  {
    time: "4:00 AM",
    Current: 2200,
    Previous: 1600,
  },
  {
    time: "5:00 AM",
    Current: 2900,
    Previous: 2000,
  },
  {
    time: "6:00 AM",
    Current: 3500,
    Previous: 2500,
  },
  {
    time: "7:00 AM",
    Current: 4200,
    Previous: 3100,
  },
  {
    time: "8:00 AM",
    Current: 4800,
    Previous: 3400,
  },
  {
    time: "9:00 AM",
    Current: 5100,
    Previous: 1800,
  },
  {
    time: "10:00 AM",
    Current: 4900,
    Previous: 1600,
  },
  {
    time: "11:59 AM",
    Current: 4500,
    Previous: 3300,
  },
]

const analyticsData = [
  {
    time: "0:00 AM",
    ProcessingTime: 1200,
    DataVolume: 1000,
  },
  {
    time: "1:00 AM",
    ProcessingTime: 900,
    DataVolume: 600,
  },
  {
    time: "2:00 AM",
    ProcessingTime: 800,
    DataVolume: 500,
  },
  {
    time: "3:00 AM",
    ProcessingTime: 1200,
    DataVolume: 900,
  },
  {
    time: "4:00 AM",
    ProcessingTime: 2100,
    DataVolume: 1700,
  },
  {
    time: "5:00 AM",
    ProcessingTime: 1500,
    DataVolume: 1000,
  },
  {
    time: "6:00 AM",
    ProcessingTime: 2200,
    DataVolume: 1500,
  },
  {
    time: "7:00 AM",
    ProcessingTime: 3100,
    DataVolume: 2000,
  },
  {
    time: "8:00 AM",
    ProcessingTime: 3800,
    DataVolume: 2500,
  },
  {
    time: "9:00 AM",
    ProcessingTime: 4200,
    DataVolume: 3000,
  },
  {
    time: "10:00 AM",
    ProcessingTime: 3900,
    DataVolume: 2800,
  },
  {
    time: "11:59 AM",
    ProcessingTime: 3500,
    DataVolume: 2400,
  },
]

//array-end

export default function Example() {
  return (
    <div className="obfuscate">
      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <dt className="text-sm font-medium text-gray-900 dark:text-gray-50">
            Call Volume Trends
          </dt>
          <div className="mt-4 flex items-center gap-x-8 gap-y-4">
            <dd className="space-y-3 whitespace-nowrap">
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className="size-2.5 shrink-0 rounded-sm bg-blue-500 dark:bg-blue-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-900 dark:text-gray-50">
                    Today
                  </span>
                </div>
                <span className="mt-1 block text-2xl font-semibold text-gray-900 dark:text-gray-50">
                  573
                </span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className="size-2.5 shrink-0 rounded-sm bg-gray-400 dark:bg-gray-600"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-900 dark:text-gray-50">
                    Yesterday
                  </span>
                </div>
                <span className="mt-1 block text-2xl font-semibold text-gray-900 dark:text-gray-50">
                  451
                </span>
              </div>
            </dd>
            <LineChart
              className="h-28"
              data={volume}
              index="time"
              categories={["Today", "Yesterday"]}
              colors={["blue", "gray"]}
              showTooltip={false}
              valueFormatter={(number: number) =>
                Intl.NumberFormat("us").format(number).toString()
              }
              startEndOnly={true}
              showYAxis={false}
              showLegend={false}
            />
          </div>
        </Card>
        <Card>
          <dt className="text-sm font-medium text-gray-900 dark:text-gray-50">
            Query Volume Trends
          </dt>
          <div className="mt-4 flex items-center gap-x-8 gap-y-4">
            <dd className="space-y-3 whitespace-nowrap">
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className="size-2.5 shrink-0 rounded-sm bg-blue-500 dark:bg-blue-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-900 dark:text-gray-50">
                    Today
                  </span>
                </div>
                <span className="mt-1 block text-2xl font-semibold text-gray-900 dark:text-gray-50">
                  5,730
                </span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className="size-2.5 shrink-0 rounded-sm bg-gray-400 dark:bg-gray-600"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-900 dark:text-gray-50">
                    Yesterday
                  </span>
                </div>
                <span className="mt-1 block text-2xl font-semibold text-gray-900 dark:text-gray-50">
                  4,510
                </span>
              </div>
            </dd>
            <LineChart
              className="h-28"
              data={queries}
              index="time"
              categories={["Current", "Previous"]}
              colors={["blue", "gray"]}
              showTooltip={false}
              valueFormatter={(number: number) =>
                Intl.NumberFormat("us").format(number).toString()
              }
              startEndOnly={true}
              showYAxis={false}
              showLegend={false}
            />
          </div>
        </Card>
        <Card>
          <dt className="text-sm font-medium text-gray-900 dark:text-gray-50">
            ETL Pipeline Performance
          </dt>
          <div className="mt-4 flex items-center gap-x-8 gap-y-4">
            <dd className="space-y-3 whitespace-nowrap">
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className="size-2.5 shrink-0 rounded-sm bg-purple-500 dark:bg-purple-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-900 dark:text-gray-50">
                    Processing (ms)
                  </span>
                </div>
                <span className="mt-1 block text-2xl font-semibold text-gray-900 dark:text-gray-50">
                  4,200
                </span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className="size-2.5 shrink-0 rounded-sm bg-indigo-400 dark:bg-indigo-600"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-900 dark:text-gray-50">
                    Volume (MB)
                  </span>
                </div>
                <span className="mt-1 block text-2xl font-semibold text-gray-900 dark:text-gray-50">
                  3,000
                </span>
              </div>
            </dd>
            <LineChart
              className="h-28"
              data={analyticsData}
              index="time"
              categories={["ProcessingTime", "DataVolume"]}
              colors={["purple", "indigo"]}
              showTooltip={false}
              valueFormatter={(number: number) =>
                Intl.NumberFormat("us").format(number).toString()
              }
              startEndOnly={true}
              showYAxis={false}
              showLegend={false}
            />
          </div>
        </Card>
      </dl>
    </div>
  )
}
