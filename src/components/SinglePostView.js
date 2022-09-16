import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { createMessage, deletePost } from "../api";
import { Button, TextField, Card, Paper } from '@mui/material';

const SendMessage = ({ postID, token, navigate }) => {
    const [message, setMessage] = useState({ content: '' })
    

    async function addMessage() {
        await createMessage({ postID, message, token })
    }

    return (
        <Card style={{ padding: '.5rem', margin: '.5rem', background: '#001242', }} elevation={6}>
        <form onSubmit={(ev) => {
            ev.preventDefault();
            addMessage();
            navigate('/post')
        }}>
            <TextField
            style={{borderColor:'Gray', backgroundColor:'whitesmoke'}}
                type='text'
                label="Enter Message"
                onChange={(ev) => setMessage({ content: ev.target.value })}
            />
            <Button style={{
              marginTop: "2%",
              width: "100%",
              borderRadius: 35,
              background: "#55586F",
              opacity: "70%",
              color: "#24A6D1",
              borderColor: "#55586F",
            }} type='submit'onClick={() =>{
                addMessage();
                navigate('/posts') 
            }}>SendMessage</Button>
        </form>
        </Card>
    )
}

const SinglePostView = ({ posts, token, navigate, getMe }) => {
    const [activeMessage, setActiveMessage] = useState(false);
    const { postID } = useParams();

    if (posts.length) {
        const [currentPost] = posts.filter(posts => posts._id === postID);
        const { title, description, location, price, willDeliver, updatedAt, createdAt, isAuthor } = currentPost;

        return (
            <Card style={{ padding: '.5rem', margin: '.5rem', background: 'B4D2E7', }} elevation={6}>
                <Card style={{ padding: '.5rem', margin: '.5rem', background: 'B4D2E7', }} elevation={6}>
                    <h3>{title}</h3>
                    <p>Description: {description}</p>
                    <p>Price: {price}</p>
                    <p>Location: {location}</p>
                    <p>Will Deliver: {willDeliver}</p>
                </Card>
                {
                    isAuthor ? (
                        <>
                            <Link style={{ textDecoration: 'none' }} to={`/posts`}><Button  style={{
                                                    height: '3rem',
                                                    margin: '.25rem', width: '100%', borderRadius: 15
                                                }}
                                                variant='contained' >View All</Button></Link>
                            <Link style={{ textDecoration: 'none' }} to={`/posts`}><Button  style={{
                                                    height: '3rem',
                                                    margin: '.25rem', width: '100%', borderRadius: 15
                                                }}
                                                variant='contained' onClick={() => deletePost(token, postID)}>Delete</Button></Link>
                        </>
                    ) : (

                        <>
                            <Link style={{ textDecoration: 'none' }} to={`/posts`}><Button  style={{
                                                    height: '3rem',
                                                    margin: '.25rem', width: '100%', borderRadius: 15, backgroundColor:'#55586F'
                                                }}
                                                variant='contained' >View All</Button></Link>
                            {token &&
                                <>

                                    <Button  style={{
                                                    height: '3rem',
                                                    margin: '.25rem', width: '100%', borderRadius: 15
                                                }}
                                                variant='contained' onClick={() => setActiveMessage(!activeMessage)}>Message this user</Button>
                                    
                                    {
                                        activeMessage && <SendMessage  token={token} postID={postID} navigate={navigate} getMe={getMe} />
                                    }
                                </>
                            }
                        </>
                    )
                }
                <div>
                    <p className="singlePostStamp">Created At: {createdAt}</p>
                    <p className="singlePostStamp">Updated At: {updatedAt}</p>
                </div>
            </Card>
        )
    } else {
        return (
            <h1>Waiting for Posts...</h1>
        )
    }
}
export default SinglePostView;