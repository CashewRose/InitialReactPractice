import React, { Component } from 'react';

class Cohort extends Component {
    render() {
      return (
            <li>I am proud to be in cohort {this.props.cohort}</li>
      );
    }
}

export default Cohort