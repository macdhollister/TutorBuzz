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

  // loginUser = (e) => {
  //   e.preventDefault();
  //   const { email, password, isTutor } = this.state;

  //   console.log(email, password, isTutor);

  //   if (email === "" || password === "" || isTutor === "") {
  //     console.log("fill in all fields");
  //   } else {
  //     const params = new URLSearchParams();
  //     params.append("email", email);
  //     params.append("password", password);
  //     params.append("isTutor", isTutor);
  //     // axios({
  //     //   method: "post",
  //     //   url: "/login",
  //     //   data: params
  //     // })


  //     // axios.post("/login", {
  //     //   email: email,
  //     //   password: password,
  //     //   isTutor: isTutor
  //     // })

  //     fetch("http://localhost:3001/login", {
  //       headers: {
  //         "Accept": 'application/json',
  //         'Content-Type': 'application/json'
  //       },
  //       method: "POST",
  //       body: {email, password, isTutor}
  //     })
  //     .then(response => {
  //       console.log(response);
  //     })
  //   }
  // }

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
