import React, { Component } from "react";

/**
 * @param {object} score
 * @desc sample of an action
*/
class Carousel extends Component {
  render() {
    return (
      <section id="first_sec">
          <div className="container">
              <div id="move-down">
                  <h1>PEN IT DOWN!!!</h1>
                  <p className="middle">Your entries are safe with MYDIARY.com.Every moment is a given, share your favourite moments
                      on MYDIARY.com</p>
                  <a href="register.html"><button id="explore">Explore</button></a>
              </div>
          </div>
      </section>
    );
  }
}

export default Carousel;
