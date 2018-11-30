// react libraries
import React from "react";

// third party libraries
import { shallow } from "enzyme";

// components
import Signup from "../Signup";

/**
 * @desc setup up props
 * @return object
 */
function setup() {
  const props = {
    loading: {},
    loaderOn: jest.fn,
    signup: jest.fn,

  };

  const enzymeWrapper = shallow(<Signup {...props} />);

  return {
    enzymeWrapper
  };
}

describe("components", () => {
  describe("Signup component", () => {
    it("should render self ", () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.exists()).toBe(true);
    });

    it("should cancel default action when the form is submitted ", () => {
      const { enzymeWrapper } = setup();
      let prevented = false;
      enzymeWrapper.find("form").simulate("submit", {
        preventDefault: () => {
          prevented = true;
        }
      });
      expect(prevented).toBe(true);
    });
    it("should cancel default action when the form is submitted ", () => {
      const { enzymeWrapper } = setup();
      let prevented = false;
      enzymeWrapper.find(".firstInput").simulate("change", {
        preventDefault: () => {
          prevented = true;
        },
        target: {
          name: {}
        }
      });
      expect(prevented).toBe(true);
    });
  });
});
