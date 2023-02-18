const NestedFramesPage = require("../../pages/NestedFramesPage")


describe("NestedFrames", ()=>{

    const endpoint = "frames/frames-test.html"

    beforeEach(()=>{
        cy.visit(endpoint)
    })

    it("Deberia validar que el primer elemento de el Frame de la izquierda tenga su debido nombre",()=>{
        NestedFramesPage.elements.leftFrame().its("0.contentDocument.body").find("h1").should($title =>{
            expect($title).to.have.text("Left")
        })

        NestedFramesPage.elements.leftFrame().its("0.contentDocument.body").find("li").eq(0).should($item =>{
            expect($item).to.contain("0")
        })
    })

    it("Deberia validar que el elemento numero 19 del Frame del medio tenga su debido nombre",()=>{
        NestedFramesPage.elements.middleFrame().its("0.contentDocument.body").find("h1").should($title =>{
            expect($title).to.have.text("Middle")
        })

        NestedFramesPage.elements.middleFrame().its("0.contentDocument.body").find("li").eq(19).should($item =>{
            expect($item).to.contain("19")
        })
    })

    it("Deberia validar que el ultimo elemento del ultimo Frame tenga su debido nombre",()=>{
        NestedFramesPage.elements.rightFrame().its("0.contentDocument.body").find("h1").should($title =>{
            expect($title).to.have.text("Right")
        })

        NestedFramesPage.elements.rightFrame().its("0.contentDocument.body").find("li").eq(39).should($item =>{
            expect($item).to.contain("39")
        })
    })

})