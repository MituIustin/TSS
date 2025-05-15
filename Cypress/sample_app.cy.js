describe('Sample App Login', () => {
  it('performs login, logout, and login failure scenarios', () => {
    cy.visit('/sampleapp');

    const nameInput = () => cy.get("input[name='UserName']");
    const passwordInput = () => cy.get("input[name='Password']");
    const loginButton = () => cy.get('#login');
    const status = () => cy.get('#loginstatus');

    // Login successful
    nameInput().clear().type('admin');
    passwordInput().clear().type('pwd');
    loginButton().click();
    status().should('have.text', 'Welcome, admin!');

    // Logout
    loginButton().click();
    status().should('have.text', 'User logged out.');

    // Login fail (wrong password)
    nameInput().clear().type('admin');
    passwordInput().clear().type('pwd!');
    loginButton().click();
    status().should('have.text', 'Invalid username/password');

    // Login fail (missing username)
    nameInput().clear();
    passwordInput().clear().type('pwd');
    loginButton().click();
    status().should('have.text', 'Invalid username/password');
  });
});
