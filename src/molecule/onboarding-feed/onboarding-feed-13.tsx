"use client"

import { RiContrast2Line } from "@remixicon/react"

import { Badge } from "@/atom/Badge"
import { Button } from "@/atom/Button"

type IntegrationStatus = "open" | "connecting" | "complete"

interface Integration {
  id: string
  title: string
  logo: string
  status: IntegrationStatus
  recommended: boolean
}

const integrations: Integration[] = [
  {
    id: "portals",
    title: "Portals",
    logo: "https://cdn.prod.website-files.com/6365d860c7b7a7191055eb8a/66eeb02f5dfb43eaea30f200_3Portals.svg",
    status: "complete",
    recommended: true,
  },
  {
    id: "buildingblocks",
    title: "BuildingBlocks",
    logo: "https://cdn.prod.website-files.com/6365d860c7b7a7191055eb8a/66eeb032dcea757c29ff2cbb_BuildingBlocks.svg",
    status: "connecting",
    recommended: false,
  },
  {
    id: "interlock",
    title: "InterLock",
    logo: "https://cdn.prod.website-files.com/6365d860c7b7a7191055eb8a/66eeb04473ca47cb55d6b626_Interlock.svg",
    status: "open",
    recommended: false,
  },
  {
    id: "chromatools",
    title: "Chromatools",
    logo: "https://cdn.prod.website-files.com/6365d860c7b7a7191055eb8a/66eeb033344c2721a8be068e_Chromatools.svg",
    status: "open",
    recommended: false,
  },
]

export default function Example() {
  const renderIntegrationStatus = (status: IntegrationStatus) => {
    switch (status) {
      case "open":
        return (
          <Button className="w-full min-w-[126px] sm:w-fit">Connect</Button>
        )
      case "connecting":
        return (
          <Button className="w-full min-w-[126px] sm:w-fit" isLoading={true}>
            <span>Connecting</span>
          </Button>
        )
      case "complete":
        return (
          <div className="inline-flex w-full min-w-[126px] flex-nowrap items-center justify-center rounded-md border border-transparent bg-gray-300 px-3 py-2 text-center text-sm font-medium whitespace-nowrap text-white sm:w-fit dark:bg-gray-700 dark:text-white">
            Done
          </div>
        )
    }
  }

  return (
    <div className="obfuscate">
      <div className="py-16 sm:mx-auto sm:max-w-2xl">
        <div className="relative mx-auto w-fit rounded-full bg-gray-50/50 p-1 ring-1 shadow-md shadow-black/10 ring-black/10 dark:bg-gray-900 dark:ring-gray-800">
          <div className="w-fit rounded-full bg-gradient-to-b from-blue-400 to-blue-600 p-3 ring-1 shadow-sm shadow-blue-500/50 ring-white/25 ring-inset">
            <RiContrast2Line className="size-8 text-white" aria-hidden="true" />
          </div>
        </div>
        <h1 className="mt-8 max-w-lg text-xl font-semibold text-gray-900 sm:mx-auto sm:text-center sm:text-2xl dark:text-gray-50">
          Welcome to Fragment, your single platform to get answers and make
          decisions
        </h1>
        <p className="mt-8 max-w-xl text-gray-500 sm:mx-auto sm:text-center sm:text-sm/6 dark:text-gray-500">
          To get the best experience, we recommend setting up at least one
          integration. This is necessary for us to have a source to generate
          reports for you.
        </p>
        <ul role="list" className="mt-10 space-y-4">
          {integrations.map((integration) => (
            <li
              key={integration.id}
              className="relative rounded-lg bg-white p-4 ring-1 shadow-lg shadow-black/5 ring-black/5 dark:bg-gray-900/50 dark:ring-white/10"
            >
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div className="flex items-center gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border p-2 dark:border-gray-800">
                    <img
                      alt={`${integration.title} logo`}
                      src={integration.logo}
                      width={70}
                      height={70}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-gray-900 dark:text-gray-50">
                      {integration.title}
                    </h3>
                    {integration.recommended && (
                      <Badge variant="neutral">Recommended</Badge>
                    )}
                  </div>
                </div>
                <div>{renderIntegrationStatus(integration.status)}</div>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-20">
          <h4 className="text-sm font-medium text-gray-900 dark:text-gray-50">
            Need help?
          </h4>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
            Connect with a member of our team at{" "}
            <a
              href="mailto:support@company.com"
              className="font-medium text-blue-500 dark:text-blue-500"
            >
              support@company.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
