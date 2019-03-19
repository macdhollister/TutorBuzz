import React, { Component } from 'react';
import "./Signup.css";

class Signup extends Component {
  render() {
    return (
    <div id="parent" className="signupForm">
    <div class="box signUp">
        <h1 class="is-size-4 has-text-weight-bold has-text-info" id="signupTitle">Make an Account to Get Started</h1>

        <form action="/signup" method="POST">
            <div class="field">
                <label class="label">Username</label>
                <div class="control has-icons-left has-icons-right">
                    <input class="input" name="username" type="text" placeholder="Username" />
                    <span class="icon is-small is-left">
                        <i class="fas fa-user"></i>
                    </span>
                </div>
            </div>

            <div class="field">
                <label class="label">Password</label>
                <div class="control has-icons-left has-icons-right">
                    <input class="input" name="password" type="password" placeholder="Password" />
                    <span class="icon is-small is-left">
                        <i class="fas fa-key"></i>
                    </span>
                </div>
            </div>


            <div class="control radioButtons">
                <label class="radio" id="tutorSignup">
                    <input type="radio" name="answer" />
                    Tutor
                </label>
                <label class="radio" id="studentSignup">
                    <input type="radio" name="answer" />
                    Student
                </label>
            </div>

            <div class="field is-grouped">
                <div class="control">
                    <button class="button is-link" id="signupSubmit" type="submit">Submit</button>
                </div>
                <div class="control">
                    <a href="/"><button type="button" class="button is-text cancelButton">Cancel</button></a>
                </div>
            </div>
        </form>
    </div>
    </div>
    );
  }
}

export default Signup;
