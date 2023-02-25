class CalculatorPage{

    elements = {
        number1: ()=> cy.get("#number1"),
        number2: ()=> cy.get("#number2"),
        function: ()=> cy.get("#function"),
        calculateButton: ()=> cy.get("input#calculate"),
        answer: ()=> cy.get("#answer")
    }

}

module.exports = new CalculatorPage()