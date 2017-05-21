import React, { Component } from 'react';
import { connect, bindActionCreators } from 'react-redux';

import { actions } from '../reducers/coordinates'

class CoordinateInput extends Component {
  constructor(props) {
    super(props)

    this.state = { coordinates: ' '};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({coordinates: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.setCoordinates(this.state.coordinates);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="coordinate-input form-group">
        <label for="coordinates">Enter Coordinates</label>
        <textarea
          className="form-control"
          row="4"
          id="coordinates"
          value={this.state.coordinates}
          onChange={this.handleChange}
        />
        <button className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

export default connect(null, actions)(CoordinateInput);
