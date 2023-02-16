const ElementAttributesPage = require("../../pages/ElementAttributesPage")

describe("ElementAtrributes",()=>{

    const endpoint = "attributes-test.html"

    beforeEach(()=>{
        cy.visit(`${endpoint}`)
    })

    it("El parrafo deberia tener sus debidos atributos",()=>{
        ElementAttributesPage.elements.Paragraph().should($paragraph =>{
            expect($paragraph).to.have.attr("class", "class-attribute")
            expect($paragraph).to.have.attr("custom-attrib","attrib in source at load")
            expect($paragraph).to.have.attr("title","a paragraph to test attributes on")
            expect($paragraph).to.have.attr("original-title","This used to be the title")
        })
    })

    it("El parrafo dinamico deberia tener sus debidos atributos",()=>{
        let id = 1
        ElementAttributesPage.elements.dinamicParagraph().should($paragraph =>{
            expect($paragraph).to.have.attr("nextid", id)
            expect($paragraph).to.not.have.attr(`custom-${id}`)
            id++
        })
        
        ElementAttributesPage.clickButton()
        

        ElementAttributesPage.elements.dinamicParagraph().should($paragraph =>{
            expect($paragraph).to.have.attr("nextid", id)
            expect($paragraph).to.have.attr(`custom-${id-1}`, `value-${id-1}`)
            id++
        })

        ElementAttributesPage.clickButton()

        ElementAttributesPage.elements.dinamicParagraph().should($paragraph =>{
            expect($paragraph).to.have.attr("nextid", id)
            expect($paragraph).to.have.attr(`custom-${id-2}`, `value-${id-2}`)
            expect($paragraph).to.have.attr(`custom-${id-1}`, `value-${id-1}`)
            id++
        })

    })
})