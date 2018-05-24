import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Name from './name';
import Address from './address';
import Cohort from './cohort';
import Vehicle from './vehicle';
import Pet from './pet';


class App extends Component {
    constructor (props) {
        super(props)

        // Put all information about yourself as state properties
        this.state = {
            firstName: "Cashew",
            lastName: "Agnoletti",
            middleName: "Rose",
            cohort: 25,
            address: "absolutely non-of-ya",
            vehicle: "Portal gun",
            pet: "toy or mini elephant"
        }
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Cashew's React</h1>
        </header>
        <ul>
          <Name first={this.state.firstName} middle={this.state.middleName} last={this.state.lastName}/>
          <Cohort cohort={this.state.cohort}/>
          <Address address={this.state.address} />
          <Vehicle ride={this.state.vehicle}/>
          <Pet pet={this.state.pet}/>
        </ul>
      </div>
    );
  }
}

export default App;
