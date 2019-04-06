import React, { Component } from 'react';
import Footer from '../../components/StaticComps/Footer';
import background from "../../images/honeycomb.png";
import TutorHeader from "../../components/TutorProfileComps/TutorHeader";
// import TutorCalendar from "../../components/TutorComps/TutorCalendar";
import TutorProfileCalendar from "../../components/TutorProfileComps/TutorProfileCalendar";
import TutorSessions from "../../components/TutorComps/TutorSessions";
import SessionRqstForm from "../../components/TutorProfileComps/SessionRqstForm";
import Navbar from "../../components/StaticComps/Navbar";

import getTodayDate from '../../utils/getTodayDate.js';

import "./tutorProfile.css";

class tutorProfile extends Component {
  state = {
    today: getTodayDate()
  }

  componentDidMount() {
    document.body.style.backgroundImage = `url("${background}")`;
    fetch("/selfDataStudent")
    .then(res => res.json())
    .then(res => {
      console.log("selfData res: ", res);
      this.setState({
        studentEmail: res.email,
        studentName: res.name,
        studentId: res.id
      })
    })

    // fetch data for tutor
    
  }
  render() {
    return (

      <body className="Site">
        <Navbar />
        <div className="columns">

          <div className="column">

            <div className="row">
              <TutorHeader name={this.state.name} />
            </div>

            <div className="row tutorProfileCalendar" >
              <TutorProfileCalendar data={this.state} />
              <TutorSessions name={this.state.date} />
            </div>

          </div>

          <div className="column">
            <SessionRqstForm data={this.state}/>
          </div>

        </div>

        <Footer />

      </body>
    )
  }
}

export default tutorProfile;
