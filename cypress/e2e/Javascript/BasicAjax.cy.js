const BasicAjaxPage = require("../../pages/BasicAjaxPage")

describe("BasicAjax",()=>{
    const endpoint = "basic-ajax-test.html"
    const selects = {
        first: "Server",
        second: "Java"
    }

    beforeEach(()=>{
        cy.visit(endpoint)
    })

    it("Deberia completar la opciones 'Server' y 'Java'",()=>{
        BasicAjaxPage.elements.categoryInput().select(selects.first)
        
        BasicAjaxPage.elements.languageInput().select(selects.second)
    })
})