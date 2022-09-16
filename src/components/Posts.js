import { Button, Card, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { updatePost, deletePost } from "../api";


const Posts = ({ posts, token }) => {
    const [searchTerm, setSearchTerm] = useState('');
    function postMatches(post, string) {
        const { title, description } = post;
        if (title.toLowerCase().includes(string.toLowerCase()) || description.toLowerCase().includes(string.toLowerCase())) {
            return post;
        }
    }
    const filteredPosts = posts.filter(post => postMatches(post, searchTerm));
    const postsToDisplay = searchTerm.length ? filteredPosts : posts;
    return (
        <Card style={{ padding: '.5rem', margin: '.5rem', background: '#24A6D1' }} elevation={6} >
            <div >
                <form onSubmit={(event) => {
                    event.preventDefault();
                }}>
                    <Card style={{ padding: '.5rem', margin: '.5rem', background: 'white', }} >
                        <TextField style={{ width: '100%' }}
                            type='text'
                            label='Search'
                            onChange={(event) => setSearchTerm(event.target.value)}
                        ></TextField>
                    </Card>
                </form>
            </div>
            <div>
                {token ? (

                    <Link style={{ textDecoration: 'none' }} to='/posts/create-post'> <Button
                        style={
                            { height: '4rem', width: '100%', borderRadius: 15, background: '#001242' }
                        } variant='contained'
                        type='submit'>
                        Create Post
                    </Button></Link>

                ) : (
                    null
                )}
                {
                    postsToDisplay.map((post) => {
                        const { description, location, price, title, _id, isAuthor } = post;
                        return (
                            <Card style={{ padding: '.5rem', margin: '.5rem', background: 'white', }}>
                                <div key={_id} >
                                    <h3>{title}</h3>
                                    <p>Description: {description}</p>
                                    <p>Price: {price}</p>
                                    <p>Location: {location}</p>
                                    {
                                        isAuthor ? (
                                            <div>

                                                <Link
                                                    style={{
                                                        textDecoration: 'none'
                                                    }}
                                                    to={`/posts/edit-post/${_id}`}
                                                ><Button
                                                    style={{
                                                        height: '3rem',
                                                        margin: '.25rem', width: '100%', borderRadius: 15, backgroundColor: ' #000022',
                                                    }}
                                                    variant='contained'
                                                    type='submit'>Edit
                                                    </Button> </Link>

                                            </div>
                                        ) : (<div>
                                            <Link
                                                style={{
                                                    textDecoration: 'none'
                                                }}
                                                to={`/posts/${_id}`}><Button
                                                    style={{
                                                        height: '3rem',
                                                        margin: '.25rem', width: '100%', borderRadius: 15, backgroundColor: '#55586F'
                                                    }}
                                                    variant='contained'
                                                    type='submit'>
                                                    View
                                                </Button></Link>

                                        </div>
                                        )
                                    }
                                </div>
                            </Card>
                        )
                    })
                }
            </div>
        </Card>
    )
}
export default Posts;







