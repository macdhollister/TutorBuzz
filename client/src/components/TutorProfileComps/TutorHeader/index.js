import React, { Component } from 'react';
import "./TutorHeader.css";
// import fetch from 'node-fetch'

class TutorHeader extends Component {
    render () {
        return (
            <div className="card" id="tutorProfileGreeting">
            <div className="card-content">
              <p className="tutorHeader">
                {this.props.name}
              </p>
            </div>

            <footer className="card-footer tfooter">
              <a href="whatever" className="card-footer-item">Add Tutor</a>
            </footer>  
    
          </div>
        );
    };
}

export default TutorHeader;
