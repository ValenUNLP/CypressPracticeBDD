class SecondRedirectPage{
    elements = {
        confirmText: ()=> cy.get("div.explanation > p")
    }
}

module.exports = new SecondRedirectPage()