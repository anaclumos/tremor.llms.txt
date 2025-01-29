import { RiArrowDownSLine, RiStackLine } from "@remixicon/react"

import { cx } from "@/lib/utils"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../../atoms/DropdownMenu"

const data = [
  // array-start
  {
    label: "Team workspaces",
    items: [
      {
        value: "test_workspace_us_west_01",
        label: "test_workspace_us_west_01",
        disabled: false,
      },
      {
        value: "live_workspace_frankfurt_02",
        label: "live_workspace_frankfurt_02",
        disabled: false,
      },
      {
        value: "live_workspace_zurich_01",
        label: "live_workspace_zurich_01",
        disabled: false,
      },
      {
        value: "ecommerce_analytics_api",
        label: "ecommerce_analytics_api",
        disabled: true,
      },
    ],
  },
  {
    label: "Private workspaces",
    items: [
      {
        value: "private_workspace_US_east_02",
        label: "private_workspace_US_east_02",
        disabled: false,
      },
      {
        value: "private_workspace_frankfurt_01",
        label: "private_workspace_frankfurt_01",
        disabled: false,
      },
    ],
  },
  // array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="relative">
        <div className="flex h-48 items-start justify-end rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <div className="inline-flex items-center rounded-lg text-sm font-medium shadow-sm">
            <button
              type="button"
              className="rounded-l-md border border-blue-400 bg-blue-500 px-3 py-2.5 text-white focus:z-10 dark:border-blue-400 dark:bg-blue-500 dark:text-white"
            >
              Create Dashboard
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger className="-ml-px w-fit" asChild>
                <button
                  type="button"
                  className="rounded-r-md border border-blue-400 bg-blue-500 px-2 py-2.5 text-white hover:bg-blue-400 focus:z-10 focus:outline-none dark:border-blue-400 dark:bg-blue-500 dark:text-white hover:dark:bg-blue-400"
                >
                  <RiArrowDownSLine
                    className="size-5 shrink-0"
                    aria-hidden={true}
                  />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {data.map((group) => (
                  <DropdownMenuGroup key={group.label}>
                    <DropdownMenuLabel>{group.label}</DropdownMenuLabel>
                    {group.items.map((item) => (
                      <DropdownMenuItem
                        key={item.value}
                        disabled={item.disabled}
                      >
                        <div className="flex items-center gap-x-2">
                          <RiStackLine
                            className={cx(
                              item.disabled
                                ? "text-gray-400 dark:text-gray-600"
                                : "text-gray-500 dark:text-gray-500",
                              "size-4 shrink-0",
                            )}
                            aria-hidden={true}
                          />
                          {item.label}
                        </div>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuGroup>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        {/* gradient for demo purpose */}
        <div className="absolute inset-x-0 bottom-0 -mb-1 h-14 rounded-b-lg bg-gradient-to-t from-white via-white to-transparent dark:from-gray-950 dark:via-gray-950 dark:to-transparent" />
      </div>
    </div>
  )
}
