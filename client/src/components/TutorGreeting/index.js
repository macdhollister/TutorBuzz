import React, { Component } from 'react';
import "./TutorGreeting.css";

class TutorGreeting extends Component {
  render() {
    return (
        <div className="card" id="tutorGreeting">
            <div className="card-content">
                <p className="title">
                Hi Mac the Tutor!
                </p>
            </div>
        </div>
    );
  }
}

export default TutorGreeting;