import React from "react"
import { RiEqualizer2Line } from "@remixicon/react"

import { cx, focusInput } from "@/lib/utils"

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/atom/DropdownMenu"
import { Tooltip } from "@/atom/Tooltip"

function formatDate(date: Date) {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

const data = [
  // array-start
  {
    buttonText: "Today",
    tooltipText: formatDate(new Date()),
  },
  {
    buttonText: "7D",
    tooltipText: `${formatDate(new Date(new Date().setDate(new Date().getDate() - 7)))} – ${formatDate(new Date())} `,
  },
  {
    buttonText: "30D",
    tooltipText: `${formatDate(new Date(new Date().setDate(new Date().getDate() - 30)))} – ${formatDate(new Date())}`,
  },
  {
    buttonText: "3M",
    tooltipText: `${formatDate(new Date(new Date().setMonth(new Date().getMonth() - 3)))} – ${formatDate(new Date())}`,
  },
  {
    buttonText: "6M",
    tooltipText: `${formatDate(new Date(new Date().setMonth(new Date().getMonth() - 6)))} – ${formatDate(new Date())}`,
  },
  // array-end
]

export default function Example() {
  const [showProduct, setShowProduct] = React.useState(true)
  const [showName, setShowName] = React.useState(true)
  const [showDescription, setShowDescription] = React.useState(true)
  const [showTransaction, setShowTransaction] = React.useState(false)
  const [showAmount, setShowAmount] = React.useState(true)

  const selectedColumnsCount = [
    showProduct,
    showName,
    showDescription,
    showTransaction,
    showAmount,
  ].filter(Boolean).length

  return (
    <div className="obfuscate">
      <div className="relative">
        <div className="flex h-48 items-start justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <div className="hidden items-center rounded-md text-sm font-medium shadow-sm sm:inline-flex">
            {data.map((item, index) => (
              <Tooltip
                side="top"
                showArrow={true}
                className="z-50"
                content={item.tooltipText}
                sideOffset={8}
                triggerAsChild={true}
                key={index}
              >
                <button
                  type="button"
                  className={cx(
                    index === 0
                      ? "rounded-l-md"
                      : index === data.length - 1
                        ? "-ml-px rounded-r-md"
                        : "-ml-px",
                    focusInput,
                    "border border-gray-300 bg-white px-4 py-2 text-gray-900 transition hover:bg-gray-50 focus:z-10 focus:outline-none dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 hover:dark:bg-gray-950/50",
                  )}
                >
                  {item.buttonText}
                </button>
              </Tooltip>
            ))}
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className={cx(
                  focusInput,
                  "flex items-center gap-x-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 shadow-sm transition hover:bg-gray-50 focus:z-10 focus:outline-none dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 hover:dark:bg-gray-950/50",
                )}
              >
                <RiEqualizer2Line
                  className="-ml-px size-5 shrink-0"
                  aria-hidden={true}
                />
                View{" "}
                <span className="tabular-nums">({selectedColumnsCount})</span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Columns</DropdownMenuLabel>
              <DropdownMenuCheckboxItem
                checked={showProduct}
                onCheckedChange={setShowProduct}
              >
                product_id
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={showName}
                onCheckedChange={setShowName}
              >
                name
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={showDescription}
                onCheckedChange={setShowDescription}
              >
                description
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={showTransaction}
                onCheckedChange={setShowTransaction}
              >
                date_of_transaction
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={showAmount}
                onCheckedChange={setShowAmount}
              >
                amount
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {/* gradient for demo purpose */}
        <div className="absolute inset-x-0 bottom-0 -mb-1 h-14 rounded-b-lg bg-gradient-to-t from-white via-white to-transparent dark:from-gray-950 dark:via-gray-950 dark:to-transparent" />
      </div>
    </div>
  )
}
