const DynamicButtons01Page = require("../../pages/DynamicButtons01Page")

describe("DynamicButtons01",()=>{

    const endpoint = "dynamic-buttons-simple.html"

    beforeEach(()=>{
        cy.visit(endpoint)
    })

    describe("Button01",()=>{
        it("Deberia existir 1 boton tipo 1",()=>{
            DynamicButtons01Page.elements.button0().click()
            DynamicButtons01Page.elements.button1().should($buttons =>{
                expect($buttons).to.have.length(1)
            })
        })
        it("Deberia existir mas de 1 boton tipo 1",()=>{
            DynamicButtons01Page.elements.button0().click()
            DynamicButtons01Page.elements.button0().click()
            DynamicButtons01Page.elements.button1().should($buttons =>{
                expect($buttons).to.have.length(2)
            })
        })
    })

    describe("Button02",()=>{
        it("Deberia existir 1 boton tipo 2",()=>{
            DynamicButtons01Page.elements.button0().click()
            DynamicButtons01Page.elements.button1().should($buttons =>{
                expect($buttons).to.have.length(1)
            })
            DynamicButtons01Page.elements.button1().click()
            DynamicButtons01Page.elements.button2().should($buttons =>{
                expect($buttons).to.have.length(1)
            })
        })
        it("Deberia existir mas de 1 boton tipo 2",()=>{
            DynamicButtons01Page.elements.button0().click()

            DynamicButtons01Page.elements.button1().click()
            DynamicButtons01Page.elements.button1().click()

            DynamicButtons01Page.elements.button2().should($buttons =>{
                expect($buttons).to.have.length(2)
            })
        })
    })

    describe("Button02",()=>{
        it("Deberia existir 1 boton tipo 3",()=>{
            DynamicButtons01Page.elements.button0().click()
            DynamicButtons01Page.elements.button1().should($buttons =>{
                expect($buttons).to.have.length(1)
            })
            DynamicButtons01Page.elements.button1().click()
            DynamicButtons01Page.elements.button2().should($buttons =>{
                expect($buttons).to.have.length(1)
            })
            DynamicButtons01Page.elements.button2().click()
            DynamicButtons01Page.elements.button3().should($buttons =>{
                expect($buttons).to.have.length(1)
            })
        })
        it("Deberia existir mas de 1 boton tipo 2",()=>{
            DynamicButtons01Page.elements.button0().click()

            DynamicButtons01Page.elements.button1().click()
            
            DynamicButtons01Page.elements.button2().click()
            DynamicButtons01Page.elements.button2().click()

            DynamicButtons01Page.elements.button3().should($buttons =>{
                expect($buttons).to.have.length(2)
            })
        })
    })
})