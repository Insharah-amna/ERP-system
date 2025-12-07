import Topbar from '@/components/custom/headers/Topbar';
import HomeHeader from '@/components/custom/headers/HomeHeader';
import Contact from '@/components/home/Contact';
import Bottombar from '@/components/custom/footers/Bottombar';

export default function page() {
  return (
    <>
      <Topbar />
      <HomeHeader />
      <Contact />
      <Bottombar />
    </>
  );
}
