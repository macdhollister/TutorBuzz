import React, { Component } from 'react';
import "./SessionRqstForm.css";



class SessionRqstForm extends Component {
  constructor(props) {
    super(props);
    this.state = {

      Hour: 'Hr',
      Min: 'Min',
      Name: 'Name',
      Email: 'Contactinfo',
      Location: 'Location',
      Date: 'Date',
      Time: 'Time',
      Id: 'Id'

      // Name: '',
      // Email: '',
      // id: null,
//       Location: '',
//       Date: '',
//       startHr: '',
//       startMin: '',
//       startAmPm: '',
//       endHr: '',
//       endMin: '',
//       endAmPm: ''

    };
  };

  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      this.setState({
        Name: this.props.data.studentName,
        Email: this.props.data.studentEmail,
        studentId: this.props.data.studentId,
        tutorId: this.props.data.tutorId
      })
    }
  }
  
  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value
    });
  }

  render() {
    return (
      <div className="RequestForm">
        <header className="card-header">
          <h1 className="is-size-4 has-text-weight-bold has-text-info card-header-title" id="requestTitle">Request A Session</h1>
        </header>

        <form method="POST">

          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input 
              className="input" 
              type="text" 
              placeholder="Name" 
              name="Name"
              value={this.state.Name}
              onChange={this.handleChange("Name")} />
            </div>
          </div>

          <div className="field">
            <label className="label">Contact info(email)</label>
            <div className="control">
              <input className="input" 
              type="text" 
              name="Contactinfo"
              placeholder="email"
              value={this.state.Email}
              onChange={this.handleChange("Email")} />
            </div>
          </div>

          <div className="field">
            <label className="label">Location(address)</label>
            <div className="control">
              <input className="input" 
              type="text" 
              name="Location"
              placeholder="address"
              value={this.state.Location}
              onChange={this.handleChange("Location")} />
            </div>
          </div>

          <div className="field">
            <label className="label">Date</label>
            <div className="control">
              <input className="input" 
              type="date" 
              placeholder="date"
              name="Date"
              value={this.state.Date}
              onChange={this.handleChange("Date")} />
            </div>
          </div>

          <label className="label">Time</label>
          <div className="timedropdowns level">
            <div className="field level-left">
              <div className="control">
                <div className="select">
                  <select>
                    <option>Hr</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="field level-item">
              {/* <label className="label">Time</label> */}
              <div className="control">
                <div className="select">
                  <select>
                    <option>Min</option>
                    <option value="00">:00</option>
                    <option value="15">:15</option>
                    <option value="30">:30</option>
                    <option value="45">:45</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="field level-item">
              {/* <label className="label">Time</label> */}
              <div className="control">
                <div className="select">
                  <select>
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>

                  </select>
                </div>
              </div>
            </div>

            <div className="level-item">
              to
            </div>


            <div className="field level-item">
              <div className="control">
                <div className="select">
                  <select value={this.state.hour} onChange={this.hourChange}>
                    <option>Hr</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="field level-item">
              {/* <label className="label">Time</label> */}
              <div className="control">
                <div className="select">
                  <select>
                    <option>Min</option>
                    <option value="00">:00</option>
                    <option value="15">:15</option>
                    <option value="30">:30</option>
                    <option value="45">:45</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="field level-item" >
              {/* <label className="label">Time</label> */}
              <div className="control">
                <div className="select">
                  <select>
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link" id="sessionRqstSubmit" type="submit" onClick={this.request}>Submit </button>
            </div>
            <div className="control">
              <a href="/"><button type="button" className="button is-text cancelButton">Cancel</button></a>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <input 
                className="input"
                type="hidden"
                name="tutorId"
                value={this.state.tutorId}
              />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <input 
                className="input"
                type="hidden"
                name="studentId"
                value={this.state.studentId}
              />
            </div>
          </div>
        </form>
      </div>
    )
  }

}


export default SessionRqstForm;


