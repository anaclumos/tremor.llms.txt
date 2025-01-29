"use client"

import { Button } from "../../atoms/Button"
import { SparkAreaChart } from "../../atoms/SparkChart"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from "../../atoms/Table"

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
