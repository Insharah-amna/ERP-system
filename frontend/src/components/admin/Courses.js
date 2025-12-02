'use client'
import { useEffect, useState } from "react"
import CustomInput from "../custom/Input"
import { CustomDialog } from "../custom/dialog/Dialog"
import { CustomTable } from "../custom/tables"
import { courseHeaderItems } from "@/constants/adminDashboard"
import { TableCell, TableRow } from "../ui/table"
import CourseRow from "../custom/tables/CourseRow"

const Courses = () => {
  const [data, setData] = useState([]);
  
    useEffect(() => {
      async function load() {
        const res = await fetch('http://localhost:3001/courses');
        const json = await res.json();
        setData(json);
      }
      load();
    }, []);

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
          tableHeaders={courseHeaderItems}
          tableBody={
            <>
              {data.map((course) => (
                <CourseRow
                  key={course.courseId} 
                  course={course}
                  // handleEditClick={() => handleEditClick(course)}
                  // handleDelete={() => handleDelete(course)}
                />
              ))}
              {data.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={4}
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

export default Courses
