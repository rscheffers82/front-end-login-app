import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER } from './types';

const ROOT_URL = 'http://localhost:3000';

export function signinUser( {email, password}) {
  return function(dispatch, state) {
    // Submit email/password to the server
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then( response => {
        // request is successfull...
        // - Update state to indicate user is authenticated
        dispatch({ type: AUTH_USER });
        // - Save JWT token
        // - redirect to '/feature'
        browserHistory.push('/feature');

      })
      .catch( () => {
        // request failed...
        // - Show error

      })
  }

}
