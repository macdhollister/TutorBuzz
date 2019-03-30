import React, { Component } from 'react';
import Footer from '../../components/StaticComps/Footer';
import background from "../../images/honeycomb2.jpg";

class tutorProfile extends Component {
    componentDidMount() {
        document.body.style.backgroundImage = `url("${background}")`
      }
    render () {
        return (
            
            <body className="Site">
            <div>
                
            </div>



            <Footer />
            </body>
        )
    }
}

export default tutorProfile;