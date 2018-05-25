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
          name:[],
          cohort:[],
          address:[],
          vehicle: [],
          pet: []
        }
    }
    /*
        Get all contacts from the API. This is the fetch
        syntax which replaces $.ajax()

        https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    */
  
  componentDidMount() {
    fetch(`http://localhost:8080/people/1`)
      .then(r => r.json())
      .then(me => {
        this.setState({name: me})
        return fetch("http://localhost:8080/cohort/1")
      })
      .then(r => r.json())
      .then(co => {
        this.setState({cohort: co})
        return fetch("http://localhost:8080/address/1")
      })
      .then(r => r.json())
      .then(add => {
        this.setState({address: add})
        return fetch("http://localhost:8080/pet/1")
      })
      .then(r => r.json())
      .then(meow=> {
        this.setState({pet: meow})
        return fetch("http://localhost:8080/vehicle/1")
      })
      .then(r => r.json())
      .then(veh => this.setState({vehicle: veh}))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Cashew's React</h1>
        </header>
        <ul>
          <Name first={this.state.name.firstName} middle={this.state.name.middleName} last={this.state.name.lastName}/>
          <Cohort cohort={this.state.cohort.number}/>
          <Address address={this.state.address.streetname} />
          <Vehicle ride={this.state.vehicle.model}/>
          <Pet pet={this.state.pet.species} size={this.state.pet.size}/>
        </ul>
      </div>
    );
  }
}

export default App;
