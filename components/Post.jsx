import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";

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
        </div>
    )
}

export default Post
