import React, { Component } from 'react';
import Footer from '../../components/StaticComps/Footer';
import background from "../../images/honeycomb.png";
import TutorHeader from "../../components/TutorProfileComps/TutorHeader"
import TutorCalendar from "../../components/TutorComps/TutorCalendar";
import TutorTodaySess from "../../components/TutorComps/TutorTodaySess";
import SessionRqstForm from "../../components/TutorProfileComps/SessionRqstForm";

class tutorProfile extends Component {
  state = {
    name: "",
    date: "",
    cal: "",
    rqstForm: "",

  }

  componentDidMount() {
    document.body.style.backgroundImage = `url("${background}")`;
    fetch("/selfDataStudent")
    .then(res => res.json())
    .then(res => this.setState({
      name: res.name,
      date: res.TutorTodaySess,
      cal: res.TutorCalendar,
      rqstForm: res.SessionRqstForm,
      id: res.id
    }))
    
  }
  render() {
    return (

      <body className="Site">

        <div className="columns">

          <div className="column">

            <div className="row">
              <TutorHeader name={this.state.name} />
            </div>

            <div className="row">
              <TutorCalendar name={this.state.cal} />
              <TutorTodaySess name={this.state.date} />
            </div>

          </div>

          <div className="column">
            <SessionRqstForm name={this.state.rqstForm}/>
          </div>

        </div>

        <Footer />

      </body>
    )
  }
}

export default tutorProfile;
