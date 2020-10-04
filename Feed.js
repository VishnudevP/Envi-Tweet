import React, { useEffect, useState } from 'react'
import StoryReel from "./StoryReel"
import MessageSender from "./MessageSender" 
import "./Feed.css"
import Post from "./Post"
import db from "./firebase"

function Feed() {

    const [ posts , setPosts] = useState([])

    useEffect(() => {
        db.collection("posts").onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => ({ id : doc.id , data : doc.data()})))
        ))
      
    }, [])

    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            {posts.map((post) => (
            <Post
                key={post.data.id}
                profilePic={post.data.profilePic}
                message={post.data.message}
                timeStamp={post.data.timeStamp}
                username={post.data.username}
                image={post.data.image}
            />
            ))}
        </div>
    );
}

export default Feed
