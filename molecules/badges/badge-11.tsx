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
