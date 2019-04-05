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
  state = {
    name: "studentGreeting",
    date: "studentTodaySess",
    cal: "StudentCalendar",
    tutor: "studentTutor",
    StudentProfile: "StudentProfile"

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

      <div class="Site">
        <div className="columns">
          <div className="column">
            <StudentGreeting name={this.state.name} />

            <StudTodaySess name={this.state.date} />
            <StudentUpcoming name={this.state.upcoming} />
          </div>
          <div className="column">
            <StudentCalendar name={this.state.cal} />
            <StudentTutors name={this.state.tutor} />
          </div>
          <div className="column">
            <StudentProfile name={this.state.StudentProfile} />
          </div>
        </div>

        <div id="footerFixStudent"></div>

        <Footer />

      </div>

    );
  }
}

export default studentPortal;
