import React from "react"
import { RiArrowDownSLine, RiCloseLine } from "@remixicon/react"

import { Button } from "@/atom/Button"
import { Card } from "@/atom/Card"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/atom/Dialog"
import { Divider } from "@/atom/Divider"
import { Input } from "@/atom/Input"
import { Label } from "@/atom/Label"

export default function TravelPlanningDialogWithDemo() {
  const [showDemo, setShowDemo] = React.useState(false)

  return (
    <div className="obfuscate">
      {/* Static card for demonstration */}
      <Card className="sm:mx-auto sm:max-w-lg">
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
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
            Plan Your Dream Vacation
          </h3>
          <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
            Start your journey by creating a new travel plan. Enter your
            destination and upload any inspiration photos.
          </p>
          <div className="mt-4 space-y-6">
            <div>
              <Label htmlFor="destination-static" className="font-medium">
                Destination{" "}
                <span className="text-red-500 dark:text-red-500">*</span>
              </Label>
              <Input
                type="text"
                id="destination-static"
                name="destination"
                autoComplete="off"
                placeholder="e.g., Paris, France"
                className="mt-2"
                required
              />
            </div>
            <div>
              <Label htmlFor="inspiration-photo-static" className="font-medium">
                Inspiration Photo{" "}
              </Label>
              <Input
                id="inspiration-photo-static"
                name="inspiration-photo"
                type="file"
                className="mt-2"
                accept="image/*"
              />
              <p className="mt-2 text-xs text-gray-500 dark:text-gray-500">
                Upload a photo that inspires your trip (JPG, PNG, or GIF).
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
            <Button className="mt-2 w-full sm:mt-0 sm:w-fit" variant="ghost">
              Cancel
            </Button>
            <Button type="submit" className="w-full sm:w-fit">
              Start Planning
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

      {showDemo && (
        <div className="flex items-center justify-center py-24">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary">Open Dialog</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
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
                  <DialogTitle className="text-lg">
                    Plan Your Dream Vacation
                  </DialogTitle>
                  <DialogDescription className="mt-1 text-sm/6">
                    Start your journey by creating a new travel plan. Enter your
                    destination and upload any inspiration photos.
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-4 space-y-6">
                  <div>
                    <Label htmlFor="destination" className="font-medium">
                      Destination{" "}
                      <span className="text-red-500 dark:text-red-500">*</span>
                    </Label>
                    <Input
                      type="text"
                      id="destination"
                      name="destination"
                      autoComplete="off"
                      placeholder="e.g., Paris, France"
                      className="mt-2"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="inspiration-photo" className="font-medium">
                      Inspiration Photo{" "}
                    </Label>
                    <Input
                      id="inspiration-photo"
                      name="inspiration-photo"
                      type="file"
                      className="mt-2"
                      accept="image/*"
                    />
                    <p className="mt-2 text-xs text-gray-500 dark:text-gray-500">
                      Upload a photo that inspires your trip (JPG, PNG, or GIF).
                    </p>
                  </div>
                </div>
                <DialogFooter className="mt-8">
                  <DialogClose asChild>
                    <Button variant="secondary">Cancel</Button>
                  </DialogClose>
                  <Button type="submit">Start Planning</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      )}
    </div>
  )
}
