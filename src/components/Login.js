import React, { useState } from "react";
import { loginUser } from '../api';


const Login = (token, navigate) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = async () => {
      const results = await loginUser(username, password);
      if (results.success) {
       
        navigate('/profile')
      } else {
        console.log(results.error.message)
      }
    }
    
    return (
      <form onSubmit={(event) => {
        event.preventDefault();
        handleSubmit();
      }}>
        <input 
          type='text'
          placeholder='Enter Username'
          onChange={(event) => setUsername(event.target.value)}
        />
        <input 
          type='password'
          placeholder='Enter Password'
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
    )
}

export default Login;