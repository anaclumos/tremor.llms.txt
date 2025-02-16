```example/pricing-sections-pricing-section-05.tsx
"use client"

import { useState } from "react"
import { RiCheckLine } from "@remixicon/react"

import { cx } from "@/lib/utils"

import { Badge } from "@/atom/Badge"
import { Button } from "@/atom/Button"

const frequencies = [
  { value: "monthly", label: "Monthly", priceSuffix: "/mo" },
  { value: "annually", label: "Annually", priceSuffix: "/year" },
]

const plans: {
  name: string
  price: string | { monthly: string; annually: string }
  description: string
  features: string[]
  isEnterprise: boolean
  isRecommended: boolean
  buttonText: string
  buttonLink: string
}[] = [
  {
    name: "Free",
    price: "$0",
    description: "For small teams",
    features: ["Unlimited members", "5 workspaces", "Community Slack Support"],
    isEnterprise: false,
    isRecommended: false,
    buttonText: "Get started",
    buttonLink: "#",
  },
  {
    name: "Starter",
    price: { monthly: "$50", annually: "$490" },
    description: "For growing teams",
    features: ["Unlimited members", "10 workspaces", "Community Slack Support"],
    isEnterprise: false,
    isRecommended: true,
    buttonText: "Get started",
    buttonLink: "#",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For custom needs",
    features: [
      "Unlimited members",
      "Unlimited workspaces",
      "Priority Support",
      "Single Sign-On (SSO)",
      "90 days of history",
    ],
    isEnterprise: true,
    isRecommended: false,
    buttonText: "Contact sales",
    buttonLink: "#",
  },
]

export default function Example() {
  const [frequency, setFrequency] = useState(frequencies[0])

  const handleFrequencyChange = (
    selectedFrequency: (typeof frequencies)[0],
  ) => {
    setFrequency(selectedFrequency)
  }

  return (
    <div className="obfuscate">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan, planindex) => (
          <div
            key={planindex}
            className={cx(
              plan.isRecommended
                ? "border-2 border-blue-500 dark:border-blue-500"
                : "border border-gray-200 dark:border-gray-800",
              "relative flex flex-col justify-between rounded-lg bg-white p-6 dark:bg-gray-950",
            )}
          >
            <div className="flex items-center justify-between gap-x-4">
              <h3 className="text-sm/8 font-semibold text-gray-900 dark:text-gray-50">
                {plan.name}
              </h3>
              {plan.isRecommended && <Badge>Recommended</Badge>}
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              {plan.description}
            </p>
            <p className="mt-6 flex items-baseline">
              <span className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
                {typeof plan.price === "string"
                  ? plan.price
                  : plan.price[frequency.value as "monthly" | "annually"]}
              </span>
              {typeof plan.price !== "string" && (
                <span className="text-sm text-gray-500 dark:text-gray-500">
                  {frequency.priceSuffix}
                </span>
              )}
            </p>
            <div className="relative flex h-20 items-center justify-center">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden={true}
              >
                <div className="w-full border-t border-gray-200 dark:border-gray-800" />
              </div>
              {plan.isRecommended && (
                <div className="relative grid grid-cols-2 gap-x-1 rounded-full bg-white p-1 text-center text-xs/5 font-semibold ring-1 ring-gray-200 ring-inset dark:bg-gray-950 dark:ring-gray-800">
                  {frequencies.map((option) => (
                    <label
                      key={option.value}
                      className={cx(
                        option.value === frequency.value
                          ? "bg-blue-500 text-white dark:bg-blue-500 dark:text-white"
                          : "text-gray-500 dark:text-gray-500",
                        "cursor-pointer rounded-full px-2.5 py-1",
                      )}
                    >
                      <input
                        type="radio"
                        value={option.value}
                        checked={option.value === frequency.value}
                        onChange={() => handleFrequencyChange(option)}
                        className="sr-only"
                      />
                      {option.label}
                    </label>
                  ))}
                </div>
              )}
            </div>
            <div className="flex grow flex-col justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
                  Included:
                </p>
                <ul
                  role="list"
                  className="mt-2 text-sm text-gray-700 dark:text-gray-300"
                >
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center space-x-2 py-2.5"
                    >
                      <RiCheckLine
                        className="size-5 shrink-0 text-blue-500 dark:text-blue-500"
                        aria-hidden={true}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {plan.isRecommended ? (
                <Button asChild className="mt-8 h-10">
                  <a href={plan.buttonLink}>{plan.buttonText}</a>
                </Button>
              ) : (
                <Button asChild variant="secondary" className="mt-8 h-10">
                  <a href={plan.buttonLink}>{plan.buttonText}</a>
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
```


```example/pricing-sections-pricing-section-04.tsx
"use client"

import { RiCheckboxCircleFill } from "@remixicon/react"

import { cx } from "@/lib/utils"

import { Button } from "@/atom/Button"

const plans = [
  //array-start
  {
    name: "Hobby",
    price: "$0",
    description: "For small teams",
    features: ["Unlimited members", "5 workspaces", "Community Slack Support"],
    isEnterprise: false,
    isRecommended: false,
    buttonText: "Get started",
    buttonLink: "#",
  },
  {
    name: "Growth",
    price: "$50",
    description: "For scaling teams",
    features: ["Unlimited members", "10 workspaces", "Email support"],
    isEnterprise: false,
    isRecommended: true,
    buttonText: "Try for free",
    buttonLink: "#",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For custom needs",
    features: [
      "Unlimited members",
      "Unlimited workspaces",
      "Priority Support",
      "Single Sign-On (SSO)",
      "90 days of history",
    ],
    isEnterprise: true,
    isRecommended: false,
    buttonText: "Contact sales",
    buttonLink: "#",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan, planindex) => (
          <div
            key={planindex}
            className={cx(
              plan.isRecommended
                ? "border-blue-500 bg-blue-50 dark:border-blue-500 dark:bg-blue-950"
                : "border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900",
              "border-t-2 p-6",
            )}
          >
            <div className="flex items-center justify-between">
              <h3 className="leading-8 font-semibold text-gray-900 dark:text-gray-50">
                {plan.name}
              </h3>
              {plan.isRecommended ? (
                <span className="text-xs font-medium text-blue-700 dark:text-blue-400">
                  Recommended
                </span>
              ) : null}
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              {plan.description}
            </p>
            <p className="mt-6 flex items-baseline">
              <span className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
                {plan.price}
              </span>
              {!plan.isEnterprise ? (
                <span className="text-sm text-gray-500 dark:text-gray-500">
                  /mo
                </span>
              ) : null}
            </p>
            <div className="mt-8">
              {!plan.isRecommended ? (
                <Button asChild variant="secondary" className="h-10 w-full">
                  <a href={plan.buttonLink}>{plan.buttonText}</a>
                </Button>
              ) : (
                <Button asChild className="h-10 w-full">
                  <a href={plan.buttonLink}>{plan.buttonText}</a>
                </Button>
              )}
              <p className="mt-6 text-sm font-medium text-gray-900 dark:text-gray-50">
                Included:
              </p>
              <ul
                role="list"
                className="mt-2 text-sm text-gray-700 dark:text-gray-300"
              >
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center space-x-2 py-2.5"
                  >
                    <RiCheckboxCircleFill
                      className={cx(
                        plan.isRecommended
                          ? "text-blue-500 dark:text-blue-500"
                          : "text-gray-400 dark:text-gray-600",
                        "size-5 shrink-0",
                      )}
                      aria-hidden={true}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
```


```example/pricing-sections-pricing-section-06.tsx
"use client"

import { RiCheckboxCircleFill, RiCloseCircleFill } from "@remixicon/react"

import { Button } from "@/atom/Button"
import { Divider } from "@/atom/Divider"

const plans = [
  //array-start
  {
    name: "Free",
    price: "$0",
    description: "For small teams",
    features: [
      {
        feature: "10 user seats",
        active: true,
      },
      {
        feature: "5 workspaces",
        active: true,
      },
      {
        feature: "Single Sign-On (SSO)",
        active: false,
      },
      {
        feature: "Two-factor authentication",
        active: false,
      },
      {
        feature: "Caching and pre-aggreation",
        active: false,
      },
    ],
    isEnterprise: false,
    isRecommended: false,
    buttonText: "Get started",
    buttonLink: "#",
  },
  {
    name: "Starter",
    price: "$50",
    description: "For growing teams",
    features: [
      {
        feature: "50 user seats",
        active: true,
      },
      {
        feature: "25 workspaces",
        active: true,
      },
      {
        feature: "Single Sign-On (SSO)",
        active: false,
      },
      {
        feature: "Two-factor authentication",
        active: false,
      },
      {
        feature: "Caching and pre-aggreation",
        active: false,
      },
    ],
    isEnterprise: false,
    isRecommended: true,
    buttonText: "Get started",
    buttonLink: "#",
  },
  {
    name: "Enterprise",
    price: "$190",
    description: "For custom needs",
    features: [
      {
        feature: "Unlimited user seats",
        active: true,
      },
      {
        feature: "Unlimited workspaces",
        active: true,
      },
      {
        feature: "Single Sign-On (SSO)",
        active: true,
      },
      {
        feature: "Two-factor authentication",
        active: true,
      },
      {
        feature: "Caching and pre-aggreation",
        active: true,
      },
    ],
    isEnterprise: true,
    isRecommended: false,
    buttonText: "Contact sales",
    buttonLink: "#",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan, planindex) => (
          <div
            key={planindex}
            className="relative rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950"
          >
            {plan.isRecommended ? (
              <div className="flex justify-center">
                <span className="absolute top-0 -translate-y-1/2 rounded-md bg-blue-500 px-3 py-1 text-sm font-medium tracking-wide text-white dark:bg-blue-500 dark:text-white">
                  recommended
                </span>
              </div>
            ) : null}
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-50">
              {plan.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              {plan.description}
            </p>
            <p className="mt-6 flex items-baseline">
              <span className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
                {plan.price}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-500">
                /mo
              </span>
            </p>
            <Divider />
            <ul
              role="list"
              className="mt-4 text-sm text-gray-700 dark:text-gray-300"
            >
              {plan.features.map((feature, featureindex) => (
                <li
                  key={featureindex}
                  className="flex items-center space-x-2 py-2.5"
                >
                  {feature.active ? (
                    <RiCheckboxCircleFill
                      className="size-5 shrink-0 text-blue-500 dark:text-blue-500"
                      aria-hidden={true}
                    />
                  ) : (
                    <RiCloseCircleFill
                      className="size-5 shrink-0 text-gray-400 dark:text-gray-600"
                      aria-hidden={true}
                    />
                  )}
                  <span>{feature.feature}</span>
                </li>
              ))}
            </ul>
            {plan.isEnterprise ? (
              <Button asChild variant="secondary" className="mt-8 h-10 w-full">
                <a href={plan.buttonLink}>{plan.buttonText}</a>
              </Button>
            ) : (
              <Button asChild className="mt-8 h-10 w-full">
                <a href={plan.buttonLink}>{plan.buttonText}</a>
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
```


```example/pricing-sections-pricing-section-07.tsx
"use client"

import React from "react"
import Link from "next/link"
import { RiCheckLine, RiCloudLine, RiUserLine } from "@remixicon/react"

import { Button } from "@/atom/Button"
import { Label } from "@/atom/Label"
import { Switch } from "@/atom/Switch"

type FixedPrice = string

interface VariablePrice {
  monthly: string
  annually: string
}

interface Plan {
  name: string
  price: FixedPrice | VariablePrice
  description: string
  capacity: string[]
  features: string[]
  isStarter: boolean
  isRecommended: boolean
  buttonText: string
  buttonLink: string
}

const plans: Plan[] = [
  {
    name: "Starter",
    price: "$0",
    description:
      "For individuals and freelancers that need a scalable database.",
    capacity: ["Up to 5 users, 1 admin", "1 workspace"],
    features: [
      "Up to 1000/req. per day",
      "5 GB max storage",
      "Community Slack Support",
    ],
    isStarter: true,
    isRecommended: false,
    buttonText: "Get started",
    buttonLink: "#",
  },
  {
    name: "Teams",
    price: { monthly: "$49", annually: "$39" },
    description: "For small teams and start-ups that need a scalable database.",
    capacity: ["Up to 100 users, 3 admins", "Up to 20 workspaces"],
    features: [
      "Unlimited requests",
      "$0.07 per processed GB",
      "$0.34 per stored GB",
    ],
    isStarter: false,
    isRecommended: true,
    buttonText: "Start 14-day trial",
    buttonLink: "#",
  },
  {
    name: "Business",
    price: { monthly: "$99", annually: "$79" },
    description:
      "For larger teams that need more advanced controls and features.",
    capacity: ["Up to 500 users, 10 admins", "Unlimited workspaces"],
    features: [
      "Unlimited requests",
      "Volume discount",
      "$0.03 per processed GB",
    ],
    isStarter: false,
    isRecommended: false,
    buttonText: "Start 14-day trial",
    buttonLink: "#",
  },
]

const isVariablePrice = (
  price: FixedPrice | VariablePrice,
): price is VariablePrice => {
  return (price as VariablePrice).monthly !== undefined
}

export default function Example() {
  const [billingFrequency, setBillingFrequency] = React.useState<
    "monthly" | "annually"
  >("monthly")
  return (
    <div className="obfuscate">
      <div className="py-20">
        <section aria-labelledby="pricing-title">
          <div className="w-fit rounded-lg px-2 py-1 ring-1 shadow-md shadow-blue-400/30 ring-black/5 dark:shadow-blue-600/30 dark:ring-white/5">
            <span className="text-sm font-medium tracking-tight text-gray-900 dark:text-gray-50">
              Pricing
            </span>
          </div>
          <h1 className="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-6xl dark:from-gray-50 dark:to-gray-300">
            Our plans scale with you
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-700 dark:text-gray-400">
            Plans that empower you and your team to ship without friction. Our
            flexible pricing models ensure that efficiency doesn&rsquo;t come at
            the cost of your budget.
          </p>
        </section>
        <section
          id="pricing-overview"
          className="mt-20"
          aria-labelledby="pricing-overview"
        >
          <div className="flex items-center justify-center gap-2">
            <Label
              htmlFor="switch"
              className="text-base font-medium sm:text-sm dark:text-gray-400"
            >
              Monthly
            </Label>
            <Switch
              id="switch"
              checked={billingFrequency === "annually"}
              onCheckedChange={() =>
                setBillingFrequency(
                  billingFrequency === "monthly" ? "annually" : "monthly",
                )
              }
            />
            <Label
              htmlFor="switch"
              className="text-base font-medium sm:text-sm dark:text-gray-400"
            >
              Yearly (-20%)
            </Label>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-x-14 gap-y-8 lg:grid-cols-3">
            {plans.map((plan, planIdx) => (
              <div key={planIdx} className="mt-6">
                {plan.isRecommended ? (
                  <div className="flex h-4 items-center">
                    <div className="relative w-full">
                      <div
                        className="absolute inset-0 flex items-center"
                        aria-hidden="true"
                      >
                        <div className="w-full border-t border-blue-600 dark:border-blue-400" />
                      </div>
                      <div className="relative flex justify-center">
                        <span className="bg-white px-3 text-xs font-medium text-blue-600 dark:bg-gray-950 dark:text-blue-400">
                          Most popular
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex h-4 items-center">
                    <div className="h-px w-full bg-gray-200 dark:bg-gray-800" />
                  </div>
                )}
                <div className="mx-auto max-w-md">
                  <h2 className="mt-6 text-sm font-semibold text-gray-900 dark:text-gray-50">
                    {plan.name}
                  </h2>
                  <div className="mt-3 flex items-center gap-x-3">
                    <span className="text-5xl font-semibold text-gray-900 tabular-nums dark:text-gray-50">
                      {isVariablePrice(plan.price)
                        ? billingFrequency === "monthly"
                          ? plan.price.monthly
                          : plan.price.annually
                        : plan.price}
                    </span>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      per user <br /> per month
                    </div>
                  </div>
                  <div className="mt-6 flex flex-col justify-between">
                    <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                      {plan.description}
                    </p>
                    <div className="mt-6">
                      {plan.isStarter ? (
                        <Button variant="secondary" asChild className="group">
                          <Link href={plan.buttonLink}>{plan.buttonText}</Link>
                        </Button>
                      ) : (
                        <Button asChild className="group">
                          <Link href={plan.buttonLink}>{plan.buttonText}</Link>
                        </Button>
                      )}
                    </div>
                  </div>
                  <ul
                    role="list"
                    className="mt-8 text-sm text-gray-700 dark:text-gray-400"
                  >
                    {plan.capacity.map((feature, index) => (
                      <li
                        key={feature}
                        className="flex items-center gap-x-3 py-1.5"
                      >
                        {index === 0 && (
                          <RiUserLine
                            className="size-4 shrink-0 text-gray-500"
                            aria-hidden="true"
                          />
                        )}
                        {index === 1 && (
                          <RiCloudLine
                            className="size-4 shrink-0 text-gray-500"
                            aria-hidden="true"
                          />
                        )}
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <ul
                    role="list"
                    className="mt-4 text-sm text-gray-700 dark:text-gray-400"
                  >
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-x-3 py-1.5"
                      >
                        <RiCheckLine
                          className="size-4 shrink-0 text-blue-600 dark:text-blue-400"
                          aria-hidden="true"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
```


```example/pricing-sections-pricing-section-03.tsx
"use client"

import { RiCheckboxCircleFill } from "@remixicon/react"

import { Badge } from "@/atom/Badge"
import { Button } from "@/atom/Button"
import { Divider } from "@/atom/Divider"
import { Label } from "@/atom/Label"
import {
  RadioCardGroup,
  RadioCardIndicator,
  RadioCardItem,
} from "@/atom/RadioCardGroup"

const plans = [
  //array-start
  {
    name: "Billed annually",
    price: "$29",
    isRecommended: true,
  },
  {
    name: "Billed monthly",
    price: "$39",
    isRecommended: false,
  },
  //array-end
]

const features = [
  //array-start
  {
    id: 1,
    name: "Invite unlimited members",
  },
  {
    id: 2,
    name: "Create unlimited workspaces",
  },
  {
    id: 3,
    name: "90 days of history",
  },
  {
    id: 4,
    name: "24/7 priority support",
  },
  {
    id: 5,
    name: "Access to all enterprise plugins",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6 lg:max-w-full lg:grid-cols-2">
        <div className="p-6">
          <h3 className="font-semibold text-gray-900 dark:text-gray-50">
            Unlock all features
          </h3>
          <p className="mt-2 text-sm/6 text-gray-500 dark:text-gray-500">
            Get the full potential of your data with our enhanced features that
            enable advanced data analytics and informed decision-making.
          </p>
          <div className="mt-8 space-y-6">
            <div className="relative border-l-2 border-gray-200 pl-4 dark:border-gray-800">
              <h4 className="text-sm font-medium text-gray-900 dark:text-gray-50">
                <a href="#" className="focus:outline-none">
                  {/* Extend link to entire card */}
                  <span className="absolute inset-0" aria-hidden={true} />
                  Talk to Sales &#8594;
                </a>
              </h4>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
                Schedule a call with one of our sales representative
              </p>
            </div>
            <div className="relative border-l-2 border-gray-200 pl-4 dark:border-gray-800">
              <h4 className="text-sm font-medium text-gray-900 dark:text-gray-50">
                <a href="#" className="focus:outline-none">
                  {/* Extend link to entire card */}
                  <span className="absolute inset-0" aria-hidden={true} />
                  Book a demo &#8594;
                </a>
              </h4>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
                Try out our premium features in a demo
              </p>
            </div>
          </div>
        </div>
        <form>
          <fieldset>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900">
              <legend className="font-semibold text-gray-900 dark:text-gray-50">
                Professional Plan Subscription
              </legend>
              <RadioCardGroup
                defaultValue={plans[0].name}
                className="mt-4 gap-3"
              >
                {plans.map((plan) => (
                  <RadioCardItem
                    key={plan.name}
                    value={plan.name}
                    className="flex items-center justify-between space-x-6 sm:px-6"
                  >
                    <div className="flex items-center space-x-3">
                      <RadioCardIndicator />
                      <div className="block items-center space-x-3 lg:flex">
                        <Label htmlFor={plan.name} className="font-semibold">
                          {plan.name}
                        </Label>
                        {plan.isRecommended && <Badge>Save 10%</Badge>}
                      </div>
                    </div>
                    <p className="flex items-baseline">
                      <span className="font-semibold text-gray-900 sm:text-lg dark:text-gray-50">
                        {plan.price}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-500">
                        /mo
                      </span>
                    </p>
                  </RadioCardItem>
                ))}
              </RadioCardGroup>
              <ul
                role="list"
                className="mt-4 text-sm text-gray-700 dark:text-gray-300"
              >
                {features.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center space-x-2 py-2.5"
                  >
                    <RiCheckboxCircleFill
                      className="size-5 shrink-0 text-blue-500 dark:text-blue-500"
                      aria-hidden={true}
                    />
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
              <Divider />
              <Button type="submit" className="h-10 w-full">
                Buy and upgrade
              </Button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  )
}
```


```example/pricing-sections-pricing-section-02.tsx
"use client"

import { RiCheckboxCircleFill } from "@remixicon/react"

import { cx } from "@/lib/utils"

import { Badge } from "@/atom/Badge"
import { Button } from "@/atom/Button"

const plans = [
  //array-start
  {
    name: "Your plan",
    price: "$0",
    badgeText: "current",
    description: "Get started with your current plan",
    features: [
      "10 user seats",
      "Up to 1,000 requests per day¹",
      "10GB of storage",
      "Slack community support",
      "7 days of activity history",
    ],
    footnote:
      "¹Fair usage policy. Exceeding the limit for one time will not result in the account being closed.",
    isUpgrade: false,
    buttonText: false,
    buttonLink: "#",
  },
  {
    name: "Workplace Plus",
    price: "$50",
    badgeText: "add-on",
    description: "Unlock the full potential of your data",
    features: [
      "Up to 50 user seats¹",
      "Unlimited requests per day",
      "50GB of storage",
      "Private Slack support",
      "30 days of activity history",
    ],
    footnote: "¹$1 per month per additional user seat.",
    isUpgrade: true,
    buttonText: "Upgrade",
    buttonLink: "#",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
        {/* bg-gray-950 used as color to match underlying dark mode background color */}
        {plans.map((plan, planindex) => (
          <div
            key={planindex}
            className={cx(
              plan.isUpgrade
                ? "bg-gray-50 dark:bg-gray-900"
                : "bg-white dark:bg-gray-950",
              "rounded-lg border border-gray-200 p-6 dark:border-gray-800",
            )}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <h4 className="text-sm/8 font-semibold text-gray-900 dark:text-gray-50">
                  {plan.name}
                </h4>
                {plan.isUpgrade ? (
                  <Badge>{plan.badgeText}</Badge>
                ) : (
                  <Badge variant="neutral">{plan.badgeText}</Badge>
                )}
              </div>
              {plan.isUpgrade ? (
                <p className="leading-5">
                  <span className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                    +$29
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-500">
                    /mo
                  </span>
                </p>
              ) : null}
            </div>
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-500">
              {plan.description}
            </p>
            <ul
              role="list"
              className="mt-4 divide-y divide-gray-200 text-sm text-gray-700 dark:divide-gray-800 dark:text-gray-300"
            >
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center space-x-2 py-2.5"
                >
                  <RiCheckboxCircleFill
                    className={cx(
                      plan.isUpgrade
                        ? "text-blue-500 dark:text-blue-500"
                        : "text-gray-400 dark:text-gray-600",
                      "size-5 shrink-0",
                    )}
                    aria-hidden={true}
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-gray-500 dark:text-gray-500">
              {plan.footnote}
            </p>
            {plan.isUpgrade ? (
              <Button asChild className="mt-4 h-10 w-full">
                <a href={plan.buttonLink}>{plan.buttonText}</a>
              </Button>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}
```


```example/pricing-sections-pricing-section-01.tsx
"use client"

import { RiCheckboxCircleFill } from "@remixicon/react"

import { Button } from "@/atom/Button"
import { Divider } from "@/atom/Divider"

const features = [
  //array-start
  {
    id: 1,
    name: "Invite unlimited members",
  },
  {
    id: 2,
    name: "Create unlimited workspaces",
  },
  {
    id: 3,
    name: "90 days of history",
  },
  {
    id: 4,
    name: "24/7 priority support",
  },
  {
    id: 5,
    name: "Access to all enterprise plugins",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="p-6">
          <h3 className="font-semibold text-gray-900 dark:text-gray-50">
            Unlock all features
          </h3>
          <p className="mt-2 text-sm/6 text-gray-500 dark:text-gray-500">
            Get the full potential of your data with our enhanced features that
            enable advanced data analytics and informed decision-making.
          </p>
          <div className="mt-8 space-y-6">
            <div className="relative border-l-2 border-gray-200 pl-4 dark:border-gray-800">
              <h4 className="text-sm font-medium text-gray-900 dark:text-gray-50">
                <a href="#" className="focus:outline-none">
                  {/* Extend link to entire card */}
                  <span className="absolute inset-0" aria-hidden={true} />
                  Talk to Sales &#8594;
                </a>
              </h4>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
                Schedule a call with one of our sales representative
              </p>
            </div>
            <div className="relative border-l-2 border-gray-200 pl-4 dark:border-gray-800">
              <h4 className="text-sm font-medium text-gray-900 dark:text-gray-50">
                <a href="#" className="focus:outline-none">
                  {/* Extend link to entire card */}
                  <span className="absolute inset-0" aria-hidden={true} />
                  Book a demo &#8594;
                </a>
              </h4>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
                Try out our premium features in a demo
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="flex items-start justify-between space-x-6">
            <h3 className="font-semibold text-gray-900 dark:text-gray-50">
              Professional Plan Subscription
            </h3>
            <p className="flex items-baseline">
              <span className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
                $89
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-500">
                /mo
              </span>
            </p>
          </div>
          <ul
            role="list"
            className="mt-4 text-sm text-gray-700 dark:text-gray-300"
          >
            {features.map((item) => (
              <li key={item.id} className="flex items-center space-x-2 py-2.5">
                <RiCheckboxCircleFill
                  className="size-5 shrink-0 text-blue-500 dark:text-blue-500"
                  aria-hidden={true}
                />
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
          <Divider />
          <Button asChild className="h-10 w-full">
            <a href="#">Upgrade</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
```


```example/pricing-sections-pricing-section-08.tsx
"use client"

import React, { Fragment } from "react"
import Link from "next/link"
import {
  RiCheckLine,
  RiCloudLine,
  RiInformationLine,
  RiSubtractLine,
  RiUserLine,
} from "@remixicon/react"

import { cx } from "@/lib/utils"

import { Button } from "@/atom/Button"
import { Label } from "@/atom/Label"
import { Switch } from "@/atom/Switch"
import { Tooltip } from "@/atom/Tooltip"

type FixedPrice = string

interface VariablePrice {
  monthly: string
  annually: string
}

interface Plan {
  name: string
  price: FixedPrice | VariablePrice
  description: string
  capacity: string[]
  features: string[]
  isStarter: boolean
  isRecommended: boolean
  buttonText: string
  buttonLink: string
}

const plans: Plan[] = [
  {
    name: "Starter",
    price: "$0",
    description:
      "For individuals and freelancers that need a scalable database.",
    capacity: ["Up to 5 users, 1 admin", "1 workspace"],
    features: [
      "Up to 1000/req. per day",
      "5 GB max storage",
      "Community Slack Support",
    ],
    isStarter: true,
    isRecommended: false,
    buttonText: "Get started",
    buttonLink: "#",
  },
  {
    name: "Teams",
    price: { monthly: "$49", annually: "$39" },
    description: "For small teams and start-ups that need a scalable database.",
    capacity: ["Up to 100 users, 3 admins", "Up to 20 workspaces"],
    features: [
      "Unlimited requests",
      "$0.07 per processed GB",
      "$0.34 per stored GB",
      "Slack Connect",
    ],
    isStarter: false,
    isRecommended: false,
    buttonText: "Start 14-day trial",
    buttonLink: "#",
  },
  {
    name: "Business",
    price: { monthly: "$99", annually: "$79" },
    description:
      "For larger teams that need more advanced controls and features.",
    capacity: ["Up to 500 users, 10 admins", "Unlimited workspaces"],
    features: [
      "Unlimited requests",
      "Volume discount",
      "$0.03 per processed GB",
      "$0.1 per stored GB",
      "Single Sign-On (SSO)",
    ],
    isStarter: false,
    isRecommended: true,
    buttonText: "Start 14-day trial",
    buttonLink: "#",
  },
]

interface Feature {
  name: string
  plans: Record<string, boolean | string>
  tooltip?: string
}

interface Section {
  name: string
  features: Feature[]
}

const sections: Section[] = [
  {
    name: "Workspace Features",
    features: [
      {
        name: "Email notifications & webhooks",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
        plans: { Starter: true, Teams: true, Business: true },
      },
      {
        name: "Workspaces",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
        plans: { Starter: "5", Teams: "10", Business: "Unlimited" },
      },
      {
        name: "Storage",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
        plans: {
          Starter: "$0.65 per stored GB",
          Teams: "$0.34 per stored GB",
          Business: "Customized¹",
        },
      },
      {
        name: "Seats",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
        plans: {
          Starter: "5 users",
          Teams: "Up to 20 users",
          Business: "Unlimited",
        },
      },
    ],
  },
  {
    name: "Automation",
    features: [
      {
        name: "Service accounts",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
        plans: { Starter: true, Teams: true, Business: true },
      },
      {
        name: "Admin API",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
        plans: { Teams: true, Business: true },
      },
      {
        name: "No-Code workflow builder",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
        plans: { Starter: "Limited", Teams: "Standard", Business: "Enhanced" },
      },
    ],
  },
  {
    name: "Analytics",
    features: [
      {
        name: "Analytics retention",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
        plans: { Starter: "7 days", Teams: "1 year", Business: "Unlimited" },
      },
      {
        name: "Anomaly detection",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
        plans: { Teams: true, Business: true },
      },
      {
        name: "Custom report builder",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
        plans: { Business: true },
      },
    ],
  },
  {
    name: "Support",
    features: [
      {
        name: "Slack",
        plans: {
          Starter: "Community",
          Teams: "Connect",
          Business: "Dedicated agent",
        },
      },
      {
        name: "Email",
        plans: { Starter: "2-4 days", Teams: "1-2 days", Business: "Priority" },
      },
    ],
  },
]

const isVariablePrice = (
  price: FixedPrice | VariablePrice,
): price is VariablePrice => {
  return (price as VariablePrice).monthly !== undefined
}

export default function Example() {
  const [billingFrequency, setBillingFrequency] = React.useState<
    "monthly" | "annually"
  >("monthly")
  return (
    <div className="obfuscate">
      <div className="py-20">
        <section aria-labelledby="pricing-title">
          <div className="w-fit rounded-lg px-2 py-1 ring-1 shadow-md shadow-blue-400/30 ring-black/5 dark:shadow-blue-600/30 dark:ring-white/5">
            <span className="text-sm font-medium tracking-tight text-gray-900 dark:text-gray-50">
              Pricing
            </span>
          </div>
          <h1 className="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-6xl dark:from-gray-50 dark:to-gray-300">
            Our plans scale with you
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-700 dark:text-gray-400">
            Plans that empower you and your team to ship without friction. Our
            flexible pricing models ensure that efficiency doesn&rsquo;t come at
            the cost of your budget.
          </p>
        </section>
        <section
          id="pricing-overview"
          className="mt-20"
          aria-labelledby="pricing-overview"
        >
          <div className="flex items-center justify-center gap-2">
            <Label
              htmlFor="switch"
              className="text-base font-medium sm:text-sm dark:text-gray-400"
            >
              Monthly
            </Label>
            <Switch
              id="switch"
              checked={billingFrequency === "annually"}
              onCheckedChange={() =>
                setBillingFrequency(
                  billingFrequency === "monthly" ? "annually" : "monthly",
                )
              }
            />
            <Label
              htmlFor="switch"
              className="text-base font-medium sm:text-sm dark:text-gray-400"
            >
              Yearly (-20%)
            </Label>
          </div>
          <div className="grid grid-cols-1 gap-x-14 gap-y-8 lg:grid-cols-3">
            {plans.map((plan, planIdx) => (
              <div key={planIdx} className="mt-6">
                {plan.isRecommended ? (
                  <div className="flex h-4 items-center">
                    <div className="relative w-full">
                      <div
                        className="absolute inset-0 flex items-center"
                        aria-hidden="true"
                      >
                        <div className="w-full border-t border-blue-600 dark:border-blue-400" />
                      </div>
                      <div className="relative flex justify-center">
                        <span className="bg-white px-3 text-xs font-medium text-blue-600 dark:bg-gray-950 dark:text-blue-400">
                          Most popular
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex h-4 items-center">
                    <div className="h-px w-full bg-gray-200 dark:bg-gray-800" />
                  </div>
                )}
                <div className="mx-auto max-w-md">
                  <h2 className="mt-6 text-sm font-semibold text-gray-900 dark:text-gray-50">
                    {plan.name}
                  </h2>
                  <div className="mt-3 flex items-center gap-x-3">
                    <span className="text-5xl font-semibold text-gray-900 tabular-nums dark:text-gray-50">
                      {isVariablePrice(plan.price)
                        ? billingFrequency === "monthly"
                          ? plan.price.monthly
                          : plan.price.annually
                        : plan.price}
                    </span>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      per user <br /> per month
                    </div>
                  </div>
                  <div className="mt-6 flex flex-col justify-between">
                    <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                      {plan.description}
                    </p>
                    <div className="mt-6">
                      {plan.isStarter ? (
                        <Button variant="secondary" asChild className="group">
                          <Link href={plan.buttonLink}>{plan.buttonText}</Link>
                        </Button>
                      ) : (
                        <Button asChild className="group">
                          <Link href={plan.buttonLink}>{plan.buttonText}</Link>
                        </Button>
                      )}
                    </div>
                  </div>
                  <ul
                    role="list"
                    className="mt-8 text-sm text-gray-700 dark:text-gray-400"
                  >
                    {plan.capacity.map((feature, index) => (
                      <li
                        key={feature}
                        className="flex items-center gap-x-3 py-1.5"
                      >
                        {index === 0 && (
                          <RiUserLine
                            className="size-4 shrink-0 text-gray-500"
                            aria-hidden="true"
                          />
                        )}
                        {index === 1 && (
                          <RiCloudLine
                            className="size-4 shrink-0 text-gray-500"
                            aria-hidden="true"
                          />
                        )}
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <ul
                    role="list"
                    className="mt-4 text-sm text-gray-700 dark:text-gray-400"
                  >
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-x-3 py-1.5"
                      >
                        <RiCheckLine
                          className="size-4 shrink-0 text-blue-600 dark:text-blue-400"
                          aria-hidden="true"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* plan details (xs-lg)*/}
        <section
          id="pricing-details"
          className="mt-20 sm:mt-28"
          aria-labelledby="pricing-details"
        >
          <div className="mx-auto space-y-8 sm:max-w-md lg:hidden">
            {plans.map((plan) => (
              <div key={plan.name}>
                <div className="rounded-xl bg-gray-400/5 p-6 ring-1 ring-gray-200 ring-inset dark:ring-gray-800">
                  <h2
                    id={plan.name}
                    className="text-base leading-6 font-semibold text-gray-900 dark:text-gray-50"
                  >
                    {plan.name}
                  </h2>
                  <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                    {isVariablePrice(plan.price)
                      ? `${
                          billingFrequency === "monthly"
                            ? plan.price.monthly
                            : plan.price.annually
                        } / per user`
                      : plan.price}
                  </p>
                </div>
                <ul
                  role="list"
                  className="mt-10 space-y-10 text-sm leading-6 text-gray-900 dark:text-gray-50"
                >
                  {sections.map((section) => (
                    <li key={section.name}>
                      <h3 className="font-semibold">{section.name}</h3>
                      <ul
                        role="list"
                        className="mt-2 divide-y divide-gray-200 dark:divide-gray-800"
                      >
                        {section.features.map((feature) =>
                          feature.plans[plan.name] ? (
                            <li
                              key={feature.name}
                              className="flex gap-x-3 py-2.5"
                            >
                              <RiCheckLine
                                className="size-5 flex-none text-blue-600 dark:text-blue-400"
                                aria-hidden="true"
                              />
                              <span>
                                {feature.name}{" "}
                                {typeof feature.plans[plan.name] ===
                                "string" ? (
                                  <span className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                                    ({feature.plans[plan.name]})
                                  </span>
                                ) : null}
                              </span>
                            </li>
                          ) : null,
                        )}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* plan details (lg+) */}
        <section className="mx-auto mt-14">
          <div className="mt-20 hidden sm:mt-20 lg:block">
            <div className="relative">
              <table className="w-full table-fixed border-separate border-spacing-0 text-left">
                <caption className="sr-only">Pricing plan comparison</caption>
                <colgroup>
                  <col className="w-2/5" />
                  <col className="w-1/5" />
                  <col className="w-1/5" />
                  <col className="w-1/5" />
                </colgroup>
                <thead className="">
                  <tr>
                    <th
                      scope="col"
                      className="border-b border-gray-100 bg-white pb-8 dark:border-gray-800 dark:bg-gray-950"
                    >
                      <div className="leading-7 font-semibold text-gray-900 dark:text-gray-50">
                        Compare prices
                      </div>
                      <div className="text-sm font-normal text-gray-600 dark:text-gray-400">
                        Price per month (billed yearly)
                      </div>
                    </th>
                    {plans.map((plan) => (
                      <th
                        key={plan.name}
                        scope="col"
                        className="border-b border-gray-100 bg-white px-6 pb-8 lg:px-8 dark:border-gray-800 dark:bg-gray-950"
                      >
                        <div
                          className={cx(
                            !plan.isStarter
                              ? "text-blue-600 dark:text-blue-400"
                              : "text-gray-900 dark:text-gray-50",
                            "leading-7 font-semibold",
                          )}
                        >
                          {plan.name}
                        </div>
                        <div className="text-sm font-normal text-gray-600 dark:text-gray-400">
                          {isVariablePrice(plan.price)
                            ? `${
                                billingFrequency === "monthly"
                                  ? plan.price.monthly
                                  : plan.price.annually
                              } / per user`
                            : plan.price}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sections.map((section, sectionIdx) => (
                    <Fragment key={section.name}>
                      <tr>
                        <th
                          scope="colgroup"
                          colSpan={4}
                          className={cx(
                            sectionIdx === 0 ? "pt-14" : "pt-10",
                            "border-b border-gray-100 pb-4 text-base leading-6 font-semibold text-gray-900 dark:border-gray-800 dark:text-gray-50",
                          )}
                        >
                          {section.name}
                        </th>
                      </tr>
                      {section.features.map((feature) => (
                        <tr
                          key={feature.name}
                          className="transition hover:bg-blue-50/30 dark:hover:bg-blue-800/5"
                        >
                          <th
                            scope="row"
                            className="flex items-center gap-2 border-b border-gray-100 py-4 text-sm leading-6 font-normal text-gray-900 dark:border-gray-800 dark:text-gray-50"
                          >
                            <span>{feature.name}</span>
                            {feature.tooltip ? (
                              <Tooltip side="right" content={feature.tooltip}>
                                <RiInformationLine
                                  className="size-4 shrink-0 text-gray-700 dark:text-gray-400"
                                  aria-hidden="true"
                                />
                              </Tooltip>
                            ) : null}
                          </th>
                          {plans.map((plan) => (
                            <td
                              key={plan.name}
                              className="border-b border-gray-100 px-6 py-4 lg:px-8 dark:border-gray-800"
                            >
                              {typeof feature.plans[plan.name] === "string" ? (
                                <div className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                                  {feature.plans[plan.name]}
                                </div>
                              ) : (
                                <>
                                  {feature.plans[plan.name] === true ? (
                                    <RiCheckLine
                                      className="h-5 w-5 text-blue-600 dark:text-blue-400"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <RiSubtractLine
                                      className="h-5 w-5 text-gray-400 dark:text-gray-600"
                                      aria-hidden="true"
                                    />
                                  )}

                                  <span className="sr-only">
                                    {feature.plans[plan.name] === true
                                      ? "Included"
                                      : "Not included"}{" "}
                                    in {plan.name}
                                  </span>
                                </>
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </Fragment>
                  ))}
                  <tr>
                    <th
                      scope="row"
                      className="pt-6 text-sm leading-6 font-normal text-gray-900 dark:text-gray-50"
                    >
                      <span className="sr-only">Link to activate plan</span>
                    </th>
                    {plans.map((plan) => (
                      <td key={plan.name} className="px-6 pt-6 lg:px-8">
                        {plan.isStarter ? (
                          <Button
                            variant="light"
                            asChild
                            className="group bg-transparent px-0 text-base hover:bg-transparent dark:bg-transparent hover:dark:bg-transparent"
                          >
                            <Link href={plan.buttonLink}>
                              {plan.buttonText}
                            </Link>
                          </Button>
                        ) : (
                          <Button
                            variant="light"
                            asChild
                            className="group bg-transparent px-0 text-base text-blue-600 hover:bg-transparent dark:bg-transparent dark:text-blue-400 hover:dark:bg-transparent"
                          >
                            <Link href={plan.buttonLink}>
                              {plan.buttonText}
                            </Link>
                          </Button>
                        )}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
```


