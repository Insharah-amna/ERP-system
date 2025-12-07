'use client';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { sidebarMenuItems } from '../../constants/AdminSidebarMenu';
import CustomButton from './Button';
import { logout } from '@/services/AuthService';

export function AdminSidebar({ activeTab, setActiveTab }) {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroupLabel className={'pl-4'}>Oreo ERP</SidebarGroupLabel>
        <hr />
        <div className="flex flex-col justify-between h-screen">
          <SidebarGroup>
            <SidebarGroupLabel>Admin</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {sidebarMenuItems.map((tab) => (
                  <SidebarMenuItem key={tab.title}>
                    <SidebarMenuButton asChild>
                      <div
                        className={`cursor-pointer rounded-sm 
                          ${
                            activeTab === tab.title &&
                            'bg-teal-600 hover:bg-teal-600 text-white hover:text-white'
                          }`}
                        onClick={() => setActiveTab(tab.title)}
                      >
                        <tab.icon />
                        <span>{tab.title}</span>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <CustomButton
            buttonText={'Log Out'}
            className={'m-2 h-[30px] rounded-xs text-xs font-light bg-red-400'}
            onClick={logout}
          />
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
