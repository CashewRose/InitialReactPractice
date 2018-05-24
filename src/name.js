import React, { Component } from 'react';

class Name extends Component {
    render() {
      return (
            <li>{this.props.first} {this.props.middle} {this.props.last}</li>
      );
    }
}

export default Name