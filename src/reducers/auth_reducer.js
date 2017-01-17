import {
  AUTH_USER,
  UNAUTH_USER,
  FETCH_MESSAGE,
  AUTH_ERROR
} from '../actions/types';


export default (state = {}, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        error: '',
        authenticated: true
      };
    case UNAUTH_USER:
      return {
        ...state,
        error: '',
        authenticated: false
      };
    case FETCH_MESSAGE:
      return {
        ...state,
        message: action.payload
      };
    case AUTH_ERROR:
      return {
        ...state,
        error: action.payload
      };
  }
  return state;
}
