import AdminDashboardCard from '../custom/AdminDashboardCard'
import { dashboardCardContent } from './DashboardCardContent'

const Home = () => {
  return (
    <div className="grid grid-cols-4 gap-6 my-4">
        {dashboardCardContent.map((item) => (
          <AdminDashboardCard
            key={item.title}
            Icon={item.icon}
            title={item.title}
            number={item.number}
          />
        ))}
      </div>
  )
}

export default Home
