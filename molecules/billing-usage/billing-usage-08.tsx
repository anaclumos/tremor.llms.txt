"use client"

// Add this to you tailwind config

// keyframes: {
//   'fade-up': {
//     from: {
//       opacity: 0,
//       transform: 'translateY(16px)',
//     },
//     to: {
//       opacity: 1,
//       transform: 'translateY(0px)',
//     },
//   },
// }

// animation: {
//   'fade-up': 'fade-up 800ms cubic-bezier(0.34, 1.56, 0.64, 1)',
// }
import React from "react"

import { cx } from "@/lib/utils"

import { Button } from "../../atoms/Button"
import { Divider } from "../../atoms/Divider"
import { Slider } from "../../atoms/Slider"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "../../atoms/Table"

export default function Example() {
  const EXTRA_STEP = 5000
  const [extraRequests, setExtraRequests] = React.useState<number>(0)

  const MIN = 0
  const MAX = 200_000

  const handleSliderChange = (value: number[]) => {
    setExtraRequests(value[0])
  }

  return (
    <div className="mx-auto max-w-md">
      <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
        Plan configurator
      </h1>
      <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
        Customize your plan with flexible options to meet your needs
      </p>
      <div
        className={cx(
          "transition-opacity",
          extraRequests === 0 ? "opacity-50" : "opacity-100",
        )}
      >
        <div className="mb-4 mt-8 flex items-center justify-between">
          <h2 className="font-semibold text-gray-900 dark:text-gray-50">
            Extra API Requests
          </h2>
          <p className="text-sm tabular-nums text-gray-600 dark:text-gray-400">
            +{(extraRequests / 1000).toLocaleString("en-US")}k
            <span className="text-gray-600 dark:text-gray-400">/month</span>
          </p>
        </div>
        <Slider
          value={[extraRequests]}
          min={MIN}
          max={MAX}
          step={EXTRA_STEP}
          onValueChange={handleSliderChange}
        />
        <div className="mt-3 flex justify-between text-sm text-gray-600 *:w-10 dark:text-gray-400">
          <span className="text-inherit">
            +{(MIN / 1000).toLocaleString("en-US")}k
          </span>
          <span className="text-inherit">
            +{((MAX * 0.25) / 1000).toLocaleString("en-US")}k
          </span>
          <span className="text-inherit">
            +{((MAX * 0.5) / 1000).toLocaleString("en-US")}k
          </span>
          <span className="text-inherit">
            +{((MAX * 0.75) / 1000).toLocaleString("en-US")}k
          </span>
          <span className="text-inherit">
            +{(MAX / 1000).toLocaleString("en-US")}k
          </span>
        </div>
        <div className="mt-4 flex h-8 justify-end">
          {extraRequests >= MAX ? (
            <Button
              variant="secondary"
              className="animate-fade-up duration-300"
              style={{
                animationFillMode: "backwards",
              }}
              asChild
            >
              <a href="#">Custom quota</a>
            </Button>
          ) : (
            <p
              className="animate-fade-up text-sm font-semibold tabular-nums text-gray-900 duration-300 dark:text-gray-50"
              style={{
                animationFillMode: "backwards",
              }}
            >
              $
              {Math.round(((extraRequests / 1000) * 920) / 50).toLocaleString(
                "en-US",
              )}
              <span className="text-gray-600 dark:text-gray-400">/month</span>
            </p>
          )}
        </div>
      </div>

      <Divider />

      <div className="mt-8">
        <h2 className="text-md font-semibold text-gray-900 dark:text-gray-50">
          Infrastructure Charges
        </h2>
        <Table className="mt-4">
          <TableHead>
            <TableRow>
              <TableHeaderCell className="!px-0">Product</TableHeaderCell>
              <TableHeaderCell className="!px-0 text-right">
                Charge
              </TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell className="!px-0">Database Written Data</TableCell>
              <TableCell className="!px-0 text-right">$8.40</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="!px-0">Database Data Transfer</TableCell>
              <TableCell className="!px-0 text-right">$0.40</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="!px-0">Data Transfer</TableCell>
              <TableCell className="!px-0 text-right">$0.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <p className="mt-4 text-right text-sm font-semibold tabular-nums text-gray-900 dark:text-gray-50">
          Total: $
          {Math.round(8.4 + ((extraRequests / 1000) * 920) / 50).toLocaleString(
            "en-US",
          )}
          <span className="text-gray-600 dark:text-gray-400">/month</span>
        </p>
      </div>
    </div>
  )
}
