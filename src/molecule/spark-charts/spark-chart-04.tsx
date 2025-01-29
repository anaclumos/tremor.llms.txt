"use client"

import { Card } from "@/atom/Card"
import { SparkAreaChart } from "@/atom/SparkChart"

const data = [
  //array-start
  {
    date: "Jan 23",
    "Monthly active users": 673,
    "Monthly sessions": 1024,
    "Monthly user growth": 4.5,
  },
  {
    date: "Feb 23",
    "Monthly active users": 573,
    "Monthly sessions": 1224,
    "Monthly user growth": 6.5,
  },
  {
    date: "Mar 23",
    "Monthly active users": 503,
    "Monthly sessions": 1200,
    "Monthly user growth": 6.9,
  },
  {
    date: "Apr 23",
    "Monthly active users": 523,
    "Monthly sessions": 1005,
    "Monthly user growth": 4.2,
  },
  {
    date: "May 23",
    "Monthly active users": 599,
    "Monthly sessions": 1201,
    "Monthly user growth": 3.9,
  },
  {
    date: "Jun 23",
    "Monthly active users": 481,
    "Monthly sessions": 1001,
    "Monthly user growth": 3.7,
  },
  {
    date: "Jul 23",
    "Monthly active users": 499,
    "Monthly sessions": 1129,
    "Monthly user growth": 4.7,
  },
  {
    date: "Aug 23",
    "Monthly active users": 571,
    "Monthly sessions": 1220,
    "Monthly user growth": 4.5,
  },
  {
    date: "Sep 23",
    "Monthly active users": 579,
    "Monthly sessions": 1420,
    "Monthly user growth": 4.3,
  },
  {
    date: "Oct 23",
    "Monthly active users": 471,
    "Monthly sessions": 1230,
    "Monthly user growth": 4.0,
  },
  {
    date: "Nov 23",
    "Monthly active users": 461,
    "Monthly sessions": 1430,
    "Monthly user growth": 4.1,
  },
  {
    date: "Dec 23",
    "Monthly active users": 341,
    "Monthly sessions": 1530,
    "Monthly user growth": 4.9,
  },
  //array-end
]

const summary = [
  //array-start
  {
    name: "Monthly active users",
    stat: "341",
  },
  {
    name: "Monthly sessions",
    stat: "1,530",
  },
  {
    name: "Monthly user growth",
    stat: "4.9%",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {summary.map((item) => (
          <Card key={item.name}>
            <dt className="text-sm text-gray-500 dark:text-gray-500">
              {item.name}
            </dt>
            <div className="flex items-center justify-between space-x-8">
              <dd className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
                {item.stat}
              </dd>
              <SparkAreaChart
                data={data}
                index="date"
                categories={[item.name]}
                fill="solid"
                className="flex-none"
              />
            </div>
          </Card>
        ))}
      </dl>
    </div>
  )
}
