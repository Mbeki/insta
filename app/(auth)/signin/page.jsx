'use client'
import { getProviders,signIn } from "next-auth/react"
import Image from "next/image"
function SigninPage({searchParams}) {
  
    return (
        <div className="flex justify-center space-x-7 mt-20">
           <Image 
            className="hidden object-cover rotate-6 md:inline-flex md:w-48" 
            width={192} 
            height={200} 
            src="https://img.etimg.com/photo/msid-90150048,imgsize-352994/buy-instagram-likes-from-followers.io-website.jpg" 
            alt="instagram" 
           />
           <div className="">
           <div className="flex flex-col items-center">
           <Image 
            className="w-32 object-cover"
            width={128} 
            height={128} 
            src="https://st4.depositphotos.com/1050070/21934/i/450/depositphotos_219349048-stock-illustration-chisinau-moldova-september-2018-instagram.jpg" 
            alt="instagram logo"
           />
                <p className="text-sm italic my-10 text-center">This app is created for learning purposes</p>
                <button onClick={()=>signIn('google',{callbackUrl:"/"})} className="hover:bg-red-500 bg-red-400 rounded-lg p-3 text-white">Sign in with Google</button>
            </div>
           </div>
        </div>
    )
}

export default SigninPage
