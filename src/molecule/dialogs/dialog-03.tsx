import React from "react"
import { RiArrowDownSLine, RiCloseLine } from "@remixicon/react"

import { Button } from "../../atom/Button"
import { Card } from "../../atom/Card"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../atom/Dialog"
import { Divider } from "../../atom/Divider"
import { Input } from "../../atom/Input"
import { Label } from "../../atom/Label"

export default function Example() {
  const [showDemo, setShowDemo] = React.useState(false)
  return (
    <div className="obfuscate">
      {/* first card only for demo purpose */}
      <Card className="sm:mx-auto sm:max-w-lg">
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
            Deactivate two-step authentication
          </h3>
          <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
            Enter your password to deactivate the two-step authentication login.
            Make sure to have your smartphone ready.
          </p>
          <div className="mt-6">
            <Label htmlFor="email" className="font-medium">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              className="mt-2"
              placeholder="example@email.com"
              disabled
            />
          </div>
          <div className="mt-6">
            <Label htmlFor="password" className="font-medium">
              Confirm password
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              className="mt-2"
              placeholder="Password"
            />
          </div>
          <Divider />
          <div className="mt-6 flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
            <Button className="mt-2 w-full sm:mt-0 sm:w-fit" variant="ghost">
              Cancel
            </Button>
            <Button
              type="submit"
              variant="destructive"
              className="w-full sm:w-fit"
            >
              Deactivate
            </Button>
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
                    className="!absolute !right-3 !top-3 !p-2 !text-gray-400 hover:!text-gray-500 dark:!text-gray-600 hover:dark:!text-gray-500"
                    variant="ghost"
                  >
                    <RiCloseLine className="size-5 shrink-0" />
                  </Button>
                </DialogClose>
                <form action="#" method="POST">
                  <DialogHeader>
                    <DialogTitle className="text-base">
                      Deactivate two-step authentication
                    </DialogTitle>
                    <DialogDescription className="mt-1 text-sm/6">
                      Enter your password to deactivate the two-step
                      authentication login. Make sure to have your smartphone
                      ready.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-6">
                    <Label htmlFor="email" className="font-medium">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      className="mt-2"
                      placeholder="example@email.com"
                      disabled
                    />
                  </div>
                  <div className="mt-6">
                    <Label htmlFor="password" className="font-medium">
                      Confirm password
                    </Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      className="mt-2"
                      placeholder="Password"
                    />
                  </div>
                  <Divider />
                  <DialogFooter className="mt-6">
                    <DialogClose asChild>
                      <Button
                        className="mt-2 w-full sm:mt-0 sm:w-fit"
                        variant="ghost"
                      >
                        Cancel
                      </Button>
                    </DialogClose>
                    <DialogClose asChild>
                      <Button
                        type="submit"
                        variant="destructive"
                        className="w-full sm:w-fit"
                      >
                        Deactivate
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
