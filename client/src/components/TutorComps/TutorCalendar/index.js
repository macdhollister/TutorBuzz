import React, { Component } from 'react';
import "./TutorCalendar.css";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export function SessionsCalendar() {
  return (
    <DayPicker
      initialMonth={new Date(2019, 4)}
      selectedDays={[
        new Date(2019, 4, 12),
        new Date(2019, 4, 2),
        {
          after: new Date(2019, 4, 20),
          before: new Date(2019, 4, 25),
        },
      ]}
    />
  );
}

class TutorCalendar extends Component {
    render() {
        return (
            <div className="box" id="tutorCalendar">
                <article className="media">
                    <div className="media-content">
                        <div className="content">
                    
                        <SessionsCalendar />

                        <p className="is-size-2">Tutor's Calendar Goes Here</p>

                        </div>
                    </div>
                </article>
            </div>
        );
    }
}

export default TutorCalendar;
