"use client"

import {
  RiCheckboxCircleFill,
  RiCheckLine,
  RiExternalLinkLine,
} from "@remixicon/react"

import { Badge } from "../../atom/Badge"
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

const highlights = [
  //array-start
  {
    id: 1,
    feature: "Used by 50% of S&P 500 companies",
  },
  {
    id: 2,
    feature: "Based on open-source tech",
  },
  {
    id: 3,
    feature: "Largest developer community",
  },
  //array-end
]

const plans = [
  //array-start
  {
    name: "Hobby",
    features: [
      { feature: "1,000 requests per day" },
      { feature: "3 environments" },
      { feature: "Up to 10 user seats" },
      { feature: "Community support" },
    ],
    price: "$40",
    href: "#",
    isRecommended: false,
  },
  {
    name: "Premium",
    features: [
      { feature: "100,000 requests per day" },
      { feature: "10 environments" },
      { feature: "Up to 50 user seats" },
      { feature: "Premium Slack support" },
    ],
    price: "$80",
    href: "#",
    isRecommended: true,
  },
  {
    name: "Enterprise",
    features: [
      { feature: "Unlimited requests per day" },
      { feature: "Unlimited environments and user seats" },
      { feature: "SAML Single-Sign-On (SSO)" },
      { feature: "99.99% SLA" },
      { feature: "Volume discount" },
    ],
    price: "$160",
    href: "#",
    isRecommended: false,
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <form className="sm:mx-auto sm:max-w-7xl">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
          Create new workspace
        </h3>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="mt-6 lg:col-span-7">
            <div className="space-y-4 md:space-y-6">
              <div className="md:flex md:items-center md:space-x-4">
                <div>
                  <Label htmlFor="organization" className="font-medium">
                    Organization
                  </Label>
                  <Select>
                    <SelectTrigger
                      id="organization"
                      name="organization"
                      className="mt-2 w-full md:w-36"
                    >
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Acme, Inc.</SelectItem>
                      <SelectItem value="2">Hero Labs</SelectItem>
                      <SelectItem value="3">Rose Holding</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="mt-4 md:mt-0 md:w-full">
                  <Label htmlFor="workspace" className="font-medium">
                    Workspace name
                  </Label>
                  <Input
                    type="text"
                    id="workspace"
                    name="workspace"
                    placeholder="Type..."
                    className="mt-2"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="region" className="font-medium">
                  Region
                </Label>
                <Select defaultValue="1">
                  <SelectTrigger id="region" name="Region" className="mt-2">
                    <SelectValue placeholder="Select..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">EU-West (Frankfurt)</SelectItem>
                    <SelectItem value="2">US-East (Boston)</SelectItem>
                    <SelectItem value="3">US-West (San Francisco)</SelectItem>
                  </SelectContent>
                </Select>
                <p className="mt-2 text-xs text-gray-500 dark:text-gray-500">
                  For best performance, choose a region closest to your
                  operations
                </p>
              </div>
            </div>
            <h4 className="mt-14 text-sm font-medium text-gray-900 dark:text-gray-50">
              Plan type<span className="text-red-500 dark:text-red-500">*</span>
            </h4>
            <RadioCardGroup
              name="plan"
              defaultValue={plans[0].name}
              className="mt-4"
            >
              <div className="space-y-4">
                {plans.map((plan) => (
                  <RadioCardItem
                    key={plan.name}
                    value={plan.name}
                    id={plan.name}
                    className="rounded-lg !border-gray-200 !p-0"
                  >
                    <div className="flex items-start space-x-4 p-6">
                      <RadioCardIndicator className="mt-1" />
                      <div className="w-full">
                        <p className="leading-0">
                          <Label htmlFor={plan.name} className="font-semibold">
                            {plan.name}
                          </Label>
                          {plan.isRecommended ? (
                            <Badge variant="neutral" className="ml-1.5">
                              recommended
                            </Badge>
                          ) : null}
                        </p>
                        <ul
                          role="list"
                          className="mt-3 divide-y divide-gray-200 text-sm text-gray-600 dark:divide-gray-800 dark:text-gray-400"
                        >
                          {plan.features.map((feature, index) => (
                            <li
                              key={index}
                              className="flex items-center gap-2 py-2"
                            >
                              <RiCheckLine
                                className="size-4 text-gray-400 dark:text-gray-600"
                                aria-hidden={true}
                              />
                              {feature.feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="flex items-center justify-between rounded-b-lg border-t border-gray-200 bg-gray-50 px-6 py-3 dark:border-gray-900 dark:bg-gray-900">
                      <a
                        href={plan.href}
                        className="inline-flex items-center gap-1 text-sm text-blue-500 hover:underline hover:underline-offset-4 dark:text-blue-500"
                      >
                        Learn more
                        <RiExternalLinkLine
                          className="size-4"
                          aria-hidden={true}
                        />
                      </a>
                      <div>
                        <span className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                          {plan.price}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-500">
                          /mo
                        </span>
                      </div>
                    </div>
                  </RadioCardItem>
                ))}
              </div>
            </RadioCardGroup>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-md bg-gray-50 p-6 ring-1 ring-inset ring-gray-200 dark:bg-gray-900 dark:ring-gray-800">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-50">
                Which plan best fits your needs?
              </h4>
              <p className="mt-2 text-sm/6 text-gray-600 dark:text-gray-400">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </p>
              <ul
                role="list"
                className="mt-4 text-sm text-gray-700 dark:text-gray-300"
              >
                {highlights.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center gap-x-2 py-2.5"
                  >
                    <RiCheckboxCircleFill
                      className="size-5 text-blue-500 dark:text-blue-500"
                      aria-hidden={true}
                    />
                    <span className="truncate">{item.feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="mt-4 inline-flex items-center gap-1 text-sm text-blue-500 dark:text-blue-500"
              >
                Learn more about our workspace plans
                <RiExternalLinkLine className="size-4" aria-hidden={true} />
              </a>
            </div>
          </div>
        </div>
        <Divider className="!my-10" />
        <div className="flex items-center justify-end space-x-4">
          <Button variant="secondary">Cancel</Button>
          <Button type="submit">Update</Button>
        </div>
      </form>
    </div>
  )
}
