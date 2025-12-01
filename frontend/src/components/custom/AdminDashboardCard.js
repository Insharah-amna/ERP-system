import { Card, CardContent } from "../ui/card"

const AdminDashboardCard = ({title, number, Icon}) => {
  return (
    <Card className={'rounded-sm py-3'}>
      <CardContent>
        <div className="flex gap-4 items-center">
          <div className="p-2 rounded-xs bg-neutral-200">
            {/* <GraduationCap /> */}
            <Icon/>
          </div>

          <div className="flex flex-col">
            <p className="text-sm">{title}</p>
            <p className="font-semibold">{number}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default AdminDashboardCard
