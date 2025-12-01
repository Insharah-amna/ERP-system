import CustomInput from "../custom/Input"
import { CustomDialog } from "../custom/dialog/Dialog"
import { CustomTable } from "../custom/tables"
import { dummyTableRows, teacherHeaderItems } from "@/constants/adminDashboard"

const Teachers = () => {  
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-start justify-between">
        <h1 className="text-xl">Manage Teachers</h1>
        
        <CustomDialog
          buttonText="Add Teacher"
          dialogTitle="Add Teacher"
          fields={
            <div className="grid gap-4">
              <CustomInput id={'teacherName'} label="Full Name" />
              <CustomInput id={'email'} label="Email" />
              <CustomInput id={'department'} label="Department" />
            </div>
          }
        />
      </div>

      <div className="px-4">
        <CustomTable
          headerItems={teacherHeaderItems}
          rowData={dummyTableRows}
        />
      </div>
    </div>
  )
}

export default Teachers
