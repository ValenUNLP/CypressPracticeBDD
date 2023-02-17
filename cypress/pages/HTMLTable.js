class HTMLTABLE{

    elements = {
        table : ()=> cy.get("tbody > tr")
    }

}

module.exports = new HTMLTABLE()