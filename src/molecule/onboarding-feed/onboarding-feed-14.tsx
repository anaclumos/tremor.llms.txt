"use client"

import React from "react"
import {
  RiBankCardLine,
  RiCollapseDiagonal2Line,
  RiFlagLine,
  RiShieldStarLine,
} from "@remixicon/react"

import { cx } from "@/lib/utils"

import { Button } from "../../atom/Button"
import { Card } from "../../atom/Card"
import { Input } from "../../atom/Input"
import { Label } from "../../atom/Label"
import {
  RadioCardGroup,
  RadioCardIndicator,
  RadioCardItem,
} from "../../atom/RadioCardGroup"
import { Switch } from "../../atom/Switch"

const contractOptions = [
  {
    value: "fixed-rate",
    label: "Fixed rate",
    icon: RiCollapseDiagonal2Line,
  },
  {
    value: "pay-as-you-go",
    label: "Pay as you go",
    icon: RiBankCardLine,
  },
  {
    value: "milestone",
    label: "Milestone",
    icon: RiFlagLine,
  },
]

export default function Employees() {
  const [selectedContractOption, setSelectedContractOption] =
    React.useState("fixed-rate")
  const [coverage, setCoverage] = React.useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted:", selectedContractOption)
  }

  return (
    <div className="obfuscate">
      <div className="mx-auto max-w-2xl">
        <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
          Step 1
        </span>
        <h1 className="text-lg font-semibold text-gray-900 sm:text-xl dark:text-gray-50">
          Create a new contract
        </h1>
        <p className="mt-6 text-gray-700 sm:text-sm dark:text-gray-300">
          Create a contract for an individual contractor and start growing your
          business easily.
        </p>
        <form onSubmit={handleSubmit} className="mt-12">
          <fieldset>
            <legend className="text-sm font-medium leading-none text-gray-900 dark:text-gray-50">
              Choose your contracting agreement
            </legend>
            <RadioCardGroup
              value={selectedContractOption}
              onValueChange={(value) => setSelectedContractOption(value)}
              required
              aria-label="Contract type"
              className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3"
            >
              {contractOptions.map((item, index) => (
                <RadioCardItem
                  key={item.label}
                  className="p-3 active:scale-[99%] dark:bg-[#050814]"
                  value={item.value}
                  style={{
                    animationDuration: "600ms",
                    animationDelay: `${100 + index * 50}ms`,
                    animationFillMode: "backwards",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <item.icon
                        className="size-5 shrink-0 text-blue-500"
                        aria-hidden="true"
                      />
                      <span className="block font-medium text-gray-900 sm:text-sm dark:text-gray-50">
                        {item.label}
                      </span>
                    </div>
                    <RadioCardIndicator />
                  </div>
                </RadioCardItem>
              ))}
            </RadioCardGroup>
          </fieldset>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-6">
            <div className="col-span-full sm:col-span-3">
              <Label htmlFor="first-name" className="font-medium">
                First name
              </Label>
              <Input
                required
                type="text"
                id="first-name"
                name="first-name"
                autoComplete="given-name"
                placeholder="Emma"
                className="mt-2"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <Label htmlFor="last-name" className="font-medium">
                Last name
              </Label>
              <Input
                required
                type="text"
                id="last-name"
                name="last-name"
                autoComplete="family-name"
                placeholder="Crown"
                className="mt-2"
              />
            </div>
            <div className="col-span-full">
              <Label htmlFor="email" className="font-medium">
                Email
              </Label>
              <Input
                required
                type="text"
                id="email"
                name="email"
                autoComplete="email"
                placeholder="emma@company.com"
                className="mt-2"
              />
            </div>
            <div className="col-span-full">
              <Label htmlFor="address" className="font-medium">
                Address
              </Label>
              <Input
                required
                type="text"
                id="address"
                name="address"
                autoComplete="street-address"
                placeholder="29 Park Street"
                className="mt-2"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <Label htmlFor="state" className="font-medium">
                Country
              </Label>
              <Input
                required
                type="text"
                id="country"
                name="country"
                autoComplete="country-name"
                placeholder="Switzerland"
                className="mt-2"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <Label htmlFor="city" className="font-medium">
                City
              </Label>
              <Input
                required
                type="text"
                id="city"
                name="city"
                autoComplete="address-level2"
                placeholder="Zurich"
                className="mt-2"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <Label htmlFor="postal-code" className="font-medium">
                ZIP / Postal code
              </Label>
              <Input
                required
                id="postal-code"
                name="postal-code"
                autoComplete="postal-code"
                placeholder="8000"
                className="mt-2"
              />
            </div>
          </div>
          <Card className="mt-8 border-gray-300 dark:border-gray-800">
            <div className="gap-4 sm:flex sm:flex-nowrap sm:items-start">
              <div
                className={cx(
                  "flex size-9 shrink-0 items-center justify-center rounded-full shadow ring-1 ring-gray-300 transition dark:bg-gray-950 dark:ring-gray-800",
                  coverage
                    ? "bg-blue-500 ring-blue-100 dark:bg-blue-400 dark:ring-blue-200"
                    : "",
                )}
              >
                <RiShieldStarLine
                  className={cx(
                    "size-5 text-blue-500 transition dark:text-blue-400",
                    coverage ? "text-white dark:text-white" : "",
                  )}
                />
              </div>
              <div className="mt-4 sm:mt-0">
                <h2 className="font-medium text-gray-900 dark:text-gray-50">
                  Contract Coverage
                </h2>
                <p className="mt-1 text-gray-700 sm:text-sm dark:text-gray-400">
                  Reduce misclassification risk and limit liability when hiring
                  contractors abroad.
                </p>
                <div className="mt-8 flex items-center justify-between">
                  <Label htmlFor="coverage" className="text-sm/6">
                    Enable worldwide CoR coverage{" "}
                  </Label>
                  <Switch
                    id="coverage"
                    checked={coverage}
                    onCheckedChange={setCoverage}
                  />
                </div>
              </div>
            </div>
          </Card>
          <div className="mt-6 flex justify-between">
            <Button type="button" variant="ghost" asChild>
              <a href="#">Back</a>
            </Button>
            <Button
              className="disabled:bg-gray-200 disabled:text-gray-500"
              type="submit"
              disabled={!selectedContractOption}
              aria-disabled={!selectedContractOption}
            >
              Continue
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
