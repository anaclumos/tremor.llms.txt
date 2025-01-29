// Modify your layout / template file as follows to center login form across the screen

// <html className"h-full"/>
// <body className"h-full"/>

"use client"

import { RiDonutChartFill, RiGithubFill, RiGoogleFill } from "@remixicon/react"

import { Button } from "@/atom/Button"
import { Divider } from "@/atom/Divider"
import { Input } from "@/atom/Input"
import { Label } from "@/atom/Label"

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="flex min-h-screen flex-1 flex-col justify-center px-4 lg:px-6">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex items-center space-x-2.5">
            <RiDonutChartFill
              className="size-7 text-gray-900 dark:text-gray-50"
              aria-hidden={true}
            />
            <p className="font-medium text-gray-900 dark:text-gray-50">
              Company
            </p>
          </div>
          <h3 className="mt-6 text-lg font-semibold text-gray-900 dark:text-gray-50">
            Sign in to your account
          </h3>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
            Don't have an account?{" "}
            <a
              href="#"
              className="font-medium text-blue-500 hover:text-blue-600 dark:text-blue-500 hover:dark:text-blue-600"
            >
              Sign up
            </a>
          </p>
          <div className="mt-8 sm:flex sm:items-center sm:space-x-2">
            <Button asChild variant="secondary" className="w-full">
              <a href="#" className="inline-flex items-center gap-2">
                <RiGithubFill className="size-5 shrink-0" aria-hidden={true} />
                Login with GitHub
              </a>
            </Button>
            <Button asChild variant="secondary" className="mt-2 w-full sm:mt-0">
              <a href="#" className="inline-flex items-center gap-2">
                <RiGoogleFill className="size-4" aria-hidden={true} />
                Login with Google
              </a>
            </Button>
          </div>
          <Divider>or</Divider>
          <form action="#" method="post" className="mt-6 space-y-4">
            <div>
              <Label
                htmlFor="email"
                className="text-sm font-medium text-gray-900 dark:text-gray-50"
              >
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
              <Label
                htmlFor="password"
                className="text-sm font-medium text-gray-900 dark:text-gray-50"
              >
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
            <Button type="submit" className="mt-4 w-full">
              Sign in
            </Button>
          </form>
          <p className="mt-6 text-sm text-gray-500 dark:text-gray-500">
            Forgot your password?{" "}
            <a
              href="#"
              className="font-medium text-blue-500 hover:text-blue-600 dark:text-blue-500 hover:dark:text-blue-600"
            >
              Reset password
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
