import {
  RiDatabase2Line,
  RiFilter2Line,
  RiInformationLine,
  RiMapPin2Line,
  RiPriceTag3Line,
} from "@remixicon/react"

import { cx, focusInput } from "@/lib/utils"

import { Button } from "../../atoms/Button"
import { DateRangePicker } from "../../atoms/DatePicker"
import { Input } from "../../atoms/Input"
import { Label } from "../../atoms/Label"
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "../../atoms/Popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../atoms/Select"

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
