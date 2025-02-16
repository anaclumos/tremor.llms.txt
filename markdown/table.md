```example/tables-table-09.tsx
"use client"

import { Button } from "@/atom/Button"
import { SparkAreaChart } from "@/atom/SparkChart"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from "@/atom/Table"

const chartData = [
  //array-start
  {
    date: "Nov 24, 2023",
    sales_by_day_api: 156.2,
    marketing_campaign: 68.5,
    test_environment: 71.8,
    sales_campaign: 205.3,
    development_env: 1050.6,
  },
  {
    date: "Nov 25, 2023",
    sales_by_day_api: 152.5,
    marketing_campaign: 69.3,
    test_environment: 67.2,
    sales_campaign: 223.1,
    development_env: 945.8,
  },
  {
    date: "Nov 26, 2023",
    sales_by_day_api: 148.7,
    marketing_campaign: 69.8,
    test_environment: 61.5,
    sales_campaign: 240.9,
    development_env: 839.4,
  },
  {
    date: "Nov 27, 2023",
    sales_by_day_api: 155.3,
    marketing_campaign: 73.5,
    test_environment: 57.9,
    sales_campaign: 254.7,
    development_env: 830.2,
  },
  {
    date: "Nov 28, 2023",
    sales_by_day_api: 160.1,
    marketing_campaign: 75.2,
    test_environment: 59.6,
    sales_campaign: 308.5,
    development_env: 845.7,
  },
  {
    date: "Nov 29, 2023",
    sales_by_day_api: 175.6,
    marketing_campaign: 89.2,
    test_environment: 57.3,
    sales_campaign: 341.4,
    development_env: 950.2,
  },
  {
    date: "Nov 30, 2023",
    sales_by_day_api: 180.2,
    marketing_campaign: 92.7,
    test_environment: 59.8,
    sales_campaign: 378.1,
    development_env: 995.9,
  },
  {
    date: "Dec 01, 2023",
    sales_by_day_api: 185.5,
    marketing_campaign: 95.3,
    test_environment: 62.4,
    sales_campaign: 320.3,
    development_env: 1060.4,
  },
  {
    date: "Dec 02, 2023",
    sales_by_day_api: 182.3,
    marketing_campaign: 93.8,
    test_environment: 60.7,
    sales_campaign: 356.5,
    development_env: 965.8,
  },
  {
    date: "Dec 03, 2023",
    sales_by_day_api: 180.7,
    marketing_campaign: 91.6,
    test_environment: 58.9,
    sales_campaign: 340.7,
    development_env: 970.3,
  },
  {
    date: "Dec 04, 2023",
    sales_by_day_api: 178.5,
    marketing_campaign: 89.7,
    test_environment: 56.2,
    sales_campaign: 365.9,
    development_env: 975.9,
  },
  {
    date: "Dec 05, 2023",
    sales_by_day_api: 176.2,
    marketing_campaign: 87.5,
    test_environment: 54.8,
    sales_campaign: 375.1,
    development_env: 964.6,
  },
  {
    date: "Dec 06, 2023",
    sales_by_day_api: 174.8,
    marketing_campaign: 85.3,
    test_environment: 53.4,
    sales_campaign: 340.3,
    development_env: 960.4,
  },
  {
    date: "Dec 07, 2023",
    sales_by_day_api: 178.0,
    marketing_campaign: 88.2,
    test_environment: 55.2,
    sales_campaign: 335.5,
    development_env: 955.3,
  },
  {
    date: "Dec 08, 2023",
    sales_by_day_api: 180.6,
    marketing_campaign: 90.5,
    test_environment: 56.8,
    sales_campaign: 310.7,
    development_env: 950.3,
  },
  {
    date: "Dec 09, 2023",
    sales_by_day_api: 182.4,
    marketing_campaign: 92.8,
    test_environment: 58.4,
    sales_campaign: 300.9,
    development_env: 845.4,
  },
  {
    date: "Dec 10, 2023",
    sales_by_day_api: 179.7,
    marketing_campaign: 90.2,
    test_environment: 57.0,
    sales_campaign: 290.1,
    development_env: 1011.6,
  },
  {
    date: "Dec 11, 2023",
    sales_by_day_api: 154.2,
    marketing_campaign: 88.7,
    test_environment: 55.6,
    sales_campaign: 291.3,
    development_env: 1017.9,
  },
  {
    date: "Dec 12, 2023",
    sales_by_day_api: 151.9,
    marketing_campaign: 86.5,
    test_environment: 53.9,
    sales_campaign: 293.5,
    development_env: 940.3,
  },
  {
    date: "Dec 13, 2023",
    sales_by_day_api: 149.3,
    marketing_campaign: 83.7,
    test_environment: 52.1,
    sales_campaign: 301.7,
    development_env: 900.8,
  },
  {
    date: "Dec 14, 2023",
    sales_by_day_api: 148.8,
    marketing_campaign: 81.4,
    test_environment: 50.5,
    sales_campaign: 321.9,
    development_env: 780.4,
  },
  {
    date: "Dec 15, 2023",
    sales_by_day_api: 145.5,
    marketing_campaign: 79.8,
    test_environment: 48.9,
    sales_campaign: 328.1,
    development_env: 765.1,
  },
  {
    date: "Dec 16, 2023",
    sales_by_day_api: 140.2,
    marketing_campaign: 84.5,
    test_environment: 50.2,
    sales_campaign: 331.3,
    development_env: 745.9,
  },
  {
    date: "Dec 17, 2023",
    sales_by_day_api: 143.8,
    marketing_campaign: 82.1,
    test_environment: 49.6,
    sales_campaign: 373.5,
    development_env: 741.8,
  },
  {
    date: "Dec 18, 2023",
    sales_by_day_api: 148.5,
    marketing_campaign: 86.9,
    test_environment: 51.3,
    sales_campaign: 381.7,
    development_env: 739.8,
  },
  //array-end
]

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
    owner: "Emma Stone",
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
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="sm:flex sm:items-center sm:justify-between sm:space-x-8">
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
      <TableRoot className="mt-8">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Workspace</TableHeaderCell>
              <TableHeaderCell>Owner</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
              <TableHeaderCell>Region</TableHeaderCell>
              <TableHeaderCell>Capacity</TableHeaderCell>
              <TableHeaderCell className="text-right">Costs</TableHeaderCell>
              <TableHeaderCell className="text-right">
                Last edited
              </TableHeaderCell>
              <TableHeaderCell className="text-right">
                API requests
              </TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.workspace}>
                <TableCell className="font-medium text-gray-900 dark:text-gray-50">
                  {item.workspace}
                </TableCell>
                <TableCell>{item.owner}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>{item.region}</TableCell>
                <TableCell>{item.capacity}</TableCell>
                <TableCell className="text-right">{item.costs}</TableCell>
                <TableCell className="text-right">{item.lastEdited}</TableCell>
                <TableCell>
                  <div className="flex justify-end">
                    <SparkAreaChart
                      data={chartData}
                      index="date"
                      categories={[item.workspace]}
                      fill="solid"
                      className="h-8 w-40"
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableRoot>
    </div>
  )
}
```


```example/tables-table-08.tsx
"use client"

import React from "react"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/atom/Select"
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
    owner: "Emma Stone",
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
]

const Example = () => {
  const [selectedStatus, setSelectedStatus] = React.useState("")
  const [selectedOwners, setSelectedOwners] = React.useState("")

  const filterData = (item: (typeof data)[number]) => {
    const statusMatch =
      !selectedStatus ||
      selectedStatus === "All" ||
      item.status === selectedStatus
    const ownerMatch =
      !selectedOwners ||
      selectedOwners === "All" ||
      item.owner === selectedOwners
    return statusMatch && ownerMatch
  }

  const filteredData = data.filter(filterData)

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
        <div className="mt-4 sm:flex sm:items-center sm:space-x-2 md:mt-0">
          <Select value={selectedStatus} onValueChange={setSelectedStatus}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue
                placeholder="Select status"
                aria-label={selectedStatus}
              />
            </SelectTrigger>
            <SelectContent align="end">
              <SelectItem value="All">All</SelectItem>
              <SelectSeparator />
              <SelectItem value="Live">Live</SelectItem>
              <SelectItem value="Inactive">Inactive</SelectItem>
              <SelectItem value="Downtime">Downtime</SelectItem>
            </SelectContent>
          </Select>
          <Select value={selectedOwners} onValueChange={setSelectedOwners}>
            <SelectTrigger className="mt-2 w-full sm:mt-0 md:w-40">
              <SelectValue
                placeholder="Select owner"
                aria-label={selectedStatus}
              />
            </SelectTrigger>
            <SelectContent align="end">
              <SelectItem value="All">All</SelectItem>
              <SelectSeparator />
              {data.map((item) => (
                <SelectItem key={item.owner} value={item.owner}>
                  {item.owner}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
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
            {filteredData.length ? (
              filteredData.map((item) => (
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
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableRoot>
    </div>
  )
}

export default Example
```


```example/tables-table-06.tsx
"use client"

import { Button } from "@/atom/Button"
import {
  Table,
  TableBody,
  TableCell,
  TableFoot,
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
      <TableRoot className="mt-8">
        <Table className="border-transparent dark:border-transparent">
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
            {data.map((item) => (
              <TableRow key={item.workspace}>
                <TableCell className="font-medium text-gray-900 dark:text-gray-50">
                  {item.workspace}
                </TableCell>
                <TableCell>{item.owner}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>{item.region}</TableCell>
                <TableCell>{item.capacity}</TableCell>
                <TableCell className="text-right">{item.lastEdited}</TableCell>
                <TableCell className="text-right">{item.costs}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFoot>
            <TableRow>
              <TableHeaderCell
                scope="row"
                colSpan={6}
                className="border-transparent text-right !font-normal !text-gray-600 dark:border-transparent dark:!text-gray-400"
              >
                Subtotal
              </TableHeaderCell>
              <TableCell className="text-right !font-normal">
                $22,049.00
              </TableCell>
            </TableRow>
            <TableRow>
              <TableHeaderCell
                scope="row"
                colSpan={6}
                className="border-transparent text-right !font-normal !text-gray-600 dark:border-transparent dark:!text-gray-400"
              >
                VAT (7.7%)
              </TableHeaderCell>
              <TableCell className="text-right !font-normal">
                $1,697.77
              </TableCell>
            </TableRow>
            <TableRow>
              <TableHeaderCell
                scope="row"
                colSpan={6}
                className="border-transparent text-right font-semibold dark:border-transparent"
              >
                Total
              </TableHeaderCell>
              <TableCell className="text-right font-semibold text-gray-900 dark:text-gray-50">
                $23,746.77
              </TableCell>
            </TableRow>
          </TableFoot>
        </Table>
      </TableRoot>
    </div>
  )
}
```


```example/tables-table-07.tsx
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
```


```example/tables-table-11.tsx
"use client"

import { cx } from "@/lib/utils"

import { Divider } from "@/atom/Divider"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from "@/atom/Table"

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`

interface WeekData {
  percentage: number
  count: number
}

interface CohortData {
  size: number
  dates: {
    start: string
    end: string
  }
  weeks: (WeekData | null)[]
}

type CohortRetentionData = Record<string, CohortData>

const cohorts: CohortRetentionData = {
  // array-start
  "Sep 15, 2023": {
    size: 2157,
    dates: {
      start: "2023-09-15T00:00:00.000Z",
      end: "2023-09-22T00:00:00.000Z",
    },
    weeks: [
      {
        percentage: 100,
        count: 2157,
      },
      {
        percentage: 69.2,
        count: 1492,
      },
      {
        percentage: 49.3,
        count: 1063,
      },
      {
        percentage: 44.6,
        count: 962,
      },
      {
        percentage: 28.8,
        count: 621,
      },
      {
        percentage: 23.9,
        count: 515,
      },
      {
        percentage: 19.3,
        count: 416,
      },
      {
        percentage: 12.6,
        count: 271,
      },
      {
        percentage: 9.6,
        count: 207,
      },
      {
        percentage: 8.2,
        count: 176,
      },
    ],
  },
  "Sep 22, 2023": {
    size: 2584,
    dates: {
      start: "2023-09-22T00:00:00.000Z",
      end: "2023-09-29T00:00:00.000Z",
    },
    weeks: [
      {
        percentage: 100,
        count: 2584,
      },
      {
        percentage: 62.2,
        count: 1607,
      },
      {
        percentage: 51.9,
        count: 1341,
      },
      {
        percentage: 46.4,
        count: 1198,
      },
      {
        percentage: 29.1,
        count: 751,
      },
      {
        percentage: 29.4,
        count: 759,
      },
      {
        percentage: 18.5,
        count: 478,
      },
      {
        percentage: 15.5,
        count: 400,
      },
      {
        percentage: 15.8,
        count: 408,
      },
      null,
    ],
  },
  "Sep 29, 2023": {
    size: 2873,
    dates: {
      start: "2023-09-29T00:00:00.000Z",
      end: "2023-10-06T00:00:00.000Z",
    },
    weeks: [
      {
        percentage: 100,
        count: 2873,
      },
      {
        percentage: 63.5,
        count: 1824,
      },
      {
        percentage: 54.9,
        count: 1577,
      },
      {
        percentage: 46.3,
        count: 1330,
      },
      {
        percentage: 32.2,
        count: 925,
      },
      {
        percentage: 27.5,
        count: 790,
      },
      {
        percentage: 26.1,
        count: 749,
      },
      {
        percentage: 15.4,
        count: 442,
      },
      null,
      null,
    ],
  },
  "Oct 6, 2023": {
    size: 2882,
    dates: {
      start: "2023-10-06T00:00:00.000Z",
      end: "2023-10-13T00:00:00.000Z",
    },
    weeks: [
      {
        percentage: 100,
        count: 2882,
      },
      {
        percentage: 61.8,
        count: 1781,
      },
      {
        percentage: 55,
        count: 1585,
      },
      {
        percentage: 39.6,
        count: 1141,
      },
      {
        percentage: 32.4,
        count: 933,
      },
      {
        percentage: 22.1,
        count: 636,
      },
      {
        percentage: 19.4,
        count: 559,
      },
      null,
      null,
      null,
    ],
  },
  "Oct 13, 2023": {
    size: 2925,
    dates: {
      start: "2023-10-13T00:00:00.000Z",
      end: "2023-10-20T00:00:00.000Z",
    },
    weeks: [
      {
        percentage: 100,
        count: 2925,
      },
      {
        percentage: 65.6,
        count: 1918,
      },
      {
        percentage: 56.7,
        count: 1658,
      },
      {
        percentage: 45.2,
        count: 1322,
      },
      {
        percentage: 32.2,
        count: 941,
      },
      {
        percentage: 28,
        count: 819,
      },
      null,
      null,
      null,
      null,
    ],
  },
  "Oct 20, 2023": {
    size: 2066,
    dates: {
      start: "2023-10-20T00:00:00.000Z",
      end: "2023-10-27T00:00:00.000Z",
    },
    weeks: [
      {
        percentage: 100,
        count: 2066,
      },
      {
        percentage: 67.9,
        count: 1402,
      },
      {
        percentage: 55.4,
        count: 1144,
      },
      {
        percentage: 37.6,
        count: 776,
      },
      {
        percentage: 29.7,
        count: 613,
      },
      null,
      null,
      null,
      null,
      null,
    ],
  },
  "Oct 27, 2023": {
    size: 2302,
    dates: {
      start: "2023-10-27T00:00:00.000Z",
      end: "2023-11-03T00:00:00.000Z",
    },
    weeks: [
      {
        percentage: 100,
        count: 2302,
      },
      {
        percentage: 64.5,
        count: 1484,
      },
      {
        percentage: 48.8,
        count: 1123,
      },
      {
        percentage: 46.1,
        count: 1061,
      },
      null,
      null,
      null,
      null,
      null,
      null,
    ],
  },
  "Nov 3, 2023": {
    size: 2361,
    dates: {
      start: "2023-11-03T00:00:00.000Z",
      end: "2023-11-10T00:00:00.000Z",
    },
    weeks: [
      {
        percentage: 100,
        count: 2361,
      },
      {
        percentage: 66.9,
        count: 1579,
      },
      {
        percentage: 51,
        count: 1204,
      },
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ],
  },
  "Nov 10, 2023": {
    size: 2729,
    dates: {
      start: "2023-11-10T00:00:00.000Z",
      end: "2023-11-17T00:00:00.000Z",
    },
    weeks: [
      {
        percentage: 100,
        count: 2729,
      },
      {
        percentage: 69.9,
        count: 1907,
      },
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ],
  },
  "Nov 17, 2023": {
    size: 2905,
    dates: {
      start: "2023-11-17T00:00:00.000Z",
      end: "2023-11-24T00:00:00.000Z",
    },
    weeks: [
      {
        percentage: 100,
        count: 2905,
      },
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ],
  },
  // array-end
}

const colorClasses = [
  "bg-blue-50 dark:bg-blue-950",
  "bg-blue-100 dark:bg-blue-900",
  "bg-blue-200 dark:bg-blue-800",
  "bg-blue-300 dark:bg-blue-700",
  "bg-blue-400 dark:bg-blue-600",
  "bg-blue-500 dark:bg-blue-500",
  "bg-blue-600 dark:bg-blue-400",
]

const getBackgroundColor = (
  value: number,
  minValue: number,
  maxValue: number,
) => {
  const normalizedValue = (value - minValue) / (maxValue - minValue)
  const index = Math.min(
    Math.floor(normalizedValue * colorClasses.length),
    colorClasses.length - 1,
  )
  return colorClasses[index]
}

const getTextColor = (value: number, minValue: number, maxValue: number) => {
  return (value - minValue) / (maxValue - minValue) > 0.6
    ? "text-white dark:text-white"
    : "text-gray-900 dark:text-gray-50"
}

export default function CohortRetention() {
  const cohortEntries = Object.entries(cohorts as CohortRetentionData)
  const weeksCount = cohortEntries[0]?.[1].weeks.length ?? 0
  const weeks = Array.from({ length: weeksCount }, (_, i) => i)

  return (
    <div className="obfuscate">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
            Cohort Retention
          </h1>
          <p className="text-gray-500 sm:text-sm/6 dark:text-gray-500">
            Track customer engagement patterns and analyze support trends across
            user segments
          </p>
        </div>
      </div>
      <Divider />
      <section className="mt-8">
        <TableRoot className="overflow-scroll">
          <Table className="border-none">
            <TableHead>
              <TableRow>
                <TableHeaderCell className="sticky top-0 left-0 z-10 min-w-40 border-transparent bg-white p-px dark:border-transparent dark:bg-gray-950">
                  <span className="block">Cohort</span>
                  <span className="block font-normal text-gray-500 dark:text-gray-500">
                    Initial customers
                  </span>
                </TableHeaderCell>
                {weeks.map((week) => (
                  <TableHeaderCell
                    key={week}
                    className="border-none font-medium"
                  >
                    Week {week}
                  </TableHeaderCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody className="divide-none">
              {cohortEntries.map(
                ([cohortKey, cohortData]: [string, CohortData]) => (
                  <TableRow key={cohortKey} className="h-full">
                    <TableCell className="sticky left-0 z-10 h-full bg-white p-0 sm:min-w-56 dark:bg-gray-950">
                      <span className="block text-sm font-medium text-gray-900 dark:text-gray-50">
                        {cohortKey}
                      </span>
                      <span className="mt-0.5 block text-sm text-gray-500 dark:text-gray-500">
                        {valueFormatter(cohortData.size)} customers
                      </span>
                    </TableCell>
                    {cohortData.weeks.map((weekData, weekIndex) => (
                      <TableCell
                        key={weekIndex}
                        className="h-full min-w-24 p-[2px]"
                      >
                        {weekData === null ? (
                          <div
                            className={cx(
                              "flex h-[64px] flex-col justify-center rounded border border-dashed border-gray-200 bg-gray-50 px-3.5 py-3 text-gray-200 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-800",
                            )}
                          >
                            <span className="h-3 w-9 rounded-sm bg-gray-100 dark:bg-gray-800/50" />
                            <span className="mt-1 h-3 w-6 rounded-sm bg-gray-100 dark:bg-gray-800/50" />
                          </div>
                        ) : (
                          <div
                            className={cx(
                              "flex h-full flex-col justify-center rounded px-3.5 py-3",
                              getBackgroundColor(weekData.percentage, 0, 100),
                              getTextColor(weekData.percentage, 0, 100),
                            )}
                          >
                            <span className="block text-sm font-medium">
                              {weekData.percentage.toFixed(1)}%
                            </span>
                            <span
                              className={cx(
                                "mt-0.5 block text-sm",
                                getTextColor(weekData.percentage, 0, 100),
                              )}
                            >
                              {weekData.count}
                            </span>
                          </div>
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ),
              )}
            </TableBody>
          </Table>
        </TableRoot>
      </section>
    </div>
  )
}
```


```example/tables-table-05.tsx
"use client"

import { Button } from "@/atom/Button"
import { ProgressCircle } from "@/atom/ProgressCircle"
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
    capacity: 31.1,
    lastEdited: "23/09/2023 13:00",
  },
  {
    workspace: "marketing_campaign",
    owner: "Jane Smith",
    status: "Live",
    costs: "$5,720.00",
    region: "US-East 2",
    capacity: 81.3,
    lastEdited: "22/09/2023 10:45",
  },
  {
    workspace: "test_environment",
    owner: "David Clark",
    status: "Inactive",
    costs: "$800.00",
    region: "EU-Central 1",
    capacity: 40.8,
    lastEdited: "25/09/2023 16:20",
  },
  {
    workspace: "sales_campaign",
    owner: "Jane Smith",
    status: "Live",
    costs: "$5,720.00",
    region: "US-East 2",
    capacity: 51.4,
    lastEdited: "22/09/2023 10:45",
  },
  {
    workspace: "development_env",
    owner: "Mike Johnson",
    status: "Inactive",
    costs: "$4,200.00",
    region: "EU-West 1",
    capacity: 60.4,
    lastEdited: "21/09/2023 14:30",
  },
  {
    workspace: "new_workspace_1",
    owner: "Alice Brown",
    status: "Inactive",
    costs: "$2,100.00",
    region: "US-West 2",
    capacity: 75.9,
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
          <p className="dark:text-gry-500 mt-1 text-sm/6 text-gray-500">
            Overview of all registered workspaces within your organization.
          </p>
        </div>
        <Button className="mt-4 w-full sm:mt-0 sm:w-fit">Add workspace</Button>
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
              <TableHeaderCell className="text-right">Costs</TableHeaderCell>
              <TableHeaderCell className="text-right">
                Last edited
              </TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.workspace}>
                <TableCell className="font-medium text-gray-900 dark:text-gray-50">
                  {item.workspace}
                </TableCell>
                <TableCell>{item.owner}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>{item.region}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-x-2.5">
                    <ProgressCircle
                      value={item.capacity}
                      radius={8}
                      strokeWidth={3}
                      color={
                        item.capacity < 50
                          ? "emerald"
                          : item.capacity < 75
                            ? "orange"
                            : "red"
                      }
                      aria-hidden={true}
                    />
                    {item.capacity}%
                  </div>
                </TableCell>
                <TableCell className="text-right">{item.costs}</TableCell>
                <TableCell className="text-right">{item.lastEdited}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableRoot>
    </div>
  )
}
```


```example/tables-table-04.tsx
"use client"

import { cx } from "@/lib/utils"

import { Button } from "@/atom/Button"
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
    capacity: "99%",
    lastEdited: "23/09/2023 13:00",
  },
  {
    workspace: "marketing_campaign",
    owner: "Jane Smith",
    status: "Live",
    costs: "$5,720.00",
    region: "US-East 2",
    capacity: "80%",
    lastEdited: "22/09/2023 10:45",
  },
  {
    workspace: "test_environment",
    owner: "David Clark",
    status: "Inactive",
    costs: "$800.00",
    region: "EU-Central 1",
    capacity: "40%",
    lastEdited: "25/09/2023 16:20",
  },
  {
    workspace: "sales_campaign",
    owner: "Jane Smith",
    status: "Live",
    costs: "$5,720.00",
    region: "US-East 2",
    capacity: "80%",
    lastEdited: "22/09/2023 10:45",
  },
  {
    workspace: "development_env",
    owner: "Mike Johnson",
    status: "Inactive",
    costs: "$4,200.00",
    region: "EU-West 1",
    capacity: "60%",
    lastEdited: "21/09/2023 14:30",
  },
  {
    workspace: "new_workspace_1",
    owner: "Alice Brown",
    status: "Inactive",
    costs: "$2,100.00",
    region: "US-West 2",
    capacity: "75%",
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
      <TableRoot className="mt-8">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Workspace</TableHeaderCell>
              <TableHeaderCell>Owner</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
              <TableHeaderCell>Region</TableHeaderCell>
              <TableHeaderCell>Capacity</TableHeaderCell>
              <TableHeaderCell className="text-right">Costs</TableHeaderCell>
              <TableHeaderCell className="text-right">
                Last edited
              </TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.workspace}>
                <TableCell className="font-medium text-gray-900 dark:text-gray-50">
                  {item.workspace}
                </TableCell>
                <TableCell>{item.owner}</TableCell>
                <TableCell>
                  <span
                    className={cx(
                      item.status === "Live"
                        ? "bg-emerald-100 text-emerald-800 ring-emerald-600/10 dark:bg-emerald-500/20 dark:text-emerald-500 dark:ring-emerald-400/20"
                        : "bg-orange-100 text-orange-800 ring-orange-600/10 dark:bg-orange-500/20 dark:text-orange-500 dark:ring-orange-400/20",
                      "inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ring-1 ring-inset",
                    )}
                  >
                    {item.status}
                  </span>
                </TableCell>
                <TableCell>{item.region}</TableCell>
                <TableCell>{item.capacity}</TableCell>
                <TableCell className="text-right">{item.costs}</TableCell>
                <TableCell className="text-right">{item.lastEdited}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableRoot>
    </div>
  )
}
```


```example/tables-table-10.tsx
"use client"

import { Fragment } from "react"
import {
  RiCheckLine,
  RiInformationLine,
  RiSubtractLine,
} from "@remixicon/react"

import { cx } from "@/lib/utils"

import { Tooltip } from "@/atom/Tooltip"

interface Plan {
  name: string
  price: string
  description: string
  capacity: string[]
  features: string[]
  isStarter: boolean
  isRecommended: boolean
  buttonText: string
  buttonLink: string
}

const plans: Plan[] = [
  {
    name: "Starter",
    price: "$0",
    description:
      "For individuals and freelancers that need a scalable database.",
    capacity: ["Up to 5 users, 1 admin", "1 workspace"],
    features: [
      "Up to 1000/req. per day",
      "5 GB max storage",
      "Community Slack Support",
    ],
    isStarter: true,
    isRecommended: false,
    buttonText: "Get started",
    buttonLink: "#",
  },
  {
    name: "Teams",
    price: "$49",
    description: "For small teams and start-ups that need a scalable database.",
    capacity: ["Up to 100 users, 3 admins", "Up to 20 workspaces"],
    features: [
      "Unlimited requests",
      "$0.07 per processed GB",
      "$0.34 per stored GB",
      "Slack Connect",
    ],
    isStarter: false,
    isRecommended: false,
    buttonText: "Start 14-day trial",
    buttonLink: "#",
  },
  {
    name: "Business",
    price: "$99",
    description:
      "For larger teams that need more advanced controls and features.",
    capacity: ["Up to 500 users, 10 admins", "Unlimited workspaces"],
    features: [
      "Unlimited requests",
      "Volume discount",
      "$0.03 per processed GB",
      "$0.1 per stored GB",
      "Single Sign-On (SSO)",
    ],
    isStarter: false,
    isRecommended: true,
    buttonText: "Start 14-day trial",
    buttonLink: "#",
  },
]

interface Feature {
  name: string
  plans: Record<string, boolean | string>
  tooltip?: string
}

interface Section {
  name: string
  features: Feature[]
}

const sections: Section[] = [
  {
    name: "Workspace Features",
    features: [
      {
        name: "Email notifications & webhooks",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
        plans: { Starter: true, Teams: true, Business: true },
      },
      {
        name: "Workspaces",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
        plans: { Starter: "5", Teams: "10", Business: "Unlimited" },
      },
      {
        name: "Storage",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
        plans: {
          Starter: "$0.65 per stored GB",
          Teams: "$0.34 per stored GB",
          Business: "Customized¹",
        },
      },
      {
        name: "Seats",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
        plans: {
          Starter: "5 users",
          Teams: "Up to 20 users",
          Business: "Unlimited",
        },
      },
    ],
  },
  {
    name: "Automation",
    features: [
      {
        name: "Service accounts",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
        plans: { Starter: true, Teams: true, Business: true },
      },
      {
        name: "Admin API",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
        plans: { Teams: true, Business: true },
      },
      {
        name: "No-Code workflow builder",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
        plans: { Starter: "Limited", Teams: "Standard", Business: "Enhanced" },
      },
    ],
  },
  {
    name: "Analytics",
    features: [
      {
        name: "Analytics retention",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
        plans: { Starter: "7 days", Teams: "1 year", Business: "Unlimited" },
      },
      {
        name: "Anomaly detection",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
        plans: { Teams: true, Business: true },
      },
      {
        name: "Custom report builder",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
        plans: { Business: true },
      },
    ],
  },
  {
    name: "Support",
    features: [
      {
        name: "Slack",
        plans: {
          Starter: "Community",
          Teams: "Connect",
          Business: "Dedicated agent",
        },
      },
      {
        name: "Email",
        plans: { Starter: "2-4 days", Teams: "1-2 days", Business: "Priority" },
      },
    ],
  },
]

export default function Example() {
  return (
    <div className="obfuscate">
      <section className="mx-auto py-10">
        <div className="hidden lg:block">
          <div className="relative">
            <table className="w-full table-fixed border-separate border-spacing-0 text-left">
              <caption className="sr-only">Pricing plan comparison</caption>
              <colgroup>
                <col className="w-2/5" />
                <col className="w-1/5" />
                <col className="w-1/5" />
                <col className="w-1/5" />
              </colgroup>
              <thead className="">
                <tr>
                  <th
                    scope="col"
                    className="border-b border-gray-100 bg-white pb-8 dark:border-gray-800 dark:bg-gray-950"
                  >
                    <div className="leading-7 font-semibold text-gray-900 dark:text-gray-50">
                      Compare prices
                    </div>
                    <div className="text-sm font-normal text-gray-600 dark:text-gray-400">
                      Price per month (billed yearly)
                    </div>
                  </th>
                  {plans.map((plan) => (
                    <th
                      key={plan.name}
                      scope="col"
                      className="border-b border-gray-100 bg-white px-6 pb-8 lg:px-8 dark:border-gray-800 dark:bg-gray-950"
                    >
                      <div
                        className={cx(
                          !plan.isStarter
                            ? "text-blue-600 dark:text-blue-400"
                            : "text-gray-900 dark:text-gray-50",
                          "leading-7 font-semibold",
                        )}
                      >
                        {plan.name}
                      </div>
                      <div className="text-sm font-normal text-gray-600 dark:text-gray-400">
                        {plan.price}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sections.map((section, sectionIdx) => (
                  <Fragment key={section.name}>
                    <tr>
                      <th
                        scope="colgroup"
                        colSpan={4}
                        className={cx(
                          sectionIdx === 0 ? "pt-14" : "pt-10",
                          "border-b border-gray-100 pb-4 text-base leading-6 font-semibold text-gray-900 dark:border-gray-800 dark:text-gray-50",
                        )}
                      >
                        {section.name}
                      </th>
                    </tr>
                    {section.features.map((feature) => (
                      <tr
                        key={feature.name}
                        className="transition hover:bg-blue-50/30 dark:hover:bg-blue-800/5"
                      >
                        <th
                          scope="row"
                          className="flex items-center gap-2 border-b border-gray-100 py-4 text-sm leading-6 font-normal text-gray-900 dark:border-gray-800 dark:text-gray-50"
                        >
                          <span>{feature.name}</span>
                          {feature.tooltip ? (
                            <Tooltip side="right" content={feature.tooltip}>
                              <RiInformationLine
                                className="size-4 shrink-0 text-gray-700 dark:text-gray-400"
                                aria-hidden="true"
                              />
                            </Tooltip>
                          ) : null}
                        </th>
                        {plans.map((plan) => (
                          <td
                            key={plan.name}
                            className="border-b border-gray-100 px-6 py-4 lg:px-8 dark:border-gray-800"
                          >
                            {typeof feature.plans[plan.name] === "string" ? (
                              <div className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                                {feature.plans[plan.name]}
                              </div>
                            ) : (
                              <>
                                {feature.plans[plan.name] === true ? (
                                  <RiCheckLine
                                    className="h-5 w-5 text-blue-600 dark:text-blue-400"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <RiSubtractLine
                                    className="h-5 w-5 text-gray-400 dark:text-gray-600"
                                    aria-hidden="true"
                                  />
                                )}

                                <span className="sr-only">
                                  {feature.plans[plan.name] === true
                                    ? "Included"
                                    : "Not included"}{" "}
                                  in {plan.name}
                                </span>
                              </>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}
```


```example/tables-table-01.tsx
"use client"

import { Button } from "@/atom/Button"
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
    status: "live",
    costs: "$3,509.00",
    region: "US-West 1",
    capacity: "99%",
    lastEdited: "23/09/2023 13:00",
  },
  {
    workspace: "marketing_campaign",
    owner: "Jane Smith",
    status: "live",
    costs: "$5,720.00",
    region: "US-East 2",
    capacity: "80%",
    lastEdited: "22/09/2023 10:45",
  },
  {
    workspace: "sales_campaign",
    owner: "Jane Smith",
    status: "live",
    costs: "$5,720.00",
    region: "US-East 2",
    capacity: "80%",
    lastEdited: "22/09/2023 10:45",
  },
  {
    workspace: "development_env",
    owner: "Mike Johnson",
    status: "live",
    costs: "$4,200.00",
    region: "EU-West 1",
    capacity: "60%",
    lastEdited: "21/09/2023 14:30",
  },
  {
    workspace: "new_workspace_1",
    owner: "Alice Brown",
    status: "live",
    costs: "$2,100.00",
    region: "US-West 2",
    capacity: "75%",
    lastEdited: "24/09/2023 09:15",
  },
  {
    workspace: "test_environment",
    owner: "David Clark",
    status: "inactive",
    costs: "$800.00",
    region: "EU-Central 1",
    capacity: "40%",
    lastEdited: "25/09/2023 16:20",
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
      <TableRoot className="mt-8">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Workspace</TableHeaderCell>
              <TableHeaderCell>Owner</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
              <TableHeaderCell>Region</TableHeaderCell>
              <TableHeaderCell>Capacity</TableHeaderCell>
              <TableHeaderCell className="text-right">Costs</TableHeaderCell>
              <TableHeaderCell className="text-right">
                Last edited
              </TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.workspace}>
                <TableCell className="font-medium text-gray-900 dark:text-gray-50">
                  {item.workspace}
                </TableCell>
                <TableCell>{item.owner}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>{item.region}</TableCell>
                <TableCell>{item.capacity}</TableCell>
                <TableCell className="text-right">{item.costs}</TableCell>
                <TableCell className="text-right">{item.lastEdited}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableRoot>
    </div>
  )
}
```


```example/tables-table-03.tsx
"use client"

import { Button } from "@/atom/Button"
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
```


```example/tables-table-02.tsx
"use client"

import { Button } from "@/atom/Button"
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
    capacity: "99%",
    lastEdited: "23/09/2023 13:00",
  },
  {
    workspace: "marketing_campaign",
    owner: "Jane Smith",
    status: "Live",
    costs: "$5,720.00",
    region: "US-East 2",
    capacity: "80%",
    lastEdited: "22/09/2023 10:45",
  },
  {
    workspace: "test_environment",
    owner: "David Clark",
    status: "Inactive",
    costs: "$800.00",
    region: "EU-Central 1",
    capacity: "40%",
    lastEdited: "25/09/2023 16:20",
  },
  {
    workspace: "sales_campaign",
    owner: "Jane Smith",
    status: "Live",
    costs: "$5,720.00",
    region: "US-East 2",
    capacity: "80%",
    lastEdited: "22/09/2023 10:45",
  },
  {
    workspace: "development_env",
    owner: "Mike Johnson",
    status: "Inactive",
    costs: "$4,200.00",
    region: "EU-West 1",
    capacity: "60%",
    lastEdited: "21/09/2023 14:30",
  },
  {
    workspace: "new_workspace_1",
    owner: "Alice Brown",
    status: "Inactive",
    costs: "$2,100.00",
    region: "US-West 2",
    capacity: "75%",
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
      <TableRoot className="mt-8">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Workspace</TableHeaderCell>
              <TableHeaderCell>Owner</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
              <TableHeaderCell>Region</TableHeaderCell>
              <TableHeaderCell>Capacity</TableHeaderCell>
              <TableHeaderCell className="text-right">Costs</TableHeaderCell>
              <TableHeaderCell className="text-right">
                Last edited
              </TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow
                key={item.workspace}
                className="even:bg-gray-50 even:dark:bg-gray-900"
              >
                <TableCell className="font-medium text-gray-900 dark:text-gray-50">
                  {item.workspace}
                </TableCell>
                <TableCell>{item.owner}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>{item.region}</TableCell>
                <TableCell>{item.capacity}</TableCell>
                <TableCell className="text-right">{item.costs}</TableCell>
                <TableCell className="text-right">{item.lastEdited}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableRoot>
    </div>
  )
}
```


```example/table-actions-table-action-09.tsx
import React from "react"
import {
  RiDeleteBin7Line,
  RiPencilLine,
  RiPlayListAddLine,
} from "@remixicon/react"
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { cx } from "@/lib/utils"

import { Checkbox } from "@/atom/Checkbox"
import {
  Table,
  TableBody,
  TableCell,
  TableFoot,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from "@/atom/Table"

// This example requires @tanstack/react-table

type Workspace = {
  workspace: string
  owner: string
  status: string
  costs: string
  region: string
  capacity: string
  lastEdited: string
}

const workspaces: Workspace[] = [
  //array-start
  {
    workspace: "sales_by_day_api",
    owner: "John Doe",
    status: "live",
    costs: "$3,509.00",
    region: "US-West 1",
    capacity: "99%",
    lastEdited: "23/09/2023 13:00",
  },
  {
    workspace: "marketing_campaign",
    owner: "Jane Smith",
    status: "live",
    costs: "$5,720.00",
    region: "US-East 2",
    capacity: "80%",
    lastEdited: "22/09/2023 10:45",
  },
  {
    workspace: "sales_campaign",
    owner: "Jane Smith",
    status: "live",
    costs: "$5,720.00",
    region: "US-East 2",
    capacity: "80%",
    lastEdited: "22/09/2023 10:45",
  },
  {
    workspace: "development_env",
    owner: "Mike Johnson",
    status: "live",
    costs: "$4,200.00",
    region: "EU-West 1",
    capacity: "60%",
    lastEdited: "21/09/2023 14:30",
  },
  {
    workspace: "new_workspace_1",
    owner: "Alice Brown",
    status: "live",
    costs: "$2,100.00",
    region: "US-West 2",
    capacity: "75%",
    lastEdited: "24/09/2023 09:15",
  },
  {
    workspace: "test_environment",
    owner: "David Clark",
    status: "inactive",
    costs: "$800.00",
    region: "EU-Central 1",
    capacity: "40%",
    lastEdited: "25/09/2023 16:20",
  },
  {
    workspace: "analytics_dashboard",
    owner: "Sarah Wilson",
    status: "live",
    costs: "$6,500.00",
    region: "US-West 1",
    capacity: "90%",
    lastEdited: "26/09/2023 11:30",
  },
  {
    workspace: "research_project",
    owner: "Michael Adams",
    status: "live",
    costs: "$3,900.00",
    region: "US-East 1",
    capacity: "70%",
    lastEdited: "27/09/2023 08:45",
  },
  {
    workspace: "training_environment",
    owner: "Laura White",
    status: "live",
    costs: "$2,500.00",
    region: "EU-North 1",
    capacity: "55%",
    lastEdited: "28/09/2023 12:15",
  },
  //array-end
]

const columnHelper = createColumnHelper<Workspace>()

export default function TableCheckbox() {
  const [rowSelection, setRowSelection] = React.useState({})

  React.useEffect(() => {
    // Pre-select the 2nd row for demo purpose
    setRowSelection({ 2: true })
  }, [])

  const workspacesColumns = React.useMemo(
    () => [
      columnHelper.display({
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected()
                ? true
                : table.getIsSomeRowsSelected()
                  ? "indeterminate"
                  : false
            }
            onCheckedChange={() => table.toggleAllPageRowsSelected()}
            className="translate-y-0.5"
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={() => row.toggleSelected()}
            className="translate-y-0.5"
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        meta: {
          align: "text-left",
        },
      }),
      {
        header: "Workspace",
        accessorKey: "workspace",
        enableSorting: true,
        meta: {
          align: "text-left",
        },
      },
      {
        header: "Owner",
        accessorKey: "owner",
        enableSorting: true,
        meta: {
          align: "text-left",
        },
      },
      {
        header: "Status",
        accessorKey: "status",
        enableSorting: false,
        meta: {
          align: "text-left",
        },
      },
      {
        header: "Region",
        accessorKey: "region",
        enableSorting: false,
        meta: {
          align: "text-left",
        },
      },
      {
        header: "Capacity",
        accessorKey: "capacity",
        enableSorting: false,
        meta: {
          align: "text-left",
        },
      },
      {
        header: "Costs",
        accessorKey: "costs",
        enableSorting: false,
        meta: {
          align: "text-right",
        },
      },
      columnHelper.accessor("lastEdited", {
        header: "Last edited",
        enableSorting: false,
        meta: {
          align: "text-right",
        },
        cell: ({ getValue }) => (
          <div className="relative">
            <span>{getValue()}</span>
            <div className="absolute top-1/2 right-0 hidden h-full -translate-y-1/2 items-center bg-gray-50 group-hover:flex dark:bg-gray-900">
              <div className="inline-flex items-center rounded-md shadow-sm">
                <button
                  type="button"
                  className="relative inline-flex items-center rounded-l-md bg-white px-4 py-2 text-gray-700 ring-1 ring-gray-300 ring-inset hover:text-gray-900 focus:z-10 dark:bg-gray-800 dark:text-gray-300 dark:ring-gray-700 hover:dark:text-gray-50"
                  onClick={
                    // add stopPropagation to avoid row selection when clicking button
                    (e) => {
                      e.stopPropagation()
                    }
                  }
                >
                  <RiPencilLine
                    className="size-4"
                    aria-hidden={true}
                    aria-label="Edit"
                  />
                </button>
                <button
                  type="button"
                  className="relative -ml-px inline-flex items-center bg-white px-4 py-2 text-gray-700 ring-1 ring-gray-300 ring-inset hover:text-gray-900 focus:z-10 dark:bg-gray-800 dark:text-gray-300 dark:ring-gray-700 hover:dark:text-gray-50"
                  onClick={
                    // add stopPropagation to avoid row selection when clicking button
                    (e) => {
                      e.stopPropagation()
                    }
                  }
                >
                  <RiPlayListAddLine
                    className="size-4"
                    aria-hidden={true}
                    aria-label="Add"
                  />
                </button>
                <button
                  type="button"
                  className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-4 py-2 text-gray-700 ring-1 ring-gray-300 ring-inset hover:text-gray-900 focus:z-10 dark:bg-gray-800 dark:text-gray-300 dark:ring-gray-700 hover:dark:text-gray-50"
                  onClick={
                    // add stopPropagation to avoid row selection when clicking button
                    (e) => {
                      e.stopPropagation()
                    }
                  }
                >
                  <RiDeleteBin7Line
                    className="size-4"
                    aria-hidden={true}
                    aria-label="Delete"
                  />
                </button>
              </div>
            </div>
          </div>
        ),
      }),
    ],
    [],
  )

  const table = useReactTable({
    data: workspaces,
    columns: workspacesColumns,
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      rowSelection,
    },
  })

  return (
    <div className="obfuscate">
      <TableRoot>
        <Table>
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHeaderCell
                    key={header.id}
                    className={cx(header.column.columnDef.meta?.align)}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </TableHeaderCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                onClick={() => row.toggleSelected(!row.getIsSelected())}
                className="group select-none hover:bg-gray-50 hover:dark:bg-gray-900"
              >
                {row.getVisibleCells().map((cell, index) => (
                  <TableCell
                    key={cell.id}
                    className={cx(
                      row.getIsSelected() ? "bg-gray-50 dark:bg-gray-900" : "",
                      cell.column.columnDef.meta?.align,
                      "relative",
                    )}
                  >
                    {index === 0 && row.getIsSelected() && (
                      <div className="absolute inset-y-0 left-0 w-0.5 bg-blue-500 dark:bg-blue-500" />
                    )}
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
          <TableFoot>
            <TableRow>
              <TableHeaderCell colSpan={1} className="!border-transparent">
                <Checkbox
                  checked={
                    table.getIsAllPageRowsSelected()
                      ? true
                      : table.getIsSomeRowsSelected()
                        ? "indeterminate"
                        : false
                  }
                  onCheckedChange={() => table.toggleAllPageRowsSelected()}
                  aria-label="Select all"
                  className="translate-y-0.5"
                />
              </TableHeaderCell>
              <TableHeaderCell
                colSpan={7}
                className="!border-transparent !font-normal !tabular-nums"
              >
                {Object.keys(rowSelection).length} of{" "}
                {table.getRowModel().rows.length} Page Row(s) selected
              </TableHeaderCell>
            </TableRow>
          </TableFoot>
        </Table>
      </TableRoot>
    </div>
  )
}
```


```example/table-actions-table-action-08.tsx
import React from "react"
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { cx } from "@/lib/utils"

import { Button } from "@/atom/Button"
import { Checkbox } from "@/atom/Checkbox"
import {
  Table,
  TableBody,
  TableCell,
  TableFoot,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from "@/atom/Table"

// This example requires @tanstack/react-table

type Workspace = {
  workspace: string
  owner: string
  status: string
  costs: string
  region: string
  capacity: string
  lastEdited: string
}

const workspaces: Workspace[] = [
  //array-start
  {
    workspace: "sales_by_day_api",
    owner: "John Doe",
    status: "live",
    costs: "$3,509.00",
    region: "US-West 1",
    capacity: "99%",
    lastEdited: "23/09/2023 13:00",
  },
  {
    workspace: "marketing_campaign",
    owner: "Jane Smith",
    status: "live",
    costs: "$5,720.00",
    region: "US-East 2",
    capacity: "80%",
    lastEdited: "22/09/2023 10:45",
  },
  {
    workspace: "sales_campaign",
    owner: "Jane Smith",
    status: "live",
    costs: "$5,720.00",
    region: "US-East 2",
    capacity: "80%",
    lastEdited: "22/09/2023 10:45",
  },
  {
    workspace: "development_env",
    owner: "Mike Johnson",
    status: "live",
    costs: "$4,200.00",
    region: "EU-West 1",
    capacity: "60%",
    lastEdited: "21/09/2023 14:30",
  },
  {
    workspace: "new_workspace_1",
    owner: "Alice Brown",
    status: "live",
    costs: "$2,100.00",
    region: "US-West 2",
    capacity: "75%",
    lastEdited: "24/09/2023 09:15",
  },
  {
    workspace: "test_environment",
    owner: "David Clark",
    status: "inactive",
    costs: "$800.00",
    region: "EU-Central 1",
    capacity: "40%",
    lastEdited: "25/09/2023 16:20",
  },
  {
    workspace: "analytics_dashboard",
    owner: "Sarah Wilson",
    status: "live",
    costs: "$6,500.00",
    region: "US-West 1",
    capacity: "90%",
    lastEdited: "26/09/2023 11:30",
  },
  {
    workspace: "research_project",
    owner: "Michael Adams",
    status: "live",
    costs: "$3,900.00",
    region: "US-East 1",
    capacity: "70%",
    lastEdited: "27/09/2023 08:45",
  },
  {
    workspace: "training_environment",
    owner: "Laura White",
    status: "live",
    costs: "$2,500.00",
    region: "EU-North 1",
    capacity: "55%",
    lastEdited: "28/09/2023 12:15",
  },
  //array-end
]

const columnHelper = createColumnHelper<Workspace>()

export default function TableCheckbox() {
  const [rowSelection, setRowSelection] = React.useState({})

  React.useEffect(() => {
    // Pre-select the 2nd row for demo purpose
    setRowSelection({ 2: true })
  }, [])

  const workspacesColumns = React.useMemo(
    //array-start
    () => [
      columnHelper.display({
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected()
                ? true
                : table.getIsSomeRowsSelected()
                  ? "indeterminate"
                  : false
            }
            onCheckedChange={() => table.toggleAllPageRowsSelected()}
            className="translate-y-0.5"
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={() => row.toggleSelected()}
            className="translate-y-0.5"
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        meta: {
          align: "text-left",
        },
      }),
      {
        header: "Workspace",
        accessorKey: "workspace",
        enableSorting: true,
        meta: {
          align: "text-left",
        },
      },
      {
        header: "Owner",
        accessorKey: "owner",
        enableSorting: true,
        meta: {
          align: "text-left",
        },
      },
      {
        header: "Status",
        accessorKey: "status",
        enableSorting: false,
        meta: {
          align: "text-left",
        },
      },
      {
        header: "Region",
        accessorKey: "region",
        enableSorting: false,
        meta: {
          align: "text-left",
        },
      },
      {
        header: "Capacity",
        accessorKey: "capacity",
        enableSorting: false,
        meta: {
          align: "text-left",
        },
      },
      {
        header: "Costs",
        accessorKey: "costs",
        enableSorting: false,
        meta: {
          align: "text-right",
        },
      },
      columnHelper.accessor("lastEdited", {
        id: "lastEdited",
        header: "Last edited",
        cell: ({ getValue }) => {
          const value = getValue()
          return (
            <div className="relative">
              <span>{value}</span>
              <div className="absolute top-1/2 right-0 hidden h-full -translate-y-1/2 items-center space-x-2 bg-gray-50 group-hover:flex dark:bg-gray-900">
                <Button
                  className="rounded px-2 py-1"
                  onClick={
                    // add stopPropagation to avoid row selection when clicking button
                    (e) => {
                      e.stopPropagation()
                    }
                  }
                >
                  Bulk edit
                </Button>
                <Button
                  className="rounded px-2 py-1"
                  variant="secondary"
                  onClick={
                    // add stopPropagation to avoid row selection when clicking button
                    (e) => {
                      e.stopPropagation()
                    }
                  }
                >
                  Delete all
                </Button>
              </div>
            </div>
          )
        },
        enableSorting: false,
        meta: {
          align: "text-right",
        },
      }),
      //array-end
    ],
    [],
  )

  const table = useReactTable({
    data: workspaces,
    columns: workspacesColumns,
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      rowSelection,
    },
  })

  return (
    <>
      <TableRoot>
        <Table>
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHeaderCell
                    key={header.id}
                    className={cx(header.column.columnDef.meta?.align)}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </TableHeaderCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                onClick={() => row.toggleSelected(!row.getIsSelected())}
                className="group select-none hover:bg-gray-50 hover:dark:bg-gray-900"
              >
                {row.getVisibleCells().map((cell, index) => (
                  <TableCell
                    key={cell.id}
                    className={cx(
                      row.getIsSelected() ? "bg-gray-50 dark:bg-gray-900" : "",
                      cell.column.columnDef.meta?.align,
                      "relative",
                    )}
                  >
                    {index === 0 && row.getIsSelected() && (
                      <div className="absolute inset-y-0 left-0 w-0.5 bg-blue-500 dark:bg-blue-500" />
                    )}
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
          <TableFoot>
            <TableRow>
              <TableHeaderCell colSpan={1} className="!border-transparent">
                <Checkbox
                  checked={
                    table.getIsAllPageRowsSelected()
                      ? true
                      : table.getIsSomeRowsSelected()
                        ? "indeterminate"
                        : false
                  }
                  onCheckedChange={() => table.toggleAllPageRowsSelected()}
                  aria-label="Select all"
                  className="translate-y-0.5"
                />
              </TableHeaderCell>
              <TableHeaderCell
                colSpan={7}
                className="!border-transparent !font-normal !tabular-nums"
              >
                {Object.keys(rowSelection).length} of{" "}
                {table.getRowModel().rows.length} Page Row(s) selected
              </TableHeaderCell>
            </TableRow>
          </TableFoot>
        </Table>
      </TableRoot>
    </>
  )
}
```


```example/table-actions-table-action-01.tsx
import { RiArrowDownSLine, RiArrowUpSLine } from "@remixicon/react"
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortDirection,
  useReactTable,
} from "@tanstack/react-table"

import { cx } from "@/lib/utils"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from "@/atom/Table"

// This example requires @tanstack/react-table

const workspaces = [
  //array-start
  {
    workspace: "sales_by_day_api",
    owner: "John Doe",
    status: "live",
    costs: "$3,509.00",
    region: "US-West 1",
    capacity: "99%",
    lastEdited: "23/09/2023 13:00",
  },
  {
    workspace: "marketing_campaign",
    owner: "Jane Smith",
    status: "live",
    costs: "$5,720.00",
    region: "US-East 2",
    capacity: "80%",
    lastEdited: "22/09/2023 10:45",
  },
  {
    workspace: "sales_campaign",
    owner: "Jane Smith",
    status: "live",
    costs: "$5,720.00",
    region: "US-East 2",
    capacity: "80%",
    lastEdited: "22/09/2023 10:45",
  },
  {
    workspace: "development_env",
    owner: "Mike Johnson",
    status: "live",
    costs: "$4,200.00",
    region: "EU-West 1",
    capacity: "60%",
    lastEdited: "21/09/2023 14:30",
  },
  {
    workspace: "new_workspace_1",
    owner: "Alice Brown",
    status: "live",
    costs: "$2,100.00",
    region: "US-West 2",
    capacity: "75%",
    lastEdited: "24/09/2023 09:15",
  },
  {
    workspace: "test_environment",
    owner: "David Clark",
    status: "inactive",
    costs: "$800.00",
    region: "EU-Central 1",
    capacity: "40%",
    lastEdited: "25/09/2023 16:20",
  },
  {
    workspace: "analytics_dashboard",
    owner: "Sarah Wilson",
    status: "live",
    costs: "$6,500.00",
    region: "US-West 1",
    capacity: "90%",
    lastEdited: "26/09/2023 11:30",
  },
  {
    workspace: "research_project",
    owner: "Michael Adams",
    status: "live",
    costs: "$3,900.00",
    region: "US-East 1",
    capacity: "70%",
    lastEdited: "27/09/2023 08:45",
  },
  {
    workspace: "training_environment",
    owner: "Laura White",
    status: "live",
    costs: "$2,500.00",
    region: "EU-North 1",
    capacity: "55%",
    lastEdited: "28/09/2023 12:15",
  },
  //array-end
]

const workspacesColumns = [
  //array-start
  {
    header: "Workspace",
    accessorKey: "workspace",
    enableSorting: true,
    meta: {
      align: "text-left",
    },
  },
  {
    header: "Owner",
    accessorKey: "owner",
    enableSorting: true,
    meta: {
      align: "text-left",
    },
  },
  {
    header: "Status",
    accessorKey: "status",
    enableSorting: false,
    meta: {
      align: "text-left",
    },
  },
  {
    header: "Region",
    accessorKey: "region",
    enableSorting: false,
    meta: {
      align: "text-left",
    },
  },
  {
    header: "Capacity",
    accessorKey: "capacity",
    enableSorting: false,
    meta: {
      align: "text-left",
    },
  },
  {
    header: "Costs",
    accessorKey: "costs",
    enableSorting: false,
    meta: {
      align: "text-right",
    },
  },
  {
    header: "Last edited",
    accessorKey: "lastEdited",
    enableSorting: false,
    meta: {
      align: "text-right",
    },
  },
  //array-end
]

export default function Example() {
  const table = useReactTable({
    data: workspaces,
    columns: workspacesColumns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    initialState: {
      sorting: [
        {
          id: "workspace",
          desc: false,
        },
      ],
    },
  })

  return (
    <div className="obfuscate">
      <TableRoot>
        <Table>
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  const sortingHandler =
                    header.column.getToggleSortingHandler?.()
                  const getAriaSortValue = (
                    isSorted: false | SortDirection,
                  ) => {
                    switch (isSorted) {
                      case "asc":
                        return "ascending"
                      case "desc":
                        return "descending"
                      case false:
                      default:
                        return "none"
                    }
                  }

                  return (
                    <TableHeaderCell
                      key={header.id}
                      onClick={sortingHandler}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" && sortingHandler) {
                          sortingHandler(event)
                        }
                      }}
                      className={cx(
                        header.column.getCanSort()
                          ? "cursor-pointer select-none"
                          : "",
                        "!px-0.5 !py-1.5",
                      )}
                      tabIndex={header.column.getCanSort() ? 0 : -1}
                      aria-sort={getAriaSortValue(header.column.getIsSorted())}
                    >
                      <div
                        className={cx(
                          header.column.columnDef.enableSorting === true
                            ? "flex items-center justify-between gap-2 hover:bg-gray-50 hover:dark:bg-gray-900"
                            : header.column.columnDef.meta?.align,
                          "rounded-md px-3 py-1.5",
                        )}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                        {header.column.getCanSort() ? (
                          <div className="-space-y-2">
                            <RiArrowUpSLine
                              className={cx(
                                "size-4 text-gray-900 dark:text-gray-50",
                                header.column.getIsSorted() === "desc"
                                  ? "opacity-30"
                                  : "",
                              )}
                              aria-hidden={true}
                            />
                            <RiArrowDownSLine
                              className={cx(
                                "size-4 text-gray-900 dark:text-gray-50",
                                header.column.getIsSorted() === "asc"
                                  ? "opacity-30"
                                  : "",
                              )}
                              aria-hidden={true}
                            />
                          </div>
                        ) : null}
                      </div>
                    </TableHeaderCell>
                  )
                })}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    className={cx(cell.column.columnDef.meta?.align)}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableRoot>
    </div>
  )
}
```


```example/table-actions-table-action-03.tsx
import { RiArrowDownSFill, RiArrowUpSFill } from "@remixicon/react"
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortDirection,
  useReactTable,
} from "@tanstack/react-table"

import { cx } from "@/lib/utils"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from "@/atom/Table"

// This example requires @tanstack/react-table

const workspaces = [
  //array-start
  {
    workspace: "sales_by_day_api",
    owner: "John Doe",
    status: "live",
    costs: "$3,509.00",
    region: "US-West 1",
    capacity: "99%",
    lastEdited: "23/09/2023 13:00",
  },
  {
    workspace: "marketing_campaign",
    owner: "Jane Smith",
    status: "live",
    costs: "$5,720.00",
    region: "US-East 2",
    capacity: "80%",
    lastEdited: "22/09/2023 10:45",
  },
  {
    workspace: "sales_campaign",
    owner: "Jane Smith",
    status: "live",
    costs: "$5,720.00",
    region: "US-East 2",
    capacity: "80%",
    lastEdited: "22/09/2023 10:45",
  },
  {
    workspace: "development_env",
    owner: "Mike Johnson",
    status: "live",
    costs: "$4,200.00",
    region: "EU-West 1",
    capacity: "60%",
    lastEdited: "21/09/2023 14:30",
  },
  {
    workspace: "new_workspace_1",
    owner: "Alice Brown",
    status: "live",
    costs: "$2,100.00",
    region: "US-West 2",
    capacity: "75%",
    lastEdited: "24/09/2023 09:15",
  },
  {
    workspace: "test_environment",
    owner: "David Clark",
    status: "inactive",
    costs: "$800.00",
    region: "EU-Central 1",
    capacity: "40%",
    lastEdited: "25/09/2023 16:20",
  },
  {
    workspace: "analytics_dashboard",
    owner: "Sarah Wilson",
    status: "live",
    costs: "$6,500.00",
    region: "US-West 1",
    capacity: "90%",
    lastEdited: "26/09/2023 11:30",
  },
  {
    workspace: "research_project",
    owner: "Michael Adams",
    status: "live",
    costs: "$3,900.00",
    region: "US-East 1",
    capacity: "70%",
    lastEdited: "27/09/2023 08:45",
  },
  {
    workspace: "training_environment",
    owner: "Laura White",
    status: "live",
    costs: "$2,500.00",
    region: "EU-North 1",
    capacity: "55%",
    lastEdited: "28/09/2023 12:15",
  },
  //array-end
]

const workspacesColumns = [
  //array-start
  {
    header: "Workspace",
    accessorKey: "workspace",
    enableSorting: true,
    meta: {
      align: "text-left",
    },
  },
  {
    header: "Owner",
    accessorKey: "owner",
    enableSorting: true,
    meta: {
      align: "text-left",
    },
  },
  {
    header: "Status",
    accessorKey: "status",
    enableSorting: false,
    meta: {
      align: "text-left",
    },
  },
  {
    header: "Region",
    accessorKey: "region",
    enableSorting: false,
    meta: {
      align: "text-left",
    },
  },
  {
    header: "Capacity",
    accessorKey: "capacity",
    enableSorting: false,
    meta: {
      align: "text-left",
    },
  },
  {
    header: "Costs",
    accessorKey: "costs",
    enableSorting: false,
    meta: {
      align: "text-right",
    },
  },
  {
    header: "Last edited",
    accessorKey: "lastEdited",
    enableSorting: false,
    meta: {
      align: "text-right",
    },
  },
  //array-end
]

export default function Example() {
  const table = useReactTable({
    data: workspaces,
    columns: workspacesColumns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    initialState: {
      sorting: [
        {
          id: "workspace",
          desc: false,
        },
      ],
    },
  })

  return (
    <div className="obfuscate">
      <TableRoot>
        <Table>
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  const sortingHandler =
                    header.column.getToggleSortingHandler?.()
                  const getAriaSortValue = (
                    isSorted: false | SortDirection,
                  ) => {
                    switch (isSorted) {
                      case "asc":
                        return "ascending"
                      case "desc":
                        return "descending"
                      case false:
                      default:
                        return "none"
                    }
                  }
                  return (
                    <TableHeaderCell
                      key={header.id}
                      onClick={header.column.getToggleSortingHandler()}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" && sortingHandler) {
                          sortingHandler(event)
                        }
                      }}
                      className={cx(
                        header.column.getCanSort()
                          ? "cursor-pointer select-none"
                          : "",
                        "border-transparent bg-gray-50 first:rounded-l-md last:rounded-r-md dark:border-transparent dark:bg-gray-900",
                      )}
                      tabIndex={header.column.getCanSort() ? 0 : -1}
                      aria-sort={getAriaSortValue(header.column.getIsSorted())}
                    >
                      <div
                        className={cx(
                          header.column.columnDef.enableSorting === true
                            ? "flex items-center gap-2"
                            : header.column.columnDef.meta?.align,
                        )}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                        {header.column.getCanSort() ? (
                          <div className="-space-y-2.5">
                            <RiArrowUpSFill
                              className={cx(
                                "size-4 text-gray-500 dark:text-gray-500",
                                header.column.getIsSorted() === "desc"
                                  ? "opacity-30"
                                  : "",
                              )}
                              aria-hidden={true}
                            />
                            <RiArrowDownSFill
                              className={cx(
                                "size-4 text-gray-500 dark:text-gray-500",
                                header.column.getIsSorted() === "asc"
                                  ? "opacity-30"
                                  : "",
                              )}
                              aria-hidden={true}
                            />
                          </div>
                        ) : null}
                      </div>
                    </TableHeaderCell>
                  )
                })}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    className={cx(cell.column.columnDef.meta?.align)}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableRoot>
    </div>
  )
}
```


```example/table-actions-table-action-02.tsx
import { RiArrowDownLine, RiArrowUpLine } from "@remixicon/react"
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortDirection,
  useReactTable,
} from "@tanstack/react-table"

import { cx } from "@/lib/utils"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from "@/atom/Table"

// This example requires @tanstack/react-table

const workspaces = [
  //array-start
  {
    workspace: "sales_by_day_api",
    owner: "John Doe",
    status: "live",
    costs: "$3,509.00",
    region: "US-West 1",
    capacity: "99%",
    lastEdited: "23/09/2023 13:00",
  },
  {
    workspace: "marketing_campaign",
    owner: "Jane Smith",
    status: "live",
    costs: "$5,720.00",
    region: "US-East 2",
    capacity: "80%",
    lastEdited: "22/09/2023 10:45",
  },
  {
    workspace: "sales_campaign",
    owner: "Jane Smith",
    status: "live",
    costs: "$5,720.00",
    region: "US-East 2",
    capacity: "80%",
    lastEdited: "22/09/2023 10:45",
  },
  {
    workspace: "development_env",
    owner: "Mike Johnson",
    status: "live",
    costs: "$4,200.00",
    region: "EU-West 1",
    capacity: "60%",
    lastEdited: "21/09/2023 14:30",
  },
  {
    workspace: "new_workspace_1",
    owner: "Alice Brown",
    status: "live",
    costs: "$2,100.00",
    region: "US-West 2",
    capacity: "75%",
    lastEdited: "24/09/2023 09:15",
  },
  {
    workspace: "test_environment",
    owner: "David Clark",
    status: "inactive",
    costs: "$800.00",
    region: "EU-Central 1",
    capacity: "40%",
    lastEdited: "25/09/2023 16:20",
  },
  {
    workspace: "analytics_dashboard",
    owner: "Sarah Wilson",
    status: "live",
    costs: "$6,500.00",
    region: "US-West 1",
    capacity: "90%",
    lastEdited: "26/09/2023 11:30",
  },
  {
    workspace: "research_project",
    owner: "Michael Adams",
    status: "live",
    costs: "$3,900.00",
    region: "US-East 1",
    capacity: "70%",
    lastEdited: "27/09/2023 08:45",
  },
  {
    workspace: "training_environment",
    owner: "Laura White",
    status: "live",
    costs: "$2,500.00",
    region: "EU-North 1",
    capacity: "55%",
    lastEdited: "28/09/2023 12:15",
  },
  //array-end
]

const workspacesColumns: {
  header: string
  accessorKey: string
  enableSorting: boolean
  meta: {
    align: string
  }
}[] = [
  //array-start
  {
    header: "Workspace",
    accessorKey: "workspace",
    enableSorting: true,
    meta: {
      align: "text-left",
    },
  },
  {
    header: "Owner",
    accessorKey: "owner",
    enableSorting: true,
    meta: {
      align: "text-left",
    },
  },
  {
    header: "Status",
    accessorKey: "status",
    enableSorting: false,
    meta: {
      align: "text-left",
    },
  },
  {
    header: "Region",
    accessorKey: "region",
    enableSorting: false,
    meta: {
      align: "text-left",
    },
  },
  {
    header: "Capacity",
    accessorKey: "capacity",
    enableSorting: false,
    meta: {
      align: "text-left",
    },
  },
  {
    header: "Costs",
    accessorKey: "costs",
    enableSorting: false,
    meta: {
      align: "text-right",
    },
  },
  {
    header: "Last edited",
    accessorKey: "lastEdited",
    enableSorting: false,
    meta: {
      align: "text-right",
    },
  },
  //array-end
]

export default function Example() {
  const table = useReactTable({
    data: workspaces,
    columns: workspacesColumns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    initialState: {
      sorting: [
        {
          id: "workspace",
          desc: false,
        },
      ],
    },
  })

  return (
    <div className="obfuscate">
      <TableRoot>
        <Table>
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  const sortingHandler =
                    header.column.getToggleSortingHandler?.()
                  const getAriaSortValue = (
                    isSorted: false | SortDirection,
                  ) => {
                    switch (isSorted) {
                      case "asc":
                        return "ascending"
                      case "desc":
                        return "descending"
                      case false:
                      default:
                        return "none"
                    }
                  }
                  return (
                    <TableHeaderCell
                      key={header.id}
                      onClick={header.column.getToggleSortingHandler()}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" && sortingHandler) {
                          sortingHandler(event)
                        }
                      }}
                      className={cx(
                        header.column.getCanSort()
                          ? "cursor-pointer select-none"
                          : "",
                        "group !px-0.5 !py-1.5",
                      )}
                      tabIndex={header.column.getCanSort() ? 0 : -1}
                      aria-sort={getAriaSortValue(header.column.getIsSorted())}
                    >
                      <div
                        className={cx(
                          header.column.columnDef.enableSorting === true
                            ? "flex items-center justify-between gap-2 hover:bg-gray-50 hover:dark:bg-gray-900"
                            : header.column.columnDef.meta?.align,
                          "rounded-lg px-3 py-2.5",
                        )}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                        {header.column.getCanSort() ? (
                          header.column.getIsSorted() === "asc" ? (
                            <RiArrowUpLine
                              className="size-4 text-gray-900 dark:text-gray-50"
                              aria-hidden={true}
                            />
                          ) : header.column.getIsSorted() === "desc" ? (
                            <RiArrowDownLine
                              className="size-4 text-gray-900 dark:text-gray-50"
                              aria-hidden={true}
                            />
                          ) : (
                            <RiArrowUpLine
                              className="size-4 text-gray-500 dark:text-gray-500"
                              aria-hidden={true}
                            />
                          )
                        ) : null}
                      </div>
                    </TableHeaderCell>
                  )
                })}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    className={cx(cell.column.columnDef.meta?.align)}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableRoot>
    </div>
  )
}
```


```example/table-actions-table-action-06.tsx
import React from "react"
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { cx } from "@/lib/utils"

import { Button } from "@/atom/Button"
import { Checkbox } from "@/atom/Checkbox"
import {
  Table,
  TableBody,
  TableCell,
  TableFoot,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from "@/atom/Table"

// This example requires @tanstack/react-table

type Workspace = {
  workspace: string
  owner: string
  status: string
  costs: string
  region: string
  capacity: string
  lastEdited: string
}

const workspaces: Workspace[] = [
  //array-start
  {
    workspace: "sales_by_day_api",
    owner: "John Doe",
    status: "live",
    costs: "$3,509.00",
    region: "US-West 1",
    capacity: "99%",
    lastEdited: "23/09/2023 13:00",
  },
  {
    workspace: "marketing_campaign",
    owner: "Jane Smith",
    status: "live",
    costs: "$5,720.00",
    region: "US-East 2",
    capacity: "80%",
    lastEdited: "22/09/2023 10:45",
  },
  {
    workspace: "sales_campaign",
    owner: "Jane Smith",
    status: "live",
    costs: "$5,720.00",
    region: "US-East 2",
    capacity: "80%",
    lastEdited: "22/09/2023 10:45",
  },
  {
    workspace: "development_env",
    owner: "Mike Johnson",
    status: "live",
    costs: "$4,200.00",
    region: "EU-West 1",
    capacity: "60%",
    lastEdited: "21/09/2023 14:30",
  },
  {
    workspace: "new_workspace_1",
    owner: "Alice Brown",
    status: "live",
    costs: "$2,100.00",
    region: "US-West 2",
    capacity: "75%",
    lastEdited: "24/09/2023 09:15",
  },
  {
    workspace: "test_environment",
    owner: "David Clark",
    status: "inactive",
    costs: "$800.00",
    region: "EU-Central 1",
    capacity: "40%",
    lastEdited: "25/09/2023 16:20",
  },
  {
    workspace: "analytics_dashboard",
    owner: "Sarah Wilson",
    status: "live",
    costs: "$6,500.00",
    region: "US-West 1",
    capacity: "90%",
    lastEdited: "26/09/2023 11:30",
  },
  {
    workspace: "research_project",
    owner: "Michael Adams",
    status: "live",
    costs: "$3,900.00",
    region: "US-East 1",
    capacity: "70%",
    lastEdited: "27/09/2023 08:45",
  },
  {
    workspace: "training_environment",
    owner: "Laura White",
    status: "live",
    costs: "$2,500.00",
    region: "EU-North 1",
    capacity: "55%",
    lastEdited: "28/09/2023 12:15",
  },
  //array-end
]

const columnHelper = createColumnHelper<Workspace>()

export default function TableCheckbox() {
  const [rowSelection, setRowSelection] = React.useState({})

  React.useEffect(() => {
    // Pre-select the 2nd row for demo purpose
    setRowSelection({ 2: true })
  }, [])

  const workspacesColumns = React.useMemo(
    //array-start
    () => [
      columnHelper.display({
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected()
                ? true
                : table.getIsSomeRowsSelected()
                  ? "indeterminate"
                  : false
            }
            onCheckedChange={() => table.toggleAllPageRowsSelected()}
            className="translate-y-0.5"
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={() => row.toggleSelected()}
            className="translate-y-0.5"
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        meta: {
          align: "text-left",
        },
      }),
      {
        header: "Workspace",
        accessorKey: "workspace",
        enableSorting: true,
        meta: {
          align: "text-left",
        },
      },
      {
        header: "Owner",
        accessorKey: "owner",
        enableSorting: true,
        meta: {
          align: "text-left",
        },
      },
      {
        header: "Status",
        accessorKey: "status",
        enableSorting: false,
        meta: {
          align: "text-left",
        },
      },
      {
        header: "Region",
        accessorKey: "region",
        enableSorting: false,
        meta: {
          align: "text-left",
        },
      },
      {
        header: "Capacity",
        accessorKey: "capacity",
        enableSorting: false,
        meta: {
          align: "text-left",
        },
      },
      {
        header: "Costs",
        accessorKey: "costs",
        enableSorting: false,
        meta: {
          align: "text-right",
        },
      },
      {
        header: "Last edited",
        accessorKey: "lastEdited",
        enableSorting: false,
        meta: {
          align: "text-right",
        },
      },
      //array-end
    ],
    [],
  )

  const table = useReactTable({
    data: workspaces,
    columns: workspacesColumns,
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      rowSelection,
    },
  })

  return (
    <div className="relative mb-20">
      <TableRoot>
        <Table>
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHeaderCell
                    key={header.id}
                    className={cx(header.column.columnDef.meta?.align)}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </TableHeaderCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                onClick={() => row.toggleSelected(!row.getIsSelected())}
                className="select-none hover:bg-gray-50 hover:dark:bg-gray-900"
              >
                {row.getVisibleCells().map((cell, index) => (
                  <TableCell
                    key={cell.id}
                    className={cx(
                      row.getIsSelected() ? "bg-gray-50 dark:bg-gray-900" : "",
                      cell.column.columnDef.meta?.align,
                      "relative",
                    )}
                  >
                    {index === 0 && row.getIsSelected() && (
                      <div className="absolute inset-y-0 left-0 w-0.5 bg-blue-500 dark:bg-blue-500" />
                    )}
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
          <TableFoot>
            <TableRow>
              <TableHeaderCell colSpan={1} className="!border-transparent">
                <Checkbox
                  checked={
                    table.getIsAllPageRowsSelected()
                      ? true
                      : table.getIsSomeRowsSelected()
                        ? "indeterminate"
                        : false
                  }
                  onCheckedChange={() =>
                    table.getToggleAllRowsSelectedHandler()
                  }
                  className="translate-y-0.5"
                  aria-label="Select all"
                />
              </TableHeaderCell>
              <TableHeaderCell
                colSpan={7}
                className="!border-transparent !font-normal !tabular-nums"
              >
                {Object.keys(rowSelection).length} of{" "}
                {table.getRowModel().rows.length} Page Row(s) selected
              </TableHeaderCell>
            </TableRow>
          </TableFoot>
        </Table>
      </TableRoot>
      <div
        className={cx(
          "absolute inset-x-0 -bottom-14 mx-auto flex w-fit items-center space-x-10 rounded-lg border border-gray-200 bg-white p-2 shadow-md dark:border-gray-800 dark:bg-gray-950",
          Object.keys(rowSelection).length > 0 ? "" : "hidden",
        )}
      >
        <p className="text-sm select-none">
          <span className="rounded bg-blue-100 px-2 py-1.5 font-medium text-blue-600 tabular-nums dark:bg-blue-900 dark:text-blue-600">
            {Object.keys(rowSelection).length}
          </span>
          <span className="ml-2 font-medium text-gray-900 dark:text-gray-50">
            selected
          </span>
        </p>
        <div className="flex items-center space-x-2">
          <Button className="px-2 py-1.5">Bulk edit</Button>
          <Button variant="secondary" className="px-2 py-1.5">
            Delete all
          </Button>
        </div>
      </div>
    </div>
  )
}
```


```example/table-actions-table-action-07.tsx
import React from "react"
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { cx } from "@/lib/utils"

import { Button } from "@/atom/Button"
import { Checkbox } from "@/atom/Checkbox"
import {
  Table,
  TableBody,
  TableCell,
  TableFoot,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from "@/atom/Table"

// This example requires @tanstack/react-table

type Workspace = {
  workspace: string
  owner: string
  status: string
  costs: string
  region: string
  capacity: string
  lastEdited: string
}

const workspaces: Workspace[] = [
  //array-start
  {
    workspace: "sales_by_day_api",
    owner: "John Doe",
    status: "live",
    costs: "$3,509.00",
    region: "US-West 1",
    capacity: "99%",
    lastEdited: "23/09/2023 13:00",
  },
  {
    workspace: "marketing_campaign",
    owner: "Jane Smith",
    status: "live",
    costs: "$5,720.00",
    region: "US-East 2",
    capacity: "80%",
    lastEdited: "22/09/2023 10:45",
  },
  {
    workspace: "sales_campaign",
    owner: "Jane Smith",
    status: "live",
    costs: "$5,720.00",
    region: "US-East 2",
    capacity: "80%",
    lastEdited: "22/09/2023 10:45",
  },
  {
    workspace: "development_env",
    owner: "Mike Johnson",
    status: "live",
    costs: "$4,200.00",
    region: "EU-West 1",
    capacity: "60%",
    lastEdited: "21/09/2023 14:30",
  },
  {
    workspace: "new_workspace_1",
    owner: "Alice Brown",
    status: "live",
    costs: "$2,100.00",
    region: "US-West 2",
    capacity: "75%",
    lastEdited: "24/09/2023 09:15",
  },
  {
    workspace: "test_environment",
    owner: "David Clark",
    status: "inactive",
    costs: "$800.00",
    region: "EU-Central 1",
    capacity: "40%",
    lastEdited: "25/09/2023 16:20",
  },
  {
    workspace: "analytics_dashboard",
    owner: "Sarah Wilson",
    status: "live",
    costs: "$6,500.00",
    region: "US-West 1",
    capacity: "90%",
    lastEdited: "26/09/2023 11:30",
  },
  {
    workspace: "research_project",
    owner: "Michael Adams",
    status: "live",
    costs: "$3,900.00",
    region: "US-East 1",
    capacity: "70%",
    lastEdited: "27/09/2023 08:45",
  },
  {
    workspace: "training_environment",
    owner: "Laura White",
    status: "live",
    costs: "$2,500.00",
    region: "EU-North 1",
    capacity: "55%",
    lastEdited: "28/09/2023 12:15",
  },
  //array-end
]

const columnHelper = createColumnHelper<Workspace>()

export default function TableCheckbox() {
  const [rowSelection, setRowSelection] = React.useState({})

  React.useEffect(() => {
    // Pre-select the 2nd row for demo purpose
    setRowSelection({ 2: true })
  }, [])

  const workspacesColumns = React.useMemo(
    //array-start
    () => [
      columnHelper.display({
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected()
                ? true
                : table.getIsSomeRowsSelected()
                  ? "indeterminate"
                  : false
            }
            onCheckedChange={() => table.toggleAllPageRowsSelected()}
            className="translate-y-0.5"
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={() => row.toggleSelected()}
            className="translate-y-0.5"
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        meta: {
          align: "text-left",
        },
      }),
      columnHelper.accessor("workspace", {
        id: "workspace",
        enableSorting: true,
        header: ({ table }) =>
          table.getIsAllRowsSelected() || table.getIsSomeRowsSelected() ? (
            <div className="absolute top-0 left-14 flex h-12 items-center space-x-2 bg-white lg:left-[70px] dark:bg-gray-950">
              <Button className="rounded px-2 py-1">Bulk edit</Button>
              <Button variant="secondary" className="rounded px-2 py-1">
                Delete all
              </Button>
            </div>
          ) : (
            "Workspace"
          ),
        meta: {
          align: "text-left",
        },
      }),
      {
        header: "Owner",
        accessorKey: "owner",
        enableSorting: true,
        meta: {
          align: "text-left",
        },
      },
      {
        header: "Status",
        accessorKey: "status",
        enableSorting: false,
        meta: {
          align: "text-left",
        },
      },
      {
        header: "Region",
        accessorKey: "region",
        enableSorting: false,
        meta: {
          align: "text-left",
        },
      },
      {
        header: "Capacity",
        accessorKey: "capacity",
        enableSorting: false,
        meta: {
          align: "text-left",
        },
      },
      {
        header: "Costs",
        accessorKey: "costs",
        enableSorting: false,
        meta: {
          align: "text-right",
        },
      },
      {
        header: "Last edited",
        accessorKey: "lastEdited",
        enableSorting: false,
        meta: {
          align: "text-right",
        },
      },
      //array-end
    ],
    [],
  )

  const table = useReactTable({
    data: workspaces,
    columns: workspacesColumns,
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      rowSelection,
    },
  })

  return (
    <div className="relative">
      <TableRoot>
        <Table>
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHeaderCell
                    key={header.id}
                    className={cx(header.column.columnDef.meta?.align)}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </TableHeaderCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                onClick={() => row.toggleSelected(!row.getIsSelected())}
                className="select-none hover:bg-gray-50 hover:dark:bg-gray-900"
              >
                {row.getVisibleCells().map((cell, index) => (
                  <TableCell
                    key={cell.id}
                    className={cx(
                      row.getIsSelected() ? "bg-gray-50 dark:bg-gray-900" : "",
                      cell.column.columnDef.meta?.align,
                      "relative",
                    )}
                  >
                    {index === 0 && row.getIsSelected() && (
                      <div className="absolute inset-y-0 left-0 w-0.5 bg-blue-500 dark:bg-blue-500" />
                    )}
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
          <TableFoot>
            <TableRow>
              <TableHeaderCell colSpan={1} className="!border-transparent">
                <Checkbox
                  checked={
                    table.getIsAllPageRowsSelected()
                      ? true
                      : table.getIsSomeRowsSelected()
                        ? "indeterminate"
                        : false
                  }
                  onCheckedChange={() => table.toggleAllPageRowsSelected()}
                  aria-label="Select all"
                  className="translate-y-0.5"
                />
              </TableHeaderCell>
              <TableHeaderCell
                colSpan={7}
                className="!border-transparent !font-normal !tabular-nums"
              >
                {Object.keys(rowSelection).length} of{" "}
                {table.getRowModel().rows.length} Page Row(s) selected
              </TableHeaderCell>
            </TableRow>
          </TableFoot>
        </Table>
      </TableRoot>
    </div>
  )
}
```


```example/table-actions-table-action-05.tsx
import React from "react"
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { cx } from "@/lib/utils"

import { Checkbox } from "@/atom/Checkbox"
import {
  Table,
  TableBody,
  TableCell,
  TableFoot,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from "@/atom/Table"

// This example requires @tanstack/react-table

type Workspace = {
  workspace: string
  owner: string
  status: string
  costs: string
  region: string
  capacity: string
  lastEdited: string
}

const workspaces: Workspace[] = [
  //array-start
  {
    workspace: "sales_by_day_api",
    owner: "John Doe",
    status: "live",
    costs: "$3,509.00",
    region: "US-West 1",
    capacity: "99%",
    lastEdited: "23/09/2023 13:00",
  },
  {
    workspace: "marketing_campaign",
    owner: "Jane Smith",
    status: "live",
    costs: "$5,720.00",
    region: "US-East 2",
    capacity: "80%",
    lastEdited: "22/09/2023 10:45",
  },
  {
    workspace: "sales_campaign",
    owner: "Jane Smith",
    status: "live",
    costs: "$5,720.00",
    region: "US-East 2",
    capacity: "80%",
    lastEdited: "22/09/2023 10:45",
  },
  {
    workspace: "development_env",
    owner: "Mike Johnson",
    status: "live",
    costs: "$4,200.00",
    region: "EU-West 1",
    capacity: "60%",
    lastEdited: "21/09/2023 14:30",
  },
  {
    workspace: "new_workspace_1",
    owner: "Alice Brown",
    status: "live",
    costs: "$2,100.00",
    region: "US-West 2",
    capacity: "75%",
    lastEdited: "24/09/2023 09:15",
  },
  {
    workspace: "test_environment",
    owner: "David Clark",
    status: "inactive",
    costs: "$800.00",
    region: "EU-Central 1",
    capacity: "40%",
    lastEdited: "25/09/2023 16:20",
  },
  {
    workspace: "analytics_dashboard",
    owner: "Sarah Wilson",
    status: "live",
    costs: "$6,500.00",
    region: "US-West 1",
    capacity: "90%",
    lastEdited: "26/09/2023 11:30",
  },
  {
    workspace: "research_project",
    owner: "Michael Adams",
    status: "live",
    costs: "$3,900.00",
    region: "US-East 1",
    capacity: "70%",
    lastEdited: "27/09/2023 08:45",
  },
  {
    workspace: "training_environment",
    owner: "Laura White",
    status: "live",
    costs: "$2,500.00",
    region: "EU-North 1",
    capacity: "55%",
    lastEdited: "28/09/2023 12:15",
  },
  //array-end
]

const columnHelper = createColumnHelper<Workspace>()

export default function TableCheckbox() {
  const [rowSelection, setRowSelection] = React.useState({})

  React.useEffect(() => {
    // Pre-select the 3rd and 7th row for demo purpose
    setRowSelection({ 3: true, 7: true })
  }, [])

  const workspacesColumns = React.useMemo(
    //array-start
    () => [
      columnHelper.display({
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected()
                ? true
                : table.getIsSomeRowsSelected()
                  ? "indeterminate"
                  : false
            }
            onCheckedChange={() => table.toggleAllPageRowsSelected()}
            className="translate-y-0.5"
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={() => row.toggleSelected()}
            className="translate-y-0.5"
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        meta: {
          align: "text-left",
        },
      }),
      {
        header: "Workspace",
        accessorKey: "workspace",
        enableSorting: true,
        meta: {
          align: "text-left",
        },
      },
      {
        header: "Owner",
        accessorKey: "owner",
        enableSorting: true,
        meta: {
          align: "text-left",
        },
      },
      {
        header: "Status",
        accessorKey: "status",
        enableSorting: false,
        meta: {
          align: "text-left",
        },
      },
      {
        header: "Region",
        accessorKey: "region",
        enableSorting: false,
        meta: {
          align: "text-left",
        },
      },
      {
        header: "Capacity",
        accessorKey: "capacity",
        enableSorting: false,
        meta: {
          align: "text-left",
        },
      },
      {
        header: "Costs",
        accessorKey: "costs",
        enableSorting: false,
        meta: {
          align: "text-right",
        },
      },
      {
        header: "Last edited",
        accessorKey: "lastEdited",
        enableSorting: false,
        meta: {
          align: "text-right",
        },
      },
      //array-end
    ],
    [],
  )

  const table = useReactTable({
    data: workspaces,
    columns: workspacesColumns,
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      rowSelection,
    },
  })

  return (
    <div className="obfuscate">
      <TableRoot>
        <Table>
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHeaderCell
                    key={header.id}
                    className={cx(header.column.columnDef.meta?.align)}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </TableHeaderCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                onClick={() => row.toggleSelected(!row.getIsSelected())}
                className="select-none hover:bg-gray-50 hover:dark:bg-gray-900"
              >
                {row.getVisibleCells().map((cell, index) => (
                  <TableCell
                    key={cell.id}
                    className={cx(
                      row.getIsSelected() ? "bg-gray-50 dark:bg-gray-900" : "",
                      cell.column.columnDef.meta?.align,
                      "relative",
                    )}
                  >
                    {index === 0 && row.getIsSelected() && (
                      <div className="absolute inset-y-0 left-0 w-0.5 bg-blue-500 dark:bg-blue-500" />
                    )}
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
          <TableFoot>
            <TableRow>
              <TableHeaderCell colSpan={1} className="!border-transparent">
                <Checkbox
                  checked={
                    table.getIsAllPageRowsSelected()
                      ? true
                      : table.getIsSomeRowsSelected()
                        ? "indeterminate"
                        : false
                  }
                  onCheckedChange={() => table.toggleAllPageRowsSelected()}
                  aria-label="Select all"
                  className="translate-y-0.5"
                />
              </TableHeaderCell>
              <TableHeaderCell
                colSpan={7}
                className="!border-transparent !font-normal !tabular-nums"
              >
                {Object.keys(rowSelection).length} of{" "}
                {table.getRowModel().rows.length} Page Rows selected
              </TableHeaderCell>
            </TableRow>
          </TableFoot>
        </Table>
      </TableRoot>
    </div>
  )
}
```


```example/table-actions-table-action-11.tsx
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { cx } from "@/lib/utils"

import { RadioCardGroup, RadioCardItem } from "@/atom/RadioCardGroup"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from "@/atom/Table"

type Payment = {
  amount: string
  paymentMethod: string
  description: string
  customer: string
  lastSeen: string
  status: string
}

const payments: Payment[] = [
  // array-start
  {
    amount: "$49.00",
    paymentMethod: "Visa",
    description: "Premium",
    customer: "customer81@yahoo.com",
    lastSeen: "4 Jan 2023, 18:39",
    status: "Succeeded",
  },
  {
    amount: "$49.00",
    paymentMethod: "Visa",
    description: "Premium",
    customer: "customer81@yahoo.com",
    lastSeen: "4 Jan 2023, 18:39",
    status: "Succeeded",
  },
  {
    amount: "$49.00",
    paymentMethod: "Mastercard",
    description: "Basic",
    customer: "customer41@yahoo.com",
    lastSeen: "3 Jan 2023, 17:21",
    status: "Succeeded",
  },
  {
    amount: "$49.00",
    paymentMethod: "Mastercard",
    description: "Basic",
    customer: "customer68@yahoo.com",
    lastSeen: "3 Jan 2023, 17:01",
    status: "Succeeded",
  },
  {
    amount: "$49.00",
    paymentMethod: "Mastercard",
    description: "Basic",
    customer: "customer63@yahoo.com",
    lastSeen: "3 Jan 2023, 15:51",
    status: "Succeeded",
  },
  {
    amount: "$49.00",
    paymentMethod: "Mastercard",
    description: "Basic",
    customer: "customer74@yahoo.com",
    lastSeen: "3 Jan 2023, 15:51",
    status: "Succeeded",
  },
  {
    amount: "$29.00",
    paymentMethod: "PayPal",
    description: "Standard",
    customer: "customer51@yahoo.com",
    lastSeen: "5 Jan 2023, 10:15",
    status: "Refunded",
  },
  {
    amount: "$79.00",
    paymentMethod: "Visa",
    description: "Premium Plus",
    customer: "customer48@yahoo.com",
    lastSeen: "6 Jan 2023, 14:27",
    status: "Failed",
  },
  {
    amount: "$39.00",
    paymentMethod: "Mastercard",
    description: "Standard",
    customer: "customer41@yahoo.com",
    lastSeen: "7 Jan 2023, 12:45",
    status: "Refunded",
  },
  {
    amount: "$59.00",
    paymentMethod: "Visa",
    description: "Advanced",
    customer: "customer1@example.com",
    lastSeen: "8 Jan 2023, 09:00",
    status: "Succeeded",
  },
  {
    amount: "$99.00",
    paymentMethod: "PayPal",
    description: "Premium Plus",
    customer: "customer2@example.com",
    lastSeen: "9 Jan 2023, 14:30",
    status: "Failed",
  },
  {
    amount: "$69.00",
    paymentMethod: "Mastercard",
    description: "Pro",
    customer: "customer3@example.com",
    lastSeen: "10 Jan 2023, 16:45",
    status: "Refunded",
  },
  {
    amount: "$79.00",
    paymentMethod: "Visa",
    description: "Premium Plus",
    customer: "customer4@example.com",
    lastSeen: "11 Jan 2023, 11:20",
    status: "Succeeded",
  },
  {
    amount: "$29.00",
    paymentMethod: "Mastercard",
    description: "Basic",
    customer: "customer5@example.com",
    lastSeen: "12 Jan 2023, 13:10",
    status: "Failed",
  },
  {
    amount: "$39.00",
    paymentMethod: "Visa",
    description: "Standard",
    customer: "customer6@example.com",
    lastSeen: "13 Jan 2023, 09:30",
    status: "Succeeded",
  },
  {
    amount: "$49.00",
    paymentMethod: "PayPal",
    description: "Premium",
    customer: "customer7@example.com",
    lastSeen: "14 Jan 2023, 15:00",
    status: "Refunded",
  },
  {
    amount: "$59.00",
    paymentMethod: "Mastercard",
    description: "Advanced",
    customer: "customer8@example.com",
    lastSeen: "15 Jan 2023, 17:45",
    status: "Succeeded",
  },
  {
    amount: "$69.00",
    paymentMethod: "Visa",
    description: "Pro",
    customer: "customer9@example.com",
    lastSeen: "16 Jan 2023, 10:20",
    status: "Failed",
  },
  {
    amount: "$79.00",
    paymentMethod: "Mastercard",
    description: "Premium Plus",
    customer: "customer10@example.com",
    lastSeen: "17 Jan 2023, 12:55",
    status: "Refunded",
  },
  {
    amount: "$89.00",
    paymentMethod: "Visa",
    description: "Enterprise",
    customer: "customer11@example.com",
    lastSeen: "18 Jan 2023, 14:30",
    status: "Succeeded",
  },
  {
    amount: "$99.00",
    paymentMethod: "Mastercard",
    description: "Premium Plus",
    customer: "customer12@example.com",
    lastSeen: "19 Jan 2023, 16:10",
    status: "Failed",
  },
  {
    amount: "$109.00",
    paymentMethod: "Visa",
    description: "Enterprise",
    customer: "customer13@example.com",
    lastSeen: "20 Jan 2023, 09:45",
    status: "Refunded",
  },
  {
    amount: "$119.00",
    paymentMethod: "Mastercard",
    description: "Premium Plus",
    customer: "customer14@example.com",
    lastSeen: "21 Jan 2023, 11:20",
    status: "Succeeded",
  },
  {
    amount: "$169.00",
    paymentMethod: "Visa",
    description: "Enterprise",
    customer: "customer19@example.com",
    lastSeen: "26 Jan 2023, 15:20",
    status: "Refunded",
  },
  {
    amount: "$179.00",
    paymentMethod: "Mastercard",
    description: "Premium Plus",
    customer: "customer20@example.com",
    lastSeen: "27 Jan 2023, 09:55",
    status: "Succeeded",
  },
  // array-end
]

const paymentsColumns = [
  //array-start
  {
    header: "Amount",
    accessorKey: "amount",
    meta: {
      align: "text-left",
    },
  },
  {
    header: "Payment Method",
    accessorKey: "paymentMethod",
    meta: {
      align: "text-left",
    },
  },
  {
    header: "Status",
    accessorKey: "status",
    meta: {
      align: "text-left",
    },
  },
  {
    header: "Description",
    accessorKey: "description",
    meta: {
      align: "text-left",
    },
  },
  {
    header: "Customer",
    accessorKey: "customer",
    meta: {
      align: "text-left",
    },
  },
  {
    header: "Last seen",
    accessorKey: "lastSeen",
    meta: {
      align: "text-right",
    },
  },
  //array-end
]

const tabs = payments.reduce(
  (acc, workspace) => {
    const index = acc.findIndex((e) => e.name === workspace.status)

    if (index === -1) {
      acc.push({ name: workspace.status, value: 1 })
    } else {
      acc[index].value++
    }

    acc[0].value++
    return acc
  },
  [{ name: "All", value: 0 }],
)

export default function Example() {
  const table = useReactTable({
    data: payments,
    columns: paymentsColumns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    initialState: {
      sorting: [
        {
          id: "amount",
          desc: false,
        },
      ],
    },
  })

  return (
    <div className="obfuscate">
      <RadioCardGroup
        name="Status"
        value={
          (table.getState().columnFilters.find((e) => e.id === "status")
            ?.value as string) ?? "All"
        }
        onValueChange={(value) => {
          const filter = value === "All" ? [] : [{ id: "status", value }]
          table.setColumnFilters(filter)
        }}
        className="grid gap-3 sm:grid-cols-2 md:grid-cols-4"
      >
        {tabs.map((tab) => (
          <RadioCardItem key={tab.name} value={tab.name}>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              {tab.name}
            </p>
            <p className="text-lg font-semibold text-gray-900 dark:text-gray-50">
              {tab.value}
            </p>
          </RadioCardItem>
        ))}
      </RadioCardGroup>
      <TableRoot className="mt-6 h-96 overflow-y-scroll">
        <Table className="border-separate border-spacing-0 border-transparent">
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHeaderCell
                    key={header.id}
                    className={cx(
                      header.column.columnDef.meta?.align,
                      "sticky top-0 z-10 border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950",
                    )}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </TableHeaderCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    className={cx(
                      cell.column.columnDef.meta?.align,
                      "border-b border-gray-200 dark:border-gray-800",
                    )}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableRoot>
    </div>
  )
}
```


```example/table-actions-table-action-10.tsx
import React from "react"
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { cx } from "@/lib/utils"

import { Checkbox } from "@/atom/Checkbox"
import {
  Table,
  TableBody,
  TableCell,
  TableFoot,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from "@/atom/Table"

// This example requires @tanstack/react-table

type Workspace = {
  workspace: string
  owner: string
  status: string
  costs: string
  region: string
  capacity: string
  lastEdited: string
}

const workspaces: Workspace[] = [
  //array-start
  {
    workspace: "sales_by_day_api",
    owner: "John Doe",
    status: "live",
    costs: "$3,509.00",
    region: "US-West 1",
    capacity: "99%",
    lastEdited: "23/09/2023 13:00",
  },
  {
    workspace: "marketing_campaign",
    owner: "Jane Smith",
    status: "live",
    costs: "$5,720.00",
    region: "US-East 2",
    capacity: "80%",
    lastEdited: "22/09/2023 10:45",
  },
  {
    workspace: "sales_campaign",
    owner: "Jane Smith",
    status: "live",
    costs: "$5,720.00",
    region: "US-East 2",
    capacity: "80%",
    lastEdited: "22/09/2023 10:45",
  },
  {
    workspace: "development_env",
    owner: "Mike Johnson",
    status: "live",
    costs: "$4,200.00",
    region: "EU-West 1",
    capacity: "60%",
    lastEdited: "21/09/2023 14:30",
  },
  {
    workspace: "new_workspace_1",
    owner: "Alice Brown",
    status: "live",
    costs: "$2,100.00",
    region: "US-West 2",
    capacity: "75%",
    lastEdited: "24/09/2023 09:15",
  },
  {
    workspace: "test_environment",
    owner: "David Clark",
    status: "inactive",
    costs: "$800.00",
    region: "EU-Central 1",
    capacity: "40%",
    lastEdited: "25/09/2023 16:20",
  },
  {
    workspace: "analytics_dashboard",
    owner: "Sarah Wilson",
    status: "live",
    costs: "$6,500.00",
    region: "US-West 1",
    capacity: "90%",
    lastEdited: "26/09/2023 11:30",
  },
  {
    workspace: "research_project",
    owner: "Michael Adams",
    status: "live",
    costs: "$3,900.00",
    region: "US-East 1",
    capacity: "70%",
    lastEdited: "27/09/2023 08:45",
  },
  {
    workspace: "training_environment",
    owner: "Laura White",
    status: "live",
    costs: "$2,500.00",
    region: "EU-North 1",
    capacity: "55%",
    lastEdited: "28/09/2023 12:15",
  },
  //array-end
]

export default function TableCheckbox() {
  const [rowSelection, setRowSelection] = React.useState({})

  React.useEffect(() => {
    // Pre-select the 2nd row for demo purpose
    setRowSelection({ 2: true })
  }, [])

  const columnHelper = createColumnHelper<Workspace>()

  const workspacesColumns = React.useMemo(
    //array-start
    () => [
      columnHelper.display({
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected()
                ? true
                : table.getIsSomeRowsSelected()
                  ? "indeterminate"
                  : false
            }
            onCheckedChange={() => table.toggleAllPageRowsSelected()}
            className="translate-y-0.5"
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={() => row.toggleSelected()}
            className="translate-y-0.5"
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        meta: {
          align: "text-left",
        },
      }),
      {
        header: "Workspace",
        accessorKey: "workspace",
        enableSorting: true,
        meta: {
          align: "text-left",
        },
      },
      {
        header: "Owner",
        accessorKey: "owner",
        enableSorting: true,
        meta: {
          align: "text-left",
        },
      },
      {
        header: "Status",
        accessorKey: "status",
        enableSorting: false,
        meta: {
          align: "text-left",
        },
      },
      {
        header: "Region",
        accessorKey: "region",
        enableSorting: false,
        meta: {
          align: "text-left",
        },
      },
      {
        header: "Capacity",
        accessorKey: "capacity",
        enableSorting: false,
        meta: {
          align: "text-left",
        },
      },
      {
        header: "Costs",
        accessorKey: "costs",
        enableSorting: false,
        meta: {
          align: "text-right",
        },
      },
      {
        header: "Last edited",
        accessorKey: "lastEdited",
        enableSorting: false,
        meta: {
          align: "text-right",
        },
      },
      //array-end
    ],
    [],
  )

  const table = useReactTable({
    data: workspaces,
    columns: workspacesColumns,
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      rowSelection,
    },
  })

  return (
    <div className="relative mb-20">
      <TableRoot>
        <Table>
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHeaderCell
                    key={header.id}
                    className={cx(header.column.columnDef.meta?.align)}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </TableHeaderCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                onClick={() => row.toggleSelected(!row.getIsSelected())}
                className="select-none hover:bg-gray-50 hover:dark:bg-gray-900"
              >
                {row.getVisibleCells().map((cell, index) => (
                  <TableCell
                    key={cell.id}
                    className={cx(
                      row.getIsSelected() ? "bg-gray-50 dark:bg-gray-900" : "",
                      cell.column.columnDef.meta?.align,
                      "relative",
                    )}
                  >
                    {index === 0 && row.getIsSelected() && (
                      <div className="absolute inset-y-0 left-0 w-0.5 bg-blue-500 dark:bg-blue-500" />
                    )}
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
          <TableFoot>
            <TableRow>
              <TableHeaderCell colSpan={1} className="!border-transparent">
                <Checkbox
                  checked={
                    table.getIsAllPageRowsSelected()
                      ? true
                      : table.getIsSomeRowsSelected()
                        ? "indeterminate"
                        : false
                  }
                  onCheckedChange={() => table.toggleAllPageRowsSelected()}
                  aria-label="Select all"
                  className="translate-y-0.5"
                />
              </TableHeaderCell>
              <TableHeaderCell
                colSpan={7}
                className="!border-transparent !font-normal !tabular-nums"
              >
                {Object.keys(rowSelection).length} of{" "}
                {table.getRowModel().rows.length} Page Row(s) selected
              </TableHeaderCell>
            </TableRow>
          </TableFoot>
        </Table>
      </TableRoot>
      <div
        className={cx(
          "absolute inset-x-0 -bottom-14 mx-auto flex w-fit items-center space-x-3 rounded-full border border-gray-800 bg-gray-900 px-4 py-2 text-sm font-medium ring-1 shadow-md ring-gray-800",
          Object.keys(rowSelection).length > 0 ? "" : "hidden",
        )}
      >
        <p className="text-gray-400 tabular-nums select-none">
          {Object.keys(rowSelection).length} selected
        </p>
        <span className="h-4 w-px bg-gray-600" aria-hidden={true} />
        <span className="flex items-center space-x-2">
          <button
            type="button"
            className="inline-flex items-center gap-2 text-sm text-gray-300 transition-all hover:text-gray-50"
          >
            Edit
            <span className="flex size-6 items-center justify-center rounded-md bg-gray-800 text-gray-400 ring-1 ring-gray-700 ring-inset select-none">
              E
            </span>
          </button>
        </span>
        <span className="h-4 w-px bg-gray-600" aria-hidden={true} />
        <span className="flex items-center space-x-2">
          <button
            type="button"
            className="inline-flex items-center gap-2 text-sm text-gray-300 transition-all hover:text-gray-50"
          >
            Delete
            <span className="flex items-center space-x-1">
              <span className="flex size-6 items-center justify-center rounded-md bg-gray-800 text-gray-400 ring-1 ring-gray-700 ring-inset select-none">
                ⌘
              </span>
              <span className="flex size-6 items-center justify-center rounded-md bg-gray-800 text-gray-400 ring-1 ring-gray-700 ring-inset select-none">
                D
              </span>
            </span>
          </button>
        </span>
      </div>
    </div>
  )
}
```


```example/table-actions-table-action-04.tsx
import React from "react"
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { cx } from "@/lib/utils"

import { Checkbox } from "@/atom/Checkbox"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from "@/atom/Table"

// This example requires @tanstack/react-table

type Workspace = {
  workspace: string
  owner: string
  status: string
  costs: string
  region: string
  capacity: string
  lastEdited: string
}

const workspaces: Workspace[] = [
  //array-start
  {
    workspace: "sales_by_day_api",
    owner: "John Doe",
    status: "live",
    costs: "$3,509.00",
    region: "US-West 1",
    capacity: "99%",
    lastEdited: "23/09/2023 13:00",
  },
  {
    workspace: "marketing_campaign",
    owner: "Jane Smith",
    status: "live",
    costs: "$5,720.00",
    region: "US-East 2",
    capacity: "80%",
    lastEdited: "22/09/2023 10:45",
  },
  {
    workspace: "sales_campaign",
    owner: "Jane Smith",
    status: "live",
    costs: "$5,720.00",
    region: "US-East 2",
    capacity: "80%",
    lastEdited: "22/09/2023 10:45",
  },
  {
    workspace: "development_env",
    owner: "Mike Johnson",
    status: "live",
    costs: "$4,200.00",
    region: "EU-West 1",
    capacity: "60%",
    lastEdited: "21/09/2023 14:30",
  },
  {
    workspace: "new_workspace_1",
    owner: "Alice Brown",
    status: "live",
    costs: "$2,100.00",
    region: "US-West 2",
    capacity: "75%",
    lastEdited: "24/09/2023 09:15",
  },
  {
    workspace: "test_environment",
    owner: "David Clark",
    status: "inactive",
    costs: "$800.00",
    region: "EU-Central 1",
    capacity: "40%",
    lastEdited: "25/09/2023 16:20",
  },
  {
    workspace: "analytics_dashboard",
    owner: "Sarah Wilson",
    status: "live",
    costs: "$6,500.00",
    region: "US-West 1",
    capacity: "90%",
    lastEdited: "26/09/2023 11:30",
  },
  {
    workspace: "research_project",
    owner: "Michael Adams",
    status: "live",
    costs: "$3,900.00",
    region: "US-East 1",
    capacity: "70%",
    lastEdited: "27/09/2023 08:45",
  },
  {
    workspace: "training_environment",
    owner: "Laura White",
    status: "live",
    costs: "$2,500.00",
    region: "EU-North 1",
    capacity: "55%",
    lastEdited: "28/09/2023 12:15",
  },
  //array-end
]

const columnHelper = createColumnHelper<Workspace>()

export default function TableCheckbox() {
  const [rowSelection, setRowSelection] = React.useState({})

  React.useEffect(() => {
    // Pre-select the 1st and 3rd row for demo purpose
    setRowSelection({ 1: true, 3: true })
  }, [])

  const workspacesColumns = React.useMemo(
    //array-start
    () => [
      columnHelper.display({
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected()
                ? true
                : table.getIsSomeRowsSelected()
                  ? "indeterminate"
                  : false
            }
            onCheckedChange={() => table.toggleAllPageRowsSelected()}
            className="translate-y-0.5"
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={() => row.toggleSelected()}
            className="translate-y-0.5"
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        meta: {
          align: "text-left",
        },
      }),
      {
        header: "Workspace",
        accessorKey: "workspace",
        enableSorting: true,
        meta: {
          align: "text-left",
        },
      },
      {
        header: "Owner",
        accessorKey: "owner",
        enableSorting: true,
        meta: {
          align: "text-left",
        },
      },
      {
        header: "Status",
        accessorKey: "status",
        enableSorting: false,
        meta: {
          align: "text-left",
        },
      },
      {
        header: "Region",
        accessorKey: "region",
        enableSorting: false,
        meta: {
          align: "text-left",
        },
      },
      {
        header: "Capacity",
        accessorKey: "capacity",
        enableSorting: false,
        meta: {
          align: "text-left",
        },
      },
      {
        header: "Costs",
        accessorKey: "costs",
        enableSorting: false,
        meta: {
          align: "text-right",
        },
      },
      {
        header: "Last edited",
        accessorKey: "lastEdited",
        enableSorting: false,
        meta: {
          align: "text-right",
        },
      },
      //array-end
    ],
    [],
  )

  const table = useReactTable({
    data: workspaces,
    columns: workspacesColumns,
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      rowSelection,
    },
  })

  return (
    <div className="obfuscate">
      <TableRoot>
        <Table>
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHeaderCell
                    key={header.id}
                    className={cx(header.column.columnDef.meta?.align)}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </TableHeaderCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                onClick={() => row.toggleSelected(!row.getIsSelected())}
                className="select-none hover:bg-gray-50 hover:dark:bg-gray-900"
              >
                {row.getVisibleCells().map((cell, index) => (
                  <React.Fragment key={cell.id}>
                    <TableCell
                      key={cell.id}
                      className={cx(
                        row.getIsSelected()
                          ? "bg-gray-50 dark:bg-gray-900"
                          : "",
                        cell.column.columnDef.meta?.align,
                        "relative",
                      )}
                    >
                      {index === 0 && row.getIsSelected() && (
                        <div className="absolute inset-y-0 left-0 w-0.5 bg-blue-500 dark:bg-blue-500" />
                      )}
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  </React.Fragment>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableRoot>
    </div>
  )
}
```


```example/table-pagination-pagination-08.tsx
import React from "react"
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react"
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  RowData,
  useReactTable,
} from "@tanstack/react-table"

import { cx } from "@/lib/utils"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from "@/atom/Table"

// This example requires @tanstack/react-table

const workspaces = [
  //array-start
  {
    workspace: "sales_by_day_api",
    owner: "John Doe",
    status: "live",
    costs: "$3,509.00",
    region: "US-West 1",
    capacity: "99%",
    lastEdited: "23/09/2023 13:00",
  },
  {
    workspace: "marketing_campaign",
    owner: "Jane Smith",
    status: "live",
    costs: "$5,720.00",
    region: "US-East 2",
    capacity: "80%",
    lastEdited: "22/09/2023 10:45",
  },
  {
    workspace: "sales_campaign",
    owner: "Jane Smith",
    status: "live",
    costs: "$5,720.00",
    region: "US-East 2",
    capacity: "80%",
    lastEdited: "22/09/2023 10:45",
  },
  {
    workspace: "development_env",
    owner: "Mike Johnson",
    status: "live",
    costs: "$4,200.00",
    region: "EU-West 1",
    capacity: "60%",
    lastEdited: "21/09/2023 14:30",
  },
  {
    workspace: "new_workspace_1",
    owner: "Alice Brown",
    status: "live",
    costs: "$2,100.00",
    region: "US-West 2",
    capacity: "75%",
    lastEdited: "24/09/2023 09:15",
  },
  {
    workspace: "test_environment",
    owner: "David Clark",
    status: "inactive",
    costs: "$800.00",
    region: "EU-Central 1",
    capacity: "40%",
    lastEdited: "25/09/2023 16:20",
  },
  {
    workspace: "analytics_dashboard",
    owner: "Sarah Wilson",
    status: "live",
    costs: "$6,500.00",
    region: "US-West 1",
    capacity: "90%",
    lastEdited: "26/09/2023 11:30",
  },
  {
    workspace: "research_project",
    owner: "Michael Adams",
    status: "live",
    costs: "$3,900.00",
    region: "US-East 1",
    capacity: "70%",
    lastEdited: "27/09/2023 08:45",
  },
  {
    workspace: "training_environment",
    owner: "Laura White",
    status: "live",
    costs: "$2,500.00",
    region: "EU-North 1",
    capacity: "55%",
    lastEdited: "28/09/2023 12:15",
  },
  //array-end
]

declare module "@tanstack/react-table" {
  interface ColumnMeta<TData extends RowData, TValue> {
    align: string
  }
}

const workspacesColumns = [
  //array-start
  {
    header: "Workspace",
    accessorKey: "workspace",
    meta: {
      align: "text-left",
    },
  },
  {
    header: "Owner",
    accessorKey: "owner",
    meta: {
      align: "text-left",
    },
  },
  {
    header: "Status",
    accessorKey: "status",
    meta: {
      align: "text-left",
    },
  },
  {
    header: "Region",
    accessorKey: "region",
    meta: {
      align: "text-left",
    },
  },
  {
    header: "Capacity",
    accessorKey: "capacity",
    meta: {
      align: "text-right",
    },
  },
  {
    header: "Costs",
    accessorKey: "costs",
    meta: {
      align: "text-right",
    },
  },
  {
    header: "Last edited",
    accessorKey: "lastEdited",
    meta: {
      align: "text-right",
    },
  },
  //array-end
]

const Button = ({
  active,
  onClick,
  disabled,
  children,
  position,
  className,
}: {
  active?: boolean
  onClick: () => void
  disabled?: boolean
  children: React.ReactNode
  position?: "left" | "right"
  className?: string
}) => {
  return (
    <button
      type="button"
      className={cx(
        "min-w-[36px] p-2 text-sm text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-white dark:text-gray-50 dark:ring-gray-800 hover:dark:bg-gray-900 disabled:hover:dark:bg-gray-950",
        active ? "bg-gray-50 font-semibold dark:bg-gray-900" : "",
        position === "left"
          ? "rounded-l-md"
          : position === "right"
            ? "-ml-px rounded-r-md"
            : "-ml-px",
        className,
      )}
      onClick={onClick}
      disabled={disabled}
      aria-current={active ? "page" : undefined}
    >
      {children}
    </button>
  )
}

const MobileButton = ({
  onClick,
  disabled,
  children,
  position,
}: {
  onClick: () => void
  disabled?: boolean
  children: React.ReactNode
  position?: "left" | "right"
}) => {
  return (
    <button
      type="button"
      className={cx(
        "group p-2 text-sm ring-1 ring-gray-300 ring-inset hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-white dark:ring-gray-800 hover:dark:bg-gray-900 disabled:hover:dark:bg-gray-950",
        position === "left"
          ? "rounded-l-md"
          : position === "right"
            ? "-ml-px rounded-r-md"
            : "",
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export { Button, MobileButton }

export default function Example() {
  const pageSize = 8

  const data = React.useMemo(
    // multiply dummy data to better demonstrate pagination over several pages
    () => [
      ...workspaces,
      ...workspaces,
      ...workspaces,
      ...workspaces,
      ...workspaces,
      ...workspaces,
      ...workspaces,
    ],
    [],
  )
  const table = useReactTable({
    data: data,
    columns: workspacesColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: pageSize,
      },
    },
  })

  const paginationCount = table.getPageCount()
  const actualPage = table.getState().pagination.pageIndex + 1

  return (
    <>
      <TableRoot>
        <Table>
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHeaderCell
                    key={header.id}
                    scope="col"
                    className={cx(header.column.columnDef.meta?.align)}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </TableHeaderCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    className={cx(cell.column.columnDef.meta?.align)}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableRoot>
      <div className="mt-10 flex items-center justify-between sm:justify-center">
        {/* long pagination button form only for desktop view */}
        <div className="hidden rounded-md shadow-sm sm:block">
          <Button
            position="left"
            onClick={() => table.previousPage()}
            active={false}
            disabled={!table.getCanPreviousPage()}
            className="px-4"
          >
            Prev
          </Button>
          <Button
            onClick={() => table.setPageIndex(0)}
            active={actualPage === 1}
          >
            1
          </Button>
          {actualPage > 4 ? (
            actualPage < paginationCount - 2 ? (
              <>
                <Button
                  onClick={() => table.setPageIndex(actualPage - 3)}
                  active={false}
                >
                  ...
                </Button>
                <Button
                  onClick={() => table.setPageIndex(actualPage - 2)}
                  active={actualPage === actualPage - 1}
                >
                  {actualPage - 1}
                </Button>
                <Button
                  onClick={() => table.setPageIndex(actualPage - 1)}
                  active={true}
                >
                  {actualPage}
                </Button>
                <Button
                  onClick={() => table.setPageIndex(actualPage)}
                  active={actualPage === actualPage + 1}
                >
                  {actualPage + 1}
                </Button>
                <Button
                  onClick={() => table.setPageIndex(actualPage + 1)}
                  active={false}
                >
                  ...
                </Button>
              </>
            ) : (
              <>
                <Button onClick={() => table.setPageIndex(1)} active={false}>
                  2
                </Button>
                <Button
                  onClick={() => table.setPageIndex(paginationCount - 5)}
                  active={false}
                >
                  ...
                </Button>
                <Button
                  onClick={() => table.setPageIndex(paginationCount - 4)}
                  active={actualPage === paginationCount - 3}
                >
                  {paginationCount - 3}
                </Button>
                <Button
                  onClick={() => table.setPageIndex(paginationCount - 3)}
                  active={actualPage === paginationCount - 2}
                >
                  {paginationCount - 2}
                </Button>
                <Button
                  onClick={() => table.setPageIndex(paginationCount - 2)}
                  active={actualPage === paginationCount - 1}
                >
                  {paginationCount - 1}
                </Button>
              </>
            )
          ) : (
            <>
              <Button
                onClick={() => table.setPageIndex(1)}
                active={actualPage === 2}
              >
                2
              </Button>
              <Button
                onClick={() => table.setPageIndex(2)}
                active={actualPage === 3}
              >
                3
              </Button>
              <Button
                onClick={() => table.setPageIndex(3)}
                active={actualPage === 4}
              >
                4
              </Button>
              <Button onClick={() => table.setPageIndex(4)} active={false}>
                ...
              </Button>
              <Button
                onClick={() => table.setPageIndex(paginationCount - 2)}
                active={false}
              >
                {paginationCount - 1}
              </Button>
            </>
          )}
          <Button
            onClick={() => table.setPageIndex(paginationCount - 1)}
            active={actualPage === paginationCount}
          >
            {paginationCount}
          </Button>
          <Button
            position="right"
            onClick={() => table.nextPage()}
            active={false}
            disabled={!table.getCanNextPage()}
            className="px-4"
          >
            Next
          </Button>
        </div>
        <p className="text-sm text-gray-500 tabular-nums sm:hidden dark:text-gray-500">
          Page of{" "}
          <span className="font-medium text-gray-900 dark:text-gray-50">{`${
            table.getState().pagination.pageIndex + 1
          }`}</span>{" "}
          of
          <span className="font-medium text-gray-900 dark:text-gray-50">
            {" "}
            {`${table.getPageCount()}`}
          </span>
        </p>
        {/* --- Mobile view for pagination buttons --- */}
        <div className="inline-flex items-center rounded-md shadow-sm sm:hidden">
          <MobileButton
            position="left"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Previous</span>
            <RiArrowLeftSLine
              className="size-5 text-gray-700 group-hover:text-gray-900 dark:text-gray-300 group-hover:dark:text-gray-50"
              aria-hidden={true}
            />
          </MobileButton>
          <MobileButton
            position="right"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Next</span>
            <RiArrowRightSLine
              className="size-5 text-gray-700 group-hover:text-gray-900 dark:text-gray-300 group-hover:dark:text-gray-50"
              aria-hidden={true}
            />
          </MobileButton>
        </div>
      </div>
    </>
  )
}
```


```example/table-pagination-pagination-02.tsx
import React from "react"
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react"
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  RowData,
  useReactTable,
} from "@tanstack/react-table"

import { cx } from "@/lib/utils"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from "@/atom/Table"

// This example requires @tanstack/react-table

const workspaces = [
  //array-start
  {
    workspace: "sales_by_day_api",
    owner: "John Doe",
    status: "live",
    costs: "$3,509.00",
    region: "US-West 1",
    capacity: "99%",
    lastEdited: "23/09/2023 13:00",
  },
  {
    workspace: "marketing_campaign",
    owner: "Jane Smith",
    status: "live",
    costs: "$5,720.00",
    region: "US-East 2",
    capacity: "80%",
    lastEdited: "22/09/2023 10:45",
  },
  {
    workspace: "sales_campaign",
    owner: "Jane Smith",
    status: "live",
    costs: "$5,720.00",
    region: "US-East 2",
    capacity: "80%",
    lastEdited: "22/09/2023 10:45",
  },
  {
    workspace: "development_env",
    owner: "Mike Johnson",
    status: "live",
    costs: "$4,200.00",
    region: "EU-West 1",
    capacity: "60%",
    lastEdited: "21/09/2023 14:30",
  },
  {
    workspace: "new_workspace_1",
    owner: "Alice Brown",
    status: "live",
    costs: "$2,100.00",
    region: "US-West 2",
    capacity: "75%",
    lastEdited: "24/09/2023 09:15",
  },
  {
    workspace: "test_environment",
    owner: "David Clark",
    status: "inactive",
    costs: "$800.00",
    region: "EU-Central 1",
    capacity: "40%",
    lastEdited: "25/09/2023 16:20",
  },
  {
    workspace: "analytics_dashboard",
    owner: "Sarah Wilson",
    status: "live",
    costs: "$6,500.00",
    region: "US-West 1",
    capacity: "90%",
    lastEdited: "26/09/2023 11:30",
  },
  {
    workspace: "research_project",
    owner: "Michael Adams",
    status: "live",
    costs: "$3,900.00",
    region: "US-East 1",
    capacity: "70%",
    lastEdited: "27/09/2023 08:45",
  },
  {
    workspace: "training_environment",
    owner: "Laura White",
    status: "live",
    costs: "$2,500.00",
    region: "EU-North 1",
    capacity: "55%",
    lastEdited: "28/09/2023 12:15",
  },
  //array-end
]

declare module "@tanstack/react-table" {
  interface ColumnMeta<TData extends RowData, TValue> {
    align: string
  }
}

const workspacesColumns = [
  //array-start
  {
    header: "Workspace",
    accessorKey: "workspace",
    meta: {
      align: "text-left",
    },
  },
  {
    header: "Owner",
    accessorKey: "owner",
    meta: {
      align: "text-left",
    },
  },
  {
    header: "Status",
    accessorKey: "status",
    meta: {
      align: "text-left",
    },
  },
  {
    header: "Region",
    accessorKey: "region",
    meta: {
      align: "text-left",
    },
  },
  {
    header: "Capacity",
    accessorKey: "capacity",
    meta: {
      align: "text-right",
    },
  },
  {
    header: "Costs",
    accessorKey: "costs",
    meta: {
      align: "text-right",
    },
  },
  {
    header: "Last edited",
    accessorKey: "lastEdited",
    meta: {
      align: "text-right",
    },
  },
  //array-end
]

const Button = ({
  onClick,
  disabled,
  children,
  position,
}: {
  onClick: () => void
  disabled?: boolean
  children: React.ReactNode
  position: "left" | "right"
}) => {
  return (
    <button
      type="button"
      className={cx(
        "group p-2 text-sm ring-1 ring-gray-300 ring-inset hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent dark:ring-gray-800 hover:dark:bg-gray-900 disabled:hover:dark:bg-transparent",
        position === "left"
          ? "rounded-l-md"
          : position === "right"
            ? "-ml-px rounded-r-md"
            : "",
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default function Example() {
  const pageSize = 8

  const data = React.useMemo(
    // multiply dummy data to better demonstrate pagination over several pages
    () => [...workspaces, ...workspaces, ...workspaces, ...workspaces],
    [],
  )
  const table = useReactTable({
    data: data,
    columns: workspacesColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: pageSize,
      },
    },
  })

  return (
    <>
      <TableRoot>
        <Table>
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHeaderCell
                    key={header.id}
                    scope="col"
                    className={cx(header.column.columnDef.meta?.align)}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </TableHeaderCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    className={cx(cell.column.columnDef.meta?.align)}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableRoot>
      <div className="mt-10 flex items-center justify-between">
        <p className="text-sm text-gray-500 tabular-nums dark:text-gray-500">
          Page{" "}
          <span className="font-medium text-gray-900 dark:text-gray-50">{`${
            table.getState().pagination.pageIndex + 1
          }`}</span>{" "}
          /
          <span className="font-medium text-gray-900 dark:text-gray-50">
            {" "}
            {`${table.getPageCount()}`}
          </span>
        </p>
        <div className="inline-flex items-center rounded-md shadow-sm">
          <Button
            position="left"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Previous</span>
            <RiArrowLeftSLine
              className="size-5 text-gray-700 group-hover:text-gray-900 dark:text-gray-300 group-hover:dark:text-gray-50"
              aria-hidden={true}
            />
          </Button>
          <Button
            position="right"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Next</span>
            <RiArrowRightSLine
              className="size-5 text-gray-700 group-hover:text-gray-900 dark:text-gray-300 group-hover:dark:text-gray-50"
              aria-hidden={true}
            />
          </Button>
        </div>
      </div>
    </>
  )
}
```


```example/table-pagination-pagination-03.tsx
import React from "react"
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react"
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  RowData,
  useReactTable,
} from "@tanstack/react-table"

import { cx } from "@/lib/utils"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from "@/atom/Table"

// This example requires @tanstack/react-table

const workspaces = [
  //array-start
  {
    workspace: "sales_by_day_api",
    owner: "John Doe",
    status: "live",
    costs: "$3,509.00",
    region: "US-West 1",
    capacity: "99%",
    lastEdited: "23/09/2023 13:00",
  },
  {
    workspace: "marketing_campaign",
    owner: "Jane Smith",
    status: "live",
    costs: "$5,720.00",
    region: "US-East 2",
    capacity: "80%",
    lastEdited: "22/09/2023 10:45",
  },
  {
    workspace: "sales_campaign",
    owner: "Jane Smith",
    status: "live",
    costs: "$5,720.00",
    region: "US-East 2",
    capacity: "80%",
    lastEdited: "22/09/2023 10:45",
  },
  {
    workspace: "development_env",
    owner: "Mike Johnson",
    status: "live",
    costs: "$4,200.00",
    region: "EU-West 1",
    capacity: "60%",
    lastEdited: "21/09/2023 14:30",
  },
  {
    workspace: "new_workspace_1",
    owner: "Alice Brown",
    status: "live",
    costs: "$2,100.00",
    region: "US-West 2",
    capacity: "75%",
    lastEdited: "24/09/2023 09:15",
  },
  {
    workspace: "test_environment",
    owner: "David Clark",
    status: "inactive",
    costs: "$800.00",
    region: "EU-Central 1",
    capacity: "40%",
    lastEdited: "25/09/2023 16:20",
  },
  {
    workspace: "analytics_dashboard",
    owner: "Sarah Wilson",
    status: "live",
    costs: "$6,500.00",
    region: "US-West 1",
    capacity: "90%",
    lastEdited: "26/09/2023 11:30",
  },
  {
    workspace: "research_project",
    owner: "Michael Adams",
    status: "live",
    costs: "$3,900.00",
    region: "US-East 1",
    capacity: "70%",
    lastEdited: "27/09/2023 08:45",
  },
  {
    workspace: "training_environment",
    owner: "Laura White",
    status: "live",
    costs: "$2,500.00",
    region: "EU-North 1",
    capacity: "55%",
    lastEdited: "28/09/2023 12:15",
  },
  //array-end
]

declare module "@tanstack/react-table" {
  interface ColumnMeta<TData extends RowData, TValue> {
    align: string
  }
}

const workspacesColumns = [
  //array-start
  {
    header: "Workspace",
    accessorKey: "workspace",
    meta: {
      align: "text-left",
    },
  },
  {
    header: "Owner",
    accessorKey: "owner",
    meta: {
      align: "text-left",
    },
  },
  {
    header: "Status",
    accessorKey: "status",
    meta: {
      align: "text-left",
    },
  },
  {
    header: "Region",
    accessorKey: "region",
    meta: {
      align: "text-left",
    },
  },
  {
    header: "Capacity",
    accessorKey: "capacity",
    meta: {
      align: "text-right",
    },
  },
  {
    header: "Costs",
    accessorKey: "costs",
    meta: {
      align: "text-right",
    },
  },
  {
    header: "Last edited",
    accessorKey: "lastEdited",
    meta: {
      align: "text-right",
    },
  },
  //array-end
]

const Button = ({
  onClick,
  disabled,
  children,
}: {
  onClick: () => void
  disabled?: boolean
  children: React.ReactNode
}) => {
  return (
    <button
      type="button"
      className="group px-2.5 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default function Example() {
  const pageSize = 8

  const data = React.useMemo(
    // multiply dummy data to better demonstrate pagination over several pages
    () => [...workspaces, ...workspaces, ...workspaces, ...workspaces],
    [],
  )
  const table = useReactTable({
    data: data,
    columns: workspacesColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: pageSize,
      },
    },
  })

  // Calculate the range for the last page
  const totalRows = table.getFilteredRowModel().rows.length
  const lastPageStartIndex = Math.floor(totalRows / pageSize) * pageSize + 1
  const lastPageEndIndex = Math.min(
    totalRows,
    lastPageStartIndex + pageSize - 1,
  )

  return (
    <>
      <TableRoot>
        <Table>
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHeaderCell
                    key={header.id}
                    scope="col"
                    className={cx(header.column.columnDef.meta?.align)}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </TableHeaderCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    className={cx(cell.column.columnDef.meta?.align)}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableRoot>
      <div className="mt-10 flex items-center justify-between">
        <p className="text-sm text-gray-500 tabular-nums dark:text-gray-500">
          Showing{" "}
          <span className="font-medium text-gray-900 dark:text-gray-50">
            {table.getState().pagination.pageIndex ===
            Math.floor(totalRows / pageSize)
              ? lastPageStartIndex + "-" + lastPageEndIndex
              : table.getState().pagination.pageIndex * pageSize +
                1 +
                "-" +
                (table.getState().pagination.pageIndex + 1) * pageSize}
          </span>{" "}
          of
          <span className="font-medium text-gray-900 dark:text-gray-50">
            {" "}
            {table.getFilteredRowModel().rows.length}
          </span>
        </p>
        <div className="inline-flex items-center rounded-full ring-1 shadow-sm ring-gray-300 ring-inset dark:ring-gray-800">
          <Button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Previous</span>
            <RiArrowLeftSLine
              className="size-5 text-gray-700 hover:text-gray-900 dark:text-gray-300 hover:dark:text-gray-50"
              aria-hidden={true}
            />
          </Button>
          <span
            className="h-5 border-r border-gray-300 dark:border-gray-800"
            aria-hidden={true}
          />
          <Button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Next</span>
            <RiArrowRightSLine
              className="size-5 text-gray-700 group-hover:text-gray-900 dark:text-gray-300 group-hover:dark:text-gray-50"
              aria-hidden={true}
            />
          </Button>
        </div>
      </div>
    </>
  )
}
```


```example/table-pagination-pagination-01.tsx
import React from "react"
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react"
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  RowData,
  useReactTable,
} from "@tanstack/react-table"

import { cx } from "@/lib/utils"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from "@/atom/Table"

// This example requires @tanstack/react-table

const workspaces = [
  //array-start
  {
    workspace: "sales_by_day_api",

    owner: "John Doe",
    status: "live",
    costs: "$3,509.00",
    region: "US-West 1",
    capacity: "99%",
    lastEdited: "23/09/2023 13:00",
  },
  {
    workspace: "marketing_campaign",
    owner: "Jane Smith",
    status: "live",
    costs: "$5,720.00",
    region: "US-East 2",
    capacity: "80%",
    lastEdited: "22/09/2023 10:45",
  },
  {
    workspace: "sales_campaign",
    owner: "Jane Smith",
    status: "live",
    costs: "$5,720.00",
    region: "US-East 2",
    capacity: "80%",
    lastEdited: "22/09/2023 10:45",
  },
  {
    workspace: "development_env",
    owner: "Mike Johnson",
    status: "live",
    costs: "$4,200.00",
    region: "EU-West 1",
    capacity: "60%",
    lastEdited: "21/09/2023 14:30",
  },
  {
    workspace: "new_workspace_1",
    owner: "Alice Brown",
    status: "live",
    costs: "$2,100.00",
    region: "US-West 2",
    capacity: "75%",
    lastEdited: "24/09/2023 09:15",
  },
  {
    workspace: "test_environment",
    owner: "David Clark",
    status: "inactive",
    costs: "$800.00",
    region: "EU-Central 1",
    capacity: "40%",
    lastEdited: "25/09/2023 16:20",
  },
  {
    workspace: "analytics_dashboard",
    owner: "Sarah Wilson",
    status: "live",
    costs: "$6,500.00",
    region: "US-West 1",
    capacity: "90%",
    lastEdited: "26/09/2023 11:30",
  },
  {
    workspace: "research_project",
    owner: "Michael Adams",
    status: "live",
    costs: "$3,900.00",
    region: "US-East 1",
    capacity: "70%",
    lastEdited: "27/09/2023 08:45",
  },
  {
    workspace: "training_environment",
    owner: "Laura White",
    status: "live",
    costs: "$2,500.00",
    region: "EU-North 1",
    capacity: "55%",
    lastEdited: "28/09/2023 12:15",
  },
  //array-end
]

declare module "@tanstack/react-table" {
  interface ColumnMeta<TData extends RowData, TValue> {
    align: string
  }
}

const workspacesColumns = [
  //array-start
  {
    header: "Workspace",
    accessorKey: "workspace",
    meta: {
      align: "text-left",
    },
  },
  {
    header: "Owner",
    accessorKey: "owner",
    meta: {
      align: "text-left",
    },
  },
  {
    header: "Status",
    accessorKey: "status",
    meta: {
      align: "text-left",
    },
  },
  {
    header: "Region",
    accessorKey: "region",
    meta: {
      align: "text-left",
    },
  },
  {
    header: "Capacity",
    accessorKey: "capacity",
    meta: {
      align: "text-right",
    },
  },
  {
    header: "Costs",
    accessorKey: "costs",
    meta: {
      align: "text-right",
    },
  },
  {
    header: "Last edited",
    accessorKey: "lastEdited",
    meta: {
      align: "text-right",
    },
  },
  //array-end
]

const Button = ({
  onClick,
  disabled,
  children,
}: {
  onClick: () => void
  disabled?: boolean
  children: React.ReactNode
}) => {
  return (
    <button
      type="button"
      className="group px-2.5 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default function Example() {
  const pageSize = 8

  const data = React.useMemo(
    // multiply dummy data to better demonstrate pagination over several pages
    () => [...workspaces, ...workspaces, ...workspaces, ...workspaces],
    [],
  )
  const table = useReactTable({
    data: data,
    columns: workspacesColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: pageSize,
      },
    },
  })

  return (
    <>
      <TableRoot>
        <Table>
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHeaderCell
                    key={header.id}
                    scope="col"
                    className={cx(header.column.columnDef.meta?.align)}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </TableHeaderCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    className={cx(cell.column.columnDef.meta?.align)}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableRoot>
      <div className="mt-10 flex items-center justify-between">
        <p className="text-sm text-gray-500 tabular-nums dark:text-gray-500">
          Page{" "}
          <span className="font-medium text-gray-900 dark:text-gray-50">{`${
            table.getState().pagination.pageIndex + 1
          }`}</span>{" "}
          of
          <span className="font-medium text-gray-900 dark:text-gray-50">
            {" "}
            {`${table.getPageCount()}`}
          </span>
        </p>
        <div className="inline-flex items-center rounded-full ring-1 shadow-sm ring-gray-300 ring-inset dark:ring-gray-800">
          <Button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Previous</span>
            <RiArrowLeftSLine
              className="size-5 text-gray-700 group-hover:text-gray-900 dark:text-gray-300 group-hover:dark:text-gray-50"
              aria-hidden={true}
            />
          </Button>
          <span
            className="h-5 border-r border-gray-300 dark:border-gray-800"
            aria-hidden={true}
          />
          <Button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Next</span>
            <RiArrowRightSLine
              className="size-5 text-gray-700 group-hover:text-gray-900 dark:text-gray-300 group-hover:dark:text-gray-50"
              aria-hidden={true}
            />
          </Button>
        </div>
      </div>
    </>
  )
}
```


```example/table-pagination-pagination-04.tsx
import React from "react"
import {
  RiArrowLeftDoubleLine,
  RiArrowLeftSLine,
  RiArrowRightDoubleLine,
  RiArrowRightSLine,
} from "@remixicon/react"
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  RowData,
  useReactTable,
} from "@tanstack/react-table"

import { cx } from "@/lib/utils"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from "@/atom/Table"

// This example requires @tanstack/react-table

const workspaces = [
  //array-start
  {
    workspace: "sales_by_day_api",
    owner: "John Doe",
    status: "live",
    costs: "$3,509.00",
    region: "US-West 1",
    capacity: "99%",
    lastEdited: "23/09/2023 13:00",
  },
  {
    workspace: "marketing_campaign",
    owner: "Jane Smith",
    status: "live",
    costs: "$5,720.00",
    region: "US-East 2",
    capacity: "80%",
    lastEdited: "22/09/2023 10:45",
  },
  {
    workspace: "sales_campaign",
    owner: "Jane Smith",
    status: "live",
    costs: "$5,720.00",
    region: "US-East 2",
    capacity: "80%",
    lastEdited: "22/09/2023 10:45",
  },
  {
    workspace: "development_env",
    owner: "Mike Johnson",
    status: "live",
    costs: "$4,200.00",
    region: "EU-West 1",
    capacity: "60%",
    lastEdited: "21/09/2023 14:30",
  },
  {
    workspace: "new_workspace_1",
    owner: "Alice Brown",
    status: "live",
    costs: "$2,100.00",
    region: "US-West 2",
    capacity: "75%",
    lastEdited: "24/09/2023 09:15",
  },
  {
    workspace: "test_environment",
    owner: "David Clark",
    status: "inactive",
    costs: "$800.00",
    region: "EU-Central 1",
    capacity: "40%",
    lastEdited: "25/09/2023 16:20",
  },
  {
    workspace: "analytics_dashboard",
    owner: "Sarah Wilson",
    status: "live",
    costs: "$6,500.00",
    region: "US-West 1",
    capacity: "90%",
    lastEdited: "26/09/2023 11:30",
  },
  {
    workspace: "research_project",
    owner: "Michael Adams",
    status: "live",
    costs: "$3,900.00",
    region: "US-East 1",
    capacity: "70%",
    lastEdited: "27/09/2023 08:45",
  },
  {
    workspace: "training_environment",
    owner: "Laura White",
    status: "live",
    costs: "$2,500.00",
    region: "EU-North 1",
    capacity: "55%",
    lastEdited: "28/09/2023 12:15",
  },
  //array-end
]

declare module "@tanstack/react-table" {
  interface ColumnMeta<TData extends RowData, TValue> {
    align: string
  }
}

const workspacesColumns = [
  //array-start
  {
    header: "Workspace",
    accessorKey: "workspace",
    meta: {
      align: "text-left",
    },
  },
  {
    header: "Owner",
    accessorKey: "owner",
    meta: {
      align: "text-left",
    },
  },
  {
    header: "Status",
    accessorKey: "status",
    meta: {
      align: "text-left",
    },
  },
  {
    header: "Region",
    accessorKey: "region",
    meta: {
      align: "text-left",
    },
  },
  {
    header: "Capacity",
    accessorKey: "capacity",
    meta: {
      align: "text-right",
    },
  },
  {
    header: "Costs",
    accessorKey: "costs",
    meta: {
      align: "text-right",
    },
  },
  {
    header: "Last edited",
    accessorKey: "lastEdited",
    meta: {
      align: "text-right",
    },
  },
  //array-end
]

const Button = ({
  onClick,
  disabled,
  children,
}: {
  onClick: () => void
  disabled?: boolean
  children: React.ReactNode
}) => {
  return (
    <button
      type="button"
      className="group rounded-md p-2 text-sm ring-1 shadow-sm ring-gray-300 ring-inset hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:ring-gray-800 hover:dark:bg-gray-900"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default function Example() {
  const pageSize = 8

  const data = React.useMemo(
    // multiply dummy data to better demonstrate pagination over several pages
    () => [...workspaces, ...workspaces, ...workspaces, ...workspaces],
    [],
  )
  const table = useReactTable({
    data: data,
    columns: workspacesColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: pageSize,
      },
    },
  })

  const paginationButtons = [
    {
      icon: RiArrowLeftDoubleLine,
      onClick: () => table.setPageIndex(0),
      disabled: !table.getCanPreviousPage(),
      srText: "First page",
    },
    {
      icon: RiArrowLeftSLine,
      onClick: () => table.previousPage(),
      disabled: !table.getCanPreviousPage(),
      srText: "Previous page",
    },
    {
      icon: RiArrowRightSLine,
      onClick: () => table.nextPage(),
      disabled: !table.getCanNextPage(),
      srText: "Next page",
    },
    {
      icon: RiArrowRightDoubleLine,
      onClick: () => table.setPageIndex(table.getPageCount() - 1),
      disabled: !table.getCanNextPage(),
      srText: "Last page",
    },
  ]

  return (
    <>
      <TableRoot>
        <Table>
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHeaderCell
                    key={header.id}
                    scope="col"
                    className={cx(header.column.columnDef.meta?.align)}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </TableHeaderCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    className={cx(cell.column.columnDef.meta?.align)}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableRoot>
      <div className="mt-10 flex items-center justify-between">
        <p className="text-sm text-gray-500 tabular-nums dark:text-gray-500">
          Page{" "}
          <span className="font-medium text-gray-900 dark:text-gray-50">{`${
            table.getState().pagination.pageIndex + 1
          }`}</span>{" "}
          of
          <span className="font-medium text-gray-900 dark:text-gray-50">
            {" "}
            {`${table.getPageCount()}`}
          </span>
        </p>
        <div className="flex items-center gap-1.5">
          {paginationButtons.map((button, index) => (
            <Button
              key={index}
              onClick={button.onClick}
              disabled={button.disabled}
            >
              <span className="sr-only">{button.srText}</span>
              <button.icon
                className="size-5 text-gray-700 group-hover:text-gray-900 dark:text-gray-300 group-hover:dark:text-gray-50"
                aria-hidden={true}
              />
            </Button>
          ))}
        </div>
      </div>
    </>
  )
}
```


```example/table-pagination-pagination-05.tsx
import React from "react"
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react"
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  RowData,
  useReactTable,
} from "@tanstack/react-table"

import { cx } from "@/lib/utils"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from "@/atom/Table"

// This example requires @tanstack/react-table

const workspaces = [
  //array-start
  {
    workspace: "sales_by_day_api",
    owner: "John Doe",
    status: "live",
    costs: "$3,509.00",
    region: "US-West 1",
    capacity: "99%",
    lastEdited: "23/09/2023 13:00",
  },
  {
    workspace: "marketing_campaign",
    owner: "Jane Smith",
    status: "live",
    costs: "$5,720.00",
    region: "US-East 2",
    capacity: "80%",
    lastEdited: "22/09/2023 10:45",
  },
  {
    workspace: "sales_campaign",
    owner: "Jane Smith",
    status: "live",
    costs: "$5,720.00",
    region: "US-East 2",
    capacity: "80%",
    lastEdited: "22/09/2023 10:45",
  },
  {
    workspace: "development_env",
    owner: "Mike Johnson",
    status: "live",
    costs: "$4,200.00",
    region: "EU-West 1",
    capacity: "60%",
    lastEdited: "21/09/2023 14:30",
  },
  {
    workspace: "new_workspace_1",
    owner: "Alice Brown",
    status: "live",
    costs: "$2,100.00",
    region: "US-West 2",
    capacity: "75%",
    lastEdited: "24/09/2023 09:15",
  },
  {
    workspace: "test_environment",
    owner: "David Clark",
    status: "inactive",
    costs: "$800.00",
    region: "EU-Central 1",
    capacity: "40%",
    lastEdited: "25/09/2023 16:20",
  },
  {
    workspace: "analytics_dashboard",
    owner: "Sarah Wilson",
    status: "live",
    costs: "$6,500.00",
    region: "US-West 1",
    capacity: "90%",
    lastEdited: "26/09/2023 11:30",
  },
  {
    workspace: "research_project",
    owner: "Michael Adams",
    status: "live",
    costs: "$3,900.00",
    region: "US-East 1",
    capacity: "70%",
    lastEdited: "27/09/2023 08:45",
  },
  {
    workspace: "training_environment",
    owner: "Laura White",
    status: "live",
    costs: "$2,500.00",
    region: "EU-North 1",
    capacity: "55%",
    lastEdited: "28/09/2023 12:15",
  },
  //array-end
]

declare module "@tanstack/react-table" {
  interface ColumnMeta<TData extends RowData, TValue> {
    align: string
  }
}

const workspacesColumns = [
  //array-start
  {
    header: "Workspace",
    accessorKey: "workspace",
    meta: {
      align: "text-left",
    },
  },
  {
    header: "Owner",
    accessorKey: "owner",
    meta: {
      align: "text-left",
    },
  },
  {
    header: "Status",
    accessorKey: "status",
    meta: {
      align: "text-left",
    },
  },
  {
    header: "Region",
    accessorKey: "region",
    meta: {
      align: "text-left",
    },
  },
  {
    header: "Capacity",
    accessorKey: "capacity",
    meta: {
      align: "text-right",
    },
  },
  {
    header: "Costs",
    accessorKey: "costs",
    meta: {
      align: "text-right",
    },
  },
  {
    header: "Last edited",
    accessorKey: "lastEdited",
    meta: {
      align: "text-right",
    },
  },
  //array-end
]

const TextButton = ({
  onClick,
  disabled,
  children,
}: {
  onClick: () => void
  disabled?: boolean
  children: React.ReactNode
}) => {
  return (
    <button
      type="button"
      className="group rounded-md p-2 text-sm text-gray-900 disabled:cursor-not-allowed disabled:opacity-50 dark:text-gray-50"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

const NumberButton = ({
  active,
  onClick,
  children,
  position,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
  position?: "left" | "right"
}) => {
  return (
    <button
      type="button"
      className={cx(
        "min-w-[30px] border-b-2 p-2 text-sm text-gray-900 dark:text-gray-50",
        active
          ? "border-blue-500 font-semibold dark:border-blue-500"
          : "border-transparent hover:border-gray-300 hover:dark:border-gray-800",
        position === "left"
          ? "rounded-l-md"
          : position === "right"
            ? "rounded-r-md"
            : "",
      )}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
    >
      {children}
    </button>
  )
}

const MobileButton = ({
  onClick,
  disabled,
  children,
}: {
  onClick: () => void
  disabled?: boolean
  children: React.ReactNode
}) => {
  return (
    <button
      type="button"
      className="group px-2.5 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default function Example() {
  const pageSize = 8

  const data = React.useMemo(
    // multiply dummy data to better demonstrate pagination over several pages
    () => [
      ...workspaces,
      ...workspaces,
      ...workspaces,
      ...workspaces,
      ...workspaces,
      ...workspaces,
      ...workspaces,
    ],
    [],
  )
  const table = useReactTable({
    data: data,
    columns: workspacesColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: pageSize,
      },
    },
  })

  const paginationCount = table.getPageCount()
  const actualPage = table.getState().pagination.pageIndex + 1

  return (
    <>
      <TableRoot>
        <Table>
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHeaderCell
                    key={header.id}
                    scope="col"
                    className={cx(header.column.columnDef.meta?.align)}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </TableHeaderCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    className={cx(cell.column.columnDef.meta?.align)}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableRoot>
      <div className="mt-10 flex items-center justify-between sm:justify-center">
        {/* long pagination button form only for desktop view */}
        <div className="hidden items-center rounded-full px-0.5 ring-1 shadow-sm ring-gray-300 ring-inset sm:inline-flex dark:ring-gray-800">
          <TextButton
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Previous</span>
            <RiArrowLeftSLine
              className="size-5 text-gray-700 group-hover:text-gray-900 dark:text-gray-300 group-hover:dark:text-gray-50"
              aria-hidden={true}
            />
          </TextButton>
          <span
            className="h-5 border-r border-gray-300 dark:border-gray-800"
            aria-hidden={true}
          />
          <NumberButton
            onClick={() => table.setPageIndex(0)}
            active={actualPage === 1}
          >
            1
          </NumberButton>
          {actualPage > 4 ? (
            actualPage < paginationCount - 2 ? (
              <>
                <NumberButton
                  onClick={() => table.setPageIndex(actualPage - 3)}
                  active={false}
                >
                  ...
                </NumberButton>
                <NumberButton
                  onClick={() => table.setPageIndex(actualPage - 2)}
                  active={actualPage === actualPage - 1}
                >
                  {actualPage - 1}
                </NumberButton>
                <NumberButton
                  onClick={() => table.setPageIndex(actualPage - 1)}
                  active={true}
                >
                  {actualPage}
                </NumberButton>
                <NumberButton
                  onClick={() => table.setPageIndex(actualPage)}
                  active={actualPage === actualPage + 1}
                >
                  {actualPage + 1}
                </NumberButton>
                <NumberButton
                  onClick={() => table.setPageIndex(actualPage + 1)}
                  active={false}
                >
                  ...
                </NumberButton>
              </>
            ) : (
              <>
                <NumberButton
                  onClick={() => table.setPageIndex(1)}
                  active={false}
                >
                  2
                </NumberButton>
                <NumberButton
                  onClick={() => table.setPageIndex(paginationCount - 5)}
                  active={false}
                >
                  ...
                </NumberButton>
                <NumberButton
                  onClick={() => table.setPageIndex(paginationCount - 4)}
                  active={actualPage === paginationCount - 3}
                >
                  {paginationCount - 3}
                </NumberButton>
                <NumberButton
                  onClick={() => table.setPageIndex(paginationCount - 3)}
                  active={actualPage === paginationCount - 2}
                >
                  {paginationCount - 2}
                </NumberButton>
                <NumberButton
                  onClick={() => table.setPageIndex(paginationCount - 2)}
                  active={actualPage === paginationCount - 1}
                >
                  {paginationCount - 1}
                </NumberButton>
              </>
            )
          ) : (
            <>
              <NumberButton
                onClick={() => table.setPageIndex(1)}
                active={actualPage === 2}
              >
                2
              </NumberButton>
              <NumberButton
                onClick={() => table.setPageIndex(2)}
                active={actualPage === 3}
              >
                3
              </NumberButton>
              <NumberButton
                onClick={() => table.setPageIndex(3)}
                active={actualPage === 4}
              >
                4
              </NumberButton>
              <NumberButton
                onClick={() => table.setPageIndex(4)}
                active={false}
              >
                ...
              </NumberButton>
              <NumberButton
                onClick={() => table.setPageIndex(paginationCount - 2)}
                active={false}
              >
                {paginationCount - 1}
              </NumberButton>
            </>
          )}
          <NumberButton
            onClick={() => table.setPageIndex(paginationCount - 1)}
            active={actualPage === paginationCount}
          >
            {paginationCount}
          </NumberButton>
          <span className="h-5 border-r border-gray-300 dark:border-gray-800" />
          <TextButton
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Next</span>
            <RiArrowRightSLine
              className="size-5 text-gray-700 group-hover:text-gray-900 dark:text-gray-300 group-hover:dark:text-gray-50"
              aria-hidden={true}
            />
          </TextButton>
        </div>
        <p className="text-sm text-gray-500 tabular-nums sm:hidden dark:text-gray-500">
          Page of{" "}
          <span className="font-medium text-gray-900 dark:text-gray-50">{`${
            table.getState().pagination.pageIndex + 1
          }`}</span>{" "}
          of
          <span className="font-medium text-gray-900 dark:text-gray-50">
            {" "}
            {`${table.getPageCount()}`}
          </span>
        </p>
        {/* --- Mobile view for pagination buttons --- */}
        <div className="inline-flex items-center rounded-full ring-1 shadow-sm ring-gray-300 ring-inset sm:hidden dark:ring-gray-800">
          <MobileButton
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Previous</span>
            <RiArrowLeftSLine
              className="size-5 text-gray-700 group-hover:text-gray-900 dark:text-gray-300 group-hover:dark:text-gray-50"
              aria-hidden={true}
            />
          </MobileButton>
          <span
            className="h-5 border-r border-gray-300 dark:border-gray-800"
            aria-hidden={true}
          />
          <MobileButton
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Next</span>
            <RiArrowRightSLine
              className="size-5 text-gray-700 group-hover:text-gray-900 dark:text-gray-300 group-hover:dark:text-gray-50"
              aria-hidden={true}
            />
          </MobileButton>
        </div>
      </div>
    </>
  )
}
```


```example/table-pagination-pagination-07.tsx
import React from "react"
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react"
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  RowData,
  useReactTable,
} from "@tanstack/react-table"

import { cx } from "@/lib/utils"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from "@/atom/Table"

// This example requires @tanstack/react-table

const workspaces = [
  //array-start
  {
    workspace: "sales_by_day_api",
    owner: "John Doe",
    status: "live",
    costs: "$3,509.00",
    region: "US-West 1",
    capacity: "99%",
    lastEdited: "23/09/2023 13:00",
  },
  {
    workspace: "marketing_campaign",
    owner: "Jane Smith",
    status: "live",
    costs: "$5,720.00",
    region: "US-East 2",
    capacity: "80%",
    lastEdited: "22/09/2023 10:45",
  },
  {
    workspace: "sales_campaign",
    owner: "Jane Smith",
    status: "live",
    costs: "$5,720.00",
    region: "US-East 2",
    capacity: "80%",
    lastEdited: "22/09/2023 10:45",
  },
  {
    workspace: "development_env",
    owner: "Mike Johnson",
    status: "live",
    costs: "$4,200.00",
    region: "EU-West 1",
    capacity: "60%",
    lastEdited: "21/09/2023 14:30",
  },
  {
    workspace: "new_workspace_1",
    owner: "Alice Brown",
    status: "live",
    costs: "$2,100.00",
    region: "US-West 2",
    capacity: "75%",
    lastEdited: "24/09/2023 09:15",
  },
  {
    workspace: "test_environment",
    owner: "David Clark",
    status: "inactive",
    costs: "$800.00",
    region: "EU-Central 1",
    capacity: "40%",
    lastEdited: "25/09/2023 16:20",
  },
  {
    workspace: "analytics_dashboard",
    owner: "Sarah Wilson",
    status: "live",
    costs: "$6,500.00",
    region: "US-West 1",
    capacity: "90%",
    lastEdited: "26/09/2023 11:30",
  },
  {
    workspace: "research_project",
    owner: "Michael Adams",
    status: "live",
    costs: "$3,900.00",
    region: "US-East 1",
    capacity: "70%",
    lastEdited: "27/09/2023 08:45",
  },
  {
    workspace: "training_environment",
    owner: "Laura White",
    status: "live",
    costs: "$2,500.00",
    region: "EU-North 1",
    capacity: "55%",
    lastEdited: "28/09/2023 12:15",
  },
  //array-end
]

declare module "@tanstack/react-table" {
  interface ColumnMeta<TData extends RowData, TValue> {
    align: string
  }
}

const workspacesColumns = [
  //array-start
  {
    header: "Workspace",
    accessorKey: "workspace",
    meta: {
      align: "text-left",
    },
  },
  {
    header: "Owner",
    accessorKey: "owner",
    meta: {
      align: "text-left",
    },
  },
  {
    header: "Status",
    accessorKey: "status",
    meta: {
      align: "text-left",
    },
  },
  {
    header: "Region",
    accessorKey: "region",
    meta: {
      align: "text-left",
    },
  },
  {
    header: "Capacity",
    accessorKey: "capacity",
    meta: {
      align: "text-right",
    },
  },
  {
    header: "Costs",
    accessorKey: "costs",
    meta: {
      align: "text-right",
    },
  },
  {
    header: "Last edited",
    accessorKey: "lastEdited",
    meta: {
      align: "text-right",
    },
  },
  //array-end
]

const TextButton = ({
  onClick,
  disabled,
  children,
}: {
  onClick: () => void
  disabled: boolean
  children: React.ReactNode
}) => {
  return (
    <button
      type="button"
      className="group rounded-md bg-white p-2 text-sm ring-1 shadow-sm ring-gray-300 ring-inset hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-white dark:bg-gray-950 dark:ring-gray-800 hover:dark:bg-gray-900 disabled:hover:dark:bg-gray-950"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

const NumberButton = ({
  active,
  onClick,
  children,
  position,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
  position?: "left" | "right"
}) => {
  return (
    <button
      type="button"
      className={cx(
        "min-w-[36px] rounded-md p-2 text-sm text-gray-900 disabled:opacity-50 dark:text-gray-50",
        active
          ? "bg-blue-500 font-semibold text-white dark:bg-blue-500 dark:text-white"
          : "hover:bg-gray-50 hover:dark:bg-gray-900",
        position === "left"
          ? "rounded-l-md"
          : position === "right"
            ? "rounded-r-md"
            : "",
      )}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
    >
      {children}
    </button>
  )
}

const MobileButton = ({
  onClick,
  disabled,
  children,
  position,
}: {
  onClick: () => void
  disabled: boolean
  children: React.ReactNode
  position?: "left" | "right"
}) => {
  return (
    <button
      type="button"
      className={cx(
        "group p-2 text-sm ring-1 ring-gray-300 ring-inset hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-white dark:ring-gray-800 hover:dark:bg-gray-900 disabled:hover:dark:bg-gray-950",
        position === "left"
          ? "rounded-l-md"
          : position === "right"
            ? "-ml-px rounded-r-md"
            : "",
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export { MobileButton, NumberButton, TextButton }

export default function Example() {
  const pageSize = 8

  const data = React.useMemo(
    // multiply dummy data to better demonstrate pagination over several pages
    () => [
      ...workspaces,
      ...workspaces,
      ...workspaces,
      ...workspaces,
      ...workspaces,
      ...workspaces,
      ...workspaces,
    ],
    [],
  )
  const table = useReactTable({
    data: data,
    columns: workspacesColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: pageSize,
      },
    },
  })

  const paginationCount = table.getPageCount()
  const actualPage = table.getState().pagination.pageIndex + 1

  return (
    <>
      <TableRoot>
        <Table>
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHeaderCell
                    key={header.id}
                    scope="col"
                    className={cx(header.column.columnDef.meta?.align)}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </TableHeaderCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    className={cx(cell.column.columnDef.meta?.align)}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableRoot>
      <div className="mt-10 flex items-center justify-between sm:justify-center">
        {/* long pagination button form only for desktop view */}
        <div className="hidden gap-0.5 sm:inline-flex">
          <TextButton
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Previous</span>
            <RiArrowLeftSLine
              className="size-5 text-gray-700 group-hover:text-gray-900 dark:text-gray-300 group-hover:dark:text-gray-50"
              aria-hidden={true}
            />
          </TextButton>
          <NumberButton
            onClick={() => table.setPageIndex(0)}
            active={actualPage === 1}
          >
            1
          </NumberButton>
          {actualPage > 4 ? (
            actualPage < paginationCount - 2 ? (
              <>
                <NumberButton
                  onClick={() => table.setPageIndex(actualPage - 3)}
                  active={false}
                >
                  ...
                </NumberButton>
                <NumberButton
                  onClick={() => table.setPageIndex(actualPage - 2)}
                  active={actualPage === actualPage - 1}
                >
                  {actualPage - 1}
                </NumberButton>
                <NumberButton
                  onClick={() => table.setPageIndex(actualPage - 1)}
                  active={true}
                >
                  {actualPage}
                </NumberButton>
                <NumberButton
                  onClick={() => table.setPageIndex(actualPage)}
                  active={actualPage === actualPage + 1}
                >
                  {actualPage + 1}
                </NumberButton>
                <NumberButton
                  onClick={() => table.setPageIndex(actualPage + 1)}
                  active={false}
                >
                  ...
                </NumberButton>
              </>
            ) : (
              <>
                <NumberButton
                  onClick={() => table.setPageIndex(1)}
                  active={false}
                >
                  2
                </NumberButton>
                <NumberButton
                  onClick={() => table.setPageIndex(paginationCount - 5)}
                  active={false}
                >
                  ...
                </NumberButton>
                <NumberButton
                  onClick={() => table.setPageIndex(paginationCount - 4)}
                  active={actualPage === paginationCount - 3}
                >
                  {paginationCount - 3}
                </NumberButton>
                <NumberButton
                  onClick={() => table.setPageIndex(paginationCount - 3)}
                  active={actualPage === paginationCount - 2}
                >
                  {paginationCount - 2}
                </NumberButton>
                <NumberButton
                  onClick={() => table.setPageIndex(paginationCount - 2)}
                  active={actualPage === paginationCount - 1}
                >
                  {paginationCount - 1}
                </NumberButton>
              </>
            )
          ) : (
            <>
              <NumberButton
                onClick={() => table.setPageIndex(1)}
                active={actualPage === 2}
              >
                2
              </NumberButton>
              <NumberButton
                onClick={() => table.setPageIndex(2)}
                active={actualPage === 3}
              >
                3
              </NumberButton>
              <NumberButton
                onClick={() => table.setPageIndex(3)}
                active={actualPage === 4}
              >
                4
              </NumberButton>
              <NumberButton
                onClick={() => table.setPageIndex(4)}
                active={false}
              >
                ...
              </NumberButton>
              <NumberButton
                onClick={() => table.setPageIndex(paginationCount - 2)}
                active={false}
              >
                {paginationCount - 1}
              </NumberButton>
            </>
          )}
          <NumberButton
            onClick={() => table.setPageIndex(paginationCount - 1)}
            active={actualPage === paginationCount}
          >
            {paginationCount}
          </NumberButton>
          <TextButton
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Next</span>
            <RiArrowRightSLine
              className="size-5 text-gray-700 group-hover:text-gray-900 dark:text-gray-300 group-hover:dark:text-gray-50"
              aria-hidden={true}
            />
          </TextButton>
        </div>
        <p className="text-sm text-gray-500 tabular-nums sm:hidden dark:text-gray-500">
          Page of{" "}
          <span className="font-medium text-gray-900 dark:text-gray-50">{`${
            table.getState().pagination.pageIndex + 1
          }`}</span>{" "}
          of
          <span className="font-medium text-gray-900 dark:text-gray-50">
            {" "}
            {`${table.getPageCount()}`}
          </span>
        </p>
        {/* --- Mobile view for pagination buttons --- */}
        <div className="inline-flex items-center rounded-md shadow-sm sm:hidden">
          <MobileButton
            position="left"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Previous</span>
            <RiArrowLeftSLine
              className="size-5 text-gray-700 group-hover:text-gray-900 dark:text-gray-300 group-hover:dark:text-gray-50"
              aria-hidden={true}
            />
          </MobileButton>
          <MobileButton
            position="right"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Next</span>
            <RiArrowRightSLine
              className="size-5 text-gray-700 group-hover:text-gray-900 dark:text-gray-300 group-hover:dark:text-gray-50"
              aria-hidden={true}
            />
          </MobileButton>
        </div>
      </div>
    </>
  )
}
```


```example/table-pagination-pagination-06.tsx
import React from "react"
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react"
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  RowData,
  useReactTable,
} from "@tanstack/react-table"

import { cx } from "@/lib/utils"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from "@/atom/Table"

// This example requires @tanstack/react-table

const workspaces = [
  //array-start
  {
    workspace: "sales_by_day_api",
    owner: "John Doe",
    status: "live",
    costs: "$3,509.00",
    region: "US-West 1",
    capacity: "99%",
    lastEdited: "23/09/2023 13:00",
  },
  {
    workspace: "marketing_campaign",
    owner: "Jane Smith",
    status: "live",
    costs: "$5,720.00",
    region: "US-East 2",
    capacity: "80%",
    lastEdited: "22/09/2023 10:45",
  },
  {
    workspace: "sales_campaign",
    owner: "Jane Smith",
    status: "live",
    costs: "$5,720.00",
    region: "US-East 2",
    capacity: "80%",
    lastEdited: "22/09/2023 10:45",
  },
  {
    workspace: "development_env",
    owner: "Mike Johnson",
    status: "live",
    costs: "$4,200.00",
    region: "EU-West 1",
    capacity: "60%",
    lastEdited: "21/09/2023 14:30",
  },
  {
    workspace: "new_workspace_1",
    owner: "Alice Brown",
    status: "live",
    costs: "$2,100.00",
    region: "US-West 2",
    capacity: "75%",
    lastEdited: "24/09/2023 09:15",
  },
  {
    workspace: "test_environment",
    owner: "David Clark",
    status: "inactive",
    costs: "$800.00",
    region: "EU-Central 1",
    capacity: "40%",
    lastEdited: "25/09/2023 16:20",
  },
  {
    workspace: "analytics_dashboard",
    owner: "Sarah Wilson",
    status: "live",
    costs: "$6,500.00",
    region: "US-West 1",
    capacity: "90%",
    lastEdited: "26/09/2023 11:30",
  },
  {
    workspace: "research_project",
    owner: "Michael Adams",
    status: "live",
    costs: "$3,900.00",
    region: "US-East 1",
    capacity: "70%",
    lastEdited: "27/09/2023 08:45",
  },
  {
    workspace: "training_environment",
    owner: "Laura White",
    status: "live",
    costs: "$2,500.00",
    region: "EU-North 1",
    capacity: "55%",
    lastEdited: "28/09/2023 12:15",
  },
  //array-end
]

declare module "@tanstack/react-table" {
  interface ColumnMeta<TData extends RowData, TValue> {
    align: string
  }
}

const workspacesColumns = [
  //array-start
  {
    header: "Workspace",
    accessorKey: "workspace",
    meta: {
      align: "text-left",
    },
  },
  {
    header: "Owner",
    accessorKey: "owner",
    meta: {
      align: "text-left",
    },
  },
  {
    header: "Status",
    accessorKey: "status",
    meta: {
      align: "text-left",
    },
  },
  {
    header: "Region",
    accessorKey: "region",
    meta: {
      align: "text-left",
    },
  },
  {
    header: "Capacity",
    accessorKey: "capacity",
    meta: {
      align: "text-right",
    },
  },
  {
    header: "Costs",
    accessorKey: "costs",
    meta: {
      align: "text-right",
    },
  },
  {
    header: "Last edited",
    accessorKey: "lastEdited",
    meta: {
      align: "text-right",
    },
  },
  //array-end
]

const TextButton = ({
  onClick,
  disabled,
  children,
}: {
  onClick: () => void
  disabled?: boolean
  children: React.ReactNode
}) => {
  return (
    <button
      type="button"
      className="group rounded-md bg-white p-2 text-sm ring-1 shadow-sm ring-gray-300 ring-inset hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-white dark:bg-gray-950 dark:ring-gray-800 hover:dark:bg-gray-900 disabled:hover:dark:bg-gray-950"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

const NumberButton = ({
  active,
  onClick,
  children,
  position,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
  position?: "left" | "right"
}) => {
  return (
    <button
      type="button"
      className={cx(
        "min-w-[36px] rounded-md p-2 text-sm text-gray-900 disabled:opacity-50 dark:text-gray-50",
        active
          ? "bg-white font-bold dark:bg-gray-950"
          : "hover:bg-gray-50 hover:dark:bg-gray-950",
        position === "left"
          ? "rounded-l-md"
          : position === "right"
            ? "rounded-r-md"
            : "",
      )}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
    >
      {children}
    </button>
  )
}

const MobileButton = ({
  onClick,
  disabled,
  children,
  position,
}: {
  onClick: () => void
  disabled?: boolean
  children: React.ReactNode
  position?: "left" | "right"
}) => {
  return (
    <button
      type="button"
      className={cx(
        "group p-2 text-sm ring-1 ring-gray-300 ring-inset hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-white dark:ring-gray-800 hover:dark:bg-gray-900 disabled:hover:dark:bg-gray-950",
        position === "left"
          ? "rounded-l-md"
          : position === "right"
            ? "-ml-px rounded-r-md"
            : "",
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default function Example() {
  const pageSize = 8

  const data = React.useMemo(
    // multiply dummy data to better demonstrate pagination over several pages
    () => [
      ...workspaces,
      ...workspaces,
      ...workspaces,
      ...workspaces,
      ...workspaces,
      ...workspaces,
      ...workspaces,
    ],
    [],
  )
  const table = useReactTable({
    data: data,
    columns: workspacesColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: pageSize,
      },
    },
  })

  const paginationCount = table.getPageCount()
  const actualPage = table.getState().pagination.pageIndex + 1

  return (
    <>
      <TableRoot>
        <Table>
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHeaderCell
                    key={header.id}
                    scope="col"
                    className={cx(header.column.columnDef.meta?.align)}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </TableHeaderCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    className={cx(cell.column.columnDef.meta?.align)}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableRoot>
      <div className="mt-10 flex items-center justify-between sm:justify-center">
        {/* long pagination button form only for desktop view */}
        <div className="hidden gap-0.5 sm:inline-flex">
          <TextButton
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Previous</span>
            <RiArrowLeftSLine
              className="size-5 text-gray-700 group-hover:text-gray-900 dark:text-gray-300 group-hover:dark:text-gray-50"
              aria-hidden={true}
            />
          </TextButton>
          <NumberButton
            onClick={() => table.setPageIndex(0)}
            active={actualPage === 1}
          >
            1
          </NumberButton>
          {actualPage > 4 ? (
            actualPage < paginationCount - 2 ? (
              <>
                <NumberButton
                  onClick={() => table.setPageIndex(actualPage - 3)}
                  active={false}
                >
                  ...
                </NumberButton>
                <NumberButton
                  onClick={() => table.setPageIndex(actualPage - 2)}
                  active={actualPage === actualPage - 1}
                >
                  {actualPage - 1}
                </NumberButton>
                <NumberButton
                  onClick={() => table.setPageIndex(actualPage - 1)}
                  active={true}
                >
                  {actualPage}
                </NumberButton>
                <NumberButton
                  onClick={() => table.setPageIndex(actualPage)}
                  active={actualPage === actualPage + 1}
                >
                  {actualPage + 1}
                </NumberButton>
                <NumberButton
                  onClick={() => table.setPageIndex(actualPage + 1)}
                  active={false}
                >
                  ...
                </NumberButton>
              </>
            ) : (
              <>
                <NumberButton
                  onClick={() => table.setPageIndex(1)}
                  active={false}
                >
                  2
                </NumberButton>
                <NumberButton
                  onClick={() => table.setPageIndex(paginationCount - 5)}
                  active={false}
                >
                  ...
                </NumberButton>
                <NumberButton
                  onClick={() => table.setPageIndex(paginationCount - 4)}
                  active={actualPage === paginationCount - 3}
                >
                  {paginationCount - 3}
                </NumberButton>
                <NumberButton
                  onClick={() => table.setPageIndex(paginationCount - 3)}
                  active={actualPage === paginationCount - 2}
                >
                  {paginationCount - 2}
                </NumberButton>
                <NumberButton
                  onClick={() => table.setPageIndex(paginationCount - 2)}
                  active={actualPage === paginationCount - 1}
                >
                  {paginationCount - 1}
                </NumberButton>
              </>
            )
          ) : (
            <>
              <NumberButton
                onClick={() => table.setPageIndex(1)}
                active={actualPage === 2}
              >
                2
              </NumberButton>
              <NumberButton
                onClick={() => table.setPageIndex(2)}
                active={actualPage === 3}
              >
                3
              </NumberButton>
              <NumberButton
                onClick={() => table.setPageIndex(3)}
                active={actualPage === 4}
              >
                4
              </NumberButton>
              <NumberButton
                onClick={() => table.setPageIndex(4)}
                active={false}
              >
                ...
              </NumberButton>
              <NumberButton
                onClick={() => table.setPageIndex(paginationCount - 2)}
                active={false}
              >
                {paginationCount - 1}
              </NumberButton>
            </>
          )}
          <NumberButton
            onClick={() => table.setPageIndex(paginationCount - 1)}
            active={actualPage === paginationCount}
          >
            {paginationCount}
          </NumberButton>
          <TextButton
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Next</span>
            <RiArrowRightSLine
              className="size-5 text-gray-700 group-hover:text-gray-900 dark:text-gray-300 group-hover:dark:text-gray-50"
              aria-hidden={true}
            />
          </TextButton>
        </div>
        <p className="text-sm text-gray-500 tabular-nums sm:hidden dark:text-gray-500">
          Page of{" "}
          <span className="font-medium text-gray-900 dark:text-gray-50">{`${
            table.getState().pagination.pageIndex + 1
          }`}</span>{" "}
          of
          <span className="font-medium text-gray-900 dark:text-gray-50">
            {" "}
            {`${table.getPageCount()}`}
          </span>
        </p>
        {/* --- Mobile view for pagination buttons --- */}
        <div className="inline-flex items-center rounded-md shadow-sm sm:hidden">
          <MobileButton
            position="left"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Previous</span>
            <RiArrowLeftSLine
              className="size-5 text-gray-700 hover:text-gray-900 dark:text-gray-300 hover:dark:text-gray-50"
              aria-hidden={true}
            />
          </MobileButton>
          <MobileButton
            position="right"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Next</span>
            <RiArrowRightSLine
              className="size-5 text-gray-700 hover:text-gray-900 dark:text-gray-300 hover:dark:text-gray-50"
              aria-hidden={true}
            />
          </MobileButton>
        </div>
      </div>
    </>
  )
}
```


