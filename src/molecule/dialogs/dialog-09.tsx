import React from "react"

import { Button } from "../../atom/Button"
import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "../../atom/Drawer"
import { Input } from "../../atom/Input"
import { Label } from "../../atom/Label"
import { RadioCardGroup, RadioCardItem } from "../../atom/RadioCardGroup"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../atom/Select"
import { Textarea } from "../../atom/Textarea"

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
