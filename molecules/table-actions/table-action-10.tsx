import React from "react"
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { cx } from "@/lib/utils"

import { Checkbox } from "../../atoms/Checkbox"
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
          "absolute inset-x-0 -bottom-14 mx-auto flex w-fit items-center space-x-3 rounded-full border border-gray-800 bg-gray-900 px-4 py-2 text-sm font-medium shadow-md ring-1 ring-gray-800",
          Object.keys(rowSelection).length > 0 ? "" : "hidden",
        )}
      >
        <p className="select-none tabular-nums text-gray-400">
          {Object.keys(rowSelection).length} selected
        </p>
        <span className="h-4 w-px bg-gray-600" aria-hidden={true} />
        <span className="flex items-center space-x-2">
          <button
            type="button"
            className="inline-flex items-center gap-2 text-sm text-gray-300 transition-all hover:text-gray-50"
          >
            Edit
            <span className="flex size-6 select-none items-center justify-center rounded-md bg-gray-800 text-gray-400 ring-1 ring-inset ring-gray-700">
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
              <span className="flex size-6 select-none items-center justify-center rounded-md bg-gray-800 text-gray-400 ring-1 ring-inset ring-gray-700">
                ⌘
              </span>
              <span className="flex size-6 select-none items-center justify-center rounded-md bg-gray-800 text-gray-400 ring-1 ring-inset ring-gray-700">
                D
              </span>
            </span>
          </button>
        </span>
      </div>
    </div>
  )
}
