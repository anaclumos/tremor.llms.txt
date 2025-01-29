"use client"

import React from "react"

import { Badge } from "../../atom/Badge"
import { BarChart } from "../../atom/BarChart"
import { Divider } from "../../atom/Divider"

const data = [
  //array-start
  {
    date: "Aug 01",
    "GPU cluster": 7100,
    "Workspace usage": 4434,
  },
  {
    date: "Aug 02",
    "GPU cluster": 10943,
    "Workspace usage": 6954,
  },
  {
    date: "Aug 03",
    "GPU cluster": 10889,
    "Workspace usage": 7100,
  },
  {
    date: "Aug 04",
    "GPU cluster": 10909,
    "Workspace usage": 7909,
  },
  {
    date: "Aug 05",
    "GPU cluster": 10778,
    "Workspace usage": 7103,
  },
  {
    date: "Aug 06",
    "GPU cluster": 10900,
    "Workspace usage": 7534,
  },
  {
    date: "Aug 07",
    "GPU cluster": 10129,
    "Workspace usage": 7412,
  },
  {
    date: "Aug 08",
    "GPU cluster": 10021,
    "Workspace usage": 7834,
  },
  {
    date: "Aug 09",
    "GPU cluster": 10279,
    "Workspace usage": 7159,
  },
  {
    date: "Aug 10",
    "GPU cluster": 10224,
    "Workspace usage": 8260,
  },
  {
    date: "Aug 11",
    "GPU cluster": 10380,
    "Workspace usage": 4965,
  },
  {
    date: "Aug 12",
    "GPU cluster": 10414,
    "Workspace usage": 4989,
  },
  {
    date: "Aug 13",
    "GPU cluster": 6540,
    "Workspace usage": 4839,
  },
  {
    date: "Aug 14",
    "GPU cluster": 6634,
    "Workspace usage": 4343,
  },
  {
    date: "Aug 15",
    "GPU cluster": 7124,
    "Workspace usage": 4903,
  },
  {
    date: "Aug 16",
    "GPU cluster": 7934,
    "Workspace usage": 5273,
  },
  {
    date: "Aug 17",
    "GPU cluster": 10287,
    "Workspace usage": 6900,
  },
  {
    date: "Aug 18",
    "GPU cluster": 10323,
    "Workspace usage": 6732,
  },
  {
    date: "Aug 19",
    "GPU cluster": 10511,
    "Workspace usage": 6523,
  },
  {
    date: "Aug 20",
    "GPU cluster": 11043,
    "Workspace usage": 7422,
  },
  {
    date: "Aug 21",
    "GPU cluster": 6700,
    "Workspace usage": 4334,
  },
  {
    date: "Aug 22",
    "GPU cluster": 6900,
    "Workspace usage": 4943,
  },
  {
    date: "Aug 23",
    "GPU cluster": 7934,
    "Workspace usage": 7812,
  },
  {
    date: "Aug 24",
    "GPU cluster": 9021,
    "Workspace usage": 7729,
  },
  {
    date: "Aug 25",
    "GPU cluster": 9198,
    "Workspace usage": 7178,
  },
  {
    date: "Aug 26",
    "GPU cluster": 9557,
    "Workspace usage": 7158,
  },
  {
    date: "Aug 27",
    "GPU cluster": 9959,
    "Workspace usage": 7100,
  },
  {
    date: "Aug 28",
    "GPU cluster": 10034,
    "Workspace usage": 7934,
  },
  {
    date: "Aug 29",
    "GPU cluster": 10243,
    "Workspace usage": 7223,
  },
  {
    date: "Aug 30",
    "GPU cluster": 10078,
    "Workspace usage": 8779,
  },
  {
    date: "Aug 31",
    "GPU cluster": 11134,
    "Workspace usage": 8190,
  },
  {
    date: "Sep 01",
    "GPU cluster": 12347,
    "Workspace usage": 4839,
  },
  {
    date: "Sep 02",
    "GPU cluster": 12593,
    "Workspace usage": 5153,
  },
  {
    date: "Sep 03",
    "GPU cluster": 12043,
    "Workspace usage": 5234,
  },
  {
    date: "Sep 04",
    "GPU cluster": 12144,
    "Workspace usage": 5478,
  },
  {
    date: "Sep 05",
    "GPU cluster": 12489,
    "Workspace usage": 5741,
  },
  {
    date: "Sep 06",
    "GPU cluster": 12748,
    "Workspace usage": 6743,
  },
  {
    date: "Sep 07",
    "GPU cluster": 12933,
    "Workspace usage": 7832,
  },
  {
    date: "Sep 08",
    "GPU cluster": 13028,
    "Workspace usage": 8943,
  },
  {
    date: "Sep 09",
    "GPU cluster": 13412,
    "Workspace usage": 9932,
  },
  {
    date: "Sep 10",
    "GPU cluster": 13649,
    "Workspace usage": 10139,
  },
  {
    date: "Sep 11",
    "GPU cluster": 13748,
    "Workspace usage": 10441,
  },
  {
    date: "Sep 12",
    "GPU cluster": 13148,
    "Workspace usage": 10933,
  },
  {
    date: "Sep 13",
    "GPU cluster": 12839,
    "Workspace usage": 10073,
  },
  {
    date: "Sep 14",
    "GPU cluster": 12428,
    "Workspace usage": 10128,
  },
  {
    date: "Sep 15",
    "GPU cluster": 12012,
    "Workspace usage": 10412,
  },
  {
    date: "Sep 16",
    "GPU cluster": 11801,
    "Workspace usage": 9501,
  },
  {
    date: "Sep 17",
    "GPU cluster": 10102,
    "Workspace usage": 7923,
  },
  {
    date: "Sep 18",
    "GPU cluster": 12132,
    "Workspace usage": 10212,
  },
  {
    date: "Sep 19",
    "GPU cluster": 12901,
    "Workspace usage": 10101,
  },
  {
    date: "Sep 20",
    "GPU cluster": 13132,
    "Workspace usage": 10132,
  },
  {
    date: "Sep 21",
    "GPU cluster": 14132,
    "Workspace usage": 10212,
  },
  {
    date: "Sep 22",
    "GPU cluster": 14245,
    "Workspace usage": 12163,
  },
  {
    date: "Sep 23",
    "GPU cluster": 14328,
    "Workspace usage": 10036,
  },
  {
    date: "Sep 24",
    "GPU cluster": 14949,
    "Workspace usage": 8985,
  },
  {
    date: "Sep 25",
    "GPU cluster": 15967,
    "Workspace usage": 9700,
  },
  {
    date: "Sep 26",
    "GPU cluster": 17349,
    "Workspace usage": 10943,
  },
  //array-end
]

const summary = [
  {
    name: "Actual",
    value: "$8,110.15",
  },
  {
    name: "Forecasted",
    value: "$10,230.25",
  },
  {
    name: "Last invoice",
    value: "Sept 20, 2024",
  },
]

const valueFormatter = (number: number) =>
  `$${Intl.NumberFormat("us").format(number).toString()}`

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="flex flex-col gap-x-6 gap-y-5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <div>
          <h3 className="text-base font-semibold text-gray-900 dark:text-gray-50">
            Enterprise
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
            User ID:{` `}
            <span className="font-medium text-gray-900 dark:text-gray-50">
              admin_dfQ7s
            </span>
          </p>
        </div>
        <div className="mt-4 flex items-center gap-4 gap-y-2 sm:mt-0 sm:gap-x-8">
          {summary.map((item, index) => (
            <React.Fragment key={item.name}>
              <div>
                <p className="whitespace-nowrap text-sm text-gray-500 dark:text-gray-500">
                  {item.name}
                </p>
                {item.name === "Last invoice" ? (
                  <a
                    className="mt-1 inline-flex items-center gap-1 whitespace-nowrap text-sm font-semibold text-blue-500 hover:underline hover:underline-offset-4 dark:text-blue-500"
                    href="#"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-gray-50">
                    {item.value}
                  </p>
                )}
              </div>
              <span className="flex">
                {index < summary.length - 1 && (
                  <span
                    className="h-10 w-px bg-slate-500/20"
                    aria-hidden="true"
                  />
                )}
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
      <Divider className="my-5" />
      <div className="flex items-center gap-3">
        <Badge variant="success" className="!rounded-full">
          Active
        </Badge>
        <span
          className="h-6 w-px bg-gray-200 dark:bg-gray-800"
          aria-hidden="true"
        />
        <span className="text-sm text-gray-500 dark:text-gray-500">
          Sept 24 period
        </span>
        <span
          className="hidden h-6 w-px bg-gray-200 sm:block dark:bg-gray-800"
          aria-hidden="true"
        />
        <span className="hidden text-sm text-gray-500 sm:block dark:text-gray-500">
          Started Sep 1, 2024 (billed on the 28th)
        </span>
      </div>
      <BarChart
        data={data}
        index="date"
        categories={["GPU cluster", "Workspace usage"]}
        type="stacked"
        valueFormatter={valueFormatter}
        showLegend={false}
        showYAxis={false}
        className="mt-10 hidden sm:block"
      />
      <BarChart
        data={data}
        index="date"
        categories={["GPU cluster", "Workspace usage"]}
        type="stacked"
        valueFormatter={valueFormatter}
        showLegend={false}
        showYAxis={false}
        className="mt-10 sm:hidden"
      />
    </div>
  )
}
