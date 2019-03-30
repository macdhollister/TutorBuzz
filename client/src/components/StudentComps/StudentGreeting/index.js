import React, { Component } from 'react';
import "./StudentGreeting.css";

class StudentGreeting extends Component {
  render() {
    return (
        <div className="card" id="studentGreeting">
            <div className="card-content">
                <p className="title" id="greetingText">
                Hi Student!
                </p>
            </div>
        </div>
    );
  }

  


}

export default StudentGreeting;

