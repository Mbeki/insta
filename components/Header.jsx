import Image from "next/image"
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { MdHome } from "react-icons/md";

function Header() {
    return (
        <div className="shadow-sm border-b sticky top-0 bg-white z-30">
          <div className="mx-4 xl:mx-auto flex items-center justify-between max-w-6xl">
            <div className="h-24 w-24 relative hidden lg:inline-grid cursor-pointer">
                <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png?20160616034027"
                alt="Instagram logo" layout="fill" className="object-contain"
                />
                
            </div>
            <div className="h-24 w-10 relative lg:hidden cursor-pointer">
                <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/800px-Instagram_logo_2022.svg.png"
                alt="Instagram logo" layout="fill" className="object-contain"
                />
                
            </div>
            <div className="relative mt-1">
                <div className="absolute top-2 left-2"><CiSearch className="h-5 text-gray-500"/></div>
                <input type="text" placeholder="Search" className="pl-10 text-sm rounded-md focus:ring-black focus:border-black border-gray-500 bg-gray-50"/>
            </div>
            <div className=" flex space-x-4 items-center">
                <MdHome size={24} className="h-12 cursor-pointer hover:scale-125 transition-transform duration-200 hidden md:inline-flex"/>
                <FaPlus className="h-12 cursor-pointer hover:scale-125 transition-transform duration-200"/>
                <Image src="https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg" alt="user avatar" width={40} className=" rounded-full h-10 cursor-pointer" height={40}/>
            </div>
          </div>
          </div>
       
    )
}

export default Header
