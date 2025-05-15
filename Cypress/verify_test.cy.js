describe('Verify Text', () => {
  it('checks for correct span text with normalize-space', () => {
    cy.visit('/verifytext');

    cy.get('span').filter((index, el) => {
      return el.textContent.trim() === 'Welcome UserName!';
    }).should('exist')
      .invoke('text')
      .then((text) => {
        cy.log(text);
        console.log(text);
      });

    cy.get('span').filter((index, el) => {
      return el.textContent.trim() !== 'Welcome UserName!';
    }).should('have.length.greaterThan', 0);
  });
});
