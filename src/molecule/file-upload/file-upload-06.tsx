import {
  RiCloseLine,
  RiErrorWarningFill,
  RiFileCloseLine,
  RiUpload2Line,
} from "@remixicon/react"

import { Button } from "../../atom/Button"

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="sm:mx-auto sm:max-w-lg">
        <form>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
            File Upload
          </h3>
          <div className="mt-4 flex justify-center space-x-4 rounded-lg border border-dashed border-gray-300 px-6 py-10 dark:border-gray-800">
            <div className="sm:flex sm:items-center sm:space-x-3">
              <RiUpload2Line
                className="mx-auto size-8 text-gray-400 sm:mx-0 sm:size-6 dark:text-gray-500"
                aria-hidden={true}
              />
              <div className="mt-4 flex text-sm/6 text-gray-500 sm:mt-0 dark:text-gray-500">
                <p>Drag and drop or</p>
                <label
                  htmlFor="file-upload-6"
                  className="relative cursor-pointer rounded-md pl-1 font-medium text-blue-500 hover:underline hover:underline-offset-4 dark:text-blue-500"
                >
                  <span>choose file</span>
                  <input
                    id="file-upload-6"
                    name="file-upload-6"
                    type="file"
                    className="sr-only"
                  />
                </label>
                <p className="pl-1">to upload</p>
              </div>
            </div>
          </div>
          <p className="mt-2 flex items-center justify-between text-xs/5 text-gray-500 dark:text-gray-500">
            Recommended maximum size: 10 MB, Accepted file types: XLSX, XLS,
            CSV.
          </p>
          <div className="mt-6 flex items-center space-x-2.5 rounded-lg bg-red-50 p-4 dark:bg-red-500/10">
            <RiErrorWarningFill
              className="size-5 shrink-0 text-red-500 dark:text-red-500"
              aria-hidden={true}
            />
            <p className="text-sm text-red-600 dark:text-red-500">
              Uploaded file exceeds maximum size of 10 MB
            </p>
          </div>
          <div className="relative mt-4 rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
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
                <RiFileCloseLine
                  className="size-5 text-gray-700 dark:text-gray-300"
                  aria-hidden={true}
                />
              </span>
              <div className="w-full">
                <p className="text-xs font-medium text-gray-900 dark:text-gray-50">
                  Revenue_Q1_2024.xlsx
                </p>
                <p className="mt-0.5 flex justify-between text-xs text-gray-500 dark:text-gray-500">
                  <span>12.3 MB</span>
                  <span className="font-medium text-red-500 dark:text-red-500">
                    Failed
                  </span>
                </p>
              </div>
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
