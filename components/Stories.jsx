'use client'
import minifaker from "minifaker"
import "minifaker/locales/en"
import { useEffect, useState } from "react"
import Story from "./Story"
import { useSession } from "next-auth/react"
function Stories() {
    const [storyUsers,setStoryUsers] = useState([])
    const {data: session} = useSession();
    useEffect(()=>{
        const storyUsers = minifaker.array(20,(i)=>(
            {
                username:minifaker.username({locale:"en"}).toLowerCase(),
                image:`https://i.pravatar.cc/150?img=${Math.ceil(Math.random()*70)}`,
                id:i

            }),
        );
        setStoryUsers(storyUsers)
      
    },[])
    return (
        <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border overflow-x-scroll rounded-sm scrollbar-none">
            {session && (<Story user={session.user} isUser="true"/>)}
          {storyUsers.map(user=>(<Story key={user.id} user={user}/>))}  
        </div>
    )
}

export default Stories
