import React from "react";
import { Marker } from "react-google-maps";
import TutorLogo from "./images/TutorLogo.png";

export default class DoctorMarker extends React.Component {

  render(){
    return(
        <Marker
          position={this.props.location}
          icon={TutorLogo}
        >
        </Marker>
    );
  }
}