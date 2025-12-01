import CustomInput from "../custom/Input"
import { CustomDialog } from "../custom/dialog/Dialog"
import { CustomTable } from "../custom/tables"
import { courseHeaderItems, dummyTableRows } from "@/constants/adminDashboard"

const Courses = () => {  
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-start justify-between">
        <h1 className="text-xl">Manage Courses</h1>
        
        <CustomDialog
          buttonText="Add Course"
          dialogTitle="Add Course"
          fields={
            <div className="grid gap-4">
              <CustomInput id={'courseName'} label="Course Name" />
              <CustomInput id={'dept'} label="Department" />
              <div className="flex gap-5">
                <CustomInput id={'semester'} label="Semester" type="number" />
                <CustomInput id={'credits'} label="Credit Hours" type="number" />
              </div>
            </div>
          }
        />
      </div>

      <div className="px-4">
        <CustomTable
          headerItems={courseHeaderItems}
          rowData={dummyTableRows}
        />
      </div>
    </div>
  )
}

export default Courses
