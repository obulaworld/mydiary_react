// react-libraries
import React, { Component } from "react";

// components
import MainHeader from "../Reusables/MainHeader";
import Footer from "../Reusables/Footer";

// styles
import "../../../public/scss/profile.scss";
import "../../../public/scss/_profile.scss";

/**
 *
 * @param {object} state
 * @param {string} action
 * @desc sample of a app home
 */
class Home extends Component {

  componentDidMount = () => {
    this.props.profile();
  }
  render() {
    console.log('check', this.props);
    return (
      <React.Fragment>
        <MainHeader />
        <section id="boxes">
          <div className="container">
            <div className="box2">
              <div className="right-card">
                <form>
                  <h3>Profile Details</h3>
                  <table className="table" border="1" align="center">
                    <thead>
                      <tr>
                        <th>Detail</th>
                        <th>Value</th>
                      </tr>
                    </thead>
                    <tbody id="table">
                      <tr>
                        <td>
                          <strong>Full Name</strong>
                        </td>
                        <td>{this.props.profileUser.profile.user?this.props.profileUser.profile.user.name: ''}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Email</strong>
                        </td>
                        <td>{this.props.profileUser.profile.user?this.props.profileUser.profile.user.email : ''}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Number of Entries</strong>
                        </td>
                        <td>{this.props.profileUser.entries.length}</td>
                      </tr>
                    </tbody>
                  </table>
                </form>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
