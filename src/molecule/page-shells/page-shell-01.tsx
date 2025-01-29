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
