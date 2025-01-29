"use client"

import { Button } from "@/atom/Button"
import { Divider } from "@/atom/Divider"
import { ProgressBar } from "@/atom/ProgressBar"
import { Tabs, TabsList, TabsTrigger } from "@/atom/Tabs"

export default function Example() {
  return (
    <div className="obfuscate">
      <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
        Billing
      </h1>
      <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
        Update your payment information or switch plans according to your needs
      </p>
      <Tabs defaultValue="tab3" className="mt-8">
        <TabsList>
          <TabsTrigger value="tab1">Account details</TabsTrigger>
          <TabsTrigger value="tab2">Workspaces</TabsTrigger>
          <TabsTrigger value="tab3">Billing</TabsTrigger>
        </TabsList>
        {/* Content below only for demo purpose placed outside of <Tab> component. Add <TabsContent> to make it functional and to add content for other tabs */}
        <div className="mt-8 sm:mx-auto sm:max-w-7xl">
          <h2 className="font-semibold text-gray-900 dark:text-gray-50">
            Plan
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <p className="flex items-center space-x-2">
                <span className="text-sm/8 font-medium text-gray-900 dark:text-gray-50">
                  Team
                </span>
                <span className="inline-flex items-center self-center rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                  Annual
                </span>
              </p>
              <p className="mt-2 text-sm font-semibold text-gray-900 dark:text-gray-50">
                $100/month <span className="font-normal">(incl. VAT)</span>
              </p>
              <Button asChild variant="secondary" className="mt-6">
                <a href="#">Manage plans</a>
              </Button>
            </div>
            <div>
              <p className="text-sm/8 font-medium text-gray-900 dark:text-gray-50">
                Billing period
              </p>
              <p className="mt-2 text-sm font-semibold text-gray-900 dark:text-gray-50">
                Monthly <span className="font-normal">(renews 20/08/23)</span>
              </p>
              <Button asChild variant="secondary" className="mt-6">
                <a href="#">Change billing period</a>
              </Button>
            </div>
          </div>
          <Divider />
          <h3 className="font-semibold text-gray-900 dark:text-gray-50">
            Seats
          </h3>
          <p className="mt-6 text-sm font-medium text-gray-900 dark:text-gray-50">
            Remaining seats
          </p>
          <ProgressBar value={20} className="mt-2" />
          <div className="mt-3 flex items-center justify-between">
            <p className="flex items-center space-x-2">
              <span className="rounded-lg bg-gray-100 px-2 py-1 text-xs font-medium text-gray-900 dark:bg-gray-800 dark:text-gray-50">
                5
              </span>{" "}
              <span className="text-sm text-gray-500 dark:text-gray-500">
                of 25 seats used
              </span>
            </p>
            <Button asChild variant="secondary">
              <a href="#">Manage seats</a>
            </Button>
          </div>
        </div>
      </Tabs>
    </div>
  )
}
