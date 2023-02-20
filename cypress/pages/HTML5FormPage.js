class HTML5Page{

    elements = {
        colourInput: ()=> cy.get('input[type = "color"]'),
        dateInput: ()=> cy.get('input[type = "date"]'),
        dateTimeInput: ()=> cy.get('input[type = "datetime-local"]'),
        emailInput: ()=> cy.get('input[type = "email"]'),
        monthInput: ()=> cy.get('input[type = "month"]'),
        numberInput: ()=> cy.get('input[type = "number"]'),
        submitButton: ()=> cy.get('input[type = "submit"]'),
        resetButton: ()=> cy.get('input[type = "reset"]'),

        submittedValues: ()=> cy.get("div.centered p"),
        submittedColour: ()=> cy.get('#_valuecolour'),
        submittedDate: ()=> cy.get('#_valuedate'),
        submittedDateTime: ()=> cy.get('#_valuedatetime'),
        submittedEmail: ()=> cy.get('#_valueemail'),
        submittedMonth: ()=> cy.get('#_valuemonth'),
        submittedNumber: ()=> cy.get('#_valuenumber'),
        backButton: ()=> cy.get("#back_to_form")

    }

    submitData(colour, date, localDate, email, month, number){
        this.elements.colourInput()
        .invoke('val', colour)
        .trigger('input')

        this.elements.dateInput().click().type(date)
        this.elements.dateTimeInput().click().type(localDate)
        this.elements.emailInput().clear().type(email)
        this.elements.monthInput().click().type(month)
        this.elements.numberInput().clear().type(number)
    }

    reset(){
        this.elements.resetButton().click()
    }

    submit(){
        this.elements.submitButton().click()
    }
    back(){
        this.elements.backButton().click()
    }

}

module.exports = new HTML5Page()