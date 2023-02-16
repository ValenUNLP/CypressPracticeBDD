class ElementAttributesPage {
    elements = {
        Paragraph: ()=> cy.get("#domattributes"),
        dinamicParagraph: ()=> cy.get("#jsattributes"),
        dinamicAttributeButton: ()=>  cy.get("button.styled-click-button")
    }

    clickButton(){
        this.elements.dinamicAttributeButton().click({force:true})
    }
}

module.exports = new ElementAttributesPage()