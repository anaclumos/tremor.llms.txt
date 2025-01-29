"use client"

import { Button } from "../../atoms/Button"
import { Divider } from "../../atoms/Divider"
import { Input } from "../../atoms/Input"
import { Label } from "../../atoms/Label"
import { RadioGroup, RadioGroupItem } from "../../atoms/RadioGroup"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../atoms/Select"
import { Textarea } from "../../atoms/Textarea"

export default function Example() {
  return (
    <div className="obfuscate">
      <form>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <h2 className="font-semibold text-gray-900 dark:text-gray-50">
              Personal information
            </h2>
            <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
            </p>
          </div>
          <div className="sm:max-w-3xl md:col-span-2">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
              <div className="col-span-full sm:col-span-3">
                <Label htmlFor="first-name" className="font-medium">
                  First name
                </Label>
                <Input
                  type="text"
                  id="first-name"
                  name="first-name"
                  autoComplete="given-name"
                  placeholder="Emma"
                  className="mt-2"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <Label htmlFor="last-name" className="font-medium">
                  Last name
                </Label>
                <Input
                  id="last-name"
                  name="last-name"
                  autoComplete="family-name"
                  placeholder="Crown"
                  className="mt-2"
                />
              </div>
              <div className="col-span-full">
                <Label htmlFor="email" className="font-medium">
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  placeholder="emma@company.com"
                  className="mt-2"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <Label htmlFor="year" className="font-medium">
                  Birth year
                </Label>
                <Input
                  type="number"
                  id="birthyear"
                  name="year"
                  placeholder="1990"
                  enableStepper={false}
                  className="mt-2"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <Label htmlFor="role" className="font-medium">
                  Role
                </Label>
                <Input
                  type="text"
                  id="role"
                  name="role"
                  placeholder="Senior Manager"
                  disabled
                  className="mt-2"
                />
                <p className="mt-2 text-xs text-gray-500 dark:text-gray-500">
                  Roles can only be changed by system admin.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Divider className="!my-14" />
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <h2 className="font-semibold text-gray-900 dark:text-gray-50">
              Workspace settings
            </h2>
            <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
            </p>
          </div>
          <div className="sm:max-w-3xl md:col-span-2">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
              <div className="col-span-full sm:col-span-3">
                <Label htmlFor="workspace-name" className="font-medium">
                  Workspace name
                </Label>
                <Input
                  type="text"
                  id="workspace-name"
                  name="workspace-name"
                  placeholder="Test workspace"
                  className="mt-2"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <Label htmlFor="visibility" className="font-medium">
                  Visibility
                </Label>
                <Select defaultValue="private">
                  <SelectTrigger
                    id="visibility"
                    name="visibility"
                    className="mt-2"
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="public">Public</SelectItem>
                    <SelectItem value="private">Private</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="col-span-full">
                <Label htmlFor="workspace-description" className="font-medium">
                  Workspace description
                </Label>
                <Textarea
                  id="workspace-description"
                  name="workspace-description"
                  placeholder="Type..."
                  className="mt-2"
                  rows={4}
                />
                <p className="mt-2 text-xs text-gray-500 dark:text-gray-500">
                  Note: description provided will not be displayed externally.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Divider className="!my-14" />
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <h2 className="font-semibold text-gray-900 dark:text-gray-50">
              Notification settings
            </h2>
            <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
            </p>
          </div>
          <div className="sm:max-w-3xl md:col-span-2">
            <fieldset>
              <RadioGroup defaultValue="never" className="sm:max-w-3xl">
                <legend className="text-sm font-medium text-gray-900 dark:text-gray-50">
                  Newsletter
                </legend>
                <p
                  id="newsletter-description"
                  className="mt-2 text-sm/6 text-gray-500 dark:text-gray-500"
                >
                  Change how often you want to receive updates from our
                  newsletter.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-x-3">
                    <RadioGroupItem
                      id="every-week"
                      value="every-week"
                      aria-describedby="newsletter-description"
                    />
                    <Label htmlFor="every-week" className="font-medium">
                      Every week
                    </Label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <RadioGroupItem
                      id="every-month"
                      value="every-month"
                      aria-describedby="newsletter-description"
                    />
                    <Label htmlFor="every-month" className="font-medium">
                      Every month
                    </Label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <RadioGroupItem
                      id="never"
                      value="never"
                      aria-describedby="newsletter-description"
                    />
                    <Label htmlFor="never" className="font-medium">
                      Never
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </fieldset>
          </div>
        </div>
        <Divider className="!my-14" />
        <div className="flex items-center justify-end space-x-4">
          <Button variant="secondary">Go back</Button>
          <Button>Save settings</Button>
        </div>
      </form>
    </div>
  )
}
