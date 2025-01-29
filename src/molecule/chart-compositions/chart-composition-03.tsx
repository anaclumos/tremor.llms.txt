"use client"

import { RiExternalLinkLine } from "@remixicon/react"

import { cx } from "@/lib/utils"

import { Card } from "../../atom/Card"
import { CategoryBar } from "../../atom/CategoryBar"
import { Divider } from "../../atom/Divider"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from "../../atom/Table"
import { Tabs, TabsList, TabsTrigger } from "../../atom/Tabs"

const data = [
  //array-start
  {
    date: "Dec 23",
    description: "Venture debt loan repayment",
    account: "Calantis business account",
    amount: "-$1,200",
    changeType: "negative",
  },
  {
    date: "Nov 23",
    description: "Venture debt loan repayment",
    account: "Calantis business account",
    amount: "-$2,200",
    changeType: "negative",
  },
  {
    date: "Oct 23",
    description: "Venture debt loan repayment",
    account: "Calantis business account",
    amount: "-$1,200",
    changeType: "negative",
  },
  {
    date: "Sep 23",
    description: "Venture debt loan funding",
    account: "Calantis business account",
    amount: "+$5,000,000",
    changeType: "positive",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <h1 className="text-lg font-bold text-gray-900 dark:text-gray-50">
        Capital
      </h1>
      <p className="mt-2 text-sm/6 text-gray-500 dark:text-gray-500">
        Analyze and manage your venture debt and balance.
      </p>
      <Tabs defaultValue="tab1" className="mt-6">
        <TabsList>
          <TabsTrigger value="tab1">Venture Debt</TabsTrigger>
          <TabsTrigger value="tab2">Capital Guide</TabsTrigger>
        </TabsList>
        {/* Content below only for demo purpose placed outside of <Tab> component. Add <TabsContent> to make it functional and to add content for other tabs */}
        <div className="mt-10 grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
          <Card className="md:col-span-2">
            <h1 className="text-sm text-gray-500 dark:text-gray-500">
              Outstanding balance
            </h1>
            <p className="mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-50">
              $5,450,000
            </p>
            <CategoryBar
              values={[4, 1.2, 0.25]}
              colors={["blue", "cyan", "fuchsia"]}
              className="mt-6"
              showLabels={false}
            />
            <ul
              role="list"
              className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2"
            >
              <li className="flex items-center space-x-2">
                <span
                  className="size-3 shrink-0 rounded-sm bg-blue-500 dark:bg-blue-500"
                  aria-hidden={true}
                />
                <span className="text-sm text-gray-500 dark:text-gray-500">
                  <span className="font-medium text-gray-700 dark:text-gray-300">
                    $4M
                  </span>{" "}
                  outstanding
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <span
                  className="size-3 shrink-0 rounded-sm bg-cyan-500 dark:bg-cyan-500"
                  aria-hidden={true}
                />
                <span className="text-sm text-gray-500 dark:text-gray-500">
                  <span className="font-medium text-gray-700 dark:text-gray-300">
                    $1.2M
                  </span>{" "}
                  available today
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <span
                  className="size-3 shrink-0 rounded-sm bg-fuchsia-500 dark:bg-fuchsia-500"
                  aria-hidden={true}
                />
                <span className="text-sm text-gray-500 dark:text-gray-500">
                  <span className="font-medium text-gray-700 dark:text-gray-300">
                    $0.25M
                  </span>{" "}
                  unavailable
                </span>
              </li>
            </ul>
            <Divider />
            <p className="mt-6 text-sm font-medium text-gray-900 dark:text-gray-50">
              Interest only ends Jan 4, 2024
            </p>
            <div className="mt-4 rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
              <p className="flex flex-wrap justify-between gap-4 text-sm/6 text-gray-600 dark:text-gray-400">
                Next payment of $3,200 due Jan 1, 2024.
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-blue-500 hover:underline hover:underline-offset-4 dark:text-blue-500"
                >
                  Learn more
                  <RiExternalLinkLine className="size-4" aria-hidden={true} />
                </a>
              </p>
            </div>
          </Card>
          <div className="md:col-span-1 md:p-6">
            <h4 className="font-medium text-gray-900 dark:text-gray-50">
              Questions?
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Contact your financial advisor
            </p>
            <div className="mt-6 flex items-center space-x-4">
              <span
                className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gray-100 text-sm font-medium text-blue-500 dark:bg-gray-900 dark:text-blue-500"
                aria-hidden={true}
              >
                EL
              </span>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
                  Emily Liftburg
                </p>
                <a
                  href="mailto:#"
                  className="mt-0.5 block text-sm text-blue-500 dark:text-blue-500"
                >
                  emily.liftburg@company.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-14 font-medium text-gray-900 dark:text-gray-50">
          Transactions
        </p>
        <TableRoot className="mt-8">
          <Table className="border-transparent">
            <TableHead>
              <TableRow>
                <TableHeaderCell>Date</TableHeaderCell>
                <TableHeaderCell>Description</TableHeaderCell>
                <TableHeaderCell>Account</TableHeaderCell>
                <TableHeaderCell className="text-right">Amount</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item) => (
                <TableRow key={item.date}>
                  <TableCell className="font-medium text-gray-900 dark:text-gray-50">
                    {item.date}
                  </TableCell>
                  <TableCell>{item.description}</TableCell>
                  <TableCell>{item.account}</TableCell>
                  <TableCell className="text-right">
                    <span
                      className={cx(
                        item.changeType === "positive"
                          ? "text-emerald-700 dark:text-emerald-500"
                          : "text-gray-900 dark:text-gray-50",
                        "font-medium",
                      )}
                    >
                      {item.amount}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableRoot>
      </Tabs>
    </div>
  )
}
