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
