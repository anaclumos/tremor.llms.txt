```example/grid-lists-grid-list-09.tsx
"use client"

import {
  RiLayoutGridLine,
  RiListUnordered,
  RiStackLine,
} from "@remixicon/react"

import { Button } from "@/atom/Button"
import { Card } from "@/atom/Card"
import { Divider } from "@/atom/Divider"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@/atom/Table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/atom/Tabs"

const data = [
  //array-start
  {
    name: "Test Workspace",
    icon: RiStackLine,
    href: "#",
    details: [
      {
        type: "Storage",
        value: "5/10GB",
      },
      {
        type: "Users",
        value: "89/100",
      },
      {
        type: "Requests",
        value: "995/10K",
      },
      {
        type: "Status",
        value: "Live",
      },
    ],
  },
  {
    name: "BI Workspace",
    icon: RiStackLine,
    href: "#",
    details: [
      {
        type: "Storage",
        value: "9.8/10GB",
      },
      {
        type: "Users",
        value: "23/100",
      },
      {
        type: "Requests",
        value: "435/10K",
      },
      {
        type: "Status",
        value: "Inactive",
      },
    ],
  },
  {
    name: "Livestream",
    icon: RiStackLine,
    href: "#",
    details: [
      {
        type: "Storage",
        value: "5.6/10GB",
      },
      {
        type: "Users",
        value: "79/100",
      },
      {
        type: "Requests",
        value: "642/10K",
      },
      {
        type: "Status",
        value: "Live",
      },
    ],
  },
  {
    name: "Prod Workspace",
    icon: RiStackLine,
    href: "#",
    details: [
      {
        type: "Storage",
        value: "9.8/10GB",
      },
      {
        type: "Users",
        value: "23/100",
      },
      {
        type: "Requests",
        value: "435/10K",
      },
      {
        type: "Status",
        value: "Inactive",
      },
    ],
  },
  {
    name: "Test Pipelines",
    icon: RiStackLine,
    href: "#",
    details: [
      {
        type: "Storage",
        value: "5.9/10GB",
      },
      {
        type: "Users",
        value: "89/100",
      },
      {
        type: "Requests",
        value: "995/10K",
      },
      {
        type: "Status",
        value: "Live",
      },
    ],
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <Tabs defaultValue="tab1">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-50">
              Workspaces
            </h3>
            <span className="inline-flex size-6 items-center justify-center rounded-full bg-gray-100 text-xs font-medium text-gray-900 dark:bg-gray-800 dark:text-gray-50">
              {data.length}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <TabsList
              variant="solid"
              className="-mx-1 bg-transparent dark:bg-transparent"
            >
              <TabsTrigger
                value="tab1"
                className="rounded-md py-1.5 data-[state=active]:text-blue-500 data-[state=active]:ring-1 data-[state=active]:ring-gray-200 data-[state=active]:ring-inset data-[state=active]:dark:bg-[#090E1A] data-[state=active]:dark:text-blue-500 data-[state=active]:dark:ring-gray-800"
              >
                <RiLayoutGridLine
                  className="size-5 shrink-0"
                  aria-hidden={true}
                />
              </TabsTrigger>
              <TabsTrigger
                value="tab2"
                className="rounded-md py-1.5 data-[state=active]:text-blue-500 data-[state=active]:ring-1 data-[state=active]:ring-gray-200 data-[state=active]:ring-inset data-[state=active]:dark:bg-[#090E1A] data-[state=active]:dark:text-blue-500 data-[state=active]:dark:ring-gray-800"
              >
                <RiListUnordered
                  className="size-5 shrink-0"
                  aria-hidden={true}
                />
              </TabsTrigger>
            </TabsList>
            <div className="hidden h-8 w-px bg-gray-200 sm:block dark:bg-gray-800" />
            <Button>Add workspace</Button>
          </div>
        </div>
        <Divider className="!my-4" />
        <TabsContent value="tab1">
          <ul
            role="list"
            className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {data.map((workspace) => (
              <Card
                key={workspace.name}
                className="relative overflow-hidden !p-0"
                asChild
              >
                <li>
                  <div className="border-b border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900">
                    <div className="flex items-center space-x-3">
                      <span className="flex size-12 items-center justify-center rounded-md border border-gray-200 bg-white dark:border-gray-800 dark:bg-[#090E1A]">
                        <workspace.icon
                          className="size-5 text-gray-500 dark:text-gray-500"
                          aria-hidden={true}
                        />
                      </span>
                      <h3 className="text-sm font-medium text-gray-900 dark:text-gray-50">
                        <a href={workspace.href} className="focus:outline-none">
                          {/* Extend link to entire card */}
                          <span
                            className="absolute inset-0"
                            aria-hidden={true}
                          />
                          {workspace.name}
                        </a>
                      </h3>
                    </div>
                  </div>
                  <div className="px-6 py-4">
                    <ul
                      role="list"
                      className="divide-y divide-gray-200 text-sm text-gray-500 dark:divide-gray-800 dark:text-gray-500"
                    >
                      {workspace.details.map((item) => (
                        <li
                          key={item.type}
                          className="flex items-center justify-between py-2.5"
                        >
                          <span>{item.type}</span>
                          {item.value === "Live" ? (
                            <span className="inline-flex items-center rounded-md bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-800 ring-1 ring-emerald-600/10 ring-inset dark:bg-emerald-400/10 dark:text-emerald-500 dark:ring-emerald-400/20">
                              {item.value}
                            </span>
                          ) : item.value === "Inactive" ? (
                            <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-0.5 text-xs font-medium text-gray-700 ring-1 ring-gray-200 ring-inset dark:bg-gray-900 dark:text-gray-400 dark:ring-gray-800">
                              {item.value}
                            </span>
                          ) : (
                            <span className="font-medium text-gray-900 dark:text-gray-50">
                              {item.value}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </Card>
            ))}
          </ul>
        </TabsContent>
        <TabsContent value="tab2">
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell>Name</TableHeaderCell>
                <TableHeaderCell>Storage</TableHeaderCell>
                <TableHeaderCell>Users</TableHeaderCell>
                <TableHeaderCell>Requests/Limit</TableHeaderCell>
                <TableHeaderCell>Status</TableHeaderCell>
                <TableHeaderCell>
                  <span className="sr-only">Edit</span>
                </TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((workspace) => (
                <TableRow
                  key={workspace.name}
                  className="hover:bg-gray-50 hover:dark:bg-gray-900"
                >
                  <TableCell className="font-medium text-gray-900 dark:text-gray-50">
                    {workspace.name}
                  </TableCell>
                  <TableCell>{workspace.details[0].value}</TableCell>
                  <TableCell>{workspace.details[1].value}</TableCell>
                  <TableCell>{workspace.details[2].value}</TableCell>
                  <TableCell>
                    {workspace.details[3].value === "Live" ? (
                      <span className="inline-flex items-center rounded-md bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-800 ring-1 ring-emerald-600/10 ring-inset dark:bg-emerald-400/10 dark:text-emerald-500 dark:ring-emerald-400/20">
                        {workspace.details[3].value}
                      </span>
                    ) : workspace.details[3].value === "Inactive" ? (
                      <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-0.5 text-xs font-medium text-gray-700 ring-1 ring-gray-200 ring-inset dark:bg-gray-900 dark:text-gray-400 dark:ring-gray-800">
                        {workspace.details[3].value}
                      </span>
                    ) : (
                      <span className="font-medium text-gray-900 dark:text-gray-50">
                        {workspace.details[3].value}
                      </span>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <a
                      href={workspace.href}
                      className="font-medium text-blue-500 dark:text-blue-500"
                    >
                      Edit<span className="sr-only">{workspace.name}</span>
                    </a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </div>
  )
}
```


```example/grid-lists-grid-list-08.tsx
"use client"

import type { SVGProps } from "react"
import { RiArrowDownCircleLine, RiStarSFill } from "@remixicon/react"

import { cx } from "@/lib/utils"

import { Card } from "@/atom/Card"
import { Divider } from "@/atom/Divider"

const GoogleDriveIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" viewBox="0 0 88 78" {...props}>
    <g clipPath="url(#clip0_6661_2945)">
      <path
        fill="#0066DA"
        d="M6.6 66.85L10.45 73.5C11.25 74.9 12.4 76 13.75 76.8L27.5 53H0C0 54.55 0.4 56.1 1.2 57.5L6.6 66.85Z"
      />
      <path
        fill="#00AC47"
        d="M43.65 25.0002L29.9 1.2002C28.55 2.0002 27.4 3.1002 26.6 4.5002L1.2 48.5002C0.414713 49.87 0.00104556 51.4213 0 53.0002H27.5L43.65 25.0002Z"
      />
      <path
        fill="#EA4335"
        d="M73.55 76.8C74.9 76 76.05 74.9 76.85 73.5L78.45 70.75L86.1 57.5C86.9 56.1 87.3 54.55 87.3 53H59.798L65.65 64.5L73.55 76.8Z"
      />
      <path
        fill="#00832D"
        d="M43.65 25L57.4 1.2C56.05 0.4 54.5 0 52.9 0H34.4C32.8 0 31.25 0.45 29.9 1.2L43.65 25Z"
      />
      <path
        fill="#2684FC"
        d="M59.8 53H27.5L13.75 76.8C15.1 77.6 16.65 78 18.25 78H69.05C70.65 78 72.2 77.55 73.55 76.8L59.8 53Z"
      />
      <path
        fill="#FFBA00"
        d="M73.4 26.5002L60.7 4.5002C59.9 3.1002 58.75 2.0002 57.4 1.2002L43.65 25.0002L59.8 53.0002H87.25C87.25 51.4502 86.85 49.9002 86.05 48.5002L73.4 26.5002Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_6661_2945">
        <rect width={87.3} height={78} fill="white" />
      </clipPath>
    </defs>
  </svg>
)

const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" viewBox="0 0 500 500" {...props}>
    <path
      fill="#0866FF"
      d="M500 250C500 111.93 388.07 0 250 0C111.93 0 0 111.93 0 250C0 367.24 80.72 465.62 189.61 492.64V326.4H138.06V250H189.61V217.08C189.61 131.99 228.12 92.55 311.66 92.55C327.5 92.55 354.83 95.66 366.01 98.76V168.01C360.11 167.39 349.86 167.08 337.13 167.08C296.14 167.08 280.3 182.61 280.3 222.98V250H361.96L347.93 326.4H280.3V498.17C404.07 483.22 500 377.82 500 250Z"
    />
  </svg>
)

const NotionIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" viewBox="0 0 100 100" {...props}>
    <g clipPath="url(#cli88.07 0 250 0C111.93 0 0 111.93 0 250C0 367.24 80.72 465.62 189.61 492.64V326.4H138.06V250H189.61V217.08C189.61 131.p0_6661_2956)">
      <path
        fill="white"
        d="M6.017 4.31322L61.35 0.226216C68.147 -0.356784 69.893 0.036216 74.167 3.14322L91.83 15.5862C94.743 17.7262 95.713 18.3092 95.713 20.6392V88.8822C95.713 93.1592 94.16 95.6892 88.723 96.0752L24.467 99.9672C20.387 100.16 18.444 99.5772 16.307 96.8542L3.3 79.9402C0.967 76.8272 0 74.4972 0 71.7732V11.1132C0 7.61622 1.553 4.70022 6.017 4.31322Z"
      />
      <path
        fill="black"
        fillRule="evenodd"
        d="M61.35 0.227216L6.017 4.31422C1.553 4.70022 0 7.61722 0 11.1132V71.7732C0 74.4962 0.967 76.8262 3.3 79.9402L16.307 96.8532C18.444 99.5762 20.387 100.16 24.467 99.9662L88.724 96.0762C94.157 95.6892 95.714 93.1592 95.714 88.8832V20.6402C95.714 18.4302 94.841 17.7932 92.271 15.9072L74.167 3.14322C69.894 0.036216 68.147 -0.356784 61.35 0.226216V0.227216ZM25.92 19.5232C20.673 19.8762 19.483 19.9562 16.503 17.5332L8.927 11.5072C8.157 10.7272 8.544 9.75422 10.484 9.56022L63.677 5.67322C68.144 5.28322 70.47 6.84022 72.217 8.20022L81.34 14.8102C81.73 15.0072 82.7 16.1702 81.533 16.1702L26.6 19.4772L25.92 19.5232ZM19.803 88.3002V30.3672C19.803 27.8372 20.58 26.6702 22.906 26.4742L86 22.7802C88.14 22.5872 89.107 23.9472 89.107 26.4732V84.0202C89.107 86.5502 88.717 88.6902 85.224 88.8832L24.847 92.3832C21.354 92.5762 19.804 91.4132 19.804 88.3002H19.803ZM79.403 33.4732C79.79 35.2232 79.403 36.9732 77.653 37.1732L74.743 37.7502V80.5232C72.216 81.8832 69.89 82.6602 67.946 82.6602C64.839 82.6602 64.063 81.6872 61.736 78.7732L42.706 48.8332V77.8002L48.726 79.1632C48.726 79.1632 48.726 82.6632 43.869 82.6632L30.479 83.4402C30.089 82.6602 30.479 80.7172 31.836 80.3302L35.333 79.3602V41.0602L30.48 40.6672C30.09 38.9172 31.06 36.3902 33.78 36.1942L48.147 35.2272L67.947 65.5542V38.7242L62.9 38.1442C62.51 36.0012 64.063 34.4442 66.003 34.2542L79.403 33.4732Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="clip0_6661_2956">
        <rect width={100} height={100} fill="white" />
      </clipPath>
    </defs>
  </svg>
)

const SlackIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" viewBox="0 0 123 123" {...props}>
    <path
      fill="#E01E5A"
      d="M25.8 77.6002C25.8 84.7002 20 90.5002 12.9 90.5002C5.8 90.5002 0 84.7002 0 77.6002C0 70.5002 5.8 64.7002 12.9 64.7002H25.8V77.6002Z"
    />
    <path
      fill="#E01E5A"
      d="M32.3 77.6002C32.3 70.5002 38.1 64.7002 45.2 64.7002C52.3 64.7002 58.1 70.5002 58.1 77.6002V109.9C58.1 117 52.3 122.8 45.2 122.8C38.1 122.8 32.3 117 32.3 109.9V77.6002Z"
    />
    <path
      fill="#36C5F0"
      d="M45.2 25.8C38.1 25.8 32.3 20 32.3 12.9C32.3 5.8 38.1 0 45.2 0C52.3 0 58.1 5.8 58.1 12.9V25.8H45.2Z"
    />
    <path
      fill="#36C5F0"
      d="M45.2 32.2998C52.3 32.2998 58.1 38.0998 58.1 45.1998C58.1 52.2998 52.3 58.0998 45.2 58.0998H12.9C5.8 58.0998 0 52.2998 0 45.1998C0 38.0998 5.8 32.2998 12.9 32.2998H45.2Z"
    />
    <path
      fill="#2EB67D"
      d="M97 45.1998C97 38.0998 102.8 32.2998 109.9 32.2998C117 32.2998 122.8 38.0998 122.8 45.1998C122.8 52.2998 117 58.0998 109.9 58.0998H97V45.1998Z"
    />
    <path
      fill="#2EB67D"
      d="M90.5 45.2C90.5 52.3 84.7 58.1 77.6 58.1C70.5 58.1 64.7 52.3 64.7 45.2V12.9C64.7 5.8 70.5 0 77.6 0C84.7 0 90.5 5.8 90.5 12.9V45.2Z"
    />
    <path
      fill="#ECB22E"
      d="M77.6 97C84.7 97 90.5 102.8 90.5 109.9C90.5 117 84.7 122.8 77.6 122.8C70.5 122.8 64.7 117 64.7 109.9V97H77.6Z"
    />
    <path
      fill="#ECB22E"
      d="M77.6 90.5002C70.5 90.5002 64.7 84.7002 64.7 77.6002C64.7 70.5002 70.5 64.7002 77.6 64.7002H109.9C117 64.7002 122.8 70.5002 122.8 77.6002C122.8 84.7002 117 90.5002 109.9 90.5002H77.6Z"
    />
  </svg>
)

const DropboxIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" viewBox="0 0 165 140" {...props}>
    <g clipPath="url(#clip0_6661_2986)">
      <path
        fill="#0061FF"
        d="M82.2562 26.2152L41.1334 52.4303L82.2562 78.6455L41.1334 104.861L0 78.4976L41.1334 52.2825L0 26.2152L41.1334 0L82.2562 26.2152ZM40.9117 113.286L82.0451 87.0706L123.168 113.286L82.0451 139.501L40.9117 113.286ZM82.2457 78.4976L123.379 52.2825L82.2457 26.2152L123.168 0L164.301 26.2152L123.168 52.4303L164.301 78.6455L123.168 104.861L82.2457 78.4976Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_6661_2986">
        <rect width={164.386} height={139.575} fill="white" />
      </clipPath>
    </defs>
  </svg>
)

const data = [
  //array-start
  {
    name: "Google Drive",
    description: "Automate your file upload workflow",
    installations: 983,
    icon: GoogleDriveIcon,
    href: "#",
    isHomeBuilt: true,
    status: "live",
  },
  {
    name: "Facebook Ads",
    description: "Analayze ad performance directly in your workspace",
    installations: 461,
    icon: FacebookIcon,
    href: "#",
    isHomeBuilt: false,
    status: "live",
  },
  {
    name: "Notion",
    description: "Create, manage and sync documentation",
    installations: 719,
    icon: NotionIcon,
    href: "#",
    isHomeBuilt: true,
    status: "live",
  },
  {
    name: "Slack",
    description: "Sent alerts and workspace updates to your slack account",
    installations: 889,
    icon: SlackIcon,
    href: "#",
    isHomeBuilt: false,
    status: "live",
  },
  {
    name: "Dropbox",
    description: "Automate your file upload workflow",
    installations: 199,
    icon: DropboxIcon,
    href: "#",
    isHomeBuilt: false,
    status: "coming soon",
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
      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <Card
            key={item.name}
            className="flex flex-col justify-between overflow-hidden !p-0"
          >
            <div className="p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-3">
                  <span className="relative flex size-12 shrink-0 items-center justify-center rounded-md border border-gray-200 bg-white dark:border-gray-800 dark:bg-[#090E1A]">
                    <item.icon className="size-5" aria-hidden={true} />
                    {item.isHomeBuilt ? (
                      <span className="absolute -top-1 -right-1 flex size-4 shrink-0 items-center justify-center rounded-full bg-blue-500 ring-2 ring-white dark:bg-blue-500 dark:ring-[#090E1A]">
                        <RiStarSFill
                          className="size-2.5 text-white dark:text-white"
                          aria-hidden={true}
                        />
                      </span>
                    ) : null}
                  </span>
                  <dt
                    className={cx(
                      item.status === "coming soon"
                        ? "text-gray-400 dark:text-gray-600"
                        : "text-gray-900 dark:text-gray-50",
                      "text-sm font-medium",
                    )}
                  >
                    <a href={item.href} className="focus:outline-none">
                      {/* Extend link to entire card */}
                      <span className="absolute inset-0" aria-hidden={true} />
                      {item.name}
                    </a>
                  </dt>
                </div>
                {item.status === "coming soon" ? (
                  <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-0.5 text-xs font-medium text-gray-500 ring-1 ring-gray-200 ring-inset dark:bg-gray-900 dark:text-gray-500 dark:ring-gray-800">
                    {item.status}
                  </span>
                ) : null}
              </div>
              <dd
                className={cx(
                  item.status === "coming soon"
                    ? "text-gray-400 dark:text-gray-600"
                    : "text-gray-600 dark:text-gray-400",
                  "mt-3 text-sm/6",
                )}
              >
                {item.description}
              </dd>
            </div>
            {item.status !== "coming soon" ? (
              <div className="border-t border-gray-200 bg-gray-50 px-6 py-3 dark:border-gray-900 dark:bg-[#090E1A]">
                <div className="flex items-center space-x-2">
                  <RiArrowDownCircleLine
                    className="size-5 text-gray-400 dark:text-gray-600"
                    aria-hidden={true}
                  />
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    {item.installations} Installations
                  </p>
                </div>
              </div>
            ) : null}
          </Card>
        ))}
      </dl>
    </div>
  )
}
```


```example/grid-lists-grid-list-03.tsx
"use client"

import {
  RiArrowRightUpLine,
  RiLayoutGridLine,
  RiListCheck,
} from "@remixicon/react"

import { cx } from "@/lib/utils"

import { Card } from "@/atom/Card"
import { Divider } from "@/atom/Divider"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@/atom/Table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/atom/Tabs"

const data = [
  //array-start
  {
    name: "Alissia Stone",
    initial: "AS",
    textColor: "text-fuchsia-800 dark:text-fuchsia-500",
    bgColor: "bg-fuchsia-100 dark:bg-fuchsia-500/20",
    email: "a.stone@gmail.com",
    href: "#",
    details: [
      {
        type: "Role",
        value: "member",
      },
      {
        type: "Last active",
        value: "2d ago",
      },
    ],
  },
  {
    name: "Emma Bern",
    initial: "EB",
    textColor: "text-blue-800 dark:text-blue-500",
    bgColor: "bg-blue-100 dark:bg-blue-500/20",
    email: "e.bern@gmail.com",
    href: "#",
    details: [
      {
        type: "Role",
        value: "member",
      },
      {
        type: "Last active",
        value: "1d ago",
      },
    ],
  },
  {
    name: "Aaron McFlow",
    initial: "AM",
    textColor: "text-pink-800 dark:text-pink-500",
    bgColor: "bg-pink-100 dark:bg-pink-500/20",
    email: "a.flow@acme.com",
    href: "#",
    details: [
      {
        type: "Role",
        value: "admin",
      },
      {
        type: "Last active",
        value: "2min ago",
      },
    ],
  },
  {
    name: "Thomas Palstein",
    initial: "TP",
    textColor: "text-emerald-800 dark:text-emerald-500",
    bgColor: "bg-emerald-100 dark:bg-emerald-500/20",
    email: "t.palstein@acme.com",
    href: "#",
    details: [
      {
        type: "Role",
        value: "admin",
      },
      {
        type: "Last active",
        value: "18min ago",
      },
    ],
  },
  {
    name: "Sarah Johnson",
    initial: "SJ",
    textColor: "text-orange-800 dark:text-orange-500",
    bgColor: "bg-orange-100 dark:bg-orange-500/20",
    email: "s.johnson@gmail.com",
    href: "#",
    details: [
      {
        type: "Role",
        value: "member",
      },
      {
        type: "Last active",
        value: "3h ago",
      },
    ],
  },
  {
    name: "David Smith",
    initial: "DS",
    textColor: "text-indigo-800 dark:text-indigo-500",
    bgColor: "bg-indigo-100 dark:bg-indigo-500/20",
    email: "d.smith@gmail.com",
    href: "#",
    details: [
      {
        type: "Role",
        value: "guest",
      },
      {
        type: "Last active",
        value: "4h ago",
      },
    ],
  },
  {
    name: "Megan Brown",
    initial: "MB",
    textColor: "text-yellow-800 dark:text-yellow-500",
    bgColor: "bg-yellow-100 dark:bg-yellow-500/20",
    email: "m.brown@gmail.com",
    href: "#",
    details: [
      {
        type: "Role",
        value: "admin",
      },
      {
        type: "Last active",
        value: "1d ago",
      },
    ],
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <Tabs defaultValue="tab1">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-50">
              Members
            </h3>
            <span className="inline-flex size-6 items-center justify-center rounded-full bg-gray-100 text-xs font-medium text-gray-900 dark:bg-gray-800 dark:text-gray-50">
              {data.length}
            </span>
          </div>
          <TabsList
            variant="solid"
            className="space-x-1 bg-transparent dark:bg-transparent"
          >
            <TabsTrigger
              value="tab1"
              className="rounded-md py-1.5 data-[state=active]:ring-1 data-[state=active]:ring-gray-200 data-[state=active]:ring-inset data-[state=active]:dark:bg-[#090E1A] data-[state=active]:dark:ring-gray-800"
            >
              <RiLayoutGridLine
                className="size-5 shrink-0"
                aria-hidden={true}
              />
            </TabsTrigger>
            <TabsTrigger
              value="tab2"
              className="rounded-md py-1.5 data-[state=active]:ring-1 data-[state=active]:ring-gray-200 data-[state=active]:ring-inset data-[state=active]:dark:bg-[#090E1A] data-[state=active]:dark:ring-gray-800"
            >
              <RiListCheck className="size-5 shrink-0" aria-hidden={true} />
            </TabsTrigger>
          </TabsList>
        </div>
        <Divider className="!my-4" />
        <TabsContent value="tab1">
          <ul
            role="list"
            className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {data.map((member) => (
              <Card key={member.name} asChild className="group !p-4">
                <li>
                  <div className="flex items-center space-x-4">
                    <span
                      className={cx(
                        member.textColor,
                        member.bgColor,
                        "flex size-12 shrink-0 items-center justify-center rounded-full text-sm font-medium",
                      )}
                      aria-hidden={true}
                    >
                      {member.initial}
                    </span>
                    <div className="truncate">
                      <p className="truncate text-sm font-medium text-gray-900 dark:text-gray-50">
                        <a href={member.href} className="focus:outline-none">
                          {/* Extend link to entire card */}
                          <span
                            className="absolute inset-0"
                            aria-hidden={true}
                          />
                          {member.name}
                        </a>
                      </p>
                      <p className="truncate text-sm text-gray-500 dark:text-gray-500">
                        {member.email}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 grid grid-cols-2 divide-x divide-gray-200 border-t border-gray-200 dark:divide-gray-800 dark:border-gray-800">
                    {member.details.map((item) => (
                      <div key={item.type} className="truncate px-3 py-2">
                        <p className="truncate text-xs text-gray-500 dark:text-gray-500">
                          {item.type}
                        </p>
                        <p className="truncate text-sm font-medium text-gray-900 dark:text-gray-50">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                  <span
                    className="pointer-events-none absolute top-4 right-4 text-gray-400 group-hover:text-gray-500 dark:text-gray-600 group-hover:dark:text-gray-500"
                    aria-hidden={true}
                  >
                    <RiArrowRightUpLine className="size-4" aria-hidden={true} />
                  </span>
                </li>
              </Card>
            ))}
          </ul>
        </TabsContent>
        <TabsContent value="tab2">
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell>Name</TableHeaderCell>
                <TableHeaderCell>Storage</TableHeaderCell>
                <TableHeaderCell>Users</TableHeaderCell>
                <TableHeaderCell className="text-right">
                  Last edited
                </TableHeaderCell>
                <TableHeaderCell>
                  <span className="sr-only">Edit</span>
                </TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((member) => (
                <TableRow
                  key={member.name}
                  className="hover:bg-gray-50 hover:dark:bg-gray-900"
                >
                  <TableCell className="font-medium text-gray-900 dark:text-gray-50">
                    {member.name}
                  </TableCell>
                  <TableCell>{member.email}</TableCell>
                  <TableCell>{member.details[0].value}</TableCell>
                  <TableCell className="text-right">
                    {member.details[1].value}
                  </TableCell>
                  <TableCell className="text-right">
                    <a
                      href={member.href}
                      className="font-medium text-blue-500 dark:text-blue-500"
                    >
                      Edit<span className="sr-only">{member.name}</span>
                    </a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </div>
  )
}
```


```example/grid-lists-grid-list-02.tsx
"use client"

import { RiArrowRightUpLine } from "@remixicon/react"

import { cx } from "@/lib/utils"

import { Card } from "@/atom/Card"
import { Divider } from "@/atom/Divider"

const data = [
  //array-start
  {
    name: "Alissia Stone",
    initial: "AS",
    textColor: "text-fuchsia-800 dark:text-fuchsia-500",
    bgColor: "bg-fuchsia-100 dark:bg-fuchsia-500/20",
    email: "a.stone@gmail.com",
    href: "#",
    details: [
      {
        type: "Role",
        value: "member",
      },
      {
        type: "Last active",
        value: "2d ago",
      },
    ],
  },
  {
    name: "Emma Bern",
    initial: "EB",
    textColor: "text-blue-800 dark:text-blue-500",
    bgColor: "bg-blue-100 dark:bg-blue-500/20",
    email: "e.bern@gmail.com",
    href: "#",
    details: [
      {
        type: "Role",
        value: "member",
      },
      {
        type: "Last active",
        value: "1d ago",
      },
    ],
  },
  {
    name: "Aaron McFlow",
    initial: "AM",
    textColor: "text-pink-800 dark:text-pink-500",
    bgColor: "bg-pink-100 dark:bg-pink-500/20",
    email: "a.flow@acme.com",
    href: "#",
    details: [
      {
        type: "Role",
        value: "admin",
      },
      {
        type: "Last active",
        value: "2min ago",
      },
    ],
  },
  {
    name: "Thomas Palstein",
    initial: "TP",
    textColor: "text-emerald-800 dark:text-emerald-500",
    bgColor: "bg-emerald-100 dark:bg-emerald-500/20",
    email: "t.palstein@acme.com",
    href: "#",
    details: [
      {
        type: "Role",
        value: "admin",
      },
      {
        type: "Last active",
        value: "18min ago",
      },
    ],
  },
  {
    name: "Sarah Johnson",
    initial: "SJ",
    textColor: "text-orange-800 dark:text-orange-500",
    bgColor: "bg-orange-100 dark:bg-orange-500/20",
    email: "s.johnson@gmail.com",
    href: "#",
    details: [
      {
        type: "Role",
        value: "member",
      },
      {
        type: "Last active",
        value: "3h ago",
      },
    ],
  },
  {
    name: "David Smith",
    initial: "DS",
    textColor: "text-indigo-800 dark:text-indigo-500",
    bgColor: "bg-indigo-100 dark:bg-indigo-500/20",
    email: "d.smith@gmail.com",
    href: "#",
    details: [
      {
        type: "Role",
        value: "guest",
      },
      {
        type: "Last active",
        value: "4h ago",
      },
    ],
  },
  {
    name: "Megan Brown",
    initial: "MB",
    textColor: "text-yellow-800 dark:text-yellow-500",
    bgColor: "bg-yellow-100 dark:bg-yellow-500/20",
    email: "m.brown@gmail.com",
    href: "#",
    details: [
      {
        type: "Role",
        value: "admin",
      },
      {
        type: "Last active",
        value: "1d ago",
      },
    ],
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="flex items-center space-x-2">
        <h3 className="text-sm font-medium text-gray-900 dark:text-gray-50">
          Members
        </h3>
        <span className="inline-flex size-6 items-center justify-center rounded-full bg-gray-100 text-xs font-medium text-gray-900 dark:bg-gray-800 dark:text-gray-50">
          {data.length}
        </span>
      </div>
      <Divider className="!my-4" />
      <ul
        role="list"
        className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {data.map((member) => (
          <Card key={member.name} asChild className="group !p-4">
            <li>
              <div className="flex items-center space-x-4">
                <span
                  className={cx(
                    member.textColor,
                    member.bgColor,
                    "flex size-12 shrink-0 items-center justify-center rounded-full text-sm font-medium",
                  )}
                  aria-hidden={true}
                >
                  {member.initial}
                </span>
                <div className="truncate">
                  <p className="truncate text-sm font-medium text-gray-900 dark:text-gray-50">
                    <a href={member.href} className="focus:outline-none">
                      {/* Extend link to entire card */}
                      <span className="absolute inset-0" aria-hidden={true} />
                      {member.name}
                    </a>
                  </p>
                  <p className="truncate text-sm text-gray-500 dark:text-gray-500">
                    {member.email}
                  </p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 divide-x divide-gray-200 border-t border-gray-200 dark:divide-gray-800 dark:border-gray-800">
                {member.details.map((item) => (
                  <div key={item.type} className="truncate px-3 py-2">
                    <p className="truncate text-xs text-gray-500 dark:text-gray-500">
                      {item.type}
                    </p>
                    <p className="truncate text-sm font-medium text-gray-900 dark:text-gray-50">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
              <span
                className="pointer-events-none absolute top-4 right-4 text-gray-400 group-hover:text-gray-500 dark:text-gray-600 group-hover:dark:text-gray-500"
                aria-hidden={true}
              >
                <RiArrowRightUpLine className="size-4" aria-hidden={true} />
              </span>
            </li>
          </Card>
        ))}
      </ul>
    </div>
  )
}
```


```example/grid-lists-grid-list-14.tsx
"use client"

import {
  RiBuildingFill,
  RiMapPin2Fill,
  RiSettings3Line,
  RiTimeLine,
  RiTruckLine,
  RiUserFill,
} from "@remixicon/react"

import { cx } from "@/lib/utils"

import { Card } from "@/atom/Card"
import { Divider } from "@/atom/Divider"
import { ProgressCircle } from "@/atom/ProgressCircle"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/atom/Tabs"

const data = [
  //array-start
  {
    status: "In progress",
    icon: RiSettings3Line,
    iconColor: "text-blue-500",
    orders: [
      {
        item: "Printer Laser Jet Pro",
        company: "Big Tech Ltd.",
        location: "Paris, France",
        contact: "Lena Stone",
        fulfillmentActual: 8,
        fulfillmentTotal: 10,
        lastUpdated: "2min ago",
      },
      {
        item: "LED Monitor",
        company: "Bitclick Holding",
        location: "Zurich, Switzerland",
        contact: "Matthias Ruedi",
        fulfillmentActual: 3,
        fulfillmentTotal: 4,
        lastUpdated: "5min ago",
      },
      {
        item: "Conference Speaker",
        company: "Cornerstone LLC",
        location: "Frankfurt, Germany",
        contact: "David Mueller",
        fulfillmentActual: 2,
        fulfillmentTotal: 4,
        lastUpdated: "10d ago",
      },
    ],
  },
  {
    status: "Delivering",
    icon: RiTruckLine,
    iconColor: "text-emerald-500",
    orders: [
      {
        item: 'OLED 49" Monitor',
        company: "Walders AG",
        location: "St. Gallen, Switzerland",
        contact: "Patrick Doe",
        fulfillmentActual: 5,
        fulfillmentTotal: 6,
        lastUpdated: "4d ago",
      },
      {
        item: "Portable Power Station",
        company: "Lake View GmbH",
        location: "Lucerne, Switzerland",
        contact: "Marco Smith",
        fulfillmentActual: 5,
        fulfillmentTotal: 8,
        lastUpdated: "1d ago",
      },
      {
        item: "Office headset (Wireless)",
        company: "Cornerstone LLC",
        location: "St. Anton, Austria",
        contact: "Peter Batt",
        fulfillmentActual: 1,
        fulfillmentTotal: 2,
        lastUpdated: "7d ago",
      },
      {
        item: "Smart Home Security System",
        company: "SecureTech Solutions AG",
        location: "Munich, Germany",
        contact: "Thomas Schneider",
        fulfillmentActual: 3,
        fulfillmentTotal: 4,
        lastUpdated: "2h ago",
      },
      {
        item: 'Gaming Laptop Super Screen 14" (This is a super long edge case with many numbers)',
        company: "Tech Master Ltd.",
        location: "Aspen, USA",
        contact: "Joe Ross",
        fulfillmentActual: 9,
        fulfillmentTotal: 10,
        lastUpdated: "1h ago",
      },
    ],
  },
  {
    status: "Delayed",
    icon: RiTimeLine,
    iconColor: "text-orange-500",
    orders: [
      {
        item: "External SSD Portable",
        company: "Waterbridge Associates Inc.",
        location: "New York, USA",
        contact: "Adam Taylor",
        fulfillmentActual: 4,
        fulfillmentTotal: 12,
        lastUpdated: "1d ago",
      },
      {
        item: "Portable Scanner V600",
        company: "Hotel Stars GmbH",
        location: "Chur, Switzerland",
        contact: "Elias Jones",
        fulfillmentActual: 5,
        fulfillmentTotal: 10,
        lastUpdated: "4d ago",
      },
    ],
  },
  //array-end
]

type Status = "In progress" | "Delivering" | "Delayed"

const statusColor: Record<Status, string> = {
  "In progress":
    "bg-blue-50 text-blue-700 ring-blue-600/20 dark:bg-blue-400/10 dark:text-blue-400 dark:ring-blue-400/20",
  Delivering:
    "bg-emerald-50 text-emerald-700 ring-emerald-600/20 dark:bg-emerald-400/10 dark:text-emerald-400 dark:ring-emerald-400/20",
  Delayed:
    "bg-orange-50 text-orange-700 ring-orange-600/20 dark:bg-orange-400/10 dark:text-orange-400 dark:ring-orange-400/20",
}

export default function Example() {
  return (
    <div className="obfuscate">
      <Card className="!bg-gray-50 p-0 dark:!bg-gray-900">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
            Orders
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Check status of recent orders
          </p>
        </div>
        <Tabs defaultValue={data[0].status}>
          <TabsList className="!bg-gray-50 !px-6 dark:!bg-gray-900">
            {data.map((category) => (
              <TabsTrigger
                key={category.status}
                value={category.status}
                className="group"
              >
                <div className="sm:flex sm:items-center sm:space-x-2">
                  <category.icon
                    className={cx(category.iconColor, "hidden size-5 sm:block")}
                    aria-hidden={true}
                  />
                  <span className="group-data-[state=active]:text-gray-900 group-data-[state=active]:dark:text-gray-50">
                    {category.status}
                  </span>
                  <span className="hidden rounded-md bg-white px-2 py-1 text-xs font-semibold tabular-nums ring-1 ring-gray-200 ring-inset group-data-[state=active]:text-gray-700 sm:block dark:bg-[#090E1A] dark:ring-gray-800 group-data-[state=active]:dark:text-gray-300">
                    {category.orders.length}
                  </span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
          <ul role="list" className="rounded-b-md bg-white dark:bg-gray-950">
            {data.map((category) => (
              <TabsContent
                key={category.status}
                value={category.status}
                className="space-y-4 px-6 pt-6 pb-6"
              >
                {category.orders.map((order) => (
                  <Card
                    asChild
                    key={order.item}
                    className="dark:border-gray-800"
                  >
                    <li>
                      <div className="flex items-center justify-between space-x-4 sm:justify-start sm:space-x-2">
                        <h4 className="truncate text-sm font-medium text-gray-900 dark:text-gray-50">
                          {order.item}
                        </h4>
                        <span
                          className={cx(
                            statusColor[category.status as Status],
                            "inline-flex items-center rounded px-1.5 py-0.5 text-xs font-medium whitespace-nowrap ring-1 ring-inset",
                          )}
                          aria-hidden={true}
                        >
                          {category.status}
                        </span>
                      </div>
                      <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-4">
                        <div className="flex items-center space-x-1.5">
                          <RiBuildingFill
                            className="size-5 text-gray-400 dark:text-gray-600"
                            aria-hidden={true}
                          />
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {order.company}
                          </p>
                        </div>
                        <div className="flex items-center space-x-1.5">
                          <RiMapPin2Fill
                            className="size-5 text-gray-400 dark:text-gray-600"
                            aria-hidden={true}
                          />
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {order.location}
                          </p>
                        </div>
                        <div className="flex items-center space-x-1.5">
                          <RiUserFill
                            className="size-5 text-gray-400 dark:text-gray-600"
                            aria-hidden={true}
                          />
                          <p className="text-sm text-gray-600 dark:text-gray-500">
                            {order.contact}
                          </p>
                        </div>
                      </div>
                      <Divider />
                      <div className="block sm:flex sm:items-center sm:justify-between sm:space-x-2">
                        <div className="flex items-center space-x-2">
                          <ProgressCircle
                            value={
                              (order.fulfillmentActual /
                                order.fulfillmentTotal) *
                              100
                            }
                            radius={9}
                            strokeWidth={3.5}
                          />
                          <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
                            Fulfillment controls ({order.fulfillmentActual}/
                            {order.fulfillmentTotal})
                          </p>
                        </div>
                        <p className="mt-2 text-sm text-gray-500 sm:mt-0 dark:text-gray-500">
                          Updated {order.lastUpdated}
                        </p>
                      </div>
                    </li>
                  </Card>
                ))}
              </TabsContent>
            ))}
          </ul>
        </Tabs>
      </Card>
    </div>
  )
}
```


```example/grid-lists-grid-list-01.tsx
"use client"

import { RiArrowRightUpLine } from "@remixicon/react"

import { cx } from "@/lib/utils"

import { Card } from "@/atom/Card"
import { Divider } from "@/atom/Divider"

const data = [
  //array-start
  {
    name: "Alissia Stone",
    initials: "AS",
    email: "a.stone@gmail.com",
    textColor: "text-fuchsia-800 dark:text-fuchsia-500",
    bgColor: "bg-fuchsia-100 dark:bg-fuchsia-500/20",
    href: "#",
  },
  {
    name: "Emma Bern",
    initials: "EB",
    email: "e.bern@gmail.com",
    textColor: "text-blue-800 dark:text-blue-500",
    bgColor: "bg-blue-100 dark:bg-blue-500/20",
    href: "#",
  },
  {
    name: "Aaron McFlow",
    initials: "AM",
    email: "a.flow@acme.com",
    textColor: "text-pink-800 dark:text-pink-500",
    bgColor: "bg-pink-100 dark:bg-pink-500/20",
    href: "#",
  },
  {
    name: "Thomas Palstein",
    initials: "TP",
    email: "t.palstein@acme.com",
    textColor: "text-emerald-800 dark:text-emerald-500",
    bgColor: "bg-emerald-100 dark:bg-emerald-500/20",
    href: "#",
  },
  {
    name: "Sarah Johnson",
    initials: "SJ",
    email: "s.johnson@gmail.com",
    textColor: "text-orange-800 dark:text-orange-500",
    bgColor: "bg-orange-100 dark:bg-orange-500/20",
    href: "#",
  },
  {
    name: "David Smith",
    initials: "DS",
    email: "d.smith@gmail.com",
    textColor: "text-indigo-800 dark:text-indigo-500",
    bgColor: "bg-indigo-100 dark:bg-indigo-500/20",
    href: "#",
  },
  {
    name: "Megan Brown",
    initials: "MB",
    email: "m.brown@gmail.com",
    textColor: "text-yellow-800 dark:text-yellow-500",
    bgColor: "bg-yellow-100 dark:bg-yellow-500/20",
    href: "#",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="flex items-center space-x-2">
        <h3 className="text-sm font-medium text-gray-900 dark:text-gray-50">
          Members
        </h3>
        <span className="inline-flex size-6 items-center justify-center rounded-full bg-gray-100 text-xs font-medium text-gray-900 dark:bg-gray-800 dark:text-gray-50">
          {data.length}
        </span>
      </div>
      <Divider className="!my-4" />
      <ul
        role="list"
        className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {data.map((member) => (
          <Card key={member.name} asChild className="group">
            <li>
              <div className="flex items-center space-x-4">
                <span
                  className={cx(
                    member.bgColor,
                    member.textColor,
                    "flex size-12 shrink-0 items-center justify-center rounded-full text-sm font-medium",
                  )}
                  aria-hidden={true}
                >
                  {member.initials}
                </span>
                <div className="truncate">
                  <p className="truncate text-sm font-medium text-gray-900 dark:text-gray-50">
                    <a href={member.href} className="focus:outline-none">
                      {/* Extend link to entire card */}
                      <span className="absolute inset-0" aria-hidden={true} />
                      {member.name}
                    </a>
                  </p>
                  <p className="truncate text-sm text-gray-500 dark:text-gray-500">
                    {member.email}
                  </p>
                </div>
              </div>
              <span
                className="pointer-events-none absolute top-4 right-4 text-gray-400 group-hover:text-gray-500 dark:text-gray-600 group-hover:dark:text-gray-500"
                aria-hidden={true}
              >
                <RiArrowRightUpLine className="size-4" aria-hidden={true} />
              </span>
            </li>
          </Card>
        ))}
      </ul>
    </div>
  )
}
```


```example/grid-lists-grid-list-15.tsx
"use client"

import { RiDatabase2Line, RiGroupLine, RiTimeLine } from "@remixicon/react"

import { Button } from "@/atom/Button"
import { Card } from "@/atom/Card"
import { Divider } from "@/atom/Divider"
import { Input } from "@/atom/Input"
import { Label } from "@/atom/Label"
import { Switch } from "@/atom/Switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/atom/Tabs"

const data = [
  //array-start
  {
    region: "US-East",
    workspaces: [
      {
        name: "sales_by_day_api",
        status: "active",
        type: "Test workspace",
        database: "live_data",
        href: "#",
        capacity: [
          {
            label: "users",
            value: 34,
          },
          {
            label: "storage",
            value: "5/10GB",
          },
          {
            label: "lastEdited",
            value: "1d ago",
          },
        ],
      },
      {
        name: "testing_environment_2",
        status: "inactive",
        type: "API",
        database: "test_data",
        href: "#",
        capacity: [
          {
            label: "users",
            value: 28,
          },
          {
            label: "storage",
            value: "7.4/10GB",
          },
          {
            label: "lastEdited",
            value: "2d ago",
          },
        ],
      },
      {
        name: "training_environment",
        status: "active",
        type: "Test workspace",
        database: "live_data",
        href: "#",
        capacity: [
          {
            label: "users",
            value: 38,
          },
          {
            label: "storage",
            value: "3.2/10GB",
          },
          {
            label: "lastEdited",
            value: "4h ago",
          },
        ],
      },
      {
        name: "analytics_dashboard",
        status: "inactive",
        type: "API",
        database: "test_data",
        href: "#",
        capacity: [
          {
            label: "users",
            value: 34,
          },
          {
            label: "storage",
            value: "5/10GB",
          },
          {
            label: "lastEdited",
            value: "1d ago",
          },
        ],
      },
      {
        name: "managed_database_test",
        status: "active",
        type: "Test workspace",
        database: "live_data",
        href: "#",
        capacity: [
          {
            label: "users",
            value: 39,
          },
          {
            label: "storage",
            value: "5.9/10GB",
          },
          {
            label: "lastEdited",
            value: "7d ago",
          },
        ],
      },
    ],
  },
  {
    region: "US-West",
    workspaces: [
      {
        name: "testing_lab",
        status: "active",
        type: "Report",
        database: "live_data",
        href: "#",
        capacity: [
          {
            label: "users",
            value: 27,
          },
          {
            label: "storage",
            value: "5/10GB",
          },
          {
            label: "lastEdited",
            value: "1d ago",
          },
        ],
      },
      {
        name: "research_project_2",
        status: "inactive",
        type: "Report",
        database: "test_data",
        href: "#",
        capacity: [
          {
            label: "users",
            value: 45,
          },
          {
            label: "storage",
            value: "6.4/10GB",
          },
          {
            label: "lastEdited",
            value: "4d ago",
          },
        ],
      },
      {
        name: "supply_chain_api_month",
        status: "active",
        type: "API",
        database: "live_data",
        href: "#",
        capacity: [
          {
            label: "users",
            value: 41,
          },
          {
            label: "storage",
            value: "7.8/10GB",
          },
          {
            label: "lastEdited",
            value: "1d ago",
          },
        ],
      },
      {
        name: "test_environment_beta",
        status: "inactive",
        type: "Test workspace",
        database: "test_data",
        href: "#",
        capacity: [
          {
            label: "users",
            value: 39,
          },
          {
            label: "storage",
            value: "6.4/10GB",
          },
          {
            label: "lastEdited",
            value: "2h ago",
          },
        ],
      },
      {
        name: "private_workspace_test_api",
        status: "inactive",
        type: "Test workspace",
        database: "test_data",
        href: "#",
        capacity: [
          {
            label: "users",
            value: 31,
          },
          {
            label: "storage",
            value: "4.1/10GB",
          },
          {
            label: "lastEdited",
            value: "2d ago",
          },
        ],
      },
    ],
  },
  {
    region: "EU-Central-1",
    workspaces: [
      {
        name: "testing_lab",
        status: "active",
        type: "API",
        database: "live_data",
        href: "#",
        capacity: [
          {
            label: "users",
            value: 24,
          },
          {
            label: "storage",
            value: "6.1/10GB",
          },
          {
            label: "lastEdited",
            value: "1h ago",
          },
        ],
      },
      {
        name: "research_project_2",
        status: "inactive",
        type: "Report",
        database: "test_data",
        href: "#",
        capacity: [
          {
            label: "users",
            value: 12,
          },
          {
            label: "storage",
            value: "1.1/10GB",
          },
          {
            label: "lastEdited",
            value: "3d ago",
          },
        ],
      },
    ],
  },
  //array-end
] as const

const capacityIcon = {
  users: RiGroupLine,
  storage: RiDatabase2Line,
  lastEdited: RiTimeLine,
}

export default function Example() {
  return (
    <div className="obfuscate">
      <Card className="!p-0">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
            Workspaces
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
          </p>
        </div>
        <Tabs defaultValue={data[0].region}>
          <TabsList className="px-6">
            {data.map((category) => (
              <TabsTrigger
                key={category.region}
                value={category.region}
                className="group"
              >
                <span className="group-data-[state=active]:text-gray-900 group-data-[state=active]:dark:text-gray-50">
                  {category.region}
                </span>
                <span className="ml-2 hidden rounded-md bg-white px-2 py-1 text-xs font-semibold tabular-nums ring-1 ring-gray-200 ring-inset group-data-[state=active]:text-gray-700 sm:inline-flex dark:bg-[#090E1A] dark:ring-gray-800 group-data-[state=active]:dark:text-gray-300">
                  {category.workspaces.length}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
          <ul role="list">
            {data.map((category) => (
              <TabsContent
                key={category.region}
                value={category.region}
                className="space-y-4 px-6 pt-6 pb-6"
              >
                <div className="block md:flex md:items-center md:justify-between">
                  <Input
                    type="search"
                    placeholder="Search workspace..."
                    className="h-9 w-full rounded-md md:max-w-xs"
                  />
                  <div className="lg:flex lg:items-center lg:space-x-3">
                    <div className="hidden items-center space-x-2 lg:flex">
                      <Label
                        htmlFor="show-active-spaces"
                        className="whitespace-nowrap text-gray-500 dark:text-gray-500"
                      >
                        Show active spaces
                      </Label>
                      <Switch
                        id="show-active-spaces"
                        name="show-active-spaces"
                      />
                    </div>
                    <span className="hidden h-8 w-px bg-gray-200 lg:block dark:bg-gray-800" />
                    <Button className="mt-2 h-9 w-full sm:block md:mt-0 md:w-fit">
                      Add workspace
                    </Button>
                  </div>
                </div>
                <Divider />
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3"
                >
                  {category.workspaces.map((workspace) => (
                    <Card
                      key={workspace.name}
                      className="rounded-md p-4 dark:border-gray-800"
                      asChild
                    >
                      <li>
                        <div className="flex items-center space-x-2">
                          <h4 className="truncate text-sm font-medium text-gray-900 dark:text-gray-50">
                            <a
                              href={workspace.href}
                              className="focus:outline-none"
                            >
                              <span
                                className="absolute inset-0"
                                aria-hidden={true}
                              />
                              {workspace.name}
                            </a>
                          </h4>
                          {workspace.status === "active" ? (
                            <span className="inline-flex items-center rounded bg-emerald-100 px-1.5 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-400/10 dark:text-emerald-400">
                              active
                            </span>
                          ) : null}
                        </div>
                        <ul
                          role="list"
                          className="mt-3 text-sm text-gray-500 dark:text-gray-500"
                        >
                          <li className="flex items-center space-x-2 py-1">
                            <span>Type:</span>
                            <span className="font-medium text-gray-900 dark:text-gray-50">
                              {workspace.type}
                            </span>
                          </li>
                          <li className="flex items-center space-x-2 py-1">
                            <span>Database:</span>
                            <span className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-gray-200 ring-inset dark:text-gray-50 dark:ring-gray-800">
                              {workspace.database === "test_data" ? (
                                <span
                                  className="size-2 shrink-0 rounded-sm bg-gray-400 dark:bg-gray-600"
                                  aria-hidden={true}
                                />
                              ) : (
                                <span
                                  className="size-2 shrink-0 rounded-sm bg-blue-500 dark:bg-blue-500"
                                  aria-hidden={true}
                                />
                              )}

                              {workspace.database}
                            </span>
                          </li>
                        </ul>
                        <div className="mt-5 flex flex-wrap gap-4">
                          {workspace.capacity.map((item) => {
                            const Icon = capacityIcon[item.label]
                            return (
                              <div
                                key={item.label}
                                className="flex items-center space-x-1.5"
                              >
                                <Icon
                                  className="size-4 text-gray-400 dark:text-gray-600"
                                  aria-hidden={true}
                                />
                                <span className="text-xs font-medium text-gray-500 dark:text-gray-500">
                                  {item.value}
                                </span>
                              </div>
                            )
                          })}
                        </div>
                      </li>
                    </Card>
                  ))}
                </ul>
              </TabsContent>
            ))}
          </ul>
        </Tabs>
      </Card>
    </div>
  )
}
```


```example/grid-lists-grid-list-11.tsx
"use client"

import {
  RiBarChartFill,
  RiChat1Fill,
  RiGroupFill,
  RiMegaphoneFill,
} from "@remixicon/react"

import { Card } from "@/atom/Card"
import { Divider } from "@/atom/Divider"

const data = [
  //array-start
  {
    name: "Retention – How many users return each week and month",
    description: "Tracks user retention over weekly and monthly intervals.",
    lastEdited: "1 day ago",
    authorInitials: "EK",
    icon: RiGroupFill,
    href: "#",
  },
  {
    name: "Revenue – By employee and role",
    description:
      "Analyzes revenue generated by employees based on their roles and contributions.",
    lastEdited: "2 days ago",
    icon: RiBarChartFill,
    authorInitials: "SL",
    href: "#",
  },
  {
    name: "Active users – Today",
    description:
      "Provides a snapshot of active users on the platform as of today.",
    lastEdited: "14 hours ago",
    icon: RiGroupFill,
    authorInitials: "AM",
    href: "#",
  },
  {
    name: "Product Sales – Quarterly Report",
    description:
      "Details the sales performance of products over a quarterly timeframe.",
    lastEdited: "4 days ago",
    icon: RiBarChartFill,
    authorInitials: "JR",
    href: "#",
  },
  {
    name: "Customer Feedback – Survey Results",
    description:
      "Analyzes customer feedback survey results to gauge customer satisfaction.",
    lastEdited: "5 days ago",
    icon: RiChat1Fill,
    authorInitials: "AC",
    href: "#",
  },
  {
    name: "Marketing Campaign – Performance Analysis",
    description:
      "Examines the performance of marketing campaigns to return on investment (ROI).",
    lastEdited: "6 days ago",
    icon: RiMegaphoneFill,
    authorInitials: "MS",
    href: "#",
  },
  //array-end
]

function ContentPlaceholder() {
  return (
    <div className="relative h-full overflow-hidden rounded bg-gray-50 dark:bg-gray-800">
      <svg
        className="absolute inset-0 h-full w-full stroke-gray-200 dark:stroke-gray-700"
        fill="none"
      >
        <defs>
          <pattern
            id="pattern-2"
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path>
          </pattern>
        </defs>
        <rect
          stroke="none"
          fill="url(#pattern-2)"
          width="100%"
          height="100%"
        ></rect>
      </svg>
    </div>
  )
}

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="flex items-center space-x-2">
        <h3 className="text-sm font-medium text-gray-900 dark:text-gray-50">
          Most recent reports
        </h3>
        <span className="inline-flex size-6 items-center justify-center rounded-full bg-gray-100 text-xs font-medium text-gray-900 dark:bg-gray-800 dark:text-gray-50">
          {data.length}
        </span>
      </div>
      <Divider className="!my-4" />
      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <Card
            key={item.name}
            className="relative flex flex-col justify-between !p-2"
          >
            <div className="relative h-28">
              <ContentPlaceholder />
              <span className="absolute inset-x-0 bottom-0 left-4 flex size-12 translate-y-1/2 items-center justify-center rounded-md border border-gray-200 bg-white p-1 shadow-sm dark:border-gray-800 dark:bg-[#090E1A]">
                <item.icon
                  className="size-5 text-blue-500 dark:text-blue-500"
                  aria-hidden={true}
                />
              </span>
            </div>
            <div className="flex flex-1 flex-col px-2 pt-8 pb-2">
              <div className="flex-1">
                <dt className="truncate text-sm font-medium text-gray-900 dark:text-gray-50">
                  <a href={item.href} className="focus:outline-none">
                    {/* Extend link to entire card */}
                    <span className="absolute inset-0" aria-hidden={true} />
                    {item.name}
                  </a>
                </dt>
                <dd className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {item.description}
                </dd>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-500">
                  {item.lastEdited}
                </span>
                <span
                  className="inline-flex size-7 items-center justify-center rounded-full bg-gray-100 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                  aria-hidden={true}
                >
                  {item.authorInitials}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </dl>
    </div>
  )
}
```


```example/grid-lists-grid-list-05.tsx
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
            <span className="flex size-12 shrink-0 items-center justify-center rounded-md border border-gray-200 bg-white p-1 dark:border-gray-800 dark:bg-[#090E1A]">
              <item.icon className="size-6" aria-hidden={true} />
            </span>
            <div className="mt-5 flex-1">
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
```


```example/grid-lists-grid-list-04.tsx
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
```


```example/grid-lists-grid-list-10.tsx
"use client"

import { Card } from "@/atom/Card"
import { Divider } from "@/atom/Divider"

const data = [
  //array-start
  {
    name: "Retention – How many users return each week and month",
    description: "Tracks user retention over weekly and monthly intervals.",
    lastEdited: "1 day ago",
    authorInitials: "EK",
    href: "#",
  },
  {
    name: "Revenue – By employee and role",
    description:
      "Analyzes revenue generated by employees based on their roles and contributions.",
    lastEdited: "2 days ago",
    authorInitials: "SL",
    href: "#",
  },
  {
    name: "Active users – Today",
    description:
      "Provides a snapshot of active users on the platform as of today.",
    lastEdited: "14 hours ago",
    authorInitials: "AM",
    href: "#",
  },
  {
    name: "Product Sales – Quarterly Report",
    description:
      "Details the sales performance of products over a quarterly timeframe.",
    lastEdited: "4 days ago",
    authorInitials: "JR",
    href: "#",
  },
  {
    name: "Customer Feedback – Survey Results",
    description:
      "Analyzes customer feedback survey results to gauge customer satisfaction.",
    lastEdited: "5 days ago",
    authorInitials: "AC",
    href: "#",
  },
  {
    name: "Marketing Campaign – Performance Analysis",
    description:
      "Examines the performance of marketing campaigns to return on investment (ROI).",
    lastEdited: "6 days ago",
    authorInitials: "MS",
    href: "#",
  },
  //array-end
]

function ContentPlaceholder() {
  return (
    <div className="relative h-full overflow-hidden rounded bg-gray-50 dark:bg-gray-800">
      <svg
        className="absolute inset-0 h-full w-full stroke-gray-200 dark:stroke-gray-700"
        fill="none"
      >
        <defs>
          <pattern
            id="pattern-1"
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path>
          </pattern>
        </defs>
        <rect
          stroke="none"
          fill="url(#pattern-1)"
          width="100%"
          height="100%"
        ></rect>
      </svg>
    </div>
  )
}

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="flex items-center space-x-2">
        <h3 className="text-sm font-medium text-gray-900 dark:text-gray-50">
          Most recent reports
        </h3>
        <span className="inline-flex size-6 items-center justify-center rounded-full bg-gray-100 text-xs font-medium text-gray-900 dark:bg-gray-800 dark:text-gray-50">
          {data.length}
        </span>
      </div>
      <Divider className="!my-4" />
      <dl className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <Card
            key={item.name}
            className="relative flex flex-col justify-between !p-2"
          >
            <div className="h-28">
              <ContentPlaceholder />
            </div>
            <div className="flex flex-1 flex-col px-2 pt-3 pb-2">
              <div className="flex-1">
                <dt className="truncate text-sm font-medium text-gray-900 dark:text-gray-50">
                  <a href={item.href} className="focus:outline-none">
                    {/* Extend link to entire card */}
                    <span className="absolute inset-0" aria-hidden={true} />
                    {item.name}
                  </a>
                </dt>
                <dd className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {item.description}
                </dd>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-500">
                  {item.lastEdited}
                </span>
                <span
                  className="inline-flex size-7 items-center justify-center rounded-full bg-gray-100 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                  aria-hidden={true}
                >
                  {item.authorInitials}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </dl>
    </div>
  )
}
```


```example/grid-lists-grid-list-06.tsx
"use client"

import { RiStackLine, RiWifiLine } from "@remixicon/react"

import { Card } from "@/atom/Card"

const data = [
  //array-start
  {
    tag: "pipeline-145",
    name: "sales_by_channel_per_day_materialized",
    lastEdited: "Sep 18",
    status: "live",
    type: "API",
    href: "#",
  },
  {
    tag: "pipeline-321",
    name: "total_sales_api",
    lastEdited: "Sep 20",
    status: "live",
    type: "API",
    href: "#",
  },
  {
    tag: "pipeline-543",
    name: "top_products_by_units_sold_api",
    lastEdited: "Sep 01",
    status: "inactive",
    type: "materialized",
    href: "#",
  },
  {
    tag: "pipeline-002",
    name: "units_sold_by_location_per_hour_materialized",
    lastEdited: "Mar 15",
    status: "live",
    type: "materialized",
    href: "#",
  },
  {
    tag: "pipeline-149",
    name: "top_channels_by_sales_api",
    lastEdited: "Mar 15",
    status: "inactive",
    type: "API",
    href: "#",
  },
  {
    tag: "pipeline-004",
    name: "top_locations_by_sales_api",
    lastEdited: "Apr '04",
    status: "live",
    type: "API",
    href: "#",
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <Card
            key={item.name}
            className="hover:bg-gray-50 hover:dark:bg-gray-900"
          >
            <dd className="flex items-center justify-between space-x-4 text-sm text-gray-500 dark:text-gray-500">
              <span>{item.tag}</span>
              <span>{item.lastEdited}</span>
            </dd>
            <dt className="mt-3 truncate font-medium text-gray-900 dark:text-gray-50">
              <a href={item.href} className="focus:outline-none">
                {/* Extend link to entire card */}
                <span className="absolute inset-0" aria-hidden={true} />
                {item.name}
              </a>
            </dt>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.status === "live" ? (
                <span className="inline-flex items-center gap-x-1.5 rounded-md bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-800 ring-1 ring-emerald-600/10 ring-inset dark:bg-emerald-500/10 dark:text-emerald-500 dark:ring-emerald-500/20">
                  <span
                    className="size-1.5 shrink-0 rounded-full bg-emerald-500 dark:bg-emerald-500"
                    aria-hidden={true}
                  />
                  {item.status}
                </span>
              ) : (
                <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-600/10 ring-inset dark:bg-gray-500/10 dark:text-gray-400 dark:ring-gray-500/20">
                  {item.status}
                </span>
              )}
              {item.type === "API" ? (
                <span className="inline-flex items-center gap-x-1.5 rounded-md bg-pink-100 px-2 py-1 text-xs font-medium text-pink-800 ring-1 ring-pink-600/10 ring-inset dark:bg-pink-500/10 dark:text-pink-500 dark:ring-pink-500/20">
                  <RiWifiLine
                    className="size-3.5 shrink-0"
                    aria-hidden={true}
                  />
                  {item.type}
                </span>
              ) : (
                <span className="inline-flex items-center gap-x-1.5 rounded-md bg-sky-100 px-2 py-1 text-xs font-medium text-sky-800 ring-1 ring-sky-600/10 ring-inset dark:bg-sky-500/10 dark:text-sky-500 dark:ring-sky-500/20">
                  <RiStackLine
                    className="size-3.5 shrink-0"
                    aria-hidden={true}
                  />
                  {item.type}
                </span>
              )}
            </div>
          </Card>
        ))}
      </dl>
    </div>
  )
}
```


```example/grid-lists-grid-list-12.tsx
"use client"

import { Card } from "@/atom/Card"
import { Divider } from "@/atom/Divider"

const data = [
  //array-start
  {
    name: "Retention – How many users return each week and month",
    description: "Tracks user retention over weekly and monthly intervals.",
    href: "#",
    editors: [
      {
        name: "User A",
        imageUrl:
          "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1887&auto=format&fit=facearea&&facepad=2&w=256&h=256",
      },
      {
        name: "User B",
        imageUrl:
          "https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=1887&auto=format&fit=facearea&&facepad=2&w=256&h=256",
      },
      {
        name: "User C",
        imageUrl:
          "https://images.unsplash.com/photo-1569128782402-d1ec3d0c1b1b?q=80&w=1887&auto=format&fit=facearea&&facepad=2&w=256&h=256",
      },
    ],
  },
  {
    name: "Revenue – By employee and role",
    description:
      "Analyzes revenue generated by employees based on their roles and contributions.",
    href: "#",
    editors: [
      {
        name: "User A",
        imageUrl:
          "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1887&auto=format&fit=facearea&&facepad=2&w=256&h=256",
      },
      {
        name: "User B",
        imageUrl:
          "https://images.unsplash.com/photo-1566761284295-af58908238bb?q=80&w=1887&auto=format&fit=facearea&&facepad=2&w=256&h=256",
      },
      {
        name: "User C",
        imageUrl:
          "https://images.unsplash.com/photo-1573496527892-904f897eb744?q=80&w=1887&auto=format&fit=facearea&&facepad=2&w=256&h=256",
      },
      {
        name: "User D",
        imageUrl:
          "https://images.unsplash.com/photo-1569128782402-d1ec3d0c1b1b?q=80&w=1887&auto=format&fit=facearea&&facepad=2&w=256&h=256",
      },
    ],
  },
  {
    name: "Active users – Today",
    description:
      "Provides a snapshot of active users on the platform as of today.",
    href: "#",
    editors: [
      {
        name: "User A",
        imageUrl:
          "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1887&auto=format&fit=facearea&&facepad=2&w=256&h=256",
      },
      {
        name: "User B",
        imageUrl:
          "https://images.unsplash.com/photo-1573496527892-904f897eb744?q=80&w=1887&auto=format&fit=facearea&&facepad=2&w=256&h=256",
      },
    ],
  },
  {
    name: "Product Sales – Quarterly Report",
    description:
      "Details the sales performance of products over a quarterly timeframe.",
    href: "#",
    editors: [
      {
        name: "User A",
        imageUrl:
          "https://images.unsplash.com/photo-1621376225397-c1d357c68291?q=80&w=1887&auto=format&fit=facearea&&facepad=2&w=256&h=256",
      },
      {
        name: "User B",
        imageUrl:
          "https://images.unsplash.com/photo-1585580568280-68b4f110cfdf?q=80&w=1887&auto=format&fit=facearea&&facepad=2&w=256&h=256",
      },
      {
        name: "User C",
        imageUrl:
          "https://images.unsplash.com/photo-1573496527892-904f897eb744?q=80&w=1887&auto=format&fit=facearea&&facepad=2&w=256&h=256",
      },
    ],
  },
  {
    name: "Customer Feedback – Survey Results",
    description:
      "Analyzes customer feedback survey results to gauge customer satisfaction.",
    href: "#",
    editors: [
      {
        name: "User A",
        imageUrl:
          "https://images.unsplash.com/photo-1566761284295-af58908238bb?q=80&w=1887&auto=format&fit=facearea&&facepad=2&w=256&h=256",
      },
    ],
  },
  {
    name: "Marketing Campaign – Performance Analysis",
    description:
      "Examines the performance of marketing campaigns to return on investment (ROI).",
    href: "#",
    editors: [
      {
        name: "User A",
        imageUrl:
          "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1887&auto=format&fit=facearea&&facepad=2&w=256&h=256",
      },
      {
        name: "User B",
        imageUrl:
          "https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=1887&auto=format&fit=facearea&&facepad=2&w=256&h=256",
      },
      {
        name: "User C",
        imageUrl:
          "https://images.unsplash.com/photo-1569128782402-d1ec3d0c1b1b?q=80&w=1887&auto=format&fit=facearea&&facepad=2&w=256&h=256",
      },
    ],
  },
  //array-end
]

function ContentPlaceholder() {
  return (
    <div className="relative h-full overflow-hidden rounded bg-gray-50 dark:bg-gray-800">
      <svg
        className="absolute inset-0 h-full w-full stroke-gray-200 dark:stroke-gray-700"
        fill="none"
      >
        <defs>
          <pattern
            id="pattern-3"
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path>
          </pattern>
        </defs>
        <rect
          stroke="none"
          fill="url(#pattern-3)"
          width="100%"
          height="100%"
        ></rect>
      </svg>
    </div>
  )
}

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="flex items-center space-x-2">
        <h3 className="text-sm font-medium text-gray-900 dark:text-gray-50">
          Most recent reports
        </h3>
        <span className="inline-flex size-6 items-center justify-center rounded-full bg-gray-100 text-xs font-medium text-gray-900 dark:bg-gray-800 dark:text-gray-50">
          {data.length}
        </span>
      </div>
      <Divider className="!my-4" />
      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <Card key={item.name} className="flex flex-col justify-between !p-0">
            <div className="p-2">
              <div className="h-28">
                <ContentPlaceholder />
              </div>
              <div className="px-2 pt-4 pb-2">
                <dt className="truncate text-sm font-medium text-gray-900 dark:text-gray-50">
                  {item.name}
                </dt>
                <dd className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {item.description}
                </dd>
              </div>
            </div>
            <div className="flex justify-between border-t border-gray-200 px-4 py-3 dark:border-gray-800">
              <div className="flex -space-x-1 overflow-hidden">
                {item.editors.map((editor) => (
                  <img
                    key={editor.name}
                    className="inline-block size-5 rounded-full ring-2 ring-white dark:ring-[#090E1A]"
                    src={editor.imageUrl}
                    alt=""
                  />
                ))}
              </div>
              <a
                href={item.href}
                className="text-sm font-medium text-blue-500 hover:text-blue-600 dark:text-blue-500 hover:dark:text-blue-600"
              >
                View more &#8594;
              </a>
            </div>
          </Card>
        ))}
      </dl>
    </div>
  )
}
```


```example/grid-lists-grid-list-13.tsx
"use client"

import {
  RiBuildingLine,
  RiMapPin2Line,
  RiSettings3Line,
  RiTimeLine,
  RiTruckLine,
  RiUserLine,
} from "@remixicon/react"

import { cx } from "@/lib/utils"

import { Card } from "@/atom/Card"
import { ProgressCircle } from "@/atom/ProgressCircle"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/atom/Tabs"

const data = [
  //array-start
  {
    status: "In progress",
    icon: RiSettings3Line,
    orders: [
      {
        item: "Printer Laser Jet Pro",
        company: "Big Tech Ltd.",
        location: "Paris, France",
        contact: "Lena Stone",
        fulfillmentActual: 8,
        fulfillmentTotal: 10,
        lastUpdated: "2min ago",
      },
      {
        item: "LED Monitor",
        company: "Bitclick Holding",
        location: "Zurich, Switzerland",
        contact: "Matthias Ruedi",
        fulfillmentActual: 3,
        fulfillmentTotal: 4,
        lastUpdated: "5min ago",
      },
      {
        item: "Conference Speaker",
        company: "Cornerstone LLC",
        location: "Frankfurt, Germany",
        contact: "David Mueller",
        fulfillmentActual: 2,
        fulfillmentTotal: 4,
        lastUpdated: "10d ago",
      },
    ],
  },
  {
    status: "Delivering",
    icon: RiTruckLine,
    orders: [
      {
        item: 'OLED 49" Monitor',
        company: "Walders AG",
        location: "St. Gallen, Switzerland",
        contact: "Patrick Doe",
        fulfillmentActual: 5,
        fulfillmentTotal: 6,
        lastUpdated: "4d ago",
      },
      {
        item: "Portable Power Station",
        company: "Lake View GmbH",
        location: "Lucerne, Switzerland",
        contact: "Marco Smith",
        fulfillmentActual: 5,
        fulfillmentTotal: 8,
        lastUpdated: "1d ago",
      },
      {
        item: "Office headset (Wireless)",
        company: "Cornerstone LLC",
        location: "St. Anton, Austria",
        contact: "Peter Batt",
        fulfillmentActual: 1,
        fulfillmentTotal: 2,
        lastUpdated: "7d ago",
      },
      {
        item: "Smart Home Security System",
        company: "SecureTech Solutions AG",
        location: "Munich, Germany",
        contact: "Thomas Schneider",
        fulfillmentActual: 3,
        fulfillmentTotal: 4,
        lastUpdated: "2h ago",
      },
      {
        item: 'Gaming Laptop Super Screen 14"',
        company: "Tech Master Ltd.",
        location: "Aspen, USA",
        contact: "Joe Ross",
        fulfillmentActual: 9,
        fulfillmentTotal: 10,
        lastUpdated: "1h ago",
      },
    ],
  },
  {
    status: "Delayed",
    icon: RiTimeLine,
    orders: [
      {
        item: "External SSD Portable",
        company: "Waterbridge Associates Inc.",
        location: "New York, USA",
        contact: "Adam Taylor",
        fulfillmentActual: 4,
        fulfillmentTotal: 12,
        lastUpdated: "1d ago",
      },
      {
        item: "Portable Scanner V600",
        company: "Hotel Stars GmbH",
        location: "Chur, Switzerland",
        contact: "Elias Jones",
        fulfillmentActual: 5,
        fulfillmentTotal: 10,
        lastUpdated: "4d ago",
      },
    ],
  },
  //array-end
]

type Status = "In progress" | "Delivering" | "Delayed"
const statusColor: Record<Status, string> = {
  "In progress": "bg-blue-500 dark:bg-blue-500",
  Delivering: "bg-emerald-600 dark:bg-emerald-500",
  Delayed: "bg-orange-500 dark:bg-orange-500",
}

function getStatusColor(status: Status) {
  return statusColor[status] || "bg-gray-400 dark:bg-gray-600"
}

export default function Example() {
  return (
    <div className="obfuscate">
      <Card className="!p-0">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
            Orders
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Check status of recent orders
          </p>
        </div>
        <Tabs defaultValue={data[0].status}>
          <TabsList className="px-6">
            {data.map((category) => (
              <TabsTrigger
                key={category.status}
                value={category.status}
                className="group"
              >
                <span className="group-data-[state=active]:text-gray-900 group-data-[state=active]:dark:text-gray-50">
                  {category.status}
                </span>
                <span className="ml-2 hidden rounded-md bg-white px-2 py-1 text-xs font-semibold tabular-nums ring-1 ring-gray-200 ring-inset group-data-[state=active]:text-gray-700 sm:inline-flex dark:bg-[#090E1A] dark:ring-gray-800 group-data-[state=active]:dark:text-gray-300">
                  {category.orders.length}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
          <ul role="list">
            {data.map((category) => (
              <TabsContent
                key={category.status}
                value={category.status}
                className="space-y-4 px-6 pt-6 pb-6"
              >
                {category.orders.map((order) => (
                  <Card
                    key={order.item}
                    asChild
                    className="!p-2 dark:border-gray-800"
                  >
                    <li>
                      <div className="rounded-md border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900">
                        <div className="flex items-center justify-between space-x-4 sm:justify-start sm:space-x-2">
                          <h4 className="truncate text-sm font-medium text-gray-900 dark:text-gray-50">
                            {order.item}
                          </h4>
                          <span className="inline-flex items-center gap-1.5 rounded-md bg-white px-2 py-1 text-xs font-medium whitespace-nowrap text-gray-900 ring-1 ring-gray-200 ring-inset dark:bg-gray-900 dark:text-gray-50 dark:ring-gray-800">
                            <span
                              className={cx(
                                getStatusColor(category.status as Status),
                                "size-2 rounded-full",
                              )}
                              aria-hidden={true}
                            />
                            {category.status}
                          </span>
                        </div>
                        <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-4">
                          <div className="flex items-center space-x-1.5">
                            <RiBuildingLine
                              className="size-5 text-gray-400 dark:text-gray-600"
                              aria-hidden={true}
                            />
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {order.company}
                            </p>
                          </div>
                          <div className="flex items-center space-x-1.5">
                            <RiMapPin2Line
                              className="size-5 text-gray-400 dark:text-gray-600"
                              aria-hidden={true}
                            />
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {order.location}
                            </p>
                          </div>
                          <div className="flex items-center space-x-1.5">
                            <RiUserLine
                              className="size-5 text-gray-400 dark:text-gray-600"
                              aria-hidden={true}
                            />
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {order.contact}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="px-2 pt-4 pb-2">
                        <div className="block sm:flex sm:items-end sm:justify-between">
                          <div className="flex items-center space-x-2">
                            <ProgressCircle
                              value={
                                (order.fulfillmentActual /
                                  order.fulfillmentTotal) *
                                100
                              }
                              radius={9}
                              strokeWidth={3.5}
                            />
                            <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
                              Fulfillment controls ({order.fulfillmentActual}/
                              {order.fulfillmentTotal})
                            </p>
                          </div>
                          <p className="mt-2 text-sm text-gray-500 sm:mt-0 dark:text-gray-500">
                            Updated {order.lastUpdated}
                          </p>
                        </div>
                      </div>
                    </li>
                  </Card>
                ))}
              </TabsContent>
            ))}
          </ul>
        </Tabs>
      </Card>
    </div>
  )
}
```


```example/grid-lists-grid-list-07.tsx
"use client"

import type { SVGProps } from "react"
import { RiArrowDownCircleLine } from "@remixicon/react"

import { Card } from "@/atom/Card"

const GoogleDriveIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" viewBox="0 0 88 78" {...props}>
    <g clipPath="url(#clip0_6661_2945)">
      <path
        fill="#0066DA"
        d="M6.6 66.85L10.45 73.5C11.25 74.9 12.4 76 13.75 76.8L27.5 53H0C0 54.55 0.4 56.1 1.2 57.5L6.6 66.85Z"
      />
      <path
        fill="#00AC47"
        d="M43.65 25.0002L29.9 1.2002C28.55 2.0002 27.4 3.1002 26.6 4.5002L1.2 48.5002C0.414713 49.87 0.00104556 51.4213 0 53.0002H27.5L43.65 25.0002Z"
      />
      <path
        fill="#EA4335"
        d="M73.55 76.8C74.9 76 76.05 74.9 76.85 73.5L78.45 70.75L86.1 57.5C86.9 56.1 87.3 54.55 87.3 53H59.798L65.65 64.5L73.55 76.8Z"
      />
      <path
        fill="#00832D"
        d="M43.65 25L57.4 1.2C56.05 0.4 54.5 0 52.9 0H34.4C32.8 0 31.25 0.45 29.9 1.2L43.65 25Z"
      />
      <path
        fill="#2684FC"
        d="M59.8 53H27.5L13.75 76.8C15.1 77.6 16.65 78 18.25 78H69.05C70.65 78 72.2 77.55 73.55 76.8L59.8 53Z"
      />
      <path
        fill="#FFBA00"
        d="M73.4 26.5002L60.7 4.5002C59.9 3.1002 58.75 2.0002 57.4 1.2002L43.65 25.0002L59.8 53.0002H87.25C87.25 51.4502 86.85 49.9002 86.05 48.5002L73.4 26.5002Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_6661_2945">
        <rect width={87.3} height={78} fill="white" />
      </clipPath>
    </defs>
  </svg>
)

const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" viewBox="0 0 500 500" {...props}>
    <path
      fill="#0866FF"
      d="M500 250C500 111.93 388.07 0 250 0C111.93 0 0 111.93 0 250C0 367.24 80.72 465.62 189.61 492.64V326.4H138.06V250H189.61V217.08C189.61 131.99 228.12 92.55 311.66 92.55C327.5 92.55 354.83 95.66 366.01 98.76V168.01C360.11 167.39 349.86 167.08 337.13 167.08C296.14 167.08 280.3 182.61 280.3 222.98V250H361.96L347.93 326.4H280.3V498.17C404.07 483.22 500 377.82 500 250Z"
    />
  </svg>
)

const NotionIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" viewBox="0 0 100 100" {...props}>
    <g clipPath="url(#clip0_6661_2956)">
      <path
        fill="white"
        d="M6.017 4.31322L61.35 0.226216C68.147 -0.356784 69.893 0.036216 74.167 3.14322L91.83 15.5862C94.743 17.7262 95.713 18.3092 95.713 20.6392V88.8822C95.713 93.1592 94.16 95.6892 88.723 96.0752L24.467 99.9672C20.387 100.16 18.444 99.5772 16.307 96.8542L3.3 79.9402C0.967 76.8272 0 74.4972 0 71.7732V11.1132C0 7.61622 1.553 4.70022 6.017 4.31322Z"
      />
      <path
        fill="black"
        fillRule="evenodd"
        d="M61.35 0.227216L6.017 4.31422C1.553 4.70022 0 7.61722 0 11.1132V71.7732C0 74.4962 0.967 76.8262 3.3 79.9402L16.307 96.8532C18.444 99.5762 20.387 100.16 24.467 99.9662L88.724 96.0762C94.157 95.6892 95.714 93.1592 95.714 88.8832V20.6402C95.714 18.4302 94.841 17.7932 92.271 15.9072L74.167 3.14322C69.894 0.036216 68.147 -0.356784 61.35 0.226216V0.227216ZM25.92 19.5232C20.673 19.8762 19.483 19.9562 16.503 17.5332L8.927 11.5072C8.157 10.7272 8.544 9.75422 10.484 9.56022L63.677 5.67322C68.144 5.28322 70.47 6.84022 72.217 8.20022L81.34 14.8102C81.73 15.0072 82.7 16.1702 81.533 16.1702L26.6 19.4772L25.92 19.5232ZM19.803 88.3002V30.3672C19.803 27.8372 20.58 26.6702 22.906 26.4742L86 22.7802C88.14 22.5872 89.107 23.9472 89.107 26.4732V84.0202C89.107 86.5502 88.717 88.6902 85.224 88.8832L24.847 92.3832C21.354 92.5762 19.804 91.4132 19.804 88.3002H19.803ZM79.403 33.4732C79.79 35.2232 79.403 36.9732 77.653 37.1732L74.743 37.7502V80.5232C72.216 81.8832 69.89 82.6602 67.946 82.6602C64.839 82.6602 64.063 81.6872 61.736 78.7732L42.706 48.8332V77.8002L48.726 79.1632C48.726 79.1632 48.726 82.6632 43.869 82.6632L30.479 83.4402C30.089 82.6602 30.479 80.7172 31.836 80.3302L35.333 79.3602V41.0602L30.48 40.6672C30.09 38.9172 31.06 36.3902 33.78 36.1942L48.147 35.2272L67.947 65.5542V38.7242L62.9 38.1442C62.51 36.0012 64.063 34.4442 66.003 34.2542L79.403 33.4732Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="clip0_6661_2956">
        <rect width={100} height={100} fill="white" />
      </clipPath>
    </defs>
  </svg>
)

const SlackIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" viewBox="0 0 123 123" {...props}>
    <path
      fill="#E01E5A"
      d="M25.8 77.6002C25.8 84.7002 20 90.5002 12.9 90.5002C5.8 90.5002 0 84.7002 0 77.6002C0 70.5002 5.8 64.7002 12.9 64.7002H25.8V77.6002Z"
    />
    <path
      fill="#E01E5A"
      d="M32.3 77.6002C32.3 70.5002 38.1 64.7002 45.2 64.7002C52.3 64.7002 58.1 70.5002 58.1 77.6002V109.9C58.1 117 52.3 122.8 45.2 122.8C38.1 122.8 32.3 117 32.3 109.9V77.6002Z"
    />
    <path
      fill="#36C5F0"
      d="M45.2 25.8C38.1 25.8 32.3 20 32.3 12.9C32.3 5.8 38.1 0 45.2 0C52.3 0 58.1 5.8 58.1 12.9V25.8H45.2Z"
    />
    <path
      fill="#36C5F0"
      d="M45.2 32.2998C52.3 32.2998 58.1 38.0998 58.1 45.1998C58.1 52.2998 52.3 58.0998 45.2 58.0998H12.9C5.8 58.0998 0 52.2998 0 45.1998C0 38.0998 5.8 32.2998 12.9 32.2998H45.2Z"
    />
    <path
      fill="#2EB67D"
      d="M97 45.1998C97 38.0998 102.8 32.2998 109.9 32.2998C117 32.2998 122.8 38.0998 122.8 45.1998C122.8 52.2998 117 58.0998 109.9 58.0998H97V45.1998Z"
    />
    <path
      fill="#2EB67D"
      d="M90.5 45.2C90.5 52.3 84.7 58.1 77.6 58.1C70.5 58.1 64.7 52.3 64.7 45.2V12.9C64.7 5.8 70.5 0 77.6 0C84.7 0 90.5 5.8 90.5 12.9V45.2Z"
    />
    <path
      fill="#ECB22E"
      d="M77.6 97C84.7 97 90.5 102.8 90.5 109.9C90.5 117 84.7 122.8 77.6 122.8C70.5 122.8 64.7 117 64.7 109.9V97H77.6Z"
    />
    <path
      fill="#ECB22E"
      d="M77.6 90.5002C70.5 90.5002 64.7 84.7002 64.7 77.6002C64.7 70.5002 70.5 64.7002 77.6 64.7002H109.9C117 64.7002 122.8 70.5002 122.8 77.6002C122.8 84.7002 117 90.5002 109.9 90.5002H77.6Z"
    />
  </svg>
)

const DropboxIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" viewBox="0 0 165 140" {...props}>
    <g clipPath="url(#clip0_6661_2986)">
      <path
        fill="#0061FF"
        d="M82.2562 26.2152L41.1334 52.4303L82.2562 78.6455L41.1334 104.861L0 78.4976L41.1334 52.2825L0 26.2152L41.1334 0L82.2562 26.2152ZM40.9117 113.286L82.0451 87.0706L123.168 113.286L82.0451 139.501L40.9117 113.286ZM82.2457 78.4976L123.379 52.2825L82.2457 26.2152L123.168 0L164.301 26.2152L123.168 52.4303L164.301 78.6455L123.168 104.861L82.2457 78.4976Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_6661_2986">
        <rect width={164.386} height={139.575} fill="white" />
      </clipPath>
    </defs>
  </svg>
)

const data = [
  //array-start
  {
    name: "Google Drive",
    description: "Automate your file upload workflow",
    installations: 983,
    icon: GoogleDriveIcon,
    href: "#",
  },
  {
    name: "Facebook Ads",
    description: "Analayze ad performance directly in your workspace",
    installations: 461,
    icon: FacebookIcon,
    href: "#",
  },
  {
    name: "Notion",
    description: "Create, manage and sync documentation",
    installations: 719,
    icon: NotionIcon,
    href: "#",
  },
  {
    name: "Slack",
    description: "Sent alerts and workspace updates to your slack account",
    installations: 889,
    icon: SlackIcon,
    href: "#",
  },
  {
    name: "Dropbox",
    description: "Automate your file upload workflow",
    installations: 199,
    icon: DropboxIcon,
    href: "#",
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
      <dl className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <Card
            key={item.name}
            className="relative flex flex-col justify-between hover:bg-gray-50 hover:dark:bg-gray-900"
          >
            <div className="flex items-center space-x-3">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-md border border-gray-200 p-1 dark:border-gray-800">
                <item.icon className="size-5" aria-hidden={true} />
              </span>
              <dt className="text-sm font-medium text-gray-900 dark:text-gray-50">
                <a href={item.href} className="focus:outline-none">
                  {/* Extend link to entire card */}
                  <span className="absolute inset-0" aria-hidden={true} />
                  {item.name}
                </a>
              </dt>
            </div>
            <div className="mt-4 flex flex-1 flex-col">
              <div className="flex-1">
                <dd className="text-sm/6 text-gray-600 dark:text-gray-400">
                  {item.description}
                </dd>
              </div>
              <div className="mt-6 flex items-center space-x-2">
                <RiArrowDownCircleLine
                  className="size-5 text-gray-400 dark:text-gray-600"
                  aria-hidden={true}
                />
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  {item.installations} Installations
                </p>
              </div>
            </div>
          </Card>
        ))}
      </dl>
    </div>
  )
}
```


