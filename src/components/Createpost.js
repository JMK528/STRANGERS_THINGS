import React, {useState} from "react";
import { navigate } from "react-router-dom";
import {createPost, getPosts} from '../api';
import { Button, TextField, Card } from '@mui/material';

const Createpost = ( { token, fetchPosts,navigate }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [willDeliver, setWillDeliver] = useState(false);
  const newPost = {
    title,
    description,
    price,
    location,
    willDeliver,
  }
  
 
  async function addPost() {
    const results = await createPost(token, newPost);    
    fetchPosts();
    navigate('/posts')
    

  }
    return (
      <Card>
      <form onSubmit={(event) => {
        event.preventDefault();
        addPost();
        
      }}>
        <TextField
          type='text'
          label="Title*"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <TextField
          type='text'
          label="Description*"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <TextField
          type='text'
          label="Price*"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
        <TextField
          type='text'
          label="Location*"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />
        <label>Will Deliver</label>
        <input
          type='checkbox'
          label="Will Deliver*"
          checked={willDeliver}
          onChange={(event) => setWillDeliver(!willDeliver)}
        />
            
        <Button style={{ height: '3rem', margin: '.25rem' }} variant='contained' type='submit' onClick={(event) => {
          event.preventDefault();
          addPost();
        }}>Create a New Post</Button>
        
      </form> 
      </Card> 
  )}
  
  export default Createpost;