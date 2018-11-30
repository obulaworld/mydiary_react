// react libraries
import React from 'react';

// third party libraries
import { shallow } from 'enzyme';

// components
import MainHeader from '../MainHeader';

/**
 * @desc setup up props
 * @return object
 */
function setup() {

  const enzymeWrapper = shallow(<MainHeader  />);

  return {
    enzymeWrapper,
  };
}

describe('components', () => {
  describe('MainHeader component', () => {
    it('should render self ', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.exists()).toBe(true);
    });
  });
});
