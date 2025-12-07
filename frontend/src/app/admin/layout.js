import { SidebarProvider } from '@/components/ui/sidebar';

export default function Layout({ children }) {
  return <SidebarProvider>{children}</SidebarProvider>;
}
