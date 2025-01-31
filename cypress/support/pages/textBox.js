/// <reference types="cypress" />

class TextBox {
    constructor() {
        // Definición de selectores como funciones que devuelven Cypress.Chainable
        this.usernameInput = () => cy.get('input[id="userName"]');
        this.emailInput = () => cy.get('#userEmail');
        this.currentAddress = () => cy.get('#currentAddress');
        this.permanentAddress = () => cy.get('#permanentAddress');
        this.submitButton = () => cy.get('button[id="submit"]');
    }

    // Método para completar el formulario
    fillForm(username, email, currentAddress, permanentAddress) {
        if (username) this.usernameInput().type(username);
        if (email) this.emailInput().type(email);
        if (currentAddress) this.currentAddress().type(currentAddress);
        if (permanentAddress) this.permanentAddress().type(permanentAddress);
        this.submitButton().click();
    }
}

export default TextBox;
