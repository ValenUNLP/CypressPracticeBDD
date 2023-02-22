class BasicAjax{

    elements = {
        categoryInput: ()=> cy.get("#combo1"),
        languageInput: ()=> cy.get("#combo2"),
        submitButton: ()=> cy.get('input[type = "submit"]')
    }

}

module.exports = new BasicAjax()