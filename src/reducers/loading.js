// modular importation
import initialState from "../store/initialState";
import { LOADING_TRUE, LOADING_FALSE } from "../action_types/toggleLoader";

/**
 *
 * @param {object} state
 * @param {string} action
 * @desc sample of a reducer
 */
export const reducer = (state = initialState.loading, action) => {
  switch (action.type) {
    case LOADING_TRUE:
      return {
        ...state,
        loading: action.payload
      };
    case LOADING_FALSE:
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
