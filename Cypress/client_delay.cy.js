describe('Client Side Delay', () => {
  it('waits for button, clicks, then waits for success message', () => {
    cy.visit('http://uitestingplayground.com/clientdelay');

    cy.get('#ajaxButton', { timeout: 20000 }).should('be.visible').click();

    cy.get('p.bg-success', { timeout: 20000 })
      .should('contain.text', 'Data calculated on the client side.');
  });
});
