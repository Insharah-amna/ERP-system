import Link from 'next/link';
import CustomButton from '@/components/custom/Button';

const notFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full gap-12">
      <h2 className="text-8xl text-teal-600/80">404</h2>
      <div className="flex-center flex-col gap-3">
        <h4 className="font-bold text-xl text-center text-gray-800">Page not found</h4>
        <p className="font-semibold text-sm">Oops! The page you are looking for does not exist.</p>
      </div>
      <Link href={'/'}>
        <CustomButton
          buttonText="Back To Home"
          className="rounded-none w-[135px] bg-teal-600 hover:bg-teal-500"
        />
      </Link>
    </div>
  );
};

export default notFound;
