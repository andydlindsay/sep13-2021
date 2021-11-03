describe('test display', () => {

  it('can display results from an API request', () => {
    // visit the app
    cy.visit('/');

    // tell cypress to intercept the request and respond with our fixture instead
    cy.intercept('GET', '**/search*', { fixture: 'itunes' })
      .as('searchResults');

    // get the search input and type 'Daft Punk'
    cy.get('.search__form')
      .find('input.radius')
      .type('Daft Punk')
      .should('have.value', 'Daft Punk');

    // grab the spinner and make sure it's visible
    cy.get('.spinner')
      .should('be.visible');

    // wait until the search results come back; check for a particular album
    cy.wait('@searchResults')
      .get('main')
      .contains('Random Access Memories');

    // uncheck the explicit checkbox
    cy.get('#Explicit')
      .uncheck();

    // make sure the explicit album is no longer on the page
    cy.get('article.album')
      .should('not.contain', 'Daft Club');
  });

});
