import { Button } from "../../atoms/Button"
import { Input } from "../../atoms/Input"
import { Label } from "../../atoms/Label"

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
