"use client"

import { Card } from "../../atom/Card"

const data = [
  //array-start
  {
    name: "Running",
    stat: "156",
    activities: [
      {
        type: "Endurance",
        share: "25.5%",
        zone: "<126",
        href: "#",
      },
      {
        type: "Moderate",
        share: "35.3%",
        zone: "126-157",
        href: "#",
      },
      {
        type: "Tempo",
        share: "14.2%",
        zone: "157-173",
        href: "#",
      },
      {
        type: "Threshold",
        share: "25.0%",
        zone: "173-189",
        href: "#",
      },
    ],
  },
  {
    name: "Cycling",
    stat: "142",
    activities: [
      {
        type: "Endurance",
        share: "20.2%",
        zone: "<126",
        href: "#",
      },
      {
        type: "Moderate",
        share: "45.6%",
        zone: "126-157",
        href: "#",
      },
      {
        type: "Tempo",
        share: "15.7%",
        zone: "157-173",
        href: "#",
      },
      {
        type: "Threshold",
        share: "18.5%",
        zone: "173-189",
        href: "#",
      },
    ],
  },
  {
    name: "Strength",
    stat: "113",
    activities: [
      {
        type: "Endurance",
        share: "80.1%",
        zone: "<126",
        href: "#",
      },
      {
        type: "Moderate",
        share: "9.9%",
        zone: "126-157",
        href: "#",
      },
      {
        type: "Tempo",
        share: "6.2%",
        zone: "157-173",
        href: "#",
      },
      {
        type: "Threshold",
        share: "3.8%",
        zone: "173-189",
        href: "#",
      },
    ],
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
            <dd className="flex items-baseline space-x-2 text-gray-900 dark:text-gray-50">
              <span className="text-3xl font-semibold">{item.stat}</span>
              <span className="text-sm font-medium">bpm</span>
            </dd>
            <dd className="items-space mt-6 flex justify-between text-xs text-gray-500 dark:text-gray-500">
              <span>HR zone share</span>
              <span>BPM range</span>
            </dd>
            <ul role="list" className="mt-2 space-y-2">
              {item.activities.map((activity) => (
                <li
                  key={activity.type}
                  className="relative flex w-full items-center space-x-3 rounded-md bg-gray-100/60 p-1 hover:bg-gray-100 dark:bg-gray-800/60 hover:dark:bg-gray-800"
                >
                  <span className="inline-flex w-20 justify-center rounded bg-sky-500 py-1.5 text-sm font-semibold text-white dark:bg-sky-500 dark:text-white">
                    {activity.share}
                  </span>
                  <p className="flex w-full items-center justify-between space-x-4 truncate text-sm font-medium">
                    <span className="text-gary-500 truncate dark:text-gray-500">
                      <a href={activity.href} className="focus:outline-none">
                        {/* Extend link to entire card */}
                        <span className="absolute inset-0" aria-hidden={true} />
                        {activity.type}
                      </a>
                    </span>
                    <span className="pr-1.5 text-gray-900 dark:text-gray-50">
                      {activity.zone}
                    </span>
                  </p>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </dl>
    </div>
  )
}
