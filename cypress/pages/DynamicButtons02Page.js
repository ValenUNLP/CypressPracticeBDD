class DynamicButtons02Page{

    elements = {
        startButton: ()=> cy.get("#button00"),
        buttonOne: ()=> cy.get("#button01"),
        buttonTwo: ()=> cy.get("#button02"),
        buttonThree: ()=> cy.get("#button03"),
    }

}

module.exports = new DynamicButtons02Page()