describe('Turing Cafe', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {
      statusCode: 200,
      // fixture: "test_res"
      body: [
        {"date": "12/29", "id": 1, "name": "Christie", "number": 8, "time": "12:00"},
        {"date": "12/29", "id": 2, "name": "Jolene", "number": 1, "time": "10:00"},
        {"date": "12/29", "id": 3, "name": "Bellamy", "number": 3, "time": "6:30"},
        {"date": "12/29", "id": 4, "name": "Taylor", "number": 2, "time": "7:00"},
        {"date": "12/29", "id": 5, "name": "Santa", "number": 12, "time": "8:00"},
    ]
    }).as('getReservations')
    .visit('http://localhost:3000/')

  })
  it('Displays title and existing reservations', () => {
  })
})