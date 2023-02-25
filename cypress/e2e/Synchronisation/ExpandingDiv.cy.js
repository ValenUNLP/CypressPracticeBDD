const ExpandingDivPage = require("../../pages/ExpandingDivPage")
import "cypress-real-events";

describe("ExapndingDiv",()=>{

    const endpoint = "expandingdiv.html"

    beforeEach(()=>{
        cy.visit(endpoint)
    })

    it("Deberia expandirse el div", ()=>{
        ExpandingDivPage.elements.link().should($link =>{
            expect($link).not.to.be.visible
        })

        ExpandingDivPage.elements.div().realHover()

        ExpandingDivPage.elements.link().should($link =>{
            expect($link).to.be.visible
        })

    })

})