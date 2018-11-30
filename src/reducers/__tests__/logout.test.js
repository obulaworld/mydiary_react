// actionType
import {
  LOGOUT_USER,
}
  from '../../action_types/auth';

// reducer
import reducer from '../auth';

describe('auth reducer', () => {
  it('should handle LOGOUT_USER', () => {
    expect(
      reducer([], {
        type: LOGOUT_USER
      })
    ).toEqual(
      {
        isAuth: false,
        user: {}
      }
    );
  });
});
