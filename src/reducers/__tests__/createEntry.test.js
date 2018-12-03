// actionType
import {
  CREATE_SUCCESS,
  CREATE_FAILURE,
  CREATE_PROCESSING,
  CREATE_ERROR_CLEARED
} from "../../action_types/createEntry";

// reducer
import reducer from "../createEntry";

describe("CREATE ENTRY reducer", () => {
  it("should handle CREATE_PROCESSING", () => {
    expect(
      reducer([], {
        type: CREATE_PROCESSING,
        payload: true
      })
    ).toEqual({
      processing: true
    });
  });
  it("should handle CREATE_SUCCESS", () => {
    expect(
      reducer(
        {
          processing: false,
          error: "",
          message: ""
        },
        {
          type: CREATE_SUCCESS,
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
        type: CREATE_FAILURE,
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
        type: CREATE_ERROR_CLEARED,
      })
    ).toEqual({
      processing: false,
      message: "",
      error: ""
    });
  });
});
