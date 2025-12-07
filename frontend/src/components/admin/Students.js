'use client';
import { useEffect, useState } from 'react';
import CustomInput from '../custom/Input';
import { CustomDialog } from '../custom/dialog/Dialog';
import { CustomTable } from '../custom/tables';
import { studentHeaderItems } from '@/constants/adminDashboard';
import { TableCell, TableRow } from '../ui/table';
import StudentRow from '../custom/tables/StudentRow';
import CustomButton from '../custom/Button';

const Students = () => {
  const [student, setStudent] = useState({
    fullName: '',
    email: '',
    rollNumber: '',
    semester: 1,
    departmentId: 0,
    enrollmentYear: 0,
  });
  const [data, setData] = useState([]);
  const [alert, setAlert] = useState({ show: false, msg: '' });
  const [isEdit, setIsEdit] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const onSave = async () => {
    const { fullName, email, departmentId, rollNumber, semester, enrollmentYear } = student;

    if (!fullName || !email || !departmentId || !rollNumber || !enrollmentYear || !semester)
      setAlert({ show: true, msg: 'Please fill all fields' });

    const payload = {
      fullName: student.fullName,
      email: student.email,
      rollNumber: student.rollNumber,
      department: student.departmentId,
      semester: student.semester,
      enrollmentYear: student.enrollmentYear,
    };

    const url = isEdit
      ? `http://localhost:3001/students/${selectedId}`
      : 'http://localhost:3001/students';

    const method = isEdit ? 'PATCH' : 'POST';

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!res.ok) alert('Failed to save!');

    setStudent({
      fullName: '',
      email: '',
      departmentId: 0,
      semester: 1,
      rollNumber: '',
      enrollmentYear: 0,
    });
    setSelectedId(null);
    setAlert({ show: false, msg: '' });
    setDialogOpen(false);
  };

  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:3001/students/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!res.ok) throw new Error('Failed to delete!');

    setData((prev) => prev.filter((c) => c.studentId !== id));
    setSelectedId(null);
    setDeleteOpen(false);
  };

  useEffect(() => {
    async function load() {
      const res = await fetch('http://localhost:3001/students');
      const json = await res.json();
      setData(json);
    }
    load();

    if (isEdit && selectedId) {
      async function loadSingle(id) {
        const res = await fetch(`http://localhost:3001/students/${id}`);
        const json = await res.json();

        setStudent({
          fullName: json.fullName,
          email: json.email,
          semester: json.semester,
          rollNumber: json.rollNumber,
          departmentId: json.department?.departmentId,
          enrollmentYear: json.enrollmentYear,
        });
        setSelectedId(id);
      }
      loadSingle(selectedId);
    }
  }, [isEdit, selectedId]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-start justify-between">
        <h1 className="text-xl">Manage Students</h1>

        <CustomButton
          buttonText="Add Student"
          className="bg-teal-600 rounded-sm"
          onClick={() => {
            setIsEdit(false);
            setDialogOpen(true);
          }}
        />

        <CustomDialog
          isOpen={dialogOpen}
          setIsOpen={setDialogOpen}
          dialogTitle={isEdit ? 'Edit Student' : 'Add Student'}
          onSave={onSave}
          onClose={() => setStudent({})}
          fields={
            <div className="grid gap-4">
              <CustomInput
                id={'studentName'}
                label="Full Name"
                value={student.fullName}
                onChange={(e) => setStudent((prev) => ({ ...prev, fullName: e.target.value }))}
                alerts={alert}
              />
              <CustomInput
                id={'email'}
                label="Email"
                value={student.email}
                onChange={(e) => setStudent((prev) => ({ ...prev, email: e.target.value }))}
                alerts={alert}
              />
              <div className="flex gap-5">
                <CustomInput
                  id={'roll_number'}
                  label="Roll Number"
                  value={student.rollNumber}
                  onChange={(e) => setStudent((prev) => ({ ...prev, rollNumber: e.target.value }))}
                  alerts={alert}
                />
                <CustomInput
                  id={'department'}
                  label="Department"
                  value={student.departmentId}
                  onChange={(e) =>
                    setStudent((prev) => ({ ...prev, departmentId: e.target.value }))
                  }
                  alerts={alert}
                />
              </div>

              <div className="flex gap-5">
                <CustomInput
                  id={'semester'}
                  label="semester"
                  type="number"
                  defaultValue={1}
                  value={student.semester}
                  onChange={(e) => setStudent((prev) => ({ ...prev, semester: e.target.value }))}
                  alerts={alert}
                />
                <CustomInput
                  id={'enroll_year'}
                  label="Enrollment Year"
                  type="number"
                  value={student.enrollmentYear}
                  onChange={(e) =>
                    setStudent((prev) => ({ ...prev, enrollmentYear: e.target.value }))
                  }
                  alerts={alert}
                />
              </div>
            </div>
          }
        />
        {deleteOpen && (
          <CustomDialog
            isOpen={deleteOpen}
            setIsOpen={setDeleteOpen}
            dialogTitle="Delete Confirmation"
            onSave={() => handleDelete(selectedId)}
            onClose={() => setStudent({})}
            isDelete={true}
            fields={
              <>
                <p>Are you sure you want to delete this Student record?</p>
              </>
            }
          />
        )}
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
                  setSelectedId={setSelectedId}
                  setIsEdit={setIsEdit}
                  setDialogOpen={setDialogOpen}
                  setDeleteOpen={setDeleteOpen}
                />
              ))}
              {data.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-4 text-gray-500">
                    No students enrolled yet.
                  </TableCell>
                </TableRow>
              )}
            </>
          }
        />
      </div>
    </div>
  );
};

export default Students;
