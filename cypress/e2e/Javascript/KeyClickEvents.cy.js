const KeyClickEventsPage = require("../../pages/KeyClickEventsPage")

describe("KeyClickEvents", ()=>{
    const endpoint = "key-click-display-test.html"

    beforeEach(()=>{
        cy.visit(endpoint)
    })

    it("Deberia aparecer el codigo de una letra cuando esta es presionada", ()=>{
        let cantKeys = 0
        KeyClickEventsPage.elements.body().type("{a}")
        
        KeyClickEventsPage.elements.list().should($key =>{
            cantKeys = cantKeys + 2
            expect($key).to.have.length(cantKeys)
            let pos = cantKeys - 1
            expect($key[pos]).to.have.text(" up 65")
            expect($key[pos-1]).to.have.text(" down 65")
        })

        KeyClickEventsPage.elements.body().type("{b}")
        
        KeyClickEventsPage.elements.list().should($key =>{
            cantKeys = cantKeys + 2
            expect($key).to.have.length(cantKeys)
            let pos = cantKeys - 1
            expect($key[pos]).to.have.text(" up 66")
            expect($key[pos-1]).to.have.text(" down 66")
        })
    })

    it.only("Deberia crearse un evento click cuando el boton 'click' se presiona",()=>{
        KeyClickEventsPage.elements.clickButton().click()

        let cantKeys = 0

        KeyClickEventsPage.elements.list().should($clicks =>{
            cantKeys++
            expect($clicks).to.have.length(cantKeys)
            let pos = cantKeys - 1
            expect($clicks[pos]).to.have.text("click")
        })

        KeyClickEventsPage.elements.clickButton().click()

        KeyClickEventsPage.elements.list().should($clicks =>{
            cantKeys++
            expect($clicks).to.have.length(cantKeys)
            let pos = cantKeys - 1
            expect($clicks[pos]).to.have.text("click")
        })

    })
})