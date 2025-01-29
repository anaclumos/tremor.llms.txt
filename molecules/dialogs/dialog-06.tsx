"use client"

import { useState } from "react"
import { RiAppsFill, RiArrowDownSLine, RiCloseLine } from "@remixicon/react"

import { Button } from "../../atoms/Button"
import { Card } from "../../atoms/Card"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../atoms/Dialog"
import { Divider } from "../../atoms/Divider"
import { Label } from "../../atoms/Label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../atoms/Select"

export default function Example() {
  const [showDemo, setShowDemo] = useState(false)
  return (
    <div className="obfuscate">
      {/* first card only for demo purpose */}
      <Card className="!p-0 sm:mx-auto sm:max-w-5xl">
        <div className="absolute right-3 top-3">
          <Button
            variant="ghost"
            className="!p-2 !text-gray-400 hover:!text-gray-500 dark:!text-gray-600 hover:dark:!text-gray-500"
            aria-label="close"
          >
            <RiCloseLine className="size-5 shrink-0" />
          </Button>
        </div>
        <form action="#" method="POST">
          <div className="border-b border-gray-200 px-6 py-4 dark:border-gray-900">
            <h3 className="font-medium text-gray-900 dark:text-gray-50">
              Add application
            </h3>
          </div>
          <div className="flex flex-col-reverse md:flex-row">
            <div className="flex flex-col justify-between border-gray-200 md:w-80 md:border-r dark:border-gray-900">
              <div className="flex-1 grow">
                <div className="border-t border-gray-200 p-6 md:border-none dark:border-gray-900">
                  <div className="flex items-center space-x-3">
                    <div className="inline-flex shrink-0 items-center justify-center rounded bg-gray-100 p-3 dark:bg-gray-800">
                      <RiAppsFill
                        className="size-5 text-gray-700 dark:text-gray-300"
                        aria-hidden={true}
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 dark:text-gray-50">
                        Astro Analytics
                      </h3>
                      <p className="mt-0.5 text-sm text-gray-700 dark:text-gray-300">
                        Lorem ipsum dolor sit amet
                      </p>
                    </div>
                  </div>
                  <Divider />
                  <h4 className="text-sm font-medium text-gray-900 dark:text-gray-50">
                    Description:
                  </h4>
                  <p className="mt-1 text-sm/6 text-gray-600 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                  </p>
                  <h4 className="mt-6 text-sm font-medium text-gray-900 dark:text-gray-50">
                    Supported functionality:
                  </h4>
                  <p className="mt-1 text-sm/6 text-gray-600 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod.
                  </p>
                </div>
              </div>
              <div className="flex justify-between border-t border-gray-200 p-6 dark:border-gray-900">
                <Button variant="secondary">Cancel</Button>
                <Button type="submit">Connect</Button>
              </div>
            </div>
            <div className="flex-1 space-y-6 p-6 md:px-6 md:pb-20 md:pt-6">
              <div>
                <div className="flex items-center space-x-3">
                  <div className="inline-flex size-6 items-center justify-center rounded-md bg-gray-100 text-sm text-gray-900 dark:bg-gray-800 dark:text-gray-50">
                    1
                  </div>
                  <Label htmlFor="connection" className="font-medium">
                    Choose a connection
                  </Label>
                </div>
                <Select defaultValue="1">
                  <SelectTrigger
                    name="connection"
                    id="connection"
                    className="mt-4"
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">postgres_live</SelectItem>
                    <SelectItem value="2">postgres_test</SelectItem>
                    <SelectItem value="3">bigQuery_live</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <div className="flex items-center space-x-3">
                  <div className="inline-flex size-6 items-center justify-center rounded-md bg-gray-100 text-sm text-gray-900 dark:bg-gray-800 dark:text-gray-50">
                    2
                  </div>
                  <Label htmlFor="dataset" className="font-medium">
                    Select dataset
                  </Label>
                </div>
                <Select defaultValue="1">
                  <SelectTrigger name="dataset" id="dataset" className="mt-4">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">starterkit_sales</SelectItem>
                    <SelectItem value="2">starterkit_ecommerce</SelectItem>
                    <SelectItem value="3">starterkit_logs</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <div className="flex items-center space-x-3">
                  <div className="inline-flex size-6 items-center justify-center rounded-md bg-gray-100 text-sm text-gray-900 dark:bg-gray-800 dark:text-gray-50">
                    3
                  </div>
                  <Label htmlFor="metrics" className="font-medium">
                    Select metrics to track
                  </Label>
                </div>
                <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                </p>
                <Select defaultValue="2">
                  <SelectTrigger name="metrics" id="metrics" className="mt-4">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">all options</SelectItem>
                    <SelectItem value="2">log & health data</SelectItem>
                    <SelectItem value="3">product usage data</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <div className="flex items-center space-x-3">
                  <div className="inline-flex size-6 items-center justify-center rounded-md bg-gray-100 text-sm text-gray-900 dark:bg-gray-800 dark:text-gray-50">
                    4
                  </div>
                  <Label htmlFor="import-method" className="font-medium">
                    Select import method
                  </Label>
                </div>
                <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                </p>
                <Select defaultValue="1">
                  <SelectTrigger
                    name="import-method"
                    id="import-method"
                    className="mt-4"
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">direct query</SelectItem>
                    <SelectItem value="2">import</SelectItem>
                    <SelectItem value="3">
                      direct query (incremental load)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </form>
      </Card>
      <Divider className="mt-12">
        <Button
          variant="light"
          onClick={() => setShowDemo(!showDemo)}
          className="group !rounded-full !bg-gray-100 !text-gray-500 hover:!bg-gray-100 dark:!bg-gray-900 dark:!text-gray-500 hover:dark:!bg-gray-900"
        >
          <RiArrowDownSLine
            aria-hidden={true}
            className={`-ml-1 size-5 transition-all group-hover:text-gray-900 group-hover:dark:text-gray-50 ${showDemo ? "rotate-180" : ""} `}
          />
          <span className="ml-1 transition-all group-hover:text-gray-900 group-hover:dark:text-gray-50">
            {showDemo ? "Hide Demo" : "Show Demo"}
          </span>
        </Button>
      </Divider>
      {showDemo ? (
        <>
          <div className="flex items-center justify-center py-24">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary">Open Dialog</Button>
              </DialogTrigger>
              <DialogContent className="!p-0 sm:max-w-5xl">
                <DialogClose asChild>
                  <Button
                    className="!absolute !right-3 !top-3 !p-2 !text-gray-400 hover:!text-gray-500 dark:!text-gray-600 hover:dark:!text-gray-500"
                    variant="ghost"
                  >
                    <RiCloseLine className="size-5 shrink-0" />
                  </Button>
                </DialogClose>
                <DialogHeader className="border-b border-gray-200 px-6 py-4 dark:border-gray-900">
                  <DialogTitle className="text-base">
                    Add application
                  </DialogTitle>
                </DialogHeader>
                <div className="flex flex-col-reverse md:flex-row">
                  <div className="flex flex-col justify-between border-gray-200 md:w-80 md:border-r dark:border-gray-900">
                    <div className="flex-1 grow">
                      <div className="border-t border-gray-200 p-6 md:border-none dark:border-gray-900">
                        <div className="flex items-center space-x-3">
                          <div className="inline-flex shrink-0 items-center justify-center rounded bg-gray-100 p-3 dark:bg-gray-800">
                            <RiAppsFill
                              className="size-5 text-gray-700 dark:text-gray-300"
                              aria-hidden={true}
                            />
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-50">
                              Astro Analytics
                            </h3>
                            <p className="mt-0.5 text-sm text-gray-700 dark:text-gray-300">
                              Lorem ipsum dolor sit amet
                            </p>
                          </div>
                        </div>
                        <Divider />
                        <h4 className="text-sm font-medium text-gray-900 dark:text-gray-50">
                          Description:
                        </h4>
                        <p className="mt-1 text-sm/6 text-gray-600 dark:text-gray-400">
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr.
                        </p>
                        <h4 className="mt-6 text-sm font-medium text-gray-900 dark:text-gray-50">
                          Supported functionality:
                        </h4>
                        <p className="mt-1 text-sm/6 text-gray-600 dark:text-gray-400">
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod.
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between border-t border-gray-200 p-6 dark:border-gray-900">
                      <Button variant="secondary">Cancel</Button>
                      <Button type="submit">Connect</Button>
                    </div>
                  </div>
                  <div className="flex-1 space-y-6 p-6 md:px-6 md:pb-20 md:pt-6">
                    <div>
                      <div className="flex items-center space-x-3">
                        <div className="inline-flex size-6 items-center justify-center rounded-md bg-gray-100 text-sm text-gray-900 dark:bg-gray-800 dark:text-gray-50">
                          1
                        </div>
                        <Label htmlFor="connection" className="font-medium">
                          Choose a connection
                        </Label>
                      </div>
                      <Select defaultValue="1">
                        <SelectTrigger
                          name="connection"
                          id="connection"
                          className="mt-4"
                        >
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">postgres_live</SelectItem>
                          <SelectItem value="2">postgres_test</SelectItem>
                          <SelectItem value="3">bigQuery_live</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <div className="flex items-center space-x-3">
                        <div className="inline-flex size-6 items-center justify-center rounded-md bg-gray-100 text-sm text-gray-900 dark:bg-gray-800 dark:text-gray-50">
                          2
                        </div>
                        <Label htmlFor="dataset" className="font-medium">
                          Select dataset
                        </Label>
                      </div>
                      <Select defaultValue="1">
                        <SelectTrigger
                          name="dataset"
                          id="dataset"
                          className="mt-4"
                        >
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">starterkit_sales</SelectItem>
                          <SelectItem value="2">
                            starterkit_ecommerce
                          </SelectItem>
                          <SelectItem value="3">starterkit_logs</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <div className="flex items-center space-x-3">
                        <div className="inline-flex size-6 items-center justify-center rounded-md bg-gray-100 text-sm text-gray-900 dark:bg-gray-800 dark:text-gray-50">
                          3
                        </div>
                        <Label htmlFor="metrics" className="font-medium">
                          Select metrics to track
                        </Label>
                      </div>
                      <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                      </p>
                      <Select defaultValue="2">
                        <SelectTrigger
                          name="metrics"
                          id="metrics"
                          className="mt-4"
                        >
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">all options</SelectItem>
                          <SelectItem value="2">log & health data</SelectItem>
                          <SelectItem value="3">product usage data</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <div className="flex items-center space-x-3">
                        <div className="inline-flex size-6 items-center justify-center rounded-md bg-gray-100 text-sm text-gray-900 dark:bg-gray-800 dark:text-gray-50">
                          4
                        </div>
                        <Label htmlFor="import-method" className="font-medium">
                          Select import method
                        </Label>
                      </div>
                      <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                      </p>
                      <Select defaultValue="1">
                        <SelectTrigger
                          name="import-method"
                          id="import-method"
                          className="mt-4"
                        >
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">direct query</SelectItem>
                          <SelectItem value="2">import</SelectItem>
                          <SelectItem value="3">
                            direct query (incremental load)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </>
      ) : null}
    </div>
  )
}
