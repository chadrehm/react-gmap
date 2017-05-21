import React, { Component } from 'react';
import { connect } from 'react-redux';

import GoogleMap from './google_map';
import CoordinateInput from './coordinate_input';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {lat:-34.397, lng: 150.644, flightPlanCoordinates: this.props.coordinates};
  }

  render() {
    return (
      <div style={{height: '100%'}}>
        <CoordinateInput />
        <GoogleMap lat={this.state.lat} lng={this.state.lng} flightPlanCoordinates={this.props.coordinates}/>
      </div>
    );
  }
}

function mapStateToProps(state){
  console.log(state.coordinates);
  return { coordinates: state.coordinates };
}

export default connect(mapStateToProps)(App);
