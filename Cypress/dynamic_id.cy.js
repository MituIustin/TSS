describe('Dynamic ID', () => {
  it('prints the dynamic button ID', () => {
    cy.visit('/dynamicid');
    cy.contains('button', 'Button with Dynamic ID')
      .invoke('attr', 'id')
      .then((id) => {
        cy.log(`ID: ${id}`);
        console.log(`ID: ${id}`);
      });
  });
});