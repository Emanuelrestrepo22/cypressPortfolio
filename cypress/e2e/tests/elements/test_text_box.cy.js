import TextBox from '../../../support/pages_model/textBox';  // Prueba con esta ruta si es necesario


/**
 * @description: Prueba E2E para el formulario TextBox en DemoQA.
 * @documentation: coverage/test-case-text-box.md
 */
describe("TS01 | ToolsQA | Elements | Text-Box", () => {
    beforeEach("visit TextboxPage", () => {
        cy.on('uncaught:exception', (err, runnable) => {
            // Ignorar errores relacionados con CORS o scripts externos
            return false; 
        });
        //cy.intercept('GET', '**/*.png', { statusCode: 200, body: '' }); // Bloquea imágenes
        //cy.intercept('GET', '**/*.css', { statusCode: 200, body: '' }); // Bloquea CSS
        

        // Visitar la página
        cy.visit('https://demoqa.com/text-box', {
           failOnStatusCode: false
        });
    });

    it('TC01 | TextBox | Submit form with all valid inputs', () => {
        const tc1 = new TextBox();

        const formData = tc1.fillForm(
            tc1.randomName,
            tc1.randomEmail,
            tc1.randomCurrentAddress,
            tc1.randomPermanentAddress
        );
        tc1.verifyFormOutput(formData);
    });
    
    it('TC02 | TextBox | Submit form filling only valid email', ()=>{
        const tc2 = new TextBox();
        const fillEmail = tc2.fillForm(
            tc2.emptyName,
            tc2.randomEmail,
            tc2.emptyCurrentAddress,
            tc2.emptyPermanentAddress
        );
        tc2.verifyFormOutput(fillEmail.email)
    });
    it('TC03 | TextBox | Submit form filling only full name', ()=> {
        const tc3 = new TextBox();
        const fillFullname = tc3.fillForm(
            tc3.randomName,
            tc3.emptyEmail,
            tc3.emptyCurrentAddress,
            tc3.emptyPermanentAddress
        );
        tc3.verifyFormOutput(fillFullname.username)
        });
            
        it('TC04 | TextBox | Submit form without email', ()=> {
            const tc4 = new TextBox();
            const fillWithoutEmail = tc4.fillForm(
                tc4.randomName,
                tc4.emptyEmail,
                tc4.randomCurrentAddress,
                tc4.randomPermanentAddress
            );
            tc4.verifyFormOutput(fillWithoutEmail)
            });
            
            it('TC05 | TextBox | Submit form with excessively long data in inputs', ()=> {
                const tc5 = new TextBox();
                const fillLongestData = tc5.fillForm(
                    tc5.longestCharacters,
                    tc5.emptyEmail,
                    tc5.longestCharacters,
                    tc5.longestCharacters
                );
                tc5.verifyFormOutput(fillLongestData)
                }); 
                it('TC06 | TextBox | Submit form with special characters in inputs', ()=> {
                    const tc6 = new TextBox();
                    const fillSpecialCharacters = tc6.fillForm(
                        tc6.specialCharacters,
                        tc6.randomEmail,
                        tc6.specialCharacters,
                        tc6.longestCharacters
                    );
                    tc6.verifyFormOutput(fillSpecialCharacters)
                    }); 
                    

                    it('TC07 | TextBox | Should not submit form with invalid email', ()=>{
                        const tc7 = new TextBox();
                        const fillInvalidEmail = tc7.fillForm(
                            tc7.emptyName,
                            tc7.invalidEmail,
                            tc7.emptyCurrentAddress,
                            tc7.emptyPermanentAddress
                        );
                        tc7.verifyEmailErrorClass(fillInvalidEmail);
                    }); 

});