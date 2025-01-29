"use client"

import React from "react"
import { RiCheckLine } from "@remixicon/react"

import { Button } from "../../atom/Button"
import { Divider } from "../../atom/Divider"
import { Input } from "../../atom/Input"
import { Label } from "../../atom/Label"
import {
  RadioCardGroup,
  RadioCardIndicator,
  RadioCardItem,
} from "../../atom/RadioCardGroup"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../atom/Select"

const workspaces = [
  //array-start
  {
    id: 1,
    title: "Starter",
    description: "Up to 10,000 requests per day.",
    users: "Free",
    features: [
      "Community support",
      "50 GB storage",
      "Integrated application builder",
    ],
  },
  {
    id: 2,
    title: "Premium",
    description: "500,000 requests per day¹",
    users: "$900/month²",
    features: [
      "Slack Connect support",
      "100 GB storage",
      "Managed workspace",
      "Integrated application builder",
    ],
  },
  {
    id: 3,
    title: "Enterprise",
    description: "Based on your specific needs",
    users: "Custom",
    features: [
      "Priority Support with Slack Connect",
      "Unlimited storage",
      "Integrated application builder",
      "Volume discount",
    ],
  },
  //array-end
]

const PackageDetails = ({ workspaceId }: { workspaceId: number }) => {
  const workspace = workspaces.find((ws) => ws.id === workspaceId)

  return (
    <div className="obfuscate">
      <p className="mt-6 text-sm font-medium text-gray-900 dark:text-gray-50">
        Includes:
      </p>
      <ul
        role="list"
        className="mt-2 space-y-2 divide-gray-200 text-sm dark:divide-gray-800"
      >
        {workspace?.features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-2">
            <RiCheckLine
              className="size-5 text-gray-500 dark:text-gray-500"
              aria-hidden={true}
            />
            <span className="text-sm text-gray-900 dark:text-gray-50">
              {feature}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-xs text-gray-500 dark:text-gray-500">
        <sup>1</sup> $0.5/10K requests after limit reach.
      </p>
      <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
        <sup>2</sup> No credit card required for registration.
      </p>
    </div>
  )
}

export default function Example() {
  const [selectedWorkspace, setSelectedWorkspace] = React.useState(1)

  return (
    <div className="obfuscate">
      <div className="sm:mx-auto sm:max-w-2xl">
        <h3 className="mt-6 text-lg font-semibold text-gray-900 dark:text-gray-50">
          Apply for early access
        </h3>
        <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
        </p>
        <form className="mt-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
            <div className="col-span-full sm:col-span-3">
              <Label htmlFor="first-name" className="font-medium">
                First name
                <span className="text-red-500 dark:text-red-500">*</span>
              </Label>
              <Input
                type="text"
                id="first-name"
                name="first-name"
                autoComplete="given-name"
                required
                placeholder="Emma"
                className="mt-2"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <Label htmlFor="last-name" className="font-medium">
                Last name
              </Label>
              <Input
                type="text"
                id="last-name"
                name="last-name"
                autoComplete="family-name"
                placeholder="Crown"
                className="mt-2"
              />
            </div>
            <div className="col-span-full">
              <Label htmlFor="email" className="font-medium">
                Work email
                <span className="text-red-500 dark:text-red-500">*</span>
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                required
                placeholder="emma@company.com"
                className="mt-2"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <Label htmlFor="company" className="font-medium">
                Company
              </Label>
              <Input
                type="text"
                id="company"
                name="company"
                autoComplete="organization"
                placeholder="Company, Inc."
                className="mt-2"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <Label htmlFor="size" className="font-medium">
                Company size (employees)
              </Label>
              <Select>
                <SelectTrigger id="size" name="size" className="mt-2">
                  <SelectValue placeholder="Select..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-9">1-9</SelectItem>
                  <SelectItem value="10-50">10-50</SelectItem>
                  <SelectItem value="50-250">50-250</SelectItem>
                  <SelectItem value="250+">250+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Divider className="col-span-full" />
            <div className="col-span-full">
              <RadioCardGroup
                name="platform"
                defaultValue={workspaces[0].title}
              >
                <p className="text-sm font-semibold text-gray-900 dark:text-gray-50">
                  Select a workspace package
                </p>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {workspaces.map((item) => (
                    <RadioCardItem
                      key={item.id}
                      value={item.title}
                      id={item.title}
                      className="flex items-start justify-between"
                      onClick={() => setSelectedWorkspace(item.id)}
                    >
                      <div className="flex w-full flex-col justify-between">
                        <div>
                          <Label
                            className="font-medium"
                            htmlFor={item.title}
                            aria-describedby={`${item.title}-description`}
                          >
                            {item.title}
                          </Label>
                          <p
                            id={item.title}
                            className="mt-1 text-sm text-gray-500 dark:text-gray-500"
                          >
                            {item.description}
                          </p>
                        </div>
                        <span className="mt-6 text-sm font-medium text-gray-900 dark:text-gray-50">
                          {item.users}
                        </span>
                      </div>
                      <RadioCardIndicator />
                    </RadioCardItem>
                  ))}
                </div>
                <PackageDetails workspaceId={selectedWorkspace} />
              </RadioCardGroup>
            </div>
          </div>
          <Divider />
          <div className="flex items-center justify-end space-x-4">
            <Button variant="secondary">Go back</Button>
            <Button type="submit">Apply</Button>
          </div>
        </form>
      </div>
    </div>
  )
}
