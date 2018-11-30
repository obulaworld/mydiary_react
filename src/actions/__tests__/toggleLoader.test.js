// third party library
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

// action
import { loaderOn, loaderOff } from "../toggleLoader";

// actionType
import { LOADING_TRUE, LOADING_FALSE } from "../../action_types/toggleLoader";

const middlewares = [thunk];
const mock = new MockAdapter(axios);

describe("toggleLoader Action", () => {
  afterEach(() => {
    mock.reset();
  });
  it("turn loading to true", () => {
    const mockedActions =
      {
        type: LOADING_TRUE,
        payload: true
      }
    ;
    expect(loaderOn(true)).toEqual(mockedActions);
  });
  it("turn loading to false", () => {
    const mockedActions =
      {
        type: LOADING_FALSE,
        payload: false
      }
    ;
    expect(loaderOff(false)).toEqual(mockedActions);
  });
});
