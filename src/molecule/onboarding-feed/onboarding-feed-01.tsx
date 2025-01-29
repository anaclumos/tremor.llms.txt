"use client"

import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleFill,
  RiDatabase2Line,
} from "@remixicon/react"

import { Button } from "@/atom/Button"

const steps = [
  //array-start
  {
    id: 1,
    type: "done",
    title: "Sign in with your account",
    description:
      "To get started, log in with your organization account from your company.",
    href: "#",
  },
  {
    id: 2,
    type: "in progress",
    title: "Import data",
    description:
      "Connect your database to the new workspace by using one of 20+ database connectors.",
    href: "#",
  },
  {
    id: 3,
    type: "open",
    title: "Create your first report",
    description:
      "Generate your first report by using our pre-built templates or easy-to-use report builder.",
    href: "#",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="sm:mx-auto sm:max-w-lg">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
          Hello, Maxime
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-500">
          Let's set up your first data workspace
        </p>
        <ul role="list" className="mt-8 space-y-3">
          {steps.map((step) =>
            step.type === "done" ? (
              <li key={step.id} className="relative p-4">
                <div className="flex items-start">
                  <RiCheckboxCircleFill
                    className="size-6 shrink-0 text-blue-500 dark:text-blue-500"
                    aria-hidden={true}
                  />
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="leading-5 font-medium text-gray-900 dark:text-gray-50">
                      <a href={step.href} className="focus:outline-none">
                        {/* extend link to entire list card */}
                        <span className="absolute inset-0" aria-hidden={true} />
                        {step.title}
                      </a>
                    </p>
                    <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
                      {step.description}
                    </p>
                  </div>
                </div>
              </li>
            ) : step.type === "in progress" ? (
              <li
                key={step.id}
                className="rounded-lg bg-gray-50 p-4 dark:bg-gray-900"
              >
                <div className="flex items-start">
                  <RiCheckboxBlankCircleLine
                    className="size-6 shrink-0 text-blue-500 dark:text-blue-500"
                    aria-hidden={true}
                  />
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="leading-5 font-medium text-gray-900 dark:text-gray-50">
                      {step.title}
                    </p>
                    <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
                      {step.description}
                    </p>
                    <Button className="mt-4 gap-1.5">
                      <RiDatabase2Line
                        className="-ml-0.5 size-5 shrink-0"
                        aria-hidden={true}
                      />
                      Connect database
                    </Button>
                  </div>
                </div>
              </li>
            ) : (
              <li key={step.id} className="relative p-4">
                <div className="flex items-start">
                  <RiCheckboxBlankCircleLine
                    className="size-6 shrink-0 text-gray-400 dark:text-gray-600"
                    aria-hidden={true}
                  />
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="leading-5 font-medium text-gray-400 dark:text-gray-600">
                      <a href={step.href} className="focus:outline-none">
                        {/* extend link to entire list card */}
                        <span className="absolute inset-0" aria-hidden={true} />
                        {step.title}
                      </a>
                    </p>
                    <p className="mt-1 text-sm/6 text-gray-400 dark:text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </li>
            ),
          )}
        </ul>
      </div>
    </div>
  )
}
