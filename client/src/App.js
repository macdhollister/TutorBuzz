import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignupPage from "./pages/HomeAndLogin/SignupPage";
// import Footer from "./components/Footer";
import tutorPortal from "./pages/Tutor/tutorPortal.js";
import studentPortal from "./pages/Student/studentPortal.js";
import tutorProfile from "./pages/Tutor/tutorProfile.js";
import './App.css';
import Loginpage from './pages/HomeAndLogin/Loginpage';
import AboutPage from './pages/ContactAboutPages/AboutPages/AboutPage';
import ContactPage from './pages/ContactAboutPages/ContactPages/ContactPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Loginpage} />
          <Route exact path="/login" component={Loginpage} />
          <Route exact path="/tutorPortal" component={tutorPortal} />
          <Route exact path="/studentPortal" component={studentPortal} />
          <Route exact path="/tutorProfile/:tutorId" component={tutorProfile} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/About" component={AboutPage} />
          <Route exact path="/Contact" component={ContactPage} />
        </div>
      </Router>
    );
  }
}

export default App;
