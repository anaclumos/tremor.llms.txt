"use client"

import {
  RiArrowRightSLine,
  RiCheckLine,
  RiErrorWarningFill,
  RiEyeFill,
} from "@remixicon/react"

import { cx } from "@/lib/utils"

import { Card } from "../../atom/Card"

const data = [
  //array-start
  {
    name: "Europe",
    stat: "$10,023",
    goalsAchieved: 3,
    status: "observe",
    href: "#",
  },
  {
    name: "North America",
    stat: "$14,092",
    goalsAchieved: 5,
    status: "within",
    href: "#",
  },
  {
    name: "Asia",
    stat: "$113,232",
    goalsAchieved: 1,
    status: "critical",
    href: "#",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <Card key={item.name}>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-500">
              {item.name}
            </dt>
            <dd className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
              {item.stat}
            </dd>
            <div className="group relative mt-6 flex items-center space-x-4 rounded-md bg-gray-100/60 p-2 hover:bg-gray-100 dark:bg-gray-800/60 hover:dark:bg-gray-800">
              <div className="flex w-full items-center justify-between truncate">
                <div className="flex items-center space-x-3">
                  <span
                    className={cx(
                      item.status === "within"
                        ? "bg-emerald-500 text-white dark:bg-emerald-500"
                        : item.status === "observe"
                          ? "bg-yellow-500 text-white dark:bg-yellow-500"
                          : "bg-red-500 text-white dark:bg-red-500",
                      "flex size-9 shrink-0 items-center justify-center rounded",
                    )}
                  >
                    {item.status === "within" ? (
                      <RiCheckLine
                        className="size-4 shrink-0"
                        aria-hidden={true}
                      />
                    ) : item.status === "observe" ? (
                      <RiEyeFill
                        className="size-4 shrink-0"
                        aria-hidden={true}
                      />
                    ) : (
                      <RiErrorWarningFill
                        className="size-4 shrink-0"
                        aria-hidden={true}
                      />
                    )}
                  </span>
                  <dd>
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                      <a href={item.href} className="focus:outline-none">
                        {/* Extend link to entire card */}
                        <span className="absolute inset-0" aria-hidden={true} />
                        {item.goalsAchieved}/5 goals
                      </a>
                    </p>
                    <p
                      className={cx(
                        item.status === "within"
                          ? "text-emerald-800 dark:text-emerald-500"
                          : item.status === "observe"
                            ? "text-yellow-800 dark:text-yellow-500"
                            : "text-red-800 dark:text-red-500",
                        "text-sm font-medium",
                      )}
                    >
                      {item.status}
                    </p>
                  </dd>
                </div>
                <RiArrowRightSLine
                  className="size-5 shrink-0 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 group-hover:dark:text-gray-500"
                  aria-hidden={true}
                />
              </div>
            </div>
          </Card>
        ))}
      </dl>
    </div>
  )
}
