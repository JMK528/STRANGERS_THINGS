import React, { useState } from "react";
import { useParams, navigate } from "react-router-dom";
import { updatePost, deletePost } from "../api";
import { Button, TextField, Card} from '@mui/material';


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
        <Card style={{ padding: '.5rem', margin: '.5rem', background: '#001242',color:'whitesmoke' }} elevation={6} >
        <form onSubmit={(event) => {
            event.preventDefault();
            editPost();
               
            
        }}>
            <h1>Edit Post</h1>
            
            <TextField style={{width:'100%',padding: '.5rem', margin: '.5rem', background: 'whitesmoke'}}
                type='text'
                placeholder={title}
                onChange={(event) => setNewTitle(event.target.value)}
            />
           <TextField style={{width:'100%',padding: '.5rem', margin: '.5rem', background: 'whitesmoke'}}
                type='text'
                placeholder={description}
                onChange={(event) => setNewDescription(event.target.value)}
            />
            <TextField style={{width:'100%',padding: '.5rem', margin: '.5rem', background: 'whitesmoke'}}
                type='text'
                placeholder={price}
                onChange={(event) => setNewPrice(event.target.value)}
            />
           <TextField style={{width:'100%',padding: '.5rem', margin: '.5rem', background: 'whitesmoke'}}
                type='text'
                placeholder={location}
                onChange={(event) => setNewLocation(event.target.value)}
            />
            
            <label style={{color:'whitesmoke'}}>Will Deliver</label>
            <input
                type='checkbox'               
                checked={newWillDeliver}
                onChange={(event) => setNewWillDeliver(event.target.checked)}
            />
            <Button style={{
              marginTop: "2%",
              width: "100%",
              borderRadius: 35,
              background: "#55586F",
              opacity: "70%",
              color: "#24A6D1",
              borderColor: "#55586F",
            }}
            type="submit"
            variant="outlined"
            onClick={() =>{
                editPost();          
            }}>Edit Post</Button>
            <Button   style={{
              marginBottom: "2%",
              marginTop: "2%",
              width: "100%",
              borderRadius: 35,
              background: "#55586F",
              opacity: "70%",
              color: "red",
              borderColor: "#55586F",
            }}
            type="submit"
            color="error"
            variant="outlined" onClick={() =>{
                deletePost(token, postID);
                navigate('/posts' )
                fetchPosts()                  
            }}>Delete Post</Button>
           
        </form>
        </Card>
    )
}

export default EditPost;