const WindowsLinkPage = require("../../pages/WindowsLinkPage")

describe("WindowLink",()=>{

    const endpoint = "windows-test.html"

    beforeEach(()=>{
        cy.visit(endpoint)
    })

    it("Deberia validar el nombre de la ventana inicial", ()=>{
        cy.window().its("name").should($name =>{
            expect($name).to.have.string("windowsindex")
        })
    })

    it("Deberia validar el nombre de la ventana ajax", ()=>{
        WindowsLinkPage.elements.ajaxLink().invoke('removeAttr', 'target').click()
        cy.window().its("name").should($name =>{
            expect($name).to.have.string("basicajax")
        })
    })

    it("Deberia validar que la ventana attributes no posee nombre", ()=>{
        WindowsLinkPage.elements.attributesLink().invoke('removeAttr', 'target').click()
        cy.window().its("name").should($name =>{
            expect($name).to.have.string("")
        })
    })
})