import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Paper } from '@mui/material';
import navPIC from "./images/NavbarGif.gif"


const Navbar = ({ logout, token }) => {
  return (

    <header>
      <img style={{
        backgroundImage: `url(${navPIC})`, height: '25rem', width: '100%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }} src={navPIC} />
      <nav className='Navbar'>

        <h1 >Stranger's Things</h1>

        <Link style={{ textDecoration: 'none' }} to='/'><Button
          style={{
            borderColor: '#009DFF',
            backgroundColor: '#009DFF', color: 'black', width: '100%', borderRadius: 15
          }}>Home</Button></Link>


        <Link style={{ textDecoration: 'none' }} to='/posts'><Button style={{
            borderColor: '#009DFF',
            backgroundColor: '#009DFF', color: 'black', width: '100%', borderRadius: 15}}>Posts</Button></Link>

        {
          token ? (
            <>

              <Link style={{ textDecoration: 'none' }} to='/profile'><Button style={{
            borderColor: '#009DFF',
            backgroundColor: '#009DFF', color: 'black', width: '100%', borderRadius: 15}}>Profile</Button></Link>


              <Link style={{ textDecoration: 'none' }} to='/' onClick={() => logout()}><Button style={{
            borderColor: '#55586F',
            backgroundColor: '#55586F', color: 'black', width: '100%', borderRadius: 15}}>Logout</Button></Link>

            </>
          ) : (

            <Link style={{ textDecoration: 'none' }} to='/login'><Button style={{
            borderColor: '#009DFF',
            backgroundColor: '#FFF700', color: 'black', width: '100%', borderRadius: 15}}>Login</Button></Link>

          )
        }

      </nav>
    </header>

  )
}

export default Navbar;