import React from 'react';
import ReservationCard from '../ReservationCard/ReservationCard'
import './Reservations.css'

const Reservations = ({ reservations, cancelRes }) => {
  const resCards = reservations.map( reservation => {
    return <ReservationCard
      name={reservation.name} 
      date={reservation.date}
      time={reservation.time}
      number={reservation.number}
      cancelRes={cancelRes}
    />
  })

  return (
    <div className='container'>
      {resCards}
    </div>
  )
}


export default Reservations