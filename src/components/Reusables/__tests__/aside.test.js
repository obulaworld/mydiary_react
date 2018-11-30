// react libraries
import React from 'react';

// third party libraries
import { shallow } from 'enzyme';

// components
import Aside from '../Aside';

/**
 * @desc setup up props
 * @return object
 */
function setup() {

  const enzymeWrapper = shallow(<Aside  />);

  return {
    enzymeWrapper,
  };
}

describe('components', () => {
  describe('Aside', () => {
    it('should render self ', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.exists()).toBe(true);
    });
  });
});
