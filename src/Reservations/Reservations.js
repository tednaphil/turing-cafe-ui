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
            {cards}
        </>
        
    )
}

export default Reservations