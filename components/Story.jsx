import Image from "next/image";

function Story({user}) {
    const {img,username} = user;
    return (
        <div>
            <Image size={56} className="rounded-full p-[1.5px] border-2 cursor-pointer hover:scale-110 transition-transform duration-200 ease-out border-red-500" src={img} alt={username} width={256 } height={256}/>
            <p className="text-xs w-14 truncate">{username}</p>
            
        </div>
    )
}

export default Story
