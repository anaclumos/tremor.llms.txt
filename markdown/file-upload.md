```example/file-upload-file-upload-02.tsx
import React from "react"
import { RiDeleteBinLine, RiFileLine } from "@remixicon/react"
import { useDropzone } from "react-dropzone"

import { cx } from "@/lib/utils"

import { Button } from "@/atom/Button"
import { Divider } from "@/atom/Divider"
import { Input } from "@/atom/Input"
import { Label } from "@/atom/Label"
import { SelectNative } from "@/atom/SelectNative"

// This example requires 'react-dropzone'

export default function FileUpload() {
  const [files, setFiles] = React.useState<File[]>([])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => setFiles(acceptedFiles as File[]),
  })

  const filesList = files.map((file) => (
    <li
      key={file.name}
      className="relative rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950"
    >
      <div className="absolute top-1/2 right-4 -translate-y-1/2">
        <button
          type="button"
          className="rounded-md p-2 text-gray-400 hover:text-gray-500 dark:text-gray-600 hover:dark:text-gray-500"
          aria-label="Remove file"
          onClick={() =>
            setFiles((prevFiles) =>
              prevFiles.filter((prevFile) => prevFile.name !== file.name),
            )
          }
        >
          <RiDeleteBinLine className="size-5 shrink-0" aria-hidden={true} />
        </button>
      </div>
      <div className="flex items-center space-x-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-gray-100 dark:bg-gray-800">
          <RiFileLine
            className="size-5 text-gray-700 dark:text-gray-300"
            aria-hidden={true}
          />
        </span>
        <div>
          <p className="text-xs font-medium text-gray-900 dark:text-gray-50">
            {file.name}
          </p>
          <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-500">
            {file.size} bytes
          </p>
        </div>
      </div>
    </li>
  ))
  return (
    <>
      <div className="sm:mx-auto sm:max-w-3xl">
        <form>
          <h2 className="font-semibold text-gray-900 dark:text-gray-50">
            Set up your first cloud storage
          </h2>
          <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-6">
            <div className="col-span-full sm:col-span-3">
              <Label htmlFor="bucket-name" className="font-medium">
                Bucket name
              </Label>
              <Input
                type="text"
                id="bucket-name"
                name="bucket-name"
                placeholder="Bucket name"
                className="mt-2"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <Label htmlFor="visibility" className="font-medium">
                Visibility
              </Label>
              <SelectNative
                id="visibility"
                name="visibility"
                defaultValue="private"
                className="mt-2"
                disabled
              >
                <option value="private">Private</option>
                <option value="public">Public</option>
              </SelectNative>
              <p className="mt-2 text-xs text-gray-500 dark:text-gray-500">
                Bucket visibility can only be changed by system admin.
              </p>
            </div>
            <div className="col-span-full">
              <Label htmlFor="file-upload-2" className="font-medium">
                File(s) upload
              </Label>
              <div
                {...getRootProps()}
                className={cx(
                  isDragActive
                    ? "border-blue-500 bg-blue-50 dark:border-blue-500 dark:bg-blue-950"
                    : "",
                  "mt-2 flex justify-center rounded-lg border border-dashed border-gray-300 px-6 py-20 dark:border-gray-800",
                )}
              >
                <div>
                  <RiFileLine
                    className="mx-auto size-12 text-gray-400 dark:text-gray-600"
                    aria-hidden={true}
                  />
                  <div className="mt-4 flex text-sm/6 text-gray-500 dark:text-gray-500">
                    <p>Drag and drop or</p>
                    <label
                      htmlFor="file"
                      className="relative cursor-pointer rounded-md pl-1 font-medium text-blue-500 hover:underline hover:underline-offset-4 dark:text-blue-500"
                    >
                      <span>choose file(s)</span>
                      <input
                        {...getInputProps()}
                        id="file-upload-2"
                        name="file-upload-2"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">to upload</p>
                  </div>
                </div>
              </div>
              <p className="mt-2 text-xs/5 text-gray-500 sm:flex sm:items-center sm:justify-between dark:text-gray-500">
                <span>All file types are allowed to upload.</span>
                <span className="pl-1 sm:pl-0">Max. size per file: 50MB</span>
              </p>
              {filesList.length > 0 && (
                <>
                  <h4 className="mt-6 text-sm font-medium text-gray-900 dark:text-gray-50">
                    File(s) to upload
                  </h4>
                  <ul role="list" className="mt-4 space-y-4">
                    {filesList}
                  </ul>
                </>
              )}
            </div>
          </div>
          <Divider className="my-10" />
          <div className="flex items-center justify-end space-x-3">
            <Button variant="secondary">Cancel</Button>
            <Button type="submit">Upload</Button>
          </div>
        </form>
      </div>
    </>
  )
}
```


```example/file-upload-file-upload-03.tsx
import { RiCloseLine, RiFileExcelLine, RiFileLine } from "@remixicon/react"

import { Button } from "@/atom/Button"
import { ProgressBar } from "@/atom/ProgressBar"

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
            <div className="absolute top-1 right-1">
              <button
                type="button"
                className="rounded-md p-2 text-gray-400 hover:text-gray-500 dark:text-gray-600 hover:dark:text-gray-500"
                aria-label="Remove"
              >
                <RiCloseLine className="size-5 shrink-0" aria-hidden={true} />
              </button>
            </div>
            <div className="flex items-center space-x-2.5">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-white ring-1 shadow-sm ring-gray-200 ring-inset dark:bg-gray-950 dark:ring-gray-800">
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
```


```example/file-upload-file-upload-01.tsx
import { Button } from "@/atom/Button"
import { Input } from "@/atom/Input"
import { Label } from "@/atom/Label"

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="sm:mx-auto sm:max-w-lg">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
          Set up your first workspace
        </h3>
        <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
        </p>
        <form className="mt-4">
          <div className="space-y-6">
            <div>
              <Label htmlFor="workspace-name" className="font-medium">
                Workspace
                <span className="text-red-500 dark:text-red-500">*</span>
              </Label>
              <Input
                type="text"
                id="workspace-name"
                name="workspace-name"
                autoComplete="workspace-name"
                placeholder="Workspace name"
                className="mt-2"
                required
              />
            </div>
            <div>
              <Label htmlFor="file-1" className="font-medium">
                Upload file
                <span className="text-red-500 dark:text-red-500">*</span>
              </Label>
              <Input
                id="file-1"
                name="file-1"
                type="file"
                className="mt-2"
                accept=".csv, .xlsx, .xls"
              />
              <p className="mt-2 text-xs text-gray-500 dark:text-gray-500">
                You are only allowed to upload CSV, XLSX or XLS files.
              </p>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-end space-x-3">
            <Button variant="secondary">Cancel</Button>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  )
}
```


```example/file-upload-file-upload-04.tsx
import { RiCloseLine, RiFileExcelLine, RiUpload2Line } from "@remixicon/react"

import { Button } from "@/atom/Button"

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
                  htmlFor="file-upload-4"
                  className="relative cursor-pointer rounded-md pl-1 font-medium text-blue-500 hover:underline hover:underline-offset-4 dark:text-blue-500"
                >
                  <span>choose file</span>
                  <input
                    id="file-upload-4"
                    name="file-upload-4"
                    type="file"
                    className="sr-only"
                  />
                </label>
                <p className="pl-1">to upload</p>
              </div>
            </div>
          </div>
          <p className="mt-2 flex items-center justify-between text-xs/5 text-gray-500 dark:text-gray-500">
            Recommended max. size: 10 MB, Accepted file types: XLSX, XLS, CSV.
          </p>
          <div className="relative mt-8 rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
            <div className="absolute top-1 right-1">
              <button
                type="button"
                className="rounded-md p-2 text-gray-400 hover:text-gray-500 dark:text-gray-600 hover:dark:text-gray-500"
                aria-label="Remove"
              >
                <RiCloseLine className="size-5 shrink-0" aria-hidden={true} />
              </button>
            </div>
            <div className="flex items-center space-x-2.5">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-white ring-1 shadow-sm ring-gray-200 ring-inset dark:bg-gray-950 dark:ring-gray-800">
                <RiFileExcelLine
                  className="size-5 text-gray-700 dark:text-gray-300"
                  aria-hidden={true}
                />
              </span>
              <div className="w-full">
                <p className="text-xs font-medium text-gray-900 dark:text-gray-50">
                  Revenue_Q1_2024.xlsx
                </p>
                <p className="mt-0.5 flex justify-between text-xs text-gray-500 dark:text-gray-500">
                  <span>3.1 MB</span>
                  <span>Completed</span>
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
```


```example/file-upload-file-upload-05.tsx
import {
  RiCloseCircleLine,
  RiDeleteBin7Line,
  RiFileExcel2Line,
  RiFileLine,
  RiFilePdf2Line,
  RiFileTextLine,
} from "@remixicon/react"

import { ProgressBar } from "@/atom/ProgressBar"

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
```


```example/file-upload-file-upload-07.tsx
import {
  RiCloseLine,
  RiErrorWarningFill,
  RiFileCloseLine,
  RiUpload2Line,
} from "@remixicon/react"

import { Button } from "@/atom/Button"
import { ProgressBar } from "@/atom/ProgressBar"

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="sm:mx-auto sm:max-w-lg">
        <form>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
            File Upload
          </h3>
          <div className="tranisition-all mt-4 flex justify-center space-x-4 rounded-lg border border-dashed border-gray-300 px-6 py-10 dark:border-gray-800">
            <div className="sm:flex sm:items-center sm:space-x-3">
              <RiUpload2Line
                className="mx-auto size-8 text-gray-400 sm:mx-0 sm:size-6 dark:text-gray-500"
                aria-hidden={true}
              />
              <div className="mt-4 flex text-sm/6 text-gray-500 sm:mt-0 dark:text-gray-500">
                <p>Drag and drop or</p>
                <label
                  htmlFor="file-upload-7"
                  className="relative cursor-pointer rounded-md pl-1 font-medium text-blue-500 hover:underline hover:underline-offset-4 dark:text-blue-500"
                >
                  <span>choose file</span>
                  <input
                    id="file-upload-7"
                    name="file-upload-7"
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
          <div className="relative mt-4 rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
            <div className="absolute top-1 right-1">
              <button
                type="button"
                className="rounded-md p-2 text-gray-400 hover:text-gray-500 dark:text-gray-600 hover:dark:text-gray-500"
                aria-label="Close"
              >
                <RiCloseLine className="size-5 shrink-0" aria-hidden={true} />
              </button>
            </div>
            <div className="flex items-center space-x-2.5">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-white ring-1 shadow-sm ring-gray-200 ring-inset dark:bg-gray-950 dark:ring-gray-800">
                <RiFileCloseLine
                  className="size-5 text-gray-700 dark:text-gray-300"
                  aria-hidden={true}
                />
              </span>
              <div className="w-full">
                <p className="text-xs font-medium text-gray-900 dark:text-gray-50">
                  Revenue_Q1_2024.xlsx
                </p>
                <p className="mt-0.5 flex justify-between text-xs text-red-500 dark:text-red-500">
                  <span>12.3 MB</span>
                  <span className="font-medium">Failed</span>
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-center space-x-1.5">
              <RiErrorWarningFill
                className="size-5 shrink-0 text-red-500 dark:text-red-500"
                aria-hidden={true}
              />
              <span className="text-xs text-red-500 dark:text-red-500">
                The file exceeds the 10 MB size limit.
              </span>
            </div>
            <ProgressBar
              value={89}
              className="mt-2 [&>*]:h-1.5"
              variant="error"
            />
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
```


```example/file-upload-file-upload-06.tsx
import {
  RiCloseLine,
  RiErrorWarningFill,
  RiFileCloseLine,
  RiUpload2Line,
} from "@remixicon/react"

import { Button } from "@/atom/Button"

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
            <div className="absolute top-1 right-1">
              <button
                type="button"
                className="rounded-md p-2 text-gray-400 hover:text-gray-500 dark:text-gray-600 hover:dark:text-gray-500"
                aria-label="Remove"
              >
                <RiCloseLine className="size-5 shrink-0" aria-hidden={true} />
              </button>
            </div>
            <div className="flex items-center space-x-2.5">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-white ring-1 shadow-sm ring-gray-200 ring-inset dark:bg-gray-950 dark:ring-gray-800">
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
```


