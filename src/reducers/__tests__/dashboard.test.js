// actionType
import {
  DASHBOARD_SUCCESS,
  DASHBOARD_FAILURE,
  DASHBOARD_PROCESSING
} from "../../action_types/dashboard";

// reducer
import reducer from "../dashboard";

describe("DASHBOARD reducer", () => {
  it("should handle DASHBOARD_PROCESSING", () => {
    expect(
      reducer([], {
        type: DASHBOARD_PROCESSING,
        payload: true
      })
    ).toEqual({
      processing: true
    });
  });
  it("should handle DASHBOARD_SUCCESS", () => {
    expect(
      reducer(
        {
          processing: false,
          message: "",
          error: "",
          entries: [{
            title: "chim"
          }]
        },
        {
          type: DASHBOARD_SUCCESS,
          payload: {
            entries: [{
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
      entries: [
        {
          title: "chim"
        }
      ]
    });
  });
  it("should handle DASHBOARD_FAILURE", () => {
    expect(
      reducer([], {
        type: DASHBOARD_FAILURE,
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
