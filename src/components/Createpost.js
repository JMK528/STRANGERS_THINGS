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
       <input value={description} onChange={(event) => {
        setDescription(event.target.value)
       }}/>
       <input value={price} onChange={(event) => {
        setPrice(event.target.value)
       }}/>
       <input></input>
    </div>    
  )}
  
  export default Createpost;