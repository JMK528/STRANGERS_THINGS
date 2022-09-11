import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Posts = ({ posts, token }) => {

  return (
    <>
      <h1>POSTS</h1>
      <div id='outerdiv element'>
        {token ? (
          <Link to='/posts/create-post'>Create Post</Link>
        ) : (
          null
        )}
        {posts.map((post) => {
          const { description, location, price, title, _id, isAuthor } = post;
          return (
            <div key={_id}>
              <form>
                <h3>{title}</h3>
                <p>Description: {description}</p>
                <p>Price: {price}</p>
                <p>Location: {location}</p>
                {
                  isAuthor ? (
                  <Link to={`/posts/edit-post/${_id}`}>Edit</Link>
                ) : (
                  <Link to={`/posts/${_id}`}>View</Link>
                )}
                {/* {
                 isAuthor ? (
                     <div>
                    <button>Delete</button>
                    <button>Edit</button>
                    <Link to={`/posts/${_id}`}>View</Link>
                    </div>
                 ) :(<Link to={`/posts/${_id}`}>View</Link>)
             } */}
              </form>
            </div>
          );
        })}
      </div>
    </>
  )
}

export default Posts;