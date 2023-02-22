const DragAndDropPage = require("../../pages/DragAndDropPage")

describe("DragAndDrop",()=>{
    const endpoint = "drag-drop-javascript.html"

    beforeEach(()=>{
        cy.visit(endpoint)
    })

    it("Deberia aparecer el codigo de las letras presionadas", ()=>{
        cy.get("body").type("{e}")
        DragAndDropPage.elements.keyboardList().last().should($key =>{
            expect($key).to.contain(69)
        })

        cy.get("body").type("{v}")

        DragAndDropPage.elements.keyboardList().last().should($key =>{
            expect($key).to.contain(86)
        })
    })
})