// third party library

import axios from "axios";
import MockAdapter from "axios-mock-adapter";

// action
import { authenticateUser } from "../auth";

// actionType
import { AUTHENTICATE_USER } from "../../action_types/auth";

const mock = new MockAdapter(axios);

describe("auth Action", () => {
  afterEach(() => {
    mock.reset();
  });
  it("set user", () => {
    const mockedActions = {
      type: AUTHENTICATE_USER,
      payload: { user: { name: "chisom" } }
    };
    expect(authenticateUser({ user: { name: "chisom" } })).toEqual(
      mockedActions
    );
  });
});
