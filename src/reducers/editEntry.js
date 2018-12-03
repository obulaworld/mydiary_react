// modular importation
import initialState from "../store/initialState";
import {
  EDIT_SUCCESS,
  EDIT_FAILURE,
  EDIT_PROCESSING,
  EDIT_ERROR_CLEARED
} from "../action_types/editEntry"  ;
/**
 *
 * @param {object} state
 * @param {string} action
 * @desc sample of a rLOGIN
 */
export const reducer = (state = initialState.entry, action) => {
  switch (action.type) {
    case EDIT_PROCESSING:
      return {
        ...state,
        processing: action.payload
      };
    case EDIT_SUCCESS:
      return {
        ...state,
        processing: false,
        message: action.payload.message,
        error: "",
        entries: action.payload.entry
      };
    case EDIT_FAILURE:
      return {
        ...state,
        processing: false,
        message: '',
        error: action.payload.message
      };
    case EDIT_ERROR_CLEARED:
      return {
        ...state,
        processing: false,
        message: '',
        error: ''
      };
    default:
      return state;
  }
};

export default reducer;

