// react libraries
import React from 'react';

// third party libraries
import { shallow } from 'enzyme';

// components
import Footer from '../Footer';

/**
 * @desc setup up props
 * @return object
 */
function setup() {

  const enzymeWrapper = shallow(<Footer  />);

  return {
    enzymeWrapper,
  };
}

describe('components', () => {
  describe('Footer component', () => {
    it('should render self ', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.exists()).toBe(true);
    });
  });
});
