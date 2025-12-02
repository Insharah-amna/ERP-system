import {FiEdit, FiTrash} from 'react-icons/fi';
import {TableCell, TableRow} from '@/components/ui/table';

const DeptRow = ({
  dept,
  setSelectedId,
  setIsEdit,
  handleDelete,
  setDialogOpen
}) => {
  return (
    <TableRow key={dept.departmentId} className='border-b border-gray-200 '>
      <TableCell className='p-3 capitalize'>{dept.departmentId}</TableCell>
      <TableCell className='p-3 capitalize'>{dept.departmentName}</TableCell>
      <TableCell className='p-3 capitalize'>{dept.departmentHead}</TableCell>
      <TableCell className='p-3 text-center flex items-center'>
        <FiEdit
          className='text-blue-600 w-8 text-lg cursor-pointer'
          onClick={() => {
            setIsEdit(true);
            setSelectedId(dept.departmentId);
            setDialogOpen(true);
          }}
        />
        <FiTrash className='text-red-600 w-8 text-lg cursor-pointer' onClick={handleDelete} />
      </TableCell>
    </TableRow>
  );
};

export default DeptRow;
