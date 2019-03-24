import React, { Component } from 'react';
import "./Calendar.css";

class Calendar extends Component {
    render() {
        return (
            <div className="box" id="tutorCalendar">
                <article className="media">
                    <div className="media-content">
                        <div className="content">
                        <p className="is-size-2">Tutor's Calendar Goes Here</p>
                        </div>
                    </div>
                </article>
            </div>
        );
    }
}

export default Calendar;