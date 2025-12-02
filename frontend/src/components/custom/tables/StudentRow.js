import {FiEdit, FiEye, FiTrash} from 'react-icons/fi';
import {TableCell, TableRow} from '@/components/ui/table';

const StudentRow = ({
  student,
  handleEditClick,
  handleDelete,
}) => {
  return (
    <TableRow key={student.studentId} className='border-b border-gray-200'>
      <TableCell className='p-3 capitalize'>{student.studentId}</TableCell>
      <TableCell className='p-3 capitalize'>{student.fullName}</TableCell>
      <TableCell className='p-3 capitalize'>{student.email}</TableCell>
      <TableCell className='p-3 capitalize'>{student.rollNumber}</TableCell>
      <TableCell className='p-3 capitalize'>{student.semester}</TableCell>
      <TableCell className='p-3 capitalize'>{student.department}</TableCell>
      <TableCell className='p-3 flex items-center'>
        <FiEdit
          className='text-blue-600 w-12 text-lg cursor-pointer'
          onClick={handleEditClick}
        />
        <FiEye
          className='text-gray-600 h-7 text-lg cursor-pointer'
          onClick={() => {
            // setSelectedProduct(product);
            // setIsInfoOpen(true);
          }}
        />
        <FiTrash className='text-red-600 w-12 text-lg cursor-pointer' onClick={handleDelete} />
      </TableCell>
    </TableRow>
  );
};

export default StudentRow;
