'use client'
import MiniProfile from "./MiniProfile"
import Posts from "./Posts"
import Stories from "./Stories"
import Suggestions from "./Suggestions"
import { getServerSession } from "next-auth"
import { useSession } from "next-auth/react"

 function Feed() {
    // const session = getServerSession();
    const {data:session} = useSession()
    return (
        <main className={`grid ${session?"grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto":"grid-cols-1 md:grid-cols-2 md:max-w-3xl mx-auto"} `}>
            <section className="md:col-span-2">
                <Stories/>
                <Posts/>
            </section>
            <section className=" hidden md:inline-grid  md:col-span-1">
                <div className="fixed w-[380px]">
                    {/* Mini-profile */}
                    <MiniProfile/>
                    {/* Suggestions */}
                    {session && <Suggestions/>}
                </div>
            </section>
            
        </main>
    )
}

export default Feed
