// redux library
import { combineReducers } from "redux";

// Reducers
import signup from "./signup";
import auth from "./auth";
import loading from './loading'

/**
 * @desc combines all the reducers
 */
export default combineReducers({
  signup,
  auth,
  loading
});
