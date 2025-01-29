"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { RiSplitCellsHorizontal } from "@remixicon/react"

import { Button } from "@/atom/Button"
import { Input } from "@/atom/Input"
import { Label } from "@/atom/Label"
import { Slider } from "@/atom/Slider"

Slider.displayName = SliderPrimitive.Root.displayName

interface Partition {
  name: string
  percentage: number
}

const DiskPartitioner: React.FC = () => {
  const [partitions, setPartitions] = React.useState<Partition[]>([
    { name: "System", percentage: 30 },
    { name: "Data", percentage: 70 },
  ])

  const updatePercentage = (index: number, newPercentage: number) => {
    const otherIndex = index === 0 ? 1 : 0
    const newPartitions = [...partitions]
    newPartitions[index].percentage = newPercentage
    newPartitions[otherIndex].percentage = 100 - newPercentage
    setPartitions(newPartitions)
  }

  const updateName = (index: number, newName: string) => {
    const newPartitions = [...partitions]
    newPartitions[index].name = newName
    setPartitions(newPartitions)
  }

  return (
    <div className="mx-auto max-w-lg">
      <div className="inline-flex rounded-2xl bg-gray-100 shadow-md dark:bg-gray-900">
        <div className="z-10 rounded-2xl bg-gray-50/40 p-1 ring-1 ring-gray-200/50 ring-inset dark:bg-gray-900/40 dark:ring-gray-800/70">
          <div className="overflow-hidden rounded-xl bg-white/95 p-3 ring-1 shadow-black/5 ring-gray-900/5 dark:bg-gray-950/95 dark:ring-gray-700/20">
            <RiSplitCellsHorizontal className="size-7 text-gray-900 dark:text-gray-50" />
          </div>
        </div>
      </div>

      <h2 className="mt-4 mb-2 text-lg font-semibold text-gray-900 dark:text-gray-50">
        Create a partition
      </h2>
      <p className="text-sm leading-6 text-gray-700 dark:text-gray-400">
        Create databases and stores that you can connect to your team's
        projects.
      </p>
      <div className="mt-8 flex flex-col gap-12">
        {partitions.map((partition, index) => (
          <div key={index} className="">
            <div className="mb-4 flex items-center justify-between">
              <Input
                type="text"
                value={partition.name}
                onChange={(e) => updateName(index, e.target.value)}
                className="mr-2 max-w-32 [&>input]:py-1.5"
              />
              <div className="flex items-center space-x-2">
                <Label htmlFor={`partition ${index}`} className="sr-only">
                  Partition One Name
                </Label>
                <div className="relative">
                  <Input
                    id={`partition ${index}`}
                    type="number"
                    className="w-20 [&>input]:py-1.5"
                    value={partition.percentage}
                    onChange={(e) =>
                      updatePercentage(
                        index,
                        Math.min(100, Math.max(0, Number(e.target.value))),
                      )
                    }
                    enableStepper={false}
                    aria-label="partition"
                    aria-describedby="units"
                    min="0"
                    max="100"
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2.5">
                    <span
                      id="units"
                      className="text-gray-500 sm:text-sm dark:text-gray-500"
                    >
                      GB
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <Slider
              value={[partition.percentage]}
              onValueChange={(value) => updatePercentage(index, value[0])}
              max={100}
              step={1}
              className="w-full"
            />
          </div>
        ))}
      </div>
      <div className="mt-10 flex justify-end gap-2">
        <Button variant="secondary">Cancel</Button>
        <Button>Apply changes</Button>
      </div>
    </div>
  )
}

export default DiskPartitioner
