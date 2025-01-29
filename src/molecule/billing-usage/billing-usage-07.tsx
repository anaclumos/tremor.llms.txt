"use client"

import { RiExternalLinkLine } from "@remixicon/react"
import React from "react"

import { cx } from "@/lib/utils"

import { Button } from "../../atom/Button"
import { Card } from "../../atom/Card"
import { Divider } from "../../atom/Divider"
import { Input } from "../../atom/Input"
import { Label } from "../../atom/Label"
import { ProgressCircle } from "../../atom/ProgressCircle"
import { Switch } from "../../atom/Switch"

const data = [
  //array-start
  {
    name: "Team seats",
    amount: "$25",
    percentage: 75,
  },
  {
    name: "Storage",
    amount: "$120",
    percentage: 75,
  },
  {
    name: "Requests",
    amount: "$135",
    percentage: 25,
  },
  //array-end
]

export default function Example() {
  const [isSpendMgmtEnabled, setIsSpendMgmtEnabled] = React.useState(true)
  return (
    <div className="obfuscate">
      <div className="sm:mx-auto sm:max-w-2xl">
        <h1 className="text-lg font-bold text-gray-900 dark:text-gray-50">
          General
        </h1>
        <p className="mt-2 text-sm/6 text-gray-500 dark:text-gray-500">
          Manage your workspace, team members and notifications.
        </p>
        <h4 className="mt-8 font-semibold text-gray-900 dark:text-gray-50">
          Spend management
        </h4>
        <p className="mt-2 text-sm/6 text-gray-500 dark:text-gray-500">
          Set a spending limit for usage-based features and receive notification
          when the limit is reached in a billing cycle.{" "}
          <a
            href="#"
            className="inline-flex items-center gap-1 text-blue-500 hover:underline hover:underline-offset-4 dark:text-blue-500"
          >
            Learn more
            <RiExternalLinkLine className="size-4" aria-hidden={true} />
          </a>
        </p>
        <div className="mt-8 max-w-3xl">
          <form>
            <Card>
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <ProgressCircle
                    value={isSpendMgmtEnabled ? 62.2 : 0}
                    radius={20}
                    strokeWidth={4.5}
                  />
                  <div>
                    {isSpendMgmtEnabled ? (
                      <>
                        <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
                          &#36;280 / 350 (62.2&#37;)
                        </p>
                        <Label
                          htmlFor="spend-mgmt"
                          className="text-gray-500 dark:text-gray-500"
                        >
                          Spend management enabled
                        </Label>
                      </>
                    ) : (
                      <>
                        <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
                          &#36;0 / 0 (0&#37;)
                        </p>
                        <Label
                          htmlFor="spend-mgmt"
                          className="text-gray-500 dark:text-gray-500"
                        >
                          Spend management disabled
                        </Label>
                      </>
                    )}
                  </div>
                </div>
                <Switch
                  id="spend-mgmt"
                  name="spend-mgmt"
                  checked={isSpendMgmtEnabled}
                  onCheckedChange={() => {
                    setIsSpendMgmtEnabled(!isSpendMgmtEnabled)
                  }}
                />
              </div>
              <div
                className={cx(isSpendMgmtEnabled ? "h-fit" : "hidden")}
                style={{
                  transitionDuration: "300ms",
                  animationFillMode: "backwards",
                }}
              >
                <div className="mt-6 grid grid-cols-1 gap-4 rounded-md bg-gray-50 py-4 md:grid-cols-3 md:divide-x md:divide-gray-200 dark:bg-gray-900 md:dark:divide-gray-800">
                  {data.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between px-4"
                    >
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-500">
                          {item.name}
                        </p>
                        <p className="mt-1 text-lg font-semibold text-gray-900 dark:text-gray-50">
                          {item.amount}{" "}
                          <span className="text-xs font-normal text-gray-700 dark:text-gray-300">
                            ({item.percentage}&#37;)
                          </span>
                        </p>
                      </div>
                      <ProgressCircle
                        value={item.percentage}
                        radius={20}
                        strokeWidth={4.5}
                        variant="neutral"
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div className="md:col-span-1">
                    <Label htmlFor="hard-cap" className="font-medium">
                      Set amount ($)
                    </Label>
                    <Input
                      id="hard-cap"
                      name="hard-cap"
                      defaultValue={350}
                      type="number"
                      className="mt-2"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="email" className="font-medium">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      placeholder="admin@company.com"
                      type="email"
                      className="mt-2"
                    />
                  </div>
                </div>
                <Divider />
                <div className="flex justify-end">
                  <Button type="submit">Update</Button>
                </div>
              </div>
            </Card>
          </form>
        </div>
      </div>
    </div>
  )
}
