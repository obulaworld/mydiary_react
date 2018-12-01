// modular importation
import initialState from "../store/initialState";
import {
  VIEW_SUCCESS,
  VIEW_FAILURE,
  VIEW_PROCESSING,
  VIEW_ERROR_CLEARED
} from "../action_types/viewEntry"  ;

/**
 * @param {object} state
 * @param {string} action
 * @desc sample of a rLOGIN
 */
export const reducer = (state = initialState.entry, action) => {
  switch (action.type) {
    case VIEW_PROCESSING:
      return {
        ...state,
        processing: action.payload
      };
    case VIEW_SUCCESS:
      return {
        ...state,
        processing: false,
        message: action.payload.message,
        error: "",
        entry: action.payload.entry
      };
    case VIEW_FAILURE:
      return {
        ...state,
        processing: false,
        message: '',
        error: action.payload.message
      };
    case VIEW_ERROR_CLEARED:
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

