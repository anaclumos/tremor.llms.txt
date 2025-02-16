```example/empty-states-empty-state-06.tsx
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
```


```example/empty-states-empty-state-07.tsx
"use client"

import { RiAddFill, RiBarChartFill } from "@remixicon/react"

import { Button } from "@/atom/Button"
import { Card } from "@/atom/Card"

const data = [
  //array-start
  {
    name: "Sales",
    value: "--",
  },
  {
    name: "Profit",
    value: "--",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <Card className="!p-0">
        <div className="p-6">
          <h3 className="font-medium text-gray-900 dark:text-gray-50">
            Sales and profit overview
          </h3>
          <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt.
          </p>
        </div>
        <div className="border-t border-gray-200 p-6 dark:border-gray-900">
          <div className="flex flex-wrap gap-x-20 gap-y-6">
            {data.map((item) => (
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
                No data sources yet available.
              </p>
              <Button className="mt-6">
                <RiAddFill
                  className="-ml-1 size-5 shrink-0"
                  aria-hidden={true}
                />
                Connect database
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
```


```example/empty-states-empty-state-05.tsx
"use client"

import { RiAddFill } from "@remixicon/react"

import { Button } from "@/atom/Button"
import { Card } from "@/atom/Card"
import { ProgressCircle } from "@/atom/ProgressCircle"

const data = [
  //array-start
  {
    name: "Storage",
    progress: 0,
    budget: "$0",
    current: "$0",
    href: "#",
  },
  {
    name: "API requests",
    progress: 0,
    budget: "$0",
    current: "$0",
    href: "#",
  },
  {
    name: "Web analytics",
    progress: 0,
    budget: "$0",
    current: "$0",
    href: "#",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="sm:flex sm:items-center sm:justify-between sm:space-x-2">
        <h2 className="font-medium text-gray-900 dark:text-gray-50">
          Overview
        </h2>
        <Button type="button" className="mt-2 w-full gap-1.5 sm:mt-0 sm:w-fit">
          <RiAddFill className="-ml-1 size-5 shrink-0" aria-hidden={true} />
          Add budget limits
        </Button>
      </div>
      <dl className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <Card key={item.name} className="!p-0">
            <div className="flex items-center space-x-3 px-6 pt-6">
              <ProgressCircle
                value={item.progress}
                radius={25}
                strokeWidth={5}
                variant="neutral"
              >
                <span className="text-xs font-medium text-gray-900 dark:text-gray-50">
                  {item.progress}&#37;
                </span>
              </ProgressCircle>
              <div>
                <dd className="text-sm font-medium text-gray-900 dark:text-gray-50">
                  {item.current} / {item.budget}
                </dd>
                <dt className="text-sm text-gray-500 dark:text-gray-500">
                  {item.name}
                </dt>
              </div>
            </div>
            <div className="mt-8 flex items-center justify-end border-t border-gray-200 px-6 py-3 dark:border-gray-900">
              <a
                href={item.href}
                className="text-sm font-medium text-blue-500 hover:text-blue-600 dark:text-blue-500 hover:dark:text-blue-600"
              >
                View more &#8594;
              </a>
            </div>
          </Card>
        ))}
      </dl>
    </div>
  )
}
```


```example/empty-states-empty-state-10.tsx
"use client"

import { RiAddFill } from "@remixicon/react"

import { Button } from "@/atom/Button"
import { Tabs, TabsList, TabsTrigger } from "@/atom/Tabs"

export default function Example() {
  return (
    <div className="obfuscate">
      <h1 className="text-lg font-bold text-gray-900 dark:text-gray-50">
        Dashboard
      </h1>
      <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
        View and analyze current stats about your business
      </p>
      <Tabs defaultValue="tab1" className="mt-6">
        <TabsList>
          <TabsTrigger value="tab1">Overview</TabsTrigger>
          <TabsTrigger value="tab2">Detail</TabsTrigger>
        </TabsList>
        {/* Content below only for demo purpose placed outside of <Tab> component. Add <TabsContent> to make it functional and to add content for other tabs */}
        <div className="relative">
          <ul
            role="list"
            className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <li className="h-44 rounded-lg bg-gray-100 dark:bg-gray-800" />
            <li className="h-44 rounded-lg bg-gray-100 dark:bg-gray-800" />
            <li className="hidden h-44 rounded-lg bg-gray-100 sm:block dark:bg-gray-800" />
            <li className="hidden h-44 rounded-lg bg-gray-100 sm:block dark:bg-gray-800" />
            <li className="hidden h-44 rounded-lg bg-gray-100 sm:block dark:bg-gray-800" />
            <li className="hidden h-44 rounded-lg bg-gray-100 sm:block dark:bg-gray-800" />
          </ul>
          {/* Change dark:from-gray-950 in parent below according to your dark mode background */}
          <div className="absolute inset-x-0 bottom-0 flex h-32 flex-col items-center justify-center bg-gradient-to-t from-white to-transparent dark:from-gray-950">
            <p className="font-medium text-gray-900 dark:text-gray-50">
              No reports created yet
            </p>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
              Create your first report to get started
            </p>
            <Button className="mt-6 gap-1">
              <RiAddFill className="-ml-1 size-5 shrink-0" aria-hidden={true} />
              Connect database
            </Button>
          </div>
        </div>
      </Tabs>
    </div>
  )
}
```


```example/empty-states-empty-state-04.tsx
"use client"

import { RiExternalLinkLine } from "@remixicon/react"

import { Card } from "@/atom/Card"
import { ProgressCircle } from "@/atom/ProgressCircle"

const data = [
  //array-start
  {
    name: "Storage used",
    capacity: "0/10GB",
    value: 0,
  },
  {
    name: "Members",
    capacity: "0/50",
    value: 0,
  },
  {
    name: "API requests",
    capacity: "0/100K",
    value: 0,
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <Card className="overflow-hidden !p-0 sm:mx-auto sm:max-w-lg">
        <div className="p-6">
          <h3 className="text-sm font-medium text-gray-900 dark:text-gray-50">
            Capacity
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            No activity measured yet.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {data.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-4 sm:flex-col sm:justify-center sm:gap-1.5"
              >
                <ProgressCircle value={0} variant="neutral">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-500">
                    {item.value}%
                  </span>
                </ProgressCircle>
                <div className="mt-0 text-left sm:mt-2 sm:text-center">
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
                    {item.capacity}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    {item.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-2 border-t border-gray-200 bg-gray-50 px-6 py-4 dark:border-gray-900 dark:bg-gray-950">
          <h4 className="text-sm font-medium text-gray-900 dark:text-gray-50">
            Usage updated hourly
          </h4>
          <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-500">
            Monthly usage resets in 4 days.{" "}
            <a
              href="#"
              className="inline-flex items-center gap-1 rounded text-sm text-blue-500 hover:underline hover:underline-offset-4 dark:text-blue-500"
            >
              Manage plan
              <RiExternalLinkLine className="size-4" aria-hidden={true} />
            </a>
          </p>
        </div>
      </Card>
    </div>
  )
}
```


```example/empty-states-empty-state-01.tsx
"use client"

import { RiBarChartFill } from "@remixicon/react"

import { Card } from "@/atom/Card"

export default function Example() {
  return (
    <div className="obfuscate">
      <Card className="sm:mx-auto sm:max-w-lg">
        <h3 className="text-sm text-gray-500 dark:text-gray-500">
          Total API requests
        </h3>
        <p className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
          0
        </p>
        <div className="mt-4 flex h-44 items-center justify-center rounded-md border border-dashed border-gray-300 p-4 dark:border-gray-800">
          <div className="text-center">
            <RiBarChartFill
              className="mx-auto size-7 text-gray-400 dark:text-gray-600"
              aria-hidden={true}
            />
            <p className="mt-2 text-sm font-medium text-gray-900 dark:text-gray-50">
              No data to show
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              May take 24 hours for data to load
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}
```


```example/empty-states-empty-state-03.tsx
"use client"

import { RiAddFill, RiBarChartFill } from "@remixicon/react"

import { Button } from "@/atom/Button"
import { Card } from "@/atom/Card"

export default function Example() {
  return (
    <div className="obfuscate">
      <Card className="sm:mx-auto sm:max-w-lg">
        <h3 className="text-sm text-gray-500 dark:text-gray-500">
          Total API requests
        </h3>
        <p className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
          0
        </p>
        <div className="mt-4 flex h-52 items-center justify-center rounded-md border border-dashed border-gray-300 p-4 dark:border-gray-800">
          <div className="text-center">
            <RiBarChartFill
              className="mx-auto size-7 text-gray-400 dark:text-gray-600"
              aria-hidden={true}
            />
            <p className="mt-2 text-sm font-medium text-gray-900 dark:text-gray-50">
              No data available
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Get started by connecting a database
            </p>
            <Button className="mt-6">
              <RiAddFill className="-ml-1 size-5 shrink-0" aria-hidden={true} />
              Add database
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
```


```example/empty-states-empty-state-02.tsx
"use client"

import { RiBarChartFill } from "@remixicon/react"

import { Card } from "@/atom/Card"

export default function Example() {
  return (
    <div className="obfuscate">
      <Card className="sm:mx-auto sm:max-w-lg">
        <h3 className="text-sm text-gray-500 dark:text-gray-500">
          Total API requests
        </h3>
        <p className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
          0
        </p>
        <div className="mt-4 flex h-44 items-center justify-center rounded-md border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
          <div className="text-center">
            <RiBarChartFill
              className="mx-auto size-7 text-gray-400 dark:text-gray-600"
              aria-hidden={true}
            />
            <p className="mt-2 text-sm font-medium text-gray-900 dark:text-gray-50">
              No data to show
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              May take 24 hours for data to load
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}
```


```example/empty-states-empty-state-09.tsx
"use client"

import { RiExternalLinkLine } from "@remixicon/react"

import { Button } from "@/atom/Button"
import { Tabs, TabsList, TabsTrigger } from "@/atom/Tabs"

export default function Example() {
  return (
    <div className="obfuscate">
      <h1 className="text-lg font-bold text-gray-900 dark:text-gray-50">
        Dashboard
      </h1>
      <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
        View and analyze current stats about your business
      </p>
      <Tabs defaultValue="tab1" className="mt-6">
        <TabsList>
          <TabsTrigger value="tab1">Overview</TabsTrigger>
          <TabsTrigger value="tab2">Detail</TabsTrigger>
        </TabsList>
        {/* Content below only for demo purpose placed outside of <Tab> component. Add <TabsContent> to make it functional and to add content for other tabs */}
        <div className="mt-8 flex h-96 min-h-full flex-1 flex-col justify-center rounded-lg border border-gray-200 bg-gray-50 px-6 py-10 dark:border-gray-700 dark:bg-gray-800">
          <div className="mx-auto text-center">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
              Web Analytics
            </h2>
            <p className="mt-3 max-w-xl text-sm/6 text-gray-500 sm:text-base dark:text-gray-500">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat.
            </p>
            <div className="mt-8 sm:flex sm:items-center sm:justify-center sm:gap-x-3">
              <Button className="w-full sm:w-fit">Enable Analytics</Button>
              <Button
                asChild
                variant="secondary"
                className="mt-2 w-full gap-1 sm:mt-0 sm:w-fit"
              >
                <a href="#">
                  Learn more
                  <RiExternalLinkLine
                    className="size-5 shrink-0"
                    aria-hidden={true}
                  />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Tabs>
    </div>
  )
}
```


```example/empty-states-empty-state-08.tsx
"use client"

import { cx } from "@/lib/utils"

import { AreaChart } from "@/atom/AreaChart"

const data = [
  //array-start
  {
    date: "12:00 AM",
    Revenue: 0,
    Profit: 0,
  },
  {
    date: "12:00 PM",
    Revenue: 0,
    Profit: 0,
  },
]

const summary = [
  {
    category: "Revenue",
    total: "$0",
    color: "bg-blue-500",
  },
  {
    category: "Profit",
    total: "$0",
    color: "bg-cyan-500",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <h3 className="font-medium text-gray-900 dark:text-gray-50">
        Revenue and profit overview
      </h3>
      <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt.
      </p>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {summary.map((item, index) => (
          <div key={index}>
            <div className="flex space-x-3">
              <span className={cx(item.color, "w-1 shrink-0 rounded")} />
              <p className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                {item.total}
              </p>
            </div>
            <p className="pl-4 text-sm text-gray-500 dark:text-gray-500">
              {item.category}
            </p>
          </div>
        ))}
      </div>
      <AreaChart
        data={data}
        index="date"
        categories={["Profit", "Revenue"]}
        colors={["cyan", "blue"]}
        showLegend={false}
        showYAxis={false}
        showTooltip={false}
        startEndOnly={true}
        className="mt-10 !h-72"
      />
    </div>
  )
}
```


