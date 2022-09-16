import React from 'react';
import { Link } from 'react-router-dom';
import { Button, TextField, Card, Paper } from '@mui/material';

const Profile = ({ user }) => {
  const messages = user.messages;
  const userID = user._id;

  return (
    <Card style={{ padding: '.5rem', margin: '.5rem', backgroundColor:'#55586F', color: 'whitesmoke' }} elevation={6}>
      <h1>PROFILE</h1>
      <Card style={{ padding: '.5rem', margin: '.5rem', background: '#040F16', color: 'whitesmoke' }} elevation={2}>
        <h1>Messages to ME:</h1>
        {
          messages && messages.map(message => {
            const fromUserID = message.fromUser._id;
            const { username } = message.fromUser;
            const { title } = message.post;

            if (userID !== fromUserID) {
              return (
                <Card style={{ padding: '.5rem', margin: '.5rem', background: 'B4D2E7', }} elevation={6} key={message._id}>
                  <p>From User:{username}</p>
                  <p>Message: {message.content}</p>
                  <p>Post Reference: {title}</p>
                </Card>
              )
            }
          })

        }
      </Card>
      <Card style={{ padding: '.5rem', margin: '.5rem', background: '#0094C6', }} elevation={6}>
        <h1>Messages from ME:</h1>
        {
          messages && messages.map(message => {
            const fromUserID = message.fromUser._id;
            if (userID === fromUserID) {
              return (
                <Card style=
                  {{
                    padding: '.5rem',
                    margin: '.5rem',
                    background: 'whitesmoke',
                  }}
                  elevation={6}
                  key={message._id}>
                  {message.content}
                </Card>
              )
            }
          })
        }
      </Card>
    </Card>
  )
}

export default Profile;