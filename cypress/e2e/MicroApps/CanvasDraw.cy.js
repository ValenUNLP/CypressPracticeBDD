const CanvasDrawPage = require("../../pages/CanvasDrawPage")

const data = require("../../fixtures/DrawData.json")

const rules = {
    Circle: 1,
    Square: 0,
    Black: "#000000",
    Red: "#FF0000",
    Green: "#00FF00",
    Blue: "#0000FF",
    Grey: "#C0C0C0"

}

describe("CanvasDraw",()=>{

    const endpoint = "canvas-javascript-test.html"

    beforeEach(()=>{
        cy.visit(endpoint)
    })

    data.forEach(({name, x, y, colour, shape, size})=>{
        it(name, ()=>{
            const draw = `draw(${rules[shape]},${x},${y},${size},${rules[colour]})`
            CanvasDrawPage.submitData(x,y,colour,size,shape)
            CanvasDrawPage.elements.submitButton().click()
            CanvasDrawPage.elements.eventsList().last().should($event =>{
                expect($event).to.have.text(draw)
            })
        })
    })

    it("Deberia aparecer el evento clear()", ()=>{
        CanvasDrawPage.elements.clearButton().click()
            CanvasDrawPage.elements.eventsList().last().should($event =>{
                expect($event).to.have.text("clear()")
            })
    })
    
})