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
          "min-w-48 max-w-72",
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
      "group/DropdownMenuItem relative flex cursor-pointer select-none items-center gap-x-4 rounded py-1.5 pl-2 pr-1 text-sm outline-none data-[state=checked]:font-semibold",
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
        "relative flex cursor-pointer select-none items-center gap-x-2 rounded-md border px-2 py-1.5 text-sm font-medium outline-none data-[state=checked]:font-semibold sm:text-xs",
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
