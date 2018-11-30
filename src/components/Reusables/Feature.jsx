import React, { Component } from "react";

// third-party libraries
import PropTypes from 'prop-types';
/**
 * @param {object} score
 * @desc sample of an action
*/
export default class Feature extends Component {
  render() {
    const { header, body, imageUrl } = this.props;
    return (
      <div className="box">
        <img className="box-images" src={imageUrl} alt="background" />
        <h4>{header}</h4>
        <p>{body}</p>
      </div>
    );
  }
}

Feature.propTypes = {
  header: PropTypes.string,
  body: PropTypes.string,
  imageUrl: PropTypes.string,
};

