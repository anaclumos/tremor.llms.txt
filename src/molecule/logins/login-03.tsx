// Modify your layout / template file as follows to center login form across the screen

// <html className"h-full"/>
// <body className"h-full"/>

"use client"

import { Button } from "../../atom/Button"
import { Input } from "../../atom/Input"
import { Label } from "../../atom/Label"

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="flex min-h-screen flex-1 flex-col justify-center px-4 lg:px-6">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h3 className="text-center text-lg font-semibold text-gray-900 dark:text-gray-50">
            Welcome Back
          </h3>
          <p className="text-center text-sm text-gray-500 dark:text-gray-500">
            Enter your credentials to access your account.
          </p>
          <form action="#" method="post" className="mt-6 space-y-4">
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
            <Button type="submit" className="mt-4 w-full">
              Sign in
            </Button>
          </form>
          <p className="mt-6 text-sm text-gray-500 dark:text-gray-500">
            Forgot your password?{" "}
            <a
              href="#"
              className="font-medium text-blue-500 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-600"
            >
              Reset password
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
