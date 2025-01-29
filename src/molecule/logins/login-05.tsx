// Modify your layout / template file as follows to center login form across the screen

// <html className"h-full"/>
// <body className"h-full"/>

"use client"

import { RiDonutChartFill } from "@remixicon/react"

import { Button } from "../../atom/Button"
import { Card } from "../../atom/Card"
import { Checkbox } from "../../atom/Checkbox"
import { Input } from "../../atom/Input"
import { Label } from "../../atom/Label"

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="flex min-h-screen flex-1 flex-col justify-center px-4 lg:px-6">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <RiDonutChartFill
            className="mx-auto size-10 text-gray-900 dark:text-gray-50"
            aria-hidden={true}
          />
          <h3 className="mt-6 text-center text-lg font-bold text-gray-900 dark:text-gray-50">
            Create new account for workspace
          </h3>
        </div>
        <Card className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <form action="#" method="post" className="space-y-4">
            <div>
              <Label htmlFor="name" className="font-medium">
                Name
              </Label>
              <Input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                placeholder="Name"
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="email" className="font-medium">
                Email
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                placeholder="john@company.com"
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="password" className="font-medium">
                Password
              </Label>
              <Input
                type="password"
                id="password"
                name="password"
                autoComplete="password"
                placeholder="Password"
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="confirm-password" className="font-medium">
                Confirm password
              </Label>
              <Input
                type="password"
                id="confirm-password"
                name="confirm-password"
                autoComplete="confirm-password"
                placeholder="Password"
                className="mt-2"
              />
            </div>
            <div className="mt-2 flex items-start">
              <div className="flex h-6 items-center">
                <Checkbox id="newsletter" name="newsletter" />
              </div>
              <Label
                htmlFor="newsletter"
                className="ml-3 leading-6 text-gray-500 dark:text-gray-500"
              >
                Sign up to our newsletter
              </Label>
            </div>
            <Button type="submit" className="mt-4 w-full">
              Create account
            </Button>
            <p className="text-center text-xs text-gray-500 dark:text-gray-500">
              By signing in, you agree to our{" "}
              <a
                href="#"
                className="capitalize text-blue-500 hover:text-blue-600 dark:text-blue-500 hover:dark:text-blue-600"
              >
                Terms of use
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="capitalize text-blue-500 hover:text-blue-600 dark:text-blue-500 hover:dark:text-blue-600"
              >
                Privacy policy
              </a>
            </p>
          </form>
        </Card>
        <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-500">
          Already have an account?{" "}
          <a
            href="#"
            className="font-medium text-blue-500 hover:text-blue-600 dark:text-blue-500 hover:dark:text-blue-600"
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  )
}
