// third party library
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// action
import { userSignupRequest } from '../signup';
import { authenticateUser } from '../auth';

// actionType
import { SIGNUP_SUCCESS, SIGNUP_PROCESSING, SIGNUP_FAILURE } from '../../action_types/signup';
import { AUTHENTICATE_USER } from '../../action_types/auth';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);
const details = {
  name: 'chim',
  email: 'chim@gmail.com',
  password: 'georgina1'
};
const payload = {
  data: {
    user: {
      firstname: 'chisom',
      username: 'obulaworld',
    },
  },
};
const payload2 = {
  data: {
    user: {
      firstname: 'chisom',
      username: 'obulaworld',
    },
  },
};
const failure = {
  status: 'failed',
  message: 'Failed to authenticate token.',
};
describe('Comment on an article actions', () => {
  afterEach(() => {
    mock.reset();
  });
  it('should comment on a specific article', () => {
    mock.onPost('https://my-diary-challenge.herokuapp.com/api/v1/auth/signup').reply(201, payload2);
    const mockedActions = [
      {
        type: SIGNUP_PROCESSING,
        payload: true,
      },
      {
        type: SIGNUP_SUCCESS,
        payload,
      },
    ];
    const store = mockStore({
      auth: {},
    });
    return store.dispatch(userSignupRequest(details)).then(() => {
      expect(store.getActions()[0]).toEqual(mockedActions[0]);
    });
  });
  it('should fail to comment on a specific article without valid token', () => {
    mock.onPost('https://my-diary-challenge.herokuapp.com/api/v1/auth/signup').reply(401, failure);
    const mockedActions2 = [
      {
        type: SIGNUP_PROCESSING,
        payload: true,
      },
      {
        type: SIGNUP_FAILURE,
        payload: failure.message,
      },
    ];
    const store = mockStore({
      comment: {},
    });
    return store.dispatch(userSignupRequest(details)).then(() => {
      expect(store.getActions()[0]).toEqual(mockedActions2[0]);
    });
  });
});
