// actionType
import {
  LOADING_TRUE,
  LOADING_FALSE,
} from '../action_types/toggleLoader';

/**
 * @param {object} data
 * @desc checking login loading
 * @returns {object} type
 */
export function loaderOn(data) {
  return {
    type: LOADING_TRUE,
    payload: data,
  };
}

/**
 * @desc checking successful login
 * @returns {object} type
 */
export function loaderOff(data) {
  return {
    type: LOADING_FALSE,
    payload: data,
  };
}
