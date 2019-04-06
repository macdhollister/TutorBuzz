import React, { Component } from 'react';
import "./TutorProfileCalendar.css";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import dateToDayPicker from "../../../utils/dateToDayPicker"

export class TutorProfileCalendar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sessions: []
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      const data = this.props.data;
      const formattedData = data.map(sessData => {
        return new Date(...dateToDayPicker(sessData.day));
      })

      this.setState({
        sessions: formattedData
      })
    }
  }

  render() {
    return (
      <div className="box" id="tutorProfileCalendar">
        <article className="media" id="calendarContent">

            <DayPicker
              initialMonth={new Date()}
              selectedDays={this.state.sessions}
              className="DatePicker"
            />

        </article>
      </div>
    );
  }
}

export default TutorProfileCalendar;
