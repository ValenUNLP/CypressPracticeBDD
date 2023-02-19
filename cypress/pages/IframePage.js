class IFramePage{
    elements = {
        iFrameListTitle: ()=> cy.get("h2").eq(0),
        iFrameList: ()=> cy.get("#thedynamichtml"),
        iFrameHeader: ()=> cy.get("h2").eq(1),
        nestedIframe: ()=> cy.get("#theheaderhtml"),
    }
}

module.exports = new IFramePage()