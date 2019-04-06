// StudentMapContainer.js

import React from "react";
import StudentMap from "../components/StudentMap";

export default class StudentMapContainer extends React.Component {

	render() {
		return (
			<StudentMap
				student={this.props.student}
				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDHdY7HJMISvG_wuZw5ygjeptNvHFfrANM&v=3.exp&libraries=geometry,drawing,places`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `600px`, width: `600px` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		);
	}
}