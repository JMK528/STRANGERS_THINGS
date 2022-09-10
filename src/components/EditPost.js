import React, { useState } from "react";
import { useParams } from "react-router-dom";



const EditPost = () => {
    const { postID } = useParams();

    const [currentPost] = posts.filter(post => post._id === postID);

    const { title, description, location, price, willDeliver } = currentPost;

    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);
    const [newLocation, setNewLocation] = useState(location);
    const [newPrice, setNewPrice] = useState(price);
    const [newWillDeliver, setNewWillDeliver] = useState(willDeliver);

    async function editPost () {
        const updatedPost = {
            newTitle,
            newDescription,
            newLocation,
            newPrice,
            newWillDeliver
        }
        console.log(updatedPost)
    }

    return (
        <form onSubmit={(ev) => {
            ev.preventDefault();
            console.log('form submitted')
        }}>
            <input
                type='text'
                placeholder={title}
                onChange={(ev) => setNewTitle(ev.target.value)}
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
                onChange={() => setNewWillDeliver(!willDeliver)}
            />
            <button type="submit">Edit Post</button>
        </form>
    )
}

export default EditPost;