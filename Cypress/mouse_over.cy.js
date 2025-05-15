describe('Mouseover Clicks', () => {
  it('clicks "Click me" 10 times and "Link Button" 7 times, then verifies counts', () => {
    cy.visit('/mouseover');

    for (let i = 0; i < 10; i++) {
      cy.xpath("//a[text()='Click me']").click();
    }

    for (let i = 0; i < 7; i++) {
      cy.xpath("//a[text()='Link Button']").click();
    }

    cy.get('#clickCount').should('have.text', '10');
    cy.get('#clickButtonCount').should('have.text', '7');
  });
});
