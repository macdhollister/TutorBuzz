import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/StaticComps/Navbar';
import Homepage from "./pages/HomeAndLogin/Homepage";
// import Footer from "./components/Footer";
import tutorPortal from "./pages/Tutor/tutorPortal.js";
import studentPortal from "./pages/Student/studentPortal.js";
import tutorProfile from "./pages/Tutor/tutorProfile.js";
import './App.css';
import Loginpage from './pages/HomeAndLogin/Loginpage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Homepage} />
          <Route exact path="/tutorPortal" component={tutorPortal} />
          <Route exact path="/studentPortal" component={studentPortal} />
          <Route exact path="/tutorProfile" component={tutorProfile} />
          <Route exact path="/loginpage" component={Loginpage} />

        </div>
      </Router>
    );
  }
}

export default App;
