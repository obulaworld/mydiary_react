// actionType
import {
  LOADING_TRUE,
  LOADING_FALSE
}
  from '../../action_types/toggleLoader';

// reducer
import reducer from '../loading';

describe('loader reducer', () => {
  it('should handle LOADING_TRUE', () => {
    expect(
      reducer([], {
        type: LOADING_TRUE,
        payload: true
      })
    ).toEqual(
      {
        loading: true
      }
    );
  });
  it('should handle LOADING_FALSE', () => {
    expect(
      reducer([], {
        type: LOADING_FALSE,
        payload: false
      })
    ).toEqual(
      {
        loading: false
      }
    );
  });
});
