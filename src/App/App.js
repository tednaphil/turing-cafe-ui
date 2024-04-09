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

  function postReservation(newReservation) {
    fetch('http://localhost:3001/api/v1/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newReservation)
    })
    .then(response => response.json())
    .then(data => addReservation(data))
    .catch(err => console.log(err.message))
  }

  function addReservation(newReservation) {
    setReservations([newReservation, ...reservations])
  }

  function deleteReservation(e, id) {
    e.preventDefault();
    fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => setReservations(data))
    .catch(err => console.log(err.message))
  }


  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
        <Form postReservation={postReservation}/>
      </div>
      <div className='resy-container'>
        <Reservations reservations={reservations} deleteReservation={deleteReservation}/>
      </div>
    </div>
  );
}

export default App; 