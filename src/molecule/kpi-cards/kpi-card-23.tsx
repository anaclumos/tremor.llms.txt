"use client"

import { RiArrowRightUpLine } from "@remixicon/react"

import { cx } from "@/lib/utils"

import { Card } from "../../atom/Card"
import { CategoryBar } from "../../atom/CategoryBar"

const data = [
  //array-start
  {
    channel: "Direct sales",
    share: 34.4,
    revenue: "$100.5K",
    color: "bg-blue-500",
    href: "#",
  },
  {
    channel: "Retail stores",
    share: 30.6,
    revenue: "$89.5K",
    color: "bg-orange-500",
    href: "#",
  },
  {
    channel: "E-commerce",
    share: 20.9,
    revenue: "$61.2K",
    color: "bg-sky-500",
    href: "#",
  },
  {
    channel: "Wholesale",
    share: 14.1,
    revenue: "$41.2K",
    color: "bg-gray-500",
    href: "#",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="sm:mx-auto sm:max-w-2xl">
        <h3 className="text-sm text-gray-500 dark:text-gray-500">
          Total sales
        </h3>
        <p className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
          $292,400
        </p>
        <h4 className="mt-4 text-sm text-gray-500 dark:text-gray-500">
          Sales channel distribution
        </h4>
        <CategoryBar
          values={[34.4, 30.6, 20.9, 14.1]}
          colors={["blue", "amber", "cyan", "gray"]}
          showLabels={false}
          className="mt-4"
        />
        <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {data.map((item) => (
            <Card key={item.channel} className="group rounded-md px-3 py-2">
              <div className="flex items-center space-x-2">
                <span
                  className={cx(item.color, "size-2.5 rounded-sm")}
                  aria-hidden={true}
                />
                <dt className="text-sm text-gray-500 dark:text-gray-500">
                  <a href={item.href} className="focus:outline-none">
                    {/* Extend link to entire card */}
                    <span className="absolute inset-0" aria-hidden={true} />
                    {item.channel}
                  </a>
                </dt>
              </div>
              <dd className="mt-1 text-sm text-gray-900 dark:text-gray-50">
                <span className="font-semibold">{item.share}%</span> &#8729;{" "}
                {item.revenue}
              </dd>
              <span
                className="pointer-events-none absolute right-2 top-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-600 group-hover:dark:text-gray-500"
                aria-hidden={true}
              >
                <RiArrowRightUpLine className="size-4" aria-hidden={true} />
              </span>
            </Card>
          ))}
        </dl>
      </div>
    </div>
  )
}
