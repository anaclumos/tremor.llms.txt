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
