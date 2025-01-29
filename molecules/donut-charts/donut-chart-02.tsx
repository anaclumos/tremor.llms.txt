"use client"

import { cx } from "@/lib/utils"

import { Card } from "../../atoms/Card"
import { ProgressCircle } from "../../atoms/ProgressCircle"

const data = [
  //array-start
  {
    region: "Europe",
    value: 56.5,
    color: "bg-amber-500 dark:bg-amber-500",
    href: "#",
    subregions: [
      {
        name: "Central Europe",
        value: "1.2/2M",
      },
      {
        name: "North Europe",
        value: "2/2.8M",
      },
    ],
  },
  {
    region: "Asia",
    value: 66.4,
    color: "bg-emerald-500 dark:bg-emerald-500",
    href: "#",
    subregions: [
      {
        name: "China",
        value: "3.1/4M",
      },
      {
        name: "Japan",
        value: "2/2.8M",
      },
    ],
  },
  {
    region: "North America",
    value: 76.1,
    color: "bg-blue-500 dark:bg-blue-500",
    href: "#",
    subregions: [
      {
        name: "USA",
        value: "5.9/7M",
      },
      {
        name: "Canada",
        value: "1.8/2.5M",
      },
    ],
  },
  //array-end
]

export default function Example() {
  return (
    <>
      <Card className="!p-0 sm:mx-auto sm:max-w-xl">
        <div className="border-b border-gray-200 px-4 py-4 dark:border-gray-900">
          <h3 className="text-sm font-medium text-gray-900 dark:text-gray-50">
            Sales potential realization ($)
          </h3>
        </div>
        <div className="items-start p-6 sm:flex sm:space-x-10">
          <ProgressCircle value={76.1} radius={70} strokeWidth={7}>
            <ProgressCircle
              value={66.4}
              radius={60}
              strokeWidth={7}
              variant="success"
            >
              <ProgressCircle
                value={56.5}
                radius={50}
                strokeWidth={7}
                variant="warning"
              >
                <p>
                  <span className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                    7.8
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-500">
                    /10
                  </span>
                </p>
              </ProgressCircle>
            </ProgressCircle>
          </ProgressCircle>
          <ul role="list" className="mt-4 w-full sm:mt-0">
            {data.map((region) => (
              <li
                key={region.region}
                className="relative rounded-md px-3 py-2 hover:bg-gray-50 hover:dark:bg-gray-800"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span
                      className={cx(region.color, "size-2.5 rounded-sm")}
                      aria-hidden={true}
                    />
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
                      <a href={region.href} className="focus:outline-none">
                        {/* Extend touch target to entire panel */}
                        <span className="absolute inset-0" aria-hidden={true} />
                        {region.region}
                      </a>
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
                    {region.value}&#37;
                  </p>
                </div>
                <ul
                  role="list"
                  className="divide-y divide-gray-200 text-sm text-gray-500 dark:divide-gray-800 dark:text-gray-500"
                >
                  {region.subregions.map((subregion) => (
                    <li
                      key={subregion.name}
                      className="flex items-center justify-between py-2"
                    >
                      <span>{subregion.name}</span>
                      <span>{subregion.value}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </>
  )
}
