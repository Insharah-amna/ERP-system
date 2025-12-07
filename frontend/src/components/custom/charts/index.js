import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from 'recharts';

export default function StatsBarChart({ stats }) {
  if (!stats) return null;

  const chartData = [
    { name: 'Departments', count: stats?.departments ?? 0 },
    { name: 'Courses', count: stats?.courses ?? 0 },
    { name: 'Teachers', count: stats?.teachers ?? 0 },
    { name: 'Students', count: stats?.students ?? 0 },
  ];

  return (
    <BarChart width={440} height={300} data={chartData} barSize={50}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip contentStyle={{ borderRadius: '10px', background: '#fff' }} />
      <Bar dataKey="count" radius={2}>
        <Cell fill="#14B8A6" />
        <Cell fill="#94A3B8" />
        <Cell fill="#2DD4BF" />
        <Cell fill="#475569" />
      </Bar>
    </BarChart>
  );
}
