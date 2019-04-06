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
    this.setState({
      tutorId: this.props.match.params.tutorId
    }, () => {
      // Get data about logged in student
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

      // Get data for tutor
      fetch("/tutorData/" + this.state.tutorId)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          tutorId: res.id,
          tutorName: res.name,
          tutorEmail: res.email
        })
      })
    })
  }
  render() {
    return (

      <body className="Site">
        <Navbar />
        <div className="columns">

          <div className="column">

            <div className="row">
              <TutorHeader name={this.state.tutorName} />
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
