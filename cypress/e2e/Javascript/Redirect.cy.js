const RedirectPage = require("../../pages/RedirectPage")
const SecondRedirectPage = require("../../pages/secondRedirectPage")

describe("Redirect",()=>{

    const endpoint = "javascript-redirect-test.html"

    beforeEach(()=>{
        cy.visit(endpoint)
    })

    it("El boton deberia redireccionar a otra pagina en 5 segundos y no antes", ()=>{
        RedirectPage.elements.timer().should($timer =>{
            expect($timer).not.to.be.visible
        })
        RedirectPage.elements.fiveButton().click()
        RedirectPage.elements.timer().should($timer =>{
            expect($timer).to.be.visible
        })
        cy.wait(4000)
        cy.url().should($url =>{
            expect($url).to.eq("https://testpages.herokuapp.com/styled/javascript-redirect-test.html")
        })
        cy.wait(1000)
        cy.url().should($url =>{
            expect($url).to.eq("https://testpages.herokuapp.com/styled/redirected.html")
        })
        
        SecondRedirectPage.elements.confirmText().should($text =>{
            expect($text).to.contain("You have been successfully redirected.")
        })

    })

    it("El boton deberia redireccionar a otra pagina en 2 segundos y no antes", ()=>{
        RedirectPage.elements.timer().should($timer =>{
            expect($timer).not.to.be.visible
        })
        RedirectPage.elements.twoButton().click()
        RedirectPage.elements.timer().should($timer =>{
            expect($timer).to.be.visible
        })
        cy.wait(500)
        cy.url().should($url =>{
            expect($url).to.eq("https://testpages.herokuapp.com/styled/javascript-redirect-test.html")
        })
        cy.wait(1500)
        cy.url().should($url =>{
            expect($url).to.eq("https://testpages.herokuapp.com/styled/redirected.html")
        })
        SecondRedirectPage.elements.confirmText().should($text =>{
            expect($text).to.contain("You have been successfully redirected.")
        })
    })
})