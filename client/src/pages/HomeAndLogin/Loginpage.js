import React, { Component } from 'react';
import Footer from "../../components/StaticComps/Footer";
import './Homepage.css';
import Login from "../../components/SignupAndLogin/Login";
import Navbar from "../../components/StaticComps/Navbar";

import background from "../../images/background.jpg";

class Loginpage extends Component {
  componentDidMount() {
    document.body.style.backgroundImage = `url("${background}")`
  }

  render() {
    return (
      <div className="Site">
        <Navbar />
        <Login />
        <Footer />
      </div>
    );
  }
}

export default Loginpage;
