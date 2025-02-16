```example/badges-badge-08.tsx
import {
  RiCheckboxCircleFill,
  RiCloseCircleFill,
  RiCloseCircleLine,
  RiShieldCheckLine,
} from "@remixicon/react"

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="flex flex-wrap justify-center gap-4">
        <span className="inline-flex items-center gap-x-2.5 rounded-full bg-white px-2.5 py-1.5 text-xs ring-1 ring-gray-200 ring-inset dark:bg-gray-950 dark:ring-gray-800">
          <span className="inline-flex items-center gap-1.5 font-medium text-gray-900 dark:text-gray-50">
            <RiShieldCheckLine
              className="size-4 shrink-0 text-emerald-600 dark:text-emerald-500"
              aria-hidden={true}
            />
            Protection
          </span>
          <span className="h-4 w-px bg-gray-200 dark:bg-gray-800" />
          <span className="inline-flex items-center gap-1.5 text-gray-500 dark:text-gray-500">
            <RiCloseCircleLine
              className="-ml-0.5 size-4 shrink-0"
              aria-hidden={true}
            />
            SSO login
          </span>
        </span>
        <span className="inline-flex items-center gap-x-2.5 rounded-full bg-white px-2.5 py-1.5 text-xs ring-1 ring-gray-200 ring-inset dark:bg-gray-950 dark:ring-gray-800">
          <span className="inline-flex items-center gap-1.5 font-medium text-gray-900 dark:text-gray-50">
            <RiCheckboxCircleFill
              className="-ml-0.5 size-4 shrink-0 text-emerald-600 dark:text-emerald-500"
              aria-hidden={true}
            />
            Live
          </span>
          <span className="h-4 w-px bg-gray-200 dark:bg-gray-800" />
          <span className="inline-flex items-center gap-1.5 text-gray-500 dark:text-gray-500">
            <RiCloseCircleLine
              className="-ml-0.5 size-4 shrink-0"
              aria-hidden={true}
            />
            Audit trails
          </span>
        </span>
        <span className="inline-flex items-center gap-x-2.5 rounded-full bg-white px-2.5 py-1.5 text-xs ring-1 ring-gray-200 ring-inset dark:bg-gray-950 dark:ring-gray-800">
          <span className="inline-flex items-center gap-1.5 font-medium text-gray-900 dark:text-gray-50">
            <RiCloseCircleFill
              className="-ml-0.5 size-4 shrink-0 text-red-600 dark:text-red-500"
              aria-hidden={true}
            />
            Safety checks
          </span>
          <span className="h-4 w-px bg-gray-200 dark:bg-gray-800" />
          <span className="inline-flex items-center gap-1.5 text-gray-500 dark:text-gray-500">
            <RiShieldCheckLine
              className="-ml-0.5 size-4 shrink-0"
              aria-hidden={true}
            />
            Production
          </span>
        </span>
      </div>
    </div>
  )
}
```


```example/badges-badge-09.tsx
"use client"
export default function Example() {
  return (
    <div className="obfuscate">
      <div className="flex flex-wrap justify-center gap-4">
        <span className="inline-flex items-center gap-2 rounded-full py-1 pr-2.5 pl-1 text-xs text-gray-500 ring-1 ring-gray-200 ring-inset dark:text-gray-500 dark:ring-gray-800">
          <img
            className="inline-block size-5 rounded-full"
            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1887&auto=format&fit=facearea&&facepad=2&w=256&h=256"
            alt=""
          />
          John Doe
        </span>
        <span className="inline-flex items-center gap-2 rounded-full py-1 pr-2.5 pl-1 text-xs text-gray-500 ring-1 ring-gray-200 ring-inset dark:text-gray-500 dark:ring-gray-800">
          <img
            className="inline-block size-5 rounded-full"
            src="https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=1887&auto=format&fit=facearea&&facepad=2&w=256&h=256"
            alt=""
          />
          Emily Smith
        </span>
        <span className="inline-flex items-center gap-2 rounded-full py-1 pr-2.5 pl-1 text-xs text-gray-500 ring-1 ring-gray-200 ring-inset dark:text-gray-500 dark:ring-gray-800">
          <img
            className="inline-block size-5 rounded-full"
            src="https://images.unsplash.com/photo-1569128782402-d1ec3d0c1b1b?q=80&w=1887&auto=format&fit=facearea&&facepad=2&w=256&h=256"
            alt=""
          />
          Max Bosh
        </span>
        <span className="inline-flex items-center gap-2 rounded-full py-1 pr-2.5 pl-1 text-xs text-gray-500 ring-1 ring-gray-200 ring-inset dark:text-gray-500 dark:ring-gray-800">
          <img
            className="inline-block size-5 rounded-full"
            src="https://images.unsplash.com/photo-1566761284295-af58908238bb?q=80&w=1887&auto=format&fit=facearea&&facepad=2&w=256&h=256"
            alt=""
          />
          Mike Kingston
        </span>
      </div>
    </div>
  )
}
```


```example/badges-badge-02.tsx
import {
  RiArrowDownLine,
  RiArrowRightLine,
  RiArrowUpLine,
} from "@remixicon/react"

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="flex flex-wrap justify-center gap-4">
        <span className="inline-flex items-center gap-x-1 rounded-md bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-800 dark:bg-emerald-400/20 dark:text-emerald-500">
          <RiArrowUpLine className="-ml-0.5 size-4" aria-hidden={true} />
          9.3%
        </span>
        <span className="inline-flex items-center gap-x-1 rounded-md bg-red-100 px-2 py-1 text-xs font-semibold text-red-800 dark:bg-red-400/20 dark:text-red-500">
          <RiArrowDownLine className="-ml-0.5 size-4" aria-hidden={true} />
          1.9%
        </span>
        <span className="inline-flex items-center gap-x-1 rounded-md bg-gray-200/50 px-2 py-1 text-xs font-semibold text-gray-700 dark:bg-gray-500/30 dark:text-gray-300">
          <RiArrowRightLine className="-ml-0.5 size-4" aria-hidden={true} />
          0.6%
        </span>
      </div>
    </div>
  )
}
```


```example/badges-badge-03.tsx
import {
  RiArrowDownLine,
  RiArrowRightLine,
  RiArrowUpLine,
} from "@remixicon/react"

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="flex flex-wrap justify-center gap-4">
        <span className="inline-flex items-center gap-x-1 rounded-md bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-800 ring-1 ring-emerald-600/30 ring-inset dark:bg-emerald-400/20 dark:text-emerald-500 dark:ring-emerald-400/20">
          <RiArrowUpLine className="-ml-0.5 size-4" aria-hidden={true} />
          9.3%
        </span>
        <span className="inline-flex items-center gap-x-1 rounded-md bg-red-50 px-2 py-1 text-xs font-semibold text-red-800 ring-1 ring-red-600/20 ring-inset dark:bg-red-400/20 dark:text-red-500 dark:ring-red-400/20">
          <RiArrowDownLine className="-ml-0.5 size-4" aria-hidden={true} />
          1.9%
        </span>
        <span className="inline-flex items-center gap-x-1 rounded-md bg-gray-50 px-2 py-1 text-xs font-semibold text-gray-700 ring-1 ring-gray-600/20 ring-inset dark:bg-gray-500/30 dark:text-gray-300 dark:ring-gray-400/20">
          <RiArrowRightLine className="-ml-0.5 size-4" aria-hidden={true} />
          0.6%
        </span>
      </div>
    </div>
  )
}
```


```example/badges-badge-01.tsx
import {
  RiArrowDownSFill,
  RiArrowRightSFill,
  RiArrowUpSFill,
} from "@remixicon/react"

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="flex flex-wrap justify-center gap-4">
        <span className="inline-flex items-center gap-x-1 rounded-md px-2 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-gray-200 ring-inset dark:text-emerald-500 dark:ring-gray-800">
          <RiArrowUpSFill className="-ml-0.5 size-4" aria-hidden={true} />
          9.3%
        </span>
        <span className="inline-flex items-center gap-x-1 rounded-md px-2 py-1 text-xs font-semibold text-red-700 ring-1 ring-gray-200 ring-inset dark:text-red-500 dark:ring-gray-800">
          <RiArrowDownSFill className="-ml-0.5 size-4" aria-hidden={true} />
          1.9%
        </span>
        <span className="inline-flex items-center gap-x-1 rounded-md px-2 py-1 text-xs font-semibold text-gray-700 ring-1 ring-gray-200 ring-inset dark:text-gray-400 dark:ring-gray-800">
          <RiArrowRightSFill className="-ml-0.5 size-4" aria-hidden={true} />
          0.6%
        </span>
      </div>
    </div>
  )
}
```


```example/badges-badge-10.tsx
"use client"

import { RiCloseFill } from "@remixicon/react"

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="flex flex-wrap justify-center gap-4">
        <span className="inline-flex items-center gap-2 rounded-full px-1 py-1 text-xs text-gray-500 ring-1 ring-gray-200 ring-inset dark:text-gray-500 dark:ring-gray-800">
          <img
            className="inline-block size-5 rounded-full"
            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1887&auto=format&fit=facearea&&facepad=2&w=256&h=256"
            alt=""
          />
          John Doe
          <button
            type="button"
            className="flex size-5 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            aria-label="Remove"
          >
            <RiCloseFill className="size-4 shrink-0" aria-hidden={true} />
          </button>
        </span>
        <span className="inline-flex items-center gap-2 rounded-full px-1 py-1 text-xs text-gray-500 ring-1 ring-gray-200 ring-inset dark:text-gray-500 dark:ring-gray-800">
          <img
            className="inline-block size-5 rounded-full"
            src="https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=1887&auto=format&fit=facearea&&facepad=2&w=256&h=256"
            alt=""
          />
          Emily Smith
          <button
            type="button"
            className="flex size-5 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            aria-label="Remove"
          >
            <RiCloseFill className="size-4 shrink-0" aria-hidden={true} />
          </button>
        </span>
        <span className="inline-flex items-center gap-2 rounded-full px-1 py-1 text-xs text-gray-500 ring-1 ring-gray-200 ring-inset dark:text-gray-500 dark:ring-gray-800">
          <img
            className="inline-block size-5 rounded-full"
            src="https://images.unsplash.com/photo-1569128782402-d1ec3d0c1b1b?q=80&w=1887&auto=format&fit=facearea&&facepad=2&w=256&h=256"
            alt=""
          />
          Max Bosh
          <button
            type="button"
            className="flex size-5 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            aria-label="Remove"
          >
            <RiCloseFill className="size-4 shrink-0" aria-hidden={true} />
          </button>
        </span>
        <span className="inline-flex items-center gap-2 rounded-full px-1 py-1 text-xs text-gray-500 ring-1 ring-gray-200 ring-inset dark:text-gray-500 dark:ring-gray-800">
          <img
            className="inline-block size-5 rounded-full"
            src="https://images.unsplash.com/photo-1566761284295-af58908238bb?q=80&w=1887&auto=format&fit=facearea&&facepad=2&w=256&h=256"
            alt=""
          />
          Mike Kingston
          <button
            type="button"
            className="flex size-5 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            aria-label="Remove"
          >
            <RiCloseFill className="size-4 shrink-0" aria-hidden={true} />
          </button>
        </span>
      </div>
    </div>
  )
}
```


```example/badges-badge-04.tsx
import {
  RiArrowDownLine,
  RiArrowRightLine,
  RiArrowUpLine,
} from "@remixicon/react"

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="flex flex-wrap justify-center gap-4">
        <span className="inline-flex items-center space-x-2.5 rounded-lg bg-white py-1 pr-1 pl-2.5 ring-1 ring-gray-200 ring-inset dark:bg-gray-950 dark:ring-gray-800">
          <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-500">
            13.3%
          </span>
          <span className="text-xsl rounded-md bg-emerald-100 px-2 py-1 font-medium dark:bg-emerald-400/20">
            <RiArrowUpLine
              className="size-4 text-emerald-800 dark:text-emerald-600"
              aria-hidden={true}
            />
          </span>
        </span>
        <span className="inline-flex items-center space-x-2.5 rounded-lg bg-white py-1 pr-1 pl-2.5 ring-1 ring-gray-200 ring-inset dark:bg-gray-950 dark:ring-gray-800">
          <span className="text-xs font-semibold text-red-700 dark:text-red-500">
            1.9%
          </span>
          <span className="rounded-md bg-red-100 px-2 py-1 text-xs font-medium dark:bg-red-400/20">
            <RiArrowDownLine
              className="size-4 text-red-800 dark:text-red-600"
              aria-hidden={true}
            />
          </span>
        </span>
        <span className="inline-flex items-center space-x-2.5 rounded-lg bg-white py-1 pr-1 pl-2.5 ring-1 ring-gray-200 ring-inset dark:bg-gray-950 dark:ring-gray-800">
          <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
            0.6%
          </span>
          <span className="rounded-md bg-gray-200 px-2 py-1 text-xs font-medium dark:bg-gray-400/20">
            <RiArrowRightLine
              className="size-4 text-gray-700 dark:text-gray-300"
              aria-hidden={true}
            />
          </span>
        </span>
      </div>
    </div>
  )
}
```


```example/badges-badge-05.tsx
export default function Example() {
  return (
    <div className="obfuscate">
      <div className="flex flex-wrap justify-center gap-4">
        <span className="inline-flex items-center space-x-1.5 rounded-full bg-white px-2.5 py-1 ring-1 ring-gray-200 ring-inset dark:bg-gray-950 dark:ring-gray-800">
          <span className="text-xs font-medium text-gray-500 dark:text-gray-500">
            In progress
          </span>
          <span className="text-xs font-medium text-emerald-700 dark:text-emerald-500">
            +5.1%
          </span>
        </span>
        <span className="inline-flex items-center space-x-1.5 rounded-full bg-white px-2.5 py-1 ring-1 ring-gray-200 ring-inset dark:bg-gray-950 dark:ring-gray-800">
          <span className="text-xs font-medium text-gray-500 dark:text-gray-500">
            Obsolete
          </span>
          <span className="text-xs font-medium text-red-700 dark:text-red-500">
            -0.6%
          </span>
        </span>
        <span className="inline-flex items-center space-x-1.5 rounded-full bg-white px-2.5 py-1 ring-1 ring-gray-200 ring-inset dark:bg-gray-950 dark:ring-gray-800">
          <span className="text-xs font-medium text-gray-500 dark:text-gray-500">
            Open
          </span>
          <span className="text-xs font-medium text-emerald-700 dark:text-emerald-500">
            +2.7%
          </span>
        </span>
        <span className="inline-flex items-center space-x-1.5 rounded-full bg-white px-2.5 py-1 ring-1 ring-gray-200 ring-inset dark:bg-gray-950 dark:ring-gray-800">
          <span className="text-xs font-medium text-gray-500 dark:text-gray-500">
            Closed
          </span>
          <span className="text-xs font-medium text-red-700 dark:text-red-500">
            -0.6%
          </span>
        </span>
      </div>
    </div>
  )
}
```


```example/badges-badge-11.tsx
import {
  RiArrowRightUpLine,
  RiNotificationFill,
  RiWifiLine,
} from "@remixicon/react"

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="flex flex-wrap justify-center gap-4">
        <span className="inline-flex items-center gap-2.5 rounded-md bg-red-500 px-2.5 py-1.5 text-xs font-medium text-white dark:bg-red-500">
          Major incident
          <span className="h-5 w-px bg-red-400" />
          <a href="#" className="inline-flex items-center gap-1.5">
            Updates
            <RiArrowRightUpLine className="size-4" aria-hidden={true} />
          </a>
        </span>
        <span className="inline-flex items-center gap-2.5 rounded-md bg-emerald-500 px-2.5 py-1.5 text-xs font-medium text-white dark:bg-emerald-500">
          <span className="inline-flex items-center gap-1.5">
            <RiWifiLine className="size-4" aria-hidden={true} />
            Connected
          </span>
          <span className="h-5 w-px bg-emerald-400" />
          <a href="#">Edit</a>
        </span>
        <span className="inline-flex items-center gap-2.5 rounded-md bg-blue-500 px-2.5 py-1.5 text-xs font-medium text-white dark:bg-blue-500">
          <span className="inline-flex items-center gap-1.5">
            <RiNotificationFill className="size-4" aria-hidden={true} />1
            Notification
          </span>
          <span className="h-5 w-px bg-blue-400 dark:bg-blue-400" />
          <a href="#" className="inline-flex items-center gap-1.5">
            Read
            <RiArrowRightUpLine className="size-4" aria-hidden={true} />
          </a>
        </span>
      </div>
    </div>
  )
}
```


```example/badges-badge-07.tsx
import { RiCloseFill } from "@remixicon/react"

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="flex flex-wrap justify-center gap-4">
        <span className="inline-flex items-center gap-x-2.5 rounded-full bg-white py-1 pr-1 pl-2.5 text-xs text-gray-500 ring-1 ring-gray-200 ring-inset dark:bg-gray-950 dark:text-gray-500 dark:ring-gray-800">
          Department
          <span className="h-4 w-px bg-gray-200 dark:bg-gray-800" />
          <span className="text-tremor-content-strong font-medium dark:text-gray-300">
            Sales
          </span>
          <button
            type="button"
            className="hover:text-tremor-content-emphasis -ml-1.5 flex size-5 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            aria-label="Remove"
          >
            <RiCloseFill className="size-4 shrink-0" aria-hidden={true} />
          </button>
        </span>
        <span className="inline-flex items-center gap-x-2.5 rounded-full bg-white py-1 pr-1 pl-2.5 text-xs text-gray-500 ring-1 ring-gray-200 ring-inset dark:bg-gray-950 dark:text-gray-500 dark:ring-gray-800">
          Location
          <span className="h-4 w-px bg-gray-200 dark:bg-gray-800" />
          <span className="text-tremor-content-strong font-medium dark:text-gray-300">
            Zurich
          </span>
          <button
            type="button"
            className="hover:text-tremor-content-emphasis -ml-1.5 flex size-5 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            aria-label="Remove"
          >
            <RiCloseFill className="size-4 shrink-0" aria-hidden={true} />
          </button>
        </span>
        <span className="inline-flex items-center gap-x-2.5 rounded-full bg-white py-1 pr-1 pl-2.5 text-xs text-gray-500 ring-1 ring-gray-200 ring-inset dark:bg-gray-950 dark:text-gray-500 dark:ring-gray-800">
          Sales Volume
          <span className="h-4 w-px bg-gray-200 dark:bg-gray-800" />
          <span className="text-tremor-content-strong font-medium dark:text-gray-300">
            $100K-5M
          </span>
          <button
            type="button"
            className="hover:text-tremor-content-emphasis -ml-1.5 flex size-5 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            aria-label="Remove"
          >
            <RiCloseFill className="size-4 shrink-0" aria-hidden={true} />
          </button>
        </span>
        <span className="inline-flex items-center gap-x-2.5 rounded-full bg-white py-0.5 pr-1 pl-2.5 text-xs text-gray-500 ring-1 ring-gray-200 ring-inset dark:bg-gray-950 dark:text-gray-500 dark:ring-gray-800">
          Status
          <span className="h-4 w-px bg-gray-200 dark:bg-gray-800" />
          <span className="text-tremor-content-strong font-medium dark:text-gray-300">
            Closed
          </span>
          <button
            type="button"
            className="hover:text-tremor-content-emphasis -ml-1.5 flex size-5 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            aria-label="Remove"
          >
            <RiCloseFill className="size-4 shrink-0" aria-hidden={true} />
          </button>
        </span>
      </div>
    </div>
  )
}
```


```example/badges-badge-13.tsx
import {
  RiFunctionAddLine,
  RiShareBoxLine,
  RiStackLine,
} from "@remixicon/react"

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="flex flex-wrap justify-center gap-4">
        <div className="flex items-center gap-2 rounded-lg px-3 py-1.5 ring-1 shadow-md shadow-indigo-400/30 ring-black/5 dark:shadow-indigo-600/30 dark:ring-white/5">
          <RiFunctionAddLine
            aria-hidden="true"
            className="size-4 text-indigo-600 dark:text-indigo-400"
          />
          <span className="text-sm font-medium tracking-tight text-gray-900 dark:text-gray-50">
            Create
          </span>
        </div>
        <div className="flex items-center gap-2 rounded-lg px-3 py-1.5 ring-1 shadow-md shadow-pink-400/30 ring-black/5 dark:shadow-pink-600/30 dark:ring-white/5">
          <RiStackLine
            aria-hidden="true"
            className="size-4 text-pink-600 dark:text-pink-400"
          />
          <span className="text-sm font-medium tracking-tight text-gray-900 dark:text-gray-50">
            Collect
          </span>
        </div>
        <div className="flex items-center gap-2 rounded-lg px-3 py-1.5 ring-1 shadow-md shadow-teal-400/30 ring-black/5 dark:shadow-teal-600/30 dark:ring-white/5">
          <RiShareBoxLine
            aria-hidden="true"
            className="size-4 text-teal-600 dark:text-teal-400"
          />
          <span className="text-sm font-medium tracking-tight text-gray-900 dark:text-gray-50">
            Share
          </span>
        </div>
      </div>
    </div>
  )
}
```


```example/badges-badge-12.tsx
export default function Example() {
  return (
    <div className="obfuscate">
      <div className="flex flex-wrap justify-center gap-4">
        <span className="rounded-lg bg-indigo-50/50 px-3 py-1.5 leading-4 font-semibold tracking-tighter ring-1 shadow-sm shadow-indigo-500/20 ring-indigo-200/20 sm:text-sm dark:bg-indigo-900/20 dark:ring-indigo-800/30">
          <span className="bg-gradient-to-b from-indigo-400 to-indigo-600 bg-clip-text text-transparent dark:from-indigo-200 dark:to-indigo-400">
            Deploy
          </span>
        </span>
        <span className="rounded-lg bg-pink-50/50 px-3 py-1.5 leading-4 font-semibold tracking-tighter ring-1 shadow-sm shadow-pink-500/20 ring-pink-200/20 sm:text-sm dark:bg-pink-900/20 dark:ring-pink-800/30">
          <span className="bg-gradient-to-b from-pink-400 to-pink-600 bg-clip-text text-transparent dark:from-pink-200 dark:to-pink-400">
            Preview
          </span>
        </span>
        <span className="rounded-lg bg-teal-50/50 px-3 py-1.5 leading-4 font-semibold tracking-tighter ring-1 shadow-sm shadow-teal-500/20 ring-teal-200/20 sm:text-sm dark:bg-teal-900/20 dark:ring-teal-800/30">
          <span className="bg-gradient-to-b from-teal-400 to-teal-600 bg-clip-text text-transparent dark:from-teal-200 dark:to-teal-400">
            Ship
          </span>
        </span>
      </div>
    </div>
  )
}
```


```example/badges-badge-06.tsx
import { RiCloseFill } from "@remixicon/react"

export default function Example() {
  return (
    <>
      <div className="obfuscate">
        <div className="flex flex-wrap justify-center gap-4">
          <span className="inline-flex items-center gap-x-2.5 rounded-md bg-white py-1 pr-1 pl-2.5 text-xs text-gray-500 ring-1 ring-gray-200 dark:bg-gray-950 dark:text-gray-500 dark:ring-gray-800">
            Department
            <span className="h-4 w-px bg-gray-200 dark:bg-gray-800" />
            <span className="font-medium text-gray-900 dark:text-gray-300">
              Sales
            </span>
            <button
              type="button"
              className="-ml-1.5 flex size-5 items-center justify-center rounded text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-gray-300"
              aria-label="Remove"
            >
              <RiCloseFill className="size-4 shrink-0" aria-hidden={true} />
            </button>
          </span>
          <span className="inline-flex items-center gap-x-2.5 rounded-md bg-white py-1 pr-1 pl-2.5 text-xs text-gray-500 ring-1 ring-gray-200 ring-inset dark:bg-gray-950 dark:text-gray-500 dark:ring-gray-800">
            Location
            <span className="h-4 w-px bg-gray-200 dark:bg-gray-800" />
            <span className="font-medium text-gray-900 dark:text-gray-300">
              Zurich
            </span>
            <button
              type="button"
              className="-ml-1.5 flex size-5 items-center justify-center rounded text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-gray-300"
              aria-label="Remove"
            >
              <RiCloseFill className="size-4 shrink-0" aria-hidden={true} />
            </button>
          </span>
          <span className="inline-flex items-center gap-x-2.5 rounded-md bg-white py-1 pr-1 pl-2.5 text-xs text-gray-500 ring-1 ring-gray-200 ring-inset dark:bg-gray-950 dark:text-gray-500 dark:ring-gray-800">
            Sales volume
            <span className="h-4 w-px bg-gray-200 dark:bg-gray-800" />
            <span className="font-medium text-gray-900 dark:text-gray-300">
              $100K-5M
            </span>
            <button
              type="button"
              className="-ml-1.5 flex size-5 items-center justify-center rounded text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-gray-300"
              aria-label="Remove"
            >
              <RiCloseFill className="size-4 shrink-0" aria-hidden={true} />
            </button>
          </span>
          <span className="inline-flex items-center gap-x-2.5 rounded-md bg-white py-1 pr-1 pl-2.5 text-xs text-gray-500 ring-1 ring-gray-200 ring-inset dark:bg-gray-950 dark:text-gray-500 dark:ring-gray-800">
            Status
            <span className="h-4 w-px bg-gray-200 dark:bg-gray-800" />
            <span className="font-medium text-gray-900 dark:text-gray-300">
              Closed
            </span>
            <button
              type="button"
              className="-ml-1.5 flex size-5 items-center justify-center rounded text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-gray-300"
              aria-label="Remove"
            >
              <RiCloseFill className="size-4 shrink-0" aria-hidden={true} />
            </button>
          </span>
        </div>
      </div>
    </>
  )
}
```


