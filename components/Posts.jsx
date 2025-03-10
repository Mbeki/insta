'use client'
import { useEffect, useState } from "react"
import Post from "./Post"
import { collection, onSnapshot, orderBy, query } from "firebase/firestore"
import { db } from "@/firebase"


function Posts() {
    
    const [posts,setPosts] = useState()
    useEffect(()=>{
        const unsubscribe=onSnapshot(
            query(collection(db,'posts'),orderBy("timestamp","desc")),(snapshot)=>{
            setPosts(snapshot.docs)
            }
        );
        return ()=>unsubscribe();
    },[])
   
   
    return (
        <div>
            {posts?.map(post=><Post key={post.id} id={post.id} post={post.data()}/>)}
        </div>
    )
}

export default Posts
