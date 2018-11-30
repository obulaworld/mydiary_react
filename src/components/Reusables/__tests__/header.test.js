// react libraries
import React from 'react';

// third party libraries
import { shallow } from 'enzyme';

// components
import Header from '../Header';

/**
 * @desc setup up props
 * @return object
 */
function setup() {

  const enzymeWrapper = shallow(<Header  />);

  return {
    enzymeWrapper,
  };
}

describe('components', () => {
  describe('Header component', () => {
    it('should render self ', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.exists()).toBe(true);
    });
  });
});
