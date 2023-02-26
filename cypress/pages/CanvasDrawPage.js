class CanvasDrawPage{

    elements = {
        canvas: ()=> cy.get("#canvas"),
        eventsList: ()=> cy.get("#commandlist li"),
        xInput: ()=> cy.get("#xnum"),
        yInput: ()=> cy.get("#ynum"),
        sizeInput: ()=> cy.get("#shapesize"),
        colourInput: ()=> cy.get("#colourselect"),
        formInput: ()=> cy.get("#shapeselect"),
        submitButton: ()=> cy.get('input[name= "gobutton"]'),
        clearButton: ()=> cy.get('input[name= "clearbutton"]')
    }

    submitData(x, y, colour, size, shape){
        this.elements.xInput().clear().type(x)
        this.elements.yInput().clear().type(y)
        this.elements.colourInput().select(colour)
        this.elements.sizeInput().clear().type(size)
        this.elements.formInput().select(shape)
    }
}

module.exports = new CanvasDrawPage()