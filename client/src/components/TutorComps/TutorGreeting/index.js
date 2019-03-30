import React, { Component } from 'react';
import "./TutorGreeting.css";
import fetch from 'node-fetch';


class TutorGreeting extends Component {
  render() {
    return (
        <div className="card" id="tutorGreeting">
            <div className="card-content">
                <p className="title">
                Hi Mac the Tutor!
                </p>
            </div>

            <footer className="card-footer">
                    <a href="whatever" className="card-footer-item">View Profile</a>
            </footer>
        </div>
    );
  };

  componentDidMount() {
    fetch("http://localhost:3001/profile")
      .then(res => res.text())
      .then(body => console.log(body))
      .catch(e => console.log(e));

  }
}

export default TutorGreeting;