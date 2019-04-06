import React, { Component } from 'react';
import "./Navbar.css";

class Navbar extends Component {
    state = {
        isLoggedIn: false
    }

    componentDidMount() {
        fetch("/checkAuth")
        .then(res => res.json())
        .then(res => this.setState({
            isLoggedIn: res.isLoggedIn
        }));
    }

    logout() {
        fetch("/logout")
    }

    render() {
        const { isLoggedIn } = this.state;
        let button;

        if (!isLoggedIn) {
            button = (
                <a className="button is-info" id="loginButton" href="/">
                    <strong>Sign In</strong>
                </a>
            )
        } else {
            button = (
                <a className="button is-info" id="loginButton" onClick={this.logout} href="/">
                    <strong>Sign Out</strong>
                </a>
            )
        }
        return (
            <header>
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="/login">
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
                            <a className="navbar-item" href="/login">Home</a>
                            <a className="navbar-item" href="/about">About</a>
                            <a className="navbar-item" href="/contact">Contact</a>
                        </div>

                        <div className="navbar-end login">
                            <div className="navbar-item">
                                <div className="buttons">
                                    {button}
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
