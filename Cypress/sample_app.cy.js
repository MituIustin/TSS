describe('Sample App Login', () => {
  it('performs login, logout, and login failure scenarios', () => {
    cy.visit('/sampleapp');

    const nameInput = () => cy.get("input[name='UserName']");
    const passwordInput = () => cy.get("input[name='Password']");
    const loginButton = () => cy.contains('button', 'Log In');
    const status = () => cy.get('#loginstatus');

    // Login successful
    nameInput().clear().type('admin');
    passwordInput().clear().type('pwd');
    loginButton().click();
    status().should('have.text', 'Welcome, admin!');
    cy.log('Autentificare reusita');
    console.log('Autentificare reusita');

    // Logout
    loginButton().click();
    status().should('have.text', 'User logged out.');
    cy.log('Deconectare reusita');
    console.log('Deconectare reusita');

    // Login fail (wrong password)
    nameInput().clear().type('admin');
    passwordInput().clear().type('pwd!');
    loginButton().click();
    status().should('have.text', 'Invalid username/password');
    cy.log('Autentificare cu parola gresita esuata');
    console.log('Autentificare cu parola gresita esuata');

    // Login fail (missing username)
    passwordInput().clear().type('pwd');
    loginButton().click();
    status().should('have.text', 'Invalid username/password');
    cy.log('Autentificare fara username esuata');
    console.log('Autentificare fara username esuata');
  });
});
