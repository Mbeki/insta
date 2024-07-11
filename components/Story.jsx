import Image from "next/image";

function Story({user}) {
    const {img,username} = user;
    return (
        <div>
            <Image src={img} alt={username} width={256 } height={256}/>
            <p>{username}</p>
            
        </div>
    )
}

export default Story
