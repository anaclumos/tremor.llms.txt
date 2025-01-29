"use client"

import { RiBarChartFill, RiExternalLinkLine } from "@remixicon/react"

import { Card } from "@/atom/Card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/atom/Tabs"

const tabs = [
  //array-start
  {
    name: "Ratio",
    categories: [
      {
        name: "Successful requests",
        value: "--",
      },
      {
        name: "Errors",
        value: "--",
      },
    ],
  },
  {
    name: "Projects",
    categories: [
      {
        name: "Online shop",
        value: "--",
      },
      {
        name: "Blog",
        value: "--",
      },
      {
        name: "Test project",
        value: "--",
      },
    ],
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <Card className="!p-0">
        <div className="p-6">
          <h3 className="font-medium text-gray-900 dark:text-gray-50">
            Requests
          </h3>
          <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt.{" "}
            <a
              href="#"
              className="inline-flex items-center gap-1 text-sm text-blue-500 dark:text-blue-500"
            >
              Learn more
              <RiExternalLinkLine className="size-4" aria-hidden={true} />
            </a>
          </p>
        </div>
        <div className="border-t border-gray-200 p-6 dark:border-gray-900">
          <Tabs defaultValue={tabs[0].name}>
            <TabsList variant="solid" className="w-full md:w-60">
              {tabs.map((tab) => (
                <TabsTrigger key={tab.name} value={tab.name} className="w-full">
                  {tab.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {tabs.map((tab) => (
              <TabsContent key={tab.name} value={tab.name}>
                <div className="mt-6 flex flex-wrap gap-x-20 gap-y-6">
                  {tab.categories.map((item) => (
                    <div key={item.name}>
                      <div className="flex items-center space-x-2">
                        <span
                          className="size-3 shrink-0 rounded-sm bg-gray-400 dark:bg-gray-600"
                          aria-hidden={true}
                        />
                        <p className="font-semibold text-gray-900 dark:text-gray-50">
                          {item.value}
                        </p>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-500">
                        {item.name}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex h-72 items-center justify-center rounded-md border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
                  <div className="text-center">
                    <RiBarChartFill
                      className="mx-auto size-7 text-gray-400 dark:text-gray-600"
                      aria-hidden={true}
                    />
                    <p className="mt-2 font-medium text-gray-900 dark:text-gray-50">
                      No data to show
                    </p>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
                      May take 24h for data to be shown.
                    </p>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </Card>
    </div>
  )
}
