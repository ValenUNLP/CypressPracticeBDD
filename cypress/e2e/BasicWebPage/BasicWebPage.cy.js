
import BasicWebPage from "../../pages/BasicWebPage"

describe("BasicWebPage",()=>{
    const endpoint = "basic-web-page-test.html"

    beforeEach(()=>{
        cy.visit(`${endpoint}`)
    })

    it("La URL deberia coincidir con el endpoint",()=>{

        cy.url().should($url =>{
            expect($url).to.have.string(endpoint)
        })
    })

    it("Los parrafos deberian tener sus textos",()=>{
        BasicWebPage.elements.firstParagraph().should($paragraph =>{
            expect($paragraph).to.have.text("A paragraph of text")
        })
        BasicWebPage.elements.secondParagraph().should($paragraph =>{
            expect($paragraph).to.have.text("Another paragraph of text")
        })
    })
})