import React, { Component } from 'react';
import "./StudentProfile.css";
import fetch from 'node-fetch';

class StudentProfile extends Component {
    render() {
        return (
            <div className="card" id="profileCard">
                <div className="card-content">
                    <p>
                    Student Profile Here
                    </p>
            </div>
        </div>
        );
    }
}
                        Student Profile:
                    </p>
                </div>
            </div>
        );
    }
    componentDidMount() {

        fetch("http://localhost:3001/session")

        fetch("http://localhost:3001/profile")

            .then(res => res.text())
            .then(body => console.log(body))
            .catch(e => console.log(e));


    }


};

export default StudentProfile;