import React, { Component } from 'react';
import "./styles/vehicle.css"

class Vehicle extends Component {
    render() {
      return (
            <li>{this.props.ride}'s are better than cars</li>
      );
    }
}

export default Vehicle