"use client"

import { RiCashLine, RiLinksLine, RiSafeLine } from "@remixicon/react"

import { cx } from "@/lib/utils"

import { Card } from "../../atoms/Card"

const data = [
  {
    name: "Revenue",
    stat: "10,450",
    change: "-12.5%",
    changeType: "negative",
    icon: RiCashLine,
    top3: {
      "Membership Dues": 4734,
      Fundraisers: 3233,
      Donations: 2483,
    },
  },
  {
    name: "Expenses",
    stat: "3,382",
    change: "+1.8%",
    changeType: "positive",
    icon: RiSafeLine,
    top3: {
      "Operational Costs": 1691,
      Marketing: 845,
      Equipment: 846,
    },
  },
  {
    name: "Engagement",
    stat: "80.2%",
    change: "+19.7%",
    changeType: "positive",
    icon: RiLinksLine,
    top3: {
      "Social Media Interactions": 40.1,
      "Event Attendance": 24.1,
      "Volunteer Participation": 16.0,
    },
  },
]

export default function Example() {
  return (
    <div className="obfuscate">
      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <Card key={item.name}>
            <dt className="flex flex-nowrap items-center gap-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
              <div className="rounded-md p-1.5 shadow ring-1 ring-black/5 dark:ring-white/15">
                <item.icon className="size-5 shrink-0" aria-hidden="true" />
              </div>
              <span>{item.name}</span>
            </dt>
            <dd className="mt-3 flex items-baseline justify-between space-x-2.5">
              <span className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
                {item.stat}
              </span>
              <span
                className={cx(
                  item.changeType === "positive"
                    ? "text-emerald-700 dark:text-emerald-500"
                    : "text-red-700 dark:text-red-500",
                  "text-sm font-medium",
                )}
              >
                {item.change}
              </span>
            </dd>
            <div className="mt-5 flex flex-col gap-3">
              {Object.entries(item.top3).map(([title, value]) => (
                <div key={title} className="flex justify-between text-sm">
                  <div className="truncate text-gray-600 dark:text-gray-400">
                    {title}
                  </div>
                  <div className="font-medium text-gray-900 dark:text-gray-50">
                    {typeof value === "number" && item.name !== "Engagement"
                      ? `$${value.toLocaleString()}`
                      : `${value}${item.name === "Engagement" ? "%" : ""}`}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </dl>
    </div>
  )
}
