// third party library
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// action
import { userLoginRequest } from '../login';

// actionType
import { LOGIN_SUCCESS, LOGIN_PROCESSING, LOGIN_FAILURE } from '../../action_types/login';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);
const details = {
  email: 'chim@gmail.com',
  password: 'georgina1'
};
const payload = {
  data: {
    user: {
      email: 'chim@gmail.com',
      username: 'obulaworld',
    },
  },
};
const payload2 = {
  data: {
    user: {
      email: 'chim@gmail.com',
      username: 'obulaworld',
    },
  },
};
const failure = {
  status: 'failed',
  message: 'Failed to authenticate token.',
};
describe('Login Actions', () => {
  afterEach(() => {
    mock.reset();
  });
  it('should login user successfuly', () => {
    mock.onPost('https://my-diary-challenge.herokuapp.com/api/v1/auth/login').reply(200, payload2);
    const mockedActions = [
      {
        type: LOGIN_PROCESSING,
        payload: true,
      },
      {
        type: LOGIN_SUCCESS,
        payload,
      },
    ];
    const store = mockStore({
      auth: {},
    });
    return store.dispatch(userLoginRequest(details)).then(() => {
      expect(store.getActions()[0]).toEqual(mockedActions[0]);
    });
  });
  it('should fail to login a specific user without valid data', () => {
    mock.onPost('https://my-diary-challenge.herokuapp.com/api/v1/auth/login').reply(400, failure);
    const mockedActions2 = [
      {
        type: LOGIN_PROCESSING,
        payload: true,
      },
      {
        type: LOGIN_FAILURE,
        payload: failure.message,
      },
    ];
    const store = mockStore({
      auth: {},
    });
    return store.dispatch(userLoginRequest(details)).then(() => {
      expect(store.getActions()[0]).toEqual(mockedActions2[0]);
    });
  });
});
