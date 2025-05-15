describe('Scrollbars', () => {
  it('scrolls to the button and clicks it', () => {
    cy.visit('/scrollbars');

    cy.get('#scrollButton').scrollIntoView().click();
    cy.get('#scrollButton').should('have.text', 'Click!');
  });
});
