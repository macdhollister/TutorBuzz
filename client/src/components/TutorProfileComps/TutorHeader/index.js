import React, { Component } from 'react';
import "./TutorHeader.css";
// import fetch from 'node-fetch'

class TutorHeader extends Component {
    render () {
        return (
            <div className="card" id="tutorGreeting">
            <div className="card-content">
              <p className="tutorHeader">
                Mac Hollister
                    </p>
            </div>
    
          </div>
        );
    };
}

export default TutorHeader;
