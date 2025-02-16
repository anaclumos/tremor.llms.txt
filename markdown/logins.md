```example/logins-login-01.tsx
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
```


```example/logins-login-03.tsx
// Modify your layout / template file as follows to center login form across the screen

// <html className"h-full"/>
// <body className"h-full"/>

"use client"

import { Button } from "@/atom/Button"
import { Input } from "@/atom/Input"
import { Label } from "@/atom/Label"

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
```


```example/logins-login-02.tsx
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
```


```example/logins-login-06.tsx
"use client"

// Modify your layout / template file as follows to center login form across the screen

// <html className"h-full"/>
// <body className"h-full"/>
import { RiArrowRightSLine, RiDonutChartFill } from "@remixicon/react"

import { Button } from "@/atom/Button"
import { Input } from "@/atom/Input"
import { Label } from "@/atom/Label"

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="min-h-full">
        <div className="mx-auto h-full max-w-[90rem]">
          <div className="flex min-h-screen flex-1 items-center">
            <div className="mx-auto my-12 flex min-h-screen max-w-lg flex-1 flex-col justify-center px-4 sm:px-8 lg:my-0 lg:px-20">
              <div className="mx-auto w-full sm:max-w-sm lg:max-w-full">
                <div className="flex items-center space-x-2.5">
                  <RiDonutChartFill
                    className="size-7 text-gray-900 dark:text-gray-50"
                    aria-hidden="true"
                  />
                  <p className="font-medium text-gray-900 dark:text-gray-50">
                    Company
                  </p>
                </div>
                <h2 className="mt-6 text-lg font-semibold text-gray-900 dark:text-gray-50">
                  Sign in to your account
                </h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
                  Don't have an account?{" "}
                  <a
                    href="#"
                    className="font-medium text-blue-500 hover:text-blue-600 dark:text-blue-500 hover:dark:text-blue-600"
                  >
                    Sign up
                  </a>
                </p>
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
                      required
                      aria-required="true"
                    />
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <Label
                        htmlFor="password"
                        className="text-sm font-medium text-gray-900 dark:text-gray-50"
                      >
                        Password
                      </Label>
                      <a
                        href="#"
                        className="mt-2 text-sm font-medium text-blue-500 hover:text-blue-600 dark:text-blue-500 hover:dark:text-blue-600"
                      >
                        Forgot your password?
                      </a>
                    </div>
                    <Input
                      type="password"
                      id="password"
                      name="password"
                      autoComplete="current-password"
                      placeholder="Enter your password"
                      className="mt-2"
                      required
                      aria-required="true"
                    />
                  </div>
                  <Button type="submit" className="mt-4 w-full">
                    Sign in
                  </Button>
                </form>
              </div>
            </div>
            <div
              className="hidden h-full min-h-screen flex-1 border-l border-gray-200 p-8 lg:flex dark:border-gray-800"
              aria-label="Changelog"
            >
              <div className="flex w-full flex-1 items-center justify-center">
                <div className="max-w-md">
                  <div>
                    <h2 className="font-mono text-sm text-gray-700 dark:text-gray-300">
                      Changelog
                    </h2>
                    <p className="mt-2 text-xl font-semibold text-gray-900 dark:text-gray-50">
                      New ComboChart, fixed axis padding, and updated color
                      palettes
                    </p>
                  </div>
                  <div className="relative mt-6 h-64 max-w-[450px] overflow-hidden rounded-xl bg-gradient-to-br from-blue-600/80 to-blue-400/20 p-6 shadow-lg shadow-black/10">
                    <div className="flex h-full flex-col justify-between">
                      <p className="text-2xl font-semibold text-white dark:text-white">
                        Fall Release
                      </p>
                      <p className="text-lg text-white dark:text-white">2024</p>
                    </div>
                    <div
                      className="pointer-events-none absolute top-0 left-1/2 -mt-2 -translate-x-1/2 select-none"
                      aria-hidden="true"
                      style={{
                        maskImage:
                          "radial-gradient(rgba(0, 0, 0, 1) 0%, transparent 80%)",
                        WebkitMaskImage:
                          "radial-gradient(rgba(0, 0, 0, 1) 0%, transparent 80%)",
                      }}
                    >
                      <div className="flex flex-col gap-1">
                        {Array.from({ length: 20 }, (_, idx) => (
                          <div key={`outer-${idx}`}>
                            <div className="flex gap-2">
                              {Array.from({ length: 20 }, (_, idx2) => (
                                <div key={`inner-${idx}-${idx2}`}>
                                  <div className="size-7 rounded-md ring-1 shadow shadow-blue-500/40 ring-black/5 dark:shadow-blue-400/20 dark:ring-white/10" />
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-blue-500 hover:underline hover:underline-offset-4"
                  >
                    Learn more
                    <RiArrowRightSLine
                      className="size-5 shrink-0"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
```


```example/logins-login-07.tsx
"use client"

// Modify your layout / template file as follows to center login form across the screen

// <html className"h-full"/>
// <body className"h-full"/>
import { RiContrast2Line, RiGoogleFill } from "@remixicon/react"

import { Button } from "@/atom/Button"

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="flex min-h-full flex-1 flex-col justify-center px-4 py-40 lg:px-6">
        <div className="relative sm:mx-auto sm:w-full sm:max-w-sm">
          <div
            className="pointer-events-none absolute -top-[25%] left-1/2 -translate-x-1/2 opacity-60 select-none dark:opacity-90"
            aria-hidden="true"
            style={{
              maskImage:
                "radial-gradient(rgba(0, 0, 0, 1) 0%, transparent 80%)",
              WebkitMaskImage:
                "radial-gradient(rgba(0, 0, 0, 1) 0%, transparent 80%)",
            }}
          >
            <div className="flex flex-col gap-1">
              {Array.from({ length: 10 }, (_, idx) => (
                <div key={`outer-${idx}`}>
                  <div className="flex gap-2">
                    {Array.from({ length: 10 }, (_, idx2) => (
                      <div key={`inner-${idx}-${idx2}`}>
                        <div className="size-7 rounded-md ring-1 shadow shadow-indigo-500/40 ring-black/5 dark:shadow-indigo-400/20 dark:ring-white/10" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mx-auto w-fit rounded-xl bg-gray-50 p-4 ring-1 shadow-md shadow-black/10 ring-black/10 dark:bg-gray-900 dark:ring-gray-800">
            <div className="absolute top-[9%] left-[9%] size-1 rounded-full bg-gray-100 shadow-inner dark:bg-gray-800" />
            <div className="absolute top-[9%] right-[9%] size-1 rounded-full bg-gray-100 shadow-inner dark:bg-gray-800" />
            <div className="absolute bottom-[9%] left-[9%] size-1 rounded-full bg-gray-100 shadow-inner dark:bg-gray-800" />
            <div className="absolute right-[9%] bottom-[9%] size-1 rounded-full bg-gray-100 shadow-inner dark:bg-gray-800" />
            <div className="w-fit rounded-lg bg-gradient-to-b from-blue-400 to-blue-600 p-3 ring-1 shadow-sm shadow-blue-500/50 ring-white/25 ring-inset">
              <RiContrast2Line
                className="size-8 text-white"
                aria-hidden="true"
              />
            </div>
          </div>
          <h2 className="mt-4 text-center text-xl font-semibold text-gray-900 dark:text-gray-50">
            Sign in to Platform
          </h2>
          <div className="mt-10">
            <Button asChild className="mt-4 w-full">
              <a href="#" className="inline-flex items-center gap-2">
                <RiGoogleFill className="size-5" aria-hidden={true} />
                Continue with Google
              </a>
            </Button>
          </div>
          <Button type="button" variant="secondary" className="mt-4 w-full">
            Continue with Email
          </Button>
          <p className="mt-4 text-xs text-gray-500 dark:text-gray-500">
            By signing in, you agree to our{" "}
            <a href="#" className="underline underline-offset-2">
              terms of service
            </a>{" "}
            and{" "}
            <a href="#" className="underline underline-offset-2">
              privacy policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
```


```example/logins-login-05.tsx
// Modify your layout / template file as follows to center login form across the screen

// <html className"h-full"/>
// <body className"h-full"/>

"use client"

import { RiDonutChartFill } from "@remixicon/react"

import { Button } from "@/atom/Button"
import { Card } from "@/atom/Card"
import { Checkbox } from "@/atom/Checkbox"
import { Input } from "@/atom/Input"
import { Label } from "@/atom/Label"

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
                className="text-blue-500 capitalize hover:text-blue-600 dark:text-blue-500 hover:dark:text-blue-600"
              >
                Terms of use
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="text-blue-500 capitalize hover:text-blue-600 dark:text-blue-500 hover:dark:text-blue-600"
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
```


```example/logins-login-10.tsx
"use client"

// Modify your layout / template file as follows to center login form across the screen

// <html className"h-full"/>
// <body className"h-full"/>

// Add this to your css:
// @keyframes slideUpFade {
//   from {
//     opacity: 0;
//     transform: translateY(20px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// }
import React from "react"
import { RiGithubFill, RiGoogleFill } from "@remixicon/react"

import { Button } from "@/atom/Button"
import { Divider } from "@/atom/Divider"
import { Input } from "@/atom/Input"
import { Label } from "@/atom/Label"

const AnimatedElement = ({
  children,
  index,
  styles,
}: {
  children: React.ReactNode
  index: number
  styles?: React.CSSProperties
}) => (
  <div
    style={{
      animation: "slideUpFade 300ms ease-in-out backwards",
      animationDelay: `${index * 75}ms`,
      ...styles,
    }}
  >
    {children}
  </div>
)

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="flex min-h-screen w-full">
        <main className="flex-1">
          <div className="flex h-full flex-col items-center justify-center">
            <div className="w-full px-4 sm:max-w-sm sm:px-0">
              <AnimatedElement index={0}>
                <div className="space-y-1">
                  <h2 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-50">
                    Get started now
                  </h2>
                  <p className="text-sm text-gray-700 dark:text-gray-400">
                    Enter your credentials to access your account
                  </p>
                </div>
              </AnimatedElement>

              <AnimatedElement index={1}>
                <div className="mt-8 flex w-full gap-4">
                  <Button variant="secondary" className="w-full">
                    <span className="inline-flex items-center gap-2">
                      <RiGithubFill
                        className="size-5 shrink-0"
                        aria-hidden={true}
                      />
                      Login with GitHub
                    </span>
                  </Button>
                  <Button className="w-full" variant="secondary">
                    <span className="inline-flex items-center gap-2">
                      <RiGoogleFill className="size-4" aria-hidden={true} />
                      Login with Google
                    </span>
                  </Button>
                </div>
              </AnimatedElement>

              <AnimatedElement index={2}>
                <Divider>or</Divider>
              </AnimatedElement>

              <form onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-4">
                  <AnimatedElement index={3}>
                    <div className="space-y-2">
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
                        required
                        aria-required="true"
                      />
                    </div>
                  </AnimatedElement>

                  <AnimatedElement index={4}>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label
                          htmlFor="password"
                          className="text-sm font-medium text-gray-900 dark:text-gray-50"
                        >
                          Password
                        </Label>
                        <a
                          href="#"
                          className="text-sm font-medium text-blue-500 hover:text-blue-600 dark:text-blue-500 hover:dark:text-blue-600"
                        >
                          Forgot password?
                        </a>
                      </div>
                      <Input
                        type="password"
                        id="password"
                        name="password"
                        autoComplete="current-password"
                        placeholder="Password"
                        className="mt-2"
                        required
                        aria-required="true"
                      />
                    </div>
                  </AnimatedElement>
                </div>

                <AnimatedElement index={5}>
                  <div className="mt-2">
                    <Button className="mt-6 w-full" type="submit">
                      Continue
                    </Button>
                  </div>
                </AnimatedElement>
              </form>

              <AnimatedElement index={6}>
                <div className="mt-4">
                  <p className="text-xs text-gray-700">
                    By signing in, you agree to our{" "}
                    <a
                      href="#"
                      className="text-blue-500 hover:text-blue-600 dark:text-blue-500 hover:dark:text-blue-600"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="text-blue-500 hover:text-blue-600 dark:text-blue-500 hover:dark:text-blue-600"
                    >
                      Privacy Policy.
                    </a>
                  </p>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </main>
        <aside
          className="hidden flex-1 overflow-hidden p-6 lg:flex"
          aria-label="Product showcase"
        >
          <div className="flex h-full w-full items-center justify-center rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 p-16 xl:p-24 dark:from-blue-600 dark:to-blue-500">
            <div>
              <AnimatedElement
                index={7}
                styles={{ animationDelay: "400ms", animationDuration: "700ms" }}
              >
                <h2 className="max-w-lg text-2xl leading-9 font-semibold text-white dark:text-white">
                  The simplest way to manage your data platform
                </h2>
                <p className="mt-4 text-white dark:text-white">
                  Enter your credentials to access your account
                </p>
              </AnimatedElement>
              <AnimatedElement
                index={7}
                styles={{ animationDelay: "500ms", animationDuration: "900ms" }}
              >
                <div className="mt-14 rounded-xl bg-white/10 p-1.5 ring-1 ring-white/20">
                  <img
                    alt="Dashboard screenshot showing data visualization and analytics interface"
                    src="https://blocks.tremor.so/_next/image?url=%2Fhome%2Fdashboard.webp&w=3840&q=75"
                    width={2432}
                    height={1442}
                    className="rounded-md ring-1 shadow-2xl shadow-black/50 ring-gray-900/5"
                  />
                </div>
              </AnimatedElement>
              <div className="mt-14 grid h-20 grid-cols-3 items-center gap-10">
                <AnimatedElement
                  index={8}
                  styles={{
                    animationDelay: "600ms",
                    animationDuration: "500ms",
                  }}
                >
                  <img
                    alt="Partner company logo 1"
                    src="https://blocks.tremor.so/logos/white/placeholder1.svg"
                    width={158}
                    height={48}
                    className="max-h-20 w-full object-contain"
                  />
                </AnimatedElement>
                <AnimatedElement
                  index={7}
                  styles={{
                    animationDelay: "700ms",
                    animationDuration: "500ms",
                  }}
                >
                  <img
                    alt="Partner company logo 2"
                    src="https://blocks.tremor.so/logos/white/placeholder2.svg"
                    width={158}
                    height={48}
                    className="max-h-20 w-full object-contain"
                  />
                </AnimatedElement>
                <AnimatedElement
                  index={7}
                  styles={{
                    animationDelay: "800ms",
                    animationDuration: "500ms",
                  }}
                >
                  <img
                    alt="Partner company logo 3"
                    src="https://blocks.tremor.so/logos/white/placeholder3.svg"
                    width={158}
                    height={48}
                    className="max-h-20 w-full object-contain"
                  />
                </AnimatedElement>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
```


```example/logins-login-04.tsx
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
```


```example/logins-login-09.tsx
// 'use client';

// Modify your layout / template file as follows to center login form across the screen

// <html className"h-full"/>
// <body className"h-full"/>
import { RiGithubFill, RiGoogleFill } from "@remixicon/react"

import { Button } from "@/atom/Button"
import { Divider } from "@/atom/Divider"
import { Input } from "@/atom/Input"
import { Label } from "@/atom/Label"

export default function Example() {
  return (
    <>
      <div className="flex min-h-screen w-full">
        <main className="flex-1">
          <div className="flex h-full flex-col items-center justify-center">
            <div className="w-full px-4 sm:max-w-sm sm:px-0">
              <div className="space-y-1">
                <h2 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-50">
                  Get started now
                </h2>
                <p className="text-sm text-gray-700 dark:text-gray-400">
                  Enter your credentials to access your account
                </p>
              </div>
              <div className="mt-8 flex w-full gap-4">
                <Button variant="secondary" className="w-full">
                  <span className="inline-flex items-center gap-2">
                    <RiGithubFill
                      className="size-5 shrink-0"
                      aria-hidden={true}
                    />
                    Login with GitHub
                  </span>
                </Button>
                <Button className="w-full" variant="secondary">
                  <span className="inline-flex items-center gap-2">
                    <RiGoogleFill className="size-4" aria-hidden={true} />
                    Login with Google
                  </span>
                </Button>
              </div>
              <Divider>or</Divider>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-4">
                  <div className="space-y-2">
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
                      required
                      aria-required="true"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label
                        htmlFor="password"
                        className="text-sm font-medium text-gray-900 dark:text-gray-50"
                      >
                        Password
                      </Label>

                      <a
                        href="#"
                        className="text-sm font-medium text-blue-500 hover:text-blue-600 dark:text-blue-500 hover:dark:text-blue-600"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <Input
                      type="password"
                      id="password"
                      name="password"
                      autoComplete="current-password"
                      placeholder="Password"
                      className="mt-2"
                      required
                      aria-required="true"
                    />
                  </div>
                </div>

                <Button className="mt-6 w-full" type="submit">
                  Continue
                </Button>
              </form>
              <div className="mt-4">
                <p className="text-xs text-gray-700">
                  By signing in, you agree to our{" "}
                  <a
                    href="#"
                    className="text-blue-500 hover:text-blue-600 dark:text-blue-500 hover:dark:text-blue-600"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="text-blue-500 hover:text-blue-600 dark:text-blue-500 hover:dark:text-blue-600"
                  >
                    Privacy Policy.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </main>
        <aside
          className="hidden flex-1 overflow-hidden p-6 lg:flex"
          aria-label="Product showcase"
        >
          <div className="flex h-full w-full items-center justify-center rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 p-16 xl:p-24 dark:from-blue-600 dark:to-blue-500">
            <div>
              <h2 className="max-w-lg text-2xl leading-9 font-semibold text-white dark:text-white">
                The simplest way to manage your data platform
              </h2>
              <p className="mt-4 text-white dark:text-white">
                Enter your credentials to access your account
              </p>
              <div className="mt-14 rounded-xl bg-white/10 p-1.5 ring-1 ring-white/20">
                <img
                  alt="Dashboard screenshot showing data visualization and analytics interface"
                  src="https://blocks.tremor.so/_next/image?url=%2Fhome%2Fdashboard.webp&w=3840&q=75"
                  width={2432}
                  height={1442}
                  className="rounded-md ring-1 shadow-2xl shadow-black/50 ring-gray-900/5"
                />
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  )
}
```


```example/logins-login-08.tsx
"use client"

// Modify your layout / template file as follows to center login form across the screen

// <html className"h-full"/>
// <body className"h-full"/>
import { useCallback, useEffect, useMemo, useState } from "react"
import { RiGithubFill, RiGoogleFill } from "@remixicon/react"

import { Button } from "@/atom/Button"
import { Divider } from "@/atom/Divider"
import { Input } from "@/atom/Input"
import { Label } from "@/atom/Label"

// Animation parameters
const TOTAL_ROWS = 40
const TOTAL_COLS = 40
const TRANSITION_INTERVAL = 3000
const MIN_SELECTED = 20
const MAX_SELECTED = 60

export default function Example() {
  const [selectedDivs, setSelectedDivs] = useState(new Set())

  const totalDivs = TOTAL_ROWS * TOTAL_COLS

  const updateSelectedDivs = useCallback(() => {
    const newSelectedDivs = new Set()
    const numSelected =
      Math.floor(Math.random() * (MAX_SELECTED - MIN_SELECTED + 1)) +
      MIN_SELECTED

    while (newSelectedDivs.size < numSelected) {
      const randomId = Math.floor(Math.random() * totalDivs)
      newSelectedDivs.add(randomId)
    }

    setSelectedDivs(newSelectedDivs)
  }, [totalDivs])

  useEffect(() => {
    updateSelectedDivs()
    const intervalId = setInterval(updateSelectedDivs, TRANSITION_INTERVAL)
    return () => clearInterval(intervalId)
  }, [updateSelectedDivs])

  const gridDivs = useMemo(
    () =>
      Array.from({ length: TOTAL_ROWS }, (_, rowIdx) => (
        <div key={`outer-${rowIdx}`}>
          <div className="flex size-full gap-2">
            {Array.from({ length: TOTAL_COLS }, (_, colIdx) => {
              const divId = rowIdx * TOTAL_COLS + colIdx
              const isSelected = selectedDivs.has(divId)
              return (
                <div key={`inner-${rowIdx}-${colIdx}`}>
                  <div
                    className={`size-9 rounded-lg ring-1 shadow ring-black/5 transition-all duration-[3000ms] dark:ring-white/5 ${
                      isSelected
                        ? "shadow-blue-500/50 dark:shadow-blue-500/40"
                        : "shadow-blue-500/10 dark:shadow-blue-500/10"
                    }`}
                  />
                </div>
              )
            })}
          </div>
        </div>
      )),
    [selectedDivs],
  )

  return (
    <div className="obfuscate">
      <div className="flex min-h-screen w-full">
        <main className="flex-1 shadow-xl lg:border-r dark:border-gray-900">
          <div className="flex h-full flex-col items-center justify-center">
            <div className="w-full px-4 sm:max-w-sm sm:px-0">
              <div className="space-y-1">
                <h1 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-50">
                  Sign in to Platform
                </h1>
                <p className="text-sm text-gray-700 dark:text-gray-400">
                  Do not have an account?{" "}
                  <a
                    href="#"
                    className="font-medium text-blue-500 hover:text-blue-600 dark:text-blue-500 hover:dark:text-blue-600"
                  >
                    Sign up.
                  </a>
                </p>
              </div>
              <form className="mt-12" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-4">
                  <div className="space-y-2">
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
                      required
                      aria-required="true"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label
                        htmlFor="password"
                        className="text-sm font-medium text-gray-900 dark:text-gray-50"
                      >
                        Password
                      </Label>
                      <a
                        href="#"
                        className="text-sm font-medium text-blue-500 hover:text-blue-600 dark:text-blue-500 hover:dark:text-blue-600"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <Input
                      type="password"
                      id="password"
                      name="password"
                      autoComplete="current-password"
                      placeholder="Password"
                      className="mt-2"
                      required
                      aria-required="true"
                    />
                  </div>
                  <Button className="w-full" type="submit">
                    Continue
                  </Button>
                </div>
              </form>
              <div>
                <Divider>or</Divider>
                <div className="space-y-4">
                  <div className="flex w-full gap-4">
                    <Button variant="secondary" className="w-full">
                      <span className="inline-flex items-center gap-2">
                        <RiGithubFill
                          className="size-5 shrink-0"
                          aria-hidden={true}
                        />
                        Login with GitHub
                      </span>
                    </Button>
                    <Button className="w-full" variant="secondary">
                      <span className="inline-flex items-center gap-2">
                        <RiGoogleFill className="size-4" aria-hidden={true} />
                        Login with Google
                      </span>
                    </Button>
                  </div>
                  <Button className="w-full" variant="secondary">
                    Sign in with SSO
                  </Button>
                </div>
                <div className="mt-4">
                  <p className="text-xs text-gray-700">
                    By signing in, you agree to our{" "}
                    <a
                      href="#"
                      className="text-blue-500 hover:text-blue-600 dark:text-blue-500 hover:dark:text-blue-600"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="text-blue-500 hover:text-blue-600 dark:text-blue-500 hover:dark:text-blue-600"
                    >
                      Privacy Policy.
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
        <div
          className="hidden max-h-screen flex-1 overflow-hidden lg:flex"
          aria-hidden="true"
        >
          <div>
            <div className="-mt-2 -ml-2 flex flex-col gap-2">{gridDivs}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
```


