import getDate from "@/services/getDate";

const AdminHeader = () => { 
  const date = getDate();
  return (
    <div className="flex justify-between items-center sticky top-0">
      <div>
        <h1 className="text-lg font-semibold">Dashboard</h1>
        <p className="text-xs">Welcome to Oreo</p>
      </div>
      <p className="px-4 py-2 bg-white rounded-md text-gray-800">{date}</p>
    </div>
  )
}

export default AdminHeader
