// react libraries
import React, { Component } from "react";


//components
import MainHeader from '../Reusables/MainHeader'
import Footer from '../Reusables/Footer'
/**
 * @desc renders home page
 */
class ViewEntry extends Component {

  componentDidMount = () =>{
    this.props.getEntry();
  }

  render() {
    console.log(this.props.entry[0]);
    const { entry } = this.props;
    return (
      <React.Fragment>
        <MainHeader />
        <section id="boxes">
          <div className="container" id="box">
            <div className="box2">
              <h4>
                Title: <span>{this.props.entry[0]? entry[0].title : ''}</span>
              </h4>
              <h5>
                Date: <span>{this.props.entry[0]? entry[0].created_at : ''}</span>
              </h5>
              &nbsp;
              <h5>
                Category: <span>{this.props.entry[0]? entry[0].category : ''}</span>
              </h5>
              &nbsp;
              <h5>
                SubCategory: <span>{this.props.entry[0]? entry[0].sub_category : ''}</span>
              </h5>
              <h4>Content: </h4>
              <p>
              {this.props.entry[0]? entry[0].content : ''}
              </p>
              <div className="recent">
                <a href="/dashboard">
                  <button>Back</button>
                </a>
                <a href="/dashboard">
                  <button>Edit</button>
                </a>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}
export default ViewEntry;
