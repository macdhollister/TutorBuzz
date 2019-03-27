import React, { Component } from 'react';
import Footer from "../components/Footer";
// import './Homepage.css';
import Login from "../components/Login";

import background from "../images/background.jpg";

class Loginpage extends Component {
  componentDidMount() {
    document.body.style.backgroundImage = `url("${background}")`
  }

  render() {
    return (

    <div className="Site">
      <Login />
      <Footer />
    </div>
      
    );
  }
}

export default Loginpage;
