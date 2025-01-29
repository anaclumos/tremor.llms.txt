"use client"

import {
  RiArrowRightUpLine,
  RiLayoutGridLine,
  RiListCheck,
} from "@remixicon/react"

import { cx } from "@/lib/utils"

import { Card } from "@/atom/Card"
import { Divider } from "@/atom/Divider"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@/atom/Table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/atom/Tabs"

const data = [
  //array-start
  {
    name: "Alissia Stone",
    initial: "AS",
    textColor: "text-fuchsia-800 dark:text-fuchsia-500",
    bgColor: "bg-fuchsia-100 dark:bg-fuchsia-500/20",
    email: "a.stone@gmail.com",
    href: "#",
    details: [
      {
        type: "Role",
        value: "member",
      },
      {
        type: "Last active",
        value: "2d ago",
      },
    ],
  },
  {
    name: "Emma Bern",
    initial: "EB",
    textColor: "text-blue-800 dark:text-blue-500",
    bgColor: "bg-blue-100 dark:bg-blue-500/20",
    email: "e.bern@gmail.com",
    href: "#",
    details: [
      {
        type: "Role",
        value: "member",
      },
      {
        type: "Last active",
        value: "1d ago",
      },
    ],
  },
  {
    name: "Aaron McFlow",
    initial: "AM",
    textColor: "text-pink-800 dark:text-pink-500",
    bgColor: "bg-pink-100 dark:bg-pink-500/20",
    email: "a.flow@acme.com",
    href: "#",
    details: [
      {
        type: "Role",
        value: "admin",
      },
      {
        type: "Last active",
        value: "2min ago",
      },
    ],
  },
  {
    name: "Thomas Palstein",
    initial: "TP",
    textColor: "text-emerald-800 dark:text-emerald-500",
    bgColor: "bg-emerald-100 dark:bg-emerald-500/20",
    email: "t.palstein@acme.com",
    href: "#",
    details: [
      {
        type: "Role",
        value: "admin",
      },
      {
        type: "Last active",
        value: "18min ago",
      },
    ],
  },
  {
    name: "Sarah Johnson",
    initial: "SJ",
    textColor: "text-orange-800 dark:text-orange-500",
    bgColor: "bg-orange-100 dark:bg-orange-500/20",
    email: "s.johnson@gmail.com",
    href: "#",
    details: [
      {
        type: "Role",
        value: "member",
      },
      {
        type: "Last active",
        value: "3h ago",
      },
    ],
  },
  {
    name: "David Smith",
    initial: "DS",
    textColor: "text-indigo-800 dark:text-indigo-500",
    bgColor: "bg-indigo-100 dark:bg-indigo-500/20",
    email: "d.smith@gmail.com",
    href: "#",
    details: [
      {
        type: "Role",
        value: "guest",
      },
      {
        type: "Last active",
        value: "4h ago",
      },
    ],
  },
  {
    name: "Megan Brown",
    initial: "MB",
    textColor: "text-yellow-800 dark:text-yellow-500",
    bgColor: "bg-yellow-100 dark:bg-yellow-500/20",
    email: "m.brown@gmail.com",
    href: "#",
    details: [
      {
        type: "Role",
        value: "admin",
      },
      {
        type: "Last active",
        value: "1d ago",
      },
    ],
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <Tabs defaultValue="tab1">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-50">
              Members
            </h3>
            <span className="inline-flex size-6 items-center justify-center rounded-full bg-gray-100 text-xs font-medium text-gray-900 dark:bg-gray-800 dark:text-gray-50">
              {data.length}
            </span>
          </div>
          <TabsList
            variant="solid"
            className="space-x-1 bg-transparent dark:bg-transparent"
          >
            <TabsTrigger
              value="tab1"
              className="rounded-md py-1.5 data-[state=active]:ring-1 data-[state=active]:ring-gray-200 data-[state=active]:ring-inset data-[state=active]:dark:bg-[#090E1A] data-[state=active]:dark:ring-gray-800"
            >
              <RiLayoutGridLine
                className="size-5 shrink-0"
                aria-hidden={true}
              />
            </TabsTrigger>
            <TabsTrigger
              value="tab2"
              className="rounded-md py-1.5 data-[state=active]:ring-1 data-[state=active]:ring-gray-200 data-[state=active]:ring-inset data-[state=active]:dark:bg-[#090E1A] data-[state=active]:dark:ring-gray-800"
            >
              <RiListCheck className="size-5 shrink-0" aria-hidden={true} />
            </TabsTrigger>
          </TabsList>
        </div>
        <Divider className="!my-4" />
        <TabsContent value="tab1">
          <ul
            role="list"
            className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {data.map((member) => (
              <Card key={member.name} asChild className="group !p-4">
                <li>
                  <div className="flex items-center space-x-4">
                    <span
                      className={cx(
                        member.textColor,
                        member.bgColor,
                        "flex size-12 shrink-0 items-center justify-center rounded-full text-sm font-medium",
                      )}
                      aria-hidden={true}
                    >
                      {member.initial}
                    </span>
                    <div className="truncate">
                      <p className="truncate text-sm font-medium text-gray-900 dark:text-gray-50">
                        <a href={member.href} className="focus:outline-none">
                          {/* Extend link to entire card */}
                          <span
                            className="absolute inset-0"
                            aria-hidden={true}
                          />
                          {member.name}
                        </a>
                      </p>
                      <p className="truncate text-sm text-gray-500 dark:text-gray-500">
                        {member.email}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 grid grid-cols-2 divide-x divide-gray-200 border-t border-gray-200 dark:divide-gray-800 dark:border-gray-800">
                    {member.details.map((item) => (
                      <div key={item.type} className="truncate px-3 py-2">
                        <p className="truncate text-xs text-gray-500 dark:text-gray-500">
                          {item.type}
                        </p>
                        <p className="truncate text-sm font-medium text-gray-900 dark:text-gray-50">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                  <span
                    className="pointer-events-none absolute top-4 right-4 text-gray-400 group-hover:text-gray-500 dark:text-gray-600 group-hover:dark:text-gray-500"
                    aria-hidden={true}
                  >
                    <RiArrowRightUpLine className="size-4" aria-hidden={true} />
                  </span>
                </li>
              </Card>
            ))}
          </ul>
        </TabsContent>
        <TabsContent value="tab2">
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell>Name</TableHeaderCell>
                <TableHeaderCell>Storage</TableHeaderCell>
                <TableHeaderCell>Users</TableHeaderCell>
                <TableHeaderCell className="text-right">
                  Last edited
                </TableHeaderCell>
                <TableHeaderCell>
                  <span className="sr-only">Edit</span>
                </TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((member) => (
                <TableRow
                  key={member.name}
                  className="hover:bg-gray-50 hover:dark:bg-gray-900"
                >
                  <TableCell className="font-medium text-gray-900 dark:text-gray-50">
                    {member.name}
                  </TableCell>
                  <TableCell>{member.email}</TableCell>
                  <TableCell>{member.details[0].value}</TableCell>
                  <TableCell className="text-right">
                    {member.details[1].value}
                  </TableCell>
                  <TableCell className="text-right">
                    <a
                      href={member.href}
                      className="font-medium text-blue-500 dark:text-blue-500"
                    >
                      Edit<span className="sr-only">{member.name}</span>
                    </a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </div>
  )
}
