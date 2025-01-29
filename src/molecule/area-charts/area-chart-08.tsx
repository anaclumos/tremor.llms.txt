"use client"

import { RiArrowRightSLine } from "@remixicon/react"

import { AreaChart } from "../../atom/AreaChart"
import { Card } from "../../atom/Card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../atom/Tabs"

const dataEurope = [
  //array-start
  {
    date: "Jan 23",
    Sales: 68560,
  },
  {
    date: "Feb 23",
    Sales: 70320,
  },
  {
    date: "Mar 23",
    Sales: 80233,
  },
  {
    date: "Apr 23",
    Sales: 55123,
  },
  {
    date: "May 23",
    Sales: 56000,
  },
  {
    date: "Jun 23",
    Sales: 100000,
  },
  {
    date: "Jul 23",
    Sales: 85390,
  },
  {
    date: "Aug 23",
    Sales: 80100,
  },
  {
    date: "Sep 23",
    Sales: 75090,
  },
  {
    date: "Oct 23",
    Sales: 71080,
  },
  {
    date: "Nov 23",
    Sales: 68041,
  },
  {
    date: "Dec 23",
    Sales: 60143,
  },
  //array-end
]

const dataAsia = [
  //array-start
  {
    date: "Jan 23",
    Sales: 28560,
  },
  {
    date: "Feb 23",
    Sales: 30320,
  },
  {
    date: "Mar 23",
    Sales: 70233,
  },
  {
    date: "Apr 23",
    Sales: 45123,
  },
  {
    date: "May 23",
    Sales: 56000,
  },
  {
    date: "Jun 23",
    Sales: 80600,
  },
  {
    date: "Jul 23",
    Sales: 85390,
  },
  {
    date: "Aug 23",
    Sales: 40100,
  },
  {
    date: "Sep 23",
    Sales: 35090,
  },
  {
    date: "Oct 23",
    Sales: 71080,
  },
  {
    date: "Nov 23",
    Sales: 68041,
  },
  {
    date: "Dec 23",
    Sales: 70143,
  },
  //array-end
]

const dataNorthAmerica = [
  //array-start
  {
    date: "Jan 23",
    Sales: 78560,
  },
  {
    date: "Feb 23",
    Sales: 70320,
  },
  {
    date: "Mar 23",
    Sales: 50233,
  },
  {
    date: "Apr 23",
    Sales: 45123,
  },
  {
    date: "May 23",
    Sales: 46000,
  },
  {
    date: "Jun 23",
    Sales: 50600,
  },
  {
    date: "Jul 23",
    Sales: 65390,
  },
  {
    date: "Aug 23",
    Sales: 70100,
  },
  {
    date: "Sep 23",
    Sales: 85090,
  },
  {
    date: "Oct 23",
    Sales: 81080,
  },
  {
    date: "Nov 23",
    Sales: 98041,
  },
  {
    date: "Dec 23",
    Sales: 90143,
  },
  //array-end
]

const regions = [
  //array-start
  {
    name: "Europe",
    alerts: 2,
    data: dataEurope,
    alertTexts: [
      {
        title: "New customer closed",
        body: "Stone Holding signed $0.5M deal after 6-month-long negotiation...",
        href: "#",
      },
      {
        title: "Contract renewed",
        body: "Eccel Mountain, Inc. renewed $1.2M annual contract...",
        href: "#",
      },
    ],
  },
  {
    name: "Asia",
    alerts: 2,
    data: dataAsia,
    alertTexts: [
      {
        title: "Diamond customer lost",
        body: "Tech, Inc. has made the decision not to proceed with the renewal of $4M annual contract...",
        href: "#",
      },
      {
        title: "Strong competition activity",
        body: "Rose Holding faces heightened competition in the market, leading to the strategic decision...",
        href: "#",
      },
    ],
  },
  {
    name: "North America",
    alerts: 3,
    data: dataNorthAmerica,
    alertTexts: [
      {
        title: "Paid pilot won",
        body: "Storm Company signs $0.3M deal to co-create B2B platform product...",
        href: "#",
      },
      {
        title: "Diamond customer won",
        body: "Neo Products LLC signs $3.4M deal...",
        href: "#",
      },
      {
        title: "Goverment listing won",
        body: "Won $3.4M government contract after a competitive bidding process...",
        href: "#",
      },
    ],
  },
  //array-end
]

const valueFormatter = (number: number) =>
  `$${Intl.NumberFormat("us").format(number).toString()}`

export default function Example() {
  return (
    <div className="obfuscate">
      <Card className="overflow-hidden !p-0 sm:mx-auto sm:max-w-xl">
        <div className="rounded-t-md bg-gray-50 p-6 dark:bg-[#090E1A]">
          <h1 className="font-semibold text-gray-900 dark:text-gray-50">
            Sales alerts
          </h1>
          <p className="text-sm/6 text-gray-500 dark:text-gray-500">
            Check recent activities of won and lost deals in your regions
          </p>
        </div>
        <Tabs defaultValue={regions[0].name}>
          <TabsList className="bg-gray-50 px-6 dark:bg-[#090E1A]">
            {regions.map((region) => (
              <TabsTrigger
                key={region.name}
                value={region.name}
                className="font-medium"
              >
                {region.name}
                <span className="ml-2 hidden rounded-md bg-white px-2 py-1 text-xs/4 font-semibold tabular-nums ring-1 ring-inset ring-gray-200 sm:inline-flex dark:bg-gray-950 dark:ring-gray-800">
                  {region.alerts}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
          {regions.map((region) => (
            <TabsContent key={region.name} value={region.name} className="p-6">
              <AreaChart
                data={region.data}
                index="date"
                categories={["Sales"]}
                valueFormatter={valueFormatter}
                showLegend={false}
                showYAxis={false}
                fill="solid"
                className="mt-2 hidden !h-48 sm:block"
              />
              <AreaChart
                data={region.data}
                index="date"
                categories={["Sales"]}
                valueFormatter={valueFormatter}
                showLegend={false}
                showYAxis={false}
                startEndOnly={true}
                fill="solid"
                className="mt-2 !h-48 sm:hidden"
              />
              <div className="mt-4 space-y-4 sm:space-y-0">
                {region.alertTexts.map((item) => (
                  <div
                    key={item.title}
                    className="relative rounded-md p-0 sm:p-4 sm:hover:bg-gray-50 sm:hover:dark:bg-gray-900"
                  >
                    <div className="flex items-center space-x-0.5">
                      <h2 className="text-sm font-medium text-gray-900 dark:text-gray-50">
                        <a href={item.href} className="focus:outline-none">
                          {/* Extend link to entire card */}
                          <span
                            className="absolute inset-0"
                            aria-hidden="true"
                          />
                          {item.title}
                        </a>
                      </h2>
                      <RiArrowRightSLine
                        className="size-5 text-gray-500 dark:text-gray-500"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </Card>
    </div>
  )
}
