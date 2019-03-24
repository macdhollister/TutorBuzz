import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import tutorPortal from "./pages/tutorPortal.js";
import studentPortal from "./pages/studentPortal.js";
import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Route exact path="/" component={Homepage} />
                <Route exact path="/tutorPortal" component={tutorPortal} />
                <Route exact path="/studentPortal" component={studentPortal} />
            </div>
        </Router>
    );
  }
}

export default App;
