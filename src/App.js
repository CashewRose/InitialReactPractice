import React, { Component } from 'react';
import logo from './paisley.svg';
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
          pet: [],
          img: ""
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
        if (co.peopleId === this.state.name.id) {
        this.setState({cohort: co})
        }
        return fetch("http://localhost:8080/address/1")
      })
      .then(r => r.json())
      .then(add => {
        if (add.peopleId === this.state.name.id) {
        this.setState({address: add})
      }
        return fetch("http://localhost:8080/pet/1")
      })
      .then(r => r.json())
      .then(meow=> {
        if (meow.peopleId === this.state.name.id) {
        this.setState({pet: meow})
      }
        return fetch("http://localhost:8080/vehicle/1")
      })
      .then(r => r.json())
      .then(veh => {
        if (veh.peopleId === this.state.name.id) {
          this.setState({vehicle: veh})
        }
      })
  }

  loadAnImage = function(event) {
    this.setState({img: "src ='http://i0.kym-cdn.com/photos/images/original/000/685/404/c01.jpg"})
  }.bind(this)

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Cashew's Personal React Website</h1>
        </header>
        <ul>
          <Name first={this.state.name.firstName} middle={this.state.name.middleName} last={this.state.name.lastName}/>
          <Cohort cohort={this.state.cohort.number}/>
          <Address address={this.state.address.streetname} />
          <Vehicle ride={this.state.vehicle.model}/>
          <Pet pet={this.state.pet.species} size={this.state.pet.size}/>
          {/* <button onClick={this.loadAnImage}>
                    Show a Picture
                </button> */}
          {/* <img alt="ele" src={this.state.img}></img> */}
        </ul>
      </div>
    );
  }
}

export default App;
