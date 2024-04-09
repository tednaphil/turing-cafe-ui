import './App.css';
import React from 'react';
import { useState } from 'react';
import Reservations from '../Reservations/Reservations';

function App() {
  const [reservations, setReservations] = useState([]);


  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
      </div>
      <div className='resy-container'>
        <Reservations/>
      </div>
    </div>
  );
}

export default App; 