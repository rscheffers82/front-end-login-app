import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  AUTH_USER,
  AUTH_ERROR,
} from './types';

const ROOT_URL = 'http://localhost:3000';

export function signinUser( {email, password}) {
  return function(dispatch, state) {
    // Submit email/password to the server
    axios.post(`${ROOT_URL}/signin`, { email, password })
      // request is successfull...
      .then( response => {
        // - Update state to indicate user is authenticated
        dispatch({ type: AUTH_USER });

        // - Save JWT token
        localStorage.setItem('token', response.data.token);

        // - redirect to '/feature'
        browserHistory.push('/feature');

      })
      .catch( () => {
        // request failed...
        // - set error
        dispatch(authError('Bad login info'));
      })
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}
