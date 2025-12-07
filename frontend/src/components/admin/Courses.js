'use client';
import { useEffect, useState } from 'react';
import CustomInput from '../custom/Input';
import { CustomDialog } from '../custom/dialog/Dialog';
import { CustomTable } from '../custom/tables';
import { courseHeaderItems } from '@/constants/adminDashboard';
import { TableCell, TableRow } from '../ui/table';
import CourseRow from '../custom/tables/CourseRow';
import CustomButton from '../custom/Button';

const Courses = () => {
  const [course, setCourse] = useState([]);
  const [data, setData] = useState([]);
  const [alert, setAlert] = useState({ show: false, msg: '' });
  const [isEdit, setIsEdit] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const onSave = async () => {
    if (!course[0] || !course[1] || !course[2] || !course[3]) {
      setAlert({ show: true, msg: 'Please fill all fields' });
      return;
    }

    const payload = {
      courseName: course[0],
      departmentId: course[1],
      semester: course[2],
      creditHours: course[3],
    };

    const url = isEdit
      ? `http://localhost:3001/courses/${selectedId}`
      : 'http://localhost:3001/courses';

    const method = isEdit ? 'PATCH' : 'POST';

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!res.ok) throw new Error('Failed to save!');

    setCourse(['', '', '', '']);
    setSelectedId(null);
    setAlert({ show: false, msg: '' });
    setDialogOpen(false);
  };

  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:3001/courses/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!res.ok) throw new Error('Failed to delete!');

    setData((prev) => prev.filter((c) => c.courseId !== id));
    setSelectedId(null);
    setDeleteOpen(false);
  };

  useEffect(() => {
    async function load() {
      const res = await fetch('http://localhost:3001/courses');
      const json = await res.json();
      setData(json);
    }
    load();

    if (isEdit && selectedId) {
      async function loadSingle(id) {
        const res = await fetch(`http://localhost:3001/courses/${id}`);
        const json = await res.json();

        setCourse([json.courseName, json.department.departmentId, json.semester, json.creditHours]);
      }
      loadSingle(selectedId);
    }
  }, [isEdit, selectedId]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-start justify-between">
        <h1 className="text-xl">Manage Courses</h1>

        <CustomButton
          buttonText="Add Course"
          className="bg-teal-600 rounded-sm"
          onClick={() => {
            setIsEdit(false);
            setDialogOpen(true);
          }}
        />

        <CustomDialog
          isOpen={dialogOpen}
          setIsOpen={setDialogOpen}
          dialogTitle={isEdit ? 'Edit Course' : 'Add Course'}
          onSave={onSave}
          onClose={() => setCourse(['', '', '', ''])}
          fields={
            <div className="grid gap-4">
              <CustomInput
                id={'courseName'}
                label="Course Name"
                value={course[0]}
                onChange={(e) => setCourse((prev) => [e.target.value, prev[1], prev[2], prev[3]])}
                alerts={alert}
              />
              <CustomInput
                id={'departmentId'}
                label="Department Id"
                type="number"
                value={course[1]}
                onChange={(e) => setCourse((prev) => [prev[0], e.target.value, prev[2], prev[3]])}
                alerts={alert}
              />
              <div className="flex gap-5">
                <CustomInput
                  id={'semester'}
                  label="Semester"
                  type="number"
                  value={course[2]}
                  onChange={(e) => setCourse((prev) => [prev[0], prev[1], e.target.value, prev[3]])}
                  alerts={alert}
                />
                <CustomInput
                  id={'credits'}
                  label="Credit Hours"
                  type="number"
                  value={course[3]}
                  onChange={(e) => setCourse((prev) => [prev[0], prev[1], prev[2], e.target.value])}
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
            onClose={() => setCourse(['', '', '', ''])}
            isDelete={true}
            fields={
              <>
                <p>Are you sure you want to delete this Course record?</p>
              </>
            }
          />
        )}
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
                  setSelectedId={setSelectedId}
                  setIsEdit={setIsEdit}
                  setDialogOpen={setDialogOpen}
                  setDeleteOpen={setDeleteOpen}
                />
              ))}
              {data.length === 0 && (
                <TableRow>
                  <TableCell colSpan={4} className="text-center py-4 text-gray-500">
                    No course added yet.
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

export default Courses;
