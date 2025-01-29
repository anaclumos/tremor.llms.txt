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
