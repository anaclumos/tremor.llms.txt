"use client"

import { RiExternalLinkLine } from "@remixicon/react"

import { Button } from "../../atom/Button"
import { Tabs, TabsList, TabsTrigger } from "../../atom/Tabs"

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
