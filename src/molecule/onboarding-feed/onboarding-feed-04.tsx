"use client"

import {
  RiCalculatorLine,
  RiCheckboxCircleFill,
  RiDatabase2Line,
  RiFileChartLine,
  RiSoundModuleLine,
} from "@remixicon/react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../atom/Accordion"
import { Button } from "../../atom/Button"

const steps = [
  //array-start
  {
    title: "Sign up and create workspace",
    subtitle: "Account created",
    icon: RiSoundModuleLine,
    description:
      "You successfully created your account. Edit your account details anytime.",
    buttonText: "Edit account",
    status: "complete",
  },
  {
    title: "Connect to data source",
    subtitle: "Create connection",
    icon: RiDatabase2Line,
    description:
      "Connect to a data source. The platform supports more than 50 databases.",
    buttonText: "Connect data source",
    status: "current",
  },
  {
    title: "Create metrics",
    subtitle: "Create a metric",
    icon: RiCalculatorLine,
    description: "Create metrics using custom SQL or our intuitive query mask.",
    buttonText: "Create metric",
    status: "upcoming",
  },
  {
    title: "Create report",
    subtitle: "Create a report",
    icon: RiFileChartLine,
    description:
      "Transform metrics into visualizations and arrange them visually with our report builder.",
    buttonText: "Create report",
    status: "upcoming",
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
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
          Follow the steps to set up your workspace
        </p>
        <Accordion
          type="multiple"
          defaultValue={["Connect to data source"]}
          className="mt-6 space-y-2"
        >
          {steps.map((step) =>
            step.status === "complete" ? (
              <AccordionItem
                value={step.title}
                key={step.title}
                className="rounded-md border !border-gray-300 !px-4 !shadow-sm dark:!border-gray-800"
              >
                <AccordionTrigger>
                  <div className="flex items-center space-x-2">
                    {/* Additional span wrapper for icon to align it with icons in other accordions */}
                    <span
                      className="flex size-5 items-center justify-center"
                      aria-hidden={true}
                    >
                      <RiCheckboxCircleFill
                        className="size-6 shrink-0 text-emerald-500"
                        aria-hidden={true}
                      />
                    </span>
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
                      {step.title}
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="!pb-4 !pt-2">
                  <div className="flex items-center justify-center rounded-md bg-gray-50 px-4 py-5 ring-1 ring-inset ring-gray-200 dark:bg-gray-900 dark:ring-gray-800">
                    <div className="max-w-xs text-center">
                      {/* custom color used to optimize this edge case */}
                      <step.icon
                        className="mx-auto size-7 shrink-0 text-gray-300 dark:text-gray-700"
                        aria-hidden={true}
                      />
                      <p className="mt-4 text-sm font-semibold text-gray-400 dark:text-gray-600">
                        {step.subtitle}
                      </p>
                      <p className="mt-1 text-sm text-gray-400 dark:text-gray-600">
                        {step.description}
                      </p>
                      <Button className="mt-6" variant="secondary" disabled>
                        {step.buttonText}
                      </Button>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ) : step.status === "current" ? (
              <AccordionItem
                value={step.title}
                key={step.title}
                className="rounded-md border !border-gray-300 !px-4 !shadow-sm dark:!border-gray-800"
              >
                <AccordionTrigger>
                  <div className="flex items-center space-x-2">
                    <span
                      className="size-5 shrink-0 rounded-full border border-gray-200 dark:border-gray-800"
                      aria-hidden={true}
                    />
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
                      {step.title}
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="!pb-4 !pt-2">
                  <div className="flex items-center justify-center rounded-md bg-gray-50 px-4 py-5 ring-1 ring-inset ring-gray-200 dark:bg-gray-900 dark:ring-gray-800">
                    <div className="max-w-xs text-center">
                      <step.icon
                        className="mx-auto size-7 shrink-0 text-gray-400 dark:text-gray-600"
                        aria-hidden={true}
                      />
                      <p className="mt-4 text-sm font-semibold text-gray-900 dark:text-gray-50">
                        {step.subtitle}
                      </p>
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
                        {step.description}
                      </p>
                      <Button className="mt-6">{step.buttonText}</Button>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ) : (
              <AccordionItem
                value={step.title}
                key={step.title}
                className="rounded-md !border !border-gray-300 !px-4 shadow-sm dark:!border-gray-800"
              >
                <AccordionTrigger>
                  <div className="flex items-center space-x-2">
                    <span
                      className="size-5 shrink-0 rounded-full border border-gray-200 dark:border-gray-800"
                      aria-hidden={true}
                    />
                    <p className="text-sm font-medium text-gray-400 dark:text-gray-600">
                      {step.title}
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4 pt-2">
                  <div className="flex items-center justify-center rounded-md bg-gray-50 px-4 py-5 ring-1 ring-inset ring-gray-200 dark:bg-gray-900 dark:ring-gray-800">
                    <div className="max-w-xs text-center">
                      {/* custom color used to optimize this edge case */}
                      <step.icon
                        className="mx-auto size-7 shrink-0 text-gray-300 dark:text-gray-700"
                        aria-hidden={true}
                      />
                      <p className="mt-4 text-sm font-semibold text-gray-400 dark:text-gray-600">
                        {step.subtitle}
                      </p>
                      <p className="mt-1 text-sm text-gray-400 dark:text-gray-600">
                        {step.description}
                      </p>
                      <Button className="mt-6" disabled>
                        {step.buttonText}
                      </Button>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ),
          )}
        </Accordion>
      </div>
    </div>
  )
}
