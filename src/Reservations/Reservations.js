import Card from "../Card/Card"

function Reservations({reservations}) {
    const cards = reservations.map(({name, date, id, number, time}) => {
        return (
            <Card
            key={id}
            name={name}
            date={date}
            time={time}
            guests={number}
            />
        )
    })

    return (
        <>
            <h2>Reservation Section</h2>
            {cards}

        </>
        
    )
}

export default Reservations