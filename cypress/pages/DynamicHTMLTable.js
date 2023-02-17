class HTMLDynamicTable{

    elements = {
        table: ()=> cy.get("#dynamictable"),
        tableTitle: ()=> cy.get("table > caption"),
        inputData: ()=> cy.get("#jsondata"),
        inputTableTitle: ()=> cy.get("#caption"),
        inputTableId: ()=> cy.get("#tableid"),
        refreshButton: ()=> cy.get("button"),
        openSettings: ()=> cy.get("summary")
    }

    refreshData(json, title, id){
        this.elements.openSettings().click()

        this.elements.inputData().clear().type(json, { parseSpecialCharSequences: false })
        this.elements.inputTableTitle().clear().type(title)
        this.elements.inputTableId().clear().type(id)

        this.elements.refreshButton().click()
    }



}
module.exports = new HTMLDynamicTable()