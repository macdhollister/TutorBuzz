import React, { Component } from 'react';
import './TutorSessions.css';

class TutorSessions extends Component {
    render() {
        return (
            <div className="card UpcomingSess" id="TutorUpcomingSess">
            
                <header className="card-header">
                    <p className="card-header-title">
                        Upcoming Sessions
                    </p>
                </header>

                <div className="card-content">
                    <div className="content">

                    </div>
                </div>

                <footer className="card-footer">
                    <a href="whatever" className="card-footer-item">Sessions Details —></a>
                </footer>
            </div>
        );
    }
}

export default TutorSessions;