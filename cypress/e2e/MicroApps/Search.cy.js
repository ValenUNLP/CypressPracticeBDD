const SearchPage = require("../../pages/SearchPage")

describe('Search', () => {
    
    const endpoint = "search"
    
    beforeEach(()=>{
        cy.visit(endpoint)
    })

    it("La pagina deberia guardar la fecha de la busqueda, que se busco y cuantas veces se busco informacion", ()=>{
        let searchElementCount = 0
        let title = "Valen1"
        let title2 = "Valen2"
        SearchPage.submitData(title)
        cy.reload()
        SearchPage.elements.lastVisitData().should($text =>{
            expect($text).to.contain(title)
            expect($text).to.contain(searchElementCount)
        })

        SearchPage.submitData(title2)
        searchElementCount++

        cy.reload()

        SearchPage.elements.lastVisitData().should($text =>{
            expect($text).to.contain(title2)
            expect($text).to.contain(searchElementCount)
        })
        
    })
})