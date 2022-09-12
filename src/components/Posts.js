import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
        <div>
            <div >
                <form onSubmit={(event) => {
                    event.preventDefault();
                }}>
                    <TextField
                        type='text'
                        label='Search'
                        onChange={(event) => setSearchTerm(event.target.value)}
                    ></TextField>
                </form>
            </div>
            <div>
                {token ? (
                    <Button
                        style={
                            { height: '3rem', margin: '.25rem' }
                        } variant='contained'
                        type='submit'>
                        <Link style={{ textDecoration: 'none' }} to='/posts/create-post'>
                            Create Post
                        </Link>
                    </Button>
                ) : (
                    null
                )}
                {
                    postsToDisplay.map((post) => {
                        const { description, location, price, title, _id, isAuthor } = post;
                        return (
                            <div key={_id} >
                                <h3>{title}</h3>
                                <p>Description: {description}</p>
                                <p>Price: {price}</p>
                                <p>Location: {location}</p>
                                {
                                    isAuthor ? (
                                        <div>
                                            <Button style={{ height: '3rem', margin: '.25rem' }} variant='contained' type='submit'><Link style={{ textDecoration: 'none' }} to={`/posts/edit-post/${_id}`}>Edit</Link></Button>
                                        </div>
                                    ) : (<div><Button style={{ height: '3rem', margin: '.25rem' }} variant='contained' type='submit'><Link style={{ textDecoration: 'none' }} to={`/posts/${_id}`}>View</Link></Button>
                                    </div>
                                    )
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Posts;







