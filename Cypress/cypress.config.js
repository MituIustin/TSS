const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://uitestingplayground.com',
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: false
  },
});
