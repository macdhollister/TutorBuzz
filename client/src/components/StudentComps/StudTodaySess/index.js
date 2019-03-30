import React, { Component } from 'react';
import "./StudTodaySess.css";
import fetch from 'node-fetch';

class StudTodaySess extends Component {
    render() {
        return (
            <div className="card todaySess">
            
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

    componentDidMount(){
        fetch("http://localhost:3001/sessions")
        .then(res => res.text())
        .then(body => console.log(body))
        .catch(e => console.log(e));
    }
}

export default StudTodaySess;