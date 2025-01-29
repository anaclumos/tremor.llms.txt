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

import { badgeVariants } from "../../atoms/Badge"
import { Button } from "../../atoms/Button"
import { Card } from "../../atoms/Card"
import { Checkbox } from "../../atoms/Checkbox"
import { Label } from "../../atoms/Label"

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
          <ul className="ml-6 mt-2 flex flex-wrap gap-1.5">
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
