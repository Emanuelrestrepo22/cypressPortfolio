class TextBox {
    
    constructor(){
        this.usernameInput = () => cy.get('input[id="userName"]');
        this.emailInputmailInput = () => cy.get('input[id="userEmail"]');
        this.cuttentAddress = () => cy.get('#currentAddress');
        this.permanentAddress = () => cy.get('#permanentAddress');
        this.submitButton = () => cy.get('button[id="submit"]');
    }

    //TextBox(username:String, email: email, currentAddress: String, permanentAddress:String)

}