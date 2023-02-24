const CssSizing = require("../../pages/CssSizing")
const data = require("../../fixtures/Sizes.json")
describe("Sizing",()=>{

    const endpoint = "css-media-queries.html"
    const height = 745.60
    beforeEach(()=>{
        cy.visit(endpoint)
    })

    it("No deberia aparecer ningun texto de tamaño", ()=>{
        cy.viewport(399, height)
        CssSizing.elements.sizes().each(($size)=>{
            expect($size).not.to.visible
        })
    })

    data.forEach((test)=>{
        it( `Deberia aparecer el texto de ${test.width}px de ancho`, ()=>{
            cy.viewport(test.width, height)
            CssSizing.elements.sizes().eq(test.pos).should($h2 =>{
                expect($h2).to.be.visible
            })

            data.forEach((data)=>{
                if(data.pos < test.pos){
                    CssSizing.elements.sizes().eq(data.pos).should($h2 =>{
                        expect($h2).to.not.visible
                    })
                }
            })
        })
    })
})