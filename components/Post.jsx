import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "@/firebase";
import Moment from "react-moment";

function Post({post,id}) {
    const {data:session} =useSession()
    const [comment,setComment] = useState("")
    const [comments,setComments] = useState([])
    const [likes,setLikes] = useState([])
    const [hasLiked,setHasLiked] = useState(false)

    useEffect(()=>{
        const unsubscribe = onSnapshot(
            collection(db,"posts",id,"likes"),(snapshot)=>{
                setLikes(snapshot.docs)
                
            }
        );
        return ()=>unsubscribe();
    },[id])
   
    useEffect(()=>{
        const unsubscribe = onSnapshot(
            query(collection(db,"posts",id,"comments"),orderBy("timestamp","desc")),(snapshot)=>{
                setComments(snapshot.docs)
            }
        );
        
        return ()=>unsubscribe();
    },[id])
   

    useEffect(()=>{
        setHasLiked(
            likes.findIndex(like=> like.id === session?.user?.uid) !== -1
        )
        
    },[likes,session.user.uid])
   
    async function likePost() {
        if(hasLiked){
            await deleteDoc(doc(db,"posts",id,"likes",session.user.uid))
        } else {
            await setDoc(doc(db,"posts",id,"likes",session.user.uid),{
                username: session.user.username,
            })
        }
        
    }
    const {username,image,caption,profileImg} = post;

    async function sendComment(event) {
        console.log(session.user)
        event.preventDefault()
        const commentToSend = comment;
        setComment("")
        await addDoc(collection(db,'posts',id,'comments'),{
            comment:commentToSend,
            username: session.user.username,
            userImage: session.user.image,
            timestamp: serverTimestamp(),
        })
    }
    return (
        <div className="bg-white my-7 border rounded-md">
            <div className="flex items-center p-5">
                <Image src={profileImg} alt={username} width={48} height={48} className="rounded-full object-cover border p-1 mr-3"/>
                <p className="font-bold flex-1">{username}</p>
                <BsThreeDots />
                 
            </div>
            <Image src={image} alt='posted' sizes="100vw" className="w-full object-cover" width={0} height={0} style={{ width: '100%' }}/>
            {/* <image src={image} alt="posted" className="w-full object-cover"/> */}
            {/* Post buttons */}
            {session &&  <>
            <div className="flex justify-between items-center px-4 pt-4">
                <div className="flex space-x-4" >
                    {hasLiked ? (<FaHeart onClick={likePost} className="btn text-red-400 " size={28}/>
                        ):(
                        <FaRegHeart onClick={likePost} className="btn" size={28}/>)}
                    
                    
                    <BsChatDots className="btn" size={28}/>
                </div>
                <FaRegBookmark className="btn" size={28}/>
            </div>
            </>}
           
            {/* Post comments */}
            <p className="p-5 truncated"><span className="mr-2 font-bold">{username}</span>{caption}</p>
            {comments.length>0 && (
                <div className="mx-10 max-h-24 overflow-y-scroll scrollbar-none">
                    {comments.map(comment =>(
                        <div key={comment.id} className="flex items-center space-x-2 mb-2">
                            <Image height={28} width={28} src={comment.data().userImage} className="rounded-full object-cover" alt="user"/>
                            <p className="font-semibold ">{comment.data().username}</p>
                            <p className="flex-1 truncate">{comment.data().comment}</p>
                            <Moment fromNow>{comment.data().timestamp?.toDate()}</Moment>
                        </div>
                    ))}
                </div>
            )}
            {/* Post input box */}
            {session && <form className="flex items-center p-4">
                <HiOutlineEmojiHappy size={28}/> 
                <input 
                    value={comment} 
                    onChange={(event)=>setComment(event.target.value)} 
                    className="border-none focus:ring-0 flex-1"type="text" placeholder="Enter your comment..."/>
                <button 
                type="submit"
                    onClick={sendComment}
                    disabled={!comment.trim()} 
                    className="text-blue-400 font-bold disabled:text-blue-200">Post</button>
            </form>}
            
        </div>
    )
}

export default Post
