import React, { Component } from 'react';
import fetch from 'node-fetch';

import Footer from '../../components/StaticComps/Footer';
import TutorGreeting from '../../components/TutorComps/TutorGreeting';
import TutorCalendar from '../../components/TutorComps/TutorCalendar';
import TutorTodaySess from '../../components/TutorComps/TutorTodaySess';
import TutorSessions from '../../components/TutorComps/TutorSessions';
import TutorTimeCard from '../../components/TutorComps/TutorTimeCard';
import TutorAvailability from '../../components/TutorComps/TutorAvailability';
import TutorRequests from '../../components/TutorComps/TutorRequests';
import './tutorPortal.css';

class tutorPortal extends Component {
  componentDidMount() {
    fetch("/selfDataTutor")
    .then(res => res.json())
    .then(res => console.log(res));
  }

  render() {
    return (
      <body className="Site">
        <div className="column">
          <div className="column">
            <TutorGreeting />
            <TutorTodaySess />
            <TutorSessions />
          </div>
          <div className="column">
            <TutorCalendar />
          </div>
          <div className="column">
            <TutorTimeCard />
            <TutorAvailability />
            <TutorRequests />
          </div>
        </div>

        <div id="footerFixTutor"></div>

        <Footer />

      </body>

    );
  }
}

export default tutorPortal;
