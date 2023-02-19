const IframePage = require("../../pages/IframePage")

describe("Iframes",()=>{
    const endpoint = "iframes-test.html"

    beforeEach(()=>{
        cy.visit(endpoint)
    })

    it("Deberia validar el nombre del titulo de la lista", ()=>{
        IframePage.elements.iFrameListTitle().should($title =>{
            expect($title).to.have.text("iFrame Example List")
        })
    })

    it("Deberia validar el nombre del tercer elemento de la lista", ()=>{
        IframePage.elements.iFrameList().its("0.contentDocument.body").find("li").eq(3).should($item =>{
            expect($item).to.contain("3")
        })
    })

    it("Deberia validar el nombre del header", ()=>{
        IframePage.elements.iFrameHeader().should($header =>{
            expect($header).to.have.text("iFrame Example Header")
        })
    })

    it("Deberia validar contenido del Iframe anidado", ()=>{
        IframePage.elements.nestedIframe().its("0.contentDocument.body").find("h1").should($h1 =>{
            expect($h1).to.have.text("Nested Page Example")
        })

        IframePage.elements.nestedIframe().its("0.contentDocument.body").find("p").should($p =>{
            expect($p).to.contain("This page is used in an iFrame.")
        })
    })

})