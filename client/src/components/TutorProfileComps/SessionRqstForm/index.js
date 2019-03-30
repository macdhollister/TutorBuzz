import React, { Component } from 'react';
// import "./TutorHeader.css";

class SessionRqstForm extends Component {
    render() {
        return (
         <div className="RequestForm">
           <header className="card-header">
                <h1 className="is-size-4 has-text-weight-bold has-text-info card-header-title" id="signupTitle">Request A Session</h1>
            </header>

            <form method="POST">
            
            <div className="field">
             <label className="label">Name</label>
              <div className="control">
               <input className="input" type="text" placeholder="Text input" />
              </div>
            </div>
            </form>
         </div>
        )
    }
}

export default SessionRqstForm;