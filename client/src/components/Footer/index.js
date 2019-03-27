import React, { Component } from 'react';
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="has-text-centered footerDiv">
          <strong className="footerText">TutorBuzz</strong> © 2019 by <p>Josie Strange, Ana Lee, Mac Hollister, Jonathan Davis, and Garrett Straight</p>
        </div>
      </footer>
    );
  }
}

export default Footer;