const CssPseudoClassesPage = require("../../pages/CssPseudoClassesPage")
import "cypress-real-events"

describe("PseudoClasses",()=>{

    const endpoint = "csspseudo/css-hover.html"

    beforeEach(()=>{
        cy.visit(endpoint)
    })

    it("Deberia aparecer el texto debajo del primer boton",()=>{
        CssPseudoClassesPage.elements.paragraphText().should($p =>{
            expect($p).not.to.be.visible
        })
        CssPseudoClassesPage.elements.hoverParagraph().realHover()

        CssPseudoClassesPage.elements.paragraphText().should($p =>{
            expect($p).to.be.visible
            expect($p).have.text("You can see this paragraph now that you hovered on the above 'button'.")
        })
    })

    it("Deberia aparecer el texto debajo del primer segundo boton",()=>{
        CssPseudoClassesPage.elements.divText().should($div =>{
            expect($div).not.to.be.visible
        })
        CssPseudoClassesPage.elements.hoverDiv().realHover()

        CssPseudoClassesPage.elements.divText().should($div =>{
            expect($div).to.be.visible
            expect($div).have.text("You can see this child div content now that you hovered on the above 'button'.")
        })
    })
})