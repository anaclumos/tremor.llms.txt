"use client"

import { RiCheckboxCircleFill } from "@remixicon/react"

import { cx } from "@/lib/utils"

import { Button } from "../../atoms/Button"

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
              <h3 className="font-semibold leading-8 text-gray-900 dark:text-gray-50">
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
