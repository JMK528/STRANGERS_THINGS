import React, { useState } from 'react';
import { registerUser } from '../api';

const Register = ({ setToken, navigate }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');
  const handleSubmit = async () => {
    console.log(password)
    console.log(confirmPassword)
    if ( password.search(/[A-Z]/) === -1){
      alert('Need UpperCase')
      return null
    } 
     if(password !== confirmPassword){
      alert('Password Don\'t Match')
      return null
    }
    const results = await registerUser(username, password);

    if (results.success) {
      setToken(results.data.token)
      window.localStorage.setItem('token', results.data.token)
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
        placeholder='Enter Username*'
        onChange={(event) => setUsername(event.target.value)}
      />
      <input 
        className='box'
        type='password'
        minLength={'8'}
        required title='8 character minimum'
        placeholder='Enter Password*'
        onChange={(event) => setPassword(event.target.value)}
      />
      <input 
        type='password'
        minLength={'8'}
        placeholder='Confirm Password*'
        onChange={(event) => setConfirmPassword(event.target.value)}
      />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Register;