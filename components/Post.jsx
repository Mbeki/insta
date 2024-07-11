import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa6";

function Post({post}) {
    const {username,img,caption,userImg,id} = post;
    return (
        <div className="bg-white my-7 border rounded-md">
            <div className="flex items-center p-5">
                <Image src={userImg} alt={username} width={48} height={48} className="rounded-full object-cover border p-1 mr-3"/>
                <p className="font-bold flex-1">{username}</p>
                <BsThreeDots />
                 
            </div>
            <Image src={img} alt='posted' width={256} height={256}/>
            <div className="flex justify-between items-center px-4 pt-4">
                <div className="flex space-x-4" ><FaRegHeart className="btn" size={28}/>
                <BsChatDots className="btn" size={28}/>
                </div>
                <FaRegBookmark className="btn" size={28}/>
            </div>
        </div>
    )
}

export default Post
