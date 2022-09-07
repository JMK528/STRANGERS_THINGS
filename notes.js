/*

AUTHENTICATION



What is Authentication?
A way to confirm a user is who they say they are. 



What kind of features need to be authenticated?
Account level features
  -Ex. Youtube
    - Posting videos
    - Creating channels
    - liking videos
    - subscribing
    - commenting


What is a Token?
- a string of letters and numbers
- an encoded json object that contains information


JWT





How do we get a token?
- on login or registration to the server, the server responds back with a token.


How can we use a token?
- we end up storing the token locally
  - in our app state
  - and in localStorage
- attach the token to HTTP requests in the headers object

HTTP request headers
Headers
Authentication: Bearer: <token>



LocalStorage
- a way to store information on a user's computer

  - setItem (used on Login or Registration)
    - sets key/value pair items 
    window.localStorage.setItem('token', <token>)
    
  - getItem (used when the website is first opened or opened again)
    - gets value based on item name
    window.localStorage.getItem('token')

  - removeItem (used when a user specifically logs out)
    - removes key/value pair in localStorage
    window.localStorage.removeItem('token')

useHistory





Making authenticated requests










*/