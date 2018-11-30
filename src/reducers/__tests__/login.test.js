// actionType
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_PROCESSING,
  LOGIN_ERROR_CLEARED
} from "../../action_types/login";

// reducer
import reducer from "../login";

describe("LOGIN reducer", () => {
  it("should handle LOGIN_PROCESSING", () => {
    expect(
      reducer([], {
        type: LOGIN_PROCESSING,
        payload: true
      })
    ).toEqual({
      processing: true
    });
  });
  it("should handle LOGIN_SUCCESS", () => {
    expect(
      reducer(
        {
          processing: false,
          error: "",
          message: ""
        },
        {
          type: LOGIN_SUCCESS,
          payload: {
            data: {
              user: {
                email: "chim@gmail.com",
                username: "obulaworld"
              }
            },
            message: "You are successfully logged in"
          }
        }
      )
    ).toEqual({
      message: "You are successfully logged in",
      error: "",
      processing: false
    });
  });
  it("should handle SIGNUP_FAILURE", () => {
    expect(
      reducer([], {
        type: LOGIN_FAILURE,
        payload:"Failed to authenticate token"
      })
    ).toEqual({
      processing: false,
      message: "",
      error: "Failed to authenticate token"
    });
  });
  it("should handle LOGIN_ERROR_CLEARED", () => {
    expect(
      reducer([], {
        type: LOGIN_ERROR_CLEARED,
      })
    ).toEqual({
      processing: false,
      message: "",
      error: ""
    });
  });
});
