```example/filterbar-filterbar-08.tsx
import React from "react"
import { RiAddLine, RiArrowUpDownLine, RiTimeLine } from "@remixicon/react"

import { cx, focusInput } from "@/lib/utils"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/atom/DropdownMenu"

export default function Example() {
  const [sorting, setSorting] = React.useState("alphabetical")
  const [date, setDate] = React.useState("last-30-days")

  const radioItems = [
    // array-start
    { value: "alphabetical", label: "alphabetical", hint: "A-Z" },
    {
      value: "reverse-alphabetical",
      label: "Reverse alphabetical",
      hint: "Z-A",
    },
    { value: "created-at", label: "Created at", hint: "Jan-Dec" },
    // array-end
  ]

  const radioItems2 = [
    // array-start
    { value: "last-day", label: "Last day" },
    { value: "last-15-days", label: "Last 15 days" },
    { value: "last-30-days", label: "Last 30 days" },
    { value: "last-quarter", label: "Last quarter" },
    // array-end
  ]

  const selectedLabel = radioItems.find((item) => item.value === sorting)?.label

  const selectedLabel2 = radioItems2.find((item) => item.value === date)?.label

  return (
    <div className="obfuscate">
      <div className="relative">
        <div className="h-48 rounded-lg border border-gray-200 bg-white p-6 shadow-sm sm:flex sm:items-start sm:gap-x-2 dark:border-gray-800 dark:bg-gray-950">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className={cx(
                  focusInput,
                  "flex items-center gap-x-2 rounded-md border border-gray-300 bg-white py-1.5 pr-1.5 pl-3 text-sm font-medium text-gray-900 shadow-sm transition hover:bg-gray-50 focus:z-10 focus:outline-none dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 hover:dark:bg-gray-950/50",
                )}
              >
                <RiArrowUpDownLine
                  className="-ml-px size-5 shrink-0 text-gray-500 dark:text-gray-500"
                  aria-hidden={true}
                />
                Sorted by{" "}
                <span className="rounded bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-500 dark:bg-blue-400/10 dark:text-blue-500">
                  {selectedLabel}
                </span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="!min-w-[calc(var(--radix-dropdown-menu-trigger-width))]"
              align="start"
            >
              <DropdownMenuRadioGroup
                value={sorting}
                onValueChange={setSorting}
              >
                {radioItems.map((item) => (
                  <DropdownMenuRadioItem
                    key={item.value}
                    value={item.value}
                    hint={item.hint}
                  >
                    {item.label}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="mt-2 sm:mt-0">
              <button
                type="button"
                className={cx(
                  focusInput,
                  "flex items-center gap-x-2 rounded-md border border-gray-300 bg-white py-1.5 pr-1.5 pl-3 text-sm font-medium text-gray-900 shadow-sm transition hover:bg-gray-50 focus:z-10 focus:outline-none dark:border-gray-800 dark:bg-gray-950 dark:text-gray-950 hover:dark:bg-gray-950/50",
                )}
              >
                <RiTimeLine
                  className="-ml-px size-5 shrink-0 text-gray-500 dark:text-gray-500"
                  aria-hidden={true}
                />
                Last
                <span className="rounded bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-500 dark:bg-blue-400/10 dark:text-blue-500">
                  {selectedLabel2}
                </span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuRadioGroup value={date} onValueChange={setDate}>
                {radioItems2.map((item) => (
                  <DropdownMenuRadioItem key={item.value} value={item.value}>
                    {item.label}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-gray-900 dark:text-gray-50">
                <div className="flex items-center gap-x-1.5">
                  <RiAddLine
                    className="-ml-px size-5 shrink-0"
                    aria-hidden={true}
                  />
                  Custom date
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {/* gradient for demo purpose */}
        <div className="absolute inset-x-0 bottom-0 -mb-1 h-14 rounded-b-lg bg-gradient-to-t from-white via-white to-transparent dark:from-gray-950 dark:via-gray-950 dark:to-transparent" />
      </div>
    </div>
  )
}
```


```example/filterbar-filterbar-09.tsx
import React from "react"
import * as DropdownMenuPrimitives from "@radix-ui/react-dropdown-menu"
import { RiEqualizer2Line } from "@remixicon/react"

import { cx, focusInput } from "@/lib/utils"

// Customized version of Tremor Dropdown component used below, learn more: https://tremor.so/docs/inputs/dropdown-menu

const DropdownMenu = DropdownMenuPrimitives.Root
DropdownMenu.displayName = "DropdownMenu"

const DropdownMenuTrigger = DropdownMenuPrimitives.Trigger
DropdownMenuTrigger.displayName = "DropdownMenuTrigger"

const DropdownMenuGroup = DropdownMenuPrimitives.Group
DropdownMenuGroup.displayName = "DropdownMenuGroup"

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitives.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitives.Content>
>(
  (
    {
      className,
      sideOffset = 8,
      collisionPadding = 8,
      align = "end",
      loop = true,
      ...props
    },
    forwardedRef,
  ) => (
    <DropdownMenuPrimitives.Portal>
      <DropdownMenuPrimitives.Content
        ref={forwardedRef}
        className={cx(
          // base
          "relative z-50 overflow-hidden rounded-md border p-1 shadow-xl shadow-black/[2.5%]",
          // widths
          "max-w-72 min-w-48",
          // heights
          "max-h-[var(--radix-popper-available-height)]",
          // background color (custom color in dark mode used for better constrast)
          "bg-white dark:bg-gray-950",
          // text color
          "text-gray-900 dark:text-gray-50",
          // border color
          "border-gray-200 dark:border-gray-800",
          // transition
          "will-change-[transform,opacity]",
          "data-[state=closed]:animate-hide",
          "data-[side=bottom]:animate-slideDownAndFade data-[side=left]:animate-slideLeftAndFade data-[side=right]:animate-slideRightAndFade data-[side=top]:animate-slideUpAndFade",
          className,
        )}
        sideOffset={sideOffset}
        align={align}
        collisionPadding={collisionPadding}
        loop={loop}
        {...props}
      />
    </DropdownMenuPrimitives.Portal>
  ),
)

DropdownMenuContent.displayName = "DropdownMenuContent"

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitives.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitives.Label>
>(({ className, ...props }, forwardedRef) => (
  <DropdownMenuPrimitives.Label
    ref={forwardedRef}
    className={cx(
      // base
      "pb-2 text-xs tracking-wide",
      // text color
      "text-gray-500 dark:text-gray-500",
      className,
    )}
    {...props}
  />
))

DropdownMenuLabel.displayName = "DropdownMenuLabel"

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitives.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitives.Separator>
>(({ className, ...props }, forwardedRef) => (
  <DropdownMenuPrimitives.Separator
    ref={forwardedRef}
    className={cx(
      "-mx-1 my-1 h-px border-t border-gray-200 dark:border-gray-800",
      className,
    )}
    {...props}
  />
))
DropdownMenuSeparator.displayName = "DropdownMenuSeparator"

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitives.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitives.Item> & {
    shortcut?: string
    hint?: string
  }
>(({ className, shortcut, hint, children, ...props }, forwardedRef) => (
  <DropdownMenuPrimitives.Item
    ref={forwardedRef}
    className={cx(
      // base
      "group/DropdownMenuItem relative flex cursor-pointer items-center gap-x-4 rounded py-1.5 pr-1 pl-2 text-sm outline-none select-none data-[state=checked]:font-semibold",
      // text color
      "text-gray-900 dark:text-gray-50",
      // disabled
      "data-[disabled]:pointer-events-none data-[disabled]:text-gray-400 data-[disabled]:hover:bg-none dark:data-[disabled]:text-gray-600",
      // focus
      "focus-visible:bg-gray-100 focus-visible:dark:bg-gray-950",
      // hover
      "hover:bg-gray-100 hover:dark:bg-gray-950",
      className,
    )}
    {...props}
  >
    {children}
    {hint && (
      <span className={cx("ml-auto text-sm text-gray-400 dark:text-gray-600")}>
        {hint}
      </span>
    )}
    {shortcut && (
      <span
        className={cx(
          "ml-auto text-sm tracking-widest text-gray-400 dark:text-gray-600",
        )}
      >
        {shortcut}
      </span>
    )}
  </DropdownMenuPrimitives.Item>
))
DropdownMenuItem.displayName = "DropdownMenuItem"

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitives.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitives.CheckboxItem> & {
    shortcut?: string
    hint?: string
  }
>(
  (
    { className, hint, shortcut, children, checked, ...props },
    forwardedRef,
  ) => (
    <DropdownMenuPrimitives.CheckboxItem
      ref={forwardedRef}
      className={cx(
        // base
        "relative flex cursor-pointer items-center gap-x-2 rounded-md border px-2 py-1.5 text-sm font-medium outline-none select-none data-[state=checked]:font-semibold sm:text-xs",
        // text color
        "text-gray-400 data-[state=checked]:text-gray-900 dark:text-gray-600 data-[state=checked]:dark:text-gray-50",
        // disabled
        "data-[disabled]:pointer-events-none data-[disabled]:text-gray-400 data-[disabled]:hover:bg-none dark:data-[disabled]:text-gray-600",
        // border
        "border-gray-200 dark:border-gray-800",
        // focus
        "focus-visible:bg-gray-100 focus-visible:dark:bg-gray-950",
        // hover
        "hover:bg-gray-100 hover:dark:bg-gray-950",
        className,
      )}
      checked={checked}
      {...props}
    >
      {children}
    </DropdownMenuPrimitives.CheckboxItem>
  ),
)

DropdownMenuCheckboxItem.displayName = "DropdownMenuCheckboxItem"

export default function Example() {
  const [showProduct, setShowProduct] = React.useState(true)
  const [showCreated, setShowCreated] = React.useState(true)
  const [showUpdated, setShowUpdated] = React.useState(false)
  const [showType, setShowType] = React.useState(false)
  const [showTags, setShowTags] = React.useState(true)
  const [showStatus, setShowStatus] = React.useState(true)

  return (
    <div className="obfuscate">
      <div className="relative">
        <div className="flex h-48 items-start justify-end rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className={cx(
                  focusInput,
                  "flex items-center gap-x-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm transition hover:bg-gray-50 focus:z-10 focus:outline-none dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 hover:dark:bg-gray-950/50",
                )}
              >
                <RiEqualizer2Line
                  className="-ml-px size-5 shrink-0"
                  aria-hidden={true}
                />
                Display
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <div className="px-3 py-3">
                  <DropdownMenuLabel>Display properties</DropdownMenuLabel>
                  <div className="flex flex-wrap gap-1.5">
                    <DropdownMenuCheckboxItem
                      checked={showProduct}
                      onCheckedChange={setShowProduct}
                    >
                      item_id
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={showCreated}
                      onCheckedChange={setShowCreated}
                    >
                      created_at
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={showUpdated}
                      onCheckedChange={setShowUpdated}
                    >
                      updated_at
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={showType}
                      onCheckedChange={setShowType}
                    >
                      type
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={showTags}
                      onCheckedChange={setShowTags}
                    >
                      tags
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={showStatus}
                      onCheckedChange={setShowStatus}
                    >
                      status
                    </DropdownMenuCheckboxItem>
                  </div>
                </div>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {/* gradient for demo purpose */}
        <div className="absolute inset-x-0 bottom-0 -mb-1 h-14 rounded-b-lg bg-gradient-to-t from-white via-white to-transparent dark:from-gray-950 dark:via-gray-950 dark:to-transparent" />
      </div>
    </div>
  )
}
```


```example/filterbar-filterbar-04.tsx
import { cx, focusInput } from "@/lib/utils"

import { Tooltip } from "@/atom/Tooltip"

function formatDate(date: any) {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

const options = [
  // array-start
  {
    label: "Today",
    date: formatDate(new Date()),
  },
  {
    label: "7D",
    date: `${formatDate(new Date(new Date().setDate(new Date().getDate() - 7)))} – ${formatDate(new Date())} `,
  },
  {
    label: "30D",
    date: `${formatDate(new Date(new Date().setDate(new Date().getDate() - 30)))} – ${formatDate(new Date())}`,
  },
  {
    label: "3M",
    date: `${formatDate(new Date(new Date().setMonth(new Date().getMonth() - 3)))} – ${formatDate(new Date())}`,
  },
  {
    label: "6M",
    date: `${formatDate(new Date(new Date().setMonth(new Date().getMonth() - 6)))} – ${formatDate(new Date())}`,
  },
  // array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="relative">
        <div className="flex h-48 items-start justify-end rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <div className="inline-flex items-center rounded-md text-sm font-medium shadow-sm">
            {options.map((item, index) => (
              <Tooltip
                side="top"
                showArrow={true}
                className="z-50"
                sideOffset={8}
                content={item.date}
                key={index}
                triggerAsChild={true}
              >
                <button
                  type="button"
                  className={cx(
                    index === 0
                      ? "rounded-l-md"
                      : index === options.length - 1
                        ? "-ml-px rounded-r-md"
                        : "-ml-px",
                    focusInput,
                    "border border-gray-300 bg-white px-4 py-2 text-gray-900 hover:bg-gray-50 focus:z-10 focus:outline-none dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 hover:dark:bg-gray-950/50",
                  )}
                >
                  {item.label}
                </button>
              </Tooltip>
            ))}
          </div>
        </div>
        {/* gradient for demo purpose */}
        <div className="absolute inset-x-0 bottom-0 -mb-1 h-14 rounded-b-lg bg-gradient-to-t from-white via-white to-transparent dark:from-gray-950 dark:via-gray-950 dark:to-transparent" />
      </div>
    </div>
  )
}
```


```example/filterbar-filterbar-10.tsx
import React from "react"
import { RiArrowDownSLine, RiCalendar2Line } from "@remixicon/react"

import { cx, focusInput } from "@/lib/utils"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/atom/DropdownMenu"

const datepickerCategories = [
  // array-start
  { value: "last-day", label: "Last day" },
  { value: "last-15-days", label: "Last 15 days" },
  { value: "last-30-days", label: "Last 30 days" },
  { value: "last-60-days", label: "Last 60 days" },
  { value: "last-quarter", label: "Last quarter" },
  // array-end
]

export default function Example() {
  const [selectedLabel, setSelectedLabel] = React.useState("Last 30 days")

  const handleItemClick = (label: string) => {
    setSelectedLabel(label)
  }
  return (
    <div className="obfuscate">
      <div className="relative">
        <div className="rounded-lg border border-gray-200 bg-white pb-20 shadow-sm md:h-52 dark:border-gray-800 dark:bg-gray-950">
          <div className="flex justify-end gap-x-4 border-b border-gray-200 p-6 dark:border-gray-800">
            <div className="inline-flex items-center rounded-md text-sm font-medium shadow-sm">
              <span className="rounded-l-md border border-gray-300 bg-white px-3 py-2 font-medium text-gray-900 focus:z-10 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50">
                <RiCalendar2Line
                  className="size-5 shrink-0 text-gray-500 dark:text-gray-500"
                  aria-hidden={true}
                />
              </span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    type="button"
                    className={cx(
                      focusInput,
                      "-ml-px flex items-center gap-x-2 rounded-r-md border border-gray-300 bg-white px-4 py-2 font-medium text-gray-900 transition-colors hover:bg-gray-50 focus:z-10 focus:outline-none dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 hover:dark:bg-gray-950/50",
                    )}
                  >
                    {selectedLabel}
                    <RiArrowDownSLine
                      className="-mr-1 size-5 shrink-0"
                      aria-hidden={true}
                    />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="!min-w-[calc(var(--radix-dropdown-menu-trigger-width))]">
                  {datepickerCategories.map((item) => (
                    <DropdownMenuItem
                      key={item.value}
                      onClick={() => handleItemClick(item.label)}
                    >
                      {item.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
        {/* gradient for demo purpose */}
        <div className="absolute inset-x-0 bottom-0 -mb-1 h-14 rounded-b-lg bg-gradient-to-t from-white via-white to-transparent dark:from-gray-950 dark:via-gray-950 dark:to-transparent" />
      </div>
    </div>
  )
}
```


```example/filterbar-filterbar-11.tsx
import {
  RiAppleFill,
  RiGoogleFill,
  RiMastercardLine,
  RiVisaFill,
} from "@remixicon/react"

import { cx } from "@/lib/utils"

import { DateRangePicker } from "@/atom/DatePicker"
import { Label } from "@/atom/Label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/atom/Select"

const countries = [
  // array-start
  {
    value: "switzerland",
    label: "Switzerland",
  },
  {
    value: "germany",
    label: "Germany",
  },
  {
    value: "austria",
    label: "Austria",
  },
  {
    value: "italy",
    label: "Italy",
  },
  {
    value: "france",
    label: "France",
  },
  {
    value: "denmark",
    label: "Denmark",
  },
  {
    value: "spain",
    label: "Spain",
  },
  {
    value: "united-states",
    label: "United States",
  },
  // array-end
]

const status = [
  // array-start
  {
    value: "completed",
    label: "Completed",
    color: "bg-emerald-600 dark:bg-emerald-500",
  },
  {
    value: "processing",
    label: "Processing",
    color: "bg-gray-400 dark:bg-orange-600",
  },
  {
    value: "failed",
    label: "Failed",
    color: "bg-red-500 dark:bg-red-500",
  },
  {
    value: "refund-requested",
    label: "Refund requested",
    color: "bg-violet-500 dark:bg-violet-500",
  },
  // array-end
]

const payment = [
  // array-start
  {
    value: "all",
    label: "All",
    disabled: false,
  },
  {
    value: "visa-card",
    label: "Visa card",
    disabled: false,
    icon: RiVisaFill,
  },
  {
    value: "master-card",
    label: "Mastercard",
    disabled: false,
    icon: RiMastercardLine,
  },
  {
    value: "apple-pay",
    label: "Apple pay",
    disabled: false,
    icon: RiAppleFill,
  },
  {
    value: "google-pay",
    label: "Google pay",
    disabled: true,
    icon: RiGoogleFill,
  },
  // array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="relative">
        <div className="rounded-lg border border-gray-200 bg-white pb-20 shadow-sm md:h-52 dark:border-gray-800 dark:bg-gray-950">
          <div className="grid grid-cols-1 gap-4 border-b border-gray-200 p-6 sm:grid-cols-2 md:grid-cols-4 dark:border-gray-800">
            <div className="w-full">
              <Label htmlFor="date_1" className="font-medium">
                Date
              </Label>
              <DateRangePicker
                id="date_1"
                defaultValue={{
                  from: new Date(new Date().setDate(new Date().getDate() - 10)),
                  to: new Date(),
                }}
                className="mt-2"
              />
            </div>
            <div className="w-full">
              <Label htmlFor="country_1" className="font-medium">
                Country
              </Label>
              <Select defaultValue="switzerland">
                <SelectTrigger
                  id="country_1"
                  name="country_1"
                  className="mt-2 sm:w-full"
                >
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="w-full">
              <Label htmlFor="status_1" className="font-medium">
                Status
              </Label>
              <Select defaultValue="completed">
                <SelectTrigger
                  id="status_1"
                  name="status_1"
                  className="mt-2 sm:w-full"
                >
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {status.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      <div className="flex items-center gap-x-2.5">
                        <span
                          className={cx(
                            item.color,
                            "inline-block size-2 shrink-0 rounded-full",
                          )}
                          aria-hidden={true}
                        />
                        {item.label}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="w-full">
              <Label htmlFor="payment_method" className="font-medium">
                Payment method
              </Label>
              <Select defaultValue="all">
                <SelectTrigger
                  id="payment_method"
                  name="payment_method"
                  className="mt-2 sm:w-full"
                >
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {payment.map((item) => (
                    <SelectItem
                      key={item.value}
                      value={item.value}
                      disabled={item.disabled}
                    >
                      <div className="flex items-center gap-x-2">
                        {item.icon ? (
                          <item.icon
                            className={cx(
                              item.disabled
                                ? "text-gray-400/50 dark:text-gray-600/50"
                                : "text-gray-700 dark:text-gray-300",
                              "size-4 shrink-0",
                            )}
                            aria-hidden={true}
                          />
                        ) : null}
                        {item.label}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        {/* gradient for demo purpose */}
        <div className="absolute inset-x-0 bottom-0 -mb-1 h-14 rounded-b-lg bg-gradient-to-t from-white via-white to-transparent dark:from-gray-950 dark:via-gray-950 dark:to-transparent" />
      </div>
    </div>
  )
}
```


```example/filterbar-filterbar-05.tsx
import { cx, focusInput } from "@/lib/utils"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/atom/Select"
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

const dataSelect = [
  // array-start
  {
    value: "week-to-date",
    label: "Week to Date",
  },
  {
    value: "month-to-date",
    label: "Month to Date",
  },
  {
    value: "year-to-date",
    label: "Year to Date",
  },
  // array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="relative">
        <div className="flex h-48 items-start justify-end rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <div className="hidden items-center rounded-md text-sm font-medium shadow-sm sm:inline-flex">
            {data.map((item, index) => (
              <Tooltip
                side="top"
                showArrow={true}
                className="z-50"
                content={item.tooltipText}
                triggerAsChild={true}
                key={index}
              >
                <button
                  type="button"
                  className={cx(
                    index === 0 ? "rounded-l-md" : "-ml-px",
                    focusInput,
                    "border border-gray-300 bg-white px-4 py-2 text-gray-900 hover:bg-gray-50 focus:z-10 focus:outline-none dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 hover:dark:bg-gray-950/50",
                  )}
                >
                  {item.buttonText}
                </button>
              </Tooltip>
            ))}
            <Select>
              <SelectTrigger className="-ml-px w-fit rounded-none rounded-r-md border-gray-300 shadow-none dark:border-gray-800">
                <SelectValue placeholder="XTD" />
              </SelectTrigger>
              <SelectContent className="border-gray-200 dark:border-gray-800">
                {dataSelect.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="inline-flex items-center rounded-md text-sm font-medium shadow-sm sm:hidden">
            {data.slice(0, 2).map((item, index) => (
              <Tooltip
                side="top"
                showArrow={true}
                className="z-50"
                sideOffset={8}
                content={item.tooltipText}
                triggerAsChild={true}
                key={index}
              >
                <button
                  key={index}
                  type="button"
                  className={cx(
                    index === 0 ? "rounded-l-md" : "-ml-px",
                    focusInput,
                    "border border-gray-300 bg-white px-4 py-2 text-gray-900 hover:bg-gray-50 focus:z-10 focus:outline-none dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 hover:dark:bg-gray-950/50",
                  )}
                >
                  {item.buttonText}
                </button>
              </Tooltip>
            ))}
            <Select>
              <SelectTrigger className="-ml-px w-fit rounded-none rounded-r-md border-gray-300 shadow-none dark:border-gray-800">
                <SelectValue placeholder="XTD" />
              </SelectTrigger>
              <SelectContent align="end">
                {dataSelect.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        {/* gradient for demo purpose */}
        <div className="absolute inset-x-0 bottom-0 -mb-1 h-14 rounded-b-lg bg-gradient-to-t from-white via-white to-transparent dark:from-gray-950 dark:via-gray-950 dark:to-transparent" />
      </div>
    </div>
  )
}
```


```example/filterbar-filterbar-13.tsx
import { RiFilter2Line } from "@remixicon/react"

import { cx, focusInput } from "@/lib/utils"

import { Button } from "@/atom/Button"
import { DateRangePicker } from "@/atom/DatePicker"
import { Input } from "@/atom/Input"
import { Label } from "@/atom/Label"
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/atom/Popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/atom/Select"

const categories = [
  // array-start
  {
    value: "booking-amount",
    label: "Booking amount",
  },
  {
    value: "transaction-id",
    label: "Transaction ID",
  },
  {
    value: "customer-acquisition-costs",
    label: "Acquisition costs",
  },
  {
    value: "number-of-guests",
    label: "Number of guests",
  },
  // array-end
]

const conditions = [
  // array-start
  {
    value: "is-equal-to",
    label: "Is equal to",
  },
  {
    value: "is-not-equal-to",
    label: "Is not equal to",
  },
  {
    value: "is-greater-than",
    label: "Is greater than",
  },
  {
    value: "is-less-than",
    label: "Is less than",
  },
  {
    value: "is-greater-than-or-equal-to",
    label: "Is less than or equal to",
  },
  // array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="relative">
        <div className="rounded-lg border border-gray-200 bg-white pb-20 shadow-sm md:h-52 dark:border-gray-800 dark:bg-gray-950">
          <div className="grid grid-cols-1 gap-4 border-b border-gray-200 p-6 sm:grid-cols-2 lg:grid-cols-4 dark:border-gray-800">
            <div className="w-full">
              <Label htmlFor="date_3" className="font-medium">
                Date
              </Label>
              <DateRangePicker
                defaultValue={{
                  from: new Date(new Date().setDate(new Date().getDate() - 10)),
                  to: new Date(),
                }}
                id="date_3"
                className="mt-2"
              />
            </div>
            <div className="w-full">
              <Label className="font-medium">Filter(s)</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    type="button"
                    className={cx(
                      focusInput,
                      "mt-2 flex w-full items-center justify-between gap-x-2 rounded-md border border-gray-300 bg-white py-1.5 pr-2 pl-3 font-medium text-gray-900 shadow-sm hover:bg-gray-50 focus:z-10 focus:outline-none sm:text-sm lg:w-fit dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 hover:dark:bg-gray-950/50",
                    )}
                  >
                    <span className="flex items-center gap-x-2">
                      <RiFilter2Line
                        className="-ml-1 size-5 shrink-0 text-gray-500 dark:text-gray-500"
                        aria-hidden={true}
                      />
                      Filter transactions
                    </span>
                    <span className="flex items-center justify-center rounded bg-blue-500 px-1.5 py-0.5 text-white dark:bg-blue-400/10 dark:text-blue-500">
                      0
                    </span>
                  </button>
                </PopoverTrigger>
                <PopoverContent
                  align="start"
                  className="!min-w-[calc(var(--radix-popover-trigger-width))] !p-0 sm:w-72"
                >
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-2 p-3">
                      <div className="flex items-center justify-between space-x-2">
                        <Label
                          htmlFor="filter_3"
                          className="font-medium whitespace-nowrap"
                        >
                          Set Filter for
                        </Label>
                        <Select defaultValue="booking-amount">
                          <SelectTrigger
                            id="filter_3"
                            name="filter_3"
                            className="w-36 bg-gray-100 shadow-none dark:bg-gray-800"
                          >
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.map((item) => (
                              <SelectItem key={item.value} value={item.value}>
                                {item.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label
                          htmlFor="condition_2"
                          className="hidden font-medium"
                        >
                          Condition
                        </Label>
                        <Select defaultValue="is-greater-than">
                          <SelectTrigger id="condition_2" name="condition_2">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {conditions.map((item) => (
                              <SelectItem key={item.value} value={item.value}>
                                {item.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="value_2" className="hidden font-medium">
                          value
                        </Label>
                        <Input
                          id="value_2"
                          name="value_2"
                          type="text"
                          placeholder="Enter value..."
                        />
                      </div>
                      <Button
                        variant="secondary"
                        className="w-full border-dashed text-gray-500 shadow-none hover:text-gray-700 dark:text-gray-50 hover:dark:text-gray-300"
                      >
                        Add filter
                      </Button>
                    </div>
                    <div className="border-t border-gray-200 p-3 dark:border-gray-800">
                      <PopoverClose asChild>
                        <Button className="w-full" variant="secondary">
                          Clear
                        </Button>
                      </PopoverClose>
                      <Button className="mt-2 w-full" type="submit">
                        Apply
                      </Button>
                    </div>
                  </form>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
        {/* gradient for demo purpose */}
        <div className="absolute inset-x-0 bottom-0 -mb-1 h-14 rounded-b-lg bg-gradient-to-t from-white via-white to-transparent dark:from-gray-950 dark:via-gray-950 dark:to-transparent" />
      </div>
    </div>
  )
}
```


```example/filterbar-filterbar-07.tsx
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
```


```example/filterbar-filterbar-06.tsx
import { RiArrowDownSLine, RiStackLine } from "@remixicon/react"

import { cx } from "@/lib/utils"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/atom/DropdownMenu"

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
```


```example/filterbar-filterbar-12.tsx
import {
  RiDatabase2Line,
  RiFilter2Line,
  RiInformationLine,
  RiMapPin2Line,
  RiPriceTag3Line,
} from "@remixicon/react"

import { cx, focusInput } from "@/lib/utils"

import { Button } from "@/atom/Button"
import { DateRangePicker } from "@/atom/DatePicker"
import { Input } from "@/atom/Input"
import { Label } from "@/atom/Label"
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/atom/Popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/atom/Select"

const categories = [
  // array-start
  {
    value: "address",
    label: "Address",
    icon: RiMapPin2Line,
  },
  {
    value: "product_id",
    label: "Product_id",
    icon: RiPriceTag3Line,
  },
  {
    value: "amount",
    label: "Amount",
    icon: RiDatabase2Line,
  },
  {
    value: "status",
    label: "Status",
    icon: RiInformationLine,
  },
  // array-end
]

const conditions = [
  // array-start
  {
    value: "contains",
    label: "Contains",
  },
  {
    value: "not-contains",
    label: "Not contains",
  },
  {
    value: "equals",
    label: "Equals",
  },
  {
    value: "is-greater-or-equal-than",
    label: "Is greater or equal than",
  },
  {
    value: "is-smaller-than",
    label: "Is smaller than",
  },
  // array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="relative">
        <div className="rounded-lg border border-gray-200 bg-white pb-20 shadow-sm md:h-52 dark:border-gray-800 dark:bg-gray-950">
          <div className="grid grid-cols-1 gap-4 border-b border-gray-200 p-6 sm:grid-cols-2 lg:grid-cols-4 dark:border-gray-800">
            <div className="w-full">
              <Label htmlFor="date_2" className="font-medium">
                Date
              </Label>
              <DateRangePicker
                defaultValue={{
                  from: new Date(new Date().setDate(new Date().getDate() - 10)),
                  to: new Date(),
                }}
                id="date_2"
                className="mt-2"
              />
            </div>
            <div className="w-full">
              <Label htmlFor="filter_2" className="font-medium">
                Filter(s)
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    type="button"
                    className={cx(
                      focusInput,
                      "mt-2 flex w-full items-center gap-x-2 rounded-md border border-gray-300 bg-white px-4 py-2 font-medium text-gray-900 shadow-sm transition hover:bg-gray-50 focus:z-10 focus:outline-none sm:text-sm lg:w-fit dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 hover:dark:bg-gray-950/50",
                    )}
                  >
                    <RiFilter2Line
                      className="-ml-1 size-5 shrink-0 text-gray-500 dark:text-gray-500"
                      aria-hidden={true}
                    />
                    Filter transactions
                  </button>
                </PopoverTrigger>
                <PopoverContent
                  align="start"
                  className="!min-w-[calc(var(--radix-popover-trigger-width))] !p-0"
                >
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="flex flex-col items-end gap-4 p-3 sm:flex-row">
                      <div className="flex w-full flex-col gap-2">
                        <Label htmlFor="category" className="font-medium">
                          Where
                        </Label>
                        <Select defaultValue="address">
                          <SelectTrigger name="category" id="category">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.map((item) => (
                              <SelectItem key={item.value} value={item.value}>
                                <div className="flex items-center gap-x-2">
                                  {item.label}
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex w-full flex-col gap-2">
                        <Label htmlFor="condition" className="font-medium">
                          Condition
                        </Label>
                        <Select defaultValue="contains">
                          <SelectTrigger id="condition" name="condition">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            {conditions.map((item) => (
                              <SelectItem key={item.value} value={item.value}>
                                {item.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex w-full flex-col gap-2">
                        <Label htmlFor="value" className="hidden font-medium">
                          value
                        </Label>
                        <Input
                          id="value"
                          name="value"
                          type="text"
                          placeholder="Enter value..."
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-between gap-2 border-t border-gray-200 p-3 sm:flex-row dark:border-gray-800">
                      <Button className="w-full sm:w-fit" variant="light">
                        Add Filter
                      </Button>
                      <div className="flex w-full flex-col items-center gap-2 sm:w-fit sm:flex-row">
                        <PopoverClose asChild>
                          <Button
                            className="w-full sm:w-fit"
                            variant="secondary"
                          >
                            Clear
                          </Button>
                        </PopoverClose>
                        <Button className="w-full sm:w-fit" type="submit">
                          Apply
                        </Button>
                      </div>
                    </div>
                  </form>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
        {/* gradient for demo purpose */}
        <div className="absolute inset-x-0 bottom-0 -mb-1 h-14 rounded-b-lg bg-gradient-to-t from-white via-white to-transparent dark:from-gray-950 dark:via-gray-950 dark:to-transparent" />
      </div>
    </div>
  )
}
```


```example/filterbar-filterbar-16.tsx
import React from "react"
import { RiAddLine, RiArrowDownSLine } from "@remixicon/react"

import { cx, focusRing } from "@/lib/utils"

import { Button } from "@/atom/Button"
import { Checkbox } from "@/atom/Checkbox"
import { Label } from "@/atom/Label"
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/atom/Popover"

interface DataTableFilterProps {
  column: any
  title?: string
  options?: {
    label: string
    value: string
  }[]
  formatter?: (value: any) => string
}

const ColumnFiltersLabel = ({
  columnFilterLabels,
  className,
}: {
  columnFilterLabels: string[] | undefined
  className?: string
}) => {
  if (!columnFilterLabels) return null

  if (columnFilterLabels.length < 3) {
    return (
      <span className={cx("truncate", className)}>
        {columnFilterLabels.map((value, index) => (
          <span
            key={value}
            className={cx("font-semibold text-blue-600 dark:text-blue-400")}
          >
            {value}
            {index < columnFilterLabels.length - 1 && ", "}
          </span>
        ))}
      </span>
    )
  }

  return (
    <>
      <span
        className={cx(
          "font-semibold text-blue-600 dark:text-blue-400",
          className,
        )}
      >
        {columnFilterLabels[0]} and {columnFilterLabels.length - 1} more
      </span>
    </>
  )
}

export function DataTableFilter({
  column,
  title,
  options,
  formatter = (value) => value.toString(),
}: DataTableFilterProps) {
  const columnFilters = column?.getFilterValue() as string[] | undefined

  const [selectedValues, setSelectedValues] = React.useState<string[]>(
    columnFilters || [],
  )

  const columnFilterLabels = React.useMemo(() => {
    if (!selectedValues || selectedValues.length === 0) return undefined
    return selectedValues.map(formatter)
  }, [selectedValues, formatter])

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className={cx(
            "flex w-full items-center gap-x-1.5 rounded-md border border-gray-300 px-2 py-1.5 font-medium whitespace-nowrap text-gray-600 hover:bg-gray-50 sm:w-fit sm:text-xs dark:border-gray-700 dark:text-gray-400 hover:dark:bg-gray-900",
            selectedValues.length > 0 ? "" : "border-dashed",
            focusRing,
          )}
        >
          <span
            aria-hidden="true"
            onClick={(e) => {
              if (selectedValues.length > 0) {
                e.stopPropagation()
                column?.setFilterValue([])
                setSelectedValues([])
              }
            }}
          >
            <RiAddLine
              className={cx(
                "-ml-px size-5 shrink-0 transition sm:size-4",
                selectedValues.length > 0 && "rotate-45 hover:text-red-500",
              )}
              aria-hidden="true"
            />
          </span>
          {columnFilterLabels && columnFilterLabels.length > 0 ? (
            <span>{title}</span>
          ) : (
            <span className="w-full text-left sm:w-fit">{title}</span>
          )}
          {columnFilterLabels && columnFilterLabels.length > 0 && (
            <span
              className="h-4 w-px bg-gray-300 dark:bg-gray-700"
              aria-hidden="true"
            />
          )}
          <ColumnFiltersLabel
            columnFilterLabels={columnFilterLabels}
            className="w-full text-left sm:w-fit"
          />
          <RiArrowDownSLine
            className="size-5 shrink-0 text-gray-500 sm:size-4"
            aria-hidden="true"
          />
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        sideOffset={7}
        className="max-w-[calc(var(--radix-popover-trigger-width))] min-w-[calc(var(--radix-popover-trigger-width))] sm:max-w-56 sm:min-w-56"
        onInteractOutside={() => {
          if (columnFilters?.length === 0) {
            column?.setFilterValue([])
            setSelectedValues([])
          }
        }}
      >
        <form
          className="overflow-visible"
          onSubmit={(e) => {
            e.preventDefault()
            column?.setFilterValue(selectedValues)
          }}
        >
          <div className="space-y-2">
            <div>
              <Label className="text-base font-medium sm:text-sm">
                Filter by {title}
              </Label>
              <div className="mt-2 space-y-2 overflow-x-visible overflow-y-auto py-0.5 pl-1 sm:max-h-36">
                {options?.map((option) => (
                  <div key={option.value} className="flex items-center gap-2">
                    <Checkbox
                      id={option.value}
                      checked={selectedValues.includes(option.value)}
                      onCheckedChange={(checked) => {
                        setSelectedValues((prev) => {
                          if (checked) {
                            return [...prev, option.value]
                          } else {
                            return prev.filter(
                              (value) => value !== option.value,
                            )
                          }
                        })
                      }}
                    />
                    <Label
                      htmlFor={option.value}
                      className="text-base sm:text-sm"
                    >
                      {option.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            <PopoverClose className="w-full" asChild>
              <Button type="submit" className="w-full sm:py-1">
                Apply
              </Button>
            </PopoverClose>
            {columnFilterLabels && columnFilterLabels.length > 0 && (
              <Button
                variant="secondary"
                className="w-full sm:py-1"
                type="button"
                onClick={() => {
                  column?.setFilterValue([])
                  setSelectedValues([])
                }}
              >
                Reset
              </Button>
            )}
          </div>
        </form>
      </PopoverContent>
    </Popover>
  )
}

const departmentOptions = [
  { label: "Engineering", value: "Engineering" },
  { label: "Marketing", value: "Marketing" },
  { label: "Sales", value: "Sales" },
  { label: "Human Resources", value: "Human Resources" },
  { label: "Finance", value: "Finance" },
]

const CheckboxFilterExample = () => {
  const [departmentFilter, setDepartmentFilter] = React.useState<string[]>([])

  const departmentColumn = {
    getFilterValue: () => departmentFilter,
    setFilterValue: (value: string[]) => {
      setDepartmentFilter(value)
    },
  }

  return (
    <div className="obfuscate">
      <div className="relative">
        <div className="rounded-lg border border-gray-200 bg-white pb-20 shadow-sm md:h-52 dark:border-gray-800 dark:bg-gray-950">
          <div className="border-b border-gray-200 p-4 dark:border-gray-800">
            <DataTableFilter
              column={departmentColumn}
              title="Department"
              options={departmentOptions}
            />
          </div>
          {/* gradient for demo purpose */}
          <div className="absolute inset-x-0 bottom-0 -mb-1 h-14 rounded-b-lg bg-gradient-to-t from-white via-white to-transparent dark:from-gray-950 dark:via-gray-950 dark:to-transparent" />
        </div>
      </div>
    </div>
  )
}

export default CheckboxFilterExample
```


```example/filterbar-filterbar-02.tsx
import { cx } from "@/lib/utils"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectGroupLabel,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/atom/Select"

const data = [
  // array-start
  {
    value: "emma-callister",
    label: "Emma Callister",
    initials: "E",
    color: "bg-blue-500",
  },
  {
    value: "john-mayer",
    label: "John Mayer",
    initials: "J",
    color: "bg-cyan-500",
  },
  {
    value: "lena-stone",
    label: "Lena Stone",
    initials: "L",
    color: "bg-purple-500",
  },
  // array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="relative">
        <div className="flex h-48 items-start justify-end rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <Select defaultValue="emma-callister">
            <SelectTrigger className="border-gray-300 sm:w-52 dark:border-gray-800">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent className="border-gray-200 dark:border-gray-800">
              <SelectGroup>
                <SelectGroupLabel>Switch account</SelectGroupLabel>
                {data.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    <div className="flex w-full items-center gap-x-2.5">
                      <span
                        className={cx(
                          item.color,
                          "flex size-6 items-center justify-center rounded-md p-2 text-xs font-medium text-white",
                        )}
                        aria-hidden={true}
                      >
                        {item.initials}
                      </span>
                      {item.label}
                    </div>
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        {/* gradient for demo purpose */}
        <div className="absolute inset-x-0 bottom-0 -mb-1 h-14 rounded-b-lg bg-gradient-to-t from-white via-white to-transparent dark:from-gray-950 dark:via-gray-950 dark:to-transparent" />
      </div>
    </div>
  )
}
```


```example/filterbar-filterbar-03.tsx
import type { SVGProps } from "react"
import {
  RiBarChartFill,
  RiBubbleChartFill,
  RiDonutChartFill,
  RiLineChartLine,
} from "@remixicon/react"

import { cx } from "@/lib/utils"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/atom/Select"
import { Tooltip } from "@/atom/Tooltip"

const BarChartThumbnail = (props: SVGProps<SVGSVGElement>) => (
  // array-start
  <svg className="h-14 w-full" fill="none" viewBox="0 0 133 53" {...props}>
    <line x2={133} y1={0.625} y2={0.625} stroke="#374151" strokeWidth={0.75} />
    <line
      x2={133}
      y1={26.625}
      y2={26.625}
      stroke="#374151"
      strokeWidth={0.75}
    />
    <line
      x2={133}
      y1={52.625}
      y2={52.625}
      stroke="#374151"
      strokeWidth={0.75}
    />
    <rect
      width={14.5062}
      height={41.3636}
      x={5}
      y={11.0908}
      fill="url(#paint0_linear_9395_3596)"
    />
    <rect
      width={14.509}
      height={47.9711}
      x={26.5459}
      y={4.4834}
      fill="url(#paint1_linear_9395_3596)"
    />
    <rect
      width={14.509}
      height={37.8719}
      x={48.0908}
      y={14.5825}
      fill="url(#paint2_linear_9395_3596)"
    />
    <rect
      width={14.509}
      height={47.9711}
      x={69.6377}
      y={4.4834}
      fill="url(#paint3_linear_9395_3596)"
    />
    <rect
      width={14.6429}
      height={37.8182}
      x={90.9043}
      y={14.6362}
      fill="url(#paint4_linear_9395_3596)"
    />
    <rect
      width={14.6429}
      height={48.4545}
      x={113.356}
      y={4}
      fill="url(#paint5_linear_9395_3596)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_9395_3596"
        x1={12.2531}
        x2={12.2531}
        y1={11.0908}
        y2={52.4544}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3B82F6" />
        <stop offset={1} stopColor="#234C90" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_9395_3596"
        x1={33.8004}
        x2={33.8004}
        y1={4.4834}
        y2={52.4545}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3B82F6" />
        <stop offset={1} stopColor="#234C90" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_9395_3596"
        x1={55.3453}
        x2={55.3453}
        y1={14.5825}
        y2={52.4544}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3B82F6" />
        <stop offset={1} stopColor="#234C90" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_9395_3596"
        x1={76.8922}
        x2={76.8922}
        y1={4.4834}
        y2={52.4545}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3B82F6" />
        <stop offset={1} stopColor="#234C90" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_9395_3596"
        x1={98.2257}
        x2={98.2257}
        y1={14.6362}
        y2={52.4544}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3B82F6" />
        <stop offset={1} stopColor="#234C90" />
      </linearGradient>
      <linearGradient
        id="paint5_linear_9395_3596"
        x1={120.678}
        x2={120.678}
        y1={4}
        y2={52.4545}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3B82F6" />
        <stop offset={1} stopColor="#234C90" />
      </linearGradient>
    </defs>
  </svg>
  // array-end
)

const LineChartThumbnail = (props: SVGProps<SVGSVGElement>) => (
  // array-start
  <svg fill="none" viewBox="0 0 133 53" {...props}>
    <line x2={133} y1={0.625} y2={0.625} stroke="#374151" strokeWidth={0.75} />
    <line
      x2={133}
      y1={26.625}
      y2={26.625}
      stroke="#374151"
      strokeWidth={0.75}
    />
    <line
      x2={133}
      y1={52.625}
      y2={52.625}
      stroke="#374151"
      strokeWidth={0.75}
    />
    <path
      stroke="url(#paint0_linear_9395_3661)"
      strokeWidth={1.5}
      d="M5 25.2105L6.75153 26.4229C6.80427 26.4594 6.842 26.5138 6.85772 26.576L8.61604 33.5308C8.64581 33.6485 8.75175 33.731 8.8732 33.731H10.4172C10.4711 33.731 10.5238 33.7474 10.5681 33.7781L12.1824 34.8955C12.2732 34.9584 12.3935 34.9584 12.4843 34.8955L14.0804 33.7907C14.1358 33.7523 14.1746 33.6943 14.1887 33.6284L15.9549 25.42C15.9812 25.2978 16.0893 25.2105 16.2142 25.2105H17.8333L19.4678 25.0489C19.5855 25.0373 19.6805 24.9493 19.7088 24.8344C19.9968 23.6677 21.0234 21.8591 21.5 21.5848C21.9854 21.3055 22.5543 27.6157 23.2522 27.5981C23.309 27.5967 23.3638 27.5673 23.4206 27.5673C23.6377 27.5673 24.2392 27.5673 25.1667 27.5673C26.241 27.5673 26.501 27.5673 26.9271 27.5673C26.9747 27.5673 27.0216 27.5801 27.0626 27.6044L28.7708 28.6178C28.8117 28.6421 28.8585 28.655 28.9061 28.655H30.6085C30.6468 28.655 30.6849 28.6468 30.7193 28.63C31.4731 28.2601 31.8841 27.5673 32.5 27.5673C33.0815 27.5673 33.3909 27.5673 34.1368 27.5673C34.2534 27.5673 34.3567 27.4912 34.3908 27.3797L36.1667 21.5848L37.7965 15.1381C37.8599 14.8877 38.2073 14.8662 38.3009 15.1069L39.821 19.0151C39.8292 19.0361 39.84 19.056 39.8532 19.0743L41.6667 21.5848L43.5 24.1228L45.3333 27.5673L47.0873 29.9953C47.1371 30.0644 47.2171 30.1053 47.3023 30.1053H48.8644C48.9496 30.1053 49.0295 30.0644 49.0794 29.9953L50.7019 27.7492C50.7778 27.6442 50.9184 27.6093 51.0345 27.6667L52.6667 28.4737L54.2203 29.2418C54.3669 29.3143 54.5435 29.2381 54.5914 29.0818L56.3333 23.3977L58.151 19.0839C58.1614 19.0593 58.1754 19.0364 58.1926 19.016L59.6556 17.28C59.7969 17.1123 60.0691 17.1788 60.1172 17.3928L61.6928 24.4039C61.7446 24.6345 62.0495 24.6872 62.1758 24.4874L63.5886 22.2522C63.6372 22.1753 63.7218 22.1287 63.8128 22.1287H65.4494C65.4828 22.1287 65.5159 22.1223 65.547 22.1101L67.2569 21.4337C67.3067 21.414 67.3494 21.3798 67.3793 21.3354L69.1273 18.7425C69.1531 18.7043 69.1884 18.6735 69.2297 18.653L70.7859 17.8837C70.9076 17.8235 71.0551 17.8649 71.1276 17.9797L72.7552 20.5548C72.8039 20.6317 72.8885 20.6784 72.9795 20.6784H74.537C74.6188 20.6784 74.6961 20.7161 74.7463 20.7807L76.4204 22.9327C76.4706 22.9973 76.5479 23.0351 76.6297 23.0351H78.3333H80.0939C80.1415 23.0351 80.1883 23.0479 80.2292 23.0722L81.6738 23.9293C81.8322 24.0233 82.0359 23.9311 82.0698 23.75L83.7928 14.5498C83.8163 14.4243 83.9259 14.3333 84.0535 14.3333H85.5838C85.6378 14.3333 85.6904 14.3498 85.7348 14.3805L87.5 15.6023L89.1824 16.7668C89.2732 16.8297 89.3935 16.8297 89.4843 16.7668L91.0157 15.7068C91.1065 15.644 91.2268 15.644 91.3176 15.7068L92.9709 16.8512C92.9902 16.8646 93.0077 16.8804 93.0228 16.8984L94.7538 18.9525C94.8042 19.0123 94.8785 19.0468 94.9567 19.0468H96.4852C96.5946 19.0468 96.6928 18.9796 96.7324 18.8777L98.4877 14.365C98.4959 14.344 98.5067 14.3241 98.5199 14.3058L100.333 11.7953L102.167 8.53216L103.961 6.04746C103.987 6.01245 104.02 5.98414 104.059 5.965L105.833 5.08772L107.401 4.15751C107.541 4.07464 107.722 4.13561 107.782 4.28616L109.433 8.36638C109.473 8.46658 109.571 8.53216 109.679 8.53216H111.12C111.245 8.53216 111.352 8.61881 111.379 8.74046L113.121 16.663C113.148 16.7847 113.255 16.8713 113.38 16.8713H114.877C114.955 16.8713 115.029 16.9059 115.08 16.9657L116.833 19.0468L118.587 21.4749C118.637 21.5439 118.717 21.5848 118.802 21.5848H120.438C120.479 21.5848 120.519 21.5754 120.556 21.5573L122.278 20.7058C122.314 20.6878 122.355 20.6784 122.395 20.6784H124.026C124.114 20.6784 124.196 20.6345 124.246 20.5614L126 17.9591"
    />
    <path
      stroke="url(#paint1_linear_9395_3661)"
      strokeWidth={1.5}
      d="M127.073 35H125.321C125.243 35 125.171 35.0415 125.132 35.1089L123.38 38.1324C123.341 38.1999 123.269 38.2414 123.191 38.2414H121.458C121.446 38.2414 121.433 38.2403 121.42 38.238C120.77 38.1203 119.851 37.846 119.561 37.6626C119.284 37.4872 118.213 37.5747 117.755 37.65C117.708 37.6577 117.66 37.6512 117.617 37.6302L115.873 36.7702C115.829 36.7483 115.779 36.7422 115.73 36.7527L113.95 37.14C113.935 37.1433 113.919 37.1449 113.903 37.1449C112.902 37.1449 112.437 37.1449 112.049 37.1449C111.666 37.1449 110.739 37.1449 110.203 37.1449C110.182 37.1449 110.16 37.1482 110.139 37.1546L108.324 37.7141C108.303 37.7205 108.282 37.7238 108.26 37.7238H106.454C106.428 37.7238 106.402 37.7284 106.378 37.7373L104.678 38.3662C104.593 38.3976 104.497 38.3733 104.438 38.3052L102.791 36.4247C102.716 36.3392 102.588 36.3254 102.497 36.393L100.838 37.6197C100.801 37.6475 100.755 37.6626 100.709 37.6626H98.9696C98.9259 37.6626 98.8832 37.6757 98.847 37.7002L97.0593 38.9124C97.0363 38.928 97.0165 38.9478 97.0009 38.9708L95.1788 41.6663C95.1576 41.6978 95.1285 41.7231 95.0945 41.7399L93.365 42.5928C93.3041 42.6228 93.2327 42.6228 93.1718 42.5928L91.436 41.7368C91.4059 41.722 91.3729 41.7143 91.3394 41.7143H89.5793C89.5356 41.7143 89.4929 41.7012 89.4567 41.6767L87.6586 40.4574C87.6424 40.4465 87.6278 40.4334 87.6151 40.4185L85.7973 38.2896C85.7705 38.2581 85.7351 38.2349 85.6956 38.2227L83.9137 37.6735C83.8902 37.6663 83.868 37.6551 83.8482 37.6404L82.058 36.3162C82.0204 36.2884 81.9748 36.2734 81.9281 36.2734C81.2536 36.2734 80.4993 36.2734 80.122 36.2734C79.7597 36.2734 78.7696 35.3916 78.3353 35.2634C78.2781 35.2464 78.2207 35.2723 78.1794 35.3155L76.3659 37.2159L74.5533 39.3388C74.5118 39.3874 74.4511 39.4154 74.3872 39.4154H72.7013C72.6428 39.4154 72.5867 39.4389 72.5457 39.4805L70.75 41.3037C70.7379 41.316 70.7273 41.3296 70.7184 41.3444L68.947 44.2927C68.8929 44.3827 68.7824 44.4214 68.6839 44.385L67.0476 43.7798C67.0011 43.7626 66.9617 43.73 66.9362 43.6875L65.1613 40.7335C65.1218 40.6678 65.0507 40.6276 64.974 40.6276H63.2587C63.2328 40.6276 63.2072 40.6322 63.1829 40.6411L61.5113 41.2594C61.4128 41.2958 61.3024 41.257 61.2483 41.167L59.4965 38.2515C59.475 38.2156 59.4435 38.1867 59.4059 38.1681L57.5854 37.2704L55.83 36.0801C55.756 36.0299 55.6588 36.0299 55.5848 36.0801L53.8719 37.2415C53.8439 37.2605 53.8211 37.2855 53.8036 37.3145C53.4467 37.907 52.3324 39.0323 51.9513 39.1226C51.5752 39.2118 50.6736 40.0945 50.1346 40.5735C50.095 40.6086 50.0441 40.6276 49.9912 40.6276H48.1952H46.3842C46.3405 40.6276 46.2978 40.6407 46.2616 40.6652L44.5826 41.8037C44.4986 41.8607 44.3863 41.8522 44.3118 41.7833L42.561 40.1645L40.7475 38.2642C40.7063 38.221 40.6492 38.1965 40.5895 38.1965H38.8559C38.8224 38.1965 38.7893 38.1888 38.7593 38.174L37.0663 37.3391C36.9828 37.298 36.8825 37.3142 36.8163 37.3795L35.1126 39.0597C35.0718 39.1 35.0167 39.1226 34.9593 39.1226H33.2273C33.1903 39.1226 33.1538 39.1321 33.1214 39.1501L31.3422 40.1371C31.3098 40.1551 31.2733 40.1645 31.2362 40.1645H29.4147H27.6527C27.5801 40.1645 27.5123 40.2005 27.4717 40.2606L25.7236 42.8468C25.683 42.9069 25.6151 42.9429 25.5426 42.9429H23.8938C23.8228 42.9429 23.7562 42.9774 23.7153 43.0354L22.0209 45.4377C21.9543 45.532 21.826 45.5583 21.7277 45.4977L20.0245 44.4478L18.1464 42.9429L16.4111 41.4453C16.3291 41.3746 16.2076 41.3746 16.1256 41.4453L14.4518 42.8898C14.4121 42.924 14.3615 42.9429 14.3091 42.9429H12.5574C12.5276 42.9429 12.4982 42.949 12.4708 42.9608L10.7693 43.6949C10.6877 43.7302 10.5928 43.7124 10.5294 43.6499L8.78151 41.926C8.76472 41.9094 8.75073 41.8903 8.74007 41.8692L6.93879 38.3162C6.90157 38.2428 6.82626 38.1965 6.74395 38.1965H5.00007"
    />
    <path stroke="#4B5563" strokeWidth={0.75} d="M117 1V52" />
    <g filter="url(#filter0_d_9395_3661)">
      <circle cx={117} cy={19} r={3} fill="#3B82F6" />
      <circle cx={117} cy={19} r={2.4} stroke="#E5E7EB" strokeWidth={1.2} />
    </g>
    <g filter="url(#filter1_d_9395_3661)">
      <circle cx={117} cy={37} r={3} fill="#6B7280" />
      <circle cx={117} cy={37} r={2.4} stroke="#E5E7EB" strokeWidth={1.2} />
    </g>
    <defs>
      <filter
        id="filter0_d_9395_3661"
        width={10.8}
        height={10.8}
        x={111.6}
        y={16}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={2.4} />
        <feGaussianBlur stdDeviation={1.2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          in2="BackgroundImageFix"
          mode="normal"
          result="effect1_dropShadow_9395_3661"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_9395_3661"
          mode="normal"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_d_9395_3661"
        width={10.8}
        height={10.8}
        x={111.6}
        y={34}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={2.4} />
        <feGaussianBlur stdDeviation={1.2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          in2="BackgroundImageFix"
          mode="normal"
          result="effect1_dropShadow_9395_3661"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_9395_3661"
          mode="normal"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_9395_3661"
        x1={112.425}
        x2={15.9943}
        y1={11.75}
        y2={38.8582}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3B82F6" />
        <stop offset={1} stopColor="#234C90" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_9395_3661"
        x1={1}
        x2={127}
        y1={41.5}
        y2={37.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#16171A" />
        <stop offset={0.4} stopColor="#6B7280" />
      </linearGradient>
    </defs>
  </svg>
  // array-end
)

const DonutChartThumbnail = (props: SVGProps<SVGSVGElement>) => (
  // array-start
  <svg fill="none" viewBox="0 0 133 52" {...props}>
    <g clipPath="url(#clip0_9395_3799)">
      <path
        fill="#BFDBFE"
        d="M41.0111 24.8516C41.2112 18.0634 44.0997 11.6328 49.0412 6.97425C53.9826 2.31575 60.5723 -0.188968 67.3605 0.0111158L67.0813 9.48125C62.8048 9.35519 58.6533 10.9332 55.5402 13.868C52.427 16.8029 50.6073 20.8542 50.4812 25.1308L41.0111 24.8516Z"
      />
      <path
        fill="#93C5FD"
        d="M41.1932 28.7456C40.6419 24.2835 41.2753 19.755 43.0295 15.6153C44.7837 11.4756 47.597 7.87079 51.1864 5.16334L56.8917 12.7271C54.6303 14.4328 52.858 16.7039 51.7528 19.3119C50.6477 21.9199 50.2487 24.7729 50.596 27.584L41.1932 28.7456Z"
      />
      <path
        fill="url(#paint0_linear_9395_3799)"
        d="M81.3732 46.525C77.5559 49.2197 73.074 50.8185 68.4131 51.1483C63.7521 51.478 59.0898 50.5261 54.9311 48.3957C50.7725 46.2652 47.2761 43.0375 44.8206 39.0621C42.3652 35.0867 41.0443 30.5152 41.0011 25.8428L50.4749 25.7552C50.5021 28.6988 51.3343 31.5788 52.8812 34.0834C54.4282 36.5879 56.6309 38.6213 59.2509 39.9635C61.8708 41.3057 64.8081 41.9054 67.7445 41.6977C70.6809 41.4899 73.5045 40.4827 75.9093 38.785L81.3732 46.525Z"
      />
      <path
        fill="url(#paint1_linear_9395_3799)"
        d="M66.6061 0C70.1526 4.22926e-08 73.6606 0.736748 76.9075 2.16355C80.1544 3.59035 83.0695 5.67609 85.4681 8.28859C87.8666 10.9011 89.6963 13.9834 90.8412 17.3401C91.9861 20.6968 92.4212 24.2547 92.119 27.7884C91.8167 31.3221 90.7837 34.7544 89.0853 37.8679C87.387 40.9814 85.0604 43.7082 82.253 45.8754C79.4456 48.0425 76.2186 49.6029 72.7765 50.4575C69.3344 51.3122 65.7524 51.4425 62.2573 50.8401L63.8677 41.4957C66.0685 41.8749 68.3241 41.7929 70.4915 41.2547C72.6589 40.7166 74.6909 39.734 76.4587 38.3694C78.2265 37.0047 79.6916 35.2877 80.761 33.3272C81.8304 31.3667 82.4809 29.2054 82.6712 26.9802C82.8616 24.7551 82.5876 22.5147 81.8667 20.4011C81.1457 18.2874 79.9936 16.3465 78.4832 14.7015C76.9729 13.0564 75.1373 11.743 73.0927 10.8446C71.0482 9.94615 68.8393 9.48223 66.6061 9.48223L66.6061 0Z"
      />
      <g filter="url(#filter0_ddd_9395_3799)">
        <path
          fill="white"
          d="M72 21.5606C72 20.1464 73.1464 19 74.5606 19H104.894C106.308 19 107.455 20.1464 107.455 21.5606V28.1919C107.455 29.6061 106.308 30.7525 104.894 30.7525H74.5606C73.1464 30.7525 72 29.6061 72 28.1919V21.5606Z"
        />
        <path
          stroke="#E5E7EB"
          strokeWidth={0.320076}
          d="M74.5606 19.16H104.894C106.22 19.16 107.295 20.2348 107.295 21.5606V28.1919C107.295 29.5177 106.22 30.5925 104.894 30.5925H74.5606C73.2348 30.5925 72.16 29.5177 72.16 28.1919V21.5606C72.16 20.2348 73.2348 19.16 74.5606 19.16Z"
        />
        <g filter="url(#filter1_dd_9395_3799)">
          <circle cx={77.1211} cy={24.876} r={1.70707} fill="#3B82F6" />
          <circle
            cx={77.1211}
            cy={24.876}
            r={2.13384}
            stroke="white"
            strokeWidth={0.853535}
          />
        </g>
        <rect
          width={21.3712}
          height={4.92424}
          x={82.6689}
          y={22.4141}
          fill="url(#paint2_linear_9395_3799)"
          rx={0.853535}
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_ddd_9395_3799"
        width={82.7268}
        height={59.0252}
        x={48.3636}
        y={11.1212}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={0.492424} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
        />
        <feBlend
          in2="BackgroundImageFix"
          mode="normal"
          result="effect1_dropShadow_9395_3799"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={1.9697} />
        <feGaussianBlur stdDeviation={2.95455} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
        />
        <feBlend
          in2="effect1_dropShadow_9395_3799"
          mode="normal"
          result="effect2_dropShadow_9395_3799"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={15.7576} />
        <feGaussianBlur stdDeviation={11.8182} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
        />
        <feBlend
          in2="effect2_dropShadow_9395_3799"
          mode="normal"
          result="effect3_dropShadow_9395_3799"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect3_dropShadow_9395_3799"
          mode="normal"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_dd_9395_3799"
        width={7.6817}
        height={7.6817}
        x={73.2802}
        y={21.4619}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={0.426768} />
        <feGaussianBlur stdDeviation={0.640152} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        />
        <feBlend
          in2="BackgroundImageFix"
          mode="normal"
          result="effect1_dropShadow_9395_3799"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feMorphology
          in="SourceAlpha"
          operator="erode"
          radius={0.426768}
          result="effect2_dropShadow_9395_3799"
        />
        <feOffset dy={0.426768} />
        <feGaussianBlur stdDeviation={0.426768} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        />
        <feBlend
          in2="effect1_dropShadow_9395_3799"
          mode="normal"
          result="effect2_dropShadow_9395_3799"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_9395_3799"
          mode="normal"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_9395_3799"
        x1={45.8773}
        x2={66.6061}
        y1={25.6061}
        y2={51.2121}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#60A5FA" />
        <stop offset={1} stopColor="#396294" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_9395_3799"
        x1={66.6061}
        x2={66.6061}
        y1={0}
        y2={51.2121}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3B82F6" />
        <stop offset={1} stopColor="#234C90" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_9395_3799"
        x1={82.6689}
        x2={104.04}
        y1={24.8762}
        y2={24.8762}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E5E7EB" />
        <stop offset={1} stopColor="#E5E7EB" stopOpacity={0.25} />
      </linearGradient>
      <clipPath id="clip0_9395_3799">
        <rect width={133} height={52} fill="white" />
      </clipPath>
    </defs>
  </svg>
  // array-end
)

const data = [
  // array-start
  {
    value: "line-chart",
    label: "Line chart",
    icon: RiLineChartLine,
    thumbnail: <LineChartThumbnail />,
    description: "Best to show trends or changes over time",
    disabled: false,
  },
  {
    value: "bar-chart",
    label: "Bar chart",
    icon: RiBarChartFill,
    thumbnail: <BarChartThumbnail />,
    description: "Best to display comparisons between categories",
    disabled: false,
  },
  {
    value: "donut-chart",
    label: "Donut chart",
    icon: RiDonutChartFill,
    thumbnail: <DonutChartThumbnail />,
    description: "Display data through a circular visualization",
    disabled: false,
  },
  {
    value: "scatter-chart",
    label: "Scatter chart",
    icon: RiBubbleChartFill,
    thumbnail: null,
    description: "Display data through a circular visualization",
    disabled: true,
  },
  // array-end
]

function TooltipContent({
  thumbnail,
  description,
}: {
  thumbnail: React.ReactNode
  description: string
}) {
  return (
    <div>
      <div className="p-1">{thumbnail}</div>
      <p className="mt-1 text-xs">{description}</p>
    </div>
  )
}

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="relative">
        <div className="flex h-48 items-start justify-end rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <Select defaultValue="line-chart">
            <SelectTrigger className="border-gray-300 sm:w-48 dark:border-gray-800">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent className="border-gray-200 dark:border-gray-800">
              {data.map((item) => (
                <SelectItem
                  key={item.value}
                  value={item.value}
                  disabled={item.disabled}
                >
                  <Tooltip
                    sideOffset={15}
                    delayDuration={0}
                    side="left"
                    showArrow={true}
                    className="z-50 max-w-40"
                    content={
                      <TooltipContent
                        thumbnail={item.thumbnail}
                        description={item.description}
                      />
                    }
                    triggerAsChild={true}
                  >
                    <div className="flex w-full items-center gap-x-2">
                      <item.icon
                        className={cx(
                          item.disabled ? "text-gray-400/50" : "text-gray-500",
                          "size-4 shrink-0",
                        )}
                        aria-hidden={true}
                      />
                      {item.label}
                    </div>
                  </Tooltip>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {/* gradient for demo purpose */}
        <div className="absolute inset-x-0 bottom-0 -mb-1 h-14 rounded-b-lg bg-gradient-to-t from-white via-white to-transparent dark:from-gray-950 dark:via-gray-950 dark:to-transparent" />
      </div>
    </div>
  )
}
```


```example/filterbar-filterbar-01.tsx
import { RiBuilding2Line, RiStackFill, RiStackLine } from "@remixicon/react"

import { cx } from "@/lib/utils"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/atom/Select"
import { Tooltip } from "@/atom/Tooltip"

const data = [
  // array-start
  {
    value: "free-workspace",
    label: "Free workspace",
    icon: RiStackLine,
    description: "Up to 1,000/req. per day,
$0.45 per stored GB",
    disabled: false,
  },
  {
    value: "pro-workspace",
    label: "Pro workspace",
    icon: RiStackFill,
    description: "Up to 100,000/req. per day,
$0.34 per stored GB",
    disabled: false,
  },
  {
    value: "enterprise-workspace",
    label: "Enterprise workspace",
    icon: RiBuilding2Line,
    description: "",
    disabled: true,
  },
  // array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="relative">
        <div className="flex h-48 items-start justify-end rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <Select defaultValue="pro-workspace">
            <SelectTrigger className="border-gray-300 sm:w-48 dark:border-gray-800">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent
              align="end"
              className="border-gray-200 dark:border-gray-800"
            >
              {data.map((item) => (
                <SelectItem
                  key={item.value}
                  value={item.value}
                  disabled={item.disabled}
                >
                  <Tooltip
                    side="left"
                    showArrow={true}
                    className="z-50"
                    content={item.description}
                    triggerAsChild={true}
                    sideOffset={15}
                  >
                    <div className="flex w-full items-center gap-x-2">
                      <item.icon
                        className={cx(
                          item.disabled ? "text-gray-400/50" : "text-gray-500",
                          "size-4 shrink-0",
                        )}
                        aria-hidden={true}
                      />
                      {item.label}
                    </div>
                  </Tooltip>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {/* gradient for demo purpose */}
        <div className="absolute inset-x-0 bottom-0 -mb-1 h-14 rounded-b-lg bg-gradient-to-t from-white via-white to-transparent dark:from-gray-950 dark:via-gray-950 dark:to-transparent" />
      </div>
    </div>
  )
}
```


```example/filterbar-filterbar-15.tsx
import React from "react"
import {
  RiAddLine,
  RiArrowDownSLine,
  RiCornerDownRightLine,
} from "@remixicon/react"

import { cx, focusRing } from "@/lib/utils"

import { Button } from "@/atom/Button"
import { Input } from "@/atom/Input"
import { Label } from "@/atom/Label"
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/atom/Popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/atom/Select"

type ConditionFilter = {
  condition: string
  value: [string, string]
}

interface DataTableFilterProps {
  column: any
  title?: string
  options?: {
    label: string
    value: string
  }[]
  formatter?: (value: any) => string
}

const ColumnFiltersLabel = ({
  columnFilterLabels,
  className,
}: {
  columnFilterLabels: string[] | undefined
  className?: string
}) => {
  if (!columnFilterLabels) return null

  if (columnFilterLabels.length < 3) {
    return (
      <span className={cx("truncate", className)}>
        {columnFilterLabels.map((value, index) => (
          <span
            key={value}
            className={cx("font-semibold text-blue-600 dark:text-blue-400")}
          >
            {value}
            {index < columnFilterLabels.length - 1 && ", "}
          </span>
        ))}
      </span>
    )
  }

  return (
    <>
      <span
        className={cx(
          "font-semibold text-blue-600 dark:text-blue-400",
          className,
        )}
      >
        {columnFilterLabels[0]} and {columnFilterLabels.length - 1} more
      </span>
    </>
  )
}

export function DataTableFilter({
  column,
  title,
  options,
  formatter = (value) => value.toString(),
}: DataTableFilterProps) {
  const columnFilters = column?.getFilterValue() as ConditionFilter | undefined

  const [selectedValues, setSelectedValues] = React.useState<
    ConditionFilter | undefined
  >(columnFilters)

  const columnFilterLabels = React.useMemo(() => {
    if (!selectedValues) return undefined

    const condition = options?.find(
      (option) => option.value === selectedValues.condition,
    )?.label
    if (!condition) return undefined
    if (!selectedValues.value[0] && !selectedValues.value[1])
      return [`${condition}`]
    if (!selectedValues.value[1])
      return [`${condition} ${formatter(selectedValues.value[0])}`]
    return [
      `${condition} ${formatter(selectedValues.value[0])} and ${formatter(
        selectedValues.value[1],
      )}`,
    ]
  }, [selectedValues, options, formatter])

  const isBetween = selectedValues?.condition === "is-between"

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className={cx(
            "flex w-full items-center gap-x-1.5 rounded-md border border-gray-300 px-2 py-1.5 font-medium whitespace-nowrap text-gray-600 hover:bg-gray-50 sm:w-fit sm:text-xs dark:border-gray-700 dark:text-gray-400 hover:dark:bg-gray-900",
            selectedValues?.condition ? "" : "border-dashed",
            focusRing,
          )}
        >
          <span
            aria-hidden="true"
            onClick={(e) => {
              if (selectedValues) {
                e.stopPropagation()
                column?.setFilterValue(undefined)
                setSelectedValues(undefined)
              }
            }}
          >
            <RiAddLine
              className={cx(
                "-ml-px size-5 shrink-0 transition sm:size-4",
                selectedValues && "rotate-45 hover:text-red-500",
              )}
              aria-hidden="true"
            />
          </span>
          {columnFilterLabels && columnFilterLabels.length > 0 ? (
            <span>{title}</span>
          ) : (
            <span className="w-full text-left sm:w-fit">{title}</span>
          )}
          {columnFilterLabels && columnFilterLabels.length > 0 && (
            <span
              className="h-4 w-px bg-gray-300 dark:bg-gray-700"
              aria-hidden="true"
            />
          )}
          <ColumnFiltersLabel
            columnFilterLabels={columnFilterLabels}
            className="w-full text-left sm:w-fit"
          />
          <RiArrowDownSLine
            className="size-5 shrink-0 text-gray-500 sm:size-4"
            aria-hidden="true"
          />
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        sideOffset={7}
        className="max-w-[calc(var(--radix-popover-trigger-width))] min-w-[calc(var(--radix-popover-trigger-width))] sm:max-w-56 sm:min-w-56"
        onInteractOutside={() => {
          if (!columnFilters || columnFilters.condition === "") {
            column?.setFilterValue(undefined)
            setSelectedValues(undefined)
          }
        }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault()
            column?.setFilterValue(selectedValues)
          }}
        >
          <div className="space-y-2">
            <div>
              <Label className="text-base font-medium sm:text-sm">
                Filter by {title}
              </Label>
              <div className="space-y-2">
                <Select
                  value={selectedValues?.condition}
                  onValueChange={(value) => {
                    setSelectedValues((prev) => ({
                      condition: value,
                      value: [value !== "" ? prev?.value[0] || "" : "", ""],
                    }))
                  }}
                >
                  <SelectTrigger className="mt-2 sm:py-1">
                    <SelectValue placeholder="Select condition" />
                  </SelectTrigger>
                  <SelectContent>
                    {options?.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <div className="flex w-full items-center gap-2">
                  <RiCornerDownRightLine
                    className="size-4 shrink-0 text-gray-500"
                    aria-hidden="true"
                  />
                  <Input
                    disabled={!selectedValues?.condition}
                    type="number"
                    placeholder="$0"
                    className="sm:[&>input]:py-1"
                    value={selectedValues?.value[0]}
                    onChange={(e) => {
                      setSelectedValues((prev) => ({
                        condition: prev?.condition || "",
                        value: [
                          e.target.value,
                          isBetween ? prev?.value[1] || "" : "",
                        ],
                      }))
                    }}
                  />
                  {isBetween && (
                    <>
                      <span className="text-xs font-medium text-gray-500">
                        and
                      </span>
                      <Input
                        disabled={!selectedValues?.condition}
                        type="number"
                        placeholder="$0"
                        className="sm:[&>input]:py-1"
                        value={selectedValues?.value[1]}
                        onChange={(e) => {
                          setSelectedValues((prev) => ({
                            condition: prev?.condition || "",
                            value: [prev?.value[0] || "", e.target.value],
                          }))
                        }}
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
            <PopoverClose className="w-full" asChild>
              <Button type="submit" className="w-full sm:py-1">
                Apply
              </Button>
            </PopoverClose>
            {columnFilterLabels && columnFilterLabels.length > 0 && (
              <Button
                variant="secondary"
                className="w-full sm:py-1"
                type="button"
                onClick={() => {
                  column?.setFilterValue(undefined)
                  setSelectedValues(undefined)
                }}
              >
                Reset
              </Button>
            )}
          </div>
        </form>
      </PopoverContent>
    </Popover>
  )
}

const salaryOptions = [
  { label: "Greater than", value: "greater-than" },
  { label: "Less than", value: "less-than" },
  { label: "Equal to", value: "equal-to" },
  { label: "Between", value: "is-between" },
]

const NumberFilterExample = () => {
  const [salaryFilter, setSalaryFilter] = React.useState<
    ConditionFilter | undefined
  >(undefined)

  const salaryColumn = {
    getFilterValue: () => salaryFilter,
    setFilterValue: (value: ConditionFilter | undefined) => {
      setSalaryFilter(value)
    },
  }

  return (
    <div className="obfuscate">
      <div className="relative">
        <div className="rounded-lg border border-gray-200 bg-white pb-20 shadow-sm md:h-52 dark:border-gray-800 dark:bg-gray-950">
          <div className="border-b border-gray-200 p-4 dark:border-gray-800">
            <DataTableFilter
              column={salaryColumn}
              title="Salary"
              options={salaryOptions}
              formatter={(value) => `$${value}`}
            />
          </div>
          {/* gradient for demo purpose */}
          <div className="absolute inset-x-0 bottom-0 -mb-1 h-14 rounded-b-lg bg-gradient-to-t from-white via-white to-transparent dark:from-gray-950 dark:via-gray-950 dark:to-transparent" />
        </div>
      </div>
    </div>
  )
}

export default NumberFilterExample
```


```example/filterbar-filterbar-14.tsx
"use client"

import React from "react"
import { RiAddLine, RiArrowDownSLine } from "@remixicon/react"

import { cx, focusRing } from "@/lib/utils"

import { Button } from "@/atom/Button"
import { Label } from "@/atom/Label"
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/atom/Popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/atom/Select"

interface DataTableFilterProps {
  column: any
  title?: string
  options?: {
    label: string
    value: string
  }[]
  formatter?: (value: any) => string
}

const ColumnFiltersLabel = ({
  columnFilterLabels,
  className,
}: {
  columnFilterLabels: string[] | undefined
  className?: string
}) => {
  if (!columnFilterLabels) return null

  if (columnFilterLabels.length < 3) {
    return (
      <span className={cx("truncate", className)}>
        {columnFilterLabels.map((value, index) => (
          <span
            key={value}
            className={cx("font-semibold text-blue-600 dark:text-blue-400")}
          >
            {value}
            {index < columnFilterLabels.length - 1 && ", "}
          </span>
        ))}
      </span>
    )
  }

  return (
    <>
      <span
        className={cx(
          "font-semibold text-blue-600 dark:text-blue-400",
          className,
        )}
      >
        {columnFilterLabels[0]} and {columnFilterLabels.length - 1} more
      </span>
    </>
  )
}

type FilterValues = string | undefined

export function DataTableFilter({
  column,
  title,
  options,
  formatter = (value) => value.toString(),
}: DataTableFilterProps) {
  const columnFilters = column?.getFilterValue() as FilterValues

  const [selectedValues, setSelectedValues] =
    React.useState<FilterValues>(columnFilters)

  const columnFilterLabels = React.useMemo(() => {
    if (!selectedValues) return undefined

    if (typeof selectedValues === "string") {
      return [formatter(selectedValues)]
    }

    return undefined
  }, [selectedValues, formatter])

  const getDisplayedFilter = () => {
    return (
      <Select
        value={selectedValues as string}
        onValueChange={(value) => {
          setSelectedValues(value)
        }}
      >
        <SelectTrigger className="mt-2 sm:py-1">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          {options?.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    )
  }

  React.useEffect(() => {
    setSelectedValues(columnFilters)
  }, [columnFilters])

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className={cx(
            "flex w-full items-center gap-x-1.5 rounded-md border border-gray-300 px-2 py-1.5 font-medium whitespace-nowrap text-gray-600 hover:bg-gray-50 sm:w-fit sm:text-xs dark:border-gray-700 dark:text-gray-400 hover:dark:bg-gray-900",
            selectedValues &&
              typeof selectedValues === "string" &&
              selectedValues !== ""
              ? ""
              : "border-dashed",
            focusRing,
          )}
        >
          <span
            aria-hidden="true"
            onClick={(e) => {
              if (selectedValues) {
                e.stopPropagation()
                column?.setFilterValue("")
                setSelectedValues("")
              }
            }}
          >
            <RiAddLine
              className={cx(
                "-ml-px size-5 shrink-0 transition sm:size-4",
                selectedValues && "rotate-45 hover:text-red-500",
              )}
              aria-hidden="true"
            />
          </span>
          {/* differentiation below for better mobile view */}
          {columnFilterLabels && columnFilterLabels.length > 0 ? (
            <span>{title}</span>
          ) : (
            <span className="w-full text-left sm:w-fit">{title}</span>
          )}
          {columnFilterLabels && columnFilterLabels.length > 0 && (
            <span
              className="h-4 w-px bg-gray-300 dark:bg-gray-700"
              aria-hidden="true"
            />
          )}
          <ColumnFiltersLabel
            columnFilterLabels={columnFilterLabels}
            className="w-full text-left sm:w-fit"
          />
          <RiArrowDownSLine
            className="size-5 shrink-0 text-gray-500 sm:size-4"
            aria-hidden="true"
          />
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        sideOffset={7}
        className="max-w-[calc(var(--radix-popover-trigger-width))] min-w-[calc(var(--radix-popover-trigger-width))] sm:max-w-56 sm:min-w-56"
        onInteractOutside={() => {
          if (
            !columnFilters ||
            (typeof columnFilters === "string" && columnFilters === "")
          ) {
            column?.setFilterValue("")
            setSelectedValues("")
          }
        }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault()
            column?.setFilterValue(selectedValues)
          }}
        >
          <div className="space-y-2">
            <div>
              <Label className="text-base font-medium sm:text-sm">
                Filter by {title}
              </Label>
              {getDisplayedFilter()}
            </div>
            <PopoverClose className="w-full" asChild>
              <Button type="submit" className="w-full sm:py-1">
                Apply
              </Button>
            </PopoverClose>
            {columnFilterLabels && columnFilterLabels.length > 0 && (
              <Button
                variant="secondary"
                className="w-full sm:py-1"
                type="button"
                onClick={() => {
                  column?.setFilterValue("")
                  setSelectedValues("")
                }}
              >
                Reset
              </Button>
            )}
          </div>
        </form>
      </PopoverContent>
    </Popover>
  )
}

const roleOptions = [
  { label: "Developer", value: "Developer" },
  { label: "Designer", value: "Designer" },
  { label: "Manager", value: "Manager" },
]

const SimpleFilterExample = () => {
  const [roleFilter, setRoleFilter] = React.useState<string>("")

  const roleColumn = {
    getFilterValue: () => roleFilter,
    setFilterValue: (value: string) => {
      setRoleFilter(value)
    },
  }

  return (
    <div className="obfuscate">
      <div className="relative">
        <div className="rounded-lg border border-gray-200 bg-white pb-20 shadow-sm md:h-52 dark:border-gray-800 dark:bg-gray-950">
          <div className="border-b border-gray-200 p-4 dark:border-gray-800">
            <DataTableFilter
              column={roleColumn}
              title="Role"
              options={roleOptions}
            />
          </div>
          {/* gradient for demo purpose */}
          <div className="absolute inset-x-0 bottom-0 -mb-1 h-14 rounded-b-lg bg-gradient-to-t from-white via-white to-transparent dark:from-gray-950 dark:via-gray-950 dark:to-transparent" />
        </div>
      </div>
    </div>
  )
}

export default SimpleFilterExample
```


