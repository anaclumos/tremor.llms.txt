"use client"

import React from "react"

import { BarList } from "../../atom/BarList"
import { Button } from "../../atom/Button"
import { Card } from "../../atom/Card"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../atom/Dialog"
import { Input } from "../../atom/Input"

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
          <p className="text-xs font-medium uppercase text-gray-500 dark:text-gray-500">
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
              <DialogHeader className="border-b border-gray-200 px-6 pb-4 pt-6 dark:border-gray-900">
                <DialogTitle className="flex items-center justify-between">
                  <p className="text-base font-medium text-gray-900 dark:text-gray-50">
                    Pages
                  </p>
                  <p className="text-xs font-medium uppercase text-gray-500 dark:text-gray-500">
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
