import React, { Component } from 'react';

export default class extends Component {
  shouldComponentUpdate() {
    return false;
  }

  componentWillReceiveProps(nextProps) {
    console.log("gmap")
    console.log(nextProps)
    const flightPath = new google.maps.Polyline({
      path: nextProps.flightPlanCoordinates,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });

    flightPath.setMap(this.map)
  }

  componentDidMount() {
    this.map = new google.maps.Map(this.refs.map, {
      center: {lat: 0, lng: -180},
      zoom: 3,
      mapTypeId: 'terrain'
    });
  }

  render() {
    return (
      <div id="map" ref="map" />
    )
  }
}
