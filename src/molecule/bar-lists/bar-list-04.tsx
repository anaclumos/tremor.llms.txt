"use client"

import React from "react"

import { Button } from "@/atom/Button"
import { Card } from "@/atom/Card"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/atom/Dialog"
import { Input } from "@/atom/Input"
import { ProgressBar } from "@/atom/ProgressBar"

const orders = [
  //array-start
  {
    name: "ID-2340",
    date: "31/08/2023 13:45",
  },
  {
    name: "ID-2344",
    date: "30/08/2023 10:41",
  },
  {
    name: "ID-1385",
    date: "29/08/2023 09:01",
  },
  {
    name: "ID-1393",
    date: "29/08/2023 09:23",
  },
  {
    name: "ID-1264",
    date: "28/08/2023 15:12",
  },
  {
    name: "ID-434",
    date: "27/08/2023 14:27",
  },
  {
    name: "ID-1234",
    date: "26/08/2023 11:34",
  },
  {
    name: "ID-1235",
    date: "25/08/2023 18:50",
  },
  {
    name: "ID-1236",
    date: "24/08/2023 16:22",
  },
  {
    name: "ID-1237",
    date: "23/08/2023 12:15",
  },
  {
    name: "ID-1238",
    date: "22/08/2023 09:30",
  },
  {
    name: "ID-1239",
    date: "21/08/2023 08:08",
  },
  {
    name: "ID-1240",
    date: "20/08/2023 07:55",
  },
  {
    name: "ID-1241",
    date: "19/08/2023 17:09",
  },
  {
    name: "ID-1242",
    date: "18/08/2023 19:40",
  },
  {
    name: "ID-1243",
    date: "17/08/2023 14:59",
  },
  {
    name: "ID-1244",
    date: "16/08/2023 10:15",
  },
  {
    name: "ID-1245",
    date: "15/08/2023 20:30",
  },
  {
    name: "ID-1246",
    date: "14/08/2023 08:40",
  },
  {
    name: "ID-1247",
    date: "13/08/2023 12:57",
  },
  {
    name: "ID-1248",
    date: "12/08/2023 16:03",
  },
  {
    name: "ID-1249",
    date: "11/08/2023 19:22",
  },
  {
    name: "ID-1250",
    date: "10/08/2023 09:47",
  },
  {
    name: "ID-1251",
    date: "09/08/2023 13:30",
  },
  {
    name: "ID-1252",
    date: "08/08/2023 08:15",
  },
  {
    name: "ID-1253",
    date: "07/08/2023 20:00",
  },
  {
    name: "ID-1254",
    date: "06/08/2023 17:30",
  },
  //array-end
]

export default function Example() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const filteredItems = orders.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )
  return (
    <div className="obfuscate">
      <Card className="sm:mx-auto sm:max-w-lg">
        <h3 className="font-medium text-gray-900 dark:text-gray-50">
          Order overview
        </h3>
        <ProgressBar
          value={78.2}
          className="mt-6 [&>*]:bg-gray-200 [&>*]:dark:bg-gray-700"
        />
        <ul role="list" className="mt-4 flex items-center justify-between">
          <li className="flex space-x-2.5">
            <span
              className="flex w-0.5 bg-blue-500 dark:bg-blue-500"
              aria-hidden={true}
            />
            <div className="space-y-0.5">
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Fulfilled
              </p>
              <p className="font-semibold text-gray-900 dark:text-gray-50">
                1,543{" "}
                <span className="font-normal text-gray-500 dark:text-gray-500">
                  (78.2%)
                </span>
              </p>
            </div>
          </li>
          <li className="flex justify-end space-x-2.5">
            <div className="space-y-0.5">
              <p className="text-right text-sm text-gray-500 dark:text-gray-500">
                Open
              </p>
              <p className="font-semibold text-gray-900 dark:text-gray-50">
                431{" "}
                <span className="font-normal text-gray-500 dark:text-gray-500">
                  (21.8%)
                </span>
              </p>
            </div>
            <span
              className="flex w-0.5 bg-gray-200 dark:bg-gray-800"
              aria-hidden={true}
            />
          </li>
        </ul>
        <div className="mt-6 flex items-center justify-between">
          <p className="text-xs font-medium tracking-wide text-gray-900 uppercase dark:text-gray-50">
            Open orders
          </p>
          <p className="text-xs font-medium tracking-wide text-gray-900 uppercase dark:text-gray-50">
            Order date
          </p>
        </div>
        <ul
          role="list"
          className="divide-y divide-gray-200 text-sm text-gray-500 dark:divide-gray-800 dark:text-gray-500"
        >
          {orders.slice(0, 5).map((item) => (
            <li
              key={item.name}
              className="flex items-center justify-between py-1.5"
            >
              <span>{item.name}</span>
              <span>{item.date}</span>
            </li>
          ))}
        </ul>
        <div className="absolute inset-x-0 bottom-0 flex justify-center rounded-b-lg bg-gradient-to-t from-white to-transparent py-7 dark:from-[#090E1A]">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary">Show more</Button>
            </DialogTrigger>
            <DialogContent className="!p-0">
              <DialogHeader className="px-6 pt-6 pb-4">
                <Input
                  type="search"
                  placeholder="Search ID..."
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                />
                <DialogTitle className="mt-4 flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
                    Open orders
                  </p>
                  <p className="text-xs font-medium text-gray-700 uppercase dark:text-gray-300">
                    date
                  </p>
                </DialogTitle>
              </DialogHeader>
              <div className="h-96 overflow-y-scroll px-6">
                {filteredItems.length > 0 ? (
                  <ul
                    role="list"
                    className="divide-y divide-gray-200 text-sm text-gray-500 dark:divide-gray-800 dark:text-gray-500"
                  >
                    {filteredItems.map((item) => (
                      <li
                        key={item.name}
                        className="flex items-center justify-between py-2"
                      >
                        <span>{item.name}</span>
                        <span className="tabular-nums">{item.date}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="flex h-full items-center justify-center text-sm text-gray-900 dark:text-gray-50">
                    No results.
                  </p>
                )}
              </div>
              <DialogFooter className="mt-4 border-t border-gray-200 bg-gray-50 p-6 dark:border-gray-900 dark:bg-gray-950">
                <DialogClose asChild>
                  <Button className="w-full" variant="secondary">
                    Go back
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </Card>
    </div>
  )
}
