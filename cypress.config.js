const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    baseurl: 'https://demoqa.com',
    env:{
      //set all your critical variables
    },
    specPattern: ['cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'],  // Incluir pruebas principales
    //excludeSpecPattern: ['cypress/e2e/**/*.example.cy.{js,jsx,ts,tsx}'],  // Excluir archivos de ejemplo

   // defaultCommandTimeout: 10000,  // Tiempo máximo para comandos (10 segundos)
   // requestTimeout: 15000,         // Tiempo máximo para peticiones HTTP (15 segundos)
   // pageLoadTimeout: 30000,        // Tiempo máximo para la carga completa de una página (30 segundos)
    //screenshotsFolder: 'cypress/screenshots',
    //videosFolder: 'cypress/videos',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    
    },
  },
});
