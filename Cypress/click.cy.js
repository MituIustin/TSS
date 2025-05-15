describe('Click Button Color Change', () => {
  it('checks the button background color before and after click', () => {
    cy.visit('/click');

    cy.get('#badButton').then(($btn) => {
      const colorBefore = $btn.css('background-color');
      cy.log(`Culoare inainte de click: ${colorBefore}`);
      console.log(`Culoare inainte de click: ${colorBefore}`);
    });

    cy.get('#badButton').click();
    cy.wait(1000);

    cy.get('#badButton').then(($btn) => {
      const colorAfter = $btn.css('background-color');
      cy.log(`Culoare dupa click: ${colorAfter}`);
      console.log(`Culoare dupa click: ${colorAfter}`);
    });
  });
});
