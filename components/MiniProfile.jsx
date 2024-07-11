import Image from "next/image"

function MiniProfile() {
    return (
        <div className="flex items-center justify-between mt-14 ml-10 ">
            <Image src="https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg" alt="user avatar" width={64} className="rounded-full  border p-[2px]"  height={64} />
            <div className="flex-1 ml-4">
                <h2 className="font-bold">mikemaignan</h2>
                <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
            </div>
            <button className="font-semibold text-blue-400 text-sm">Sign out</button>
        </div>
    )
}

export default MiniProfile
