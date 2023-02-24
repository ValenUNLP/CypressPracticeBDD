class CssPseudoClassesPage{

    elements = {
        hoverParagraph: ()=> cy.get("#hoverpara"),
        paragraphText: ()=> cy.get("#hoverparaeffect"),
        hoverDiv: ()=> cy.get("#hoverdivpara"),
        divText: ()=> cy.get("#hoverdivparaeffect")
    }

}

module.exports = new CssPseudoClassesPage()