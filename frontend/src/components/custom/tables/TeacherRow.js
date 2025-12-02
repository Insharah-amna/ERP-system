import {FiEdit, FiTrash} from 'react-icons/fi';
import {TableCell, TableRow} from '@/components/ui/table';

const TeacherRow = ({
  teacher,
  handleEditClick,
  handleDelete,
}) => {
  return (
    <TableRow key={teacher.teacherId} className='border-b border-gray-200'>
      <TableCell className='p-3 capitalize'>{teacher.teacherId}</TableCell>
      <TableCell className='p-3 capitalize'>{teacher.fullName}</TableCell>
      <TableCell className='p-3 capitalize'>{teacher.email}</TableCell>
      <TableCell className='p-3 capitalize'>{teacher.department}</TableCell>
      <TableCell className='p-3 flex items-center'>
        <FiEdit
          className='text-blue-600 w-12 text-lg'
          onClick={handleEditClick}
        />
        <FiTrash className='text-red-600 w-12 text-lg' onClick={handleDelete} />
      </TableCell>
    </TableRow>
  );
};

export default TeacherRow;
