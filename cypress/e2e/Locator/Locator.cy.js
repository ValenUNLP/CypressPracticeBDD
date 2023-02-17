const LocatorPage = require("../../pages/LocatorPage")

describe("Locator",()=>{
    const endpoint = "find-by-playground-test.html"
    beforeEach(()=>{
        cy.visit(endpoint)
    })
    
    it("Deberia validar el nombre del primer parrafo",()=>{
        
        LocatorPage.elements.paragraphSet().eq(0).should($paragraph =>{
            expect($paragraph).to.contain("This is a paragraph text")
        })

        LocatorPage.elements.paragraphSet().first().should($paragraph =>{
            expect($paragraph).to.contain("This is a paragraph text")
        })

        LocatorPage.elements.paragraphId().should($paragraph =>{
            expect($paragraph).to.contain("This is a paragraph text")
        })

        LocatorPage.elements.paragraphName().should($paragraph =>{
            expect($paragraph).to.contain("This is a paragraph text")
        })
    })

    it("Deberia localizar el tercer texto anidado y validar su nombre",()=>{
        const NESTED_PARAGRAPH = 3

        cy.get(`div#div${NESTED_PARAGRAPH + 1} > p`).should($paragraph =>{
            expect($paragraph).to.contain("nested para text")
        })

        LocatorPage.elements.nestedText().eq(2).should($paragraph =>{
            expect($paragraph).to.contain("nested para text")
        })
    })
})