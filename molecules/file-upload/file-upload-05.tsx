import {
  RiCloseCircleLine,
  RiDeleteBin7Line,
  RiFileExcel2Line,
  RiFileLine,
  RiFilePdf2Line,
  RiFileTextLine,
} from "@remixicon/react"

import { ProgressBar } from "../../atoms/ProgressBar"

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="sm:mx-auto sm:max-w-lg">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
          File Upload
        </h3>
        <div className="mt-4 flex justify-center rounded-lg border border-dashed border-gray-300 px-6 py-16 dark:border-gray-800">
          <div>
            <RiFileLine
              className="mx-auto size-12 text-gray-400 dark:text-gray-500"
              aria-hidden={true}
            />
            <div className="mt-4 flex text-sm/6 text-gray-700 dark:text-gray-300">
              <p>Drag and drop or</p>
              <label
                htmlFor="file-upload-5"
                className="relative cursor-pointer rounded-md pl-1 font-medium text-blue-500 hover:underline hover:underline-offset-4 dark:text-blue-500"
              >
                <span>choose file</span>
                <input
                  id="file-upload-5"
                  name="file-upload-5"
                  type="file"
                  className="sr-only"
                />
              </label>
              <p className="pl-1">to upload</p>
            </div>
            <p className="text-center text-xs/5 text-gray-500 dark:text-gray-500">
              XLSX, XLS, CSV up to 25MB
            </p>
          </div>
        </div>
        <h4 className="mt-6 text-sm text-gray-500 dark:text-gray-500">
          In Progress
        </h4>
        <ul
          role="list"
          className="mt-2 divide-y divide-gray-200 text-sm dark:divide-gray-800"
        >
          <li className="py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <RiFileExcel2Line
                  className="size-7 shrink-0 text-gray-500 dark:text-gray-500"
                  aria-hidden={true}
                />
                <div>
                  <p className="text-xs font-medium text-gray-900 dark:text-gray-50">
                    Revenue_Q1_2024.xlsx
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    12.9 MB
                  </p>
                </div>
              </div>
              <button
                type="button"
                className="text-gray-400 hover:text-gray-500 dark:text-gray-600 hover:dark:text-gray-500"
                aria-label="Cancel"
              >
                <RiCloseCircleLine
                  className="size-5 shrink-0"
                  aria-hidden={true}
                />
              </button>
            </div>
            <div className="mt-2 flex items-center space-x-3">
              <ProgressBar value={71} className="[&>*]:h-1.5" />
              <span className="text-xs text-gray-500 dark:text-gray-500">
                71%
              </span>
            </div>
          </li>
          <li className="py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <RiFileExcel2Line
                  className="size-7 shrink-0 text-gray-500 dark:text-gray-500"
                  aria-hidden={true}
                />
                <div>
                  <p className="text-xs font-medium text-gray-900 dark:text-gray-50">
                    Revenue_Q2_2024.xlsx
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    22.1 MB
                  </p>
                </div>
              </div>
              <button
                type="button"
                className="text-gray-400 hover:text-gray-500 dark:text-gray-600 hover:dark:text-gray-500"
                aria-label="Cancel"
              >
                <RiCloseCircleLine
                  className="size-5 shrink-0"
                  aria-hidden={true}
                />
              </button>
            </div>
            <div className="mt-2 flex w-full items-center space-x-3">
              <ProgressBar value={21} className="[&>*]:h-1.5" />
              <span className="text-xs text-gray-500 dark:text-gray-500">
                21%
              </span>
            </div>
          </li>
        </ul>
        <h4 className="mt-6 text-sm text-gray-500 dark:text-gray-500">
          Completed Uploads
        </h4>
        <ul
          role="list"
          className="mt-2 divide-y divide-gray-200 dark:divide-gray-800"
        >
          <li className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-2.5">
              <RiFilePdf2Line
                className="size-7 shrink-0 text-gray-500 dark:text-gray-500"
                aria-hidden={true}
              />
              <div>
                <p className="text-xs font-medium text-gray-900 dark:text-gray-50">
                  Yearly_Report_2023.pdf
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  1.5 MB
                </p>
              </div>
            </div>
            <button
              type="button"
              className="text-red-500 hover:text-red-600 dark:text-red-500 hover:dark:text-red-400"
              aria-label="Remove"
            >
              <RiDeleteBin7Line
                className="size-5 shrink-0"
                aria-hidden={true}
              />
            </button>
          </li>
          <li className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-2.5">
              <RiFileTextLine
                className="size-7 shrink-0 text-gray-500 dark:text-gray-500"
                aria-hidden={true}
              />
              <div>
                <p className="text-xs font-medium text-gray-900 dark:text-gray-50">
                  Forecast_Q3_2024.csv
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  2.9 MB
                </p>
              </div>
            </div>
            <button
              type="button"
              className="text-red-500 hover:text-red-600 dark:text-red-500 hover:dark:text-red-400"
              aria-label="Remove"
            >
              <RiDeleteBin7Line
                className="size-5 shrink-0"
                aria-hidden={true}
              />
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}
