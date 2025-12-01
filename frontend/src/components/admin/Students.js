import CustomInput from "../custom/Input"
import { CustomDialog } from "../custom/dialog/Dialog"
import { CustomTable } from "../custom/tables"
import { dummyTableRows, studentHeaderItems } from "@/constants/adminDashboard"

const Students = () => {  
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-start justify-between">
        <h1 className="text-xl">Manage Students</h1>
        
        <CustomDialog
          buttonText="Add Student"
          dialogTitle="Add Student"
          fields={
            <div className="grid gap-4">
              <CustomInput id={'studentName'} label="Full Name" />
              <CustomInput id={'email'} label="Email" />
              <CustomInput id={'roll_number'} label="Roll Number" />
              <div className="flex gap-5">
                <CustomInput id={'department'} label="Department" />
                <CustomInput id={'enroll_year'} label="Enrollment Year" type="number" />
              </div>
            </div>
          }
        />
      </div>

      <div className="px-4">
        <CustomTable
          headerItems={studentHeaderItems}
          rowData={dummyTableRows}
        />
      </div>
    </div>
  )
}

export default Students
