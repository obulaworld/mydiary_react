// third party library
import http from "axios";
import swal from "sweetalert";
// actionType
import {
  EDIT_PROCESSING,
  EDIT_SUCCESS,
  EDIT_FAILURE,
  EDIT_ERROR_CLEARED
} from "../action_types/editEntry";

import history from "../history";
import { loaderOff } from "../actions/toggleLoader";

/**
 * @param {object} data
 * @desc checking create loading
 * @returns {object} type
 */
export function editPosting(data) {
  return {
    type: EDIT_PROCESSING,
    payload: data
  };
}

/**
 * @desc checking successful create
 * @returns {object} type
 */
export function editSuccess(data) {
  return {
    type: EDIT_SUCCESS,
    payload: data
  };
}
/**
 * @param {object} data
 * @desc checking unsuccessful create
 * @returns {object} type
 */
export function editFailure(data) {
  return {
    type: EDIT_FAILURE,
    payload: data
  };
}
/**
 * @param {object} data
 * @desc clear error while create
 * @returns {object} type
 */
export function editError() {
  return {
    type: EDIT_ERROR_CLEARED
  };
}

export const userEditRequest = details => dispatch => {
  dispatch(editPosting(true));
  const verificationToken = localStorage.getItem("diaryToken");
  const id = localStorage.getItem("currentId");
  const options = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "x-access-token": `${verificationToken}`
    }
  };
  return http
    .put(
      `https://my-diary-challenge.herokuapp.com/api/v1/entries/${id}`,
      details,
      options
    )
    .then(payload => {
      dispatch(editSuccess(payload.data));
      swal("Success", "Your entry was successfully updated", "success");
    })
    .catch(err => {
      dispatch(loaderOff(false));
      swal(
        "Error",
        "Your entry could not be updated at this time, please check all inputs",
        "error"
      );
      dispatch(editFailure(err.response.data.message));
    });
};
