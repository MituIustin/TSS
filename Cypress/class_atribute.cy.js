describe('Class Attribute Playground', () => {
  it('verifies class attribute changes on button click', () => {
    cy.visit('/classattr');

    const btn = cy.get('#testClass');

    btn.should('have.class', 'btn-primary');
    btn.click();
    btn.should('have.class', 'btn-danger');
  });
});