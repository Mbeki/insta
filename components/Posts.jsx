import Post from "./Post"

function Posts() {
    const posts = [
        {
            id:"1",
            username:"mikemaignan",
            userImg: "https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg",
            img: "https://images.unsplash.com/photo-1720423413643-363310b689e8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            caption: "Nice car in 7th street"
        },
        {
            id:"2",
            username:"vandevenn",
            userImg: "https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg",
            img: "https://images.unsplash.com/photo-1720649718712-dff5514d5534?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            caption: "The art of carving"
        },
        {
            id:"3",
            username:"wokilambeki",
            userImg: "https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg",
            img: "https://images.unsplash.com/photo-1720440931331-bdc0e7af2045?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
