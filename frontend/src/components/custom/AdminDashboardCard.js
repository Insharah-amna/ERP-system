import { Card, CardContent } from '../ui/card';

const AdminDashboardCard = ({ title, number, Icon }) => {
  return (
    <Card className={'rounded-md h-20 flex justify-center'}>
      <CardContent>
        <div className="flex gap-5 items-center text-gray-800">
          <div className="p-3 rounded-xs bg-neutral-200">
            <Icon />
          </div>

          <div className="flex flex-col">
            <p className="">{title}</p>
            <p className="font-semibold text-lg">{number}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminDashboardCard;
