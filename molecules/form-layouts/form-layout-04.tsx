"use client"

import { Button } from "../../atoms/Button"
import { Divider } from "../../atoms/Divider"
import { Input } from "../../atoms/Input"
import { Label } from "../../atoms/Label"
import {
  RadioCardGroup,
  RadioCardIndicator,
  RadioCardItem,
} from "../../atoms/RadioCardGroup"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../atoms/Select"

const workspaces = [
  //array-start
  {
    id: 1,
    title: "Starter",
    description: "Up to 10,000 requests per day.",
    users: "Free",
  },
  {
    id: 2,
    title: "Premium",
    description: "500,000 requests per day¹",
    users: "$900/month²",
  },
  {
    id: 3,
    title: "Enterprise",
    description: "Based on your specific needs",
    users: "Custom",
  },
  //array-end
]

export default function Example() {
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
                <p className="mt-6 text-xs text-gray-500 dark:text-gray-500">
                  <sup>1</sup> $0.5/10K requests after limit reach.
                </p>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
                  <sup>2</sup> No credit card required for registration.
                </p>
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
