"use client"

import { RiExternalLinkLine } from "@remixicon/react"

import { Card } from "../../atom/Card"
import { ProgressBar } from "../../atom/ProgressBar"
import { Tabs, TabsList, TabsTrigger } from "../../atom/Tabs"

const data = [
  //array-start
  {
    id: 1,
    name: "Starter plan",
    description: "Discounted plan for start-ups and growing companies",
    value: "$90.00",
    capacity: null,
    current: null,
  },
  {
    id: 2,
    name: "Storage used",
    description: "Used 1.1 GB",
    value: "$0.00",
    capacity: "10 GB included",
    current: null,
    percentageValue: 11,
  },
  {
    id: 3,
    name: "Users",
    description: "Used 9",
    value: "$0.00",
    capacity: "50 users included",
    current: 9,
    percentageValue: 18,
  },
  {
    id: 4,
    name: "Query super caching (EU-Central 1)",
    description: "4 GB query cache, $120/mo",
    value: "$120.00",
    capacity: null,
    current: null,
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <h1 className="text-lg font-bold text-gray-900 dark:text-gray-50">
        General
      </h1>
      <p className="mt-2 text-sm/6 text-gray-500 dark:text-gray-500">
        Manage your personal details, workspace governance and notifications.
      </p>
      <Tabs defaultValue="tab3" className="mt-8">
        <TabsList>
          <TabsTrigger value="tab1">Account details</TabsTrigger>
          <TabsTrigger value="tab2">Settings</TabsTrigger>
          <TabsTrigger value="tab3">Billing</TabsTrigger>
        </TabsList>
        {/* Content below only for demo purpose placed outside of <Tab> component. Add <TabsContent> to make it functional and to add content for other tabs */}
        <h2 className="mt-6 font-semibold text-gray-900 dark:text-gray-50">
          Billing overview
        </h2>
        <p className="mt-2 text-sm/6 text-gray-500 dark:text-gray-500">
          See the breakdown of your costs for the upcoming payment.{" "}
          <a
            href="#"
            className="inline-flex items-center gap-1 text-blue-500 hover:underline hover:underline-offset-4 dark:text-blue-500"
          >
            Compare pricing plans
            <RiExternalLinkLine className="size-4" aria-hidden={true} />
          </a>
        </p>
        <Card className="mt-8 overflow-hidden !p-0">
          <div className="flex items-start space-x-10 px-6 py-2">
            <ul
              role="list"
              className="w-full divide-y divide-gray-200 text-sm text-gray-500 dark:divide-gray-800 dark:text-gray-500"
            >
              {data.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between py-4"
                >
                  <div className="w-full">
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-gray-900 dark:text-gray-50">
                        {item.name}
                      </p>
                      <p className="font-medium text-gray-700 dark:text-gray-300">
                        {item.value}
                      </p>
                    </div>
                    <div className="w-full md:w-1/2">
                      {item.percentageValue && (
                        <ProgressBar
                          value={item.percentageValue}
                          className="mt-2 [&>*]:h-1.5"
                        />
                      )}
                      <p className="mt-1 flex items-center justify-between text-xs text-gray-500 dark:text-gray-500">
                        <span>{item.description}</span>
                        <span>{item.capacity}</span>
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t border-gray-200 bg-gray-50 px-6 py-3 dark:border-gray-900 dark:bg-gray-900">
            <p className="flex items-center justify-between text-sm font-medium text-gray-900 dark:text-gray-50">
              <span>Total for December 23</span>
              <span className="font-semibold">$210.00</span>
            </p>
          </div>
        </Card>
      </Tabs>
    </div>
  )
}
