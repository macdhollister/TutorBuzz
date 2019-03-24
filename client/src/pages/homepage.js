import React, { Component } from 'react';
import Signup from "../components/Signup";
import Footer from "../components/Footer";
import './Homepage.css';

class Homepage extends Component {
  render() {
    return (

    <body class="Site">
      <Signup />
      <Footer />
    </body>
      
    );
  }
}

export default Homepage;
