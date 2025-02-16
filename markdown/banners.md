```example/banners-banner-01.tsx
import React from "react"
import { RiCloseLine, RiExternalLinkLine } from "@remixicon/react"

import { Button } from "@/atom/Button"
import { Card } from "@/atom/Card"

export default function Example() {
  const [isOpen, setIsOpen] = React.useState(true)

  // just for demo purposes
  React.useEffect(() => {
    if (!isOpen) {
      const timeoutId: NodeJS.Timeout = setTimeout(() => {
        setIsOpen(true)
      }, 1000)

      return () => clearTimeout(timeoutId)
    }
  }, [isOpen])

  return isOpen ? (
    <div className="obfuscate">
      <Card>
        <div className="absolute top-0 right-0 pt-3 pr-3">
          <Button
            className="!p-1 !text-gray-500 hover:!text-gray-700 dark:!text-gray-500 hover:dark:!text-gray-300"
            variant="ghost"
            onClick={() => setIsOpen(false)}
            aria-label="Close"
          >
            <RiCloseLine className="size-5 shrink-0" aria-hidden={true} />
          </Button>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
          Welcome to your workspace
        </h3>
        <p className="mt-2 text-sm/6 text-gray-500 dark:text-gray-500">
          Start with our step-by-step guide to configure the workspace to your
          needs. For further resources, our video tutorials and
          audience-specific documentations are designed to provide you with a
          in-depth understanding of our platform.
        </p>
        <div className="mt-6 flex items-center gap-2">
          <Button>Get started</Button>
          <Button
            asChild
            variant="ghost"
            className="text-blue-500 dark:text-blue-500"
          >
            <a href="#" className="">
              View tutorials
              <RiExternalLinkLine className="ml-2 size-4" aria-hidden={true} />
            </a>
          </Button>
        </div>
      </Card>
    </div>
  ) : null
}
```


```example/banners-banner-03.tsx
import React from "react"
import { RiCloseLine } from "@remixicon/react"

import { Button } from "@/atom/Button"
import { Card } from "@/atom/Card"

const data = [
  //array-start
  {
    title: "How it works",
    description: "Learn how the platform works before getting started.",
    linkText: "View tutorials",
    href: "#",
  },
  {
    title: "Get started",
    description:
      "Learn how to install and configure this magic app into your project.",
    linkText: "Start introduction",
    href: "#",
  },
  {
    title: "Examples gallery",
    description:
      "Browse and take inspiration from our templates and demo apps.",
    linkText: "View examples",
    href: "#",
  },
  //array-end
]

export default function Example() {
  const [isOpen, setIsOpen] = React.useState(true)

  // just for demo purposes
  React.useEffect(() => {
    if (!isOpen) {
      const timeoutId: NodeJS.Timeout = setTimeout(() => {
        setIsOpen(true)
      }, 1000)

      return () => clearTimeout(timeoutId)
    }
  }, [isOpen])

  return isOpen ? (
    <div className="obfuscate">
      <Card>
        <div className="absolute top-0 right-0 pt-3 pr-3">
          <Button
            className="!p-1 !text-gray-500 hover:!text-gray-700 dark:!text-gray-500 hover:dark:!text-gray-300"
            variant="ghost"
            onClick={() => setIsOpen(false)}
            aria-label="Close"
          >
            <RiCloseLine className="size-5 shrink-0" aria-hidden={true} />
          </Button>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
          Welcome to your workspace
        </h3>
        <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
          Follow the steps below or browse our developer documentation to start
          using the platform.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-start justify-between border-l-2 border-gray-100 py-1 pl-4 dark:border-gray-400/10"
            >
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
                  {item.title}
                </p>
                <p className="mt-2 text-sm/6 text-gray-500 dark:text-gray-500">
                  {item.description}
                </p>
              </div>
              <a
                href={item.href}
                className="mt-4 text-sm font-medium text-blue-500 hover:text-blue-600 dark:text-blue-500 hover:dark:text-blue-600"
              >
                {item.linkText} &#8594;
              </a>
            </div>
          ))}
        </div>
      </Card>
    </div>
  ) : null
}
```


```example/banners-banner-02.tsx
import React from "react"
import {
  RiBookOpenLine,
  RiCloseLine,
  RiExternalLinkLine,
} from "@remixicon/react"

import { Button } from "@/atom/Button"
import { Card } from "@/atom/Card"

export default function Example() {
  const [isOpen, setIsOpen] = React.useState(true)

  // just for demo purposes
  React.useEffect(() => {
    if (!isOpen) {
      const timeoutId: NodeJS.Timeout = setTimeout(() => {
        setIsOpen(true)
      }, 1000)

      return () => clearTimeout(timeoutId)
    }
  }, [isOpen])

  return isOpen ? (
    <div className="obfuscate">
      <Card className="bg-gray-50 dark:bg-gray-900">
        <div className="absolute top-0 right-0 pt-3 pr-3">
          <Button
            className="!p-1 !text-gray-500 hover:!text-gray-700 dark:!text-gray-500 hover:dark:!text-gray-300"
            variant="ghost"
            onClick={() => setIsOpen(false)}
            aria-label="Close"
          >
            <RiCloseLine className="size-5 shrink-0" aria-hidden={true} />
          </Button>
        </div>
        <div className="sm:flex sm:items-start sm:space-x-6">
          <div className="inline-flex shrink-0 rounded-full bg-blue-200/50 p-2 dark:bg-blue-900/80">
            <span className="flex size-8 items-center justify-center rounded-full bg-blue-500 dark:bg-blue-500">
              <RiBookOpenLine
                className="size-5 text-white dark:text-white"
                aria-hidden={true}
              />
            </span>
          </div>
          <div className="mt-4 sm:mt-0">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
              Welcome to your workspace
            </h3>
            <p className="mt-2 text-sm/6 text-gray-500 dark:text-gray-500">
              Start with our step-by-step guide to configure the workspace to
              your needs. For further resources, our video tutorials and
              audience-specific documentations are designed to provide you with
              a in-depth understanding of our platform.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <Button>Get started</Button>
              <Button
                asChild
                variant="ghost"
                className="text-blue-500 hover:bg-transparent dark:text-blue-500 hover:dark:bg-transparent"
              >
                <a href="#" className="inline-flex items-center gap-2">
                  View tutorials
                  <RiExternalLinkLine className="size-4" aria-hidden={true} />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  ) : null
}
```


```example/banners-banner-05.tsx
import React from "react"
import { RiCloseLine } from "@remixicon/react"

import { Button } from "@/atom/Button"
import { Card } from "@/atom/Card"

const data = [
  //array-start
  {
    step: 1,
    title: "Connect data",
    description: "Bring your existing data source or create a new one.",
    buttonText: "Add data",
    disabled: false,
    tooltipText: "",
  },
  {
    step: 2,
    title: "Add metrics",
    description:
      "Create metrics using custom SQL or with our aggregation mask.",
    buttonText: "Add metric",
    disabled: true,
    tooltipText: "Connect to a data source first",
  },
  {
    step: 3,
    title: "Create report",
    description:
      "Transform metrics into visualizations and add layout elements.",
    buttonText: "Create report",
    disabled: true,
    tooltipText: "Create metrics first",
  },
  //array-end
]

export default function Example() {
  const [isOpen, setIsOpen] = React.useState(true)

  // just for demo purposes
  React.useEffect(() => {
    if (!isOpen) {
      const timeoutId: NodeJS.Timeout = setTimeout(() => {
        setIsOpen(true)
      }, 1000)

      return () => clearTimeout(timeoutId)
    }
  }, [isOpen])

  return isOpen ? (
    <div className="obfuscate">
      <Card>
        <div className="absolute top-0 right-0 pt-3 pr-3">
          <Button
            className="!p-1 !text-gray-500 hover:!text-gray-700 dark:!text-gray-500 hover:dark:!text-gray-300"
            variant="ghost"
            onClick={() => setIsOpen(false)}
            aria-label="Close"
          >
            <RiCloseLine className="size-5 shrink-0" aria-hidden={true} />
          </Button>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
          Create your first dashboard
        </h3>
        <p className="mt-2 text-sm/6 text-gray-500 dark:text-gray-500">
          Set up your first dashboard. Connect to a data source, create metrics
          and visualize them in the report builder.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item) => (
            <div
              key={item.title}
              className="flex flex-col justify-between border-l-2 border-blue-100 py-1 pl-4 dark:border-blue-400/20"
            >
              <div>
                <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-500 dark:bg-blue-400/20 dark:text-blue-500">
                  Step {item.step}
                </span>
                <h4 className="mt-4 text-sm font-medium text-gray-900 dark:text-gray-50">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm/6 text-gray-500 dark:text-gray-500">
                  {item.description}
                </p>
              </div>
              <Button disabled={item.disabled} className="mt-8">
                {item.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  ) : null
}
```


```example/banners-banner-04.tsx
import React from "react"
import { RiCloseLine } from "@remixicon/react"

import { Button } from "@/atom/Button"
import { Card } from "@/atom/Card"

const data = [
  //array-start
  {
    title: "How it works",
    description: "Learn how the platform works before getting started.",
    linkText: "View tutorials",
    href: "#",
  },
  {
    title: "Get started",
    description:
      "Learn how to install and configure this magic app into your project.",
    linkText: "Start introduction",
    href: "#",
  },
  {
    title: "Examples gallery",
    description:
      "Browse and take inspiration from our templates and demo apps.",
    linkText: "View examples",
    href: "#",
  },
  //array-end
]

export default function Example() {
  const [isOpen, setIsOpen] = React.useState(true)

  // just for demo purposes
  React.useEffect(() => {
    if (!isOpen) {
      const timeoutId: NodeJS.Timeout = setTimeout(() => {
        setIsOpen(true)
      }, 1000)

      return () => clearTimeout(timeoutId)
    }
  }, [isOpen])

  return isOpen ? (
    <div className="obfuscate">
      <Card className="bg-gray-50 dark:bg-gray-900">
        <div className="absolute top-0 right-0 pt-3 pr-3">
          <Button
            className="!p-1 !text-gray-500 hover:!text-gray-700 dark:!text-gray-500 hover:dark:!text-gray-300"
            variant="ghost"
            onClick={() => setIsOpen(false)}
            aria-label="Close"
          >
            <RiCloseLine className="size-5 shrink-0" aria-hidden={true} />
          </Button>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
          Welcome to your workspace
        </h3>
        <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
          Follow the steps below or browse our developer documentation to start
          using the platform.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-start justify-between py-1 pl-4"
            >
              <div>
                <p className="-ml-2 border-l-2 border-blue-500 pl-2 text-sm font-medium text-gray-900 dark:border-blue-600 dark:text-gray-50">
                  {item.title}
                </p>
                <p className="mt-2 text-sm/6 text-gray-500 dark:text-gray-500">
                  {item.description}
                </p>
              </div>
              <a
                href={item.href}
                className="mt-4 text-sm font-medium text-blue-500 hover:text-blue-600 dark:text-blue-500 hover:dark:text-blue-600"
              >
                {item.linkText} &#8594;
              </a>
            </div>
          ))}
        </div>
      </Card>
    </div>
  ) : null
}
```


