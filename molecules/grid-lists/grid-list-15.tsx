"use client"

import { RiDatabase2Line, RiGroupLine, RiTimeLine } from "@remixicon/react"

import { Button } from "../../atoms/Button"
import { Card } from "../../atoms/Card"
import { Divider } from "../../atoms/Divider"
import { Input } from "../../atoms/Input"
import { Label } from "../../atoms/Label"
import { Switch } from "../../atoms/Switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../atoms/Tabs"

const data = [
  //array-start
  {
    region: "US-East",
    workspaces: [
      {
        name: "sales_by_day_api",
        status: "active",
        type: "Test workspace",
        database: "live_data",
        href: "#",
        capacity: [
          {
            label: "users",
            value: 34,
          },
          {
            label: "storage",
            value: "5/10GB",
          },
          {
            label: "lastEdited",
            value: "1d ago",
          },
        ],
      },
      {
        name: "testing_environment_2",
        status: "inactive",
        type: "API",
        database: "test_data",
        href: "#",
        capacity: [
          {
            label: "users",
            value: 28,
          },
          {
            label: "storage",
            value: "7.4/10GB",
          },
          {
            label: "lastEdited",
            value: "2d ago",
          },
        ],
      },
      {
        name: "training_environment",
        status: "active",
        type: "Test workspace",
        database: "live_data",
        href: "#",
        capacity: [
          {
            label: "users",
            value: 38,
          },
          {
            label: "storage",
            value: "3.2/10GB",
          },
          {
            label: "lastEdited",
            value: "4h ago",
          },
        ],
      },
      {
        name: "analytics_dashboard",
        status: "inactive",
        type: "API",
        database: "test_data",
        href: "#",
        capacity: [
          {
            label: "users",
            value: 34,
          },
          {
            label: "storage",
            value: "5/10GB",
          },
          {
            label: "lastEdited",
            value: "1d ago",
          },
        ],
      },
      {
        name: "managed_database_test",
        status: "active",
        type: "Test workspace",
        database: "live_data",
        href: "#",
        capacity: [
          {
            label: "users",
            value: 39,
          },
          {
            label: "storage",
            value: "5.9/10GB",
          },
          {
            label: "lastEdited",
            value: "7d ago",
          },
        ],
      },
    ],
  },
  {
    region: "US-West",
    workspaces: [
      {
        name: "testing_lab",
        status: "active",
        type: "Report",
        database: "live_data",
        href: "#",
        capacity: [
          {
            label: "users",
            value: 27,
          },
          {
            label: "storage",
            value: "5/10GB",
          },
          {
            label: "lastEdited",
            value: "1d ago",
          },
        ],
      },
      {
        name: "research_project_2",
        status: "inactive",
        type: "Report",
        database: "test_data",
        href: "#",
        capacity: [
          {
            label: "users",
            value: 45,
          },
          {
            label: "storage",
            value: "6.4/10GB",
          },
          {
            label: "lastEdited",
            value: "4d ago",
          },
        ],
      },
      {
        name: "supply_chain_api_month",
        status: "active",
        type: "API",
        database: "live_data",
        href: "#",
        capacity: [
          {
            label: "users",
            value: 41,
          },
          {
            label: "storage",
            value: "7.8/10GB",
          },
          {
            label: "lastEdited",
            value: "1d ago",
          },
        ],
      },
      {
        name: "test_environment_beta",
        status: "inactive",
        type: "Test workspace",
        database: "test_data",
        href: "#",
        capacity: [
          {
            label: "users",
            value: 39,
          },
          {
            label: "storage",
            value: "6.4/10GB",
          },
          {
            label: "lastEdited",
            value: "2h ago",
          },
        ],
      },
      {
        name: "private_workspace_test_api",
        status: "inactive",
        type: "Test workspace",
        database: "test_data",
        href: "#",
        capacity: [
          {
            label: "users",
            value: 31,
          },
          {
            label: "storage",
            value: "4.1/10GB",
          },
          {
            label: "lastEdited",
            value: "2d ago",
          },
        ],
      },
    ],
  },
  {
    region: "EU-Central-1",
    workspaces: [
      {
        name: "testing_lab",
        status: "active",
        type: "API",
        database: "live_data",
        href: "#",
        capacity: [
          {
            label: "users",
            value: 24,
          },
          {
            label: "storage",
            value: "6.1/10GB",
          },
          {
            label: "lastEdited",
            value: "1h ago",
          },
        ],
      },
      {
        name: "research_project_2",
        status: "inactive",
        type: "Report",
        database: "test_data",
        href: "#",
        capacity: [
          {
            label: "users",
            value: 12,
          },
          {
            label: "storage",
            value: "1.1/10GB",
          },
          {
            label: "lastEdited",
            value: "3d ago",
          },
        ],
      },
    ],
  },
  //array-end
] as const

const capacityIcon = {
  users: RiGroupLine,
  storage: RiDatabase2Line,
  lastEdited: RiTimeLine,
}

export default function Example() {
  return (
    <div className="obfuscate">
      <Card className="!p-0">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
            Workspaces
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
          </p>
        </div>
        <Tabs defaultValue={data[0].region}>
          <TabsList className="px-6">
            {data.map((category) => (
              <TabsTrigger
                key={category.region}
                value={category.region}
                className="group"
              >
                <span className="group-data-[state=active]:text-gray-900 group-data-[state=active]:dark:text-gray-50">
                  {category.region}
                </span>
                <span className="ml-2 hidden rounded-md bg-white px-2 py-1 text-xs font-semibold tabular-nums ring-1 ring-inset ring-gray-200 group-data-[state=active]:text-gray-700 sm:inline-flex dark:bg-[#090E1A] dark:ring-gray-800 group-data-[state=active]:dark:text-gray-300">
                  {category.workspaces.length}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
          <ul role="list">
            {data.map((category) => (
              <TabsContent
                key={category.region}
                value={category.region}
                className="space-y-4 px-6 pb-6 pt-6"
              >
                <div className="block md:flex md:items-center md:justify-between">
                  <Input
                    type="search"
                    placeholder="Search workspace..."
                    className="h-9 w-full rounded-md md:max-w-xs"
                  />
                  <div className="lg:flex lg:items-center lg:space-x-3">
                    <div className="hidden items-center space-x-2 lg:flex">
                      <Label
                        htmlFor="show-active-spaces"
                        className="whitespace-nowrap text-gray-500 dark:text-gray-500"
                      >
                        Show active spaces
                      </Label>
                      <Switch
                        id="show-active-spaces"
                        name="show-active-spaces"
                      />
                    </div>
                    <span className="hidden h-8 w-px bg-gray-200 lg:block dark:bg-gray-800" />
                    <Button className="mt-2 h-9 w-full sm:block md:mt-0 md:w-fit">
                      Add workspace
                    </Button>
                  </div>
                </div>
                <Divider />
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3"
                >
                  {category.workspaces.map((workspace) => (
                    <Card
                      key={workspace.name}
                      className="rounded-md p-4 dark:border-gray-800"
                      asChild
                    >
                      <li>
                        <div className="flex items-center space-x-2">
                          <h4 className="truncate text-sm font-medium text-gray-900 dark:text-gray-50">
                            <a
                              href={workspace.href}
                              className="focus:outline-none"
                            >
                              <span
                                className="absolute inset-0"
                                aria-hidden={true}
                              />
                              {workspace.name}
                            </a>
                          </h4>
                          {workspace.status === "active" ? (
                            <span className="inline-flex items-center rounded bg-emerald-100 px-1.5 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-400/10 dark:text-emerald-400">
                              active
                            </span>
                          ) : null}
                        </div>
                        <ul
                          role="list"
                          className="mt-3 text-sm text-gray-500 dark:text-gray-500"
                        >
                          <li className="flex items-center space-x-2 py-1">
                            <span>Type:</span>
                            <span className="font-medium text-gray-900 dark:text-gray-50">
                              {workspace.type}
                            </span>
                          </li>
                          <li className="flex items-center space-x-2 py-1">
                            <span>Database:</span>
                            <span className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200 dark:text-gray-50 dark:ring-gray-800">
                              {workspace.database === "test_data" ? (
                                <span
                                  className="size-2 shrink-0 rounded-sm bg-gray-400 dark:bg-gray-600"
                                  aria-hidden={true}
                                />
                              ) : (
                                <span
                                  className="size-2 shrink-0 rounded-sm bg-blue-500 dark:bg-blue-500"
                                  aria-hidden={true}
                                />
                              )}

                              {workspace.database}
                            </span>
                          </li>
                        </ul>
                        <div className="mt-5 flex flex-wrap gap-4">
                          {workspace.capacity.map((item) => {
                            const Icon = capacityIcon[item.label]
                            return (
                              <div
                                key={item.label}
                                className="flex items-center space-x-1.5"
                              >
                                <Icon
                                  className="size-4 text-gray-400 dark:text-gray-600"
                                  aria-hidden={true}
                                />
                                <span className="text-xs font-medium text-gray-500 dark:text-gray-500">
                                  {item.value}
                                </span>
                              </div>
                            )
                          })}
                        </div>
                      </li>
                    </Card>
                  ))}
                </ul>
              </TabsContent>
            ))}
          </ul>
        </Tabs>
      </Card>
    </div>
  )
}
