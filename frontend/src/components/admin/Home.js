'use client';
import { useEffect, useState } from 'react';
import AdminDashboardCard from '../custom/AdminDashboardCard'
import { dashboardCardContent } from './DashboardCardContent'

const Home = () => {
  const [stats, setStats] = useState({
    students: 0,
    teachers: 0,
    courses: 0,
    departments: 0,
  });

  useEffect(() => {
    const loadStats = async () => {
      const res = await fetch("http://localhost:3001/dashboard/stats");
      const data = await res.json();
      setStats(data);
    };

    loadStats();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-6 my-4">
        {dashboardCardContent.map((item) => (
          <AdminDashboardCard
            key={item.key}
            Icon={item.icon}
            title={item.title}
            number={stats[item.key]}
          />
        ))}
      </div>
  )
}

export default Home
