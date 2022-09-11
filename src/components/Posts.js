import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Posts = ({ posts, token }) => {
    const [searchTerm, setSearchTerm] = useState('');
    function postMatches(post, string) {
        const{ title, description} = post;
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
              <input
               type = 'text'
               placeholder = 'Search'
               onChange = {(event) => setSearchTerm(event.target.value)}
              ></input>
             </form>
            </div>
        <div>
        {token ? (
          <Link to='/posts/create-post'>Create Post</Link>
        ) : (
          null
        )}
        {
           postsToDisplay.map((post) => {
               const {description, location, price, title, _id, isAuthor} = post;
             return (
                 <div  key={_id} >
             <h3>{title}</h3>
             <p>Description: {description}</p>
             <p>Price: {price}</p>
             <p>Location: {location}</p>
             {
                 isAuthor ? (
                     <div>
                    <Link to={`/posts/edit-post/${_id}`}>Edit</Link>
                    </div>
                 ) :(<div> <Link to={`/posts/${_id}`}>View</Link>
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







