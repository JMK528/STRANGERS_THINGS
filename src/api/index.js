const baseURL = 'https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-PT'

export const getPosts = async() => {
  try {
    const response = await fetch(`${baseURL}/posts`);
    const results = await response.json();
    return results;
  } catch(error) {
    console.log('error getting all posts')
  }
}


export const registerUser = async (username, password) => {
  try {
    const response = await fetch(`${baseURL}/users/register`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
        //'Authorization': 'bearer actual token string'
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password
        }
      })
    })
    const result = await response.json();
    return result;
  } catch(error) {
    console.log('error registering user')
  }
}

export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${baseURL}/users/loginregister`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
        //'Authorization': 'bearer actual token string'
      },
      body: JSON.stringify({
        user: {
          username: '',
          password: ''
        }
      })
    })
    const result = await response.json();
    // return result;
    console.log(result)
  } catch(error) {
    console.log('error logging in user')
  }
}