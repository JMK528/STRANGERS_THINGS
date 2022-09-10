import React from 'react';
import { Link } from 'react-router-dom';

const Profile = ({ messages,token}) => {
  return ( 
    <>
    <h1>PROFILE</h1>
    <div id='outerdiv'>
       {messages.map((message) => {
        const { _id, content, post, fromUser, createdAt } = message;
        return (
          <div key={_id}>
            <form>
            <h2>Hello</h2>
            <p>{content}</p>
            <p>{post}</p>
            <p>{fromUser}</p>
            <p>{createdAt}</p>
            </form>
          </div>
        );
       })}
      </div>
    </>
    // <>
    //   <h1>PROFILE</h1>
    //   <div id='outerdiv element'>     
    //     {posts.map((post) => {
    //       const { message,title } = post;
    //       return (
    //         <div >
    //           <form>
    //             <h3>{title}</h3>
    //             <p>message: {message}</p>              
    //             {
    //               isAuthor ? (
    //               <button>You are the Author</button>
    //             ) : (
    //               <Link to={`/posts/${_id}`}>View</Link>
    //             )}            
    //           </form>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </>
  )
}


export default Profile;