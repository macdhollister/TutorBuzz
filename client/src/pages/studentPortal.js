import React, { Component } from 'react';
import '../App.css';

let honeycomb = require('../images/honeycomb.png');

class studentPortal extends Component {
  render() {
    return (
      <div className='background-image' style ={ { backgroundImage: "url("+honeycomb+")", backgroundSize: 'cover'} }>
      <p>text</p>
      </div>
    );
  }
}

export default studentPortal;
