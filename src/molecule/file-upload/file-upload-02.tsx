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
