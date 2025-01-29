"use client"

import {
  RiAddFill,
  RiArrowRightSLine,
  RiBookOpenLine,
  RiDatabase2Line,
} from "@remixicon/react"

import { Button } from "../../atoms/Button"
import { Card } from "../../atoms/Card"
import { SelectNative } from "../../atoms/SelectNative"

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
