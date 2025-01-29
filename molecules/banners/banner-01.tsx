import React from "react"
import { RiCloseLine, RiExternalLinkLine } from "@remixicon/react"

import { Button } from "../../atoms/Button"
import { Card } from "../../atoms/Card"

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
        <div className="absolute right-0 top-0 pr-3 pt-3">
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
