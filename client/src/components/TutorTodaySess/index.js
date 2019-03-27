import React, { Component } from 'react';
import "./TutorTodaySess.css";

class TutorTodaySess extends Component {
    render() {
        return (
            <div className="card sessionCard">
            
                <header className="card-header">
                    <p className="card-header-title">
                        Today's Session
                    </p>
                </header>

                <div className="card-content">
                    <div className="content">

                    </div>
                </div>

                <footer className="card-footer">
                    <a href="whatever" className="card-footer-item">Session Details —></a>
                </footer>
            </div>
        );
    }
}

export default TutorTodaySess;