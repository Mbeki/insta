'use client'
import Image from "next/image";
import {signIn,signOut,useSession} from 'next-auth/react'


export default function MiniProfile() {
    const {data:session} = useSession()

  return (
    <div className='flex items-center justify-between mt-14 ml-10 w-full'>
      <Image
        src={session?.user?.image || "https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg"}
        alt='user-profile-pic or instagram logo'
        className='w-16 h-16 rounded-full border p-[2px]'
        width={64}
        height={64}
      />
      <div className='flex-1 ml-4'>
        <h2 className='font-bold'>{session?.user?.username}</h2>
        <h3 className='text-sm text-gray-400'>Welcome to Instagram</h3>
      </div>
     
       {session? (<button
          onClick={()=>signOut()}
          className='text-blue-500 text-sm font-semibold'
        >
          Sign Out
        </button>
        ):(
        <button
       onClick={()=>signIn()}
          className='text-blue-500 text-sm font-semibold'
        >
          Sign In
        </button>)}
     
    </div>
  );
}
