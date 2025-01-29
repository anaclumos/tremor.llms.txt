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
