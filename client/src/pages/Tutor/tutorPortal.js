import React, { Component } from 'react';
import Footer from '../../components/StaticComps/Footer';
import TutorGreeting from '../../components/TutorComps/TutorGreeting';
import TutorCalendar from '../../components/TutorComps/TutorCalendar';
import TutorTodaySess from '../../components/TutorComps/TutorTodaySess';
import TutorSessions from '../../components/TutorComps/TutorSessions';
import TutorTimeCard from '../../components/TutorComps/TutorTimeCard';
import TutorAvailability from '../../components/TutorComps/TutorAvailability';
import TutorRequests from '../../components/TutorComps/TutorRequests';


class tutorPortal extends Component {
  render() {
    return (

      <body className="Site">
     <div className="columns">
        <div className="column">
          <TutorGreeting />
          
          <TutorSessions />
          <TutorRequests />
        </div>
        <div className="column">
          <TutorCalendar />
        </div>
        <div className="column">
          <TutorTimeCard />
          {/* <TutorAvailability /> */}
          <TutorTodaySess />
        </div>
      </div>
      <Footer />

      </body>

    );
  }
}

export default tutorPortal;
