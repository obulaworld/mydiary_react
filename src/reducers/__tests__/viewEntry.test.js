// actionType
import {
  VIEW_SUCCESS,
  VIEW_FAILURE,
  VIEW_PROCESSING
} from "../../action_types/viewEntry";

// reducer
import reducer from "../viewEntry";

describe("VIEW ENTRY reducer", () => {
  it("should handle VIEW_PROCESSING", () => {
    expect(
      reducer([], {
        type: VIEW_PROCESSING,
        payload: true
      })
    ).toEqual({
      processing: true
    });
  });
  it("should handle VIEW_SUCCESS", () => {
    expect(
      reducer(
        {
          processing: false,
          message: "Success",
          error: "",
          entry: {}
        },
        {
          type: VIEW_SUCCESS,
          payload: {
            entry: [{
              title: "chim"
            }],
            message: "Your request was successful"
          }
        }
      )
    ).toEqual({
      processing: false,
      message: "Your request was successful",
      error: "",
      entry: [
        {
          title: "chim"
        }
      ]
    });
  });
  it("should handle VIEW_FAILURE", () => {
    expect(
      reducer([], {
        type: VIEW_FAILURE,
        payload: {
          message: "Failed to authenticate token"}
      })
    ).toEqual({
      processing: false,
      error: "Failed to authenticate token",
      message:''
    });
  });
});
