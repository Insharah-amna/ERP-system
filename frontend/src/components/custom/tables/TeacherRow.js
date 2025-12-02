import {FiEdit, FiTrash} from 'react-icons/fi';
import {TableCell, TableRow} from '@/components/ui/table';

const TeacherRow = ({
  teacher,
  setIsEdit,
  setSelectedId,
  setDialogOpen,
  setDeleteOpen,
}) => {
  return (
    <TableRow key={teacher.teacherId} className='border-b border-gray-200'>
      <TableCell className='p-3 capitalize'>{teacher.teacherId}</TableCell>
      <TableCell className='p-3 capitalize'>{teacher.fullName}</TableCell>
      <TableCell className='p-3 capitalize'>{teacher.email}</TableCell>
      <TableCell className='p-3 capitalize'>{teacher.department.departmentName}</TableCell>
      <TableCell className='p-3 flex items-center'>
        <FiEdit
          className='text-blue-600 w-8 text-lg cursor-pointer'
          onClick={() => {
            setIsEdit(true);
            setSelectedId(teacher.teacherId);
            setDialogOpen(true);
          }}
        />
        <FiTrash
          className='text-red-600 w-8 text-lg cursor-pointer'
          onClick={() => {
            setSelectedId(teacher.teacherId);
            setDeleteOpen(true);
          }}
        />
      </TableCell>
    </TableRow>
  );
};

export default TeacherRow;
