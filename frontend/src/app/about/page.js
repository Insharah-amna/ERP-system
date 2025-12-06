import Topbar from "@/components/custom/headers/Topbar";
import HomeHeader from "@/components/custom/headers/HomeHeader";
import About from "@/components/home/About";
import Bottombar from "@/components/custom/footers/Bottombar";

export default function page() {
  return (
    <>
      <Topbar />
      <HomeHeader />
      <About />
      <Bottombar />
    </>
  )
}