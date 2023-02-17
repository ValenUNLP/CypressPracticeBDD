const data = require("../../fixtures/HTMLTable.json")
const HTMLTable = require("../../pages/HTMLTable")

describe("HTMLTable",()=>{

    const endpoint = "tag/table.html"

    beforeEach(()=>{
        cy.visit(endpoint)
    })
    
    it("La tabla deberia tener sus debidos nombres y montos",()=>{
        for (let i = 1; i <= 4; i++) {
            HTMLTable.elements.table().eq(i).find("td").should($td =>{
                expect($td[0]).to.have.text(data.Name[i-1])
                expect($td[1]).to.have.text(data.Amount[i-1])
            })  
        }
    })
})

