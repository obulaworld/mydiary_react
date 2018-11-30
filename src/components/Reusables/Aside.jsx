import React, { Component } from "react";

/**
 * @param {object} score
 * @desc sample of an action
*/
class Aside extends Component {
  render() {
    return (
      <React.Fragment>
          <aside>
            <nav>
                <ul>
                    <a href="index"><li >Home</li></a>
                    <a href="login"><li>Login</li></a>
                    <a href="register"><li className="current">Signup</li></a>
                </ul>
            </nav>
        </aside>
        <label htmlFor="offcanvas" className="biglabel"></label>
      </React.Fragment>
    );
  }
}

export default Aside;
