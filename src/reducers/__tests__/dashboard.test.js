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
      reducer({ processing:true }, {
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
      message: "",
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
      reducer({
        processing: false,
        error: "Failed to authenticate token"
      }, {
        type: DASHBOARD_FAILURE,
        payload: "Failed to authenticate token"
      })
    ).toEqual({
      processing: false,
      error: "Failed to authenticate token",
    });
  });
});
