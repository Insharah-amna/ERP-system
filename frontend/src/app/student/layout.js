import Image from 'next/image';
import { StudentSidebar } from '@/components/custom/StudentSidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

export default function Layout({ children }) {
  return (
    <SidebarProvider defaultOpen={false}>
      <StudentSidebar />

      <main className="flex flex-col w-full bg-neutral-200">
        <div className="bg-teal-600 shadow-sm h-12 flex items-center justify-between pl-2 pr-4  sticky top-0 z-10">
          <SidebarTrigger className={'text-white'} />

          <h2 className="text-white font-semibold text-lg">Oreo University</h2>

          <div>
            <Image
              src={'/home_page.jpg'}
              alt="profile"
              height={50}
              width={50}
              className="rounded-full border-white border w-8 h-8"
            />
          </div>
        </div>

        {children}
      </main>
    </SidebarProvider>
  );
}
