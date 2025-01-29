"use client"

import { Card } from "../../atoms/Card"

const issues = [
  {
    category: "Account Service",
    totalCount: 1815,
    percentage: 15,
  },
  {
    category: "Claim Status",
    totalCount: 1599,
    percentage: 13,
  },
  {
    category: "Coverage Inquiry",
    totalCount: 1390,
    percentage: 12,
  },
  {
    category: "Accident Report",
    totalCount: 1388,
    percentage: 12,
  },
  {
    category: "Fraud Report",
    totalCount: 1301,
    percentage: 11,
  },
  {
    category: "Complaint",
    totalCount: 1282,
    percentage: 11,
  },
]

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-8">
        <Card className="lg:col-span-5">
          <p className="font-semibold text-gray-900 dark:text-gray-50">
            Cohort Statistics
          </p>
          <dl className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="space-y-6">
              <div>
                <dt className="text-sm text-gray-500 dark:text-gray-500">
                  Total Users
                </dt>
                <dd className="mt-1 flex items-baseline">
                  <span className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
                    125,430
                  </span>
                  <span className="ml-2 text-sm text-emerald-600 dark:text-emerald-500">
                    +17%
                  </span>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500 dark:text-gray-500">
                  Average CSAT Score
                </dt>
                <dd className="mt-1 flex items-baseline">
                  <span className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
                    4.5
                  </span>
                  <span className="ml-2 text-sm text-emerald-600 dark:text-emerald-500">
                    +6%
                  </span>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500 dark:text-gray-500">
                  Average Response Time
                </dt>
                <dd className="mt-1 flex items-baseline">
                  <span className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
                    8.3m
                  </span>
                  <span className="ml-2 text-sm text-emerald-600 dark:text-emerald-500">
                    +12%
                  </span>
                </dd>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <dt className="text-sm text-gray-500 dark:text-gray-500">
                  Total Tickets
                </dt>
                <dd className="mt-1 flex items-baseline">
                  <span className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
                    45,892
                  </span>
                  <span className="ml-2 text-sm text-emerald-600 dark:text-emerald-500">
                    +11%
                  </span>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500 dark:text-gray-500">
                  Resolution Rate
                </dt>
                <dd className="mt-1 flex items-baseline">
                  <span className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
                    92.5%
                  </span>
                  <span className="ml-2 text-sm text-emerald-600 dark:text-emerald-500">
                    +2%
                  </span>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500 dark:text-gray-500">
                  Total Cohorts
                </dt>
                <dd className="mt-1 flex items-baseline">
                  <span className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
                    24
                  </span>
                  <span className="ml-2 text-sm text-emerald-600 dark:text-emerald-500">
                    +5%
                  </span>
                </dd>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <dt className="text-sm text-gray-500 dark:text-gray-500">
                  Avg. Handling Time
                </dt>
                <dd className="mt-1 flex items-baseline">
                  <span className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
                    15.2m
                  </span>
                  <span className="ml-2 text-sm text-emerald-600 dark:text-emerald-500">
                    +21%
                  </span>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500 dark:text-gray-500">
                  First Contact Resolution
                </dt>
                <dd className="mt-1 flex items-baseline">
                  <span className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
                    85.7%
                  </span>
                  <span className="ml-2 text-sm text-emerald-600 dark:text-emerald-500">
                    +3%
                  </span>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500 dark:text-gray-500">
                  Retention Rate
                </dt>
                <dd className="mt-1 flex items-baseline">
                  <span className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
                    94.3%
                  </span>
                  <span className="ml-2 text-sm text-emerald-600 dark:text-emerald-500">
                    +2%
                  </span>
                </dd>
              </div>
            </div>
          </dl>
        </Card>

        <Card className="lg:col-span-3">
          <p className="font-semibold text-gray-900 dark:text-gray-50">
            Top Issues
          </p>
          <ol className="mt-4 divide-y divide-gray-200 dark:divide-gray-800">
            {issues.map((issue, index) => (
              <li
                key={issue.category}
                className="flex items-center justify-between py-2"
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {index + 1}.
                  </span>
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-50">
                    {issue.category}
                  </span>
                </div>
                <div className="text-sm tabular-nums text-gray-600 dark:text-gray-400">
                  {issue.percentage}% ({issue.totalCount.toLocaleString()})
                </div>
              </li>
            ))}
          </ol>
        </Card>
      </div>
    </div>
  )
}
