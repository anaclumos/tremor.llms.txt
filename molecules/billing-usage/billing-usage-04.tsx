"use client"

import { RiCheckboxCircleFill, RiExternalLinkLine } from "@remixicon/react"

import { Button } from "../../atoms/Button"
import { Divider } from "../../atoms/Divider"
import {
  Table,
  TableBody,
  TableCell,
  TableFoot,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from "../../atoms/Table"
import { Tabs, TabsList, TabsTrigger } from "../../atoms/Tabs"

const data = [
  //array-start
  {
    name: "Team Seats",
    quantity: 2,
    unit: "$20",
    price: "$40",
  },
  {
    name: "Query Caching (4 GB)",
    quantity: 1,
    unit: "$25",
    price: "$25",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <h1 className="text-lg font-bold text-gray-900 dark:text-gray-50">
        General
      </h1>
      <p className="mt-2 text-sm/6 text-gray-500 dark:text-gray-500">
        Manage your personal details, workspace governance and notifications.
      </p>
      <Tabs defaultValue="tab3" className="mt-8">
        <TabsList>
          <TabsTrigger value="tab1">Account details</TabsTrigger>
          <TabsTrigger value="tab2">Users</TabsTrigger>
          <TabsTrigger value="tab3">Billing</TabsTrigger>
        </TabsList>
        {/* Content below only for demo purpose placed outside of <Tab> component. Add <TabsContent> to make it functional and to add content for other tabs */}
        <div className="max-w-3xl">
          <h2 className="mt-8 font-semibold text-gray-900 dark:text-gray-50">
            Billing overview
          </h2>
          <p className="mt-2 text-sm/6 text-gray-500 dark:text-gray-500">
            Your workspace is on the starter plan. The next payment of $65 will
            occur end of December 2023.{" "}
            <a
              href="#"
              className="inline-flex items-center gap-1 text-blue-500 hover:underline hover:underline-offset-4 dark:text-blue-500"
            >
              View plans
              <RiExternalLinkLine className="size-4" aria-hidden={true} />
            </a>
          </p>
          <h4 className="mt-16 text-sm font-semibold text-gray-900 dark:text-gray-50">
            Current billing cycle (Nov 30 – Dec 31)
          </h4>
          <TableRoot className="mt-4">
            <Table className="border-transparent dark:border-transparent">
              <TableHead>
                <TableRow>
                  <TableHeaderCell className="text-xs font-medium uppercase text-gray-500 dark:text-gray-500">
                    Item
                  </TableHeaderCell>
                  <TableHeaderCell className="text-right text-xs font-medium uppercase text-gray-500 dark:text-gray-500">
                    Quantity
                  </TableHeaderCell>
                  <TableHeaderCell className="text-right text-xs font-medium uppercase text-gray-500 dark:text-gray-500">
                    Unit price
                  </TableHeaderCell>
                  <TableHeaderCell className="text-right text-xs font-medium uppercase text-gray-500 dark:text-gray-500">
                    Price
                  </TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((member) => (
                  <TableRow key={member.name}>
                    <TableCell className="!py-2.5">{member.name}</TableCell>
                    <TableCell className="!py-2.5 text-right">
                      {member.quantity}
                    </TableCell>
                    <TableCell className="!py-2.5 text-right">
                      {member.unit}
                    </TableCell>
                    <TableCell className="!py-2.5 text-right">
                      {member.price}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFoot>
                <TableRow>
                  <TableHeaderCell
                    scope="row"
                    colSpan={3}
                    className="border-transparent text-gray-700 dark:border-transparent dark:text-gray-300"
                  >
                    Total
                  </TableHeaderCell>
                  <TableCell className="text-right text-gray-700 dark:text-gray-300">
                    $65
                  </TableCell>
                </TableRow>
              </TableFoot>
            </Table>
          </TableRoot>
          <Divider className="!my-10" />
          <div className="sm:flex sm:items-start sm:justify-between sm:space-x-10">
            <div>
              <h2 className="font-semibold text-gray-900 dark:text-gray-50">
                Payment method
              </h2>
              <p className="mt-2 text-sm/6 text-gray-500 dark:text-gray-500">
                Payments will be taken from the card listed below, and you can
                update it by adding a new card through the menu on the right.
              </p>
            </div>
            <Button className="mt-4 whitespace-nowrap">Add new card</Button>
          </div>
          <Table className="mt-10">
            <TableHead>
              <TableRow className="border-b border-gray-200 dark:border-gray-800">
                <TableHeaderCell className="text-xs font-medium uppercase text-gray-500 dark:text-gray-500">
                  Provider
                </TableHeaderCell>
                <TableHeaderCell className="text-xs font-medium uppercase text-gray-500 dark:text-gray-500">
                  Status
                </TableHeaderCell>
                <TableHeaderCell className="text-xs font-medium uppercase text-gray-500 dark:text-gray-500">
                  Type
                </TableHeaderCell>
                <TableHeaderCell className="text-xs font-medium uppercase text-gray-500 dark:text-gray-500">
                  Number (Last 4)
                </TableHeaderCell>
                <TableHeaderCell className="text-xs font-medium uppercase text-gray-500 dark:text-gray-500">
                  Exp. Date
                </TableHeaderCell>
                <TableHeaderCell className="text-right text-xs font-medium uppercase text-gray-500 dark:text-gray-500">
                  <span className="sr-only">Edit</span>
                </TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell className="!py-2.5">MasterCard</TableCell>
                <TableCell className="flex items-center gap-1.5 !py-2.5">
                  <RiCheckboxCircleFill
                    className="size-4 text-emerald-500 dark:text-emerald-500"
                    aria-hidden={true}
                  />
                  Active
                </TableCell>
                <TableCell className="!py-2.5">Credit</TableCell>
                <TableCell className="!py-2.5">1234</TableCell>
                <TableCell className="!py-2.5">1/2028</TableCell>
                <TableCell className="!py-2.5 text-right">
                  <a
                    href="#"
                    className="font-medium text-blue-500 hover:text-blue-600 dark:text-blue-500 hover:dark:text-blue-600"
                  >
                    Edit
                  </a>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </Tabs>
    </div>
  )
}
