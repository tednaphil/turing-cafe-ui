import '../Form/Form.css';
import { useState } from 'react';


function Form({postReservation}) {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);

    function makeReservation() {
        return {
            name,
            date,
            time,
            number: Number(guests)
        }
    };

    function handleSubmission(e) {
        e.preventDefault()
        const newReservation = makeReservation();
        postReservation(newReservation);
        clearInputs()
        //reset states of each form input
    }

    function clearInputs() {
        setName('');
        setDate('');
        setTime('');
        setGuests(1);
    }



    return (
        <form onSubmit={(e) => handleSubmission(e)}>
            <input id="name" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
            <input id="date" type="text" placeholder="Date (mm/dd)" value={date} onChange={(e) => setDate(e.target.value)}/>
            <input id="time" type="text" placeholder="Time (hh:mm)" value={time} onChange={(e) => setTime(e.target.value)}/>
            <input id="guests" type="number" placeholder="Number of guests" value={guests} onChange={(e) => setGuests(e.target.value)}/>
            <input id="submit" type="submit" value="Make Reservation"/>
        </form>
    )
}

export default Form