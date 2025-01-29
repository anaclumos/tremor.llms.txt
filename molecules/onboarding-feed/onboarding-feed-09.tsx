"use client"

import {
  RiCheckboxCircleFill,
  RiLoader2Fill,
  RiProgress5Fill,
} from "@remixicon/react"

import { cx } from "@/lib/utils"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../atoms/Accordion"
import { ProgressBar } from "../../atoms/ProgressBar"

const steps = [
  //array-start
  {
    id: 1,
    type: "created",
    description: "Connect database",
    value: 100,
    createdOn: "2023-11-10 09:32",
    runTime: "15min 32s",
  },
  {
    id: 2,
    type: "created",
    description: "Import data",
    value: 100,
    createdOn: "2023-11-10 10:03",
    runTime: "21min 10s",
  },
  {
    id: 3,
    type: "in progress",
    description: "Create pipeline",
    value: 45,
    createdOn: "2023-11-10 10:06",
    runTime: null,
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="sm:mx-auto sm:max-w-xl">
        <h3 className="font-semibold text-gray-900 dark:text-gray-50">
          Deploy Pipeline
        </h3>
        <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr
        </p>
        <div className="mt-6 flex items-center space-x-2">
          {steps.map((step, stepindex) => (
            <div key={stepindex} className="w-full truncate">
              <ProgressBar value={step.value} className="[&>*]:h-1.5" />
              <div className="mt-2 flex items-center space-x-1 truncate">
                {step.value === 100 ? (
                  <RiCheckboxCircleFill
                    className="size-4 shrink-0 text-blue-500 dark:text-blue-500"
                    aria-hidden={true}
                  />
                ) : (
                  <RiProgress5Fill
                    className="size-4 shrink-0 text-blue-500 dark:text-blue-500"
                    aria-hidden={true}
                  />
                )}
                <p className="truncate text-xs text-gray-500 dark:text-gray-500">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Accordion
          type="single"
          collapsible
          defaultValue="item1"
          className="mt-8 space-y-2"
        >
          <AccordionItem
            value="item1"
            key="item1"
            className="rounded-md border border-gray-200 px-4 shadow-sm dark:border-gray-800"
          >
            <AccordionTrigger>Logs overview ({steps.length})</AccordionTrigger>
            <AccordionContent>
              <ul role="list" className="mt-2 space-y-6 pb-2">
                {steps.map((step, stepindex) => (
                  <li key={step.id} className="relative flex gap-x-3">
                    <div
                      className={cx(
                        stepindex === steps.length - 1 ? "h-6" : "-bottom-6",
                        "absolute left-0 top-0 flex w-6 justify-center",
                      )}
                    >
                      <span
                        className="w-px bg-gray-200 dark:bg-gray-700"
                        aria-hidden={true}
                      />
                    </div>
                    <div className="flex items-start space-x-2.5">
                      <div className="relative flex size-6 flex-none items-center justify-center bg-white dark:bg-gray-950">
                        {step.type === "created" ? (
                          <div className="size-3 rounded-full border border-gray-300 bg-gray-100 ring-4 ring-white dark:border-gray-700 dark:bg-gray-800 dark:ring-gray-950" />
                        ) : (
                          <RiLoader2Fill
                            className="size-[18px] shrink-0 animate-spin text-blue-500"
                            aria-hidden="true"
                          />
                        )}
                      </div>
                      <div>
                        <p className="mt-0.5 text-sm font-medium text-gray-900 dark:text-gray-50">
                          {step.description}
                        </p>
                        {step.type === "created" ? (
                          <p className="text-sm/6 text-gray-500 dark:text-gray-500">
                            Created on {step.createdOn}, Runtime: {step.runTime}
                          </p>
                        ) : (
                          <p className="text-sm/6 text-gray-500 dark:text-gray-500">
                            4/6 tasks completed, Running now...
                          </p>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
