import CustomInput from "../custom/Input"
import { CustomDialog } from "../custom/dialog/Dialog"
import { CustomTable } from "../custom/tables"
import { studentHeaderItems } from "@/constants/adminDashboard"
import { TableCell, TableRow } from "../ui/table"
import StudentRow from "../custom/tables/StudentRow"

const Students = async () => {
  let data = await fetch('http://localhost:3001/students');
  data = await data.json();

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
          tableHeaders={studentHeaderItems}
          tableBody={
            <>
              {data.map((student) => (
                <StudentRow
                  key={student.studentId} 
                  student={student}
                  // handleEditClick={() => handleEditClick(student)}
                  // handleDelete={() => handleDelete(student)}
                />
              ))}
              {data.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={5}
                    className='text-center py-4 text-gray-500'
                  >
                    No departments yet.
                  </TableCell>
                </TableRow>
              )}
            </>
          }
        />
      </div>
    </div>
  )
}

export default Students
