const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    
    setupNodeEvents(on, config) {
      // cualquier evento que uses
    },
    //supportFile: 'cypress/support/index.js',
    env: {
      aliases: {
        '@pages': 'cypress/pages',
      },
    },

    specPattern: [
      'cypress/e2e/**/*.cy.{js,ts}',
      'cypress/integration/**/*.test.{js,ts}',
    ],

    defaultCommandTimeout: 15000
    
  },
});
