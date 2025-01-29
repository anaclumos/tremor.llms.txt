"use client"

import { RiCheckLine, RiErrorWarningLine, RiEyeLine } from "@remixicon/react"

import { cx } from "@/lib/utils"

import { Card } from "../../atoms/Card"

const data = [
  //array-start
  {
    name: "Daily active users",
    stat: "345",
    status: "within",
    range: "200-410",
  },
  {
    name: "Weekly sessions",
    stat: "254",
    status: "critical",
    range: "550-1,200",
  },
  {
    name: "Open issues",
    stat: "34",
    status: "observe",
    range: "10-25",
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
            <dd
              className={cx(
                item.status === "within"
                  ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-400/10 dark:text-emerald-500"
                  : item.status === "observe"
                    ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-400/10 dark:text-yellow-500"
                    : "bg-red-100 text-red-800 dark:bg-red-400/10 dark:text-red-500",
                "mt-4 inline-flex items-center gap-x-1.5 rounded-md px-2 py-1.5 text-xs font-medium",
              )}
            >
              {item.status === "within" ? (
                <RiCheckLine className="size-4 shrink-0" aria-hidden={true} />
              ) : item.status === "observe" ? (
                <RiEyeLine className="size-4 shrink-0" aria-hidden={true} />
              ) : (
                <RiErrorWarningLine
                  className="size-4 shrink-0"
                  aria-hidden={true}
                />
              )}
              {item.status}: {item.range}
            </dd>
          </Card>
        ))}
      </dl>
    </div>
  )
}
