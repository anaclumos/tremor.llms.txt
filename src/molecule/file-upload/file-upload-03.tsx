import { RiCloseLine, RiFileExcelLine, RiFileLine } from "@remixicon/react"

import { Button } from "../../atom/Button"
import { ProgressBar } from "../../atom/ProgressBar"

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="sm:mx-auto sm:max-w-lg">
        <form>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
            File Upload
          </h3>
          <div className="mt-4 flex justify-center rounded-lg border border-dashed border-gray-300 px-6 py-20 dark:border-gray-800">
            <div>
              <RiFileLine
                className="mx-auto size-12 text-gray-400 dark:text-gray-500"
                aria-hidden={true}
              />
              <div className="mt-4 flex text-sm/6 text-gray-500 dark:text-gray-500">
                <p>Drag and drop or</p>
                <label
                  htmlFor="file-upload-3"
                  className="relative cursor-pointer rounded-md pl-1 font-medium text-blue-500 hover:underline hover:underline-offset-4 dark:text-blue-500"
                >
                  <span>choose file</span>
                  <input
                    id="file-upload-3"
                    name="file-upload-3"
                    type="file"
                    className="sr-only"
                    accept=".csv, .xlsx, .xls"
                  />
                </label>
                <p className="pl-1">to upload</p>
              </div>
            </div>
          </div>
          <p className="mt-2 text-xs/5 text-gray-500 sm:flex sm:items-center sm:justify-between dark:text-gray-500">
            <span>Accepted file types: CSV, XLSX or XLS files.</span>
            <span className="pl-1 sm:pl-0">Max. size: 10MB</span>
          </p>
          <div className="relative mt-8 rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
            <div className="absolute right-1 top-1">
              <button
                type="button"
                className="rounded-md p-2 text-gray-400 hover:text-gray-500 dark:text-gray-600 hover:dark:text-gray-500"
                aria-label="Remove"
              >
                <RiCloseLine className="size-5 shrink-0" aria-hidden={true} />
              </button>
            </div>
            <div className="flex items-center space-x-2.5">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-white shadow-sm ring-1 ring-inset ring-gray-200 dark:bg-gray-950 dark:ring-gray-800">
                <RiFileExcelLine
                  className="size-5 text-gray-700 dark:text-gray-300"
                  aria-hidden={true}
                />
              </span>
              <div>
                <p className="text-xs font-medium text-gray-900 dark:text-gray-50">
                  Revenue_Q1_2024.xlsx
                </p>
                <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-500">
                  3.1 MB
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-center space-x-3">
              <ProgressBar value={45} />
              <span className="text-xs text-gray-500 dark:text-gray-500">
                45%
              </span>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-end space-x-3">
            <Button variant="secondary">Cancel</Button>
            <Button type="submit">Upload</Button>
          </div>
        </form>
      </div>
    </div>
  )
}
