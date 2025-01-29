"use client"

import {
  RiCheckLine,
  RiLock2Fill,
  RiNotification2Line,
  RiSoundModuleLine,
} from "@remixicon/react"

import { cx } from "@/lib/utils"

import { Button } from "../../atoms/Button"
import { Card } from "../../atoms/Card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../atoms/Tabs"

const steps = [
  //array-start
  {
    id: 1,
    type: "done",
    title: "Created Workspace",
    description:
      "You successfully created your first workspace in privacy mode",
    activityTime: "3d ago",
  },
  {
    id: 2,
    type: "done",
    title: "Connected database",
    description: "Database connected to MySQL test database",
    activityTime: "2d ago",
  },
  {
    id: 3,
    type: "done",
    title: "Add payment method",
    description: "Payment method for monthly billing added",
    activityTime: "31min ago",
  },
  {
    id: 4,
    type: "in progress",
    title: "Audit trails",
    description: "Identifying security issues or unauthorized policy settings",
    activityTime: "Running now...",
  },
  {
    id: 5,
    type: "open",
    title: "Invite team members",
    description: "Add team members to workspace",
    activityTime: "Upcoming",
  },
  //array-end
]

const details = [
  { name: "Name", value: "test_workspace" },
  { name: "Storage used", value: "0.25/10GB" },
  { name: "Payment cycle", value: "1st day of month" },
]

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="sm:mx-auto sm:max-w-xl">
        <Card className="overflow-hidden !p-0">
          <div className="flex flex-col justify-between space-y-10 border-b border-gray-200 bg-gray-50 px-6 pb-4 pt-6 dark:border-gray-900 dark:bg-[#090E1A]">
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-50">
                Workspace setup
              </h3>
              <p className="text-sm/6 text-gray-600 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <img
                className="inline-block size-10 rounded-full"
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1887&auto=format&fit=facearea&&facepad=2&w=256&h=256"
                alt=""
              />
              <div>
                <p className="text-sm font-medium text-blue-500 dark:text-blue-500">
                  Mike Miller
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  mike.miller@example.com
                </p>
              </div>
            </div>
          </div>
          <Tabs defaultValue="tab1" className="p-6">
            <TabsList className="w-full" variant="solid">
              <TabsTrigger value="tab1" className="w-full">
                Updates
              </TabsTrigger>
              <TabsTrigger value="tab2" className="w-full">
                Details
              </TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
              <ul role="list" className="mt-6 space-y-6">
                {steps.map((step, stepindex) => (
                  <li key={step.id} className="relative flex gap-x-3">
                    <div
                      className={cx(
                        stepindex === steps.length - 1 ? "h-6" : "-bottom-6",
                        "absolute left-0 top-0 flex w-6 justify-center",
                      )}
                    >
                      <span
                        className="w-px bg-gray-200 dark:bg-gray-700"
                        aria-hidden={true}
                      />
                    </div>
                    <div className="flex items-start space-x-2.5">
                      <div className="relative flex size-6 flex-none items-center justify-center bg-white dark:bg-[#090E1A]">
                        {step.type === "done" ? (
                          <RiCheckLine
                            className="size-5 text-blue-500 dark:text-blue-500"
                            aria-hidden={true}
                          />
                        ) : step.type === "in progress" ? (
                          <div
                            className="size-2.5 rounded-full bg-blue-500 ring-4 ring-white dark:bg-blue-500 dark:ring-[#090E1A]"
                            aria-hidden={true}
                          />
                        ) : (
                          <div
                            className="size-3 rounded-full border border-gray-200 bg-white ring-4 ring-white dark:border-gray-800 dark:bg-[#090E1A] dark:ring-[#090E1A]"
                            aria-hidden={true}
                          />
                        )}
                      </div>
                      <div>
                        <p className="mt-0.5 text-sm font-medium text-gray-900 dark:text-gray-50">
                          {step.title}{" "}
                          <span className="font-normal text-gray-400 dark:text-gray-600">
                            &#8729; {step.activityTime}
                          </span>
                        </p>
                        <p className="mt-0.5 text-sm/6 text-gray-500 dark:text-gray-500">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-6 h-10 w-full">
                <a href="#" className="inline-flex items-center gap-1.5">
                  <RiNotification2Line
                    className="-ml-0.5 size-5 shrink-0"
                    aria-hidden={true}
                  />
                  Notify me when completed
                </a>
              </Button>
            </TabsContent>
            <TabsContent value="tab2">
              <h4 className="mt-6 text-xs font-medium uppercase tracking-widest text-gray-400 dark:text-gray-600">
                General
              </h4>
              <ul
                role="list"
                className="mt-3 divide-y divide-gray-200 rounded-md bg-gray-50 text-sm text-gray-500 dark:divide-gray-700 dark:bg-gray-800 dark:text-gray-400"
              >
                {details.map((item) => (
                  <li
                    key={item.name}
                    className="flex h-14 items-center justify-between px-4"
                  >
                    <span>{item.name}</span>
                    <span className="font-medium text-gray-900 dark:text-gray-50">
                      {item.value}
                    </span>
                  </li>
                ))}
              </ul>
              <h4 className="mt-6 text-xs font-medium uppercase tracking-widest text-gray-400 dark:text-gray-600">
                Privacy settings
              </h4>
              <ul
                role="list"
                className="mt-3 divide-y divide-gray-200 rounded-md bg-gray-50 text-sm text-gray-500 dark:divide-gray-700 dark:bg-gray-800 dark:text-gray-400"
              >
                <li className="flex h-14 items-center justify-between px-4">
                  <span>Users</span>
                  <div className="flex -space-x-0.5 overflow-hidden">
                    <span
                      className="relative inline-flex size-5 items-center justify-center rounded-full bg-violet-500 text-xs text-white ring-2 ring-gray-50 dark:ring-gray-800"
                      aria-hidden={true}
                    >
                      A
                    </span>
                    <span
                      className="relative inline-flex size-5 items-center justify-center rounded-full bg-fuchsia-500 text-xs text-white ring-2 ring-gray-50 dark:ring-gray-800"
                      aria-hidden={true}
                    >
                      D
                    </span>
                    <span
                      className="relative inline-flex size-5 items-center justify-center rounded-full bg-cyan-500 text-xs text-white ring-2 ring-gray-50 dark:ring-gray-800"
                      aria-hidden={true}
                    >
                      B
                    </span>
                  </div>
                </li>
                <li className="flex h-14 items-center justify-between px-4">
                  <span className="text-gray-500 dark:text-gray-400">
                    Access
                  </span>
                  <span className="inline-flex items-center gap-x-1.5 rounded-md bg-white px-2 py-1.5 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200 dark:bg-gray-800 dark:text-gray-50 dark:ring-gray-700">
                    <RiLock2Fill
                      className="size-4 text-gray-400 dark:text-gray-600"
                      aria-hidden={true}
                    />
                    Private
                  </span>
                </li>
              </ul>
              <Button asChild variant="secondary" className="mt-4 h-10 w-full">
                <a href="#" className="inline-flex items-center gap-1.5">
                  <RiSoundModuleLine
                    className="-ml-0.5 size-5 shrink-0"
                    aria-hidden={true}
                  />
                  Go to workspace settings
                </a>
              </Button>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  )
}
