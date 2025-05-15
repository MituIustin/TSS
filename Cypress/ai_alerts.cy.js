describe('Alerts Tests', () => {
  beforeEach(() => {
    cy.visit('http://uitestingplayground.com/alerts');
  });

  it('Testează Alert - trebuie apăsat OK', () => {
    cy.contains('button', 'Alert').click();

    // Ascultăm alerta și apăsăm OK automat
    cy.on('window:alert', (text) => {
      expect(text).to.eq('I am an alert box!');
    });
  });

  it('Testează Confirm - apăs OK', () => {
    cy.window().then((win) => {
      cy.stub(win, 'confirm').callsFake(() => true); // apasă OK
      cy.stub(win, 'alert').as('alertStub'); // să verificăm alert-ul care apare ulterior
    });

    cy.contains('button', 'Confirm').click();

    cy.get('@alertStub').should('have.been.calledWith', 'You pressed OK!');
  });

  it('Testează Confirm - apăs Cancel', () => {
    cy.window().then((win) => {
      cy.stub(win, 'confirm').callsFake(() => false); // apasă Cancel
      cy.stub(win, 'alert').as('alertStub'); // să verificăm alert-ul care apare ulterior
    });

    cy.contains('button', 'Confirm').click();

    cy.get('@alertStub').should('have.been.calledWith', 'You pressed Cancel!');
  });

  it('Testează Prompt - introducem text și verificăm alert-ul rezultat', () => {
    const userInput = 'TestUser';

    cy.window().then((win) => {
      cy.stub(win, 'prompt').callsFake(() => userInput);
      cy.stub(win, 'alert').as('alertStub');
    });

    cy.contains('button', 'Prompt').click();

    cy.get('@alertStub').should('have.been.calledWith', `You entered: ${userInput}`);
  });
});
