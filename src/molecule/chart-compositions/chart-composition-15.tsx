"use client"

import { cx } from "@/lib/utils"

import { Button } from "@/atom/Button"
import { Card } from "@/atom/Card"
import { Divider } from "@/atom/Divider"
import { SparkAreaChart } from "@/atom/SparkChart"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from "@/atom/Table"

const data = [
  //array-start
  {
    date: "Oct 08, 2024",
    "Overall costs": 13500,
    "Active workspaces": 180,
    "Active users": 15800,
    Uptime: 96.8,
    "Response time": 5.45,
    MTTR: 425,
  },
  {
    date: "Oct 09, 2024",
    "Overall costs": 14920,
    "Active workspaces": 165,
    "Active users": 14900,
    Uptime: 97.9,
    "Response time": 5.32,
    MTTR: 385,
  },
  {
    date: "Oct 10, 2024",
    "Overall costs": 14250,
    "Active workspaces": 210,
    "Active users": 13200,
    Uptime: 97.2,
    "Response time": 5.58,
    MTTR: 410,
  },
  {
    date: "Oct 11, 2024",
    "Overall costs": 15800,
    "Active workspaces": 195,
    "Active users": 14500,
    Uptime: 98.7,
    "Response time": 4.88,
    MTTR: 298,
  },
  {
    date: "Oct 12, 2024",
    "Overall costs": 14580,
    "Active workspaces": 285,
    "Active users": 11800,
    Uptime: 99.3,
    "Response time": 4.91,
    MTTR: 315,
  },
  {
    date: "Oct 13, 2024",
    "Overall costs": 16200,
    "Active workspaces": 245,
    "Active users": 13600,
    Uptime: 97.5,
    "Response time": 5.8,
    MTTR: 445,
  },
  {
    date: "Oct 14, 2024",
    "Overall costs": 15750,
    "Active workspaces": 390,
    "Active users": 11500,
    Uptime: 98.2,
    "Response time": 5.36,
    MTTR: 378,
  },
  {
    date: "Oct 15, 2024",
    "Overall costs": 14290,
    "Active workspaces": 355,
    "Active users": 13900,
    Uptime: 99.4,
    "Response time": 4.79,
    MTTR: 290,
  },
  {
    date: "Oct 16, 2024",
    "Overall costs": 14550,
    "Active workspaces": 420,
    "Active users": 12100,
    Uptime: 99.5,
    "Response time": 4.87,
    MTTR: 305,
  },
  {
    date: "Oct 17, 2024",
    "Overall costs": 15980,
    "Active workspaces": 375,
    "Active users": 14200,
    Uptime: 98.1,
    "Response time": 5.43,
    MTTR: 420,
  },
  {
    date: "Oct 18, 2024",
    "Overall costs": 15220,
    "Active workspaces": 445,
    "Active users": 11700,
    Uptime: 98.8,
    "Response time": 5.22,
    MTTR: 358,
  },
  {
    date: "Oct 19, 2024",
    "Overall costs": 14780,
    "Active workspaces": 395,
    "Active users": 13500,
    Uptime: 99.1,
    "Response time": 5.24,
    MTTR: 330,
  },
  {
    date: "Oct 20, 2024",
    "Overall costs": 15450,
    "Active workspaces": 455,
    "Active users": 11900,
    Uptime: 99.3,
    "Response time": 5.21,
    MTTR: 340,
  },
  {
    date: "Oct 21, 2024",
    "Overall costs": 15210,
    "Active workspaces": 380,
    "Active users": 12500,
    Uptime: 99.4,
    "Response time": 5.15,
    MTTR: 325,
  },
  {
    date: "Oct 22, 2024",
    "Overall costs": 15091,
    "Active workspaces": 312,
    "Active users": 12100,
    Uptime: 99.6,
    "Response time": 5.1,
    MTTR: 313,
  },
  //array-end
]

const stats = [
  //array-start
  {
    name: "Overall costs",
    value: "$15,091",
    change: "+1.23%",
    changeType: "negative",
  },
  {
    name: "Active workspaces",
    value: "312",
    change: "+4.09%",
    changeType: "positive",
  },
  {
    name: "Active users",
    value: "12.1K",
    change: "-4.21%",
    changeType: "negative",
  },
  {
    name: "Uptime",
    value: "99.6%",
    change: "+1.21%",
    changeType: "positive",
  },
  {
    name: "Response time",
    value: "5.1ms",
    change: "+0.21%",
    changeType: "negative",
  },
  {
    name: "MTTR",
    value: "5min 13s",
    change: "+4.91%",
    changeType: "negative",
  },
  //array-end
]

const dataTable = [
  //array-start
  {
    "Time period": "Today",
    "Overall costs": "$15,091",
    "Active workspaces": "312",
    "Active users": "12.1K",
    Uptime: "99.6%",
    "Response time": "5.1ms",
    MTTR: "5min 11s",
  },
  {
    "Time period": "Last 7 days",
    "Overall costs": "$12,432",
    "Active workspaces": "419",
    "Active users": "8.7K",
    Uptime: "98.2%",
    "Response time": "4.5ms",
    MTTR: "4min 19s",
  },
  {
    "Time period": "Last 30 days",
    "Overall costs": "$10,321",
    "Active workspaces": "210",
    "Active users": "7.2K",
    Uptime: "94.1%",
    "Response time": "10.2ms",
    MTTR: "8min 43s",
  },
  {
    "Time period": "Last 365 days",
    "Overall costs": "$21,432",
    "Active workspaces": "380",
    "Active users": "7.9K",
    Uptime: "95.3%",
    "Response time": "9.1ms",
    MTTR: "7min 23s",
  },
  {
    "Time period": "All time",
    "Overall costs": "$9,213",
    "Active workspaces": "264",
    "Active users": "10.1K",
    Uptime: "98.2%",
    "Response time": "9.9ms",
    MTTR: "6min 41s",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-50">
        Cloud monitoring
      </h1>
      <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
        All your metrics in one overview.
      </p>
      <Card className="mt-6 overflow-hidden !p-0">
        <dl className="grid grid-cols-1 gap-px bg-gray-200 sm:grid-cols-2 lg:grid-cols-3 dark:bg-gray-900">
          {stats.map((stat) => (
            <div key={stat.name} className="group relative">
              <div className="absolute inset-0 z-10 hidden bg-white/40 opacity-0 backdrop-blur-xl transition-opacity duration-100 group-hover:opacity-100 sm:block dark:bg-gray-950/50" />
              <div className="relative z-0 flex w-full flex-wrap items-baseline justify-between gap-x-4 bg-white px-4 py-4 sm:px-6 sm:py-6 xl:px-8 dark:bg-gray-950">
                <dt className="text-sm/6 font-medium text-gray-500 dark:text-gray-500">
                  {stat.name}
                </dt>
                <dd
                  className={cx(
                    stat.changeType === "negative"
                      ? "text-red-600 dark:text-red-400"
                      : "text-emerald-600 dark:text-emerald-400",
                    "text-xs font-medium",
                  )}
                >
                  {stat.change}
                </dd>
                <dd className="mt-0.5 w-full flex-none text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-50">
                  {stat.value}
                </dd>
                <SparkAreaChart
                  data={data}
                  index="date"
                  categories={[stat.name]}
                  colors={["blue"]}
                  fill="solid"
                  className="mt-4 h-10 w-full"
                />
                <Divider className="!my-0 block pt-6 pb-4 sm:hidden" />
                <div className="flex w-full items-center justify-end gap-2 sm:hidden">
                  <a
                    href="#"
                    className="block text-sm font-medium text-gray-500 hover:text-gray-600 dark:text-gray-500 hover:dark:text-gray-400"
                  >
                    Edit alarm
                  </a>
                  <span
                    className="h-6 w-px bg-gray-200 dark:bg-gray-900"
                    aria-hidden="true"
                  />
                  <a
                    href="#"
                    className="block text-sm font-medium text-blue-500 hover:text-blue-600 dark:text-blue-500 hover:dark:text-blue-600"
                  >
                    View more
                  </a>
                </div>
              </div>
              {/* Hover state container */}
              <div className="absolute inset-0 z-50 m-auto hidden cursor-pointer sm:flex sm:items-center sm:justify-center sm:gap-2">
                <Button
                  variant="secondary"
                  className="opacity-0 transition-opacity duration-100 group-hover:opacity-100"
                  asChild
                >
                  <a href="#">Edit alarm</a>
                </Button>
                <Button
                  className="border-none opacity-0 transition-opacity duration-100 group-hover:opacity-100"
                  asChild
                >
                  <a href="#">View Details</a>
                </Button>
              </div>
            </div>
          ))}
        </dl>
      </Card>
      <TableRoot className="mt-8 !overflow-visible">
        <div className="overflow-hidden overflow-x-scroll rounded-lg ring-1 shadow-sm ring-gray-200 dark:ring-gray-800">
          <Table className="!border-transparent">
            <TableHead className="!bg-gray-50 dark:!bg-gray-900">
              <TableRow>
                <TableHeaderCell>Time period</TableHeaderCell>
                <TableHeaderCell className="text-right">
                  Overall costs
                </TableHeaderCell>
                <TableHeaderCell className="text-right">
                  Active workspaces
                </TableHeaderCell>
                <TableHeaderCell className="text-right">
                  Active users
                </TableHeaderCell>
                <TableHeaderCell className="text-right">Uptime</TableHeaderCell>
                <TableHeaderCell className="text-right">
                  Response time
                </TableHeaderCell>
                <TableHeaderCell className="text-right">MTTR</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataTable.map((item, idx) => (
                <TableRow key={idx}>
                  <TableCell>{item["Time period"]}</TableCell>
                  <TableCell className="text-right">
                    {item["Overall costs"]}
                  </TableCell>
                  <TableCell className="text-right">
                    {item["Active workspaces"]}
                  </TableCell>
                  <TableCell className="text-right">
                    {item["Active users"]}
                  </TableCell>
                  <TableCell className="text-right">{item.Uptime}</TableCell>
                  <TableCell className="text-right">
                    {item["Response time"]}
                  </TableCell>
                  <TableCell className="text-right">{item.MTTR}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </TableRoot>
    </div>
  )
}
