"use client"

import {
  RiDriveFill,
  RiDropboxFill,
  RiFacebookBoxFill,
  RiNotionFill,
  RiSlackFill,
} from "@remixicon/react"

import { Button } from "@/atom/Button"
import { Card } from "@/atom/Card"
import { Divider } from "@/atom/Divider"

const data = [
  //array-start
  {
    name: "Google Drive",
    description: "Automate your file upload workflow",
    icon: RiDriveFill,
    status: "Connected",
  },
  {
    name: "Facebook Ads",
    description: "Analayze ad performance directly in your workspace",
    icon: RiFacebookBoxFill,
    status: "Enable",
  },
  {
    name: "Notion",
    description: "Create, manage and sync documentation",
    icon: RiNotionFill,
    status: "Enable",
  },
  {
    name: "Slack",
    description: "Sent alerts and workspace updates to your slack account",
    icon: RiSlackFill,
    status: "Connected",
  },
  {
    name: "Dropbox",
    description: "Automate your file upload workflow",
    icon: RiDropboxFill,
    status: "Enable",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="flex items-center space-x-2">
        <h3 className="text-sm font-medium text-gray-900 dark:text-gray-50">
          Integrations
        </h3>
        <span className="inline-flex size-6 items-center justify-center rounded-full bg-gray-100 text-xs font-medium text-gray-900 dark:bg-gray-800 dark:text-gray-50">
          {data.length}
        </span>
      </div>
      <Divider className="!my-4" />
      <dl className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <Card key={item.name} className="flex flex-col justify-between">
            <item.icon className="size-6 shrink-0" aria-hidden={true} />
            <div className="mt-6 flex-1">
              <dt className="text-sm font-medium text-gray-900 dark:text-gray-50">
                {item.name}
              </dt>
              <dd className="mt-1 text-sm/6 text-gray-600 dark:text-gray-400">
                {item.description}
              </dd>
            </div>
            <Button
              className="mt-8"
              disabled={item.status === "Connected" ? true : false}
            >
              {item.status}
            </Button>
          </Card>
        ))}
      </dl>
    </div>
  )
}
