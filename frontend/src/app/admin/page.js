"use client";
import { useState } from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/custom/Sidebar";

import getDate from "@/services/getDate"
import Home from "@/components/admin/Home";
import Departments from "@/components/admin/Departments";
import Courses from "@/components/admin/Courses";
import Teachers from "@/components/admin/Teachers";
import Students from "@/components/admin/Students";

export default function Page() {
  const [activeTab, setActiveTab] = useState("Home");

  const components = {
    Home: Home,
    Departments: Departments,
    Courses: Courses,
    Teachers: Teachers,
    Students: Students
  };

  const ActiveComponent = components[activeTab];

  const date = getDate();

  return (
    <>
      <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex flex-col w-full bg-neutral-100">
        <div className="bg-white shadow-sm h-12 flex items-center justify-between px-2">
          <SidebarTrigger />
        </div>

        <div className="p-4">
          <div className="flex justify-between items-center sticky top-0">
            <div>
              <h1 className="text-lg font-semibold">Dashboard</h1>
              <p className="text-xs">Welcome to Oreo</p>
            </div>
            <p className="px-4 py-2 bg-white rounded-md">{date}</p>
          </div>

          <div className="flex flex-col gap-4 my-4">
            <hr />
            <ActiveComponent />
          </div>
        </div>
      </main>
    </>
  );
}
