import React, { Component } from 'react';
import Footer from '../../components/StaticComps/Footer';
import background from "../../images/honeycomb.png";
import TutorHeader from "../../components/TutorProfileComps/TutorHeader"
import TutorCalendar from "../../components/TutorComps/TutorCalendar";
import TutorTodaySess from "../../components/TutorComps/TutorTodaySess";
import SessionRqstForm from "../../components/TutorProfileComps/SessionRqstForm";

class tutorProfile extends Component {
    componentDidMount() {
        document.body.style.backgroundImage = `url("${background}")`
      }
    render () {
        return (
            
            <body className="Site">
              <div className="columns">
                <div className="column">
                  
                  <div className="row">
                    <TutorHeader />
                  </div>                   
                  
                  <div className="row">
                    <TutorCalendar />
                    <TutorTodaySess />
                  </div>

                </div>

                <div className="column">
                  <SessionRqstForm />
                </div>


                
            </div>



            <Footer />
            </body>
        )
    }
}

export default tutorProfile;
