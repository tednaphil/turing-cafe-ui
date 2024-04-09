import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import Reservations from '../Reservations/Reservations';
import Form from '../Form/Form';

function App() {
  const [reservations, setReservations] = useState([]);

  function getReservations() {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
    // .then(data => setReservations([...reservations, ...data]))
    .then(data => setReservations(data))
    .catch(err => console.log(err))
  }

  useEffect(() => {getReservations()}, [])

  function addReservation(newReservation) {
    setReservations([newReservation, ...reservations])
  }


  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
        <Form addReservation={addReservation}/>
      </div>
      <div className='resy-container'>
        <Reservations reservations={reservations}/>
      </div>
    </div>
  );
}

export default App; 