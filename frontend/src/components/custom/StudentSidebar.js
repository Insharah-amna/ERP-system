'use client';
import Link from "next/link"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { studentSidebarMenuItems } from "@/constants/StudentSidebarMenu"
import CustomButton from "./Button"
import { logout } from "@/services/AuthService"

export function StudentSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroupLabel className={'pl-4'}>Oreo ERP</SidebarGroupLabel>
        <hr />
        <SidebarGroup>
          <SidebarGroupLabel>Student</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {studentSidebarMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className={'hover:text-teal-800'}>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <CustomButton
          buttonText={'Log Out'}
          className={'my-2 h-[30px] rounded-xs text-xs font-light bg-red-400'}
          onClick={logout}
        />
      </SidebarFooter>
    </Sidebar>
  )
}