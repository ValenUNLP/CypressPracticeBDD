const data = require("../../fixtures/Calculator.json")
const CalculatorPage = require("../../pages/CalculatorPage")

describe("Calculator",()=>{

    const endpoint = "calculator"

    beforeEach(()=>{
        cy.visit(endpoint)
    })

    describe("plus",()=>{
        data.plus.forEach(({number1, number2, answer, name})=>{
            it(name,()=>{
                CalculatorPage.elements.function().select("plus")
                CalculatorPage.elements.number1().type(number1)
                CalculatorPage.elements.number2().type(number2)
                CalculatorPage.elements.calculateButton().click()
                CalculatorPage.elements.answer().should($number =>{
                    expect($number).to.contain(answer)
                })
            })
        })
    })

    describe("minus",()=>{
        data.minus.forEach(({number1, number2, answer, name})=>{
            it(name,()=>{
                CalculatorPage.elements.function().select("minus")
                CalculatorPage.elements.number1().type(number1)
                CalculatorPage.elements.number2().type(number2)
                CalculatorPage.elements.calculateButton().click()
                CalculatorPage.elements.answer().should($number =>{
                    expect($number).to.contain(answer)
                })
            })
        })
    })

    describe("times",()=>{
        data.times.forEach(({number1, number2, answer, name})=>{
            it(name,()=>{
                CalculatorPage.elements.function().select("times")
                CalculatorPage.elements.number1().type(number1)
                CalculatorPage.elements.number2().type(number2)
                CalculatorPage.elements.calculateButton().click()
                CalculatorPage.elements.answer().should($number =>{
                    expect($number).to.contain(answer)
                })
            })
        })
    })

    describe("divide",()=>{
        data.divide.forEach(({number1, number2, answer, name})=>{
            it(name,()=>{
                CalculatorPage.elements.function().select("divide")
                CalculatorPage.elements.number1().type(number1)
                CalculatorPage.elements.number2().type(number2)
                CalculatorPage.elements.calculateButton().click()
                CalculatorPage.elements.answer().should($number =>{
                    expect($number).to.contain(answer)
                })
            })
        })
    })
})