import React, { Component } from 'react';
import "./Login.css";

class Login extends Component {
  render() {
    return (
    <div id="parent" className="loginForm">
        <div className="box login">

            <header className="card-header">
                <h1 className="is-size-4 has-text-weight-bold has-text-info card-header-title" id="loginTitle">Login to Continue</h1>
            </header>

            <form action="/login" method="POST">
                <div className="field">
                    <label className="label" id="emailText">Email</label>
                    <div className="control has-icons-left has-icons-right">
                        <input className="input" name="email" type="text" placeholder="Email" />
                        <span className="icon is-small is-left">
                            <i className="fas fa-user"></i>
                        </span>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Password</label>
                    <div className="control has-icons-left has-icons-right">
                        <input className="input" name="password" type="password" placeholder="Password" />
                        <span className="icon is-small is-left">
                            <i className="fas fa-key"></i>
                        </span>
                    </div>
                </div>

                <div className="field is-grouped">
                    <div className="control">
                        <button className="button is-link" id="loginSubmit" type="submit">Submit</button>
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

export default Login;
