'use client';
import { useState } from 'react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { AdminSidebar } from '@/components/custom/Sidebar';

import Home from '@/components/admin/Home';
import Departments from '@/components/admin/Departments';
import Courses from '@/components/admin/Courses';
import Teachers from '@/components/admin/Teachers';
import Students from '@/components/admin/Students';
import AdminHeader from '@/components/custom/headers/AdminHeader';

export default function Page() {
  const [activeTab, setActiveTab] = useState('Home');

  const components = {
    Home: Home,
    Departments: Departments,
    Courses: Courses,
    Teachers: Teachers,
    Students: Students,
  };

  const ActiveComponent = components[activeTab];

  return (
    <>
      <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex flex-col w-full bg-neutral-100">
        <div className="bg-white shadow-sm h-12 flex items-center justify-between px-2 sticky top-0 z-10">
          <SidebarTrigger />
        </div>

        <div className="p-4">
          <AdminHeader />

          <div className="flex flex-col gap-4 my-4">
            <hr />
            <ActiveComponent />
          </div>
        </div>
      </main>
    </>
  );
}
