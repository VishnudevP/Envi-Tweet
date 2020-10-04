import React, {useState} from 'react'
import "./MessageSender.css"
import Avatar from '@material-ui/core/Avatar';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import PhotoLibraryOutlinedIcon from '@material-ui/icons/PhotoLibraryOutlined';
import InsertEmoticonOutlinedIcon from '@material-ui/icons/InsertEmoticonOutlined';
import { useStateValue} from './StateProvider'
import db from "./firebase";
import firebase from "firebase";



function MessageSender() {
    const [ {user} , dispatch] = useStateValue();
    
    const [input , setInput] = useState("");
    const [imageURL , setImageURL] = useState("");

    const handleSubmit = e => {
        
        e.preventDefault();

        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.
            serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageURL,
        });

        setInput("");
        setImageURL("");

    }

    return (
        <div class="messageSender">
            <div class="messageSender__top">
            <Avatar src={user.photoURL} />
                <form>
                    <input 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)}
                    className="messageSender__input" 
                    type="text" placeholder={`What's on your mind`}
                    />

                    <input
                     value={imageURL} 
                     onChange={(e) => setImageURL(e.target.value)}       
                    placeholder="image URL (optional)"
                    />
                    
                    <button type="submit" onClick={handleSubmit}>
                        Hidden Submit
                    </button>
                </form>
            </div>

            <div class="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamOutlinedIcon style={{color:"red"}}/>
                    <h5>Live Video</h5>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryOutlinedIcon style={{color:"green"}}/>
                    <h5>Photo/Video</h5>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonOutlinedIcon style={{color:"yellow"}}/>
                    <h5>Feeling/Activity</h5>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
