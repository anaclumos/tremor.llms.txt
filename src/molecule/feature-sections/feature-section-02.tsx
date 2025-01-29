import {
  RiLinksLine,
  RiPlugLine,
  RiShieldKeyholeLine,
  RiStackLine,
} from "@remixicon/react"

const features = [
  {
    name: "Use Database with your stack",
    description:
      "We offer client and server libraries in everything from React and Ruby to iOS.",
    icon: RiStackLine,
  },
  {
    name: "Try plug & play options",
    description:
      "Customize and deploy data infrastructure directly from the Database Dashboard.",
    icon: RiPlugLine,
  },
  {
    name: "Explore pre-built integrations",
    description:
      "Connect Database to over a hundred tools including Stripe, Salesforce, or Quickbooks.",
    icon: RiLinksLine,
  },
  {
    name: "Security & privacy",
    description:
      "Database supports PII data encrypted with AES-256 at rest or explicit user consent flows.",
    icon: RiShieldKeyholeLine,
  },
]

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="mx-auto w-full max-w-6xl px-3 py-20">
        <dl className="grid grid-cols-4 gap-10">
          {features.map((item) => (
            <div
              key={item.name}
              className="col-span-full sm:col-span-2 lg:col-span-1"
            >
              <div className="w-fit rounded-lg p-2 ring-1 shadow-md shadow-blue-400/30 ring-black/5 dark:shadow-blue-600/30 dark:ring-white/5">
                <item.icon
                  aria-hidden="true"
                  className="size-6 text-blue-600 dark:text-blue-400"
                />
              </div>
              <dt className="mt-6 font-semibold text-gray-900 dark:text-gray-50">
                {item.name}
              </dt>
              <dd className="mt-2 leading-7 text-gray-600 dark:text-gray-400">
                {item.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
