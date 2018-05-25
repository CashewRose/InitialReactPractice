import React, { Component } from 'react';
import "./styles/address.css"

class Address extends Component {
    render() {
      return (
            <li>My address is {this.props.address}</li>
      );
    }
}

export default Address