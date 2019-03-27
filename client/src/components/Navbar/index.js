import React, { Component } from 'react';
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <header>
          <nav className="navbar" role="navigation" aria-label="main navigation">
              <div className="navbar-brand">
                  <a className="navbar-item" href="/">
                      <p className="is-size-4 navTitle">TutorBuzz</p>
                      <i className="fab fa-forumbee" id="beeGlyph" />
                  </a>

                  <div role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
                      data-target="navbarBasicExample">
                      <span aria-hidden="true"></span>
                      <span aria-hidden="true"></span>
                      <span aria-hidden="true"></span>
                  </div>
              </div>

              <div id="navbarBasicExample" className="navbar-menu">
                  <div className="navbar-start">
                      <a className="navbar-item" href="/">
                          Home
                      </a>

                      <a className="navbar-item" href="/about">
                          About
                      </a>

                      <a className="navbar-item" href="/contact">
                          Contact
                      </a>
                  </div>

                  <div className="navbar-end login">
                      <div className="navbar-item">
                          <div className="buttons">
                                  <a className="button is-info" id="loginButton" href="/loginpage">
                                      <strong>Tutor and Student Login</strong>
                                  </a>
                          </div>
                      </div>
                  </div>
              </div>
          </nav>
      </header>
    );
  }
}

export default Navbar;
