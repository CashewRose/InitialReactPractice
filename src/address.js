import React, { Component } from 'react';

class Address extends Component {
    render() {
      return (
            <li>My address is {this.props.address}</li>
      );
    }
}

export default Address