"use client"

import { RiCheckLine } from "@remixicon/react"

import { cx } from "@/lib/utils"

const steps = [
  //array-start
  {
    id: 1,
    type: "done",
    title: "Created Workspace",
    description:
      "You successfully created your first workspace in privacy mode",
    activityTime: "3d ago",
  },
  {
    id: 2,
    type: "done",
    title: "Connected database",
    description: "Database connected to MySQL test database",
    activityTime: "2d ago",
  },
  {
    id: 3,
    type: "done",
    title: "Add payment method",
    description: "Payment method for monthly billing added",
    activityTime: "31min ago",
  },
  {
    id: 4,
    type: "in progress",
    title: "Audit trails",
    description: "Identifying security issues or unauthorized policy settings",
    activityTime: "Running now...",
  },
  {
    id: 5,
    type: "open",
    title: "Invite team members",
    description: "Add team members to workspace",
    activityTime: "Upcoming",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="sm:mx-auto sm:max-w-lg">
        <h3 className="font-medium text-gray-900 dark:text-gray-50">
          Workspace setup
        </h3>
        <ul role="list" className="mt-6 space-y-6">
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
                <div className="relative flex size-6 flex-none items-center justify-center bg-white transition dark:bg-gray-950">
                  {step.type === "done" ? (
                    <RiCheckLine
                      className="size-5 text-blue-500 dark:text-blue-500"
                      aria-hidden={true}
                    />
                  ) : step.type === "in progress" ? (
                    <div
                      className="size-2.5 rounded-full bg-blue-500 ring-4 ring-white transition dark:bg-blue-500 dark:ring-gray-950"
                      aria-hidden={true}
                    />
                  ) : (
                    <div
                      className="size-3 rounded-full border border-gray-200 bg-white ring-4 ring-white transition dark:border-gray-800 dark:bg-gray-950 dark:ring-gray-950"
                      aria-hidden={true}
                    />
                  )}
                </div>
                <div>
                  <p className="mt-0.5 text-sm font-medium text-gray-900 dark:text-gray-50">
                    {step.title}{" "}
                    <span className="font-normal text-gray-400 dark:text-gray-600">
                      &#8729; {step.activityTime}
                    </span>
                  </p>
                  <p className="mt-0.5 text-sm/6 text-gray-500 dark:text-gray-500">
                    {step.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
