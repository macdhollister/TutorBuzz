import React, { Component } from 'react';
import "./StudentUpcoming.css";
import fetch from 'node-fetch';

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
<<<<<<< HEAD


=======
>>>>>>> 9fed8e78f051105d8bea4e4f0b6c802bc3ae9d1c
    componentDidMount(){

     

        fetch("http://localhost:3001/sessions")

        .then(res => res.text())
        .then(body => console.log(body))
        .catch(e => console.log(e));
    }

}

export default StudentUpcoming;