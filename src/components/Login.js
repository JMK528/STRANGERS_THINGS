import React, { useState } from 'react';
import { loginUser } from '../api';
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import './Register';
const Login = ({ setToken, navigate }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async () => {
    const results = await loginUser(username, password);
    console.log(results);
    if (results.success) {
      setToken(results.data.token);
      window.localStorage.setItem('token', results.data.token);
      navigate('/profile');
    } else {
      console.log(results.error.message);
    }
  };
  return (
    <form className='login'
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit();
      }}
    >
      <h1>Log In</h1>
      <TextField style={{ margin: '.25rem', width: '100%', backgroundColor: 'whitesmoke' }}
        label='Enter Username'
        onChange={(event) => setUsername(event.target.value)}
      />
      <TextField style={{ margin: '.25rem', width: '100%', backgroundColor: 'whitesmoke' }}
        label='Enter Password'
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button style={{ height: '3rem', margin: '.25rem', backgroundColor:'#24a6d1' }} variant='contained' type='submit'>
        Log In
      </Button>
      <Link style={{ textDecoration: 'none' }} to='/register'>
        <Button
          style={{
            height: '3rem',
            margin: '.25rem', backgroundColor:'#FFF700',color:'black'
          }}
          variant='contained'
          type='submit'>
          Don't have an account? Sign Up
        </Button>
      </Link>
    </form>
  );
};
export default Login;