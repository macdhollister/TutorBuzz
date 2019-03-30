import React, { Component } from 'react';
import Footer from '../../components/StaticComps/Footer';
import background from "../../images/honeycomb2.jpg";
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
                <div className="col-md-8">
                  
                  <div className="row">
                    <TutorHeader />
                  </div>                   
                  
                  <div className="row">
                    <TutorCalendar />
                    <TutorTodaySess />
                  </div>

                </div>

                <div className="col-md-8">
                  <SessionRqstForm />
                </div>


                
            </div>



            <Footer />
            </body>
        )
    }
}

export default tutorProfile;