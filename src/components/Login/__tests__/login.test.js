// react libraries
import React from "react";

// third party libraries
import { shallow } from "enzyme";

// components
import Login from "../Login";

/**
 * @desc setup up props
 * @return object
 */
function setup() {
  const props = {
    loading: {},
    loaderOn: jest.fn,
    login: jest.fn
  };

  const enzymeWrapper = shallow(<Login {...props} />);

  return {
    enzymeWrapper
  };
}

describe("components", () => {
  describe("Login component", () => {
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
