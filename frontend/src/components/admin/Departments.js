'use client'
import { useEffect, useState } from "react"
import CustomInput from "../custom/Input"
import { CustomDialog } from "../custom/dialog/Dialog"
import { CustomTable } from "../custom/tables"
import { deptHeaderItems } from "@/constants/adminDashboard"
import { TableCell, TableRow } from "../ui/table"
import DeptRow from "../custom/tables/DeptRow"

const Departments = () => {
  const [dept, setDept] = useState(['', '']); // [name, head]
  const [data, setData] = useState([]);
  const [alert, setAlert] = useState({ show: false, msg: '' });
  const [isEdit, setIsEdit] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const onSave = async () => {
    if (!dept[0] || !dept[1]) {
      setAlert({ show: true, msg: 'Please fill all the fields' })
      return;
    }

    if (isEdit) {
      const res = await fetch(`http://localhost:3001/departments/${selectedId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          departmentName: dept[0],
          departmentHead: dept[1],
        }),
      });

      if (!res.ok) throw new Error("Failed to save!");
      setAlert({ show: false, msg: '' });
      console.log(res)
      return;
    }

    const res = await fetch("http://localhost:3001/departments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        departmentName: dept[0],
        departmentHead: dept[1],
      }),
    });

    if (!res.ok) throw new Error("Failed to save!"); // show toast
    // const saved = await res.json();
    // setData(prev => [...prev, saved]); // refresh table
    setDept(["", ""]);
    setAlert({ show: false, msg: '' })
  };

  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:3001/departments/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    // if (!res.ok) throw new Error("Failed to delete!"); // show toast
    setData(prev => prev.filter(d => d.departmentId !== id));

    console.log("Deleted dept with id:", id); // show toast
  }

  useEffect(() => {
    async function load() {
      const res = await fetch('http://localhost:3001/departments');
      const json = await res.json();
      setData(json);
    }
    load();

    if (isEdit && selectedId) {
      async function loadSingle(id) {
        const res = await fetch(`http://localhost:3001/departments/${id}`);
        const json = await res.json();

        // fill input fields
        setDept([json.departmentName, json.departmentHead]);
      }
      loadSingle(selectedId);
    }
  }, [isEdit, selectedId]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-start justify-between">
        <h1 className="text-xl">Manage Departments</h1>
        <CustomDialog
          isOpen={dialogOpen}
          setIsOpen={setDialogOpen}
          buttonText={"Add department"}
          dialogTitle={isEdit ? "Edit Department" : "Add Department"}
          onSave={onSave}
          fields={
            <div className="grid gap-4">
              <CustomInput
                key={'name'}
                id={'deptName'}
                label="Department Name"
                value={dept[0]}
                onChange={(e) => setDept(prev => [e.target.value, prev[1]])}
                alerts={alert}
              />
              <CustomInput
                key={'HOD'}
                id={'deptHead'}
                label="Department Head"
                value={dept[1]}
                onChange={(e) => setDept(prev => [prev[0], e.target.value])}
                alerts={alert}
              />
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
                  setSelectedId={setSelectedId}
                  setIsEdit={setIsEdit}
                  setDialogOpen={setDialogOpen}
                  handleDelete={() => handleDelete(dept.departmentId)}
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
