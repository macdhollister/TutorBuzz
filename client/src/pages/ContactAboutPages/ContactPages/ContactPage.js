import React, { Component } from 'react';

import './ContactPage.css';
// import Contact from "../../components/AboutContacts/Contact";


import background from "../../../images/ContactBackground.png";
import Contact from '../../../components/AboutContacts/Contact';
import Navbar from '../../../components/StaticComps/Navbar';
// import Footer from '../../../components/StaticComps/Footer';

class ContactPage extends Component {
  componentDidMount() {
    document.body.style.backgroundImage = `url("${background}")`
  }

  render() {
    return (
      <div className="Site">
        <Navbar />
        <Contact />
      </div>
    );
  }
}

export default ContactPage;