import React, { Component } from 'react';
import "./StudentCalendar.css";

class StudentCalendarCont extends Component {
    render() {
        return (
            <div className="box" id="calendarBox">
                <article className="media">
                    <div className="media-content">
                        <div className="content">
                        <p className="is-size-2">Calendar Goes Here</p>
                        </div>
                    </div>
                </article>
            </div>
        );
    }
}

export default StudentCalendarCont;