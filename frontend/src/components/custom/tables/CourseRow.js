import {FiEdit, FiTrash} from 'react-icons/fi';
import {TableCell, TableRow} from '@/components/ui/table';

const CourseRow = ({
  course,
  setIsEdit,
  setSelectedId,
  setDialogOpen,
  setDeleteOpen,
}) => {
  return (
    <TableRow key={course.courseId} className='border-b border-gray-200'>
      <TableCell className='p-3 capitalize'>{course.courseId}</TableCell>
      <TableCell className='p-3 capitalize'>{course.courseName}</TableCell>
      <TableCell className='p-3 capitalize'>{course.department.departmentName}</TableCell>
      <TableCell className='p-3 text-center flex items-center'>
        <FiEdit
          className='text-blue-600 w-8 text-lg cursor-pointer'
          onClick={() => {
            setIsEdit(true);
            setSelectedId(course.courseId);
            setDialogOpen(true);
          }}
        />
        <FiTrash
          className='text-red-600 w-8 text-lg cursor-pointer'
          onClick={() => {
            setSelectedId(course.courseId);
            setDeleteOpen(true);
          }}
        />
      </TableCell>
    </TableRow>
  );
};

export default CourseRow;
