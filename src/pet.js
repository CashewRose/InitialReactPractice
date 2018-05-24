import React, { Component } from 'react';

class Pet extends Component {
    render() {
      return (
            <li>I wish I could have a {this.props.pet}, but they dont exist yet</li>
      );
    }
}

export default Pet