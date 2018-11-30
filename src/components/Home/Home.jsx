// react-libraries
import React, { Component } from "react";

// components
import Header from "../Reusables/Header";
import Carousel from "../Reusables/Carousel";
import Feature from "../Reusables/Feature";
import Footer from "../Reusables/Footer";
import Aside from "../Reusables/Aside";

// styles
import '../../../public/scss/style.scss'
import '../../../public/scss/_home.scss'

/**
 *
 * @param {object} state
 * @param {string} action
 * @desc sample of a app home
 */
class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="wrapper">
          <Aside />
          <Carousel />
          <div className="middle-h" align="center">
            <h1>Awsome Features of MyDiary.com</h1>
          </div>
          <section id="boxez">
            <div className="container">
              <Feature
                body="It doesn’t have a fancy or sophisticated web interface, but it is extremely user-friendly and easy-to-use and it has Access from anywhere with internet"
                header="Easy"
                imageUrl="/images/book1.jpg"
              />
              <Feature
                body="It doesn’t have a fancy or sophisticated web interface, but it is extremely user-friendly and easy-to-use and it has Access from anywhere with internet"
                header="Easy"
                imageUrl="/images/book2.jpg"
              />
              <Feature
                body="It doesn’t have a fancy or sophisticated web interface, but it is extremely user-friendly and easy-to-use and it has Access from anywhere with internet"
                header="Easy"
                imageUrl="/images/book3.jpg"
              />
              <Feature
                body="It doesn’t have a fancy or sophisticated web interface, but it is extremely user-friendly and easy-to-use and it has Access from anywhere with internet"
                header="Easy"
                imageUrl="/images/book4.jpg"
              />
              <Feature
                body="It doesn’t have a fancy or sophisticated web interface, but it is extremely user-friendly and easy-to-use and it has Access from anywhere with internet"
                header="Easy"
                imageUrl="/images/book.jpg"
              />
              <Feature
                body="It doesn’t have a fancy or sophisticated web interface, but it is extremely user-friendly and easy-to-use and it has Access from anywhere with internet"
                header="Easy"
                imageUrl="/images/book.jpg"
              />
            </div>
          </section>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
