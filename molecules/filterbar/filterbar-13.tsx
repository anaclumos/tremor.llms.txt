import { RiFilter2Line } from "@remixicon/react"

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
                      "mt-2 flex w-full items-center justify-between gap-x-2 rounded-md border border-gray-300 bg-white py-1.5 pl-3 pr-2 font-medium text-gray-900 shadow-sm hover:bg-gray-50 focus:z-10 focus:outline-none sm:text-sm lg:w-fit dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 hover:dark:bg-gray-950/50",
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
                          className="whitespace-nowrap font-medium"
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
