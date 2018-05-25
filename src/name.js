import React, { Component } from 'react';
import "./name.css"

class Name extends Component {
    render() {
      return (
            <li>
              <section className="name">{this.props.first}</section>
              <section className="name"> {this.props.middle}</section>
              <section className="name"> {this.props.last}</section>
            </li>
      );
    }
}

export default Name