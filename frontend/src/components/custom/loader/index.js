import {SyncLoader} from 'react-spinners';

const Loader = () => {
  return (
    <div className='h-[90vh] w-full flex items-center justify-center'>
      <SyncLoader size={10} />
    </div>
  );
};

export default Loader;
