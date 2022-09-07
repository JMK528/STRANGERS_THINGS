import React, {useState} from "react";
import {createPosts} from '../api';

const Createpost = () => {
  const [title,setTitle]= useState('')
  const [description,setDescription]= useState('')
  const [price,setPrice]= useState('')
    return (
     <div>
       <input value={title} onChange={(event) => {
        setTitle(event.target.value)
       }}/>
       {/* <input>Description: </input>
       <input>Price: </input>
       <input></input> */}
    </div>    
  )}
  
  export default Createpost;