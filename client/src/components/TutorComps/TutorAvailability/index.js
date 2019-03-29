import React, { Component } from 'react';
import "./TutorAvailability.css";

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
}

export default TutorAvailability;