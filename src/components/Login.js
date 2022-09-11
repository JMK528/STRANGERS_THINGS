import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from '../api';


const Login = ({ setToken, navigate }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    const results = await loginUser(username, password);
    if (results.success) {
      setToken(results.data.token)
      window.localStorage.setItem('token', results.data.token)
      navigate('/profile')
    } else {
      console.log(results.error.message)
    }
  }

  return (
    <>
      <h1>Log In</h1>
      <form onSubmit={(event) => {
        event.preventDefault();
        handleSubmit();
      }}>
        <input
          type='text'
          placeholder='Enter Username*'
          onChange={(event) => setUsername(event.target.value)} />
        <input
          // className='box'
          type='password'
          // minLength={'8'}
          // required title='8 character minimum'
          placeholder='Current Password*'
          onChange={(event) => setPassword(event.target.value)} />
        <button type='submit'>Log In</button>
        <Link to='/register'>Don't Have an Account? Sign Up!</Link>
      </form>
    </>

  )
}

export default Login;
