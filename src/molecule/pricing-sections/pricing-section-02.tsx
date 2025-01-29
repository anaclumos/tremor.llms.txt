"use client"

import { RiCheckboxCircleFill } from "@remixicon/react"

import { cx } from "@/lib/utils"

import { Badge } from "../../atom/Badge"
import { Button } from "../../atom/Button"

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
