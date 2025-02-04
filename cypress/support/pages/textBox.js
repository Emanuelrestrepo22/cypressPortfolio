/// <reference types="cypress" />

class TextBox {
    constructor() {
        // Definición de selectores de entrada
        this.usernameInput = () => cy.get('input[id="userName"]');
        this.emailInput = () => cy.get('#userEmail');
        this.currentAddress = () => cy.get('textarea#currentAddress');
        this.permanentAddress = () => cy.get('textarea#permanentAddress');
        this.submitButton = () => cy.get('button[id="submit"]');

        // Definición de selectores de salida
        this.outputName = () => cy.get('p#name');
        this.outputEmail = () => cy.get('p#email');
        this.outputCurrentAddress = () => cy.get('p#currentAddress');
        this.outputPermanentAddress = () => cy.get('p#permanentAddress');
    }
    // Método para completar el formulario
    fillForm(username, email, currentAddress, permanentAddress) {
        (username) && this.usernameInput().type(username);
        (email) && this.emailInput().type(email);
        (currentAddress) && this.currentAddress().type(currentAddress);
        (permanentAddress) && this.permanentAddress().type(permanentAddress);

        // Hacer clic en el botón "submit"
        this.submitButton().click();

        // Esperar a que los elementos se actualicen
        cy.wait(1000);  // Ajusta el tiempo según sea necesario


        // Retornar los valores para las assertions
        return { username, email, currentAddress, permanentAddress };
    }
    verifyFormOutput(expectedData) {
        // Assertions para cada campo de salida
        this.outputName().should('contain', expectedData.username);
        this.outputEmail().should('contain', expectedData.email);
        this.outputCurrentAddress().should('contain', expectedData.currentAddress);
        this.outputPermanentAddress().should('contain', expectedData.permanentAddress);
    }
}
export default TextBox;
