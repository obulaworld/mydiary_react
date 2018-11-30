// react libraries
import React from 'react';

// third party libraries
import { shallow } from 'enzyme';

// components
import Home from '../Home';

/**
 * @desc setup up props
 * @return object
 */
function setup() {

  const enzymeWrapper = shallow(<Home  />);

  return {
    enzymeWrapper,
  };
}

describe('components', () => {
  describe('Home component', () => {
    it('should render self ', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.exists()).toBe(true);
      expect(enzymeWrapper.find('h1').text()).toBe('Awsome Features of MyDiary.com')
    });
  });
});
