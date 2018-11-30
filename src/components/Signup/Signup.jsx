// React libraries
import React, { Component } from "react";

// components
import Header from "../Reusables/Header";

// scss
import "../../../public/scss/register.scss";
import "../../../public/scss/_regist.scss";

//third party libraries
import { css } from "react-emotion";
import { FadeLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  text-align: center
  border-color: red;
`;

/**
 * @param {object} score
 * @desc sample of an action
*/
class Signup extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const details = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };
    this.props.loaderOn();
    this.props.signup(details);
  };

  onChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <section className="container" align="center">
          <div className="card">
            <div className="inner-card">
              <div className="left-card">
                <a href="index.html">
                  <img src="/images/favicon.png" />
                </a>
                <h1>Get Your MyDiary Account</h1>
                <div id="diary-image">
                  <img id="image-dairy" src="/images/diary.png" />
                </div>
              </div>
              <div className="right-card">
                <form onSubmit={this.onSubmit}>
                  <div id="diary-image2">
                    <a href="/">
                      <img src="/images/favicon.png" />
                    </a>
                  </div>
                  <div>
                    <label htmlFor="name">Full Name:</label>
                    <br />
                    <input
                      type="text"
                      id="name"
                      required
                      name="name"
                      value={this.state.name}
                      onChange={this.onChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="email">E-Mail Address:</label>
                    <br />
                    <input
                      type="email"
                      id="email"
                      required
                      name="email"
                      value={this.state.email}
                      onChange={this.onChange}
                    />
                  </div>
                  <div>
                    <div className="go-left">
                      <label htmlFor="password">Password:</label>
                      <br />
                      <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        value={this.state.register_password}
                        onChange={this.onChange}
                      />
                    </div>
                  </div>
                  <div align="center" className="register-button">
                    <button type="submit" id="register">
                      Register
                    </button>
                  </div>

                  <div align="center">
                    <FadeLoader
                      className={override}
                      sizeUnit={"px"}
                      size={15}
                      color={"#e8491d"}
                      loading={this.props.loading.loading}
                    />
                  </div>
                </form>
                <hr />
                <h3>
                  Have an account?{" "}
                  <a href="login.html" className="turn">
                    Login
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Signup;
