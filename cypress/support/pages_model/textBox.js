/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

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

        //variables generadas con Faker
        this.randomName = faker.person.fullName();
        this.randomEmail = faker.internet.email();
        this.randomCurrentAddress = faker.location.streetAddress();
        this.randomPermanentAddress = faker.location.city();

        // bouilding var empty or invalid
        this.emptyName = "";
        this.emptyEmail = "";
        this.emptyCurrentAddress = "";
        this.emptyPermanentAddress = "";

        //invalid var
        this.invalidEmail = faker.lorem.word() + "@com";
        this.specialCharacters = faker.string.fromCharacters('097235807570952752jksvbkvsbjkvs!@#$%^&*()_+=-|:;<>?/~');
        this.longSpecialCharacters = faker.string.fromCharacters('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+', 1000);
        this.longestCharacters = faker.string.sample(100);
    }
    // Método para completar el formulario
    fillForm(username, email, currentAddress, permanentAddress) {
        (username) && this.usernameInput().type(username, {parseSpecialCharSequences: false});
        (email) && this.emailInput().type(email);
        (currentAddress) && this.currentAddress().type(currentAddress, {parseSpecialCharSequences: false});
        (permanentAddress) && this.permanentAddress().type(permanentAddress, {parseSpecialCharSequences: false});

        // Hacer clic en el botón "submit"
        this.submitButton().click();

        // Retornar los valores para las assertions
        return { username, email, currentAddress, permanentAddress };
    }
    //method to veriry all ours assersions
    verifyFormOutput(expectedData) {
        // Assertions para cada campo de salida
        expectedData.username && this.outputName().should('contain', expectedData.username);
        expectedData.email&& this.outputEmail().should('contain', expectedData.email);
        expectedData.currentAddress && this.outputCurrentAddress().should('contain', expectedData.currentAddress);
        expectedData.permanentAddress && this.outputPermanentAddress().should('contain', expectedData.permanentAddress);
    }
    //method to verify errorEmail
    verifyEmailErrorClass(email){
        this.emailInput().should('have.class', 'field-error');
    }
}
export default TextBox;
