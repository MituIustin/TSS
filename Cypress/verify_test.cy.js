describe('Verify Text', () => {
  it('checks for correct span text with normalize-space', () => {
    cy.visit('/verifytext');

    cy.xpath("//span[. = 'Welcome UserName!']").should('have.length', 0);

    cy.xpath("//span[normalize-space(text()) = 'Welcome UserName!']").should('have.length', 0);

    cy.xpath("//span[normalize-space(.) = 'Welcome UserName!']").should('exist')
      .invoke('text')
      .then((text) => {
        cy.log(text);
        console.log(text);
      });
  });
});
