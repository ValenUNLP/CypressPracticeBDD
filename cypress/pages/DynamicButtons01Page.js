class DynamicButtons01Page{

    elements = {
        button0: ()=> cy.get("#button00"),
        button1: ()=> cy.get("button#button01"),
        button2: ()=> cy.get("button#button02"),
        button3: ()=> cy.get("button#button03"),
    }

}

module.exports = new DynamicButtons01Page()