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
        this.state = {}
    }
    /*
        Get all contacts from the API. This is the fetch
        syntax which replaces $.ajax()

        https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    */
   loadContacts () {
    fetch("http://localhost:8080/people/1")
        // Must be explicit on how to parse the response
        .then(r => r.json())

        // JSON parsed data comes to this then()
        .then(contacts => {
            this.setState(contacts)
        })
  }

  componentDidMount() {
    this.loadContacts()  // Trigger the loading of contacts
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
