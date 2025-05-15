describe('Animation Button', () => {
  it('waits for animation to stop and clicks the moving target', () => {
    cy.visit('/animation');
    cy.get('#animationButton').click();

    let lastX = null;
    let lastY = null;

    function waitForStop() {
      cy.get('#movingTarget').then(($el) => {
        const rect = $el[0].getBoundingClientRect();
        const x = Math.round(rect.x);
        const y = Math.round(rect.y);

        if (x === lastX && y === lastY) {
          cy.wrap($el).click();
        } else {
          lastX = x;
          lastY = y;
          cy.wait(50).then(waitForStop);
        }
      });
    }

    waitForStop();

    cy.get('#opstatus').should(($el) => {
      const text = $el.text();
      expect(text).to.include('btn');
      expect(text).to.include('btn-primary');
      expect(text).not.to.include('spin');
    });
  });
});
