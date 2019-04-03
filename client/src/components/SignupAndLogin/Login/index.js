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
      loggedIn: false,
      showError: false,
      showNullError: false
    }
  }
  
  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value
    });
  };

  loginUser = (e) => {
    e.preventDefault();
    const { email, password, isTutor } = this.state;
    if (email === "" || password === "" || isTutor === "") {
      this.setState({
        showError: false,
        showNullError: true,
        loggedIn: false
      })
    } else {
      const params = new URLSearchParams();
      params.append("email", email);
      params.append("password", password);
      params.append("isTutor", isTutor);
      // axios
      axios({
        method: "post",
        url: "/login",
        data: params
      })
        .then(response => {
          console.log(response);
          localStorage.setItem("JWT", response.data.token);
          this.setState({
            loggedIn: true,
            showError: false,
            showNullError: false
          })
        })
        .catch(error => {
          console.error(error.response.data);
          if (error.response.data === "email not found" || error.response.data === "passwords do not match") {
            this.setState({
              showError: true,
              showNullError: false
            })
          }
        })
    }
  }

  render() {
    const { email, password, isTutor, loggedIn, showError, showNullError } = this.state;
    if(!loggedIn) return (
    <div id="parent" className="loginForm">
        <div className="box login">

            <header className="card-header">
                <h1 className="is-size-4 has-text-weight-bold has-text-info card-header-title" id="loginTitle">Login to Continue</h1>
            </header>

            <form onSubmit={this.loginUser}>
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

                <div className="control radioButtons">
                    <label className="radio" id="tutorSignup">
                        <input type="radio" name="isTutor" value="true" onChange={this.handleChange("isTutor")} required />
                        Tutor
                    </label>
                    <label className="radio" id="studentSignup">
                        <input type="radio" name="isTutor" value="false" onChange={this.handleChange("isTutor")} required />
                        Student
                    </label>
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
    return <Redirect to={isTutor ? "/tutorPortal" : "/studentPortal"} />
  }
}

export default Login;
