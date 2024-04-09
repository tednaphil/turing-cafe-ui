describe('Turing Cafe', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {
      statusCode: 200,
      // fixture: "test_res"
      body: [
        {"date": "12/29", "id": 1, "name": "Christie", "number": 8, "time": "12:00"},
        {"date": "7/29", "id": 2, "name": "Jolene", "number": 1, "time": "10:00"},
        {"date": "10/29", "id": 3, "name": "Bellamy", "number": 3, "time": "6:30"},
        {"date": "1/29", "id": 4, "name": "Taylor", "number": 2, "time": "7:00"},
        {"date": "12/25", "id": 5, "name": "Santa", "number": 12, "time": "8:00"},
    ]
    }).as('getReservations')
    .visit('http://localhost:3000/')

  })
  it('Displays title and existing reservations', () => {
    cy.get('h1').contains('Turing Cafe Reservations')
    .get('form').children().should('have.length', 5)
    .get('.resy-container').children().should('have.length', 5)
    .get('.reservation-card').first().contains('Christie')
    .get('.reservation-card').first().contains('12/29')
    .get('.reservation-card').first().contains('12:00 pm')
    .get('.reservation-card').first().contains('Number of guests: 8')
    .get('.reservation-card').last().contains('Santa')
    .get('.reservation-card').last().contains('12/25')
    .get('.reservation-card').last().contains('8:00 pm')
    .get('.reservation-card').last().contains('Number of guests: 12')
  })

  it('Creates and displays new reservations', () => {
    cy.get('input[id="name"]').type('Beyonce').should('have.value', 'Beyonce')
    cy.get('input[id="date"]').type('05/05').should('have.value', '05/05')
    cy.get('input[id="time"]').type('5:00').should('have.value', '5:00')
    cy.get('input[id="guests"]').type('5').should('have.value', '15')
    cy.get('input[type="submit"]').click()
    .get('.reservation-card').first().contains('Beyonce')
    .get('.reservation-card').first().contains('05/05')
    .get('.reservation-card').first().contains('5:00 pm')
    .get('.reservation-card').first().contains('Number of guests: 15')
  })
})