// third party library
import http from 'axios';

// actionType
import {
  DASHBOARD_PROCESSING,
  DASHBOARD_SUCCESS,
  DASHBOARD_FAILURE,
} from '../action_types/dashboard';


/**
 * @param {object} data
 * @desc checking login loading
 * @returns {object} type
 */
export function dashboardProcessing(data) {
  return {
    type: DASHBOARD_PROCESSING,
    payload: data,
  };
}

/**
 * @desc checking successful login
 * @returns {object} type
 */
export function dashboardSuccess(data) {
  return {
    type: DASHBOARD_SUCCESS,
    payload: data,
  };
}
/**
 * @param {object} data
 * @desc checking unsuccessful login
 * @returns {object} type
 */
export function dashboardFailure(data) {
  return {
    type: DASHBOARD_FAILURE,
    payload: data,
  };
}

export const userEntriesRequest = () => (dispatch) => {
  dispatch(dashboardProcessing(true));
  const verificationToken = localStorage.getItem('diaryToken');
  const options = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'x-access-token': `${verificationToken}`
    }
  };
  return http
    .get('https://my-diary-challenge.herokuapp.com/api/v1/entries', options)
    .then((payload) => {
      if(payload.data.entries){
        dispatch(dashboardSuccess(payload.data));
      }else{
        dispatch(dashboardFailure(payload.data));
      }
    })
    .catch((err) => {
      dispatch(dashboardFailure(err.response.data.message));
    });
};
