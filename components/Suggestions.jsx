'use client'
import minifaker from "minifaker"
import "minifaker/locales/en"
import Image from "next/image"
import { useEffect, useState } from "react"
function Suggestions() {
    const [suggestions,setSuggestions] = useState([])
    
    useEffect(()=>{
        const suggestions = minifaker.array(5,(i)=>(
            {
            username: minifaker.username({locale:"en"}).toLowerCase(),
            jobTitle: minifaker.jobTitle(),
            id: i 

            }
        ))
        setSuggestions(suggestions)
        
    },[])

    return (
        <div className="mt-4 ml-10">
           <div className="flex justify-between mb-5 text-sm">
            <h3 className="font-bold text-gray-400">Suggestions for you</h3>
            <button className="text-gray-600 font-semibold cursor-pointer">See all</button>
            </div> 
            {suggestions.map(suggestion => (
                <div key={suggestion.id} className="flex items-center justify-between mt-3">
                    <Image src={`https://i.pravatar.cc/150?img=${Math.ceil(Math.random()*70)}`} height={40} width={40} className="rounded-full border p-[2px]"alt="user avatar"/>
                    <div className="flex-1 ml-4">
                        <h2 className="font-semibold text-sm">{suggestion.username}</h2>
                        <h3 className="font-sm text-gray-400 truncate w-[230px]">{suggestion.jobTitle}</h3>
                    </div>
                    <button className="font-semibold text-blue-400 text-sm">Follow</button>
                </div>
             ))}
        </div>
    )
}

export default Suggestions
