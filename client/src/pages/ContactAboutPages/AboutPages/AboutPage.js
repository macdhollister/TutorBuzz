import React, { Component } from 'react';
// import Footer from "../../../components/StaticComps/Footer";
import './AboutPage.css';

import Navbar from "../../../components/StaticComps/Navbar";

import background from "../../../images/AboutBackground.png";
import About from '../../../components/AboutContacts/About';

class AboutPage extends Component {
  componentDidMount() {
    document.body.style.backgroundImage = `url("${background}")`
  }

  render() {
    return (
      <div className="Site">
        <Navbar />
        <About />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default AboutPage;