describe('AJAX Data Load', () => {
  it('waits for the AJAX response and verifies the text', () => {
    cy.visit('/ajax');
    cy.get('#ajaxButton').click();
    cy.get('#content p.bg-success', { timeout: 30000 })
      .should('have.text', 'Data loaded with AJAX get request.');
  });
});
