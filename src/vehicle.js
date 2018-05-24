import React, { Component } from 'react';

class Vehicle extends Component {
    render() {
      return (
            <li>{this.props.ride}'s are better than cars</li>
      );
    }
}

export default Vehicle