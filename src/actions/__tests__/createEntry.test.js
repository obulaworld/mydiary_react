// third party library
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// action
import { userCreateRequest } from '../createEntry';

// actionType
import { CREATE_SUCCESS, CREATE_PROCESSING, CREATE_FAILURE } from '../../action_types/createEntry';
import { LOADING_FALSE } from '../../action_types/toggleLoader';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);
const details = {
  title: 'chim',
};
const payload = {
  data: {
    entry: {
      title: 'chim',
    },
  },
};
const payload2 = {
  data: {
    entry: {
      title: 'chim',
    },
  },
};
const failure = {
  status: 'failed',
  message: 'Failed to authenticate token.',
};
describe('Create Entry Action', () => {
  afterEach(() => {
    mock.reset();
  });
  it('should create a new action for creating an entry', () => {
    mock.onPost('https://my-diary-challenge.herokuapp.com/api/v1/entries').reply(201, payload2);
    const mockedActions = [
      {
        type: CREATE_PROCESSING,
        payload: true,
      },
      {
        type: CREATE_SUCCESS,
        payload,
      },
    ];
    const store = mockStore({
      entry: {},
    });
    return store.dispatch(userCreateRequest(details)).then(() => {
      expect(store.getActions()).toEqual(mockedActions);
    });
  });
  it('should CREATE an action for failed creation', () => {
    mock.onPost('https://my-diary-challenge.herokuapp.com/api/v1/entries').reply(401, failure);
    const mockedActions2 = [
      {
        type: CREATE_PROCESSING,
        payload: true,
      },
      {
        type: LOADING_FALSE,
        payload: false,
      },
      {
        type: CREATE_FAILURE,
        payload: failure.message,
      },
    ];
    const store = mockStore({
      comment: {},
    });
    return store.dispatch(userCreateRequest(failure.message)).then(() => {
      expect(store.getActions()[0]).toEqual(mockedActions2[0]);
    });
  });
});
