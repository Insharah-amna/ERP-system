'use client'
import { useEffect, useState } from "react"
import CustomInput from "../custom/Input"
import { CustomDialog } from "../custom/dialog/Dialog"
import { CustomTable } from "../custom/tables"
import { deptHeaderItems } from "@/constants/adminDashboard"
import { TableCell, TableRow } from "../ui/table"
import DeptRow from "../custom/tables/DeptRow"
import CustomButton from "../custom/Button"

const Departments = () => {
  const [dept, setDept] = useState(['', '']); // [name, head]
  const [data, setData] = useState([]);
  const [alert, setAlert] = useState({ show: false, msg: '' });
  const [isEdit, setIsEdit] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const onSave = async () => {
    if (!dept[0] || !dept[1]) {
      setAlert({ show: true, msg: "Please fill all fields" });
      return;
    }

    const payload = {
      departmentName: dept[0],
      departmentHead: dept[1],
    };

    const url = isEdit
      ? `http://localhost:3001/departments/${selectedId}`
      : "http://localhost:3001/departments";

    const method = isEdit ? "PATCH" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) throw new Error("Failed to save!"); // show toast

    if (!isEdit) {
      const saved = await res.json();
      setData(prev => [...prev, saved]); // If new department was added → refresh table
    }

    setDept(["", ""]);
    setSelectedId(null);
    setAlert({ show: false, msg: "" });
    setDialogOpen(false);
  };

  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:3001/departments/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    setData(prev => prev.filter(d => d.departmentId !== id));
    setSelectedId(null);
    setDeleteOpen(false);
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

        setDept([json.departmentName, json.departmentHead]);
      }
      loadSingle(selectedId);
    }
  }, [isEdit, selectedId]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-start justify-between">
        <h1 className="text-xl">Manage Departments</h1>

        <CustomButton
          buttonText="Add Department"
          className='bg-teal-600 rounded-sm'
          onClick={() => {
            setIsEdit(false)
            setDialogOpen(true)
          }}
        />

        <CustomDialog
          isOpen={dialogOpen}
          setIsOpen={setDialogOpen}
          dialogTitle={isEdit ? "Edit Department" : "Add Department"}
          onSave={onSave}
          onClose={() => setDept(['',''])}
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
        {
          deleteOpen &&
          <CustomDialog
            isOpen={deleteOpen}
            setIsOpen={setDeleteOpen}
            dialogTitle="Delete Confirmation"
            onSave={() => handleDelete(selectedId)}
            onClose={() => setDept(['',''])}
            isDelete={true}
            fields={
              <>
                <p>Are you sure you want to delete this Department record?</p>
              </>
            }
          />
        }
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
                  setDeleteOpen={setDeleteOpen}
                />
              ))}
              {data.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={2}
                    className='text-center py-4 text-gray-500'
                  >
                    No departments added yet.
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
