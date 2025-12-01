import Image from "next/image"
import ApplyCard from "./ApplyCard"

const Main = () => {
  return (
    <div className="relative">
      <Image
        src={'/home_page.jpg'}
        alt="University ground"
        height={1000}
        width={1000}
        className="w-full"
      />
      <ApplyCard className={'absolute left-30 top-35 w-[40%]'} />
    </div>
  )
}

export default Main
