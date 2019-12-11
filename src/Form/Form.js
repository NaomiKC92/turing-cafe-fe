import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      numberOfGuests: 1
    }
  };

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  resetInputs = () => {
    this.setState({ 
      name: '',
      date: '',
      time: '',
      numberOfGuests: 1
    })
  }

  makeRes = e => {
    e.preventDefault();
    const newReservation = {...this.state, id: Date.now()}
    const { addReservation } = this.props;
    addReservation(newReservation);
    this.resetInputs();
  }

  render() {
   return (
    <form className='form'>
      <input 
      type='text' 
      name='name' 
      value={this.state.name}
      placeholder='Name'
      onChange={this.handleChange}
      />
      <input 
      type='date' 
      name='date' 
      value={this.state.date}
      placeholder='Date'
      onChange={this.handleChange}
      />
      <input 
      type='time' 
      name='time' 
      value={this.state.time}
      placeholder='Time'
      onChange={this.handleChange}
      />
      <input 
      type='number' 
      name='numberOfGuests' 
      value={this.state.numberOfGuests}
      placeholder='Number of Guests'
      onChange={this.handleChange}
      />
      <button 
        onClick={this.makeRes}
      >
        Make Reservation</button>
    </form>
    )
  }



};

export default Form
