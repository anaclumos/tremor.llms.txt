// Modify your layout / template file as follows to center login form across the screen

// <html className"h-full"/>
// <body className"h-full"/>

"use client"

import { RiGoogleFill } from "@remixicon/react"

import { Button } from "@/atom/Button"
import { Divider } from "@/atom/Divider"
import { Input } from "@/atom/Input"
import { Label } from "@/atom/Label"

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="flex min-h-screen flex-1 flex-col justify-center px-4 lg:px-6">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h3 className="text-center text-lg font-semibold text-gray-900 dark:text-gray-50">
            Log in or create account
          </h3>
          <form action="#" method="post" className="mt-6">
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
            <Button type="submit" className="mt-4 w-full">
              Sign in
            </Button>
          </form>
          <Divider>or with</Divider>
          <Button asChild variant="secondary" className="w-full">
            <a href="#" className="inline-flex items-center gap-2">
              <RiGoogleFill className="size-5" aria-hidden={true} />
              Sign in with Google
            </a>
          </Button>
          <p className="mt-4 text-xs text-gray-500 dark:text-gray-500">
            By signing in, you agree to our{" "}
            <a href="#" className="underline underline-offset-4">
              terms of service
            </a>{" "}
            and{" "}
            <a href="#" className="underline underline-offset-4">
              privacy policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
