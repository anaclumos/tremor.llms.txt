"use client"

import { useState } from "react"
import { RiCheckLine } from "@remixicon/react"

import { cx } from "@/lib/utils"

import { Badge } from "../../atom/Badge"
import { Button } from "../../atom/Button"

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
                <div className="relative grid grid-cols-2 gap-x-1 rounded-full bg-white p-1 text-center text-xs/5 font-semibold ring-1 ring-inset ring-gray-200 dark:bg-gray-950 dark:ring-gray-800">
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
