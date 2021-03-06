// modular importation
import initialState from "../store/initialState";
import {
  DASHBOARD_SUCCESS,
  DASHBOARD_FAILURE,
  DASHBOARD_PROCESSING,
} from "../action_types/dashboard"  ;
/**
 *
 * @param {object} state
 * @param {string} action
 * @desc sample of a rLOGIN
 */
export const reducer = (state = initialState.entries, action) => {
  switch (action.type) {
    case DASHBOARD_PROCESSING:
      return {
        ...state,
        processing: action.payload
      };
    case DASHBOARD_SUCCESS:
      return {
        ...state,
        processing: false,
        message: action.payload.message,
        error: "",
        entries: action.payload.entries
      };
    case DASHBOARD_FAILURE:
      return {
        ...state,
        processing: false,
        message: '',
        error: action.payload.message
      };
    default:
      return state;
  }
};

export default reducer;

