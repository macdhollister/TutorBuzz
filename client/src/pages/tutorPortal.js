import React, { Component } from 'react';
import Footer from '../components/Footer';
import TutorGreeting from '../components/TutorGreeting';
import Calendar from '../components/Calendar';
import TutorTodaySess from '../components/TutorTodaySess';
import TutorSessions from '../components/TutorSessions';
import TutorTimeCard from '../components/TutorTimeCard';
import TutorAvailability from '../components/TutorAvailability';
import TutorRequests from '../components/TutorRequests';


class tutorPortal extends Component {
  render() {
    return (

      <body className="Site">
     <div className="columns">
        <div className="column">
          <TutorGreeting />
          <TutorTodaySess />
          <TutorSessions />
        </div>
        <div className="column">
          <Calendar />
        </div>
        <div className="column">
          <TutorTimeCard />
          <TutorAvailability />
          <TutorRequests />
        </div>
      </div>
      <Footer />

      </body>

    );
  }
}

export default tutorPortal;
