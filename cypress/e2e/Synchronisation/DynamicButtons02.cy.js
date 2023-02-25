const DynamicButtons02Page = require("../../pages/DynamicButtons02Page")

describe("DynamicButtons02",()=>{

    const endpoint = "dynamic-buttons-disabled.html"

    beforeEach(()=>{
        cy.visit(endpoint)
    })

    it("Deberia activarse el boton 1", ()=>{
        DynamicButtons02Page.elements.startButton().click()
        DynamicButtons02Page.elements.buttonOne().should($button =>{
            expect($button).not.to.be.disabled
        })
    })

    it("Deberia activarse el boton 2", ()=>{
        DynamicButtons02Page.elements.startButton().click()
        DynamicButtons02Page.elements.buttonOne().click()
        DynamicButtons02Page.elements.buttonTwo().should($button =>{
            expect($button).not.to.be.disabled
        })
    })

    it("Deberia activarse el boton 3", ()=>{
        DynamicButtons02Page.elements.startButton().click()
        DynamicButtons02Page.elements.buttonOne().click()
        DynamicButtons02Page.elements.buttonTwo().click()
        cy.wait(2000)
        DynamicButtons02Page.elements.buttonThree().should($button =>{
            expect($button).not.to.be.disabled
        })
    })

    it("Deberia desactivarse los botones 1, 2 y 3", ()=>{
        DynamicButtons02Page.elements.startButton().click()
        DynamicButtons02Page.elements.buttonOne().click()
        DynamicButtons02Page.elements.buttonTwo().click()
        cy.wait(2000)
        DynamicButtons02Page.elements.buttonThree().click()

        DynamicButtons02Page.elements.buttonOne().should($button =>{
            expect($button).to.be.disabled
        })
        DynamicButtons02Page.elements.buttonTwo().should($button =>{
            expect($button).to.be.disabled
        })
        DynamicButtons02Page.elements.buttonThree().should($button =>{
            expect($button).to.be.disabled
        })
    })

})