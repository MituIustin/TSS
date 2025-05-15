describe('Class Attribute Playground', () => {
  it('identifică butonul după clasa btn-primary și gestionează alerta', () => {
    cy.visit('http://uitestingplayground.com/classattr');

    cy.window().then((win) => {
      cy.stub(win, 'alert').as('alertStub')
    });

    cy.get('button.btn-primary')
      .should('exist')
      .click();

    cy.get('@alertStub').should('have.been.calledOnce');
  });
});
