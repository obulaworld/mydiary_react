// third party library
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// action
import { userProfileRequest } from '../profile';

// actionType
import { PROFILE_SUCCESS, PROFILE_PROCESSING, PROFILE_FAILURE } from '../../action_types/profile';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);

const payload2 = {
  data: {
    entries: {
      title: 'school',
    },
  },
};
const failure = {
  status: 'failed',
  message: 'Failed to authenticate token.',
};
describe('Dashboard Actions', () => {
  afterEach(() => {
    mock.reset();
  });
  it('should fetch user entries', () => {
    mock.onGet('https://my-diary-challenge.herokuapp.com/api/v1/auth/user').reply(200, payload2);
    const mockedActions = [
      {
        type: PROFILE_PROCESSING,
        payload: true,
      },
      {
        type: PROFILE_SUCCESS,
        payload: payload2,
      },
    ];
    const store = mockStore({
      entries: {},
    });
    return store.dispatch(userProfileRequest()).then(() => {
      expect(store.getActions()[0]).toEqual(mockedActions[0]);
    });
  });
  it('should fail to fetch user entries without token', () => {
    mock.onGet('https://my-diary-challenge.herokuapp.com/api/v1/auth/user').reply(401, failure);
    const mockedActions2 = [
      {
        type: PROFILE_PROCESSING,
        payload: true,
      },
      {
        type: PROFILE_FAILURE,
        payload: failure.message,
      },
    ];
    const store = mockStore({
      auth: {},
    });
    return store.dispatch(userProfileRequest()).then(() => {
      expect(store.getActions()[0]).toEqual(mockedActions2[0]);
    });
  });
});
