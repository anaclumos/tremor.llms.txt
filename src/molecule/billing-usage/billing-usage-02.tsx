"use client"

import { RiExternalLinkLine, RiFileLine } from "@remixicon/react"

import { Button } from "../../atom/Button"
import { Tabs, TabsList, TabsTrigger } from "../../atom/Tabs"

const bills = [
  //array-start
  {
    id: 1,
    month: "Sept 23",
    status: "unpaid",
    href: "#",
  },
  {
    id: 2,
    month: "Aug 23",
    status: "paid",
    href: "#",
  },
  {
    id: 3,
    month: "Jul 23",
    status: "paid",
    href: "#",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <h1 className="text-lg font-bold text-gray-900 dark:text-gray-50">
        Settings
      </h1>
      <p className="mt-2 text-sm/6 text-gray-500 dark:text-gray-500">
        Manage your personal details, workspace governance and notifications.
      </p>
      <Tabs defaultValue="tab3" className="mt-8">
        <TabsList>
          <TabsTrigger value="tab1">Account details</TabsTrigger>
          <TabsTrigger value="tab2">Workspaces</TabsTrigger>
          <TabsTrigger value="tab3">Billing</TabsTrigger>
        </TabsList>
        {/* Content below only for demo purpose placed outside of <Tab> component. Add <TabsContent> to make it functional and to add content for other tabs */}
        <div className="mt-8 sm:max-w-3xl">
          <div className="rounded-md bg-gray-50 p-6 ring-1 ring-inset ring-gray-200 dark:bg-gray-900 dark:ring-gray-800">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-50">
              Want to upgrade?
            </h4>
            <p className="mt-2 text-sm/6 text-gray-500 dark:text-gray-500">
              Elevate your workspace and boost productivity with premium
              features. See our pro plans and upgrade today.
            </p>
            <div className="mt-6 flex items-center space-x-2">
              <Button asChild>
                <a href="#">Pro plans</a>
              </Button>
              <Button variant="secondary">Dismiss</Button>
            </div>
          </div>
          <div className="mt-10">
            <h2 className="font-semibold text-gray-900 dark:text-gray-50">
              Payment history
            </h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
              See previous and upcoming payments
            </p>
            <ul
              role="list"
              className="mt-4 divide-y divide-gray-200 text-sm text-gray-500 dark:divide-gray-800 dark:text-gray-500"
            >
              {bills.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between px-2 py-2.5"
                >
                  <div className="flex items-center space-x-3">
                    <RiFileLine
                      className="size-5 text-gray-500 dark:text-gray-500"
                      aria-hidden={true}
                    />
                    <span className="text-gray-700 dark:text-gray-300">
                      {item.month}
                    </span>
                  </div>
                  <a
                    className="font-semibold text-blue-500 hover:text-blue-600 dark:text-blue-500 hover:dark:text-blue-600"
                    href={item.href}
                  >
                    Receipt
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-6 text-sm/6 text-gray-500 dark:text-gray-500">
            Need help? Reach out to our{" "}
            <a
              href="#"
              className="inline-flex items-center gap-1 text-blue-500 hover:underline hover:underline-offset-4 dark:text-blue-500"
            >
              help desk
              <RiExternalLinkLine className="size-4" aria-hidden={true} />
            </a>{" "}
            upgrade options if you need assistance.
          </p>
        </div>
      </Tabs>
    </div>
  )
}
