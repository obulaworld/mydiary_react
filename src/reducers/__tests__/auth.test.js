// actionType
import {
  AUTHENTICATE_USER,
}
  from '../../action_types/auth';

// reducer
import reducer from '../auth';

describe('auth reducer', () => {
  it('should handle AUTHENTICATE USER', () => {
    expect(
      reducer([], {
        type: AUTHENTICATE_USER,
        payload: {
          name: 'chisom'
        }
      })
    ).toEqual(
      {
        isAuth: true,
        user: {
          name: 'chisom'
        }
      }
    );
  });
});
