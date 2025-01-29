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
