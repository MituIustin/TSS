describe('Scrollbars', () => {
  it('scrolls inside container to reveal the button and clicks it', () => {
    cy.visit('/scrollbars');

    cy.get('div[style*="overflow-x:scroll"]')
      .scrollTo('right', { duration: 500 })  
      .scrollTo('bottom', { duration: 500 }); 

    cy.get('#hidingButton')
      .should('be.visible')
      .click();

    cy.get('#hidingButton').should('have.text', 'Hiding Button');
  });
});
