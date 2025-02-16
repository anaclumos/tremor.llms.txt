```example/bar-lists-bar-list-06.tsx
"use client"

import { BarList } from "@/atom/BarList"
import { Card } from "@/atom/Card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/atom/Tabs"

const country = [
  //array-start
  {
    name: "United States of America",
    value: 2422,
  },
  {
    name: "India",
    value: 1560,
  },
  {
    name: "Germany",
    value: 680,
  },
  {
    name: "Brazil",
    value: 580,
  },
  {
    name: "United Kingdom",
    value: 510,
  },
  //array-end
]

const city = [
  //array-start
  {
    name: "London",
    value: 1393,
  },
  {
    name: "New York",
    value: 1219,
  },
  {
    name: "Mumbai",
    value: 921,
  },
  {
    name: "Berlin",
    value: 580,
  },
  {
    name: "San Francisco",
    value: 492,
  },
  //array-end
]

const tabs = [
  {
    name: "Country",
    data: country,
  },
  {
    name: "City",
    data: city,
  },
]

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`

export default function Example() {
  return (
    <div className="obfuscate">
      <Card className="sm:mx-auto sm:max-w-lg">
        <Tabs defaultValue={tabs[1].name}>
          <div className="flex items-center justify-between">
            <p className="font-medium text-gray-900 dark:text-gray-50">
              Locations
            </p>
            <TabsList
              variant="solid"
              className="!overflow-visible !bg-transparent !p-0 dark:!bg-transparent"
            >
              {tabs.map((item) => (
                <TabsTrigger
                  value={item.name}
                  className="rounded-md data-[state=active]:ring-1 data-[state=active]:ring-gray-200 data-[state=active]:ring-inset data-[state=active]:dark:ring-gray-800"
                >
                  {item.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          <div className="mt-6">
            {tabs.map((item) => (
              <TabsContent key={item.name} value={item.name}>
                <BarList data={item.data} valueFormatter={valueFormatter} />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </Card>
    </div>
  )
}
```


```example/bar-lists-bar-list-07.tsx
"use client"

import React from "react"
import { RiCloseLine } from "@remixicon/react"
import CountUp from "react-countup"

import { BarList } from "@/atom/BarList"
import { Card } from "@/atom/Card"

// This example requires third-pary library 'react-countup' for counting animation
// npm install react-countup

const country = [
  //array-start
  {
    name: "United States of America",
    value: 5422,
  },
  {
    name: "India",
    value: 3560,
  },
  {
    name: "Germany",
    value: 680,
  },
  {
    name: "Brazil",
    value: 580,
  },
  {
    name: "United Kingdom",
    value: 510,
  },
  //array-end
]

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`

const initialSum = country.reduce(
  (sum, dataPoint) => sum + (dataPoint.value || 0),
  0,
)

export default function Example() {
  const [values, setValues] = React.useState({
    start: initialSum,
    end: initialSum,
  })
  const [selectedItem, setSelectedItem] = React.useState(undefined)

  const handleBarClick = (item: any) => {
    setSelectedItem(item.name)
    setValues(() => ({
      start: initialSum,
      end: item.value,
    }))
  }

  const clearSelectedItem = () => {
    setSelectedItem(undefined)
    setValues((prev) => ({
      start: prev.end,
      end: initialSum,
    }))
  }

  return (
    <div className="obfuscate">
      {/* Custom color used for better contrast for placeholder metric card */}
      <div className="rounded-lg border border-dashed border-gray-300 p-6 sm:mx-auto sm:max-w-lg dark:border-gray-600">
        <h4 className="text-sm text-gray-500 dark:text-gray-500">Visitors</h4>
        <p className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
          <CountUp start={values.start} end={values.end} duration={0.4} />
        </p>
      </div>
      <Card className="mt-4 sm:mx-auto sm:max-w-lg">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <p className="leading-7 font-medium text-gray-900 dark:text-gray-50">
            Locations
          </p>
          {selectedItem && (
            <button
              type="button"
              onClick={clearSelectedItem}
              className="group inline-flex items-center gap-x-1.5 rounded-md bg-gray-50 px-2 py-1.5 text-xs text-gray-900 ring-1 ring-gray-200 transition-all ring-inset hover:bg-gray-100 dark:bg-gray-500/20 dark:text-gray-50 dark:ring-gray-400/20 hover:dark:bg-gray-500/30"
              aria-label="Remove"
            >
              Country
              <span className="font-semibold">{selectedItem}</span>
              <RiCloseLine
                className="-mr-px size-4 shrink-0 text-gray-500 group-hover:text-gray-700 dark:text-gray-500 group-hover:dark:text-gray-300"
                aria-hidden={true}
              />
            </button>
          )}
        </div>
        <div className="mt-6">
          <BarList
            data={country.filter(
              (item) => !selectedItem || item.name === selectedItem,
            )}
            valueFormatter={valueFormatter}
            onValueChange={(item) => handleBarClick(item)}
          />
        </div>
      </Card>
    </div>
  )
}
```


```example/bar-lists-bar-list-05.tsx
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
          className="mt-6 [&>*]:bg-gray-200 [&>*]:dark:bg-gray-800"
        />
        <ul role="list" className="mt-3 flex items-center justify-between">
          <li>
            <div className="flex items-center space-x-2">
              <span
                className="size-2.5 rounded-sm bg-blue-500 dark:bg-blue-500"
                aria-hidden={true}
              />
              <span className="text-sm font-medium text-gray-900 dark:text-gray-50">
                Fulfilled
              </span>
            </div>
            <p className="font-semibold text-gray-900 dark:text-gray-50">
              456{" "}
              <span className="font-normal text-gray-500 dark:text-gray-500">
                (23.1%)
              </span>
            </p>
          </li>
          <li>
            <div className="flex items-center justify-end space-x-2">
              <span
                className="size-2.5 rounded-sm bg-gray-200 dark:bg-gray-800"
                aria-hidden={true}
              />
              <span className="text-sm font-medium text-gray-900 dark:text-gray-50">
                Open
              </span>
            </div>
            <p className="font-semibold text-gray-900 dark:text-gray-50">
              1,518{" "}
              <span className="font-normal text-gray-500 dark:text-gray-500">
                (76.9%)
              </span>
            </p>
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
              className="flex items-center justify-between py-2"
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
                        className="flex items-center justify-between py-1.5"
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
```


```example/bar-lists-bar-list-04.tsx
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
```


```example/bar-lists-bar-list-01.tsx
"use client"

import React from "react"

import { BarList } from "@/atom/BarList"
import { Button } from "@/atom/Button"
import { Card } from "@/atom/Card"

const pages = [
  //array-start
  {
    name: "/home",
    value: 2019,
  },
  {
    name: "/blocks",
    value: 1053,
  },
  {
    name: "/components",
    value: 997,
  },
  {
    name: "/docs/getting-started/installation",
    value: 982,
  },
  {
    name: "/docs/components/button",
    value: 782,
  },
  {
    name: "/docs/components/table",
    value: 752,
  },
  {
    name: "/docs/components/area-chart",
    value: 741,
  },
  {
    name: "/docs/components/badge",
    value: 750,
  },
  {
    name: "/docs/components/bar-chart",
    value: 750,
  },
  {
    name: "/docs/components/tabs",
    value: 720,
  },
  {
    name: "/docs/components/tracker",
    value: 723,
  },
  //array-end
]

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`

export default function Example() {
  const [extended, setExtended] = React.useState(false)
  return (
    <div className="obfuscate">
      <Card className="!p-0 sm:mx-auto sm:max-w-lg">
        <div className="flex items-center justify-between border-b border-gray-200 p-6 dark:border-gray-900">
          <p className="font-medium text-gray-900 dark:text-gray-50">
            Top pages
          </p>
          <p className="text-xs font-medium text-gray-500 uppercase dark:text-gray-500">
            Visitors
          </p>
        </div>
        <div
          className={`overflow-hidden p-6 ${extended ? "" : "max-h-[260px]"}`}
        >
          <BarList data={pages} valueFormatter={valueFormatter} />
        </div>
        <div
          className={`flex justify-center ${
            extended
              ? "px-6 pb-6"
              : "absolute inset-x-0 bottom-0 rounded-b-lg bg-gradient-to-t from-white to-transparent py-7 dark:from-[#090E1A]"
          }`}
        >
          <Button variant="secondary" onClick={() => setExtended(!extended)}>
            {extended ? "Show less" : "Show more"}
          </Button>
        </div>
      </Card>
    </div>
  )
}
```


```example/bar-lists-bar-list-03.tsx
"use client"

import React from "react"

import { BarList } from "@/atom/BarList"
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

const pages = [
  //array-start
  {
    name: "/home",
    value: 2019,
  },
  {
    name: "/blocks",
    value: 1053,
  },
  {
    name: "/components",
    value: 997,
  },
  {
    name: "/docs/getting-started/installation",
    value: 982,
  },
  {
    name: "/docs/components/button",
    value: 782,
  },
  {
    name: "/docs/components/table",
    value: 752,
  },
  {
    name: "/docs/components/area-chart",
    value: 741,
  },
  {
    name: "/docs/components/badge",
    value: 750,
  },
  {
    name: "/docs/components/bar-chart",
    value: 750,
  },
  {
    name: "/docs/components/tabs",
    value: 720,
  },
  {
    name: "/docs/components/tracker",
    value: 723,
  },
  {
    name: "/docs/components/icons",
    value: 678,
  },
  {
    name: "/docs/components/list",
    value: 645,
  },
  {
    name: "/journal",
    value: 701,
  },
  {
    name: "/spotlight",
    value: 650,
  },
  {
    name: "/resources",
    value: 601,
  },
  {
    name: "/imprint",
    value: 345,
  },
  {
    name: "/about",
    value: 302,
  },
  //array-end
]

function useResizeObserver(
  elementRef: React.RefObject<Element>,
): ResizeObserverEntry | undefined {
  const [entry, setEntry] = React.useState<ResizeObserverEntry>()

  const updateEntry = ([entry]: ResizeObserverEntry[]): void => {
    setEntry(entry)
  }

  React.useEffect(() => {
    const node = elementRef?.current
    if (!node) return

    const observer = new ResizeObserver(updateEntry)

    observer.observe(node)

    return () => observer.disconnect()
  }, [elementRef])

  return entry
}

const FilterScroll = React.forwardRef(
  ({ children }: React.PropsWithChildren, forwardedRef) => {
    const ref = React.useRef<HTMLDivElement>(null)
    React.useImperativeHandle(forwardedRef, () => ref.current)

    const [scrollProgress, setScrollProgress] = React.useState(1)

    const updateScrollProgress = React.useCallback(() => {
      if (!ref.current) return
      const { scrollTop, scrollHeight, clientHeight } = ref.current

      setScrollProgress(
        scrollHeight === clientHeight
          ? 1
          : scrollTop / (scrollHeight - clientHeight),
      )
    }, [])

    const resizeObserverEntry = useResizeObserver(ref)

    React.useEffect(updateScrollProgress, [resizeObserverEntry])

    return (
      <>
        <div
          className="h-96 overflow-y-scroll py-4"
          ref={ref}
          onScroll={updateScrollProgress}
        >
          {children}
        </div>

        <div
          className="pointer-events-none absolute bottom-0 left-0 h-16 w-full bg-gradient-to-t from-white"
          style={{ opacity: 1 - Math.pow(scrollProgress, 2) }}
        ></div>
      </>
    )
  },
)

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`

export default function Example() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const filteredItems = pages.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )
  const mainListContainer = React.useRef<HTMLDivElement>(null)
  return (
    <div className="obfuscate">
      <Card className="relative sm:mx-auto sm:max-w-lg">
        <p className="text-sm text-gray-500 dark:text-gray-500">
          Website visitors
        </p>
        <p className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
          113,061
        </p>
        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
            Top 5 pages
          </p>
          <p className="text-xs font-medium text-gray-500 uppercase dark:text-gray-500">
            Visitors
          </p>
        </div>
        <BarList
          data={pages.slice(0, 5)}
          valueFormatter={valueFormatter}
          className="mt-4"
        />
        <div className="absolute inset-x-0 bottom-0 flex justify-center rounded-b-lg bg-gradient-to-t from-white to-transparent py-7 dark:from-[#090E1A]">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary">Show more</Button>
            </DialogTrigger>
            <DialogContent className="!p-0">
              <DialogHeader className="border-b border-gray-200 px-6 pt-6 pb-4 dark:border-gray-900">
                <DialogTitle className="flex items-center justify-between">
                  <p className="text-base font-medium text-gray-900 dark:text-gray-50">
                    Pages
                  </p>
                  <p className="text-xs font-medium text-gray-500 uppercase dark:text-gray-500">
                    Visitors
                  </p>
                </DialogTitle>
                <Input
                  type="search"
                  placeholder="Search page..."
                  className="mt-2"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                />
              </DialogHeader>
              {/* only left padding used in parent to align scrollbar all the way to the right */}
              <div className="relative pl-6">
                <FilterScroll ref={mainListContainer}>
                  {filteredItems.length > 0 ? (
                    <BarList
                      data={filteredItems}
                      valueFormatter={valueFormatter}
                      className="pr-6"
                    />
                  ) : (
                    <p className="flex h-full items-center justify-center text-sm text-gray-900 dark:text-gray-50">
                      No results.
                    </p>
                  )}
                </FilterScroll>
              </div>
              <DialogFooter className="border-t border-gray-200 bg-gray-50 px-6 py-6 dark:border-gray-900 dark:bg-[#090E1A]">
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
```


```example/bar-lists-bar-list-02.tsx
"use client"

import React from "react"

import { BarList } from "@/atom/BarList"
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

const pages = [
  //array-start
  {
    name: "/home",
    value: 2019,
  },
  {
    name: "/blocks",
    value: 1053,
  },
  {
    name: "/components",
    value: 997,
  },
  {
    name: "/docs/getting-started/installation",
    value: 982,
  },
  {
    name: "/docs/components/button",
    value: 782,
  },
  {
    name: "/docs/components/table",
    value: 752,
  },
  {
    name: "/docs/components/area-chart",
    value: 741,
  },
  {
    name: "/docs/components/badge",
    value: 750,
  },
  {
    name: "/docs/components/bar-chart",
    value: 750,
  },
  {
    name: "/docs/components/tabs",
    value: 720,
  },
  {
    name: "/docs/components/tracker",
    value: 723,
  },
  {
    name: "/docs/components/icons",
    value: 678,
  },
  {
    name: "/docs/components/list",
    value: 645,
  },
  {
    name: "/journal",
    value: 701,
  },
  {
    name: "/spotlight",
    value: 650,
  },
  {
    name: "/resources",
    value: 601,
  },
  {
    name: "/imprint",
    value: 345,
  },
  {
    name: "/about",
    value: 302,
  },
  //array-end
]

function useResizeObserver(
  elementRef: React.RefObject<Element>,
): ResizeObserverEntry | undefined {
  const [entry, setEntry] = React.useState<ResizeObserverEntry>()

  const updateEntry = ([entry]: ResizeObserverEntry[]): void => {
    setEntry(entry)
  }

  React.useEffect(() => {
    const node = elementRef?.current
    if (!node) return

    const observer = new ResizeObserver(updateEntry)

    observer.observe(node)

    return () => observer.disconnect()
  }, [elementRef])

  return entry
}

const FilterScroll = React.forwardRef(
  ({ children }: React.PropsWithChildren, forwardedRef) => {
    const ref = React.useRef<HTMLDivElement>(null)
    React.useImperativeHandle(forwardedRef, () => ref.current)

    const [scrollProgress, setScrollProgress] = React.useState(1)

    const updateScrollProgress = React.useCallback(() => {
      if (!ref.current) return
      const { scrollTop, scrollHeight, clientHeight } = ref.current

      setScrollProgress(
        scrollHeight === clientHeight
          ? 1
          : scrollTop / (scrollHeight - clientHeight),
      )
    }, [])

    const resizeObserverEntry = useResizeObserver(ref)

    React.useEffect(updateScrollProgress, [resizeObserverEntry])

    return (
      <>
        <div
          className="h-96 overflow-y-scroll py-4"
          ref={ref}
          onScroll={updateScrollProgress}
        >
          {children}
        </div>
        <div
          className="pointer-events-none absolute bottom-0 left-0 h-16 w-full bg-gradient-to-t from-white"
          style={{ opacity: 1 - Math.pow(scrollProgress, 2) }}
        ></div>
      </>
    )
  },
)

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`

export default function Example() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const filteredItems = pages.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )
  const mainListContainer = React.useRef<HTMLDivElement>(null)
  return (
    <div className="obfuscate">
      <Card className="!p-0 sm:mx-auto sm:max-w-lg">
        <div className="flex items-center justify-between border-b border-gray-200 p-6 dark:border-gray-900">
          <p className="font-medium text-gray-900 dark:text-gray-50">
            Top pages
          </p>
          <p className="text-xs font-medium text-gray-500 uppercase dark:text-gray-500">
            Visitors
          </p>
        </div>
        <BarList
          data={pages.slice(0, 5)}
          valueFormatter={valueFormatter}
          className="p-6"
        />
        <div className="absolute inset-x-0 bottom-0 flex justify-center rounded-b-lg bg-gradient-to-t from-white to-transparent py-7 dark:from-[#090E1A]">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary">Show more</Button>
            </DialogTrigger>
            <DialogContent className="!p-0">
              <DialogHeader className="border-b border-gray-200 px-6 pt-6 pb-4 dark:border-gray-900">
                <DialogTitle className="flex items-center justify-between">
                  <p className="text-base font-medium text-gray-900 dark:text-gray-50">
                    Pages
                  </p>
                  <p className="text-xs font-medium text-gray-500 uppercase dark:text-gray-500">
                    Visitors
                  </p>
                </DialogTitle>
                <Input
                  type="search"
                  placeholder="Search page..."
                  className="mt-2"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                />
              </DialogHeader>
              {/* only left padding used in parent to align scrollbar all the way to the right */}
              <div className="relative pl-6">
                <FilterScroll ref={mainListContainer}>
                  {filteredItems.length > 0 ? (
                    <BarList
                      data={filteredItems}
                      valueFormatter={valueFormatter}
                      className="pr-6"
                    />
                  ) : (
                    <p className="flex h-full items-center justify-center text-sm text-gray-900 dark:text-gray-50">
                      No results.
                    </p>
                  )}
                </FilterScroll>
              </div>
              <DialogFooter className="border-t border-gray-200 bg-gray-50 px-6 py-6 dark:border-gray-900 dark:bg-[#090E1A]">
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
```


