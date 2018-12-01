// modular importation
import initialState from "../store/initialState";
import {
  PROFILE_SUCCESS,
  PROFILE_FAILURE,
  PROFILE_PROCESSING,
} from "../action_types/profile";
/**
 *
 * @param {object} state
 * @param {string} action
 * @desc sample of a rLOGIN
 */
export const reducer = (state = initialState.profile, action) => {
  switch (action.type) {
    case PROFILE_PROCESSING:
      return {
        ...state,
        processing: action.payload
      };
    case PROFILE_SUCCESS:
      return {
        ...state,
        processing: false,
        error: "",
        profile: action.payload
      };
    case PROFILE_FAILURE:
      return {
        ...state,
        processing: false,
        message: '',
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
