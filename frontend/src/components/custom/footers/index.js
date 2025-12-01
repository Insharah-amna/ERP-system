import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="bg-teal-800 h-[80vh] text-white px-7 py-6">
      <div className="flex gap-8 items-center">
        <h1 className="text-2xl font-semibold">Connect with us</h1>

        <div className="flex gap-8">
          <FaWhatsapp color="white" size={26} className="cursor-pointer hover:scale-108" />
          <FaInstagram color="white" size={26} className="cursor-pointer hover:scale-108" />
          <FaFacebook color="white" size={26} className="cursor-pointer hover:scale-108" />
          <FaTwitter color="white" size={26} className="cursor-pointer hover:scale-108" />
        </div>
      </div>

      <div className="grid grid-cols-4 mt-15 font-light">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold">Information About:</h1>
          <ul className="flex flex-col gap-2 underline">
            <li><a href="#">Oreo University</a></li>
            <li><a href="#">Our Research Ecosystem</a></li>
            <li><a href="#">Fee Structure</a></li>
            <li><a href="#">Scholarships</a></li>
            <li><a href="#">Libraries</a></li>
            <li><a href="#">Sports and Fitness</a></li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold">Information For:</h1>
          <ul className="flex flex-col gap-2 underline">
            <li><a href="#">International Students</a></li>
            <li><a href="#">Exchange Students</a></li>
            <li><a href="#">Alumini</a></li>
            <li><a href="#">International Partnerships</a></li>
            <li><a href="#">Academic Partnerships</a></li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold">Contact Us:</h1>
          <ul className="flex flex-col gap-2">
            <li>20km Lemon Road, Sandwich</li>
            <li>Phone: (042)-111-000-098</li>
            <li>Email: cms@oreo.edu.pk</li>
          </ul>
        </div>
      </div>      
    </div>
  )
}

export default Footer
