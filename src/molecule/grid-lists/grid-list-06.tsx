"use client"

import { RiStackLine, RiWifiLine } from "@remixicon/react"

import { Card } from "../../atom/Card"

const data = [
  //array-start
  {
    tag: "pipeline-145",
    name: "sales_by_channel_per_day_materialized",
    lastEdited: "Sep 18",
    status: "live",
    type: "API",
    href: "#",
  },
  {
    tag: "pipeline-321",
    name: "total_sales_api",
    lastEdited: "Sep 20",
    status: "live",
    type: "API",
    href: "#",
  },
  {
    tag: "pipeline-543",
    name: "top_products_by_units_sold_api",
    lastEdited: "Sep 01",
    status: "inactive",
    type: "materialized",
    href: "#",
  },
  {
    tag: "pipeline-002",
    name: "units_sold_by_location_per_hour_materialized",
    lastEdited: "Mar 15",
    status: "live",
    type: "materialized",
    href: "#",
  },
  {
    tag: "pipeline-149",
    name: "top_channels_by_sales_api",
    lastEdited: "Mar 15",
    status: "inactive",
    type: "API",
    href: "#",
  },
  {
    tag: "pipeline-004",
    name: "top_locations_by_sales_api",
    lastEdited: "Apr '04",
    status: "live",
    type: "API",
    href: "#",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <Card
            key={item.name}
            className="hover:bg-gray-50 hover:dark:bg-gray-900"
          >
            <dd className="flex items-center justify-between space-x-4 text-sm text-gray-500 dark:text-gray-500">
              <span>{item.tag}</span>
              <span>{item.lastEdited}</span>
            </dd>
            <dt className="mt-3 truncate font-medium text-gray-900 dark:text-gray-50">
              <a href={item.href} className="focus:outline-none">
                {/* Extend link to entire card */}
                <span className="absolute inset-0" aria-hidden={true} />
                {item.name}
              </a>
            </dt>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.status === "live" ? (
                <span className="inline-flex items-center gap-x-1.5 rounded-md bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-800 ring-1 ring-inset ring-emerald-600/10 dark:bg-emerald-500/10 dark:text-emerald-500 dark:ring-emerald-500/20">
                  <span
                    className="size-1.5 shrink-0 rounded-full bg-emerald-500 dark:bg-emerald-500"
                    aria-hidden={true}
                  />
                  {item.status}
                </span>
              ) : (
                <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-600/10 dark:bg-gray-500/10 dark:text-gray-400 dark:ring-gray-500/20">
                  {item.status}
                </span>
              )}
              {item.type === "API" ? (
                <span className="inline-flex items-center gap-x-1.5 rounded-md bg-pink-100 px-2 py-1 text-xs font-medium text-pink-800 ring-1 ring-inset ring-pink-600/10 dark:bg-pink-500/10 dark:text-pink-500 dark:ring-pink-500/20">
                  <RiWifiLine
                    className="size-3.5 shrink-0"
                    aria-hidden={true}
                  />
                  {item.type}
                </span>
              ) : (
                <span className="inline-flex items-center gap-x-1.5 rounded-md bg-sky-100 px-2 py-1 text-xs font-medium text-sky-800 ring-1 ring-inset ring-sky-600/10 dark:bg-sky-500/10 dark:text-sky-500 dark:ring-sky-500/20">
                  <RiStackLine
                    className="size-3.5 shrink-0"
                    aria-hidden={true}
                  />
                  {item.type}
                </span>
              )}
            </div>
          </Card>
        ))}
      </dl>
    </div>
  )
}
