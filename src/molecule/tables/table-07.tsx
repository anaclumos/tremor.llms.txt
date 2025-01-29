"use client"

import React from "react"

import { Button } from "@/atom/Button"
import { SelectNative } from "@/atom/SelectNative"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from "@/atom/Table"

const data = [
  //array-start
  {
    workspace: "sales_by_day_api",
    owner: "John Doe",
    status: "Live",
    costs: "$3,509.00",
    region: "US-West 1",
    capacity: "31.1%",
    lastEdited: "23/09/2023 13:00",
  },
  {
    workspace: "marketing_campaign",
    owner: "Jane Smith",
    status: "Live",
    costs: "$5,720.00",
    region: "US-East 2",
    capacity: "81.3%",
    lastEdited: "22/09/2023 10:45",
  },
  {
    workspace: "test_environment",
    owner: "David Clark",
    status: "Inactive",
    costs: "$800.00",
    region: "EU-Central 1",
    capacity: "40.8%",
    lastEdited: "25/09/2023 16:20",
  },
  {
    workspace: "sales_campaign",
    owner: "Jane Smith",
    status: "Downtime",
    costs: "$5,720.00",
    region: "US-East 2",
    capacity: "51.4%",
    lastEdited: "22/09/2023 10:45",
  },
  {
    workspace: "development_env",
    owner: "Mike Johnson",
    status: "Inactive",
    costs: "$4,200.00",
    region: "EU-West 1",
    capacity: "60.4%",
    lastEdited: "21/09/2023 14:30",
  },
  {
    workspace: "new_workspace_1",
    owner: "Alice Brown",
    status: "Inactive",
    costs: "$2,100.00",
    region: "US-West 2",
    capacity: "75.9%",
    lastEdited: "24/09/2023 09:15",
  },
  //array-end
] as const

export default function Example() {
  const [selectedStatus, setSelectedStatus] = React.useState("")
  const isStatusSelected = (item: (typeof data)[number]) =>
    selectedStatus.includes(item.status) || selectedStatus.length === 0

  return (
    <div className="obfuscate">
      <div className="md:flex md:items-center md:justify-between md:space-x-8">
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-gray-50">
            Workspaces
          </h3>
          <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
            Overview of all registered workspaces within your organization.
          </p>
        </div>
        <div className="mt-4 sm:flex sm:items-center sm:gap-2 md:mt-0">
          <SelectNative
            value={selectedStatus}
            onChange={(event) => setSelectedStatus(event.target.value)}
            placeholder="Select status..."
          >
            <option value="">All</option>
            <option value="Live">Live</option>
            <option value="Inactive">Inactive</option>
            <option value="Downtime">Downtime</option>
          </SelectNative>
          <Button className="mt-2 w-full py-2 whitespace-nowrap sm:mt-0 md:w-fit">
            Add workspace
          </Button>
        </div>
      </div>
      <TableRoot className="mt-8">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Workspace</TableHeaderCell>
              <TableHeaderCell>Owner</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
              <TableHeaderCell>Region</TableHeaderCell>
              <TableHeaderCell>Capacity</TableHeaderCell>
              <TableHeaderCell className="text-right">
                Last edited
              </TableHeaderCell>
              <TableHeaderCell className="text-right">Costs</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .filter((item) => isStatusSelected(item))
              .map((item) => (
                <TableRow key={item.workspace}>
                  <TableCell className="font-medium text-gray-900 dark:text-gray-50">
                    {item.workspace}
                  </TableCell>
                  <TableCell>{item.owner}</TableCell>
                  <TableCell>{item.status}</TableCell>
                  <TableCell>{item.region}</TableCell>
                  <TableCell>{item.capacity}</TableCell>
                  <TableCell className="text-right">
                    {item.lastEdited}
                  </TableCell>
                  <TableCell className="text-right">{item.costs}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableRoot>
    </div>
  )
}
