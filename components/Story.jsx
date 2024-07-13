import Image from "next/image";
import { FaPlus } from "react-icons/fa";

function Story({user,isUser}) {
    const {image,username} = user;
    return (
        <div className="relative group cursor-pointer">
            <Image size={56} className="rounded-full p-[1.5px] border-2  group-hover:scale-110 transition-transform duration-200 ease-out border-red-500" src={image} alt={username} width={256 } height={256}/>
            {isUser && <FaPlus size={24} className="absolute top-4 left-4 text-white"/>}
            <p className="text-xs w-14 truncate">{username}</p>
            
        </div>
    )
}

export default Story
