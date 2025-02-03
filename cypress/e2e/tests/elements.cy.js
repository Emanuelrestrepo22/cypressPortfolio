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

    it('TC-01 should submit form successfully with valid dates', () => {
        const textBox = new TextBox();

        const formData = textBox.fillForm(
            'Emanuel Restrepo',
            'emares@gmail.com',
            'belgrano, caba',
            'ciudad de buenos aires'
        );

        cy.log('Form Data:', JSON.stringify(formData));
        console.log('Form Data:', formData);
        //verify results
        // Realizar las assertions usando el método `verifyFormOutput`
        textBox.verifyFormOutput(formData);
        

    });
});