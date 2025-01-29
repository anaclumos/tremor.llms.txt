"use client"

import { RiExternalLinkLine } from "@remixicon/react"

import { Card } from "../../atoms/Card"
import { Tabs, TabsList, TabsTrigger } from "../../atoms/Tabs"

const usage = [
  //array-start
  {
    id: 1,
    resource: "Requests per day",
    usage: "145",
    maximum: "1,000",
    href: "#",
  },
  {
    id: 2,
    resource: "Storage per month",
    usage: "1.1",
    maximum: "10 GB",
    href: "#",
  },
  {
    id: 3,
    resource: "Members",
    usage: "10",
    maximum: "25",
    href: "#",
  },
  {
    id: 4,
    resource: "Availability",
    usage: "95.1",
    maximum: "99.9%",
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
      <Tabs defaultValue="tab2" className="mt-8">
        <TabsList>
          <TabsTrigger value="tab1">Account details</TabsTrigger>
          <TabsTrigger value="tab2">Workspaces</TabsTrigger>
          <TabsTrigger value="tab3">Billing</TabsTrigger>
        </TabsList>
        {/* Content below only for demo purpose placed outside of <Tab> component. Add <TabsContent> to make it functional and to add content for other tabs */}
        <h2 className="mt-8 font-semibold text-gray-900 dark:text-gray-50">
          Workspace usage
        </h2>
        <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
          Overview of all activities of your workspace. Learn more about our{" "}
          <a
            href="#"
            className="inline-flex items-center gap-1 text-blue-500 hover:underline hover:underline-offset-4 dark:text-blue-500"
          >
            upgrade options
            <RiExternalLinkLine className="size-4" aria-hidden={true} />
          </a>
        </p>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:max-w-3xl sm:grid-cols-2">
          {usage.map((item) => (
            <Card
              key={item.id}
              className="!p-4 hover:bg-gray-50 hover:dark:bg-gray-900"
            >
              <p className="text-sm text-gray-500 dark:text-gray-500">
                <a href={item.href} className="focus:outline-none">
                  {/* extend link to entire card */}
                  <span className="absolute inset-0" aria-hidden={true} />
                  {item.resource}
                </a>
              </p>
              <p className="mt-3 flex items-end">
                <span className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
                  {item.usage}
                </span>
                <span className="font-semibold text-gray-400 dark:text-gray-600">
                  /{item.maximum}
                </span>
              </p>
            </Card>
          ))}
        </div>
      </Tabs>
    </div>
  )
}
