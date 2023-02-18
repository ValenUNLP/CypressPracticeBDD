class FakeAlert{

    elements = {
        alertBox: ()=> cy.get("#fakealert"),
        alertBoxText: ()=> cy.get("#dialog-text"),
        alertBoxAccept: ()=> cy.get("#dialog-ok"),
        alert: ()=> cy.get('div[role =dialog]'),
        modalBox: ()=> cy.get("#modaldialog"),
        modalBoxText: ()=> cy.get("#dialog-text"),
        modalBoxAccept: ()=> cy.get("#dialog-ok"),
        modal: ()=> cy.get('div[role = "dialog"]')
    }

}

module.exports = new FakeAlert()