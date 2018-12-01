// third party library
import http from 'axios';
import swal from 'sweetalert';

// actionType
import {
  PROFILE_PROCESSING,
  PROFILE_SUCCESS,
  PROFILE_FAILURE,
} from '../action_types/profile';

import { loaderOff } from '../actions/toggleLoader';

/**
 * @param {object} data
 * @desc checking login loading
 * @returns {object} type
 */
export function profilePosting(data) {
  return {
    type: PROFILE_PROCESSING,
    payload: data,
  };
}

/**
 * @desc checking successful login
 * @returns {object} type
 */
export function profileSuccess(data) {
  return {
    type: PROFILE_SUCCESS,
    payload: data,
  };
}
/**
 * @param {object} data
 * @desc checking unsuccessful login
 * @returns {object} type
 */
export function profileFailure(data) {
  return {
    type: PROFILE_FAILURE,
    payload: data,
  };
}

export const userProfileRequest = () => (dispatch) => {
  dispatch(profilePosting(true));
  const verificationToken = localStorage.getItem('diaryToken');
  const options = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'x-access-token': `${verificationToken}`
    }
  };
  return http
    .get('https://my-diary-challenge.herokuapp.com/api/v1/auth/user', options)
    .then((payload) => {
      dispatch(profileSuccess(payload.data));
    })
    .catch((err) => {
      dispatch(loaderOff(false))
      dispatch(profileFailure(err.response.data.message));
    });
};
