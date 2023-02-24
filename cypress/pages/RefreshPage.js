class RefreshPage{
    elements = {
        number: ()=> cy.get("#embeddedrefreshdatevalue")
    }
}  

module.exports = new RefreshPage()