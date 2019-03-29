import React, { Component } from 'react';
import "./StudentUpcoming.css";

class StudentUpcoming extends Component {
    render() {
        return (
            <div className="card UpcomingSess" id="upcomingSess">

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
    componentDidMount(){
        fetch("http://localhost:3001/sessions")
        .then(res => res.text())
        .then(body => console.log(body))
        .catch(e => console.log(e));
    }

}

export default StudentUpcoming;