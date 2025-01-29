"use client"

import { cx } from "@/lib/utils"

import { Card } from "@/atom/Card"
import { SparkAreaChart } from "@/atom/SparkChart"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/atom/Tabs"

const data = [
  //array-start
  {
    date: "Nov 24, 2023",
    GOOG: 156.2,
    AMZN: 68.5,
    SPOT: 71.8,
    AAPL: 149.1,
    MSFT: 205.3,
    TSLA: 1050.6,
  },
  {
    date: "Nov 25, 2023",
    GOOG: 152.5,
    AMZN: 69.3,
    SPOT: 67.2,
    AAPL: 155.1,
    MSFT: 223.1,
    TSLA: 945.8,
  },
  {
    date: "Nov 26, 2023",
    GOOG: 148.7,
    AMZN: 69.8,
    SPOT: 61.5,
    AAPL: 160.1,
    MSFT: 240.9,
    TSLA: 839.4,
  },
  {
    date: "Nov 27, 2023",
    GOOG: 155.3,
    AMZN: 73.5,
    SPOT: 57.9,
    AAPL: 165.1,
    MSFT: 254.7,
    TSLA: 830.2,
  },
  {
    date: "Nov 28, 2023",
    GOOG: 160.1,
    AMZN: 75.2,
    SPOT: 59.6,
    AAPL: 148.1,
    MSFT: 308.5,
    TSLA: 845.7,
  },
  {
    date: "Nov 29, 2023",
    GOOG: 175.6,
    AMZN: 89.2,
    SPOT: 57.3,
    AAPL: 149.2,
    MSFT: 341.4,
    TSLA: 950.2,
  },
  {
    date: "Nov 30, 2023",
    GOOG: 180.2,
    AMZN: 92.7,
    SPOT: 59.8,
    AAPL: 139.1,
    MSFT: 378.1,
    TSLA: 995.9,
  },
  {
    date: "Dec 01, 2023",
    GOOG: 185.5,
    AMZN: 95.3,
    SPOT: 62.4,
    AAPL: 122.4,
    MSFT: 320.3,
    TSLA: 1060.4,
  },
  {
    date: "Dec 02, 2023",
    GOOG: 182.3,
    AMZN: 93.8,
    SPOT: 60.7,
    AAPL: 143.6,
    MSFT: 356.5,
    TSLA: 965.8,
  },
  {
    date: "Dec 03, 2023",
    GOOG: 180.7,
    AMZN: 91.6,
    SPOT: 58.9,
    AAPL: 144.3,
    MSFT: 340.7,
    TSLA: 970.3,
  },
  {
    date: "Dec 04, 2023",
    GOOG: 178.5,
    AMZN: 89.7,
    SPOT: 56.2,
    AAPL: 152.4,
    MSFT: 365.9,
    TSLA: 975.9,
  },
  {
    date: "Dec 05, 2023",
    GOOG: 176.2,
    AMZN: 87.5,
    SPOT: 54.8,
    AAPL: 156.1,
    MSFT: 375.1,
    TSLA: 964.6,
  },
  {
    date: "Dec 06, 2023",
    GOOG: 174.8,
    AMZN: 85.3,
    SPOT: 53.4,
    AAPL: 158.6,
    MSFT: 340.3,
    TSLA: 960.4,
  },
  {
    date: "Dec 07, 2023",
    GOOG: 178.0,
    AMZN: 88.2,
    SPOT: 55.2,
    AAPL: 163.3,
    MSFT: 335.5,
    TSLA: 955.3,
  },
  {
    date: "Dec 08, 2023",
    GOOG: 180.6,
    AMZN: 90.5,
    SPOT: 56.8,
    AAPL: 169.6,
    MSFT: 310.7,
    TSLA: 950.3,
  },
  {
    date: "Dec 09, 2023",
    GOOG: 182.4,
    AMZN: 92.8,
    SPOT: 58.4,
    AAPL: 178.6,
    MSFT: 300.9,
    TSLA: 845.4,
  },
  {
    date: "Dec 10, 2023",
    GOOG: 179.7,
    AMZN: 90.2,
    SPOT: 57.0,
    AAPL: 183.2,
    MSFT: 290.1,
    TSLA: 1011.6,
  },
  {
    date: "Dec 11, 2023",
    GOOG: 154.2,
    AMZN: 88.7,
    SPOT: 55.6,
    AAPL: 199.6,
    MSFT: 291.3,
    TSLA: 1017.9,
  },
  {
    date: "Dec 12, 2023",
    GOOG: 151.9,
    AMZN: 86.5,
    SPOT: 53.9,
    AAPL: 201.1,
    MSFT: 293.5,
    TSLA: 940.3,
  },
  {
    date: "Dec 13, 2023",
    GOOG: 149.3,
    AMZN: 83.7,
    SPOT: 52.1,
    AAPL: 169.1,
    MSFT: 301.7,
    TSLA: 900.8,
  },
  {
    date: "Dec 14, 2023",
    GOOG: 148.8,
    AMZN: 81.4,
    SPOT: 50.5,
    AAPL: 171.6,
    MSFT: 321.9,
    TSLA: 780.4,
  },
  {
    date: "Dec 15, 2023",
    GOOG: 145.5,
    AMZN: 79.8,
    SPOT: 48.9,
    AAPL: 178.1,
    MSFT: 328.1,
    TSLA: 765.1,
  },
  {
    date: "Dec 16, 2023",
    GOOG: 140.2,
    AMZN: 84.5,
    SPOT: 50.2,
    AAPL: 192.6,
    MSFT: 331.3,
    TSLA: 745.9,
  },
  {
    date: "Dec 17, 2023",
    GOOG: 143.8,
    AMZN: 82.1,
    SPOT: 49.6,
    AAPL: 201.2,
    MSFT: 373.5,
    TSLA: 741.8,
  },
  {
    date: "Dec 18, 2023",
    GOOG: 148.5,
    AMZN: 86.9,
    SPOT: 51.3,
    AAPL: 209.8,
    MSFT: 381.7,
    TSLA: 739.8,
  },
  //array-end
]

const tabs = [
  //array-start
  {
    name: "Trending",
    stocks: [
      {
        ticker: "AMZN",
        description: "Amazon",
        value: "$86.9",
        change: "+0.92%",
        changeType: "positive",
      },
      {
        ticker: "GOOG",
        description: "Alphabet, Inc",
        value: "$148.5",
        change: "-0.38%",
        changeType: "negative",
      },
      {
        ticker: "AAPL",
        description: "Apple",
        value: "$209.8",
        change: "+1.67%",
        changeType: "positive",
      },
    ],
  },
  {
    name: "Watchlist",
    stocks: [
      {
        ticker: "SPOT",
        description: "Spotify",
        value: "$51.3",
        change: "-0.25%",
        changeType: "negative",
      },
      {
        ticker: "MSFT",
        description: "Microsoft",
        value: "$381.7",
        change: "+2.45%",
        changeType: "positive",
      },
      {
        ticker: "TSLA",
        description: "Tesla, Inc.",
        value: "$739.8",
        change: "-2.12%",
        changeType: "negative",
      },
    ],
  },
  //array-end
]

export default function Example() {
  return (
    <div className="obfuscate">
      <Card className="sm:mx-auto sm:max-w-md">
        <p className="text-sm text-gray-500 dark:text-gray-500">Watchlist</p>
        <p className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
          $44,567.10
        </p>
        <p className="mt-1 text-sm font-medium">
          <span className="text-emerald-700 dark:text-emerald-500">
            +$451.30 (1.2%)
          </span>{" "}
          <span className="font-normal text-gray-500 dark:text-gray-500">
            Today
          </span>
        </p>
        <Tabs defaultValue="Trending" className="mt-6">
          <TabsList className="grid w-full grid-cols-2" variant="solid">
            {tabs.map((tab) => (
              <TabsTrigger key={tab.name} value={tab.name}>
                {tab.name}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="mt-8">
            {tabs.map((tab) => (
              <TabsContent key={tab.name} value={tab.name}>
                <ul role="list" className="space-y-6">
                  {tab.stocks.map((stock) => (
                    <li
                      key={stock.ticker}
                      className="flex items-center justify-between space-x-6"
                    >
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
                          {stock.description}
                        </p>
                        <p
                          className={cx(
                            stock.changeType === "positive"
                              ? "text-emerald-700 dark:text-emerald-500"
                              : "text-red-700 dark:text-red-500",
                            "flex items-center space-x-1 text-sm",
                          )}
                        >
                          <span className="font-medium">{stock.value}</span>
                          <span>({stock.change})</span>
                        </p>
                      </div>
                      <SparkAreaChart
                        data={data}
                        index="date"
                        categories={[stock.ticker]}
                        colors={
                          stock.changeType === "positive"
                            ? ["emerald"]
                            : ["red"]
                        }
                        className="h-10 w-36 flex-none sm:w-44"
                      />
                    </li>
                  ))}
                </ul>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </Card>
    </div>
  )
}
