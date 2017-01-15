import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  AUTH_USER,
  UNAUTH_USER,
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

export function signupUser(email, password, passwordConfirm) {
  return function(dispatch, state) {

  }
}


export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function signoutUser() {
  // delete the local token
  localStorage.removeItem('token');

  // dispatch the action to flip authenticated to false
  return ({ type: UNAUTH_USER });

}
