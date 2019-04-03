import React, { Component } from 'react';
import "./TutorCalendar.css";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export class TutorCalendar extends Component {

  // fetch('/sessions')
  //   .then(function(response) {
  //     // Modify data here
  // })
  // .catch(function(error){
  //   console.log(error);
  // });

  constructor(props) {
    super(props);

    this.state = {
      sessions: [
        {
          sessionDate: 'new Date(2019, 2, 12)'
        },
        {
          sessionDate: 'new Date(2019, 2, 6)'
        },
        {
          sessionDate: 'new Date(2019, 2, 18)'
        },
        {
          sessionDate: 'new Date(2019, 2, 27)'
        }
      ]
    }
  }
  
  render() {
    return (
      <div className="box" id="tutorCalendar">
        <article className="media">
          <div className="media-content">
            <div className="content">

            <DayPicker
              initialMonth={new Date()}
              selectedDays={this.state.sessions}
            />

            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default TutorCalendar;
