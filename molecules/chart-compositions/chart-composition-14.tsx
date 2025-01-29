"use client"

import { RiMoreLine } from "@remixicon/react"

import { AreaChart } from "../../atoms/AreaChart"
import { Button } from "../../atoms/Button"
import { Card } from "../../atoms/Card"
import { CategoryBar } from "../../atoms/CategoryBar"
import { Divider } from "../../atoms/Divider"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../atoms/DropdownMenu"

// used custom gray in installChartUtils.ts for <CategoryBar />

// lightGray: {
//   bg: 'bg-gray-300 dark:bg-gray-700',
//   stroke: 'stroke-gray-300 dark:stroke-gray-700',
//   fill: 'fill-gray-300 dark:fill-gray-700',
//   text: 'text-gray-300 dark:text-gray-700',
// },

const data = [
  //array-start
  {
    date: "01:29am",
    "Name lookup": 710,
    Connection: 605,
    "TLS handshake": 300,
    "Data transfer": 200,
  },
  {
    date: "01:42am",
    "Name lookup": 794,
    Connection: 601,
    "TLS handshake": 310,
    "Data transfer": 220,
  },
  {
    date: "02:22am",
    "Name lookup": 1088,
    Connection: 592,
    "TLS handshake": 290,
    "Data transfer": 210,
  },
  {
    date: "03:34am",
    "Name lookup": 1209,
    Connection: 543,
    "TLS handshake": 250,
    "Data transfer": 130,
  },
  {
    date: "03:51am",
    "Name lookup": 3571,
    Connection: 2090,
    "TLS handshake": 1512,
    "Data transfer": 1054,
  },
  {
    date: "04:01am",
    "Name lookup": 1090,
    Connection: 890,
    "TLS handshake": 300,
    "Data transfer": 180,
  },
  {
    date: "04:23am",
    "Name lookup": 129,
    Connection: 605,
    "TLS handshake": 320,
    "Data transfer": 210,
  },
  {
    date: "04:41am",
    "Name lookup": 100,
    Connection: 210,
    "TLS handshake": 180,
    "Data transfer": 90,
  },
  {
    date: "04:47am",
    "Name lookup": 102,
    Connection: 392,
    "TLS handshake": 150,
    "Data transfer": 110,
  },
  {
    date: "05:01am",
    "Name lookup": 102,
    Connection: 432,
    "TLS handshake": 160,
    "Data transfer": 100,
  },
  {
    date: "05:08am",
    "Name lookup": 103,
    Connection: 423,
    "TLS handshake": 150,
    "Data transfer": 105,
  },
  {
    date: "05:18am",
    "Name lookup": 104,
    Connection: 530,
    "TLS handshake": 180,
    "Data transfer": 140,
  },
  {
    date: "06:03am",
    "Name lookup": 354,
    Connection: 484,
    "TLS handshake": 270,
    "Data transfer": 150,
  },
  {
    date: "07:09am",
    "Name lookup": 463,
    Connection: 631,
    "TLS handshake": 310,
    "Data transfer": 220,
  },
  {
    date: "07:09am",
    "Name lookup": 412,
    Connection: 541,
    "TLS handshake": 290,
    "Data transfer": 200,
  },
  {
    date: "08:21am",
    "Name lookup": 693,
    Connection: 873,
    "TLS handshake": 400,
    "Data transfer": 300,
  },
  {
    date: "08:39am",
    "Name lookup": 192,
    Connection: 294,
    "TLS handshake": 160,
    "Data transfer": 90,
  },
  {
    date: "09:03am",
    "Name lookup": 293,
    Connection: 912,
    "TLS handshake": 340,
    "Data transfer": 250,
  },
  {
    date: "09:19am",
    "Name lookup": 105,
    Connection: 430,
    "TLS handshake": 170,
    "Data transfer": 120,
  },
  {
    date: "10:22am",
    "Name lookup": 110,
    Connection: 731,
    "TLS handshake": 280,
    "Data transfer": 190,
  },
  {
    date: "10:29am",
    "Name lookup": 670,
    Connection: 539,
    "TLS handshake": 290,
    "Data transfer": 210,
  },
  {
    date: "10:34am",
    "Name lookup": 690,
    Connection: 605,
    "TLS handshake": 300,
    "Data transfer": 220,
  },
  {
    date: "10:36am",
    "Name lookup": 793,
    Connection: 1023,
    "TLS handshake": 410,
    "Data transfer": 320,
  },
  {
    date: "11:46am",
    "Name lookup": 902,
    Connection: 605,
    "TLS handshake": 320,
    "Data transfer": 240,
  },
  {
    date: "11:49am",
    "Name lookup": 919,
    Connection: 392,
    "TLS handshake": 270,
    "Data transfer": 180,
  },
  {
    date: "11:50am",
    "Name lookup": 955,
    Connection: 539,
    "TLS handshake": 300,
    "Data transfer": 210,
  },
  {
    date: "11:55am",
    "Name lookup": 995,
    Connection: 293,
    "TLS handshake": 160,
    "Data transfer": 120,
  },
  {
    date: "12:05pm",
    "Name lookup": 872,
    Connection: 520,
    "TLS handshake": 290,
    "Data transfer": 230,
  },
  {
    date: "12:19pm",
    "Name lookup": 101,
    Connection: 418,
    "TLS handshake": 190,
    "Data transfer": 160,
  },
  {
    date: "12:21pm",
    "Name lookup": 657,
    Connection: 912,
    "TLS handshake": 340,
    "Data transfer": 270,
  },
  {
    date: "12:31pm",
    "Name lookup": 732,
    Connection: 640,
    "TLS handshake": 300,
    "Data transfer": 200,
  },
  {
    date: "12:41pm",
    "Name lookup": 895,
    Connection: 509,
    "TLS handshake": 280,
    "Data transfer": 210,
  },
  {
    date: "01:13pm",
    "Name lookup": 993,
    Connection: 701,
    "TLS handshake": 320,
    "Data transfer": 250,
  },
  {
    date: "01:34pm",
    "Name lookup": 1189,
    Connection: 760,
    "TLS handshake": 390,
    "Data transfer": 290,
  },
  {
    date: "01:56pm",
    "Name lookup": 1390,
    Connection: 831,
    "TLS handshake": 420,
    "Data transfer": 320,
  },
  {
    date: "02:12pm",
    "Name lookup": 1375,
    Connection: 713,
    "TLS handshake": 410,
    "Data transfer": 310,
  },
  {
    date: "02:33pm",
    "Name lookup": 960,
    Connection: 481,
    "TLS handshake": 270,
    "Data transfer": 230,
  },
  {
    date: "02:56pm",
    "Name lookup": 1120,
    Connection: 510,
    "TLS handshake": 290,
    "Data transfer": 240,
  },
  {
    date: "03:14pm",
    "Name lookup": 1210,
    Connection: 654,
    "TLS handshake": 350,
    "Data transfer": 260,
  },
  {
    date: "03:31pm",
    "Name lookup": 1185,
    Connection: 700,
    "TLS handshake": 360,
    "Data transfer": 280,
  },
  {
    date: "03:55pm",
    "Name lookup": 1290,
    Connection: 820,
    "TLS handshake": 400,
    "Data transfer": 300,
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
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Card className="mt-6 overflow-hidden !p-0">
          <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-900 dark:bg-gray-900">
            <h1 className="text-sm font-medium text-gray-900 dark:text-gray-50">
              Uptime summary
            </h1>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary" className="!p-1">
                  <RiMoreLine
                    className="size-5 shrink-0 text-gray-900 dark:text-gray-50"
                    aria-hidden="true"
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="!w-36">
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Refresh</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600 dark:text-red-500">
                  Delete widget
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="p-4">
            <p className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
              90.1%
            </p>
            <p className="text-sm/6 text-gray-500 dark:text-gray-500">
              Avg. uptime in the last month
            </p>
            <CategoryBar
              values={[90.1, 8.2, 1.9]}
              colors={["blue", "red", "lightGray"]}
              showLabels={false}
              className="mt-6"
            />
            <ul role="list" className="mt-6 space-y-3">
              <li className="flex w-full items-center justify-between gap-2">
                <div className="flex w-full items-center gap-2 truncate">
                  <span
                    className="size-2.5 shrink-0 rounded-sm bg-blue-500 dark:bg-blue-500"
                    aria-hidden="true"
                  />
                  <span className="truncate whitespace-nowrap text-sm text-gray-500 dark:text-gray-500">
                    Days with 99% uptime
                  </span>
                </div>
                <span className="whitespace-nowrap text-sm font-semibold text-gray-900 dark:text-gray-50">
                  90.1% (225)
                </span>
              </li>
              <li className="flex w-full items-center justify-between gap-2">
                <div className="flex w-full items-center gap-2 truncate">
                  <span
                    className="size-2.5 shrink-0 rounded-sm bg-red-500 dark:bg-red-500"
                    aria-hidden="true"
                  />
                  <span className="truncate whitespace-nowrap text-sm text-gray-500 dark:text-gray-500">
                    Days with 1% downtime
                  </span>
                </div>
                <span className="whitespace-nowrap text-sm font-semibold text-gray-900 dark:text-gray-50">
                  8% (20)
                </span>
              </li>
              <li className="flex w-full items-center justify-between gap-2">
                <div className="flex w-full items-center gap-2 truncate">
                  <span
                    className="size-2.5 shrink-0 rounded-sm bg-gray-400 dark:bg-gray-600"
                    aria-hidden="true"
                  />
                  <span className="truncate whitespace-nowrap text-sm text-gray-500 dark:text-gray-500">
                    Days with 1% downtime
                  </span>
                </div>
                <span className="whitespace-nowrap text-sm font-semibold text-gray-900 dark:text-gray-50">
                  1.9% (5)
                </span>
              </li>
            </ul>
          </div>
        </Card>
        <Card className="mt-6 overflow-hidden !p-0">
          <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-900 dark:bg-gray-900">
            <h1 className="text-sm font-medium text-gray-900 dark:text-gray-50">
              Incident summary
            </h1>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary" className="!p-1">
                  <RiMoreLine
                    className="size-5 shrink-0 text-gray-900 dark:text-gray-50"
                    aria-hidden="true"
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="!w-36">
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Refresh</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600 dark:text-red-500">
                  Delete widget
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="p-4">
            <p className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
              10min 13s
            </p>
            <p className="text-sm/6 text-gray-500 dark:text-gray-500">
              Avg. time to resolve incident (MTTR)
            </p>
            <div className="mt-6">
              <CategoryBar
                values={[95.9, 4.1]}
                colors={["blue", "lightGray"]}
                showLabels={false}
              />
              <p className="mt-6 text-sm font-semibold text-gray-900 dark:text-gray-50">
                Current month
              </p>
              <ul role="list" className="mt-2 space-y-3">
                <li className="flex w-full items-center justify-between gap-2">
                  <div className="flex w-full items-center gap-2 truncate">
                    <span
                      className="size-2.5 shrink-0 rounded-sm bg-blue-500 dark:bg-blue-500"
                      aria-hidden="true"
                    />
                    <span className="truncate whitespace-nowrap text-sm text-gray-500 dark:text-gray-500">
                      % of incidents solved
                    </span>
                  </div>
                  <span className="whitespace-nowrap text-sm font-semibold text-gray-900 dark:text-gray-50">
                    95.9% (100)
                  </span>
                </li>
                <li className="flex w-full items-center justify-between gap-2">
                  <div className="flex w-full items-center gap-2 truncate">
                    <span
                      className="size-2.5 shrink-0 rounded-sm bg-gray-400 dark:bg-gray-600"
                      aria-hidden="true"
                    />
                    <span className="truncate whitespace-nowrap text-sm text-gray-500 dark:text-gray-500">
                      % of incidents unsolved
                    </span>
                  </div>
                  <span className="whitespace-nowrap text-sm font-semibold text-gray-900 dark:text-gray-50">
                    4.1% (4)
                  </span>
                </li>
              </ul>
            </div>
            <Divider />
            <div className="mt-6">
              <CategoryBar
                values={[91.2, 8.8]}
                colors={["blue", "lightGray"]}
                showLabels={false}
              />
              <p className="mt-6 text-sm font-semibold text-gray-900 dark:text-gray-50">
                Previous month
              </p>
              <ul role="list" className="mt-2 space-y-3">
                <li className="flex w-full items-center justify-between gap-2">
                  <div className="flex w-full items-center gap-2 truncate">
                    <span
                      className="size-2.5 shrink-0 rounded-sm bg-blue-500 dark:bg-blue-500"
                      aria-hidden="true"
                    />
                    <span className="truncate whitespace-nowrap text-sm text-gray-500 dark:text-gray-500">
                      % of incidents solved
                    </span>
                  </div>
                  <span className="whitespace-nowrap text-sm font-semibold text-gray-900 dark:text-gray-50">
                    91.2% (95)
                  </span>
                </li>
                <li className="flex w-full items-center justify-between gap-2">
                  <div className="flex w-full items-center gap-2 truncate">
                    <span
                      className="size-2.5 shrink-0 rounded-sm bg-gray-400 dark:bg-gray-600"
                      aria-hidden="true"
                    />
                    <span className="truncate whitespace-nowrap text-sm text-gray-500 dark:text-gray-500">
                      % of incidents unsolved
                    </span>
                  </div>
                  <span className="whitespace-nowrap text-sm font-semibold text-gray-900 dark:text-gray-50">
                    8.8% (10)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
      <Card className="mt-6 overflow-hidden !p-0">
        <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-900 dark:bg-gray-900">
          <h1 className="text-sm font-medium text-gray-900 dark:text-gray-50">
            Log monitoring
          </h1>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" className="!p-1">
                <RiMoreLine
                  className="size-5 shrink-0 text-gray-900 dark:text-gray-50"
                  aria-hidden="true"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="!w-36">
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Refresh</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600 dark:text-red-500">
                Delete widget
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="p-4">
          <AreaChart
            data={data}
            index="date"
            categories={["Name lookup", "Connection"]}
            colors={["blue", "red"]}
            fill="solid"
            valueFormatter={valueFormatter}
            onValueChange={() => {}}
            maxValue={5000}
            yAxisWidth={65}
            tickGap={15}
            className="hidden sm:block"
          />
          <AreaChart
            data={data}
            index="date"
            categories={["Name lookup", "Connection"]}
            colors={["blue", "red"]}
            fill="solid"
            valueFormatter={valueFormatter}
            onValueChange={() => {}}
            showYAxis={false}
            startEndOnly={true}
            tickGap={15}
            className="sm:hidden"
          />
        </div>
      </Card>
    </div>
  )
}
