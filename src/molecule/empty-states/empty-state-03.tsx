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
