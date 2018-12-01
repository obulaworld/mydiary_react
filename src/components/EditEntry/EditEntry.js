// react libraries
import React, { Component } from "react";

//third party libraries
import { css } from "react-emotion";
import { FadeLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  text-align: center
  border-color: red;
`;

// components
import MainHeader from "../Reusables/MainHeader";
import Footer from "../Reusables/Footer";

// scss
import "../../../public/scss/entry-add.scss";
import "../../../public/scss/_entry-ad.scss";

/**
 * @desc renders home page
 */
class EditEntry extends Component {
  state = {
    title: this.props.entry[0] ? this.props.entry[0].title : "",
    category: this.props.entry[0] ? this.props.entry[0].category : "",
    subCategory: this.props.entry[0] ? this.props.entry[0].sub_category : "",
    content: this.props.entry[0] ? this.props.entry[0].content : "",
    loading: false
  };

  componentDidMount = () => {
    this.props.getEntry();
  };

  setTheState = () => {
    this.setState({
      title: this.props.entry[0] ? this.props.entry[0].title : "",
      category: this.props.entry[0] ? this.props.entry[0].category : "",
      subCategory: this.props.entry[0] ? this.props.entry[0].sub_category : "",
      content: this.props.entry[0] ? this.props.entry[0].content : "",
    });
  }

  onChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.loaderOn();
    const details = {
      title: this.state.title,
      category: this.state.category,
      subCategory: this.state.subCategory,
      content: this.state.content
    };
    this.props.editEntry(details);
  };

  render() {
    const { entry } = this.props;
    return (
      <React.Fragment>
        <MainHeader />
        <section id="boxes">
          <div className="container">
            <div className="box2">
              <div className="success-check" role="alert" id="success" />
              <div className="right-card">
                <form onSubmit={this.onSubmit}>
                  <div>
                    <label htmlFor="title">Title:</label>
                    <br />
                    <input
                      id="title"
                      name="title"
                      required
                      defaultValue={this.props.entry[0] ? entry[0].title : ""}
                      onChange={this.onChange}
                    />
                    <div>
                      <p id="successT" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="category">Category:</label>
                    <br />
                    <select
                      id="category"
                      name="category"
                      onChange={this.onChange}
                      value={this.props.entry[0] ? entry[0].category : ""}
                    >
                      <option value="">Choose Category</option>
                      <option value="Education">Education</option>
                      <option value="Religion">Religion</option>
                      <option value="Family">Family</option>
                      <option value="World">World</option>
                      <option value="Experience">Experience</option>
                      <option value="Accomplishment">Accomplishment</option>
                      <option value="Thoughts">Thoughts</option>
                    </select>
                    <div>
                      <p id="successC" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subCategory">Sub Category:</label>
                    <br />
                    <select
                      id="subCategory"
                      name="subCategory"
                      onChange={this.onChange}
                      value={this.props.entry[0] ? entry[0].sub_category : ""}
                    >
                      <option value="">Choose sub-category</option>
                      <option value="My church">My church</option>
                      <option value="Other church">Other church</option>
                      <option value="Gift">Gift</option>
                      <option value="Today">Today</option>
                      <option value="Work">Work</option>
                      <option value="My school">My school</option>
                      <option value="Award">Award</option>
                      <option value="Teacher">Teacher</option>
                      <option value="Friend">Friend</option>
                      <option value="Other">Other</option>
                    </select>
                    <div>
                      <p id="successS" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="content">Text:</label>
                    <br />
                    <textarea
                      id="content"
                      name="content"
                      required
                      rows="100"
                      cols="70"
                      value={this.props.entry[0] ? entry[0].content : ""}
                      onChange={this.onChange}
                    />
                    <div>
                      <p id="successTe" />
                    </div>
                  </div>
                  <div>
                    <FadeLoader
                      className={override}
                      sizeUnit={"px"}
                      size={15}
                      color={"#e8491d"}
                      loading={this.props.loading.loading}
                    />
                  </div>
                  <div>
                    <button id="add" type="submit">
                      Update Entry
                    </button>
                  </div>
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
export default EditEntry;
