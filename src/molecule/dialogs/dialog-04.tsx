"use client"

import React from "react"
import { RiArrowDownSLine, RiCloseLine } from "@remixicon/react"

import { Button } from "@/atom/Button"
import { Card } from "@/atom/Card"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/atom/Dialog"
import { Divider } from "@/atom/Divider"
import { Input } from "@/atom/Input"
import { Label } from "@/atom/Label"
import { Switch } from "@/atom/Switch"

export default function Example() {
  const [showDemo, setShowDemo] = React.useState(false)
  return (
    <div className="obfuscate">
      {/* first card only for demo purpose */}
      <Card className="!p-0 sm:mx-auto sm:max-w-lg">
        <div className="absolute top-3 right-3">
          <Button
            variant="ghost"
            className="!p-2 !text-gray-400 hover:!text-gray-500 dark:!text-gray-600 hover:dark:!text-gray-500"
            aria-label="close"
          >
            <RiCloseLine className="size-5 shrink-0" />
          </Button>
        </div>
        <form action="#" method="POST">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
              Create workspace
            </h3>
            <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
              Workspaces are shared environments where teams can connect to data
              sources, run queries and create reports.
            </p>
            <div className="mt-6">
              <Label htmlFor="workspace-name" className="font-medium">
                Workspace Name
                <span className="text-red-500 dark:text-red-500">*</span>
              </Label>
              <Input
                type="text"
                id="workspace-name"
                name="workspace-name"
                placeholder="My workspace"
                className="mt-2"
                required
              />
              <Button type="submit" className="mt-4 w-full">
                Create Workspace
              </Button>
            </div>
          </div>
          <div className="rounded-b-md border-t bg-gray-50 px-6 py-4 dark:border-gray-900 dark:bg-gray-900">
            <div className="flex items-start gap-x-4">
              <Switch
                id="enable-private-workspace"
                aria-describedby="enable-description"
                name="enable-private-workspace"
                className="mt-1"
              />
              <div>
                <Label
                  htmlFor="enable-private-workspace"
                  className="font-medium"
                >
                  Set workspace to private
                </Label>
                <p
                  id="enable-description"
                  className="text-sm text-gray-500 dark:text-gray-500"
                >
                  Only those invited can access or view
                </p>
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
              <DialogContent>
                <DialogClose asChild>
                  <Button
                    className="!absolute !top-3 !right-3 !p-2 !text-gray-400 hover:!text-gray-500 dark:!text-gray-600 hover:dark:!text-gray-500"
                    variant="ghost"
                  >
                    <RiCloseLine className="size-5 shrink-0" />
                  </Button>
                </DialogClose>
                <form action="#" method="POST">
                  <DialogHeader>
                    <DialogTitle>Create workspace</DialogTitle>
                    <DialogDescription className="mt-1 text-sm/6">
                      Workspaces are shared environments where teams can connect
                      to data sources, run queries and create reports.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-6">
                    <Label htmlFor="workspace-name" className="font-medium">
                      Workspace Name
                      <span className="text-red-500 dark:text-red-500">*</span>
                    </Label>
                    <Input
                      type="text"
                      id="workspace-name"
                      name="workspace-name"
                      placeholder="My workspace"
                      className="mt-2"
                      required
                    />
                    <DialogClose asChild>
                      <Button type="submit" className="mt-4 w-full">
                        Create Workspace
                      </Button>
                    </DialogClose>
                  </div>
                  <div className="-mx-6 mt-8 -mb-6 border-t bg-gray-50 py-4 dark:border-gray-900 dark:bg-gray-900">
                    <div className="flex items-start space-x-3 px-6">
                      <Switch
                        id="enable-private-workspace"
                        aria-describedby="enable-description"
                        name="enable-private-workspace"
                        className="mt-1"
                      />
                      <div>
                        <Label
                          htmlFor="enable-private-workspace"
                          className="font-medium"
                        >
                          Set workspace to private
                        </Label>
                        <p
                          id="enable-description"
                          className="text-sm text-gray-500 dark:text-gray-500"
                        >
                          Only those invited can access or view
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </>
      ) : null}
    </div>
  )
}
