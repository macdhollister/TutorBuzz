import React, { Component } from 'react';
import StudentGreeting from '../../components/StudentComps/StudentGreeting';
import StudTodaySess from '../../components/StudentComps/StudTodaySess';
import StudentUpcoming from '../../components/StudentComps/StudentUpcoming';
import StudentCalendar from '../../components/StudentComps/StudentCalendar';
import StudentTutors from '../../components/StudentComps/StudentTutors';
import StudentProfile from '../../components/StudentComps/StudentProfile';
import Footer from '../../components/StaticComps/Footer';
import Navbar from "../../components/StaticComps/Navbar";
import './studentPortal.css';

import getTodayDate from '../../utils/getTodayDate.js'

class studentPortal extends Component {
  state = {
    name: "",
    date: "",
    cal: "",
    tutor: "",
    StudentProfile: "",
    today: getTodayDate()
  }

  componentDidMount() {
    fetch("/selfDataStudent")
      .then(res => res.json())
      .then(res => this.setState({
        name: res.name,
        date: res.StudTodaySess,
        upcoming: res.StudentUpcoming,
        cal: res.StudentCalendar,
        tutor: res.studentProfile,
        StudentProfile: res.StudentProfile,
        id: res.id
      }));
  }

  render() {
    return (
      <div className="Site">
      <div class="Site">
        <Navbar />

        <div className="columns">
          <div className="column">
            <StudentGreeting name={this.state.name} />

            <StudTodaySess name={this.state.date} />
            
          </div>
          <div className="column">
            <StudentCalendar name={this.state.cal} />
            <StudentTutors name={this.state.tutor} />
          </div>
          <div className="column">
            {/* <StudentProfile name={this.state.StudentProfile} /> */}
            <StudentUpcoming name={this.state.upcoming} />
          </div>
        </div>

        <div id="footerFixStudent"></div>

        <Footer />

      </div>
      </div>

    );
  }
}

export default studentPortal;
