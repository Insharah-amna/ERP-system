import CustomInput from "../custom/Input"
import { CustomDialog } from "../custom/dialog/Dialog"
import { CustomTable } from "../custom/tables"
import { deptHeaderItems } from "@/constants/adminDashboard"
import { TableCell, TableRow } from "../ui/table"
import DeptRow from "../custom/tables/DeptRow"
import DepartmentsApi from "@/services/DepartmentsApi"

const Departments = () => {
  const data = DepartmentsApi();
  console.log(data)

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
          tableHeaders={deptHeaderItems}
          tableBody={
            <>
              {data.map((dept) => (
                <DeptRow
                  key={dept.departmentId} 
                  dept={dept}
                  // handleEditClick={() => handleEditClick(dept)}
                  // handleDelete={() => handleDelete(dept)}
                />
              ))}
              {data.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={2}
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

export default Departments
