class ExpandingDivPage{

    elements = {
        div: ()=> cy.get("div.expand"),
        link: ()=> cy.get('a[href = "expandeddiv.html"]')
    }

}

module.exports = new ExpandingDivPage()