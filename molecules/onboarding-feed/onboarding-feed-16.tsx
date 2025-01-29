"use client"

import { RiInformationLine } from "@remixicon/react"
import React from "react"

import { cx } from "@/lib/utils"

import { Button } from "../../atoms/Button"
import { Card } from "../../atoms/Card"
import { Divider } from "../../atoms/Divider"
import { Input } from "../../atoms/Input"
import { Label } from "../../atoms/Label"
import { RadioCardGroup, RadioCardItem } from "../../atoms/RadioCardGroup"

const roles = [
  {
    value: "software-engineer",
    label: "Software engineer",
  },
  {
    value: "executive",
    label: "Executive",
  },
  {
    value: "project-manager",
    label: "Project manager",
  },
  {
    value: "sales-role",
    label: "Sales role",
  },
  {
    value: "marketing-role",
    label: "Marketing role",
  },
  {
    value: "other",
    label: "Other",
  },
]

const industry = [
  {
    value: "information-technology",
    label: "Information Technology",
  },
  {
    value: "food-beverages",
    label: "Food & Beverages",
  },
  {
    value: "media-entertainment",
    label: "Media & Entertainment",
  },
  {
    value: "consulting-professional-services",
    label: "Consulting & Professional Services",
  },
  {
    value: "other",
    label: "Other",
  },
]

const emails = [
  {
    value: "< 1K",
    label: "< 1K",
  },
  {
    value: "1-5K",
    label: "1-5K",
  },
  {
    value: "10-20K",
    label: "10-20K",
  },
  {
    value: "20-50K",
    label: "20-50K",
  },
  {
    value: "> 50K",
    label: "> 50K",
  },
]

export default function Employees() {
  const [workspace, setWorkspace] = React.useState("")
  return (
    <div className="obfuscate">
      <div className="py-16">
        <h1 className="max-w-lg text-xl font-semibold text-gray-900 sm:mx-auto sm:text-center sm:text-2xl dark:text-gray-50">
          Welcome to Fragment
        </h1>
        <form className="mx-auto mt-20 max-w-xl">
          <Card className="!p-0">
            <div className="px-6 pt-6">
              <h3 className="text-base font-semibold text-gray-900 dark:text-gray-50">
                Let's start with a few questions
              </h3>
              <p className="mt-1 text-sm/6 text-gray-600 dark:text-gray-400">
                Your answers will help us tailor the onboarding just for you
              </p>
            </div>
            <Divider className="[&>div]:dark:!bg-gray-900" />
            <div className="space-y-10 px-6 pb-6">
              <fieldset className="space-y-3">
                <legend className="text-sm font-medium text-gray-900 dark:text-gray-50">
                  Select your job title
                </legend>
                <RadioCardGroup
                  defaultValue={roles[2].value}
                  className="!flex !flex-wrap !gap-3"
                >
                  {roles.map((item) => (
                    <RadioCardItem
                      value={item.value}
                      key={item.value}
                      className={cx(
                        "!w-fit !px-2.5 !py-2 text-sm text-gray-900 dark:text-gray-50",
                        "data-[state=checked]:bg-blue-500 data-[state=checked]:text-white data-[state=checked]:dark:bg-blue-500 data-[state=checked]:dark:text-white",
                      )}
                    >
                      {item.label}
                    </RadioCardItem>
                  ))}
                </RadioCardGroup>
              </fieldset>
              <fieldset className="space-y-3">
                <legend className="text-sm font-medium text-gray-900 dark:text-gray-50">
                  Select your industry
                </legend>
                <RadioCardGroup
                  defaultValue={industry[0].value}
                  className="!flex !flex-wrap !gap-3"
                >
                  {industry.map((item) => (
                    <RadioCardItem
                      value={item.value}
                      key={item.value}
                      className={cx(
                        "!w-fit !px-2.5 !py-2 text-sm text-gray-900 dark:text-gray-50",
                        "data-[state=checked]:bg-blue-500 data-[state=checked]:text-white data-[state=checked]:dark:bg-blue-500 data-[state=checked]:dark:text-white",
                      )}
                    >
                      {item.label}
                    </RadioCardItem>
                  ))}
                </RadioCardGroup>
              </fieldset>
              <fieldset className="space-y-3">
                <legend className="text-sm font-medium text-gray-900 dark:text-gray-50">
                  How many emails do you send per month?
                </legend>
                <RadioCardGroup
                  defaultValue={emails[3].value}
                  className="!flex !flex-wrap !gap-3"
                >
                  {emails.map((item) => (
                    <RadioCardItem
                      value={item.value}
                      key={item.value}
                      className={cx(
                        "!w-fit !px-2.5 !py-2 text-sm text-gray-900 dark:text-gray-50",
                        "data-[state=checked]:bg-blue-500 data-[state=checked]:text-white data-[state=checked]:dark:bg-blue-500 data-[state=checked]:dark:text-white",
                      )}
                    >
                      {item.label}
                    </RadioCardItem>
                  ))}
                </RadioCardGroup>
              </fieldset>
            </div>
          </Card>
          <Card className="mt-10 space-y-2">
            <Label htmlFor="workspace-name" className="font-medium">
              Give your workspace a name
            </Label>
            <Input
              type="text"
              value={workspace}
              onChange={(e) => setWorkspace(e.target.value)}
              required
              id="workspace-name"
              name="workspace-name"
              placeholder="Test workspace"
              aria-describedby="workspace-name-description"
            />
            <div className="flex items-center gap-1">
              <RiInformationLine
                className="size-4 shrink-0 text-gray-500 dark:text-gray-500"
                aria-hidden="true"
              />
              <span
                id="workspace-name-description"
                className="text-xs text-gray-500 dark:text-gray-500"
              >
                Your workspace will include all your settings and data.
              </span>
            </div>
          </Card>
          <div className="mt-10 flex justify-between">
            <Button type="button" variant="ghost" asChild>
              <a href="#">Back</a>
            </Button>
            <Button
              className="disabled:bg-gray-200 disabled:text-gray-500"
              type="submit"
              disabled={!workspace}
              aria-disabled={!workspace}
            >
              Create workspace
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
