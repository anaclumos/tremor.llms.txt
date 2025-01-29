"use client"

import { RiCheckboxCircleFill } from "@remixicon/react"

import { Button } from "../../atoms/Button"

const steps = [
  //array-start
  {
    id: "1.",
    title: "Set up your organization",
    description:
      "You successfully created your account. You can edit your account details anytime.",
    status: "complete",
  },
  {
    id: "2.",
    title: "Connect to data source",
    description:
      "The platform supports more than 50 databases and data warehouses.",
    status: "open",
  },
  {
    id: "3.",
    title: "Create metrics",
    description: "Create metrics using custom SQL or our intuitive query mask.",
    status: "open",
  },
  {
    id: "4.",
    title: "Create report",
    description:
      "Transform metrics into visualizations and arrange them visually.",
    status: "open",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="sm:mx-auto sm:max-w-lg">
        <h3 className="dark:text-gary-50 text-lg font-semibold text-gray-900">
          Getting started
        </h3>
        <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
          Follow the steps to set up your workspace. This allows you to create
          your first dashboard.
        </p>
        <ul className="mt-6 space-y-4">
          {steps.map((step) => (
            <li
              key={step.id}
              className="rounded-lg border border-gray-300 bg-white p-4 dark:border-gray-800 dark:bg-gray-950"
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
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
                    {step.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex items-center justify-end space-x-4">
          <Button variant="ghost">Back</Button>
          <Button>Continue</Button>
        </div>
      </div>
    </div>
  )
}
