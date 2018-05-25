import React, { Component } from 'react';
import "./styles/pet.css"

class Pet extends Component {
    render() {
      return (
            <li className="pet">I wish I could have a {this.props.size} {this.props.pet}, but they dont exist yet</li>
      );
    }
}

export default Pet