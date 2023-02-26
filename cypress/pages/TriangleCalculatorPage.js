class TriangleCalculatorPage{

    elements = {
        firstSide: ()=> cy.get("#side1"),
        secondSide: ()=> cy.get("#side2"),
        thirdSide: ()=> cy.get("#side3"),
        submitButton: ()=> cy.get("#identify-triangle-action"),
        response: ()=> cy.get("#triangle-type")
    }

    submitSides(side1, side2, side3){
        this.elements.firstSide().type(side1)
        this.elements.secondSide().type(side2)
        this.elements.thirdSide().type(side3)
    }
}

module.exports = new TriangleCalculatorPage()