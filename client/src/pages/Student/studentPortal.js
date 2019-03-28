import React, { Component } from 'react';
import StudentGreeting from '../../components/StudentComps/StudentGreeting';
import StudTodaySess from '../../components/StudentComps/StudTodaySess';
import StudentUpcoming from '../../components/StudentComps/StudentUpcoming';
import StudentCalendar from '../../components/StudentComps/StudentCalendar';
import StudentTutors from '../../components/StudentComps/StudentTutors';
import StudentProfile from '../../components/StudentComps/StudentProfile';
import Footer from '../../components/StaticComps/Footer';
import './studentPortal.css';

class studentPortal extends Component {
  render() {
    return (

    <body class="Site">

      <div className="columns">
        <div className="column">
          <StudentGreeting />
          <StudTodaySess />
          <StudentUpcoming />
        </div>
        <div className="column">
          <StudentCalendar />
          <StudentTutors />
        </div>
        <div className="column">
          <StudentProfile />
        </div>
      </div>

      <Footer />

    </body>

    );
  }
}

export default studentPortal;
