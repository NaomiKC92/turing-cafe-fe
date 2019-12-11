import React, { Component } from 'react';
import './App.css';
import { getReservations, postReservation } from '../apiCalls'
import Reservations from '../Reservations/Reservations'
import Form from '../Form/Form'

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    getReservations()
      .then(reservations => this.setState({ reservations }))
  }

  addReservation = newReservation => {
    const options = {
      method: 'POST',
      body: JSON.stringify(newReservation),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    postReservation(options)
      .then(reservation => this.setState({
        reservations: [...this.state.reservations, reservation]
      }))
  };

  
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation}/>
        </div>
        <div className='resy-container'>
          <Reservations 
            reservations={this.state.reservations}
          />
        </div>
      </div>
    )
  }
}

export default App;
