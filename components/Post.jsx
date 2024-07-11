import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa6";
import { HiOutlineEmojiHappy } from "react-icons/hi";

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
            {/* Post buttons */}
            <div className="flex justify-between items-center px-4 pt-4">
                <div className="flex space-x-4" >
                    <FaRegHeart className="btn" size={28}/>
                    <BsChatDots className="btn" size={28}/>
                </div>
                <FaRegBookmark className="btn" size={28}/>
            </div>
            {/* Post comments */}
            <p className="p-5 truncated"><span className="mr-2 font-bold">{username}</span>{caption}</p>
            {/* Post input box */}
            <form className="flex items-center p-4">
                <HiOutlineEmojiHappy size={28}/> 
                <input className="border-none focus:ring-0 flex-1"type="text" placeholder="Enter your comment..."/>
                <button className="text-blue-400 font-bold">Post</button>
                </form>
            
        </div>
    )
}

export default Post
