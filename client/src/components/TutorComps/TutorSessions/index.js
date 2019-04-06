import React, { Component } from 'react';
import './TutorSessions.css';
import dateToDayPicker from "../../../utils/dateToDayPicker"

class TutorSessions extends Component {

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
                return {
                    date: new Date(...dateToDayPicker(sessData.day)),
                    startTime: sessData.startTime,
                    endTime: sessData.endTime,
                    location: sessData.location
                }
            })

            console.log(this.props);

            this.setState({
                sessions: formattedData
            })
        }
    }

    render() {
        return (
            <div className="card UpcomingSess" id="TutorUpcomingSess">

                <header className="card-header">
                    <p className="card-header-title">
                        Upcoming Sessions
                    </p>
                </header>

                <div className="card-content">
                    <div className="content">
                        {this.state.sessions.map(sess => {
                            return (
                                <h6>
                                    {sess.date.toDateString()} from {sess.startTime} to {sess.endTime} at {sess.location}
                                </h6>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default TutorSessions;