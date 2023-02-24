const RefreshPage = require("../../pages/RefreshPage")

describe("Refresh",()=>{
    const endpoint = "refresh"

    beforeEach(()=>{
        cy.visit(endpoint)
    })

    it("El numero deberia cambiar a uno mayor al refrescar la pagina", function(){
        
        RefreshPage.elements.number().invoke("text").then(parseFloat).then($number =>{
            const actualNumber = $number
            cy.wrap(actualNumber).as("actualNumber")
        })

        cy.reload()

        RefreshPage.elements.number().invoke("text").then(parseFloat).should($number =>{
            const newNumber = $number
            expect(newNumber).to.be.greaterThan(this.actualNumber)
        })
        
    })
})