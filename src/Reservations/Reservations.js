import Card from "../Card/Card"
import '../Reservations/Reservations.css'


function Reservations({reservations, deleteReservation}) {
    const cards = reservations.map(({name, date, id, number, time}) => {
        return (
            <Card
            key={id}
            id={id}
            name={name}
            date={date}
            time={time}
            guests={number}
            deleteReservation={deleteReservation}
            />
        )
    })

    return (
        <>
            {cards}
        </>
        
    )
}

export default Reservations