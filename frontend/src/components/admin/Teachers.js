'use client'
import { useEffect, useState } from "react"
import CustomInput from "../custom/Input"
import { CustomDialog } from "../custom/dialog/Dialog"
import { CustomTable } from "../custom/tables"
import { teacherHeaderItems } from "@/constants/adminDashboard"
import { TableCell, TableRow } from "../ui/table"
import TeacherRow from "../custom/tables/TeacherRow"
import CustomButton from "../custom/Button"

const Teachers = () => {
  const [teacher, setTeacher] = useState(['', '', '']);
  const [data, setData] = useState([]);
  const [alert, setAlert] = useState({ show: false, msg: '' });
  const [isEdit, setIsEdit] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const onSave = async () => {
    if (!teacher[0] || !teacher[1] || !teacher[2]) {
      setAlert({ show: true, msg: "Please fill all fields" });
      return;
    }

    const payload = {
      fullName: teacher[0],
      email: teacher[1],
      department: teacher[2],
    };

    const url = isEdit
      ? `http://localhost:3001/teachers/${selectedId}`
      : "http://localhost:3001/teachers";

    const method = isEdit ? "PATCH" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) throw new Error("Failed to save!");

    if (!isEdit) {
      const saved = await res.json();
      setData(prev => [...prev, saved]);
    }

    setTeacher(['', '', '']);
    setSelectedId(null);
    setAlert({ show: false, msg: "" });
    setDialogOpen(false);
  };

  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:3001/teachers/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) throw new Error("Failed to delete!"); 

    setData(prev => prev.filter(c => c.teacherId !== id));
    setSelectedId(null);
    setDeleteOpen(false);
  }

  useEffect(() => {
    async function load() {
      const res = await fetch('http://localhost:3001/teachers');
      const json = await res.json();
      setData(json);
    }
    load();

    if (isEdit && selectedId) {
      async function loadSingle(id) {
          const res = await fetch(`http://localhost:3001/teachers/${id}`);
          const json = await res.json();

          setTeacher([
            json.fullName,
            json.email,
            json.department.departmentId,
          ]);
          setSelectedId(id);
      }
      loadSingle(selectedId);
    }
  }, [isEdit, selectedId]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-start justify-between">
        <h1 className="text-xl">Manage Teachers</h1>

        <CustomButton
          buttonText="Add Teacher"
          className='bg-teal-600 rounded-sm'
          onClick={() => {
            setIsEdit(false)
            setDialogOpen(true)
          }}
        />

        <CustomDialog
          isOpen={dialogOpen}
          setIsOpen={setDialogOpen}
          dialogTitle={isEdit ? "Edit Teacher" : "Add Teacher"}
          onSave={onSave}
          onClose={() => setTeacher(['', '', ''])}
          fields={
            <div className="grid gap-4">
              <CustomInput
                id={'teacherName'}
                label="Full Name"
                value={teacher[0]}
                onChange={(e) =>
                  setTeacher(prev => [e.target.value, prev[1], prev[2]])
                }
                alerts={alert}
              />
              <CustomInput
                id={'email'}
                label="Email"
                value={teacher[1]}
                onChange={(e) =>
                  setTeacher(prev => [prev[0], e.target.value, prev[2]])
                }
                alerts={alert}
              />
              <CustomInput
                id={'departmentId'}
                label="Department Id"
                type="number"
                value={teacher[2]}
                onChange={(e) =>
                  setTeacher(prev => [prev[0], prev[1], e.target.value])
                }
                alerts={alert}
              />
            </div>
          }
        />
        {
          deleteOpen &&
          <CustomDialog
            isOpen={deleteOpen}
            setIsOpen={setDeleteOpen}
            dialogTitle="Delete Confirmation"
            onSave={() => handleDelete(selectedId)}
            onClose={() => setTeacher(['', '', ''])}
            isDelete={true}
            fields={
              <>
                <p>Are you sure you want to delete this Teacher record?</p>
              </>
            }
          />
        }
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
                  setSelectedId={setSelectedId}
                  setIsEdit={setIsEdit}
                  setDialogOpen={setDialogOpen}
                  setDeleteOpen={setDeleteOpen}
                />
              ))}
              {data.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={5}
                    className='text-center py-4 text-gray-500'
                  >
                    No teachers added yet.
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
