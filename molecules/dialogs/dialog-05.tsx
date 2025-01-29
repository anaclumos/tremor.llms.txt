"use client"

import React from "react"
import { RiArrowDownSLine, RiCloseLine } from "@remixicon/react"

import { Button } from "../../atoms/Button"
import { Card } from "../../atoms/Card"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../atoms/Dialog"
import { Divider } from "../../atoms/Divider"
import { Input } from "../../atoms/Input"

const members = [
  {
    name: "Max Miller",
    email: "max@company.com",
    initials: "MM",
    status: "member",
  },
  {
    name: "Lena Wave",
    email: "lena@company.com",
    initials: "LW",
    status: "member",
  },
  {
    name: "Emma Ross",
    email: "emma@company.com",
    initials: "ER",
    status: "member",
  },
]

export default function Example() {
  const [showDemo, setShowDemo] = React.useState(false)
  return (
    <div className="obfuscate">
      {/* first card only for demo purpose */}
      <Card className="sm:mx-auto sm:max-w-2xl">
        <div className="absolute right-3 top-3">
          <Button
            variant="ghost"
            className="!p-2 !text-gray-400 hover:!text-gray-500 dark:!text-gray-600 hover:dark:!text-gray-500"
            aria-label="close"
          >
            <RiCloseLine className="size-5 shrink-0" />
          </Button>
        </div>
        <h3 className="font-semibold text-gray-900 dark:text-gray-50">
          Invite members
        </h3>
        <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
          Add new team members to your workspace. Please consider your
          organization's policies when adding external people.
        </p>
        <div className="mt-6 flex w-full items-center space-x-2">
          <Input id="inviteEmail" placeholder="Add email..." type="email" />
          <Button type="submit">Invite</Button>
        </div>
        <h4 className="mt-6 text-sm font-medium text-gray-900 dark:text-gray-50">
          People with existing access
        </h4>
        <ul className="mt-2 w-full divide-y divide-gray-200 dark:divide-gray-800">
          {members.map((member) => (
            <li
              key={member.name}
              className="flex w-full items-center justify-between py-2.5 text-sm"
            >
              <div className="flex items-center space-x-4">
                <span
                  className="flex size-10 shrink-0 items-center justify-center rounded-full border bg-white text-xs text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50"
                  aria-hidden={true}
                >
                  {member.initials}
                </span>
                <span className="text-gray-900 dark:text-gray-50">
                  {member.name}
                </span>
              </div>
              <span className="inline-flex items-center rounded-md bg-white px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-200 dark:bg-gray-950 dark:text-gray-300 dark:ring-gray-800">
                {member.status}
              </span>
            </li>
          ))}
        </ul>
      </Card>
      <Divider className="mt-12">
        <Button
          variant="light"
          onClick={() => setShowDemo(!showDemo)}
          className="group !rounded-full !bg-gray-100 !text-gray-500 hover:!bg-gray-100 dark:!bg-gray-900 dark:!text-gray-500 hover:dark:!bg-gray-900"
        >
          <RiArrowDownSLine
            aria-hidden={true}
            className={`-ml-1 size-5 transition-all group-hover:text-gray-900 group-hover:dark:text-gray-50 ${showDemo ? "rotate-180" : ""} `}
          />
          <span className="ml-1 transition-all group-hover:text-gray-900 group-hover:dark:text-gray-50">
            {showDemo ? "Hide Demo" : "Show Demo"}
          </span>
        </Button>
      </Divider>
      {showDemo ? (
        <>
          <div className="flex items-center justify-center py-24">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary">Open Dialog</Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogClose asChild>
                  <Button
                    className="!absolute !right-3 !top-3 !p-2 !text-gray-400 hover:!text-gray-500 dark:!text-gray-600 hover:dark:!text-gray-500"
                    variant="ghost"
                  >
                    <RiCloseLine className="size-5 shrink-0" />
                  </Button>
                </DialogClose>
                <form action="#" method="POST">
                  <DialogHeader>
                    <DialogTitle className="text-base">
                      Invite members
                    </DialogTitle>
                    <DialogDescription className="mt-1 text-sm/6">
                      Add new team members to your workspace. Please consider
                      your organization's policies when adding external people.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-6 flex w-full items-center space-x-2">
                    <Input
                      id="inviteEmail"
                      placeholder="Add email..."
                      type="email"
                    />
                    <Button type="submit">Invite</Button>
                  </div>
                </form>
                <h4 className="mt-6 text-sm font-medium text-gray-900 dark:text-gray-50">
                  People with existing access
                </h4>
                <ul className="mt-2 w-full divide-y dark:divide-gray-800">
                  {members.map((member) => (
                    <li
                      key={member.name}
                      className="flex w-full items-center justify-between py-2.5 text-sm"
                    >
                      <div className="flex items-center space-x-4">
                        <span
                          className="flex size-10 shrink-0 items-center justify-center rounded-full border bg-white text-xs text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50"
                          aria-hidden={true}
                        >
                          {member.initials}
                        </span>
                        <span className="text-gray-900 dark:text-gray-50">
                          {member.name}
                        </span>
                      </div>
                      <span className="inline-flex items-center rounded-md bg-white px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-200 dark:bg-gray-950 dark:text-gray-300 dark:ring-gray-800">
                        {member.status}
                      </span>
                    </li>
                  ))}
                </ul>
              </DialogContent>
            </Dialog>
          </div>
        </>
      ) : null}
    </div>
  )
}
