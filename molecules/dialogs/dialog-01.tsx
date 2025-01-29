"use client"

import React from "react"
import { RiArrowDownSLine, RiCloseLine } from "@remixicon/react"

import { Button } from "../../atoms/Button"
import { Card } from "../../atoms/Card"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../atoms/Dialog"
import { Divider } from "../../atoms/Divider"
import { Input } from "../../atoms/Input"
import { Label } from "../../atoms/Label"

export default function Example() {
  const [showDemo, setShowDemo] = React.useState(false)
  return (
    <div className="obfuscate">
      {/* first card only for demo purpose */}
      <Card className="sm:mx-auto sm:max-w-md">
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
          <h3 className="font-semibold text-gray-900 dark:text-gray-50">
            Transfer ownership
          </h3>
          <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
            Are you sure you want to transfer the ownership of this workspace to
            Emma?
          </p>
          <div className="mt-6">
            <Label htmlFor="transfer-ownership" className="font-medium">
              Confirm password
            </Label>
            <Input
              id="transfer-ownership"
              name="transfer-ownership"
              type="password"
              className="mt-2"
              placeholder="Password"
            />
          </div>
          <Button type="submit" className="mt-4 w-full">
            Transfer ownership
          </Button>
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
              <DialogContent className="max-w-md">
                <DialogClose asChild>
                  <Button
                    className="!absolute !right-3 !top-3 !p-2 !text-gray-400 hover:!text-gray-500 dark:!text-gray-600 hover:dark:!text-gray-500"
                    variant="ghost"
                  >
                    <RiCloseLine className="size-5 shrink-0" />
                  </Button>
                </DialogClose>
                <form action="#" method="POST">
                  <DialogHeader>
                    <DialogTitle className="text-base">
                      Transfer ownership
                    </DialogTitle>
                    <DialogDescription className="mt-1 text-sm/6">
                      Are you sure you want to transfer the ownership of this
                      workspace to Emma?
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-6">
                    <Label htmlFor="transfer-ownership" className="font-medium">
                      Confirm password
                    </Label>
                    <Input
                      id="transfer-ownership"
                      name="transfer-ownership"
                      type="password"
                      className="mt-2"
                      placeholder="Password"
                    />
                  </div>
                  <DialogFooter className="mt-4">
                    <DialogClose asChild>
                      <Button type="submit" className="w-full">
                        Transfer ownership
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </>
      ) : null}
    </div>
  )
}
