// actionType
import {
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_PROCESSING,
  SIGNUP_ERROR_CLEARED
} from "../../action_types/signup";

// reducer
import reducer from "../signup";

describe("SIGNUP reducer", () => {
  it("should handle SIGNUP_PROCESSING", () => {
    expect(
      reducer([], {
        type: SIGNUP_PROCESSING,
        payload: true
      })
    ).toEqual({
      processing: true
    });
  });
  it("should handle SIGNUP_SUCCESS", () => {
    expect(
      reducer(
        {
          processing: false,
          error: "",
          message: ""
        },
        {
          type: SIGNUP_SUCCESS,
          payload: {
            data: {
              user: {
                firstname: "chisom",
                username: "obulaworld"
              }
            },
            message: "You are successfully registered"
          }
        }
      )
    ).toEqual({
      message: "You are successfully registered",
      error: "",
      processing: false
    });
  });
  it("should handle SIGNUP_FAILURE", () => {
    expect(
      reducer([], {
        type: SIGNUP_FAILURE,
        payload:"Failed to authenticate token"
      })
    ).toEqual({
      processing: false,
      message: "",
      error: "Failed to authenticate token"
    });
  });
  it("should handle SIGNUP_ERROR_CLEARED", () => {
    expect(
      reducer([], {
        type: SIGNUP_ERROR_CLEARED,
      })
    ).toEqual({
      processing: false,
      message: "",
      error: ""
    });
  });
});
