describe('Disabled Input', () => {
  it('waits for input to be enabled and types text', () => {
    cy.visit('/disabledinput');
    cy.get('#enableButton').click();
    cy.get('#inputField', { timeout: 30000 }).should('be.enabled').type('Hello World!');
  });
});
