"use client"

import { cx } from "@/lib/utils"

const steps = [
  //array-start
  {
    id: 1,
    type: "created",
    description: "Created Workspace",
    user: {
      name: "Adam W.",
      initial: "A",
      bgColor: "bg-violet-500",
    },
    activityTime: "3d ago",
  },
  {
    id: 2,
    type: "created",
    description: "Renamed workspace",
    user: {
      name: "Peter H.",
      initial: "P",
      bgColor: "bg-orange-500",
    },
    activityTime: "2d ago",
  },
  {
    id: 3,
    type: "created",
    description: "Added MySQL database to workspace",
    user: {
      name: "Adam W.",
      initial: "A",
      bgColor: "bg-emerald-500",
    },
    activityTime: "2h ago",
  },
  {
    id: 4,
    type: "created",
    description: "Changed access permission to private",
    user: {
      name: "George S.",
      initial: "G",
      bgColor: "bg-fuchsia-500",
    },
    activityTime: "5min ago",
  },
  {
    id: 5,
    type: "in progress",
    description: "Has to run audit trails",
    user: {
      name: "Admin Workspace",
      initial: "A",
      bgColor: "bg-blue-500",
    },
    activityTime: "today 2:30pm",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="sm:max-w-lg md:mx-auto">
        <h3 className="font-medium text-gray-900 dark:text-gray-50">
          Workspace history
        </h3>
        <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr
        </p>
        <ul role="list" className="mt-6 space-y-6 pb-2">
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
              <div className="flex items-start space-x-2">
                <div className="flex items-center space-x-2">
                  <div className="relative flex size-6 flex-none items-center justify-center bg-white transition dark:bg-gray-950">
                    {step.type === "created" ? (
                      <div className="size-3 rounded-full border border-gray-300 bg-gray-100 ring-4 ring-white transition dark:border-gray-700 dark:bg-gray-800 dark:ring-gray-950" />
                    ) : (
                      <div className="size-3 rounded-full border border-gray-300 bg-white ring-4 ring-white transition dark:border-gray-700 dark:bg-gray-950 dark:ring-gray-950" />
                    )}
                  </div>
                  <span
                    className={cx(
                      step.user.bgColor,
                      "inline-flex size-6 flex-none items-center justify-center rounded-full text-xs text-white dark:text-white",
                    )}
                    aria-hidden={true}
                  >
                    {step.user.initial}
                  </span>
                </div>
                <p className="mt-0.5 text-sm font-medium text-gray-900 dark:text-gray-50">
                  {step.user.name}
                  <span className="font-normal text-gray-500 dark:text-gray-500">
                    {" "}
                    {step.description}
                  </span>
                  <span className="font-normal text-gray-400 dark:text-gray-600">
                    {" "}
                    &#8729; {step.activityTime}
                  </span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
