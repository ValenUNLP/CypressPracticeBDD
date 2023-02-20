class WindowsLinkPage{

    elements={
        ajaxLink: ()=> cy.get("div li > a").eq(0),
        attributesLink: ()=> cy.get("div li > a").eq(1),
    }

}

module.exports = new WindowsLinkPage()