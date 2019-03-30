import React, { Component } from 'react';
import "./TutorAvailability.css";
import fetch from 'node-fetch';

class TutorAvailability extends Component {
    render() {
        return (
            <div className="card availabilityCard">
            
                <header className="card-header">
                    <p className="card-header-title">
                        Your Availability This Week
                    </p>
                </header>

                <div className="card-content">
                    <div className="content">

                    </div>
                </div>

                <footer className="card-footer">
                    <a href="whatever" className="card-footer-item">Update Availability —></a>
                </footer>
            </div>
        );
    }
    componentDidMount(){
        fetch("http://localhost:3001/sessions")
        .then(res => res.text())
        .then(body => console.log(body))
        .catch(e => console.log(e));
    }
}

export default TutorAvailability;