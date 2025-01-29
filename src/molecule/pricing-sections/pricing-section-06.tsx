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
