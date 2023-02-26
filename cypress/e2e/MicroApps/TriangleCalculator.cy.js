const data = require("../../fixtures/TriangleCalculator.json")
const TriangleCalculatorPage = require("../../pages/TriangleCalculatorPage")

describe("TriangleCalculator",()=>{

    const endpoint = "apps/triangle/triangle001.html"

    beforeEach(()=>{
        cy.visit(endpoint)
    })
    
    describe("Error",()=>{
        data.error.forEach(({side1,side2,side3,answer,name})=>{
            it(name, ()=>{
                TriangleCalculatorPage.submitSides(side1, side2, side3)
                TriangleCalculatorPage.elements.submitButton().click()
                TriangleCalculatorPage.elements.response().should(text =>{
                    expect(text).to.contain(answer)
                })
            })
        })
    })

    describe("Scalene",()=>{
        data.Scalene.forEach(({side1,side2,side3,answer,name})=>{
            it(name, ()=>{
                TriangleCalculatorPage.submitSides(side1, side2, side3)
                TriangleCalculatorPage.elements.submitButton().click()
                TriangleCalculatorPage.elements.response().should(text =>{
                    expect(text).to.contain(answer)
                })
            })
        })
    })

    describe("Isosceles",()=>{
        data.Isosceles.forEach(({side1,side2,side3,answer,name})=>{
            it(name, ()=>{
                TriangleCalculatorPage.submitSides(side1, side2, side3)
                TriangleCalculatorPage.elements.submitButton().click()
                TriangleCalculatorPage.elements.response().should(text =>{
                    expect(text).to.contain(answer)
                })
            })
        })
    })

    describe("Equilateral",()=>{
        data.Equilateral.forEach(({side1,side2,side3,answer,name})=>{
            it(name, ()=>{
                TriangleCalculatorPage.submitSides(side1, side2, side3)
                TriangleCalculatorPage.elements.submitButton().click()
                TriangleCalculatorPage.elements.response().should(text =>{
                    expect(text).to.contain(answer)
                })
            })
        })
    })
    
})