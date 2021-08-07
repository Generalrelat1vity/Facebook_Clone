import React, { useState, useEffect } from 'react';

//Import Components
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
// DB
import db from './firebase';


function Feed() {
    const [posts, setPost] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) =>
            setPost(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
        );
    }, []);
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            {posts.map((post) => (
                <Post key={post.data.id} profilePic={post.data.profilePic} message={post.data.message} timestamp={post.data.timestamp} username={post.data.username} image={post.data.image} />
            ))}
        </div>
    );
}

export default Feed;
