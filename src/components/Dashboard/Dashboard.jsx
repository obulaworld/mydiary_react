// react libraries
import React, { Component } from "react";

//third party libraries
import history from '../../../src/history';

// scss
import "../../../public/scss/dashboard.scss";
import "../../../public/scss/_dash.scss";

// components
import MainHeader from "../Reusables/MainHeader";
import Footer from "../Reusables/Footer";


/**
 * @desc renders home page
 */
class Dashboard extends Component {
  state = {
    loading: true
  };

  componentDidMount = () => {
    this.props.fetch();
  };

  getEntry = (e) => {
    localStorage.setItem('currentId', e.currentTarget.dataset.id);
    history.push('/view-entry');
  }

  render() {
    return (
      <React.Fragment>
        <MainHeader />
        <div>
          <section id="boxes">
            {this.props.entries.entries.length ? (
              this.props.entries.entries.map((entry, index) => (
                <div className="container" id="box2" key={index}>
                  <div className="box2">
                    <h4>{entry.title}</h4>
                    <p> {entry.content.substring(1, 50)}</p>
                    <div className="recent">
                      <button className="button_1" data-id={entry.id} onClick={this.getEntry}>
                        View
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div id="box3">
                <h4>No Entry Yet</h4>
                <p>You currently have no entries......</p>
                <div className="recent">
                  <a href="/entry-add">
                    <button className="button_1">Create Entry</button>
                  </a>
                </div>
              </div>
            )}
          </section>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
export default Dashboard;
