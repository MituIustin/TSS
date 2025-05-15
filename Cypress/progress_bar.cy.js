describe('Progress Bar', () => {
  it('starts progress bar, waits until value is >= 75, then stops and logs result', () => {
    cy.visit('/progressbar');

    cy.get('#startButton').click();

    cy.get('#progressBar', { timeout: 60000 }).should(($bar) => {
      const val = parseInt($bar.attr('aria-valuenow'), 10);
      expect(val).to.be.at.least(75);
    });

    cy.get('#stopButton').click();

    cy.get('#result').then(($res) => {
      const text = $res.text();
      cy.log(text);
      console.log(text);
    });
  });
});
