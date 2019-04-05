import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "./Login.css";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      isTutor: "",
    }
  }
  
  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { email, password, isTutor, loggedIn } = this.state;
    if(!loggedIn) return (
    <div id="parent" className="loginForm">
        <div className="box login">

            <header className="card-header">
                <h1 className="is-size-4 has-text-weight-bold has-text-info card-header-title" id="loginTitle">Login to Continue</h1>
            </header>

            {/* <form onSubmit={this.loginUser}> */}
            <form action="/login" method="POST">
                <div className="field">
                    <label className="label" id="emailText">Email</label>
                    <div className="control has-icons-left has-icons-right">
                        <input 
                          className="input"
                          name="email"
                          type="text"
                          value={this.state.email}
                          onChange={this.handleChange("email")}
                          placeholder="Email"
                        />
                        <span className="icon is-small is-left">
                            <i className="fas fa-user"></i>
                        </span>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Password</label>
                    <div className="control has-icons-left has-icons-right">
                        <input 
                          className="input"
                          name="password"
                          type="password"
                          value={this.state.password}
                          onChange={this.handleChange("password")}
                          placeholder="Password"
                        />
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
                    <div className="control">
                        <a href="/signup"><button type="button" className="button is-text cancelButton">Make An Account</button></a>
                    </div>
                </div>
            </form>
        </div>
    </div>
    );
    return <Redirect to={isTutor ? "/tutorPortal" : "/studentPortal"} />
  }
}

export default Login;
