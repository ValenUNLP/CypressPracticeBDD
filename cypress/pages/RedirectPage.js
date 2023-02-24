class RedirectPage{
    elements = {
        fiveButton: ()=> cy.get("#delaygotobasic"),
        twoButton: ()=> cy.get("#delaygotobounce"),
        timer: ()=> cy.get("#countdown-render")
    }
}

module.exports = new RedirectPage()