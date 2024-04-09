import '../Card/Card.css'

function Card({ name, date, time, guests }) {
    return (
        <article className="reservation-card">
            <h3>{name}</h3>
            <p>{date}</p>
            <p>{time} pm</p>
            <p>Number of guests: {guests}</p>
            {/* <button>Cancel</button> */}
        </article>
    )
}

export default Card