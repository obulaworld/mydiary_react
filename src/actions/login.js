// third party library
import http from 'axios';
import swal from 'sweetalert';

// actionType
import {
  LOGIN_PROCESSING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_ERROR_CLEARED,
} from '../action_types/login';

import history from '../history';

import { authenticateUser } from '../actions/auth';
import { loaderOff } from '../actions/toggleLoader';

/**
 * @param {object} data
 * @desc checking login loading
 * @returns {object} type
 */
export function loginPosting(data) {
  return {
    type: LOGIN_PROCESSING,
    payload: data,
  };
}

/**
 * @desc checking successful login
 * @returns {object} type
 */
export function loginSuccess(data) {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
}
/**
 * @param {object} data
 * @desc checking unsuccessful login
 * @returns {object} type
 */
export function loginFailure(data) {
  return {
    type: LOGIN_FAILURE,
    payload: data,
  };
}
/**
 * @param {object} data
 * @desc clear error while login
 * @returns {object} type
 */
export function clearError() {
  return {
    type: LOGIN_ERROR_CLEARED,
  };
}

export const userLoginRequest = (details) => (dispatch) => {
  dispatch(loginPosting(true));
  return http
    .post('https://my-diary-challenge.herokuapp.com/api/v1/auth/login', details)
    .then((payload) => {
      const { user, token } = payload.data;
      localStorage.setItem('diaryToken', token);
      dispatch(loginSuccess(payload.data));
      dispatch(authenticateUser(user));
      swal('Success','You have been successfully logged in', 'success' )
      history.push('/dashboard');
    })
    .catch((err) => {
      dispatch(loaderOff(false))
      swal('Error', err.response.data.message, 'error' )
      dispatch(loginFailure(err.response.data.message));
    });
};
