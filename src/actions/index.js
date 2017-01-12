import axios from 'axios';

const ROOT_URL = 'http://localhost:3000';

export function signinUser( {email, password}) {
  return function(dispatch, state) {
    // Submit email/password to the server
    axios.post(`${ROOT_URL}/signin`, { email, password });
    // request is successfull...
    // - Update state to indicate user is authenticated
    // - Save JWT token
    // - redirect to '/feature'

    // request failed...
    // - Show error

  }

}
