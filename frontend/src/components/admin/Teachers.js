'use client'
import { useEffect, useState } from "react"
import CustomInput from "../custom/Input"
import { CustomDialog } from "../custom/dialog/Dialog"
import { CustomTable } from "../custom/tables"
import { teacherHeaderItems } from "@/constants/adminDashboard"
import { TableCell, TableRow } from "../ui/table"
import TeacherRow from "../custom/tables/TeacherRow"

const Teachers = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function load() {
      const res = await fetch('http://localhost:3001/teachers');
      const json = await res.json();
      setData(json);
    }
    load();
  }, []);

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
          tableHeaders={teacherHeaderItems}
          tableBody={
            <>
              {data.map((teacher) => (
                <TeacherRow
                  key={teacher.teacherId} 
                  teacher={teacher}
                  // handleEditClick={() => handleEditClick(teacher)}
                  // handleDelete={() => handleDelete(teacher)}
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

export default Teachers
