// react libraries
import React from 'react';

// third party libraries
import { shallow } from 'enzyme';

// components
import Feature from '../Feature';

/**
 * @desc setup up props
 * @return object
 */
function setup() {

  const enzymeWrapper = shallow(<Feature  />);

  return {
    enzymeWrapper,
  };
}

describe('components', () => {
  describe('Feature component', () => {
    it('should render self ', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.exists()).toBe(true);
    });
  });
});
