"use client"

import { Card } from "../../atoms/Card"
import { CategoryBar } from "../../atoms/CategoryBar"

export default function Example() {
  return (
    <div className="obfuscate">
      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <dt className="text-sm font-medium text-gray-900 dark:text-gray-50">
            Current Tickets
          </dt>
          <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-50">
            247
          </dd>
          <CategoryBar
            values={[82, 13, 5]}
            className="mt-6"
            colors={["blue", "gray", "red"]}
            showLabels={false}
          />
          <ul
            role="list"
            className="mt-4 flex flex-wrap gap-x-8 gap-y-4 text-sm"
          >
            <li>
              <span className="text-base font-semibold text-gray-900 dark:text-gray-50">
                82%
              </span>
              <div className="flex items-center gap-2">
                <span
                  className="size-2.5 shrink-0 rounded-sm bg-blue-500 dark:bg-blue-500"
                  aria-hidden="true"
                />
                <span className="text-sm text-gray-900 dark:text-gray-50">
                  Resolved
                </span>
              </div>
            </li>
            <li>
              <span className="text-base font-semibold text-gray-900 dark:text-gray-50">
                13%
              </span>
              <div className="flex items-center gap-2">
                <span
                  className="size-2.5 shrink-0 rounded-sm bg-gray-500"
                  aria-hidden="true"
                />
                <span className="text-sm text-gray-900 dark:text-gray-50">
                  Progress
                </span>
              </div>
            </li>
            <li>
              <span className="text-base font-semibold text-gray-900 dark:text-gray-50">
                5%
              </span>
              <div className="flex items-center gap-2">
                <span
                  className="size-2.5 shrink-0 rounded-sm bg-red-500 dark:bg-red-500"
                  aria-hidden="true"
                />
                <span className="text-sm text-gray-900 dark:text-gray-50">
                  Escalated
                </span>
              </div>
            </li>
          </ul>
        </Card>
        <Card>
          <dt className="text-sm font-medium text-gray-900 dark:text-gray-50">
            Database Queries
          </dt>
          <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-50">
            44757
          </dd>
          <CategoryBar
            values={[57, 12, 31]}
            className="mt-6"
            colors={["blue", "gray", "red"]}
            showLabels={false}
          />
          <ul
            role="list"
            className="mt-4 flex flex-wrap gap-x-8 gap-y-4 text-sm"
          >
            <li>
              <span className="text-base font-semibold text-gray-900 dark:text-gray-50">
                57%
              </span>
              <div className="flex items-center gap-2">
                <span
                  className="size-2.5 shrink-0 rounded-sm bg-blue-500 dark:bg-blue-500"
                  aria-hidden="true"
                />
                <span className="text-sm text-gray-900 dark:text-gray-50">
                  Optimized
                </span>
              </div>
            </li>
            <li>
              <span className="text-base font-semibold text-gray-900 dark:text-gray-50">
                12%
              </span>
              <div className="flex items-center gap-2">
                <span
                  className="size-2.5 shrink-0 rounded-sm bg-gray-500"
                  aria-hidden="true"
                />
                <span className="text-sm text-gray-900 dark:text-gray-50">
                  Editing
                </span>
              </div>
            </li>
            <li>
              <span className="text-base font-semibold text-gray-900 dark:text-gray-50">
                31%
              </span>
              <div className="flex items-center gap-2">
                <span
                  className="size-2.5 shrink-0 rounded-sm bg-red-500 dark:bg-red-500"
                  aria-hidden="true"
                />
                <span className="text-sm text-gray-900 dark:text-gray-50">
                  Slow
                </span>
              </div>
            </li>
          </ul>
        </Card>
        <Card>
          <dt className="text-sm font-medium text-gray-900 dark:text-gray-50">
            Query Latency
          </dt>
          <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-50">
            1,247ms
          </dd>
          <CategoryBar
            values={[75, 20, 5]}
            className="mt-6"
            colors={["blue", "gray", "red"]}
            showLabels={false}
          />
          <ul
            role="list"
            className="mt-4 flex flex-wrap gap-x-8 gap-y-4 text-sm"
          >
            <li>
              <span className="text-base font-semibold text-gray-900 dark:text-gray-50">
                75%
              </span>
              <div className="flex items-center gap-2">
                <span
                  className="size-2.5 shrink-0 rounded-sm bg-blue-500 dark:bg-blue-500"
                  aria-hidden="true"
                />
                <span className="text-sm text-gray-900 dark:text-gray-50">
                  Fast
                </span>
              </div>
            </li>
            <li>
              <span className="text-base font-semibold text-gray-900 dark:text-gray-50">
                20%
              </span>
              <div className="flex items-center gap-2">
                <span
                  className="size-2.5 shrink-0 rounded-sm bg-gray-500"
                  aria-hidden="true"
                />
                <span className="text-sm text-gray-900 dark:text-gray-50">
                  Medium
                </span>
              </div>
            </li>
            <li>
              <span className="text-base font-semibold text-gray-900 dark:text-gray-50">
                5%
              </span>
              <div className="flex items-center gap-2">
                <span
                  className="size-2.5 shrink-0 rounded-sm bg-red-500 dark:bg-red-500"
                  aria-hidden="true"
                />
                <span className="text-sm text-gray-900 dark:text-gray-50">
                  Slow
                </span>
              </div>
            </li>
          </ul>
        </Card>
      </dl>
    </div>
  )
}
