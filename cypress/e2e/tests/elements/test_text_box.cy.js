import TextBox from '../../../support/pages/textBox';  // Prueba con esta ruta si es necesario


/**
 * @description: Prueba E2E para el formulario TextBox en DemoQA.
 * @documentation: coverage/test-case-text-box.md
 */
describe("TS01-01 | ToolsQA | Elements | Text-Box", () => {
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
        const textBox1 = new TextBox();

        const formData = textBox1.fillForm(
            textBox1.randomName,
            textBox1.randomEmail,
            textBox1.randomCurrentAddress,
            textBox1.randomPermanentAddress
        );
        // Realizar las assertions usando el método `verifyFormOutput`
        textBox1.verifyFormOutput(formData);
    });

    it('TC-02- should submit form just with valid email', ()=>{
        const textBox2 = new TextBox()
        const formEmptyEmail = textBox2.fillForm(
            textBox2.emptyName,
            textBox2.randomEmail,
            textBox2.emptyCurrentAddress,
            textBox2.emptyPermanentAddress
        );
        console.log(formEmptyEmail)
        textBox2.verifyOutputEmail(formEmptyEmail);
    });
});