```example/dialogs-dialog-09.tsx
import React from "react"

import { Button } from "@/atom/Button"
import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/atom/Drawer"
import { Input } from "@/atom/Input"
import { Label } from "@/atom/Label"
import { RadioCardGroup, RadioCardItem } from "@/atom/RadioCardGroup"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/atom/Select"
import { Textarea } from "@/atom/Textarea"

const ticketTypes: {
  name: string
  value: string
  extended: string
}[] = [
  {
    name: "First Notice of Loss",
    value: "fnol",
    extended: "First Notice of Loss Call",
  },
  {
    name: "Policy Service",
    value: "policy",
    extended: "Policy Service Call",
  },
  {
    name: "Claims Status",
    value: "claims",
    extended: "Claims Status Check",
  },
  {
    name: "Emergency",
    value: "emergency",
    extended: "Emergency Assistance",
  },
  {
    name: "Coverage Review",
    value: "coverage",
    extended: "Policy Coverage Discussion",
  },
  {
    name: "Billing Support",
    value: "billing",
    extended: "Payment & Billing Assistance",
  },
]

const categoryTypes = [
  {
    name: "Accident Report",
    value: "accident-report",
    extended: "Report a new accident or incident",
    description: "File initial accident reports and incidents",
  },
  {
    name: "Emergency",
    value: "emergency",
    extended: "Emergency Assistance Request",
    description: "Immediate help for urgent situations",
  },
  {
    name: "Claim Status",
    value: "claim-status",
    extended: "Check Existing Claim",
    description: "Get updates on ongoing claims",
  },
  {
    name: "Policy Changes",
    value: "policy-changes",
    extended: "Modify Policy Details",
    description: "Update or modify existing policies",
  },
  {
    name: "Coverage Inquiry",
    value: "coverage-inquiry",
    extended: "Coverage Information Request",
    description: "Questions about policy coverage",
  },
  {
    name: "Document Request",
    value: "document-request",
    extended: "Policy Document Service",
    description: "Request insurance documentation",
  },
  {
    name: "Billing",
    value: "billing",
    extended: "Payment & Billing Service",
    description: "Handle payments and billing issues",
  },
  {
    name: "New Quote",
    value: "new-quote",
    extended: "Insurance Quote Request",
    description: "Get quotes for new policies",
  },
  {
    name: "Account Service",
    value: "account-service",
    extended: "Account Management",
    description: "General account-related assistance",
  },
  {
    name: "Complaint",
    value: "complaint",
    extended: "File Complaint",
    description: "Register and handle complaints",
  },
  {
    name: "Fraud Report",
    value: "fraud-report",
    extended: "Report Suspicious Activity",
    description: "Report potential fraud or suspicious claims",
  },
  {
    name: "Agent Request",
    value: "agent-request",
    extended: "Agent Assistance",
    description: "Connect with an insurance agent",
  },
] as const

const policyTypes = [
  {
    name: "Auto Insurance",
    value: "auto",
    extended: "Vehicle Coverage",
    description: "Coverage for cars, motorcycles, and other vehicles",
  },
  {
    name: "Home Insurance",
    value: "home",
    extended: "Property Coverage",
    description: "Protection for houses and personal property",
  },
  {
    name: "Life Insurance",
    value: "life",
    extended: "Life Coverage",
    description: "Life insurance and related benefits",
  },
  {
    name: "Health Insurance",
    value: "health",
    extended: "Medical Coverage",
    description: "Medical and health-related coverage",
  },
  {
    name: "Business Insurance",
    value: "business",
    extended: "Commercial Coverage",
    description: "Coverage for business and commercial needs",
  },
  {
    name: "Umbrella Insurance",
    value: "umbrella",
    extended: "Extended Coverage",
    description: "Additional liability coverage above standard policies",
  },
] as const

const priorities: {
  value: string
  label: string
  sla: string | boolean
  description: string
}[] = [
  {
    value: "emergency",
    label: "Emergency",
    sla: "15m",
    description: "Accidents, injuries, immediate assistance needed",
  },
  {
    value: "high",
    label: "High Priority",
    sla: "4h",
    description: "Coverage issues, policy changes",
  },
  {
    value: "medium",
    label: "Medium Priority",
    sla: "24h",
    description: "General inquiries, documentation requests",
  },
  {
    value: "low",
    label: "Low Priority",
    sla: "48h",
    description: "Information requests, future policy changes",
  },
]

interface Ticket {
  created: string
  status: string
  description: string
  priority: string
  category: string
  type: string
  duration: string | null // call duration in minutes
  policyNumber: string
  policyType: string
}

type TicketFormData = Partial<Ticket>

interface TicketDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

interface FormPageProps {
  formData: TicketFormData
  onUpdateForm: (updates: Partial<TicketFormData>) => void
}

type Category = (typeof categoryTypes)[number]["value"]
type PolicyType = (typeof policyTypes)[number]["value"]

const SummaryItem = ({
  label,
  value,
}: {
  label: string
  value: string | number | null | undefined
}) => (
  <div className="space-y-1">
    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
      {label}
    </p>
    <p className="text-sm">{value ?? "Not provided"}</p>
  </div>
)

const FormField = ({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) => (
  <div>
    <Label className="font-medium">{label}</Label>
    <div className="mt-2">{children}</div>
  </div>
)

const FirstPage = ({ formData, onUpdateForm }: FormPageProps) => (
  <>
    <DrawerHeader>
      <DrawerTitle>
        <p>Create Support Ticket</p>
        <span className="text-sm font-normal text-gray-500 dark:text-gray-500">
          Ticket Type & Category
        </span>
      </DrawerTitle>
    </DrawerHeader>
    <DrawerBody className="-mx-6 space-y-6 overflow-y-scroll border-t border-gray-200 px-6 dark:border-gray-800">
      <FormField label="Contact Type">
        <RadioCardGroup
          defaultValue={formData.type}
          className="grid grid-cols-2 gap-2 text-sm"
          onValueChange={(value) => onUpdateForm({ type: value })}
        >
          {ticketTypes.map((type) => (
            <RadioCardItem
              key={type.value}
              value={type.value}
              className="flex flex-col justify-start p-2.5 text-base duration-75 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 data-[state=checked]:border-transparent data-[state=checked]:bg-blue-500 data-[state=checked]:text-white sm:text-sm dark:focus:ring-blue-500"
            >
              {type.name}
              <span className="block text-sm opacity-75 sm:text-xs">
                {type.extended}
              </span>
            </RadioCardItem>
          ))}
        </RadioCardGroup>
      </FormField>

      <FormField label="Category">
        <Select
          value={formData.category}
          onValueChange={(value: Category) => onUpdateForm({ category: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent>
            {categoryTypes.map((category) => (
              <SelectItem key={category.value} value={category.value}>
                {category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormField>

      <FormField label="Policy Type">
        <Select
          value={formData.policyType}
          onValueChange={(value: PolicyType) =>
            onUpdateForm({ policyType: value })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Policy Type" />
          </SelectTrigger>
          <SelectContent>
            {policyTypes.map((type) => (
              <SelectItem key={type.value} value={type.value}>
                {type.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormField>

      <FormField label="Policy Number">
        <Input
          disabled
          name="policyNumber"
          value={formData.policyNumber}
          onChange={(e) => onUpdateForm({ policyNumber: e.target.value })}
          placeholder="Auto generated"
        />
      </FormField>
    </DrawerBody>
  </>
)

const SecondPage = ({ formData, onUpdateForm }: FormPageProps) => (
  <>
    <DrawerHeader>
      <DrawerTitle>
        <p>Ticket Details</p>
        <span className="text-sm font-normal text-gray-500 dark:text-gray-500">
          Priority & Description
        </span>
      </DrawerTitle>
    </DrawerHeader>
    <DrawerBody className="-mx-6 space-y-6 overflow-y-scroll border-t border-gray-200 px-6 dark:border-gray-800">
      <FormField label="Priority Level">
        <RadioCardGroup
          defaultValue={formData.priority}
          className="grid grid-cols-1 gap-2 text-sm"
          onValueChange={(value) => onUpdateForm({ priority: value })}
        >
          {priorities.map((priority) => (
            <RadioCardItem
              key={priority.value}
              value={priority.value}
              className="p-2.5 text-base duration-75 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 data-[state=checked]:border-transparent data-[state=checked]:bg-blue-500 data-[state=checked]:text-white sm:text-sm dark:focus:ring-blue-500"
            >
              <div className="flex items-center justify-between">
                <span>{priority.label}</span>
                <span className="text-sm opacity-75 sm:text-xs">
                  SLA: {priority.sla}
                </span>
              </div>
              <span className="block text-sm opacity-75 sm:text-xs">
                {priority.description}
              </span>
            </RadioCardItem>
          ))}
        </RadioCardGroup>
      </FormField>

      <FormField label="Description">
        <Textarea
          name="description"
          value={formData.description}
          onChange={(e) => onUpdateForm({ description: e.target.value })}
          placeholder="Detailed description of the issue..."
          className="h-32"
        />
      </FormField>

      <FormField label="Expected Call Duration (minutes)">
        <Input
          name="duration"
          type="number"
          value={formData.duration || ""}
          onChange={(e) => {
            onUpdateForm({ duration: e.target.value || null })
          }}
          placeholder="0"
          min="0"
        />
      </FormField>
    </DrawerBody>
  </>
)

const SummaryPage = ({ formData }: { formData: TicketFormData }) => (
  <>
    <DrawerHeader>
      <DrawerTitle>
        <p>Review Ticket</p>
        <span className="text-sm font-normal text-gray-500 dark:text-gray-500">
          Please review all details before submitting
        </span>
      </DrawerTitle>
    </DrawerHeader>
    <DrawerBody className="-mx-6 space-y-4 overflow-y-scroll border-t border-gray-200 px-6 dark:border-gray-800">
      <div className="rounded-md border border-gray-200 dark:border-gray-800">
        <div className="border-b border-gray-200 p-4 dark:border-gray-800">
          <h3 className="font-medium">Ticket Information</h3>
          <div className="mt-4 space-y-4">
            <SummaryItem
              label="Type"
              value={
                ticketTypes.find((t) => t.value === formData.type)?.name ??
                undefined
              }
            />
            <SummaryItem
              label="Category"
              value={
                categoryTypes.find((c) => c.value === formData.category)
                  ?.name ?? undefined
              }
            />
            <SummaryItem
              label="Policy Type"
              value={
                policyTypes.find((p) => p.value === formData.policyType)
                  ?.name ?? undefined
              }
            />
            <SummaryItem
              label="Priority"
              value={
                priorities.find((p) => p.value === formData.priority)?.label ??
                undefined
              }
            />
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-medium">Details</h3>
          <div className="mt-4 space-y-4">
            <SummaryItem
              label="Priority"
              value={
                priorities.find((p) => p.value === formData.priority)?.label ??
                undefined
              }
            />
            <SummaryItem
              label="Description"
              value={formData.description || undefined}
            />
            <SummaryItem
              label="Call Duration"
              value={
                formData.duration
                  ? `${formData.duration} minute${formData.duration === "1" ? "" : "s"}`
                  : undefined
              }
            />
            <SummaryItem
              label="Created"
              value={
                formData.created
                  ? new Date(formData.created).toLocaleString()
                  : undefined
              }
            />
          </div>
        </div>
      </div>
    </DrawerBody>
  </>
)

function TicketDrawer({ open, onOpenChange }: TicketDrawerProps) {
  const [formData, setFormData] = React.useState<TicketFormData>({
    status: "in-progress",
    category: categoryTypes[0].value,
    type: ticketTypes[0].value,
    policyType: policyTypes[0].value,
    priority: priorities[0].value,
    description: "",
    policyNumber: "",
    duration: "0",
    created: new Date().toISOString(),
  })

  const [currentPage, setCurrentPage] = React.useState(1)

  const handleUpdateForm = (updates: Partial<TicketFormData>) => {
    setFormData((prev) => ({ ...prev, ...updates }))
  }

  const handleSubmit = () => {
    console.log("Ticket created:", formData)
    onOpenChange(false)
  }

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return <FirstPage formData={formData} onUpdateForm={handleUpdateForm} />
      case 2:
        return (
          <SecondPage formData={formData} onUpdateForm={handleUpdateForm} />
        )
      case 3:
        return <SummaryPage formData={formData} />
      default:
        return null
    }
  }

  const renderFooter = () => {
    if (currentPage === 1) {
      return (
        <>
          <DrawerClose asChild>
            <Button variant="secondary">Cancel</Button>
          </DrawerClose>
          <Button onClick={() => setCurrentPage(2)}>Continue</Button>
        </>
      )
    }
    if (currentPage === 2) {
      return (
        <>
          <Button variant="secondary" onClick={() => setCurrentPage(1)}>
            Back
          </Button>
          <Button onClick={() => setCurrentPage(3)}>Review</Button>
        </>
      )
    }
    return (
      <>
        <Button variant="secondary" onClick={() => setCurrentPage(2)}>
          Back
        </Button>
        <Button onClick={handleSubmit}>Create Ticket</Button>
      </>
    )
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="overflow-x-hidden sm:max-w-lg">
        {renderPage()}
        <DrawerFooter className="-mx-6 -mb-2 gap-2 px-6 sm:justify-between">
          {renderFooter()}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default function TravelPlanningDialogWithDemo() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="obfuscate">
      {/* Static card for demonstration */}
      <div className="flex items-center justify-center py-24">
        <Button
          variant="secondary"
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 text-base sm:text-sm"
        >
          Open Drawer
        </Button>
        <TicketDrawer open={isOpen} onOpenChange={setIsOpen} />
      </div>
    </div>
  )
}
```


```example/dialogs-dialog-08.tsx
import React from "react"
import { RiArrowDownSLine, RiCloseLine } from "@remixicon/react"

import { Button } from "@/atom/Button"
import { Card } from "@/atom/Card"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/atom/Dialog"
import { Divider } from "@/atom/Divider"
import { Input } from "@/atom/Input"
import { Label } from "@/atom/Label"

export default function TravelPlanningDialogWithDemo() {
  const [showDemo, setShowDemo] = React.useState(false)

  return (
    <div className="obfuscate">
      {/* Static card for demonstration */}
      <Card className="sm:mx-auto sm:max-w-lg">
        <div className="absolute top-3 right-3">
          <Button
            variant="ghost"
            className="!p-2 !text-gray-400 hover:!text-gray-500 dark:!text-gray-600 hover:dark:!text-gray-500"
            aria-label="close"
          >
            <RiCloseLine className="size-5 shrink-0" />
          </Button>
        </div>
        <form action="#" method="POST">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
            Plan Your Dream Vacation
          </h3>
          <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
            Start your journey by creating a new travel plan. Enter your
            destination and upload any inspiration photos.
          </p>
          <div className="mt-4 space-y-6">
            <div>
              <Label htmlFor="destination-static" className="font-medium">
                Destination{" "}
                <span className="text-red-500 dark:text-red-500">*</span>
              </Label>
              <Input
                type="text"
                id="destination-static"
                name="destination"
                autoComplete="off"
                placeholder="e.g., Paris, France"
                className="mt-2"
                required
              />
            </div>
            <div>
              <Label htmlFor="inspiration-photo-static" className="font-medium">
                Inspiration Photo{" "}
              </Label>
              <Input
                id="inspiration-photo-static"
                name="inspiration-photo"
                type="file"
                className="mt-2"
                accept="image/*"
              />
              <p className="mt-2 text-xs text-gray-500 dark:text-gray-500">
                Upload a photo that inspires your trip (JPG, PNG, or GIF).
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
            <Button className="mt-2 w-full sm:mt-0 sm:w-fit" variant="ghost">
              Cancel
            </Button>
            <Button type="submit" className="w-full sm:w-fit">
              Start Planning
            </Button>
          </div>
        </form>
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

      {showDemo && (
        <div className="flex items-center justify-center py-24">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary">Open Dialog</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
              <DialogClose asChild>
                <Button
                  className="!absolute !top-3 !right-3 !p-2 !text-gray-400 hover:!text-gray-500 dark:!text-gray-600 hover:dark:!text-gray-500"
                  variant="ghost"
                >
                  <RiCloseLine className="size-5 shrink-0" />
                </Button>
              </DialogClose>
              <form action="#" method="POST">
                <DialogHeader>
                  <DialogTitle className="text-lg">
                    Plan Your Dream Vacation
                  </DialogTitle>
                  <DialogDescription className="mt-1 text-sm/6">
                    Start your journey by creating a new travel plan. Enter your
                    destination and upload any inspiration photos.
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-4 space-y-6">
                  <div>
                    <Label htmlFor="destination" className="font-medium">
                      Destination{" "}
                      <span className="text-red-500 dark:text-red-500">*</span>
                    </Label>
                    <Input
                      type="text"
                      id="destination"
                      name="destination"
                      autoComplete="off"
                      placeholder="e.g., Paris, France"
                      className="mt-2"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="inspiration-photo" className="font-medium">
                      Inspiration Photo{" "}
                    </Label>
                    <Input
                      id="inspiration-photo"
                      name="inspiration-photo"
                      type="file"
                      className="mt-2"
                      accept="image/*"
                    />
                    <p className="mt-2 text-xs text-gray-500 dark:text-gray-500">
                      Upload a photo that inspires your trip (JPG, PNG, or GIF).
                    </p>
                  </div>
                </div>
                <DialogFooter className="mt-8">
                  <DialogClose asChild>
                    <Button variant="secondary">Cancel</Button>
                  </DialogClose>
                  <Button type="submit">Start Planning</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      )}
    </div>
  )
}
```


```example/dialogs-dialog-03.tsx
import React from "react"
import { RiArrowDownSLine, RiCloseLine } from "@remixicon/react"

import { Button } from "@/atom/Button"
import { Card } from "@/atom/Card"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/atom/Dialog"
import { Divider } from "@/atom/Divider"
import { Input } from "@/atom/Input"
import { Label } from "@/atom/Label"

export default function Example() {
  const [showDemo, setShowDemo] = React.useState(false)
  return (
    <div className="obfuscate">
      {/* first card only for demo purpose */}
      <Card className="sm:mx-auto sm:max-w-lg">
        <div className="absolute top-3 right-3">
          <Button
            variant="ghost"
            className="!p-2 !text-gray-400 hover:!text-gray-500 dark:!text-gray-600 hover:dark:!text-gray-500"
            aria-label="close"
          >
            <RiCloseLine className="size-5 shrink-0" />
          </Button>
        </div>
        <form action="#" method="POST">
          <h3 className="font-semibold text-gray-900 dark:text-gray-50">
            Deactivate two-step authentication
          </h3>
          <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
            Enter your password to deactivate the two-step authentication login.
            Make sure to have your smartphone ready.
          </p>
          <div className="mt-6">
            <Label htmlFor="email" className="font-medium">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              className="mt-2"
              placeholder="example@email.com"
              disabled
            />
          </div>
          <div className="mt-6">
            <Label htmlFor="password" className="font-medium">
              Confirm password
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              className="mt-2"
              placeholder="Password"
            />
          </div>
          <Divider />
          <div className="mt-6 flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
            <Button className="mt-2 w-full sm:mt-0 sm:w-fit" variant="ghost">
              Cancel
            </Button>
            <Button
              type="submit"
              variant="destructive"
              className="w-full sm:w-fit"
            >
              Deactivate
            </Button>
          </div>
        </form>
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
              <DialogContent>
                <DialogClose asChild>
                  <Button
                    className="!absolute !top-3 !right-3 !p-2 !text-gray-400 hover:!text-gray-500 dark:!text-gray-600 hover:dark:!text-gray-500"
                    variant="ghost"
                  >
                    <RiCloseLine className="size-5 shrink-0" />
                  </Button>
                </DialogClose>
                <form action="#" method="POST">
                  <DialogHeader>
                    <DialogTitle className="text-base">
                      Deactivate two-step authentication
                    </DialogTitle>
                    <DialogDescription className="mt-1 text-sm/6">
                      Enter your password to deactivate the two-step
                      authentication login. Make sure to have your smartphone
                      ready.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-6">
                    <Label htmlFor="email" className="font-medium">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      className="mt-2"
                      placeholder="example@email.com"
                      disabled
                    />
                  </div>
                  <div className="mt-6">
                    <Label htmlFor="password" className="font-medium">
                      Confirm password
                    </Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      className="mt-2"
                      placeholder="Password"
                    />
                  </div>
                  <Divider />
                  <DialogFooter className="mt-6">
                    <DialogClose asChild>
                      <Button
                        className="mt-2 w-full sm:mt-0 sm:w-fit"
                        variant="ghost"
                      >
                        Cancel
                      </Button>
                    </DialogClose>
                    <DialogClose asChild>
                      <Button
                        type="submit"
                        variant="destructive"
                        className="w-full sm:w-fit"
                      >
                        Deactivate
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </>
      ) : null}
    </div>
  )
}
```


```example/dialogs-dialog-02.tsx
"use client"

import { useState } from "react"
import { RiArrowDownSLine, RiCloseLine } from "@remixicon/react"

import { Button } from "@/atom/Button"
import { Card } from "@/atom/Card"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/atom/Dialog"
import { Divider } from "@/atom/Divider"
import { Input } from "@/atom/Input"
import { Label } from "@/atom/Label"

export default function Example() {
  const [showDemo, setShowDemo] = useState(false)
  return (
    <div className="obfuscate">
      {/* first card only for demo purpose */}
      <Card className="sm:mx-auto sm:max-w-md">
        <div className="absolute top-3 right-3">
          <Button
            variant="ghost"
            className="!p-2 !text-gray-400 hover:!text-gray-500 dark:!text-gray-600 hover:dark:!text-gray-500"
            aria-label="close"
          >
            <RiCloseLine className="size-5 shrink-0" />
          </Button>
        </div>
        <form action="#" method="POST">
          <h3 className="font-semibold text-gray-900 dark:text-gray-50">
            Delete workspace
          </h3>
          <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
            All workspace data will be permanently deleted. There is no coming
            back after you press delete.
          </p>
          <div className="mt-6">
            <Label htmlFor="transfer-ownership" className="font-medium">
              Confirm password
            </Label>
            <Input
              id="transfer-ownership"
              name="transfer-ownership"
              type="password"
              className="mt-2"
              placeholder="Password"
            />
          </div>
          <Button type="submit" variant="destructive" className="mt-4 w-full">
            Delete workspace permanently
          </Button>
        </form>
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
              <DialogContent className="max-w-md">
                <DialogClose asChild>
                  <Button
                    className="!absolute !top-3 !right-3 !p-2 !text-gray-400 hover:!text-gray-500 dark:!text-gray-600 hover:dark:!text-gray-500"
                    variant="ghost"
                  >
                    <RiCloseLine className="size-5 shrink-0" />
                  </Button>
                </DialogClose>
                <form action="#" method="POST">
                  <DialogHeader>
                    <DialogTitle className="text-base">
                      Delete workspace
                    </DialogTitle>
                    <DialogDescription className="mt-1 text-sm/6">
                      All workspace data will be permanently deleted. There is
                      no coming back after you press delete.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-6">
                    <Label htmlFor="delete-workspace" className="font-medium">
                      Confirm password
                    </Label>
                    <Input
                      id="delete-workspace"
                      name="delete-workspace"
                      type="password"
                      className="mt-2"
                      placeholder="Password"
                    />
                  </div>
                  <DialogFooter className="mt-4">
                    <DialogClose asChild>
                      <Button
                        type="submit"
                        variant="destructive"
                        className="w-full"
                      >
                        Delete workspace permanently
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </>
      ) : null}
    </div>
  )
}
```


```example/dialogs-dialog-01.tsx
"use client"

import React from "react"
import { RiArrowDownSLine, RiCloseLine } from "@remixicon/react"

import { Button } from "@/atom/Button"
import { Card } from "@/atom/Card"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/atom/Dialog"
import { Divider } from "@/atom/Divider"
import { Input } from "@/atom/Input"
import { Label } from "@/atom/Label"

export default function Example() {
  const [showDemo, setShowDemo] = React.useState(false)
  return (
    <div className="obfuscate">
      {/* first card only for demo purpose */}
      <Card className="sm:mx-auto sm:max-w-md">
        <div className="absolute top-3 right-3">
          <Button
            variant="ghost"
            className="!p-2 !text-gray-400 hover:!text-gray-500 dark:!text-gray-600 hover:dark:!text-gray-500"
            aria-label="close"
          >
            <RiCloseLine className="size-5 shrink-0" />
          </Button>
        </div>
        <form action="#" method="POST">
          <h3 className="font-semibold text-gray-900 dark:text-gray-50">
            Transfer ownership
          </h3>
          <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
            Are you sure you want to transfer the ownership of this workspace to
            Emma?
          </p>
          <div className="mt-6">
            <Label htmlFor="transfer-ownership" className="font-medium">
              Confirm password
            </Label>
            <Input
              id="transfer-ownership"
              name="transfer-ownership"
              type="password"
              className="mt-2"
              placeholder="Password"
            />
          </div>
          <Button type="submit" className="mt-4 w-full">
            Transfer ownership
          </Button>
        </form>
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
              <DialogContent className="max-w-md">
                <DialogClose asChild>
                  <Button
                    className="!absolute !top-3 !right-3 !p-2 !text-gray-400 hover:!text-gray-500 dark:!text-gray-600 hover:dark:!text-gray-500"
                    variant="ghost"
                  >
                    <RiCloseLine className="size-5 shrink-0" />
                  </Button>
                </DialogClose>
                <form action="#" method="POST">
                  <DialogHeader>
                    <DialogTitle className="text-base">
                      Transfer ownership
                    </DialogTitle>
                    <DialogDescription className="mt-1 text-sm/6">
                      Are you sure you want to transfer the ownership of this
                      workspace to Emma?
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-6">
                    <Label htmlFor="transfer-ownership" className="font-medium">
                      Confirm password
                    </Label>
                    <Input
                      id="transfer-ownership"
                      name="transfer-ownership"
                      type="password"
                      className="mt-2"
                      placeholder="Password"
                    />
                  </div>
                  <DialogFooter className="mt-4">
                    <DialogClose asChild>
                      <Button type="submit" className="w-full">
                        Transfer ownership
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </>
      ) : null}
    </div>
  )
}
```


```example/dialogs-dialog-05.tsx
"use client"

import React from "react"
import { RiArrowDownSLine, RiCloseLine } from "@remixicon/react"

import { Button } from "@/atom/Button"
import { Card } from "@/atom/Card"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/atom/Dialog"
import { Divider } from "@/atom/Divider"
import { Input } from "@/atom/Input"

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
        <div className="absolute top-3 right-3">
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
              <span className="inline-flex items-center rounded-md bg-white px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-gray-200 ring-inset dark:bg-gray-950 dark:text-gray-300 dark:ring-gray-800">
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
                    className="!absolute !top-3 !right-3 !p-2 !text-gray-400 hover:!text-gray-500 dark:!text-gray-600 hover:dark:!text-gray-500"
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
                      <span className="inline-flex items-center rounded-md bg-white px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-gray-200 ring-inset dark:bg-gray-950 dark:text-gray-300 dark:ring-gray-800">
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
```


```example/dialogs-dialog-04.tsx
"use client"

import React from "react"
import { RiArrowDownSLine, RiCloseLine } from "@remixicon/react"

import { Button } from "@/atom/Button"
import { Card } from "@/atom/Card"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/atom/Dialog"
import { Divider } from "@/atom/Divider"
import { Input } from "@/atom/Input"
import { Label } from "@/atom/Label"
import { Switch } from "@/atom/Switch"

export default function Example() {
  const [showDemo, setShowDemo] = React.useState(false)
  return (
    <div className="obfuscate">
      {/* first card only for demo purpose */}
      <Card className="!p-0 sm:mx-auto sm:max-w-lg">
        <div className="absolute top-3 right-3">
          <Button
            variant="ghost"
            className="!p-2 !text-gray-400 hover:!text-gray-500 dark:!text-gray-600 hover:dark:!text-gray-500"
            aria-label="close"
          >
            <RiCloseLine className="size-5 shrink-0" />
          </Button>
        </div>
        <form action="#" method="POST">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
              Create workspace
            </h3>
            <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
              Workspaces are shared environments where teams can connect to data
              sources, run queries and create reports.
            </p>
            <div className="mt-6">
              <Label htmlFor="workspace-name" className="font-medium">
                Workspace Name
                <span className="text-red-500 dark:text-red-500">*</span>
              </Label>
              <Input
                type="text"
                id="workspace-name"
                name="workspace-name"
                placeholder="My workspace"
                className="mt-2"
                required
              />
              <Button type="submit" className="mt-4 w-full">
                Create Workspace
              </Button>
            </div>
          </div>
          <div className="rounded-b-md border-t bg-gray-50 px-6 py-4 dark:border-gray-900 dark:bg-gray-900">
            <div className="flex items-start gap-x-4">
              <Switch
                id="enable-private-workspace"
                aria-describedby="enable-description"
                name="enable-private-workspace"
                className="mt-1"
              />
              <div>
                <Label
                  htmlFor="enable-private-workspace"
                  className="font-medium"
                >
                  Set workspace to private
                </Label>
                <p
                  id="enable-description"
                  className="text-sm text-gray-500 dark:text-gray-500"
                >
                  Only those invited can access or view
                </p>
              </div>
            </div>
          </div>
        </form>
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
              <DialogContent>
                <DialogClose asChild>
                  <Button
                    className="!absolute !top-3 !right-3 !p-2 !text-gray-400 hover:!text-gray-500 dark:!text-gray-600 hover:dark:!text-gray-500"
                    variant="ghost"
                  >
                    <RiCloseLine className="size-5 shrink-0" />
                  </Button>
                </DialogClose>
                <form action="#" method="POST">
                  <DialogHeader>
                    <DialogTitle>Create workspace</DialogTitle>
                    <DialogDescription className="mt-1 text-sm/6">
                      Workspaces are shared environments where teams can connect
                      to data sources, run queries and create reports.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-6">
                    <Label htmlFor="workspace-name" className="font-medium">
                      Workspace Name
                      <span className="text-red-500 dark:text-red-500">*</span>
                    </Label>
                    <Input
                      type="text"
                      id="workspace-name"
                      name="workspace-name"
                      placeholder="My workspace"
                      className="mt-2"
                      required
                    />
                    <DialogClose asChild>
                      <Button type="submit" className="mt-4 w-full">
                        Create Workspace
                      </Button>
                    </DialogClose>
                  </div>
                  <div className="-mx-6 mt-8 -mb-6 border-t bg-gray-50 py-4 dark:border-gray-900 dark:bg-gray-900">
                    <div className="flex items-start space-x-3 px-6">
                      <Switch
                        id="enable-private-workspace"
                        aria-describedby="enable-description"
                        name="enable-private-workspace"
                        className="mt-1"
                      />
                      <div>
                        <Label
                          htmlFor="enable-private-workspace"
                          className="font-medium"
                        >
                          Set workspace to private
                        </Label>
                        <p
                          id="enable-description"
                          className="text-sm text-gray-500 dark:text-gray-500"
                        >
                          Only those invited can access or view
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </>
      ) : null}
    </div>
  )
}
```


```example/dialogs-dialog-06.tsx
"use client"

import { useState } from "react"
import { RiAppsFill, RiArrowDownSLine, RiCloseLine } from "@remixicon/react"

import { Button } from "@/atom/Button"
import { Card } from "@/atom/Card"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/atom/Dialog"
import { Divider } from "@/atom/Divider"
import { Label } from "@/atom/Label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/atom/Select"

export default function Example() {
  const [showDemo, setShowDemo] = useState(false)
  return (
    <div className="obfuscate">
      {/* first card only for demo purpose */}
      <Card className="!p-0 sm:mx-auto sm:max-w-5xl">
        <div className="absolute top-3 right-3">
          <Button
            variant="ghost"
            className="!p-2 !text-gray-400 hover:!text-gray-500 dark:!text-gray-600 hover:dark:!text-gray-500"
            aria-label="close"
          >
            <RiCloseLine className="size-5 shrink-0" />
          </Button>
        </div>
        <form action="#" method="POST">
          <div className="border-b border-gray-200 px-6 py-4 dark:border-gray-900">
            <h3 className="font-medium text-gray-900 dark:text-gray-50">
              Add application
            </h3>
          </div>
          <div className="flex flex-col-reverse md:flex-row">
            <div className="flex flex-col justify-between border-gray-200 md:w-80 md:border-r dark:border-gray-900">
              <div className="flex-1 grow">
                <div className="border-t border-gray-200 p-6 md:border-none dark:border-gray-900">
                  <div className="flex items-center space-x-3">
                    <div className="inline-flex shrink-0 items-center justify-center rounded bg-gray-100 p-3 dark:bg-gray-800">
                      <RiAppsFill
                        className="size-5 text-gray-700 dark:text-gray-300"
                        aria-hidden={true}
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 dark:text-gray-50">
                        Astro Analytics
                      </h3>
                      <p className="mt-0.5 text-sm text-gray-700 dark:text-gray-300">
                        Lorem ipsum dolor sit amet
                      </p>
                    </div>
                  </div>
                  <Divider />
                  <h4 className="text-sm font-medium text-gray-900 dark:text-gray-50">
                    Description:
                  </h4>
                  <p className="mt-1 text-sm/6 text-gray-600 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                  </p>
                  <h4 className="mt-6 text-sm font-medium text-gray-900 dark:text-gray-50">
                    Supported functionality:
                  </h4>
                  <p className="mt-1 text-sm/6 text-gray-600 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod.
                  </p>
                </div>
              </div>
              <div className="flex justify-between border-t border-gray-200 p-6 dark:border-gray-900">
                <Button variant="secondary">Cancel</Button>
                <Button type="submit">Connect</Button>
              </div>
            </div>
            <div className="flex-1 space-y-6 p-6 md:px-6 md:pt-6 md:pb-20">
              <div>
                <div className="flex items-center space-x-3">
                  <div className="inline-flex size-6 items-center justify-center rounded-md bg-gray-100 text-sm text-gray-900 dark:bg-gray-800 dark:text-gray-50">
                    1
                  </div>
                  <Label htmlFor="connection" className="font-medium">
                    Choose a connection
                  </Label>
                </div>
                <Select defaultValue="1">
                  <SelectTrigger
                    name="connection"
                    id="connection"
                    className="mt-4"
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">postgres_live</SelectItem>
                    <SelectItem value="2">postgres_test</SelectItem>
                    <SelectItem value="3">bigQuery_live</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <div className="flex items-center space-x-3">
                  <div className="inline-flex size-6 items-center justify-center rounded-md bg-gray-100 text-sm text-gray-900 dark:bg-gray-800 dark:text-gray-50">
                    2
                  </div>
                  <Label htmlFor="dataset" className="font-medium">
                    Select dataset
                  </Label>
                </div>
                <Select defaultValue="1">
                  <SelectTrigger name="dataset" id="dataset" className="mt-4">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">starterkit_sales</SelectItem>
                    <SelectItem value="2">starterkit_ecommerce</SelectItem>
                    <SelectItem value="3">starterkit_logs</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <div className="flex items-center space-x-3">
                  <div className="inline-flex size-6 items-center justify-center rounded-md bg-gray-100 text-sm text-gray-900 dark:bg-gray-800 dark:text-gray-50">
                    3
                  </div>
                  <Label htmlFor="metrics" className="font-medium">
                    Select metrics to track
                  </Label>
                </div>
                <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                </p>
                <Select defaultValue="2">
                  <SelectTrigger name="metrics" id="metrics" className="mt-4">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">all options</SelectItem>
                    <SelectItem value="2">log & health data</SelectItem>
                    <SelectItem value="3">product usage data</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <div className="flex items-center space-x-3">
                  <div className="inline-flex size-6 items-center justify-center rounded-md bg-gray-100 text-sm text-gray-900 dark:bg-gray-800 dark:text-gray-50">
                    4
                  </div>
                  <Label htmlFor="import-method" className="font-medium">
                    Select import method
                  </Label>
                </div>
                <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                </p>
                <Select defaultValue="1">
                  <SelectTrigger
                    name="import-method"
                    id="import-method"
                    className="mt-4"
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">direct query</SelectItem>
                    <SelectItem value="2">import</SelectItem>
                    <SelectItem value="3">
                      direct query (incremental load)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </form>
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
              <DialogContent className="!p-0 sm:max-w-5xl">
                <DialogClose asChild>
                  <Button
                    className="!absolute !top-3 !right-3 !p-2 !text-gray-400 hover:!text-gray-500 dark:!text-gray-600 hover:dark:!text-gray-500"
                    variant="ghost"
                  >
                    <RiCloseLine className="size-5 shrink-0" />
                  </Button>
                </DialogClose>
                <DialogHeader className="border-b border-gray-200 px-6 py-4 dark:border-gray-900">
                  <DialogTitle className="text-base">
                    Add application
                  </DialogTitle>
                </DialogHeader>
                <div className="flex flex-col-reverse md:flex-row">
                  <div className="flex flex-col justify-between border-gray-200 md:w-80 md:border-r dark:border-gray-900">
                    <div className="flex-1 grow">
                      <div className="border-t border-gray-200 p-6 md:border-none dark:border-gray-900">
                        <div className="flex items-center space-x-3">
                          <div className="inline-flex shrink-0 items-center justify-center rounded bg-gray-100 p-3 dark:bg-gray-800">
                            <RiAppsFill
                              className="size-5 text-gray-700 dark:text-gray-300"
                              aria-hidden={true}
                            />
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-50">
                              Astro Analytics
                            </h3>
                            <p className="mt-0.5 text-sm text-gray-700 dark:text-gray-300">
                              Lorem ipsum dolor sit amet
                            </p>
                          </div>
                        </div>
                        <Divider />
                        <h4 className="text-sm font-medium text-gray-900 dark:text-gray-50">
                          Description:
                        </h4>
                        <p className="mt-1 text-sm/6 text-gray-600 dark:text-gray-400">
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr.
                        </p>
                        <h4 className="mt-6 text-sm font-medium text-gray-900 dark:text-gray-50">
                          Supported functionality:
                        </h4>
                        <p className="mt-1 text-sm/6 text-gray-600 dark:text-gray-400">
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod.
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between border-t border-gray-200 p-6 dark:border-gray-900">
                      <Button variant="secondary">Cancel</Button>
                      <Button type="submit">Connect</Button>
                    </div>
                  </div>
                  <div className="flex-1 space-y-6 p-6 md:px-6 md:pt-6 md:pb-20">
                    <div>
                      <div className="flex items-center space-x-3">
                        <div className="inline-flex size-6 items-center justify-center rounded-md bg-gray-100 text-sm text-gray-900 dark:bg-gray-800 dark:text-gray-50">
                          1
                        </div>
                        <Label htmlFor="connection" className="font-medium">
                          Choose a connection
                        </Label>
                      </div>
                      <Select defaultValue="1">
                        <SelectTrigger
                          name="connection"
                          id="connection"
                          className="mt-4"
                        >
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">postgres_live</SelectItem>
                          <SelectItem value="2">postgres_test</SelectItem>
                          <SelectItem value="3">bigQuery_live</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <div className="flex items-center space-x-3">
                        <div className="inline-flex size-6 items-center justify-center rounded-md bg-gray-100 text-sm text-gray-900 dark:bg-gray-800 dark:text-gray-50">
                          2
                        </div>
                        <Label htmlFor="dataset" className="font-medium">
                          Select dataset
                        </Label>
                      </div>
                      <Select defaultValue="1">
                        <SelectTrigger
                          name="dataset"
                          id="dataset"
                          className="mt-4"
                        >
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">starterkit_sales</SelectItem>
                          <SelectItem value="2">
                            starterkit_ecommerce
                          </SelectItem>
                          <SelectItem value="3">starterkit_logs</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <div className="flex items-center space-x-3">
                        <div className="inline-flex size-6 items-center justify-center rounded-md bg-gray-100 text-sm text-gray-900 dark:bg-gray-800 dark:text-gray-50">
                          3
                        </div>
                        <Label htmlFor="metrics" className="font-medium">
                          Select metrics to track
                        </Label>
                      </div>
                      <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                      </p>
                      <Select defaultValue="2">
                        <SelectTrigger
                          name="metrics"
                          id="metrics"
                          className="mt-4"
                        >
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">all options</SelectItem>
                          <SelectItem value="2">log & health data</SelectItem>
                          <SelectItem value="3">product usage data</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <div className="flex items-center space-x-3">
                        <div className="inline-flex size-6 items-center justify-center rounded-md bg-gray-100 text-sm text-gray-900 dark:bg-gray-800 dark:text-gray-50">
                          4
                        </div>
                        <Label htmlFor="import-method" className="font-medium">
                          Select import method
                        </Label>
                      </div>
                      <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                      </p>
                      <Select defaultValue="1">
                        <SelectTrigger
                          name="import-method"
                          id="import-method"
                          className="mt-4"
                        >
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">direct query</SelectItem>
                          <SelectItem value="2">import</SelectItem>
                          <SelectItem value="3">
                            direct query (incremental load)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </>
      ) : null}
    </div>
  )
}
```


```example/dialogs-dialog-07.tsx
import React from "react"
import { RiArrowDownSLine, RiCloseLine } from "@remixicon/react"

import { Button } from "@/atom/Button"
import { Card } from "@/atom/Card"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/atom/Dialog"
import { Divider } from "@/atom/Divider"
import { Input } from "@/atom/Input"
import { Label } from "@/atom/Label"
import { Textarea } from "@/atom/Textarea"

export default function Example() {
  const [showDemo, setShowDemo] = React.useState(false)
  return (
    <div className="obfuscate">
      {/* first card only for demo purpose */}
      <Card className="sm:mx-auto sm:max-w-lg">
        <div className="absolute top-3 right-3">
          <Button
            variant="ghost"
            className="!p-2 !text-gray-400 hover:!text-gray-500 dark:!text-gray-600 hover:dark:!text-gray-500"
            aria-label="close"
          >
            <RiCloseLine className="size-5 shrink-0" />
          </Button>
        </div>
        <form action="#" method="POST">
          <h3 className="font-semibold text-gray-900 dark:text-gray-50">
            Create saved query
          </h3>
          <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
            Create a new saved query to easily access and reuse your frequently
            used database requests.
          </p>
          <div className="mt-6">
            <Label htmlFor="name" className="font-medium">
              Name
            </Label>
            <Input id="name" name="name" type="name" className="mt-2" />
          </div>
          <div className="mt-6">
            <Label htmlFor="Description" className="font-medium">
              Description
            </Label>
            <Textarea
              id="Description"
              name="Description"
              className="mt-2"
              placeholder="Description..."
            />
          </div>
          <div className="mt-6 flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
            <Button className="mt-2 w-full sm:mt-0 sm:w-fit" variant="ghost">
              Cancel
            </Button>
            <Button type="submit" className="w-full sm:w-fit">
              Create
            </Button>
          </div>
        </form>
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
              <DialogContent>
                <DialogClose asChild>
                  <Button
                    className="!absolute !top-3 !right-3 !p-2 !text-gray-400 hover:!text-gray-500 dark:!text-gray-600 hover:dark:!text-gray-500"
                    variant="ghost"
                  >
                    <RiCloseLine className="size-5 shrink-0" />
                  </Button>
                </DialogClose>
                <form action="#" method="POST">
                  <DialogHeader>
                    <DialogTitle className="text-base">
                      Create saved query
                    </DialogTitle>
                    <DialogDescription className="mt-1 text-sm/6">
                      Create a new saved query to easily access and reuse your
                      frequently used database requests.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-6">
                    <Label htmlFor="name" className="font-medium">
                      Name
                    </Label>
                    <Input id="name" name="name" type="name" className="mt-2" />
                  </div>
                  <div className="mt-6">
                    <Label htmlFor="Description" className="font-medium">
                      Description
                    </Label>
                    <Textarea
                      id="Description"
                      name="Description"
                      className="mt-2"
                      placeholder="Description..."
                    />
                  </div>
                  <DialogFooter className="mt-6">
                    <DialogClose asChild>
                      <Button
                        className="mt-2 w-full sm:mt-0 sm:w-fit"
                        variant="ghost"
                      >
                        Cancel
                      </Button>
                    </DialogClose>
                    <DialogClose asChild>
                      <Button type="submit" className="w-full sm:w-fit">
                        Create
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </>
      ) : null}
    </div>
  )
}
```


