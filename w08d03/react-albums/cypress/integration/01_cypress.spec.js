describe('tests for cypress', () => {

  it('can run', () => {
    assert.equal(3, 3);
  });

  it('can visit the homepage', () => {
    cy.visit('http://localhost:8765/');
  });

});
