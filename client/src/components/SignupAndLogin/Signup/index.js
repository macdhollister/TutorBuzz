import React, { Component } from 'react';
import "./Signup.css";

class Signup extends Component {
  render() {
    return (
    <div id="parent" className="signupForm">
        <div className="box signUp">

            <header className="card-header">
                <h1 className="is-size-4 has-text-weight-bold has-text-info card-header-title" id="signupTitle">Make an Account to Get Started</h1>
            </header>

             <form action="/signup" method="POST">
               {/* <div className="field">
                   <label className="label" id="usernameText">Username</label>
               <div className="control has-icons-left has-icons-right">
                      <input className="input" name="username" type="text" placeholder="Username" />
                       <span className="icon is-small is-left">
                           <i className="fas fa-user"></i>
                       </span>
               </div>
               </div>  */}

                <div className="field">
                    <label className="label">Full Name</label>
                    <div className="control has-icons-left has-icons-right">
                        <input className="input" name="FullName" type="text" placeholder="Full Name" />
                        <span className="icon is-small is-left">
                            <i className="fas fa-user-check"></i>
                        </span>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Password</label>
                    <div className="control has-icons-left has-icons-right">
                        <input className="input" name="Password" type="password" placeholder="Password" />
                        <span className="icon is-small is-left">
                            <i className="fas fa-key"></i>
                        </span>
                    </div>
                </div>

                <div className="field">
                    <label className="label"> Enter Password Again</label>
                    <div className="control has-icons-left has-icons-right">
                        <input className="input" name="Password2" type="password" placeholder="Password" />
                        <span className="icon is-small is-left">
                            <i className="fas fa-key"></i>
                        </span>
                    </div>
                </div>


                <div className="control radioButtons">
                    <label className="radio" id="tutorSignup">
                        <input type="radio" name="Tutor" />
                        Tutor
                    </label>
                    <label className="radio" id="studentSignup">
                        <input type="radio" name="Student" />
                        Student
                    </label>
                </div>

                <div className="field is-grouped">
                    <div className="control">
                        <button className="button is-link" id="signupSubmit" type="submit" onClick={this.signupForm}>Submit </button>
                    </div>
                    <div className="control">
                        <a href="/"><button type="button" className="button is-text cancelButton">Cancel</button></a>
                    </div>
                </div>
            </form>
        </div>
    </div>
    );
  }
}

export default Signup;
