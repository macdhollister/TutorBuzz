import React, { Component } from 'react';
import Signup from "../../components/SignupAndLogin/Signup";
import Footer from "../../components/StaticComps/Footer";
// import './Homepage.css';

import background from "../../images/background.jpg";

class Homepage extends Component {
  componentDidMount() {
    document.body.style.backgroundImage = `url("${background}")`
  }

  render() {
    return (

    <div className="Site">
      <Signup />
      <Footer />
    </div>
      
    );
  }
}

export default Homepage;
