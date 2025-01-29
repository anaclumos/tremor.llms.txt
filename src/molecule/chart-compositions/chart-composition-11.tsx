"use client"

// Install: @radix-ui/react-toggle-group
import React from "react"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import {
  RiPauseLargeLine,
  RiSendPlane2Line,
  RiSettings3Line,
  RiShieldLine,
} from "@remixicon/react"

import { cx, focusRing } from "@/lib/utils"

import { AreaChart } from "@/atom/AreaChart"
import { Button } from "@/atom/Button"
import { Card } from "@/atom/Card"
import { Divider } from "@/atom/Divider"
import { Label } from "@/atom/Label"
import { SelectNative } from "@/atom/SelectNative"

const data = [
  //array-start
  {
    date: "01:29am",
    "Name lookup": 710,
    Connection: 605,
    "TLS handshake": 300,
    "Data transfer": 200,
  },
  {
    date: "01:42am",
    "Name lookup": 794,
    Connection: 601,
    "TLS handshake": 310,
    "Data transfer": 220,
  },
  {
    date: "02:22am",
    "Name lookup": 1088,
    Connection: 592,
    "TLS handshake": 290,
    "Data transfer": 210,
  },
  {
    date: "03:34am",
    "Name lookup": 1209,
    Connection: 543,
    "TLS handshake": 250,
    "Data transfer": 130,
  },
  {
    date: "03:51am",
    "Name lookup": 3571,
    Connection: 2090,
    "TLS handshake": 1512,
    "Data transfer": 1054,
  },
  {
    date: "04:01am",
    "Name lookup": 1090,
    Connection: 890,
    "TLS handshake": 300,
    "Data transfer": 180,
  },
  {
    date: "04:23am",
    "Name lookup": 129,
    Connection: 605,
    "TLS handshake": 320,
    "Data transfer": 210,
  },
  {
    date: "04:41am",
    "Name lookup": 100,
    Connection: 210,
    "TLS handshake": 180,
    "Data transfer": 90,
  },
  {
    date: "04:47am",
    "Name lookup": 102,
    Connection: 392,
    "TLS handshake": 150,
    "Data transfer": 110,
  },
  {
    date: "05:01am",
    "Name lookup": 102,
    Connection: 432,
    "TLS handshake": 160,
    "Data transfer": 100,
  },
  {
    date: "05:08am",
    "Name lookup": 103,
    Connection: 423,
    "TLS handshake": 150,
    "Data transfer": 105,
  },
  {
    date: "05:18am",
    "Name lookup": 104,
    Connection: 530,
    "TLS handshake": 180,
    "Data transfer": 140,
  },
  {
    date: "06:03am",
    "Name lookup": 354,
    Connection: 484,
    "TLS handshake": 270,
    "Data transfer": 150,
  },
  {
    date: "07:09am",
    "Name lookup": 463,
    Connection: 631,
    "TLS handshake": 310,
    "Data transfer": 220,
  },
  {
    date: "07:09am",
    "Name lookup": 412,
    Connection: 541,
    "TLS handshake": 290,
    "Data transfer": 200,
  },
  {
    date: "08:21am",
    "Name lookup": 693,
    Connection: 873,
    "TLS handshake": 400,
    "Data transfer": 300,
  },
  {
    date: "08:39am",
    "Name lookup": 192,
    Connection: 294,
    "TLS handshake": 160,
    "Data transfer": 90,
  },
  {
    date: "09:03am",
    "Name lookup": 293,
    Connection: 912,
    "TLS handshake": 340,
    "Data transfer": 250,
  },
  {
    date: "09:19am",
    "Name lookup": 105,
    Connection: 430,
    "TLS handshake": 170,
    "Data transfer": 120,
  },
  {
    date: "10:22am",
    "Name lookup": 110,
    Connection: 731,
    "TLS handshake": 280,
    "Data transfer": 190,
  },
  {
    date: "10:29am",
    "Name lookup": 670,
    Connection: 539,
    "TLS handshake": 290,
    "Data transfer": 210,
  },
  {
    date: "10:34am",
    "Name lookup": 690,
    Connection: 605,
    "TLS handshake": 300,
    "Data transfer": 220,
  },
  {
    date: "10:36am",
    "Name lookup": 793,
    Connection: 1023,
    "TLS handshake": 410,
    "Data transfer": 320,
  },
  {
    date: "11:46am",
    "Name lookup": 902,
    Connection: 605,
    "TLS handshake": 320,
    "Data transfer": 240,
  },
  {
    date: "11:49am",
    "Name lookup": 919,
    Connection: 392,
    "TLS handshake": 270,
    "Data transfer": 180,
  },
  {
    date: "11:50am",
    "Name lookup": 955,
    Connection: 539,
    "TLS handshake": 300,
    "Data transfer": 210,
  },
  {
    date: "11:55am",
    "Name lookup": 995,
    Connection: 293,
    "TLS handshake": 160,
    "Data transfer": 120,
  },
  {
    date: "12:05pm",
    "Name lookup": 872,
    Connection: 520,
    "TLS handshake": 290,
    "Data transfer": 230,
  },
  {
    date: "12:19pm",
    "Name lookup": 101,
    Connection: 418,
    "TLS handshake": 190,
    "Data transfer": 160,
  },
  {
    date: "12:21pm",
    "Name lookup": 657,
    Connection: 912,
    "TLS handshake": 340,
    "Data transfer": 270,
  },
  {
    date: "12:31pm",
    "Name lookup": 732,
    Connection: 640,
    "TLS handshake": 300,
    "Data transfer": 200,
  },
  {
    date: "12:41pm",
    "Name lookup": 895,
    Connection: 509,
    "TLS handshake": 280,
    "Data transfer": 210,
  },
  {
    date: "01:13pm",
    "Name lookup": 993,
    Connection: 701,
    "TLS handshake": 320,
    "Data transfer": 250,
  },
  {
    date: "01:34pm",
    "Name lookup": 1189,
    Connection: 760,
    "TLS handshake": 390,
    "Data transfer": 290,
  },
  {
    date: "01:56pm",
    "Name lookup": 1390,
    Connection: 831,
    "TLS handshake": 420,
    "Data transfer": 320,
  },
  {
    date: "02:12pm",
    "Name lookup": 1375,
    Connection: 713,
    "TLS handshake": 410,
    "Data transfer": 310,
  },
  {
    date: "02:33pm",
    "Name lookup": 960,
    Connection: 481,
    "TLS handshake": 270,
    "Data transfer": 230,
  },
  {
    date: "02:56pm",
    "Name lookup": 1120,
    Connection: 510,
    "TLS handshake": 290,
    "Data transfer": 240,
  },
  {
    date: "03:14pm",
    "Name lookup": 1210,
    Connection: 654,
    "TLS handshake": 350,
    "Data transfer": 260,
  },
  {
    date: "03:31pm",
    "Name lookup": 1185,
    Connection: 700,
    "TLS handshake": 360,
    "Data transfer": 280,
  },
  {
    date: "03:55pm",
    "Name lookup": 1290,
    Connection: 820,
    "TLS handshake": 400,
    "Data transfer": 300,
  },
  //array-end
]

const summary = [
  {
    name: "Currently up for",
    value: "10 months 12 days",
  },
  {
    name: "Last checked at",
    value: "2 minutes ago",
  },
  {
    name: "Incidents",
    value: "0",
  },
]

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cx(
      "inline-flex h-[38px] divide-x divide-gray-300 rounded-md border border-gray-300 bg-white shadow-sm sm:h-[34px] dark:divide-gray-800 dark:border-gray-800",
      className,
    )}
    {...props}
  >
    {children}
  </ToggleGroupPrimitive.Root>
))

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item>
>(({ className, children, ...props }, ref) => {
  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cx(
        "flex items-center justify-center border-gray-300 bg-gray-100 px-2.5 py-1 text-base text-gray-700 transition-colors first:rounded-l-[5px] last:rounded-r-[5px] hover:bg-gray-50 focus:z-10 sm:text-sm dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-900",
        "data-[state=on]:text-semibold data-[state=on]:bg-white data-[state=on]:text-gray-950 dark:data-[state=on]:bg-gray-800 dark:data-[state=on]:text-gray-50",
        focusRing,
        // disabled
        "disabled:pointer-events-none disabled:text-gray-400 dark:disabled:text-gray-600",
        className,
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  )
})

const valueFormatter = (milliseconds: number) => {
  if (milliseconds < 1000) {
    return `${milliseconds}ms`
  } else {
    const seconds = (milliseconds / 1000).toFixed(1)
    return `${seconds}s`
  }
}

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="flex items-center gap-3">
        <span
          className="shrink-0 animate-pulse rounded-full bg-emerald-600/30 p-1"
          aria-hidden={true}
        >
          <span className="block size-2 rounded-full bg-emerald-600 dark:bg-emerald-600" />
        </span>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
          tremor.so
        </h1>
      </div>
      <div className="mt-2 flex items-center gap-2">
        <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
          Up
        </span>
        <span className="size-1 shrink-0 rounded-full bg-gray-500" />
        <span className="text-sm text-gray-500 dark:text-gray-500">
          Checking every 3 minutes
        </span>
      </div>
      <div className="mt-10 flex flex-wrap items-center gap-1">
        <Button
          variant="ghost"
          className="!text-gray-500 dark:!text-gray-500"
          asChild
        >
          <a href="#" className="flex items-center gap-2">
            <RiSendPlane2Line className="size-5 shrink-0" aria-hidden="true" />
            Send test alert
          </a>
        </Button>
        <Button
          variant="ghost"
          disabled={true}
          className="!text-gray-500 dark:!text-gray-500"
        >
          <a href="#" className="flex items-center gap-2">
            <RiShieldLine className="size-5 shrink-0" aria-hidden="true" />
            Incidents
          </a>
        </Button>
        <Button
          variant="ghost"
          className="!text-gray-500 dark:!text-gray-500"
          asChild
        >
          <a href="#" className="flex items-center gap-2">
            <RiPauseLargeLine className="size-5 shrink-0" aria-hidden="true" />
            Pause
          </a>
        </Button>
        <Button
          variant="ghost"
          className="!text-gray-500 dark:!text-gray-500"
          asChild
        >
          <a href="#" className="flex items-center gap-2">
            <RiSettings3Line className="size-5 shrink-0" aria-hidden="true" />
            Configure
          </a>
        </Button>
      </div>
      <dl className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {summary.map((item) => (
          <Card key={item.value}>
            <dt className="text-sm text-gray-500 dark:text-gray-500">
              {item.name}
            </dt>
            <dd className="mt-2 text-lg font-semibold text-gray-900 dark:text-gray-50">
              {item.value}
            </dd>
          </Card>
        ))}
      </dl>
      <Card className="mt-6 !p-0">
        <div className="px-6 py-3">
          <h1 className="text-base font-medium text-gray-900 dark:text-gray-50">
            Response times
          </h1>
        </div>
        <Divider className="!my-0 [&>div]:dark:!bg-gray-900" />
        <div className="rounded-b-lg px-6 pt-6 pb-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <Label htmlFor="region" className="sr-only">
                Select region
              </Label>
              <SelectNative
                name="region"
                id="region"
                defaultValue="europe"
                className="!w-full !py-1.5 sm:!w-fit"
              >
                <option value="north-america">North America</option>
                <option value="europe">Europe</option>
                <option value="asia">Asia</option>
                <option value="australia">Australia</option>
              </SelectNative>
            </div>
            <ToggleGroup
              type="single"
              defaultValue="day"
              aria-label="Time period selection"
              className="w-full sm:w-fit"
            >
              <ToggleGroupItem className="w-full" value="day" aria-label="Day">
                Day
              </ToggleGroupItem>
              <ToggleGroupItem
                className="w-full"
                value="week"
                aria-label="Week"
              >
                Week
              </ToggleGroupItem>
              <ToggleGroupItem
                className="w-full"
                value="month"
                aria-label="Month"
              >
                Month
              </ToggleGroupItem>
              <ToggleGroupItem
                disabled
                className="w-full"
                value="year"
                aria-label="Year"
              >
                Year
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          <AreaChart
            data={data}
            index="date"
            categories={[
              "Name lookup",
              "Connection",
              "TLS handshake",
              "Data transfer",
            ]}
            colors={["purple", "blue", "cyan", "emerald"]}
            fill="solid"
            valueFormatter={valueFormatter}
            onValueChange={() => {}}
            yAxisWidth={45}
            maxValue={4000}
            tickGap={15}
            className="mt-6 hidden sm:block"
          />
          <AreaChart
            data={data}
            index="date"
            categories={[
              "Name lookup",
              "Connection",
              "TLS handshake",
              "Data transfer",
            ]}
            colors={["purple", "blue", "cyan", "emerald"]}
            fill="solid"
            valueFormatter={valueFormatter}
            onValueChange={() => {}}
            showYAxis={false}
            tickGap={15}
            startEndOnly={true}
            className="mt-6 sm:hidden"
          />
        </div>
      </Card>
    </div>
  )
}
