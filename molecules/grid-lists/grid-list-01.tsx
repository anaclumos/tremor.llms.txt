"use client"

import { RiArrowRightUpLine } from "@remixicon/react"

import { cx } from "@/lib/utils"

import { Card } from "../../atoms/Card"
import { Divider } from "../../atoms/Divider"

const data = [
  //array-start
  {
    name: "Alissia Stone",
    initials: "AS",
    email: "a.stone@gmail.com",
    textColor: "text-fuchsia-800 dark:text-fuchsia-500",
    bgColor: "bg-fuchsia-100 dark:bg-fuchsia-500/20",
    href: "#",
  },
  {
    name: "Emma Bern",
    initials: "EB",
    email: "e.bern@gmail.com",
    textColor: "text-blue-800 dark:text-blue-500",
    bgColor: "bg-blue-100 dark:bg-blue-500/20",
    href: "#",
  },
  {
    name: "Aaron McFlow",
    initials: "AM",
    email: "a.flow@acme.com",
    textColor: "text-pink-800 dark:text-pink-500",
    bgColor: "bg-pink-100 dark:bg-pink-500/20",
    href: "#",
  },
  {
    name: "Thomas Palstein",
    initials: "TP",
    email: "t.palstein@acme.com",
    textColor: "text-emerald-800 dark:text-emerald-500",
    bgColor: "bg-emerald-100 dark:bg-emerald-500/20",
    href: "#",
  },
  {
    name: "Sarah Johnson",
    initials: "SJ",
    email: "s.johnson@gmail.com",
    textColor: "text-orange-800 dark:text-orange-500",
    bgColor: "bg-orange-100 dark:bg-orange-500/20",
    href: "#",
  },
  {
    name: "David Smith",
    initials: "DS",
    email: "d.smith@gmail.com",
    textColor: "text-indigo-800 dark:text-indigo-500",
    bgColor: "bg-indigo-100 dark:bg-indigo-500/20",
    href: "#",
  },
  {
    name: "Megan Brown",
    initials: "MB",
    email: "m.brown@gmail.com",
    textColor: "text-yellow-800 dark:text-yellow-500",
    bgColor: "bg-yellow-100 dark:bg-yellow-500/20",
    href: "#",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="flex items-center space-x-2">
        <h3 className="text-sm font-medium text-gray-900 dark:text-gray-50">
          Members
        </h3>
        <span className="inline-flex size-6 items-center justify-center rounded-full bg-gray-100 text-xs font-medium text-gray-900 dark:bg-gray-800 dark:text-gray-50">
          {data.length}
        </span>
      </div>
      <Divider className="!my-4" />
      <ul
        role="list"
        className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {data.map((member) => (
          <Card key={member.name} asChild className="group">
            <li>
              <div className="flex items-center space-x-4">
                <span
                  className={cx(
                    member.bgColor,
                    member.textColor,
                    "flex size-12 shrink-0 items-center justify-center rounded-full text-sm font-medium",
                  )}
                  aria-hidden={true}
                >
                  {member.initials}
                </span>
                <div className="truncate">
                  <p className="truncate text-sm font-medium text-gray-900 dark:text-gray-50">
                    <a href={member.href} className="focus:outline-none">
                      {/* Extend link to entire card */}
                      <span className="absolute inset-0" aria-hidden={true} />
                      {member.name}
                    </a>
                  </p>
                  <p className="truncate text-sm text-gray-500 dark:text-gray-500">
                    {member.email}
                  </p>
                </div>
              </div>
              <span
                className="pointer-events-none absolute right-4 top-4 text-gray-400 group-hover:text-gray-500 dark:text-gray-600 group-hover:dark:text-gray-500"
                aria-hidden={true}
              >
                <RiArrowRightUpLine className="size-4" aria-hidden={true} />
              </span>
            </li>
          </Card>
        ))}
      </ul>
    </div>
  )
}
