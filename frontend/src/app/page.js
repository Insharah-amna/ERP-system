import CustomButton from "@/components/custom/Button";
import { FaHeart } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <CustomButton buttonText={
        <>
          <FaHeart color="white"/>
          Hello World
        </>
        }
      />
    </div>
  );
}
