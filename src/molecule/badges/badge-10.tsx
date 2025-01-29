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
