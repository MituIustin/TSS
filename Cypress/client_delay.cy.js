describe('Client Delay', () => {
  it('waits for client delay button to appear and clicks it', () => {
    cy.visit('/clientdelay');
    cy.get('#ajaxButton', { timeout: 15000 }).should('be.visible').click();
    cy.get('#ajaxButton').should('have.text', 'Button Clicked');
  });
});
