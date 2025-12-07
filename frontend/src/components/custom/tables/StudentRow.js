import { FiEdit, FiTrash } from 'react-icons/fi';
import { TableCell, TableRow } from '@/components/ui/table';

const StudentRow = ({ student, setIsEdit, setSelectedId, setDialogOpen, setDeleteOpen }) => {
  return (
    <TableRow key={student.studentId} className="border-b border-gray-200">
      <TableCell className="p-3 capitalize">{student.studentId}</TableCell>
      <TableCell className="p-3 capitalize">{student.fullName}</TableCell>
      <TableCell className="p-3 capitalize">{student.rollNumber}</TableCell>
      <TableCell className="p-3 text-xs">{student.email}</TableCell>
      <TableCell className="p-3 capitalize">{student.semester}</TableCell>
      <TableCell className="p-3 capitalize">{student.department.departmentName}</TableCell>
      <TableCell className="p-3 flex items-center text-right justify-end">
        <FiEdit
          className="text-blue-600 w-8 text-lg cursor-pointer"
          onClick={() => {
            setIsEdit(true);
            setSelectedId(student.studentId);
            setDialogOpen(true);
          }}
        />
        <FiTrash
          className="text-red-600 w-8 text-lg cursor-pointer"
          onClick={() => {
            setSelectedId(student.studentId);
            setDeleteOpen(true);
          }}
        />
      </TableCell>
    </TableRow>
  );
};

export default StudentRow;
