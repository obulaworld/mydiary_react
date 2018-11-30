// react libraries
import React from 'react';

// third party libraries
import { shallow } from 'enzyme';

// components
import Dashboard from '../Dashboard';

/**
 * @desc setup up props
 * @return object
 */
function setup() {

  const props = {
    entries: {
      entries: {

      }
    },
    fetch: jest.fn
  }

  const enzymeWrapper = shallow(<Dashboard  {...props}/>);

  return {
    enzymeWrapper,
  };
}

describe('components', () => {
  describe('Home component', () => {
    it('should render self ', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.exists()).toBe(true);
    });
  });
});
