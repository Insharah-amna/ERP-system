import { Clock, LocateIcon } from 'lucide-react';
import { GiOre } from 'react-icons/gi';

const HomeHeader = () => {
  return (
    <div className="h-14 px-7 flex items-center justify-between text-xs bg-teal-700">
      <div className="flex gap-2 items-center">
        <GiOre color="white" size={22} />
        <h1 className="text-xl font-semibold text-white">OREO</h1>
      </div>

      <div className="flex flex-col gap-1 items-center">
        <div className="flex gap-1 items-center">
          <Clock color="white" size={12} />
          <p className="text-xs text-white">Mon - Sat: 9:00 - 16:00, Sun: Closed</p>
        </div>

        <div className="flex gap-1 items-center">
          <LocateIcon color="white" size={12} />
          <p className="text-xs text-white">1422 Raiwind Road, Oreo University</p>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
