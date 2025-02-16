```example/form-layouts-form-layout-06.tsx
"use client"

import {
  RiCheckboxCircleFill,
  RiCheckLine,
  RiExternalLinkLine,
} from "@remixicon/react"

import { Badge } from "@/atom/Badge"
import { Button } from "@/atom/Button"
import { Divider } from "@/atom/Divider"
import { Input } from "@/atom/Input"
import { Label } from "@/atom/Label"
import {
  RadioCardGroup,
  RadioCardIndicator,
  RadioCardItem,
} from "@/atom/RadioCardGroup"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/atom/Select"

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
            <div className="rounded-md bg-gray-50 p-6 ring-1 ring-gray-200 ring-inset dark:bg-gray-900 dark:ring-gray-800">
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
```


```example/form-layouts-form-layout-05.tsx
"use client"

import React from "react"
import { RiCheckLine } from "@remixicon/react"

import { Button } from "@/atom/Button"
import { Divider } from "@/atom/Divider"
import { Input } from "@/atom/Input"
import { Label } from "@/atom/Label"
import {
  RadioCardGroup,
  RadioCardIndicator,
  RadioCardItem,
} from "@/atom/RadioCardGroup"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/atom/Select"

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
```


```example/form-layouts-form-layout-04.tsx
"use client"

import { Button } from "@/atom/Button"
import { Divider } from "@/atom/Divider"
import { Input } from "@/atom/Input"
import { Label } from "@/atom/Label"
import {
  RadioCardGroup,
  RadioCardIndicator,
  RadioCardItem,
} from "@/atom/RadioCardGroup"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/atom/Select"

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
```


```example/form-layouts-form-layout-01.tsx
"use client"

import { Button } from "@/atom/Button"
import { Divider } from "@/atom/Divider"
import { Input } from "@/atom/Input"
import { Label } from "@/atom/Label"

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="sm:mx-auto sm:max-w-2xl">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
          Register to workspace
        </h3>
        <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
          Take a few moments to register for your company's workspace
        </p>
        <form action="#" method="post" className="mt-8">
          <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">
            <div className="col-span-full sm:col-span-3">
              <Label htmlFor="first-name" className="font-medium">
                First name
                <span className="text-red-500 dark:text-red-500">*</span>
              </Label>
              <Input
                type="text"
                id="first-name"
                name="first-name"
                autoComplete="first-name"
                placeholder="First name"
                className="mt-2"
                required
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <Label htmlFor="last-name" className="font-medium">
                Last name
                <span className="text-red-500 dark:text-red-500">*</span>
              </Label>
              <Input
                type="text"
                id="last-name"
                name="last-name"
                autoComplete="last-name"
                placeholder="Last name"
                className="mt-2"
                required
              />
            </div>
            <div className="col-span-full">
              <Label htmlFor="email" className="font-medium">
                Email
                <span className="text-red-500 dark:text-red-500">*</span>
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                placeholder="Email"
                className="mt-2"
                required
              />
            </div>
            <div className="col-span-full">
              <Label htmlFor="address" className="font-medium">
                Address
              </Label>
              <Input
                type="text"
                id="address"
                name="address"
                autoComplete="street-address"
                placeholder="Address"
                className="mt-2"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <Label htmlFor="city" className="font-medium">
                City
              </Label>
              <Input
                type="text"
                id="city"
                name="city"
                autoComplete="address-level2"
                placeholder="City"
                className="mt-2"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <Label htmlFor="state" className="font-medium">
                State
              </Label>
              <Input
                type="text"
                id="state"
                name="state"
                autoComplete="address-level1"
                placeholder="State"
                className="mt-2"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <Label htmlFor="postal-code" className="font-medium">
                Postal code
              </Label>
              <Input
                id="postal-code"
                name="postal-code"
                autoComplete="postal-code"
                placeholder="Postal code"
                className="mt-2"
              />
            </div>
          </div>
          <Divider />
          <div className="flex items-center justify-end space-x-4">
            <Button variant="secondary">Cancel</Button>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  )
}
```


```example/form-layouts-form-layout-03.tsx
"use client"

import { Button } from "@/atom/Button"
import { Checkbox } from "@/atom/Checkbox"
import { Divider } from "@/atom/Divider"
import { Input } from "@/atom/Input"
import { Label } from "@/atom/Label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/atom/Select"
import { Textarea } from "@/atom/Textarea"

export default function Example() {
  return (
    <div className="obfuscate">
      <form>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <h2 className="font-semibold text-gray-900 dark:text-gray-50">
              Personal information
            </h2>
            <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
            </p>
          </div>
          <div className="sm:max-w-3xl md:col-span-2">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
              <div className="col-span-full sm:col-span-3">
                <Label htmlFor="first-name" className="font-medium">
                  First name
                </Label>
                <Input
                  type="text"
                  id="first-name"
                  name="first-name"
                  autoComplete="given-name"
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
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  placeholder="emma@company.com"
                  className="mt-2"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <Label htmlFor="year" className="font-medium">
                  Birth year
                </Label>
                <Input
                  type="number"
                  id="birthyear"
                  name="year"
                  placeholder="1990"
                  enableStepper={false}
                  className="mt-2"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <Label htmlFor="role" className="font-medium">
                  Role
                </Label>
                <Input
                  type="text"
                  id="role"
                  name="role"
                  placeholder="Senior Manager"
                  disabled
                  className="mt-2"
                />
                <p className="mt-2 text-xs text-gray-500 dark:text-gray-500">
                  Roles can only be changed by system admin.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Divider className="!my-14" />
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <h2 className="font-semibold text-gray-900 dark:text-gray-50">
              Workspace settings
            </h2>
            <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
            </p>
          </div>
          <div className="sm:max-w-3xl md:col-span-2">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
              <div className="col-span-full sm:col-span-3">
                <Label htmlFor="workspace-name" className="font-medium">
                  Workspace name
                </Label>
                <Input
                  type="text"
                  id="workspace-name"
                  name="workspace-name"
                  placeholder="Test workspace"
                  className="mt-2"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <Label htmlFor="visibility" className="font-medium">
                  Visibility
                </Label>
                <Select defaultValue="private">
                  <SelectTrigger
                    id="visibility"
                    name="visibility"
                    className="mt-2"
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="public">Public</SelectItem>
                    <SelectItem value="private">Private</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="col-span-full">
                <Label htmlFor="workspace-description" className="font-medium">
                  Workspace description
                </Label>
                <Textarea
                  id="workspace-description"
                  name="workspace-description"
                  placeholder="Type..."
                  className="mt-2"
                  rows={4}
                />
                <p className="mt-2 text-xs text-gray-500 dark:text-gray-500">
                  Note: description provided will not be displayed externally.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Divider className="!my-14" />
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <h2 className="font-semibold text-gray-900 dark:text-gray-50">
              Notification settings
            </h2>
            <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
            </p>
          </div>
          <div className="sm:max-w-3xl md:col-span-2">
            <fieldset>
              <legend className="text-sm font-medium text-gray-900 dark:text-gray-50">
                Team
              </legend>
              <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
                Configure the types of team alerts you want to receive.
              </p>
              <ul
                role="list"
                className="mt-4 divide-y divide-gray-200 dark:divide-gray-800"
              >
                <li className="flex items-center gap-x-3 py-3">
                  <Checkbox
                    id="team-requests"
                    name="team-requests"
                    defaultChecked
                  />
                  <Label htmlFor="team-requests" className="font-medium">
                    Team join requests
                  </Label>
                </li>
                <li className="flex items-center gap-x-3 py-3">
                  <Checkbox
                    id="team-activity-digest"
                    name="team-activity-digest"
                  />
                  <Label htmlFor="team-activity-digest" className="font-medium">
                    Weekly team activity digest
                  </Label>
                </li>
              </ul>
            </fieldset>
            <fieldset className="mt-6">
              <legend className="text-sm font-medium text-gray-900 dark:text-gray-50">
                Usage
              </legend>
              <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
                Configure the types of usage alerts you want to receive.
              </p>
              <ul
                role="list"
                className="mt-4 divide-y divide-gray-200 dark:divide-gray-800"
              >
                <li className="flex items-center gap-x-3 py-3">
                  <Checkbox id="api-requests" name="api-requests" />
                  <Label htmlFor="api-requests" className="font-medium">
                    API requests
                  </Label>
                </li>
                <li className="flex items-center gap-x-3 py-3">
                  <Checkbox
                    id="workspace-execution"
                    name="workspace-execution"
                  />
                  <Label htmlFor="workspace-execution" className="font-medium">
                    Workspace loading times
                  </Label>
                </li>
                <li className="flex items-center gap-x-3 py-3">
                  <Checkbox
                    id="query-caching"
                    name="query-caching"
                    defaultChecked
                  />
                  <Label htmlFor="query-caching" className="font-medium">
                    Query caching
                  </Label>
                </li>
                <li className="flex items-center gap-x-3 py-3">
                  <Checkbox id="storage" name="storage" defaultChecked />
                  <Label htmlFor="storage" className="font-medium">
                    Storage
                  </Label>
                </li>
              </ul>
            </fieldset>
          </div>
        </div>
        <Divider className="!my-14" />
        <div className="flex items-center justify-end space-x-4">
          <Button variant="secondary">Go back</Button>
          <Button type="submit">Save settings</Button>
        </div>
      </form>
    </div>
  )
}
```


```example/form-layouts-form-layout-02.tsx
"use client"

import { Button } from "@/atom/Button"
import { Divider } from "@/atom/Divider"
import { Input } from "@/atom/Input"
import { Label } from "@/atom/Label"
import { RadioGroup, RadioGroupItem } from "@/atom/RadioGroup"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/atom/Select"
import { Textarea } from "@/atom/Textarea"

export default function Example() {
  return (
    <div className="obfuscate">
      <form>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <h2 className="font-semibold text-gray-900 dark:text-gray-50">
              Personal information
            </h2>
            <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
            </p>
          </div>
          <div className="sm:max-w-3xl md:col-span-2">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
              <div className="col-span-full sm:col-span-3">
                <Label htmlFor="first-name" className="font-medium">
                  First name
                </Label>
                <Input
                  type="text"
                  id="first-name"
                  name="first-name"
                  autoComplete="given-name"
                  placeholder="Emma"
                  className="mt-2"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <Label htmlFor="last-name" className="font-medium">
                  Last name
                </Label>
                <Input
                  id="last-name"
                  name="last-name"
                  autoComplete="family-name"
                  placeholder="Crown"
                  className="mt-2"
                />
              </div>
              <div className="col-span-full">
                <Label htmlFor="email" className="font-medium">
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  placeholder="emma@company.com"
                  className="mt-2"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <Label htmlFor="year" className="font-medium">
                  Birth year
                </Label>
                <Input
                  type="number"
                  id="birthyear"
                  name="year"
                  placeholder="1990"
                  enableStepper={false}
                  className="mt-2"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <Label htmlFor="role" className="font-medium">
                  Role
                </Label>
                <Input
                  type="text"
                  id="role"
                  name="role"
                  placeholder="Senior Manager"
                  disabled
                  className="mt-2"
                />
                <p className="mt-2 text-xs text-gray-500 dark:text-gray-500">
                  Roles can only be changed by system admin.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Divider className="!my-14" />
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <h2 className="font-semibold text-gray-900 dark:text-gray-50">
              Workspace settings
            </h2>
            <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
            </p>
          </div>
          <div className="sm:max-w-3xl md:col-span-2">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
              <div className="col-span-full sm:col-span-3">
                <Label htmlFor="workspace-name" className="font-medium">
                  Workspace name
                </Label>
                <Input
                  type="text"
                  id="workspace-name"
                  name="workspace-name"
                  placeholder="Test workspace"
                  className="mt-2"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <Label htmlFor="visibility" className="font-medium">
                  Visibility
                </Label>
                <Select defaultValue="private">
                  <SelectTrigger
                    id="visibility"
                    name="visibility"
                    className="mt-2"
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="public">Public</SelectItem>
                    <SelectItem value="private">Private</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="col-span-full">
                <Label htmlFor="workspace-description" className="font-medium">
                  Workspace description
                </Label>
                <Textarea
                  id="workspace-description"
                  name="workspace-description"
                  placeholder="Type..."
                  className="mt-2"
                  rows={4}
                />
                <p className="mt-2 text-xs text-gray-500 dark:text-gray-500">
                  Note: description provided will not be displayed externally.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Divider className="!my-14" />
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <h2 className="font-semibold text-gray-900 dark:text-gray-50">
              Notification settings
            </h2>
            <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
            </p>
          </div>
          <div className="sm:max-w-3xl md:col-span-2">
            <fieldset>
              <RadioGroup defaultValue="never" className="sm:max-w-3xl">
                <legend className="text-sm font-medium text-gray-900 dark:text-gray-50">
                  Newsletter
                </legend>
                <p
                  id="newsletter-description"
                  className="mt-2 text-sm/6 text-gray-500 dark:text-gray-500"
                >
                  Change how often you want to receive updates from our
                  newsletter.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-x-3">
                    <RadioGroupItem
                      id="every-week"
                      value="every-week"
                      aria-describedby="newsletter-description"
                    />
                    <Label htmlFor="every-week" className="font-medium">
                      Every week
                    </Label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <RadioGroupItem
                      id="every-month"
                      value="every-month"
                      aria-describedby="newsletter-description"
                    />
                    <Label htmlFor="every-month" className="font-medium">
                      Every month
                    </Label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <RadioGroupItem
                      id="never"
                      value="never"
                      aria-describedby="newsletter-description"
                    />
                    <Label htmlFor="never" className="font-medium">
                      Never
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </fieldset>
          </div>
        </div>
        <Divider className="!my-14" />
        <div className="flex items-center justify-end space-x-4">
          <Button variant="secondary">Go back</Button>
          <Button>Save settings</Button>
        </div>
      </form>
    </div>
  )
}
```


