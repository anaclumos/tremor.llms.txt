import React from "react"
import * as HoverCardPrimitives from "@radix-ui/react-hover-card"
import { RiArrowRightUpLine, RiCheckboxCircleFill } from "@remixicon/react"

import { cx } from "@/lib/utils"

import { Card } from "@/atom/Card"

const data = [
  //array-start
  {
    date: "29 Sep, 2023",
    tooltip: "Operational",
  },
  {
    date: "30 Sep, 2023",
    tooltip: "Operational",
  },
  {
    date: "1 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "2 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "3 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "4 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "5 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "6 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "7 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "8 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "9 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "10 Oct, 2023",
    tooltip: "Downtime",
    href: "#",
    description:
      "Down for 2 hours and 12 minutes. Learn more in status report.",
  },
  {
    date: "11 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "12 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "13 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "14 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "15 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "16 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "17 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "18 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "19 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "20 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "21 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "22 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "23 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "24 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "25 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "26 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "27 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "28 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "29 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "30 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "31 Oct, 2023",
    tooltip: "Operational",
  },
  {
    date: "1 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "2 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "3 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "4 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "5 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "6 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "7 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "8 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "9 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "10 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "11 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "12 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "13 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "14 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "15 Nov, 2023",
    tooltip: "Downtime",
    href: "#",
    description:
      "Down for 9 hours and 14 minutes. Learn more in status report.",
  },
  {
    date: "16 Nov, 2023",
    tooltip: "Downtime",
    href: "#",
    description:
      "Down for 2 hours and 58 minutes. Learn more in status report.",
  },
  {
    date: "17 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "18 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "19 Nov, 2023",
    tooltip: "Downtime",
    href: "#",
    description:
      "Down for 4 hours and 19 minutes. Learn more in status report.",
  },
  {
    date: "20 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "21 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "22 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "23 Nov, 2023",
    tooltip: "Downtime",
    href: "#",
    description:
      "Down for 4 hours and 19 minutes. Learn more in status report.",
  },
  {
    date: "24 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "25 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "26 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "27 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "28 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "29 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "30 Nov, 2023",
    tooltip: "Operational",
  },
  {
    date: "1 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "2 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "3 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "4 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "5 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "6 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "7 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "8 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "9 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "10 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "11 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "12 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "13 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "14 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "15 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "16 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "17 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "18 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "19 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "20 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "21 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "22 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "23 Dec, 2023",
    tooltip: "Downtime",
    href: "#",
    description:
      "Down for 9 hours and 14 minutes. Learn more in status report.",
  },
  {
    date: "24 Dec, 2023",
    tooltip: "Downtime",
    href: "#",
    description:
      "Down for 3 hours and 10 minutes. Learn more in status report.",
  },
  {
    date: "25 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "26 Dec, 2023",
    tooltip: "Operational",
  },
  {
    date: "27 Dec, 2023",
    tooltip: "Operational",
  },
  //array-end
]

type Status = "Operational" | "Downtime" | "Maintenance"

const colorMapping: Record<Status, string> = {
  Operational: "bg-emerald-600 dark:bg-emerald-500",
  Downtime: "bg-red-600 dark:bg-red-500",
  Maintenance: "bg-amber-600 dark:bg-amber-500",
}

const combinedData = data.map((item) => {
  return {
    ...item,
    color: colorMapping[item.tooltip as Status],
  }
})

interface TrackerBlockProps {
  key?: string | number
  color?: string
  tooltip?: string
  hoverEffect?: boolean
  defaultBackgroundColor?: string
  date?: string
  href?: string
  description?: string
}

const Block = ({
  color,
  tooltip,
  defaultBackgroundColor,
  hoverEffect,
  date,
  href,
  description,
}: TrackerBlockProps) => {
  const [open, setOpen] = React.useState(false)
  return (
    <HoverCardPrimitives.Root
      open={open}
      onOpenChange={setOpen}
      // increase the open/closeDelay time to allow hovering over the card
      openDelay={0}
      closeDelay={0}
    >
      <HoverCardPrimitives.Trigger onClick={() => setOpen(true)} asChild>
        <div className="size-full overflow-hidden px-[0.5px] transition first:rounded-l-[4px] first:pl-0 last:rounded-r-[4px] last:pr-0 sm:px-px">
          <div
            className={cx(
              "size-full rounded-[1px]",
              color || defaultBackgroundColor,
              hoverEffect ? "hover:opacity-50" : "",
            )}
          />
        </div>
      </HoverCardPrimitives.Trigger>
      <HoverCardPrimitives.Portal>
        <HoverCardPrimitives.Content
          sideOffset={10}
          side="top"
          align="center"
          avoidCollisions
          className={cx(
            "group relative max-w-64 min-w-52 rounded-lg shadow-md",
            "text-gray-900 dark:text-gray-50",
            "bg-white dark:bg-[#090E1A]",
            "border border-gray-200 dark:border-gray-800",
          )}
        >
          <div className="flex space-x-2 p-2">
            <div
              className={cx("w-1 shrink-0 rounded", color)}
              aria-hidden={true}
            />
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
                <a href={href} className="focus:outline-none">
                  {/* Extend link to entire tooltip */}
                  <span className="absolute inset-0" aria-hidden="true" />
                  {tooltip}
                </a>
              </p>
              {tooltip === "Downtime" ? (
                <>
                  <p className="mt-1 text-xs text-gray-700 dark:text-gray-300">
                    {description}
                  </p>
                  <div
                    className="my-2 h-px w-full bg-gray-200 dark:bg-gray-800"
                    aria-hidden={true}
                  />
                </>
              ) : null}
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
                {date}
              </p>
            </div>
          </div>
          {tooltip === "Downtime" ? (
            <span
              className="pointer-events-none absolute top-2 right-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-600 group-hover:dark:text-gray-500"
              aria-hidden={true}
            >
              <RiArrowRightUpLine
                className="size-5 shrink-0"
                aria-hidden={true}
              />
            </span>
          ) : null}
        </HoverCardPrimitives.Content>
      </HoverCardPrimitives.Portal>
    </HoverCardPrimitives.Root>
  )
}

interface TrackerProps extends React.HTMLAttributes<HTMLDivElement> {
  data: TrackerBlockProps[]
  defaultBackgroundColor?: string
  hoverEffect?: boolean
}

const Tracker = React.forwardRef<HTMLDivElement, TrackerProps>(
  (
    {
      data = [],
      defaultBackgroundColor = "bg-gray-400 dark:bg-gray-400",
      className,
      hoverEffect,
      ...props
    },
    forwardedRef,
  ) => {
    return (
      <div
        ref={forwardedRef}
        className={cx("items-cente group flex h-10 w-full", className)}
        {...props}
      >
        {data.map((props, index) => (
          <Block
            key={props.key ?? index}
            defaultBackgroundColor={defaultBackgroundColor}
            hoverEffect={hoverEffect}
            {...props}
          />
        ))}
      </div>
    )
  },
)

Block.displayName = "Tracker"

export default function Example() {
  return (
    <div className="obfuscate">
      <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
        All services are online
      </h1>
      <p className="text-sm text-gray-700 dark:text-gray-300">
        Last updated on Mar 07 at 04:20am PST
      </p>
      <Card className="mt-10 space-y-6">
        <div>
          <p className="flex justify-between text-sm font-medium">
            <span className="flex items-center gap-2 font-medium">
              <RiCheckboxCircleFill
                className="size-5 text-emerald-600 dark:text-emerald-500"
                aria-hidden={true}
              />
              <span className="text-gray-900 dark:text-gray-50">
                Merch Shop
              </span>
            </span>
            <span className="text-gray-900 dark:text-gray-50">
              99.4% uptime
            </span>
          </p>
          <Tracker
            data={combinedData}
            className="mt-3 hidden w-full lg:flex"
            hoverEffect
          />
          <Tracker
            data={combinedData.slice(30, 90)}
            className="mt-3 hidden w-full sm:flex lg:hidden"
            hoverEffect
          />
          <Tracker
            data={combinedData.slice(60, 90)}
            className="mt-3 flex w-full sm:hidden"
            hoverEffect
          />
          <div className="mt-3 flex items-center justify-between text-sm text-gray-500 dark:text-gray-500">
            <span className="hidden lg:block">90 days ago</span>
            <span className="hidden sm:block lg:hidden">60 days ago</span>
            <span className="sm:hidden">30 days ago</span>
            <span>Today</span>
          </div>
        </div>
      </Card>
    </div>
  )
}
