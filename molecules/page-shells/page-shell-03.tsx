"use client"

import type { SVGProps } from "react"

import { cx } from "@/lib/utils"

import { Card } from "../../atoms/Card"
import { SelectNative } from "../../atoms/SelectNative"

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Workspaces", href: "#", current: false },
  { name: "Settings", href: "#", current: false },
]

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M10.9999 2.04938L11 5.07088C7.6077 5.55612 5 8.47352 5 12C5 15.866 8.13401 19 12 19C13.5723 19 15.0236 18.4816 16.1922 17.6064L18.3289 19.7428C16.605 21.1536 14.4014 22 12 22C6.47715 22 2 17.5228 2 12C2 6.81468 5.94662 2.55115 10.9999 2.04938ZM21.9506 13.0001C21.7509 15.0111 20.9555 16.8468 19.7433 18.3283L17.6064 16.1922C18.2926 15.2759 18.7595 14.1859 18.9291 13L21.9506 13.0001ZM13.0011 2.04948C17.725 2.51902 21.4815 6.27589 21.9506 10.9999L18.9291 10.9998C18.4905 7.93452 16.0661 5.50992 13.001 5.07103L13.0011 2.04948Z" />
  </svg>
)

function ContentPlaceholder() {
  return (
    <div className="relative h-full overflow-hidden rounded bg-gray-50 dark:bg-gray-800">
      <svg
        className="absolute inset-0 h-full w-full stroke-gray-200 dark:stroke-gray-700"
        fill="none"
      >
        <defs>
          <pattern
            id="pattern-3"
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path>
          </pattern>
        </defs>
        <rect
          stroke="none"
          fill="url(#pattern-3)"
          width="100%"
          height="100%"
        ></rect>
      </svg>
    </div>
  )
}

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="border-b border-gray-200 dark:border-gray-800">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="overflow flex h-16 sm:space-x-7">
            <div className="hidden shrink-0 sm:flex sm:items-center">
              <a href="#" className="p-1.5">
                <Logo
                  className="size-5 shrink-0 text-gray-900 dark:text-gray-50"
                  aria-hidden={true}
                />
              </a>
            </div>
            <nav className="-mb-px flex space-x-6" aria-label="Tabs">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={cx(
                    item.current
                      ? "border-blue-500 text-blue-500 dark:text-blue-500"
                      : "border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-900 dark:text-gray-300 hover:dark:border-gray-600 hover:dark:text-gray-50",
                    "inline-flex items-center whitespace-nowrap border-b-2 px-2 text-sm font-medium",
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="p-4 sm:p-6 lg:p-8">
        <header>
          <div className="sm:flex sm:items-center sm:justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
              Overview
            </h3>
            <div className="mt-4 items-center sm:mt-0 sm:flex sm:space-x-2">
              <SelectNative className="w-full sm:w-fit" defaultValue="1">
                <option value="1">Today</option>
                <option value="2">Last 7 days</option>
                <option value="3">Last 4 weeks</option>
                <option value="4">Last 12 months</option>
              </SelectNative>
              <SelectNative
                className="mt-2 w-full sm:mt-0 sm:w-fit"
                defaultValue="1"
              >
                <option value="1">US-West</option>
                <option value="2">US-East</option>
                <option value="3">EU-Central-1</option>
              </SelectNative>
            </div>
          </div>
        </header>
        <main>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="!h-36 !p-2">
              <ContentPlaceholder />
            </Card>
            <Card className="!h-36 !p-2">
              <ContentPlaceholder />
            </Card>
            <Card className="!h-36 !p-2">
              <ContentPlaceholder />
            </Card>
          </div>
          <Card className="mt-4 !h-96 !p-2">
            <ContentPlaceholder />
          </Card>
        </main>
      </div>
    </div>
  )
}
