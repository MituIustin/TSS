describe('Alerts Tests', () => {
  beforeEach(() => {
    cy.visit('http://uitestingplayground.com/alerts')
  })

  it('Testează Alert - trebuie apăsat OK', () => {
    cy.window().then((win) => {
      cy.stub(win, 'alert').as('alertStub')
    })
    cy.contains('button', 'Alert').click()
    cy.get('@alertStub').should('have.been.calledWith', 'Today is a working day.\nOr less likely a holiday.')
  })

  it('Testează Confirm - apăs OK', () => {
    cy.window().then((win) => {
      cy.stub(win, 'confirm').returns(true).as('confirmStub')
      cy.stub(win, 'alert').as('alertStub')
    })
    cy.contains('button', 'Confirm').click()
    cy.get('@confirmStub').should('have.been.calledOnce')
    cy.get('@alertStub').should('have.been.calledWith', 'Yes')
  })

  it('Testează Confirm - apăs Cancel', () => {
    cy.window().then((win) => {
      cy.stub(win, 'confirm').returns(false).as('confirmStub')
      cy.stub(win, 'alert').as('alertStub')
    })
    cy.contains('button', 'Confirm').click()
    cy.get('@confirmStub').should('have.been.calledOnce')
    cy.get('@alertStub').should('have.been.calledWith', 'No')
  })

  it('Testează Prompt - introducem text și verificăm alert-ul rezultat', () => {
    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns('TestUser').as('promptStub')
      cy.stub(win, 'alert').as('alertStub')
    })
    cy.contains('button', 'Prompt').click()
    cy.get('@promptStub').should('have.been.calledOnce')
    cy.get('@alertStub').should('have.been.calledWith', 'User value: TestUser')
  })
})
