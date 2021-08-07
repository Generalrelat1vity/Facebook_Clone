import React, { useState } from 'react';
//Import Components
import './MessageSender.css';

//Import from @material-ui/core or @material-ui/icons
import { Avatar } from '@material-ui/core';
import Videocamicon from '@material-ui/icons/Videocam';
import PhotoLibaryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

//Context API
import { useStateValue } from './StateProvider';
// Database
import db from './firebase'
import firebase from 'firebase';

function MessageSender() {
    // all useState
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [{ user }, dispatch] = useStateValue();
    const handleSubmit = e => {
        e.preventDefault();

        // Some Database
        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            image: imageUrl,
        });

        setInput("");
        setImageUrl("");
    };
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={user.photoURL} />
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} placeholder={`What's on your mind?, ${user.displayName}?`} />
                    <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Image URL (Optional)" />
                    <button onClick={handleSubmit} type="submit">
                        Hidden Submit
                    </button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <Videocamicon style={{ color: "red" }} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibaryIcon style={{ color: "green" }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{ color: "orange" }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    );
}

export default MessageSender;
