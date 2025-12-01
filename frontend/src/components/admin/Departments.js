import CustomInput from "../custom/Input"
import { CustomDialog } from "../custom/dialog/Dialog"
import { CustomTable } from "../custom/tables"
import { deptHeaderItems, dummyTableRows } from "@/constants/adminDashboard"

const Departments = () => {  
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-start justify-between">
        <h1 className="text-xl">Manage Departments</h1>
        
        <CustomDialog
          buttonText="Add department"
          dialogTitle="Add Department"
          fields={
            <div className="grid gap-4">
              <CustomInput id={'deptName'} label="Department Name" />
              <CustomInput id={'deptHead'} label="Department Head" />
            </div>
          }
        />
      </div>

      <div className="px-4">
        <CustomTable
          headerItems={deptHeaderItems}
          rowData={dummyTableRows}
        />
      </div>
    </div>
  )
}

export default Departments
