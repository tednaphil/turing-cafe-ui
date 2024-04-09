import '../Form/Form.css';
import { useState } from 'react';

function Form() {
    return (
        <form>
            <input id="name" type="text" placeholder="Name"/>
            <input id="date" type="text" placeholder="Date (mm/dd)"/>
            <input id="time" type="text" placeholder="Time (hh:mm)"/>
            <input id="guests" type="text" placeholder="Number of guests"/>
            <input type="submit"/>
        </form>
    )
}

export default Form