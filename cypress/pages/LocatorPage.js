class LocatorExamples{
    
    elements = {
        paragraphSet: ()=> cy.get("#div1 > p.normal"),
        paragraphId: ()=> cy.get("#p1"),
        paragraphName: ()=> cy.get('p[name = "pName1"]'),
        nestedText: ()=> cy.get("#div2  p")
    }

}

module.exports = new LocatorExamples()