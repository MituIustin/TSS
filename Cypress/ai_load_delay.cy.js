describe('Load Delay Test', () => {
  it('Verifică apariția butonului după delay', () => {
    cy.visit('http://uitestingplayground.com/loaddelay');

    // Așteptăm ca butonul să apară în DOM și să fie vizibil
    cy.get('.btn.btn-primary', { timeout: 10000 }) // așteaptă max 10 secunde
      .should('be.visible')
      .and('contain', 'Button')
      .click(); // opțional: apasă butonul pentru a testa interacțiunea
  });
});
