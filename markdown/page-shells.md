```example/page-shells-page-shell-03.tsx
"use client"

import type { SVGProps } from "react"

import { cx } from "@/lib/utils"

import { Card } from "@/atom/Card"
import { SelectNative } from "@/atom/SelectNative"

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Workspaces", href: "#", current: false },
  { name: "Settings", href: "#", current: false },
]

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M10.9999 2.04938L11 5.07088C7.6077 5.55612 5 8.47352 5 12C5 15.866 8.13401 19 12 19C13.5723 19 15.0236 18.4816 16.1922 17.6064L18.3289 19.7428C16.605 21.1536 14.4014 22 12 22C6.47715 22 2 17.5228 2 12C2 6.81468 5.94662 2.55115 10.9999 2.04938ZM21.9506 13.0001C21.7509 15.0111 20.9555 16.8468 19.7433 18.3283L17.6064 16.1922C18.2926 15.2759 18.7595 14.1859 18.9291 13L21.9506 13.0001ZM13.0011 2.04948C17.725 2.51902 21.4815 6.27589 21.9506 10.9999L18.9291 10.9998C18.4905 7.93452 16.0661 5.50992 13.001 5.07103L13.0011 2.04948Z" />
  </svg>
)

function ContentPlaceholder() {
  return (
    <div className="relative h-full overflow-hidden rounded bg-gray-50 dark:bg-gray-800">
      <svg
        className="absolute inset-0 h-full w-full stroke-gray-200 dark:stroke-gray-700"
        fill="none"
      >
        <defs>
          <pattern
            id="pattern-3"
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path>
          </pattern>
        </defs>
        <rect
          stroke="none"
          fill="url(#pattern-3)"
          width="100%"
          height="100%"
        ></rect>
      </svg>
    </div>
  )
}

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="border-b border-gray-200 dark:border-gray-800">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="overflow flex h-16 sm:space-x-7">
            <div className="hidden shrink-0 sm:flex sm:items-center">
              <a href="#" className="p-1.5">
                <Logo
                  className="size-5 shrink-0 text-gray-900 dark:text-gray-50"
                  aria-hidden={true}
                />
              </a>
            </div>
            <nav className="-mb-px flex space-x-6" aria-label="Tabs">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={cx(
                    item.current
                      ? "border-blue-500 text-blue-500 dark:text-blue-500"
                      : "border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-900 dark:text-gray-300 hover:dark:border-gray-600 hover:dark:text-gray-50",
                    "inline-flex items-center border-b-2 px-2 text-sm font-medium whitespace-nowrap",
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="p-4 sm:p-6 lg:p-8">
        <header>
          <div className="sm:flex sm:items-center sm:justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
              Overview
            </h3>
            <div className="mt-4 items-center sm:mt-0 sm:flex sm:space-x-2">
              <SelectNative className="w-full sm:w-fit" defaultValue="1">
                <option value="1">Today</option>
                <option value="2">Last 7 days</option>
                <option value="3">Last 4 weeks</option>
                <option value="4">Last 12 months</option>
              </SelectNative>
              <SelectNative
                className="mt-2 w-full sm:mt-0 sm:w-fit"
                defaultValue="1"
              >
                <option value="1">US-West</option>
                <option value="2">US-East</option>
                <option value="3">EU-Central-1</option>
              </SelectNative>
            </div>
          </div>
        </header>
        <main>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="!h-36 !p-2">
              <ContentPlaceholder />
            </Card>
            <Card className="!h-36 !p-2">
              <ContentPlaceholder />
            </Card>
            <Card className="!h-36 !p-2">
              <ContentPlaceholder />
            </Card>
          </div>
          <Card className="mt-4 !h-96 !p-2">
            <ContentPlaceholder />
          </Card>
        </main>
      </div>
    </div>
  )
}
```


```example/page-shells-page-shell-02.tsx
"use client"

import { Card } from "@/atom/Card"
import { Divider } from "@/atom/Divider"
import { SelectNative } from "@/atom/SelectNative"

function ContentPlaceholder() {
  return (
    <div className="relative h-full overflow-hidden rounded bg-gray-50 dark:bg-gray-800">
      <svg
        className="absolute inset-0 h-full w-full stroke-gray-200 dark:stroke-gray-700"
        fill="none"
      >
        <defs>
          <pattern
            id="pattern-2"
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path>
          </pattern>
        </defs>
        <rect
          stroke="none"
          fill="url(#pattern-2)"
          width="100%"
          height="100%"
        ></rect>
      </svg>
    </div>
  )
}

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="p-4 sm:p-6 lg:p-8">
        <header>
          <div className="sm:flex sm:items-center sm:justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
              Report
            </h3>
            <div className="mt-4 flex flex-col gap-2 sm:mt-0 sm:flex-row sm:items-center">
              <SelectNative defaultValue="1">
                <option value="1">Today</option>
                <option value="2">Last 7 days</option>
                <option value="3">Last 4 weeks</option>
                <option value="4">Last 12 months</option>
              </SelectNative>
              <SelectNative defaultValue="1">
                <option value="1">US-West</option>
                <option value="2">US-East</option>
                <option value="3">EU-Central-1</option>
              </SelectNative>
            </div>
          </div>
        </header>
        <Divider />
        <main>
          <Card className="!p-0">
            <div className="grid-cols-12 divide-y divide-gray-200 md:grid md:divide-x md:divide-y-0 dark:divide-gray-800">
              <div className="divide-y divide-gray-200 px-2 md:col-span-4 dark:divide-gray-800">
                <div className="h-28 py-2">
                  <ContentPlaceholder />
                </div>
                <div className="h-28 py-2">
                  <ContentPlaceholder />
                </div>
                <div className="h-28 py-2">
                  <ContentPlaceholder />
                </div>
              </div>
              <div className="h-56 p-2 md:col-span-8 md:h-auto">
                <ContentPlaceholder />
              </div>
            </div>
          </Card>
          <dl className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Card className="!p-0">
              <div className="border-b border-gray-200 px-4 py-2 dark:border-gray-800">
                <dt className="text-sm font-medium text-gray-900 dark:text-gray-50">
                  Title
                </dt>
              </div>
              <div className="h-60 p-2">
                <ContentPlaceholder />
              </div>
            </Card>
            <Card className="!p-0">
              <div className="border-b border-gray-200 px-4 py-2 dark:border-gray-800">
                <dt className="text-sm font-medium text-gray-900 dark:text-gray-50">
                  Title
                </dt>
              </div>
              <div className="h-60 p-2">
                <ContentPlaceholder />
              </div>
            </Card>
            <Card className="!p-0">
              <div className="border-b border-gray-200 px-4 py-2 dark:border-gray-800">
                <dt className="text-sm font-medium text-gray-900 dark:text-gray-50">
                  Title
                </dt>
              </div>
              <div className="h-60 p-2">
                <ContentPlaceholder />
              </div>
            </Card>
            <Card className="!p-0">
              <div className="border-b border-gray-200 px-4 py-2 dark:border-gray-800">
                <dt className="text-sm font-medium text-gray-900 dark:text-gray-50">
                  Title
                </dt>
              </div>
              <div className="h-60 p-2">
                <ContentPlaceholder />
              </div>
            </Card>
          </dl>
        </main>
      </div>
    </div>
  )
}
```


```example/page-shells-page-shell-01.tsx
"use client"

import { Card } from "@/atom/Card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/atom/Select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/atom/Tabs"

function ContentPlaceholder() {
  return (
    <div className="relative h-full overflow-hidden rounded bg-gray-50 dark:bg-gray-800">
      <svg
        className="absolute inset-0 h-full w-full stroke-gray-200 dark:stroke-gray-700"
        fill="none"
      >
        <defs>
          <pattern
            id="pattern-1"
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path>
          </pattern>
        </defs>
        <rect
          stroke="none"
          fill="url(#pattern-1)"
          width="100%"
          height="100%"
        ></rect>
      </svg>
    </div>
  )
}

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="p-4 sm:p-6 lg:p-8">
        <header>
          <div className="sm:flex sm:items-center sm:justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
              Report
            </h3>
            <div className="mt-4 sm:mt-0 sm:flex sm:items-center sm:space-x-2">
              <Select defaultValue="1">
                <SelectTrigger className="w-full sm:w-36">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent align="end">
                  <SelectItem value="1">Today</SelectItem>
                  <SelectItem value="2">Last 7 days</SelectItem>
                  <SelectItem value="3">Last 4 weeks</SelectItem>
                  <SelectItem value="4">Last 12 months</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="1">
                <SelectTrigger className="mt-2 w-full sm:mt-0 sm:w-36">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent align="end">
                  <SelectItem value="1">US-West</SelectItem>
                  <SelectItem value="2">US-East</SelectItem>
                  <SelectItem value="3">EU-Central-1</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </header>
        <main>
          <Tabs defaultValue="1" className="mt-6">
            <TabsList>
              <TabsTrigger value="1">Overview</TabsTrigger>
              <TabsTrigger value="2">Detail</TabsTrigger>
            </TabsList>
            <TabsContent value="1" className="mt-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Card className="!h-36 !p-2">
                  <ContentPlaceholder />
                </Card>
                <Card className="!h-36 !p-2">
                  <ContentPlaceholder />
                </Card>
                <Card className="!h-36 !p-2">
                  <ContentPlaceholder />
                </Card>
                <Card className="!h-36 !p-2">
                  <ContentPlaceholder />
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="2" className="mt-4">
              <Card className="!h-72 p-2">
                <ContentPlaceholder />
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
```


```example/page-shells-page-shell-05.tsx
"use client"

import { RiAddFill, RiBookOpenLine, RiDatabase2Line } from "@remixicon/react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/atom/Accordion"
import { Button } from "@/atom/Button"
import { Card } from "@/atom/Card"

const data = [
  //array-start
  {
    id: 1,
    name: "Report name",
    description: "Description",
    href: "#",
  },
  {
    id: 2,
    name: "Report name",
    description: "Description",
    href: "#",
  },
  {
    id: 3,
    name: "Report name",
    description: "Description",
    href: "#",
  },
  {
    id: 4,
    name: "Report name",
    description: "Description",
    href: "#",
  },
  {
    id: 5,
    name: "Report name",
    description: "Description",
    href: "#",
  },
  {
    id: 6,
    name: "Report name",
    description: "Description",
    href: "#",
  },
  //array-end
]

function ContentPlaceholder() {
  return (
    <div className="relative h-full overflow-hidden rounded bg-gray-50 dark:bg-gray-800">
      <svg
        className="absolute inset-0 h-full w-full stroke-gray-200 dark:stroke-gray-700"
        fill="none"
      >
        <defs>
          <pattern
            id="pattern-5"
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path>
          </pattern>
        </defs>
        <rect
          stroke="none"
          fill="url(#pattern-5)"
          width="100%"
          height="100%"
        ></rect>
      </svg>
    </div>
  )
}

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="border-b border-gray-200 bg-gray-50 p-4 sm:p-6 lg:p-8 dark:border-gray-800 dark:bg-gray-950">
        <header>
          <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
            Report
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Explore and manage your reports
          </p>
          <div className="mt-8 w-full md:flex md:max-w-3xl md:items-stretch md:space-x-4">
            <Card className="w-full md:w-7/12">
              <div className="inline-flex items-center justify-center rounded-md border border-gray-200 p-2 dark:border-gray-800">
                <RiBookOpenLine
                  className="size-5 text-gray-700 dark:text-gray-300"
                  aria-hidden={true}
                />
              </div>
              <h3 className="mt-4 text-sm font-medium text-gray-900 dark:text-gray-50">
                <a href="#" className="focus:outline-none">
                  {/* Extend link to entire card */}
                  <span className="absolute inset-0" aria-hidden={true} />
                  Documentation
                </a>
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
              </p>
            </Card>
            <Card className="mt-4 w-full md:mt-0 md:w-5/12">
              <div className="inline-flex items-center justify-center rounded-md border border-gray-200 p-2 dark:border-gray-800">
                <RiDatabase2Line
                  className="size-5 text-gray-700 dark:text-gray-300"
                  aria-hidden={true}
                />
              </div>
              <h3 className="mt-4 text-sm font-medium text-gray-900 dark:text-gray-50">
                <a href="#" className="focus:outline-none">
                  {/* Extend link to entire card */}
                  <span className="absolute inset-0" aria-hidden={true} />
                  Models
                </a>
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Lorem ipsum dolor sit amet.
              </p>
            </Card>
          </div>
        </header>
      </div>
      <div>
        <main>
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                Your reports
              </h2>
              <Button className="gap-1.5">
                <RiAddFill
                  className="-ml-1 size-5 shrink-0"
                  aria-hidden={true}
                />
                Add report
              </Button>
            </div>
            <Accordion
              type="multiple"
              defaultValue={["item-1"]}
              className="mt-6 space-y-4"
            >
              <AccordionItem
                value="item-1"
                className="rounded-md border !border-gray-200 !px-4 dark:!border-gray-800"
              >
                <AccordionTrigger>Recent (3)</AccordionTrigger>
                <AccordionContent>
                  <dl className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {data.slice(0, 3).map((item) => (
                      <Card key={item.id} className="relative !p-2">
                        <div className="h-20">
                          <ContentPlaceholder />
                        </div>
                        <dt className="mt-2 text-sm font-medium text-gray-900 dark:text-gray-50">
                          <a href={item.href} className="focus:outline-none">
                            {/* Extend link to entire card */}
                            <span
                              className="absolute inset-0"
                              aria-hidden={true}
                            />
                            {item.name}
                          </a>
                        </dt>
                        <dd className="text-sm text-gray-500 dark:text-gray-500">
                          {item.description}
                        </dd>
                      </Card>
                    ))}
                  </dl>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="rounded-md border !border-gray-200 !px-4 dark:!border-gray-800"
              >
                <AccordionTrigger>All (6)</AccordionTrigger>
                <AccordionContent>
                  <dl className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {data.map((item) => (
                      <Card key={item.id} className="relative p-2">
                        <div className="h-20">
                          <ContentPlaceholder />
                        </div>
                        <dt className="mt-2 text-sm font-medium text-gray-900 dark:text-gray-50">
                          <a href={item.href} className="focus:outline-none">
                            <span
                              className="absolute inset-0"
                              aria-hidden={true}
                            />
                            {item.name}
                          </a>
                        </dt>
                        <dd className="text-sm text-gray-500 dark:text-gray-500">
                          {item.description}
                        </dd>
                      </Card>
                    ))}
                  </dl>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </main>
      </div>
    </div>
  )
}
```


```example/page-shells-page-shell-04.tsx
"use client"

import { RiAddFill } from "@remixicon/react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/atom/Accordion"
import { Button } from "@/atom/Button"
import { Card } from "@/atom/Card"
import { Input } from "@/atom/Input"

const data = [
  //array-start
  {
    id: 1,
    name: "Report name",
    description: "Description",
    href: "#",
  },
  {
    id: 2,
    name: "Report name",
    description: "Description",
    href: "#",
  },
  {
    id: 3,
    name: "Report name",
    description: "Description",
    href: "#",
  },
  {
    id: 4,
    name: "Report name",
    description: "Description",
    href: "#",
  },
  {
    id: 5,
    name: "Report name",
    description: "Description",
    href: "#",
  },
  {
    id: 6,
    name: "Report name",
    description: "Description",
    href: "#",
  },
  //array-end
]

function ContentPlaceholder() {
  return (
    <div className="relative h-full overflow-hidden rounded bg-gray-50 dark:bg-gray-800">
      <svg
        className="absolute inset-0 h-full w-full stroke-gray-200 dark:stroke-gray-700"
        fill="none"
      >
        <defs>
          <pattern
            id="pattern-4"
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path>
          </pattern>
        </defs>
        <rect
          stroke="none"
          fill="url(#pattern-4)"
          width="100%"
          height="100%"
        ></rect>
      </svg>
    </div>
  )
}

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="p-4 sm:p-6 lg:p-8">
        <header>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
              Report
            </h3>
            <Button className="gap-1.5">
              <RiAddFill className="-ml-1 size-5 shrink-0" aria-hidden={true} />
              Add report
            </Button>
          </div>
          <Input
            type="search"
            className="mt-2 !h-9 w-full sm:mt-4 sm:max-w-sm"
            placeholder="Search reports..."
          />
        </header>
        <main>
          <Accordion
            type="multiple"
            defaultValue={["item-1"]}
            className="mt-6 space-y-4"
          >
            <AccordionItem
              value="item-1"
              className="rounded-md border !border-gray-200 !px-4 dark:!border-gray-800"
            >
              <AccordionTrigger>Recent (3)</AccordionTrigger>
              <AccordionContent>
                <dl className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {data.slice(0, 3).map((item) => (
                    <Card key={item.id} className="relative !p-2">
                      <div className="h-20">
                        <ContentPlaceholder />
                      </div>
                      <dt className="mt-2 text-sm font-medium text-gray-900 dark:text-gray-50">
                        <a href={item.href} className="focus:outline-none">
                          {/* Extend link to entire card */}
                          <span
                            className="absolute inset-0"
                            aria-hidden={true}
                          />
                          {item.name}
                        </a>
                      </dt>
                      <dd className="text-sm text-gray-500 dark:text-gray-500">
                        {item.description}
                      </dd>
                    </Card>
                  ))}
                </dl>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="rounded-md !border !border-gray-200 !px-4 dark:!border-gray-800"
            >
              <AccordionTrigger>All (6)</AccordionTrigger>
              <AccordionContent>
                <dl className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {data.map((item) => (
                    <Card key={item.id} className="relative !p-2">
                      <div className="h-20">
                        <ContentPlaceholder />
                      </div>
                      <dt className="mt-2 text-sm font-medium text-gray-900 dark:text-gray-50">
                        <a href={item.href} className="focus:outline-none">
                          <span
                            className="absolute inset-0"
                            aria-hidden={true}
                          />
                          {item.name}
                        </a>
                      </dt>
                      <dd className="text-sm text-gray-500 dark:text-gray-500">
                        {item.description}
                      </dd>
                    </Card>
                  ))}
                </dl>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </main>
      </div>
    </div>
  )
}
```


```example/page-shells-page-shell-06.tsx
"use client"

import {
  RiAddFill,
  RiArrowRightSLine,
  RiBookOpenLine,
  RiDatabase2Line,
} from "@remixicon/react"

import { Button } from "@/atom/Button"
import { Card } from "@/atom/Card"
import { SelectNative } from "@/atom/SelectNative"

const data = [
  //array-start
  {
    id: 1,
    name: "Report name",
    description: "Description",
    href: "#",
  },
  {
    id: 2,
    name: "Report name",
    description: "Description",
    href: "#",
  },
  {
    id: 3,
    name: "Report name",
    description: "Description",
    href: "#",
  },
  {
    id: 4,
    name: "Report name",
    description: "Description",
    href: "#",
  },
  {
    id: 5,
    name: "Report name",
    description: "Description",
    href: "#",
  },
  {
    id: 6,
    name: "Report name",
    description: "Description",
    href: "#",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="border-b border-gray-200 bg-gray-50 p-4 sm:p-6 lg:p-8 dark:border-gray-800 dark:bg-gray-950">
        <header>
          <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
            Report
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Explore and manage your reports
          </p>
          <div className="mt-8 w-full md:flex md:max-w-3xl md:items-stretch md:space-x-4">
            <Card className="w-full md:w-7/12">
              <div className="inline-flex items-center justify-center rounded-md border border-gray-200 p-2 dark:border-gray-800">
                <RiBookOpenLine
                  className="size-5 text-gray-700 dark:text-gray-300"
                  aria-hidden={true}
                />
              </div>
              <h3 className="mt-4 text-sm font-medium text-gray-900 dark:text-gray-50">
                <a href="#" className="focus:outline-none">
                  {/* Extend link to entire card */}
                  <span className="absolute inset-0" aria-hidden={true} />
                  Documentation
                </a>
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
              </p>
            </Card>
            <Card className="mt-4 w-full md:mt-0 md:w-5/12">
              <div className="inline-flex items-center justify-center rounded-md border border-gray-200 p-2 dark:border-gray-800">
                <RiDatabase2Line
                  className="size-5 text-gray-700 dark:text-gray-300"
                  aria-hidden={true}
                />
              </div>
              <h3 className="mt-4 text-sm font-medium text-gray-900 dark:text-gray-50">
                <a href="#" className="focus:outline-none">
                  {/* Extend link to entire card */}
                  <span className="absolute inset-0" aria-hidden={true} />
                  Models
                </a>
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Lorem ipsum dolor sit amet.
              </p>
            </Card>
          </div>
        </header>
      </div>
      <div>
        <div className="p-4 sm:p-6 lg:p-8">
          <main>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                Your reports
              </h2>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                <SelectNative placeholder="Sorty by">
                  <option value="1">Name</option>
                  <option value="2">Last edited</option>
                  <option value="3">Size</option>
                </SelectNative>
                <Button className="gap-1.5 !py-2">
                  <RiAddFill
                    className="-ml-1 size-5 shrink-0"
                    aria-hidden={true}
                  />
                  Add report
                </Button>
              </div>
            </div>
            <dl className="mt-6 space-y-4">
              {data.map((item) => (
                <Card
                  key={item.id}
                  className="!p-4 hover:bg-gray-50 hover:dark:bg-gray-900"
                >
                  {/* content placeholder */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 truncate">
                      <dt className="text-sm font-medium text-gray-900 dark:text-gray-50">
                        <a href="#" className="focus:outline-none">
                          {/* Extend link to entire card */}
                          <span
                            className="absolute inset-0"
                            aria-hidden={true}
                          />
                          {item.name}
                        </a>
                      </dt>
                      <dd className="truncate text-sm text-gray-500 dark:text-gray-500">
                        {item.description}
                      </dd>
                    </div>
                    <RiArrowRightSLine
                      className="size-5 shrink-0 text-gray-400 dark:text-gray-600"
                      aria-hidden={true}
                    />
                  </div>
                </Card>
              ))}
            </dl>
          </main>
        </div>
      </div>
    </div>
  )
}
```


