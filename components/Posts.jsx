import Post from "./Post"

function Posts() {
    const posts = [
        {
            id:"1",
            username:"mikemaignan",
            userImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/800px-Instagram_logo_2022.svg.png",
            image: "https://images.unsplash.com/photo-1720423413643-363310b689e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
            caption: "Nice car in 7th street"
        },
        {
            id:"2",
            username:"vandevenn",
            userImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/800px-Instagram_logo_2022.svg.png",
            image: "https://images.unsplash.com/photo-1720649718712-dff5514d5534?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
            caption: "The art of carving"
        },
        {
            id:"3",
            username:"wokilambeki",
            userImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/800px-Instagram_logo_2022.svg.png",
            image: "https://images.unsplash.com/photo-1720440931331-bdc0e7af2045?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
            caption: "Welcome to the savannah"
        }
    ]
    return (
        <div>
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    )
}

export default Posts
