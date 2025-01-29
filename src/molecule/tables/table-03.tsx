"use client"

import { Button } from "../../atom/Button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from "../../atom/Table"

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
    status: "Live",
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
    status: "Live",
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
]

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="sm:flex sm:items-center sm:justify-between sm:space-x-10">
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-gray-50">
            Workspaces
          </h3>
          <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
            Overview of all registered workspaces within your organization.
          </p>
        </div>
        <Button className="mt-4 w-full sm:mt-0 sm:w-fit">Add workspace</Button>
      </div>
      <TableRoot className="mt-8 h-96">
        <Table className="border-separate border-spacing-0 border-transparent">
          <TableHead>
            <TableRow>
              <TableHeaderCell className="sticky top-0 z-10 bg-white dark:bg-gray-950">
                Workspace
              </TableHeaderCell>
              <TableHeaderCell className="sticky top-0 z-10 bg-white dark:bg-gray-950">
                Owner
              </TableHeaderCell>
              <TableHeaderCell className="sticky top-0 z-10 bg-white dark:bg-gray-950">
                Status
              </TableHeaderCell>
              <TableHeaderCell className="sticky top-0 z-10 bg-white dark:bg-gray-950">
                Region
              </TableHeaderCell>
              <TableHeaderCell className="sticky top-0 z-10 bg-white dark:bg-gray-950">
                Capacity
              </TableHeaderCell>
              <TableHeaderCell className="sticky top-0 z-10 bg-white text-right dark:bg-gray-950">
                Last edited
              </TableHeaderCell>
              <TableHeaderCell className="sticky top-0 z-10 bg-white text-right dark:bg-gray-950">
                Costs
              </TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.workspace}>
                <TableCell className="border-b border-gray-200 font-medium text-gray-900 dark:border-gray-800 dark:text-gray-50">
                  {item.workspace}
                </TableCell>
                <TableCell className="border-b border-gray-200 dark:border-gray-800">
                  {item.owner}
                </TableCell>
                <TableCell className="border-b border-gray-200 dark:border-gray-800">
                  {item.status}
                </TableCell>
                <TableCell className="border-b border-gray-200 dark:border-gray-800">
                  {item.region}
                </TableCell>
                <TableCell className="border-b border-gray-200 dark:border-gray-800">
                  {item.capacity}
                </TableCell>
                <TableCell className="border-b border-gray-200 text-right dark:border-gray-800">
                  {item.lastEdited}
                </TableCell>
                <TableCell className="border-b border-gray-200 text-right dark:border-gray-800">
                  {item.costs}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableRoot>
    </div>
  )
}
