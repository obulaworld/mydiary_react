// actionType
import {
  PROFILE_PROCESSING,
  PROFILE_FAILURE,
  PROFILE_SUCCESS
} from "../../action_types/profile";

// reducer
import reducer from "../profile";

describe("Profile reducer", () => {
  it("should handle PROFILE_PROCESSING", () => {
    expect(
      reducer([], {
        type: PROFILE_PROCESSING,
        payload: true
      })
    ).toEqual({
      processing: true
    });
  });
  it("should handle PROFILE_SUCCESS", () => {
    expect(
      reducer(
        {
          processing: false,
          message: "",
          error: "",
          profile: {}
        },
        {
          type: PROFILE_SUCCESS,
          payload: {
            user:
              {
                name: "chim"
              },

          }
        }
      )
    ).toEqual({
      processing: false,
      error: "",
      message: "",
      profile: {
        user: {
          name: 'chim'
        }
      },
    });
  });
  it("should handle PROFILE_FAILURE", () => {
    expect(
      reducer([], {
        type: PROFILE_FAILURE,
        payload: "Failed to authenticate token"
      })
    ).toEqual({
      processing: false,
      error: "Failed to authenticate token",
      message: ""
    });
  });
});
