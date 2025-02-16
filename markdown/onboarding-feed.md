```example/onboarding-feed-onboarding-feed-08.tsx
"use client"

import {
  RiCheckLine,
  RiLock2Fill,
  RiNotification2Line,
  RiSoundModuleLine,
} from "@remixicon/react"

import { cx } from "@/lib/utils"

import { Button } from "@/atom/Button"
import { Card } from "@/atom/Card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/atom/Tabs"

const steps = [
  //array-start
  {
    id: 1,
    type: "done",
    title: "Created Workspace",
    description:
      "You successfully created your first workspace in privacy mode",
    activityTime: "3d ago",
  },
  {
    id: 2,
    type: "done",
    title: "Connected database",
    description: "Database connected to MySQL test database",
    activityTime: "2d ago",
  },
  {
    id: 3,
    type: "done",
    title: "Add payment method",
    description: "Payment method for monthly billing added",
    activityTime: "31min ago",
  },
  {
    id: 4,
    type: "in progress",
    title: "Audit trails",
    description: "Identifying security issues or unauthorized policy settings",
    activityTime: "Running now...",
  },
  {
    id: 5,
    type: "open",
    title: "Invite team members",
    description: "Add team members to workspace",
    activityTime: "Upcoming",
  },
  //array-end
]

const details = [
  { name: "Name", value: "test_workspace" },
  { name: "Storage used", value: "0.25/10GB" },
  { name: "Payment cycle", value: "1st day of month" },
]

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="sm:mx-auto sm:max-w-xl">
        <Card className="overflow-hidden !p-0">
          <div className="flex flex-col justify-between space-y-10 border-b border-gray-200 bg-gray-50 px-6 pt-6 pb-4 dark:border-gray-900 dark:bg-[#090E1A]">
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-50">
                Workspace setup
              </h3>
              <p className="text-sm/6 text-gray-600 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <img
                className="inline-block size-10 rounded-full"
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1887&auto=format&fit=facearea&&facepad=2&w=256&h=256"
                alt=""
              />
              <div>
                <p className="text-sm font-medium text-blue-500 dark:text-blue-500">
                  Mike Miller
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  mike.miller@example.com
                </p>
              </div>
            </div>
          </div>
          <Tabs defaultValue="tab1" className="p-6">
            <TabsList className="w-full" variant="solid">
              <TabsTrigger value="tab1" className="w-full">
                Updates
              </TabsTrigger>
              <TabsTrigger value="tab2" className="w-full">
                Details
              </TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
              <ul role="list" className="mt-6 space-y-6">
                {steps.map((step, stepindex) => (
                  <li key={step.id} className="relative flex gap-x-3">
                    <div
                      className={cx(
                        stepindex === steps.length - 1 ? "h-6" : "-bottom-6",
                        "absolute top-0 left-0 flex w-6 justify-center",
                      )}
                    >
                      <span
                        className="w-px bg-gray-200 dark:bg-gray-700"
                        aria-hidden={true}
                      />
                    </div>
                    <div className="flex items-start space-x-2.5">
                      <div className="relative flex size-6 flex-none items-center justify-center bg-white dark:bg-[#090E1A]">
                        {step.type === "done" ? (
                          <RiCheckLine
                            className="size-5 text-blue-500 dark:text-blue-500"
                            aria-hidden={true}
                          />
                        ) : step.type === "in progress" ? (
                          <div
                            className="size-2.5 rounded-full bg-blue-500 ring-4 ring-white dark:bg-blue-500 dark:ring-[#090E1A]"
                            aria-hidden={true}
                          />
                        ) : (
                          <div
                            className="size-3 rounded-full border border-gray-200 bg-white ring-4 ring-white dark:border-gray-800 dark:bg-[#090E1A] dark:ring-[#090E1A]"
                            aria-hidden={true}
                          />
                        )}
                      </div>
                      <div>
                        <p className="mt-0.5 text-sm font-medium text-gray-900 dark:text-gray-50">
                          {step.title}{" "}
                          <span className="font-normal text-gray-400 dark:text-gray-600">
                            &#8729; {step.activityTime}
                          </span>
                        </p>
                        <p className="mt-0.5 text-sm/6 text-gray-500 dark:text-gray-500">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-6 h-10 w-full">
                <a href="#" className="inline-flex items-center gap-1.5">
                  <RiNotification2Line
                    className="-ml-0.5 size-5 shrink-0"
                    aria-hidden={true}
                  />
                  Notify me when completed
                </a>
              </Button>
            </TabsContent>
            <TabsContent value="tab2">
              <h4 className="mt-6 text-xs font-medium tracking-widest text-gray-400 uppercase dark:text-gray-600">
                General
              </h4>
              <ul
                role="list"
                className="mt-3 divide-y divide-gray-200 rounded-md bg-gray-50 text-sm text-gray-500 dark:divide-gray-700 dark:bg-gray-800 dark:text-gray-400"
              >
                {details.map((item) => (
                  <li
                    key={item.name}
                    className="flex h-14 items-center justify-between px-4"
                  >
                    <span>{item.name}</span>
                    <span className="font-medium text-gray-900 dark:text-gray-50">
                      {item.value}
                    </span>
                  </li>
                ))}
              </ul>
              <h4 className="mt-6 text-xs font-medium tracking-widest text-gray-400 uppercase dark:text-gray-600">
                Privacy settings
              </h4>
              <ul
                role="list"
                className="mt-3 divide-y divide-gray-200 rounded-md bg-gray-50 text-sm text-gray-500 dark:divide-gray-700 dark:bg-gray-800 dark:text-gray-400"
              >
                <li className="flex h-14 items-center justify-between px-4">
                  <span>Users</span>
                  <div className="flex -space-x-0.5 overflow-hidden">
                    <span
                      className="relative inline-flex size-5 items-center justify-center rounded-full bg-violet-500 text-xs text-white ring-2 ring-gray-50 dark:ring-gray-800"
                      aria-hidden={true}
                    >
                      A
                    </span>
                    <span
                      className="relative inline-flex size-5 items-center justify-center rounded-full bg-fuchsia-500 text-xs text-white ring-2 ring-gray-50 dark:ring-gray-800"
                      aria-hidden={true}
                    >
                      D
                    </span>
                    <span
                      className="relative inline-flex size-5 items-center justify-center rounded-full bg-cyan-500 text-xs text-white ring-2 ring-gray-50 dark:ring-gray-800"
                      aria-hidden={true}
                    >
                      B
                    </span>
                  </div>
                </li>
                <li className="flex h-14 items-center justify-between px-4">
                  <span className="text-gray-500 dark:text-gray-400">
                    Access
                  </span>
                  <span className="inline-flex items-center gap-x-1.5 rounded-md bg-white px-2 py-1.5 text-xs font-medium text-gray-900 ring-1 ring-gray-200 ring-inset dark:bg-gray-800 dark:text-gray-50 dark:ring-gray-700">
                    <RiLock2Fill
                      className="size-4 text-gray-400 dark:text-gray-600"
                      aria-hidden={true}
                    />
                    Private
                  </span>
                </li>
              </ul>
              <Button asChild variant="secondary" className="mt-4 h-10 w-full">
                <a href="#" className="inline-flex items-center gap-1.5">
                  <RiSoundModuleLine
                    className="-ml-0.5 size-5 shrink-0"
                    aria-hidden={true}
                  />
                  Go to workspace settings
                </a>
              </Button>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  )
}
```


```example/onboarding-feed-onboarding-feed-09.tsx
"use client"

import {
  RiCheckboxCircleFill,
  RiLoader2Fill,
  RiProgress5Fill,
} from "@remixicon/react"

import { cx } from "@/lib/utils"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/atom/Accordion"
import { ProgressBar } from "@/atom/ProgressBar"

const steps = [
  //array-start
  {
    id: 1,
    type: "created",
    description: "Connect database",
    value: 100,
    createdOn: "2023-11-10 09:32",
    runTime: "15min 32s",
  },
  {
    id: 2,
    type: "created",
    description: "Import data",
    value: 100,
    createdOn: "2023-11-10 10:03",
    runTime: "21min 10s",
  },
  {
    id: 3,
    type: "in progress",
    description: "Create pipeline",
    value: 45,
    createdOn: "2023-11-10 10:06",
    runTime: null,
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="sm:mx-auto sm:max-w-xl">
        <h3 className="font-semibold text-gray-900 dark:text-gray-50">
          Deploy Pipeline
        </h3>
        <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr
        </p>
        <div className="mt-6 flex items-center space-x-2">
          {steps.map((step, stepindex) => (
            <div key={stepindex} className="w-full truncate">
              <ProgressBar value={step.value} className="[&>*]:h-1.5" />
              <div className="mt-2 flex items-center space-x-1 truncate">
                {step.value === 100 ? (
                  <RiCheckboxCircleFill
                    className="size-4 shrink-0 text-blue-500 dark:text-blue-500"
                    aria-hidden={true}
                  />
                ) : (
                  <RiProgress5Fill
                    className="size-4 shrink-0 text-blue-500 dark:text-blue-500"
                    aria-hidden={true}
                  />
                )}
                <p className="truncate text-xs text-gray-500 dark:text-gray-500">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Accordion
          type="single"
          collapsible
          defaultValue="item1"
          className="mt-8 space-y-2"
        >
          <AccordionItem
            value="item1"
            key="item1"
            className="rounded-md border border-gray-200 px-4 shadow-sm dark:border-gray-800"
          >
            <AccordionTrigger>Logs overview ({steps.length})</AccordionTrigger>
            <AccordionContent>
              <ul role="list" className="mt-2 space-y-6 pb-2">
                {steps.map((step, stepindex) => (
                  <li key={step.id} className="relative flex gap-x-3">
                    <div
                      className={cx(
                        stepindex === steps.length - 1 ? "h-6" : "-bottom-6",
                        "absolute top-0 left-0 flex w-6 justify-center",
                      )}
                    >
                      <span
                        className="w-px bg-gray-200 dark:bg-gray-700"
                        aria-hidden={true}
                      />
                    </div>
                    <div className="flex items-start space-x-2.5">
                      <div className="relative flex size-6 flex-none items-center justify-center bg-white dark:bg-gray-950">
                        {step.type === "created" ? (
                          <div className="size-3 rounded-full border border-gray-300 bg-gray-100 ring-4 ring-white dark:border-gray-700 dark:bg-gray-800 dark:ring-gray-950" />
                        ) : (
                          <RiLoader2Fill
                            className="size-[18px] shrink-0 animate-spin text-blue-500"
                            aria-hidden="true"
                          />
                        )}
                      </div>
                      <div>
                        <p className="mt-0.5 text-sm font-medium text-gray-900 dark:text-gray-50">
                          {step.description}
                        </p>
                        {step.type === "created" ? (
                          <p className="text-sm/6 text-gray-500 dark:text-gray-500">
                            Created on {step.createdOn}, Runtime: {step.runTime}
                          </p>
                        ) : (
                          <p className="text-sm/6 text-gray-500 dark:text-gray-500">
                            4/6 tasks completed, Running now...
                          </p>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
```


```example/onboarding-feed-onboarding-feed-04.tsx
"use client"

import {
  RiCalculatorLine,
  RiCheckboxCircleFill,
  RiDatabase2Line,
  RiFileChartLine,
  RiSoundModuleLine,
} from "@remixicon/react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/atom/Accordion"
import { Button } from "@/atom/Button"

const steps = [
  //array-start
  {
    title: "Sign up and create workspace",
    subtitle: "Account created",
    icon: RiSoundModuleLine,
    description:
      "You successfully created your account. Edit your account details anytime.",
    buttonText: "Edit account",
    status: "complete",
  },
  {
    title: "Connect to data source",
    subtitle: "Create connection",
    icon: RiDatabase2Line,
    description:
      "Connect to a data source. The platform supports more than 50 databases.",
    buttonText: "Connect data source",
    status: "current",
  },
  {
    title: "Create metrics",
    subtitle: "Create a metric",
    icon: RiCalculatorLine,
    description: "Create metrics using custom SQL or our intuitive query mask.",
    buttonText: "Create metric",
    status: "upcoming",
  },
  {
    title: "Create report",
    subtitle: "Create a report",
    icon: RiFileChartLine,
    description:
      "Transform metrics into visualizations and arrange them visually with our report builder.",
    buttonText: "Create report",
    status: "upcoming",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="sm:mx-auto sm:max-w-lg">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
          Getting started
        </h3>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
          Follow the steps to set up your workspace
        </p>
        <Accordion
          type="multiple"
          defaultValue={["Connect to data source"]}
          className="mt-6 space-y-2"
        >
          {steps.map((step) =>
            step.status === "complete" ? (
              <AccordionItem
                value={step.title}
                key={step.title}
                className="rounded-md border !border-gray-300 !px-4 !shadow-sm dark:!border-gray-800"
              >
                <AccordionTrigger>
                  <div className="flex items-center space-x-2">
                    {/* Additional span wrapper for icon to align it with icons in other accordions */}
                    <span
                      className="flex size-5 items-center justify-center"
                      aria-hidden={true}
                    >
                      <RiCheckboxCircleFill
                        className="size-6 shrink-0 text-emerald-500"
                        aria-hidden={true}
                      />
                    </span>
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
                      {step.title}
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="!pt-2 !pb-4">
                  <div className="flex items-center justify-center rounded-md bg-gray-50 px-4 py-5 ring-1 ring-gray-200 ring-inset dark:bg-gray-900 dark:ring-gray-800">
                    <div className="max-w-xs text-center">
                      {/* custom color used to optimize this edge case */}
                      <step.icon
                        className="mx-auto size-7 shrink-0 text-gray-300 dark:text-gray-700"
                        aria-hidden={true}
                      />
                      <p className="mt-4 text-sm font-semibold text-gray-400 dark:text-gray-600">
                        {step.subtitle}
                      </p>
                      <p className="mt-1 text-sm text-gray-400 dark:text-gray-600">
                        {step.description}
                      </p>
                      <Button className="mt-6" variant="secondary" disabled>
                        {step.buttonText}
                      </Button>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ) : step.status === "current" ? (
              <AccordionItem
                value={step.title}
                key={step.title}
                className="rounded-md border !border-gray-300 !px-4 !shadow-sm dark:!border-gray-800"
              >
                <AccordionTrigger>
                  <div className="flex items-center space-x-2">
                    <span
                      className="size-5 shrink-0 rounded-full border border-gray-200 dark:border-gray-800"
                      aria-hidden={true}
                    />
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
                      {step.title}
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="!pt-2 !pb-4">
                  <div className="flex items-center justify-center rounded-md bg-gray-50 px-4 py-5 ring-1 ring-gray-200 ring-inset dark:bg-gray-900 dark:ring-gray-800">
                    <div className="max-w-xs text-center">
                      <step.icon
                        className="mx-auto size-7 shrink-0 text-gray-400 dark:text-gray-600"
                        aria-hidden={true}
                      />
                      <p className="mt-4 text-sm font-semibold text-gray-900 dark:text-gray-50">
                        {step.subtitle}
                      </p>
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
                        {step.description}
                      </p>
                      <Button className="mt-6">{step.buttonText}</Button>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ) : (
              <AccordionItem
                value={step.title}
                key={step.title}
                className="rounded-md !border !border-gray-300 !px-4 shadow-sm dark:!border-gray-800"
              >
                <AccordionTrigger>
                  <div className="flex items-center space-x-2">
                    <span
                      className="size-5 shrink-0 rounded-full border border-gray-200 dark:border-gray-800"
                      aria-hidden={true}
                    />
                    <p className="text-sm font-medium text-gray-400 dark:text-gray-600">
                      {step.title}
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-4">
                  <div className="flex items-center justify-center rounded-md bg-gray-50 px-4 py-5 ring-1 ring-gray-200 ring-inset dark:bg-gray-900 dark:ring-gray-800">
                    <div className="max-w-xs text-center">
                      {/* custom color used to optimize this edge case */}
                      <step.icon
                        className="mx-auto size-7 shrink-0 text-gray-300 dark:text-gray-700"
                        aria-hidden={true}
                      />
                      <p className="mt-4 text-sm font-semibold text-gray-400 dark:text-gray-600">
                        {step.subtitle}
                      </p>
                      <p className="mt-1 text-sm text-gray-400 dark:text-gray-600">
                        {step.description}
                      </p>
                      <Button className="mt-6" disabled>
                        {step.buttonText}
                      </Button>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ),
          )}
        </Accordion>
      </div>
    </div>
  )
}
```


```example/onboarding-feed-onboarding-feed-10.tsx
"use client"

// Add this to your tailwind.config.ts

// keyframes: {
// revealBottom: {
//   from: {
//     opacity: '0',
//     transform: 'translateY(12px)',
//   },
//   to: {
//     opacity: '1',
//     transform: 'translateY(0px)',
//   },
// },
// },

// animation: {
//   revealBottom: 'revealBottom 300ms ease-in-out backwards',
// },
import React from "react"
import { RiRefreshLine } from "@remixicon/react"

import { Button } from "@/atom/Button"
import {
  RadioCardGroup,
  RadioCardIndicator,
  RadioCardItem,
} from "@/atom/RadioCardGroup"

const employeeCounts = [
  { value: "1", label: "1" },
  { value: "2-5", label: "2 – 5" },
  { value: "6-20", label: "6 – 20" },
  { value: "21-100", label: "21 – 100" },
  { value: "101-500", label: "101 – 500" },
  { value: "501+", label: "501+" },
]

export default function Employees() {
  const [selectedEmployeeCount, setSelectedEmployeeCount] = React.useState("")
  const [animationKey, setAnimationKey] = React.useState(0)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted with employee count:", selectedEmployeeCount)
  }

  const resetAnimation = () => {
    setAnimationKey((prevKey) => prevKey + 1)
  }

  return (
    <div className="obfuscate">
      <div className="!mx-auto max-w-lg" key={`header-${animationKey}`}>
        <div style={{ animation: "revealBottom 300ms ease-in-out backwards" }}>
          <h1 className="text-base font-semibold text-gray-900 sm:text-xl dark:text-gray-50">
            How many employees does your company have?
          </h1>
          <p className="mt-6 text-gray-700 sm:text-sm dark:text-gray-300">
            This will help us customize the experience to you.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-4">
          <fieldset>
            <legend className="sr-only">Select number of employees</legend>
            <RadioCardGroup
              value={selectedEmployeeCount}
              onValueChange={(value) => setSelectedEmployeeCount(value)}
              required
              aria-label="Number of employees"
            >
              {employeeCounts.map((count, index) => (
                <div
                  className="motion-safe:animate-revealBottom"
                  key={`${count.value}-${animationKey}`}
                  style={{
                    animationDuration: "600ms",
                    animationDelay: `${100 + index * 50}ms`,
                    animationFillMode: "backwards",
                  }}
                >
                  <RadioCardItem
                    className="active:scale-[99%] dark:bg-[#050814]"
                    value={count.value}
                    style={{
                      animationDuration: "600ms",
                      animationDelay: `${100 + index * 50}ms`,
                      animationFillMode: "backwards",
                    }}
                  >
                    <div className="flex items-center gap-2.5">
                      <RadioCardIndicator />
                      <span className="block text-gray-900 sm:text-sm dark:text-gray-50">
                        {count.label}
                      </span>
                    </div>
                  </RadioCardItem>
                </div>
              ))}
            </RadioCardGroup>
          </fieldset>
          <div className="mt-6 flex justify-between">
            <Button type="button" variant="ghost" asChild>
              <a href="#">Back</a>
            </Button>
            <Button
              className="disabled:bg-gray-200 disabled:text-gray-500"
              type="submit"
              disabled={!selectedEmployeeCount}
              aria-disabled={!selectedEmployeeCount}
            >
              Continue
            </Button>
          </div>
        </form>
        <Button
          variant="secondary"
          onClick={resetAnimation}
          className="group !mx-auto mt-8 flex gap-2"
        >
          <RiRefreshLine
            aria-hidden="true"
            className="size-5 shrink-0 transition group-hover:rotate-[25deg] group-active:rotate-90"
          />
          Retrigger Animations
        </Button>
      </div>
    </div>
  )
}
```


```example/onboarding-feed-onboarding-feed-11.tsx
"use client"

// Add this to your tailwind.config.ts

// keyframes: {
// revealBottom: {
//   from: {
//     opacity: '0',
//     transform: 'translateY(12px)',
//   },
//   to: {
//     opacity: '1',
//     transform: 'translateY(0px)',
//   },
// },
// },

// animation: {
//   revealBottom: 'revealBottom 300ms ease-in-out backwards',
// },
import React from "react"
import { RiRefreshLine } from "@remixicon/react"

import { cx } from "@/lib/utils"

import { badgeVariants } from "@/atom/Badge"
import { Button } from "@/atom/Button"
import { Card } from "@/atom/Card"
import { Checkbox } from "@/atom/Checkbox"
import { Label } from "@/atom/Label"

interface Category {
  id: string
  title: string
  subcategories: string[]
}

interface CheckedItems {
  [categoryId: string]: boolean
}

interface CategoryItemProps {
  category: Category
  checked: boolean
  onCheckedChange: (categoryId: string, checked: boolean) => void
}

const categories: Category[] = [
  {
    id: "1",
    title: "User Analytics",
    subcategories: [
      "User Segmentation",
      "Cohort Analysis",
      "Retention Analysis",
    ],
  },
  {
    id: "2",
    title: "Event Tracking",
    subcategories: ["Custom Events", "Automated Events", "Event Funnels"],
  },
  {
    id: "3",
    title: "A/B Testing",
    subcategories: ["Experiment Setup", "Variant Analysis", "Reporting"],
  },
  {
    id: "4",
    title: "User Journeys",
    subcategories: ["Journey Mapping", "Conversion Paths", "Drop-off Analysis"],
  },
  {
    id: "5",
    title: "Engagement Tracking",
    subcategories: ["Email Campaigns", "Push Notifications", "In-app Messages"],
  },
]

const CategoryItem = ({
  category,
  checked,
  onCheckedChange,
}: CategoryItemProps) => {
  return (
    <Card
      asChild
      className={cx(
        "cursor-pointer border-gray-300 p-5 transition-all active:scale-[99%] dark:border-gray-800",
        "has-[:checked]:border-blue-500",
        "has-[:checked]:dark:border-blue-500",
        // base
        "focus-within:ring-2",
        // ring color
        "focus-within:ring-blue-200 focus-within:dark:ring-blue-700/30",
        // border color
        "focus-within:border-blue-500 focus-within:dark:border-blue-700",
      )}
    >
      <Label className="block" htmlFor={category.id}>
        <div className="mb-2 flex items-center gap-2.5">
          <Checkbox
            id={category.id}
            name={category.title}
            checked={checked}
            onCheckedChange={(isChecked) =>
              onCheckedChange(category.id, isChecked === true)
            }
          />
          <span className="text-base font-medium sm:text-sm">
            {category.title}
          </span>
        </div>
        {category.subcategories.length > 0 && (
          <ul className="mt-2 ml-6 flex flex-wrap gap-1.5">
            {category.subcategories.map((subcategory) => (
              <li
                key={subcategory}
                className={badgeVariants({ variant: "neutral" })}
              >
                {subcategory}
              </li>
            ))}
          </ul>
        )}
      </Label>
    </Card>
  )
}

export default function Example() {
  const [checkedItems, setCheckedItems] = React.useState<CheckedItems>({})
  const [animationKey, setAnimationKey] = React.useState(0)
  const resetAnimation = () => {
    setAnimationKey((prevKey) => prevKey + 1)
  }

  const handleCheckedChange = (categoryId: string, isChecked: boolean) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [categoryId]: isChecked,
    }))
  }

  const isAnyItemChecked = Object.values(checkedItems).some(Boolean)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted:", checkedItems)
  }

  return (
    <div className="obfuscate">
      <div className="!mx-auto max-w-xl" key={`header-${animationKey}`}>
        <div
          style={{ animationDuration: "500ms" }}
          className="motion-safe:animate-revealBottom"
        >
          <h1 className="text-base font-semibold text-gray-900 sm:text-xl dark:text-gray-50">
            Which products are you interested in?
          </h1>
          <p className="mt-6 text-gray-700 sm:text-sm dark:text-gray-300">
            You can choose multiple. This will help us customize the experience.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-4">
          <fieldset>
            <legend className="sr-only">
              Select products you are interested in
            </legend>
            <div className="space-y-2">
              {categories.map((category, index) => (
                <div
                  className="motion-safe:animate-revealBottom"
                  key={category.id}
                  style={{
                    animationDuration: "600ms",
                    animationDelay: `${100 + index * 50}ms`,
                    animationFillMode: "backwards",
                  }}
                >
                  <CategoryItem
                    key={category.id}
                    category={category}
                    checked={checkedItems[category.id] || false}
                    onCheckedChange={handleCheckedChange}
                  />
                </div>
              ))}
            </div>
          </fieldset>
          <div className="mt-6 flex justify-end">
            <Button
              className="disabled:bg-gray-200 disabled:text-gray-500"
              type="submit"
              disabled={!isAnyItemChecked}
              aria-disabled={!isAnyItemChecked}
            >
              Continue
            </Button>
          </div>
        </form>
        <Button
          variant="secondary"
          onClick={resetAnimation}
          className="group !mx-auto mt-8 flex gap-2"
        >
          <RiRefreshLine
            aria-hidden="true"
            className="size-5 shrink-0 transition group-hover:rotate-[25deg] group-active:rotate-90"
          />
          Retrigger Animations
        </Button>
      </div>
    </div>
  )
}
```


```example/onboarding-feed-onboarding-feed-05.tsx
"use client"

import { cx } from "@/lib/utils"

const steps = [
  //array-start
  {
    id: 1,
    type: "created",
    description: "Created Workspace",
    user: {
      name: "Adam W.",
      initial: "A",
      bgColor: "bg-violet-500",
    },
    activityTime: "3d ago",
  },
  {
    id: 2,
    type: "created",
    description: "Renamed workspace",
    user: {
      name: "Peter H.",
      initial: "P",
      bgColor: "bg-orange-500",
    },
    activityTime: "2d ago",
  },
  {
    id: 3,
    type: "created",
    description: "Added MySQL database to workspace",
    user: {
      name: "Adam W.",
      initial: "A",
      bgColor: "bg-emerald-500",
    },
    activityTime: "2h ago",
  },
  {
    id: 4,
    type: "created",
    description: "Changed access permission to private",
    user: {
      name: "George S.",
      initial: "G",
      bgColor: "bg-fuchsia-500",
    },
    activityTime: "5min ago",
  },
  {
    id: 5,
    type: "in progress",
    description: "Has to run audit trails",
    user: {
      name: "Admin Workspace",
      initial: "A",
      bgColor: "bg-blue-500",
    },
    activityTime: "today 2:30pm",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="sm:max-w-lg md:mx-auto">
        <h3 className="font-medium text-gray-900 dark:text-gray-50">
          Workspace history
        </h3>
        <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr
        </p>
        <ul role="list" className="mt-6 space-y-6 pb-2">
          {steps.map((step, stepindex) => (
            <li key={step.id} className="relative flex gap-x-3">
              <div
                className={cx(
                  stepindex === steps.length - 1 ? "h-6" : "-bottom-6",
                  "absolute top-0 left-0 flex w-6 justify-center",
                )}
              >
                <span
                  className="w-px bg-gray-200 dark:bg-gray-700"
                  aria-hidden={true}
                />
              </div>
              <div className="flex items-start space-x-2">
                <div className="flex items-center space-x-2">
                  <div className="relative flex size-6 flex-none items-center justify-center bg-white transition dark:bg-gray-950">
                    {step.type === "created" ? (
                      <div className="size-3 rounded-full border border-gray-300 bg-gray-100 ring-4 ring-white transition dark:border-gray-700 dark:bg-gray-800 dark:ring-gray-950" />
                    ) : (
                      <div className="size-3 rounded-full border border-gray-300 bg-white ring-4 ring-white transition dark:border-gray-700 dark:bg-gray-950 dark:ring-gray-950" />
                    )}
                  </div>
                  <span
                    className={cx(
                      step.user.bgColor,
                      "inline-flex size-6 flex-none items-center justify-center rounded-full text-xs text-white dark:text-white",
                    )}
                    aria-hidden={true}
                  >
                    {step.user.initial}
                  </span>
                </div>
                <p className="mt-0.5 text-sm font-medium text-gray-900 dark:text-gray-50">
                  {step.user.name}
                  <span className="font-normal text-gray-500 dark:text-gray-500">
                    {" "}
                    {step.description}
                  </span>
                  <span className="font-normal text-gray-400 dark:text-gray-600">
                    {" "}
                    &#8729; {step.activityTime}
                  </span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
```


```example/onboarding-feed-onboarding-feed-13.tsx
"use client"

import { RiContrast2Line } from "@remixicon/react"

import { Badge } from "@/atom/Badge"
import { Button } from "@/atom/Button"

type IntegrationStatus = "open" | "connecting" | "complete"

interface Integration {
  id: string
  title: string
  logo: string
  status: IntegrationStatus
  recommended: boolean
}

const integrations: Integration[] = [
  {
    id: "portals",
    title: "Portals",
    logo: "https://cdn.prod.website-files.com/6365d860c7b7a7191055eb8a/66eeb02f5dfb43eaea30f200_3Portals.svg",
    status: "complete",
    recommended: true,
  },
  {
    id: "buildingblocks",
    title: "BuildingBlocks",
    logo: "https://cdn.prod.website-files.com/6365d860c7b7a7191055eb8a/66eeb032dcea757c29ff2cbb_BuildingBlocks.svg",
    status: "connecting",
    recommended: false,
  },
  {
    id: "interlock",
    title: "InterLock",
    logo: "https://cdn.prod.website-files.com/6365d860c7b7a7191055eb8a/66eeb04473ca47cb55d6b626_Interlock.svg",
    status: "open",
    recommended: false,
  },
  {
    id: "chromatools",
    title: "Chromatools",
    logo: "https://cdn.prod.website-files.com/6365d860c7b7a7191055eb8a/66eeb033344c2721a8be068e_Chromatools.svg",
    status: "open",
    recommended: false,
  },
]

export default function Example() {
  const renderIntegrationStatus = (status: IntegrationStatus) => {
    switch (status) {
      case "open":
        return (
          <Button className="w-full min-w-[126px] sm:w-fit">Connect</Button>
        )
      case "connecting":
        return (
          <Button className="w-full min-w-[126px] sm:w-fit" isLoading={true}>
            <span>Connecting</span>
          </Button>
        )
      case "complete":
        return (
          <div className="inline-flex w-full min-w-[126px] flex-nowrap items-center justify-center rounded-md border border-transparent bg-gray-300 px-3 py-2 text-center text-sm font-medium whitespace-nowrap text-white sm:w-fit dark:bg-gray-700 dark:text-white">
            Done
          </div>
        )
    }
  }

  return (
    <div className="obfuscate">
      <div className="py-16 sm:mx-auto sm:max-w-2xl">
        <div className="relative mx-auto w-fit rounded-full bg-gray-50/50 p-1 ring-1 shadow-md shadow-black/10 ring-black/10 dark:bg-gray-900 dark:ring-gray-800">
          <div className="w-fit rounded-full bg-gradient-to-b from-blue-400 to-blue-600 p-3 ring-1 shadow-sm shadow-blue-500/50 ring-white/25 ring-inset">
            <RiContrast2Line className="size-8 text-white" aria-hidden="true" />
          </div>
        </div>
        <h1 className="mt-8 max-w-lg text-xl font-semibold text-gray-900 sm:mx-auto sm:text-center sm:text-2xl dark:text-gray-50">
          Welcome to Fragment, your single platform to get answers and make
          decisions
        </h1>
        <p className="mt-8 max-w-xl text-gray-500 sm:mx-auto sm:text-center sm:text-sm/6 dark:text-gray-500">
          To get the best experience, we recommend setting up at least one
          integration. This is necessary for us to have a source to generate
          reports for you.
        </p>
        <ul role="list" className="mt-10 space-y-4">
          {integrations.map((integration) => (
            <li
              key={integration.id}
              className="relative rounded-lg bg-white p-4 ring-1 shadow-lg shadow-black/5 ring-black/5 dark:bg-gray-900/50 dark:ring-white/10"
            >
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div className="flex items-center gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border p-2 dark:border-gray-800">
                    <img
                      alt={`${integration.title} logo`}
                      src={integration.logo}
                      width={70}
                      height={70}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-gray-900 dark:text-gray-50">
                      {integration.title}
                    </h3>
                    {integration.recommended && (
                      <Badge variant="neutral">Recommended</Badge>
                    )}
                  </div>
                </div>
                <div>{renderIntegrationStatus(integration.status)}</div>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-20">
          <h4 className="text-sm font-medium text-gray-900 dark:text-gray-50">
            Need help?
          </h4>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
            Connect with a member of our team at{" "}
            <a
              href="mailto:support@company.com"
              className="font-medium text-blue-500 dark:text-blue-500"
            >
              support@company.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
```


```example/onboarding-feed-onboarding-feed-07.tsx
"use client"

import {
  RiCheckLine,
  RiLock2Fill,
  RiNotification2Line,
  RiSoundModuleLine,
} from "@remixicon/react"

import { cx } from "@/lib/utils"

import { Button } from "@/atom/Button"
import { Card } from "@/atom/Card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/atom/Tabs"

const steps = [
  //array-start
  {
    id: 1,
    type: "done",
    title: "Created Workspace",
    description:
      "You successfully created your first workspace in privacy mode",
    activityTime: "3d ago",
  },
  {
    id: 2,
    type: "done",
    title: "Connected database",
    description: "Database connected to MySQL test database",
    activityTime: "2d ago",
  },
  {
    id: 3,
    type: "done",
    title: "Add payment method",
    description: "Payment method for monthly billing added",
    activityTime: "31min ago",
  },
  {
    id: 4,
    type: "in progress",
    title: "Audit trails",
    description: "Identifying security issues or unauthorized policy settings",
    activityTime: "Running now...",
  },
  {
    id: 5,
    type: "open",
    title: "Invite team members",
    description: "Add team members to workspace",
    activityTime: "Upcoming",
  },
  //array-end
]

const details = [
  { name: "Name", value: "test_workspace" },
  { name: "Storage used", value: "0.25/10GB" },
  { name: "Payment cycle", value: "1st day of month" },
]

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="sm:mx-auto sm:max-w-xl">
        <Card>
          <h3 className="font-medium text-gray-900 dark:text-gray-50">
            Workspace setup
          </h3>
          <Tabs defaultValue="tab1" className="mt-4">
            <TabsList className="w-full" variant="solid">
              <TabsTrigger value="tab1" className="w-full">
                Updates
              </TabsTrigger>
              <TabsTrigger value="tab2" className="w-full">
                Details
              </TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
              <ul role="list" className="mt-6 space-y-6">
                {steps.map((step, stepindex) => (
                  <li key={step.id} className="relative flex gap-x-3">
                    <div
                      className={cx(
                        stepindex === steps.length - 1 ? "h-6" : "-bottom-6",
                        "absolute top-0 left-0 flex w-6 justify-center",
                      )}
                    >
                      <span
                        className="w-px bg-gray-200 dark:bg-gray-700"
                        aria-hidden={true}
                      />
                    </div>
                    <div className="flex items-start space-x-2.5">
                      <div className="relative flex size-6 flex-none items-center justify-center bg-white dark:bg-[#090E1A]">
                        {step.type === "done" ? (
                          <RiCheckLine
                            className="size-5 text-blue-500 dark:text-blue-500"
                            aria-hidden={true}
                          />
                        ) : step.type === "in progress" ? (
                          <div
                            className="size-2.5 rounded-full bg-blue-500 ring-4 ring-white dark:bg-blue-500 dark:ring-[#090E1A]"
                            aria-hidden={true}
                          />
                        ) : (
                          <div
                            className="size-3 rounded-full border border-gray-200 bg-white ring-4 ring-white dark:border-gray-800 dark:bg-[#090E1A] dark:ring-[#090E1A]"
                            aria-hidden={true}
                          />
                        )}
                      </div>
                      <div>
                        <p className="mt-0.5 text-sm font-medium text-gray-900 dark:text-gray-50">
                          {step.title}{" "}
                          <span className="font-normal text-gray-400 dark:text-gray-600">
                            &#8729; {step.activityTime}
                          </span>
                        </p>
                        <p className="mt-0.5 text-sm/6 text-gray-500 dark:text-gray-500">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-6 h-10 w-full">
                <a href="#" className="inline-flex items-center gap-1.5">
                  <RiNotification2Line
                    className="-ml-0.5 size-5 shrink-0"
                    aria-hidden={true}
                  />
                  Notify me when completed
                </a>
              </Button>
            </TabsContent>
            <TabsContent value="tab2">
              <h4 className="mt-6 text-xs font-medium tracking-widest text-gray-400 uppercase dark:text-gray-600">
                General
              </h4>
              <ul
                role="list"
                className="mt-3 divide-y divide-gray-200 rounded-md bg-gray-50 text-sm text-gray-500 dark:divide-gray-700 dark:bg-gray-800 dark:text-gray-400"
              >
                {details.map((item) => (
                  <li
                    key={item.name}
                    className="flex h-14 items-center justify-between px-4"
                  >
                    <span>{item.name}</span>
                    <span className="font-medium text-gray-900 dark:text-gray-50">
                      {item.value}
                    </span>
                  </li>
                ))}
              </ul>
              <h4 className="mt-6 text-xs font-medium tracking-widest text-gray-400 uppercase dark:text-gray-600">
                Privacy settings
              </h4>
              <ul
                role="list"
                className="mt-3 divide-y divide-gray-200 rounded-md bg-gray-50 text-sm text-gray-500 dark:divide-gray-700 dark:bg-gray-800 dark:text-gray-400"
              >
                <li className="flex h-14 items-center justify-between px-4">
                  <span>Users</span>
                  <div className="flex -space-x-0.5 overflow-hidden">
                    <span
                      className="relative inline-flex size-5 items-center justify-center rounded-full bg-violet-500 text-xs text-white ring-2 ring-gray-50 dark:ring-gray-800"
                      aria-hidden={true}
                    >
                      A
                    </span>
                    <span
                      className="relative inline-flex size-5 items-center justify-center rounded-full bg-fuchsia-500 text-xs text-white ring-2 ring-gray-50 dark:ring-gray-800"
                      aria-hidden={true}
                    >
                      D
                    </span>
                    <span
                      className="relative inline-flex size-5 items-center justify-center rounded-full bg-cyan-500 text-xs text-white ring-2 ring-gray-50 dark:ring-gray-800"
                      aria-hidden={true}
                    >
                      B
                    </span>
                  </div>
                </li>
                <li className="flex h-14 items-center justify-between px-4">
                  <span className="text-gray-500 dark:text-gray-400">
                    Access
                  </span>
                  <span className="inline-flex items-center gap-x-1.5 rounded-md bg-white px-2 py-1.5 text-xs font-medium text-gray-900 ring-1 ring-gray-200 ring-inset dark:bg-gray-800 dark:text-gray-50 dark:ring-gray-700">
                    <RiLock2Fill
                      className="size-4 text-gray-400 dark:text-gray-600"
                      aria-hidden={true}
                    />
                    Private
                  </span>
                </li>
              </ul>
              <Button asChild variant="secondary" className="mt-4 h-10 w-full">
                <a href="#" className="inline-flex items-center gap-1.5">
                  <RiSoundModuleLine
                    className="-ml-0.5 size-5 shrink-0"
                    aria-hidden={true}
                  />
                  Go to workspace settings
                </a>
              </Button>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  )
}
```


```example/onboarding-feed-onboarding-feed-06.tsx
"use client"

import { RiCheckLine } from "@remixicon/react"

import { cx } from "@/lib/utils"

const steps = [
  //array-start
  {
    id: 1,
    type: "done",
    title: "Created Workspace",
    description:
      "You successfully created your first workspace in privacy mode",
    activityTime: "3d ago",
  },
  {
    id: 2,
    type: "done",
    title: "Connected database",
    description: "Database connected to MySQL test database",
    activityTime: "2d ago",
  },
  {
    id: 3,
    type: "done",
    title: "Add payment method",
    description: "Payment method for monthly billing added",
    activityTime: "31min ago",
  },
  {
    id: 4,
    type: "in progress",
    title: "Audit trails",
    description: "Identifying security issues or unauthorized policy settings",
    activityTime: "Running now...",
  },
  {
    id: 5,
    type: "open",
    title: "Invite team members",
    description: "Add team members to workspace",
    activityTime: "Upcoming",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="sm:mx-auto sm:max-w-lg">
        <h3 className="font-medium text-gray-900 dark:text-gray-50">
          Workspace setup
        </h3>
        <ul role="list" className="mt-6 space-y-6">
          {steps.map((step, stepindex) => (
            <li key={step.id} className="relative flex gap-x-3">
              <div
                className={cx(
                  stepindex === steps.length - 1 ? "h-6" : "-bottom-6",
                  "absolute top-0 left-0 flex w-6 justify-center",
                )}
              >
                <span
                  className="w-px bg-gray-200 dark:bg-gray-700"
                  aria-hidden={true}
                />
              </div>
              <div className="flex items-start space-x-2.5">
                <div className="relative flex size-6 flex-none items-center justify-center bg-white transition dark:bg-gray-950">
                  {step.type === "done" ? (
                    <RiCheckLine
                      className="size-5 text-blue-500 dark:text-blue-500"
                      aria-hidden={true}
                    />
                  ) : step.type === "in progress" ? (
                    <div
                      className="size-2.5 rounded-full bg-blue-500 ring-4 ring-white transition dark:bg-blue-500 dark:ring-gray-950"
                      aria-hidden={true}
                    />
                  ) : (
                    <div
                      className="size-3 rounded-full border border-gray-200 bg-white ring-4 ring-white transition dark:border-gray-800 dark:bg-gray-950 dark:ring-gray-950"
                      aria-hidden={true}
                    />
                  )}
                </div>
                <div>
                  <p className="mt-0.5 text-sm font-medium text-gray-900 dark:text-gray-50">
                    {step.title}{" "}
                    <span className="font-normal text-gray-400 dark:text-gray-600">
                      &#8729; {step.activityTime}
                    </span>
                  </p>
                  <p className="mt-0.5 text-sm/6 text-gray-500 dark:text-gray-500">
                    {step.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
```


```example/onboarding-feed-onboarding-feed-12.tsx
import React from "react"
import { RiRefreshLine } from "@remixicon/react"

import { Button } from "@/atom/Button"
import {
  RadioCardGroup,
  RadioCardIndicator,
  RadioCardItem,
} from "@/atom/RadioCardGroup"

const layoutTypes = [
  { value: "table", label: "Table" },
  { value: "grid", label: "Grid" },
  { value: "list", label: "List" },
]

const TableLayout = () => (
  <div className="mt-4 h-28 overflow-hidden rounded-md bg-gradient-to-b from-blue-200 to-transparent to-[80%] p-px dark:from-blue-400">
    <div className="relative rounded-[5px] bg-white p-4 dark:bg-gray-900">
      <div className="absolute inset-0 h-full bg-gradient-to-b from-transparent to-white to-[85%] dark:to-gray-950" />
      <div className="flex flex-nowrap gap-2">
        <div className="h-4 w-full rounded bg-blue-400" aria-hidden="true" />
        <div className="h-4 w-full rounded bg-blue-400" aria-hidden="true" />
        <div className="h-4 w-full rounded bg-blue-400" aria-hidden="true" />
        <div className="h-4 w-full rounded bg-blue-400" aria-hidden="true" />
      </div>
      {[...Array(3)].map((_, index) => (
        <div key={index} className="mt-2 flex flex-nowrap gap-2">
          <div className="h-4 w-full rounded bg-blue-200" aria-hidden="true" />
          <div className="h-4 w-full rounded bg-blue-200" aria-hidden="true" />
          <div className="h-4 w-full rounded bg-blue-200" aria-hidden="true" />
          <div className="h-4 w-full rounded bg-blue-200" aria-hidden="true" />
        </div>
      ))}
    </div>
  </div>
)

const GridLayout = () => (
  <div className="mt-4 h-28 overflow-hidden rounded-md bg-gradient-to-b from-blue-200 to-transparent to-[80%] p-px dark:from-blue-400">
    <div className="relative rounded-[5px] bg-white p-4 dark:bg-gray-900">
      <div className="absolute inset-0 h-full bg-gradient-to-b from-transparent to-white to-[70%] dark:to-gray-950" />
      <div className="flex flex-nowrap gap-2">
        <div className="h-4 w-full rounded bg-blue-400" aria-hidden="true" />
      </div>
      <div className="mt-2 flex flex-nowrap gap-2">
        <div className="h-12 w-full rounded bg-blue-200" aria-hidden="true" />
        <div className="h-12 w-full rounded bg-blue-200" aria-hidden="true" />
        <div className="h-12 w-full rounded bg-blue-200" aria-hidden="true" />
        <div className="h-12 w-full rounded bg-blue-200" aria-hidden="true" />
        <div className="h-12 w-full rounded bg-blue-200" aria-hidden="true" />
      </div>
      <div className="mt-2 flex flex-nowrap gap-2">
        <div className="h-12 w-full rounded bg-blue-200" aria-hidden="true" />
        <div className="h-12 w-full rounded bg-blue-200" aria-hidden="true" />
        <div className="h-12 w-full rounded bg-blue-200" aria-hidden="true" />
        <div className="h-12 w-full rounded bg-blue-200" aria-hidden="true" />
        <div className="h-12 w-full rounded bg-blue-200" aria-hidden="true" />
      </div>
    </div>
  </div>
)

const ListLayout = () => (
  <div className="mt-4 h-28 overflow-hidden rounded-md bg-gradient-to-b from-blue-200 to-transparent to-[80%] p-px dark:from-blue-400">
    <div className="relative rounded-[5px] bg-white p-4 dark:bg-gray-900">
      <div className="absolute inset-0 h-full bg-gradient-to-b from-transparent to-white to-[80%] dark:to-gray-950" />
      <div className="flex flex-nowrap gap-2">
        <div className="h-4 w-full rounded bg-blue-400" aria-hidden="true" />
      </div>
      <div className="mt-2 flex flex-col flex-nowrap items-end gap-2">
        <div className="h-3 w-full rounded bg-blue-200" aria-hidden="true" />
        <div className="h-3 w-full rounded bg-blue-200" aria-hidden="true" />
      </div>
      <div className="mt-2 flex flex-nowrap gap-2">
        <div className="h-4 w-full rounded bg-blue-400" aria-hidden="true" />
      </div>
      <div className="mt-2 flex flex-col flex-nowrap gap-2">
        <div className="h-3 w-full rounded bg-blue-200" aria-hidden="true" />
        <div className="h-3 w-full rounded bg-blue-200" aria-hidden="true" />
      </div>
    </div>
  </div>
)

export default function Employees() {
  const [selectedLayout, setSelectedLayout] = React.useState(
    layoutTypes[0].value,
  )
  const [animationKey, setAnimationKey] = React.useState(0)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted with layout:", selectedLayout)
  }

  const resetAnimation = () => {
    setAnimationKey((prevKey) => prevKey + 1)
  }

  const renderLayout = (layout: string) => {
    switch (layout) {
      case "table":
        return <TableLayout />
      case "grid":
        return <GridLayout />
      case "list":
        return <ListLayout />
      default:
        return null
    }
  }

  return (
    <div className="obfuscate">
      <div className="!mx-auto max-w-lg">
        <div
          key={`header-${animationKey}`}
          style={{ animation: "revealBottom 300ms ease-in-out backwards" }}
        >
          <h1 className="text-base font-semibold text-gray-900 sm:text-xl dark:text-gray-50">
            Select your preferred layout
          </h1>
          <p className="mt-6 text-gray-700 sm:text-sm dark:text-gray-300">
            This will help us customize the experience for you.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-4">
          <fieldset>
            <legend className="sr-only">Select layout</legend>
            <RadioCardGroup
              value={selectedLayout}
              onValueChange={(value) => setSelectedLayout(value)}
              required
              aria-label="Layout variants"
              className="gap-4"
            >
              {layoutTypes.map((layout, index) => (
                <div
                  className="motion-safe:animate-revealBottom"
                  key={`${layout.value}-${animationKey}`}
                  style={{
                    animationDuration: "600ms",
                    animationDelay: `${100 + index * 50}ms`,
                    animationFillMode: "backwards",
                  }}
                >
                  <RadioCardItem
                    className="active:scale-[99%] dark:bg-[#050814]"
                    value={layout.value}
                    style={{
                      animationDuration: "600ms",
                      animationDelay: `${100 + index * 50}ms`,
                      animationFillMode: "backwards",
                    }}
                  >
                    <div className="flex items-center justify-between gap-2.5">
                      <span className="block text-gray-900 sm:text-sm dark:text-gray-50">
                        {layout.label}
                      </span>
                      <RadioCardIndicator />
                    </div>
                    {renderLayout(layout.value)}
                  </RadioCardItem>
                </div>
              ))}
            </RadioCardGroup>
          </fieldset>
          <div className="mt-6 flex justify-between">
            <Button type="button" variant="ghost" asChild>
              <a href="#">Back</a>
            </Button>
            <Button
              className="disabled:bg-gray-200 disabled:text-gray-500"
              type="submit"
              disabled={!selectedLayout}
              aria-disabled={!selectedLayout}
            >
              Continue
            </Button>
          </div>
        </form>
        <Button
          variant="secondary"
          onClick={resetAnimation}
          className="group !mx-auto mt-8 flex gap-2"
        >
          <RiRefreshLine
            aria-hidden="true"
            className="size-5 shrink-0 transition group-hover:rotate-[25deg] group-active:rotate-90"
          />
          Retrigger Animations
        </Button>
      </div>
    </div>
  )
}
```


```example/onboarding-feed-onboarding-feed-16.tsx
"use client"

import { RiInformationLine } from "@remixicon/react"
import React from "react"

import { cx } from "@/lib/utils"

import { Button } from "@/atom/Button"
import { Card } from "@/atom/Card"
import { Divider } from "@/atom/Divider"
import { Input } from "@/atom/Input"
import { Label } from "@/atom/Label"
import { RadioCardGroup, RadioCardItem } from "@/atom/RadioCardGroup"

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
```


```example/onboarding-feed-onboarding-feed-02.tsx
"use client"

import { RiCheckboxCircleFill } from "@remixicon/react"

import { Button } from "@/atom/Button"

const steps = [
  //array-start
  {
    id: "1.",
    title: "Set up your organization",
    description:
      "You successfully created your account. You can edit your account details anytime.",
    status: "complete",
  },
  {
    id: "2.",
    title: "Connect to data source",
    description:
      "The platform supports more than 50 databases and data warehouses.",
    status: "open",
  },
  {
    id: "3.",
    title: "Create metrics",
    description: "Create metrics using custom SQL or our intuitive query mask.",
    status: "open",
  },
  {
    id: "4.",
    title: "Create report",
    description:
      "Transform metrics into visualizations and arrange them visually.",
    status: "open",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="sm:mx-auto sm:max-w-lg">
        <h3 className="dark:text-gary-50 text-lg font-semibold text-gray-900">
          Getting started
        </h3>
        <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
          Follow the steps to set up your workspace. This allows you to create
          your first dashboard.
        </p>
        <ul className="mt-6 space-y-4">
          {steps.map((step) => (
            <li
              key={step.id}
              className="rounded-lg border border-gray-300 bg-white p-4 dark:border-gray-800 dark:bg-gray-950"
            >
              <div className="flex items-start space-x-3">
                {step.status === "complete" ? (
                  <RiCheckboxCircleFill
                    className="size-6 shrink-0 text-blue-500 dark:text-blue-500"
                    aria-hidden={true}
                  />
                ) : (
                  <span
                    className="flex size-6 items-center justify-center font-medium text-gray-500 dark:text-gray-500"
                    aria-hidden={true}
                  >
                    {step.id}
                  </span>
                )}
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-gray-50">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
                    {step.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex items-center justify-end space-x-4">
          <Button variant="ghost">Back</Button>
          <Button>Continue</Button>
        </div>
      </div>
    </div>
  )
}
```


```example/onboarding-feed-onboarding-feed-03.tsx
"use client"

import { RiCheckboxCircleFill } from "@remixicon/react"

import { ProgressBar } from "@/atom/ProgressBar"

const steps = [
  //array-start
  {
    id: "1.",
    title: "Set up your organization",
    description:
      "You successfully created your account. You can edit your account details anytime.",
    status: "complete",
    href: "#",
  },
  {
    id: "2.",
    title: "Connect to data source",
    description:
      "The platform supports more than 50 databases and data warehouses.",
    status: "open",
    href: "#",
  },
  {
    id: "3.",
    title: "Create metrics",
    description: "Create metrics using custom SQL or our intuitive query mask.",
    status: "open",
    href: "#",
  },
  {
    id: "4.",
    title: "Create report",
    description:
      "Transform metrics into visualizations and arrange them visually.",
    status: "open",
    href: "#",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="sm:mx-auto sm:max-w-lg">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
          Getting started
        </h3>
        <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
          Follow the steps to set up your workspace. This allows you to create
          your first dashboard.
        </p>
        <div className="mt-4 flex items-center justify-end space-x-4">
          <span className="text-sm text-gray-500 dark:text-gray-500">
            Step 1/{steps.length}
          </span>
          <ProgressBar value={25} showAnimation={false} className="!w-32" />
        </div>
        <ul role="list" className="mt-4 space-y-4">
          {steps.map((step) => (
            <li
              key={step.id}
              className="relative rounded-lg border border-gray-300 bg-white p-4 dark:border-gray-800 dark:bg-gray-950"
            >
              <div className="flex items-start space-x-3">
                {step.status === "complete" ? (
                  <RiCheckboxCircleFill
                    className="size-6 shrink-0 text-blue-500 dark:text-blue-500"
                    aria-hidden={true}
                  />
                ) : (
                  <span
                    className="flex size-6 items-center justify-center font-medium text-gray-500 dark:text-gray-500"
                    aria-hidden={true}
                  >
                    {step.id}
                  </span>
                )}
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-gray-50">
                    <a href={step.href} className="focus:outline-none">
                      {/* extend link to entire card */}
                      <span className="absolute inset-0" aria-hidden={true} />
                      {step.title}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
                    {step.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-6 rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
          <h4 className="text-sm font-medium text-gray-900 dark:text-gray-50">
            Need help?
          </h4>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
            Connect with a member of our team at{" "}
            <a
              href="mailto:support@company.com"
              className="font-medium text-blue-500 dark:text-blue-500"
            >
              support@company.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
```


```example/onboarding-feed-onboarding-feed-01.tsx
"use client"

import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleFill,
  RiDatabase2Line,
} from "@remixicon/react"

import { Button } from "@/atom/Button"

const steps = [
  //array-start
  {
    id: 1,
    type: "done",
    title: "Sign in with your account",
    description:
      "To get started, log in with your organization account from your company.",
    href: "#",
  },
  {
    id: 2,
    type: "in progress",
    title: "Import data",
    description:
      "Connect your database to the new workspace by using one of 20+ database connectors.",
    href: "#",
  },
  {
    id: 3,
    type: "open",
    title: "Create your first report",
    description:
      "Generate your first report by using our pre-built templates or easy-to-use report builder.",
    href: "#",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="sm:mx-auto sm:max-w-lg">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
          Hello, Maxime
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-500">
          Let's set up your first data workspace
        </p>
        <ul role="list" className="mt-8 space-y-3">
          {steps.map((step) =>
            step.type === "done" ? (
              <li key={step.id} className="relative p-4">
                <div className="flex items-start">
                  <RiCheckboxCircleFill
                    className="size-6 shrink-0 text-blue-500 dark:text-blue-500"
                    aria-hidden={true}
                  />
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="leading-5 font-medium text-gray-900 dark:text-gray-50">
                      <a href={step.href} className="focus:outline-none">
                        {/* extend link to entire list card */}
                        <span className="absolute inset-0" aria-hidden={true} />
                        {step.title}
                      </a>
                    </p>
                    <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
                      {step.description}
                    </p>
                  </div>
                </div>
              </li>
            ) : step.type === "in progress" ? (
              <li
                key={step.id}
                className="rounded-lg bg-gray-50 p-4 dark:bg-gray-900"
              >
                <div className="flex items-start">
                  <RiCheckboxBlankCircleLine
                    className="size-6 shrink-0 text-blue-500 dark:text-blue-500"
                    aria-hidden={true}
                  />
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="leading-5 font-medium text-gray-900 dark:text-gray-50">
                      {step.title}
                    </p>
                    <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
                      {step.description}
                    </p>
                    <Button className="mt-4 gap-1.5">
                      <RiDatabase2Line
                        className="-ml-0.5 size-5 shrink-0"
                        aria-hidden={true}
                      />
                      Connect database
                    </Button>
                  </div>
                </div>
              </li>
            ) : (
              <li key={step.id} className="relative p-4">
                <div className="flex items-start">
                  <RiCheckboxBlankCircleLine
                    className="size-6 shrink-0 text-gray-400 dark:text-gray-600"
                    aria-hidden={true}
                  />
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="leading-5 font-medium text-gray-400 dark:text-gray-600">
                      <a href={step.href} className="focus:outline-none">
                        {/* extend link to entire list card */}
                        <span className="absolute inset-0" aria-hidden={true} />
                        {step.title}
                      </a>
                    </p>
                    <p className="mt-1 text-sm/6 text-gray-400 dark:text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </li>
            ),
          )}
        </ul>
      </div>
    </div>
  )
}
```


```example/onboarding-feed-onboarding-feed-15.tsx
"use client"

import { RiInformationLine } from "@remixicon/react"
import React from "react"

import { cx } from "@/lib/utils"

import { Button } from "@/atom/Button"
import { Divider } from "@/atom/Divider"
import { Input } from "@/atom/Input"
import { Label } from "@/atom/Label"
import { RadioCardGroup, RadioCardItem } from "@/atom/RadioCardGroup"

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
          <h3 className="text-base font-semibold text-gray-900 dark:text-gray-50">
            Let's start with a few questions
          </h3>
          <p className="mt-1 text-sm/6 text-gray-600 dark:text-gray-400">
            Your answers will help us tailor the onboarding just for you
          </p>
          <Divider className="my-8" />
          <div className="space-y-10">
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
            <div className="space-y-2">
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
            </div>
          </div>
          <Divider className="my-10" />
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
```


```example/onboarding-feed-onboarding-feed-14.tsx
"use client"

import React from "react"
import {
  RiBankCardLine,
  RiCollapseDiagonal2Line,
  RiFlagLine,
  RiShieldStarLine,
} from "@remixicon/react"

import { cx } from "@/lib/utils"

import { Button } from "@/atom/Button"
import { Card } from "@/atom/Card"
import { Input } from "@/atom/Input"
import { Label } from "@/atom/Label"
import {
  RadioCardGroup,
  RadioCardIndicator,
  RadioCardItem,
} from "@/atom/RadioCardGroup"
import { Switch } from "@/atom/Switch"

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
            <legend className="text-sm leading-none font-medium text-gray-900 dark:text-gray-50">
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
                  "flex size-9 shrink-0 items-center justify-center rounded-full ring-1 shadow ring-gray-300 transition dark:bg-gray-950 dark:ring-gray-800",
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
```


