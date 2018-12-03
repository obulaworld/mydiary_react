// actionType
import {
  EDIT_SUCCESS,
  EDIT_FAILURE,
  EDIT_PROCESSING,
  EDIT_ERROR_CLEARED
} from "../../action_types/editEntry";

// reducer
import reducer from "../editEntry";

describe("EDIT ENTRY reducer", () => {
  it("should handle EDIT_PROCESSING", () => {
    expect(
      reducer([], {
        type: EDIT_PROCESSING,
        payload: true
      })
    ).toEqual({
      processing: true
    });
  });
  it("should handle EDIT_SUCCESS", () => {
    expect(
      reducer(
        {
          processing: false,
          error: "",
          message: ""
        },
        {
          type: EDIT_SUCCESS,
          payload: {
            data: {
              entry: {
                title: "chisom",
                category: "obulaworld"
              }
            },
            message: "Your entry was successfully created"
          }
        }
      )
    ).toEqual({
      message: "Your entry was successfully created",
      error: "",
      processing: false
    });
  });
  it("should handle CREATE_FAILURE", () => {
    expect(
      reducer([], {
        type: EDIT_FAILURE,
        payload:{message: "Failed to authenticate token"}
      })
    ).toEqual({
      processing: false,
      message: "",
      error: "Failed to authenticate token"
    });
  });
  it("should handle CREATE_ERROR_CLEARED", () => {
    expect(
      reducer([], {
        type: EDIT_ERROR_CLEARED,
      })
    ).toEqual({
      processing: false,
      message: "",
      error: ""
    });
  });
});
