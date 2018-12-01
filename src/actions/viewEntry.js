// third party library
import http from 'axios';

// actionType
import {
  VIEW_PROCESSING,
  VIEW_SUCCESS,
  VIEW_FAILURE,
  VIEW_ERROR_CLEARED,
} from '../action_types/viewEntry';

import history from '../history';

import { authenticateUser } from '../actions/auth';

/**
 * @param {object} data
 * @desc checking create loading
 * @returns {object} type
 */
export function viewPosting(data) {
  return {
    type: VIEW_PROCESSING,
    payload: data,
  };
}

/**
 * @desc checking successful create
 * @returns {object} type
 */
export function viewSuccess(data) {
  return {
    type: VIEW_SUCCESS,
    payload: data,
  };
}
/**
 * @param {object} data
 * @desc checking unsuccessful create
 * @returns {object} type
 */
export function viewFailure(data) {
  return {
    type: VIEW_FAILURE,
    payload: data,
  };
}
/**
 * @param {object} data
 * @desc clear error while create
 * @returns {object} type
 */
export function viewError() {
  return {
    type: VIEW_ERROR_CLEARED,
  };
}

export const userViewRequest = () => (dispatch) => {
  dispatch(viewPosting(true));
  const verificationToken = localStorage.getItem('diaryToken');
  const id = localStorage.getItem('currentId');
  const options = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'x-access-token': `${verificationToken}`
    }
  };
  return http
    .get(`https://my-diary-challenge.herokuapp.com/api/v1/entries/${id}`, options)
    .then((payload) => {
      dispatch(viewSuccess(payload.data));
    })
    .catch((err) => {
      dispatch(viewFailure(err.data.message));
    });
}
