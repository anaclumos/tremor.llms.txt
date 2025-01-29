import {
  RiAppleFill,
  RiGoogleFill,
  RiMastercardLine,
  RiVisaFill,
} from "@remixicon/react"

import { cx } from "@/lib/utils"

import { DateRangePicker } from "../../atom/DatePicker"
import { Label } from "../../atom/Label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../atom/Select"

const countries = [
  // array-start
  {
    value: "switzerland",
    label: "Switzerland",
  },
  {
    value: "germany",
    label: "Germany",
  },
  {
    value: "austria",
    label: "Austria",
  },
  {
    value: "italy",
    label: "Italy",
  },
  {
    value: "france",
    label: "France",
  },
  {
    value: "denmark",
    label: "Denmark",
  },
  {
    value: "spain",
    label: "Spain",
  },
  {
    value: "united-states",
    label: "United States",
  },
  // array-end
]

const status = [
  // array-start
  {
    value: "completed",
    label: "Completed",
    color: "bg-emerald-600 dark:bg-emerald-500",
  },
  {
    value: "processing",
    label: "Processing",
    color: "bg-gray-400 dark:bg-orange-600",
  },
  {
    value: "failed",
    label: "Failed",
    color: "bg-red-500 dark:bg-red-500",
  },
  {
    value: "refund-requested",
    label: "Refund requested",
    color: "bg-violet-500 dark:bg-violet-500",
  },
  // array-end
]

const payment = [
  // array-start
  {
    value: "all",
    label: "All",
    disabled: false,
  },
  {
    value: "visa-card",
    label: "Visa card",
    disabled: false,
    icon: RiVisaFill,
  },
  {
    value: "master-card",
    label: "Mastercard",
    disabled: false,
    icon: RiMastercardLine,
  },
  {
    value: "apple-pay",
    label: "Apple pay",
    disabled: false,
    icon: RiAppleFill,
  },
  {
    value: "google-pay",
    label: "Google pay",
    disabled: true,
    icon: RiGoogleFill,
  },
  // array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="relative">
        <div className="rounded-lg border border-gray-200 bg-white pb-20 shadow-sm md:h-52 dark:border-gray-800 dark:bg-gray-950">
          <div className="grid grid-cols-1 gap-4 border-b border-gray-200 p-6 sm:grid-cols-2 md:grid-cols-4 dark:border-gray-800">
            <div className="w-full">
              <Label htmlFor="date_1" className="font-medium">
                Date
              </Label>
              <DateRangePicker
                id="date_1"
                defaultValue={{
                  from: new Date(new Date().setDate(new Date().getDate() - 10)),
                  to: new Date(),
                }}
                className="mt-2"
              />
            </div>
            <div className="w-full">
              <Label htmlFor="country_1" className="font-medium">
                Country
              </Label>
              <Select defaultValue="switzerland">
                <SelectTrigger
                  id="country_1"
                  name="country_1"
                  className="mt-2 sm:w-full"
                >
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="w-full">
              <Label htmlFor="status_1" className="font-medium">
                Status
              </Label>
              <Select defaultValue="completed">
                <SelectTrigger
                  id="status_1"
                  name="status_1"
                  className="mt-2 sm:w-full"
                >
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {status.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      <div className="flex items-center gap-x-2.5">
                        <span
                          className={cx(
                            item.color,
                            "inline-block size-2 shrink-0 rounded-full",
                          )}
                          aria-hidden={true}
                        />
                        {item.label}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="w-full">
              <Label htmlFor="payment_method" className="font-medium">
                Payment method
              </Label>
              <Select defaultValue="all">
                <SelectTrigger
                  id="payment_method"
                  name="payment_method"
                  className="mt-2 sm:w-full"
                >
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {payment.map((item) => (
                    <SelectItem
                      key={item.value}
                      value={item.value}
                      disabled={item.disabled}
                    >
                      <div className="flex items-center gap-x-2">
                        {item.icon ? (
                          <item.icon
                            className={cx(
                              item.disabled
                                ? "text-gray-400/50 dark:text-gray-600/50"
                                : "text-gray-700 dark:text-gray-300",
                              "size-4 shrink-0",
                            )}
                            aria-hidden={true}
                          />
                        ) : null}
                        {item.label}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        {/* gradient for demo purpose */}
        <div className="absolute inset-x-0 bottom-0 -mb-1 h-14 rounded-b-lg bg-gradient-to-t from-white via-white to-transparent dark:from-gray-950 dark:via-gray-950 dark:to-transparent" />
      </div>
    </div>
  )
}
