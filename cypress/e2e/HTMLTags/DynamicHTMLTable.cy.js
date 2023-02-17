const DynamicHTMLTable = require("../../pages/DynamicHTMLTable")
const data = require("../../fixtures/DynamicHTMLTable.json")

describe("DynamicHTMLTable",()=>{
    
    const endpoint = "tag/dynamic-table.html"

    beforeEach(()=>{
        cy.visit(endpoint)
    })

    it("La tabla deberia tener sus valores por defecto", ()=>{
        for (let i = 1; i <= data[0].length; i++) {
            DynamicHTMLTable.elements.table().find("tr").eq(i).find("td").should($td =>{
                expect($td[0]).to.have.text(data[0][i-1].name)
                expect($td[1]).to.have.text(data[0][i-1].age)
            })
        }
    })

    it("La tabla deberia deberia cambiar sus propiedades y valores", ()=>{
        let json =  JSON.stringify(data[1])
        const id = "newid"
        const title = "newtitle"
        
        DynamicHTMLTable.refreshData(json, title, id)

        cy.get(`#${id} caption`).should($title =>{
            expect($title).to.have.text(title)
        })

        for (let i = 1; i <= data[1].length; i++) {
            cy.get(`#${id} tr`).eq(i).find("td").should($td =>{
                expect($td[0]).to.have.text(data[1][i-1].name)
                expect($td[1]).to.have.text(data[1][i-1].age)
            })
        }
    })
})