import React, { Component } from 'react';
import StudentGreeting from '../components/StudentGreeting';
import StudTodaySess from '../components/StudTodaySess';
import StudentUpcoming from '../components/StudentUpcoming';
import StudentCalendar from '../components/StudentCalendar';
import StudentTutors from '../components/StudentTutors';
import StudentProfile from '../components/StudentProfile';
import Footer from '../components/Footer';
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
