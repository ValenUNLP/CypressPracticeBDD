class SearchPage{

    elements = {
        inputSearch: ()=> cy.get('input[type = "text"]'),
        submitButton: ()=> cy.get('input[type = "submit"]'),
        lastVisitData: ()=> cy.get("p.smaller-text")
    }

    submitData(search){
        this.elements.inputSearch().clear().type(search)
        this.elements.submitButton().click()
    }

}

module.exports = new SearchPage()