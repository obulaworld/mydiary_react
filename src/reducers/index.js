// redux library
import { combineReducers } from "redux";

// Reducers
import signup from "./signup";
import auth from "./auth";
import loading from './loading';
import login from "./login";
import entries from "./dashboard";

/**
 * @desc combines all the reducers
 */
export default combineReducers({
  signup,
  auth,
  loading,
  login,
  entries
});
