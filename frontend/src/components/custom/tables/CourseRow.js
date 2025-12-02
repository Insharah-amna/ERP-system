import {FiEdit, FiTrash} from 'react-icons/fi';
import {TableCell, TableRow} from '@/components/ui/table';

const CourseRow = ({
  course,
  handleEditClick,
  handleDelete,
}) => {
  return (
    <TableRow key={course.courseId} className='border-b border-gray-200'>
      <TableCell className='p-3 capitalize'>{course.courseId}</TableCell>
      <TableCell className='p-3 capitalize'>{course.courseName}</TableCell>
      <TableCell className='p-3 capitalize'>{course.department.departmentName}</TableCell>
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

export default CourseRow;
