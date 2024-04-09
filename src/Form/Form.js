import '../Form/Form.css';
import { useState } from 'react';

function Form({addReservation}) {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState('');

    function makeReservation() {
        return {
            id: Date.now(),
            name,
            date,
            time,
            guests
        }
    };

    function handleSubmission(e) {
        e.preventDefault()
        const newReservation = makeReservation();
        addReservation(newReservation)
    }



    return (
        <form onSubmit={(e) => handleSubmission(e)}>
            <input id="name" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
            <input id="date" type="text" placeholder="Date (mm/dd)" value={date} onChange={(e) => setDate(e.target.value)}/>
            <input id="time" type="text" placeholder="Time (hh:mm)" value={time} onChange={(e) => setTime(e.target.value)}/>
            <input id="guests" type="text" placeholder="Number of guests" value={guests} onChange={(e) => setGuests(e.target.value)}/>
            <input type="submit" value="Make Reservation"/>
        </form>
    )
}

export default Form