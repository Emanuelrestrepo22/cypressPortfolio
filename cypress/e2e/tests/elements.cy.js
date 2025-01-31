import TextBox from '../../support/pages/textBox';

describe("TS01 building tests on Elements", () => {
    beforeEach("visit TextboxPage", () => {
        // Capturar excepciones no controladas y evitar que Cypress falle
        cy.on('uncaught:exception', (err, runnable) => {
            // Ignorar errores relacionados con CORS o scripts externos
            return false; 
        });

        // Visitar la página
        cy.visit('https://demoqa.com/text-box');
    });

    it.only('TC-01 should submit form successfully with valid dates', () => {
        const textBox = new TextBox();

        textBox.fillForm(
            'Emanuel Restrepo',
            'emares@gmail.com',
            'belgrano, caba',
            'ciudad de buenos aires'
        );
    });
});