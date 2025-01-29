"use client"

import { RiDownload2Line } from "@remixicon/react"

import { Button } from "@/atom/Button"
import { Card } from "@/atom/Card"
import { Divider } from "@/atom/Divider"
import { LineChart } from "@/atom/LineChart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/atom/Select"

const data = [
  //array-start
  {
    date: "Jan 22",
    MRR: 2100,
    "Active subscribers": 434,
    "Net volume": 7943,
    "Churned revenue": 0,
  },
  {
    date: "Feb 22",
    MRR: 2943,
    "Active subscribers": 454,
    "Net volume": 8954,
    "Churned revenue": 0,
  },
  {
    date: "Mar 22",
    MRR: 4889,
    "Active subscribers": 610,
    "Net volume": 9123,
    "Churned revenue": 0,
  },
  {
    date: "Apr 22",
    MRR: 3909,
    "Active subscribers": 490,
    "Net volume": 7478,
    "Churned revenue": 0,
  },
  {
    date: "May 22",
    MRR: 5778,
    "Active subscribers": 710,
    "Net volume": 9504,
    "Churned revenue": 0,
  },
  {
    date: "Jun 22",
    MRR: 5900,
    "Active subscribers": 753,
    "Net volume": 9943,
    "Churned revenue": 0,
  },
  {
    date: "Jul 22",
    MRR: 4129,
    "Active subscribers": 741,
    "Net volume": 10112,
    "Churned revenue": 0,
  },
  {
    date: "Aug 22",
    MRR: 6021,
    "Active subscribers": 783,
    "Net volume": 10290,
    "Churned revenue": 0,
  },
  {
    date: "Sep 22",
    MRR: 6279,
    "Active subscribers": 815,
    "Net volume": 10349,
    "Churned revenue": 0,
  },
  {
    date: "Oct 22",
    MRR: 6224,
    "Active subscribers": 826,
    "Net volume": 10415,
    "Churned revenue": 0,
  },
  {
    date: "Nov 22",
    MRR: 6380,
    "Active subscribers": 896,
    "Net volume": 10636,
    "Churned revenue": 0,
  },
  {
    date: "Dec 22",
    MRR: 6414,
    "Active subscribers": 798,
    "Net volume": 10900,
    "Churned revenue": 0,
  },
  {
    date: "Jan 23",
    MRR: 6540,
    "Active subscribers": 783,
    "Net volume": 11040,
    "Churned revenue": 120,
  },
  {
    date: "Feb 23",
    MRR: 6634,
    "Active subscribers": 734,
    "Net volume": 11390,
    "Churned revenue": 240,
  },
  {
    date: "Mar 23",
    MRR: 7124,
    "Active subscribers": 690,
    "Net volume": 11423,
    "Churned revenue": 120,
  },
  {
    date: "Apr 23",
    MRR: 7934,
    "Active subscribers": 627,
    "Net volume": 12134,
    "Churned revenue": 0,
  },
  {
    date: "May 23",
    MRR: 7287,
    "Active subscribers": 590,
    "Net volume": 12034,
    "Churned revenue": 0,
  },
  {
    date: "Jun 23",
    MRR: 7323,
    "Active subscribers": 573,
    "Net volume": 11011,
    "Churned revenue": 0,
  },
  {
    date: "Jul 23",
    MRR: 7511,
    "Active subscribers": 552,
    "Net volume": 11834,
    "Churned revenue": 2312,
  },
  {
    date: "Aug 23",
    MRR: 7043.9,
    "Active subscribers": 542,
    "Net volume": 12387,
    "Churned revenue": 2421,
  },
  {
    date: "Sep 23",
    MRR: 6700.7,
    "Active subscribers": 533,
    "Net volume": 11032,
    "Churned revenue": 2910,
  },
  {
    date: "Oct 23",
    MRR: 6900.8,
    "Active subscribers": 494,
    "Net volume": 10134,
    "Churned revenue": 1290,
  },
  {
    date: "Nov 23",
    MRR: 7934.5,
    "Active subscribers": 481,
    "Net volume": 9921,
    "Churned revenue": 990,
  },
  {
    date: "Dec 23",
    MRR: 9021.0,
    "Active subscribers": 272,
    "Net volume": 10549,
    "Churned revenue": 780,
  },
  //array-end
]

const numberFormatter = (number: number) =>
  `$${Intl.NumberFormat("us").format(number).toString()}`

const currencyFormatter = (number: number) =>
  "$" + Intl.NumberFormat("us").format(number).toString()

const summary = [
  //array-start
  {
    name: "MRR",
    value: "$9.1K",
    valueFormatter: currencyFormatter,
  },
  {
    name: "Active subscribers",
    value: "272",
    valueFormatter: numberFormatter,
  },
  {
    name: "Net volume",
    value: "$10.5K",
    valueFormatter: currencyFormatter,
  },
  {
    name: "Churned revenue",
    value: "$0.8K",
    valueFormatter: currencyFormatter,
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <h3 className="font-medium text-gray-900 dark:text-gray-50">Growth</h3>
      <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor.
      </p>
      <Divider className="!my-6" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center space-x-2">
          <Select>
            <SelectTrigger className="sm:w-36">
              <SelectValue placeholder="Select region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">All</SelectItem>
              <SelectItem value="2">US</SelectItem>
              <SelectItem value="3">Europe</SelectItem>
              <SelectItem value="4">Asia</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="sm:w-44">
              <SelectValue placeholder="Select license" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">All</SelectItem>
              <SelectItem value="2">Single license</SelectItem>
              <SelectItem value="3">Team license</SelectItem>
              <SelectItem value="4">Enterprise license</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className="mt-2 w-full py-2 sm:mt-0 sm:w-fit">
          <a href="#" className="inline-flex items-center gap-2">
            <RiDownload2Line
              className="-ml-0.5 size-5 shrink-0"
              aria-hidden={true}
            />
            Download report
          </a>
        </Button>
      </div>
      <dl className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {summary.map((item) => (
          <Card key={item.name} className="pb-2">
            <dt className="text-sm text-gray-500 dark:text-gray-500">
              {item.name}
            </dt>
            <dd className="text-lg font-medium text-gray-900 dark:text-gray-50">
              {item.value}
            </dd>
            <LineChart
              data={data}
              index="date"
              categories={[item.name]}
              valueFormatter={item.valueFormatter}
              showYAxis={false}
              showLegend={false}
              startEndOnly={true}
              className="mt-4 !h-36"
            />
          </Card>
        ))}
      </dl>
    </div>
  )
}
