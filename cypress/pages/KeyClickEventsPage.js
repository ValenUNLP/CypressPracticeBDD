class KeyClickEventsPage{

    elements = {
        clickButton: ()=> cy.get("#button"),
        body: ()=> cy.get("body"),
        list: ()=> cy.get("#events p")
    }

}

module.exports = new KeyClickEventsPage()