#!/bin/bash

set -e  

# === CONFIG ===
REPO_URL="https://github.com/MituIustin/TSS"  
REPO_NAME="TSS"

# === Step 1: Clone repo ===
echo "Cloning repo..."
git clone "$REPO_URL"
cd "$REPO_NAME/Cypress"

# === Step 2: Init Cypress ===
echo "Installing dependencies..."
npm init -y
npm install cypress cypress-xpath --save-dev

# === Step 3: Create Cypress folder structure ===
echo "Setting up Cypress folders..."
mkdir -p cypress/e2e
mkdir -p cypress/support

# === Step 4: Move all test files === 
echo "Moving test files to cypress/e2e..."
find . -maxdepth 1 -name "*.cy.js" -exec mv {} cypress/e2e/ \;

# === Step 5: Create cypress.config.js ===
if [ ! -f cypress.config.js ]; then
  echo "Creating cypress.config.js..."
  cat <<EOF > cypress.config.js
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://uitestingplayground.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js',
  },
});
EOF
fi

# === Step 6: Create support file if missing ===
if [ ! -f cypress/support/e2e.js ]; then
  echo "// Cypress support file" > cypress/support/e2e.js
fi

# === Step 7: Run tests ===
echo "Running Cypress tests..."
npx cypress run
