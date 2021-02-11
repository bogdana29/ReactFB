import React,{useEffect,useState} from 'react'
import './Feed.css'
import StoryList from './StoryList'
import MessageSender from './MessageSender'
import Post from './Post'
import db from '../firebase'
function Feed() {
    const [posts,setPosts] = useState([]);
    
    useEffect(() => {
        db.collection('postare').orderBy('timestamp','desc').onSnapshot(snapshot=>(
            setPosts(snapshot.docs.map(doc => ({id:doc.id,data:doc.data()})))
        ));
    }, [])
    return (
        <div className="feed"> 
            <StoryList/>
            <MessageSender/>
            {posts.map(post=>(
                <Post 
                key ={post.id}
                message={post.data.message}
                image={post.data.image}
                username={post.data.username}
                timestamp={post.data.timestamp}
                profilePic={post.data.profilePic}
            />

            ))}
            <Post 
                message="Mesajul meu .... nu din baza"
                image="https://i.pinimg.com/564x/15/2d/bb/152dbba151303d7add1f7c91e72076a5.jpg"
                username="bogdanle"
                timestamp="Timestampu e=meu"
                profilePic="./curc.jpeg"
            />

        </div>
    )
}

export default Feed
