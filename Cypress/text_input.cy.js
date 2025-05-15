describe('Text Input', () => {
  it('updates button text after input and click', () => {
    cy.visit('/textinput');

    const TEXT = 'Hello World!';

    cy.get('#newButtonName').type(TEXT);
    cy.get('#updatingButton').click();
    cy.get('#updatingButton').should('have.text', TEXT);
  });
});
