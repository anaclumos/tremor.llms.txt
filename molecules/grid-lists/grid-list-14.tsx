"use client"

import {
  RiBuildingFill,
  RiMapPin2Fill,
  RiSettings3Line,
  RiTimeLine,
  RiTruckLine,
  RiUserFill,
} from "@remixicon/react"

import { cx } from "@/lib/utils"

import { Card } from "../../atoms/Card"
import { Divider } from "../../atoms/Divider"
import { ProgressCircle } from "../../atoms/ProgressCircle"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../atoms/Tabs"

const data = [
  //array-start
  {
    status: "In progress",
    icon: RiSettings3Line,
    iconColor: "text-blue-500",
    orders: [
      {
        item: "Printer Laser Jet Pro",
        company: "Big Tech Ltd.",
        location: "Paris, France",
        contact: "Lena Stone",
        fulfillmentActual: 8,
        fulfillmentTotal: 10,
        lastUpdated: "2min ago",
      },
      {
        item: "LED Monitor",
        company: "Bitclick Holding",
        location: "Zurich, Switzerland",
        contact: "Matthias Ruedi",
        fulfillmentActual: 3,
        fulfillmentTotal: 4,
        lastUpdated: "5min ago",
      },
      {
        item: "Conference Speaker",
        company: "Cornerstone LLC",
        location: "Frankfurt, Germany",
        contact: "David Mueller",
        fulfillmentActual: 2,
        fulfillmentTotal: 4,
        lastUpdated: "10d ago",
      },
    ],
  },
  {
    status: "Delivering",
    icon: RiTruckLine,
    iconColor: "text-emerald-500",
    orders: [
      {
        item: 'OLED 49" Monitor',
        company: "Walders AG",
        location: "St. Gallen, Switzerland",
        contact: "Patrick Doe",
        fulfillmentActual: 5,
        fulfillmentTotal: 6,
        lastUpdated: "4d ago",
      },
      {
        item: "Portable Power Station",
        company: "Lake View GmbH",
        location: "Lucerne, Switzerland",
        contact: "Marco Smith",
        fulfillmentActual: 5,
        fulfillmentTotal: 8,
        lastUpdated: "1d ago",
      },
      {
        item: "Office headset (Wireless)",
        company: "Cornerstone LLC",
        location: "St. Anton, Austria",
        contact: "Peter Batt",
        fulfillmentActual: 1,
        fulfillmentTotal: 2,
        lastUpdated: "7d ago",
      },
      {
        item: "Smart Home Security System",
        company: "SecureTech Solutions AG",
        location: "Munich, Germany",
        contact: "Thomas Schneider",
        fulfillmentActual: 3,
        fulfillmentTotal: 4,
        lastUpdated: "2h ago",
      },
      {
        item: 'Gaming Laptop Super Screen 14" (This is a super long edge case with many numbers)',
        company: "Tech Master Ltd.",
        location: "Aspen, USA",
        contact: "Joe Ross",
        fulfillmentActual: 9,
        fulfillmentTotal: 10,
        lastUpdated: "1h ago",
      },
    ],
  },
  {
    status: "Delayed",
    icon: RiTimeLine,
    iconColor: "text-orange-500",
    orders: [
      {
        item: "External SSD Portable",
        company: "Waterbridge Associates Inc.",
        location: "New York, USA",
        contact: "Adam Taylor",
        fulfillmentActual: 4,
        fulfillmentTotal: 12,
        lastUpdated: "1d ago",
      },
      {
        item: "Portable Scanner V600",
        company: "Hotel Stars GmbH",
        location: "Chur, Switzerland",
        contact: "Elias Jones",
        fulfillmentActual: 5,
        fulfillmentTotal: 10,
        lastUpdated: "4d ago",
      },
    ],
  },
  //array-end
]

type Status = "In progress" | "Delivering" | "Delayed"

const statusColor: Record<Status, string> = {
  "In progress":
    "bg-blue-50 text-blue-700 ring-blue-600/20 dark:bg-blue-400/10 dark:text-blue-400 dark:ring-blue-400/20",
  Delivering:
    "bg-emerald-50 text-emerald-700 ring-emerald-600/20 dark:bg-emerald-400/10 dark:text-emerald-400 dark:ring-emerald-400/20",
  Delayed:
    "bg-orange-50 text-orange-700 ring-orange-600/20 dark:bg-orange-400/10 dark:text-orange-400 dark:ring-orange-400/20",
}

export default function Example() {
  return (
    <div className="obfuscate">
      <Card className="!bg-gray-50 p-0 dark:!bg-gray-900">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
            Orders
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Check status of recent orders
          </p>
        </div>
        <Tabs defaultValue={data[0].status}>
          <TabsList className="!bg-gray-50 !px-6 dark:!bg-gray-900">
            {data.map((category) => (
              <TabsTrigger
                key={category.status}
                value={category.status}
                className="group"
              >
                <div className="sm:flex sm:items-center sm:space-x-2">
                  <category.icon
                    className={cx(category.iconColor, "hidden size-5 sm:block")}
                    aria-hidden={true}
                  />
                  <span className="group-data-[state=active]:text-gray-900 group-data-[state=active]:dark:text-gray-50">
                    {category.status}
                  </span>
                  <span className="hidden rounded-md bg-white px-2 py-1 text-xs font-semibold tabular-nums ring-1 ring-inset ring-gray-200 group-data-[state=active]:text-gray-700 sm:block dark:bg-[#090E1A] dark:ring-gray-800 group-data-[state=active]:dark:text-gray-300">
                    {category.orders.length}
                  </span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
          <ul role="list" className="rounded-b-md bg-white dark:bg-gray-950">
            {data.map((category) => (
              <TabsContent
                key={category.status}
                value={category.status}
                className="space-y-4 px-6 pb-6 pt-6"
              >
                {category.orders.map((order) => (
                  <Card
                    asChild
                    key={order.item}
                    className="dark:border-gray-800"
                  >
                    <li>
                      <div className="flex items-center justify-between space-x-4 sm:justify-start sm:space-x-2">
                        <h4 className="truncate text-sm font-medium text-gray-900 dark:text-gray-50">
                          {order.item}
                        </h4>
                        <span
                          className={cx(
                            statusColor[category.status as Status],
                            "inline-flex items-center whitespace-nowrap rounded px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset",
                          )}
                          aria-hidden={true}
                        >
                          {category.status}
                        </span>
                      </div>
                      <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-4">
                        <div className="flex items-center space-x-1.5">
                          <RiBuildingFill
                            className="size-5 text-gray-400 dark:text-gray-600"
                            aria-hidden={true}
                          />
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {order.company}
                          </p>
                        </div>
                        <div className="flex items-center space-x-1.5">
                          <RiMapPin2Fill
                            className="size-5 text-gray-400 dark:text-gray-600"
                            aria-hidden={true}
                          />
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {order.location}
                          </p>
                        </div>
                        <div className="flex items-center space-x-1.5">
                          <RiUserFill
                            className="size-5 text-gray-400 dark:text-gray-600"
                            aria-hidden={true}
                          />
                          <p className="text-sm text-gray-600 dark:text-gray-500">
                            {order.contact}
                          </p>
                        </div>
                      </div>
                      <Divider />
                      <div className="block sm:flex sm:items-center sm:justify-between sm:space-x-2">
                        <div className="flex items-center space-x-2">
                          <ProgressCircle
                            value={
                              (order.fulfillmentActual /
                                order.fulfillmentTotal) *
                              100
                            }
                            radius={9}
                            strokeWidth={3.5}
                          />
                          <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
                            Fulfillment controls ({order.fulfillmentActual}/
                            {order.fulfillmentTotal})
                          </p>
                        </div>
                        <p className="mt-2 text-sm text-gray-500 sm:mt-0 dark:text-gray-500">
                          Updated {order.lastUpdated}
                        </p>
                      </div>
                    </li>
                  </Card>
                ))}
              </TabsContent>
            ))}
          </ul>
        </Tabs>
      </Card>
    </div>
  )
}
