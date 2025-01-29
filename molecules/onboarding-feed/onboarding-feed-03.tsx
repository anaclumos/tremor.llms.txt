"use client"

import { RiCheckboxCircleFill } from "@remixicon/react"

import { ProgressBar } from "../../atoms/ProgressBar"

const steps = [
  //array-start
  {
    id: "1.",
    title: "Set up your organization",
    description:
      "You successfully created your account. You can edit your account details anytime.",
    status: "complete",
    href: "#",
  },
  {
    id: "2.",
    title: "Connect to data source",
    description:
      "The platform supports more than 50 databases and data warehouses.",
    status: "open",
    href: "#",
  },
  {
    id: "3.",
    title: "Create metrics",
    description: "Create metrics using custom SQL or our intuitive query mask.",
    status: "open",
    href: "#",
  },
  {
    id: "4.",
    title: "Create report",
    description:
      "Transform metrics into visualizations and arrange them visually.",
    status: "open",
    href: "#",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="sm:mx-auto sm:max-w-lg">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
          Getting started
        </h3>
        <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
          Follow the steps to set up your workspace. This allows you to create
          your first dashboard.
        </p>
        <div className="mt-4 flex items-center justify-end space-x-4">
          <span className="text-sm text-gray-500 dark:text-gray-500">
            Step 1/{steps.length}
          </span>
          <ProgressBar value={25} showAnimation={false} className="!w-32" />
        </div>
        <ul role="list" className="mt-4 space-y-4">
          {steps.map((step) => (
            <li
              key={step.id}
              className="relative rounded-lg border border-gray-300 bg-white p-4 dark:border-gray-800 dark:bg-gray-950"
            >
              <div className="flex items-start space-x-3">
                {step.status === "complete" ? (
                  <RiCheckboxCircleFill
                    className="size-6 shrink-0 text-blue-500 dark:text-blue-500"
                    aria-hidden={true}
                  />
                ) : (
                  <span
                    className="flex size-6 items-center justify-center font-medium text-gray-500 dark:text-gray-500"
                    aria-hidden={true}
                  >
                    {step.id}
                  </span>
                )}
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-gray-50">
                    <a href={step.href} className="focus:outline-none">
                      {/* extend link to entire card */}
                      <span className="absolute inset-0" aria-hidden={true} />
                      {step.title}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
                    {step.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-6 rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
          <h4 className="text-sm font-medium text-gray-900 dark:text-gray-50">
            Need help?
          </h4>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
            Connect with a member of our team at{" "}
            <a
              href="mailto:support@company.com"
              className="font-medium text-blue-500 dark:text-blue-500"
            >
              support@company.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
