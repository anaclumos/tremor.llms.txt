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
