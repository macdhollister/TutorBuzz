import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <body class="Site">
          <Navbar />
          <Signup />
          <Footer />
        </body>
      </div>
    );
  }
}

export default App;
