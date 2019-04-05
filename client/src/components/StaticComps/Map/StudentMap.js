// StudentMap.js

import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import StudentMarker from "./StudentMarker";

const StudentMap = withScriptjs(withGoogleMap((props) =>{

  const markers = props.student.map( student => <StudentMarker
                    key={student.uid}
                    doctor={student}
                    location={{lat: student.location.lat, lng: student.location.lon}}
                  />);
                  
  return (
      <GoogleMap
        defaultZoom={14}
        center={ { lat:  42.3601, lng: -71.0589 } }
        >
        {markers}
      </GoogleMap>
    );
  }
))

export default StudentMap;