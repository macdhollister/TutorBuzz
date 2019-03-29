import React, { Component } from 'react';
import "./TutorTimeCard.css";

class TutorTimeCard extends Component {
    render() {
        return (
            <div className="card timeCard">
            
                <header className="card-header">
                    <p className="card-header-title">
                        Time Card
                    </p>
                </header>

                <div className="card-content">
                    <div className="content">

                    </div>
                </div>

                <footer className="card-footer">
                    <a href="whatever" className="card-footer-item">See Details —></a>
                </footer>
            </div>
        );
    }
}

export default TutorTimeCard;