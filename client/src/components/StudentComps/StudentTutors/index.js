import React, { Component } from 'react';
import "./StudentTutors.css";
import fetch from 'node-fetch';

class StudentTutors extends Component {
    render() {
        return (
            <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth" id="tutorTable">
                <thead>
                    <tr>
                    <th>Tutors</th>
                    <th>Subject</th>
                    </tr>
                </thead>
                    <tbody>
                        <tr>
                            <td>Mac</td>
                            <td>Being a Jerk</td>
                        </tr>
                        <tr>
                            <td>Josie</td>
                            <td>Friend Abuse</td>
                        </tr>
                    </tbody>
            </table>
        );
    }
    componentDidMount(){
        fetch("http://localhost:3001/sessions")
        .then(res => res.text())
        .then(body => console.log(body))
        .catch(e => console.log(e));
    }
}

export default StudentTutors;