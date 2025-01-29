"use client"

import { BarList } from "../../atom/BarList"
import { Card } from "../../atom/Card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../atom/Tabs"

const country = [
  //array-start
  {
    name: "United States of America",
    value: 2422,
  },
  {
    name: "India",
    value: 1560,
  },
  {
    name: "Germany",
    value: 680,
  },
  {
    name: "Brazil",
    value: 580,
  },
  {
    name: "United Kingdom",
    value: 510,
  },
  //array-end
]

const city = [
  //array-start
  {
    name: "London",
    value: 1393,
  },
  {
    name: "New York",
    value: 1219,
  },
  {
    name: "Mumbai",
    value: 921,
  },
  {
    name: "Berlin",
    value: 580,
  },
  {
    name: "San Francisco",
    value: 492,
  },
  //array-end
]

const tabs = [
  {
    name: "Country",
    data: country,
  },
  {
    name: "City",
    data: city,
  },
]

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`

export default function Example() {
  return (
    <div className="obfuscate">
      <Card className="sm:mx-auto sm:max-w-lg">
        <Tabs defaultValue={tabs[1].name}>
          <div className="flex items-center justify-between">
            <p className="font-medium text-gray-900 dark:text-gray-50">
              Locations
            </p>
            <TabsList
              variant="solid"
              className="!overflow-visible !bg-transparent !p-0 dark:!bg-transparent"
            >
              {tabs.map((item) => (
                <TabsTrigger
                  value={item.name}
                  className="rounded-md data-[state=active]:ring-1 data-[state=active]:ring-inset data-[state=active]:ring-gray-200 data-[state=active]:dark:ring-gray-800"
                >
                  {item.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          <div className="mt-6">
            {tabs.map((item) => (
              <TabsContent key={item.name} value={item.name}>
                <BarList data={item.data} valueFormatter={valueFormatter} />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </Card>
    </div>
  )
}
