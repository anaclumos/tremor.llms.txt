import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { cx } from "@/lib/utils"

import { RadioCardGroup, RadioCardItem } from "../../atom/RadioCardGroup"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from "../../atom/Table"

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
