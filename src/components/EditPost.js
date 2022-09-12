import React, { useState } from "react";
import { useParams, navigate } from "react-router-dom";
import { updatePost, deletePost } from "../api";
import DeleteIcon from '@mui/icons-material/Delete';



const EditPost = ({ posts, token, navigate, fetchPosts }) => {
    const { postID } = useParams();

    const [currentPost] = posts.filter(post => post._id === postID);

    const { title, description, location, price, willDeliver } = currentPost;

    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);
    const [newLocation, setNewLocation] = useState(location);
    const [newPrice, setNewPrice] = useState(price);
    const [newWillDeliver, setNewWillDeliver] = useState(willDeliver);

    async function editPost() {
        const updatedPost = {
            token: token,
            title: newTitle,
            description: newDescription,
            location: newLocation,
            price: newPrice,
            willDeliver: newWillDeliver,
            _id: postID
        }
        await updatePost(updatedPost)
        navigate('/posts' )   
        fetchPosts()
    }

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            editPost();
               
            
        }}>
            <input
                type='text'
                placeholder={title}
                onChange={(event) => setNewTitle(event.target.value)}
            />
            <input
                type='text'
                placeholder={description}
                onChange={(event) => setNewDescription(event.target.value)}
            />
            <input
                type='text'
                placeholder={price}
                onChange={(event) => setNewPrice(event.target.value)}
            />
            <input
                type='text'
                placeholder={location}
                onChange={(event) => setNewLocation(event.target.value)}
            />
            <label>Will Deliver</label>
            <input
                type='checkbox'               
                checked={newWillDeliver}
                onChange={(event) => setNewWillDeliver(event.target.checked)}
            />
            <button type="submit"
            onClick={() =>{
                editPost();          
            }}>Edit Post</button>
            <button onClick={() =>{
                deletePost(token, postID);                
            }}>Delete Post</button>
        </form>
    )
}

export default EditPost;