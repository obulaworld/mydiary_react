// react libraries
import React from 'react';

// third party libraries
import { shallow } from 'enzyme';

// components
import Carousel from '../Carousel';

/**
 * @desc setup up props
 * @return object
 */
function setup() {

  const enzymeWrapper = shallow(<Carousel  />);

  return {
    enzymeWrapper,
  };
}

describe('components', () => {
  describe('Carousel', () => {
    it('should render self ', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.exists()).toBe(true);
      expect(enzymeWrapper.find('.container')).toBeDefined();
      expect(enzymeWrapper.find('h1').text()).toBe('PEN IT DOWN!!!')
      expect(enzymeWrapper.find('p').text()).toBe('Your entries are safe with MYDIARY.com.Every moment is a given, share your favourite moments on MYDIARY.com')

    });
  });
});
